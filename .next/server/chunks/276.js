"use strict";
exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 1276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TC": () => (/* binding */ getSigner),
/* harmony export */   "uN": () => (/* binding */ getContract)
/* harmony export */ });
/* unused harmony export getProviderOrSigner */
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6148);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4440);
/* harmony import */ var _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2556);
// NOTE: Try not to add anything to thie file, it's almost entirely refactored out.


 // account is not optional

function getSigner(library, account) {
  return library.getSigner(account).connectUnchecked();
} // account is optional

function getProviderOrSigner(library, account) {
  return account ? getSigner(library, account) : library;
} // account is optional

function getContract(address, ABI, library, account) {
  if (!(0,_functions_validate__WEBPACK_IMPORTED_MODULE_2__/* .isAddress */ .UJ)(address) || address === _ethersproject_constants__WEBPACK_IMPORTED_MODULE_0__.AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_1__.Contract(address, ABI, getProviderOrSigner(library, account));
}

/***/ }),

/***/ 2556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UJ": () => (/* binding */ isAddress)
/* harmony export */ });
/* unused harmony exports isZero, isEmptyValue */
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1446);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7398);
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_address__WEBPACK_IMPORTED_MODULE_1__);
// CONVENTION isFoo -> boolean


/**
 * Returns true if the string value is zero in hex
 * @param hexNumberString
 */

function isZero(hexNumberString) {
  return /^0x0*$/.test(hexNumberString);
}
const isEmptyValue = text => BigNumber.isBigNumber(text) ? BigNumber.from(text).isZero() : text === '' || text.replace(/0/g, '').replace(/\./, '') === ''; // returns the checksummed address if the address is valid, otherwise returns false

function isAddress(value) {
  try {
    return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_1__.getAddress)(value);
  } catch {
    return false;
  }
}

/***/ })

};
;