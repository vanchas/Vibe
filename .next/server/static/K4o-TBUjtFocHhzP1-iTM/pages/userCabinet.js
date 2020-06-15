module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zGS3");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2fs/":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/model-4-4ca65055d3a699bda1003c43916157e3.png";

/***/ }),

/***/ "DrGB":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"prices_wrap": "prices_prices_wrap__1ERnn",
	"slide": "prices_slide__1edkr",
	"slide_4": "prices_slide_4__1kgHs",
	"price_item": "prices_price_item__QEPEC",
	"price_subtitle": "prices_price_subtitle__xqOt9",
	"slide_1": "prices_slide_1__4k_04",
	"slide_2": "prices_slide_2__hpVE9",
	"slide_3": "prices_slide_3__9bVWB",
	"price_title": "prices_price_title__2btab",
	"price": "prices_price__oakRh",
	"per_month": "prices_per_month__2VLMW",
	"price_desc_item_1": "prices_price_desc_item_1__S9OsX",
	"price_desc_item_title": "prices_price_desc_item_title__XwTre",
	"description_text_item": "prices_description_text_item__3jUvU",
	"price_desc_item_2": "prices_price_desc_item_2__2in8w",
	"price_desc_item_3": "prices_price_desc_item_3__WcC8d",
	"price_desc_item_4": "prices_price_desc_item_4__15E1O",
	"price_desc_item": "prices_price_desc_item__1cElO"
};


/***/ }),

/***/ "LMd9":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAMAAACjpw26AAAAAXNSR0IB2cksfwAAADxQTFRFAAAA33Cv5Hex5Hex5Hex5Hex5Xax5Hey5Hex5HWv5Hex5Hiy5Hix43ex5Hex5naz43iv5Hex43ix5HiwfELn2AAAABR0Uk5TABCP3//Pf7/vMNBgoLDwUECQgOCWE8qsAAAAeElEQVR4nHWQUQ6EIAwF39stWhSR1fvfVVDUNdT5mkxoCQDg5yuuIzLseu0P9SoF9Ze6rBjkQEmt6oBRTkK4dMQkBhOilRVWFbFPx7fds5UTENr6K89s+oKd+XHtmlDh38BC3KQ6ED0ecP+xgUDb21r6atS8P92+AfMuBiskyPkCAAAAAElFTkSuQmCC"

/***/ }),

/***/ "NP0F":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cab_control_name": "user-edit_cab_control_name__TT-r9",
	"cab_control_title": "user-edit_cab_control_title__1TVsG",
	"cab_control_buttons": "user-edit_cab_control_buttons__2gDvy",
	"favorites_list_block": "user-edit_favorites_list_block__16_U8",
	"favorites_list_block_heading": "user-edit_favorites_list_block_heading__1VgFR",
	"customize_block": "user-edit_customize_block__Yyf9L",
	"customize_block_title": "user-edit_customize_block_title__3v1oY",
	"customize_block_info": "user-edit_customize_block_info__1YG2P",
	"customize_block_info_text": "user-edit_customize_block_info_text__295UJ",
	"btn_edit": "user-edit_btn_edit__1imxb",
	"user_edit_control": "user-edit_user_edit_control__1vuHT",
	"reports_block": "user-edit_reports_block__3TI04",
	"reports_block_heading": "user-edit_reports_block_heading__3w-Fx",
	"report": "user-edit_report__ihjQ7",
	"report_title": "user-edit_report_title__1iDJA",
	"add_btn": "user-edit_add_btn__3zbti"
};


