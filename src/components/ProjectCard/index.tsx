import { fromWei } from '@/functions';
import { useSinglePoolData } from '@/hooks/useLaunchpadPools';
import usePoolTimings from '@/hooks/usePoolTimings';
import Link from 'next/link';
import useSWR from 'swr';

export default function ProjectCard({ pool, isAdmin = false }) {
  const { data: poolData } = useSWR(`pool/${pool.address}`, async () => {
    return fetch(`https://infura-ipfs.io/ipfs/${pool.ipfsHash}`).then((res) =>
      res.json(),
    );
  });
  const data = useSinglePoolData(pool.address);
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
  } = usePoolTimings(data);
  const cap = data ? fromWei(data.rate.mul(data.tokensForSale), 36) : 0;
  const progress = data
    ? (Number(fromWei(data.tokensSold)) / Number(fromWei(data.tokensForSale))) *
      100
    : 0;
  const detailUrl = isAdmin
    ? `/configure/projects/${pool.address}`
    : `/projects/${pool.address}`;
  return (
    <div className="text-center col-lg-6">
      {!poolData || !data ? null : (
        <div className="single-item">
          <div className="pp-card-body">
            <div className="pp-card-top">
              <Link href={detailUrl}>
                <div className="icon-box">
                  <span>
                    <img src={poolData.logoUrl} alt="#" />
                  </span>
                </div>
              </Link>
              <div className="title-box">
                <h3 className="d-flex align-items-center">
                  <Link href={detailUrl}>
                    <div>{poolData.projectName}</div>
                  </Link>
                </h3>
                <div className="item-social">
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
                </div>
                <Link href={detailUrl} passHref>
                  <a className="items-morex">
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
                  </a>
                </Link>
              </div>
            </div>
            <div className="mb-1 item-desc">
              <div className="item-short-desc">{poolData.description}</div>
              <div className="item-learn-more" />
            </div>
            <Link href={detailUrl} passHref>
              <a>
                <div className="part-prize">
                  <div className="px-0 mb-3 pp-card-info">
                    <div className="pp-card-col">
                      Swap Rate
                      <br />
                      <b className="nowrap">
                        1 USD = {1 / Number(fromWei(data.rate))}{' '}
                        {poolData.symbol}
                      </b>
                    </div>
                    <div className="pp-card-col text-end ps-286">
                      Cap
                      <br />
                      <b>{cap} USD</b>
                    </div>
                  </div>
                  <div className="px-0 mb-3 pp-card-info">
                    <div className="pp-card-col">
                      {registerStartsIn &&
                        `Registration Starts in ${registerStartsIn}`}
                      {registerEndsIn &&
                        `Registration Ends in ${registerEndsIn}`}
                      {registerEndedAgo &&
                        `Registration Ended ${registerEndedAgo}`}
                    </div>
                    <div className="pp-card-col text-end ps-286">
                      {saleLiveIn && `Sale Starts in ${saleLiveIn}`}
                      {saleEndsIn && `Sale Ends in ${saleEndsIn}`}
                      {saleEndedAgo && `Sale Ended ${saleEndedAgo}`}
                    </div>
                  </div>
                  <div className="pp-card-progress-wrap">
                    <div className="mb-2 d-flex justify-content-between align-items-center pp-card-progress-top">
                      <div className="pp-card-col">Progress</div>
                      <div className="pp-card-col text-end">
                        Participants{' '}
                        <b className="text-participants font-12">
                          {data.participants.toString()}
                        </b>
                      </div>
                    </div>
                    <div className="pp-card-progress">
                      <div
                        title={9}
                        className="pp-card-progress-percent"
                        style={{ width: `${progress.toString()}%` }}
                      />
                      <div className="pp-card-progress-label">
                        <span>
                          <b>{progress.toString()}%</b>
                        </span>
                        <span className="text-allocation">
                          <b className>
                            {fromWei(data.tokensSold)}/{cap}
                          </b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end pt-1">
                  <span className="text-xs text-danger">See Details</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
