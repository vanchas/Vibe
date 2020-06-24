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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

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

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

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
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
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

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
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

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

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

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

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
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

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

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

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
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

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

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
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

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


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

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/_helpers/PrivateRoute.js":
/*!**************************************!*\
  !*** ./src/_helpers/PrivateRoute.js ***!
  \**************************************/
/*! exports provided: PrivateRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateRoute", function() { return PrivateRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/_services/index.js");
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\_helpers\\PrivateRoute.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const PrivateRoute = (_ref) => {
  let {
    component: Component,
    roles
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["component", "roles"]);

  return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({}, rest, {
    render: props => {
      const currentUser = _services__WEBPACK_IMPORTED_MODULE_2__["authenticationService"].currentUserValue;

      if (!currentUser) {
        // not logged in so redirect to login page with the return url
        return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: {
            pathname: '/login',
            state: {
              from: props.location
            }
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 14
          }
        });
      } // check if route is restricted by role


      if (roles && roles.indexOf(currentUser.role) === -1) {
        // role not authorised so redirect to home page
        return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: {
            pathname: '/'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 14
          }
        });
      } // authorised so return component


      return __jsx(Component, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 12
        }
      }));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }));
};

/***/ }),

/***/ "./src/_helpers/auth-header.js":
/*!*************************************!*\
  !*** ./src/_helpers/auth-header.js ***!
  \*************************************/
/*! exports provided: authHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authHeader", function() { return authHeader; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services */ "./src/_services/index.js");

function authHeader() {
  // return authorization header with jwt token
  const currentUser = _services__WEBPACK_IMPORTED_MODULE_0__["authenticationService"].currentUserValue;

  if (currentUser && currentUser.token) {
    return {
      Authorization: `Bearer ${currentUser.token}`
    };
  } else {
    return {};
  }
}

/***/ }),

/***/ "./src/_helpers/fake-backend.js":
/*!**************************************!*\
  !*** ./src/_helpers/fake-backend.js ***!
  \**************************************/
/*! exports provided: configureFakeBackend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureFakeBackend", function() { return configureFakeBackend; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/_helpers/index.js");

function configureFakeBackend() {
  let users = [{
    id: 1,
    username: 'admin',
    password: 'admin',
    firstName: 'Admin',
    lastName: 'Admin',
    role: ___WEBPACK_IMPORTED_MODULE_0__["Role"].Admin,
    name: "Admin",
    second_name: null,
    email: null,
    phone: "380953444348"
  }, {
    id: 2,
    username: 'user',
    password: 'user',
    firstName: 'Ivan',
    lastName: 'User',
    role: ___WEBPACK_IMPORTED_MODULE_0__["Role"].Admin,
    name: "User",
    second_name: null,
    email: null,
    phone: "380953444348"
  },, {
    id: 3,
    username: 'pro',
    password: 'pro',
    firstName: 'Model',
    lastName: 'Provider',
    role: ___WEBPACK_IMPORTED_MODULE_0__["Role"].Provider,
    name: "Model",
    second_name: null,
    email: null,
    phone: "380953444348"
  }];
  let realFetch = window.fetch;

  window.fetch = function (url, opts) {
    const authHeader = opts.headers['Authorization'];
    const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
    const roleString = isLoggedIn && authHeader.split('.')[1];
    const role = roleString ? ___WEBPACK_IMPORTED_MODULE_0__["Role"][roleString] : null;
    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(() => {
        // authenticate - public
        if (url.endsWith('/api/auth/login') && opts.method === 'POST') {
          const params = JSON.parse(opts.body); // const user = users.find(x => x.username === params.username && x.password === params.password);

          let user;
          users.forEach(u => {
            if (u.password === params.password && u.username === params.username) return user = u;
          });
          if (!user) return error('Username or password is incorrect');
          return ok({
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            token: `fake-jwt-token.${user.role}`,
            name: user.name,
            second_name: user.second_name,
            email: user.email,
            phone: user.phone
          });
        }

        if (url.endsWith('/api/auth/register') && opts.method === 'POST') {
          const params = JSON.parse(opts.body);
          const user = {
            id: users.length + 1,
            username: params.username,
            password: params.password,
            firstName: 'Normal',
            lastName: ___WEBPACK_IMPORTED_MODULE_0__["Role"].User,
            name: null,
            second_name: null,
            email: null,
            phone: null
          };
          users.push(user);
          return ok({
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            token: `fake-jwt-token.${user.role}`,
            name: user.name,
            second_name: user.second_name,
            email: user.email,
            phone: user.phone
          });
        } // get user by id - admin or user (user can only access their own record)


        if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
          if (!isLoggedIn) return unauthorised(); // get id from request url

          let urlParts = url.split('/');
          let id = parseInt(urlParts[urlParts.length - 1]); // only allow normal users access to their own record

          const currentUser = users.find(x => x.role === role);
          if (id !== currentUser.id && role !== ___WEBPACK_IMPORTED_MODULE_0__["Role"].Admin) return unauthorised();
          const user = users.find(x => x.id === id);
          return ok(user);
        } // get all users - admin only


        if (url.endsWith('/users') && opts.method === 'GET') {
          if (role !== ___WEBPACK_IMPORTED_MODULE_0__["Role"].Admin) return unauthorised();
          return ok(users);
        } // pass through any requests not handled above


        realFetch(url, opts).then(response => resolve(response)); // private helper functions

        function ok(body) {
          resolve({
            ok: true,
            text: () => Promise.resolve(JSON.stringify(body))
          });
        }

        function unauthorised() {
          resolve({
            status: 401,
            text: () => Promise.resolve(JSON.stringify({
              message: 'Unauthorised'
            }))
          });
        }

        function error(message) {
          resolve({
            status: 400,
            text: () => Promise.resolve(JSON.stringify({
              message
            }))
          });
        }
      }, 500);
    });
  };
}

/***/ }),

/***/ "./src/_helpers/handle-response.js":
/*!*****************************************!*\
  !*** ./src/_helpers/handle-response.js ***!
  \*****************************************/
/*! exports provided: handleResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleResponse", function() { return handleResponse; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services */ "./src/_services/index.js");

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].indexOf(response.status) !== -1) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        _services__WEBPACK_IMPORTED_MODULE_0__["authenticationService"].logout();
        window.location.reload(true);
      }

      const error = data && data.message || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

/***/ }),

/***/ "./src/_helpers/history.js":
/*!*********************************!*\
  !*** ./src/_helpers/history.js ***!
  \*********************************/
/*! exports provided: history */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_0__);

let history;

if (typeof document !== 'undefined') {
  // const createBrowserHistory = require('history/createBrowserHistory').default
  history = Object(history__WEBPACK_IMPORTED_MODULE_0__["createBrowserHistory"])();
}



/***/ }),

/***/ "./src/_helpers/index.js":
/*!*******************************!*\
  !*** ./src/_helpers/index.js ***!
  \*******************************/
/*! exports provided: PrivateRoute, authHeader, configureFakeBackend, handleResponse, history, Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrivateRoute */ "./src/_helpers/PrivateRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrivateRoute", function() { return _PrivateRoute__WEBPACK_IMPORTED_MODULE_0__["PrivateRoute"]; });

/* harmony import */ var _auth_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-header */ "./src/_helpers/auth-header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authHeader", function() { return _auth_header__WEBPACK_IMPORTED_MODULE_1__["authHeader"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/_helpers/fake-backend.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureFakeBackend", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["configureFakeBackend"]; });

/* harmony import */ var _handle_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handle-response */ "./src/_helpers/handle-response.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleResponse", function() { return _handle_response__WEBPACK_IMPORTED_MODULE_3__["handleResponse"]; });

/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history */ "./src/_helpers/history.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "history", function() { return _history__WEBPACK_IMPORTED_MODULE_4__["history"]; });

/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role */ "./src/_helpers/role.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return _role__WEBPACK_IMPORTED_MODULE_5__["Role"]; });








/***/ }),

/***/ "./src/_helpers/role.js":
/*!******************************!*\
  !*** ./src/_helpers/role.js ***!
  \******************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
const Role = {
  Admin: 'Admin',
  User: 'User',
  Provider: 'Provider'
};

/***/ }),

/***/ "./src/_services/authentication.service.ts":
/*!*************************************************!*\
  !*** ./src/_services/authentication.service.ts ***!
  \*************************************************/
/*! exports provided: authenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticationService", function() { return authenticationService; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers */ "./src/_helpers/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




let currentUserSubject = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.getJSON("currentUser") ? js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.getJSON("currentUser") : {};
const target = `https://intim-vibe-api.padilo.pro/api`;
const authenticationService = {
  login,
  logout,
  registrationAdmin,
  registrationClient,
  registrationProvider,
  registrationAgency,
  currentUser: currentUserSubject,

  get currentUserValue() {
    return currentUserSubject;
  }

};

async function login(email, password) {
  return await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${target}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then(_helpers__WEBPACK_IMPORTED_MODULE_2__["handleResponse"]).then(user => {
    if (user.token) {
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set("currentUser", JSON.stringify(user), {
        expires: 1
      });
      currentUserSubject = user;
      return user;
    }
  }).then(() => window.location.reload(true)).catch(err => console.error("Error:", err));
}

async function registrationClient(name, password, email, password_confirmation) {
  return await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/client/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name,
      password,
      email,
      password_confirmation
    })
  }).then(_helpers__WEBPACK_IMPORTED_MODULE_2__["handleResponse"]).then(client => {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set("currentUser", JSON.stringify(client));
    currentUserSubject = client;
    return client;
  }).then(() => {
    login(email, password);
  }).then(() => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/userCabinet")).catch(err => console.error("Error:", err));
}

async function registrationAdmin(name, password, email, password_confirmation) {
  return await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${target}/admin/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name,
      password,
      email,
      password_confirmation
    })
  }).then(_helpers__WEBPACK_IMPORTED_MODULE_2__["handleResponse"]).then(admin => {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set("currentUser", JSON.stringify(admin));
    currentUserSubject = admin;
    return admin;
  }).then(() => {
    login(email, password);
  }).catch(err => console.error("Error:", err));
}

async function registrationProvider(name, password, email, password_confirmation, phone) {
  return await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${target}/individual/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name,
      password,
      email,
      password_confirmation,
      phone
    })
  }).then(_helpers__WEBPACK_IMPORTED_MODULE_2__["handleResponse"]).then(provider => {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set("currentUser", JSON.stringify(provider.user));
    currentUserSubject = provider;
    return provider;
  }).then(() => {
    login(email, password);
  }).then(() => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/modelCabinet")).catch(err => console.error("Error:", err));
}

async function registrationAgency(name, password, email, password_confirmation, phone, agency_name) {
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${target}/agency/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name,
      password,
      email,
      password_confirmation,
      phone,
      agency_name
    })
  });
  const promise = response.json();
  promise.then(provider => {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set("currentUser", JSON.stringify(provider));
    currentUserSubject = provider;
    return provider;
  }).then(() => login(email, password)).then(() => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/modelCabinet")).catch(err => console.error("Error:", err));
}

async function logout() {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove("currentUser");
  return await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${target}/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  }).then(() => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/')).then(() => window.location.reload(true)).catch(err => console.error("Error:", err));
}

/***/ }),

/***/ "./src/_services/index.js":
/*!********************************!*\
  !*** ./src/_services/index.js ***!
  \********************************/
/*! exports provided: authenticationService, userService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["authenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/_services/user.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["userService"]; });




/***/ }),

/***/ "./src/_services/user.service.js":
/*!***************************************!*\
  !*** ./src/_services/user.service.js ***!
  \***************************************/
/*! exports provided: userService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return userService; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_helpers */ "./src/_helpers/index.js");

const userService = {
  getAll,
  getById,
  update,
  deleteUser
};

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["authHeader"])()
  };
  return fetch(`/users`, requestOptions).then(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleResponse"]);
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["authHeader"])()
  };
  return fetch(`/users/${id}`, requestOptions).then(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleResponse"]);
}

function update(id, name, second_name, email, phone, rating, position, telegram, viber, whatsapp, site, avatar) {
  const requestOptions = {
    method: 'POST',
    headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["authHeader"])(),
    body: JSON.stringify({
      name,
      second_name,
      email,
      phone,
      rating,
      position,
      telegram,
      viber,
      whatsapp,
      site,
      avatar
    })
  };
  return fetch(`/api/auth/user/update/${id}`, requestOptions).then(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleResponse"]);
}

function deleteUser(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["authHeader"])()
  };
  return fetch(`/api/auth/user/destroy/${id}`, requestOptions).then(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleResponse"]);
}

/***/ }),

/***/ "./src/assets/images/main/model-profile/model-1.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/main/model-profile/model-1.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/model-1-87736c820063c06f91c1c33e01fa3236.png";

/***/ }),

/***/ "./src/assets/images/main/model-profile/model-2.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/main/model-profile/model-2.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/model-2-0f70e8b14d0770bc9491aad73004a4b7.png";

/***/ }),

/***/ "./src/assets/images/main/signs/crown-pink.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/main/signs/crown-pink.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAMAAACnUt2HAAAAAXNSR0IB2cksfwAAAEVQTFRFAAAA53iv5Hex5Hex5Hiy5Hex5HWv5Hex5Hex33Cv5Hex43ex5Hay5Hiw43ew5naz5Hix5Hix5Hew5Hex5Xax5Hey43ivs1DtrQAAABd0Uk5TACDP72DfMJD/EPCwcOCvUMCgn9B/v0D6+r7QAAAApUlEQVR4nH2Q6RLDIAiEMR5dNfFojvd/1IKmjf7pzujgJ8gikUgt2hAZbR09egHwFIA4wBUIRNsPGps8+QguzygcpiVLzSqpVR6prUhLDSdVjjgsDW7kIt5EO5Add5PryBa8pPK5igVleEmryIDP2vLGF6X3xyTToA8T9N1qHVm958kjzN8pA/bSJdP+kTrSKX5gz3SoG27jm7YzN/vs/3zN8CL6AIpECNeooBH1AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/main/signs/favorite-pink.png":
/*!********************************************************!*\
  !*** ./src/assets/images/main/signs/favorite-pink.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAMAAACjpw26AAAAAXNSR0IB2cksfwAAADxQTFRFAAAA33Cv5Hex5Hex5Hex5Hex5Xax5Hey5Hex5HWv5Hex5Hiy5Hix43ex5Hex5naz43iv5Hex43ix5HiwfELn2AAAABR0Uk5TABCP3//Pf7/vMNBgoLDwUECQgOCWE8qsAAAAeElEQVR4nHWQUQ6EIAwF39stWhSR1fvfVVDUNdT5mkxoCQDg5yuuIzLseu0P9SoF9Ze6rBjkQEmt6oBRTkK4dMQkBhOilRVWFbFPx7fds5UTENr6K89s+oKd+XHtmlDh38BC3KQ6ED0ecP+xgUDb21r6atS8P92+AfMuBiskyPkCAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/main/signs/plane-pink.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/main/signs/plane-pink.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAMAAACqTK3AAAAAAXNSR0IB2cksfwAAAEtQTFRFAAAA5Hiw5Xax43ix5Hex5Hew5Hex5Hey33Cv5Hex5Hex53iv43Wy5HWv5Hex5Hay43ex5naz5Hiy5Hex5Hix5Hix5Hex43iv43ewaaAK+QAAABl0Uk5TAOB/gP+f0L8Q8M8gPzDfcLBQYJCgwO9Ar+XnKY4AAACNSURBVHicZY/hFsIgCEbVIemW5Zybvf+TJjDKFn+Eezh8V2OdudYE/o8h3MIFhQizsOXei9sUYahHIvYcUV4l4ayYy3l2k7mu34CdyJF+NQAQjmVAnVhTVYV1OpqMyQNr/XQfAsLsnH8RKgCVv4Gc7EVLLhc2o77KEl1DVK2myS3J/rarsv1YqHcq/LwBYIQFQP3I73YAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/main/signs/star-pink.png":
/*!****************************************************!*\
  !*** ./src/assets/images/main/signs/star-pink.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAMAAACnUt2HAAAAAXNSR0IB2cksfwAAAD9QTFRFAAAA43iv5Hex5Hex5Hiy5Hex33Cv5Hex43ix5Hex43ex5Hex5Hey43Wy5Hix53iv5Hex5Hay5Hix5Hiw43exJHcqyAAAABV0Uk5TAEDQz2D/EN+A72+Pvz+gIPBwwOCwSnfYOAAAAHhJREFUeJxl0FsWgCAIBFAl0bJSe+x/raGlJM7nPQpzUKpGazUGptEMopFmHaKTOCNlFg+XjIvltX7d8Mu2+p0o4JCgLEgDGiIVyuBe4VsWE1uKdf/BePTN33D/X63Q8GQ8G155qzG5BR+FHpQLa/pSLYZ2dH3nSg8+SgToA/AGuwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/components/home-page/Categories.jsx":
/*!*************************************************!*\
  !*** ./src/components/home-page/Categories.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Categories; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _categories_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.module.scss */ "./src/components/home-page/categories.module.scss");