/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PDEv":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/model-1-c3fa418eeb188a310a8abb8248eee72f.png";

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "XQJN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscortList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _escort_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mQyc");
/* harmony import */ var _escort_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_escort_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_main_signs_favorite_pink_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("LMd9");
/* harmony import */ var _assets_images_main_signs_favorite_pink_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_favorite_pink_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("yrSO");
/* harmony import */ var _assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kEjt");
/* harmony import */ var _assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("yxq6");
/* harmony import */ var _assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function EscortList({
  models
}) {
  const {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 8000,
    draggable: false,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setLoaded(true);
  }, []);
  return __jsx("div", {
    style: {
      maxWidth: '1260px',
      padding: '1.5em 0 5em 0',
      margin: '0 auto'
    }
  }, loaded && __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, settings, models.map((m, i) => {
    return __jsx("div", {
      key: i,
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slide
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/modelProfile"
    }, __jsx("a", null, __jsx("img", {
      src: m,
      alt: "model",
      className: "mx-auto w-100"
    }), __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.model_info
    }, __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.model_info_title
    }, __jsx("h5", {
      className: "text-white"
    }, "Model Name"), __jsx("div", null, "Online")), __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.signs_group
    }, __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.sign
    }, __jsx("img", {
      src: _assets_images_main_signs_favorite_pink_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "model"
    })), __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.sign
    }, __jsx("img", {
      src: _assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_7___default.a,
      alt: "model"
    })), __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.sign
    }, __jsx("img", {
      src: _assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      alt: "model"
    })), __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.sign
    }, __jsx("img", {
      src: _assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "model"
    })))))));
  })));
}

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "exA9":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"balance_wrap": "balance_balance_wrap__2QFO2",
	"balance_info_block": "balance_balance_info_block__-Mo9I",
	"small_info_block": "balance_small_info_block__3ISK1",
	"big_info_block": "balance_big_info_block__1OIHN",
	"transaction_history": "balance_transaction_history__12CCA",
	"transaction_heading": "balance_transaction_heading__1dYRW",
	"transaction": "balance_transaction__2J4gx",
	"transaction_title": "balance_transaction_title__ZwP9d",
	"t_price": "balance_t_price__vHLyW",
	"t_date": "balance_t_date__1RX8n",
	"t_text": "balance_t_text__2msTp"
};


/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "iH13":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"support": "support_support__2FTjx",
	"create_task": "support_create_task__3SFmG",
	"task_title": "support_task_title__1x4m4",
	"text_of_support_message": "support_text_of_support_message__CW5yo",
	"show": "support_show__3BcqL",
	"task_body": "support_task_body__1J5J_",
	"send_btn": "support_send_btn__30rbZ",
	"history": "support_history__1JBx7",
	"history_item": "support_history_item__24pl8"
};


/***/ }),

/***/ "kEjt":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAMAAACnUt2HAAAAAXNSR0IB2cksfwAAAD9QTFRFAAAA43iv5Hex5Hex5Hiy5Hex33Cv5Hex43ix5Hex43ex5Hex5Hey43Wy5Hix53iv5Hex5Hay5Hix5Hiw43exJHcqyAAAABV0Uk5TAEDQz2D/EN+A72+Pvz+gIPBwwOCwSnfYOAAAAHhJREFUeJxl0FsWgCAIBFAl0bJSe+x/raGlJM7nPQpzUKpGazUGptEMopFmHaKTOCNlFg+XjIvltX7d8Mu2+p0o4JCgLEgDGiIVyuBe4VsWE1uKdf/BePTN33D/X63Q8GQ8G155qzG5BR+FHpQLa/pSLYZ2dH3nSg8+SgToA/AGuwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mQyc":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"escort_content_title": "escort_escort_content_title__2cVW6",
	"filter_sort_control": "escort_filter_sort_control__2yITi",
	"filter_btn_wrap": "escort_filter_btn_wrap__1sACd",
	"filter_btn_group": "escort_filter_btn_group__x-FSM",
	"sorting_btn": "escort_sorting_btn__38jh3",
	"filter_items_block": "escort_filter_items_block__3Mqa3",
	"slide": "escort_slide__qnbIj",
	"model_info": "escort_model_info__iF2AZ",
	"model_info_title": "escort_model_info_title__3NYmX",
	"signs_group": "escort_signs_group__detwE",
	"vertical_slide": "escort_vertical_slide__1zyAa",
	"vertical_slide_image": "escort_vertical_slide_image__1yFlH",
	"vertical_slide_model_info": "escort_vertical_slide_model_info__3bioo",
	"name": "escort_name__2vVyW",
	"network_status": "escort_network_status__1YcAu",
	"location": "escort_location__1wS4l",
	"summary": "escort_summary__OeTkj",
	"verification": "escort_verification__29j86",
	"card_control": "escort_card_control__1dWSv",
	"verified": "escort_verified__1AtMo",
	"view_profile": "escort_view_profile__zVAg6"
};


/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "rHSG":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/model-3-86ee9a8237fbcb872def50e14ae39dc9.png";

/***/ }),

