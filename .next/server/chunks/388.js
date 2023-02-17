"use strict";
exports.id = 388;
exports.ids = [388];
exports.modules = {

/***/ 6093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AdminProvider),
/* harmony export */   "A": () => (/* binding */ useAdmin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  admin: false,
  updateAdmin: () => {}
});
function AdminProvider({
  children
}) {
  const {
    0: admin,
    1: setAdmin
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function updateAdmin(value) {
    setAdmin(value);
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(context.Provider, {
    value: {
      admin,
      updateAdmin
    },
    children: children
  });
}
function useAdmin() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
}

/***/ }),

/***/ 3507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7717);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function Error(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, _objectSpread(_objectSpread({}, props), {}, {
    children: msg => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "mt-1 text-xs text-red",
      children: msg
    })
  }));
}

/***/ }),

/***/ 7871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dn": () => (/* reexport safe */ _useContract__WEBPACK_IMPORTED_MODULE_0__.dn),
/* harmony export */   "Z_": () => (/* reexport safe */ _useContract__WEBPACK_IMPORTED_MODULE_0__.Z_),
/* harmony export */   "kN": () => (/* reexport safe */ _useContract__WEBPACK_IMPORTED_MODULE_0__.kN),
/* harmony export */   "Ib": () => (/* reexport safe */ _useContract__WEBPACK_IMPORTED_MODULE_0__.Ib),
/* harmony export */   "aQ": () => (/* reexport safe */ _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8246);
/* harmony import */ var _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8269);



/***/ })

};
;