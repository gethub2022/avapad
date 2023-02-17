"use strict";
exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 8277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xn": () => (/* binding */ shortenAddress),
/* harmony export */   "tg": () => (/* binding */ getFormatedDateDiff),
/* harmony export */   "r0": () => (/* binding */ toWei),
/* harmony export */   "mb": () => (/* binding */ fromWei)
/* harmony export */ });
/* unused harmony exports capitalize, formatK, shortenString, formatPercent, formatNumber, formatNumberScale, escapeRegExp, formatBalance, formatDateAgo */
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(685);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3756);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7398);
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_address__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1289);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_3__);
// CONVENTION formatFoo -> string




const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};
const formatK = value => {
  return Numeral(value).format('0.[00]a');
}; // shorten the checksummed version of the input address to have 0x + 4 characters at start and end

function shortenAddress(address, chars = 4) {
  try {
    const parsed = (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_2__.getAddress)(address);
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
  } catch (error) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
} // shorten string to its maximum length using three dots

function shortenString(string, length) {
  if (!string) return '';
  if (length < 5) return string;
  if (string.length <= length) return string;
  return string.slice(0, 4) + '...' + string.slice(string.length - length + 5, string.length);
} // using a currency library here in case we want to add more in future

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});
function formatPercent(percentString) {
  const percent = parseFloat(percentString);

  if (!percent || percent === Infinity || percent === 0) {
    return '0%';
  }

  if (percent < 0.0001 && percent > 0) {
    return '< 0.0001%';
  }

  if (percent < 0 && percent > -0.0001) {
    return '< 0.0001%';
  }

  const fixedPercent = percent.toFixed(2);

  if (fixedPercent === '0.00') {
    return '0%';
  }

  if (Number(fixedPercent) > 0) {
    if (Number(fixedPercent) > 100) {
      return `${percent === null || percent === void 0 ? void 0 : percent.toFixed(0).toLocaleString()}%`;
    } else {
      return `${fixedPercent}%`;
    }
  } else {
    return `${fixedPercent}%`;
  }
}
const formatNumber = (number, usd = false, scale = true, decimals = 0) => {
  if (isNaN(number) || number === '' || number === undefined) {
    return usd ? '$0.00' : '0';
  }

  const num = parseFloat(number);

  if (num > 500000000 && scale) {
    return (usd ? '$' : '') + formatK(num.toFixed(decimals));
  }

  if (num === 0) {
    if (usd) {
      return '$0.00';
    }

    return '0';
  }

  if (num < 0.0001 && num > 0) {
    return usd ? '< $0.0001' : '< 0.0001';
  }

  if (num > 1000 || num < -1000) {
    return (num > 1000 ? '' : '-') + (usd ? '$' : '') + Number(parseFloat(String(Math.abs(num))).toFixed(decimals)).toLocaleString();
  }

  if (usd) {
    if (num < 0.1) {
      return '$' + Number(parseFloat(String(num)).toFixed(4));
    } else {
      const usdString = priceFormatter.format(num);
      return '$' + usdString.slice(1, usdString.length);
    }
  }

  return parseFloat(String(num)).toPrecision(4);
};
function formatNumberScale(number, usd = false) {
  if (isNaN(number) || number === '' || number === undefined) {
    return usd ? '$0.00' : '0';
  }

  const num = parseFloat(number);
  const wholeNumberLength = String(Math.floor(num)).length;
  if (wholeNumberLength >= 13) return (usd ? '$' : '') + (num / Math.pow(10, 12)).toFixed(1) + 'T';
  if (wholeNumberLength >= 10) return (usd ? '$' : '') + (num / Math.pow(10, 9)).toFixed(1) + 'B';
  if (wholeNumberLength >= 7) return (usd ? '$' : '') + (num / Math.pow(10, 6)).toFixed(1) + 'M';
  if (wholeNumberLength >= 4) return (usd ? '$' : '') + (num / Math.pow(10, 3)).toFixed(1) + 'K';

  if (num < 0.0001 && num > 0) {
    return usd ? '< $0.0001' : '< 0.0001';
  }

  return (usd ? '$' : '') + num.toFixed(2);
}
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
const formatBalance = (value, decimals = 18, maxFraction = 0) => {
  const formatted = formatUnits(value, decimals);

  if (maxFraction > 0) {
    const split = formatted.split('.');

    if (split.length > 1) {
      return split[0] + '.' + split[1].substr(0, maxFraction);
    }
  }

  return formatted;
}; // export function formatCurrencyAmount(amount: CurrencyAmount<Currency> | undefined, sigFigs: number) {
//   if (!amount) {
//     return '-'
//   }
//   if (JSBI.equal(amount.quotient, JSBI.BigInt(0))) {
//     return '0'
//   }
//   if (amount.divide(amount.decimalScale).lessThan(new Fraction(1, 100000))) {
//     return '<0.00001'
//   }
//   return amount.toSignificant(sigFigs)
// }
// export function formatPrice(
//   price: Price<Currency, Currency> | undefined,
//   sigFigs: number,
// ) {
//   if (!price) {
//     return '-';
//   }
//   if (parseFloat(price.toFixed(sigFigs)) < 0.0001) {
//     return '<0.0001';
//   }
//   return price.toSignificant(sigFigs);
// }

