import { BigNumberish } from '@ethersproject/bignumber';
import { Moment } from 'moment-timezone';

export type PoolData = {
  projectName: string;
  startTime: Moment;
  endTime: Moment;
  rate: number;
  tokensForSale: number;
  whitelist: boolean;
  levelsEnabled: boolean;
};

export type ProjectData = {
  logoUrl: string;
  website: string;
  facebook: string;
  twitter: string;
  instagram: string;
  github: string;
  linkedin: string;
  discord: string;
  description: string;
  telegram: string;
  reddit: string;
};
export interface Pool {
  projectName: string;
  whiteListedIpfs: string;
  poolAddress: string;
  endTime: number;
  startTime: number;
  active: boolean;
  maxRaise: string;
  minRaise: string;
  id: string;
  smallLogo: string;
  logo: string;
  tokenType: string;
  tokenSymbol: string;
  shortDescription: string;
  website: string;
  telegram: string;
  twitter: string;
  medium: string;
  github: string;
  private: boolean;
  price: string;
  raiseAmount: number;
  tokenName: string;
  description: string;
  initialSupply: string;
  tokenDistribution: string;
  listingON: string;
  listingTime: string;
  vesting: string;
  claimTime: string;
  claimerType: string;
  tokenAddress: string;
}

export interface WhiteListedUser {
  address: string;
  proof: string[];
  buyingPower: BigNumberish;
  tier: string;
}
