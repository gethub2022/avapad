"use strict";
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 2829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useToken)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1878);
/* harmony import */ var _state_multicall_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(879);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8269);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8246);





function useToken(address) {
  const {
    chainId
  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)();
  const tokenContract = (0,_useContract__WEBPACK_IMPORTED_MODULE_4__/* .useTokenContract */ .Ib)(address);
  const tokenCalls = [{
    methodName: 'name',
    callInputs: []
  }, {
    methodName: 'symbol',
    callInputs: []
  }, {
    methodName: 'decimals',
    callInputs: []
  }];
  const results = (0,_state_multicall_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useMultipleCallMultipleResult */ .RZ)(tokenContract, tokenCalls);
  const tokenDetails = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return !results || results.length <= 0 || results.some(result => result.loading) ? undefined : tokenCalls.reduce((acc, curr, i) => {
      var _results$i$result;

      acc[curr.methodName] = (_results$i$result = results[i].result) === null || _results$i$result === void 0 ? void 0 : _results$i$result[0];
      return acc;
    }, {});
  }, [results]);
  return tokenDetails ? new _sdk__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .WU(chainId, address, tokenDetails.decimals, tokenDetails.symbol, tokenDetails.name) : null;
}

/***/ })

};
;