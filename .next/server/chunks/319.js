"use strict";
exports.id = 319;
exports.ids = [319];
exports.modules = {

/***/ 2319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AE": () => (/* binding */ useETHBalances),
/* harmony export */   "mM": () => (/* binding */ useTokenBalance)
/* harmony export */ });
/* unused harmony exports useTokenBalancesWithLoadingIndicator, serializeBalancesMap, useTokenBalances */
/* harmony import */ var _multicall_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(879);
/* harmony import */ var _constants_abis_erc20_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9638);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6124);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_abi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2556);
/* harmony import */ var _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8269);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8246);
/* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4927);
/* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jsbi__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1878);
// import { Currency, CurrencyAmount, JSBI, NATIVE, Token } from '@alphadex/sdk';




 // import { useAllTokens } from '../../hooks/Tokens';





/**
 * Returns a map of the given addresses to their eventually consistent ETH balances.
 */

function useETHBalances(uncheckedAddresses) {
  const {
    chainId
  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__/* .useActiveWeb3React */ .a)();
  const multicallContract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_6__/* .useMulticall2Contract */ .JD)();
  const addresses = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => uncheckedAddresses ? uncheckedAddresses.map(_functions_validate__WEBPACK_IMPORTED_MODULE_3__/* .isAddress */ .UJ).filter(a => a !== false).sort() : [], [uncheckedAddresses]);
  const results = (0,_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useSingleContractMultipleData */ .es)(multicallContract, 'getEthBalance', addresses.map(address => [address]));
  return (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => addresses.reduce((memo, address, i) => {
    var _results$i, _results$i$result;

    const value = results === null || results === void 0 ? void 0 : (_results$i = results[i]) === null || _results$i === void 0 ? void 0 : (_results$i$result = _results$i.result) === null || _results$i$result === void 0 ? void 0 : _results$i$result[0];
    if (value && chainId) memo[address] = _sdk__WEBPACK_IMPORTED_MODULE_8__/* .CurrencyAmount.fromRawAmount */ .ih.fromRawAmount(_sdk__WEBPACK_IMPORTED_MODULE_8__/* .NATIVE */ .B5[chainId], jsbi__WEBPACK_IMPORTED_MODULE_7___default().BigInt(value.toString()));
    return memo;
  }, {}), [addresses, chainId, results]);
} // /**
//  * Returns a map of token addresses to their eventually consistent token balances for a single account.
//  */

function useTokenBalancesWithLoadingIndicator(address, tokens) {
  const validatedTokens = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    var _tokens$filter;

    return (_tokens$filter = tokens === null || tokens === void 0 ? void 0 : tokens.filter(t => (0,_functions_validate__WEBPACK_IMPORTED_MODULE_3__/* .isAddress */ .UJ)(t === null || t === void 0 ? void 0 : t.address) !== false)) !== null && _tokens$filter !== void 0 ? _tokens$filter : [];
  }, [tokens]);
  const validatedTokenAddresses = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => validatedTokens.map(vt => vt.address), [validatedTokens]);
  const ERC20Interface = new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_2__.Interface(_constants_abis_erc20_json__WEBPACK_IMPORTED_MODULE_1__);
  const balances = (0,_multicall_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useMultipleContractSingleData */ ._Y)(validatedTokenAddresses, ERC20Interface, 'balanceOf', [address], undefined, 100000);
  const anyLoading = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => balances.some(callState => callState.loading), [balances]);
  return [(0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => address && validatedTokens.length > 0 ? validatedTokens.reduce((memo, token, i) => {
    var _balances$i, _balances$i$result;

    const value = balances === null || balances === void 0 ? void 0 : (_balances$i = balances[i]) === null || _balances$i === void 0 ? void 0 : (_balances$i$result = _balances$i.result) === null || _balances$i$result === void 0 ? void 0 : _balances$i$result[0];
    const amount = value ? jsbi__WEBPACK_IMPORTED_MODULE_7___default().BigInt(value.toString()) : undefined;

    if (amount) {
      memo[token.address] = _sdk__WEBPACK_IMPORTED_MODULE_8__/* .CurrencyAmount.fromRawAmount */ .ih.fromRawAmount(token, amount);
    }

    return memo;
  }, {}) : {}, [address, validatedTokens, balances]), anyLoading];
}
const serializeBalancesMap = mapping => {
  return Object.entries(mapping).map(([address, currencyAmount]) => currencyAmount.serialize()).join();
};
function useTokenBalances(address, tokens) {
  const balances = useTokenBalancesWithLoadingIndicator(address, tokens)[0];
  const memoizedBalances = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => serializeBalancesMap(balances), [balances]);
  return (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => balances, [memoizedBalances]);
} // get the balance for a single token/account combo

function useTokenBalance(account, token) {
  const tokenBalances = useTokenBalances(account, [token]);
  if (!token) return undefined;
  return tokenBalances[token.address];
} // export function useCurrencyBalances(
//   account?: string,
//   currencies?: (Currency | undefined)[]
// ): (CurrencyAmount<Currency> | undefined)[] {
//   const tokens = useMemo(
//     () => currencies?.filter((currency): currency is Token => currency?.isToken ?? false) ?? [],
//     [currencies]
//   )
//   const tokenBalances = useTokenBalances(account, tokens)
//   const containsETH: boolean = useMemo(() => currencies?.some((currency) => currency?.isNative) ?? false, [currencies])
//   const ethBalance = useETHBalances(containsETH ? [account] : [])
//   return useMemo(
//     () =>
//       currencies?.map((currency) => {
//         if (!account || !currency) return undefined
//         if (currency.isToken) return tokenBalances[currency.address]
//         if (currency.isNative) return ethBalance[account]
//         return undefined
//       }) ?? [],
//     [account, currencies, ethBalance, tokenBalances]
//   )
// }
// export function useCurrencyBalance(account?: string, currency?: Currency): CurrencyAmount<Currency> | undefined {
//   return useCurrencyBalances(account, [currency])[0]
// }
// // mimics useAllBalances
// export function useAllTokenBalances(): TokenBalancesMap {
//   const { account } = useActiveWeb3React()
//   const allTokens = useAllTokens()
//   const allTokensArray = useMemo(() => Object.values(allTokens ?? {}), [allTokens])
//   return useTokenBalances(account ?? undefined, allTokensArray)
// }

/***/ })

};
;