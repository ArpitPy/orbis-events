exports.id = 430;
exports.ids = [430];
exports.modules = {

/***/ 6337:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 7081:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9977))

/***/ }),

/***/ 7601:
/***/ ((module) => {

// Exports
module.exports = {
	"credits": "credits_credits__yCrPu"
};


/***/ }),

/***/ 5518:
/***/ ((module) => {

// Exports
module.exports = {
	"footer_main": "footer_footer_main__KlglN",
	"footer_link": "footer_footer_link__jR8Ks"
};


/***/ }),

/***/ 8349:
/***/ ((module) => {

// Exports
module.exports = {
	"nav_main": "navbar_nav_main__7bGYQ",
	"logo": "navbar_logo__IUgwh",
	"right_nav": "navbar_right_nav__px03q",
	"links": "navbar_links__s4Qio",
	"nav_button": "navbar_nav_button__U6bRU"
};


/***/ }),

/***/ 7637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.js","import":"Poppins","arguments":[{"weight":["300","400","500","600","700","800","900"],"subsets":["latin"],"display":"swap"}],"variableName":"pop"}
var target_path_src_app_layout_js_import_Poppins_arguments_weight_300_400_500_600_700_800_900_subsets_latin_display_swap_variableName_pop_ = __webpack_require__(2674);
var target_path_src_app_layout_js_import_Poppins_arguments_weight_300_400_500_600_700_800_900_subsets_latin_display_swap_variableName_pop_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_js_import_Poppins_arguments_weight_300_400_500_600_700_800_900_subsets_latin_display_swap_variableName_pop_);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./src/app/styles/credits.module.css
var credits_module = __webpack_require__(7601);
var credits_module_default = /*#__PURE__*/__webpack_require__.n(credits_module);
;// CONCATENATED MODULE: ./src/app/components/credits/Credits.js



const Credits = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (credits_module_default()).credits,
        children: "Created with ❤️ by Lord Skeleton"
    });
};
/* harmony default export */ const credits_Credits = (Credits);

// EXTERNAL MODULE: ./src/app/styles/footer.module.css
var footer_module = __webpack_require__(5518);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/app/components/footer/Footer.js





const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (footer_module_default()).footer_main,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/footer.png",
                    alt: "logo",
                    height: 200,
                    width: 200
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (footer_module_default()).footer_link,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            style: {
                                textDecoration: "none"
                            },
                            href: "/events",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Events"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            style: {
                                textDecoration: "none"
                            },
                            href: "/archives",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Archives"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const footer_Footer = (Footer);

// EXTERNAL MODULE: ./src/app/styles/navbar.module.css
var navbar_module = __webpack_require__(8349);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
;// CONCATENATED MODULE: ./src/app/components/navbar/Navbar.js





const Navbar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (navbar_module_default()).nav_main,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (navbar_module_default()).logo,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/logo.png",
                        layout: "responsive",
                        alt: "logo",
                        height: 80,
                        width: 448
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (navbar_module_default()).right_nav,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (navbar_module_default()).links,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    style: {
                                        textDecoration: "none"
                                    },
                                    href: "/events",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Events"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    style: {
                                        textDecoration: "none"
                                    },
                                    href: "/archives",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Archives"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (navbar_module_default()).nav_button,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://discord.gg/jcdZBJyqDW",
                            target: "_blank",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                children: "Join Server"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const navbar_Navbar = (Navbar);

// EXTERNAL MODULE: ./node_modules/@vercel/analytics/dist/react/index.js
var react = __webpack_require__(2690);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
;// CONCATENATED MODULE: ./src/app/layout.js







const metadata = {
    title: "Orbis Events",
    description: "The best community server in Orbis for events, competitions, shows and VCs"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (target_path_src_app_layout_js_import_Poppins_arguments_weight_300_400_500_600_700_800_900_subsets_latin_display_swap_variableName_pop_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(navbar_Navbar, {}),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(react/* Analytics */.c, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(credits_Credits, {})
            ]
        })
    });
}


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"32x32"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;