/***/ "xLfU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Support; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _support_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("iH13");
/* harmony import */ var _support_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_support_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xeH2");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Support() {
  const {
    0: showText,
    1: setShowText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: supportMessages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([1, 2, 3, 4]);
  return __jsx("div", {
    className: _support_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.support
  }, __jsx("div", {
    className: _support_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.create_task
  }, __jsx("div", {
    className: _support_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.task_title
  }, "CREATE NEW TASK"), __jsx("div", {
    className: _support_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.task_body
  }, __jsx("input", {
    type: "text",
    placeholder: "Theme",
    className: `form-control`
  }), __jsx("textarea", {
    className: `form-control`,
    rows: "3",
    placeholder: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
  }), __jsx("div", {
    className: _support_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.send_btn
  }, __jsx("span", null, "SEND")))), __jsx("div", {
    className: _support_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.history
  }, __jsx("span", null, "HISTORY")), supportMessages.map((item, i) => {
    return __jsx("div", {
      key: i,
      className: _support_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.history_item
    }, __jsx("div", {
      className: `${_support_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.task_body}`
    }, __jsx("div", {
      className: `text-white`
    }, "Theme"), __jsx("div", {
      className: `text-white text-of-support-message ${_support_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text_of_support_message} ${showText && _support_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.show}`
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.\""), __jsx("div", {
      className: _support_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.send_btn
    }, __jsx("span", {
      onClick: e => setShowText(!showText)
    }, !showText ? 'READ MORE' : 'HIDE'))));
  }));
}

/***/ }),

/***/ "xeH2":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "yrSO":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAMAAACqTK3AAAAAAXNSR0IB2cksfwAAAEtQTFRFAAAA5Hiw5Xax43ix5Hex5Hew5Hex5Hey33Cv5Hex5Hex53iv43Wy5HWv5Hex5Hay43ex5naz5Hiy5Hex5Hix5Hix5Hex43iv43ewaaAK+QAAABl0Uk5TAOB/gP+f0L8Q8M8gPzDfcLBQYJCgwO9Ar+XnKY4AAACNSURBVHicZY/hFsIgCEbVIemW5Zybvf+TJjDKFn+Eezh8V2OdudYE/o8h3MIFhQizsOXei9sUYahHIvYcUV4l4ayYy3l2k7mu34CdyJF+NQAQjmVAnVhTVYV1OpqMyQNr/XQfAsLsnH8RKgCVv4Gc7EVLLhc2o77KEl1DVK2myS3J/rarsv1YqHcq/LwBYIQFQP3I73YAAAAASUVORK5CYII="

/***/ }),

/***/ "yxq6":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAMAAACnUt2HAAAAAXNSR0IB2cksfwAAAEVQTFRFAAAA53iv5Hex5Hex5Hiy5Hex5HWv5Hex5Hex33Cv5Hex43ex5Hay5Hiw43ew5naz5Hix5Hix5Hew5Hex5Xax5Hey43ivs1DtrQAAABd0Uk5TACDP72DfMJD/EPCwcOCvUMCgn9B/v0D6+r7QAAAApUlEQVR4nH2Q6RLDIAiEMR5dNfFojvd/1IKmjf7pzujgJ8gikUgt2hAZbR09egHwFIA4wBUIRNsPGps8+QguzygcpiVLzSqpVR6prUhLDSdVjjgsDW7kIt5EO5Add5PryBa8pPK5igVleEmryIDP2vLGF6X3xyTToA8T9N1qHVm958kjzN8pA/bSJdP+kTrSKX5gz3SoG27jm7YzN/vs/3zN8CL6AIpECNeooBH1AAAAAElFTkSuQmCC"

/***/ }),

/***/ "zGS3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ UserCabinet; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/user-cabinet/user-edit.module.scss
var user_edit_module = __webpack_require__("NP0F");
var user_edit_module_default = /*#__PURE__*/__webpack_require__.n(user_edit_module);

// EXTERNAL MODULE: ./src/components/home-page/EscortList.jsx
var EscortList = __webpack_require__("XQJN");

// EXTERNAL MODULE: ./src/assets/images/main/horizontal/model-3.png
var model_3 = __webpack_require__("rHSG");
var model_3_default = /*#__PURE__*/__webpack_require__.n(model_3);

// EXTERNAL MODULE: ./src/assets/images/main/horizontal/model-4.png
var model_4 = __webpack_require__("2fs/");
var model_4_default = /*#__PURE__*/__webpack_require__.n(model_4);

