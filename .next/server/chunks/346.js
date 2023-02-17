"use strict";
exports.id = 346;
exports.ids = [346];
exports.modules = {

/***/ 3917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DE": () => (/* binding */ useLaunchpads),
/* harmony export */   "Se": () => (/* binding */ useSinglePoolData),
/* harmony export */   "Mq": () => (/* binding */ useIsUserWhiteListed),
/* harmony export */   "i9": () => (/* binding */ useUserRemainingAllocation),
/* harmony export */   "rO": () => (/* binding */ useClaimedDetails)
/* harmony export */ });
/* unused harmony export useLaunchpadPools */
/* harmony import */ var _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(879);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6124);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_abi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8246);
/* harmony import */ var _constants_abis_ido_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5415);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1289);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8269);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1446);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_7__);








function useLaunchpadPools() {
  var _result$result;

  const levelsContract = (0,_useContract__WEBPACK_IMPORTED_MODULE_3__/* .useLevelsContract */ .kN)();
  const result = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useSingleCallResult */ .Wk)(levelsContract, 'getAllIDOs');
  return result.loading ? [] : (_result$result = result.result) === null || _result$result === void 0 ? void 0 : _result$result[0];
}
const IDOInterface = new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_1__.Interface(_constants_abis_ido_json__WEBPACK_IMPORTED_MODULE_4__/* .abi */ .Mt);
function useLaunchpads() {
  const pools = useLaunchpadPools();
  const poolAddress = pools.map(pool => pool[0]);
  const startTimeResults = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useMultipleContractSingleData */ ._Y)(poolAddress, IDOInterface, 'startTime');
  const endTimeResult = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useMultipleContractSingleData */ ._Y)(poolAddress, IDOInterface, 'getEndTime');
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return startTimeResults.length <= 0 || endTimeResult.length <= 0 ? [] : pools.map((pool, i) => {
      return {
        address: pool[0],
        ipfsHash: pool[1],
        startTime: moment_timezone__WEBPACK_IMPORTED_MODULE_5___default().unix(Number(startTimeResults[i].result)).utc(),
        endTime: moment_timezone__WEBPACK_IMPORTED_MODULE_5___default().unix(Number(endTimeResult[i].result)).utc()
      };
    });
  }, [startTimeResults, endTimeResult]);
}
const idoCalls = [{
  methodName: 'rate',
  callInputs: []
}, {
  methodName: 'tokensForSale',
  callInputs: []
}, {
  methodName: 'startTime',
  callInputs: []
}, {
  methodName: 'getEndTime',
  callInputs: []
}, {
  methodName: 'registerTime',
  callInputs: []
}, {
  methodName: 'registerDuration',
  callInputs: []
}, {
  methodName: 'fcfsDuration',
  callInputs: []
}, {
  methodName: 'whitelistEnabled',
  callInputs: []
}, {
  methodName: 'levelsEnabled',
  callInputs: []
}, {
  methodName: 'participants',
  callInputs: []
}, {
  methodName: 'tokensSold',
  callInputs: []
}, {
  methodName: 'getRateNative',
  callInputs: []
}, {
  methodName: 'minSell',
  callInputs: []
}, {
  methodName: 'maxSell',
  callInputs: []
}, {
  methodName: 'isLive',
  callInputs: []
}, {
  methodName: 'isFcfsTime',
  callInputs: []
}, {
  methodName: 'getNativePriceUSD',
  callInputs: []
}, {
  methodName: 'getAllClaims',
  callInputs: []
}, {
  methodName: 'isPaused',
  callInputs: []
}, {
  methodName: 'token',
  callInputs: []
}];
function useSinglePoolData(poolAddress) {
  const idoContract = (0,_useContract__WEBPACK_IMPORTED_MODULE_3__/* .useIDOContract */ .Z_)(poolAddress);
  const results = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useMultipleCallMultipleResult */ .RZ)(idoContract, idoCalls);
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return !results || results.length <= 0 || results.some(result => result.loading) ? undefined : idoCalls.reduce((acc, curr, i) => {
      var _results$i$result;

      acc[curr.methodName] = (_results$i$result = results[i].result) === null || _results$i$result === void 0 ? void 0 : _results$i$result[0];
      return acc;
    }, {});
  }, [results]);
}
function useIsUserWhiteListed(poolAddress) {
  var _result$result2;

  const {
    account
  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)();
  const idoContract = (0,_useContract__WEBPACK_IMPORTED_MODULE_3__/* .useIDOContract */ .Z_)(poolAddress);
  const result = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useSingleCallResult */ .Wk)(account ? idoContract : null, 'whitelisted', account ? [account] : []);
  return result.loading ? false : (_result$result2 = result.result) === null || _result$result2 === void 0 ? void 0 : _result$result2[0];
}
function useUserRemainingAllocation(poolAddress) {
  var _result$result3, _balanceResult$result, _result$result4, _balanceResult$result2;

  const {
    account
  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)();
  const idoContract = (0,_useContract__WEBPACK_IMPORTED_MODULE_3__/* .useIDOContract */ .Z_)(poolAddress);
  const result = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useSingleCallResult */ .Wk)(account ? idoContract : null, 'userWeight', account ? [account] : []);
  const balanceResult = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useSingleCallResult */ .Wk)(account ? idoContract : null, 'balances', account ? [account] : []);
  return result.loading || balanceResult.loading || !((_result$result3 = result.result) !== null && _result$result3 !== void 0 && _result$result3[0]) || !((_balanceResult$result = balanceResult.result) !== null && _balanceResult$result !== void 0 && _balanceResult$result[0]) ? {
    balance: _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_7__.BigNumber.from(0),
    maxAllocation: _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_7__.BigNumber.from(0)
  } : {
    maxAllocation: (_result$result4 = result.result) === null || _result$result4 === void 0 ? void 0 : _result$result4[0],
    balance: (_balanceResult$result2 = balanceResult.result) === null || _balanceResult$result2 === void 0 ? void 0 : _balanceResult$result2[0]
  };
}
function useClaimedDetails(poolAddress) {
  var _result$result5;

  const {
    account
  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)();
  const idoContract = (0,_useContract__WEBPACK_IMPORTED_MODULE_3__/* .useIDOContract */ .Z_)(poolAddress);
  const result = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useSingleCallResult */ .Wk)(account ? idoContract : null, 'getClaims', account ? [account] : []); // const pendingResult = useSingleCallResult(
  //   account ? idoContract : null,
  //   'calculatePendingTokens',
  //   account ? [account] : [],
  // );

  return result.loading || // pendingResult.loading ||
  !((_result$result5 = result.result) !== null && _result$result5 !== void 0 && _result$result5[0]) ? //  ||
  // !pendingResult.result?.[0]
  {
    claims: [] // claimed: BigNumber.from(0),
    // pendingReward: BigNumber.from(0),

  } : {
    claims: result.result // claimed: result.result?.[0],
    // pendingReward: pendingResult.result?.[0],

  };
}

