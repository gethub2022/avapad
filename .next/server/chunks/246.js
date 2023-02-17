"use strict";
exports.id = 246;
exports.ids = [246];
exports.modules = {

/***/ 5669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M_": () => (/* binding */ AKITAX_STAKING_ADDRESS),
/* harmony export */   "Y": () => (/* binding */ XAKITA_STAKING_ADDRESS),
/* harmony export */   "nu": () => (/* binding */ AKITAX_LEVELS),
/* harmony export */   "zT": () => (/* binding */ XAKITA_LEVELS)
/* harmony export */ });
/* unused harmony export FACTORY_ADDRESS */
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1878);

const AKITAX_STAKING_ADDRESS = {
  [_sdk__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE_TESTNET */ .a_.AVALANCHE_TESTNET]: '0x9129943A6d919ac8609a97e9009C6d444d4655dd',
  //akitax staking address
  [_sdk__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE */ .a_.AVALANCHE]: '0xa040b0627ADC9365AF2c467b490ED9AB04b6dA16' //akitax staking address

};
const XAKITA_STAKING_ADDRESS = {
  [_sdk__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE_TESTNET */ .a_.AVALANCHE_TESTNET]: '0xb6fC17a30e43f99F139fBc8AB9dDe7020Ba6D4B2',
  // xakita staking address
  [_sdk__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE */ .a_.AVALANCHE]: '0x43A9d517cEcdAA6C12E935e96f7074Cf767C0f7c' // xakita staking address

};
const FACTORY_ADDRESS = {
  42: '0x16AA2C81ea48Ea81a17CA06aeae6F88BF6eFD478'
};
const AKITAX_LEVELS = {
  [_sdk__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE_TESTNET */ .a_.AVALANCHE_TESTNET]: [{
    minAmount: 250000,
    level: 'Tier1',
    allocation: 4
  }, {
    minAmount: 750000,
    level: 'Tier2',
    allocation: 10
  }, {
    minAmount: 2000000,
    level: 'Tier3',
    allocation: 30
  }, {
    minAmount: 4000000,
    level: 'Tier4',
    allocation: 56
  }],
  [_sdk__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE */ .a_.AVALANCHE]: [{
    minAmount: 250000,
    level: 'Tier1',
    allocation: 4
  }, {
    minAmount: 750000,
    level: 'Tier2',
    allocation: 10
  }, {
    minAmount: 2000000,
    level: 'Tier3',
    allocation: 30
  }, {
    minAmount: 4000000,
    level: 'Tier4',
    allocation: 56
  }]
};
const XAKITA_LEVELS = {
  [_sdk__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE_TESTNET */ .a_.AVALANCHE_TESTNET]: [{
    minAmount: 2500000000,
    level: 'Tier1',
    allocation: 4
  }, {
    minAmount: 75000000000,
    level: 'Tier2',
    allocation: 10
  }, {
    minAmount: 200000000000,
    level: 'Tier3',
    allocation: 30
  }, {
    minAmount: 400000000000,
    level: 'Tier4',
    allocation: 56
  }],
  [_sdk__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE */ .a_.AVALANCHE]: [{
    minAmount: 2500000000,
    level: 'Tier1',
    allocation: 4
  }, {
    minAmount: 75000000000,
    level: 'Tier2',
    allocation: 10
  }, {
    minAmount: 200000000000,
    level: 'Tier3',
    allocation: 30
  }, {
    minAmount: 400000000000,
    level: 'Tier4',
    allocation: 56
  }]
};

/***/ }),

/***/ 8532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ NetworkContextName)
/* harmony export */ });
/* unused harmony export ZERO */
/* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4927);
/* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbi__WEBPACK_IMPORTED_MODULE_0__);

const NetworkContextName = 'NETWORK';
const ZERO = jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(0);

/***/ }),

/***/ 8269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useActiveWeb3React),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8532);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(417);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function useActiveWeb3React() {
  // replace with address to impersonate
  const impersonate = false;
  const context = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();
  const contextNetwork = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .NetworkContextName */ .A);
  return context.active ? _objectSpread(_objectSpread({}, context), {}, {
    account: impersonate || context.account
  }) : _objectSpread(_objectSpread({}, contextNetwork), {}, {
    account: impersonate || contextNetwork.account
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useActiveWeb3React);

/***/ }),

/***/ 8246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "dn": () => (/* binding */ useClaimerContract),
  "Z_": () => (/* binding */ useIDOContract),
  "kN": () => (/* binding */ useLevelsContract),
  "JD": () => (/* binding */ useMulticall2Contract),
  "Md": () => (/* binding */ useStakingContract),
  "Ib": () => (/* binding */ useTokenContract)
});

// UNUSED EXPORTS: MULTICALL2_ADDRESS, useContract, useFactoryContract

// EXTERNAL MODULE: ./src/constants/abis/erc20.json
var erc20 = __webpack_require__(9638);
// EXTERNAL MODULE: ./src/functions/contract.ts
var contract = __webpack_require__(1276);
// EXTERNAL MODULE: ./src/hooks/useActiveWeb3React.ts
var hooks_useActiveWeb3React = __webpack_require__(8269);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/constants/abis/ido.json
var ido = __webpack_require__(5415);
;// CONCATENATED MODULE: ./src/constants/abis/multicall2.json
const multicall2_namespaceObject = JSON.parse('[{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall2.Call[]","name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes[]","name":"returnData","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall2.Call[]","name":"calls","type":"tuple[]"}],"name":"blockAndAggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall2.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"internalType":"bytes32","name":"blockHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBlockNumber","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"internalType":"address","name":"coinbase","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"internalType":"uint256","name":"difficulty","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"internalType":"uint256","name":"gaslimit","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastBlockHash","outputs":[{"internalType":"bytes32","name":"blockHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"requireSuccess","type":"bool"},{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall2.Call[]","name":"calls","type":"tuple[]"}],"name":"tryAggregate","outputs":[{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall2.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"requireSuccess","type":"bool"},{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall2.Call[]","name":"calls","type":"tuple[]"}],"name":"tryBlockAndAggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall2.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(5669);
;// CONCATENATED MODULE: ./src/constants/abis/stake.json
const stake_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"address","name":"_levelManager","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"Halted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newAddress","type":"address"}],"name":"LevelManagerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collectedFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"day","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getLockedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"halt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"halted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"levelManager","outputs":[{"internalType":"contract ILevelManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityMining","outputs":[{"internalType":"contract IERC20","name":"stakingToken","type":"address"},{"internalType":"uint256","name":"rewardAPY","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_levelManager","type":"address"}],"name":"setLevelManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_rewardToken","type":"address"},{"internalType":"contract IERC20","name":"_stakingToken","type":"address"},{"internalType":"uint256","name":"_rewardAPY","type":"uint256"}],"name":"setPoolInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"contract StakingTreasury","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"pendingRewards","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"withdrawalAddress","type":"address"}],"name":"withdrawFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawRewards","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/constants/abis/factory.json
const factory_namespaceObject = [];
;// CONCATENATED MODULE: ./src/constants/abis/levels.json
const levels_namespaceObject = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"unlockTime","type":"uint256"},{"indexed":false,"internalType":"address","name":"locker","type":"address"}],"name":"Lock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"LockEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pool","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"PoolEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pool","type":"address"},{"indexed":false,"internalType":"uint256","name":"multiplier","type":"uint256"}],"name":"PoolMultiplierSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pool","type":"address"},{"indexed":false,"internalType":"address","name":"pair","type":"address"}],"name":"PoolPairSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pool","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"PoolPriceSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"id","type":"string"},{"indexed":false,"internalType":"uint8","name":"multiplier","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"lockingPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minAmount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"random","type":"bool"},{"indexed":false,"internalType":"uint8","name":"odds","type":"uint8"},{"indexed":false,"internalType":"bool","name":"vip","type":"bool"}],"name":"TierCreate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"id","type":"string"},{"indexed":false,"internalType":"uint256","name":"idx","type":"uint256"}],"name":"TierRemove","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"id","type":"string"},{"indexed":false,"internalType":"uint8","name":"multiplier","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"lockingPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minAmount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"random","type":"bool"},{"indexed":false,"internalType":"uint8","name":"odds","type":"uint8"},{"indexed":false,"internalType":"bool","name":"vip","type":"bool"}],"name":"TierUpdate","type":"event"},{"inputs":[],"name":"ADDER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"string","name":"_dataUri","type":"string"}],"name":"addIDO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"uint256","name":"multiplier","type":"uint256"},{"internalType":"address","name":"pair","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"addPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"batchLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"batchUnlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"id","type":"string"}],"name":"deleteTier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"forceLevel","outputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"uint256","name":"poolIdx","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"forceLevelAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllIDOs","outputs":[{"components":[{"internalType":"address","name":"ido","type":"address"},{"internalType":"string","name":"dataUri","type":"string"}],"internalType":"struct LevelManager.IDOInfo[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAlwaysRegister","outputs":[{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"string[]","name":"","type":"string[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"}],"name":"getPoolPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"id","type":"string"}],"name":"getTierById","outputs":[{"components":[{"internalType":"string","name":"id","type":"string"},{"internalType":"uint8","name":"multiplier","type":"uint8"},{"internalType":"uint256","name":"lockingPeriod","type":"uint256"},{"internalType":"uint256","name":"minAmount","type":"uint256"},{"internalType":"bool","name":"random","type":"bool"},{"internalType":"uint8","name":"odds","type":"uint8"},{"internalType":"bool","name":"vip","type":"bool"}],"internalType":"struct ILevelManager.Tier","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTierIds","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getUserAmountAndPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getUserTier","outputs":[{"components":[{"internalType":"string","name":"id","type":"string"},{"internalType":"uint8","name":"multiplier","type":"uint8"},{"internalType":"uint256","name":"lockingPeriod","type":"uint256"},{"internalType":"uint256","name":"minAmount","type":"uint256"},{"internalType":"bool","name":"random","type":"bool"},{"internalType":"uint8","name":"odds","type":"uint8"},{"internalType":"bool","name":"vip","type":"bool"}],"internalType":"struct ILevelManager.Tier","name":"","type":"tuple"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getUserUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"idoInfos","outputs":[{"internalType":"address","name":"ido","type":"address"},{"internalType":"string","name":"dataUri","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isIDO","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"idoStart","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"poolEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"poolMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"poolPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"poolPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pools","outputs":[{"internalType":"contract IStakingLockableExternal","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"levelIdx","type":"uint256"},{"internalType":"uint256","name":"poolIdx","type":"uint256"}],"name":"setAccountLevel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"uint256","name":"multiplier","type":"uint256"}],"name":"setPoolMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"pair","type":"address"}],"name":"setPoolPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"setPoolPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"id","type":"string"},{"internalType":"uint8","name":"multiplier","type":"uint8"},{"internalType":"uint256","name":"lockingPeriod","type":"uint256"},{"internalType":"uint256","name":"minAmount","type":"uint256"},{"internalType":"bool","name":"random","type":"bool"},{"internalType":"uint8","name":"odds","type":"uint8"},{"internalType":"bool","name":"vip","type":"bool"}],"name":"setTier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tiers","outputs":[{"internalType":"string","name":"id","type":"string"},{"internalType":"uint8","name":"multiplier","type":"uint8"},{"internalType":"uint256","name":"lockingPeriod","type":"uint256"},{"internalType":"uint256","name":"minAmount","type":"uint256"},{"internalType":"bool","name":"random","type":"bool"},{"internalType":"uint8","name":"odds","type":"uint8"},{"internalType":"bool","name":"vip","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"toggleLocking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"togglePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"string","name":"_dataUri","type":"string"}],"name":"updateIDOUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userUnlocksAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ./src/constants/abis/claimer.json
const claimer_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"percent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claimIdx","type":"uint256"}],"name":"ClaimDelayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"percent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claimIdx","type":"uint256"}],"name":"ClaimReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"percent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claimIdx","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"ClaimingPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"disIdx","type":"uint256"},{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"claimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"claimedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"claims","outputs":[{"internalType":"uint256","name":"unlockTime","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"disIdx","type":"uint256"},{"internalType":"uint256","name":"claimIdx","type":"uint256"},{"internalType":"uint256","name":"newUnlockTime","type":"uint256"}],"name":"delayClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"distributions","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"string","name":"ipfs","type":"string"},{"internalType":"bytes32","name":"root","type":"bytes32"},{"internalType":"bool","name":"paused","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllDistributions","outputs":[{"components":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"string","name":"ipfs","type":"string"},{"internalType":"bytes32","name":"root","type":"bytes32"},{"internalType":"bool","name":"paused","type":"bool"}],"internalType":"struct Claimer.Distribution[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"disIdx","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getClaimableAccountAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"disIdx","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"getClaims","outputs":[{"components":[{"internalType":"uint256","name":"unlockTime","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct Claimer.Claim[]","name":"","type":"tuple[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bool[]","name":"","type":"bool[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"distribution","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getRemainingAccountAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"distribution","type":"uint256"}],"name":"getTotalRemainingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"isClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"disIdx","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"}],"name":"pauseClaiming","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"disIdx","type":"uint256"},{"internalType":"uint256","name":"claimIdx","type":"uint256"}],"name":"releaseClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"string","name":"_ipfs","type":"string"},{"internalType":"bytes32","name":"_root","type":"bytes32"},{"internalType":"uint256[]","name":"times","type":"uint256[]"},{"internalType":"uint256[]","name":"percents","type":"uint256[]"},{"internalType":"uint256","name":"_totalTokens","type":"uint256"}],"name":"sendTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"disIdx","type":"uint256"},{"internalType":"address","name":"_token","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalDistributions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ./src/sdk/index.ts + 15 modules
var sdk = __webpack_require__(1878);
// EXTERNAL MODULE: ./src/sdk/constants/addresses.ts
var addresses = __webpack_require__(9389);
;// CONCATENATED MODULE: ./src/hooks/useContract.ts












 // returns null on errors

function useContract(address, ABI, withSignerIfPossible = true) {
  const {
    library,
    account
  } = (0,hooks_useActiveWeb3React/* useActiveWeb3React */.a)();
  return (0,external_react_.useMemo)(() => {
    if (!address || !ABI || !library) return null;

    try {
      return (0,contract/* getContract */.uN)(address, ABI, library, withSignerIfPossible && account ? account : undefined);
    } catch (error) {
      console.error('Failed to get contract', error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
}
function useTokenContract(tokenAddress, withSignerIfPossible) {
  return useContract(tokenAddress, erc20, withSignerIfPossible);
}
const MULTICALL2_ADDRESS = {
  1: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  3: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  4: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  42: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [sdk/* ChainId.AVALANCHE_TESTNET */.a_.AVALANCHE_TESTNET]: '0xA6577666FE76BA7561d2B5edd72152125d8C2891',
  [sdk/* ChainId.AVALANCHE */.a_.AVALANCHE]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3'
};
function useMulticall2Contract() {
  const {
    chainId
  } = (0,hooks_useActiveWeb3React/* useActiveWeb3React */.a)();
  return useContract(chainId && MULTICALL2_ADDRESS[chainId], multicall2_namespaceObject, false);
}
function useIDOContract(poolAddress) {
  return useContract(poolAddress, ido/* abi */.Mt, true);
}
function useFactoryContract() {
  const {
    chainId
  } = useActiveWeb3React();
  return useContract(chainId && FACTORY_ADDRESS[chainId], FACTORY_ABI, true);
}
function useLevelsContract() {
  const {
    chainId
  } = (0,hooks_useActiveWeb3React/* useActiveWeb3React */.a)();
  return useContract(chainId && addresses/* LEVELMANAGER_ADDRESS */.Xi[chainId], levels_namespaceObject, true);
}
function useStakingContract(staking, withSignerIfPossible) {
  return useContract(staking, stake_namespaceObject, withSignerIfPossible);
}
function useClaimerContract() {
  const {
    chainId
  } = (0,hooks_useActiveWeb3React/* useActiveWeb3React */.a)();
  return useContract(chainId && addresses/* CLAIMER_ADDRESS */.by[chainId], claimer_namespaceObject, true);
}

/***/ }),

/***/ 9389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AI": () => (/* binding */ WETH9_ADDRESS),
/* harmony export */   "ht": () => (/* binding */ AGGREGATOR_ADDRESS),
/* harmony export */   "Xi": () => (/* binding */ LEVELMANAGER_ADDRESS),
/* harmony export */   "by": () => (/* binding */ CLAIMER_ADDRESS)
/* harmony export */ });
/* unused harmony export WNATIVE_ADDRESS */
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9090);

const WETH9_ADDRESS = {
  [_enums__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.ROPSTEN */ .a.ROPSTEN]: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  [_enums__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE */ .a.AVALANCHE]: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB'
};
const WNATIVE_ADDRESS = {
  [_enums__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.ROPSTEN */ .a.ROPSTEN]: WETH9_ADDRESS[_enums__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.ROPSTEN */ .a.ROPSTEN],
  [_enums__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE */ .a.AVALANCHE]: WETH9_ADDRESS[_enums__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE */ .a.AVALANCHE]
};
const AGGREGATOR_ADDRESS = {
  [_enums__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE_TESTNET */ .a.AVALANCHE_TESTNET]: '0x5498BB86BC934c8D34FDA08E81D444153d0D06aD',
  [_enums__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE */ .a.AVALANCHE]: '0x0A77230d17318075983913bC2145DB16C7366156'
};
const LEVELMANAGER_ADDRESS = {
  [_enums__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE_TESTNET */ .a.AVALANCHE_TESTNET]: '0x1ef658af58d82e007b6520a2d65e715a2db2ca8d',
  [_enums__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE */ .a.AVALANCHE]: '0xc8200908f093aE9474980d9dc17d64672b70134b'
};
const CLAIMER_ADDRESS = {
  [_enums__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE_TESTNET */ .a.AVALANCHE_TESTNET]: '0x500A4Fc0Cc321ec6E4218c18e019675F9Da1f00E',
  [_enums__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE */ .a.AVALANCHE]: '0xFa3A54c5b2D874968B3Ab6C0c514b50b324295e5'
};

/***/ }),

