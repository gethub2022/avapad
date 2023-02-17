(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

;// CONCATENATED MODULE: external "@fortawesome/fontawesome-svg-core"
const fontawesome_svg_core_namespaceObject = require("@fortawesome/fontawesome-svg-core");
;// CONCATENATED MODULE: external "material-design-icons"
const external_material_design_icons_namespaceObject = require("material-design-icons");
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(417);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Loader/index.tsx
var components_Loader = __webpack_require__(4419);
// EXTERNAL MODULE: ./src/constants/index.ts
var constants = __webpack_require__(8532);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
;// CONCATENATED MODULE: external "@web3-react/injected-connector"
const injected_connector_namespaceObject = require("@web3-react/injected-connector");
// EXTERNAL MODULE: ./src/sdk/index.ts + 15 modules
var sdk = __webpack_require__(1878);
;// CONCATENATED MODULE: ./src/config/rpc.ts

const rpc = {
  [sdk/* ChainId.AVALANCHE_TESTNET */.a_.AVALANCHE_TESTNET]: 'https://api.avax-test.network/ext/bc/C/rpc',
  [sdk/* ChainId.AVALANCHE */.a_.AVALANCHE]: 'https://api.avax.network/ext/bc/C/rpc'
};
/* harmony default export */ const config_rpc = (rpc);
;// CONCATENATED MODULE: external "@web3-react/network-connector"
const network_connector_namespaceObject = require("@web3-react/network-connector");
;// CONCATENATED MODULE: ./src/config/wallets.ts




const network = new network_connector_namespaceObject.NetworkConnector({
  defaultChainId: sdk/* ChainId.AVALANCHE */.a_.AVALANCHE,
  urls: config_rpc
});
const wallets_injected = new injected_connector_namespaceObject.InjectedConnector({
  supportedChainIds: [// 3, 42,
  // 43113,
  sdk/* ChainId.AVALANCHE */.a_.AVALANCHE]
});
const SUPPORTED_WALLETS = {
  INJECTED: {
    connector: wallets_injected,
    name: 'Injected',
    iconName: 'injected.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: wallets_injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: async () => {
      const WalletConnectConnector = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9650, 23))).WalletConnectConnector;
      return new WalletConnectConnector({
        rpc: config_rpc,
        bridge: 'https://bridge.walletconnect.org',
        qrcode: true,
        chainId: sdk/* ChainId.AVALANCHE */.a_.AVALANCHE,
        supportedChainIds: [sdk/* ChainId.AVALANCHE */.a_.AVALANCHE // 1, // mainnet
        // 3, // ropsten
        // 4, // rinkeby
        // 5, // goreli
        // 42, // kovan
        // 250, // fantom
        // 4002, // fantom testnet
        // 137, // matic
        // 80001, // matic testnet
        // 100, // xdaiW
        // 56, // binance smart chain
        // 97, // binance smart chain testnet
        // 1287, // moonbase alpha
        // 1284, // moonbase
        // 43114, // avalanche
        // 43113, // fuji
        // 128, // heco
        // 256, // heco testnet
        // 1666600000, // harmony
        // 1666700000, // harmony testnet
        // 66, // okex testnet
        // 65, // okex testnet
        // 42161, // arbitrum
        // 42220, // celo
        // 11297108109, // palm
        // 1285, // moonriver
        ] // pollingInterval: 15000,

      });
    },
    name: 'WalletConnect',
    iconName: 'wallet-connect.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  } // KEYSTONE: {
  //   connector: async () => {
  //     const KeystoneConnector = (await import('@keystonehq/keystone-connector'))
  //       .KeystoneConnector;
  //     return new KeystoneConnector({
  //       chainId: 1,
  //       url: RPC[ChainId.MAINNET],
  //     });
  //   },
  //   name: 'Keystone',
  //   iconName: 'keystone.png',
  //   description: 'Connect to Keystone hardware wallet.',
  //   href: null,
  //   color: '#4196FC',
  //   mobile: true,
  // },
  // LATTICE: {
  //   connector: async () => {
  //     const LatticeConnector = (await import('@web3-react/lattice-connector'))
  //       .LatticeConnector;
  //     return new LatticeConnector({
  //       chainId: 1,
  //       url: RPC[ChainId.MAINNET],
  //       appName: 'Alphadex',
  //     });
  //   },
  //   name: 'Lattice',
  //   iconName: 'lattice.png',
  //   description: 'Connect to GridPlus Wallet.',
  //   href: null,
  //   color: '#40a9ff',
  //   mobile: true,
  // },
  // WALLET_LINK: {
  //   connector: async () => {
  //     const WalletLinkConnector = (
  //       await import('@web3-react/walletlink-connector')
  //     ).WalletLinkConnector;
  //     return new WalletLinkConnector({
  //       url: RPC[1],
  //       appName: 'Alphadex',
  //       appLogoUrl:
  //         'https://raw.githubusercontent.com/sushiswap/art/master/sushi/logo-256x256.png',
  //     });
  //   },
  //   name: 'Coinbase Wallet',
  //   iconName: 'coinbase.svg',
  //   description: 'Use Coinbase Wallet app on mobile device',
  //   href: null,
  //   color: '#315CF5',
  // },
  // COINBASE_LINK: {
  //   name: 'Open in Coinbase Wallet',
  //   iconName: 'coinbase.svg',
  //   description: 'Open in Coinbase Wallet app.',
  //   href: 'https://go.cb-w.com',
  //   color: '#315CF5',
  //   mobile: true,
  //   mobileOnly: true,
  // },
  // FORTMATIC: {
  //   connector: async () => {
  //     const FortmaticConnector = (
  //       await import('@web3-react/fortmatic-connector')
  //     ).FortmaticConnector;
  //     return new FortmaticConnector({
  //       apiKey: process.env.NEXT_PUBLIC_FORTMATIC_API_KEY ?? '',
  //       chainId: 1,
  //     });
  //   },
  //   name: 'Fortmatic',
  //   iconName: 'fortmatic.png',
  //   description: 'Login using Fortmatic hosted wallet',
  //   href: null,
  //   color: '#6748FF',
  //   mobile: true,
  // },
  // Portis: {
  //   connector: async () => {
  //     const PortisConnector = (await import('@web3-react/portis-connector'))
  //       .PortisConnector;
  //     return new PortisConnector({
  //       dAppId: process.env.NEXT_PUBLIC_PORTIS_ID ?? '',
  //       networks: [1],
  //     });
  //   },
  //   name: 'Portis',
  //   iconName: 'portis.png',
  //   description: 'Login using Portis hosted wallet',
  //   href: null,
  //   color: '#4A6C9B',
  //   mobile: true,
  // },
  // Torus: {
  //   connector: async () => {
  //     const TorusConnector = (await import('@web3-react/torus-connector'))
  //       .TorusConnector;
  //     return new TorusConnector({
  //       chainId: 1,
  //     });
  //   },
  //   name: 'Torus',
  //   iconName: 'torus.png',
  //   description: 'Login using Torus hosted wallet',
  //   href: null,
  //   color: '#315CF5',
  //   mobile: true,
  // },
  // Binance: {
  //   connector: async () => {
  //     const BscConnector = (await import('@binance-chain/bsc-connector')).BscConnector
  //     return new BscConnector({
  //       supportedChainIds: [56],
  //     })
  //   },
  //   name: 'Binance',
  //   iconName: 'bsc.jpg',
  //   description: 'Login using Binance hosted wallet',
  //   href: null,
  //   color: '#F0B90B',
  //   mobile: true,
  // },

};
;// CONCATENATED MODULE: external "react-device-detect"
const external_react_device_detect_namespaceObject = require("react-device-detect");
;// CONCATENATED MODULE: ./src/hooks/useEagerConnect.ts





function useEagerConnect() {
  const {
    activate,
    active
  } = (0,core_.useWeb3React)(); // specifically using useWeb3ReactCore because of what this hook does

  const {
    0: tried,
    1: setTried
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    wallets_injected.isAuthorized().then(isAuthorized => {
      if (isAuthorized) {
        activate(wallets_injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        if (external_react_device_detect_namespaceObject.isMobile && window.ethereum) {
          activate(wallets_injected, undefined, true).catch(() => {
            setTried(true);
          });
        } else {
          setTried(true);
        }
      }
    });
  }, [activate]); // intentionally only running on mount (make sure it's only mounted once :))
  // if the connection worked, wait until we get confirmation of that to flip the flag

  (0,external_react_.useEffect)(() => {
    if (active) {
      setTried(true);
    }
  }, [active]);
  return tried;
}

/* harmony default export */ const hooks_useEagerConnect = (useEagerConnect);
;// CONCATENATED MODULE: ./src/hooks/useInactiveListener.ts



/**
 * Use for network and injected - logs user in
 * and out after checking what network theyre on
 */

function useInactiveListener(suppress = false) {
  const {
    active,
    error,
    activate
  } = (0,core_.useWeb3React)(); // specifically using useWeb3React because of what this hook does

  (0,external_react_.useEffect)(() => {
    const {
      ethereum
    } = window;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleChainChanged = () => {
        // eat errors
        activate(wallets_injected, undefined, true).catch(error => {
          console.error('Failed to activate after chain changed', error);
        });
      };

      const handleAccountsChanged = accounts => {
        if (accounts.length > 0) {
          // eat errors
          activate(wallets_injected, undefined, true).catch(error => {
            console.error('Failed to activate after accounts changed', error);
          });
        }
      };

      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);
      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
        }
      };
    }

    return undefined;
  }, [active, error, suppress, activate]);
}

/* harmony default export */ const hooks_useInactiveListener = (useInactiveListener);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/Web3ReactManager/index.tsx











const GnosisManagerNoSSR = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 640).then(__webpack_require__.bind(__webpack_require__, 4640)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4640)],
    modules: ["../components/Web3ReactManager/index.tsx -> " + './GnosisManager']
  }
});
function Web3ReactManager({
  children
}) {
  const {
    active
  } = (0,core_.useWeb3React)();
  const {
    active: networkActive,
    error: networkError,
    activate: activateNetwork
  } = (0,core_.useWeb3React)(constants/* NetworkContextName */.A); // try to eagerly connect to an injected provider, if it exists and has granted access already

  const triedEager = hooks_useEagerConnect(); // after eagerly trying injected, if the network connect ever isn't active or in an error state, activate itd

  (0,external_react_.useEffect)(() => {
    if (triedEager && !networkActive && !networkError && !active) {
      activateNetwork(network);
    }
  }, [triedEager, networkActive, networkError, activateNetwork, active]); // when there's no account connected, react to logins (broadly speaking) on the injected provider, if it exists

  hooks_useInactiveListener(!triedEager); // handle delayed loader state

  const {
    0: showLoader,
    1: setShowLoader
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const timeout = setTimeout(() => {
      setShowLoader(true);
    }, 600);
    return () => {
      clearTimeout(timeout);
    };
  }, []); // on page load, do nothing until we've tried to connect to the injected connector

  if (!triedEager) {
    return null;
  } // if the account context isn't active, and there's an error on the network context, it's an irrecoverable error


  if (!active && networkError) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex items-center justify-center h-80",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-secondary",
        children: `Oops! An unknown error occurred. Please refresh the page, or visit from another browser or device`
      })
    });
  } // if neither context is active, spin


  if (!active && !networkActive) {
    return showLoader ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex items-center justify-center h-80",
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Loader/* default */.Z, {})
    }) : null;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(GnosisManagerNoSSR, {}), children]
  });
}
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "@ethersproject/providers"
const providers_namespaceObject = require("@ethersproject/providers");
;// CONCATENATED MODULE: ./src/functions/getLibrary.ts

function getLibrary(provider) {
  const library = new providers_namespaceObject.Web3Provider(provider, typeof provider.chainId === 'number' ? provider.chainId : typeof provider.chainId === 'string' ? parseInt(provider.chainId) : 'any');
  library.pollingInterval = 15000; // library.detectNetwork().then((network) => {
  //   const networkPollingInterval = NETWORK_POLLING_INTERVALS[network.chainId]
  //   if (networkPollingInterval) {
  //     console.debug('Setting polling interval', networkPollingInterval)
  //     library.pollingInterval = networkPollingInterval
  //   }
  // })

  return library;
}
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
// EXTERNAL MODULE: ./src/state/application/actions.ts
var actions = __webpack_require__(434);
;// CONCATENATED MODULE: ./src/state/application/reducer.ts