// EXTERNAL MODULE: ./src/assets/images/main/horizontal/model-1.png
var model_1 = __webpack_require__("PDEv");
var model_1_default = /*#__PURE__*/__webpack_require__.n(model_1);

// EXTERNAL MODULE: ./src/assets/images/main/horizontal/model-2.png
var model_2 = __webpack_require__("zR+1");
var model_2_default = /*#__PURE__*/__webpack_require__.n(model_2);

// CONCATENATED MODULE: ./src/components/user-cabinet/UserFavorites.jsx
var __jsx = external_react_default.a.createElement;







function UserFavorites() {
  return __jsx("div", {
    className: user_edit_module_default.a.favorites_list_block
  }, __jsx("div", {
    className: user_edit_module_default.a.favorites_list_block_heading
  }, __jsx("h5", null, "YOUR FAVORITES")), __jsx(EscortList["a" /* default */], {
    models: [model_1_default.a, model_2_default.a, model_3_default.a, model_4_default.a, model_1_default.a, model_2_default.a]
  }));
}
// CONCATENATED MODULE: ./src/components/user-cabinet/UserEdit.jsx
var UserEdit_jsx = external_react_default.a.createElement;


function UserEdit() {
  const {
    0: accountEditMode,
    1: setAccountEditMode
  } = Object(external_react_["useState"])(false);

  const nameInput = UserEdit_jsx("input", {
    className: "form-control bg-dark text-white",
    type: "text",
    placeholder: "Name"
  });

  const secondNameInput = UserEdit_jsx("input", {
    className: "form-control bg-dark text-white",
    type: "text",
    placeholder: "Second Name"
  });

  return UserEdit_jsx("div", {
    className: `text-white ${user_edit_module_default.a.customize_block}`
  }, UserEdit_jsx("div", {
    className: user_edit_module_default.a.customize_block_title
  }, "ACCOUNT"), UserEdit_jsx("div", {
    className: user_edit_module_default.a.customize_block_info
  }, UserEdit_jsx("div", {
    className: user_edit_module_default.a.customize_block_info_text
  }, UserEdit_jsx("dl", null, UserEdit_jsx("dt", null, "Name:"), UserEdit_jsx("dd", null, !accountEditMode ? "Name" : nameInput), UserEdit_jsx("dt", null, "Second Name:"), UserEdit_jsx("dd", null, !accountEditMode ? "Second Name" : secondNameInput))), UserEdit_jsx("div", null, UserEdit_jsx("span", {
    className: user_edit_module_default.a.btn_edit,
    onClick: () => {
      setAccountEditMode(!accountEditMode);
    }
  }, !accountEditMode ? "EDIT" : "SAVE"))));
}
// CONCATENATED MODULE: ./src/components/user-cabinet/UserReports.jsx
var UserReports_jsx = external_react_default.a.createElement;


function UserReports() {
  return UserReports_jsx("div", {
    className: user_edit_module_default.a.reports_block
  }, UserReports_jsx("h5", {
    className: `text-white ${user_edit_module_default.a.reports_block_heading}`
  }, "REPORTS YOU'VE LEFT"), UserReports_jsx("ul", null, [1, 2, 3].map((rep, i) => UserReports_jsx("li", {
    key: i
  }, UserReports_jsx("div", {
    className: user_edit_module_default.a.report
  }, UserReports_jsx("div", {
    className: user_edit_module_default.a.report_title
  }, UserReports_jsx("span", null, "MODEL NAME"), UserReports_jsx("span", null, "22.07.19")), UserReports_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), UserReports_jsx("span", {
    className: user_edit_module_default.a.add_btn
  }, "TO AD"))))));
}
// CONCATENATED MODULE: ./src/components/user-cabinet/UserCabinetControl.jsx
var UserCabinetControl_jsx = external_react_default.a.createElement;


