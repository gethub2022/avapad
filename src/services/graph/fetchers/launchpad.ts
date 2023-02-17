import { GRAPH_HOST } from '../constants';
import { request } from 'graphql-request';
import { launchpadPoolsQuery } from '../queries/launchpad';
import { ChainId } from '@/sdk';

export const LAUNCHPAD = {
  42: 'muhammadwajidshahid/avax-launchpad',
  [ChainId.AVALANCHE_TESTNET]: 'muhammadwajidshahid/launchpadfactory',
};

export const launchpad = async (query, chainId = 42, variables = undefined) =>
  request(
    `${GRAPH_HOST[chainId]}/subgraphs/name/${LAUNCHPAD[chainId]}`,
    query,
    variables,
  );

export const getLaunchpadPools = async (variables = undefined) => {
  const { pools } = await launchpad(launchpadPoolsQuery, undefined, variables);
  return pools;
};
