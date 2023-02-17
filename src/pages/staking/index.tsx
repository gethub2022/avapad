import Dots from '@/components/Dots';
import { AKITAX_STAKING_ADDRESS, XAKITA_STAKING_ADDRESS } from '@/config';
import { AKITAX, XAKITA } from '@/config/tokens';
import { tryParseAmount } from '@/functions/parse';
import { useActiveWeb3React } from '@/hooks';
import { ApprovalState, useApproveCallback } from '@/hooks/useApproveCallback';
import useSushiBar, { useBarAPY, useBarUserMappings } from '@/hooks/useStaking';
import { ChainId, ZERO } from '@/sdk';
import { useWalletModalToggle } from '@/state/application/hooks';
import { useTokenBalance } from '@/state/wallet/hooks';
import moment from 'moment-timezone';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
const INPUT_CHAR_LIMIT = 18;
const sendTx = async (txFunc: () => Promise<any>): Promise<boolean> => {
  let success = true;
  try {
    const ret = await txFunc();
    if (ret?.error) {
      success = false;
    }
  } catch (e) {
    console.error(e);
    success = false;
  }
  return success;
};
export default function Staking() {
  const [key, setKey] = useState<string>('stake');
  const {
    query: { stake },
    ...router
  } = useRouter();
  const { account, chainId } = useActiveWeb3React();
  const STAKING_TOKEN = stake == 'akitax' ? AKITAX : XAKITA;
  const STAKING_ADDRESS =
    stake == 'akitax' ? AKITAX_STAKING_ADDRESS : XAKITA_STAKING_ADDRESS;

  const stakingTokenBalance = useTokenBalance(
    account ?? undefined,
    STAKING_TOKEN[chainId as ChainId],
  );
  const stakedBalance = useTokenBalance(
    STAKING_ADDRESS[chainId] ?? undefined,
    STAKING_TOKEN[chainId as ChainId],
  );
  const usersStake = useBarUserMappings(STAKING_ADDRESS[chainId]);

  const { enter, leave, claimStakingReward } = useSushiBar(
    STAKING_ADDRESS[chainId],
  );
  const APY = useBarAPY(STAKING_ADDRESS[chainId]);
  const walletConnected = !!account;
  const toggleWalletModal = useWalletModalToggle();

  const [input, setInput] = useState<string>('');

  const [usingBalance, setUsingBalance] = useState(false);

  const balance =
    key === 'stake' ? stakingTokenBalance : usersStake.stakedAmount;

  const parsedAmount = usingBalance
    ? balance
    : tryParseAmount(input, balance?.currency);

  const [approvalState, approve] = useApproveCallback(
    parsedAmount,
    STAKING_ADDRESS[chainId],
  );

  const handleInput = (v: string) => {
    if (v.length <= INPUT_CHAR_LIMIT) {
      setUsingBalance(false);
      setInput(v);
    }
  };
  const handleClickMax = () => {
    setUsingBalance(true);
    setInput(
      balance
        ? balance
            .toSignificant(balance.currency.decimals)
            .substring(0, INPUT_CHAR_LIMIT)
        : '',
    );
  };

  function changeTab(key) {
    setInput('');
    setKey(key);
  }

  const insufficientFunds =
    (balance && balance.equalTo(ZERO)) || parsedAmount?.greaterThan(balance);

  const inputError = insufficientFunds;

  const [pendingTx, setPendingTx] = useState(false);

  const buttonDisabled =
    !input || pendingTx || (parsedAmount && parsedAmount.equalTo(ZERO));

  const handleClickButton = async () => {
    if (!walletConnected) {
      toggleWalletModal();
    } else {
      setPendingTx(true);

      if (key === 'stake') {
        if (buttonDisabled) return;
        if (approvalState === ApprovalState.NOT_APPROVED) {
          const success = await sendTx(() => approve());
          if (!success) {
            setPendingTx(false);
            return;
          }
        }
        const success = await sendTx(() => enter(parsedAmount));
        if (!success) {
          setPendingTx(false);
          return;
        }
      } else if (key === 'unstake') {
        if (pendingTx) return;
        const success = await sendTx(() => leave(parsedAmount));
        if (!success) {
          setPendingTx(false);
          return;
        }
      }

      handleInput('');
      setPendingTx(false);
    }
  };
  const handleClickClaim = async () => {
    if (!walletConnected) {
      toggleWalletModal();
    } else {
      setPendingTx(true);

      if (pendingTx && !usersStake?.pendingReward?.greaterThan(0)) return;

      const success = await sendTx(() => claimStakingReward());
      if (!success) {
        setPendingTx(false);
        return;
      }

      setPendingTx(false);
    }
  };
  return (
    <div className="w-full page-container">
      <div className="p-content">
        <div className="mt-4 container-fluid p-scroll">
          <div className="p-content-tabs">
            <Tab.Container
              id="staking-tabs"
              activeKey={key}
              onSelect={(key) => changeTab(key)}
            >
              <div className="row align-items-start">
                <div className="col-xl-4">
                  <Nav variant="tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="stake">Stake</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="unstake">Unstake</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className="mt-3 col-xl-8 mt-xl-0">
                  <div className="p-cards-top d-flex justify-content-xl-end justify-content-lg-center justify-content-md-center justify-content-start">
                    <div className="px-3 py-2 mb-0 text-center p-sidebar-card p-card-top me-md-3 me-2">
                      <Link href="/staking">
                        <div
                          className={`p-sidebar-card-title ${
                            stake !== 'akitax'
                              ? 'text-danger font-weight-bold'
                              : ''
                          }`}
                          style={{ cursor: 'pointer' }}
                        >
                          STAKE XAKITA
                        </div>
                      </Link>
                      <Link href={'/staking?stake=akitax'}>
                        <div
                          className={`p-sidebar-card-title  mt-2 ${
                            stake === 'akitax'
                              ? 'text-danger font-weight-bold '
                              : ''
                          }`}
                          style={{ cursor: 'pointer', border: 'none' }}
                        >
                          STAKE AKITAX
                        </div>
                      </Link>
                    </div>
                    <div className="px-3 py-2 mb-0 text-center p-sidebar-card p-card-top me-md-3 me-2">
                      <div className="p-sidebar-card-title">
                        Total
                        <span className="text-uppercase">
                          &nbsp;{STAKING_TOKEN[chainId].symbol}&nbsp;
                        </span>
                        Staked
                      </div>
                      <div className="mt-0 p-sidebar-card-body">
                        <b className="text-danger font-24">
                          {stakedBalance?.toSignificant(6)}
                        </b>
                      </div>
                    </div>
                    <div className="px-3 py-2 mb-0 text-center p-sidebar-card p-card-top">
                      <div className="p-sidebar-card-title">APY</div>
                      <div className="mt-0 p-sidebar-card-body">
                        <b className="text-danger font-24">{APY}%</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Tab.Content>
                <Tab.Pane eventKey="stake" aria-labelledby="stake-tab">
                  <div className="mt-3 mb-4 d-flex justify-content-center align-items-center">
                    <h3 className="mb-0 p-tab-title">
                      Stake your&nbsp;
                      <span className="text-uppercase">
                        {STAKING_TOKEN[chainId].symbol}
                      </span>
                    </h3>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <div className="p-sidebar-card p-sidebar-card-steps">
                        <div className="p-sidebar-card-body">
                          <div className="d-flex w-100 justify-content-center">
                            <div
                              className="mx-auto mt-4 text-start"
                              style={{ maxWidth: '370px' }}
                            >
                              <div className="mb-1 p-form-group">
                                <label className="form-label p-main-text">
                                  Amount
                                </label>
                                <div className="p-input-group">
                                  <input
                                    type="number"
                                    className="px-0 form-control"
                                    onChange={(e) =>
                                      handleInput(e.target.value)
                                    }
                                    value={input}
                                  />
                                  <button
                                    onClick={handleClickMax}
                                    type="button"
                                    className="btn btn-sm btn-primary"
                                  >
                                    MAX
                                  </button>
                                </div>
                                <div className="d-flex align-items-start justify-content-between">
                                  <div className="font-14">
                                    {' '}
                                    <b className="text-danger">
                                      {stakingTokenBalance?.toSignificant(10)}
                                    </b>
                                  </div>
                                  <div />
                                </div>
                              </div>
                              {key === 'stake' ? (
                                approvalState === ApprovalState.NOT_APPROVED ||
                                approvalState === ApprovalState.PENDING ? (
                                  <button
                                    className="mt-2 btn btn-primary w-100"
                                    disabled={
                                      approvalState === ApprovalState.PENDING
                                    }
                                    onClick={approve}
                                  >
                                    {approvalState === ApprovalState.PENDING ? (
                                      <Dots>{`Approving`} </Dots>
                                    ) : (
                                      `Approve`
                                    )}
                                  </button>
                                ) : (
                                  <button
                                    disabled={buttonDisabled || inputError}
                                    type="button"
                                    className="mt-2 btn btn-primary w-100"
                                    onClick={handleClickButton}
                                  >
                                    {!walletConnected
                                      ? `Connect Wallet`
                                      : !input
                                      ? `Enter Amount`
                                      : insufficientFunds
                                      ? `Insufficient Balance`
                                      : key === 'stake'
                                      ? `Confirm Staking`
                                      : `Confirm Withdrawal`}
                                  </button>
                                )
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="unstake" aria-labelledby="unStake-tab">
                  <div className="mt-3 mb-4 d-flex justify-content-center align-items-center">
                    <h3 className="mb-0 p-tab-title">
                      Unstake your&nbsp;
                      <span className="text-uppercase">
                        {STAKING_TOKEN[chainId].symbol}
                      </span>
                    </h3>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <div className="p-sidebar-card p-sidebar-card-steps">
                        <div className="p-sidebar-card-body">
                          <div className="flex justify-center">
                            {usersStake.isLocked && (
                              <p className="text-danger">
                                Your stakes are locked until{' '}
                                <b>
                                  {moment
                                    .unix(usersStake.unlockAt)
                                    .utc()
                                    .format('YYYY-MM-DD HH:mm:ss')}{' '}
                                  UTC
                                </b>
                              </p>
                            )}
                          </div>
                          <div className="d-flex w-100 justify-content-center">
                            <div
                              className="mx-auto mt-4 text-start"
                              style={{ maxWidth: '370px' }}
                            >
                              <div className="mb-1 p-form-group">
                                <label className="form-label p-main-text">
                                  Amount
                                </label>
                                <div className="p-input-group">
                                  <input
                                    type="number"
                                    className="px-0 form-control"
                                    onChange={(e) =>
                                      handleInput(e.target.value)
                                    }
                                    value={input}
                                  />
                                  <button
                                    onClick={handleClickMax}
                                    type="button"
                                    className="btn btn-primary"
                                  >
                                    MAX
                                  </button>
                                </div>
                                <div className="d-flex align-items-start justify-content-between">
                                  <div className="font-14">
                                    {' '}
                                    <b className="text-danger">
                                      {usersStake.stakedAmount.toSignificant(
                                        10,
                                      )}
                                    </b>
                                  </div>
                                  <div />
                                </div>
                              </div>
                              {key === 'stake' ? (
                                approvalState === ApprovalState.NOT_APPROVED ||
                                approvalState === ApprovalState.PENDING ? (
                                  <button
                                    className="mt-2 btn btn-primary w-100"
                                    disabled={
                                      approvalState === ApprovalState.PENDING
                                    }
                                    onClick={approve}
                                  >
                                    {approvalState === ApprovalState.PENDING ? (
                                      <Dots>{`Approving`} </Dots>
                                    ) : (
                                      `Approve`
                                    )}
                                  </button>
                                ) : (
                                  <button
                                    disabled={buttonDisabled || inputError}
                                    type="button"
                                    className="mt-2 btn btn-primary w-100"
                                    onClick={handleClickButton}
                                  >
                                    {!walletConnected
                                      ? `Connect Wallet`
                                      : !input
                                      ? `Enter Amount`
                                      : insufficientFunds
                                      ? `Insufficient Balance`
                                      : key === 'stake'
                                      ? `Confirm Staking`
                                      : `Confirm Withdrawal`}
                                  </button>
                                )
                              ) : (
                                <button
                                  className="mt-2 btn btn-primary w-100"
                                  onClick={handleClickButton}
                                  disabled={
                                    buttonDisabled ||
                                    !usersStake?.stakedAmount?.greaterThan(0) ||
                                    insufficientFunds ||
                                    usersStake.isLocked
                                  }
                                >
                                  {!walletConnected
                                    ? `Connect Wallet`
                                    : !input
                                    ? `Enter Amount`
                                    : insufficientFunds
                                    ? `Insufficient Balance`
                                    : key === 'stake'
                                    ? `Confirm Staking`
                                    : `Confirm Withdrawal`}
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
      <div className="p-sidebar">
        <div>
          <div className="mb-2 p-sidebar-close">
            <button className="btn btn-link text-danger" type="button">
              <i className="mdi mdi-arrow-right" />
            </button>
          </div>
          <div className="p-sidebar-card mt-md-3">
            <div className="p-sidebar-card-title">Staked</div>
            <div className="p-sidebar-card-body">
              <div className="p-sidebar-card-value">
                {usersStake.stakedAmount.toSignificant(6)}
              </div>
            </div>
          </div>

          <div className="mt-3 p-sidebar-card mt-md-4">
            <div className="p-sidebar-card-title">Rewards</div>
            <div className="p-sidebar-card-body">
              <div className="p-sidebar-card-value">
                {usersStake.pendingReward.toSignificant(6)}
              </div>
              <div className="p-sidebar-card-actions">
                <button
                  onClick={handleClickClaim}
                  className="btn btn-primary btn-round"
                  disabled={
                    !usersStake.pendingReward.greaterThan(0) || pendingTx
                  }
                  style={{ fontSize: '16px' }}
                >
                  <span>Harvest</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-sidebar-backdrop" />
    </div>
  );
}