const initialState = {
  blockNumber: {},
  popupList: [],
  openModal: null,
  kashiApprovalPending: ''
};
/* harmony default export */ const reducer = ((0,toolkit_.createReducer)(initialState, builder => builder.addCase(actions/* updateBlockNumber */.fG, (state, action) => {
  const {
    chainId,
    blockNumber
  } = action.payload;

  if (typeof state.blockNumber[chainId] !== 'number') {
    state.blockNumber[chainId] = blockNumber;
  } else {
    state.blockNumber[chainId] = Math.max(blockNumber, state.blockNumber[chainId]);
  }
}).addCase(actions/* setOpenModal */.i3, (state, action) => {
  state.openModal = action.payload;
}).addCase(actions/* addPopup */.i8, (state, {
  payload: {
    content,
    key,
    removeAfterMs = 15000
  }
}) => {
  state.popupList = (key ? state.popupList.filter(popup => popup.key !== key) : state.popupList).concat([{
    key: key || (0,toolkit_.nanoid)(),
    show: true,
    content,
    removeAfterMs
  }]);
}).addCase(actions/* removePopup */.hC, (state, {
  payload: {
    key
  }
}) => {
  state.popupList.forEach(p => {
    if (p.key === key) {
      p.show = false;
    }
  });
}).addCase(actions/* setKashiApprovalPending */.ZD, (state, action) => {
  state.kashiApprovalPending = action.payload;
})));
// EXTERNAL MODULE: ./src/state/multicall/actions.ts
var multicall_actions = __webpack_require__(8995);
// EXTERNAL MODULE: ./src/state/multicall/utils.ts
var utils = __webpack_require__(7601);
;// CONCATENATED MODULE: ./src/state/multicall/reducer.ts



const reducer_initialState = {
  callResults: {}
};
/* harmony default export */ const multicall_reducer = ((0,toolkit_.createReducer)(reducer_initialState, builder => builder.addCase(multicall_actions/* addMulticallListeners */.Dd, (state, {
  payload: {
    calls,
    chainId,
    options: {
      blocksPerFetch
    }
  }
}) => {
  var _listeners$chainId;

  const listeners = state.callListeners ? state.callListeners : state.callListeners = {};
  listeners[chainId] = (_listeners$chainId = listeners[chainId]) !== null && _listeners$chainId !== void 0 ? _listeners$chainId : {};
  calls.forEach(call => {
    var _listeners$chainId$ca, _listeners$chainId$ca2;

    const callKey = (0,utils/* toCallKey */.k)(call);
    listeners[chainId][callKey] = (_listeners$chainId$ca = listeners[chainId][callKey]) !== null && _listeners$chainId$ca !== void 0 ? _listeners$chainId$ca : {};
    listeners[chainId][callKey][blocksPerFetch] = ((_listeners$chainId$ca2 = listeners[chainId][callKey][blocksPerFetch]) !== null && _listeners$chainId$ca2 !== void 0 ? _listeners$chainId$ca2 : 0) + 1;
  });
}).addCase(multicall_actions/* removeMulticallListeners */.$x, (state, {
  payload: {
    chainId,
    calls,
    options: {
      blocksPerFetch
    }
  }
}) => {
  const listeners = state.callListeners ? state.callListeners : state.callListeners = {};
  if (!listeners[chainId]) return;
  calls.forEach(call => {
    const callKey = (0,utils/* toCallKey */.k)(call);
    if (!listeners[chainId][callKey]) return;
    if (!listeners[chainId][callKey][blocksPerFetch]) return;

    if (listeners[chainId][callKey][blocksPerFetch] === 1) {
      delete listeners[chainId][callKey][blocksPerFetch];
    } else {
      listeners[chainId][callKey][blocksPerFetch]--;
    }
  });
}).addCase(multicall_actions/* fetchingMulticallResults */.nu, (state, {
  payload: {
    chainId,
    fetchingBlockNumber,
    calls
  }
}) => {
  var _state$callResults$ch;

  state.callResults[chainId] = (_state$callResults$ch = state.callResults[chainId]) !== null && _state$callResults$ch !== void 0 ? _state$callResults$ch : {};
  calls.forEach(call => {
    const callKey = (0,utils/* toCallKey */.k)(call);
    const current = state.callResults[chainId][callKey];

    if (!current) {
      state.callResults[chainId][callKey] = {
        fetchingBlockNumber
      };
    } else {
      var _current$fetchingBloc;

      if (((_current$fetchingBloc = current.fetchingBlockNumber) !== null && _current$fetchingBloc !== void 0 ? _current$fetchingBloc : 0) >= fetchingBlockNumber) return;
      state.callResults[chainId][callKey].fetchingBlockNumber = fetchingBlockNumber;
    }
  });
}).addCase(multicall_actions/* errorFetchingMulticallResults */.wC, (state, {
  payload: {
    fetchingBlockNumber,
    chainId,
    calls
  }
}) => {
  var _state$callResults$ch2;

  state.callResults[chainId] = (_state$callResults$ch2 = state.callResults[chainId]) !== null && _state$callResults$ch2 !== void 0 ? _state$callResults$ch2 : {};
  calls.forEach(call => {
    const callKey = (0,utils/* toCallKey */.k)(call);
    const current = state.callResults[chainId][callKey];
    if (!current) return; // only should be dispatched if we are already fetching

    if (current.fetchingBlockNumber === fetchingBlockNumber) {
      delete current.fetchingBlockNumber;
      current.data = null;
      current.blockNumber = fetchingBlockNumber;
    }
  });
}).addCase(multicall_actions/* updateMulticallResults */.zT, (state, {
  payload: {
    chainId,
    results,
    blockNumber
  }
}) => {
  var _state$callResults$ch3;

  state.callResults[chainId] = (_state$callResults$ch3 = state.callResults[chainId]) !== null && _state$callResults$ch3 !== void 0 ? _state$callResults$ch3 : {};
  Object.keys(results).forEach(callKey => {
    var _current$blockNumber;

    const current = state.callResults[chainId][callKey];
    if (((_current$blockNumber = current === null || current === void 0 ? void 0 : current.blockNumber) !== null && _current$blockNumber !== void 0 ? _current$blockNumber : 0) > blockNumber) return;
    state.callResults[chainId][callKey] = {
      data: results[callKey],
      blockNumber
    };
  });
})));
// EXTERNAL MODULE: ./src/state/transactions/actions.ts
var transactions_actions = __webpack_require__(7219);
;// CONCATENATED MODULE: ./src/state/transactions/reducer.ts



const now = () => new Date().getTime();

const transactions_reducer_initialState = {};
/* harmony default export */ const transactions_reducer = ((0,toolkit_.createReducer)(transactions_reducer_initialState, builder => builder.addCase(transactions_actions/* addTransaction */.dT, (transactions, {
  payload: {
    chainId,
    from,
    hash,
    approval,
    summary,
    claim,
    archer
  }
}) => {
  var _transactions$chainId, _transactions$chainId2;

  if ((_transactions$chainId = transactions[chainId]) !== null && _transactions$chainId !== void 0 && _transactions$chainId[hash]) {
    throw Error('Attempted to add existing transaction.');
  }

  const txs = (_transactions$chainId2 = transactions[chainId]) !== null && _transactions$chainId2 !== void 0 ? _transactions$chainId2 : {};
  txs[hash] = {
    hash,
    approval,
    summary,
    claim,
    from,
    addedTime: now(),
    archer
  };
  transactions[chainId] = txs;
}).addCase(transactions_actions/* clearAllTransactions */.fY, (transactions, {
  payload: {
    chainId
  }
}) => {
  if (!transactions[chainId]) return;
  transactions[chainId] = {};
}).addCase(transactions_actions/* checkedTransaction */.LN, (transactions, {
  payload: {
    chainId,
    hash,
    blockNumber
  }
}) => {
  var _transactions$chainId3;

  const tx = (_transactions$chainId3 = transactions[chainId]) === null || _transactions$chainId3 === void 0 ? void 0 : _transactions$chainId3[hash];

  if (!tx) {
    return;
  }

  if (!tx.lastCheckedBlockNumber) {
    tx.lastCheckedBlockNumber = blockNumber;
  } else {
    tx.lastCheckedBlockNumber = Math.max(blockNumber, tx.lastCheckedBlockNumber);
  }
}).addCase(transactions_actions/* finalizeTransaction */.Aw, (transactions, {
  payload: {
    hash,
    chainId,
    receipt
  }
}) => {
  var _transactions$chainId4;

  const tx = (_transactions$chainId4 = transactions[chainId]) === null || _transactions$chainId4 === void 0 ? void 0 : _transactions$chainId4[hash];

  if (!tx) {
    return;
  }

  tx.receipt = receipt;
  tx.confirmedTime = now();
})));
;// CONCATENATED MODULE: ./src/state/reducer.ts




const reducer_reducer = (0,toolkit_.combineReducers)({
  application: reducer,
  transactions: transactions_reducer,
  multicall: multicall_reducer
});
/* harmony default export */ const state_reducer = (reducer_reducer);
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: ./src/state/index.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let store;
const PERSISTED_KEYS = ['user', 'transactions', 'lists'];
const persistConfig = {
  key: 'root',
  whitelist: PERSISTED_KEYS,
  storage: (storage_default()) // stateReconciler: false,

};
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, state_reducer);

function makeStore(preloadedState = undefined) {
  return (0,toolkit_.configureStore)({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: true,
      immutableCheck: true,
      serializableCheck: {
        ignoredActions: [external_redux_persist_namespaceObject.FLUSH, external_redux_persist_namespaceObject.REHYDRATE, external_redux_persist_namespaceObject.PAUSE, external_redux_persist_namespaceObject.PERSIST, external_redux_persist_namespaceObject.PURGE, external_redux_persist_namespaceObject.REGISTER]
      }
    }),
    devTools: false,
    preloadedState
  });
}

const getOrCreateStore = (preloadedState = undefined) => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : makeStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store) {
    _store = makeStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
store = getOrCreateStore(); // export function useStore(preloadedState) {
//   const store = useMemo(() => getOrCreateStore(preloadedState), [preloadedState])
//   return store
// }

/* harmony default export */ const state = (store);
const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);
// EXTERNAL MODULE: ./src/hooks/useActiveWeb3React.ts
var hooks_useActiveWeb3React = __webpack_require__(8269);
;// CONCATENATED MODULE: ./src/hooks/useDebounce.ts
 // modified from https://usehooks.com/useDebounce/

function useDebounce(value, delay) {
  const {
    0: debouncedValue,
    1: setDebouncedValue
  } = (0,external_react_.useState)(value);
  (0,external_react_.useEffect)(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay); // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
;// CONCATENATED MODULE: ./src/hooks/useIsWindowVisible.ts

const VISIBILITY_STATE_SUPPORTED = typeof document !== 'undefined' && 'visibilityState' in document;

function isWindowVisible() {
  return !VISIBILITY_STATE_SUPPORTED || document.visibilityState !== 'hidden';
}
/**
 * Returns whether the window is currently visible to the user.
 */


function useIsWindowVisible() {
  const {
    0: focused,
    1: setFocused
  } = (0,external_react_.useState)(isWindowVisible());
  const listener = (0,external_react_.useCallback)(() => {
    setFocused(isWindowVisible());
  }, [setFocused]);
  (0,external_react_.useEffect)(() => {
    if (!VISIBILITY_STATE_SUPPORTED) return undefined;
    document.addEventListener('visibilitychange', listener);
    return () => {
      document.removeEventListener('visibilitychange', listener);
    };
  }, [listener]);
  return focused;
}
;// CONCATENATED MODULE: ./src/state/application/updater.ts






function Updater() {
  const {
    library,
    chainId
  } = (0,hooks_useActiveWeb3React/* useActiveWeb3React */.a)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const windowVisible = useIsWindowVisible();
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)({
    chainId,
    blockNumber: null
  });
  const blockNumberCallback = (0,external_react_.useCallback)(blockNumber => {
    setState(state => {
      if (chainId === state.chainId) {
        if (typeof state.blockNumber !== 'number') return {
          chainId,
          blockNumber
        };
        return {
          chainId,
          blockNumber: Math.max(blockNumber, state.blockNumber)
        };
      }

      return state;
    });
  }, [chainId, setState]); // attach/detach listeners

  (0,external_react_.useEffect)(() => {
    if (!library || !chainId || !windowVisible) return undefined;
    setState({
      chainId,
      blockNumber: null
    });
    library.getBlockNumber().then(blockNumberCallback).catch(error => console.error(`Failed to get block number for chainId: ${chainId}`, error));
    library.on('block', blockNumberCallback);
    return () => {
      library.removeListener('block', blockNumberCallback);
    };
  }, [dispatch, chainId, library, blockNumberCallback, windowVisible]);
  const debouncedState = useDebounce(state, 100);
  (0,external_react_.useEffect)(() => {
    if (!debouncedState.chainId || !debouncedState.blockNumber || !windowVisible) return;
    dispatch((0,actions/* updateBlockNumber */.fG)({
      chainId: debouncedState.chainId,
      blockNumber: debouncedState.blockNumber
    }));
  }, [windowVisible, dispatch, debouncedState.blockNumber, debouncedState.chainId]);
  return null;
}
;// CONCATENATED MODULE: ./src/functions/retry.ts
function retry_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function waitRandom(min, max) {
  return wait(min + Math.round(Math.random() * Math.max(0, max - min)));
}
/**
 * This error is thrown if the function is cancelled before completing
 */


