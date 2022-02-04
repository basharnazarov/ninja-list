"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/stepper";
exports.ids = ["pages/stepper"];
exports.modules = {

/***/ "./pages/stepper/index.js":
/*!********************************!*\
  !*** ./pages/stepper/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_MobileStepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/MobileStepper */ \"@mui/material/MobileStepper\");\n/* harmony import */ var _mui_material_MobileStepper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MobileStepper__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowLeft */ \"@mui/icons-material/KeyboardArrowLeft\");\n/* harmony import */ var _mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowRight */ \"@mui/icons-material/KeyboardArrowRight\");\n/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-swipeable-views */ \"react-swipeable-views\");\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/system */ \"@mui/system\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\nconst images = [\n    {\n        label: 'San Francisco – Oakland Bay Bridge, United States',\n        imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'\n    },\n    {\n        label: 'Bird',\n        imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60'\n    },\n    {\n        label: 'Bali, Indonesia',\n        imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80'\n    },\n    {\n        label: 'Goč, Serbia',\n        imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60'\n    }, \n];\nfunction SwipeableTextMobileStepper() {\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const [activeStep, setActiveStep] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    const maxSteps = images.length;\n    const handleNext = ()=>{\n        setActiveStep((prevActiveStep)=>prevActiveStep + 1\n        );\n    };\n    const handleBack = ()=>{\n        setActiveStep((prevActiveStep)=>prevActiveStep - 1\n        );\n    };\n    const handleStepChange = (step)=>{\n        setActiveStep(step);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n        sx: {\n            maxWidth: 400,\n            flexGrow: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_swipeable_views__WEBPACK_IMPORTED_MODULE_10___default()), {\n                axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',\n                index: activeStep,\n                onChangeIndex: handleStepChange,\n                enableMouseEvents: true,\n                children: images.map((step, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            component: \"img\",\n                            sx: {\n                                height: 255,\n                                display: 'block',\n                                maxWidth: 400,\n                                overflow: 'hidden',\n                                width: '100%'\n                            },\n                            src: step.imgPath,\n                            alt: step.label\n                        }, void 0, false, {\n                            fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/stepper/index.js\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this)\n                    }, step.label, false, {\n                        fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/stepper/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                )\n            }, void 0, false, {\n                fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/stepper/index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n                style: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    padding: '0',\n                    justifyContent: 'space-around'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_8___default()), {\n                        onClick: handleBack,\n                        disabled: activeStep === 0\n                    }, void 0, false, {\n                        fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/stepper/index.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        style: {\n                            display: 'flex',\n                            padding: '0px'\n                        },\n                        children: images.map((image)=>{\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                component: \"img\",\n                                src: image.imgPath,\n                                sx: {\n                                    maxWidth: 70,\n                                    '&:hover': {\n                                        opacity: '0.6'\n                                    }\n                                }\n                            }, image.label, false, {\n                                fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/stepper/index.js\",\n                                lineNumber: 96,\n                                columnNumber: 15\n                            }, this));\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/stepper/index.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_9___default()), {\n                        onClick: handleNext,\n                        disabled: activeStep === maxSteps - 1\n                    }, void 0, false, {\n                        fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/stepper/index.js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/stepper/index.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/basharnazarov/Desktop/test/ninja-list/pages/stepper/index.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwipeableTextMobileStepper);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsRUFBRWdCLEtBQUssR0FBSyxDQUFDOzRCQUN0QixNQUFNLDZFQUNIL0MsMERBQUc7Z0NBQ0ZpQyxTQUFTLEVBQUMsQ0FBSztnQ0FDZkssR0FBRyxFQUFFUyxLQUFLLENBQUNwQyxPQUFPO2dDQUVsQmEsRUFBRSxFQUFFLENBQUM7b0NBQ0hoQixRQUFRLEVBQUUsRUFBRTtvQ0FDWixDQUFTLFVBQUUsQ0FBQzt3Q0FBQ3dDLE9BQU8sRUFBRSxDQUFLO29DQUFDLENBQUM7Z0NBQy9CLENBQUM7K0JBSklELEtBQUssQ0FBQ3JDLEtBQUs7Ozs7O3dCQU90QixDQUFDOzs7Ozs7Z0dBR0ZKLCtFQUFrQjt3QkFDakJzQyxPQUFPLEVBQUV6QixVQUFVO3dCQUNuQjBCLFFBQVEsRUFBRS9CLFVBQVUsS0FBS0csUUFBUSxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQyxDQUFDO0FBRUQsaUVBQWVMLDBCQUEwQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmluamFsaXN0Ly4vcGFnZXMvc3RlcHBlci9pbmRleC5qcz8xYWE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgTW9iaWxlU3RlcHBlciBmcm9tICdAbXVpL21hdGVyaWFsL01vYmlsZVN0ZXBwZXInO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IEtleWJvYXJkQXJyb3dMZWZ0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0xlZnQnO1xuaW1wb3J0IEtleWJvYXJkQXJyb3dSaWdodCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dSaWdodCc7XG5pbXBvcnQgU3dpcGVhYmxlVmlld3MgZnJvbSAncmVhY3Qtc3dpcGVhYmxlLXZpZXdzJztcbmltcG9ydCB7IG1heFdpZHRoIH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xuXG5jb25zdCBpbWFnZXMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ1NhbiBGcmFuY2lzY28g4oCTIE9ha2xhbmQgQmF5IEJyaWRnZSwgVW5pdGVkIFN0YXRlcycsXG4gICAgaW1nUGF0aDpcbiAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzNzk0NDQzNDk2NS1jZjQ2NzlkMWE1OTg/YXV0bz1mb3JtYXQmZml0PWNyb3Amdz00MDAmaD0yNTAmcT02MCcsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0JpcmQnLFxuICAgIGltZ1BhdGg6XG4gICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzgwMzI3NDY2NDQtMDIxMmU4MTJhOWU3P2F1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NDAwJmg9MjUwJnE9NjAnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdCYWxpLCBJbmRvbmVzaWEnLFxuICAgIGltZ1BhdGg6XG4gICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Mzc5OTYxOTQ0NzEtZTY1N2RmOTc1YWI0P2F1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NDAwJmg9MjUwJnE9ODAnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdHb8SNLCBTZXJiaWEnLFxuICAgIGltZ1BhdGg6XG4gICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTIzNDE2ODk4NTctMTk4ZTdlMmYzY2E4P2F1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NDAwJmg9MjUwJnE9NjAnLFxuICB9LFxuXTtcblxuZnVuY3Rpb24gU3dpcGVhYmxlVGV4dE1vYmlsZVN0ZXBwZXIoKSB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgW2FjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXBdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IG1heFN0ZXBzID0gaW1hZ2VzLmxlbmd0aDtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCArIDEpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwIC0gMSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3RlcENoYW5nZSA9IChzdGVwKSA9PiB7XG4gICAgc2V0QWN0aXZlU3RlcChzdGVwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3sgbWF4V2lkdGg6IDQwMCwgZmxleEdyb3c6IDEgfX0+XG4gICAgICB7LyogPE1vYmlsZVN0ZXBwZXJcbiAgICAgICAgc3RlcHM9e21heFN0ZXBzfVxuICAgICAgICBwb3NpdGlvbj1cInN0YXRpY1wiXG4gICAgICAgIGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9XG4gICAgICAvPiAqL31cbiAgICAgIDxTd2lwZWFibGVWaWV3c1xuICAgICAgICBheGlzPXt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3gtcmV2ZXJzZScgOiAneCd9XG4gICAgICAgIGluZGV4PXthY3RpdmVTdGVwfVxuICAgICAgICBvbkNoYW5nZUluZGV4PXtoYW5kbGVTdGVwQ2hhbmdlfVxuICAgICAgICBlbmFibGVNb3VzZUV2ZW50c1xuICAgICAgPlxuICAgICAgICB7aW1hZ2VzLm1hcCgoc3RlcCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17c3RlcC5sYWJlbH0+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTUsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDAwLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBzcmM9e3N0ZXAuaW1nUGF0aH1cbiAgICAgICAgICAgICAgYWx0PXtzdGVwLmxhYmVsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L1N3aXBlYWJsZVZpZXdzPlxuXG4gICAgICA8Qm94XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIHBhZGRpbmc6ICcwJyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxLZXlib2FyZEFycm93TGVmdCBvbkNsaWNrPXtoYW5kbGVCYWNrfSBkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH0gLz5cbiAgICAgICAgPHVsIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgcGFkZGluZzogJzBweCcgfX0+XG4gICAgICAgICAge2ltYWdlcy5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICBzcmM9e2ltYWdlLmltZ1BhdGh9XG4gICAgICAgICAgICAgICAga2V5PXtpbWFnZS5sYWJlbH1cbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDcwLFxuICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7IG9wYWNpdHk6ICcwLjYnIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPEtleWJvYXJkQXJyb3dSaWdodFxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IG1heFN0ZXBzIC0gMX1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTd2lwZWFibGVUZXh0TW9iaWxlU3RlcHBlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVRoZW1lIiwiQm94IiwiTW9iaWxlU3RlcHBlciIsIlBhcGVyIiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsIktleWJvYXJkQXJyb3dMZWZ0IiwiS2V5Ym9hcmRBcnJvd1JpZ2h0IiwiU3dpcGVhYmxlVmlld3MiLCJtYXhXaWR0aCIsImltYWdlcyIsImxhYmVsIiwiaW1nUGF0aCIsIlN3aXBlYWJsZVRleHRNb2JpbGVTdGVwcGVyIiwidGhlbWUiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsInVzZVN0YXRlIiwibWF4U3RlcHMiLCJsZW5ndGgiLCJoYW5kbGVOZXh0IiwicHJldkFjdGl2ZVN0ZXAiLCJoYW5kbGVCYWNrIiwiaGFuZGxlU3RlcENoYW5nZSIsInN0ZXAiLCJzeCIsImZsZXhHcm93IiwiYXhpcyIsImRpcmVjdGlvbiIsImluZGV4Iiwib25DaGFuZ2VJbmRleCIsImVuYWJsZU1vdXNlRXZlbnRzIiwibWFwIiwiZGl2IiwiY29tcG9uZW50IiwiaGVpZ2h0IiwiZGlzcGxheSIsIm92ZXJmbG93Iiwid2lkdGgiLCJzcmMiLCJhbHQiLCJzdHlsZSIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwianVzdGlmeUNvbnRlbnQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJ1bCIsImltYWdlIiwib3BhY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/stepper/index.js\n");

/***/ }),

/***/ "@mui/icons-material/KeyboardArrowLeft":
/*!********************************************************!*\
  !*** external "@mui/icons-material/KeyboardArrowLeft" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowLeft");

/***/ }),

/***/ "@mui/icons-material/KeyboardArrowRight":
/*!*********************************************************!*\
  !*** external "@mui/icons-material/KeyboardArrowRight" ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowRight");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/MobileStepper":
/*!**********************************************!*\
  !*** external "@mui/material/MobileStepper" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/MobileStepper");

/***/ }),

/***/ "@mui/material/Paper":
/*!**************************************!*\
  !*** external "@mui/material/Paper" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-swipeable-views":
/*!****************************************!*\
  !*** external "react-swipeable-views" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/stepper/index.js"));
module.exports = __webpack_exports__;

})();