function UserCabinetControl({
  setComponent
}) {
  const {
    0: activeBtn,
    1: setActiveBtn
  } = Object(external_react_["useState"])('favorites');

  const changeComponent = ref => {
    setActiveBtn(ref);
    setComponent(ref);
  };

  return UserCabinetControl_jsx("div", {
    className: user_edit_module_default.a.user_edit_control
  }, UserCabinetControl_jsx("div", {
    className: user_edit_module_default.a.cab_control_name
  }, UserCabinetControl_jsx("span", null, "USERNAME"), UserCabinetControl_jsx("span", null, "EXIT")), UserCabinetControl_jsx("div", {
    className: user_edit_module_default.a.cab_control_title
  }, UserCabinetControl_jsx("h5", {
    className: "text-white"
  }, "BUSINESS CABINET")), UserCabinetControl_jsx("div", {
    className: user_edit_module_default.a.cab_control_buttons
  }, UserCabinetControl_jsx("span", {
    className: `${activeBtn === 'balance' ? 'active_btn_blue' : ''}`,
    onClick: e => changeComponent("balance")
  }, "Balance"), UserCabinetControl_jsx("span", {
    className: `${activeBtn === 'favorites' ? 'active_btn_blue' : ''}`,
    onClick: e => changeComponent("favorites")
  }, "Favorites"), UserCabinetControl_jsx("span", {
    className: `${activeBtn === 'prices' ? 'active_btn_blue' : ''}`,
    onClick: e => changeComponent("prices")
  }, "Prices"), UserCabinetControl_jsx("span", {
    className: `${activeBtn === 'edit' ? 'active_btn_blue' : ''}`,
    onClick: e => changeComponent("edit")
  }, "Edit"), UserCabinetControl_jsx("span", {
    className: `${activeBtn === 'reports' ? 'active_btn_blue' : ''}`,
    onClick: e => changeComponent("reports")
  }, "Reports"), UserCabinetControl_jsx("span", {
    className: `${activeBtn === 'support' ? 'active_btn_blue' : ''}`,
    onClick: e => changeComponent("support")
  }, "Technical support")));
}
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: ./src/components/user-cabinet/prices.module.scss
var prices_module = __webpack_require__("DrGB");
var prices_module_default = /*#__PURE__*/__webpack_require__.n(prices_module);

