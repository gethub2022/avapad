"use strict";
exports.id = 696;
exports.ids = [696];
exports.modules = {

/***/ 434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lk": () => (/* binding */ ApplicationModal),
/* harmony export */   "fG": () => (/* binding */ updateBlockNumber),
/* harmony export */   "i3": () => (/* binding */ setOpenModal),
/* harmony export */   "i8": () => (/* binding */ addPopup),
/* harmony export */   "hC": () => (/* binding */ removePopup),
/* harmony export */   "ZD": () => (/* binding */ setKashiApprovalPending)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let ApplicationModal;

(function (ApplicationModal) {
  ApplicationModal[ApplicationModal["WALLET"] = 0] = "WALLET";
  ApplicationModal[ApplicationModal["SETTINGS"] = 1] = "SETTINGS";
  ApplicationModal[ApplicationModal["SELF_CLAIM"] = 2] = "SELF_CLAIM";
  ApplicationModal[ApplicationModal["ADDRESS_CLAIM"] = 3] = "ADDRESS_CLAIM";
  ApplicationModal[ApplicationModal["CLAIM_POPUP"] = 4] = "CLAIM_POPUP";
  ApplicationModal[ApplicationModal["MENU"] = 5] = "MENU";
  ApplicationModal[ApplicationModal["DELEGATE"] = 6] = "DELEGATE";
  ApplicationModal[ApplicationModal["VOTE"] = 7] = "VOTE";
  ApplicationModal[ApplicationModal["LANGUAGE"] = 8] = "LANGUAGE";
  ApplicationModal[ApplicationModal["NETWORK"] = 9] = "NETWORK";
})(ApplicationModal || (ApplicationModal = {}));

const updateBlockNumber = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('application/updateBlockNumber');
const setOpenModal = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('application/setOpenModal');
const addPopup = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('application/addPopup');
const removePopup = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('application/removePopup');
const setKashiApprovalPending = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('application/setKashiApprovalPending');

/***/ }),

/***/ 4663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ov": () => (/* binding */ useBlockNumber),
/* harmony export */   "oL": () => (/* binding */ useModalOpen),
/* harmony export */   "mq": () => (/* binding */ useWalletModalToggle),
/* harmony export */   "i$": () => (/* binding */ useAddPopup),
/* harmony export */   "J3": () => (/* binding */ useRemovePopup),
/* harmony export */   "iT": () => (/* binding */ useActivePopups)
/* harmony export */ });
/* unused harmony exports useToggleModal, useOpenModal, useCloseModals, useNetworkModalToggle, useToggleSettingsMenu, useShowClaimPopup, useToggleShowClaimPopup, useToggleSelfClaimModal, useToggleDelegateModal, useToggleVoteModal, useKashiApprovalPending */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8269);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(434);




function useBlockNumber() {
  const {
    chainId
  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* .useActiveWeb3React */ .a)();
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.application.blockNumber[chainId !== null && chainId !== void 0 ? chainId : -1]);
}
function useModalOpen(modal) {
  const openModal = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.application.openModal);
  return openModal === modal;
}
function useToggleModal(modal) {
  const open = useModalOpen(modal);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__/* .setOpenModal */ .i3)(open ? null : modal)), [dispatch, modal, open]);
}
function useOpenModal(modal) {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(setOpenModal(modal)), [dispatch, modal]);
}
function useCloseModals() {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(setOpenModal(null)), [dispatch]);
}
function useWalletModalToggle() {
  return useToggleModal(_actions__WEBPACK_IMPORTED_MODULE_3__/* .ApplicationModal.WALLET */ .Lk.WALLET);
}
function useNetworkModalToggle() {
  return useToggleModal(ApplicationModal.NETWORK);
}
function useToggleSettingsMenu() {
  return useToggleModal(ApplicationModal.SETTINGS);
}
function useShowClaimPopup() {
  return useModalOpen(ApplicationModal.CLAIM_POPUP);
}
function useToggleShowClaimPopup() {
  return useToggleModal(ApplicationModal.CLAIM_POPUP);
}
function useToggleSelfClaimModal() {
  return useToggleModal(ApplicationModal.SELF_CLAIM);
}
function useToggleDelegateModal() {
  return useToggleModal(ApplicationModal.DELEGATE);
}
function useToggleVoteModal() {
  return useToggleModal(ApplicationModal.VOTE);
} // returns a function that allows adding a popup

