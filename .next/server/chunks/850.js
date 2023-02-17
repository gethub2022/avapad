exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 3711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProjectCard)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1212);
/* harmony import */ var _hooks_useLaunchpadPools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3917);
/* harmony import */ var _hooks_usePoolTimings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3144);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8100);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







function ProjectCard({
  pool,
  isAdmin = false
}) {
  const {
    data: poolData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__/* .default */ .ZP)(`pool/${pool.address}`, async () => {
    return fetch(`https://infura-ipfs.io/ipfs/${pool.ipfsHash}`).then(res => res.json());
  });
  const data = (0,_hooks_useLaunchpadPools__WEBPACK_IMPORTED_MODULE_1__/* .useSinglePoolData */ .Se)(pool.address);
  const {
    isActive,
    isEnded,
    isUpcomming,
    registerStartsIn,
    registerEndsIn,
    registerEndedAgo,
    saleLiveIn,
    saleEndedAgo,
    saleEndsIn
  } = (0,_hooks_usePoolTimings__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(data);
  const cap = data ? (0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .fromWei */ .mb)(data.rate.mul(data.tokensForSale), 36) : 0;
  const progress = data ? Number((0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .fromWei */ .mb)(data.tokensSold)) / Number((0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .fromWei */ .mb)(data.tokensForSale)) * 100 : 0;
  const detailUrl = isAdmin ? `/configure/projects/${pool.address}` : `/projects/${pool.address}`;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    className: "text-center col-lg-6",
    children: !poolData || !data ? null : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "single-item",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "pp-card-body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "pp-card-top",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
            href: detailUrl,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: "icon-box",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                  src: poolData.logoUrl,
                  alt: "#"
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "title-box",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h3", {
              className: "d-flex align-items-center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
                href: detailUrl,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  children: poolData.projectName
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "item-social",
              children: [poolData.website && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                href: poolData.website,
                target: "_blank",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
                  className: "fas fa-globe"
                })
              }), poolData.twitter && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                href: poolData.twitter,
                target: "_blank",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
                  className: "fab fa-twitter"
                })
              }), poolData.medium && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                href: poolData.medium,
                target: "_blank",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
                  className: "fab fa-medium-m"
                })
              }), poolData.telegram && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                href: poolData.telegram,
                target: "_blank",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
                  className: "fab fa-telegram"
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
              href: detailUrl,
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                className: "items-morex",
                children: [isActive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                  className: "pp-status-open",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
                    className: "mdi mdi-circle"
                  }), " Active"]
                }), isUpcomming && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                  className: "pp-status-opening",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
                    className: "mdi mdi-circle"
                  }), " Upcoming"]
                }), isEnded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                  className: "pp-status-closed",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
                    className: "mdi mdi-circle"
                  }), " Ended"]
                })]
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mb-1 item-desc",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "item-short-desc",
            children: poolData.description
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "item-learn-more"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
          href: detailUrl,
          passHref: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "part-prize",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "px-0 mb-3 pp-card-info",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "pp-card-col",
                  children: ["Swap Rate", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("b", {
                    className: "nowrap",
                    children: ["1 USD = ", 1 / Number((0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .fromWei */ .mb)(data.rate)), ' ', poolData.symbol]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "pp-card-col text-end ps-286",
                  children: ["Cap", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("b", {
                    children: [cap, " USD"]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "px-0 mb-3 pp-card-info",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "pp-card-col",
                  children: [registerStartsIn && `Registration Starts in ${registerStartsIn}`, registerEndsIn && `Registration Ends in ${registerEndsIn}`, registerEndedAgo && `Registration Ended ${registerEndedAgo}`]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "pp-card-col text-end ps-286",
                  children: [saleLiveIn && `Sale Starts in ${saleLiveIn}`, saleEndsIn && `Sale Ends in ${saleEndsIn}`, saleEndedAgo && `Sale Ended ${saleEndedAgo}`]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "pp-card-progress-wrap",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "mb-2 d-flex justify-content-between align-items-center pp-card-progress-top",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "pp-card-col",
                    children: "Progress"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "pp-card-col text-end",
                    children: ["Participants", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("b", {
                      className: "text-participants font-12",
                      children: data.participants.toString()
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "pp-card-progress",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    title: 9,
                    className: "pp-card-progress-percent",
                    style: {
                      width: `${progress.toString()}%`
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "pp-card-progress-label",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("b", {
                        children: [progress.toString(), "%"]
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                      className: "text-allocation",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("b", {
                        className: true,
                        children: [(0,_functions__WEBPACK_IMPORTED_MODULE_0__/* .fromWei */ .mb)(data.tokensSold), "/", cap]
                      })
                    })]
                  })]
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: "flex justify-end pt-1",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                className: "text-xs text-danger",
                children: "See Details"
              })
            })]
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;