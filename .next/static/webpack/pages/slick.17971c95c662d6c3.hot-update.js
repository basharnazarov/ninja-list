"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/slick",{

/***/ "./pages/slick/index.js":
/*!******************************!*\
  !*** ./pages/slick/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AsNavFor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar images = [\n    {\n        label: 'San Francisco – Oakland Bay Bridge, United States',\n        imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'\n    },\n    {\n        label: 'Bird',\n        imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60'\n    },\n    {\n        label: 'Bali, Indonesia',\n        imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80'\n    },\n    {\n        label: 'Goč, Serbia',\n        imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60'\n    }, \n];\nvar AsNavFor = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(AsNavFor, Component1);\n    var _super = _createSuper(AsNavFor);\n    function AsNavFor(props) {\n        _classCallCheck(this, AsNavFor);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            nav1: null,\n            nav2: null\n        };\n        return _this;\n    }\n    _createClass(AsNavFor, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                this.setState({\n                    nav1: this.slider1,\n                    nav2: this.slider2\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Slider Syncing (AsNavFor)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/slick/index.js\",\n                            lineNumber: 49,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"First Slider\"\n                        }, void 0, false, {\n                            fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/slick/index.js\",\n                            lineNumber: 50,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            asNavFor: this.state.nav2,\n                            ref: function(slider) {\n                                return _this.slider1 = slider;\n                            },\n                            children: images.map(function(image) {\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: image.imgPath,\n                                        style: {\n                                            width: '100%',\n                                            height: '300px'\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/slick/index.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/slick/index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, _this));\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/slick/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"Second Slider\"\n                        }, void 0, false, {\n                            fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/slick/index.js\",\n                            lineNumber: 66,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            asNavFor: this.state.nav1,\n                            ref: function(slider) {\n                                return _this.slider2 = slider;\n                            },\n                            slidesToShow: 3,\n                            swipeToSlide: true,\n                            focusOnSelect: true,\n                            children: images.map(function(image) {\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: image.imgPath\n                                    }, void 0, false, {\n                                        fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/slick/index.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/slick/index.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, _this));\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/slick/index.js\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/slick/index.js\",\n                    lineNumber: 48,\n                    columnNumber: 7\n                }, this));\n            }\n        }\n    ]);\n    return AsNavFor;\n}(react__WEBPACK_IMPORTED_MODULE_3__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zbGljay9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDTTtBQUVMO0FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLEdBQUssQ0FBQ0csTUFBTSxHQUFHLENBQUM7SUFDZCxDQUFDO1FBQ0NDLEtBQUssRUFBRSxDQUFtRDtRQUN4REMsT0FBSyxFQUNMLENBQW9HO0lBQ3hHLENBQUM7SUFDRCxDQUFDO1FBQ0NELEtBQUssRUFBRSxDQUFNO1FBQ2JDLE9BQU8sRUFDTCxDQUFvRztJQUN4RyxDQUFDO0lBQ0QsQ0FBQztRQUNDRCxLQUFLLEVBQUUsQ0FBaUI7UUFDeEJDLE9BQU8sRUFDTCxDQUFvRztJQUN4RyxDQUFDO0lBQ0QsQ0FBQztRQUNDRCxLQUFLLEVBQUUsQ0FBYTtRQUNwQkMsT0FBTyxFQUNMLENBQW9HO0lBQ3hHLENBQUM7QUFDSCxDQUFDO0lBRW9CQyxRQUFRLGlCQUFkLFFBQVE7Ozs7YUFBRkEsUUFBUSxDQUNmQyxLQUFLOzs7a0NBQ1RBLEtBQUs7Y0FDTkMsS0FBSyxHQUFHLENBQUM7WUFDWkMsSUFBSSxFQUFFLElBQUk7WUFDVkMsSUFBSSxFQUFFLElBQUk7UUFDWixDQUFDOzs7OztZQUdIQyxHQUFpQixFQUFqQkEsQ0FBaUI7bUJBQWpCQSxRQUFRLENBQVJBLGlCQUFpQixHQUFHLENBQUM7Z0JBQ25CLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7b0JBQ2JILElBQUksRUFBRSxJQUFJLENBQUNJLE9BQU87b0JBQ2xCSCxJQUFJLEVBQUUsSUFBSSxDQUFDSSxPQUFPO2dCQUNwQixDQUFDO1lBQ0gsQ0FBQzs7O1lBRURDLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLEdBQUcsQ0FBQzs7Z0JBQ1IsTUFBTSw2RUFDSEMsQ0FBRzs7b0dBQ0RDLENBQUU7c0NBQUMsQ0FBeUI7Ozs7OztvR0FDNUJDLENBQUU7c0NBQUMsQ0FBWTs7Ozs7O29HQUNmaEIsbURBQU07NEJBQ0xpQixRQUFRLEVBQUUsSUFBSSxDQUFDWCxLQUFLLENBQUNFLElBQUk7NEJBQ3pCVSxHQUFHLEVBQUUsUUFBUSxDQUFQQyxNQUFNO2dDQUFLLE1BQU1SLE9BQUFBLE9BQU8sR0FBR1EsTUFBTTs7c0NBRXRDbEIsTUFBTSxDQUFDbUIsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7Z0NBQ3RCLE1BQU0sNkVBQ0hQLENBQUc7MEhBQ0RRLENBQUc7d0NBQ0ZDLEdBQUcsRUFBRUYsS0FBSyxDQUFDbEIsT0FBTzt3Q0FDbEJxQixLQUFLLEVBQUUsQ0FBQzs0Q0FBQ0MsS0FBSyxFQUFFLENBQU07NENBQUVDLE1BQU0sRUFBRSxDQUFPO3dDQUFDLENBQUM7Ozs7Ozs7Ozs7OzRCQUlqRCxDQUFDOzs7Ozs7b0dBRUZWLENBQUU7c0NBQUMsQ0FBYTs7Ozs7O29HQUNoQmhCLG1EQUFNOzRCQUNMaUIsUUFBUSxFQUFFLElBQUksQ0FBQ1gsS0FBSyxDQUFDQyxJQUFJOzRCQUN6QlcsR0FBRyxFQUFFLFFBQVEsQ0FBUEMsTUFBTTtnQ0FBSyxNQUFNUCxPQUFBQSxPQUFPLEdBQUdPLE1BQU07OzRCQUN2Q1EsWUFBWSxFQUFFLENBQUM7NEJBQ2ZDLFlBQVksRUFBRSxJQUFJOzRCQUNsQkMsYUFBYSxFQUFFLElBQUk7c0NBRWxCNUIsTUFBTSxDQUFDbUIsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7Z0NBQ3RCLE1BQU0sNkVBQ0hQLENBQUc7MEhBQ0RRLENBQUc7d0NBQUNDLEdBQUcsRUFBRUYsS0FBSyxDQUFDbEIsT0FBTzs7Ozs7Ozs7Ozs7NEJBRzdCLENBQUM7Ozs7Ozs7Ozs7OztZQUlULENBQUM7Ozs7RUF0RG1DSiw0Q0FBUztBQUFsQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zbGljay9pbmRleC5qcz84MTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzJztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzJztcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snO1xuXG5jb25zdCBpbWFnZXMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ1NhbiBGcmFuY2lzY28g4oCTIE9ha2xhbmQgQmF5IEJyaWRnZSwgVW5pdGVkIFN0YXRlcycsXG4gICAgaW1nUGF0aDpcbiAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzNzk0NDQzNDk2NS1jZjQ2NzlkMWE1OTg/YXV0bz1mb3JtYXQmZml0PWNyb3Amdz00MDAmaD0yNTAmcT02MCcsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0JpcmQnLFxuICAgIGltZ1BhdGg6XG4gICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzgwMzI3NDY2NDQtMDIxMmU4MTJhOWU3P2F1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NDAwJmg9MjUwJnE9NjAnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdCYWxpLCBJbmRvbmVzaWEnLFxuICAgIGltZ1BhdGg6XG4gICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Mzc5OTYxOTQ0NzEtZTY1N2RmOTc1YWI0P2F1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NDAwJmg9MjUwJnE9ODAnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdHb8SNLCBTZXJiaWEnLFxuICAgIGltZ1BhdGg6XG4gICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTIzNDE2ODk4NTctMTk4ZTdlMmYzY2E4P2F1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NDAwJmg9MjUwJnE9NjAnLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNOYXZGb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmF2MTogbnVsbCxcbiAgICAgIG5hdjI6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmF2MTogdGhpcy5zbGlkZXIxLFxuICAgICAgbmF2MjogdGhpcy5zbGlkZXIyLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+U2xpZGVyIFN5bmNpbmcgKEFzTmF2Rm9yKTwvaDI+XG4gICAgICAgIDxoND5GaXJzdCBTbGlkZXI8L2g0PlxuICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgYXNOYXZGb3I9e3RoaXMuc3RhdGUubmF2Mn1cbiAgICAgICAgICByZWY9eyhzbGlkZXIpID0+ICh0aGlzLnNsaWRlcjEgPSBzbGlkZXIpfVxuICAgICAgICA+XG4gICAgICAgICAge2ltYWdlcy5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2UuaW1nUGF0aH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzMwMHB4JyB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgIDxoND5TZWNvbmQgU2xpZGVyPC9oND5cbiAgICAgICAgPFNsaWRlclxuICAgICAgICAgIGFzTmF2Rm9yPXt0aGlzLnN0YXRlLm5hdjF9XG4gICAgICAgICAgcmVmPXsoc2xpZGVyKSA9PiAodGhpcy5zbGlkZXIyID0gc2xpZGVyKX1cbiAgICAgICAgICBzbGlkZXNUb1Nob3c9ezN9XG4gICAgICAgICAgc3dpcGVUb1NsaWRlPXt0cnVlfVxuICAgICAgICAgIGZvY3VzT25TZWxlY3Q9e3RydWV9XG4gICAgICAgID5cbiAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlLmltZ1BhdGh9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJTbGlkZXIiLCJpbWFnZXMiLCJsYWJlbCIsImltZ1BhdGgiLCJBc05hdkZvciIsInByb3BzIiwic3RhdGUiLCJuYXYxIiwibmF2MiIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0U3RhdGUiLCJzbGlkZXIxIiwic2xpZGVyMiIsInJlbmRlciIsImRpdiIsImgyIiwiaDQiLCJhc05hdkZvciIsInJlZiIsInNsaWRlciIsIm1hcCIsImltYWdlIiwiaW1nIiwic3JjIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInNsaWRlc1RvU2hvdyIsInN3aXBlVG9TbGlkZSIsImZvY3VzT25TZWxlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/slick/index.js\n");

/***/ })

});