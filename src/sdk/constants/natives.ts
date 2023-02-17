import { Avalanche, Ether } from '../entities/Native';

import { ChainId } from '../enums';

export const NATIVE = {
  [ChainId.MAINNET]: Ether.onChain(ChainId.MAINNET),
  [ChainId.ROPSTEN]: Ether.onChain(ChainId.ROPSTEN),
  [ChainId.RINKEBY]: Ether.onChain(ChainId.RINKEBY),
  [ChainId.KOVAN]: Ether.onChain(ChainId.KOVAN),
  [ChainId.AVALANCHE]: Avalanche.onChain(ChainId.AVALANCHE),
  [ChainId.AVALANCHE_TESTNET]: Avalanche.onChain(ChainId.AVALANCHE_TESTNET),
};