/***/ 9090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* reexport */ ChainId),
  "m": () => (/* reexport */ Rounding)
});

;// CONCATENATED MODULE: ./src/sdk/enums/ChainId.ts
let ChainId;

(function (ChainId) {
  ChainId[ChainId["MAINNET"] = 1] = "MAINNET";
  ChainId[ChainId["ROPSTEN"] = 3] = "ROPSTEN";
  ChainId[ChainId["RINKEBY"] = 4] = "RINKEBY";
  ChainId[ChainId["G\xD6RLI"] = 5] = "G\xD6RLI";
  ChainId[ChainId["KOVAN"] = 42] = "KOVAN";
  ChainId[ChainId["MATIC"] = 137] = "MATIC";
  ChainId[ChainId["MATIC_TESTNET"] = 80001] = "MATIC_TESTNET";
  ChainId[ChainId["FANTOM"] = 250] = "FANTOM";
  ChainId[ChainId["FANTOM_TESTNET"] = 4002] = "FANTOM_TESTNET";
  ChainId[ChainId["XDAI"] = 100] = "XDAI";
  ChainId[ChainId["BSC"] = 56] = "BSC";
  ChainId[ChainId["BSC_TESTNET"] = 97] = "BSC_TESTNET";
  ChainId[ChainId["ARBITRUM"] = 42161] = "ARBITRUM";
  ChainId[ChainId["ARBITRUM_TESTNET"] = 79377087078960] = "ARBITRUM_TESTNET";
  ChainId[ChainId["MOONBEAM_TESTNET"] = 1287] = "MOONBEAM_TESTNET";
  ChainId[ChainId["MOONBEAM"] = 1284] = "MOONBEAM";
  ChainId[ChainId["AVALANCHE"] = 43114] = "AVALANCHE";
  ChainId[ChainId["AVALANCHE_TESTNET"] = 43113] = "AVALANCHE_TESTNET";
  ChainId[ChainId["HECO"] = 128] = "HECO";
  ChainId[ChainId["HECO_TESTNET"] = 256] = "HECO_TESTNET";
  ChainId[ChainId["HARMONY"] = 1666600000] = "HARMONY";
  ChainId[ChainId["HARMONY_TESTNET"] = 1666700000] = "HARMONY_TESTNET";
  ChainId[ChainId["OKEX"] = 66] = "OKEX";
  ChainId[ChainId["OKEX_TESTNET"] = 65] = "OKEX_TESTNET";
  ChainId[ChainId["CELO"] = 42220] = "CELO";
  ChainId[ChainId["PALM"] = 11297108109] = "PALM";
  ChainId[ChainId["PALM_TESTNET"] = 11297108099] = "PALM_TESTNET";
  ChainId[ChainId["MOONRIVER"] = 1285] = "MOONRIVER";
  ChainId[ChainId["FUSE"] = 122] = "FUSE";
  ChainId[ChainId["SHIDEN"] = 336] = "SHIDEN";
  ChainId[ChainId["PLASM_TESTNET"] = 80] = "PLASM_TESTNET";
})(ChainId || (ChainId = {}));
;// CONCATENATED MODULE: ./src/sdk/enums/Rounding.ts
let Rounding;

(function (Rounding) {
  Rounding[Rounding["ROUND_DOWN"] = 0] = "ROUND_DOWN";
  Rounding[Rounding["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
  Rounding[Rounding["ROUND_UP"] = 2] = "ROUND_UP";
})(Rounding || (Rounding = {}));
;// CONCATENATED MODULE: ./src/sdk/enums/index.ts



/***/ }),

/***/ 1878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a_": () => (/* reexport */ enums/* ChainId */.a),
  "ih": () => (/* reexport */ CurrencyAmount),
  "B5": () => (/* reexport */ NATIVE),
  "WU": () => (/* reexport */ Token),
  "xE": () => (/* reexport */ ZERO)
});

// UNUSED EXPORTS: AbstractCurrency, FIVE, Fraction, MaxUint256, NativeCurrency, ONE, Rounding, TEN, THREE, TWO, _100, _1000, _997, currencyEquals, validateAndParseAddress

// EXTERNAL MODULE: external "jsbi"
var external_jsbi_ = __webpack_require__(4927);
var external_jsbi_default = /*#__PURE__*/__webpack_require__.n(external_jsbi_);
;// CONCATENATED MODULE: ./src/sdk/constants/numbers.ts

const MaxUint256 = external_jsbi_default().BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'); // exports for internal consumption

const ZERO = external_jsbi_default().BigInt(0);
const ONE = external_jsbi_default().BigInt(1);
const TWO = external_jsbi_default().BigInt(2);
const THREE = external_jsbi_default().BigInt(3);
const FIVE = external_jsbi_default().BigInt(5);
const TEN = external_jsbi_default().BigInt(10);
const _100 = external_jsbi_default().BigInt(100);
const _997 = external_jsbi_default().BigInt(997);
const _1000 = external_jsbi_default().BigInt(1000);
// EXTERNAL MODULE: external "tiny-invariant"
var external_tiny_invariant_ = __webpack_require__(4050);
var external_tiny_invariant_default = /*#__PURE__*/__webpack_require__.n(external_tiny_invariant_);
;// CONCATENATED MODULE: ./src/sdk/entities/AbstractCurrency.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * A currency is any fungible financial instrument, including Ether, all ERC20 tokens, and other chain-native currencies
 */

class AbstractCurrency {
  /**
   * Returns whether the currency is native to the chain and must be wrapped (e.g. Ether)
   */

  /**
   * Returns whether the currency is a token that is usable in Uniswap without wrapping
   */

  /**
   * The chain ID on which this currency resides
   */

  /**
   * The decimals used in representing currency amounts
   */

  /**
   * The symbol of the currency, i.e. a short textual non-unique identifier
   */

  /**
   * The name of the currency, i.e. a descriptive textual non-unique identifier
   */