function useAddPopup() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((content, key) => {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__/* .addPopup */ .i8)({
      content,
      key
    }));
  }, [dispatch]);
} // returns a function that allows removing a popup via its key

function useRemovePopup() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(key => {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__/* .removePopup */ .hC)({
      key
    }));
  }, [dispatch]);
} // get the list of active popups

function useActivePopups() {
  const list = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.application.popupList);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => list.filter(item => item.show), [list]);
}
function useKashiApprovalPending() {
  return useSelector(state => state.application.kashiApprovalPending);
}

/***/ }),

/***/ 9268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useAppDispatch),
/* harmony export */   "C": () => (/* binding */ useAppSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = () => (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;

/***/ }),

/***/ 8995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dd": () => (/* binding */ addMulticallListeners),
/* harmony export */   "$x": () => (/* binding */ removeMulticallListeners),
/* harmony export */   "nu": () => (/* binding */ fetchingMulticallResults),
/* harmony export */   "wC": () => (/* binding */ errorFetchingMulticallResults),
/* harmony export */   "zT": () => (/* binding */ updateMulticallResults)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const addMulticallListeners = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('multicall/addMulticallListeners');
const removeMulticallListeners = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('multicall/removeMulticallListeners');
const fetchingMulticallResults = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('multicall/fetchingMulticallResults');
const errorFetchingMulticallResults = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('multicall/errorFetchingMulticallResults');
const updateMulticallResults = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('multicall/updateMulticallResults');

/***/ }),

/***/ 879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "es": () => (/* binding */ useSingleContractMultipleData),
/* harmony export */   "_Y": () => (/* binding */ useMultipleContractSingleData),
/* harmony export */   "RZ": () => (/* binding */ useMultipleCallMultipleResult),
/* harmony export */   "Wk": () => (/* binding */ useSingleCallResult)
/* harmony export */ });
/* unused harmony export NEVER_RELOAD */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7601);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8995);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9268);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1446);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8269);
/* harmony import */ var _application_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4663);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function isMethodArg(x) {
  return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__.BigNumber.isBigNumber(x) || ['string', 'number'].indexOf(typeof x) !== -1;
}

function isValidMethodArgs(x) {
  return x === undefined || Array.isArray(x) && x.every(xi => isMethodArg(xi) || Array.isArray(xi) && xi.every(isMethodArg));
}

const INVALID_RESULT = {
  valid: false,
  blockNumber: undefined,
  data: undefined
}; // use this options object

const NEVER_RELOAD = {
  blocksPerFetch: Infinity
}; // the lowest level call for subscribing to contract data

