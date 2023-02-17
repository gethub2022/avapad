import {
  useMultipleCallMultipleResult,
  useMultipleContractSingleData,
  //   useMultipleCallMultipleResult,
  useSingleCallResult,
} from '@/state/multicall/hooks';
import { Interface } from '@ethersproject/abi';
import { useMemo } from 'react';
import { useIDOContract, useLevelsContract } from './useContract';
import IDO_ABI from '@/constants/abis/ido.json';
import moment from 'moment-timezone';
import useActiveWeb3React from './useActiveWeb3React';
import { BigNumber } from '@ethersproject/bignumber';
export function useLaunchpadPools() {
  const levelsContract = useLevelsContract();
  const result = useSingleCallResult(levelsContract, 'getAllIDOs');
  return result.loading ? [] : result.result?.[0];
}
const IDOInterface = new Interface(IDO_ABI.abi);
export function useLaunchpads() {
  const pools = useLaunchpadPools();
  const poolAddress = pools.map((pool) => pool[0]);
  const startTimeResults = useMultipleContractSingleData(
    poolAddress,
    IDOInterface,
    'startTime',
  );
  const endTimeResult = useMultipleContractSingleData(
    poolAddress,
    IDOInterface,
    'getEndTime',
  );
  return useMemo(() => {
    return startTimeResults.length <= 0 || endTimeResult.length <= 0
      ? []
      : pools.map((pool, i) => {
          return {
            address: pool[0],
            ipfsHash: pool[1],
            startTime: moment.unix(Number(startTimeResults[i].result)).utc(),
            endTime: moment.unix(Number(endTimeResult[i].result)).utc(),
          };
        });
  }, [startTimeResults, endTimeResult]);
}
const idoCalls = [
  {
    methodName: 'rate',
    callInputs: [],
  },
  {
    methodName: 'tokensForSale',
    callInputs: [],
  },
  {
    methodName: 'startTime',
    callInputs: [],
  },
  {
    methodName: 'getEndTime',
    callInputs: [],
  },
  {
    methodName: 'registerTime',
    callInputs: [],
  },
  {
    methodName: 'registerDuration',
    callInputs: [],
  },
  {
    methodName: 'fcfsDuration',
    callInputs: [],
  },
  {
    methodName: 'whitelistEnabled',
    callInputs: [],
  },
  {
    methodName: 'levelsEnabled',
    callInputs: [],
  },
  {
    methodName: 'participants',
    callInputs: [],
  },
  {
    methodName: 'tokensSold',
    callInputs: [],
  },
  {
    methodName: 'getRateNative',
    callInputs: [],
  },
  {
    methodName: 'minSell',
    callInputs: [],
  },
  {
    methodName: 'maxSell',
    callInputs: [],
  },
  {
    methodName: 'isLive',
    callInputs: [],
  },
  {
    methodName: 'isFcfsTime',
    callInputs: [],
  },
  {
    methodName: 'getNativePriceUSD',
    callInputs: [],
  },
  {
    methodName: 'getAllClaims',
    callInputs: [],
  },
  {
    methodName: 'isPaused',
    callInputs: [],
  },
  {
    methodName: 'token',
    callInputs: [],
  },
];
export function useSinglePoolData(poolAddress: string) {
  const idoContract = useIDOContract(poolAddress);
  const results = useMultipleCallMultipleResult(idoContract, idoCalls);
  return useMemo(() => {
    return !results ||
      results.length <= 0 ||
      results.some((result) => result.loading)
      ? undefined
      : idoCalls.reduce((acc, curr, i) => {
          acc[curr.methodName] = results[i].result?.[0];
          return acc;
        }, {} as any);
  }, [results]);
}

export function useIsUserWhiteListed(poolAddress: string) {
  const { account } = useActiveWeb3React();
  const idoContract = useIDOContract(poolAddress);
  const result = useSingleCallResult(
    account ? idoContract : null,
    'whitelisted',
    account ? [account] : [],
  );
  return result.loading ? false : result.result?.[0];
}

export function useUserRemainingAllocation(poolAddress: string) {
  const { account } = useActiveWeb3React();
  const idoContract = useIDOContract(poolAddress);
  const result = useSingleCallResult(
    account ? idoContract : null,
    'userWeight',
    account ? [account] : [],
  );
  const balanceResult = useSingleCallResult(
    account ? idoContract : null,
    'balances',
    account ? [account] : [],
  );
  return result.loading ||
    balanceResult.loading ||
    !result.result?.[0] ||
    !balanceResult.result?.[0]
    ? {
        balance: BigNumber.from(0),
        maxAllocation: BigNumber.from(0),
      }
    : { maxAllocation: result.result?.[0], balance: balanceResult.result?.[0] };
}

export function useClaimedDetails(poolAddress: string) {
  const { account } = useActiveWeb3React();
  const idoContract = useIDOContract(poolAddress);
  const result = useSingleCallResult(
    account ? idoContract : null,
    'getClaims',
    account ? [account] : [],
  );
  // const pendingResult = useSingleCallResult(
  //   account ? idoContract : null,
  //   'calculatePendingTokens',
  //   account ? [account] : [],
  // );
  return result.loading ||
    // pendingResult.loading ||
    !result.result?.[0]
    ? //  ||
      // !pendingResult.result?.[0]
      {
        claims: [],
        // claimed: BigNumber.from(0),
        // pendingReward: BigNumber.from(0),
      }
    : {
        claims: result.result,
        // claimed: result.result?.[0],
        // pendingReward: pendingResult.result?.[0],
      };
}
