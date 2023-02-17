"use strict";
exports.id = 302;
exports.ids = [302];
exports.modules = {

/***/ 3302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ getExplorerLink)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1878);

const explorers = {
  etherscan: (link, data, type) => {
    switch (type) {
      case 'transaction':
        return `${link}/tx/${data}`;

      default:
        return `${link}/${type}/${data}`;
    }
  },
  blockscout: (link, data, type) => {
    switch (type) {
      case 'transaction':
        return `${link}/tx/${data}`;

      case 'token':
        return `${link}/tokens/${data}`;

      default:
        return `${link}/${type}/${data}`;
    }
  },
  harmony: (link, data, type) => {
    switch (type) {
      case 'transaction':
        return `${link}/tx/${data}`;

      case 'token':
        return `${link}/address/${data}`;

      default:
        return `${link}/${type}/${data}`;
    }
  },
  okex: (link, data, type) => {
    switch (type) {
      case 'transaction':
        return `${link}/tx/${data}`;

      case 'token':
        return `${link}/tokenAddr/${data}`;

      default:
        return `${link}/${type}/${data}`;
    }
  }
};
const chains = {
  1: {
    link: 'https://etherscan.io',
    builder: explorers.etherscan
  },
  3: {
    link: 'https://ropsten.etherscan.io',
    builder: explorers.etherscan
  },
  4: {
    link: 'https://rinkeby.etherscan.io',
    builder: explorers.etherscan
  },
  42: {
    link: 'https://kovan.etherscan.io',
    builder: explorers.etherscan
  },
  [_sdk__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE_TESTNET */ .a_.AVALANCHE_TESTNET]: {
    link: 'https://testnet.snowtrace.io',
    builder: explorers.etherscan
  },
  [_sdk__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.AVALANCHE */ .a_.AVALANCHE]: {
    link: 'https://snowtrace.io',
    builder: explorers.etherscan
  }
};
function getExplorerLink(chainId, data, type) {
  const chain = chains[chainId];
  return chain.builder(chain.link, data, type);
}

/***/ })

};
;