function useCallsData(calls, {
  blocksPerFetch
} = {
  blocksPerFetch: 1
}) {
  const {
    chainId
  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__/* .useActiveWeb3React */ .a)();
  const callResults = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)(state => state.multicall.callResults);
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .T)();
  const serializedCallKeys = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    var _calls$filter$map$sor, _calls$filter, _calls$filter$map;

    return JSON.stringify((_calls$filter$map$sor = calls === null || calls === void 0 ? void 0 : (_calls$filter = calls.filter(c => Boolean(c))) === null || _calls$filter === void 0 ? void 0 : (_calls$filter$map = _calls$filter.map(_utils__WEBPACK_IMPORTED_MODULE_6__/* .toCallKey */ .k)) === null || _calls$filter$map === void 0 ? void 0 : _calls$filter$map.sort()) !== null && _calls$filter$map$sor !== void 0 ? _calls$filter$map$sor : []);
  }, [calls]); // update listeners when there is an actual change that persists for at least 100ms

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const callKeys = JSON.parse(serializedCallKeys);
    if (!chainId || callKeys.length === 0) return undefined;
    const calls = callKeys.map(key => (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .parseCallKey */ .g)(key));
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__/* .addMulticallListeners */ .Dd)({
      chainId,
      calls,
      options: {
        blocksPerFetch
      }
    }));
    return () => {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__/* .removeMulticallListeners */ .$x)({
        chainId,
        calls,
        options: {
          blocksPerFetch
        }
      }));
    };
  }, [chainId, dispatch, blocksPerFetch, serializedCallKeys]);
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => calls.map(call => {
    var _callResults$chainId;

    if (!chainId || !call) return INVALID_RESULT;
    const result = (_callResults$chainId = callResults[chainId]) === null || _callResults$chainId === void 0 ? void 0 : _callResults$chainId[(0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .toCallKey */ .k)(call)];
    let data;

    if (result !== null && result !== void 0 && result.data && (result === null || result === void 0 ? void 0 : result.data) !== '0x') {
      data = result.data;
    }

    return {
      valid: true,
      data,
      blockNumber: result === null || result === void 0 ? void 0 : result.blockNumber
    };
  }), [callResults, calls, chainId]);
}

const INVALID_CALL_STATE = {
  valid: false,
  result: undefined,
  loading: false,
  syncing: false,
  error: false
};
const LOADING_CALL_STATE = {
  valid: true,
  result: undefined,
  loading: true,
  syncing: true,
  error: false
};

function toCallState(callResult, contractInterface, fragment, latestBlockNumber) {
  if (!callResult) return INVALID_CALL_STATE;
  const {
    valid,
    data,
    blockNumber
  } = callResult;
  if (!valid) return INVALID_CALL_STATE;
  if (valid && !blockNumber) return LOADING_CALL_STATE;
  if (!contractInterface || !fragment || !latestBlockNumber) return LOADING_CALL_STATE;
  const success = data && data.length > 2;
  const syncing = (blockNumber !== null && blockNumber !== void 0 ? blockNumber : 0) < latestBlockNumber;
  let result = undefined;

  if (success && data) {
    try {
      result = contractInterface.decodeFunctionResult(fragment, data);
    } catch (error) {
      console.debug('Result data parsing failed', fragment, data);
      return {
        valid: true,
        loading: false,
        error: true,
        syncing,
        result
      };
    }
  }

  return {
    valid: true,
    loading: false,
    syncing,
    result: result,
    error: !success
  };
}

