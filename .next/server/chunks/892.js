"use strict";
exports.id = 892;
exports.ids = [892];
exports.modules = {

/***/ 6892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7156);
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Editor = ({
  value,
  onChange,
  parsedData
}) => {
  const textAreaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const codeEditor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(editor => {
    if (onChange) onChange(editor.doc.getValue());
  }, [onChange]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (textAreaRef.current && !codeEditor.current) {
      codeEditor.current = codemirror__WEBPACK_IMPORTED_MODULE_1___default().fromTextArea(textAreaRef.current, {
        value: value,
        lineNumbers: true
      });
      codeEditor.current.on('change', handleChange);
    } else if (codeEditor.current && codeEditor.current.doc.getValue().toString() !== value.toString()) {
      codeEditor.current.doc.setValue(value);
    }

    if (codeEditor.current) {
      codeEditor.current.on('change', handleChange);
    }

    return () => {
      if (codeEditor.current) {
        codeEditor.current.off('change', handleChange);
      }
    };
  }, [textAreaRef, value, onChange, handleChange]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (codeEditor.current) {
      for (let i = 0; i < codeEditor.current.doc.lineCount(); i++) {
        var _parsedData$i;

        if ((_parsedData$i = parsedData[i]) !== null && _parsedData$i !== void 0 && _parsedData$i.hasError) {
          codeEditor.current.doc.addLineClass(i, 'wrap', 'errorLine');
        } else {
          codeEditor.current.doc.removeLineClass(i, 'wrap', 'errorLine');
        }
      }
    }
  }, [parsedData]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("textarea", {
    ref: textAreaRef
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);

/***/ })

};
;