  /**
   * Constructs an instance of the base class `BaseCurrency`.
   * @param chainId the chain ID on which this currency resides
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  constructor(chainId, decimals, symbol, name) {
    _defineProperty(this, "isNative", void 0);

    _defineProperty(this, "isToken", void 0);

    _defineProperty(this, "chainId", void 0);

    _defineProperty(this, "decimals", void 0);

    _defineProperty(this, "symbol", void 0);

    _defineProperty(this, "name", void 0);

    external_tiny_invariant_default()(Number.isSafeInteger(chainId), 'CHAIN_ID');
    external_tiny_invariant_default()(decimals >= 0 && decimals < 255 && Number.isInteger(decimals), 'DECIMALS');
    this.chainId = chainId;
    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
  }
  /**
   * Returns whether this currency is functionally equivalent to the other currency
   * @param other the other currency
   */


  /**
   * Returns token address. Useful in cases where a dependency is needed to detect changes (e.g. useEffect).
   */
  serialize() {
    return this.wrapped.address;
  }

}
;// CONCATENATED MODULE: ./src/sdk/entities/NativeCurrency.ts
function NativeCurrency_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Represents the native currency of the chain on which it resides, e.g.
 */

class NativeCurrency extends AbstractCurrency {
  constructor(...args) {
    super(...args);

    NativeCurrency_defineProperty(this, "isNative", true);

    NativeCurrency_defineProperty(this, "isToken", false);
  }

}
// EXTERNAL MODULE: ./src/sdk/constants/addresses.ts
var addresses = __webpack_require__(9389);
// EXTERNAL MODULE: external "@ethersproject/address"
var address_ = __webpack_require__(7398);
// EXTERNAL MODULE: external "tiny-warning"
var external_tiny_warning_ = __webpack_require__(4951);
var external_tiny_warning_default = /*#__PURE__*/__webpack_require__.n(external_tiny_warning_);
;// CONCATENATED MODULE: ./src/sdk/functions/validateAndParseAddress.ts


 // warns if addresses are not checksummed

function validateAndParseAddress(address) {
  try {
    const checksummedAddress = (0,address_.getAddress)(address);
    external_tiny_warning_default()(address === checksummedAddress, `${address} is not checksummed.`);
    return checksummedAddress;
  } catch (error) {
    external_tiny_invariant_default()(false, `${address} is not a valid address.`);
  }
}
;// CONCATENATED MODULE: ./src/sdk/entities/Token.ts
function Token_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Represents an ERC20 token with a unique address and some metadata.
 */

class Token extends AbstractCurrency {
  constructor(chainId, address, decimals, symbol, name) {
    super(chainId, decimals, symbol, name);

    Token_defineProperty(this, "chainId", void 0);

    Token_defineProperty(this, "address", void 0);

    Token_defineProperty(this, "isNative", false);

    Token_defineProperty(this, "isToken", true);

    this.chainId = chainId;
    this.address = validateAndParseAddress(address);
  }
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */


  equals(other) {
    return other.isToken && this.chainId === other.chainId && this.address === other.address;
  }
  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */


  sortsBefore(other) {
    external_tiny_invariant_default()(this.chainId === other.chainId, 'CHAIN_IDS');
    external_tiny_invariant_default()(this.address !== other.address, 'ADDRESSES');
    return this.address.toLowerCase() < other.address.toLowerCase();
  }
  /**
   * Return this token, which does not need to be wrapped
   */


  get wrapped() {
    return this;
  }

}
/**
 * Compares two currencies for equality
 */

function currencyEquals(currencyA, currencyB) {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB);
  } else if (currencyA instanceof Token) {
    return false;
  } else if (currencyB instanceof Token) {
    return false;
  } else {
    return currencyA === currencyB;
  }
}
// EXTERNAL MODULE: ./src/sdk/enums/index.ts + 2 modules
var enums = __webpack_require__(9090);
;// CONCATENATED MODULE: ./src/sdk/constants/tokens.ts



const WETH9 = {
  [enums/* ChainId.ROPSTEN */.a.ROPSTEN]: new Token(enums/* ChainId.ROPSTEN */.a.ROPSTEN, addresses/* WETH9_ADDRESS */.AI[enums/* ChainId.ROPSTEN */.a.ROPSTEN], 18, 'WETH', 'Wrapped Ether'),
  [enums/* ChainId.AVALANCHE */.a.AVALANCHE]: new Token(enums/* ChainId.AVALANCHE */.a.AVALANCHE, addresses/* WETH9_ADDRESS */.AI[enums/* ChainId.AVALANCHE */.a.AVALANCHE], 18, 'WAVAX', 'Wrapped AVAX')
};
const WNATIVE = {
  [enums/* ChainId.ROPSTEN */.a.ROPSTEN]: WETH9[enums/* ChainId.ROPSTEN */.a.ROPSTEN],
  [enums/* ChainId.AVALANCHE */.a.AVALANCHE]: WETH9[enums/* ChainId.AVALANCHE */.a.AVALANCHE]
};
;// CONCATENATED MODULE: ./src/sdk/entities/Native/Avalanche.ts
function Avalanche_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Avalanche extends NativeCurrency {
  constructor(chainId) {
    super(chainId, 18, 'AVAX', 'Avalanche');
  }

  get wrapped() {
    const wnative = WNATIVE[this.chainId];
    external_tiny_invariant_default()(!!wnative, 'WRAPPED');
    return wnative;
  }

  static onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) !== null && _this$_cache$chainId !== void 0 ? _this$_cache$chainId : this._cache[chainId] = new Avalanche(chainId);
  }

  equals(other) {
    return other.isNative && other.chainId === this.chainId;
  }

}

Avalanche_defineProperty(Avalanche, "_cache", {});
;// CONCATENATED MODULE: ./src/sdk/entities/Native/Ether.ts
function Ether_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Ether is the main usage of a 'native' currency, i.e. for Ethereum mainnet and all testnets
 */

class Ether extends NativeCurrency {
  constructor(chainId) {
    super(chainId, 18, 'ETH', 'Ether');
  }

  get wrapped() {
    const weth9 = WETH9[this.chainId];
    external_tiny_invariant_default()(!!weth9, 'WRAPPED');
    return weth9;
  }

  static onChain(chainId) {
    var _this$_etherCache$cha;

    return (_this$_etherCache$cha = this._etherCache[chainId]) !== null && _this$_etherCache$cha !== void 0 ? _this$_etherCache$cha : this._etherCache[chainId] = new Ether(chainId);
  }

  equals(other) {
    return other.isNative && other.chainId === this.chainId;
  }

}

Ether_defineProperty(Ether, "_etherCache", {});
;// CONCATENATED MODULE: ./src/sdk/entities/Native/index.ts
// Native exports


;// CONCATENATED MODULE: ./src/sdk/constants/natives.ts


const NATIVE = {
  [enums/* ChainId.MAINNET */.a.MAINNET]: Ether.onChain(enums/* ChainId.MAINNET */.a.MAINNET),
  [enums/* ChainId.ROPSTEN */.a.ROPSTEN]: Ether.onChain(enums/* ChainId.ROPSTEN */.a.ROPSTEN),
  [enums/* ChainId.RINKEBY */.a.RINKEBY]: Ether.onChain(enums/* ChainId.RINKEBY */.a.RINKEBY),
  [enums/* ChainId.KOVAN */.a.KOVAN]: Ether.onChain(enums/* ChainId.KOVAN */.a.KOVAN),
  [enums/* ChainId.AVALANCHE */.a.AVALANCHE]: Avalanche.onChain(enums/* ChainId.AVALANCHE */.a.AVALANCHE),
  [enums/* ChainId.AVALANCHE_TESTNET */.a.AVALANCHE_TESTNET]: Avalanche.onChain(enums/* ChainId.AVALANCHE_TESTNET */.a.AVALANCHE_TESTNET)
};
;// CONCATENATED MODULE: ./src/sdk/constants/index.ts


// EXTERNAL MODULE: external "big.js"
var external_big_js_ = __webpack_require__(6297);
var external_big_js_default = /*#__PURE__*/__webpack_require__.n(external_big_js_);
// EXTERNAL MODULE: external "decimal.js-light"
var external_decimal_js_light_ = __webpack_require__(8480);
var external_decimal_js_light_default = /*#__PURE__*/__webpack_require__.n(external_decimal_js_light_);
// EXTERNAL MODULE: external "toformat"
var external_toformat_ = __webpack_require__(7878);
var external_toformat_default = /*#__PURE__*/__webpack_require__.n(external_toformat_);
;// CONCATENATED MODULE: ./src/sdk/entities/Fraction.ts
function Fraction_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Decimal = external_toformat_default()((external_decimal_js_light_default()));
const Big = external_toformat_default()((external_big_js_default()));
Big.strict = true;
const toSignificantRounding = {
  [enums/* Rounding.ROUND_DOWN */.m.ROUND_DOWN]: Decimal.ROUND_DOWN,
  [enums/* Rounding.ROUND_HALF_UP */.m.ROUND_HALF_UP]: Decimal.ROUND_HALF_UP,
  [enums/* Rounding.ROUND_UP */.m.ROUND_UP]: Decimal.ROUND_UP
};
const toFixedRounding = {
  [enums/* Rounding.ROUND_DOWN */.m.ROUND_DOWN]: 0,
  [enums/* Rounding.ROUND_HALF_UP */.m.ROUND_HALF_UP]: 1,
  [enums/* Rounding.ROUND_UP */.m.ROUND_UP]: 3
};
class Fraction {
  constructor(numerator, denominator = external_jsbi_default().BigInt(1)) {
    Fraction_defineProperty(this, "numerator", void 0);

    Fraction_defineProperty(this, "denominator", void 0);

    this.numerator = external_jsbi_default().BigInt(numerator);
    this.denominator = external_jsbi_default().BigInt(denominator);
  }

  static tryParseFraction(fractionish) {
    if (fractionish instanceof (external_jsbi_default()) || typeof fractionish === 'number' || typeof fractionish === 'string') return new Fraction(fractionish);
    if ('numerator' in fractionish && 'denominator' in fractionish) return fractionish;
    throw new Error('Could not parse fraction');
  } // performs floor division


  get quotient() {
    return external_jsbi_default().divide(this.numerator, this.denominator);
  } // remainder after floor division


  get remainder() {
    return new Fraction(external_jsbi_default().remainder(this.numerator, this.denominator), this.denominator);
  }

  invert() {
    return new Fraction(this.denominator, this.numerator);
  }