function useSingleContractMultipleData(contract, methodName, callInputs, options, gasRequired) {
  const fragment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    var _contract$interface;

    return contract === null || contract === void 0 ? void 0 : (_contract$interface = contract.interface) === null || _contract$interface === void 0 ? void 0 : _contract$interface.getFunction(methodName);
  }, [contract, methodName]);
  const calls = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => contract && fragment && (callInputs === null || callInputs === void 0 ? void 0 : callInputs.length) > 0 && callInputs.every(inputs => isValidMethodArgs(inputs)) ? callInputs.map(inputs => {
    return _objectSpread({
      address: contract.address,
      callData: contract.interface.encodeFunctionData(fragment, inputs)
    }, gasRequired ? {
      gasRequired
    } : {});
  }) : [], [contract, fragment, callInputs, gasRequired]);
  const results = useCallsData(calls, options);
  const latestBlockNumber = (0,_application_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useBlockNumber */ .Ov)();
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return results.map(result => toCallState(result, contract === null || contract === void 0 ? void 0 : contract.interface, fragment, latestBlockNumber));
  }, [fragment, contract, results, latestBlockNumber]);
}
function useMultipleContractSingleData(addresses, contractInterface, methodName, callInputs, options, gasRequired) {
  const fragment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => contractInterface.getFunction(methodName), [contractInterface, methodName]);
  const callData = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => fragment && isValidMethodArgs(callInputs) ? contractInterface.encodeFunctionData(fragment, callInputs) : undefined, [callInputs, contractInterface, fragment]);
  const calls = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => fragment && addresses && addresses.length > 0 && callData ? addresses.map(address => {
    return address && callData ? _objectSpread({
      address,
      callData
    }, gasRequired ? {
      gasRequired
    } : {}) : undefined;
  }) : [], [addresses, callData, fragment, gasRequired]);
  const results = useCallsData(calls, options);
  const latestBlockNumber = (0,_application_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useBlockNumber */ .Ov)();
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return results.map(result => toCallState(result, contractInterface, fragment, latestBlockNumber));
  }, [fragment, results, contractInterface, latestBlockNumber]);
}
function useMultipleCallMultipleResult(contract, methods, options, gasRequired) {
  const calls = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => methods.length > 0 && contract ? methods.map(({
    methodName,
    callInputs
  }) => {
    var _contract$interface2;

    const fragment = contract === null || contract === void 0 ? void 0 : (_contract$interface2 = contract.interface) === null || _contract$interface2 === void 0 ? void 0 : _contract$interface2.getFunction(methodName);
    return methodName && callInputs && isValidMethodArgs(callInputs) ? _objectSpread({
      address: contract.address,
      callData: contract.interface.encodeFunctionData(fragment, callInputs),
      fragment
    }, gasRequired ? {
      gasRequired
    } : {}) : undefined;
  }) : [], [methods, contract, gasRequired]);
  const results = useCallsData(calls, options);
  const latestBlockNumber = (0,_application_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useBlockNumber */ .Ov)();
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return results.map((result, i) => toCallState(result, contract === null || contract === void 0 ? void 0 : contract.interface, calls[i].fragment, latestBlockNumber));
  }, [contract, results, latestBlockNumber]);
}
function useSingleCallResult(contract, methodName, inputs, options, gasRequired) {
  const fragment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    var _contract$interface3;

    return contract === null || contract === void 0 ? void 0 : (_contract$interface3 = contract.interface) === null || _contract$interface3 === void 0 ? void 0 : _contract$interface3.getFunction(methodName);
  }, [contract, methodName]);
  const calls = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return contract && fragment && isValidMethodArgs(inputs) ? [_objectSpread({
      address: contract.address,
      callData: contract.interface.encodeFunctionData(fragment, inputs)
    }, gasRequired ? {
      gasRequired
    } : {})] : [];
  }, [contract, fragment, inputs, gasRequired]);
  const result = useCallsData(calls, options)[0];
  const latestBlockNumber = (0,_application_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useBlockNumber */ .Ov)();
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return toCallState(result, contract === null || contract === void 0 ? void 0 : contract.interface, fragment, latestBlockNumber);
  }, [result, contract, fragment, latestBlockNumber]);
}

/***/ }),

/***/ 7601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ toCallKey),
/* harmony export */   "g": () => (/* binding */ parseCallKey)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function toCallKey(call) {
  let key = `${call.address}-${call.callData}`;

  if (call.gasRequired) {
    if (!Number.isSafeInteger(call.gasRequired)) {
      throw new Error(`Invalid number: ${call.gasRequired}`);
    }

    key += `-${call.gasRequired}`;
  }

  return key;
}
function parseCallKey(callKey) {
  const pcs = callKey.split('-');

  if (![2, 3].includes(pcs.length)) {
    throw new Error(`Invalid call key: ${callKey}`);
  }

  return _objectSpread({
    address: pcs[0],
    callData: pcs[1]
  }, pcs[2] ? {
    gasRequired: Number.parseInt(pcs[2])
  } : {});
}

/***/ })

};
;