class CancelledError extends Error {
  constructor() {
    super('Cancelled');

    retry_defineProperty(this, "isCancelledError", true);
  }

}
/**
 * Throw this error if the function should retry
 */

class RetryableError extends Error {
  constructor(...args) {
    super(...args);

    retry_defineProperty(this, "isRetryableError", true);
  }

}

/**
 * Retries the function that returns the promise until the promise successfully resolves up to n retries
 * @param fn function to retry
 * @param n how many times to retry
 * @param minWait min wait between retries in ms
 * @param maxWait max wait between retries in ms
 */
function retry(fn, {
  n,
  minWait,
  maxWait
}) {
  let completed = false;
  let rejectCancelled;
  const promise = new Promise(async (resolve, reject) => {
    rejectCancelled = reject;

    while (true) {
      let result;

      try {
        result = await fn();

        if (!completed) {
          resolve(result);
          completed = true;
        }

        break;
      } catch (error) {
        if (completed) {
          break;
        }

        if (n <= 0 || !error.isRetryableError) {
          reject(error);
          completed = true;
          break;
        }

        n--;
      }

      await waitRandom(minWait, maxWait);
    }
  });
  return {
    promise,
    cancel: () => {
      if (completed) return;
      completed = true;
      rejectCancelled(new CancelledError());
    }
  };
}
// EXTERNAL MODULE: ./src/state/application/hooks.ts
var hooks = __webpack_require__(4663);
// EXTERNAL MODULE: ./src/state/hooks.ts
var state_hooks = __webpack_require__(9268);
;// CONCATENATED MODULE: ./src/state/transactions/updater.tsx







function shouldCheck(lastBlockNumber, tx) {
  if (tx.receipt) return false;
  if (!tx.lastCheckedBlockNumber) return true;
  const blocksSinceCheck = lastBlockNumber - tx.lastCheckedBlockNumber;
  if (blocksSinceCheck < 1) return false;
  const minutesPending = (new Date().getTime() - tx.addedTime) / 1000 / 60;

  if (minutesPending > 60) {
    // every 10 blocks if pending for longer than an hour
    return blocksSinceCheck > 9;
  } else if (minutesPending > 5) {
    // every 3 blocks if pending more than 5 minutes
    return blocksSinceCheck > 2;
  } else {
    // otherwise every block
    return true;
  }
}
const DEFAULT_RETRY_OPTIONS = {
  n: 3,
  minWait: 1000,
  maxWait: 3000
};
function updater_Updater() {
  const {
    chainId,
    library
  } = (0,hooks_useActiveWeb3React/* useActiveWeb3React */.a)();
  const lastBlockNumber = (0,hooks/* useBlockNumber */.Ov)();
  const dispatch = (0,state_hooks/* useAppDispatch */.T)();
  const state = (0,state_hooks/* useAppSelector */.C)(state => state.transactions);
  const transactions = (0,external_react_.useMemo)(() => {
    var _state$chainId;

    return chainId ? (_state$chainId = state[chainId]) !== null && _state$chainId !== void 0 ? _state$chainId : {} : {};
  }, [chainId, state]); // show popup on confirm

  const addPopup = (0,hooks/* useAddPopup */.i$)();
  const getReceipt = (0,external_react_.useCallback)(hash => {
    if (!library || !chainId) throw new Error('No library or chainId');
    const retryOptions = DEFAULT_RETRY_OPTIONS;
    return retry(() => library.getTransactionReceipt(hash).then(receipt => {
      if (receipt === null) {
        console.debug('Retrying for hash', hash);
        throw new RetryableError();
      }

      return receipt;
    }), retryOptions);
  }, [chainId, library]);
  (0,external_react_.useEffect)(() => {
    if (!chainId || !library || !lastBlockNumber) return;
    const cancels = Object.keys(transactions).filter(hash => shouldCheck(lastBlockNumber, transactions[hash])).map(hash => {
      const {
        promise,
        cancel
      } = getReceipt(hash);
      promise.then(receipt => {
        if (receipt) {
          var _transactions$hash;

          dispatch((0,transactions_actions/* finalizeTransaction */.Aw)({
            chainId,
            hash,
            receipt: {
              blockHash: receipt.blockHash,
              blockNumber: receipt.blockNumber,
              contractAddress: receipt.contractAddress,
              from: receipt.from,
              status: receipt.status,
              to: receipt.to,
              transactionHash: receipt.transactionHash,
              transactionIndex: receipt.transactionIndex
            }
          }));
          addPopup({
            txn: {
              hash,
              success: receipt.status === 1,
              summary: (_transactions$hash = transactions[hash]) === null || _transactions$hash === void 0 ? void 0 : _transactions$hash.summary
            }
          }, hash); // the receipt was fetched before the block, fast forward to that block to trigger balance updates

          if (receipt.blockNumber > lastBlockNumber) {
            dispatch((0,actions/* updateBlockNumber */.fG)({
              chainId,
              blockNumber: receipt.blockNumber
            }));
          }
        } else {
          dispatch((0,transactions_actions/* checkedTransaction */.LN)({
            chainId,
            hash,
            blockNumber: lastBlockNumber
          }));
        }
      }).catch(error => {
        if (!error.isCancelledError) {
          console.error(`Failed to check transaction hash: ${hash}`, error);
        }
      });
      return cancel;
    });
    return () => {
      cancels.forEach(cancel => cancel());
    };
  }, [chainId, library, transactions, lastBlockNumber, dispatch, addPopup, getReceipt]);
  return null;
}
;// CONCATENATED MODULE: ./src/functions/array/chunkArray.ts
const CONSERVATIVE_BLOCK_GAS_LIMIT = 10000000; // conservative, hard-coded estimate of the current block gas limit

const DEFAULT_GAS_REQUIRED = 200000; // the default value for calls that don't specify gasRequired
// chunks array into chunks
// evenly distributes items among the chunks

function chunkArray(items, gasLimit = CONSERVATIVE_BLOCK_GAS_LIMIT * 10) {
  const chunks = [];
  let currentChunk = [];
  let currentChunkCumulativeGas = 0;

  for (let i = 0; i < items.length; i++) {
    var _gasRequired;

    const item = items[i]; // calculate the gas required by the current item

    const gasRequired = (_gasRequired = item === null || item === void 0 ? void 0 : item.gasRequired) !== null && _gasRequired !== void 0 ? _gasRequired : DEFAULT_GAS_REQUIRED; // if the current chunk is empty, or the current item wouldn't push it over the gas limit,
    // append the current item and increment the cumulative gas

    if (currentChunk.length === 0 || currentChunkCumulativeGas + gasRequired < gasLimit) {
      currentChunk.push(item);
      currentChunkCumulativeGas += gasRequired;
    } else {
      // otherwise, push the current chunk and create a new chunk
      chunks.push(currentChunk);
      currentChunk = [item];
      currentChunkCumulativeGas = gasRequired;
    }
  }

  if (currentChunk.length > 0) chunks.push(currentChunk);
  return chunks;
}
// EXTERNAL MODULE: ./src/hooks/useContract.ts + 5 modules
var useContract = __webpack_require__(8246);
;// CONCATENATED MODULE: ./src/state/multicall/updater.tsx










const updater_DEFAULT_GAS_REQUIRED = 1000000;
/**
 * Fetches a chunk of calls, enforcing a minimum block number constraint
 * @param multicall multicall contract to fetch against
 * @param chunk chunk of calls to make
 * @param minBlockNumber minimum block number of the result set
 */

async function fetchChunk(multicall, chunk, blockNumber) {
  console.debug('Fetching chunk', chunk, blockNumber);

  try {
    const {
      returnData
    } = await multicall.callStatic.tryBlockAndAggregate(false, chunk.map(obj => {
      var _obj$gasRequired;

      return {
        target: obj.address,
        callData: obj.callData,
        gasLimit: (_obj$gasRequired = obj.gasRequired) !== null && _obj$gasRequired !== void 0 ? _obj$gasRequired : 1000000
      };
    }), {
      blockTag: blockNumber
    });

    if (false) {}

    return returnData;
  } catch (error) {
    var _error$message;

    if (error.code === -32000 || ((_error$message = error.message) === null || _error$message === void 0 ? void 0 : _error$message.indexOf('header not found')) !== -1) {
      throw new RetryableError(`header not found for block number ${blockNumber}`);
    }

    console.error('Failed to fetch chunk', error);
    throw error;
  }
}
/**
 * From the current all listeners state, return each call key mapped to the
 * minimum number of blocks per fetch. This is how often each key must be fetched.
 * @param allListeners the all listeners state
 * @param chainId the current chain id
 */


function activeListeningKeys(allListeners, chainId) {
  if (!allListeners || !chainId) return {};
  const listeners = allListeners[chainId];
  if (!listeners) return {};
  return Object.keys(listeners).reduce((memo, callKey) => {
    const keyListeners = listeners[callKey];
    memo[callKey] = Object.keys(keyListeners).filter(key => {
      const blocksPerFetch = parseInt(key);
      if (blocksPerFetch <= 0) return false;
      return keyListeners[blocksPerFetch] > 0;
    }).reduce((previousMin, current) => {
      return Math.min(previousMin, parseInt(current));
    }, Infinity);
    return memo;
  }, {});
}
/**
 * Return the keys that need to be refetched
 * @param callResults current call result state
 * @param listeningKeys each call key mapped to how old the data can be in blocks
 * @param chainId the current chain id
 * @param latestBlockNumber the latest block number
 */

