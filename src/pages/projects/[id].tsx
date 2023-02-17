import { fromWei, toWei, truncate } from '@/functions';
import { useActiveWeb3React, useIDOContract } from '@/hooks';
import { KYCSTATUS, useKYC } from '@/hooks/useKYC';
import {
  useClaimedDetails,
  useIsUserWhiteListed,
  useLaunchpads,
  useSinglePoolData,
  useUserRemainingAllocation,
} from '@/hooks/useLaunchpadPools';
import { useUsersLevel, useUsersPoolRegisterLevel } from '@/hooks/useLevels';
import usePoolTimings from '@/hooks/usePoolTimings';
import { NATIVE } from '@/sdk';
import { useWalletModalToggle } from '@/state/application/hooks';
import { useTransactionAdder } from '@/state/transactions/hooks';
import { useETHBalances } from '@/state/wallet/hooks';
import moment from 'moment-timezone';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Modal, Nav, Spinner, Tab } from 'react-bootstrap';
import useSWR from 'swr';

export default function Project() {
  const [buyAmount, setBuyAmount] = useState('');
  const [openBuy, setOpenBuy] = useState(false);
  const [buying, setBuying] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const {
    query: { id },
  } = useRouter();
  const allPools = useLaunchpads();

  const pool = allPools.find((pool) => pool.address === id.toString());
  const { data: poolData } = useSWR(`pool/${pool?.address}`, async () => {
    if (!pool) return null;
    return fetch(`https://infura-ipfs.io/ipfs/${pool?.ipfsHash}`).then((res) =>
      res.json(),
    );
  });
  const idoContract = useIDOContract(id.toString());
  const toggleWalletModal = useWalletModalToggle();

  const { account, chainId } = useActiveWeb3React();
  const kyc = useKYC();
  const userEthBalance = useETHBalances(account ? [account] : [])?.[
    account ?? ''
  ];
  const data = useSinglePoolData(pool?.address);
  const {
    isActive,
    isEnded,
    isUpcomming,
    registerStartsIn,
    registerEndsIn,
    registerEndedAgo,
    saleLiveIn,
    saleEndedAgo,
    saleEndsIn,
    isRegisterTime,
  } = usePoolTimings(data);
  const addTransaction = useTransactionAdder();

  const userTier = useUsersLevel();
  const isUserWhitelisted = useIsUserWhiteListed(id.toString());
  const userRegisterLevel = useUsersPoolRegisterLevel(id.toString());
  const userAllocations = useUserRemainingAllocation(id.toString());
  const claimDetails = useClaimedDetails(id.toString());
  const cap = data ? fromWei(data.rate.mul(data.tokensForSale), 36) : 0;
  const capSold = data
    ? Number(fromWei(data.tokensSold)) * Number(fromWei(data.rate))
    : 0;
  const progress = data
    ? (Number(fromWei(data.tokensSold)) / Number(fromWei(data.tokensForSale))) *
      100
    : 0;
  const tokensUSDValueBought =
    data && userAllocations.balance
      ? Number(fromWei(userAllocations.balance)) * Number(fromWei(data.rate))
      : 0;
  const tokenBought =
    userAllocations.balance && Number(userAllocations.balance) > 0
      ? fromWei(userAllocations.balance)
      : 0;

  const maxSellAllocation =
    data && data?.isFcfsTime ? Number(fromWei(data.maxSell)) : 0;

  const whiteListAllocation =
    data?.whitelistEnabled && isUserWhitelisted
      ? Number(fromWei(data.maxSell))
      : 0;

  const levelsAllocation =
    userAllocations?.maxAllocation && data
      ? (
          Number(fromWei(userAllocations.maxAllocation)) +
          whiteListAllocation +
          maxSellAllocation -
          tokensUSDValueBought
        ).toFixed(6)
      : 0;

  const maxBuy = Math.max(Math.min(levelsAllocation, Number(cap)));
  const minBuy = data ? Number(fromWei(data.minSell)) : 0;
  const nativePriceUSD = data ? Number(fromWei(data.getNativePriceUSD, 8)) : 0;
  const nativeRequiredToBuy =
data?    (Number(buyAmount) * 1e8) / Number(data.getNativePriceUSD):0;

  function handleChange(e) {
    const value = Math.max(Math.min(e.target.value, maxBuy), minBuy);

    setBuyAmount(value);
  }
  const ref = useRef();
  const loadBlockpassWidget = () => {
    const blockpass = new window.BlockpassKYCConnect(
      process.env.NEXT_PUBLIC_KYC_CLIENT_ID, // service client_id from the admin console
      {
        refId: account, // assign the local user_id of the connected user
      },
    );

    blockpass.startKYCConnect();
    blockpass.on('KYCConnectSuccess', () => {
      //add code that will trigger when data have been sent.
    });
  };

  useEffect(() => {
    if (ref.current && account) loadBlockpassWidget();
    return () => {};
  }, [ref.current, account, kyc]);
  async function buyTokens() {
    try {
      setBuying(true);
      if (Number(userEthBalance.toSignificant(18)) < nativeRequiredToBuy) {
        return;
      }
      const tx = await idoContract['buyTokens()']({
        value: toWei(truncate(nativeRequiredToBuy.toString(), 18)),
      });
      addTransaction(tx, { summary: 'Bought ' + poolData.name + ' Tokens' });
      setBuyAmount('');
      setBuying(false);
    } catch (error) {
      alert(error?.data?.message);

      setBuying(false);
      console.error(error);
    }
  }
  async function register() {
    try {
      const tx = await idoContract.register();
      addTransaction(tx, { summary: 'Registered for ' + poolData.poolName });
    } catch (error) {
      alert(error?.data?.message);
      console.error(error);
    }
  }
  async function claimTokens(index) {
    try {
      setIsClaiming(true);
      const tx = await idoContract.claim(account, index);
      addTransaction(tx, { summary: 'Claimed Tokens ' + poolData.poolName });
      await tx.wait();
      setIsClaiming(false);
    } catch (error) {
      setIsClaiming(false);
      alert(error?.data?.message);
      console.error(error);
    }
  }
  return (
    <div className="w-full pp-detail-page">
      {data && poolData ? (
        <>
          <div className="pp-detail-banner">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-5">
                  <div className="pp-card-top animation">
                    <div className="icon-box">
                      <span>
                        <img
                          src={poolData.logoUrl}
                          alt={poolData.projectName}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="ms-0">
                    <div className="pp-card-top">
                      <div className="title-box">
                        <h2>
                          {poolData.projectName}
                          {poolData.website && (
                            <a href={poolData.website} target="_blank">
                              <i className="fas fa-globe" />
                            </a>
                          )}
                          {poolData.twitter && (
                            <a href={poolData.twitter} target="_blank">
                              <i className="fab fa-twitter" />
                            </a>
                          )}
                          {poolData.medium && (
                            <a href={poolData.medium} target="_blank">
                              <i className="fab fa-medium-m" />
                            </a>
                          )}
                          {poolData.telegram && (
                            <a href={poolData.telegram} target="_blank">
                              <i className="fab fa-telegram" />
                            </a>
                          )}
                        </h2>
                        <div className="items-morex">
                          {isActive && (
                            <span className="pp-status-open">
                              <i className="mdi mdi-circle" /> Active
                            </span>
                          )}
                          {isUpcomming && (
                            <span className="pp-status-opening">
                              <i className="mdi mdi-circle" /> Upcoming
                            </span>
                          )}
                          {isEnded && (
                            <span className="pp-status-closed">
                              <i className="mdi mdi-circle" /> Ended
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <p className="text-muted">{poolData.description}</p>
                    </div>
                    <div>
                      {account && !isEnded && (
                        <>
                          {kyc.status == KYCSTATUS.SUBMIT && (
                            <button
                              className="btn btn-primary btn-sm"
                              ref={ref}
                              id="blockpass-kyc-connect"
                            >
                              Verify Kyc
                            </button>
                          )}
                          {(kyc.status == KYCSTATUS.WAITING ||
                            kyc.status == KYCSTATUS.INREVIEW) && (
                            <div className="px-3 py-2 mb-0 text-center p-sidebar-card p-card-top me-md-3 me-2">
                              <div>
                                KYC &nbsp;
                                <span className="capitalize">{kyc.status}</span>
                                <Spinner
                                  className="ml-2"
                                  size="sm"
                                  animation="border"
                                  style={{ borderWidth: '1px' }}
                                />
                              </div>
                            </div>
                          )}
                        </>
                      )}
                      {kyc.status === KYCSTATUS.BLOCKED && (
                        <div className="px-3 py-2 mb-0 text-center p-sidebar-card p-card-top me-md-3 me-2">
                          <div>You have been blocked by KYC.</div>
                        </div>
                      )}
                      {(kyc.status === KYCSTATUS.INCOMPLETE ||
                        kyc.status === KYCSTATUS.RESUBMIT) && (
                        <div className="flex flex-col justify-center">
                          <button
                            className="btn btn-primary btn-sm"
                            ref={ref}
                            id="blockpass-kyc-connect"
                          >
                            Resubmit Kyc
                          </button>
                          <div className="pp-card-info">
                            <div className="pp-card-col">
                              <p>Your profile is incomplete.</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {!account && (
                        <button
                          className="btn btn-primary me-2"
                          onClick={toggleWalletModal}
                        >
                          Connect Wallet
                        </button>
                      )}

                      {account && kyc.status == KYCSTATUS.APPROVED && (
                        <>
                          {isRegisterTime && data.levelsEnabled && (
                            <div className="flex flex-col justify-center">
                              <button
                                className="btn btn-primary max-w-[200px]"
                                onClick={register}
                                disabled={
                                  !account ||
                                  userTier?.[0] == 'none' ||
                                  userRegisterLevel === userTier?.[0]
                                }
                              >
                                Register
                              </button>
                              {userTier?.[0] == 'none' ? (
                                <div className="pp-card-info">
                                  <div className="pp-card-col">
                                    <p>Your level is too low stake more.</p>
                                  </div>
                                </div>
                              ) : (
                                <>
                                  {userTier?.[0] == 'none' ||
                                    (userRegisterLevel === userTier?.[0] && (
                                      <div className="pp-card-info">
                                        <div className="pp-card-col">
                                          <p>
                                            Already registered for this pool.
                                          </p>
                                        </div>
                                      </div>
                                    ))}
                                </>
                              )}
                            </div>
                          )}
                          {isActive && (
                            <div className="flex flex-col justify-center">
                              <button
                                onClick={() => setOpenBuy(true)}
                                className="btn btn-primary max-w-[200px]"
                                disabled={
                                  capSold >= cap ||
                                  (levelsAllocation <= 0 &&
                                    data?.whitelistEnabled &&
                                    !isUserWhitelisted &&
                                    !data.isFcfsTime)
                                }
                              >
                                <span>Buy Tokens</span>
                              </button>
                              {capSold >= cap ? (
                                <div className="pp-card-info">
                                  <div className="pp-card-col">
                                    <p>Cap Reached.</p>
                                  </div>
                                </div>
                              ) : (
                                <>
                                  {levelsAllocation <= 0 &&
                                    data?.whitelistEnabled &&
                                    !isUserWhitelisted &&
                                    !data.isFcfsTime && (
                                      <div className="pp-card-info">
                                        <div className="pp-card-col">
                                          <p>You are not whitelisted.</p>
                                        </div>
                                      </div>
                                    )}
                                </>
                              )}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    <div />
                  </div>
                </div>
                <div className="col-lg-6 col-md-7">
                  <div className="mx-auto card card-img-holder bg-gradient-danger mx-lg-0">
                    <div className="px-3 py-2 card-body">
                      <div className="mt-2 pp-card-info">
                        <div className="pp-card-col">
                          Your balance
                          <br />
                          <div className="d-flex justify-content-between align-items-center">
                            <h4 className="mb-0">
                              <strong id="idtrxBalance">
                                {userEthBalance
                                  ? userEthBalance.toSignificant(8)
                                  : 0}
                                &nbsp;
                                {NATIVE[chainId].symbol}
                              </strong>
                            </h4>
                          </div>
                        </div>
                        <div className="pp-card-col">
                          Your tier
                          <br />
                          <h4 className="mb-0 text-uppercase">
                            {userTier ? userTier?.[0] : '-'}
                          </h4>
                        </div>
                      </div>
                      <hr className="mb-2" />
                      <div className="mt-2 pp-card-info">
                        <div>
                          {isActive && 'ACTIVE'}
                          {isUpcomming && 'UPCOMING'}
                          {isEnded && 'ENDED'}
                        </div>
                      </div>
                      <hr className="mt-0 mb-2" />
                      {data.levelsEnabled && Number(data.registerTime) > 0 && (
                        <>
                          <div className="mt-2 pp-card-info">
                            <div className="pp-card-col">
                              <b>
                                {registerStartsIn &&
                                  `Registration Starts in ${registerStartsIn}`}
                                {registerEndsIn &&
                                  `Registration Ends in ${registerEndsIn}`}
                                {registerEndedAgo &&
                                  `Registration Ended ${registerEndedAgo}`}
                              </b>
                            </div>
                          </div>
                          <hr className="mt-0 mb-2" />
                        </>
                      )}
                      <div className="mt-2 pp-card-info">
                        <div className="pp-card-col">
                          <b>
                            {saleLiveIn && `Sale Starts in ${saleLiveIn}`}
                            {saleEndsIn && `Sale Ends in ${saleEndsIn}`}
                            {saleEndedAgo && `Sale Ended ${saleEndedAgo}`}
                          </b>
                        </div>
                      </div>
                      <hr className="mt-2 mb-2" />
                      <div className="pp-card-info">
                        <div className="d-flex justify-content-between w-100">
                          <div className="pp-card-col">
                            Swapped
                            <br />
                            <b id="idUseParticipation">
                              {tokensUSDValueBought}
                              &nbsp;
                              {'USD'}
                            </b>
                            <div>
                              <span>
                                {fromWei(userAllocations.balance)}{' '}
                                {poolData?.symbol ?? 'TBA'}{' '}
                              </span>
                            </div>
                          </div>
                          <div className="pp-card-col w-200px">
                            Remaining Allocation:
                            <br />
                            <b id="idBusdMaxBuy">
                              {maxBuy}
                              &nbsp;USD
                            </b>
                          </div>
                        </div>
                      </div>
                      <hr className="mt-2 mb-2" />
                      <div className="pp-card-info">
                        <div className="d-flex justify-content-between w-100">
                          <div className="pp-card-col w-200px">
                            Swap progress
                            <br />
                            <div className="pp-card-progress">
                              <div
                                className="pp-card-progress-percent"
                                style={{ width: `${progress.toString()}%` }}
                              />
                              <div className="pp-card-progress-label">
                                <span>
                                  <b>{progress.toString()}%</b>
                                </span>
                                <span>
                                  {' '}
                                  {Number(fromWei(data.tokensSold)) *
                                    Number(fromWei(data.rate))}
                                  /{cap} USD
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tab.Container id="project-details-tabs" defaultActiveKey={'home'}>
            <div className="pt-1 pb-5 pp-detail-content">
              <div className="container">
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="home"> Project details</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="schedule">Schedule</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="allocation"> Your Allocation</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <div className="tab-content" id="myTabContent">
                    <Tab.Pane eventKey="home">
                      <div className="py-3">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="card">
                              <div className="card-header">
                                Pool information
                              </div>
                              <div className="p-0 card-body">
                                <div className="table-responsive">
                                  <table className="table mb-0 pp-table-info">
                                    <tbody>
                                      <tr>
                                        <td>Start Time</td>
                                        <td className="text-right">
                                          {moment
                                            .unix(data.startTime)
                                            .format('YYYY-MM-DD HH:mm:ss')}{' '}
                                          UTC{' '}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Closes</td>
                                        <td className="text-right">
                                          {moment
                                            .unix(data.getEndTime)
                                            .format('YYYY-MM-DD HH:mm:ss')}{' '}
                                          UTC
                                        </td>
                                      </tr>
                                      {Number(data.fcfsDuration) > 0 && (
                                        <tr>
                                          <td>FCFS Opens</td>
                                          <td className="text-right">
                                            {moment
                                              .unix(data.getEndTime)
                                              .subtract(
                                                data.fcfsDuration,
                                                'seconds',
                                              )
                                              .utc()
                                              .format(
                                                'YYYY-MM-DD HH:mm:ss',
                                              )}{' '}
                                            UTC
                                          </td>
                                        </tr>
                                      )}

                                      <tr>
                                        <td>Swap Rate</td>
                                        <td>
                                          <span
                                            id="idBusdConvert"
                                            style={{
                                              textTransform: 'uppercase',
                                            }}
                                          >
                                            1 USD ={' '}
                                            {1 / Number(fromWei(data.rate))}{' '}
                                            {poolData.symbol ?? 'TBA'}
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Cap</td>
                                        <td>
                                          <span
                                            style={{
                                              textTransform: 'uppercase',
                                            }}
                                          >
                                            {cap} USD
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Total Users Participated</td>
                                        <td className="text-right">
                                          {data.participants.toString()}{' '}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Total Funds Swapped</td>
                                        <td className="text-right">
                                          {fromWei(
                                            data.tokensSold.mul(data.rate),
                                            36,
                                          )}{' '}
                                          USD
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Access Type</td>
                                        <td className="text-right">
                                          {data.levelsEnabled && (
                                            <>Levels,&nbsp;</>
                                          )}
                                          {data.whitelistEnabled && (
                                            <>Whitelist&nbsp;</>
                                          )}
                                          {!data.whitelistEnabled &&
                                            !data.levelsEnabled && (
                                              <>Public&nbsp;</>
                                            )}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 col-md-6 mt-md-0">
                            <div className="card">
                              <div className="card-header">
                                Token information
                              </div>
                              <div className="p-0 card-body">
                                <div className="table-responsive">
                                  <table className="table mb-0 pp-table-info">
                                    <tbody>
                                      <tr>
                                        <td>Name</td>
                                        <td className="text-right">
                                          {poolData?.name ?? 'TBA'}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Token Symbol</td>
                                        <td className="text-right">
                                          {poolData?.symbol ?? 'TBA'}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <br />
                                        </td>
                                        <td />
                                      </tr>
                                      <tr>
                                        <td>
                                          <br />
                                        </td>
                                        <td />
                                      </tr>
                                      <tr>
                                        <td>
                                          <br />
                                        </td>
                                        <td className="text-right" />
                                      </tr>
                                      <tr>
                                        <td>
                                          <br />
                                        </td>
                                        <td />
                                      </tr>
                                      <tr>
                                        <td>
                                          <br />
                                        </td>
                                        <td />
                                      </tr>
                                      <tr>
                                        <td>
                                          <br />
                                        </td>
                                        <td />
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="schedule">
                      <div className="py-3">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="card">
                              <div className="p-0 card-body">
                                <div className="table-responsive">
                                  <table className="table mb-0 pp-table-info">
                                    <tbody>
                                      <tr
                                        className="card-header"
                                        style={{ border: 'none' }}
                                      >
                                        <td>Round</td>
                                        <td>Opens</td>
                                        <td>Closes</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Registration
                                          <br />
                                        </td>
                                        <td>
                                          {moment
                                            .unix(data.registerTime)
                                            .utc()
                                            .format('YYYY-MM-DD HH:mm:ss')}{' '}
                                          UTC
                                        </td>
                                        <td>
                                          {moment
                                            .unix(data.registerTime)
                                            .add(
                                              data.registerDuration,
                                              'seconds',
                                            )
                                            .utc()
                                            .format('YYYY-MM-DD HH:mm:ss')}{' '}
                                          UTC
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Sale
                                          <br />
                                        </td>
                                        <td>
                                          {moment
                                            .unix(data.startTime)
                                            .utc()
                                            .format('YYYY-MM-DD HH:mm:ss')}{' '}
                                          UTC
                                        </td>
                                        <td>
                                          {' '}
                                          {moment
                                            .unix(data.getEndTime)
                                            .utc()
                                            .format('YYYY-MM-DD HH:mm:ss')}{' '}
                                          UTC
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          FCFS
                                          <br />
                                        </td>
                                        <td>
                                          {moment
                                            .unix(data.getEndTime)
                                            .subtract(
                                              data.fcfsDuration,
                                              'seconds',
                                            )
                                            .utc()
                                            .format('YYYY-MM-DD HH:mm:ss')}{' '}
                                          UTC
                                        </td>
                                        <td>
                                          {moment
                                            .unix(data.getEndTime)
                                            .utc()
                                            .format('YYYY-MM-DD HH:mm:ss')}{' '}
                                          UTC
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="allocation">
                      <div className="py-3">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="card">
                              <div className="p-0 card-body">
                                <div className="table-responsive">
                                  <table className="table mb-0 pp-table-info">
                                    {claimDetails &&
                                    claimDetails?.claims?.length > 0 ? (
                                      <tbody>
                                        <tr className="card-header text-center">
                                          <td>No.</td>
                                          <td>Token allocation</td>
                                          <td>Percentage</td>
                                          <td>Date</td>
                                          <td>Token(s) claimed</td>
                                        </tr>
                                        {claimDetails?.claims?.[0].map(
                                          (claim, index) => {
                                            const claims = claimDetails?.claims;
                                            return (
                                              <tr
                                                className="text-center"
                                                key={index}
                                              >
                                                <td>{index + 1}</td>
                                                <td>
                                                  {fromWei(claims[2][index])}
                                                </td>
                                                <td>
                                                  {fromWei(claims[1][index], 6)}
                                                </td>
                                                <td>
                                                  {moment
                                                    .unix(claims[0][index])
                                                    .utc()
                                                    .format(
                                                      'YYYY-MM-DD HH:mm:ss',
                                                    )}{' '}
                                                  UTC
                                                </td>
                                                <td>
                                                  {Number(claims[4][index]) ===
                                                    Number(claims[2][index]) &&
                                                  Number(claims[4][index]) >
                                                    0 ? (
                                                    'Claimed'
                                                  ) : (
                                                    <button
                                                      className="btn btn-primary btn-sm"
                                                      disabled={
                                                        !claims[3][index] ||
                                                        Number(
                                                          claims[2][index],
                                                        ) <= 0 ||
                                                        isClaiming
                                                      }
                                                      onClick={() => {
                                                        claimTokens(index);
                                                      }}
                                                    >
                                                      Claim
                                                    </button>
                                                  )}
                                                </td>
                                              </tr>
                                            );
                                          },
                                        )}
                                      </tbody>
                                    ) : (
                                      // <tbody>
                                      //   <tr
                                      //     className="card-header"
                                      //     style={{ border: 'none' }}
                                      //   ></tr>
                                      //   <tr>
                                      //     <td className="card-header">
                                      //       Token allocation
                                      //     </td>
                                      //     <td>
                                      //       {' '}
                                      //       {fromWei(
                                      //         userAllocations.balance,
                                      //       )}{' '}
                                      //       {poolData?.symbol ?? 'TBA'}{' '}
                                      //     </td>
                                      //   </tr>
                                      //   <tr>
                                      //     <td className="card-header">
                                      //       TGE Percentage
                                      //     </td>
                                      //     <td>
                                      //       {fromWei(
                                      //         data.claimInfo.tgePercentage,
                                      //         12,
                                      //       )}
                                      //       %
                                      //     </td>
                                      //   </tr>
                                      //   <tr>
                                      //     <td className="card-header">
                                      //       Vesting Percentage
                                      //     </td>
                                      //     <td>
                                      //       {fromWei(
                                      //         data.claimInfo.vestingPercentage,
                                      //         12,
                                      //       )}
                                      //       %
                                      //     </td>
                                      //   </tr>
                                      //   <tr>
                                      //     <td className="card-header">
                                      //       Vesting Interval
                                      //     </td>
                                      //     <td>
                                      //       {data.claimInfo.interval.toString()}{' '}
                                      //       days
                                      //     </td>
                                      //   </tr>
                                      //   <tr>
                                      //     <td className="card-header">
                                      //       TGE Start Time
                                      //     </td>
                                      //     <td>
                                      //       <div>
                                      //         {moment
                                      //           .unix(
                                      //             data.claimInfo.tgeStartTime,
                                      //           )
                                      //           .utc()
                                      //           .format(
                                      //             'YYYY-MM-DD HH:mm:ss',
                                      //           )}{' '}
                                      //         UTC{' '}
                                      //       </div>
                                      //     </td>
                                      //   </tr>
                                      //   <tr>
                                      //     <td className="card-header">
                                      //       Token(s) claimed
                                      //     </td>
                                      //     <td>
                                      //       {fromWei(claimDetails.claimed)}
                                      //     </td>
                                      //   </tr>
                                      //   <tr>
                                      //     <td className="card-header">
                                      //       Claimable Token(s)
                                      //     </td>
                                      //     <td>
                                      //       {fromWei(
                                      //         claimDetails.pendingReward,
                                      //       )}
                                      //     </td>
                                      //   </tr>
                                      //   <tr>
                                      //     <td className="card-header"></td>
                                      //     <td>
                                      //       <button
                                      //         className="btn btn-primary "
                                      //         disabled={
                                      //           isClaiming ||
                                      //           Number(
                                      //             claimDetails.pendingReward,
                                      //           ) <= 0
                                      //         }
                                      //         onClick={claim}
                                      //       >
                                      //         <span>Claim Tokens</span>
                                      //       </button>
                                      //     </td>
                                      //   </tr>
                                      // </tbody>
                                      <tbody>TBA</tbody>
                                    )}
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </div>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
          <Modal
            show={openBuy}
            onHide={() => setOpenBuy(false)}
            centered={true}
            dialogClassName="modal-dialog modal-md modal-dialog-centered"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="buyModalLabel">
                  Buy {poolData.projectName} Pool
                </h5>
                <div className="d-flex align-items-center">
                  <button
                    type="button"
                    className="btn-close me-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setOpenBuy(false)}
                  />
                </div>
              </div>
              <div className="modal-body">
                <div className="mb-3 d-flex align-items-center">
                  <label className="mb-0 form-label me-4"> </label>
                  <h4 className="mb-0 text-danger">{maxBuy} &nbsp; USD</h4>
                </div>
                <div
                  className="mb-1 d-flex align-items-center justify-content-between"
                  style={{ columnGap: '10px' }}
                >
                  <span
                    className="ps-0"
                    style={{ border: '0px', whiteSpace: 'nowrap' }}
                  >
                    USD
                  </span>

                  <input
                    value={buyAmount}
                    onChange={handleChange}
                    type="number"
                    id="inputAmountSwap"
                    className="form-control ms-2 me-1"
                    style={{ width: 'calc(100% - 12px)' }}
                  />

                  <button
                    className="btn btn-outline-primary"
                    onClick={() => setBuyAmount(maxBuy)}
                  >
                    <span>Max</span>
                  </button>
                </div>
                <div
                  className="mb-4 d-flex align-items-center "
                  style={{ columnGap: '10px' }}
                >
                  <span
                    className="ps-0"
                    style={{ border: '0px', whiteSpace: 'nowrap' }}
                  >
                    Approx=
                  </span>
                  <div>
                    {nativeRequiredToBuy} {NATIVE[chainId].symbol}
                  </div>
                </div>
                <div></div>

                <div
                  className="mt-3 mb-2 text-center get-start d-flex"
                  style={{ columnGap: '10px' }}
                >
                  <button
                    className="btn btn-primary w-100"
                    data-bs-dismiss="modal"
                    onClick={buyTokens}
                    disabled={
                      buying ||
                      (userEthBalance &&
                        Number(userEthBalance.toSignificant(18)) <
                          nativeRequiredToBuy)
                    }
                  >
                    <span>Buy</span>
                  </button>
                </div>
                {userEthBalance &&
                  Number(userEthBalance.toSignificant(18)) <
                    nativeRequiredToBuy && (
                    <div className="flex justify-center">
                      <p className="text-danger">Insuficient balance</p>
                    </div>
                  )}
              </div>
            </div>
          </Modal>
        </>
      ) : null}
    </div>
  );
}