function formatDateAgo(date) {
  const currentDate = new Date();
  const secondsAgo = Math.floor((currentDate.getTime() - date.getTime()) / 1000);
  if (secondsAgo < 60) return `${secondsAgo} Second${secondsAgo === 1 ? '' : 's'} Ago`;
  if (secondsAgo < 3600) return `${Math.floor(secondsAgo / 60)} Minute${secondsAgo / 120 >= 1 ? 's' : ''} Ago`;
  if (secondsAgo < 86400) return `${Math.floor(secondsAgo / 3600)} Hour${secondsAgo / 7200 >= 1 ? 's' : ''} Ago`;
  if (secondsAgo < 2592000) return `${Math.floor(secondsAgo / 86400)} Day${secondsAgo / 172800 >= 1 ? 's' : ''} Ago`;
  if (secondsAgo < 31536000) return `${Math.floor(secondsAgo / 2592000)} Month${secondsAgo / 5184000 >= 1 ? 's' : ''} Ago`;
  return `${Math.floor(secondsAgo / 31536000)} Year${secondsAgo / 63072000 >= 1 ? 's' : ''} Ago`;
}
function getFormatedDateDiff(diff) {
  const d = moment_timezone__WEBPACK_IMPORTED_MODULE_3___default().duration(diff);
  return `${d.years() > 0 ? d.years() + ' years, ' : ''}${d.months() > 0 ? d.months() + ' months, ' : ''}${d.days() > 0 ? d.days() + ' days, ' : ''}${d.hours() > 0 ? d.hours() + ' hours, ' : ''}${d.minutes()} minutes`;
}
const toWei = amount => {
  return (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_0__.parseUnits)(amount, '18');
};
const fromWei = (amount, decimals) => {
  return (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_0__.formatUnits)(amount, decimals !== null && decimals !== void 0 ? decimals : '18');
};

/***/ }),

/***/ 1212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "yC": () => (/* reexport */ trade/* calculateGasMargin */.y),
  "AK": () => (/* reexport */ classNames),
  "mb": () => (/* reexport */ format/* fromWei */.mb),
  "uN": () => (/* reexport */ contract/* getContract */.uN),
  "tg": () => (/* reexport */ format/* getFormatedDateDiff */.tg),
  "TC": () => (/* reexport */ contract/* getSigner */.TC),
  "UJ": () => (/* reexport */ validate/* isAddress */.UJ),
  "Xn": () => (/* reexport */ format/* shortenAddress */.Xn),
  "r0": () => (/* reexport */ format/* toWei */.r0),
  "$G": () => (/* reexport */ truncate)
});

// UNUSED EXPORTS: ZERO, capitalize, chunkArray, e10, escapeRegExp, formatBalance, formatDateAgo, formatK, formatNumber, formatNumberScale, formatPercent, getProviderOrSigner, isEmptyValue, isZero, maximum, minimum, numberWithCommas, shortenString

// EXTERNAL MODULE: ./src/functions/contract.ts
var contract = __webpack_require__(1276);
// EXTERNAL MODULE: ./src/functions/format.ts
var format = __webpack_require__(8277);
// EXTERNAL MODULE: external "@ethersproject/bignumber"
var bignumber_ = __webpack_require__(1446);
;// CONCATENATED MODULE: ./src/functions/math.ts

const ZERO = bignumber_.BigNumber.from('0');
function e10(exponent) {
  return BigNumber.from('10').pow(BigNumber.from(exponent));
}
function minimum(...values) {
  let lowest = BigNumber.from(values[0]);

  for (let i = 1; i < values.length; i++) {
    const value = BigNumber.from(values[i]);

    if (value.lt(lowest)) {
      lowest = value;
    }
  }

  return lowest;
}
function maximum(...values) {
  let highest = BigNumber.from(values[0]);

  for (let i = 1; i < values.length; i++) {
    const value = BigNumber.from(values[i]);

    if (value.gt(highest)) {
      highest = value;
    }
  }

  return highest;
}
function truncate(value, index = 4) {
  // cutting the number
  if (value.toString().indexOf('.') > -1) {
    return value.toString().slice(0, value.toString().indexOf('.') + (index + 1));
  }

  return value;
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
// EXTERNAL MODULE: ./src/functions/validate.ts
var validate = __webpack_require__(2556);
;// CONCATENATED MODULE: ./src/functions/styling.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
// EXTERNAL MODULE: ./src/functions/trade.ts
var trade = __webpack_require__(4113);
;// CONCATENATED MODULE: ./src/functions/index.ts








/***/ }),

/***/ 4113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ calculateGasMargin)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1446);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__);
 // add 20%

function calculateGasMargin(value) {
  return value.mul(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(10000 + 2000)).div(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(10000));
}

/***/ })

};
;