  add(other) {
    const otherParsed = Fraction.tryParseFraction(other);

    if (external_jsbi_default().equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(external_jsbi_default().add(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(external_jsbi_default().add(external_jsbi_default().multiply(this.numerator, otherParsed.denominator), external_jsbi_default().multiply(otherParsed.numerator, this.denominator)), external_jsbi_default().multiply(this.denominator, otherParsed.denominator));
  }

  subtract(other) {
    const otherParsed = Fraction.tryParseFraction(other);

    if (external_jsbi_default().equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(external_jsbi_default().subtract(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(external_jsbi_default().subtract(external_jsbi_default().multiply(this.numerator, otherParsed.denominator), external_jsbi_default().multiply(otherParsed.numerator, this.denominator)), external_jsbi_default().multiply(this.denominator, otherParsed.denominator));
  }

  lessThan(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    return external_jsbi_default().lessThan(external_jsbi_default().multiply(this.numerator, otherParsed.denominator), external_jsbi_default().multiply(otherParsed.numerator, this.denominator));
  }

  equalTo(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    return external_jsbi_default().equal(external_jsbi_default().multiply(this.numerator, otherParsed.denominator), external_jsbi_default().multiply(otherParsed.numerator, this.denominator));
  }

  greaterThan(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    return external_jsbi_default().greaterThan(external_jsbi_default().multiply(this.numerator, otherParsed.denominator), external_jsbi_default().multiply(otherParsed.numerator, this.denominator));
  }

  multiply(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(external_jsbi_default().multiply(this.numerator, otherParsed.numerator), external_jsbi_default().multiply(this.denominator, otherParsed.denominator));
  }

  divide(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(external_jsbi_default().multiply(this.numerator, otherParsed.denominator), external_jsbi_default().multiply(this.denominator, otherParsed.numerator));
  }

  toSignificant(significantDigits, format = {
    groupSeparator: ''
  }, rounding = enums/* Rounding.ROUND_HALF_UP */.m.ROUND_HALF_UP) {
    external_tiny_invariant_default()(Number.isInteger(significantDigits), `${significantDigits} is not an integer.`);
    external_tiny_invariant_default()(significantDigits > 0, `${significantDigits} is not positive.`);
    Decimal.set({
      precision: significantDigits + 1,
      rounding: toSignificantRounding[rounding]
    });
    const quotient = new Decimal(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  }

  toFixed(decimalPlaces, format = {
    groupSeparator: ''
  }, rounding = enums/* Rounding.ROUND_HALF_UP */.m.ROUND_HALF_UP) {
    external_tiny_invariant_default()(Number.isInteger(decimalPlaces), `${decimalPlaces} is not an integer.`);
    external_tiny_invariant_default()(decimalPlaces >= 0, `${decimalPlaces} is negative.`);
    Big.DP = decimalPlaces;
    Big.RM = toFixedRounding[rounding];
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format);
  }
  /**
   * Helper method for converting any super class back to a fraction
   */


  get asFraction() {
    return new Fraction(this.numerator, this.denominator);
  }

}
;// CONCATENATED MODULE: ./src/sdk/entities/CurrencyAmount.ts
function CurrencyAmount_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const CurrencyAmount_Big = external_toformat_default()((external_big_js_default()));
CurrencyAmount_Big.strict = true;
class CurrencyAmount extends Fraction {
  /**
   * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
   * @param currency the currency in the amount
   * @param rawAmount the raw token or ether amount
   */
  static fromRawAmount(currency, rawAmount) {
    return new CurrencyAmount(currency, rawAmount);
  }
  /**
   * Construct a currency amount with a denominator that is not equal to 1
   * @param currency the currency
   * @param numerator the numerator of the fractional token amount
   * @param denominator the denominator of the fractional token amount
   */


  static fromFractionalAmount(currency, numerator, denominator) {
    return new CurrencyAmount(currency, numerator, denominator);
  }

  constructor(currency, numerator, denominator) {
    super(numerator, denominator);

    CurrencyAmount_defineProperty(this, "currency", void 0);

    CurrencyAmount_defineProperty(this, "decimalScale", void 0);

    external_tiny_invariant_default()(external_jsbi_default().lessThanOrEqual(this.quotient, MaxUint256), 'AMOUNT');
    this.currency = currency;
    this.decimalScale = external_jsbi_default().exponentiate(external_jsbi_default().BigInt(10), external_jsbi_default().BigInt(currency.decimals));
  }

  add(other) {
    external_tiny_invariant_default()(this.currency.equals(other.currency), 'CURRENCY');
    const added = super.add(other);
    return CurrencyAmount.fromFractionalAmount(this.currency, added.numerator, added.denominator);
  }

  subtract(other) {
    external_tiny_invariant_default()(this.currency.equals(other.currency), 'CURRENCY');
    const subtracted = super.subtract(other);
    return CurrencyAmount.fromFractionalAmount(this.currency, subtracted.numerator, subtracted.denominator);
  }

  multiply(other) {
    const multiplied = super.multiply(other);
    return CurrencyAmount.fromFractionalAmount(this.currency, multiplied.numerator, multiplied.denominator);
  }

  divide(other) {
    const divided = super.divide(other);
    return CurrencyAmount.fromFractionalAmount(this.currency, divided.numerator, divided.denominator);
  }

  toSignificant(significantDigits = 6, format, rounding = enums/* Rounding.ROUND_DOWN */.m.ROUND_DOWN) {
    return super.divide(this.decimalScale).toSignificant(significantDigits, format, rounding);
  }

  toFixed(decimalPlaces = this.currency.decimals, format, rounding = enums/* Rounding.ROUND_DOWN */.m.ROUND_DOWN) {
    external_tiny_invariant_default()(decimalPlaces <= this.currency.decimals, 'DECIMALS');
    return super.divide(this.decimalScale).toFixed(decimalPlaces, format, rounding);
  }

  toExact(format = {
    groupSeparator: ''
  }) {
    CurrencyAmount_Big.DP = this.currency.decimals;
    return new CurrencyAmount_Big(this.quotient.toString()).div(this.decimalScale.toString()).toFormat(format);
  }

  get wrapped() {
    if (this.currency.isToken) return this;
    return CurrencyAmount.fromFractionalAmount(this.currency.wrapped, this.numerator, this.denominator);
  }
  /**
   * Returns a string representation of the address and currency amount.
   * Useful in cases where a dependency is needed to detect changes (e.g. useEffect).
   * @return string [0x6B3595068778DD592e39A122f4f5a5cF09C90fE2 - 1323.94]
   */


  serialize() {
    return `[${this.currency.wrapped.address} - ${this.toExact()}]`;
  }

}
;// CONCATENATED MODULE: ./src/sdk/entities/index.ts






;// CONCATENATED MODULE: ./src/sdk/functions/index.ts

;// CONCATENATED MODULE: ./src/sdk/index.ts






/***/ }),

/***/ 9638:
/***/ ((module) => {

module.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');

/***/ }),

/***/ 5415:
/***/ ((module) => {

module.exports = JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"_id","type":"string"},{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"uint256","name":"_rate","type":"uint256"},{"internalType":"uint256","name":"_tokensForSale","type":"uint256"},{"internalType":"address","name":"_fundToken","type":"address"},{"internalType":"address","name":"_priceFeed","type":"address"},{"internalType":"bool[2]","name":"_saleTypes","type":"bool[2]"},{"internalType":"address","name":"_levelManager","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"CapChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"percent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claimIdx","type":"uint256"}],"name":"ClaimDelayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"percent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claimIdx","type":"uint256"}],"name":"ClaimReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"percent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claimIdx","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"ClaimingPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"}],"name":"DurationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"}],"name":"FCFSDurationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"}],"name":"FundTokenChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"staking","type":"address"}],"name":"LevelManagerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"LevelsEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"LockOnRegisterEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"MaxChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"MinChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"RateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"}],"name":"RegisterDurationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"RegisterTimeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"string","name":"levelId","type":"string"},{"indexed":false,"internalType":"uint256","name":"weight","type":"uint256"},{"indexed":false,"internalType":"bool","name":"tokensLocked","type":"bool"}],"name":"Registered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"SaleOpenedForAllLevels","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"StartChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"VipEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"WhitelistEnabled","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"batchAddWhitelisted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"batchRemoveWhitelisted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buyTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"purchaseAmountWei","type":"uint256"}],"name":"calculatePurchaseAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"purchaseAmountUSDWei","type":"uint256"}],"name":"calculatePurchaseAmountUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"claims","outputs":[{"internalType":"uint256","name":"unlockTime","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"claimIdx","type":"uint256"},{"internalType":"uint256","name":"newUnlockTime","type":"uint256"}],"name":"delayClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"duration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fcfsDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"firstPurchaseBlockN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"forceLevelsOpenAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundByTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllClaims","outputs":[{"components":[{"internalType":"uint256","name":"unlockTime","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct WithClaimer.Claim[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getClaimableAccountAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getClaims","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bool[]","name":"","type":"bool[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"id","type":"string"}],"name":"getLevelAddresses","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"id","type":"string"}],"name":"getLevelNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLevelNumbers","outputs":[{"internalType":"string[]","name":"","type":"string[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinMaxLimits","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNativePriceUSD","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRateNative","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getRemainingAccountAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getUserLevelAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getUserLevelState","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWhitelistedAddresses","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"id","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"isClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isFcfsTime","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isRegistering","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastPurchaseBlockN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"levelAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"levelManager","outputs":[{"internalType":"contract ILevelManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"levelWinners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"levelsEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"levelsOpenAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockOnRegister","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"openForAllLevels","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"participants","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"pauseClaiming","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"raised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"registerDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"registerTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"claimIdx","type":"uint256"}],"name":"releaseClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256[]","name":"times","type":"uint256[]"},{"internalType":"uint256[]","name":"percents","type":"uint256[]"}],"name":"setClaimInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newDuration","type":"uint256"}],"name":"setDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newDuration","type":"uint256"}],"name":"setFCFSDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"setFundToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ILevelManager","name":"_levelManager","type":"address"}],"name":"setLevelManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setMax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setMin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_priceFeed","type":"address"}],"name":"setPriceAggregator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newDuration","type":"uint256"}],"name":"setRegisterDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newTime","type":"uint256"}],"name":"setRegisterTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newTime","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_registerTime","type":"uint256"},{"internalType":"uint256","name":"_registerDuration","type":"uint256"},{"internalType":"uint256","name":"_fcfsDuration","type":"uint256"}],"name":"setTimeline","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokensForSale","type":"uint256"}],"name":"setTokensForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"toggleLevels","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"toggleLockOnRegister","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"toggleWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userLevel","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"whitelistedAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],"eF":"0x6080604052600b805460ff60a01b19169055600f805460ff199081166001179091556013805462ffffff60a01b19166201000160a01b1790556019805490911690553480156200004e57600080fd5b5060405162006503380380620065038339810160408190526200007191620003a1565b838686858b8b62000082336200016c565b6200008f600033620001bc565b6001600255600391909155600455600892909255600955600b8054600160a01b6001600160a01b03858116151582026001600160a81b031990931694169390931717908190550460ff1615620000fb57600c80546001600160a01b0319166001600160a01b0383161790555b5088516200011190601e9060208c019062000254565b50815160138054602090940151600f805460ff19169115159190911790556001600160a81b0319909316901515600160a01b026001600160a01b031916176001600160a01b0391909116179055506200055495505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620001c88282620001cc565b5050565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff16620001c85760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b828054620002629062000501565b90600052602060002090601f016020900481019282620002865760008555620002d1565b82601f10620002a157805160ff1916838001178555620002d1565b82800160010185558215620002d1579182015b82811115620002d1578251825591602001919060010190620002b4565b50620002df929150620002e3565b5090565b5b80821115620002df5760008155600101620002e4565b80516001600160a01b03811681146200031257600080fd5b919050565b600082601f83011262000328578081fd5b604080519081016001600160401b03811182821017156200034d576200034d6200053e565b806040525080838560408601111562000364578384fd5b835b600281101562000396578151801515811462000380578586fd5b8352602092830192919091019060010162000366565b509195945050505050565b60008060008060008060008060006101408a8c031215620003c0578485fd5b89516001600160401b0380821115620003d7578687fd5b818c0191508c601f830112620003eb578687fd5b8151818111156200040057620004006200053e565b6020915062000418601f8201601f19168301620004ce565b8181528e838386010111156200042c578889fd5b885b828110156200044b5784810184015182820185015283016200042e565b828111156200045c57898484840101525b50809c505050808c01519950505060408a0151965060608a0151955060808a015194506200048d60a08b01620002fa565b93506200049d60c08b01620002fa565b9250620004ae8b60e08c0162000317565b9150620004bf6101208b01620002fa565b90509295985092959850929598565b604051601f8201601f191681016001600160401b0381118282101715620004f957620004f96200053e565b604052919050565b600181811c908216806200051657607f821691505b602082108114156200053857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b615f9f80620005646000396000f3fe60806040526004361061055c5760003560e01c8063766daf7b116102bd578063be40a32711610180578063da76d5cd116100e7578063f0ea4bfc116100a0578063f6be71d11161007a578063f6be71d1146111cb578063f733a16c146111eb578063fc0c546a14611200578063fefca77c14611220576105f0565b8063f0ea4bfc14611180578063f2fde38b14611196578063f3a46747146111b6576105f0565b8063da76d5cd146110ca578063db0497f0146110ea578063e1b318c2146110ff578063ea49feb014611120578063eea6221714611140578063f04785f214611160576105f0565b8063d0febe4c11610139578063d0febe4c146105e6578063d3527bd61461101a578063d547741f1461103a578063d6f9102b1461105a578063d936547e1461107a578063da007349146110aa576105f0565b8063be40a32714610f4f578063c138353714610f6f578063c3816f6314610f87578063c67679fb14610fa7578063c884ef8314610fbc578063d0d46a0b14610fe9576105f0565b8063a888c2cd11610224578063b2b215b5116101dd578063b2b215b514610ea3578063b8eb354614610ec4578063b8f7a66514610eda578063ba4e5c4914610eef578063bd152bc714610f0f578063bd30992414610f2f576105f0565b8063a888c2cd14610dde578063a8bde4eb14610e13578063aad3ec9614610e33578063ae0ffad214610e53578063af640d0f14610e74578063b187bd2614610e89576105f0565b806391d148541161027657806391d1485414610d2657806393b9400d14610d465780639e281a9814610d69578063a217fddf14610d89578063a525e17214610d9e578063a6b02bc314610dbe576105f0565b8063766daf7b14610c7d57806378e9792514610c9d5780637afc56f514610cb357806380e3f1ad14610cd3578063853828b614610cf35780638da5cb5b14610d08576105f0565b80633610724e11610420578063562beba8116103875780636c4470fb11610340578063715018a61161031a578063715018a614610c1c578063738fa94b14610c3157806375a5b1ab14610c5157806375c33e0b14610c67576105f0565b80636c4470fb14610bae5780636d02802714610bc457806370a0823114610be6576105f0565b8063562beba814610ac25780635666cd7814610afa578063589d7c5414610b0f5780635b23c27d14610b3c578063637c92ff14610b5e57806364661e4b14610b7e576105f0565b806345dc3dd8116103d957806345dc3dd814610a12578063491ce4d014610a325780635070e83714610a5257806350adcdb714610a72578063518ab2a814610a9257806351fb012d14610aa8576105f0565b80633610724e1461096757806336568abe146109875780633b6d03ca146109a75780633d7faab9146109c75780633e0a322d146109dd578063439f5ac2146109fd576105f0565b80631fa7ab75116104c45780632a8d950c1161047d5780632a8d950c146108c55780632b888f69146108e55780632c4e722e146108fb5780632f2ff15d1461091157806334dadad51461093157806334fcf43714610947576105f0565b80631fa7ab75146107da5780631fc0c923146107fa5780631fe9eabc1461081a578063248a9ca31461083a57806327e235e31461086b578063280e31cc14610898576105f0565b80631302973a116105165780631302973a14610717578063131b2a601461072d578063144fa6d71461076557806318c088101461078557806318eca61f146107a55780631aa3a008146107c5576105f0565b8062fed7001461065c57806301ffc9a7146106925780630af42928146106b25780630d92e3e8146106c75780630fb5a6b4146106eb57806312aef8c314610701576105f0565b366105f057600b54600160a01b900460ff16156105e65760405162461bcd60e51b815260206004820152603c60248201527f53616c653a20546869732070726573616c652069732066756e6465642062792060448201527f746f6b656e732c2075736520627579546f6b656e732876616c7565290000000060648201526084015b60405180910390fd5b6105ee611240565b005b3480156105fc57600080fd5b5060405162461bcd60e51b815260206004820152602e60248201527f53616c653a2043616e6e6f74206275792c20757365207468652027627579546f60448201526d35b2b7399390333ab731ba34b7b760911b60648201526084016105dd565b34801561066857600080fd5b50600b5461067d90600160a01b900460ff1681565b60405190151581526020015b60405180910390f35b34801561069e57600080fd5b5061067d6106ad3660046156e4565b611364565b3480156106be57600080fd5b5061067d61139b565b3480156106d357600080fd5b506106dd601a5481565b604051908152602001610689565b3480156106f757600080fd5b506106dd60045481565b34801561070d57600080fd5b506106dd60095481565b34801561072357600080fd5b506106dd600e5481565b34801561073957600080fd5b5061074d610748366004615766565b6113b8565b6040516001600160a01b039091168152602001610689565b34801561077157600080fd5b506105ee61078036600461548d565b6113ff565b34801561079157600080fd5b506105ee6107a036600461569d565b6114d7565b3480156107b157600080fd5b506105ee6107c0366004615890565b611551565b3480156107d157600080fd5b506105ee6115ac565b3480156107e657600080fd5b506106dd6107f536600461569d565b611a37565b34801561080657600080fd5b506105ee6108153660046154a9565b611a66565b34801561082657600080fd5b506105ee61083536600461569d565b611d6f565b34801561084657600080fd5b506106dd61085536600461569d565b6000908152600160208190526040909120015490565b34801561087757600080fd5b506106dd61088636600461548d565b600a6020526000908152604090205481565b3480156108a457600080fd5b506108b86108b336600461548d565b611e3c565b6040516106899190615bb4565b3480156108d157600080fd5b5060135461074d906001600160a01b031681565b3480156108f157600080fd5b506106dd60225481565b34801561090757600080fd5b506106dd60085481565b34801561091d57600080fd5b506105ee61092c3660046156b5565b611ed6565b34801561093d57600080fd5b506106dd60055481565b34801561095357600080fd5b506105ee61096236600461569d565b611efd565b34801561097357600080fd5b506105ee61098236600461569d565b611fd6565b34801561099357600080fd5b506105ee6109a23660046156b5565b6121d1565b3480156109b357600080fd5b506105ee6109c2366004615665565b61224f565b3480156109d357600080fd5b506106dd60075481565b3480156109e957600080fd5b506105ee6109f836600461569d565b6122d7565b348015610a0957600080fd5b506106dd6123b1565b348015610a1e57600080fd5b506105ee610a2d36600461569d565b6123c8565b348015610a3e57600080fd5b506105ee610a4d36600461548d565b612495565b348015610a5e57600080fd5b506105ee610a6d36600461548d565b612537565b348015610a7e57600080fd5b50600c5461074d906001600160a01b031681565b348015610a9e57600080fd5b506106dd601f5481565b348015610ab457600080fd5b50600f5461067d9060ff1681565b348015610ace57600080fd5b506106dd610add36600461551b565b601d60209081526000928352604080842090915290825290205481565b348015610b0657600080fd5b506106dd612594565b348015610b1b57600080fd5b506106dd610b2a36600461548d565b60166020526000908152604090205481565b348015610b4857600080fd5b50610b516125b8565b6040516106899190615ad3565b348015610b6a57600080fd5b506105ee610b7936600461569d565b61262b565b348015610b8a57600080fd5b50610b9e610b9936600461548d565b612706565b6040516106899493929190615bf1565b348015610bba57600080fd5b506106dd60215481565b348015610bd057600080fd5b50610bd9612a80565b6040516106899190615a11565b348015610bf257600080fd5b506106dd610c0136600461548d565b6001600160a01b03166000908152600a602052604090205490565b348015610c2857600080fd5b506105ee612ae2565b348015610c3d57600080fd5b506105ee610c4c36600461569d565b612b18565b348015610c5d57600080fd5b506106dd60065481565b348015610c7357600080fd5b506106dd60235481565b348015610c8957600080fd5b506105ee610c98366004615546565b612bff565b348015610ca957600080fd5b506106dd60035481565b348015610cbf57600080fd5b50610bd9610cce36600461570c565b612d3d565b348015610cdf57600080fd5b506105ee610cee366004615665565b612dba565b348015610cff57600080fd5b506105ee612e36565b348015610d1457600080fd5b506000546001600160a01b031661074d565b348015610d3257600080fd5b5061067d610d413660046156b5565b61306a565b348015610d5257600080fd5b50610d5b613095565b604051610689929190615a5e565b348015610d7557600080fd5b506105ee610d8436600461551b565b613217565b348015610d9557600080fd5b506106dd600081565b348015610daa57600080fd5b506105ee610db9366004615665565b613313565b348015610dca57600080fd5b506106dd610dd936600461569d565b61338f565b348015610dea57600080fd5b50610dfe610df936600461569d565b6133b2565b60408051928352602083019190915201610689565b348015610e1f57600080fd5b506105ee610e2e36600461569d565b6133e0565b348015610e3f57600080fd5b506105ee610e4e36600461551b565b613500565b348015610e5f57600080fd5b5060135461067d90600160a81b900460ff1681565b348015610e8057600080fd5b506108b861380f565b348015610e9557600080fd5b5060195461067d9060ff1681565b348015610eaf57600080fd5b5060135461067d90600160b01b900460ff1681565b348015610ed057600080fd5b506106dd600d5481565b348015610ee657600080fd5b5061067d61381c565b348015610efb57600080fd5b5061074d610f0a36600461569d565b613839565b348015610f1b57600080fd5b506105ee610f2a36600461548d565b613863565b348015610f3b57600080fd5b506106dd610f4a36600461548d565b6138ec565b348015610f5b57600080fd5b506105ee610f6a366004615665565b61390e565b348015610f7b57600080fd5b50600e54600d54610dfe565b348015610f9357600080fd5b5061074d610fa2366004615766565b613996565b348015610fb357600080fd5b506106dd6139c1565b348015610fc857600080fd5b506106dd610fd736600461548d565b601c6020526000908152604090205481565b348015610ff557600080fd5b5061100961100436600461548d565b6139ed565b604051610689959493929190615b22565b34801561102657600080fd5b506105ee611035366004615546565b613d75565b34801561104657600080fd5b506105ee6110553660046156b5565b613f0e565b34801561106657600080fd5b506106dd61107536600461548d565b613f35565b34801561108657600080fd5b5061067d61109536600461548d565b60106020526000908152604090205460ff1681565b3480156110b657600080fd5b506106dd6110c536600461570c565b613fcc565b3480156110d657600080fd5b506105ee6110e536600461569d565b613ff8565b3480156110f657600080fd5b506106dd6140f4565b34801561110b57600080fd5b5060135461067d90600160a01b900460ff1681565b34801561112c57600080fd5b506106dd61113b36600461548d565b614188565b34801561114c57600080fd5b506105ee61115b36600461569d565b6141b6565b34801561116c57600080fd5b506105ee61117b36600461586f565b6142ad565b34801561118c57600080fd5b506106dd60205481565b3480156111a257600080fd5b506105ee6111b136600461548d565b614417565b3480156111c257600080fd5b5061067d6144af565b3480156111d757600080fd5b506105ee6111e636600461569d565b6144cd565b3480156111f757600080fd5b5061067d61453d565b34801561120c57600080fd5b50601b5461074d906001600160a01b031681565b34801561122c57600080fd5b506105ee61123b366004615665565b614547565b61124861381c565b6112855760405162461bcd60e51b815260206004820152600e60248201526d53616c653a204e6f74206c69766560901b60448201526064016105dd565b6002805414156112d75760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105dd565b60028055600b54600160a01b900460ff16156113545760405162461bcd60e51b815260206004820152603660248201527f53616c653a2070726573616c652069732066756e64656420627920746f6b656e60448201527573206275742076616c7565206973206d697373696e6760501b60648201526084016105dd565b61135d346145cf565b6001600255565b60006001600160e01b03198216637965db0b60e01b148061139557506301ffc9a760e01b6001600160e01b03198316145b92915050565b60006113a56123b1565b6007546113b29042615e13565b11905090565b815160208184018101805160158252928201918501919091209190528054829081106113e357600080fd5b6000918252602090912001546001600160a01b03169150829050565b6000546001600160a01b031633148061141e575061141e60003361306a565b61143a5760405162461bcd60e51b81526004016105dd90615cde565b42601860008154811061145d57634e487b7160e01b600052603260045260246000fd5b906000526020600020906002020160000154116114b55760405162461bcd60e51b815260206004820152601660248201527510db185a5b595c8e8810db185a5b481cdd185c9d195960521b60448201526064016105dd565b601b80546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b03163314806114f657506114f660003361306a565b6115125760405162461bcd60e51b81526004016105dd90615cde565b60078190556004546040519081527fff9eb67881f60bf89c804c5f5baf096fc4011374504513568b2825aa85c60860906020015b60405180910390a150565b6000546001600160a01b0316331480611570575061157060003361306a565b61158c5760405162461bcd60e51b81526004016105dd90615cde565b6115958361262b565b61159e82612b18565b6115a7816114d7565b505050565b6115b461381c565b1561160d5760405162461bcd60e51b815260206004820152602360248201527f53616c653a2043616e6e6f742072656769737465722c2073616c65206973206c60448201526269766560e81b60648201526084016105dd565b61161561453d565b6116615760405162461bcd60e51b815260206004820152601f60248201527f53616c653a204e6f74206f70656e20666f7220726567697374726174696f6e0060448201526064016105dd565b601354600160a01b900460ff166116c95760405162461bcd60e51b815260206004820152602660248201527f53616c653a2043616e6e6f742072656769737465722c206c6576656c732064696044820152651cd8589b195960d21b60648201526084016105dd565b6013546001600160a01b03166117375760405162461bcd60e51b815260206004820152602d60248201527f53616c653a204c6576656c73207374616b696e6720616464726573732069732060448201526c1b9bdd081cdc1958da599a5959609a1b60648201526084016105dd565b600033601354604051637269310760e11b81526001600160a01b0380841660048301529293506000928392169063e4d2620e9060240160006040518083038186803b15801561178557600080fd5b505afa158015611799573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526117c19190810190615813565b91509150600082602001511180156117d95750600081115b6118355760405162461bcd60e51b815260206004820152602760248201527f53616c653a20596f7572206c6576656c20697320746f6f206c6f7720746f207260448201526632b3b4b9ba32b960c91b60648201526084016105dd565b6001600160a01b038316600090815260166020526040902054158061187257506001600160a01b0383166000908152601660205260409020548110155b6118d05760405162461bcd60e51b815260206004820152602960248201527f53616c653a20416c726561647920726567697374657265642077697468206c6f6044820152681dd95c881b195d995b60ba1b60648201526084016105dd565b601354600160b01b900460ff161561194c5760135460035460405163282d3fdf60e01b81526001600160a01b038681166004830152602482019290925291169063282d3fdf90604401600060405180830381600087803b15801561193357600080fd5b505af1158015611947573d6000803e3d6000fd5b505050505b81516001600160a01b0384166000908152601760209081526040909120825161197a93919290910190615270565b506001600160a01b03831660009081526016602052604090819020829055825190516014916119a891615970565b9081526040516020918190038201812080546001810182556000918252908390200180546001600160a01b0319166001600160a01b03871690811790915584519285015160135491937f2c4f034e06930af56f941f70cd4d8a322e62777b01e1db02013de59b1a626d1893611a2a93919291600160b01b900460ff1690615bc7565b60405180910390a2505050565b600080611a426140f4565b9050611a5f610dd982611a59866305f5e10061484d565b90614859565b9392505050565b6000546001600160a01b0316331480611a855750611a8560003361306a565b611aa15760405162461bcd60e51b81526004016105dd90615cde565b601b80546001600160a01b0319166001600160a01b0385161790556000805b8351811015611d15576000838281518110611aeb57634e487b7160e01b600052603260045260246000fd5b602002602001015111611b405760405162461bcd60e51b815260206004820152601a60248201527f436c61696d65723a203025206973206e6f7420616c6c6f77656400000000000060448201526064016105dd565b6000848281518110611b6257634e487b7160e01b600052603260045260246000fd5b602002602001015111611bb75760405162461bcd60e51b815260206004820152601c60248201527f436c61696d65723a2074696d65206d757374207370656369666965640000000060448201526064016105dd565b611bbf6123b1565b848281518110611bdf57634e487b7160e01b600052603260045260246000fd5b602002602001015111611c405760405162461bcd60e51b8152602060048201526024808201527f436c61696d65723a2074696d65206d75737420626520616674657220656e642060448201526374696d6560e01b60648201526084016105dd565b60186040518060400160405280868481518110611c6d57634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001858481518110611c9a57634e487b7160e01b600052603260045260246000fd5b60209081029190910181015190915282546001818101855560009485529382902083516002909202019081559101519101558251839082908110611cee57634e487b7160e01b600052603260045260246000fd5b602002602001015182611d019190615e13565b915080611d0d81615eff565b915050611ac0565b50806305f5e10014611d695760405162461bcd60e51b815260206004820152601e60248201527f436c61696d65723a20496e76616c696420746f74616c2070657263656e74000060448201526064016105dd565b50505050565b6000546001600160a01b0316331480611d8e5750611d8e60003361306a565b611daa5760405162461bcd60e51b81526004016105dd90615cde565b600e541580611dbb5750600e548110155b611e075760405162461bcd60e51b815260206004820152601760248201527f4d75737420626520626967676572207468616e206d696e00000000000000000060448201526064016105dd565b600d8190556040518181527f770427b1be4e1c22afadce4780c0ad65c0cbdd9b12543bea5a992f5bda02550790602001611546565b60176020526000908152604090208054611e5590615ec4565b80601f0160208091040260200160405190810160405280929190818152602001828054611e8190615ec4565b8015611ece5780601f10611ea357610100808354040283529160200191611ece565b820191906000526020600020905b815481529060010190602001808311611eb157829003601f168201915b505050505081565b60008281526001602081905260409091200154611ef38133614865565b6115a783836148c9565b6000546001600160a01b0316331480611f1c5750611f1c60003361306a565b611f385760405162461bcd60e51b81526004016105dd90615cde565b611f4061381c565b15611fa15760405162461bcd60e51b815260206004820152602b60248201527f53616c653a2053616c65206973206c6976652c2072617465206368616e67652060448201526a1b9bdd08185b1b1bddd95960aa1b60648201526084016105dd565b60088190556040518181527f595a30f13a69b616c4d568e2a2b7875fdfe86e4300a049953c76ee278f8f3f1090602001611546565b611fde61381c565b61201b5760405162461bcd60e51b815260206004820152600e60248201526d53616c653a204e6f74206c69766560901b60448201526064016105dd565b60028054141561206d5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105dd565b60028055600b54600160a01b900460ff166120d95760405162461bcd60e51b815260206004820152602660248201527f53616c653a2066756e64696e6720627920746f6b656e73206973206e6f7420616044820152651b1b1bddd95960d21b60648201526084016105dd565b600c54604051636eb1769f60e11b815233600482015230602482015282916001600160a01b03169063dd62ed3e9060440160206040518083038186803b15801561212257600080fd5b505afa158015612136573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061215a9190615857565b10156121a85760405162461bcd60e51b815260206004820152601d60248201527f53616c653a2066756e6420746f6b656e206e6f7420617070726f76656400000060448201526064016105dd565b6121b1816145cf565b600c546121c9906001600160a01b0316333084614934565b506001600255565b6001600160a01b03811633146122415760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016105dd565b61224b828261499f565b5050565b6000546001600160a01b031633148061226e575061226e60003361306a565b61228a5760405162461bcd60e51b81526004016105dd90615cde565b60138054821515600160a81b0260ff60a81b199091161790556040517f2f82dda56001bd3e8726092bb940912a2b44c3994cde91f6946ec09e36870aff9061154690831515815260200190565b6000546001600160a01b03163314806122f657506122f660003361306a565b6123125760405162461bcd60e51b81526004016105dd90615cde565b600554811161237c5760405162461bcd60e51b815260206004820152603060248201527f53616c653a2073746172742074696d65206d757374206265206166746572207460448201526f68652072656769737465722074696d6560801b60648201526084016105dd565b60038190556040518181527fb40bc62c7614c21c292641d79509c0572ffdcf912e874169cf69162e026146c990602001611546565b60006004546003546123c39190615e13565b905090565b6000546001600160a01b03163314806123e757506123e760003361306a565b6124035760405162461bcd60e51b81526004016105dd90615cde565b600d5415806124145750600d548111155b6124605760405162461bcd60e51b815260206004820152601860248201527f4d75737420626520736d616c6c6572207468616e206d6178000000000000000060448201526064016105dd565b600e8190556040518181527f46077927d83541de01a449629a0bb1dbeb03e03fd6ee2e3ba4bf2952e394335090602001611546565b6000546001600160a01b03163314806124b457506124b460003361306a565b6124d05760405162461bcd60e51b81526004016105dd90615cde565b600b805460ff60a01b19166001600160a01b038316801515600160a01b0291909117909155600c80546001600160a01b031916821790556040519081527f212b2eba76cc5f9d7a0ee5363b517577da12e63f1231d6329ed6ff838b9973c490602001611546565b6000546001600160a01b0316331480612556575061255660003361306a565b6125725760405162461bcd60e51b81526004016105dd90615cde565b600b80546001600160a01b0319166001600160a01b0392909216919091179055565b6000806125a2600d54611a37565b9050601254816125b29190615e4b565b91505090565b60606018805480602002602001604051908101604052809291908181526020016000905b82821015612622578382906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050815260200190600101906125dc565b50505050905090565b6000546001600160a01b031633148061264a575061264a60003361306a565b6126665760405162461bcd60e51b81526004016105dd90615cde565b60035481106126d15760405162461bcd60e51b815260206004820152603160248201527f53616c653a2072656769737465722074696d65206d757374206265206265666f6044820152707265207468652073746172742074696d6560781b60648201526084016105dd565b60058190556040518181527f90d3be8da38886a5f029d2f1188aa8d57c6826b16cbc7abdcf22d883f6605acc90602001611546565b60606000806000806127166144af565b6001600160a01b03871660009081526017602052604081208054929350909161273e90615ec4565b80601f016020809104026020016040519081016040528092919081815260200182805461276a90615ec4565b80156127b75780601f1061278c576101008083540402835291602001916127b7565b820191906000526020600020905b81548152906001019060200180831161279a57829003601f168201915b5050601354604051637269310760e11b81526001600160a01b038d81166004830152959650600095909116935063e4d2620e9250602401905060006040518083038186803b15801561280857600080fd5b505afa15801561281c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526128449190810190615813565b5090506000836129a35760135483516001600160a01b039091169063d5a162bd9015612910576001600160a01b038b166000908152601760205260409020805461288d90615ec4565b80601f01602080910402602001604051908101604052809291908181526020018280546128b990615ec4565b80156129065780601f106128db57610100808354040283529160200191612906565b820191906000526020600020905b8154815290600101906020018083116128e957829003601f168201915b505050505061292e565b604051806040016040528060048152602001636e6f6e6560e01b8152505b6040518263ffffffff1660e01b815260040161294a9190615bb4565b60006040518083038186803b15801561296257600080fd5b505afa158015612976573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261299e91908101906157e1565b6129a5565b815b90506000846129cc576001600160a01b038a166000908152601660205260409020546129f2565b6001600160a01b038a16600090815260166020526040902054600d546129f29190615e13565b905060006129ff82611a37565b905060008551600014612a685783608001518015612a405750600060158560000151604051612a2e9190615970565b90815260405190819003602001902054115b8015612a6357506001600160a01b038c1660009081526016602052604090205415155b612a6b565b60005b93519c929b5090995091975095505050505050565b60606011805480602002602001604051908101604052809291908181526020018280548015612ad857602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612aba575b5050505050905090565b6000546001600160a01b03163314612b0c5760405162461bcd60e51b81526004016105dd90615ca9565b612b166000614a06565b565b6000546001600160a01b0316331480612b375750612b3760003361306a565b612b535760405162461bcd60e51b81526004016105dd90615cde565b60035481600554612b649190615e13565b10612bca5760405162461bcd60e51b815260206004820152603060248201527f53616c653a20726567697374657220656e64206d757374206265206265666f7260448201526f65207468652073746172742074696d6560801b60648201526084016105dd565b60068190556040518181527f0427e7ba04df00e564e2a87324ce9927680ca725fde43516ad6055c9d3c6b6ad90602001611546565b6000546001600160a01b0316331480612c1e5750612c1e60003361306a565b612c3a5760405162461bcd60e51b81526004016105dd90615cde565b60005b818110156115a75760106000848484818110612c6957634e487b7160e01b600052603260045260246000fd5b9050602002016020810190612c7e919061548d565b6001600160a01b0316815260208101919091526040016000205460ff1615612d2b57600060106000858585818110612cc657634e487b7160e01b600052603260045260246000fd5b9050602002016020810190612cdb919061548d565b6001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff021916908315150217905550600160126000828254612d259190615e6a565b90915550505b80612d3581615eff565b915050612c3d565b606060148383604051612d5192919061598c565b9081526040805191829003602090810183208054808302850183019093528284529190830182828015612dad57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612d8f575b5050505050905092915050565b6000546001600160a01b0316331480612dd95750612dd960003361306a565b612df55760405162461bcd60e51b81526004016105dd90615cde565b600f805460ff19168215159081179091556040519081527f9bea0dd3cae4438dc4c54c3110002aedc380f4075b6edae73ae0536105a2008a90602001611546565b6000546001600160a01b0316331480612e555750612e5560003361306a565b612e715760405162461bcd60e51b81526004016105dd90615cde565b478015612eb357600080546040516001600160a01b039091169183156108fc02918491818181858888f19350505050158015612eb1573d6000803e3d6000fd5b505b600b54600160a01b900460ff168015612f455750600c546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b158015612f0b57600080fd5b505afa158015612f1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f439190615857565b115b1561306757600c546001600160a01b031663a9059cbb612f6d6000546001600160a01b031690565b600c546040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b158015612fb057600080fd5b505afa158015612fc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612fe89190615857565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044015b602060405180830381600087803b15801561302f57600080fd5b505af1158015613043573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061224b9190615681565b50565b60009182526001602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060806000601360009054906101000a90046001600160a01b03166001600160a01b031663d8cde1c66040518163ffffffff1660e01b815260040160006040518083038186803b1580156130e857600080fd5b505afa1580156130fc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261312491908101906155b5565b9050600081516001600160401b0381111561314f57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015613178578160200160208202803683370190505b50905060005b825181101561320d5760148382815181106131a957634e487b7160e01b600052603260045260246000fd5b60200260200101516040516131be9190615970565b9081526020016040518091039020805490508282815181106131f057634e487b7160e01b600052603260045260246000fd5b60209081029190910101528061320581615eff565b91505061317e565b5090939092509050565b6000546001600160a01b0316331480613236575061323660003361306a565b6132525760405162461bcd60e51b81526004016105dd90615cde565b600081116132725760405162461bcd60e51b81526004016105dd90615c22565b816001600160a01b031663a9059cbb6132936000546001600160a01b031690565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260248101849052604401602060405180830381600087803b1580156132db57600080fd5b505af11580156132ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a79190615681565b6000546001600160a01b0316331480613332575061333260003361306a565b61334e5760405162461bcd60e51b81526004016105dd90615cde565b6019805460ff19168215159081179091556040519081527f40729d2b340c598858cbba072277c8d947aee5384f07e2af31298966ec01ae1c90602001611546565b60008061339a6139c1565b9050611a5f81611a5985670de0b6b3a764000061484d565b601881815481106133c257600080fd5b60009182526020909120600290910201805460019091015490915082565b6000546001600160a01b0316331461340a5760405162461bcd60e51b81526004016105dd90615ca9565b601854811061342b5760405162461bcd60e51b81526004016105dd90615c72565b60006018828154811061344e57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600202019050428160000154116134b15760405162461bcd60e51b815260206004820152601f60248201527f436c61696d65723a20436c61696d20616c72656164792072656c65617365640060448201526064016105dd565b4280825560018201546040805191825260208201929092529081018390527fa43dae48621c426b50bfb75261b3fb486e6653b587e9c3eca9e6361fc27f7ba29060600160405180910390a15050565b60185481106135215760405162461bcd60e51b81526004016105dd90615c72565b6001600160a01b0382166000908152601d60209081526040808320848452909152902054156135925760405162461bcd60e51b815260206004820152601860248201527f436c61696d65723a20416c726561647920636c61696d6564000000000000000060448201526064016105dd565b42601882815481106135b457634e487b7160e01b600052603260045260246000fd5b9060005260206000209060020201600001541061360c5760405162461bcd60e51b8152602060048201526016602482015275436c61696d65723a204e6f7420636c61696d61626c6560501b60448201526064016105dd565b6001600160a01b0382166000908152600a602052604090205461366a5760405162461bcd60e51b815260206004820152601660248201527521b630b4b6b2b91d1027379020b63637b1b0ba34b7b760511b60448201526064016105dd565b60195460ff16156136bd5760405162461bcd60e51b815260206004820152601860248201527f436c61696d65723a20436c61696d696e6720706175736564000000000000000060448201526064016105dd565b60006136c98284614a56565b90506000811161371b5760405162461bcd60e51b815260206004820152601760248201527f436c61696d65723a20416d6f756e74206973207a65726f00000000000000000060448201526064016105dd565b80601a600082825461372d9190615e13565b90915550506001600160a01b0383166000908152601c60205260408120805483929061375a908490615e13565b90915550506001600160a01b038084166000908152601d602090815260408083208684529091529020829055601b5461379591168483614aed565b826001600160a01b03167f9cdcf2f7714cca3508c7f0110b04a90a80a3a8dd0e35de99689db74d28c5383e82601885815481106137e257634e487b7160e01b600052603260045260246000fd5b60009182526020918290206001600290920201015460408051938452918301528101859052606001611a2a565b601e8054611e5590615ec4565b6000600354421180156123c357506138326123b1565b4210905090565b6011818154811061384957600080fd5b6000918252602090912001546001600160a01b0316905081565b6000546001600160a01b0316331480613882575061388260003361306a565b61389e5760405162461bcd60e51b81526004016105dd90615cde565b601380546001600160a01b0319166001600160a01b0383169081179091556040519081527fbfa5a19d46258dbc91d88bb610f25e8f77fe8092101241c542bf84619f938c9690602001611546565b6001600160a01b03811660009081526016602052604081205461139590611a37565b6000546001600160a01b031633148061392d575061392d60003361306a565b6139495760405162461bcd60e51b81526004016105dd90615cde565b60138054821515600160b01b0260ff60b01b199091161790556040517f0615d623d485097ea27091190b1b298ccd7557f48c9f963a477f18185af6b8999061154690831515815260200190565b815160208184018101805160148252928201918501919091209190528054829081106113e357600080fd5b6000806139cc6140f4565b90506000611a5f82611a596305f5e10060085461484d90919063ffffffff16565b60185460609081908190819081906000816001600160401b03811115613a2357634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015613a4c578160200160208202803683370190505b5090506000826001600160401b03811115613a7757634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015613aa0578160200160208202803683370190505b5090506000836001600160401b03811115613acb57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015613af4578160200160208202803683370190505b5090506000846001600160401b03811115613b1f57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015613b48578160200160208202803683370190505b5090506000856001600160401b03811115613b7357634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015613b9c578160200160208202803683370190505b50905060005b86811015613d615760188181548110613bcb57634e487b7160e01b600052603260045260246000fd5b906000526020600020906002020160000154868281518110613bfd57634e487b7160e01b600052603260045260246000fd5b60200260200101818152505060188181548110613c2a57634e487b7160e01b600052603260045260246000fd5b906000526020600020906002020160010154858281518110613c5c57634e487b7160e01b600052603260045260246000fd5b602002602001018181525050613c72818e614a56565b848281518110613c9257634e487b7160e01b600052603260045260246000fd5b60200260200101818152505060188181548110613cbf57634e487b7160e01b600052603260045260246000fd5b9060005260206000209060020201600001544211838281518110613cf357634e487b7160e01b600052603260045260246000fd5b9115156020928302919091018201526001600160a01b038e166000908152601d8252604080822084835290925220548251839083908110613d4457634e487b7160e01b600052603260045260246000fd5b602090810291909101015280613d5981615eff565b915050613ba2565b50939b929a50909850965090945092505050565b6000546001600160a01b0316331480613d945750613d9460003361306a565b613db05760405162461bcd60e51b81526004016105dd90615cde565b60005b818110156115a75760106000848484818110613ddf57634e487b7160e01b600052603260045260246000fd5b9050602002016020810190613df4919061548d565b6001600160a01b0316815260208101919091526040016000205460ff16613efc57600160106000858585818110613e3b57634e487b7160e01b600052603260045260246000fd5b9050602002016020810190613e50919061548d565b6001600160a01b031681526020810191909152604001600020805460ff19169115159190911790556011838383818110613e9a57634e487b7160e01b600052603260045260246000fd5b9050602002016020810190613eaf919061548d565b81546001808201845560009384526020842090910180546001600160a01b0319166001600160a01b0393909316929092179091556012805491929091613ef6908490615e13565b90915550505b80613f0681615eff565b915050613db3565b60008281526001602081905260409091200154613f2b8133614865565b6115a7838361499f565b60008060005b601854811015613fa8574260188281548110613f6757634e487b7160e01b600052603260045260246000fd5b9060005260206000209060020201600001541015613f9657613f898185614a56565b613f939083615e13565b91505b80613fa081615eff565b915050613f3b565b506001600160a01b0383166000908152601c6020526040902054611a5f9082615e6a565b600060148383604051613fe092919061598c565b90815260405190819003602001902054905092915050565b6000546001600160a01b0316331480614017575061401760003361306a565b6140335760405162461bcd60e51b81526004016105dd90615cde565b600081116140535760405162461bcd60e51b81526004016105dd90615c22565b600b54600160a01b900460ff16156140bb57600c546001600160a01b031663a9059cbb6140886000546001600160a01b031690565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260248101849052604401613015565b600080546040516001600160a01b039091169183156108fc02918491818181858888f1935050505015801561224b573d6000803e3d6000fd5b600080600b60009054906101000a90046001600160a01b03166001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b15801561414557600080fd5b505afa158015614159573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061417d91906158bb565b509195945050505050565b6001600160a01b0381166000908152601c6020908152604080832054600a9092528220546113959190615e6a565b6000546001600160a01b03163314806141d557506141d560003361306a565b6141f15760405162461bcd60e51b81526004016105dd90615cde565b6141f961381c565b1580614206575060095481115b6142785760405162461bcd60e51b815260206004820152603d60248201527f53616c653a2053616c65206973206c6976652c20636170206368616e6765206f60448201527f6e6c7920616c6c6f77656420746f2061206869676865722076616c756500000060648201526084016105dd565b60098190556040518181527f162238f20a51a0fd11d4e4e9ea154917f3776b59af9fedaeaf42676ad580a2c790602001611546565b6000546001600160a01b031633146142d75760405162461bcd60e51b81526004016105dd90615ca9565b60185482106142f85760405162461bcd60e51b81526004016105dd90615c72565b60006018838154811061431b57634e487b7160e01b600052603260045260246000fd5b9060005260206000209060020201905042821161437a5760405162461bcd60e51b815260206004820152601f60248201527f436c61696d65723a2054696d65206d75737420626520696e206675747572650060448201526064016105dd565b805482116143ca5760405162461bcd60e51b815260206004820152601960248201527f436c61696d65723a20496e76616c6964206e65772054696d650000000000000060448201526064016105dd565b8181556001810154604080519182526020820184905281018490527fefcf8cf4d7c2640bc82c86876797c8848bb8e14b58dad67fc2d7b128f65464979060600160405180910390a1505050565b6000546001600160a01b031633146144415760405162461bcd60e51b81526004016105dd90615ca9565b6001600160a01b0381166144a65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105dd565b61306781614a06565b601354600090600160a81b900460ff16806123c357506123c361139b565b6000546001600160a01b03163314806144ec57506144ec60003361306a565b6145085760405162461bcd60e51b81526004016105dd90615cde565b60048190556040518181527f9bb10695bde7db94333a5404f0767118f3965fd73217e45f96529c3d368285af90602001611546565b60006123c3614b1d565b6000546001600160a01b0316331480614566575061456660003361306a565b6145825760405162461bcd60e51b81526004016105dd90615cde565b60138054821515600160a01b0260ff60a01b199091161790556040517f5a93387354333593ee4e928f4c1050f3f43ca3f370542ce5de543ca1b71092889061154690831515815260200190565b60006145d9614b3b565b9050338261461c5760405162461bcd60e51b815260206004820152601060248201526f053616c653a2076616c756520697320360841b60448201526064016105dd565b60006146278461338f565b90506000811161466d5760405162461bcd60e51b8152602060048201526011602482015270053616c653a20616d6f756e74206973203607c1b60448201526064016105dd565b80601f600082825461467f9190615e13565b90915550506001600160a01b0382166000908152600a6020526040812080548392906146ac908490615e13565b9091555050600e546146bd90611a37565b81101561470c5760405162461bcd60e51b815260206004820152601960248201527f53616c653a20616d6f756e7420697320746f6f20736d616c6c0000000000000060448201526064016105dd565b82158061473157506001600160a01b0382166000908152600a60205260409020548310155b6147895760405162461bcd60e51b815260206004820152602360248201527f53616c653a20616d6f756e742065786365656473206d617820616c6c6f63617460448201526234b7b760e91b60648201526084016105dd565b600954601f5411156147d15760405162461bcd60e51b815260206004820152601160248201527014d85b194e8818d85c081c995858da1959607a1b60448201526064016105dd565b836020546147df9190615e13565b6020556021546147f0906001615e13565b6021556022546147ff57436022555b4360235560408051858152602081018390526001600160a01b038416917f8fafebcaf9d154343dad25669bfa277f4fbacd7ac6b0c4fed522580e040a0f33910160405180910390a250505050565b6000611a5f8284615e4b565b6000611a5f8284615e2b565b61486f828261306a565b61224b57614887816001600160a01b03166014614ea9565b614892836020614ea9565b6040516020016148a392919061599c565b60408051601f198184030181529082905262461bcd60e51b82526105dd91600401615bb4565b6148d3828261306a565b61224b5760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b6040516001600160a01b0380851660248301528316604482015260648101829052611d699085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261508a565b6149a9828261306a565b1561224b5760008281526001602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381166000908152600a6020526040812054614a7b57506000611395565b6305f5e10060188481548110614aa157634e487b7160e01b600052603260045260246000fd5b906000526020600020906002020160010154600a6000856001600160a01b03166001600160a01b0316815260200190815260200160002054614ae39190615e4b565b611a5f9190615e2b565b6040516001600160a01b0383166024820152604481018290526115a790849063a9059cbb60e01b90606401614968565b6000600554421180156123c357506006546005546138329190615e13565b60003381614b48826138ec565b90506000614b57600d54611a37565b600f5490915060ff16158015614b775750601354600160a01b900460ff16155b15614b83579392505050565b600f5460ff168015614ba457503360009081526010602052604090205460ff165b15614c0657600082118015614bbc5750614bbc6144af565b15614bf4576000614bcc84612706565b509250505060008111614bf15760405162461bcd60e51b81526004016105dd90615d29565b91505b614bfe8282615e13565b935050505090565b600f5460ff168015614c225750601354600160a01b900460ff16155b15614c6f5760405162461bcd60e51b815260206004820152601a60248201527f53616c653a206e6f7420696e207468652077686974656c69737400000000000060448201526064016105dd565b601354600160a01b900460ff1615614e6157614c896144af565b15614cc6576000614c9984612706565b509250505060008111614cbe5760405162461bcd60e51b81526004016105dd90615d29565b949350505050565b6001600160a01b03831660009081526017602052604081208054614ce990615ec4565b80601f0160208091040260200160405190810160405280929190818152602001828054614d1590615ec4565b8015614d625780601f10614d3757610100808354040283529160200191614d62565b820191906000526020600020905b815481529060010190602001808311614d4557829003601f168201915b505050505090506000815111614dc55760405162461bcd60e51b815260206004820152602260248201527f53616c653a2075736572206c6576656c206973206e6f74207265676973746572604482015261195960f21b60648201526084016105dd565b60008311614e585760405162461bcd60e51b815260206004820152605460248201527f53616c653a207573657220686173206e6f206c6576656c20616c6c6f6361746960448201527f6f6e2c206e6f7420726567697374657265642c206c6f7374206c6f7474657279606482015273206f72206c6576656c20697320746f6f206c6f7760601b608482015260a4016105dd565b50909392505050565b60405162461bcd60e51b815260206004820152601760248201527f53616c653a20756e726561636861626c6520737461746500000000000000000060448201526064016105dd565b60606000614eb8836002615e4b565b614ec3906002615e13565b6001600160401b03811115614ee857634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015614f12576020820181803683370190505b509050600360fc1b81600081518110614f3b57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110614f7857634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000614f9c846002615e4b565b614fa7906001615e13565b90505b600181111561503b576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110614fe957634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061500d57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c9361503481615ead565b9050614faa565b508315611a5f5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016105dd565b60006150df826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661515c9092919063ffffffff16565b8051909150156115a757808060200190518101906150fd9190615681565b6115a75760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016105dd565b6060614cbe8484600085856001600160a01b0385163b6151be5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105dd565b600080866001600160a01b031685876040516151da9190615970565b60006040518083038185875af1925050503d8060008114615217576040519150601f19603f3d011682016040523d82523d6000602084013e61521c565b606091505b509150915061522c828286615237565b979650505050505050565b60608315615246575081611a5f565b8251156152565782518084602001fd5b8160405162461bcd60e51b81526004016105dd9190615bb4565b82805461527c90615ec4565b90600052602060002090601f01602090048101928261529e57600085556152e4565b82601f106152b757805160ff19168380011785556152e4565b828001600101855582156152e4579182015b828111156152e45782518255916020019190600101906152c9565b506152f09291506152f4565b5090565b5b808211156152f057600081556001016152f5565b600082601f830112615319578081fd5b8135602061532e61532983615dc9565b615d99565b80838252828201915082860187848660051b890101111561534d578586fd5b855b8581101561536b5781358452928401929084019060010161534f565b5090979650505050505050565b805161538381615f5b565b919050565b600082601f830112615398578081fd5b81516153a661532982615dec565b8181528460208386010111156153ba578283fd5b614cbe826020830160208701615e81565b600060e082840312156153dc578081fd5b6153e4615d71565b905081516001600160401b038111156153fc57600080fd5b61540884828501615388565b82525060208201516020820152604082015160408201526060820151606082015261543560808301615378565b608082015261544660a0830161547c565b60a082015261545760c08301615378565b60c082015292915050565b805169ffffffffffffffffffff8116811461538357600080fd5b805160ff8116811461538357600080fd5b60006020828403121561549e578081fd5b8135611a5f81615f46565b6000806000606084860312156154bd578182fd5b83356154c881615f46565b925060208401356001600160401b03808211156154e3578384fd5b6154ef87838801615309565b93506040860135915080821115615504578283fd5b5061551186828701615309565b9150509250925092565b6000806040838503121561552d578182fd5b823561553881615f46565b946020939093013593505050565b60008060208385031215615558578081fd5b82356001600160401b038082111561556e578283fd5b818501915085601f830112615581578283fd5b81358181111561558f578384fd5b8660208260051b85010111156155a3578384fd5b60209290920196919550909350505050565b600060208083850312156155c7578182fd5b82516001600160401b03808211156155dd578384fd5b818501915085601f8301126155f0578384fd5b81516155fe61532982615dc9565b80828252858201915085850189878560051b880101111561561d578788fd5b875b848110156156565781518681111561563557898afd5b6156438c8a838b0101615388565b855250928701929087019060010161561f565b50909998505050505050505050565b600060208284031215615676578081fd5b8135611a5f81615f5b565b600060208284031215615692578081fd5b8151611a5f81615f5b565b6000602082840312156156ae578081fd5b5035919050565b600080604083850312156156c7578182fd5b8235915060208301356156d981615f46565b809150509250929050565b6000602082840312156156f5578081fd5b81356001600160e01b031981168114611a5f578182fd5b6000806020838503121561571e578182fd5b82356001600160401b0380821115615734578384fd5b818501915085601f830112615747578384fd5b813581811115615755578485fd5b8660208285010111156155a3578485fd5b60008060408385031215615778578182fd5b82356001600160401b0381111561578d578283fd5b8301601f8101851361579d578283fd5b80356157ab61532982615dec565b8181528660208385010111156157bf578485fd5b8160208401602083013790810160209081019490945295939092013593505050565b6000602082840312156157f2578081fd5b81516001600160401b03811115615807578182fd5b614cbe848285016153cb565b60008060408385031215615825578182fd5b82516001600160401b0381111561583a578283fd5b615846858286016153cb565b925050602083015190509250929050565b600060208284031215615868578081fd5b5051919050565b60008060408385031215615881578182fd5b50508035926020909101359150565b6000806000606084860312156158a4578081fd5b505081359360208301359350604090920135919050565b600080600080600060a086880312156158d2578283fd5b6158db86615462565b94506020860151935060408601519250606086015191506158fe60808701615462565b90509295509295909350565b6000815180845260208085019450808401835b838110156159395781518752958201959082019060010161591d565b509495945050505050565b6000815180845261595c816020860160208601615e81565b601f01601f19169290920160200192915050565b60008251615982818460208701615e81565b9190910192915050565b8183823760009101908152919050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516159d4816017850160208801615e81565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351615a05816028840160208801615e81565b01602801949350505050565b6020808252825182820181905260009190848201906040850190845b81811015615a525783516001600160a01b031683529284019291840191600101615a2d565b50909695505050505050565b6000604082016040835280855180835260608501915060608160051b86010192506020808801855b83811015615ab457605f19888703018552615aa2868351615944565b95509382019390820190600101615a86565b505085840381870152505050615aca818561590a565b95945050505050565b602080825282518282018190526000919060409081850190868401855b82811015615b1557815180518552860151868501529284019290850190600101615af0565b5091979650505050505050565b60a081526000615b3560a083018861590a565b602083820381850152615b48828961590a565b91508382036040850152615b5c828861590a565b84810360608601528651808252828801935090820190845b81811015615b92578451151583529383019391830191600101615b74565b50508481036080860152615ba6818761590a565b9a9950505050505050505050565b602081526000611a5f6020830184615944565b606081526000615bda6060830186615944565b602083019490945250901515604090910152919050565b608081526000615c046080830187615944565b60208301959095525060408101929092521515606090910152919050565b60208082526030908201527f576974686472617761626c653a20616d6f756e742073686f756c64206265206760408201526f726561746572207468616e207a65726f60801b606082015260800190565b6020808252601c908201527f436c61696d65723a204f7574206f6620626f756e647320696e64657800000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252602b908201527f41646d696e61626c653a2063616c6c6572206973206e6f7420746865206f776e60408201526a32b91037b91030b236b4b760a91b606082015260800190565b60208082526028908201527f53616c653a207573657220646f6573206e6f742068617665204643465320616c6040820152673637b1b0ba34b7b760c11b606082015260800190565b60405160e081016001600160401b0381118282101715615d9357615d93615f30565b60405290565b604051601f8201601f191681016001600160401b0381118282101715615dc157615dc1615f30565b604052919050565b60006001600160401b03821115615de257615de2615f30565b5060051b60200190565b60006001600160401b03821115615e0557615e05615f30565b50601f01601f191660200190565b60008219821115615e2657615e26615f1a565b500190565b600082615e4657634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615615e6557615e65615f1a565b500290565b600082821015615e7c57615e7c615f1a565b500390565b60005b83811015615e9c578181015183820152602001615e84565b83811115611d695750506000910152565b600081615ebc57615ebc615f1a565b506000190190565b600181811c90821680615ed857607f821691505b60208210811415615ef957634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415615f1357615f13615f1a565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461306757600080fd5b801515811461306757600080fdfea264697066735822122060a5a044ea47aebd940a0ecb9cf7c5be8bbb6a62ed30b621214c35b62c491ff764736f6c63430008040033"}');

/***/ })

};
;