/* harmony import */ var _categories_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_categories_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NewPosts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewPosts */ "./src/components/home-page/NewPosts.jsx");
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\home-page\\Categories.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Categories({
  categories,
  newPosts,
  filterPosts
}) {
  const {
    0: filterCategory,
    1: setFilterCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('escorts');

  const changeCategory = (category, id) => {
    setFilterCategory(category);
    filterPosts({
      'category_id': id
    });
  };

  return __jsx("section", {
    className: _categories_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.categories_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: `text-white ${_categories_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.categories_title}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "SELECT A CATEGORY")), __jsx("div", {
    className: _categories_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.categories_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: `${_categories_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.categories_control}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, categories && categories.length ? categories.map((c, i) => __jsx("span", {
    key: i,
    onClick: e => changeCategory(c.name.toLowerCase(), c.id),
    className: `${_categories_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.category} ${filterCategory === c.name.toLowerCase() ? 'active_btn_blue' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, c.name.toUpperCase())) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "spinner-border text-info",
    role: "status",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "Loading...")), __jsx("span", {
    className: "pl-2 text-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, "No categories from server..."))), __jsx("div", {
    className: `text-white ${_categories_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.categories_subtitle}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "NEW ON THE SITE")), __jsx("div", {
    className: _categories_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.categories_carousel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_NewPosts__WEBPACK_IMPORTED_MODULE_2__["default"], {
    newPosts: newPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/components/home-page/Location.jsx":
/*!***********************************************!*\
  !*** ./src/components/home-page/Location.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Location; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _location_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.module.scss */ "./src/components/home-page/location.module.scss");
/* harmony import */ var _location_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_location_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\home-page\\Location.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Location({
  states
}) {
  const {
    0: currentLocation,
    1: setCurrentLocation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const changeLocation = stateId => {
    setCurrentLocation(stateId);
    states.forEach(state => {
      if (+state.id === +stateId) {
        router.push({
          pathname: `/location`,
          query: {
            state: state.name,
            id: state.id
          }
        });
      }
    });
  };

  return __jsx("section", {
    className: _location_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.location_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, states.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `text-white ${_location_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.locaton_block_title}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "SELECT A LOCATION BELOW")), __jsx("div", {
    className: _location_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.location_block_select,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("select", {
    className: "form-control",
    onChange: e => changeLocation(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "default",
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Location"), states.map((state, i) => __jsx("option", {
    key: i,
    value: state.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, state.name)))), __jsx("div", {
    className: _location_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.location_block_list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, states.map((state, i) => {
    return __jsx("li", {
      key: i,
      onClick: e => changeLocation(state.id),
      className: `btn text-white location_item`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/location",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: currentLocation === state ? 'active_btn_blue' : '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    }, state.name)));
  })))) : null);
}

/***/ }),

/***/ "./src/components/home-page/NewPosts.jsx":
/*!***********************************************!*\
  !*** ./src/components/home-page/NewPosts.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleSlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _categories_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.module.scss */ "./src/components/home-page/categories.module.scss");
/* harmony import */ var _categories_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_categories_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\home-page\\NewPosts.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function SimpleSlider({
  newPosts
}) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 10000,
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
        slidesToScroll: 1,
        fade: true
      }
    }]
  };
  return __jsx("div", {
    style: {
      margin: '0 auto',
      maxWidth: '1260px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, settings, {
    style: {
      maxWidth: "1260px",
      margin: "0 auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), newPosts && newPosts.length ? newPosts.map((post, i) => __jsx("div", {
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _categories_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/modelProfile",
      query: {
        id: post.id
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: post.photo_vertical,
    alt: "model",
    className: "w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 23
    }
  }, post.model_name))))))) : null));
}

/***/ }),

/***/ "./src/components/home-page/Search.jsx":
/*!*********************************************!*\
  !*** ./src/components/home-page/Search.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.module.scss */ "./src/components/home-page/search.module.scss");
/* harmony import */ var _search_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_search_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\home-page\\Search.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Search() {
  return __jsx("section", {
    className: _search_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.search_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _search_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.search_block_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: `text-white ${_search_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.search_input_label}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "SEARCH"), __jsx("div", {
    className: _search_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.search_input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: `text-white ${_search_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.add_post_btn}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "POST AD"))));
}

/***/ }),

/***/ "./src/components/home-page/categories.module.scss":
/*!*********************************************************!*\
  !*** ./src/components/home-page/categories.module.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"categories_block": "categories_categories_block__14AV_",
	"categories_title": "categories_categories_title__3KyOX",
	"categories_content": "categories_categories_content__2vPut",
	"categories_control": "categories_categories_control__2gpce",
	"category": "categories_category__3RGjw",
	"categories_subtitle": "categories_categories_subtitle__3YmXa",
	"slide": "categories_slide__2LNju"
};


/***/ }),

/***/ "./src/components/home-page/location.module.scss":
/*!*******************************************************!*\
  !*** ./src/components/home-page/location.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"location_wrapper": "location_location_wrapper__1aOL0",
	"locaton_block_title": "location_locaton_block_title__lYDzK",
	"location_block_select": "location_location_block_select__Y1aWi",
	"location_block_list": "location_location_block_list__1IjbY"
};


/***/ }),

/***/ "./src/components/home-page/search.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/home-page/search.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"search_block": "search_search_block__21sMS",
	"search_block_content": "search_search_block_content__1ZvLl",
	"search_input_label": "search_search_input_label__1uJpq",
	"search_input": "search_search_input__2XMls",
	"add_post_btn": "search_add_post_btn__3cE8b"
};


/***/ }),

/***/ "./src/components/model-profile/ModelProfileCard.jsx":
/*!***********************************************************!*\
  !*** ./src/components/model-profile/ModelProfileCard.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postProfileCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _profile_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.module.scss */ "./src/components/model-profile/profile.module.scss");
/* harmony import */ var _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_profile_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProfileCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileCarousel */ "./src/components/model-profile/ProfileCarousel.jsx");
/* harmony import */ var _ProfileVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfileVideo */ "./src/components/model-profile/ProfileVideo.jsx");
/* harmony import */ var _assets_images_main_signs_favorite_pink_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/main/signs/favorite-pink.png */ "./src/assets/images/main/signs/favorite-pink.png");
/* harmony import */ var _assets_images_main_signs_favorite_pink_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_favorite_pink_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/main/signs/crown-pink.png */ "./src/assets/images/main/signs/crown-pink.png");
/* harmony import */ var _assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/main/signs/star-pink.png */ "./src/assets/images/main/signs/star-pink.png");
/* harmony import */ var _assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/main/signs/plane-pink.png */ "./src/assets/images/main/signs/plane-pink.png");
/* harmony import */ var _assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ReportFakePhotos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ReportFakePhotos */ "./src/components/model-profile/ReportFakePhotos.jsx");
/* harmony import */ var _ReportTrafficking__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ReportTrafficking */ "./src/components/model-profile/ReportTrafficking.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\model-profile\\ModelProfileCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function postProfileCard({
  posts,
  postComments,
  createPostComment
}) {
  const {
    0: commentText,
    1: setComment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: post,
    1: setPost
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    for (let p of posts) {
      if (p.id == router.query.id) {
        setPost(p);
      }
    }
  }, [posts]);
  return __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, post.category ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: `${_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.images_track}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(_ProfileCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    photo: [post.photo_horizontal, post.photo_vertical],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(_ProfileVideo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    videoLink: post.video_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.report_btn_group,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(_ReportFakePhotos__WEBPACK_IMPORTED_MODULE_8__["default"], {
    buttonLabel: 'Report Fake Photos',
    className: ``,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }), __jsx(_ReportTrafficking__WEBPACK_IMPORTED_MODULE_9__["default"], {
    buttonLabel: 'Report Trafficking',
    className: ``,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: `${_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.favorite_btn} text-white`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Add to favourites")), __jsx("div", {
    className: `text-white ${_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content_block}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content_block_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, post.first_name, " ", post.second_name), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, post.status), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: _assets_images_main_signs_favorite_pink_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: _assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: _assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: _assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content_block_description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, "Summary"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, post.summary)), __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contacts_blue_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, post.is_verify ? 'VERIFIED VIP OTHER' : null), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, post.email ? __jsx("a", {
    href: `mailto:${post.email}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, post.email) : 'No access to see email...', post.number ? __jsx("a", {
    href: `tel:+${post.number}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, "+", post.number) : 'No access to see number...')), __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main_content_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text_block_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, "About"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, post.about)), __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.details_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, "DETAILS"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("dl", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }, __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, "Category:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, post.category.name), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, "Gender:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, post.gender), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, "Age:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, post.age), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, "Ethnicity:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, post.ethnicity.value), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, "Hair Color:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, post.hair.value), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, "Eye Color:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, post.eye.value), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, "Height:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, post.height), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, "Affiliation:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, post.affiliation.value), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, "Available To:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, post.availableto.map(a => a.value + ' ')), __jsx("dl", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }, "Availability:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, post.availability.map(a => a.value + ' ')))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, "CONTACT DETAILS"), post.number ? __jsx("a", {
    href: `tel:+${post.number}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }
  }, "+", post.number) : 'No access to see number...', post.email ? __jsx("a", {
    href: `mailto:${post.email}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  }, post.email) : 'No access to see email...')))), postComments && postComments.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.add_comment_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "text-white",
    onClick: () => {
      if (commentText.length) {
        createPostComment(router.query.id, commentText);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, "LEAVE A COMMENT"), __jsx("textarea", {
    onChange: e => setComment(e.target.value),
    rows: "8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comments_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: `${_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comments_block_title} text-white`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, "COMMENTS"), __jsx("ul", {
    className: "list-group p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, postComments.map((c, i) => __jsx("li", {
    key: i,
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comment_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }, c.user.id), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, c.created_at)), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 19
    }
  }, c.comment))))), " ") : null) : __jsx("div", {
    className: "text-center py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "spinner-border text-info",
    role: "status",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, "Loading..."))));
}

/***/ }),

/***/ "./src/components/model-profile/ProfileCarousel.jsx":
/*!**********************************************************!*\
  !*** ./src/components/model-profile/ProfileCarousel.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileCarousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _profile_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.module.scss */ "./src/components/model-profile/profile.module.scss");
/* harmony import */ var _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_profile_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_main_model_profile_model_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/main/model-profile/model-1.png */ "./src/assets/images/main/model-profile/model-1.png");
/* harmony import */ var _assets_images_main_model_profile_model_1_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_model_profile_model_1_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_main_model_profile_model_2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/main/model-profile/model-2.png */ "./src/assets/images/main/model-profile/model-2.png");
/* harmony import */ var _assets_images_main_model_profile_model_2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_model_profile_model_2_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\model-profile\\ProfileCarousel.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function ProfileCarousel() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true
  };
  return __jsx("div", {
    className: "w-100",
    style: {
      background: '#1b1c1f'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, settings, {
    style: {
      maxWidth: "1260px",
      margin: "0 auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _assets_images_main_model_profile_model_1_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "model",
    className: "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _assets_images_main_model_profile_model_2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "model",
    className: "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  })))));
}

/***/ }),

/***/ "./src/components/model-profile/ProfileVideo.jsx":
/*!*******************************************************!*\
  !*** ./src/components/model-profile/ProfileVideo.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileVideo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\model-profile\\ProfileVideo.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ProfileVideo({
  videoLink
}) {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("iframe", {
    width: "420",
    height: "315",
    className: "w-100",
    src: videoLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/model-profile/ProfilesControl.jsx":
/*!**********************************************************!*\
  !*** ./src/components/model-profile/ProfilesControl.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfilesControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _profile_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.module.scss */ "./src/components/model-profile/profile.module.scss");
/* harmony import */ var _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_profile_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\model-profile\\ProfilesControl.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ProfilesControl() {
  return __jsx("div", {
    className: `text-white ${_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profile_control}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profile_control_buttons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "PREVIUS"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, "NEXT")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, " CLOSE"))));
}

/***/ }),

/***/ "./src/components/model-profile/ReportFakePhotos.jsx":
/*!***********************************************************!*\
  !*** ./src/components/model-profile/ReportFakePhotos.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _profile_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.module.scss */ "./src/components/model-profile/profile.module.scss");
/* harmony import */ var _profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profile_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\model-profile\\ReportFakePhotos.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ReportFakePhotosModalWindow = props => {
  const {
    buttonLabel,
    className
  } = props;
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => setModal(!modal);

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    inline: true,
    onSubmit: e => e.preventDefault(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "",
    className: `font-weight-bold text-white w-100 ${_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.report_btn}`,
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, buttonLabel)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
    toggle: toggle,
    style: {
      fontFamily: 'Audiowide, cursive'
    },
    className: "bg-dark text-info border-bottom border-secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, buttonLabel), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
    className: "pb-0 bg-dark text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Want to report fake photos on this ad? If so, use the box below to enter a link to the webpage that provides potential evidence of misuse, and VibeCity will investigate your claim. If you are owner of the photos in question, follow the DMCA link at the bottom of the page."), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 14
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, "IMPORTANT"), ": VibeCity takes the misuse of photographs seriously and will investigate any reasonable evidence of misuse provided to us. However, because it is not uncommon for well known models and adult stars to advertise on VibeCity, or for adult entertainers to advertise on numerous adult websites, often times under alternate names, the information you provide may or may not always result in the removal of the advertisement, or in any action at all. Please also be aware that the VibeCity Guide cannot and does not make any guarantees or warranties that either (a) the advertiser in the pictures on any particular ad will be the same individual who shows up for any date arranged between an advertiser and yourself, (b) that any of the text, including the name of the advertiser, or stats that appears on an advertisement is accurate or truthful."))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    className: "container bg-dark text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    className: "w-100 d-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Link for Evidence of Misuse:", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "text",
    onChange: () => {},
    className: "w-100 d-block bg-dark text-white boredr border-secondary",
    placeholder: "http://...",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalFooter"], {
    className: "bg-dark text-white border-top border-secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "info",
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "SEND REPORT"), ' ', __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "secondary",
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Cancel"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ReportFakePhotosModalWindow);
reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"].propTypes = {
  // boolean to control the state of the popover
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // if modal should be centered vertically in viewport
  centered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // callback for toggling isOpen in the controlling component
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // defaults to "dialog"
  // used to reference the ID of the title element in the modal
  labelledBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  keyboard: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
  backdrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['static'])]),
  // if body of modal should be scrollable when content is long
  scrollable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // allows for a node/component to exist next to the modal (outside of it). Useful for external close buttons
  // external: PropTypes.node,
  // called on componentDidMount
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // called on componentWillUnmount
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // called when done transitioning in
  onOpened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // called when done transitioning out
  onClosed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  wrapClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  modalClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  backdropClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  contentClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // boolean to control whether the fade transition occurs (default: true)
  fade: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  // zIndex defaults to 1000.
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  // if modal should be destructed/removed from DOM after closing
  unmountOnClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // defaults to true
  // if the element which triggered the modal to open should focused after the modal closes (see example somewhere below)
  returnFocusAfterClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool // defaults to true

};

/***/ }),

/***/ "./src/components/model-profile/ReportTrafficking.jsx":
/*!************************************************************!*\
  !*** ./src/components/model-profile/ReportTrafficking.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _profile_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.module.scss */ "./src/components/model-profile/profile.module.scss");
/* harmony import */ var _profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profile_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\model-profile\\ReportTrafficking.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ReportTraffickingModalWindow = props => {
  const {
    buttonLabel,
    className
  } = props;
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => setModal(!modal);

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    inline: true,
    onSubmit: e => e.preventDefault(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "",
    className: `font-weight-bold text-white w-100 ${_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.report_btn}`,
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, buttonLabel)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
    toggle: toggle,
    style: {
      fontFamily: 'Audiowide, cursive'
    },
    className: "bg-dark text-info border-bottom border-secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, buttonLabel), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
    className: "pb-0 bg-dark text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "ANTI-TRAFFICKING ADVOCACY:"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "VibeCity is wholly committed to raising awareness on the issue of human trafficking and engages in best practices and advocacy. In the event we become aware of any incident of trafficking, we cooperate enthusiastically with law enforcement and agencies involved in combating the abuse of human rights."), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 14
    }
  }, "Please report any suspected sexual exploitation of minors and/or human trafficking to the appropriate authorities.")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("h6", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "United States:"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "http://www.missingkids.com/missingkids/servlet/PublicHomeServlet?LanguageCountry=en_US",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, "National Center for Missing & Exploited Children (NCMEC)"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "http://www.missingkids.com/missingkids/servlet/PageServlet?LanguageCountry=en_US&PageId=2936",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, "CyberTipline"), " - report child exploitation"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, "24-Hour Hotline: 1-800-843-5678"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "http://www.polarisproject.org/index.php",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "Polaris Project - Report Human Trafficking"), ": 888-373-7888"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "http://www.hhs.gov/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, " Dept. of Health & Human Services"), ": 888-373-7888"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "http://www.childrenofthenight.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, "Children of the Night"), ": 800-551-1300"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "http://www.acenational.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, " ACE National"), ": 202-220-3019"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "http://www.ice.gov/index.htm",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, " Homeland Security Investigations Tip Line"), ": 866-DHS-2-ICE"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "http://www.justice.gov/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, " Dept. of Justice"), ": 888-428-7581"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "FBI Office: ", __jsx("a", {
    href: "http://www.fbi.gov/contact-us/field",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  }, "http://www.fbi.gov/contact-us/field")))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("h6", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "Germany:"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "http://www.koetzfusbahn.de/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, " YPA Agent - Jugendschutzbeauftragter: Rechtsanwalt Dr. Daniel K\xF6tz"))))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "WARNING SIGNS OF POSSIBLE HUMAN TRAFFICKING:"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, "Does an entertainer arrive accompanied by another individual?"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, "Does that individual speak for or appear to maintain control over the entertainer?"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, "Does the entertainer seem fearful of that individual?"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "Does the entertainer have difficulty communicating, whether resulting from a language barrier or fear of interaction?"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, "Does the entertainer appear to be underage orclose to underage?")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalFooter"], {
    className: "bg-dark text-white border-top border-secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "w-100 text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "Use common sense, and contact the appropriate authorities if you suspect that someone is being trafficked."))));
};

/* harmony default export */ __webpack_exports__["default"] = (ReportTraffickingModalWindow);
reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"].propTypes = {
  // boolean to control the state of the popover
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // if modal should be centered vertically in viewport
  centered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // callback for toggling isOpen in the controlling component
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // defaults to "dialog"
  // used to reference the ID of the title element in the modal
  labelledBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  keyboard: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
  backdrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['static'])]),
  // if body of modal should be scrollable when content is long
  scrollable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // allows for a node/component to exist next to the modal (outside of it). Useful for external close buttons
  // external: PropTypes.node,
  // called on componentDidMount
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // called on componentWillUnmount
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // called when done transitioning in
  onOpened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // called when done transitioning out
  onClosed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  wrapClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  modalClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  backdropClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  contentClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // boolean to control whether the fade transition occurs (default: true)
  fade: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  // zIndex defaults to 1000.
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  // if modal should be destructed/removed from DOM after closing
  unmountOnClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // defaults to true
  // if the element which triggered the modal to open should focused after the modal closes (see example somewhere below)
  returnFocusAfterClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool // defaults to true

};

/***/ }),

/***/ "./src/components/model-profile/profile.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/model-profile/profile.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"profile_control": "profile_profile_control__27mCG",
	"profile_control_buttons": "profile_profile_control_buttons__2BVGg",
	"profile": "profile_profile__2qKam",
	"card": "profile_card__3dG9V",
	"slick-slider": "profile_slick-slider__1qzCz",
	"slick-track": "profile_slick-track__CJNkD",
	"image_block": "profile_image_block__2voGo",
	"images_track": "profile_images_track__1koYR",
	"report_btn_group": "profile_report_btn_group__1bQDf",
	"report_btn": "profile_report_btn__2vwFx",
	"favorite_btn": "profile_favorite_btn__3RLxR",
	"content_block": "profile_content_block__XlltL",
	"content_block_header": "profile_content_block_header__Mtwrp",
	"content_block_description": "profile_content_block_description__qXt-P",
	"contacts_blue_block": "profile_contacts_blue_block__nQ-OH",
	"main_content_block": "profile_main_content_block__q0ZaP",
	"text_block": "profile_text_block__2isNq",
	"text_block_title": "profile_text_block_title__2h9wE",
	"details_block": "profile_details_block__1je2t",
	"add_comment_block": "profile_add_comment_block__1zY7w",
	"comments_block": "profile_comments_block__3xRNz",
	"comments_block_title": "profile_comments_block_title__dJV3u",
	"comment": "profile_comment__3wJr7",
	"comment_title": "profile_comment_title__33t2e"
};


/***/ }),

/***/ "./src/pages/modelProfile.jsx":
/*!************************************!*\
  !*** ./src/pages/modelProfile.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home_page_Categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/home-page/Categories */ "./src/components/home-page/Categories.jsx");
/* harmony import */ var _components_home_page_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home-page/Location */ "./src/components/home-page/Location.jsx");
/* harmony import */ var _components_home_page_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home-page/Search */ "./src/components/home-page/Search.jsx");
/* harmony import */ var _components_model_profile_ProfilesControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/model-profile/ProfilesControl */ "./src/components/model-profile/ProfilesControl.jsx");
/* harmony import */ var _components_model_profile_ModelProfileCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/model-profile/ModelProfileCard */ "./src/components/model-profile/ModelProfileCard.jsx");
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/actions */ "./src/redux/actions/actions.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\pages\\modelProfile.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function ModelProfile(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    props.getAllPosts();
    props.getLocationsInfo();
    props.getPostComments(router.query.id);
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }
  }, __jsx(_components_home_page_Location__WEBPACK_IMPORTED_MODULE_2__["default"], {
    states: props.states,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }
  }), __jsx(_components_home_page_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }
  }), __jsx(_components_home_page_Categories__WEBPACK_IMPORTED_MODULE_1__["default"], {
    categories: props.categories,
    newPosts: props.newPosts,
    filterPosts: props.filterPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }
  }), __jsx(_components_model_profile_ProfilesControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }), __jsx(_components_model_profile_ModelProfileCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    posts: props.posts,
    postComments: props.postComments,
    createPostComment: props.createPostComment,
    getAllPosts: props.getAllPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }
  }));
}

const mapStateToProps = state => {
  return _objectSpread(_objectSpread({}, state), {}, {
    categories: state.app.categories,
    posts: state.app.posts,
    states: state.app.states,
    pagesNumber: state.app.pagesNumber,
    postComments: state.app.postComments,
    newPosts: state.app.newPosts
  });
};

const mapDispatchToPops = {
  getAllPosts: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["getAllPosts"],
  getLocationsInfo: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["getLocationsInfo"],
  selectPostsPage: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["selectPostsPage"],
  getPostComments: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["getPostComments"],
  createPostComment: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["createPostComment"],
  filterPosts: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["filterPosts"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToPops)(ModelProfile));

/***/ }),

/***/ "./src/redux/actions/actions.ts":
/*!**************************************!*\
  !*** ./src/redux/actions/actions.ts ***!
  \**************************************/
/*! exports provided: createPost, showLoader, hideLoader, showAlert, hideAlert, fetchPosts, getAllPosts, getNewPosts, getLocationsInfo, getAppInfo, getCities, createSupportTask, getAllUsersTasks, selectPostsPage, getPostComments, createPostComment, filterPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoader", function() { return showLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoader", function() { return hideLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAlert", function() { return showAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAlert", function() { return hideAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPosts", function() { return fetchPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewPosts", function() { return getNewPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationsInfo", function() { return getLocationsInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppInfo", function() { return getAppInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCities", function() { return getCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSupportTask", function() { return createSupportTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsersTasks", function() { return getAllUsersTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPostsPage", function() { return selectPostsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostComments", function() { return getPostComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPostComment", function() { return createPostComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterPosts", function() { return filterPosts; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/redux/actions/types.ts");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/_services/index.js");


 // T E S T 

function createPost(post) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["TEST_CREATE_POST"],
    payload: post
  };
}
;
function showLoader() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SHOW_LOADER"]
  };
}
function hideLoader() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["HIDE_LOADER"]
  };
}
function showAlert(text) {
  return dispatch => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SHOW_ALERT"],
      payload: text
    });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}
function hideAlert() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["HIDE_ALERT"]
  };
}
function fetchPosts() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["TEST_REQUEST_POSTS"]
  };
}
;
const getAllPosts = () => async dispatch => {
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/posts`);
  const promise = response.json();
  promise.then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_PAGES_NUMBER"],
      payload: res.last_page
    });
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_POSTS"],
      payload: res.data
    });
  }).catch(err => console.error('Error: ', err));
};
const getNewPosts = () => async dispatch => {
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/posts/all/new`);
  const promise = response.json();
  promise.then(res => {
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_NEW_POSTS"],
      payload: res.data
    });
  }).catch(err => console.error('Error: ', err));
};
const getLocationsInfo = () => async dispatch => {
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/location`);
  const promise = response.json();
  promise.then(res => {
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_LOCAITONS_INFO"],
      payload: res.data
    });
  }).catch(err => console.error('Error: ', err));
};
const getAppInfo = () => async dispatch => {
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/info`);
  const promise = response.json();
  promise.then(res => {
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_APP_INFO"],
      payload: res.data
    });
  }).catch(err => console.error('Error: ', err));
};
const getCities = stateId => async dispatch => {
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/location/cities/${stateId}`);
  const promise = response.json();
  promise.then(res => {
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_CITIES"],
      payload: res.data
    });
  }).catch(err => console.error('Error: ', err));
};
const createSupportTask = task => async dispatch => {
  const user = _services__WEBPACK_IMPORTED_MODULE_2__["authenticationService"].currentUserValue;
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/support/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${user.token_type} ${user.token}`
    },
    body: JSON.stringify(task)
  });
  const promise = response.json();
  promise.then(res => console.log(res)).catch(err => console.error('Error: ', err));
  return dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CREATE_SUPPORT_TASK"],
    payload: task
  });
};
const getAllUsersTasks = () => async dispatch => {
  const user = await _services__WEBPACK_IMPORTED_MODULE_2__["authenticationService"].currentUserValue;
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/support/${user.user.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${user.token_type} ${user.token}`
    }
  });
  const promise = response.json();
  promise.then(res => {
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_USER_TASKS"],
      payload: res
    });
  }).catch(err => console.error('Error: ', err));
};
const selectPostsPage = page => async dispatch => {
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/posts?page=${page}`);
  const promise = response.json();
  promise.then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_PAGES_NUMBER"],
      payload: res.last_page
    });
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_POSTS"],
      payload: res.data
    });
  });
};
const getPostComments = postId => async dispatch => {
  const user = await _services__WEBPACK_IMPORTED_MODULE_2__["authenticationService"].currentUserValue;
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/posts/${postId}/comments`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${user.token_type} ${user.token}`
    }
  });
  const promise = response.json();
  promise.then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_POST_COMMENTS"],
      payload: res.data
    });
  });
};
const createPostComment = (postId, comment) => async dispatch => {
  const user = await _services__WEBPACK_IMPORTED_MODULE_2__["authenticationService"].currentUserValue;
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/posts/${postId}/comments/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${user.token_type} ${user.token}`
    },
    body: JSON.stringify({
      comment
    })
  });
  const promise = response.json();
  promise.then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["CREATE_POST_COMMENT"],
      payload: res.data
    });
  });
};
const filterPosts = filterItemsObject => async dispatch => {
  // from, to, gender, ethnicity_id, hair_id, eye_id, category_id, affiliation_id, availability_ids(array), availableto_ids(array)
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/filter`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(filterItemsObject)
  });
  const promise = response.json();
  return promise.then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_PAGES_NUMBER"],
      payload: res.last_page
    });
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FILTER_POSTS"],
      payload: res.data.data
    });
  });
};

/***/ }),

