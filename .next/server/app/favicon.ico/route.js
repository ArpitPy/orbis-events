"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 9075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=C%3A%5CArpit%5CCoding%5Corbisevents%5Csrc%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!C:\\Arpit\\Coding\\orbisevents\\src\\app\\favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,218], () => (__webpack_exec__(9075)));
module.exports = __webpack_exports__;

})();