function outdatedListeningKeys(callResults, listeningKeys, chainId, latestBlockNumber) {
  if (!chainId || !latestBlockNumber) return [];
  const results = callResults[chainId]; // no results at all, load everything

  if (!results) return Object.keys(listeningKeys);
  return Object.keys(listeningKeys).filter(callKey => {
    const blocksPerFetch = listeningKeys[callKey];
    const data = callResults[chainId][callKey]; // no data, must fetch

    if (!data) return true;
    const minDataBlockNumber = latestBlockNumber - (blocksPerFetch - 1); // already fetching it for a recent enough block, don't refetch it

    if (data.fetchingBlockNumber && data.fetchingBlockNumber >= minDataBlockNumber) return false; // if data is older than minDataBlockNumber, fetch it

    return !data.blockNumber || data.blockNumber < minDataBlockNumber;
  });
}
function multicall_updater_Updater() {
  const dispatch = (0,state_hooks/* useAppDispatch */.T)();
  const state = (0,state_hooks/* useAppSelector */.C)(state => state.multicall); // wait for listeners to settle before triggering updates

  const debouncedListeners = useDebounce(state.callListeners, 100);
  const latestBlockNumber = (0,hooks/* useBlockNumber */.Ov)();
  const {
    chainId
  } = (0,hooks_useActiveWeb3React/* useActiveWeb3React */.a)();
  const multicall2Contract = (0,useContract/* useMulticall2Contract */.JD)();
  const cancellations = (0,external_react_.useRef)();
  const listeningKeys = (0,external_react_.useMemo)(() => {
    return activeListeningKeys(debouncedListeners, chainId);
  }, [debouncedListeners, chainId]);
  const unserializedOutdatedCallKeys = (0,external_react_.useMemo)(() => {
    return outdatedListeningKeys(state.callResults, listeningKeys, chainId, latestBlockNumber);
  }, [chainId, state.callResults, listeningKeys, latestBlockNumber]);
  const serializedOutdatedCallKeys = (0,external_react_.useMemo)(() => JSON.stringify(unserializedOutdatedCallKeys.sort()), [unserializedOutdatedCallKeys]);
  (0,external_react_.useEffect)(() => {
    if (!latestBlockNumber || !chainId || !multicall2Contract) return;
    const outdatedCallKeys = JSON.parse(serializedOutdatedCallKeys);
    if (outdatedCallKeys.length === 0) return;
    const calls = outdatedCallKeys.map(key => (0,utils/* parseCallKey */.g)(key));
    const chunkedCalls = chunkArray(calls);

    if (cancellations.current && cancellations.current.blockNumber !== latestBlockNumber) {
      cancellations.current.cancellations.forEach(c => c());
    }

    dispatch((0,multicall_actions/* fetchingMulticallResults */.nu)({
      calls,
      chainId,
      fetchingBlockNumber: latestBlockNumber
    }));
    cancellations.current = {
      blockNumber: latestBlockNumber,
      cancellations: chunkedCalls.map((chunk, index) => {
        const {
          cancel,
          promise
        } = retry(() => fetchChunk(multicall2Contract, chunk, latestBlockNumber), {
          n: Infinity,
          minWait: 1000,
          maxWait: 2500
        });
        promise.then(returnData => {
          // accumulates the length of all previous indices
          const firstCallKeyIndex = chunkedCalls.slice(0, index).reduce((memo, curr) => memo + curr.length, 0);
          const lastCallKeyIndex = firstCallKeyIndex + returnData.length;
          const slice = outdatedCallKeys.slice(firstCallKeyIndex, lastCallKeyIndex); // split the returned slice into errors and success

          const {
            erroredCalls,
            results
          } = slice.reduce((memo, callKey, i) => {
            if (returnData[i].success) {
              var _returnData$i$returnD;

              memo.results[callKey] = (_returnData$i$returnD = returnData[i].returnData) !== null && _returnData$i$returnD !== void 0 ? _returnData$i$returnD : null;
            } else {
              memo.erroredCalls.push((0,utils/* parseCallKey */.g)(callKey));
            }

            return memo;
          }, {
            erroredCalls: [],
            results: {}
          }); // dispatch any new results

          if (Object.keys(results).length > 0) dispatch((0,multicall_actions/* updateMulticallResults */.zT)({
            chainId,
            results,
            blockNumber: latestBlockNumber
          })); // dispatch any errored calls

          if (erroredCalls.length > 0) {
            console.debug('Calls errored in fetch', erroredCalls);
            dispatch((0,multicall_actions/* errorFetchingMulticallResults */.wC)({
              calls: erroredCalls,
              chainId,
              fetchingBlockNumber: latestBlockNumber
            }));
          }
        }).catch(error => {
          if (error.isCancelledError) {
            console.debug('Cancelled fetch for blockNumber', latestBlockNumber, chunk, chainId);
            return;
          }

          console.error('Failed to fetch multicall chunk', chunk, chainId, error);
          dispatch((0,multicall_actions/* errorFetchingMulticallResults */.wC)({
            calls: chunk,
            chainId,
            fetchingBlockNumber: latestBlockNumber
          }));
        });
        return cancel;
      })
    };
  }, [chainId, multicall2Contract, dispatch, serializedOutdatedCallKeys, latestBlockNumber]);
  return null;
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/state/transactions/hooks.tsx
var transactions_hooks = __webpack_require__(9123);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/functions/index.ts + 2 modules
var functions = __webpack_require__(1212);
;// CONCATENATED MODULE: ./src/components/Button/index.tsx
const _excluded = ["children", "className", "color", "size", "variant"],
      _excluded2 = (/* unused pure expression or super */ null && (["confirmed", "disabled"])),
      _excluded3 = (/* unused pure expression or super */ null && (["error", "disabled"]));

function Button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Button_ownKeys(Object(source), true).forEach(function (key) { Button_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Button_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const SIZE = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-4 py-2 text-base',
  default: 'px-4 py-3 text-base',
  lg: 'px-6 py-4 text-base',
  none: 'p-0 text-base'
};
const FILLED = {
  default: 'bg-transparent opacity-80 hover:opacity-100',
  red: 'bg-red bg-opacity-80 w-full rounded text-high-emphesis hover:bg-opacity-100 disabled:bg-opacity-80',
  blue: 'bg-blue bg-opacity-80 w-full rounded text-high-emphesis hover:bg-opacity-100 disabled:bg-opacity-80',
  pink: 'bg-gradient-to-r from-pink to-opaque-pink w-full rounded text-high-emphesis opacity-80 hover:opacity-100 disabled:bg-opacity-80',
  gray: 'border rounded shadow-sm focus:ring-2 focus:ring-offset-2 bg-dark-700 bg-opacity-80 w-full text-primary border-dark-800 hover:bg-opacity-100 focus:ring-offset-dark-700 focus:ring-dark-800 disabled:bg-opacity-80',
  green: 'bg-green bg-opacity-80 w-full rounded text-high-emphesis hover:bg-opacity-100 disabled:bg-opacity-80',
  gradient: 'w-full text-high-emphesis bg-gradient-to-r from-blue to-pink opacity-80 hover:opacity-100 disabled:bg-opacity-80'
};
const OUTLINED = {
  default: 'bg-transparent opacity-80 hover:opacity-100',
  red: 'bg-red bg-opacity-20 outline-red rounded text-red hover:bg-opacity-40 disabled:bg-opacity-20',
  blue: 'bg-blue bg-opacity-20 outline-blue rounded text-blue hover:bg-opacity-40 disabled:bg-opacity-20',
  pink: 'bg-pink bg-opacity-20 outline-pink rounded text-pink hover:bg-opacity-40 disabled:bg-opacity-20',
  gray: 'bg-dark-700 bg-opacity-20 outline-gray rounded text-gray hover:bg-opacity-40 disabled:bg-opacity-20',
  green: 'bg-green bg-opacity-20 border border-green rounded text-green hover:bg-opacity-40 disabled:bg-opacity-20',
  gradient: 'border border-transparent border-gradient-r-blue-pink-dark-900 opacity-80 hover:opacity-100 disabled:bg-opacity-20'
};
const EMPTY = {
  default: 'flex bg-transparent justify-center items-center disabled:opacity-50 disabled:cursor-auto bg-opacity-80 hover:bg-opacity-100'
};
const LINK = {
  default: 'text-primary hover:text-high-emphesis focus:text-high-emphesis whitespace-nowrap focus:ring-0',
  blue: 'text-blue text-opacity-80 hover:text-opacity-100 focus:text-opacity-100 whitespace-nowrap focus:ring-0'
};
const VARIANT = {
  outlined: OUTLINED,
  filled: FILLED,
  empty: EMPTY,
  link: LINK
};

function Button(_ref) {
  let {
    children,
    className = undefined,
    color = 'default',
    size = 'default',
    variant = 'filled'
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("button", Button_objectSpread(Button_objectSpread({
    className: (0,functions/* classNames */.AK)(VARIANT[variant][color], variant !== 'empty' ? SIZE[size] : '', 'rounded disabled:cursor-not-allowed focus:outline-none', // 'rounded focus:outline-none focus:ring disabled:opacity-50 disabled:cursor-not-allowed font-medium',
    className !== null && className !== void 0 ? className : '')
  }, rest), {}, {
    children: children
  }));
}

/* harmony default export */ const components_Button = (Button);
function ButtonConfirmed(_ref2) {
  let {
    confirmed,
    disabled
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  if (confirmed) {
    return /*#__PURE__*/_jsx(Button, Button_objectSpread({
      variant: "outlined",
      color: "green",
      size: "lg",
      className: classNames(disabled ? 'cursor-not-allowed' : '', 'border opacity-50'),
      disabled: disabled
    }, rest));
  } else {
    return /*#__PURE__*/_jsx(Button, Button_objectSpread({
      color: disabled ? 'gray' : 'gradient',
      size: "lg",
      disabled: disabled
    }, rest));
  }
}
function ButtonError(_ref3) {
  let {
    error,
    disabled
  } = _ref3,
      rest = _objectWithoutProperties(_ref3, _excluded3);

  if (error) {
    return /*#__PURE__*/_jsx(Button, Button_objectSpread({
      color: "red",
      size: "lg"
    }, rest));
  } else {
    return /*#__PURE__*/_jsx(Button, Button_objectSpread({
      color: disabled ? 'gray' : 'gradient',
      disabled: disabled,
      size: "lg"
    }, rest));
  }
}
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(9120);
;// CONCATENATED MODULE: external "copy-to-clipboard"
const external_copy_to_clipboard_namespaceObject = require("copy-to-clipboard");
var external_copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(external_copy_to_clipboard_namespaceObject);
;// CONCATENATED MODULE: ./src/hooks/useCopyClipboard.ts


function useCopyClipboard(timeout = 500) {
  const {
    0: isCopied,
    1: setIsCopied
  } = (0,external_react_.useState)(false);
  const staticCopy = (0,external_react_.useCallback)(text => {
    const didCopy = external_copy_to_clipboard_default()(text);
    setIsCopied(didCopy);
  }, []);
  (0,external_react_.useEffect)(() => {
    if (isCopied) {
      const hide = setTimeout(() => {
        setIsCopied(false);
      }, timeout);
      return () => {
        clearTimeout(hide);
      };
    }

    return undefined;
  }, [isCopied, setIsCopied, timeout]);
  return [isCopied, staticCopy];
}
;// CONCATENATED MODULE: ./src/components/Typography/index.tsx
const Typography_excluded = ["variant", "weight", "component", "className", "clickable", "children", "onClick"];

function Typography_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Typography_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Typography_ownKeys(Object(source), true).forEach(function (key) { Typography_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Typography_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Typography_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Typography_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Typography_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Typography_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const WEIGHTS = {
  400: 'font-medium',
  700: 'font-bold'
};
const VARIANTS = {
  hero: 'text-hero',
  h1: 'text-4xl',
  h2: 'text-3xl',
  h3: 'text-2xl',
  lg: 'text-lg',
  base: 'text-base',
  sm: 'text-sm',
  xs: 'text-xs'
};

function Typography_Typography(_ref) {
  let {
    variant = 'base',
    weight = 400,
    component = 'div',
    className = 'currentColor',
    clickable = false,
    children = [],
    onClick = undefined
  } = _ref,
      rest = Typography_objectWithoutProperties(_ref, Typography_excluded);

  return /*#__PURE__*/external_react_default().createElement(component, Typography_objectSpread({
    className: (0,functions/* classNames */.AK)(VARIANTS[variant], WEIGHTS[weight], onClick ? 'cursor-pointer select-none' : '', className),
    onClick
  }, rest), children);
}

/* harmony default export */ const components_Typography = (Typography_Typography);
;// CONCATENATED MODULE: ./src/components/AccountDetails/Copy.tsx









const CopyHelper = ({
  className,
  toCopy,
  children
}) => {
  const [isCopied, setCopied] = useCopyClipboard();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (0,functions/* classNames */.AK)('d-flex gap-1  align-items-center flex-shrink-0 space-x-1 no-underline cursor-pointer whitespace-nowrap hover:no-underline focus:no-underline active:no-underline text-blue opacity-80 hover:opacity-100 focus:opacity-100', className !== null && className !== void 0 ? className : ''),
    style: {
      cursor: 'pointer'
    },
    onClick: () => setCopied(toCopy),
    children: [isCopied && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: " gap-1 d-flex align-items-center space-x-1 whitespace-nowrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Typography, {
        className: "text-white",
        variant: "sm",
        children: `Copied`
      }), /*#__PURE__*/jsx_runtime_.jsx(esm/* CheckCircleIcon */.rE2, {
        color: "#fff",
        width: 16,
        height: 16
      })]
    }), !isCopied && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [children, /*#__PURE__*/jsx_runtime_.jsx(esm/* ClipboardCopyIcon */.dqY, {
        color: "#fff",
        width: 16,
        height: 16
      })]
    })]
  });
};

/* harmony default export */ const Copy = (CopyHelper);
;// CONCATENATED MODULE: ./src/components/ExternalLink/index.tsx
const ExternalLink_excluded = ["target", "href", "children", "rel", "className", "color", "startIcon", "endIcon"];

function ExternalLink_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function ExternalLink_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ExternalLink_ownKeys(Object(source), true).forEach(function (key) { ExternalLink_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ExternalLink_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ExternalLink_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ExternalLink_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ExternalLink_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ExternalLink_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const COLOR = {
  default: 'text-primary hover:text-high-emphesis focus:text-high-emphesis',
  blue: 'text-blue opacity-80 hover:opacity-100 focus:opacity-100'
};

const ExternalLink_ExternalLink = _ref => {
  let {
    target = '_blank',
    href,
    children,
    rel = 'noopener noreferrer',
    className = '',
    color = 'default',
    startIcon = undefined,
    endIcon = undefined
  } = _ref,
      rest = ExternalLink_objectWithoutProperties(_ref, ExternalLink_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", ExternalLink_objectSpread(ExternalLink_objectSpread({
    target: target,
    rel: rel,
    href: href,
    className: (0,functions/* classNames */.AK)('text-baseline whitespace-nowrap', COLOR[color], startIcon || endIcon ? ' gap-1 text-warning d-flex align-items-center justify-content-center' : '', className)
  }, rest), {}, {
    children: [startIcon && startIcon, children, endIcon && endIcon]
  }));
};

/* harmony default export */ const components_ExternalLink = (ExternalLink_ExternalLink);
;// CONCATENATED MODULE: external "react-feather"
const external_react_feather_namespaceObject = require("react-feather");
;// CONCATENATED MODULE: ./src/components/ModalHeader/index.tsx