/***/ "./src/redux/actions/types.ts":
/*!************************************!*\
  !*** ./src/redux/actions/types.ts ***!
  \************************************/
/*! exports provided: TEST_CREATE_POST, TEST_FETCH_POST, TEST_REQUEST_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, GET_ALL_POSTS, GET_PAGES_NUMBER, GET_NEW_POSTS, GET_LOCAITONS_INFO, GET_CITIES, CREATE_SUPPORT_TASK, GET_ALL_USER_TASKS, GET_APP_INFO, GET_POST_COMMENTS, CREATE_POST_COMMENT, FILTER_POSTS, ADD_POST, REMOVE_POST, UPDATE_POST, SELECT_STATE, SELECT_CITY, SELECT_LIST_SORT, SELECT_LIST_FILTER, SELECT_CATEGORY, GET_ALL_SUPPORT_TASKS, EDIT_SUPPORT_TASKS, DELETE_SUPPORT_TASK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_CREATE_POST", function() { return TEST_CREATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_FETCH_POST", function() { return TEST_FETCH_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_REQUEST_POSTS", function() { return TEST_REQUEST_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_LOADER", function() { return SHOW_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_LOADER", function() { return HIDE_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_ALERT", function() { return SHOW_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_ALERT", function() { return HIDE_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_POSTS", function() { return GET_ALL_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PAGES_NUMBER", function() { return GET_PAGES_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NEW_POSTS", function() { return GET_NEW_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LOCAITONS_INFO", function() { return GET_LOCAITONS_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CITIES", function() { return GET_CITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_SUPPORT_TASK", function() { return CREATE_SUPPORT_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_USER_TASKS", function() { return GET_ALL_USER_TASKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_APP_INFO", function() { return GET_APP_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_COMMENTS", function() { return GET_POST_COMMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST_COMMENT", function() { return CREATE_POST_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_POSTS", function() { return FILTER_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST", function() { return ADD_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST", function() { return REMOVE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST", function() { return UPDATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_STATE", function() { return SELECT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_CITY", function() { return SELECT_CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_LIST_SORT", function() { return SELECT_LIST_SORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_LIST_FILTER", function() { return SELECT_LIST_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_CATEGORY", function() { return SELECT_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_SUPPORT_TASKS", function() { return GET_ALL_SUPPORT_TASKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_SUPPORT_TASKS", function() { return EDIT_SUPPORT_TASKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_SUPPORT_TASK", function() { return DELETE_SUPPORT_TASK; });
// test
const TEST_CREATE_POST = 'CREATE_POST';
const TEST_FETCH_POST = 'FETCH_POST';
const TEST_REQUEST_POSTS = 'REQUEST_POSTS'; // app

const SHOW_LOADER = 'APP/SHOW_LOADER';
const HIDE_LOADER = 'APP/HIDE_LOADER';
const SHOW_ALERT = 'APP/SHOW_ALERT';
const HIDE_ALERT = 'APP/HIDE_ALERT';
const GET_ALL_POSTS = 'GET_ALL_POSTS';
const GET_PAGES_NUMBER = 'GET_PAGES_NUMBER';
const GET_NEW_POSTS = 'GET_NEW_POSTS';
const GET_LOCAITONS_INFO = 'GET_LOCAITONS_INFO';
const GET_CITIES = 'GET_CITIES';
const CREATE_SUPPORT_TASK = 'CREATE_SUPPORT_TASK';
const GET_ALL_USER_TASKS = 'GET_ALL_USER_TASKS';
const GET_APP_INFO = 'GET_APP_INFO';
const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
const CREATE_POST_COMMENT = 'CREATE_POST_COMMENT';
const FILTER_POSTS = 'FILTER_POSTS'; // provider

const ADD_POST = 'PROVIDER/ADD_POST';
const REMOVE_POST = 'PROVIDER/REMOVE_POST';
const UPDATE_POST = 'PROVIDER/UPDATE_POST'; // provider

// user
const SELECT_STATE = 'USER/SELECT_STATE';
const SELECT_CITY = 'USER/SELECT_CITY';
const SELECT_LIST_SORT = 'USER/SELECT_LIST_SORT';
const SELECT_LIST_FILTER = 'USER/SELECT_LIST_FILTER';
const SELECT_CATEGORY = 'USER/SELECT_CATEGORY'; // admin

const GET_ALL_SUPPORT_TASKS = 'GET_ALL_SUPPORT_TASKS';
const EDIT_SUPPORT_TASKS = 'EDIT_SUPPORT_TASKS';
const DELETE_SUPPORT_TASK = 'DELETE_SUPPORT_TASK'; // export const CREATE_CATEGORY = 'CREATE_CATEGORY';
// export const EDIT_CATEGORY = 'EDIT_CATEGORY';
// export const DELETE_CATEGORY = 'DELETE_CATEGORY';

/***/ }),

/***/ 4:
/*!******************************************!*\
  !*** multi ./src/pages/modelProfile.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\projects\vibe\src\pages\modelProfile.jsx */"./src/pages/modelProfile.jsx");


