import Button from '@/components/Button';
import Container from '@/components/Container';
import { getSigner } from '@/functions';
import { useActiveWeb3React } from '@/hooks';
import { useWalletModalToggle } from '@/state/application/hooks';
import Head from 'next/head';
import React, { useState } from 'react';
import { getAddress, verifyMessage } from 'ethers/lib/utils';
import { useRouter } from 'next/router';
import AdminProvider, { useAdmin } from '@/components/Admin/Context';
import Loader from '@/components/Loader';
import Link from 'next/link';
import { useLaunchpads } from '@/hooks/useLaunchpadPools';
import moment from 'moment-timezone';
import ProjectCard from '@/components/ProjectCard';
const buttonStyle =
  'flex justify-center items-center w-full h-14 rounded font-bold md:font-medium md:text-lg mt-5 text-sm focus:outline-none focus:ring';
// const buttonStyleEnabled = `${buttonStyle} text-high-emphesis bg-gradient-to-r from-pink-red to-light-brown hover:opacity-90`;
// const buttonStyleInsufficientFunds = `${buttonStyleEnabled} opacity-60`;
// const buttonStyleDisabled = `${buttonStyle} text-secondary bg-dark-700`;
const buttonStyleConnectWallet = `${buttonStyle} text-high-emphesis bg-cyan-blue hover:bg-opacity-90`;

export default function Configure() {
  const [loading, setLoading] = useState<boolean>(false);
  const { account, library } = useActiveWeb3React();
  const toggleWalletModal = useWalletModalToggle();
  const { admin, updateAdmin } = useAdmin();
  const router = useRouter();
  const pools = useLaunchpads();
  const livePools = pools.filter(
    (pool) =>
      pool.startTime.isBefore(moment().utc()) &&
      pool.endTime.isAfter(moment().utc()),
  );
  const endedPools = pools.filter((pool) =>
    pool.endTime.isBefore(moment().utc()),
  );
  const upcomingPools = pools.filter((pool) =>
    pool.startTime.isAfter(moment.utc()),
  );
  const Login = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const signer = getSigner(library, account);
      setLoading(true);
      const message = 'Yes it is me.';

      const signature = await signer.signMessage(message);
      const recoveredAddress = verifyMessage(message, signature);
      if (
        getAddress(recoveredAddress) === getAddress(account) &&
        getAddress(recoveredAddress) ===
          getAddress(process.env.NEXT_PUBLIC_ADMIN)
      ) {
        updateAdmin(true);
        // history.push('/admin');
      } else {
        router.push('/');
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  return (
    <>
      <Head>
        <title>Configure</title>
        <meta key="description" name="description" content="configure" />
      </Head>
      <Container
        id="configure-page"
        className="grid h-full grid-cols-1 py-4 mx-auto md:py-8 lg:py-12 gap-9"
        maxWidth="7xl"
      >
        {account && !admin ? (
          <div className="flex items-center justify-center w-full">
            <div>
              <button
                className="d-flex btn btn-primary align-items-center"
                color="blue"
                onClick={Login}
                disabled={loading}
              >
                Login with wallet &nbsp; &nbsp; {loading && <Loader />}
              </button>
            </div>
          </div>
        ) : (
          !admin && (
            <div className="flex items-center justify-center w-90">
              <div>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={toggleWalletModal}
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          )
        )}

        {admin && (
          <>
            <div className="flex justify-center">
              <div>
                <div className="section-text">
                  <h2 className="section-title">Welcome to Admin Panel</h2>
                  <p className="section-description" />
                </div>

                <div className="flex justify-center">
                  <Link href="/configure/add">
                    <button className="btn btn-primary">Add Pool</button>
                  </Link>
                  <Link href="/configure/claimer">
                    <button className="btn btn-primary ml-3">Claimer</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full pp-projects-page">
              <div className="pt-3 pp-investment pp-open">
                <div className="container text-center">
                  <div className="row d-flex">
                    <div className="text-center col-lg-12">
                      <div className="section-text">
                        <h2 className="section-title">Projects Open Now</h2>
                        <p className="section-description" />
                      </div>
                    </div>
                  </div>
                  <div className="investment-section-items">
                    <div className="row d-flex ">
                      {livePools.map((pool) => (
                        <ProjectCard pool={pool} isAdmin={admin} />
                      ))}
                      {livePools.length <= 0 && (
                        <div>
                          <span>No projects currently open</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="pt-0 pp-investment"
                style={{ backgroundImage: 'none' }}
              >
                <div className="container text-center">
                  <div className="row d-flex justify-content-center">
                    <div className="text-center col-lg-12">
                      <div className="section-text">
                        <h2 className="section-title">Projects Coming soon</h2>
                        <p className="section-description" />
                      </div>
                    </div>
                  </div>
                  <div className="investment-section-items">
                    <div className="row d-flex">
                      {upcomingPools.map((pool) => (
                        <ProjectCard pool={pool} isAdmin={admin} />
                      ))}
                      {upcomingPools.length <= 0 && (
                        <div>
                          <span>No projects currently open</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pp-investment pp-close">
                <div className="container text-center">
                  <div className="row d-flex justify-content-center">
                    <div className="text-center col-lg-12">
                      <div className="section-text">
                        <h2 className="section-title">Projects Closed</h2>
                        <p className="section-description" />
                      </div>
                    </div>
                  </div>
                  <div className="investment-section-items">
                    <div className="row d-flex ">
                      {endedPools.map((pool) => (
                        <ProjectCard pool={pool} isAdmin={admin} />
                      ))}
                      {endedPools.length <= 0 && (
                        <div>
                          <span>No projects currently open</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
    </>
  );
}

Configure.Provider = AdminProvider;