const ModalHeader = ({
  title = undefined,
  onClose = undefined,
  className = '',
  onBack = undefined
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `d-flex align-items-center justify-content-between mb-4 ${className}`,
    children: [onBack && /*#__PURE__*/jsx_runtime_.jsx(esm/* ChevronLeftIcon */.wyc, {
      onClick: onBack,
      width: 24,
      height: 24,
      className: "cursor-pointer"
    }), title && /*#__PURE__*/jsx_runtime_.jsx(components_Typography, {
      component: "p",
      variant: "h3",
      className: "text-white font-weight-bold mb-0 ",
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "d-flex align-items-center justify-content-center w-6 h-6 text-white cursor-pointer hover:text-high-emphesis",
      onClick: onClose,
      style: {
        cursor: 'pointer'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(esm/* XIcon */.b0D, {
        width: 24,
        height: 24
      })
    })]
  });
};

/* harmony default export */ const components_ModalHeader = (ModalHeader);
// EXTERNAL MODULE: ./src/functions/explorer.ts
var explorer = __webpack_require__(3302);
;// CONCATENATED MODULE: ./src/components/AccountDetails/Transaction.tsx















const calculateSecondsUntilDeadline = tx => {
  var _tx$archer;

  if (tx !== null && tx !== void 0 && (_tx$archer = tx.archer) !== null && _tx$archer !== void 0 && _tx$archer.deadline && tx !== null && tx !== void 0 && tx.addedTime) {
    const millisecondsUntilUntilDeadline = tx.archer.deadline * 1000 - Date.now();
    return millisecondsUntilUntilDeadline < 0 ? -1 : Math.ceil(millisecondsUntilUntilDeadline / 1000);
  }

  return -1;
};

const Transaction_Transaction = ({
  hash
}) => {
  var _tx$receipt, _tx$receipt2;

  const {
    chainId
  } = useActiveWeb3React();
  const allTransactions = useAllTransactions();
  const dispatch = useDispatch();
  const tx = allTransactions === null || allTransactions === void 0 ? void 0 : allTransactions[hash];
  const summary = tx === null || tx === void 0 ? void 0 : tx.summary;
  const pending = !(tx !== null && tx !== void 0 && tx.receipt);
  const success = !pending && tx && (((_tx$receipt = tx.receipt) === null || _tx$receipt === void 0 ? void 0 : _tx$receipt.status) === 1 || typeof ((_tx$receipt2 = tx.receipt) === null || _tx$receipt2 === void 0 ? void 0 : _tx$receipt2.status) === 'undefined');
  const archer = tx === null || tx === void 0 ? void 0 : tx.archer;
  const secondsUntilDeadline = useMemo(() => calculateSecondsUntilDeadline(tx), [tx]);
  const mined = (tx === null || tx === void 0 ? void 0 : tx.receipt) && tx.receipt.status !== 1337;
  const cancelled = (tx === null || tx === void 0 ? void 0 : tx.receipt) && tx.receipt.status === 1337;
  const expired = secondsUntilDeadline === -1;
  const cancelPending = useCallback(() => {
    var _process$env$NEXT_PUB;

    const relayURI = null;
    if (!relayURI) return;
    const body = JSON.stringify({
      method: 'archer_cancelTx',
      tx: archer === null || archer === void 0 ? void 0 : archer.rawTransaction
    });
    fetch(relayURI, {
      method: 'POST',
      body,
      headers: {
        Authorization: (_process$env$NEXT_PUB = process.env.NEXT_PUBLIC_ARCHER_API_KEY) !== null && _process$env$NEXT_PUB !== void 0 ? _process$env$NEXT_PUB : '',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      dispatch(finalizeTransaction({
        chainId,
        hash,
        receipt: {
          blockHash: '',
          blockNumber: 0,
          contractAddress: '',
          from: '',
          status: 1337,
          to: '',
          transactionHash: '',
          transactionIndex: 0
        }
      }));
    }).catch(err => console.error(err));
  }, [dispatch, chainId, archer, hash]);
  if (!chainId) return null;
  return /*#__PURE__*/_jsxs("div", {
    className: "d-flex flex-column w-100 gap-2 px-3 py-1 rounded bg-dark-800",
    children: [/*#__PURE__*/_jsxs(ExternalLink, {
      href: getExplorerLink(chainId, hash, 'transaction'),
      className: "d-flex align-items-center gap-2",
      children: [/*#__PURE__*/_jsxs(Typography, {
        variant: "sm",
        className: "d-flex align-items-center hover:underline py-0.5 text-white",
        style: {
          textDecoration: 'none'
        },
        children: [summary !== null && summary !== void 0 ? summary : hash, " \u2197"]
      }), /*#__PURE__*/_jsx("div", {
        className: classNames(pending ? 'text-danger' : success ? 'text-green' : cancelled ? 'text-red' : 'text-red'),
        children: pending ? /*#__PURE__*/_jsx(Loader, {}) : success ? /*#__PURE__*/_jsx(CheckCircleIcon, {
          width: 16,
          height: 16
        }) : cancelled ? /*#__PURE__*/_jsx(XCircleIcon, {
          width: 16,
          height: 16
        }) : /*#__PURE__*/_jsx(ExclamationIcon, {
          width: 16,
          height: 16
        })
      })]
    }), archer && /*#__PURE__*/_jsx(Typography, {
      variant: "sm",
      weight: 400,
      className: "flex items-center justify-between pb-1 text-decoration-none",
      children: pending ? /*#__PURE__*/_jsxs(_Fragment, {
        children: [secondsUntilDeadline >= 60 ? /*#__PURE__*/_jsxs("span", {
          className: "text-high-emphesis",
          children: ["\uD83D\uDD51 ", `${Math.ceil(secondsUntilDeadline / 60)} mins`, ' ']
        }) : /*#__PURE__*/_jsxs("span", {
          className: "text-high-emphesis",
          children: ["\uD83D\uDD51 ", `<1 min`, ' ']
        }), /*#__PURE__*/_jsx("div", {
          className: "flex items-center cursor-pointer",
          onClick: cancelPending,
          children: `Cancel`
        })]
      }) : cancelled ? /*#__PURE__*/_jsx("span", {
        className: "text-red",
        children: `Cancelled`
      }) : !mined && expired && /*#__PURE__*/_jsx("span", {
        className: "text-red",
        children: `Expired`
      })
    })]
  });
};

/* harmony default export */ const AccountDetails_Transaction = ((/* unused pure expression or super */ null && (Transaction_Transaction)));
;// CONCATENATED MODULE: ./src/components/AccountDetails/index.tsx



















const WalletIcon = ({
  size,
  src,
  alt,
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-row items-end justify-center mr-2 flex-nowrap md:items-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: src,
      alt: alt,
      width: size,
      height: size
    }), children]
  });
};

function renderTransactions(transactions) {
  return /*#__PURE__*/_jsx("div", {
    className: "gap-2 d-flex flex-column flex-nowrap",
    children: transactions.map((hash, i) => {
      return /*#__PURE__*/_jsx(Transaction, {
        hash: hash
      }, i);
    })
  });
}

const AccountDetails = ({
  toggleWalletModal,
  pendingTransactions,
  confirmedTransactions,
  ENSName,
  openOptions
}) => {
  const {
    chainId,
    account,
    connector
  } = (0,hooks_useActiveWeb3React/* useActiveWeb3React */.a)();
  const {
    deactivate
  } = (0,core_.useWeb3React)();
  const dispatch = (0,external_react_redux_.useDispatch)();

  function formatConnectorName() {
    const {
      ethereum
    } = window;
    const isMetaMask = !!(ethereum && ethereum.isMetaMask);
    const name = Object.keys(SUPPORTED_WALLETS).filter(k => SUPPORTED_WALLETS[k].connector === connector && (connector !== wallets_injected || isMetaMask === (k === 'METAMASK'))).map(k => SUPPORTED_WALLETS[k].name)[0];
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "font-medium text-white text-baseline",
      children: ["Connected with ", name]
    });
  }

  function getStatusIcon() {
    if (connector === wallets_injected) {
      return null; // return <IconWrapper size={16}>{/* <Identicon /> */}</IconWrapper>
    } else if (connector.constructor.name === 'WalletConnectConnector') {
      return /*#__PURE__*/jsx_runtime_.jsx(WalletIcon, {
        src: "/wallet-connect.png",
        alt: "Wallet Connect",
        size: 16
      });
    } else if (connector.constructor.name === 'WalletLinkConnector') {
      return /*#__PURE__*/jsx_runtime_.jsx(WalletIcon, {
        src: "/coinbase.svg",
        alt: "Coinbase",
        size: 16
      });
    } else if (connector.constructor.name === 'FortmaticConnector') {
      return /*#__PURE__*/jsx_runtime_.jsx(WalletIcon, {
        src: "/formatic.png",
        alt: "Fortmatic",
        size: 16
      });
    } else if (connector.constructor.name === 'PortisConnector') {
      return /*#__PURE__*/jsx_runtime_.jsx(WalletIcon, {
        src: "/portnis.png",
        alt: "Portis",
        size: 16,
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Button, {
          onClick: async () => {
            // casting as PortisConnector here defeats the lazyload purpose
            connector.portis.showPortis();
          },
          children: "Show Portis"
        })
      });
    } else if (connector.constructor.name === 'TorusConnector') {
      return /*#__PURE__*/jsx_runtime_.jsx(WalletIcon, {
        src: "/torus.png",
        alt: "Torus",
        size: 16
      });
    }

    return null;
  }

  const clearAllTransactionsCallback = (0,external_react_.useCallback)(() => {
    if (chainId) dispatch((0,transactions_actions/* clearAllTransactions */.fY)({
      chainId
    }));
  }, [dispatch, chainId]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "space-y-3",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "space-y-3",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_ModalHeader, {
        title: "Account",
        onClose: toggleWalletModal
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "space-y-3",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "d-flex align-items-center justify-content-between",
          children: [formatConnectorName(), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "space-x-3 d-flex",
            children: [connector === wallets_injected && connector.constructor.name !== 'WalletLinkConnector' && connector.constructor.name !== 'BscConnector' && connector.constructor.name !== 'KeystoneConnector' && /*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "btn btn-primary btn-sm ",
              onClick: () => {
                deactivate();

                if (connector.close && typeof connector.close === 'function') {
                  connector === null || connector === void 0 ? void 0 : connector.close();
                }
              },
              style: {
                marginRight: '10px',
                lineHeight: 1
              },
              children: `Disconnect`
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "btn btn-primary btn-sm ",
              onClick: () => {
                openOptions();
              },
              style: {
                lineHeight: 1
              },
              children: `Change`
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          id: "web3-account-identifier-row",
          className: "mt-2 space-y-3 d-flex flex-column justify-content-center",
          children: [ENSName ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "bg-dark-800",
            children: [getStatusIcon(), /*#__PURE__*/jsx_runtime_.jsx(components_Typography, {
              children: ENSName
            })]
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "px-3 py-2 text-white rounded bg-danger",
            children: [getStatusIcon(), /*#__PURE__*/jsx_runtime_.jsx(components_Typography, {
              children: account && (0,functions/* shortenAddress */.Xn)(account)
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "gap-2 mt-2 space-x-3 d-flex align-items-center",
            children: [chainId && account && /*#__PURE__*/jsx_runtime_.jsx(components_ExternalLink, {
              color: "blue",
              startIcon: /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_namespaceObject.ExternalLink, {
                size: 16
              }),
              href: chainId && (0,explorer/* getExplorerLink */.E)(chainId, ENSName || account, 'address'),
              children: /*#__PURE__*/jsx_runtime_.jsx(components_Typography, {
                variant: "sm",
                children: `View on explorer`
              })
            }), account && /*#__PURE__*/jsx_runtime_.jsx(Copy, {
              toCopy: account,
              children: /*#__PURE__*/jsx_runtime_.jsx(components_Typography, {
                className: "text-white",
                variant: "sm",
                children: `Copy Address`
              })
            })]
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const components_AccountDetails = (AccountDetails);
;// CONCATENATED MODULE: external "@web3-react/fortmatic-connector"
const fortmatic_connector_namespaceObject = require("@web3-react/fortmatic-connector");
;// CONCATENATED MODULE: ./src/entities/FortmaticConnector.ts

const OVERLAY_READY = 'OVERLAY_READY';
const CHAIN_ID_NETWORK_ARGUMENT = {
  1: undefined,
  3: 'ropsten',
  4: 'rinkeby',
  42: 'kovan'
};
class FortmaticConnector extends (/* unused pure expression or super */ null && (FortmaticConnectorCore)) {
  async activate() {
    if (!this.fortmatic) {
      const {
        default: Fortmatic
      } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 8099, 23));
      const {
        apiKey,
        chainId
      } = this;

      if (chainId in CHAIN_ID_NETWORK_ARGUMENT) {
        this.fortmatic = new Fortmatic(apiKey, CHAIN_ID_NETWORK_ARGUMENT[chainId]);
      } else {
        throw new Error(`Unsupported network ID: ${chainId}`);
      }
    }

    const provider = this.fortmatic.getProvider();
    const pollForOverlayReady = new Promise(resolve => {
      const interval = setInterval(() => {
        if (provider.overlayReady) {
          clearInterval(interval);
          this.emit(OVERLAY_READY);
          resolve();
        }
      }, 200);
    });
    const [account] = await Promise.all([provider.enable().then(accounts => accounts[0]), pollForOverlayReady]);
    return {
      provider: this.fortmatic.getProvider(),
      chainId: this.chainId,
      account
    };
  }

}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/modals/WalletModal/Option.tsx





const StyledDiv = (external_styled_components_default()).div`
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #fff;
  }
`;
function Option({
  link = null,
  clickable = true,
  size,
  onClick = null,
  color,
  header,
  subheader = null,
  icon,
  active = false,
  id
}) {
  const content = /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledDiv, {
    onClick: onClick,
    className: `d-flex align-items-center justify-content-between w-100 p-2 mt-2 rounded cursor-pointer ${!active ? 'bg-dark-800 hover:bg-dark-700' : 'bg-dark-1000 border'}`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "d-flex align-items-center text-white",
        children: [active && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-4 h-4 mr-4 rounded-full",
          style: {
            background: color
          }
        }), header]
      }), subheader && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-2.5 text-xs",
        children: subheader
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: icon,
      alt: 'Icon',
      width: "32px",
      height: "32px"
    })]
  });

  if (link) {
    return /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: link,
      children: content
    });
  }

  return !active ? content : /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "w-full p-px rounded bg-gradient-to-r from-blue to-pink",
    children: content
  });
}
// EXTERNAL MODULE: external "@web3-react/walletconnect-connector"
var walletconnect_connector_ = __webpack_require__(9650);
;// CONCATENATED MODULE: ./src/hooks/usePrevious.ts
 // modified from https://usehooks.com/usePrevious/

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = (0,external_react_.useRef)(); // Store current value in ref

  (0,external_react_.useEffect)(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)

  return ref.current;
}
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
;// CONCATENATED MODULE: ./src/modals/WalletModal/index.tsx