/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9faGVscGVycy9Qcml2YXRlUm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19oZWxwZXJzL2F1dGgtaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9faGVscGVycy9mYWtlLWJhY2tlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19oZWxwZXJzL2hhbmRsZS1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX2hlbHBlcnMvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19oZWxwZXJzL3JvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9fc2VydmljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zZXJ2aWNlcy91c2VyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbi9tb2RlbC1wcm9maWxlL21vZGVsLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haW4vbW9kZWwtcHJvZmlsZS9tb2RlbC0yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL2Nyb3duLXBpbmsucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvZmF2b3JpdGUtcGluay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9wbGFuZS1waW5rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3N0YXItcGluay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL0NhdGVnb3JpZXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9Mb2NhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL05ld1Bvc3RzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvU2VhcmNoLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvY2F0ZWdvcmllcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvbG9jYXRpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL3NlYXJjaC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RlbC1wcm9maWxlL01vZGVsUHJvZmlsZUNhcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGVsLXByb2ZpbGUvUHJvZmlsZUNhcm91c2VsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RlbC1wcm9maWxlL1Byb2ZpbGVWaWRlby5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwtcHJvZmlsZS9Qcm9maWxlc0NvbnRyb2wuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGVsLXByb2ZpbGUvUmVwb3J0RmFrZVBob3Rvcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwtcHJvZmlsZS9SZXBvcnRUcmFmZmlja2luZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwtcHJvZmlsZS9wcm9maWxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9tb2RlbFByb2ZpbGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlzdG9yeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpxdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91cmwiLCJfdXRpbHMiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJpc0xvY2FsIiwiaHJlZiIsInVybCIsInBhcnNlIiwib3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJob3N0IiwicHJvdG9jb2wiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdEZ1bmMiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJhcyIsInJlc3VsdCIsImZvcm1hdFVybCIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwib2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiTGluayIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJwIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwiZSIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlc29sdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbCIsImluZGV4T2YiLCJyZXBsYWNlIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiam9pbiIsIm9wdGlvbnMiLCJwYXRocyIsImNhdGNoIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwidHlwZSIsInByb2Nlc3MiLCJjbG9uZUVsZW1lbnQiLCJleGVjT25jZSIsIlByb3BUeXBlcyIsImV4YWN0IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJlbGVtZW50IiwicHJvcE5hbWUiLCJ2YWx1ZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIlJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJldmVudCIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwic2xpY2UiLCJtYXAiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJ1cmxfMSIsIm1pdHRfMSIsInV0aWxzXzEiLCJpc19keW5hbWljXzEiLCJyb3V0ZV9tYXRjaGVyXzEiLCJyb3V0ZV9yZWdleF8xIiwiYmFzZVBhdGgiLCJwYXRoIiwiZGVsQmFzZVBhdGgiLCJzdWJzdHIiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsInF1ZXJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJhdHRlbXB0cyIsImdldFJlc3BvbnNlIiwiZmV0Y2giLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsImlzU3NyIiwiYXNQYXRoIiwiX2JwcyIsIl9nZXRTdGF0aWNEYXRhIiwiUHJvbWlzZSIsIl9nZXRTZXJ2ZXJEYXRhIiwicm91dGUiLCJjb21wb25lbnRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJpc0R5bmFtaWNSb3V0ZSIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsIl9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCIsInVwZGF0ZSIsIm5ld0RhdGEiLCJub3RpZnkiLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsImNoYW5nZSIsIm1ldGhvZCIsIl9hcyIsInJlamVjdCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJ1cmxJc05ldyIsImFzUGF0aG5hbWUiLCJyb3V0ZVJlZ2V4IiwiZ2V0Um91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJnZXRSb3V0ZU1hdGNoZXIiLCJtaXNzaW5nUGFyYW1zIiwia2V5cyIsImdyb3VwcyIsImZpbHRlciIsInBhcmFtIiwiZ2V0Um91dGVJbmZvIiwicm91dGVJbmZvIiwiY2FuY2VsbGVkIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZmV0Y2hDb21wb25lbnQiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiX2dldERhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJoYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlRFU1RfUk9VVEUiLCJ0ZXN0IiwicmUiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiXyIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJyZXBlYXQiLCJlc2NhcGVSZWdleCIsInN0ciIsIm5vcm1hbGl6ZWRSb3V0ZSIsImVzY2FwZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCIkMSIsImlzQ2F0Y2hBbGwiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX2EiLCJwcm90b3R5cGUiLCJwYWdlUHJvcHMiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0IiwiU1AiLCJtZWFzdXJlIiwiUHJpdmF0ZVJvdXRlIiwiY29tcG9uZW50Iiwicm9sZXMiLCJyZXN0IiwiY3VycmVudFVzZXIiLCJhdXRoZW50aWNhdGlvblNlcnZpY2UiLCJjdXJyZW50VXNlclZhbHVlIiwiZnJvbSIsInJvbGUiLCJhdXRoSGVhZGVyIiwidG9rZW4iLCJBdXRob3JpemF0aW9uIiwiY29uZmlndXJlRmFrZUJhY2tlbmQiLCJ1c2VycyIsImlkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiUm9sZSIsIkFkbWluIiwic2Vjb25kX25hbWUiLCJlbWFpbCIsInBob25lIiwiUHJvdmlkZXIiLCJyZWFsRmV0Y2giLCJvcHRzIiwiaGVhZGVycyIsImlzTG9nZ2VkSW4iLCJzdGFydHNXaXRoIiwicm9sZVN0cmluZyIsInNldFRpbWVvdXQiLCJlbmRzV2l0aCIsIkpTT04iLCJ1c2VyIiwidSIsIlVzZXIiLCJtYXRjaCIsInVuYXV0aG9yaXNlZCIsInVybFBhcnRzIiwicGFyc2VJbnQiLCJmaW5kIiwieCIsInJlc3BvbnNlIiwidGV4dCIsInN0cmluZ2lmeSIsImhhbmRsZVJlc3BvbnNlIiwibG9nb3V0Iiwic3RhdHVzVGV4dCIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5IiwiY3VycmVudFVzZXJTdWJqZWN0IiwiQ29va2llcyIsImdldEpTT04iLCJsb2dpbiIsInJlZ2lzdHJhdGlvbkFkbWluIiwicmVnaXN0cmF0aW9uQ2xpZW50IiwicmVnaXN0cmF0aW9uUHJvdmlkZXIiLCJyZWdpc3RyYXRpb25BZ2VuY3kiLCJleHBpcmVzIiwicGFzc3dvcmRfY29uZmlybWF0aW9uIiwiY2xpZW50IiwiYWRtaW4iLCJwcm92aWRlciIsImFnZW5jeV9uYW1lIiwicHJvbWlzZSIsInJlbW92ZSIsInVzZXJTZXJ2aWNlIiwiZ2V0QWxsIiwiZ2V0QnlJZCIsImRlbGV0ZVVzZXIiLCJyZXF1ZXN0T3B0aW9ucyIsInJhdGluZyIsInBvc2l0aW9uIiwidGVsZWdyYW0iLCJ2aWJlciIsIndoYXRzYXBwIiwic2l0ZSIsImF2YXRhciIsIkNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwibmV3UG9zdHMiLCJmaWx0ZXJQb3N0cyIsImZpbHRlckNhdGVnb3J5Iiwic2V0RmlsdGVyQ2F0ZWdvcnkiLCJ1c2VTdGF0ZSIsImNoYW5nZUNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJzIiwiY2F0ZWdvcmllc19ibG9jayIsImNhdGVnb3JpZXNfdGl0bGUiLCJjYXRlZ29yaWVzX2NvbnRlbnQiLCJjYXRlZ29yaWVzX2NvbnRyb2wiLCJjIiwiaSIsInRvTG93ZXJDYXNlIiwiY2F0ZWdvcmllc19zdWJ0aXRsZSIsImNhdGVnb3JpZXNfY2Fyb3VzZWwiLCJMb2NhdGlvbiIsInN0YXRlcyIsImN1cnJlbnRMb2NhdGlvbiIsInNldEN1cnJlbnRMb2NhdGlvbiIsImNoYW5nZUxvY2F0aW9uIiwic3RhdGVJZCIsImxvY2F0aW9uX3dyYXBwZXIiLCJsb2NhdG9uX2Jsb2NrX3RpdGxlIiwibG9jYXRpb25fYmxvY2tfc2VsZWN0IiwibG9jYXRpb25fYmxvY2tfbGlzdCIsIlNpbXBsZVNsaWRlciIsInNldHRpbmdzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwiZG90cyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImRyYWdnYWJsZSIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiaW5pdGlhbFNsaWRlIiwiZmFkZSIsIm1hcmdpbiIsIm1heFdpZHRoIiwicG9zdCIsInNsaWRlIiwicGhvdG9fdmVydGljYWwiLCJtb2RlbF9uYW1lIiwiU2VhcmNoIiwic2VhcmNoX2Jsb2NrIiwic2VhcmNoX2Jsb2NrX2NvbnRlbnQiLCJzZWFyY2hfaW5wdXRfbGFiZWwiLCJzZWFyY2hfaW5wdXQiLCJhZGRfcG9zdF9idG4iLCJwb3N0UHJvZmlsZUNhcmQiLCJwb3N0cyIsInBvc3RDb21tZW50cyIsImNyZWF0ZVBvc3RDb21tZW50IiwiY29tbWVudFRleHQiLCJzZXRDb21tZW50Iiwic2V0UG9zdCIsInVzZUVmZmVjdCIsInByb2ZpbGUiLCJjYXJkIiwiaW1hZ2VfYmxvY2siLCJpbWFnZXNfdHJhY2siLCJwaG90b19ob3Jpem9udGFsIiwidmlkZW9fbGluayIsInJlcG9ydF9idG5fZ3JvdXAiLCJmYXZvcml0ZV9idG4iLCJjb250ZW50X2Jsb2NrIiwiY29udGVudF9ibG9ja19oZWFkZXIiLCJmaXJzdF9uYW1lIiwiZmF2IiwiY3Jvd24iLCJzdGFyIiwicGxhbmUiLCJjb250ZW50X2Jsb2NrX2Rlc2NyaXB0aW9uIiwic3VtbWFyeSIsImNvbnRhY3RzX2JsdWVfYmxvY2siLCJpc192ZXJpZnkiLCJudW1iZXIiLCJtYWluX2NvbnRlbnRfYmxvY2siLCJ0ZXh0X2Jsb2NrIiwidGV4dF9ibG9ja190aXRsZSIsImFib3V0IiwiZGV0YWlsc19ibG9jayIsImdlbmRlciIsImFnZSIsImV0aG5pY2l0eSIsImhhaXIiLCJleWUiLCJoZWlnaHQiLCJhZmZpbGlhdGlvbiIsImF2YWlsYWJsZXRvIiwiYSIsImF2YWlsYWJpbGl0eSIsImFkZF9jb21tZW50X2Jsb2NrIiwiY29tbWVudHNfYmxvY2siLCJjb21tZW50c19ibG9ja190aXRsZSIsImNvbW1lbnQiLCJjb21tZW50X3RpdGxlIiwiY3JlYXRlZF9hdCIsIlByb2ZpbGVDYXJvdXNlbCIsImJhY2tncm91bmQiLCJtMSIsIm0yIiwiUHJvZmlsZVZpZGVvIiwidmlkZW9MaW5rIiwiUHJvZmlsZXNDb250cm9sIiwicHJvZmlsZV9jb250cm9sIiwicHJvZmlsZV9jb250cm9sX2J1dHRvbnMiLCJSZXBvcnRGYWtlUGhvdG9zTW9kYWxXaW5kb3ciLCJidXR0b25MYWJlbCIsImNsYXNzTmFtZSIsIm1vZGFsIiwic2V0TW9kYWwiLCJ0b2dnbGUiLCJyZXBvcnRfYnRuIiwiZm9udEZhbWlseSIsIk1vZGFsIiwiaXNPcGVuIiwiYXV0b0ZvY3VzIiwiY2VudGVyZWQiLCJzaXplIiwiZnVuYyIsImxhYmVsbGVkQnkiLCJrZXlib2FyZCIsImJhY2tkcm9wIiwib25lT2YiLCJzY3JvbGxhYmxlIiwib25FbnRlciIsIm9uRXhpdCIsIm9uT3BlbmVkIiwib25DbG9zZWQiLCJ3cmFwQ2xhc3NOYW1lIiwibW9kYWxDbGFzc05hbWUiLCJiYWNrZHJvcENsYXNzTmFtZSIsImNvbnRlbnRDbGFzc05hbWUiLCJjc3NNb2R1bGUiLCJ6SW5kZXgiLCJ1bm1vdW50T25DbG9zZSIsInJldHVybkZvY3VzQWZ0ZXJDbG9zZSIsIlJlcG9ydFRyYWZmaWNraW5nTW9kYWxXaW5kb3ciLCJNb2RlbFByb2ZpbGUiLCJnZXRBbGxQb3N0cyIsImdldExvY2F0aW9uc0luZm8iLCJnZXRQb3N0Q29tbWVudHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhcHAiLCJwYWdlc051bWJlciIsIm1hcERpc3BhdGNoVG9Qb3BzIiwic2VsZWN0UG9zdHNQYWdlIiwiY29ubmVjdCIsImNyZWF0ZVBvc3QiLCJURVNUX0NSRUFURV9QT1NUIiwicGF5bG9hZCIsInNob3dMb2FkZXIiLCJTSE9XX0xPQURFUiIsImhpZGVMb2FkZXIiLCJISURFX0xPQURFUiIsInNob3dBbGVydCIsImRpc3BhdGNoIiwiU0hPV19BTEVSVCIsImhpZGVBbGVydCIsIkhJREVfQUxFUlQiLCJmZXRjaFBvc3RzIiwiVEVTVF9SRVFVRVNUX1BPU1RTIiwiR0VUX1BBR0VTX05VTUJFUiIsImxhc3RfcGFnZSIsIkdFVF9BTExfUE9TVFMiLCJnZXROZXdQb3N0cyIsIkdFVF9ORVdfUE9TVFMiLCJHRVRfTE9DQUlUT05TX0lORk8iLCJnZXRBcHBJbmZvIiwiR0VUX0FQUF9JTkZPIiwiZ2V0Q2l0aWVzIiwiR0VUX0NJVElFUyIsImNyZWF0ZVN1cHBvcnRUYXNrIiwidGFzayIsInRva2VuX3R5cGUiLCJsb2ciLCJDUkVBVEVfU1VQUE9SVF9UQVNLIiwiZ2V0QWxsVXNlcnNUYXNrcyIsIkdFVF9BTExfVVNFUl9UQVNLUyIsInBvc3RJZCIsIkdFVF9QT1NUX0NPTU1FTlRTIiwiQ1JFQVRFX1BPU1RfQ09NTUVOVCIsImZpbHRlckl0ZW1zT2JqZWN0IiwiRklMVEVSX1BPU1RTIiwiVEVTVF9GRVRDSF9QT1NUIiwiQUREX1BPU1QiLCJSRU1PVkVfUE9TVCIsIlVQREFURV9QT1NUIiwiU0VMRUNUX1NUQVRFIiwiU0VMRUNUX0NJVFkiLCJTRUxFQ1RfTElTVF9TT1JUIiwiU0VMRUNUX0xJU1RfRklMVEVSIiwiU0VMRUNUX0NBVEVHT1JZIiwiR0VUX0FMTF9TVVBQT1JUX1RBU0tTIiwiRURJVF9TVVBQT1JUX1RBU0tTIiwiREVMRVRFX1NVUFBPUlRfVEFTSyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxD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QUcsRUFBQyxxQkFBdEU7QUFBNEYsYUFBUyxFQUFDLFdBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBQUosbUJBUEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMscUJBQVI7QUFBOEIsVUFBTSxFQUFDLFFBQXJDO0FBQThDLE9BQUcsRUFBQyxxQkFBbEQ7QUFBd0UsYUFBUyxFQUFDLFdBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBQUosbUJBUkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsb0NBQVI7QUFBNkMsVUFBTSxFQUFDLFFBQXBEO0FBQTZELE9BQUcsRUFBQyxxQkFBakU7QUFBdUYsYUFBUyxFQUFDLFdBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQUosbUJBVEYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsNkJBQVI7QUFBc0MsVUFBTSxFQUFDLFFBQTdDO0FBQXNELE9BQUcsRUFBQyxxQkFBMUQ7QUFBZ0YsYUFBUyxFQUFDLFdBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUosbUJBVkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsOEJBQVI7QUFBdUMsVUFBTSxFQUFDLFFBQTlDO0FBQXVELE9BQUcsRUFBQyxxQkFBM0Q7QUFBaUYsYUFBUyxFQUFDLFdBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBQUosb0JBWEYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMseUJBQVI7QUFBa0MsVUFBTSxFQUFDLFFBQXpDO0FBQWtELE9B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aUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUUsWUFBWSxHQUFHLGNBQXJCLEMsQ0FFUDs7QUFDTyxNQUFNRSxRQUFRLEdBQUcsbUJBQWpCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLHNCQUFwQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxzQkFBcEIsQyxDQUVQOztBQXVCQTtBQUNPLE1BQU1DLFlBQVksR0FBRyxtQkFBckI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsa0JBQXBCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsdUJBQXpCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcseUJBQTNCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLHNCQUF4QixDLENBRVA7O0FBQ08sTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCLEMsQ0FDUDtBQUNBO0FBQ0Esb0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBLG9DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxtb2RlbFByb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXJsPXJlcXVpcmUoXCJ1cmxcIik7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO3ZhciBfcm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm91dGVyXCIpKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO2Z1bmN0aW9uIGlzTG9jYWwoaHJlZil7dmFyIHVybD0oMCxfdXJsLnBhcnNlKShocmVmLGZhbHNlLHRydWUpO3ZhciBvcmlnaW49KDAsX3VybC5wYXJzZSkoKDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpLGZhbHNlLHRydWUpO3JldHVybiF1cmwuaG9zdHx8dXJsLnByb3RvY29sPT09b3JpZ2luLnByb3RvY29sJiZ1cmwuaG9zdD09PW9yaWdpbi5ob3N0O31mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jKXt2YXIgbGFzdEhyZWY9bnVsbDt2YXIgbGFzdEFzPW51bGw7dmFyIGxhc3RSZXN1bHQ9bnVsbDtyZXR1cm4oaHJlZixhcyk9PntpZihsYXN0UmVzdWx0JiZocmVmPT09bGFzdEhyZWYmJmFzPT09bGFzdEFzKXtyZXR1cm4gbGFzdFJlc3VsdDt9dmFyIHJlc3VsdD1mb3JtYXRGdW5jKGhyZWYsYXMpO2xhc3RIcmVmPWhyZWY7bGFzdEFzPWFzO2xhc3RSZXN1bHQ9cmVzdWx0O3JldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZm9ybWF0VXJsKHVybCl7cmV0dXJuIHVybCYmdHlwZW9mIHVybD09PSdvYmplY3QnPygwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikodXJsKTp1cmw7fXZhciBvYnNlcnZlcjt2YXIgbGlzdGVuZXJzPW5ldyBNYXAoKTt2YXIgSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP3dpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcjpudWxsO3ZhciBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIGdldE9ic2VydmVyKCl7Ly8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbmlmKG9ic2VydmVyKXtyZXR1cm4gb2JzZXJ2ZXI7fS8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuaWYoIUludGVyc2VjdGlvbk9ic2VydmVyKXtyZXR1cm4gdW5kZWZpbmVkO31yZXR1cm4gb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9PntpZighbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKXtyZXR1cm47fXZhciBjYj1saXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCk7aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjApe29ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO2xpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KTtjYigpO319KTt9LHtyb290TWFyZ2luOicyMDBweCd9KTt9dmFyIGxpc3RlblRvSW50ZXJzZWN0aW9ucz0oZWwsY2IpPT57dmFyIG9ic2VydmVyPWdldE9ic2VydmVyKCk7aWYoIW9ic2VydmVyKXtyZXR1cm4oKT0+e307fW9ic2VydmVyLm9ic2VydmUoZWwpO2xpc3RlbmVycy5zZXQoZWwsY2IpO3JldHVybigpPT57dHJ5e29ic2VydmVyLnVub2JzZXJ2ZShlbCk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO31saXN0ZW5lcnMuZGVsZXRlKGVsKTt9O307Y2xhc3MgTGluayBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IocHJvcHMpe3N1cGVyKHByb3BzKTt0aGlzLnA9dm9pZCAwO3RoaXMuY2xlYW5VcExpc3RlbmVycz0oKT0+e307dGhpcy5mb3JtYXRVcmxzPW1lbW9pemVkRm9ybWF0VXJsKChocmVmLGFzSHJlZik9PntyZXR1cm57aHJlZjooMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGhyZWYpKSxhczphc0hyZWY/KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChhc0hyZWYpKTphc0hyZWZ9O30pO3RoaXMubGlua0NsaWNrZWQ9ZT0+e3Zhcntub2RlTmFtZSx0YXJnZXR9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZS5tZXRhS2V5fHxlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUubmF0aXZlRXZlbnQmJmUubmF0aXZlRXZlbnQud2hpY2g9PT0yKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxucmV0dXJuO312YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTtpZighaXNMb2NhbChocmVmKSl7Ly8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxucmV0dXJuO312YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjtocmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsaHJlZik7YXM9YXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxhcyk6aHJlZjtlLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG52YXJ7c2Nyb2xsfT10aGlzLnByb3BzO2lmKHNjcm9sbD09bnVsbCl7c2Nyb2xsPWFzLmluZGV4T2YoJyMnKTwwO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbl9yb3V0ZXIuZGVmYXVsdFt0aGlzLnByb3BzLnJlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdzp0aGlzLnByb3BzLnNoYWxsb3d9KS50aGVuKHN1Y2Nlc3M9PntpZighc3VjY2VzcylyZXR1cm47aWYoc2Nyb2xsKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtkb2N1bWVudC5ib2R5LmZvY3VzKCk7fX0pO307aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHByb3BzLnByZWZldGNoKXtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319dGhpcy5wPXByb3BzLnByZWZldGNoIT09ZmFsc2U7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7fWdldFBhdGhzKCl7dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247dmFye2hyZWY6cGFyc2VkSHJlZixhczpwYXJzZWRBc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTt2YXIgcmVzb2x2ZWRIcmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkSHJlZik7cmV0dXJuW3Jlc29sdmVkSHJlZixwYXJzZWRBcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEFzKTpyZXNvbHZlZEhyZWZdO31oYW5kbGVSZWYocmVmKXtpZih0aGlzLnAmJkludGVyc2VjdGlvbk9ic2VydmVyJiZyZWYmJnJlZi50YWdOYW1lKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt2YXIgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbdGhpcy5nZXRQYXRocygpLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldO2lmKCFpc1ByZWZldGNoZWQpe3RoaXMuY2xlYW5VcExpc3RlbmVycz1saXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCgpPT57dGhpcy5wcmVmZXRjaCgpO30pO319fS8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG5wcmVmZXRjaChvcHRpb25zKXtpZighdGhpcy5wfHx0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbnZhciBwYXRocz10aGlzLmdldFBhdGhzKCk7Ly8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbl9yb3V0ZXIuZGVmYXVsdC5wcmVmZXRjaChwYXRoc1svKiBocmVmICovMF0scGF0aHNbLyogYXNQYXRoICovMV0sb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7cHJlZmV0Y2hlZFtwYXRocy5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXT10cnVlO31yZW5kZXIoKXt2YXJ7Y2hpbGRyZW59PXRoaXMucHJvcHM7dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxudmFyIGNoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt2YXIgcHJvcHM9e3JlZjplbD0+e3RoaXMuaGFuZGxlUmVmKGVsKTtpZihjaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZil7aWYodHlwZW9mIGNoaWxkLnJlZj09PSdmdW5jdGlvbicpY2hpbGQucmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZC5yZWY9PT0nb2JqZWN0Jyl7Y2hpbGQucmVmLmN1cnJlbnQ9ZWw7fX19LG9uTW91c2VFbnRlcjplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXRoaXMucHJlZmV0Y2goe3ByaW9yaXR5OnRydWV9KTt9LG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe3RoaXMubGlua0NsaWNrZWQoZSk7fX19Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZih0aGlzLnByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7cHJvcHMuaHJlZj1hc3x8aHJlZjt9Ly8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCl7dmFyIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0PXJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O2lmKHByb3BzLmhyZWYmJnR5cGVvZiBfX05FWFRfREFUQV9fIT09J3VuZGVmaW5lZCcmJl9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCl7cHJvcHMuaHJlZj1yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKTt9fXJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO319aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt2YXIgd2Fybj0oMCxfdXRpbHMuZXhlY09uY2UpKGNvbnNvbGUuZXJyb3IpOy8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxudmFyIFByb3BUeXBlcz1yZXF1aXJlKCdwcm9wLXR5cGVzJyk7dmFyIGV4YWN0PXJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKTsvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG5MaW5rLnByb3BUeXBlcz1leGFjdCh7aHJlZjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLGFzOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLHByZWZldGNoOlByb3BUeXBlcy5ib29sLHJlcGxhY2U6UHJvcFR5cGVzLmJvb2wsc2hhbGxvdzpQcm9wVHlwZXMuYm9vbCxwYXNzSHJlZjpQcm9wVHlwZXMuYm9vbCxzY3JvbGw6UHJvcFR5cGVzLmJvb2wsY2hpbGRyZW46UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsKHByb3BzLHByb3BOYW1lKT0+e3ZhciB2YWx1ZT1wcm9wc1twcm9wTmFtZV07aWYodHlwZW9mIHZhbHVlPT09J3N0cmluZycpe3dhcm4oXCJXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+XCIpO31yZXR1cm4gbnVsbDt9XSkuaXNSZXF1aXJlZH0pO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL3ZhciBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG52YXIgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJ107dmFyIHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTt2YXIgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09ZnVuY3Rpb24oKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LGZ1bmN0aW9uKCl7dmFyIGV2ZW50RmllbGQ9XCJvblwiK2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2V2ZW50LnN1YnN0cmluZygxKTt2YXIgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJndW1lbnRzKTt9Y2F0Y2goZXJyKXsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihcIkVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiBcIitldmVudEZpZWxkKTsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihlcnIubWVzc2FnZStcIlxcblwiK2Vyci5zdGFjayk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7dmFyIG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG52YXIgY3JlYXRlUm91dGVyPWZ1bmN0aW9uIGNyZWF0ZVJvdXRlcigpe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9bmV3IEFycmF5KF9sZW4pLF9rZXk9MDtfa2V5PF9sZW47X2tleSsrKXthcmdzW19rZXldPWFyZ3VtZW50c1tfa2V5XTt9c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe3ZhciBfcm91dGVyPXJvdXRlcjt2YXIgaW5zdGFuY2U9e307Zm9yKHZhciBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKHt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT1mdW5jdGlvbigpe3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cmV0dXJuIGluc3RhbmNlO30iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPVwid2l0aFJvdXRlcihcIituYW1lK1wiKVwiO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fSIsIlwidXNlIHN0cmljdFwiO1xuLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtaXR0KCkge1xuICAgIGNvbnN0IGFsbCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb24odHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9LFxuICAgICAgICBvZmYodHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQodHlwZSwgLi4uZXZ0cykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKC4uLmV2dHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1pdHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbmNvbnN0IG1pdHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgaXNfZHluYW1pY18xID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbmNvbnN0IHJvdXRlX21hdGNoZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG5jb25zdCByb3V0ZV9yZWdleF8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoO1xufVxuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICAgICAgOiBwYXRoO1xufVxuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLyc7XG59XG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aCkgPT4gdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpO1xuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIGlzU2VydmVyUmVuZGVyLCBjYikge1xuICAgIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDE7XG4gICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYCksXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSksIHtcbiAgICAgICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBlcnIuY29kZSA9ICdQQUdFX0xPQURfRVJST1InO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUsIHF1ZXJ5LCBhcywgeyBpbml0aWFsUHJvcHMsIHBhZ2VMb2FkZXIsIEFwcCwgd3JhcEFwcCwgQ29tcG9uZW50LCBlcnIsIHN1YnNjcmlwdGlvbiwgaXNGYWxsYmFjaywgfSkge1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHt9O1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIHV0aWxzXzEuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAoZS5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgICAgICAgICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgICAgICAgICAgIHVybF8xLnBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUodXJsXzEucGFyc2UoYXNQYXRoKS5wYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICAgICAgICAgICAgOiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBudWxsLCB0aGlzLmlzU3NyLCBkYXRhID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHVybF8xLnBhcnNlKGFzUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMuYXNQYXRoID1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgIGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhcztcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICAgIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShyb3V0ZSwgbW9kKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IG1vZC5kZWZhdWx0IHx8IG1vZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IENvbXBvbmVudCwgX19OX1NTRzogbW9kLl9fTl9TU0csIF9fTl9TU1A6IG1vZC5fX05fU1NQIH0pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YTtcbiAgICAgICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICAgKi9cbiAgICBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcHVzaCh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICByZXBsYWNlKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjaGFuZ2UobWV0aG9kLCBfdXJsLCBfYXMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgICAgIGlmICh1dGlsc18xLlNUKSB7XG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybDtcbiAgICAgICAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzO1xuICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKTtcbiAgICAgICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcyk7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHVybF8xLnBhcnNlKGFzKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gcm91dGVfcmVnZXhfMS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcm91dGVfbWF0Y2hlcl8xLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW0gPT4gIXF1ZXJ5W3BhcmFtXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgICAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKHJvdXRlSW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IHV0aWxzXzEuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAgICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyLCBsb2FkRXJyb3JGYWlsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnaXBFcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcyA9PiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICB9KSwgcmVqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhKCgpID0+IF9fTl9TU0dcbiAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICB0aGlzLm5vdGlmeShkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgICAqL1xuICAgIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgICAqL1xuICAgIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICAgICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpO1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiB1dGlsc18xLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyk7XG4gICAgICAgICAgICBlLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhKSB7XG4gICAgICAgIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblJvdXRlci5ldmVudHMgPSBtaXR0XzEuZGVmYXVsdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87XG5mdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO1xufVxuZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZSA9IGlzRHluYW1pY1JvdXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkge1xuICAgIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleDtcbiAgICByZXR1cm4gKHBhdGhuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVjb2RlID0gKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtcbiAgICAgICAgICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXTtcbiAgICAgICAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcChlbnRyeSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgICAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVNYXRjaGVyID0gZ2V0Um91dGVNYXRjaGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKTtcbn1cbmZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKSB7XG4gICAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICAgIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJyk7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgbGV0IGdyb3VwSW5kZXggPSAxO1xuICAgIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICBncm91cHNbJDFcbiAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfTtcbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAnLyguKz8pJyA6ICcvKFteL10rPyknO1xuICAgIH0pO1xuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTtcbiAgICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJyk7XG4gICAgICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSwgZ3JvdXBzIH0sIChuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICAgICAgfVxuICAgICAgICA6IHt9KSk7XG59XG5leHBvcnRzLmdldFJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG4vKipcbiAqIFV0aWxzXG4gKi9cbmZ1bmN0aW9uIGV4ZWNPbmNlKGZuKSB7XG4gICAgbGV0IHVzZWQgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHJldHVybiAoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCF1c2VkKSB7XG4gICAgICAgICAgICB1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmV4ZWNPbmNlID0gZXhlY09uY2U7XG5mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWA7XG59XG5leHBvcnRzLmdldExvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW47XG5mdW5jdGlvbiBnZXRVUkwoKSB7XG4gICAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7XG59XG5leHBvcnRzLmdldFVSTCA9IGdldFVSTDtcbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IENvbXBvbmVudFxuICAgICAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG59XG5leHBvcnRzLmdldERpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWU7XG5mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnQ7XG59XG5leHBvcnRzLmlzUmVzU2VudCA9IGlzUmVzU2VudDtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCBjdHgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKChfYSA9IEFwcC5wcm90b3R5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICAgIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpO1xuICAgIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG59XG5leHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHMgPSBsb2FkR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy51cmxPYmplY3RLZXlzID0gW1xuICAgICdhdXRoJyxcbiAgICAnaGFzaCcsXG4gICAgJ2hvc3QnLFxuICAgICdob3N0bmFtZScsXG4gICAgJ2hyZWYnLFxuICAgICdwYXRoJyxcbiAgICAncGF0aG5hbWUnLFxuICAgICdwb3J0JyxcbiAgICAncHJvdG9jb2wnLFxuICAgICdxdWVyeScsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NsYXNoZXMnLFxuXTtcbmZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwb3J0cy51cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxfMS5mb3JtYXQodXJsLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb24gPSBmb3JtYXRXaXRoVmFsaWRhdGlvbjtcbmV4cG9ydHMuU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0cy5TVCA9IGV4cG9ydHMuU1AgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgeyBhdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByaXZhdGVSb3V0ZSA9ICh7IGNvbXBvbmVudDogQ29tcG9uZW50LCByb2xlcywgLi4ucmVzdCB9KSA9PiAoXHJcbiAgPFJvdXRlIHsuLi5yZXN0fSByZW5kZXI9e3Byb3BzID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XHJcbiAgICBpZiAoIWN1cnJlbnRVc2VyKSB7XHJcbiAgICAgIC8vIG5vdCBsb2dnZWQgaW4gc28gcmVkaXJlY3QgdG8gbG9naW4gcGFnZSB3aXRoIHRoZSByZXR1cm4gdXJsXHJcbiAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89e3sgcGF0aG5hbWU6ICcvbG9naW4nLCBzdGF0ZTogeyBmcm9tOiBwcm9wcy5sb2NhdGlvbiB9IH19IC8+XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgcm91dGUgaXMgcmVzdHJpY3RlZCBieSByb2xlXHJcbiAgICBpZiAocm9sZXMgJiYgcm9sZXMuaW5kZXhPZihjdXJyZW50VXNlci5yb2xlKSA9PT0gLTEpIHtcclxuICAgICAgLy8gcm9sZSBub3QgYXV0aG9yaXNlZCBzbyByZWRpcmVjdCB0byBob21lIHBhZ2VcclxuICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17eyBwYXRobmFtZTogJy8nIH19IC8+XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXV0aG9yaXNlZCBzbyByZXR1cm4gY29tcG9uZW50XHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XHJcbiAgfX0gLz5cclxuKSIsImltcG9ydCB7IGF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXV0aEhlYWRlcigpIHtcclxuICAvLyByZXR1cm4gYXV0aG9yaXphdGlvbiBoZWFkZXIgd2l0aCBqd3QgdG9rZW5cclxuICBjb25zdCBjdXJyZW50VXNlciA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xyXG4gIGlmIChjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci50b2tlbikge1xyXG4gICAgcmV0dXJuIHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2N1cnJlbnRVc2VyLnRva2VufWAgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSb2xlIH0gZnJvbSAnLi8nXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlRmFrZUJhY2tlbmQoKSB7XHJcbiAgbGV0IHVzZXJzID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgdXNlcm5hbWU6ICdhZG1pbicsXHJcbiAgICAgIHBhc3N3b3JkOiAnYWRtaW4nLFxyXG4gICAgICBmaXJzdE5hbWU6ICdBZG1pbicsXHJcbiAgICAgIGxhc3ROYW1lOiAnQWRtaW4nLFxyXG4gICAgICByb2xlOiBSb2xlLkFkbWluLFxyXG4gICAgICBuYW1lOiBcIkFkbWluXCIsXHJcbiAgICAgIHNlY29uZF9uYW1lOiBudWxsLFxyXG4gICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgcGhvbmU6IFwiMzgwOTUzNDQ0MzQ4XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgdXNlcm5hbWU6ICd1c2VyJyxcclxuICAgICAgcGFzc3dvcmQ6ICd1c2VyJyxcclxuICAgICAgZmlyc3ROYW1lOiAnSXZhbicsXHJcbiAgICAgIGxhc3ROYW1lOiAnVXNlcicsXHJcbiAgICAgIHJvbGU6IFJvbGUuQWRtaW4sXHJcbiAgICAgIG5hbWU6IFwiVXNlclwiLFxyXG4gICAgICBzZWNvbmRfbmFtZTogbnVsbCxcclxuICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgIHBob25lOiBcIjM4MDk1MzQ0NDM0OFwiLFxyXG4gICAgfSxcclxuICAgICxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIHVzZXJuYW1lOiAncHJvJyxcclxuICAgICAgcGFzc3dvcmQ6ICdwcm8nLFxyXG4gICAgICBmaXJzdE5hbWU6ICdNb2RlbCcsXHJcbiAgICAgIGxhc3ROYW1lOiAnUHJvdmlkZXInLFxyXG4gICAgICByb2xlOiBSb2xlLlByb3ZpZGVyLFxyXG4gICAgICBuYW1lOiBcIk1vZGVsXCIsXHJcbiAgICAgIHNlY29uZF9uYW1lOiBudWxsLFxyXG4gICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgcGhvbmU6IFwiMzgwOTUzNDQ0MzQ4XCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBsZXQgcmVhbEZldGNoID0gd2luZG93LmZldGNoO1xyXG4gIHdpbmRvdy5mZXRjaCA9IGZ1bmN0aW9uICh1cmwsIG9wdHMpIHtcclxuICAgIGNvbnN0IGF1dGhIZWFkZXIgPSBvcHRzLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXTtcclxuICAgIGNvbnN0IGlzTG9nZ2VkSW4gPSBhdXRoSGVhZGVyICYmIGF1dGhIZWFkZXIuc3RhcnRzV2l0aCgnQmVhcmVyIGZha2Utand0LXRva2VuJyk7XHJcbiAgICBjb25zdCByb2xlU3RyaW5nID0gaXNMb2dnZWRJbiAmJiBhdXRoSGVhZGVyLnNwbGl0KCcuJylbMV07XHJcbiAgICBjb25zdCByb2xlID0gcm9sZVN0cmluZyA/IFJvbGVbcm9sZVN0cmluZ10gOiBudWxsO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIC8vIHdyYXAgaW4gdGltZW91dCB0byBzaW11bGF0ZSBzZXJ2ZXIgYXBpIGNhbGxcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gYXV0aGVudGljYXRlIC0gcHVibGljXHJcbiAgICAgICAgaWYgKHVybC5lbmRzV2l0aCgnL2FwaS9hdXRoL2xvZ2luJykgJiYgb3B0cy5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgICAgY29uc3QgcGFyYW1zID0gSlNPTi5wYXJzZShvcHRzLmJvZHkpO1xyXG4gICAgICAgICAgLy8gY29uc3QgdXNlciA9IHVzZXJzLmZpbmQoeCA9PiB4LnVzZXJuYW1lID09PSBwYXJhbXMudXNlcm5hbWUgJiYgeC5wYXNzd29yZCA9PT0gcGFyYW1zLnBhc3N3b3JkKTtcclxuICAgICAgICAgIGxldCB1c2VyO1xyXG4gICAgICAgICAgdXNlcnMuZm9yRWFjaCh1ID0+IHtcclxuICAgICAgICAgICAgaWYgKHUucGFzc3dvcmQgPT09IHBhcmFtcy5wYXNzd29yZCAmJiB1LnVzZXJuYW1lID09PSBwYXJhbXMudXNlcm5hbWUpIHJldHVybiB1c2VyID0gdTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoIXVzZXIpIHJldHVybiBlcnJvcignVXNlcm5hbWUgb3IgcGFzc3dvcmQgaXMgaW5jb3JyZWN0Jyk7XHJcbiAgICAgICAgICByZXR1cm4gb2soe1xyXG4gICAgICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogdXNlci5maXJzdE5hbWUsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiB1c2VyLmxhc3ROYW1lLFxyXG4gICAgICAgICAgICByb2xlOiB1c2VyLnJvbGUsXHJcbiAgICAgICAgICAgIHRva2VuOiBgZmFrZS1qd3QtdG9rZW4uJHt1c2VyLnJvbGV9YCxcclxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgICAgICBzZWNvbmRfbmFtZTogdXNlci5zZWNvbmRfbmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgIHBob25lOiB1c2VyLnBob25lXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1cmwuZW5kc1dpdGgoJy9hcGkvYXV0aC9yZWdpc3RlcicpICYmIG9wdHMubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IEpTT04ucGFyc2Uob3B0cy5ib2R5KTtcclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgICAgIGlkOiB1c2Vycy5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogcGFyYW1zLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogcGFyYW1zLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICdOb3JtYWwnLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogUm9sZS5Vc2VyLFxyXG4gICAgICAgICAgICBuYW1lOiBudWxsLFxyXG4gICAgICAgICAgICBzZWNvbmRfbmFtZTogbnVsbCxcclxuICAgICAgICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgICAgICAgIHBob25lOiBudWxsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdXNlcnMucHVzaCh1c2VyKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gb2soe1xyXG4gICAgICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogdXNlci5maXJzdE5hbWUsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiB1c2VyLmxhc3ROYW1lLFxyXG4gICAgICAgICAgICByb2xlOiB1c2VyLnJvbGUsXHJcbiAgICAgICAgICAgIHRva2VuOiBgZmFrZS1qd3QtdG9rZW4uJHt1c2VyLnJvbGV9YCxcclxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgICAgICBzZWNvbmRfbmFtZTogdXNlci5zZWNvbmRfbmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgIHBob25lOiB1c2VyLnBob25lXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdldCB1c2VyIGJ5IGlkIC0gYWRtaW4gb3IgdXNlciAodXNlciBjYW4gb25seSBhY2Nlc3MgdGhlaXIgb3duIHJlY29yZClcclxuICAgICAgICBpZiAodXJsLm1hdGNoKC9cXC91c2Vyc1xcL1xcZCskLykgJiYgb3B0cy5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgICBpZiAoIWlzTG9nZ2VkSW4pIHJldHVybiB1bmF1dGhvcmlzZWQoKTtcclxuXHJcbiAgICAgICAgICAvLyBnZXQgaWQgZnJvbSByZXF1ZXN0IHVybFxyXG4gICAgICAgICAgbGV0IHVybFBhcnRzID0gdXJsLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICBsZXQgaWQgPSBwYXJzZUludCh1cmxQYXJ0c1t1cmxQYXJ0cy5sZW5ndGggLSAxXSk7XHJcblxyXG4gICAgICAgICAgLy8gb25seSBhbGxvdyBub3JtYWwgdXNlcnMgYWNjZXNzIHRvIHRoZWlyIG93biByZWNvcmRcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlcnMuZmluZCh4ID0+IHgucm9sZSA9PT0gcm9sZSk7XHJcbiAgICAgICAgICBpZiAoaWQgIT09IGN1cnJlbnRVc2VyLmlkICYmIHJvbGUgIT09IFJvbGUuQWRtaW4pIHJldHVybiB1bmF1dGhvcmlzZWQoKTtcclxuXHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh4ID0+IHguaWQgPT09IGlkKTtcclxuICAgICAgICAgIHJldHVybiBvayh1c2VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdldCBhbGwgdXNlcnMgLSBhZG1pbiBvbmx5XHJcbiAgICAgICAgaWYgKHVybC5lbmRzV2l0aCgnL3VzZXJzJykgJiYgb3B0cy5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgICBpZiAocm9sZSAhPT0gUm9sZS5BZG1pbikgcmV0dXJuIHVuYXV0aG9yaXNlZCgpO1xyXG4gICAgICAgICAgcmV0dXJuIG9rKHVzZXJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHBhc3MgdGhyb3VnaCBhbnkgcmVxdWVzdHMgbm90IGhhbmRsZWQgYWJvdmVcclxuICAgICAgICByZWFsRmV0Y2godXJsLCBvcHRzKS50aGVuKHJlc3BvbnNlID0+IHJlc29sdmUocmVzcG9uc2UpKTtcclxuXHJcbiAgICAgICAgLy8gcHJpdmF0ZSBoZWxwZXIgZnVuY3Rpb25zXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9rKGJvZHkpIHtcclxuICAgICAgICAgIHJlc29sdmUoeyBvazogdHJ1ZSwgdGV4dDogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKEpTT04uc3RyaW5naWZ5KGJvZHkpKSB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdW5hdXRob3Jpc2VkKCkge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7IHN0YXR1czogNDAxLCB0ZXh0OiAoKSA9PiBQcm9taXNlLnJlc29sdmUoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiAnVW5hdXRob3Jpc2VkJyB9KSkgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcclxuICAgICAgICAgIHJlc29sdmUoeyBzdGF0dXM6IDQwMCwgdGV4dDogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZSB9KSkgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgYXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vX3NlcnZpY2VzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xyXG4gIHJldHVybiByZXNwb25zZS50ZXh0KCkudGhlbih0ZXh0ID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB0ZXh0ICYmIEpTT04ucGFyc2UodGV4dCk7XHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGlmIChbNDAxLCA0MDNdLmluZGV4T2YocmVzcG9uc2Uuc3RhdHVzKSAhPT0gLTEpIHtcclxuICAgICAgICAvLyBhdXRvIGxvZ291dCBpZiA0MDEgVW5hdXRob3JpemVkIG9yIDQwMyBGb3JiaWRkZW4gcmVzcG9uc2UgcmV0dXJuZWQgZnJvbSBhcGlcclxuICAgICAgICBhdXRoZW50aWNhdGlvblNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZXJyb3IgPSAoZGF0YSAmJiBkYXRhLm1lc3NhZ2UpIHx8IHJlc3BvbnNlLnN0YXR1c1RleHQ7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuXHJcbmxldCBoaXN0b3J5XHJcblxyXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xyXG4gIC8vIGNvbnN0IGNyZWF0ZUJyb3dzZXJIaXN0b3J5ID0gcmVxdWlyZSgnaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeScpLmRlZmF1bHRcclxuXHJcbiAgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KClcclxufVxyXG5cclxuZXhwb3J0IHsgaGlzdG9yeSB9O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL1ByaXZhdGVSb3V0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC1oZWFkZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2Zha2UtYmFja2VuZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaGFuZGxlLXJlc3BvbnNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9oaXN0b3J5JztcclxuZXhwb3J0ICogZnJvbSAnLi9yb2xlJztcclxuIiwiZXhwb3J0IGNvbnN0IFJvbGUgPSB7XHJcbiAgQWRtaW46ICdBZG1pbicsXHJcbiAgVXNlcjogJ1VzZXInLFxyXG4gIFByb3ZpZGVyOiAnUHJvdmlkZXInXHJcbn1cclxuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgeyBoYW5kbGVSZXNwb25zZSB9IGZyb20gXCIuLi9faGVscGVyc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxubGV0IGN1cnJlbnRVc2VyU3ViamVjdCA9IENvb2tpZXMuZ2V0SlNPTihcImN1cnJlbnRVc2VyXCIpXHJcbiAgPyBDb29raWVzLmdldEpTT04oXCJjdXJyZW50VXNlclwiKVxyXG4gIDoge307XHJcblxyXG5jb25zdCB0YXJnZXQgPSBgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaWA7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRpb25TZXJ2aWNlID0ge1xyXG4gIGxvZ2luLFxyXG4gIGxvZ291dCxcclxuICByZWdpc3RyYXRpb25BZG1pbixcclxuICByZWdpc3RyYXRpb25DbGllbnQsXHJcbiAgcmVnaXN0cmF0aW9uUHJvdmlkZXIsXHJcbiAgcmVnaXN0cmF0aW9uQWdlbmN5LFxyXG4gIGN1cnJlbnRVc2VyOiBjdXJyZW50VXNlclN1YmplY3QsXHJcbiAgZ2V0IGN1cnJlbnRVc2VyVmFsdWUoKSB7XHJcbiAgICByZXR1cm4gY3VycmVudFVzZXJTdWJqZWN0O1xyXG4gIH0sXHJcbn07XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICByZXR1cm4gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9sb2dpbmAsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcclxuICB9KVxyXG4gICAgLnRoZW4oaGFuZGxlUmVzcG9uc2UpXHJcbiAgICAudGhlbigodXNlcikgPT4ge1xyXG4gICAgICBpZiAodXNlci50b2tlbikge1xyXG4gICAgICAgIENvb2tpZXMuc2V0KFwiY3VycmVudFVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlciksIHsgZXhwaXJlczogMSB9KTtcclxuICAgICAgICBjdXJyZW50VXNlclN1YmplY3QgPSB1c2VyO1xyXG4gICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkNsaWVudChcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgcGFzc3dvcmQ6IHN0cmluZyxcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogc3RyaW5nXHJcbik6IFByb21pc2U8YW55PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2NsaWVudC9yZWdpc3RlcmAsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uLFxyXG4gICAgfSksXHJcbiAgfSlcclxuICAgIC50aGVuKGhhbmRsZVJlc3BvbnNlKVxyXG4gICAgLnRoZW4oKGNsaWVudCkgPT4ge1xyXG4gICAgICBDb29raWVzLnNldChcImN1cnJlbnRVc2VyXCIsIEpTT04uc3RyaW5naWZ5KGNsaWVudCkpO1xyXG4gICAgICBjdXJyZW50VXNlclN1YmplY3QgPSBjbGllbnQ7XHJcbiAgICAgIHJldHVybiBjbGllbnQ7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBsb2dpbihlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IFJvdXRlci5wdXNoKFwiL3VzZXJDYWJpbmV0XCIpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0cmF0aW9uQWRtaW4oXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIHBhc3N3b3JkOiBzdHJpbmcsXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwYXNzd29yZF9jb25maXJtYXRpb246IHN0cmluZ1xyXG4pOiBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2FkbWluL3JlZ2lzdGVyYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgbmFtZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZF9jb25maXJtYXRpb24sXHJcbiAgICB9KSxcclxuICB9KVxyXG4gICAgLnRoZW4oaGFuZGxlUmVzcG9uc2UpXHJcbiAgICAudGhlbigoYWRtaW4pID0+IHtcclxuICAgICAgQ29va2llcy5zZXQoXCJjdXJyZW50VXNlclwiLCBKU09OLnN0cmluZ2lmeShhZG1pbikpO1xyXG4gICAgICBjdXJyZW50VXNlclN1YmplY3QgPSBhZG1pbjtcclxuICAgICAgcmV0dXJuIGFkbWluO1xyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIGxvZ2luKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0cmF0aW9uUHJvdmlkZXIoXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIHBhc3N3b3JkOiBzdHJpbmcsXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwYXNzd29yZF9jb25maXJtYXRpb246IHN0cmluZyxcclxuICBwaG9uZTogc3RyaW5nIHwgbnVtYmVyXHJcbik6IFByb21pc2U8YW55PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKGAke3RhcmdldH0vaW5kaXZpZHVhbC9yZWdpc3RlcmAsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uLFxyXG4gICAgICBwaG9uZVxyXG4gICAgfSksXHJcbiAgfSlcclxuICAgIC50aGVuKGhhbmRsZVJlc3BvbnNlKVxyXG4gICAgLnRoZW4oKHByb3ZpZGVyKSA9PiB7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiY3VycmVudFVzZXJcIiwgSlNPTi5zdHJpbmdpZnkocHJvdmlkZXIudXNlcikpO1xyXG4gICAgICBjdXJyZW50VXNlclN1YmplY3QgPSBwcm92aWRlcjtcclxuICAgICAgcmV0dXJuIHByb3ZpZGVyO1xyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIGxvZ2luKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gUm91dGVyLnB1c2goXCIvbW9kZWxDYWJpbmV0XCIpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0cmF0aW9uQWdlbmN5KFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBwYXNzd29yZDogc3RyaW5nLFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBzdHJpbmcsXHJcbiAgcGhvbmU6IHN0cmluZyB8IG51bWJlcixcclxuICBhZ2VuY3lfbmFtZTogc3RyaW5nXHJcbik6IFByb21pc2U8YW55PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2FnZW5jeS9yZWdpc3RlcmAsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uLFxyXG4gICAgICBwaG9uZSxcclxuICAgICAgYWdlbmN5X25hbWVcclxuICAgIH0pLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgcHJvbWlzZS50aGVuKHByb3ZpZGVyID0+IHtcclxuICAgIENvb2tpZXMuc2V0KFwiY3VycmVudFVzZXJcIiwgSlNPTi5zdHJpbmdpZnkocHJvdmlkZXIpKTtcclxuICAgIGN1cnJlbnRVc2VyU3ViamVjdCA9IHByb3ZpZGVyO1xyXG4gICAgcmV0dXJuIHByb3ZpZGVyO1xyXG4gIH0pLnRoZW4oKCkgPT4gbG9naW4oZW1haWwsIHBhc3N3b3JkKSlcclxuICAgIC50aGVuKCgpID0+IFJvdXRlci5wdXNoKFwiL21vZGVsQ2FiaW5ldFwiKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xyXG4gIENvb2tpZXMucmVtb3ZlKFwiY3VycmVudFVzZXJcIik7XHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKGAke3RhcmdldH0vbG9nb3V0YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigoKSA9PiBSb3V0ZXIucHVzaCgnLycpKVxyXG4gICAgLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdXNlci5zZXJ2aWNlJztcclxuIiwiaW1wb3J0IHsgYXV0aEhlYWRlciwgaGFuZGxlUmVzcG9uc2UgfSBmcm9tICcuLi9faGVscGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNlcnZpY2UgPSB7XHJcbiAgZ2V0QWxsLFxyXG4gIGdldEJ5SWQsXHJcbiAgdXBkYXRlLFxyXG4gIGRlbGV0ZVVzZXJcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldEFsbCgpIHtcclxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgaGVhZGVyczogYXV0aEhlYWRlcigpIH07XHJcbiAgcmV0dXJuIGZldGNoKGAvdXNlcnNgLCByZXF1ZXN0T3B0aW9ucykudGhlbihoYW5kbGVSZXNwb25zZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcclxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgaGVhZGVyczogYXV0aEhlYWRlcigpIH07XHJcbiAgcmV0dXJuIGZldGNoKGAvdXNlcnMvJHtpZH1gLCByZXF1ZXN0T3B0aW9ucykudGhlbihoYW5kbGVSZXNwb25zZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZShpZCwgbmFtZSwgc2Vjb25kX25hbWUsIGVtYWlsLCBwaG9uZSwgcmF0aW5nLCBwb3NpdGlvbiwgdGVsZWdyYW0sIHZpYmVyLCB3aGF0c2FwcCwgc2l0ZSwgYXZhdGFyKSB7XHJcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IGF1dGhIZWFkZXIoKSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgbmFtZSxcclxuICAgICAgc2Vjb25kX25hbWUsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwaG9uZSxcclxuICAgICAgcmF0aW5nLFxyXG4gICAgICBwb3NpdGlvbixcclxuICAgICAgdGVsZWdyYW0sXHJcbiAgICAgIHZpYmVyLFxyXG4gICAgICB3aGF0c2FwcCxcclxuICAgICAgc2l0ZSxcclxuICAgICAgYXZhdGFyXHJcbiAgICB9KVxyXG4gIH07XHJcbiAgcmV0dXJuIGZldGNoKGAvYXBpL2F1dGgvdXNlci91cGRhdGUvJHtpZH1gLCByZXF1ZXN0T3B0aW9ucykudGhlbihoYW5kbGVSZXNwb25zZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVVzZXIoaWQpIHtcclxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICBoZWFkZXJzOiBhdXRoSGVhZGVyKClcclxuICB9O1xyXG4gIHJldHVybiBmZXRjaChgL2FwaS9hdXRoL3VzZXIvZGVzdHJveS8ke2lkfWAsIHJlcXVlc3RPcHRpb25zKS50aGVuKGhhbmRsZVJlc3BvbnNlKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbW9kZWwtMS04NzczNmM4MjAwNjNjMDZmOTFjMWMzM2UwMWZhMzIzNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbW9kZWwtMi0wZjcwZThiMTRkMDc3MGJjOTQ5MWFhZDczMDA0YTRiNy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFUQ0FNQUFBQ25VdDJIQUFBQUFYTlNSMElCMmNrc2Z3QUFBRVZRVEZSRkFBQUE1M2l2NUhleDVIZXg1SGl5NUhleDVIV3Y1SGV4NUhleDMzQ3Y1SGV4NDNleDVIYXk1SGl3NDNldzVuYXo1SGl4NUhpeDVIZXc1SGV4NVhheDVIZXk0M2l2czFEdHJRQUFBQmQwVWs1VEFDRFA3MkRmTUpEL0VQQ3djT0N2VU1DZ245Qi92MEQ2K3I3UUFBQUFwVWxFUVZSNG5IMlE2UkxESUFpRU1SNWROZkZvanZkLzFJS21qZjdwenVqZ0o4Z2lrVWd0MmhBWmJSMDllZ0h3RklBNHdCVUlSTnNQR3BzOCtRZ3V6eWdjcGlWTHpTcXBWUjZwclVoTERTZFZqamdzRFc3a0l0NUVPNUFkZDVQcnlCYThwUEs1aWdWbGVFbXJ5SURQMnZMR0Y2WDN4eVRUb0E4VDlOMXFIVm05NThranpOOHBBL2JTSmRQK2tUclNLWDVnejNTb0cyN2ptN1l6Ti92cy8zek44Q0w2QUlwRUNOZW9vQkgxQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQllBQUFBVENBTUFBQUNqcHcyNkFBQUFBWE5TUjBJQjJja3Nmd0FBQUR4UVRGUkZBQUFBMzNDdjVIZXg1SGV4NUhleDVIZXg1WGF4NUhleTVIZXg1SFd2NUhleDVIaXk1SGl4NDNleDVIZXg1bmF6NDNpdjVIZXg0M2l4NUhpd2ZFTG4yQUFBQUJSMFVrNVRBQkNQMy8vUGY3L3ZNTkJnb0xEd1VFQ1FnT0NXRThxc0FBQUFlRWxFUVZSNG5IV1FVUTZFSUF3RjM5c3RXaFNSMWZ2ZlZWRFVOZFQ1bWt4b0NRRGc1eXV1SXpMc2V1MFA5U29GOVplNnJCamtRRW10Nm9CUlRrSzRkTVFrQmhPaWxSVldGYkZQeDdmZHM1VVRFTnI2Szg5cytvS2QrWEh0bWxEaDM4QkMzS1E2RUQwZWNQK3hnVURiMjFyNmF0UzhQOTIrQWZNdUJpc2t5UGtDQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQklBQUFBVENBTUFBQUNxVEszQUFBQUFBWE5TUjBJQjJja3Nmd0FBQUV0UVRGUkZBQUFBNUhpdzVYYXg0M2l4NUhleDVIZXc1SGV4NUhleTMzQ3Y1SGV4NUhleDUzaXY0M1d5NUhXdjVIZXg1SGF5NDNleDVuYXo1SGl5NUhleDVIaXg1SGl4NUhleDQzaXY0M2V3YWFBSytRQUFBQmwwVWs1VEFPQi9nUCtmMEw4UThNOGdQekRmY0xCUVlKQ2d3TzlBcitYbktZNEFBQUNOU1VSQlZIaWNaWS9oRnNJZ0NFYlZJZW1XNVp5YnZmK1RKakRLRm4rRWV6aDhWMk9kdWRZRS9vOGgzTUlGaFFpenNPWGVpOXNVWWFoSEl2WWNVVjRsNGF5WXkzbDJrN211MzRDZHlKRitOUUFRam1WQW5WaFRWWVYxT3BxTXlRTnIvWFFmQXNMc25IOFJLZ0NWdjRHYzdFVkxMaGMybzc3S0VsMURWSzJteVMzSi9yYXJzdjFZcUhjcS9Md0JZSVFGUVAzSTczWUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFUQ0FNQUFBQ25VdDJIQUFBQUFYTlNSMElCMmNrc2Z3QUFBRDlRVEZSRkFBQUE0M2l2NUhleDVIZXg1SGl5NUhleDMzQ3Y1SGV4NDNpeDVIZXg0M2V4NUhleDVIZXk0M1d5NUhpeDUzaXY1SGV4NUhheTVIaXg1SGl3NDNleEpIY3F5QUFBQUJWMFVrNVRBRURRejJEL0VOK0E3MitQdnorZ0lQQnd3T0N3U25mWU9BQUFBSGhKUkVGVWVKeGwwRnNXZ0NBSUJGQWwwYkpTZSt4L3JhR2xKTTduUFFwelVLcEdhelVHcHRFTW9wRm1IYUtUT0NObEZnK1hqSXZsdFg3ZDhNdTIrcDBvNEpDZ0xFZ0RHaUlWeXVCZTRWc1dFMXVLZGYvQmVQVE4zM0QvWDYzUThHUThHMTU1cXpHNUJSK0ZIcFFMYS9wU0xZWjJkSDNuU2c4K1NnVG9BL0FHdXdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzIGZyb20gJy4vY2F0ZWdvcmllcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE5ld1Bvc3RzIGZyb20gJy4vTmV3UG9zdHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yaWVzKHsgY2F0ZWdvcmllcywgbmV3UG9zdHMsIGZpbHRlclBvc3RzIH0pIHtcclxuICBjb25zdCBbZmlsdGVyQ2F0ZWdvcnksIHNldEZpbHRlckNhdGVnb3J5XSA9IHVzZVN0YXRlKCdlc2NvcnRzJyk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUNhdGVnb3J5ID0gKGNhdGVnb3J5LCBpZCkgPT4ge1xyXG4gICAgc2V0RmlsdGVyQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xyXG4gICAgZmlsdGVyUG9zdHMoeydjYXRlZ29yeV9pZCc6IGlkfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17cy5jYXRlZ29yaWVzX2Jsb2NrfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5jYXRlZ29yaWVzX3RpdGxlfWB9PlxyXG4gICAgICAgIDxwPlNFTEVDVCBBIENBVEVHT1JZPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY2F0ZWdvcmllc19jb250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cy5jYXRlZ29yaWVzX2NvbnRyb2x9YH0+XHJcbiAgICAgICAgICB7KGNhdGVnb3JpZXMgJiYgY2F0ZWdvcmllcy5sZW5ndGgpXHJcbiAgICAgICAgICAgID8gY2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IChcclxuICAgICAgICAgICAgICA8c3BhbiBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IGNoYW5nZUNhdGVnb3J5KGMubmFtZS50b0xvd2VyQ2FzZSgpLCBjLmlkKX0gY2xhc3NOYW1lPXtgJHtzLmNhdGVnb3J5fSAke2ZpbHRlckNhdGVnb3J5ID09PSBjLm5hbWUudG9Mb3dlckNhc2UoKSA/ICdhY3RpdmVfYnRuX2JsdWUnIDogJyd9YH0+e2MubmFtZS50b1VwcGVyQ2FzZSgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgOiA8PjxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1pbmZvXCIgcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbC0yIHRleHQtaW5mb1wiPk5vIGNhdGVnb3JpZXMgZnJvbSBzZXJ2ZXIuLi48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5jYXRlZ29yaWVzX3N1YnRpdGxlfWB9PlxyXG4gICAgICAgICAgPHA+TkVXIE9OIFRIRSBTSVRFPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNhdGVnb3JpZXNfY2Fyb3VzZWx9PlxyXG4gICAgICAgICAgPE5ld1Bvc3RzIG5ld1Bvc3RzPXtuZXdQb3N0c30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHMgZnJvbSBcIi4vbG9jYXRpb24ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb24oeyBzdGF0ZXMgfSkge1xyXG4gIGNvbnN0IFtjdXJyZW50TG9jYXRpb24sIHNldEN1cnJlbnRMb2NhdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUxvY2F0aW9uID0gc3RhdGVJZCA9PiB7XHJcbiAgICBzZXRDdXJyZW50TG9jYXRpb24oc3RhdGVJZCk7XHJcbiAgICBzdGF0ZXMuZm9yRWFjaChzdGF0ZSA9PiB7XHJcbiAgICAgIGlmICgrc3RhdGUuaWQgPT09ICtzdGF0ZUlkKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgcGF0aG5hbWU6IGAvbG9jYXRpb25gLFxyXG4gICAgICAgICAgcXVlcnk6IHsgc3RhdGU6IHN0YXRlLm5hbWUsIGlkOiBzdGF0ZS5pZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17cy5sb2NhdGlvbl93cmFwcGVyfT5cclxuICAgICAge3N0YXRlcy5sZW5ndGggPyA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3MubG9jYXRvbl9ibG9ja190aXRsZX1gfT5cclxuICAgICAgICAgIDxwPlNFTEVDVCBBIExPQ0FUSU9OIEJFTE9XPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxvY2F0aW9uX2Jsb2NrX3NlbGVjdH0+XHJcbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZUxvY2F0aW9uKGUudGFyZ2V0LnZhbHVlKX0gPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVmYXVsdFwiIGhpZGRlbj5Mb2NhdGlvbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICB7c3RhdGVzLm1hcCgoc3RhdGUsIGkpID0+IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e3N0YXRlLmlkfT57c3RhdGUubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5sb2NhdGlvbl9ibG9ja19saXN0fT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge3N0YXRlcy5tYXAoKHN0YXRlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gY2hhbmdlTG9jYXRpb24oc3RhdGUuaWQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gdGV4dC13aGl0ZSBsb2NhdGlvbl9pdGVtYH0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9jYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2N1cnJlbnRMb2NhdGlvbiA9PT0gc3RhdGUgPyAnYWN0aXZlX2J0bl9ibHVlJyA6ICcnfT57c3RhdGUubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz4gOiBudWxsfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgcyBmcm9tIFwiLi9jYXRlZ29yaWVzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVTbGlkZXIoeyBuZXdQb3N0cyB9KSB7XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogNCxcclxuICAgIGFycm93czogdHJ1ZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVNwZWVkOiAxMDAwMCxcclxuICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxMDI1LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OSxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICBpbml0aWFsU2xpZGU6IDJcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgZmFkZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgIG1heFdpZHRoOiAnMTI2MHB4J1xyXG4gICAgfX0+XHJcbiAgICAgIDxTbGlkZXJcclxuICAgICAgICB7Li4uc2V0dGluZ3N9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIG1heFdpZHRoOiBcIjEyNjBweFwiLFxyXG4gICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7bmV3UG9zdHMgJiYgbmV3UG9zdHMubGVuZ3RoXHJcbiAgICAgICAgICA/IG5ld1Bvc3RzLm1hcCgocG9zdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2xpZGV9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvbW9kZWxQcm9maWxlXCIsIHF1ZXJ5OiB7IGlkOiBwb3N0LmlkIH0gfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0LnBob3RvX3ZlcnRpY2FsfSBhbHQ9XCJtb2RlbFwiIGNsYXNzTmFtZT1cInctMTAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3QubW9kZWxfbmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKSA6IG51bGx9XHJcbiAgICAgIDwvU2xpZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzIGZyb20gJy4vc2VhcmNoLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3Muc2VhcmNoX2Jsb2NrfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2VhcmNoX2Jsb2NrX2NvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3Muc2VhcmNoX2lucHV0X2xhYmVsfWB9PlNFQVJDSDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNlYXJjaF9pbnB1dH0+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3MuYWRkX3Bvc3RfYnRufWB9PlxyXG4gICAgICAgICAgPHNwYW4+UE9TVCBBRDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhdGVnb3JpZXNfYmxvY2tcIjogXCJjYXRlZ29yaWVzX2NhdGVnb3JpZXNfYmxvY2tfXzE0QVZfXCIsXG5cdFwiY2F0ZWdvcmllc190aXRsZVwiOiBcImNhdGVnb3JpZXNfY2F0ZWdvcmllc190aXRsZV9fM0t5T1hcIixcblx0XCJjYXRlZ29yaWVzX2NvbnRlbnRcIjogXCJjYXRlZ29yaWVzX2NhdGVnb3JpZXNfY29udGVudF9fMnZQdXRcIixcblx0XCJjYXRlZ29yaWVzX2NvbnRyb2xcIjogXCJjYXRlZ29yaWVzX2NhdGVnb3JpZXNfY29udHJvbF9fMmdwY2VcIixcblx0XCJjYXRlZ29yeVwiOiBcImNhdGVnb3JpZXNfY2F0ZWdvcnlfXzNSR2p3XCIsXG5cdFwiY2F0ZWdvcmllc19zdWJ0aXRsZVwiOiBcImNhdGVnb3JpZXNfY2F0ZWdvcmllc19zdWJ0aXRsZV9fM1ltWGFcIixcblx0XCJzbGlkZVwiOiBcImNhdGVnb3JpZXNfc2xpZGVfXzJMTmp1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2NhdGlvbl93cmFwcGVyXCI6IFwibG9jYXRpb25fbG9jYXRpb25fd3JhcHBlcl9fMWFPTDBcIixcblx0XCJsb2NhdG9uX2Jsb2NrX3RpdGxlXCI6IFwibG9jYXRpb25fbG9jYXRvbl9ibG9ja190aXRsZV9fbFlEektcIixcblx0XCJsb2NhdGlvbl9ibG9ja19zZWxlY3RcIjogXCJsb2NhdGlvbl9sb2NhdGlvbl9ibG9ja19zZWxlY3RfX1kxYVdpXCIsXG5cdFwibG9jYXRpb25fYmxvY2tfbGlzdFwiOiBcImxvY2F0aW9uX2xvY2F0aW9uX2Jsb2NrX2xpc3RfXzFJamJZXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWFyY2hfYmxvY2tcIjogXCJzZWFyY2hfc2VhcmNoX2Jsb2NrX18yMXNNU1wiLFxuXHRcInNlYXJjaF9ibG9ja19jb250ZW50XCI6IFwic2VhcmNoX3NlYXJjaF9ibG9ja19jb250ZW50X18xWnZMbFwiLFxuXHRcInNlYXJjaF9pbnB1dF9sYWJlbFwiOiBcInNlYXJjaF9zZWFyY2hfaW5wdXRfbGFiZWxfXzF1SnBxXCIsXG5cdFwic2VhcmNoX2lucHV0XCI6IFwic2VhcmNoX3NlYXJjaF9pbnB1dF9fMlhNbHNcIixcblx0XCJhZGRfcG9zdF9idG5cIjogXCJzZWFyY2hfYWRkX3Bvc3RfYnRuX18zY0U4YlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHMgZnJvbSBcIi4vcHJvZmlsZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgUHJvZmlsZUNhcm91c2VsIGZyb20gXCIuL1Byb2ZpbGVDYXJvdXNlbFwiO1xyXG5pbXBvcnQgUHJvZmlsZVZpZGVvIGZyb20gXCIuL1Byb2ZpbGVWaWRlb1wiO1xyXG5pbXBvcnQgZmF2IGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvZmF2b3JpdGUtcGluay5wbmdcIjtcclxuaW1wb3J0IGNyb3duIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvY3Jvd24tcGluay5wbmdcIjtcclxuaW1wb3J0IHN0YXIgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9zdGFyLXBpbmsucG5nXCI7XHJcbmltcG9ydCBwbGFuZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3BsYW5lLXBpbmsucG5nXCI7XHJcbmltcG9ydCBSZXBvcnRGYWtlUGhvdG9zTW9kYWxXaW5kb3cgZnJvbSBcIi4vUmVwb3J0RmFrZVBob3Rvc1wiO1xyXG5pbXBvcnQgUmVwb3J0VHJhZmZpY2tpbmdNb2RhbFdpbmRvdyBmcm9tIFwiLi9SZXBvcnRUcmFmZmlja2luZ1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvc3RQcm9maWxlQ2FyZCh7IHBvc3RzLCBwb3N0Q29tbWVudHMsIGNyZWF0ZVBvc3RDb21tZW50IH0pIHtcclxuICBjb25zdCBbY29tbWVudFRleHQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvciAobGV0IHAgb2YgcG9zdHMpIHtcclxuICAgICAgaWYgKHAuaWQgPT0gcm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgICAgc2V0UG9zdChwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtwb3N0c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MucHJvZmlsZX0+XHJcbiAgICAgIHtwb3N0LmNhdGVnb3J5ID8gPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jYXJkfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmltYWdlX2Jsb2NrfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3MuaW1hZ2VzX3RyYWNrfWB9PlxyXG4gICAgICAgICAgICAgIDxQcm9maWxlQ2Fyb3VzZWwgcGhvdG89e1twb3N0LnBob3RvX2hvcml6b250YWwsIHBvc3QucGhvdG9fdmVydGljYWxdfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8UHJvZmlsZVZpZGVvIHZpZGVvTGluaz17cG9zdC52aWRlb19saW5rfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MucmVwb3J0X2J0bl9ncm91cH0+XHJcbiAgICAgICAgICAgICAgPFJlcG9ydEZha2VQaG90b3NNb2RhbFdpbmRvdyBidXR0b25MYWJlbD17J1JlcG9ydCBGYWtlIFBob3Rvcyd9IGNsYXNzTmFtZT17YGB9IC8+XHJcbiAgICAgICAgICAgICAgPFJlcG9ydFRyYWZmaWNraW5nTW9kYWxXaW5kb3cgYnV0dG9uTGFiZWw9eydSZXBvcnQgVHJhZmZpY2tpbmcnfSBjbGFzc05hbWU9e2BgfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3MuZmF2b3JpdGVfYnRufSB0ZXh0LXdoaXRlYH0+XHJcbiAgICAgICAgICAgICAgQWRkIHRvIGZhdm91cml0ZXNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLmNvbnRlbnRfYmxvY2t9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRlbnRfYmxvY2tfaGVhZGVyfT5cclxuICAgICAgICAgICAgICA8aDU+e3Bvc3QuZmlyc3RfbmFtZX0ge3Bvc3Quc2Vjb25kX25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5zdGF0dXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZmF2fSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nyb3dufSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3N0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGxhbmV9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250ZW50X2Jsb2NrX2Rlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICA8aDY+U3VtbWFyeTwvaDY+XHJcbiAgICAgICAgICAgICAgPHA+e3Bvc3Quc3VtbWFyeX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWN0c19ibHVlX2Jsb2NrfT5cclxuICAgICAgICAgICAgICA8ZGl2Pntwb3N0LmlzX3ZlcmlmeSA/ICdWRVJJRklFRCBWSVAgT1RIRVInIDogbnVsbH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3Bvc3QuZW1haWwgP1xyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7cG9zdC5lbWFpbH1gfT5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdC5lbWFpbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgIDogJ05vIGFjY2VzcyB0byBzZWUgZW1haWwuLi4nfVxyXG4gICAgICAgICAgICAgICAge3Bvc3QubnVtYmVyID9cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YHRlbDorJHtwb3N0Lm51bWJlcn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAre3Bvc3QubnVtYmVyfTwvYT5cclxuICAgICAgICAgICAgICAgICAgOiAnTm8gYWNjZXNzIHRvIHNlZSBudW1iZXIuLi4nfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubWFpbl9jb250ZW50X2Jsb2NrfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy50ZXh0X2Jsb2NrfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnRleHRfYmxvY2tfdGl0bGV9PkFib3V0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD57cG9zdC5hYm91dH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZGV0YWlsc19ibG9ja30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTFcIj5ERVRBSUxTPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGR0PkNhdGVnb3J5OjwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRkPntwb3N0LmNhdGVnb3J5Lm5hbWV9PC9kZD5cclxuICAgICAgICAgICAgICAgICAgICA8ZHQ+R2VuZGVyOjwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRkPntwb3N0LmdlbmRlcn08L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkdD5BZ2U6PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGQ+e3Bvc3QuYWdlfTwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGR0PkV0aG5pY2l0eTo8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZD57cG9zdC5ldGhuaWNpdHkudmFsdWV9PC9kZD5cclxuICAgICAgICAgICAgICAgICAgICA8ZHQ+SGFpciBDb2xvcjo8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZD57cG9zdC5oYWlyLnZhbHVlfTwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGR0PkV5ZSBDb2xvcjo8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZD57cG9zdC5leWUudmFsdWV9PC9kZD5cclxuICAgICAgICAgICAgICAgICAgICA8ZHQ+SGVpZ2h0OjwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRkPntwb3N0LmhlaWdodH08L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkdD5BZmZpbGlhdGlvbjo8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZD57cG9zdC5hZmZpbGlhdGlvbi52YWx1ZX08L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkdD5BdmFpbGFibGUgVG86PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGQ+e3Bvc3QuYXZhaWxhYmxldG8ubWFwKGEgPT4gYS52YWx1ZSArICcgJyl9PC9kZD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGw+QXZhaWxhYmlsaXR5OjwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRkPntwb3N0LmF2YWlsYWJpbGl0eS5tYXAoYSA9PiBhLnZhbHVlICsgJyAnKX08L2RkPlxyXG4gICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PkNPTlRBQ1QgREVUQUlMUzwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3Bvc3QubnVtYmVyID9cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YHRlbDorJHtwb3N0Lm51bWJlcn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAre3Bvc3QubnVtYmVyfTwvYT5cclxuICAgICAgICAgICAgICAgICAgOiAnTm8gYWNjZXNzIHRvIHNlZSBudW1iZXIuLi4nfVxyXG4gICAgICAgICAgICAgICAge3Bvc3QuZW1haWwgP1xyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7cG9zdC5lbWFpbH1gfT5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdC5lbWFpbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgIDogJ05vIGFjY2VzcyB0byBzZWUgZW1haWwuLi4nfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7cG9zdENvbW1lbnRzICYmIHBvc3RDb21tZW50cy5sZW5ndGggPyA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYWRkX2NvbW1lbnRfYmxvY2t9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb21tZW50VGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgY3JlYXRlUG9zdENvbW1lbnQocm91dGVyLnF1ZXJ5LmlkLCBjb21tZW50VGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgTEVBVkUgQSBDT01NRU5UPC9kaXY+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBvbkNoYW5nZT17ZSA9PiBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKX0gcm93cz1cIjhcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29tbWVudHNfYmxvY2t9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cy5jb21tZW50c19ibG9ja190aXRsZX0gdGV4dC13aGl0ZWB9PkNPTU1FTlRTPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIHAtMFwiPlxyXG4gICAgICAgICAgICAgIHtwb3N0Q29tbWVudHMubWFwKChjLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9e3MuY29tbWVudH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbW1lbnRfdGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntjLnVzZXIuaWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntjLmNyZWF0ZWRfYXR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHA+e2MuY29tbWVudH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+IDwvPiA6IG51bGx9XHJcblxyXG4gICAgICA8Lz4gOiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1pbmZvXCIgcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcyBmcm9tIFwiLi9wcm9maWxlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCBtMSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL21vZGVsLXByb2ZpbGUvbW9kZWwtMS5wbmdcIjtcclxuaW1wb3J0IG0yIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vbW9kZWwtcHJvZmlsZS9tb2RlbC0yLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZUNhcm91c2VsKCkge1xyXG4gIHZhciBzZXR0aW5ncyA9IHtcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBmYWRlOiB0cnVlXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIiBzdHlsZT17e2JhY2tncm91bmQ6ICcjMWIxYzFmJ319PlxyXG4gICAgICA8U2xpZGVyXHJcbiAgICAgICAgey4uLnNldHRpbmdzfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBtYXhXaWR0aDogXCIxMjYwcHhcIixcclxuICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIlxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2xpZGV9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17bTF9IGFsdD1cIm1vZGVsXCIgY2xhc3NOYW1lPVwibXgtYXV0b1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2xpZGV9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17bTJ9IGFsdD1cIm1vZGVsXCIgY2xhc3NOYW1lPVwibXgtYXV0b1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TbGlkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGVWaWRlbyh7IHZpZGVvTGluayB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpZnJhbWUgd2lkdGg9XCI0MjBcIiBoZWlnaHQ9XCIzMTVcIiBjbGFzc05hbWU9XCJ3LTEwMFwiXHJcbiAgICAgICAgc3JjPXt2aWRlb0xpbmt9PlxyXG4gICAgICA8L2lmcmFtZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcyBmcm9tIFwiLi9wcm9maWxlLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlc0NvbnRyb2woKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3MucHJvZmlsZV9jb250cm9sfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5wcm9maWxlX2NvbnRyb2xfYnV0dG9uc30+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPlBSRVZJVVM8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5ORVhUPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj4gQ0xPU0U8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzIGZyb20gXCIuL3Byb2ZpbGUubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSwgTW9kYWxGb290ZXIsIElucHV0LCBMYWJlbCwgRm9ybSwgRm9ybUdyb3VwIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBSZXBvcnRGYWtlUGhvdG9zTW9kYWxXaW5kb3cgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBidXR0b25MYWJlbCxcclxuICAgIGNsYXNzTmFtZVxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0TW9kYWwoIW1vZGFsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxGb3JtIGlubGluZSBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cIlwiIGNsYXNzTmFtZT17YGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC13aGl0ZSB3LTEwMCAke3MucmVwb3J0X2J0bn1gfSBvbkNsaWNrPXt0b2dnbGV9PntidXR0b25MYWJlbH08L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgPE1vZGFsIGlzT3Blbj17bW9kYWx9IHRvZ2dsZT17dG9nZ2xlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dG9nZ2xlfSBzdHlsZT17eyBmb250RmFtaWx5OiAnQXVkaW93aWRlLCBjdXJzaXZlJyB9fSBjbGFzc05hbWU9XCJiZy1kYXJrIHRleHQtaW5mbyBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnlcIiA+e2J1dHRvbkxhYmVsfTwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsQm9keSBjbGFzc05hbWU9XCJwYi0wIGJnLWRhcmsgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgPHA+V2FudCB0byByZXBvcnQgZmFrZSBwaG90b3Mgb24gdGhpcyBhZD8gSWYgc28sIHVzZSB0aGUgYm94IGJlbG93IHRvIGVudGVyIGEgbGluayB0byB0aGUgd2VicGFnZSB0aGF0IHByb3ZpZGVzIHBvdGVudGlhbCBldmlkZW5jZSBvZiBtaXN1c2UsIGFuZCBWaWJlQ2l0eSB3aWxsIGludmVzdGlnYXRlIHlvdXIgY2xhaW0uIElmIHlvdSBhcmUgb3duZXIgb2YgdGhlIHBob3RvcyBpbiBxdWVzdGlvbiwgZm9sbG93IHRoZSBETUNBIGxpbmsgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZS48L3A+XHJcbiAgICAgICAgICA8cD48c21hbGw+PHN0cm9uZz5JTVBPUlRBTlQ8L3N0cm9uZz46IFZpYmVDaXR5IHRha2VzIHRoZSBtaXN1c2Ugb2YgcGhvdG9ncmFwaHMgc2VyaW91c2x5IGFuZCB3aWxsIGludmVzdGlnYXRlIGFueSByZWFzb25hYmxlIGV2aWRlbmNlIG9mIG1pc3VzZSBwcm92aWRlZCB0byB1cy4gSG93ZXZlciwgYmVjYXVzZSBpdCBpcyBub3QgdW5jb21tb24gZm9yIHdlbGwga25vd24gbW9kZWxzIGFuZCBhZHVsdCBzdGFycyB0byBhZHZlcnRpc2Ugb24gVmliZUNpdHksIG9yIGZvciBhZHVsdCBlbnRlcnRhaW5lcnMgdG8gYWR2ZXJ0aXNlIG9uIG51bWVyb3VzIGFkdWx0IHdlYnNpdGVzLCBvZnRlbiB0aW1lcyB1bmRlciBhbHRlcm5hdGUgbmFtZXMsIHRoZSBpbmZvcm1hdGlvbiB5b3UgcHJvdmlkZSBtYXkgb3IgbWF5IG5vdCBhbHdheXMgcmVzdWx0IGluIHRoZSByZW1vdmFsIG9mIHRoZSBhZHZlcnRpc2VtZW50LCBvciBpbiBhbnkgYWN0aW9uIGF0IGFsbC4gUGxlYXNlIGFsc28gYmUgYXdhcmUgdGhhdCB0aGUgVmliZUNpdHkgR3VpZGUgY2Fubm90IGFuZCBkb2VzIG5vdCBtYWtlIGFueSBndWFyYW50ZWVzIG9yIHdhcnJhbnRpZXMgdGhhdCBlaXRoZXIgKGEpIHRoZSBhZHZlcnRpc2VyIGluIHRoZSBwaWN0dXJlcyBvbiBhbnkgcGFydGljdWxhciBhZCB3aWxsIGJlIHRoZSBzYW1lIGluZGl2aWR1YWwgd2hvIHNob3dzIHVwIGZvciBhbnkgZGF0ZSBhcnJhbmdlZCBiZXR3ZWVuIGFuIGFkdmVydGlzZXIgYW5kIHlvdXJzZWxmLCAoYikgdGhhdCBhbnkgb2YgdGhlIHRleHQsIGluY2x1ZGluZyB0aGUgbmFtZSBvZiB0aGUgYWR2ZXJ0aXNlciwgb3Igc3RhdHMgdGhhdCBhcHBlYXJzIG9uIGFuIGFkdmVydGlzZW1lbnQgaXMgYWNjdXJhdGUgb3IgdHJ1dGhmdWwuPC9zbWFsbD48L3A+XHJcbiAgICAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiY29udGFpbmVyIGJnLWRhcmsgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cInctMTAwIGQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICBMaW5rIGZvciBFdmlkZW5jZSBvZiBNaXN1c2U6XHJcbiAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eygpID0+IHsgfX0gY2xhc3NOYW1lPVwidy0xMDAgZC1ibG9jayBiZy1kYXJrIHRleHQtd2hpdGUgYm9yZWRyIGJvcmRlci1zZWNvbmRhcnlcIiBwbGFjZWhvbGRlcj1cImh0dHA6Ly8uLi5cIiAvPlxyXG4gICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDxNb2RhbEZvb3RlciBjbGFzc05hbWU9XCJiZy1kYXJrIHRleHQtd2hpdGUgYm9yZGVyLXRvcCBib3JkZXItc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5mb1wiIG9uQ2xpY2s9e3RvZ2dsZX0+U0VORCBSRVBPUlQ8L0J1dHRvbj57JyAnfVxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RvZ2dsZX0+Q2FuY2VsPC9CdXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcG9ydEZha2VQaG90b3NNb2RhbFdpbmRvdztcclxuXHJcblxyXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XHJcbiAgLy8gYm9vbGVhbiB0byBjb250cm9sIHRoZSBzdGF0ZSBvZiB0aGUgcG9wb3ZlclxyXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvLyBpZiBtb2RhbCBzaG91bGQgYmUgY2VudGVyZWQgdmVydGljYWxseSBpbiB2aWV3cG9ydFxyXG4gIGNlbnRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvLyBjb3JyZXNwb25kcyB0byBib290c3RyYXAncyBtb2RhbCBzaXplcywgaWUuICdsZycgb3IgJ3NtJ1xyXG4gIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLy8gY2FsbGJhY2sgZm9yIHRvZ2dsaW5nIGlzT3BlbiBpbiB0aGUgY29udHJvbGxpbmcgY29tcG9uZW50XHJcbiAgdG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcclxuICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBkZWZhdWx0cyB0byBcImRpYWxvZ1wiXHJcbiAgLy8gdXNlZCB0byByZWZlcmVuY2UgdGhlIElEIG9mIHRoZSB0aXRsZSBlbGVtZW50IGluIHRoZSBtb2RhbFxyXG4gIGxhYmVsbGVkQnk6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAga2V5Ym9hcmQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8vIGNvbnRyb2wgYmFja2Ryb3AsIHNlZSBodHRwOi8vdjQtYWxwaGEuZ2V0Ym9vdHN0cmFwLmNvbS9jb21wb25lbnRzL21vZGFsLyNvcHRpb25zXHJcbiAgYmFja2Ryb3A6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBQcm9wVHlwZXMub25lT2YoWydzdGF0aWMnXSlcclxuICBdKSxcclxuICAvLyBpZiBib2R5IG9mIG1vZGFsIHNob3VsZCBiZSBzY3JvbGxhYmxlIHdoZW4gY29udGVudCBpcyBsb25nXHJcbiAgc2Nyb2xsYWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLy8gYWxsb3dzIGZvciBhIG5vZGUvY29tcG9uZW50IHRvIGV4aXN0IG5leHQgdG8gdGhlIG1vZGFsIChvdXRzaWRlIG9mIGl0KS4gVXNlZnVsIGZvciBleHRlcm5hbCBjbG9zZSBidXR0b25zXHJcbiAgLy8gZXh0ZXJuYWw6IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8vIGNhbGxlZCBvbiBjb21wb25lbnREaWRNb3VudFxyXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gIC8vIGNhbGxlZCBvbiBjb21wb25lbnRXaWxsVW5tb3VudFxyXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgLy8gY2FsbGVkIHdoZW4gZG9uZSB0cmFuc2l0aW9uaW5nIGluXHJcbiAgb25PcGVuZWQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIC8vIGNhbGxlZCB3aGVuIGRvbmUgdHJhbnNpdGlvbmluZyBvdXRcclxuICBvbkNsb3NlZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHdyYXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbW9kYWxDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgYmFja2Ryb3BDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY29udGVudENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvLyBib29sZWFuIHRvIGNvbnRyb2wgd2hldGhlciB0aGUgZmFkZSB0cmFuc2l0aW9uIG9jY3VycyAoZGVmYXVsdDogdHJ1ZSlcclxuICBmYWRlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjc3NNb2R1bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLy8gekluZGV4IGRlZmF1bHRzIHRvIDEwMDAuXHJcbiAgekluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIF0pLFxyXG4gIC8vIGlmIG1vZGFsIHNob3VsZCBiZSBkZXN0cnVjdGVkL3JlbW92ZWQgZnJvbSBET00gYWZ0ZXIgY2xvc2luZ1xyXG4gIHVubW91bnRPbkNsb3NlOiBQcm9wVHlwZXMuYm9vbCwgLy8gZGVmYXVsdHMgdG8gdHJ1ZVxyXG4gIC8vIGlmIHRoZSBlbGVtZW50IHdoaWNoIHRyaWdnZXJlZCB0aGUgbW9kYWwgdG8gb3BlbiBzaG91bGQgZm9jdXNlZCBhZnRlciB0aGUgbW9kYWwgY2xvc2VzIChzZWUgZXhhbXBsZSBzb21ld2hlcmUgYmVsb3cpXHJcbiAgcmV0dXJuRm9jdXNBZnRlckNsb3NlOiBQcm9wVHlwZXMuYm9vbCAvLyBkZWZhdWx0cyB0byB0cnVlXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgcyBmcm9tIFwiLi9wcm9maWxlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyLCBJbnB1dCwgTGFiZWwsIEZvcm0sIEZvcm1Hcm91cCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgUmVwb3J0VHJhZmZpY2tpbmdNb2RhbFdpbmRvdyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGJ1dHRvbkxhYmVsLFxyXG4gICAgY2xhc3NOYW1lXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRNb2RhbCghbW9kYWwpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEZvcm0gaW5saW5lIG9uU3VibWl0PXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwiXCIgY2xhc3NOYW1lPXtgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXdoaXRlIHctMTAwICR7cy5yZXBvcnRfYnRufWB9IG9uQ2xpY2s9e3RvZ2dsZX0+e2J1dHRvbkxhYmVsfTwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICA8TW9kYWwgaXNPcGVuPXttb2RhbH0gdG9nZ2xlPXt0b2dnbGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0b2dnbGV9IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdBdWRpb3dpZGUsIGN1cnNpdmUnIH19IGNsYXNzTmFtZT1cImJnLWRhcmsgdGV4dC1pbmZvIGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeVwiID57YnV0dG9uTGFiZWx9PC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICA8TW9kYWxCb2R5IGNsYXNzTmFtZT1cInBiLTAgYmctZGFyayB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8aDU+QU5USS1UUkFGRklDS0lORyBBRFZPQ0FDWTo8L2g1PlxyXG4gICAgICAgICAgPHA+VmliZUNpdHkgaXMgd2hvbGx5IGNvbW1pdHRlZCB0byByYWlzaW5nIGF3YXJlbmVzcyBvbiB0aGUgaXNzdWUgb2YgaHVtYW4gdHJhZmZpY2tpbmcgYW5kIGVuZ2FnZXMgaW4gYmVzdCBwcmFjdGljZXMgYW5kIGFkdm9jYWN5LiBJbiB0aGUgZXZlbnQgd2UgYmVjb21lIGF3YXJlIG9mIGFueSBpbmNpZGVudCBvZiB0cmFmZmlja2luZywgd2UgY29vcGVyYXRlIGVudGh1c2lhc3RpY2FsbHkgd2l0aCBsYXcgZW5mb3JjZW1lbnQgYW5kIGFnZW5jaWVzIGludm9sdmVkIGluIGNvbWJhdGluZyB0aGUgYWJ1c2Ugb2YgaHVtYW4gcmlnaHRzLjwvcD5cclxuICAgICAgICAgIDxwPjxzdHJvbmc+UGxlYXNlIHJlcG9ydCBhbnkgc3VzcGVjdGVkIHNleHVhbCBleHBsb2l0YXRpb24gb2YgbWlub3JzIGFuZC9vciBodW1hbiB0cmFmZmlja2luZyB0byB0aGUgYXBwcm9wcmlhdGUgYXV0aG9yaXRpZXMuPC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDY+VW5pdGVkIFN0YXRlczo8L2g2PlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL3d3dy5taXNzaW5na2lkcy5jb20vbWlzc2luZ2tpZHMvc2VydmxldC9QdWJsaWNIb21lU2VydmxldD9MYW5ndWFnZUNvdW50cnk9ZW5fVVNcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwidGV4dC1pbmZvXCI+TmF0aW9uYWwgQ2VudGVyIGZvciBNaXNzaW5nICYgRXhwbG9pdGVkIENoaWxkcmVuIChOQ01FQyk8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly93d3cubWlzc2luZ2tpZHMuY29tL21pc3NpbmdraWRzL3NlcnZsZXQvUGFnZVNlcnZsZXQ/TGFuZ3VhZ2VDb3VudHJ5PWVuX1VTJlBhZ2VJZD0yOTM2XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPkN5YmVyVGlwbGluZTwvYT4gLSByZXBvcnQgY2hpbGQgZXhwbG9pdGF0aW9uPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+MjQtSG91ciBIb3RsaW5lOiAxLTgwMC04NDMtNTY3ODwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vd3d3LnBvbGFyaXNwcm9qZWN0Lm9yZy9pbmRleC5waHBcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwidGV4dC1pbmZvXCI+UG9sYXJpcyBQcm9qZWN0IC0gUmVwb3J0IEh1bWFuIFRyYWZmaWNraW5nPC9hPjogODg4LTM3My03ODg4PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL3d3dy5oaHMuZ292L1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj4gRGVwdC4gb2YgSGVhbHRoICYgSHVtYW4gU2VydmljZXM8L2E+OiA4ODgtMzczLTc4ODg8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vd3d3LmNoaWxkcmVub2Z0aGVuaWdodC5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPkNoaWxkcmVuIG9mIHRoZSBOaWdodDwvYT46IDgwMC01NTEtMTMwMDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly93d3cuYWNlbmF0aW9uYWwub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj4gQUNFIE5hdGlvbmFsPC9hPjogMjAyLTIyMC0zMDE5PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL3d3dy5pY2UuZ292L2luZGV4Lmh0bVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj4gSG9tZWxhbmQgU2VjdXJpdHkgSW52ZXN0aWdhdGlvbnMgVGlwIExpbmU8L2E+OiA4NjYtREhTLTItSUNFPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL3d3dy5qdXN0aWNlLmdvdi9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwidGV4dC1pbmZvXCI+IERlcHQuIG9mIEp1c3RpY2U8L2E+OiA4ODgtNDI4LTc1ODE8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkZCSSBPZmZpY2U6IDxhIGhyZWY9XCJodHRwOi8vd3d3LmZiaS5nb3YvY29udGFjdC11cy9maWVsZFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj5odHRwOi8vd3d3LmZiaS5nb3YvY29udGFjdC11cy9maWVsZDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoNj5HZXJtYW55OjwvaDY+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vd3d3LmtvZXR6ZnVzYmFobi5kZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwidGV4dC1pbmZvXCI+IFlQQSBBZ2VudCAtIEp1Z2VuZHNjaHV0emJlYXVmdHJhZ3RlcjogUmVjaHRzYW53YWx0IERyLiBEYW5pZWwgS8O2dHo8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg1PldBUk5JTkcgU0lHTlMgT0YgUE9TU0lCTEUgSFVNQU4gVFJBRkZJQ0tJTkc6PC9oNT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT5Eb2VzIGFuIGVudGVydGFpbmVyIGFycml2ZSBhY2NvbXBhbmllZCBieSBhbm90aGVyIGluZGl2aWR1YWw/PC9saT5cclxuICAgICAgICAgICAgICA8bGk+RG9lcyB0aGF0IGluZGl2aWR1YWwgc3BlYWsgZm9yIG9yIGFwcGVhciB0byBtYWludGFpbiBjb250cm9sIG92ZXIgdGhlIGVudGVydGFpbmVyPzwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPkRvZXMgdGhlIGVudGVydGFpbmVyIHNlZW0gZmVhcmZ1bCBvZiB0aGF0IGluZGl2aWR1YWw/PC9saT5cclxuICAgICAgICAgICAgICA8bGk+RG9lcyB0aGUgZW50ZXJ0YWluZXIgaGF2ZSBkaWZmaWN1bHR5IGNvbW11bmljYXRpbmcsIHdoZXRoZXIgcmVzdWx0aW5nIGZyb20gYSBsYW5ndWFnZSBiYXJyaWVyIG9yIGZlYXIgb2YgaW50ZXJhY3Rpb24/PC9saT5cclxuICAgICAgICAgICAgICA8bGk+RG9lcyB0aGUgZW50ZXJ0YWluZXIgYXBwZWFyIHRvIGJlIHVuZGVyYWdlIG9yY2xvc2UgdG8gdW5kZXJhZ2U/PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgIDxNb2RhbEZvb3RlciBjbGFzc05hbWU9XCJiZy1kYXJrIHRleHQtd2hpdGUgYm9yZGVyLXRvcCBib3JkZXItc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LTEwMCB0ZXh0LWNlbnRlclwiPlVzZSBjb21tb24gc2Vuc2UsIGFuZCBjb250YWN0IHRoZSBhcHByb3ByaWF0ZSBhdXRob3JpdGllcyBpZiB5b3Ugc3VzcGVjdCB0aGF0IHNvbWVvbmUgaXMgYmVpbmcgdHJhZmZpY2tlZC48L3A+XHJcbiAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcG9ydFRyYWZmaWNraW5nTW9kYWxXaW5kb3c7XHJcblxyXG5cclxuTW9kYWwucHJvcFR5cGVzID0ge1xyXG4gIC8vIGJvb2xlYW4gdG8gY29udHJvbCB0aGUgc3RhdGUgb2YgdGhlIHBvcG92ZXJcclxuICBpc09wZW46IFByb3BUeXBlcy5ib29sLFxyXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLy8gaWYgbW9kYWwgc2hvdWxkIGJlIGNlbnRlcmVkIHZlcnRpY2FsbHkgaW4gdmlld3BvcnRcclxuICBjZW50ZXJlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLy8gY29ycmVzcG9uZHMgdG8gYm9vdHN0cmFwJ3MgbW9kYWwgc2l6ZXMsIGllLiAnbGcnIG9yICdzbSdcclxuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8vIGNhbGxiYWNrIGZvciB0b2dnbGluZyBpc09wZW4gaW4gdGhlIGNvbnRyb2xsaW5nIGNvbXBvbmVudFxyXG4gIHRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgcm9sZTogUHJvcFR5cGVzLnN0cmluZywgLy8gZGVmYXVsdHMgdG8gXCJkaWFsb2dcIlxyXG4gIC8vIHVzZWQgdG8gcmVmZXJlbmNlIHRoZSBJRCBvZiB0aGUgdGl0bGUgZWxlbWVudCBpbiB0aGUgbW9kYWxcclxuICBsYWJlbGxlZEJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGtleWJvYXJkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvLyBjb250cm9sIGJhY2tkcm9wLCBzZWUgaHR0cDovL3Y0LWFscGhhLmdldGJvb3RzdHJhcC5jb20vY29tcG9uZW50cy9tb2RhbC8jb3B0aW9uc1xyXG4gIGJhY2tkcm9wOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5ib29sLFxyXG4gICAgUHJvcFR5cGVzLm9uZU9mKFsnc3RhdGljJ10pXHJcbiAgXSksXHJcbiAgLy8gaWYgYm9keSBvZiBtb2RhbCBzaG91bGQgYmUgc2Nyb2xsYWJsZSB3aGVuIGNvbnRlbnQgaXMgbG9uZ1xyXG4gIHNjcm9sbGFibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8vIGFsbG93cyBmb3IgYSBub2RlL2NvbXBvbmVudCB0byBleGlzdCBuZXh0IHRvIHRoZSBtb2RhbCAob3V0c2lkZSBvZiBpdCkuIFVzZWZ1bCBmb3IgZXh0ZXJuYWwgY2xvc2UgYnV0dG9uc1xyXG4gIC8vIGV4dGVybmFsOiBQcm9wVHlwZXMubm9kZSxcclxuICAvLyBjYWxsZWQgb24gY29tcG9uZW50RGlkTW91bnRcclxuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICAvLyBjYWxsZWQgb24gY29tcG9uZW50V2lsbFVubW91bnRcclxuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIC8vIGNhbGxlZCB3aGVuIGRvbmUgdHJhbnNpdGlvbmluZyBpblxyXG4gIG9uT3BlbmVkOiBQcm9wVHlwZXMuZnVuYyxcclxuICAvLyBjYWxsZWQgd2hlbiBkb25lIHRyYW5zaXRpb25pbmcgb3V0XHJcbiAgb25DbG9zZWQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB3cmFwQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG1vZGFsQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGJhY2tkcm9wQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNvbnRlbnRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLy8gYm9vbGVhbiB0byBjb250cm9sIHdoZXRoZXIgdGhlIGZhZGUgdHJhbnNpdGlvbiBvY2N1cnMgKGRlZmF1bHQ6IHRydWUpXHJcbiAgZmFkZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8vIHpJbmRleCBkZWZhdWx0cyB0byAxMDAwLlxyXG4gIHpJbmRleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICBdKSxcclxuICAvLyBpZiBtb2RhbCBzaG91bGQgYmUgZGVzdHJ1Y3RlZC9yZW1vdmVkIGZyb20gRE9NIGFmdGVyIGNsb3NpbmdcclxuICB1bm1vdW50T25DbG9zZTogUHJvcFR5cGVzLmJvb2wsIC8vIGRlZmF1bHRzIHRvIHRydWVcclxuICAvLyBpZiB0aGUgZWxlbWVudCB3aGljaCB0cmlnZ2VyZWQgdGhlIG1vZGFsIHRvIG9wZW4gc2hvdWxkIGZvY3VzZWQgYWZ0ZXIgdGhlIG1vZGFsIGNsb3NlcyAoc2VlIGV4YW1wbGUgc29tZXdoZXJlIGJlbG93KVxyXG4gIHJldHVybkZvY3VzQWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmJvb2wgLy8gZGVmYXVsdHMgdG8gdHJ1ZVxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInByb2ZpbGVfY29udHJvbFwiOiBcInByb2ZpbGVfcHJvZmlsZV9jb250cm9sX18yN21DR1wiLFxuXHRcInByb2ZpbGVfY29udHJvbF9idXR0b25zXCI6IFwicHJvZmlsZV9wcm9maWxlX2NvbnRyb2xfYnV0dG9uc19fMkJWR2dcIixcblx0XCJwcm9maWxlXCI6IFwicHJvZmlsZV9wcm9maWxlX18ycUthbVwiLFxuXHRcImNhcmRcIjogXCJwcm9maWxlX2NhcmRfXzNkRzlWXCIsXG5cdFwic2xpY2stc2xpZGVyXCI6IFwicHJvZmlsZV9zbGljay1zbGlkZXJfXzFxekN6XCIsXG5cdFwic2xpY2stdHJhY2tcIjogXCJwcm9maWxlX3NsaWNrLXRyYWNrX19DSk5rRFwiLFxuXHRcImltYWdlX2Jsb2NrXCI6IFwicHJvZmlsZV9pbWFnZV9ibG9ja19fMnZvR29cIixcblx0XCJpbWFnZXNfdHJhY2tcIjogXCJwcm9maWxlX2ltYWdlc190cmFja19fMWtvWVJcIixcblx0XCJyZXBvcnRfYnRuX2dyb3VwXCI6IFwicHJvZmlsZV9yZXBvcnRfYnRuX2dyb3VwX18xYlFEZlwiLFxuXHRcInJlcG9ydF9idG5cIjogXCJwcm9maWxlX3JlcG9ydF9idG5fXzJ2d0Z4XCIsXG5cdFwiZmF2b3JpdGVfYnRuXCI6IFwicHJvZmlsZV9mYXZvcml0ZV9idG5fXzNSTHhSXCIsXG5cdFwiY29udGVudF9ibG9ja1wiOiBcInByb2ZpbGVfY29udGVudF9ibG9ja19fWGxsdExcIixcblx0XCJjb250ZW50X2Jsb2NrX2hlYWRlclwiOiBcInByb2ZpbGVfY29udGVudF9ibG9ja19oZWFkZXJfX010d3JwXCIsXG5cdFwiY29udGVudF9ibG9ja19kZXNjcmlwdGlvblwiOiBcInByb2ZpbGVfY29udGVudF9ibG9ja19kZXNjcmlwdGlvbl9fcVh0LVBcIixcblx0XCJjb250YWN0c19ibHVlX2Jsb2NrXCI6IFwicHJvZmlsZV9jb250YWN0c19ibHVlX2Jsb2NrX19uUS1PSFwiLFxuXHRcIm1haW5fY29udGVudF9ibG9ja1wiOiBcInByb2ZpbGVfbWFpbl9jb250ZW50X2Jsb2NrX19xMFphUFwiLFxuXHRcInRleHRfYmxvY2tcIjogXCJwcm9maWxlX3RleHRfYmxvY2tfXzJpc05xXCIsXG5cdFwidGV4dF9ibG9ja190aXRsZVwiOiBcInByb2ZpbGVfdGV4dF9ibG9ja190aXRsZV9fMmg5d0VcIixcblx0XCJkZXRhaWxzX2Jsb2NrXCI6IFwicHJvZmlsZV9kZXRhaWxzX2Jsb2NrX18xamUydFwiLFxuXHRcImFkZF9jb21tZW50X2Jsb2NrXCI6IFwicHJvZmlsZV9hZGRfY29tbWVudF9ibG9ja19fMXpZN3dcIixcblx0XCJjb21tZW50c19ibG9ja1wiOiBcInByb2ZpbGVfY29tbWVudHNfYmxvY2tfXzN4Uk56XCIsXG5cdFwiY29tbWVudHNfYmxvY2tfdGl0bGVcIjogXCJwcm9maWxlX2NvbW1lbnRzX2Jsb2NrX3RpdGxlX19kSlYzdVwiLFxuXHRcImNvbW1lbnRcIjogXCJwcm9maWxlX2NvbW1lbnRfXzN3SnI3XCIsXG5cdFwiY29tbWVudF90aXRsZVwiOiBcInByb2ZpbGVfY29tbWVudF90aXRsZV9fMzN0MmVcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUtcGFnZS9DYXRlZ29yaWVzXCI7XHJcbmltcG9ydCBMb2NhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lLXBhZ2UvTG9jYXRpb25cIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lLXBhZ2UvU2VhcmNoXCI7XHJcbmltcG9ydCBQcm9maWxlc0NvbnRyb2wgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kZWwtcHJvZmlsZS9Qcm9maWxlc0NvbnRyb2xcIjtcclxuaW1wb3J0IE1vZGVsUHJvZmlsZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kZWwtcHJvZmlsZS9Nb2RlbFByb2ZpbGVDYXJkXCI7XHJcbmltcG9ydCB7XHJcblx0Z2V0QWxsUG9zdHMsXHJcblx0Z2V0TG9jYXRpb25zSW5mbyxcclxuXHRzZWxlY3RQb3N0c1BhZ2UsXHJcblx0Z2V0UG9zdENvbW1lbnRzLFxyXG5cdGNyZWF0ZVBvc3RDb21tZW50LFxyXG5cdGZpbHRlclBvc3RzXHJcbn0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gTW9kZWxQcm9maWxlKHByb3BzKSB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRwcm9wcy5nZXRBbGxQb3N0cygpO1xyXG5cdFx0cHJvcHMuZ2V0TG9jYXRpb25zSW5mbygpO1xyXG5cdFx0cHJvcHMuZ2V0UG9zdENvbW1lbnRzKHJvdXRlci5xdWVyeS5pZCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PExvY2F0aW9uIHN0YXRlcz17cHJvcHMuc3RhdGVzfSAvPlxyXG5cdFx0XHQ8U2VhcmNoIC8+XHJcblx0XHRcdDxDYXRlZ29yaWVzXHJcblx0XHRcdFx0Y2F0ZWdvcmllcz17cHJvcHMuY2F0ZWdvcmllc31cclxuXHRcdFx0XHRuZXdQb3N0cz17cHJvcHMubmV3UG9zdHN9XHJcblx0XHRcdFx0ZmlsdGVyUG9zdHM9e3Byb3BzLmZpbHRlclBvc3RzfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8UHJvZmlsZXNDb250cm9sIC8+XHJcblx0XHRcdDxNb2RlbFByb2ZpbGVDYXJkXHJcblx0XHRcdFx0cG9zdHM9e3Byb3BzLnBvc3RzfVxyXG5cdFx0XHRcdHBvc3RDb21tZW50cz17cHJvcHMucG9zdENvbW1lbnRzfVxyXG5cdFx0XHRcdGNyZWF0ZVBvc3RDb21tZW50PXtwcm9wcy5jcmVhdGVQb3N0Q29tbWVudH1cclxuXHRcdFx0XHRnZXRBbGxQb3N0cz17cHJvcHMuZ2V0QWxsUG9zdHN9XHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Li4uc3RhdGUsXHJcblx0XHRjYXRlZ29yaWVzOiBzdGF0ZS5hcHAuY2F0ZWdvcmllcyxcclxuXHRcdHBvc3RzOiBzdGF0ZS5hcHAucG9zdHMsXHJcblx0XHRzdGF0ZXM6IHN0YXRlLmFwcC5zdGF0ZXMsXHJcblx0XHRwYWdlc051bWJlcjogc3RhdGUuYXBwLnBhZ2VzTnVtYmVyLFxyXG5cdFx0cG9zdENvbW1lbnRzOiBzdGF0ZS5hcHAucG9zdENvbW1lbnRzLFxyXG5cdFx0bmV3UG9zdHM6IHN0YXRlLmFwcC5uZXdQb3N0c1xyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUG9wcyA9IHtcclxuXHRnZXRBbGxQb3N0cyxcclxuXHRnZXRMb2NhdGlvbnNJbmZvLFxyXG5cdHNlbGVjdFBvc3RzUGFnZSxcclxuXHRnZXRQb3N0Q29tbWVudHMsXHJcblx0Y3JlYXRlUG9zdENvbW1lbnQsXHJcblx0ZmlsdGVyUG9zdHNcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUG9wcykoTW9kZWxQcm9maWxlKTtcclxuIiwiaW1wb3J0IHsgVEVTVF9DUkVBVEVfUE9TVCwgU0hPV19MT0FERVIsIEhJREVfTE9BREVSLCBTSE9XX0FMRVJULCBISURFX0FMRVJULCBURVNUX1JFUVVFU1RfUE9TVFMsIEdFVF9BTExfUE9TVFMsIEdFVF9MT0NBSVRPTlNfSU5GTywgR0VUX0NJVElFUywgQ1JFQVRFX1NVUFBPUlRfVEFTSywgR0VUX0FMTF9VU0VSX1RBU0tTLCBHRVRfQVBQX0lORk8sIEdFVF9ORVdfUE9TVFMsIEdFVF9QQUdFU19OVU1CRVIsIEdFVF9QT1NUX0NPTU1FTlRTLCBDUkVBVEVfUE9TVF9DT01NRU5ULCBGSUxURVJfUE9TVFMgfSBmcm9tIFwiLi90eXBlc1wiXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgeyBhdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vX3NlcnZpY2VzXCI7XHJcblxyXG4vLyBUIEUgUyBUIFxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUG9zdChwb3N0OiBhbnkpOiBhbnkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBURVNUX0NSRUFURV9QT1NULFxyXG4gICAgICAgIHBheWxvYWQ6IHBvc3RcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dMb2FkZXIoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFNIT1dfTE9BREVSXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMb2FkZXIoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IEhJREVfTE9BREVSXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBbGVydCh0ZXh0OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNIT1dfQUxFUlQsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHRleHRcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChoaWRlQWxlcnQoKSlcclxuICAgICAgICB9LCAzMDAwKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlQWxlcnQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IEhJREVfQUxFUlRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb3N0cygpOiBhbnkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBURVNUX1JFUVVFU1RfUE9TVFNcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IGdldEFsbFBvc3RzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHNgKTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9QQUdFU19OVU1CRVIsIHBheWxvYWQ6IHJlcy5sYXN0X3BhZ2UgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfQUxMX1BPU1RTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldE5ld1Bvc3RzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvYWxsL25ld2ApO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9ORVdfUE9TVFMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0TG9jYXRpb25zSW5mbyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2xvY2F0aW9uYCk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0xPQ0FJVE9OU19JTkZPLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldEFwcEluZm8gPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9pbmZvYCk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0FQUF9JTkZPLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldENpdGllcyA9IChzdGF0ZUlkOiBudW1iZXIgfCBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2xvY2F0aW9uL2NpdGllcy8ke3N0YXRlSWR9YCk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0NJVElFUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVTdXBwb3J0VGFzayA9ICh0YXNrOiBhbnkpID0+IGFzeW5jIChkaXNwYXRjaDogYW55KSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3N1cHBvcnQvY3JlYXRlYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0YXNrKVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogQ1JFQVRFX1NVUFBPUlRfVEFTSywgcGF5bG9hZDogdGFzayB9KVxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRBbGxVc2Vyc1Rhc2tzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvc3VwcG9ydC8ke3VzZXIudXNlci5pZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9BTExfVVNFUl9UQVNLUywgcGF5bG9hZDogcmVzIH0pO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcclxufVxyXG5leHBvcnQgY29uc3Qgc2VsZWN0UG9zdHNQYWdlID0gKHBhZ2U6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHM/cGFnZT0ke3BhZ2V9YCk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfUEFHRVNfTlVNQkVSLCBwYXlsb2FkOiByZXMubGFzdF9wYWdlIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX0FMTF9QT1NUUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgICB9KVxyXG5cclxufVxyXG5leHBvcnQgY29uc3QgZ2V0UG9zdENvbW1lbnRzID0gKHBvc3RJZDogbnVtYmVyIHwgc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cy8ke3Bvc3RJZH0vY29tbWVudHNgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX1BPU1RfQ09NTUVOVFMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3RDb21tZW50ID0gKHBvc3RJZDogbnVtYmVyIHwgc3RyaW5nLCBjb21tZW50OiBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogYW55KSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzLyR7cG9zdElkfS9jb21tZW50cy9jcmVhdGVgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29tbWVudCB9KVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBDUkVBVEVfUE9TVF9DT01NRU5ULCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJQb3N0cyA9IChmaWx0ZXJJdGVtc09iamVjdDogYW55KSA9PiBhc3luYyAoZGlzcGF0Y2g6IGFueSkgPT4ge1xyXG4gICAgLy8gZnJvbSwgdG8sIGdlbmRlciwgZXRobmljaXR5X2lkLCBoYWlyX2lkLCBleWVfaWQsIGNhdGVnb3J5X2lkLCBhZmZpbGlhdGlvbl9pZCwgYXZhaWxhYmlsaXR5X2lkcyhhcnJheSksIGF2YWlsYWJsZXRvX2lkcyhhcnJheSlcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvZmlsdGVyYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZmlsdGVySXRlbXNPYmplY3QpXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfUEFHRVNfTlVNQkVSLCBwYXlsb2FkOiByZXMubGFzdF9wYWdlIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogRklMVEVSX1BPU1RTLCBwYXlsb2FkOiByZXMuZGF0YS5kYXRhIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gdGVzdFxyXG5leHBvcnQgY29uc3QgVEVTVF9DUkVBVEVfUE9TVCA9ICdDUkVBVEVfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBURVNUX0ZFVENIX1BPU1QgPSAnRkVUQ0hfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBURVNUX1JFUVVFU1RfUE9TVFMgPSAnUkVRVUVTVF9QT1NUUyc7XHJcblxyXG4vLyBhcHBcclxuZXhwb3J0IGNvbnN0IFNIT1dfTE9BREVSID0gJ0FQUC9TSE9XX0xPQURFUic7XHJcbmV4cG9ydCBjb25zdCBISURFX0xPQURFUiA9ICdBUFAvSElERV9MT0FERVInO1xyXG5leHBvcnQgY29uc3QgU0hPV19BTEVSVCA9ICdBUFAvU0hPV19BTEVSVCc7XHJcbmV4cG9ydCBjb25zdCBISURFX0FMRVJUID0gJ0FQUC9ISURFX0FMRVJUJzsgXHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX1BPU1RTID0gJ0dFVF9BTExfUE9TVFMnO1xyXG5leHBvcnQgY29uc3QgR0VUX1BBR0VTX05VTUJFUiA9ICdHRVRfUEFHRVNfTlVNQkVSJztcclxuZXhwb3J0IGNvbnN0IEdFVF9ORVdfUE9TVFMgPSAnR0VUX05FV19QT1NUUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfTE9DQUlUT05TX0lORk8gPSAnR0VUX0xPQ0FJVE9OU19JTkZPJztcclxuZXhwb3J0IGNvbnN0IEdFVF9DSVRJRVMgPSAnR0VUX0NJVElFUyc7XHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfU1VQUE9SVF9UQVNLID0gJ0NSRUFURV9TVVBQT1JUX1RBU0snO1xyXG5leHBvcnQgY29uc3QgR0VUX0FMTF9VU0VSX1RBU0tTID0gJ0dFVF9BTExfVVNFUl9UQVNLUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQVBQX0lORk8gPSAnR0VUX0FQUF9JTkZPJztcclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX0NPTU1FTlRTID0gJ0dFVF9QT1NUX0NPTU1FTlRTJztcclxuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUX0NPTU1FTlQgPSAnQ1JFQVRFX1BPU1RfQ09NTUVOVCc7XHJcbmV4cG9ydCBjb25zdCBGSUxURVJfUE9TVFMgPSAnRklMVEVSX1BPU1RTJztcclxuXHJcbi8vIHByb3ZpZGVyXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVCA9ICdQUk9WSURFUi9BRERfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVCA9ICdQUk9WSURFUi9SRU1PVkVfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TVCA9ICdQUk9WSURFUi9VUERBVEVfUE9TVCc7XHJcblxyXG4vLyBwcm92aWRlclxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3ZpZGVyUG9zdCB7XHJcbiAgaWQ6IG51bWJlciB8IHN0cmluZyxcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgc2Vjb25kTmFtZTogc3RyaW5nLFxyXG4gIGFjY291bnRpbmdOYW1lOiBzdHJpbmcsXHJcbiAgc2V4OiBzdHJpbmcsXHJcbiAgYWdlOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwaG9uZTogbnVtYmVyIHwgc3RyaW5nLFxyXG4gIGV0aG5pdGhpdHk6IHN0cmluZyxcclxuICBoYWlyOiBzdHJpbmcsXHJcbiAgZXllczogc3RyaW5nLFxyXG4gIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gIGFmZmlsaWF0aW9uOiBzdHJpbmcsXHJcbiAgYXZhaWxhYmxlVG86IHN0cmluZyxcclxuICBhdmFpbGFiaWxpdHk6IHN0cmluZyxcclxuICBzaG9ydFN1bW1hcnk6IHN0cmluZyxcclxuICBhYm91dDogc3RyaW5nLFxyXG4gIHBob3Rvczogc3RyaW5nW10sXHJcbiAgdmlkZW9zOiBzdHJpbmdbXVxyXG59XHJcblxyXG4vLyB1c2VyXHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RfU1RBVEUgPSAnVVNFUi9TRUxFQ1RfU1RBVEUnO1xyXG5leHBvcnQgY29uc3QgU0VMRUNUX0NJVFkgPSAnVVNFUi9TRUxFQ1RfQ0lUWSc7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RfTElTVF9TT1JUID0gJ1VTRVIvU0VMRUNUX0xJU1RfU09SVCc7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RfTElTVF9GSUxURVIgPSAnVVNFUi9TRUxFQ1RfTElTVF9GSUxURVInO1xyXG5leHBvcnQgY29uc3QgU0VMRUNUX0NBVEVHT1JZID0gJ1VTRVIvU0VMRUNUX0NBVEVHT1JZJztcclxuXHJcbi8vIGFkbWluXHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX1NVUFBPUlRfVEFTS1MgPSAnR0VUX0FMTF9TVVBQT1JUX1RBU0tTJztcclxuZXhwb3J0IGNvbnN0IEVESVRfU1VQUE9SVF9UQVNLUyA9ICdFRElUX1NVUFBPUlRfVEFTS1MnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1NVUFBPUlRfVEFTSyA9ICdERUxFVEVfU1VQUE9SVF9UQVNLJztcclxuLy8gZXhwb3J0IGNvbnN0IENSRUFURV9DQVRFR09SWSA9ICdDUkVBVEVfQ0FURUdPUlknO1xyXG4vLyBleHBvcnQgY29uc3QgRURJVF9DQVRFR09SWSA9ICdFRElUX0NBVEVHT1JZJztcclxuLy8gZXhwb3J0IGNvbnN0IERFTEVURV9DQVRFR09SWSA9ICdERUxFVEVfQ0FURUdPUlknO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaXN0b3J5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=