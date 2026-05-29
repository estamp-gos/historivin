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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/index.scss */ \"./src/index.scss\");\n/* harmony import */ var _src_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_styles_glassmorphism_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/styles/glassmorphism.css */ \"./src/styles/glassmorphism.css\");\n/* harmony import */ var _src_styles_glassmorphism_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_styles_glassmorphism_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Import Bootstrap JS only on client side\n        __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ \"bootstrap/dist/js/bootstrap.bundle.min\");\n        // Performance monitoring\n        if (false) {}\n        // Scroll animation initialization\n        const initScrollAnimations = ()=>{\n            const scrollElements = document.querySelectorAll(\"[data-scroll], .scroll-section\");\n            if (scrollElements.length === 0) return;\n            const observer = new IntersectionObserver((entries)=>{\n                entries.forEach((entry)=>{\n                    if (entry.isIntersecting) {\n                        entry.target.classList.add(\"scroll-visible\");\n                        observer.unobserve(entry.target);\n                    }\n                });\n            }, {\n                threshold: 0.05,\n                rootMargin: \"0px 0px -20px 0px\"\n            });\n            scrollElements.forEach((el)=>observer.observe(el));\n            return ()=>{\n                scrollElements.forEach((el)=>observer.unobserve(el));\n            };\n        };\n        // Run after a small delay to ensure DOM is ready\n        const timeoutId = setTimeout(initScrollAnimations, 100);\n        return ()=>{\n            clearTimeout(timeoutId);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\historivin\\\\historivin\\\\pages\\\\_app.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\historivin\\\\historivin\\\\pages\\\\_app.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\historivin\\\\historivin\\\\pages\\\\_app.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\historivin\\\\historivin\\\\pages\\\\_app.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\historivin\\\\historivin\\\\pages\\\\_app.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\historivin\\\\historivin\\\\pages\\\\_app.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"https://www.googletagmanager.com/gtag/js?id=G-0C0XXT0XX7\",\n                strategy: \"afterInteractive\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\historivin\\\\historivin\\\\pages\\\\_app.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"google-analytics\",\n                strategy: \"afterInteractive\",\n                children: `\r\n          window.dataLayer = window.dataLayer || [];\r\n          function gtag(){dataLayer.push(arguments);}\r\n          gtag('js', new Date());\r\n          gtag('config', 'G-0C0XXT0XX7');\r\n        `\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\historivin\\\\historivin\\\\pages\\\\_app.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\historivin\\\\historivin\\\\pages\\\\_app.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0k7QUFDQztBQUNQO0FBQ2M7QUFFMUIsU0FBU0csSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsREgsZ0RBQVNBLENBQUM7UUFDUiwwQ0FBMEM7UUFDMUNJLG1CQUFPQSxDQUFDO1FBRVIseUJBQXlCO1FBQ3pCLElBQUksS0FBd0RDLEVBQUUsRUFnQjdEO1FBRUQsa0NBQWtDO1FBQ2xDLE1BQU1TLHVCQUF1QjtZQUMzQixNQUFNQyxpQkFBaUJDLFNBQVNDLGdCQUFnQixDQUFDO1lBRWpELElBQUlGLGVBQWVHLE1BQU0sS0FBSyxHQUFHO1lBRWpDLE1BQU1DLFdBQVcsSUFBSUMscUJBQXFCLENBQUNDO2dCQUN6Q0EsUUFBUUMsT0FBTyxDQUFDLENBQUNDO29CQUNmLElBQUlBLE1BQU1DLGNBQWMsRUFBRTt3QkFDeEJELE1BQU1FLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7d0JBQzNCUixTQUFTUyxTQUFTLENBQUNMLE1BQU1FLE1BQU07b0JBQ2pDO2dCQUNGO1lBQ0YsR0FBRztnQkFDREksV0FBVztnQkFDWEMsWUFBWTtZQUNkO1lBRUFmLGVBQWVPLE9BQU8sQ0FBQyxDQUFDUyxLQUFPWixTQUFTYSxPQUFPLENBQUNEO1lBRWhELE9BQU87Z0JBQ0xoQixlQUFlTyxPQUFPLENBQUMsQ0FBQ1MsS0FBT1osU0FBU1MsU0FBUyxDQUFDRztZQUNwRDtRQUNGO1FBRUEsaURBQWlEO1FBQ2pELE1BQU1FLFlBQVlDLFdBQVdwQixzQkFBc0I7UUFFbkQsT0FBTztZQUNMcUIsYUFBYUY7UUFDZjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ25DLGtEQUFJQTs7a0NBQ0gsOERBQUNzQzt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7OztrQ0FFdEIsOERBQUNGO3dCQUFLQyxLQUFJO3dCQUFhQyxNQUFLOzs7Ozs7a0NBQzVCLDhEQUFDRjt3QkFBS0MsS0FBSTt3QkFBYUMsTUFBSzt3QkFBNEJDLGFBQVk7Ozs7OztrQ0FDcEUsOERBQUNIO3dCQUFLRSxNQUFLO3dCQUFtSUQsS0FBSTs7Ozs7Ozs7Ozs7OzBCQUlwSiw4REFBQ3pDLG9EQUFNQTtnQkFDTDRDLEtBQUk7Z0JBQ0pDLFVBQVM7Ozs7OzswQkFFWCw4REFBQzdDLG9EQUFNQTtnQkFBQzhDLElBQUc7Z0JBQW1CRCxVQUFTOzBCQUNwQyxDQUFDOzs7OztRQUtGLENBQUM7Ozs7OzswQkFHSCw4REFBQzFDO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGlzdG9yaXZpbi8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgU2NyaXB0IGZyb20gJ25leHQvc2NyaXB0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4uL3NyYy9pbmRleC5zY3NzJztcclxuaW1wb3J0ICcuLi9zcmMvc3R5bGVzL2dsYXNzbW9ycGhpc20uY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gSW1wb3J0IEJvb3RzdHJhcCBKUyBvbmx5IG9uIGNsaWVudCBzaWRlXHJcbiAgICByZXF1aXJlKCdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbicpO1xyXG4gICAgXHJcbiAgICAvLyBQZXJmb3JtYW5jZSBtb25pdG9yaW5nXHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3BlcmZvcm1hbmNlJyBpbiB3aW5kb3cpIHtcclxuICAgICAgLy8gTG9nIENvcmUgV2ViIFZpdGFsc1xyXG4gICAgICBjb25zdCByZXBvcnRXZWJWaXRhbHMgPSAobWV0cmljKSA9PiB7XHJcbiAgICAgICAgLy8gV2ViIHZpdGFscyBjYW4gYmUgc2VudCB0byBhbmFseXRpY3MgaGVyZSBpZiBuZWVkZWRcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIC8vIE1vbml0b3IgTENQLCBGSUQsIENMU1xyXG4gICAgICBpZiAoJ3dlYi12aXRhbHMnIGluIHdpbmRvdykge1xyXG4gICAgICAgIGltcG9ydCgnd2ViLXZpdGFscycpLnRoZW4oKHsgZ2V0TENQLCBnZXRGSUQsIGdldENMUywgZ2V0RkNQLCBnZXRUVEZCIH0pID0+IHtcclxuICAgICAgICAgIGdldExDUChyZXBvcnRXZWJWaXRhbHMpO1xyXG4gICAgICAgICAgZ2V0RklEKHJlcG9ydFdlYlZpdGFscyk7XHJcbiAgICAgICAgICBnZXRDTFMocmVwb3J0V2ViVml0YWxzKTtcclxuICAgICAgICAgIGdldEZDUChyZXBvcnRXZWJWaXRhbHMpO1xyXG4gICAgICAgICAgZ2V0VFRGQihyZXBvcnRXZWJWaXRhbHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNjcm9sbCBhbmltYXRpb24gaW5pdGlhbGl6YXRpb25cclxuICAgIGNvbnN0IGluaXRTY3JvbGxBbmltYXRpb25zID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBzY3JvbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNjcm9sbF0sIC5zY3JvbGwtc2VjdGlvbicpO1xyXG4gICAgICBcclxuICAgICAgaWYgKHNjcm9sbEVsZW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICBcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdGhyZXNob2xkOiAwLjA1LFxyXG4gICAgICAgIHJvb3RNYXJnaW46ICcwcHggMHB4IC0yMHB4IDBweCdcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBzY3JvbGxFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbCkpO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBzY3JvbGxFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKSk7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvLyBSdW4gYWZ0ZXIgYSBzbWFsbCBkZWxheSB0byBlbnN1cmUgRE9NIGlzIHJlYWR5XHJcbiAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGluaXRTY3JvbGxBbmltYXRpb25zLCAxMDApO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiIC8+XHJcbiAgICAgICAgey8qIEdvb2dsZSBGb250cyAtIEludGVyICYgUG9wcGlucyAqL31cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICBcclxuICAgICAgey8qIEdvb2dsZSBBbmFseXRpY3MgKi99XHJcbiAgICAgIDxTY3JpcHRcclxuICAgICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctMEMwWFhUMFhYN1wiXHJcbiAgICAgICAgc3RyYXRlZ3k9XCJhZnRlckludGVyYWN0aXZlXCJcclxuICAgICAgLz5cclxuICAgICAgPFNjcmlwdCBpZD1cImdvb2dsZS1hbmFseXRpY3NcIiBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIj5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgZ3RhZygnY29uZmlnJywgJ0ctMEMwWFhUMFhYNycpO1xyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvU2NyaXB0PlxyXG4gICAgICBcclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsIlNjcmlwdCIsInVzZUVmZmVjdCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlcXVpcmUiLCJ3aW5kb3ciLCJyZXBvcnRXZWJWaXRhbHMiLCJtZXRyaWMiLCJ0aGVuIiwiZ2V0TENQIiwiZ2V0RklEIiwiZ2V0Q0xTIiwiZ2V0RkNQIiwiZ2V0VFRGQiIsImluaXRTY3JvbGxBbmltYXRpb25zIiwic2Nyb2xsRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwidW5vYnNlcnZlIiwidGhyZXNob2xkIiwicm9vdE1hcmdpbiIsImVsIiwib2JzZXJ2ZSIsInRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNyb3NzT3JpZ2luIiwic3JjIiwic3RyYXRlZ3kiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/glassmorphism.css":
/*!**************************************!*\
  !*** ./src/styles/glassmorphism.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "bootstrap/dist/js/bootstrap.bundle.min":
/*!*********************************************************!*\
  !*** external "bootstrap/dist/js/bootstrap.bundle.min" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("bootstrap/dist/js/bootstrap.bundle.min");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();