const WALLET_VIEWS = {
  OPTIONS: 'options',
  OPTIONS_SECONDARY: 'options_secondary',
  ACCOUNT: 'account',
  PENDING: 'pending'
};
function WalletModal({
  pendingTransactions,
  confirmedTransactions,
  ENSName
}) {
  // console.log({ ENSName })
  // important that these are destructed from the account-specific web3-react context
  const {
    active,
    account,
    connector,
    activate,
    error,
    deactivate
  } = (0,core_.useWeb3React)();
  const {
    0: walletView,
    1: setWalletView
  } = (0,external_react_.useState)(WALLET_VIEWS.ACCOUNT);
  const {
    0: pendingWallet,
    1: setPendingWallet
  } = (0,external_react_.useState)();
  const {
    0: pendingError,
    1: setPendingError
  } = (0,external_react_.useState)();
  const walletModalOpen = (0,hooks/* useModalOpen */.oL)(actions/* ApplicationModal.WALLET */.Lk.WALLET);
  const toggleWalletModal = (0,hooks/* useWalletModalToggle */.mq)();
  const previousAccount = usePrevious(account); // close on connection, when logged out before

  (0,external_react_.useEffect)(() => {
    if (account && !previousAccount && walletModalOpen) {
      toggleWalletModal();
    }
  }, [account, previousAccount, toggleWalletModal, walletModalOpen]); // always reset to account view

  (0,external_react_.useEffect)(() => {
    if (walletModalOpen) {
      setPendingError(false);
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [walletModalOpen]); // close modal when a connection is successful

  const activePrevious = usePrevious(active);
  const connectorPrevious = usePrevious(connector);
  (0,external_react_.useEffect)(() => {
    if (walletModalOpen && (active && !activePrevious || connector && connector !== connectorPrevious && !error)) {
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [setWalletView, active, error, connector, walletModalOpen, activePrevious, connectorPrevious]);

  const tryActivation = async connector => {
    var _conn$walletConnectPr, _conn$walletConnectPr2;

    let name = '';
    let conn = typeof connector === 'function' ? await connector() : connector;
    Object.keys(SUPPORTED_WALLETS).map(key => {
      if (connector === SUPPORTED_WALLETS[key].connector) {
        return name = SUPPORTED_WALLETS[key].name;
      }

      return true;
    });
    setPendingWallet(conn); // set wallet for pending view

    setWalletView(WALLET_VIEWS.PENDING); // if the connector is walletconnect and the user has already tried to connect, manually reset the connector

    if (conn instanceof walletconnect_connector_.WalletConnectConnector && (_conn$walletConnectPr = conn.walletConnectProvider) !== null && _conn$walletConnectPr !== void 0 && (_conn$walletConnectPr2 = _conn$walletConnectPr.wc) !== null && _conn$walletConnectPr2 !== void 0 && _conn$walletConnectPr2.uri) {
      conn.walletConnectProvider = undefined;
    }

    conn && activate(conn, undefined, true).catch(error => {
      if (error instanceof core_.UnsupportedChainIdError) {
        activate(conn); // a little janky...can't use setError because the connector isn't set
      } else {
        setPendingError(true);
      }
    });
  }; // close wallet modal if fortmatic modal is active


  (0,external_react_.useEffect)(() => {
    var _connector$constructo;

    if ((connector === null || connector === void 0 ? void 0 : (_connector$constructo = connector.constructor) === null || _connector$constructo === void 0 ? void 0 : _connector$constructo.name) === 'FormaticConnector') {
      connector.on(OVERLAY_READY, () => {
        toggleWalletModal();
      });
    }
  }, [toggleWalletModal, connector]); // get wallets user can switch too, depending on device/browser

  function getOptions() {
    const isMetamask = window.ethereum && window.ethereum.isMetaMask;
    return Object.keys(SUPPORTED_WALLETS).map(key => {
      const option = SUPPORTED_WALLETS[key]; // check for mobile options

      if (external_react_device_detect_namespaceObject.isMobile) {
        // disable portis on mobile for now
        if (option.name === 'Portis') {
          return null;
        }

        if (!window.web3 && !window.ethereum && option.mobile) {
          return /*#__PURE__*/jsx_runtime_.jsx(Option, {
            onClick: () => {
              tryActivation(option.connector);
            },
            id: `connect-${key}`,
            active: option.connector && option.connector === connector,
            color: option.color,
            link: option.href,
            header: option.name,
            subheader: null,
            icon: '/images/wallets/' + option.iconName
          }, key);
        }

        return null;
      } // overwrite injected when needed


      if (option.connector === wallets_injected) {
        // don't show injected if there's no injected provider
        if (!(window.web3 || window.ethereum)) {
          if (option.name === 'MetaMask') {
            return /*#__PURE__*/jsx_runtime_.jsx(Option, {
              id: `connect-${key}`,
              color: '#E8831D',
              header: 'Install Metamask',
              subheader: null,
              link: 'https://metamask.io/',
              icon: "/images/wallets/metamask.png"
            }, key);
          } else {
            return null; // dont want to return install twice
          }
        } // don't return metamask if injected provider isn't metamask
        else if (option.name === 'MetaMask' && !isMetamask) {
          return null;
        } // likewise for generic
        else if (option.name === 'Injected' && isMetamask) {
          return null;
        }
      } // return rest of options


      return !external_react_device_detect_namespaceObject.isMobile && !option.mobileOnly && /*#__PURE__*/jsx_runtime_.jsx(Option, {
        id: `connect-${key}`,
        onClick: () => {
          option.connector === connector ? setWalletView(WALLET_VIEWS.ACCOUNT) : !option.href && tryActivation(option.connector);
        },
        active: option.connector === connector,
        color: option.color,
        link: option.href,
        header: option.name,
        subheader: null // use option.descriptio to bring back multi-line
        ,
        icon: '/images/wallets/' + option.iconName
      }, key);
    });
  }

  function getModalContent() {
    if (error) {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_ModalHeader, {
          title: error instanceof core_.UnsupportedChainIdError ? `Wrong Network` : `Error connecting`,
          onClose: toggleWalletModal
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "text-white",
          children: [error instanceof core_.UnsupportedChainIdError ? /*#__PURE__*/jsx_runtime_.jsx("h5", {
            children: `Please connect to the appropriate Avalanche network.`
          }) : `Error connecting. Try refreshing the page.`, /*#__PURE__*/jsx_runtime_.jsx("div", {
            style: {
              marginTop: '1rem'
            }
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "btn btn-primary",
            size: "sm",
            onClick: deactivate,
            children: `Disconnect`
          })]
        })]
      });
    }

    if (account && walletView === WALLET_VIEWS.ACCOUNT) {
      return /*#__PURE__*/jsx_runtime_.jsx(components_AccountDetails, {
        toggleWalletModal: toggleWalletModal,
        pendingTransactions: pendingTransactions,
        confirmedTransactions: confirmedTransactions,
        ENSName: ENSName,
        openOptions: () => setWalletView(WALLET_VIEWS.OPTIONS)
      });
    }

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "space-y-4 d-flex flex-column",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_ModalHeader, {
        title: "Select a Wallet",
        onClose: toggleWalletModal
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex flex-col space-y-6",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "space-y-5 overflow-y-auto d-flex flex-column",
          children: getOptions()
        })
      })]
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Modal, {
    centered: true,
    contentClassName: "bg-dark p-3",
    show: walletModalOpen,
    onHide: toggleWalletModal,
    minHeight: false,
    maxHeight: 90,
    children: getModalContent()
  });
}
;// CONCATENATED MODULE: ./src/components/Web3Connect/index.tsx
const Web3Connect_excluded = ["color", "size", "className"];

function Web3Connect_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Web3Connect_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Web3Connect_ownKeys(Object(source), true).forEach(function (key) { Web3Connect_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Web3Connect_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Web3Connect_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Web3Connect_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Web3Connect_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Web3Connect_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function Web3Connect(_ref) {
  let {
    color = 'gray',
    size = 'sm',
    className = ''
  } = _ref,
      rest = Web3Connect_objectWithoutProperties(_ref, Web3Connect_excluded);

  const toggleWalletModal = (0,hooks/* useWalletModalToggle */.mq)();
  const {
    error
  } = (0,core_.useWeb3React)();
  return error ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "px-2 py-1 font-semibold text-white border rounded d-flex align-items-center justify-content-center border-danger bg-opacity-80 border-red bg-red hover:bg-opacity-100",
    onClick: toggleWalletModal,
    style: {
      fontSize: '.8rem',
      cursor: 'pointer'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mr-1",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_namespaceObject.Activity, {
        className: "w-4 h-4"
      })
    }), error instanceof core_.UnsupportedChainIdError ? `You are on the wrong network` : `Error`]
  }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", Web3Connect_objectSpread(Web3Connect_objectSpread({
    className: "btn btn-sm btn-primary",
    id: "connect-wallet",
    onClick: toggleWalletModal,
    variant: "outlined",
    color: color
  }, rest), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
      className: "mdi mdi-wallet-plus-outline me-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: "Connect Wallet"
    })]
  }));
}
// EXTERNAL MODULE: ./src/functions/format.ts
var format = __webpack_require__(8277);
;// CONCATENATED MODULE: ./src/components/Web3Status/index.tsx














const IconWrapper = (external_styled_components_default()).div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  & > * {
    height: ${({
  size
}) => size ? size + 'px' : '32px'};
    width: ${({
  size
}) => size ? size + 'px' : '32px'};
  }
