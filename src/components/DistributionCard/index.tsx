import { shortenAddress } from '@/functions';
import { getExplorerLink } from '@/functions/explorer';
import { useActiveWeb3React } from '@/hooks';
import useToken from '@/hooks/useToken';
import Link from 'next/link';
import useSWR from 'swr';

export default function DistributionCard({ distribution, index }) {
  const { account, chainId } = useActiveWeb3React();
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
  return (
    <Link href={userDistribution ? `/claimer/${index}` : '/claimer'}>
      <div
        className={`text-center col-lg-6 cursor-pointer ${
          !userDistribution ? 'opacity-70' : ''
        }`}
      >
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
                      href={getExplorerLink(chainId, token.address, 'token')}
                      target="_blank"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <b className="nowrap">{shortenAddress(token.address)}</b>
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
    </Link>
  );
}
