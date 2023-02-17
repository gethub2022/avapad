"use strict";
exports.id = 746;
exports.ids = [746];
exports.modules = {

/***/ 3746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X5": () => (/* binding */ ProjectInfoSchema),
/* harmony export */   "ef": () => (/* binding */ PoolClaimSchema),
/* harmony export */   "bY": () => (/* binding */ PoolSaleConfigSchema),
/* harmony export */   "sm": () => (/* binding */ PoolSaleTimeSchema),
/* harmony export */   "P": () => (/* binding */ DefiPoolSchema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9440);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4879);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1289);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ProjectInfoSchema = (0,yup__WEBPACK_IMPORTED_MODULE_0__.object)({
  website: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().url('Must be a url').required("Website can't be empty"),
  logoUrl: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().url('Must be a url').required("Logo can't be empty")
});
const PoolClaimSchema = (0,yup__WEBPACK_IMPORTED_MODULE_0__.object)({
  // tgePercentage: number()
  //   .positive('Vesting first release must be positive')
  //   .max(100, 'Max 100%')
  //   .required(),
  // interval:
  //   number()
  //     .integer('Vesting Interval must be integer')
  //     .min(1, 'Vesting Interval must be greater than 1 days')
  //     .positive('Vesting Interval must be positive')
  //     .required(),
  // vestingPercentage:
  //   number().when(
  //     'tgePercentage',
  //     (vestingFirstRelease, schema) => {
  //       return schema
  //         .positive('Vesting Percentage must be positive')
  //         .min(1, 'Vesting Percentage must be greater than 1')
  //         .test(
  //           'isValid',
  //           'First release for presale and Presale token release each Percentage must be less than 100 percent',
  //           (value) => {
  //             return value + vestingFirstRelease < 100;
  //           },
  //         )
  //         .required()
  //     },
  //   ),
  endTime: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().transform(value => value ? value : '').required(),
  // tgeStartTime: string()
  //   .transform((value) => (value ? value : ''))
  //   .when("endTime", (endTime, schema) => {
  //     return schema
  //       .transform((value) => (value ? value : ''))
  //       .test('isValid', "TGE StartTime can't be empty", (value) => {
  //         return moment(value).isValid();
  //       })
  //       .test(
  //         'isAfterEndTime',
  //         'TGE Start Time must be after Sale End Time',
  //         (value) => {
  //           return moment(value).utc().isAfter(moment(endTime).utc());
  //         },
  //       )
  //   })
  //   .required('StartTime is required'),
  claims: (0,yup__WEBPACK_IMPORTED_MODULE_0__.array)().of((0,yup__WEBPACK_IMPORTED_MODULE_0__.object)().shape({
    unlockTime: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().transform(value => value ? value : '').when("endTime", (endTime, schema) => {
      return schema.transform(value => value ? value : '').test('isValid', "Claim Time can't be empty", value => {
        return moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(value).isValid();
      }).test('isAfterEndTime', 'Claim Time must be after Sale End Time', value => {
        console.log(value, endTime, moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(value).utc().isAfter(moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(endTime).utc()));
        return moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(value).utc().isAfter(moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(endTime).utc());
      });
    }).required('Claim Time is required'),
    percentage: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().required()
  })),
  token: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().test('token', 'Please Enter a Valid Address', value => ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.utils.isAddress(value)).test('notNullAddress', 'Please Enter a Valid Address', value => value !== "0x0000000000000000000000000000000000000000").required("Token is Required")
});
const PoolSaleConfigSchema = (0,yup__WEBPACK_IMPORTED_MODULE_0__.object)({
  rate: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().positive('Rate must be positive number').required('Rate is required'),
  tokensForSale: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().positive('Number of tokens must be positive number').required('This field is required'),
  minBuy: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().min(0, 'Min Buy can not be nagative ').required('This field is required'),
  maxBuy: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().min((0,yup__WEBPACK_IMPORTED_MODULE_0__.ref)("minBuy"), 'Max Buy can not be nagative ').required('This field is required')
});
const PoolSaleTimeSchema = (0,yup__WEBPACK_IMPORTED_MODULE_0__.object)({
  registrationStartTime: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().transform(value => value ? value : '').when('startTime', (startTime, schema) => {
    return schema.test('isValid', "Registration time can't be empty", value => {
      return value ? moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(value).isValid() : true;
    }).test('isBeforeStartTime', 'Registration time must be before StartTime', value => {
      return value ? moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(value).utc().isBefore(moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(startTime).utc()) : true;
    });
  }).optional(),
  registrationDuration: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().when(['startTime', 'registrationStartTime'], (startTime, registrationStartTime, schema) => {
    return !registrationStartTime ? schema.optional() : schema.positive("Registration duration can't be negative").integer("Registration duration can't be decimal").test('isValid', 'Register end must be before the start time', value => {
      return value ? moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(registrationStartTime).add(value, 'hours').utc().isBefore(moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(startTime).utc()) : true;
    }).required("Registration duration can't be empty");
  }),
  fcfsDuration: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().min(0, "FCFS duration can't be negative").integer("FCFS duration can't be decimal").optional(),
  startTime: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().transform(value => value ? value : '').test('isValid', "StartTime can't be empty", value => {
    return moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(value).isValid();
  }).required('StartTime is required'),
  endTime: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().transform(value => value ? value : '').when('startTime', (startTime, schema) => {
    return schema.test('isValid', "EndTime can't be empty", value => {
      return moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(value).isValid();
    }).test('isAfterStartTime', 'EndTime must be after StartTime', value => {
      return moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(value).utc().isAfter(moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(startTime).utc());
    });
  }).required('Endtime is required')
});
const DefiPoolSchema = (0,yup__WEBPACK_IMPORTED_MODULE_0__.object)().shape({
  projectName: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('Project Name is required'),
  name: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('Token Name is required'),
  symbol: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('Token Symbol is required'),
  startTime: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().transform(value => value ? value : '').test('isValid', "StartTime can't be empty", value => {
    return moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(value).isValid();
  }).test('isFuture', 'StartTime must be in future', value => {
    return moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(value).utc().isAfter(moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()().utc());
  }).required('StartTime is required'),
  endTime: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().transform(value => value ? value : '').when('startTime', (startTime, schema) => {
    return schema.test('isValid', "EndTime can't be empty", value => {
      return moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(value).isValid();
    }).test('isAfterStartTime', 'EndTime must be after StartTime', value => {
      return moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(value).utc().isAfter(moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(startTime).utc());
    });
  }).required('Endtime is required'),
  rate: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().positive('Rate must be positive number').required('Rate is required'),
  whitelist: (0,yup__WEBPACK_IMPORTED_MODULE_0__.boolean)().required('Whitelist is required'),
  levelsEnabled: (0,yup__WEBPACK_IMPORTED_MODULE_0__.boolean)().required('LevelsEnabled is required'),
  tokensForSale: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().positive('Number of tokens must be positive number').required('This field is required')
});
const PoolSchema = (0,yup__WEBPACK_IMPORTED_MODULE_0__.object)(_objectSpread(_objectSpread({
  // id: string()
  //   .required()
  //   .matches(/^[a-z\s]+$/, "Only small alphabets are allowed for this field "),
  tokenAddress: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().test('tokenAddress', 'Please Enter a Valid Address', value => ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.utils.isAddress(value)).required(),
  tokenName: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required(),
  tokenDecimals: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().min(1).required(),
  tokenSymbol: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required(),
  tokenType: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().oneOf(['ERC-20' //  "BEP-20"
  ]),
  initialSupply: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
  listingON: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required(),
  listingTime: (0,yup__WEBPACK_IMPORTED_MODULE_0__.date)().required(),
  tokenDistribution: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
  // poolAddress: string().when("active", (active, schema) => {
  //   return active
  //     ? schema
  //         .test("poolAddress", "Please Enter a Valid Address", (value) =>
  //           ethers.utils.isAddress(value)
  //         )
  //         .required()
  //     : schema.nullable();
  // }),
  logo: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().url().required(),
  smallLogo: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().url().required(),
  vesting: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
  // private: boolean().required("Private is Required"),
  // softCap: number().required().min(1).required(),
  // hardCap: number().required().min(1).required(),
  // startTime: date()
  //   .required()
  //   .test(
  //     'startTime',
  //     'Start Time has to be in Future',
  //     (value) => new Date(value) > new Date(),
  //   ),
  // endTime: date().when('startTime', (startTime, schema) => {
  //   return startTime ? schema.min(startTime).required() : schema.required();
  // }),
  // claimTime: date().required(),
  // claimerType: string().oneOf(['mov']).required(),
  // price: number().min(0).required(),
  raiseAmount: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().min(0).required(),
  // minRaise: number().min(0).required(),
  // maxRaise: number()
  //   .min(0)
  //   .when('minRaise', (minRaise, schema) => {
  //     return minRaise ? schema.min(minRaise).required() : schema.required();
  //   })
  //   .required(),
  accessType: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().oneOf(['public', 'private', 'privateandpublic']).required(),
  description: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required().max(1500),
  shortDescription: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required().max(300),
  ownerOfRaise: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().test('ownerOfRaise', 'Please Enter a Valid Address', value => ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.utils.isAddress(value)).required(),
  projectName: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required(),
  website: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().url().required(),
  github: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().url().nullable(),
  telegram: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().url().nullable(),
  medium: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().url().nullable(),
  twitter: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().url().nullable()
}, getSaleSchema('public')), getSaleSchema('private')));