// CONCATENATED MODULE: ./src/components/user-cabinet/UserPrices.jsx
var UserPrices_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function UserPrices() {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
    touchMove: true,
    initialSlide: 2,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false
      }
    }, {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
      }
    }]
  };
  return UserPrices_jsx("div", {
    className: prices_module_default.a.prices_wrap
  }, UserPrices_jsx(external_react_slick_default.a, _extends({}, settings, {
    style: {
      maxWidth: "1260px",
      margin: "0 auto"
    }
  }), UserPrices_jsx("div", {
    className: `${prices_module_default.a.slide} ${prices_module_default.a.slide_1}`
  }, UserPrices_jsx("div", {
    className: `text-white ${prices_module_default.a.price_item}`
  }, UserPrices_jsx("span", {
    className: prices_module_default.a.price_title
  }, "FREE"), UserPrices_jsx("span", {
    className: prices_module_default.a.price
  }, UserPrices_jsx("i", null, "$ "), " 0"), UserPrices_jsx("span", {
    className: prices_module_default.a.per_month
  }, "\xA0"), UserPrices_jsx("span", {
    className: prices_module_default.a.price_subtitle
  }, "Your current plan")), UserPrices_jsx("div", {
    className: `${prices_module_default.a.price_desc_item} ${prices_module_default.a.price_desc_item_1}`
  }, UserPrices_jsx("div", {
    className: prices_module_default.a.price_desc_item_title
  }, "Free includes :"), UserPrices_jsx("p", {
    className: prices_module_default.a.description_text_item
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"))), UserPrices_jsx("div", {
    className: `${prices_module_default.a.slide} ${prices_module_default.a.slide_2}`
  }, UserPrices_jsx("div", {
    className: `text-white ${prices_module_default.a.price_item}`
  }, UserPrices_jsx("span", {
    className: prices_module_default.a.price_title
  }, "STANDARD"), UserPrices_jsx("span", {
    className: prices_module_default.a.price
  }, UserPrices_jsx("i", null, "$ "), " 49"), UserPrices_jsx("span", {
    className: prices_module_default.a.per_month
  }, "PERMONTH"), UserPrices_jsx("span", {
    className: prices_module_default.a.price_subtitle
  }, "UPGRADE NOW")), UserPrices_jsx("div", {
    className: `${prices_module_default.a.price_desc_item} ${prices_module_default.a.price_desc_item_2}`
  }, UserPrices_jsx("div", {
    className: prices_module_default.a.price_desc_item_title
  }, "Free includes :"), UserPrices_jsx("p", {
    className: prices_module_default.a.description_text_item
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"), UserPrices_jsx("p", {
    className: prices_module_default.a.description_text_item
  }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam in corporis porro facere ut delectus, ducimus maxime odit quaerat, labore natus vitae, voluptas atque dolorum tempora exercitationem quo magni accusantium."))), UserPrices_jsx("div", {
    className: `${prices_module_default.a.slide} ${prices_module_default.a.slide_3}`
  }, UserPrices_jsx("div", {
    className: `text-white ${prices_module_default.a.price_item}`
  }, UserPrices_jsx("span", {
    className: prices_module_default.a.price_title
  }, "PLUS"), UserPrices_jsx("span", {
    className: prices_module_default.a.price
  }, UserPrices_jsx("i", null, "$ "), " 99"), UserPrices_jsx("span", {
    className: prices_module_default.a.per_month
  }, "PER MONTH"), UserPrices_jsx("span", {
    className: prices_module_default.a.price_subtitle
  }, "UPGRADE NOW")), UserPrices_jsx("div", {
    className: `${prices_module_default.a.price_desc_item} ${prices_module_default.a.price_desc_item_3}`
  }, UserPrices_jsx("div", {
    className: prices_module_default.a.price_desc_item_title
  }, "Free includes :"), UserPrices_jsx("p", {
    className: prices_module_default.a.description_text_item
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"), UserPrices_jsx("p", {
    className: prices_module_default.a.description_text_item
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, dolores? Reprehenderit velit consequatur neque hic quisquam unde consequuntur. Incidunt est id cumque unde maxime, vel inventore optio facere excepturi! Soluta?"), UserPrices_jsx("p", {
    className: prices_module_default.a.description_text_item
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"))), UserPrices_jsx("div", {
    className: `${prices_module_default.a.slide} ${prices_module_default.a.slide_4}`
  }, UserPrices_jsx("div", {
    className: `text-white ${prices_module_default.a.price_item}`
  }, UserPrices_jsx("span", {
    className: prices_module_default.a.price_title
  }, "VIP"), UserPrices_jsx("span", {
    className: prices_module_default.a.price
  }, UserPrices_jsx("i", null, "$ "), " 299"), UserPrices_jsx("span", {
    className: prices_module_default.a.per_month
  }, "PER MONTH"), UserPrices_jsx("span", {
    className: prices_module_default.a.price_subtitle
  }, "UPGRADE NOW")), UserPrices_jsx("div", {
    className: `${prices_module_default.a.price_desc_item} ${prices_module_default.a.price_desc_item_4}`
  }, UserPrices_jsx("div", {
    className: prices_module_default.a.price_desc_item_title
  }, "Free includes :"), UserPrices_jsx("p", {
    className: prices_module_default.a.description_text_item
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"), UserPrices_jsx("p", {
    className: prices_module_default.a.description_text_item
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, dolores? Reprehenderit velit consequatur neque hic quisquam unde consequuntur. Incidunt est id cumque unde maxime, vel inventore optio facere excepturi! Soluta?"), UserPrices_jsx("p", {
    className: prices_module_default.a.description_text_item
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"), UserPrices_jsx("p", {
    className: prices_module_default.a.description_text_item
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, dolores? Reprehenderit velit consequatur neque hic quisquam unde consequuntur. Incidunt est id cumque unde maxime, vel inventore optio facere excepturi! Soluta?")))));
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/components/user-cabinet/balance.module.scss
var balance_module = __webpack_require__("exA9");
var balance_module_default = /*#__PURE__*/__webpack_require__.n(balance_module);

// CONCATENATED MODULE: ./src/components/user-cabinet/UserBalance.jsx
var UserBalance_jsx = external_react_default.a.createElement;



function UserBalance() {
  return UserBalance_jsx("div", {
    className: balance_module_default.a.balance_wrap
  }, UserBalance_jsx("div", {
    className: balance_module_default.a.balance_info_block
  }, UserBalance_jsx("div", {
    className: balance_module_default.a.small_info_block
  }, UserBalance_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendis"), UserBalance_jsx("span", null, UserBalance_jsx(link_default.a, {
    href: "/balance"
  }, UserBalance_jsx("a", null, "Fill the balance")))), UserBalance_jsx("div", {
    className: balance_module_default.a.big_info_block
  }, UserBalance_jsx("div", null, "INFO"), UserBalance_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"))), UserBalance_jsx("div", {
    className: balance_module_default.a.transaction_history
  }, UserBalance_jsx("div", {
    className: balance_module_default.a.transaction_heading
  }, UserBalance_jsx("span", null, "Transaction History")), UserBalance_jsx("div", {
    className: `text-white ${balance_module_default.a.transaction}`
  }, UserBalance_jsx("div", {
    className: balance_module_default.a.transaction_title
  }, "DEBIT"), UserBalance_jsx("div", {
    className: balance_module_default.a.t_price
  }, "$ 49"), UserBalance_jsx("p", {
    className: balance_module_default.a.t_text
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est facilis vitae similique nisi alias, saepe, corrupti et, sapiente tenetur quo optio veniam iste! Corporis pariatur doloremque dolorem provident inventore minus."), UserBalance_jsx("div", {
    className: balance_module_default.a.t_date
  }, "22 . 07 . 2019")), UserBalance_jsx("div", {
    className: `text-white ${balance_module_default.a.transaction}`
  }, UserBalance_jsx("div", {
    className: balance_module_default.a.transaction_title
  }, "TOP UP"), UserBalance_jsx("div", {
    className: balance_module_default.a.t_price
  }, "$ 25"), UserBalance_jsx("p", {
    className: balance_module_default.a.t_text
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est facilis vitae similique nisi alias, saepe, corrupti et, sapiente tenetur quo optio veniam iste!"), UserBalance_jsx("div", {
    className: balance_module_default.a.t_date
  }, "22 . 07 . 2019")), UserBalance_jsx("div", {
    className: `text-white ${balance_module_default.a.transaction}`
  }, UserBalance_jsx("div", {
    className: balance_module_default.a.transaction_title
  }, "DEBIT"), UserBalance_jsx("div", {
    className: balance_module_default.a.t_price
  }, "$ 49"), UserBalance_jsx("p", {
    className: balance_module_default.a.t_text
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est facilis vitae similique nisi alias, saepe, corrupti et, sapiente tenetur quo optio veniam iste! Corporis pariatur doloremque dolorem provident inventore minus."), UserBalance_jsx("div", {
    className: balance_module_default.a.t_date
  }, "22 . 07 . 2019")), UserBalance_jsx("div", {
    className: `text-white ${balance_module_default.a.transaction}`
  }, UserBalance_jsx("div", {
    className: balance_module_default.a.transaction_title
  }, "TOP UP"), UserBalance_jsx("div", {
    className: balance_module_default.a.t_price
  }, "$ 25"), UserBalance_jsx("p", {
    className: balance_module_default.a.t_text
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est facilis vitae similique nisi alias, saepe, corrupti et, sapiente tenetur quo optio veniam iste!"), UserBalance_jsx("div", {
    className: balance_module_default.a.t_date
  }, "22 . 07 . 2019"))));
}
// EXTERNAL MODULE: ./src/components/support/Support.jsx
var Support = __webpack_require__("xLfU");

// CONCATENATED MODULE: ./src/components/user-cabinet/UserCabinetEdit.jsx
var UserCabinetEdit_jsx = external_react_default.a.createElement;









function UserCabinetEdit() {
  const {
    0: component,
    1: setComponent
  } = Object(external_react_["useState"])(UserCabinetEdit_jsx(UserFavorites, null));

  const changeComponent = comp => {
    if (comp === "favorites") {
      setComponent(UserCabinetEdit_jsx(UserFavorites, null));
    } else if (comp === "reports") {
      setComponent(UserCabinetEdit_jsx(UserReports, null));
    } else if (comp === "edit") {
      setComponent(UserCabinetEdit_jsx(UserEdit, null));
    } else if (comp === "prices") {
      setComponent(UserCabinetEdit_jsx(UserPrices, null));
    } else if (comp === "balance") {
      setComponent(UserCabinetEdit_jsx(UserBalance, null));
    } else if (comp === "support") {
      setComponent(UserCabinetEdit_jsx(Support["a" /* default */], null));
    }
  };

  return UserCabinetEdit_jsx("div", {
    className: `${user_edit_module_default.a.cabinet_wrap}`
  }, UserCabinetEdit_jsx(UserCabinetControl, {
    setComponent: changeComponent
  }), component);
}
// CONCATENATED MODULE: ./src/pages/userCabinet.jsx
var userCabinet_jsx = external_react_default.a.createElement;


function UserCabinet() {
  return userCabinet_jsx("div", null, userCabinet_jsx(UserCabinetEdit, null));
}

/***/ }),

/***/ "zR+1":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/model-2-21be85e9c57444d19fa271196931ba9b.png";

/***/ })

/******/ });