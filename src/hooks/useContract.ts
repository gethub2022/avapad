import { Contract } from '@ethersproject/contracts';
import ERC20_ABI from '../constants/abis/erc20.json';

import { getContract } from '../functions/contract';
import { useActiveWeb3React } from './useActiveWeb3React';
import { useMemo } from 'react';
import IDO_ABI from '../constants/abis/ido.json';
import MULTICALL2_ABI from '../constants/abis/multicall2.json';
import { FACTORY_ADDRESS } from '@/config';
import STAKING_ABI from '../constants/abis/stake.json';
import FACTORY_ABI from '@/constants/abis/factory.json';
import LEVELES_ABI from '@/constants/abis/levels.json';
import CLAIMER_ABI from '@/constants/abis/claimer.json';
import { ChainId } from '@/sdk';
import {
  CLAIMER_ADDRESS,
  LEVELMANAGER_ADDRESS,
} from '@/sdk/constants/addresses';
// returns null on errors
export function useContract(
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true,
): Contract | null {
  const { library, account } = useActiveWeb3React();

  return useMemo(() => {
    if (!address || !ABI || !library) return null;
    try {
      return getContract(
        address,
        ABI,
        library,
        withSignerIfPossible && account ? account : undefined,
      );
    } catch (error) {
      console.error('Failed to get contract', error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
}

export function useTokenContract(
  tokenAddress?: string,
  withSignerIfPossible?: boolean,
): Contract | null {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible);
}

export const MULTICALL2_ADDRESS = {
  1: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  3: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  4: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  42: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.AVALANCHE_TESTNET]: '0xA6577666FE76BA7561d2B5edd72152125d8C2891',
  [ChainId.AVALANCHE]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
};
export function useMulticall2Contract() {
  const { chainId } = useActiveWeb3React();
  return useContract(
    chainId && MULTICALL2_ADDRESS[chainId],
    MULTICALL2_ABI,
    false,
  );
}
export function useIDOContract(poolAddress: string) {
  return useContract(poolAddress, IDO_ABI.abi, true);
}
export function useFactoryContract() {
  const { chainId } = useActiveWeb3React();

  return useContract(chainId && FACTORY_ADDRESS[chainId], FACTORY_ABI, true);
}

export function useLevelsContract() {
  const { chainId } = useActiveWeb3React();

  return useContract(
    chainId && LEVELMANAGER_ADDRESS[chainId],
    LEVELES_ABI,
    true,
  );
}

export function useStakingContract(
  staking: string | undefined,
  withSignerIfPossible?: boolean,
): Contract | null {
  return useContract(staking, STAKING_ABI, withSignerIfPossible);
}

export function useClaimerContract(): Contract | null {
  const { chainId } = useActiveWeb3React();
  return useContract(chainId && CLAIMER_ADDRESS[chainId], CLAIMER_ABI, true);
}
