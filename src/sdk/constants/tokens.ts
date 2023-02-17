import { WETH9_ADDRESS } from './addresses';
import { Token } from '../entities/Token';
import { TokenMap } from '../types/TokenMap';
import { ChainId } from '../enums';

export const WETH9: TokenMap = {
  [ChainId.ROPSTEN]: new Token(
    ChainId.ROPSTEN,
    WETH9_ADDRESS[ChainId.ROPSTEN],
    18,
    'WETH',
    'Wrapped Ether',
  ),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    WETH9_ADDRESS[ChainId.AVALANCHE],
    18,
    'WAVAX',
    'Wrapped AVAX',
  ),
};

export const WNATIVE: TokenMap = {
  [ChainId.ROPSTEN]: WETH9[ChainId.ROPSTEN],
  [ChainId.AVALANCHE]: WETH9[ChainId.AVALANCHE],
};