function getSaleSchema(prefix) {
  return _objectSpread({
    [`${prefix}StartTime`]: (0,yup__WEBPACK_IMPORTED_MODULE_0__.date)().when('accessType', (accessType, schema) => {
      return accessType === prefix || accessType === 'privateandpublic' ? schema.required().test(`${prefix}StartTime`, `${prefix}Start Time has to be in Future`, value => new Date(value) > new Date()) : schema.nullable();
    }),
    // .required()
    // .test(
    //   `${prefix}StartTime`,
    //   `${prefix}Start Time has to be in Future`,
    //   (value) => new Date(value) > new Date(),
    // ),
    [`${prefix}EndTime`]: (0,yup__WEBPACK_IMPORTED_MODULE_0__.date)().when(['accessType', `${prefix}StartTime`], (accessType, startTime, schema) => {
      return (accessType === prefix || accessType === 'privateandpublic') && startTime ? schema.min(startTime).required() : schema.nullable();
    }),
    [`${prefix}Price`]: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().min(0).when('accessType', (accessType, schema) => {
      return accessType === prefix || accessType === 'privateandpublic' ? schema.min(0).required() : schema.nullable();
    }),
    [`${prefix}TgePercentage`]: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().when(['accessType', `$${prefix}VestingPercentage`], (accessType, vesting, schema) => {
      return accessType === prefix || accessType === 'privateandpublic' ? schema.min(0).max(100 - (vesting !== null && vesting !== void 0 ? vesting : 0)).required() : schema.nullable();
    }),
    [`${prefix}VestingPercentage`]: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().min(0).when(['accessType', `${prefix}TgePercentage`], (accessType, TgePercentage, schema) => {
      return accessType === prefix || accessType === 'privateandpublic' ? schema.min(0).max(100 - (TgePercentage !== null && TgePercentage !== void 0 ? TgePercentage : 0)).required() : schema.nullable();
    }),
    [`${prefix}Cliff`]: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().when('accessType', (accessType, schema) => {
      return accessType === prefix || accessType === 'privateandpublic' ? schema.min(0).required() : schema.nullable();
    }),
    [`${prefix}Interval`]: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().when('accessType', (accessType, schema) => {
      return accessType === prefix || accessType === 'privateandpublic' ? schema.min(0).required() : schema.nullable();
    }),
    [`${prefix}TgeStartTime`]: (0,yup__WEBPACK_IMPORTED_MODULE_0__.date)().when(['accessType', `${prefix}EndTime`], (accessType, saleEndTime, schema) => {
      return (accessType === prefix || accessType === 'privateandpublic') && saleEndTime ? schema.min(saleEndTime).required() : schema.nullable();
    })
  }, prefix === 'public' && {
    [`${prefix}MaxBuy`]: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().min(0).when('accessType', (accessType, schema) => {
      return accessType === prefix || accessType === 'privateandpublic' ? schema.min(0).required() : schema.nullable();
    })
  });
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (PoolSchema)));

/***/ })

};
;