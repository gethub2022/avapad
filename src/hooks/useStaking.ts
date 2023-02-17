import { ChainId, CurrencyAmount, Token } from '@/sdk';

import { useCallback, useMemo } from 'react';
import { useLevelsContract, useStakingContract } from './useContract';
import { useTransactionAdder } from '../state/transactions/hooks';
import { useSingleCallResult } from '../state/multicall/hooks';
import { STAKING_TOKEN } from '../config/tokens';
import { useActiveWeb3React } from '.';
import { fromWei } from '@/functions';

const useSushiBar = (address: string | undefined) => {
  const addTransaction = useTransactionAdder();
  const barContract = useStakingContract(address);
  const { account } = useActiveWeb3React();
  const enter = useCallback(
    async (amount: CurrencyAmount<Token> | undefined) => {
      if (amount?.quotient) {
        try {
          const tx = await barContract?.deposit(amount?.quotient.toString());
          return addTransaction(tx, { summary: 'Enter Stake' });
        } catch (e) {
          return e;
        }
      }
    },
    [addTransaction, barContract],
  );

  const leave = useCallback(
    async (amount: CurrencyAmount<Token> | undefined) => {
      try {
        const tx = await barContract?.withdraw(amount?.quotient.toString());
        return addTransaction(tx, { summary: 'Leave Stake' });
      } catch (e) {
        console.error(e);
        return e;
      }
    },
    [addTransaction, barContract],
  );

  const claimStakingReward = useCallback(
    async function () {
      if (!barContract) {
        return;
      }
      try {
        const tx = await barContract.claim();
        return addTransaction(tx as any, {
          summary: `Claim Stake Reward`,
        });
      } catch (e) {
        return e;
      }
    },
    [barContract, account],
  );
  return { enter, leave, claimStakingReward };
};

export default useSushiBar;

export function useBarUserMappings(address: string | undefined) {
  const barContract = useStakingContract(address);
  const levelContract = useLevelsContract();
  const { account, chainId } = useActiveWeb3React();

  const stakesresult = useSingleCallResult(
    account ? barContract : null,
    'userInfo',
    account ? [account] : [],
  );
  const result = useSingleCallResult(
    account ? barContract : null,
    'pendingRewards',
    account ? [account] : [],
  );
  const lockedResult = useSingleCallResult(account ? levelContract : null, "isLocked", account ? [account] : [])
  const unlockTimeResult = useSingleCallResult(account ? levelContract : null, "userUnlocksAt", account ? [account] : [])

  return useMemo(() => {
    return stakesresult.loading ||
      result.loading ||
      unlockTimeResult.loading ||
      !result?.result?.[0] ||
      lockedResult.loading ||
      !(
        Array.isArray(stakesresult?.result) ||
        (stakesresult?.result && stakesresult?.result?.length > 0)
      )
      ? {
        stakedAmount: CurrencyAmount.fromRawAmount(
          STAKING_TOKEN[chainId as ChainId] as Token,
          0,
        ),
        pendingReward: CurrencyAmount.fromRawAmount(
          STAKING_TOKEN[chainId as ChainId] as Token,
          0,
        ),
      }
      : {
        stakedAmount: CurrencyAmount.fromRawAmount(
          STAKING_TOKEN[chainId as ChainId] as Token,
          stakesresult?.result?.[0].toString(),
        ),
        pendingReward: CurrencyAmount.fromRawAmount(
          STAKING_TOKEN[chainId as ChainId] as Token,
          result?.result?.[0].toString(),
        ),
        isLocked: lockedResult.result?.[0],
        unlockAt: unlockTimeResult.result?.[0]
      };
  }, [stakesresult, result, chainId, lockedResult]);
}

export function useBarAPY(address: string | undefined) {
  const barContract = useStakingContract(address);
  const result = useSingleCallResult(barContract, 'liquidityMining', []);
  return useMemo(() => {
    return result.loading || !result?.result?.[0]
      ? 0
      : fromWei(result?.result?.[1], 12);
  }, [result]);
}
