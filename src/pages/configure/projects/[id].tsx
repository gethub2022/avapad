import { useActiveWeb3React, useIDOContract } from '@/hooks';
import { useLaunchpads, useSinglePoolData } from '@/hooks/useLaunchpadPools';
import usePoolTimings from '@/hooks/usePoolTimings';
import { Box, Card, CircularProgress, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { useEffect, useState } from 'react';
import AddWhiteListModal from '@/components/WhitelistModals/AddWhiteList';
import RemoveWhiteListModal from '@/components/WhitelistModals/RemoveWhiteList';
import SaleTimeManager from '@/components/Configure/SaleTimeManager';
import SaleManager from '@/components/Configure/SaleManager';
import ClaimManager from '@/components/Configure/ClaimManager';
import AdminProvider, { useAdmin } from '@/components/Admin/Context';
import { useTransactionAdder } from '@/state/transactions/hooks';
import { useETHBalances, useTokenBalance } from '@/state/wallet/hooks';
import useToken from '@/hooks/useToken';
export default function Project() {
  const [whitelistOpen, setWhiteListOpen] = useState(false);
  const [removeWhitelistOpen, setRemoveWhiteListOpen] = useState(false);
  const {
    query: { id },
    ...router
  } = useRouter();
  const allPools = useLaunchpads();
  const { admin } = useAdmin();

  const pool = allPools.find((pool) => pool.address === id.toString());
  const { data: poolData } = useSWR(`pool/${pool?.address}`, async () => {
    if (!pool) return null;
    return fetch(`https://infura-ipfs.io/ipfs/${pool?.ipfsHash}`).then((res) =>
      res.json(),
    );
  });

  const data = useSinglePoolData(pool?.address);
  const { isActive, isEnded, isUpcomming } = usePoolTimings(data);

  function toggleWhiteListModal() {
    setWhiteListOpen(!whitelistOpen);
  }
  function toggleRemoveWhiteListModal() {
    setRemoveWhiteListOpen(!removeWhitelistOpen);
  }
  useEffect(() => {
    if (!admin) {
      router.push('/');
    }
  }, []);

  return (
    <Box py={8} className="container w-full">
      {data && poolData && (
        <Card
          sx={{ backgroundColor: '#212529', boxShadow: 'none' }}
          className="w-full p-sidebar-card p-sidebar-card-steps"
        >
          <AddWhiteListModal
            poolAddress={id.toString()}
            toggleWhiteListModal={toggleWhiteListModal}
            whiteListModalOpen={whitelistOpen}
          />
          <RemoveWhiteListModal
            toggleWhiteListModal={toggleRemoveWhiteListModal}
            whiteListModalOpen={removeWhitelistOpen}
            poolAddress={id.toString()}
          />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-5">
                <div className="pp-card-top animation">
                  <div className="icon-box">
                    <span>
                      <img src={poolData.logoUrl} alt={poolData.projectName} />
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
                            <i className="fas fa-globe-americas" />
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
                            <i className="fab fa-telegram-plane" />
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
                </div>
              </div>
              <div className="col-lg-6 col-md-5 ">
                {data.whitelistEnabled && (
                  <div className="flex flex-col max-w-[300px] ml-auto">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={toggleWhiteListModal}
                    >
                      Add users to whitelist
                    </button>
                    <button
                      onClick={toggleRemoveWhiteListModal}
                      className="mt-3 btn btn-primary btn-sm"
                    >
                      Remove users from whitelist
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="col-12">
              <SaleManager data={data} />
            </div>
            <div className="mt-6 col-12">
              <SaleTimeManager data={data} />
            </div>
            <div className="mt-6 col-12">
              <ClaimManager data={data} />
            </div>
          </div>
          <div className="mt-6 col-12">
            <Withdraw data={data} pool={pool} />
          </div>
        </Card>
      )}
    </Box>
  );
}

function Withdraw({ data, pool }) {
  const [loading, setLoading] = useState(false);
  const idoContract = useIDOContract(pool?.address);
  const addTransaction = useTransactionAdder();
  const contractEthBalance = useETHBalances([pool?.address])?.[
    pool?.address ?? ''
  ];
  const token = useToken(data?.token);
  const tokenBalance = useTokenBalance(pool?.address, token);
  const isExtraTokens =
    tokenBalance &&
    tokenBalance.greaterThan(
      Number(data.tokensForSale) - Number(data?.tokensSold),
    );
  const { isEnded } = usePoolTimings(data);

  async function withdrawCapital() {
    try {
      setLoading(true);
      const tx = await idoContract.withdrawAll();
      addTransaction(tx, {
        summary: 'Withdraw Capital',
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  async function withdrawUnsoldTokens() {
    try {
      setLoading(true);
      const tx = await idoContract.withdrawToken(
        token.address,
        data.tokensForSale.sub(data?.tokensSold),
      );
      addTransaction(tx, {
        summary: 'Withdraw Unsold Tokens',
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }
  return (
    <Box p={2}>
      <div className="section-text">
        <Typography className=" section-title" style={{ fontSize: '1rem' }}>
          Withdraw
        </Typography>
      </div>
      {isEnded && (
        <button
          className="btn btn-sm btn-primary"
          onClick={withdrawCapital}
          disabled={
            loading ||
            (contractEthBalance && !contractEthBalance.greaterThan(0))
          }
        >
          {loading && <CircularProgress size={16} sx={{ mr: 1 }} />}
          Withdraw Capital
        </button>
      )}
      <Box mt={2}>
        {isEnded && (
          <button
            className="btn btn-sm btn-primary"
            onClick={withdrawUnsoldTokens}
            disabled={loading || !isExtraTokens}
          >
            {loading && <CircularProgress size={16} sx={{ mr: 1 }} />}
            Withdraw Unsold Tokens
          </button>
        )}
      </Box>
    </Box>
  );
}
Project.Provider = AdminProvider;
