"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{76892:function(r,e,n){n.r(e);var u=n(67294),t=n(4631),c=n.n(t),a=n(85893);e.default=function(r){var e=r.value,n=r.onChange,t=r.parsedData,o=(0,u.useRef)(null),f=(0,u.useRef)(null),l=(0,u.useCallback)((function(r){n&&n(r.doc.getValue())}),[n]);return(0,u.useEffect)((function(){return o.current&&!f.current?(f.current=c().fromTextArea(o.current,{value:e,lineNumbers:!0}),f.current.on("change",l)):f.current&&f.current.doc.getValue().toString()!==e.toString()&&f.current.doc.setValue(e),f.current&&f.current.on("change",l),function(){f.current&&f.current.off("change",l)}}),[o,e,n,l]),(0,u.useEffect)((function(){if(f.current)for(var r=0;r<f.current.doc.lineCount();r++){var e;null!==(e=t[r])&&void 0!==e&&e.hasError?f.current.doc.addLineClass(r,"wrap","errorLine"):f.current.doc.removeLineClass(r,"wrap","errorLine")}}),[t]),(0,a.jsx)("textarea",{ref:o})}}}]);