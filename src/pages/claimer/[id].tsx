import Head from 'next/head';
import Container from '@/components/Container';
import {
  useDistribution,
  useDistributionUserClaims,
} from '@/hooks/useDistributions';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import useToken from '@/hooks/useToken';
import { fromWei, shortenAddress } from '@/functions';
import { useActiveWeb3React, useClaimerContract } from '@/hooks';
import moment from 'moment-timezone';
import { useState } from 'react';
import { useTransactionAdder } from '@/state/transactions/hooks';
import { getExplorerLink } from '@/functions/explorer';

export default function ClaimerDetails() {
  const [isClaiming, setIsClaiming] = useState(false);

  const { account, chainId } = useActiveWeb3React();
  const {
    query: { id },
  } = useRouter();
  const claimerContract = useClaimerContract();
  const addTransaction = useTransactionAdder();

  const distributions = useDistribution();
  const index = distributions.findIndex((distribution, index) => index == id);
  const distribution = distributions[index];
  const { data: distributionUsers } = useSWR(
    `distribution/${index}`,
    async () => {
      if (!distribution?.ipfs) return null;
      return fetch(`https://infura-ipfs.io/ipfs/${distribution?.ipfs}`).then(
        (res) => res.json(),
      );
    },
  );
  const token = useToken(distribution?.token);
  const userDistribution = distributionUsers && distributionUsers[account];
  const claims = useDistributionUserClaims(
    index.toString(),
    userDistribution?.amount,
    account,
  );
  async function claimTokens(claimIndex) {
    try {
      setIsClaiming(true);
      const tx = await claimerContract.claim(
        account,
        userDistribution?.amount,
        index,
        claimIndex,
        userDistribution?.proof,
      );
      addTransaction(tx, { summary: 'Claimed Distribution ' + index });
      await tx.wait();
      setIsClaiming(false);
    } catch (error) {
      setIsClaiming(false);
      alert(error?.data?.message ?? 'Something Went Wrong!');
      console.error(error);
    }
  }
  return (
    <>
      <Head>
        <title> Claimer</title>
        <meta key="description" name="description" content="Claimer" />
      </Head>
      <Container
        id="configure-claimer-page"
        className="grid h-full grid-cols-1 py-4 mx-auto md:py-8 lg:py-12 gap-9"
        maxWidth="5xl"
      >
        <div
          className="pp-investment "
          style={{ backgroundImage: 'none', paddingTop: '40px' }}
        >
          <div className="container text-center">
            <div className="investment-section-items">
              <div className="d-flex">
                <div className="text-center col-lg-12 col-12 cursor-pointer">
                  <div className="single-item" style={{ minHeight: '200px' }}>
                    <div className="pp-card-body">
                      <div className="pp-card-top">
                        <div className="title-box">
                          <h3 className="d-flex align-items-center">
                            {' '}
                            Distribution {index}
                          </h3>
                        </div>
                      </div>
                      <div className="mb-1 item-desc">
                        <div className="item-short-desc"></div>
                        <div className="item-learn-more"></div>
                      </div>
                      {token && (
                        <>
                          <div className="px-0 mb-3 pp-card-info">
                            <div className="pp-card-col">
                              Token Name
                              <br />
                              <b className="nowrap">{token.name}</b>
                            </div>
                            <div className="pp-card-col text-end ps-286">
                              Token Symbol
                              <br />
                              <b>{token.symbol}</b>
                            </div>
                          </div>
                          <div className="px-0 mb-3 pp-card-info">
                            <div className="pp-card-col">
                              Token Address
                              <br />
                              <a
                                href={getExplorerLink(
                                  chainId,
                                  token.address,
                                  'token',
                                )}
                                target="_blank"
                                onClick={(e) => {
                                  e.stopPropagation();
                                }}
                              >
                                <b className="nowrap">
                                  {shortenAddress(token.address)}
                                </b>
                              </a>
                            </div>
                            <div className="pp-card-col text-end ps-286">
                              Token Decimals
                              <br />
                              <b>{token.decimals}</b>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pp-detail-content">
              <div className="card">
                <div className="p-0 card-body">
                  <div className="table-responsive">
                    <table className="table mb-0 pp-table-info">
                      {userDistribution && claims?.length > 0 ? (
                        <tbody>
                          <tr className="card-header text-center">
                            <td>No.</td>
                            <td>Token allocation</td>
                            <td>Percentage</td>
                            <td>Date</td>
                            <td>Token(s) claimed</td>
                          </tr>
                          {claims?.[0].map((claim, index) => {
                            return (
                              <tr className="text-center" key={index}>
                                <td>{index + 1}</td>
                                <td>{fromWei(claims[1][index])}</td>
                                <td>{fromWei(claims[0][index][1], 6)}</td>
                                <td>
                                  {moment
                                    .unix(claims[0][index][0])
                                    .utc()
                                    .format('YYYY-MM-DD HH:mm:ss')}{' '}
                                  UTC
                                </td>
                                <td>
                                  {Number(claims[3][index]) ===
                                    Number(claims[1][index]) &&
                                  Number(claims[3][index]) > 0 ? (
                                    'Claimed'
                                  ) : (
                                    <button
                                      className="btn btn-primary btn-sm"
                                      disabled={
                                        !claims[2][index] ||
                                        Number(claims[1][index]) <= 0 ||
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
                          })}
                        </tbody>
                      ) : (
                        <tbody>TBA</tbody>
                      )}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
