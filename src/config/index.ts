import { ChainId } from '@/sdk';

export const AKITAX_STAKING_ADDRESS = {
  [ChainId.AVALANCHE_TESTNET]: '0x9129943A6d919ac8609a97e9009C6d444d4655dd', //akitax staking address
  [ChainId.AVALANCHE]: '0xa040b0627ADC9365AF2c467b490ED9AB04b6dA16', //akitax staking address
};
export const XAKITA_STAKING_ADDRESS = {
  [ChainId.AVALANCHE_TESTNET]: '0xb6fC17a30e43f99F139fBc8AB9dDe7020Ba6D4B2', // xakita staking address
  [ChainId.AVALANCHE]: '0x43A9d517cEcdAA6C12E935e96f7074Cf767C0f7c', // xakita staking address
};
export const FACTORY_ADDRESS = {
  42: '0x16AA2C81ea48Ea81a17CA06aeae6F88BF6eFD478',
};
type ChainTierMap = {
  readonly [chainId in ChainId]?: Tier[];
};

export type Tier = {
  minAmount: number;
  level: string;
  allocation: number;
};
export const AKITAX_LEVELS: ChainTierMap = {
  [ChainId.AVALANCHE_TESTNET]: [
    {
      minAmount: 250000,
      level: 'Tier1',
      allocation: 4,
    },
    {
      minAmount: 750000,
      level: 'Tier2',
      allocation: 10,
    },
    {
      minAmount: 2000000,
      level: 'Tier3',
      allocation: 30,
    },
    {
      minAmount: 4000000,
      level: 'Tier4',
      allocation: 56,
    },
  ],
  [ChainId.AVALANCHE]: [
    {
      minAmount: 250000,
      level: 'Tier1',
      allocation: 4,
    },
    {
      minAmount: 750000,
      level: 'Tier2',
      allocation: 10,
    },
    {
      minAmount: 2000000,
      level: 'Tier3',
      allocation: 30,
    },
    {
      minAmount: 4000000,
      level: 'Tier4',
      allocation: 56,
    },
  ],
};

export const XAKITA_LEVELS: ChainTierMap = {
  [ChainId.AVALANCHE_TESTNET]: [
    {
      minAmount: 2500000000,
      level: 'Tier1',
      allocation: 4,
    },
    {
      minAmount: 75000000000,
      level: 'Tier2',
      allocation: 10,
    },
    {
      minAmount: 200000000000,
      level: 'Tier3',
      allocation: 30,
    },
    {
      minAmount: 400000000000,
      level: 'Tier4',
      allocation: 56,
    },
  ],
  [ChainId.AVALANCHE]: [
    {
      minAmount: 2500000000,
      level: 'Tier1',
      allocation: 4,
    },
    {
      minAmount: 75000000000,
      level: 'Tier2',
      allocation: 10,
    },
    {
      minAmount: 200000000000,
      level: 'Tier3',
      allocation: 30,
    },
    {
      minAmount: 400000000000,
      level: 'Tier4',
      allocation: 56,
    },
  ],
};