`; // we want the latest one to come first, so return negative if a is after b

function newTransactionsFirst(a, b) {
  return b.addedTime - a.addedTime;
}

const SOCK = /*#__PURE__*/jsx_runtime_.jsx("span", {
  role: "img",
  "aria-label": "has socks emoji",
  style: {
    marginTop: -4,
    marginBottom: -4
  },
  children: "\uD83E\uDDE6"
}); // eslint-disable-next-line react/prop-types


function StatusIcon({
  connector
}) {
  if (connector === injected) {
    return /*#__PURE__*/_jsx(Image, {
      src: "/chef.svg",
      alt: "Injected (MetaMask etc...)",
      width: 20,
      height: 20
    }); // return <Identicon />
  } else if (connector.constructor.name === 'WalletConnectConnector') {
    return /*#__PURE__*/_jsx(IconWrapper, {
      size: 16,
      children: /*#__PURE__*/_jsx(Image, {
        src: "/images/wallets/wallet-connect.png",
        alt: 'Wallet Connect',
        width: "16px",
        height: "16px"
      })
    });
  } else if (connector.constructor.name === 'LatticeConnector') {
    return /*#__PURE__*/_jsx(IconWrapper, {
      size: 16,
      children: /*#__PURE__*/_jsx(Image, {
        src: "/images/wallets/lattice.png",
        alt: 'Lattice',
        width: "16px",
        height: "16px"
      })
    });
  } else if (connector.constructor.name === 'WalletLinkConnector') {
    return /*#__PURE__*/_jsx(IconWrapper, {
      size: 16,
      children: /*#__PURE__*/_jsx(Image, {
        src: "/images/wallets/coinbase.svg",
        alt: 'Coinbase Wallet',
        width: "16px",
        height: "16px"
      })
    });
  } else if (connector.constructor.name === 'FortmaticConnector') {
    return /*#__PURE__*/_jsx(IconWrapper, {
      size: 16,
      children: /*#__PURE__*/_jsx(Image, {
        src: "/images/wallets/fortmatic.png",
        alt: 'Fortmatic',
        width: "16px",
        height: "16px"
      })
    });
  } else if (connector.constructor.name === 'PortisConnector') {
    return /*#__PURE__*/_jsx(IconWrapper, {
      size: 16,
      children: /*#__PURE__*/_jsx(Image, {
        src: "/images/wallets/portis.png",
        alt: 'Portis',
        width: "16px",
        height: "16px"
      })
    });
  } else if (connector.constructor.name === 'KeystoneConnector') {
    return /*#__PURE__*/_jsx(IconWrapper, {
      size: 16,
      children: /*#__PURE__*/_jsx(Image, {
        src: "/images/wallets/keystone.png",
        alt: 'Keystone',
        width: "16px",
        height: "16px"
      })
    });
  }

  return null;
}

function Web3StatusInner() {
  const {
    account,
    connector
  } = (0,core_.useWeb3React)();
  const allTransactions = (0,transactions_hooks/* useAllTransactions */.kf)();
  const sortedRecentTransactions = (0,external_react_.useMemo)(() => {
    const txs = Object.values(allTransactions);
    return txs.filter(transactions_hooks/* isTransactionRecent */.mH).sort(newTransactionsFirst);
  }, [allTransactions]);
  const pending = sortedRecentTransactions.filter(tx => {
    if (tx.receipt) {
      return false;
    } else if (tx.archer && tx.archer.deadline * 1000 - Date.now() < 0) {
      return false;
    } else {
      return true;
    }
  }).map(tx => tx.hash);
  const hasPendingTransactions = !!pending.length;
  const toggleWalletModal = (0,hooks/* useWalletModalToggle */.mq)();

  if (account) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "web3-status-connected",
      className: "px-2 py-1 text-sm d-flex align-items-center btn btn-outline-primary btn-sm text-secondary",
      onClick: toggleWalletModal,
      style: {
        cursor: 'pointer'
      },
      children: hasPendingTransactions ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "d-flex align-items-center justify-content-between",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "pr-2 ",
          style: {
            marginRight: '5px'
          },
          children: [pending === null || pending === void 0 ? void 0 : pending.length, " ", `Pending`]
        }), ' ', /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ml-1 spinner-border spinner-border-sm",
          role: "status",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "visually-hidden",
            children: "Loading..."
          })
        })]
      }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mr-2 text-white",
        children: (0,format/* shortenAddress */.Xn)(account)
      })
    });
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx(Web3Connect, {
      style: {
        paddingTop: '6px',
        paddingBottom: '6px'
      }
    });
  }
}

function Web3Status() {
  const {
    active,
    account
  } = (0,core_.useWeb3React)();
  const contextNetwork = (0,core_.useWeb3React)(constants/* NetworkContextName */.A);
  const allTransactions = (0,transactions_hooks/* useAllTransactions */.kf)();
  const sortedRecentTransactions = (0,external_react_.useMemo)(() => {
    const txs = Object.values(allTransactions);
    return txs.filter(transactions_hooks/* isTransactionRecent */.mH).sort(newTransactionsFirst);
  }, [allTransactions]);
  const pending = sortedRecentTransactions.filter(tx => !tx.receipt).map(tx => tx.hash);
  const confirmed = sortedRecentTransactions.filter(tx => tx.receipt).map(tx => tx.hash);

  if (!contextNetwork.active && !active) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Web3StatusInner, {}), /*#__PURE__*/jsx_runtime_.jsx(WalletModal, {
      ENSName: undefined,
      pendingTransactions: pending,
      confirmedTransactions: confirmed
    })]
  });
}
// EXTERNAL MODULE: ./src/state/wallet/hooks.ts
var wallet_hooks = __webpack_require__(2319);
// EXTERNAL MODULE: external "moment-timezone"
var external_moment_timezone_ = __webpack_require__(1289);
var external_moment_timezone_default = /*#__PURE__*/__webpack_require__.n(external_moment_timezone_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/components/Admin/Context/index.tsx
var Context = __webpack_require__(6093);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx









 // import { ExternalLink, NavLink } from "./Link";
// import { ReactComponent as Burger } from "../assets/images/burger.svg";




function AppBar() {
  var _useETHBalances;

  const {
    admin
  } = (0,Context/* useAdmin */.A)();
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  const {
    0: currentUTCDate,
    1: setCurrentUTCDate
  } = (0,external_react_.useState)('');
  const {
    account,
    chainId,
    library
  } = (0,hooks_useActiveWeb3React/* useActiveWeb3React */.a)();
  const interval = (0,external_react_.useRef)(null);
  const router = (0,router_.useRouter)();
  const userEthBalance = (_useETHBalances = (0,wallet_hooks/* useETHBalances */.AE)(account ? [account] : [])) === null || _useETHBalances === void 0 ? void 0 : _useETHBalances[account !== null && account !== void 0 ? account : ''];
  const toggleWalletModal = (0,hooks/* useWalletModalToggle */.mq)();
  (0,external_react_.useEffect)(() => {
    setCurrentUTCDate(external_moment_timezone_default()().utc().format('DD MMM, HH:mm:ss'));
    interval.current = setInterval(() => {
      setCurrentUTCDate(external_moment_timezone_default()().utc().format('DD MMM, HH:mm:ss'));
    }, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    /*#__PURE__*/
    // <nav
    //   id="PPNavbar"
    //   className="w-full bg-white navbar navbar-expand-md navbar-light"
    // >
    jsx_runtime_.jsx(external_react_bootstrap_.Navbar, {
      collapseOnSelect: true,
      expand: "md",
      className: "w-full",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Brand, {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/logo.png",
              height: 65,
              width: 230,
              alt: "Avapad",
              className: "me-2"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Toggle, {}), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Collapse, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav, {
            className: "mb-2 navbar-nav ms-auto mb-md-0",
            activeKey: router.pathname,
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: admin ? '/configure' : '/projects',
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                className: "pt-1 d-flex align-items-start",
                children: "Projects"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/staking",
                passHref: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                  className: "pt-1 d-flex align-items-start",
                  children: "Staking"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/claimer",
                passHref: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                  className: "pt-1 d-flex align-items-start",
                  children: "Claimer"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx(Web3Status, {})
            })]
          })
        })]
      })
    }) // </nav>
    // <section className="header">
    //   <nav className="navbar">
    //     <Link href="/">
    //       <div>
    //         <img src={'/Yeni-Proje.png'} alt="logo"></img>
    //         <span>Avapad</span>
    //       </div>
    //     </Link>
    //     <div className="nav-center">
    //       <ul className={open ? 'nav-links show-nav' : 'nav-links'}>
    //         <li>
    //           <Link href="/">Connect Wallet</Link>
    //         </li>
    //         <li>
    //           <Link href="/projects">Projects</Link>
    //         </li>
    //         <li>
    //           <Link href="/staking">Staking</Link>
    //         </li>
    //         <li>
    //           <Link href="/error">Error</Link>
    //         </li>
    //       </ul>
    //       <ul className="nav-mobile">
    //         <li>
    //           <button
    //             type="button"
    //             className="nav-btn"
    //             onClick={() => setOpen(!open)}
    //           >
    //             {/* <FaAlignJustify className="nav-icon" /> */}
    //           </button>
    //         </li>
    //         {/* {
    //           <li>
    //             {this.state.star ? (
    //               <button
    //                 type="button"
    //                 className="nav-btn"
    //                 onClick={this.handleStar}
    //               >
    //                 <ImStarEmpty className="nav-icon" />
    //               </button>
    //             ) : (
    //               <button
    //                 type="button"
    //                 className="nav-btn"
    //                 onClick={this.handleStar}
    //               >
    //                 <ImStarFull className="nav-icon" />
    //               </button>
    //             )}
    //           </li>
    //         } */}
    //       </ul>
    //     </div>
    //   </nav>
    // </section>
    //     // <header className="flex flex-row justify-between w-screen flex-nowrap">
    // <header className="flex-shrink-0 w-full">
    //   <Popover as="nav" className="z-10 w-full bg-transparent header-border-b">
    //     {({ open }) => (
    //       <>
    //         <div className="px-4 py-4">
    //           <div className="flex items-center justify-between">
    //             <div className="flex items-center">
    //               <Image
    //                 src="/Yeni-Proje.png"
    //                 alt="icon"
    //                 width="90px"
    //                 height="90px"
    //               />
    //               <div className="hidden sm:block sm:ml-4">
    //                 <div className="flex space-x-2">
    //                   {/* <Buy /> */}
    //                   {/* <NavLink href="/swap">
    //                     <a
    //                       id={`swap-nav-link`}
    //                       className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //                     >
    //                       {i18n._(t`Swap`)}
    //                     </a>
    //                   </NavLink> */}
    //                   {/* <NavLink href="/pool">
    //                     <a
    //                       id={`pool-nav-link`}
    //                       className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //                     >
    //                       {i18n._(t`Pool`)}
    //                     </a>
    //                   </NavLink> */}
    //                   <NavLink href={'/launchpad'}>
    //                     <a
    //                       id={`launchpad-nav-link`}
    //                       className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //                     >
    //                       {' '}
    //                       {` Launchpad`}
    //                     </a>
    //                   </NavLink>
    //                   <NavLink href={'/stake'}>
    //                     <a
    //                       id={`stale-nav-link`}
    //                       className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //                     >
    //                       {' '}
    //                       {` Stake`}
    //                     </a>
    //                   </NavLink>
    //                   <NavLink href={'/claim'}>
    //                     <a
    //                       id={`stale-nav-link`}
    //                       className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //                     >
    //                       {' '}
    //                       {` Claim`}
    //                     </a>
    //                   </NavLink>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="fixed bottom-0 left-0 z-10 flex flex-row items-center justify-center w-full p-4 lg:w-auto bg-dark-1000 lg:relative lg:p-0 lg:bg-transparent">
    //               <div className="flex items-center justify-between w-full space-x-2 sm:justify-end">
    //                 <div className="w-auto flex items-center rounded bg-dark-900 hover:bg-dark-800 p-0.5 whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto">
    //                   {account && chainId && userEthBalance && (
    //                     <>
    //                       <div className="px-3 py-2 text-white text-bold">
    //                         {userEthBalance.toSignificant(6)} ETH
    //                       </div>
    //                     </>
    //                   )}
    //                   <Web3Status />
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="flex -mr-2 sm:hidden">
    //               {/* Mobile menu button */}
    //               <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-high-emphesis focus:outline-none">
    //                 <span className="sr-only">{`Open main menu`}</span>
    //                 {open ? (
    //                   <svg
    //                     className="block w-6 h-6"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                   >
    //                     <path
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                       strokeWidth="2"
    //                       d="M6 18L18 6M6 6l12 12"
    //                     />
    //                   </svg>
    //                 ) : (
    //                   // <X title="Close" className="block w-6 h-6" aria-hidden="true" />
    //                   <svg
    //                     className="block w-6 h-6"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                   >
    //                     <path
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                       strokeWidth={2}
    //                       d="M4 6h16M4 12h16M4 18h16"
    //                     />
    //                   </svg>
    //                   // <Burger title="Burger" className="block w-6 h-6" aria-hidden="true" />
    //                 )}
    //               </Popover.Button>
    //             </div>
    //           </div>
    //         </div>
    //         <Popover.Panel className="sm:hidden">
    //           <div className="flex flex-col px-4 pt-2 pb-3 space-y-1">
    //             {/* <Link href={'/swap'}>
    //               <a
    //                 id={`swap-nav-link`}
    //                 className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //               >
    //                 {`Swap`}
    //               </a>
    //             </Link>
    //             <Link href={'/pool'}>
    //               <a
    //                 id={`pool-nav-link`}
    //                 className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //               >
    //                 {`Pool`}
    //               </a>
    //             </Link> */}
    //             <Link href={'/launchpad'}>
    //               <a
    //                 id={`launchpad-nav-link`}
    //                 className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //               >
    //                 {' '}
    //                 {`Launchpad`}
    //               </a>
    //             </Link>
    //             <Link href={'/stake'}>
    //               <a
    //                 id={`Stake-nav-link`}
    //                 className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //               >
    //                 {' '}
    //                 {`Stake`}
    //               </a>
    //             </Link>
    //             <Link href={'/claim'}>
    //               <a
    //                 id={`Claim-nav-link`}
    //                 className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //               >
    //                 {' '}
    //                 {`Claim`}
    //               </a>
    //             </Link>
    //           </div>
    //         </Popover.Panel>
    //       </>
    //     )}
    //   </Popover>
    // </header>

  );
}

/* harmony default export */ const Header = (AppBar);
AppBar.Provider = Context/* default */.Z;
;// CONCATENATED MODULE: ./src/components/Main/index.tsx


const Main = ({
  children
}) => /*#__PURE__*/jsx_runtime_.jsx("main", {
  className: "flex flex-col items-center justify-start flex-grow w-full h-full",
  style: {
    height: 'max-content',
    minHeight: 'calc(100vh - 130px)'
  },
  children: children
});

/* harmony default export */ const components_Main = (Main);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./src/components/Popups/TransactionPopup.tsx








function TransactionPopup({
  hash,
  success,
  summary
}) {
  const {
    chainId
  } = (0,hooks_useActiveWeb3React/* useActiveWeb3React */.a)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-row w-full flex-nowrap",
    style: {
      zIndex: 1000
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "pr-4",
      children: success ? /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_namespaceObject.CheckCircle, {
        className: "text-2xl text-green"
      }) : /*#__PURE__*/jsx_runtime_.jsx(external_react_feather_namespaceObject.AlertCircle, {
        className: "text-2xl text-red"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col gap-1",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "font-bold text-white",
        children: summary !== null && summary !== void 0 ? summary : 'Hash: ' + hash.slice(0, 8) + '...' + hash.slice(58, 65)
      }), chainId && hash && /*#__PURE__*/jsx_runtime_.jsx(components_ExternalLink, {
        className: "p-0 text-blue md:p-0",
        href: (0,explorer/* getExplorerLink */.E)(chainId, hash, 'transaction'),
        style: {
          textDecoration: 'none'
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-row items-center gap-1 no-underline text-blue",
          style: {
            textDecoration: 'none'
          },
          children: ["View on explorer ", /*#__PURE__*/jsx_runtime_.jsx(esm/* ExternalLinkIcon */.h0n, {
            width: 20,
            height: 20
          })]
        })
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/Popups/PopupItem.tsx








const AnimatedFader = ({
  duration
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: style_default().dynamic([["3137773761", [duration]]]) + " " + "h-[3px] bg-dark-800 w-full",
  children: [/*#__PURE__*/jsx_runtime_.jsx((style_default()), {
    id: "3137773761",
    dynamic: [duration],
    children: [`.animation.__jsx-style-dynamic-selector{-webkit-animation-duration:${duration}ms;animation-duration:${duration}ms;-webkit-animation-name:fader-__jsx-style-dynamic-selector;animation-name:fader-__jsx-style-dynamic-selector;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}`, "@-webkit-keyframes fader-__jsx-style-dynamic-selector{from{width:100%;}to{width:0%;}}", "@keyframes fader-__jsx-style-dynamic-selector{from{width:100%;}to{width:0%;}}"]
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: style_default().dynamic([["3137773761", [duration]]]) + " " + "animation h-[3px] bg-gradient-to-r from-blue to-pink"
  })]
});

function PopupItem({
  removeAfterMs,
  content,
  popKey
}) {
  const removePopup = (0,hooks/* useRemovePopup */.J3)();
  const removeThisPopup = (0,external_react_.useCallback)(() => removePopup(popKey), [popKey, removePopup]);
  (0,external_react_.useEffect)(() => {
    if (removeAfterMs === null) return undefined;
    const timeout = setTimeout(() => {
      removeThisPopup();
    }, removeAfterMs);
    return () => {
      clearTimeout(timeout);
    };
  }, [removeAfterMs, removeThisPopup]);
  let popupContent;

  if ('txn' in content) {
    const {
      txn: {
        hash,
        success,
        summary
      }
    } = content;
    popupContent = /*#__PURE__*/jsx_runtime_.jsx(TransactionPopup, {
      hash: hash,
      success: success,
      summary: summary
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "mb-4",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative w-full overflow-hidden rounded bg-dark-900",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row p-4",
        children: [popupContent, /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "cursor-pointer hover:text-white",
          children: /*#__PURE__*/jsx_runtime_.jsx(esm/* XIcon */.b0D, {
            width: 24,
            height: 24,
            onClick: removeThisPopup
          })
        })]
      }), removeAfterMs !== null ? /*#__PURE__*/jsx_runtime_.jsx(AnimatedFader, {
        duration: removeAfterMs
      }) : null]
    })
  });
}
;// CONCATENATED MODULE: ./src/components/Popups/index.tsx
 // import { useURLWarningVisible } from '../../state/user/hooks'






const Popups = () => {
  const activePopups = (0,hooks/* useActivePopups */.iT)(); // const urlWarningActive = useURLWarningVisible()

  if (activePopups.length === 0) return /*#__PURE__*/jsx_runtime_.jsx("span", {}); //  ${
  //   urlWarningActive ? 'top-[108px]' : 'top-[88px]'
  // }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: ` md:block top-[88px] fixed right-[36px] max-w-[355px] w-full z-10 flex flex-col
        `,
      style: {
        zIndex: 1000000
      },
      children: activePopups.map(item => /*#__PURE__*/jsx_runtime_.jsx(PopupItem, {
        content: item.content,
        popKey: item.key,
        removeAfterMs: item.removeAfterMs
      }, item.key))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "fixed md:hidden left-4 right-4 top-[88px] fit-content mb-[20px]",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "h-[99%] overflow-x-auto overflow-y-hidden flex flex-col gap-4",
        style: {
          WebkitOverflowScrolling: 'touch'
        },
        children: activePopups // reverse so new items up front
        .slice(0).reverse().map(item => /*#__PURE__*/jsx_runtime_.jsx(PopupItem, {
          content: item.content,
          popKey: item.key,
          removeAfterMs: item.removeAfterMs
        }, item.key))
      })
    })]
  });
};

/* harmony default export */ const components_Popups = (Popups);
;// CONCATENATED MODULE: ./src/layouts/Default/index.tsx






const Layout = ({
  children,
  banner = undefined
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("body", {
    className: "darkmode",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "background"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "z-0 flex flex-col items-center w-full h-screen pb-16 lg:pb-0",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Main, {
        children: children
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Popups, {})]
    })]
  });
};

/* harmony default export */ const Default = (Layout);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(7949);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: ./src/theme/index.js


const theme = (0,material_.responsiveFontSizes)((0,styles_namespaceObject.createTheme)({
  palette: {
    blue: '#3298dc',
    alternate: {
      main: '#1a2138',
      dark: '#152951'
    },
    cardShadow: 'rgba(0, 0, 0, .11)',
    common: {
      black: '#000',
      white: '#fff',
      yellow: '#FFBB54',
      green: '#00ADA3',
      purple: '#374C98',
      blue: '#3298dc',
      success: '#d1fae5'
    },
    mode: 'dark',
    success: {
      main: '#d1fae5'
    },
    yellow: {
      main: '#fdfaea'
    },
    primary: {
      main: '#e63f40',
      light: '#fdeaf1',
      dark: '#e63f40',
      contrastText: '#fff'
    },
    secondary: {
      light: '#225f8c',
      main: '#96c5e7',
      dark: '#1b4c70',
      contrastText: '#FFFFFF'
    },
    text: {
      primary: '#FFFF',
      secondary: '#000'
    },
    // divider: '#152951',
    background: {
      paper: '#171717',
      // paper: 'linear-gradient(rgb(16, 137, 255), rgb(0, 21, 36))',
      default: '#264469',
      level2: '#333',
      level1: '#2D3748'
    }
  },
  layout: {
    contentWidth: 1236
  },
  typography: {
    h1: {
      fontSize: 'linear-gradient(to right, rgb(16, 137, 255), rgb(255, 74, 28))' // fontFamily: '"Fascinate", sans-serif',

    },
    // h2: {
    //   fontFamily: '"Fascinate", sans-serif',
    // },
    // h3: {
    //   fontFamily: '"Fascinate", sans-serif',
    // },
    // h4: {
    //   fontFamily: '"Fascinate", sans-serif',
    // },
    // h5: {
    //   fontFamily: '"Fascinate", sans-serif',
    // },
    // fontFamily: '"Poppins-Medium", sans-serif',
    allVariants: {
      color: '#FFFF'
    },
    // caption: {
    //   fontSize: 12,
    // },
    body1: {
      fontSize: '0.8rem'
    },
    h6: {
      fontSize: '0.85rem'
    },
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 'medium'
    }
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  components: {
    MuiTouchRipple: false,
    MuiTextField: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    },
    MuiListItemButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true // No more ripple!

      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 33
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: '14px'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        label: {
          fontWeight: 600
        },
        containedSecondary: {}
      }
    }
  } // shape: {
  //   borderRadius: 15,
  // },

}));
/* harmony default export */ const src_theme = (theme);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // import '../styles/fontawesome/all.css';
// import '../styles/materialdesignicons.css';


















const Web3ProviderNetwork = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 272).then(__webpack_require__.bind(__webpack_require__, 272)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(272)],
    modules: ["_app.tsx -> " + '../components/Web3ProviderNetwork']
  }
});
function MyApp({
  Component,
  pageProps
}) {
  // Allows for conditionally setting a provider to be hoisted per page
  const Provider = Component.Provider || external_react_.Fragment;
  return /*#__PURE__*/jsx_runtime_.jsx(core_.Web3ReactProvider, {
    getLibrary: getLibrary,
    children: /*#__PURE__*/jsx_runtime_.jsx(Web3ProviderNetwork, {
      getLibrary: getLibrary,
      children: /*#__PURE__*/jsx_runtime_.jsx(Web3ReactManager, {
        children: /*#__PURE__*/jsx_runtime_.jsx(material_.ThemeProvider, {
          theme: src_theme,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
            store: state,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Provider, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(Updater, {}), /*#__PURE__*/jsx_runtime_.jsx(updater_Updater, {}), /*#__PURE__*/jsx_runtime_.jsx(multicall_updater_Updater, {}), /*#__PURE__*/jsx_runtime_.jsx(Default, {
                children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
              })]
            })
          })
        })
      })
    })
  });
}

/***/ }),

/***/ 6124:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/abi");

/***/ }),

/***/ 7398:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/address");

/***/ }),

/***/ 1446:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/bignumber");

/***/ }),

/***/ 6148:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/constants");

/***/ }),

/***/ 4440:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/contracts");

/***/ }),

/***/ 685:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/units");

/***/ }),

/***/ 255:
/***/ ((module) => {

"use strict";
module.exports = require("@gnosis.pm/safe-apps-web3-react");

/***/ }),

/***/ 7949:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 6139:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 417:
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/core");

/***/ }),

/***/ 9650:
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/walletconnect-connector");

/***/ }),

/***/ 6297:
/***/ ((module) => {

"use strict";
module.exports = require("big.js");

/***/ }),

/***/ 8480:
/***/ ((module) => {

"use strict";
module.exports = require("decimal.js-light");

/***/ }),

/***/ 8099:
/***/ ((module) => {

"use strict";
module.exports = require("fortmatic");

/***/ }),

/***/ 4927:
/***/ ((module) => {

"use strict";
module.exports = require("jsbi");

/***/ }),

/***/ 1289:
/***/ ((module) => {

"use strict";
module.exports = require("moment-timezone");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 2307:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 3756:
/***/ ((module) => {

"use strict";
module.exports = require("numeral");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9226:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9914:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 3289:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ 4050:
/***/ ((module) => {

"use strict";
module.exports = require("tiny-invariant");

/***/ }),

/***/ 4951:
/***/ ((module) => {

"use strict";
module.exports = require("tiny-warning");

/***/ }),

/***/ 7878:
/***/ ((module) => {

"use strict";
module.exports = require("toformat");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,152,701,276,246,212,696,123,319,302,951], () => (__webpack_exec__(3956)));
module.exports = __webpack_exports__;

})();