import React from 'react';
import Link from 'next/link';
import moment from 'moment-timezone';
// import { GitHub } from 'react-feather'
import usePoolTimings from '../../hooks/usePoolTimings';
import { getFormatedDateDiff } from '../../functions/convert/fotmatedDateDiff';
import { fromWei, numberWithCommas, truncate } from '../../functions';
import { useTotalSoldTokens } from '../../hooks/useSoldtokens';
import { Pool } from './types';
import Image from 'next/image';
export const PoolCard = ({ pool }: { pool: Pool }) => {
  const { isEnded, isUpcomming, isActive } = usePoolTimings(pool);

  const totalSoldTokens = useTotalSoldTokens(pool.poolAddress);
  return (
    <Link href={`/launchpad/${pool.projectName}`} passHref>
      <a className="block h-full no-underline transition transform border border-transparent rounded text-body hover:-translate-y-2 hover:border-gradient-tr-blue-pink-dark-pink-red">
        <div className="h-full p-3 bg-transparent rounded bg-dark-900 text-high-emphesis">
          <div className="flex flex-col justify-between h-full space-y-6 ">
            <div className="flex-1 space-y-3">
              <div className="flex justify-between">
                <div className="p-0.5 rounded-full bg-gradient-to-r from-opaque-blue to-opaque-pink">
                  <div className="flex items-center justify-center w-12 h-12 p-2 overflow-hidden rounded-full  bg-dark-900">
                    <div className="relative w-full h-full">
                      <Image
                        className="w-full"
                        layout="fill"
                        src={pool.smallLogo}
                        alt={pool.projectName || 'smallLogo'}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {pool.tokenType === 'ERC-20' ? (
                    <div className="relative flex items-center justify-center bg-indigo-400 rounded-full h-7 w-7 bg-opacity-70">
                      <Image
                        src="/images/brand/moonriver-scan.jpeg"
                        alt="Moonriver"
                        layout="fill"
                        className="h-full rounded img-white"
                      />
                    </div>
                  ) : (
                    <div
                      className="flex items-center justify-center rounded-full h-7 w-7 bg-opacity-70 bg-acc"
                      style={{ padding: '2px' }}
                    >
                      <Image
                        src="/images/native-tokens/bsc.svg"
                        alt="Binance Smart Chain"
                        className="h-full img-white"
                        layout="fill"
                      />
                    </div>
                  )}
                  {isUpcomming ? (
                    <span className="px-2 py-1 text-xs tracking-wider bg-gray-500 rounded bg-opacity-40 ">
                      UPCOMING
                    </span>
                  ) : isActive ? (
                    totalSoldTokens >= Number(pool.maxRaise) ? (
                      <span className="px-2 py-1 text-xs tracking-wider rounded text-green bg-green bg-opacity-40 ">
                        FILLED
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs tracking-wider rounded text-green bg-green bg-opacity-40 ">
                        ACTIVE
                      </span>
                    )
                  ) : isEnded && totalSoldTokens >= Number(pool.maxRaise) ? (
                    <span className="px-2 py-1 text-xs tracking-wider rounded text-green bg-green bg-opacity-40 ">
                      FILLED
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs tracking-wider bg-gray-500 rounded bg-opacity-40 ">
                      ENDED
                    </span>
                  )}
                </div>
              </div>
              <div className="">
                <h2 className="text-xl font-semibold text-white uppercase">
                  {pool.projectName}
                </h2>
                <p className="text-sm text-secondary">{pool.tokenSymbol} </p>
              </div>
              <div className="text-sm text-white opacity-70">
                <div>{pool.shortDescription}</div>
              </div>
              {/* <ul className="flex items-center space-x-6 text-xl text-main">
                {pool.website && (
                  <li>
                    <a href={pool.website} target="_blank" referrerPolicy="no-referrer" className="text-main">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 496 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                      </svg>
                    </a>
                  </li>
                )}
                {pool.telegram && (
                  <li>
                    <a href={pool.telegram} target="_blank" referrerPolicy="no-referrer" className="text-main">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                      </svg>
                    </a>
                  </li>
                )}
                {pool.twitter && (
                  <li>
                    <a href={pool.twitter} target="_blank" referrerPolicy="no-referrer" className="text-main">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                      </svg>
                    </a>
                  </li>
                )}
                {pool.medium && (
                  <li>
                    <a href={pool.medium} target="_blank" referrerPolicy="no-referrer" className="text-main">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"></path>
                      </svg>
                    </a>
                  </li>
                )}
                {pool.github && (
                  <li>
                    <a href={pool.github} target="_blank" referrerPolicy="no-referrer" className="text-main">
                      <GitHub />
                    </a>
                  </li>
                )}
              </ul> */}
            </div>
            <div className="space-y-3">
              <div className="text-sm ">
                Access:{' '}
                <span className="text-white uppercase">
                  {pool.private ? 'private' : 'public'}
                </span>
              </div>
              <div className="text-sm">
                Swap Rate:
                <div className="inline text-white">
                  <span> ${fromWei(pool.price)}</span>
                </div>
              </div>
              <div className="mb-6">
                <div className="space-y-1">
                  <div className="flex justify-between space-x-3 text-sm tracking-wide">
                    <div className="">
                      <span>
                        {isUpcomming ? (
                          <>
                            opens in{' '}
                            {getFormatedDateDiff(
                              moment
                                .unix(pool.startTime)
                                .utc()
                                .diff(moment().utc(), 'ms'),
                            )}
                          </>
                        ) : isEnded ? (
                          <>
                            finished{' '}
                            {getFormatedDateDiff(
                              moment()
                                .utc()
                                .diff(moment.unix(pool.endTime).utc(), 'ms'),
                            )}{' '}
                            ago
                          </>
                        ) : (
                          <>
                            closes in{' '}
                            {getFormatedDateDiff(
                              moment
                                .unix(pool.endTime)
                                .utc()
                                .diff(moment().utc(), 'ms'),
                            )}
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="font-medium text-right opacity-90">
                    <span className="text-main">
                      {truncate((totalSoldTokens / pool.raiseAmount) * 100, 4)}%
                    </span>
                  </div>
                  <div className="relative h-2 bg-gray-600 rounded progress">
                    <div
                      role="progressbar"
                      className="absolute top-0 bottom-0 left-0 inline-block rounded bg-gradient-to-r from-opaque-blue to-opaque-pink"
                      style={{
                        width: `${(
                          (totalSoldTokens / pool.raiseAmount) *
                          100
                        ).toString()}%`,
                      }}
                    >
                      {/* <span className="sr-only">100%</span> */}
                    </div>
                  </div>
                  <div className="flex justify-between space-x-3 text-sm tracking-wide">
                    <div className="flex-shrink-0 text-ignored opacity-90">
                      {totalSoldTokens}{' '}
                    </div>
                    <div className="text-right text-ignored opacity-90">
                      {numberWithCommas(pool.raiseAmount)} {pool.tokenSymbol}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h4 className="text-xs">Total Raise</h4>
                  <div className="text-sm text-main">
                    ${totalSoldTokens * Number(fromWei(pool.price))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