/***/ }),

/***/ 3144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePoolTimings)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1212);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


function usePoolTimings(pool) {
  const now = moment__WEBPACK_IMPORTED_MODULE_1___default().utc(),
        isEnded = pool && moment__WEBPACK_IMPORTED_MODULE_1___default().utc().isAfter(moment__WEBPACK_IMPORTED_MODULE_1___default().unix(pool.getEndTime).utc()),
        isUpcomming = pool && moment__WEBPACK_IMPORTED_MODULE_1___default().unix(pool.getEndTime).utc().isAfter(moment__WEBPACK_IMPORTED_MODULE_1___default()().utc()) && moment__WEBPACK_IMPORTED_MODULE_1___default().unix(pool.startTime).utc().isAfter(moment__WEBPACK_IMPORTED_MODULE_1___default()().utc()),
        isActive = pool && moment__WEBPACK_IMPORTED_MODULE_1___default().unix(pool.startTime).utc().isBefore(moment__WEBPACK_IMPORTED_MODULE_1___default()().utc()) && moment__WEBPACK_IMPORTED_MODULE_1___default().unix(pool.getEndTime).utc().isAfter(moment__WEBPACK_IMPORTED_MODULE_1___default()().utc()),
        startTime = pool && moment__WEBPACK_IMPORTED_MODULE_1___default().unix(pool.startTime).utc(),
        endTime = pool && moment__WEBPACK_IMPORTED_MODULE_1___default().unix(pool.getEndTime).utc(),
        registerTime = pool && Number(pool.registerTime) > 0 && pool.levelsEnabled ? moment__WEBPACK_IMPORTED_MODULE_1___default().unix(pool.registerTime).utc() : null,
        registerEndTime = pool && registerTime ? moment__WEBPACK_IMPORTED_MODULE_1___default()(registerTime).add(pool.registerDuration, 'seconds') : null,
        isRegisterTime = pool && registerTime && registerTime.isBefore(now) && registerEndTime.isAfter(now),
        fcfsTime = pool && Number(pool.fcfsDuration) > 0 ? moment__WEBPACK_IMPORTED_MODULE_1___default()(endTime).subtract(pool.fcfsDuration, 'seconds') : null,
        isFcfsTime = pool && fcfsTime && fcfsTime.isBefore(moment__WEBPACK_IMPORTED_MODULE_1___default()().utc()),
        saleLiveIn = pool && isUpcomming && !isEnded ? (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .getFormatedDateDiff */ .tg)(startTime.diff(now)) : null,
        saleEndsIn = pool && isActive && !isEnded ? (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .getFormatedDateDiff */ .tg)(endTime.diff(now)) : null,
        saleEndedAgo = pool && isEnded ? (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .getFormatedDateDiff */ .tg)(now.diff(endTime)) : null,
        registerStartsIn = pool && !isRegisterTime && registerTime && registerEndTime && registerTime.isBefore(now) && registerEndTime.isAfter(now) ? (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .getFormatedDateDiff */ .tg)(registerTime.diff(now)) : null,
        registerEndsIn = pool && isRegisterTime && registerEndTime && registerEndTime.isAfter(now) ? (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .getFormatedDateDiff */ .tg)(registerEndTime.diff(now)) : null,
        registerEndedAgo = pool && !isRegisterTime && registerEndTime && registerEndTime.isBefore(now) ? (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .getFormatedDateDiff */ .tg)(now.diff(registerEndTime)) : null;
  return {
    isActive,
    isEnded,
    isUpcomming,
    startTime,
    endTime,
    registerTime,
    registerEndTime,
    isRegisterTime,
    fcfsTime,
    isFcfsTime,
    saleLiveIn,
    saleEndsIn,
    saleEndedAgo,
    registerStartsIn,
    registerEndsIn,
    registerEndedAgo
  };
}

/***/ })

};
;