import { Token, ChainId } from '@/sdk';

type ChainTokenMap = {
  readonly [chainId in ChainId]?: Token;
};

// STAKING TOKEN
export const STAKING_TOKEN: ChainTokenMap = {
  [ChainId.ROPSTEN]: new Token(
    ChainId.ROPSTEN,
    '0x312df9acef5874825baf875f04b1261349008c33',
    18,
    'Akitax',
    'PizzCoin',
  ),

  [ChainId.AVALANCHE_TESTNET]: new Token(
    ChainId.AVALANCHE_TESTNET,
    '0x51BA5EF7c51Ab5839e302aDe76f92Ecb893c1d1f',
    18,
    'Xakita',
    'Xakita',
  ),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0xee6922787e9dc2a713520b29f0a08ef228497bf4',
    18,
    'Xakita',
    'Xakita',
  ),
};

export const AKITAX: ChainTokenMap = {
  [ChainId.AVALANCHE_TESTNET]: new Token(
    ChainId.AVALANCHE_TESTNET,
    '0x34141A4D45D4Bcca3daa8a2291F4D004FF314174',
    18,
    'AKITAX',
    'AKITAVAX',
  ),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0xe06fba763c2104db5027f57f6a5be0a0d86308af',
    18,
    'AKITAX',
    'AKITAVAX',
  ),
};

export const XAKITA: ChainTokenMap = {
  [ChainId.AVALANCHE_TESTNET]: new Token(
    ChainId.AVALANCHE_TESTNET,
    '0x51BA5EF7c51Ab5839e302aDe76f92Ecb893c1d1f',
    18,
    'Xakita',
    'Xakita',
  ),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0xee6922787e9dc2a713520b29f0a08ef228497bf4',
    18,
    'Xakita',
    'Xakita',
  ),
};
