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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.ts");
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/actions */ "./src/redux/actions/actions.ts");





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
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove("currentUser");
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${target}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  const promise = response.json();

  if (response.status === 200) {
    return promise.then(data => {
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set("currentUser", JSON.stringify(data), {
        expires: 1
      });
      currentUserSubject = data;
      return data;
    }).then(() => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/')).then(() => window.location.reload()).catch(err => console.error("Error:", err));
  }
}

async function registrationClient(name, password, email, password_confirmation) {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove("currentUser");
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/client/register`, {
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
  });
  const promise = response.json();

  if (response.status === 201) {
    return promise.then(data => {
      _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__["showSuccess"])(data.message));
      setTimeout(() => window.location.reload(), 3000);
    }).catch(err => console.error("Error:", err));
  }
}

async function registrationAdmin(name, password, email, password_confirmation) {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove("currentUser");
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${target}/admin/register`, {
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
  });
  const promise = response.json();

  if (response.status === 201) {
    return promise.then(data => {
      _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__["showSuccess"])(data.message));
      setTimeout(() => window.location.reload(), 3000);
    }).catch(err => console.error("Error:", err));
  }
}

async function registrationProvider(name, password, email, password_confirmation, phone) {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove("currentUser");
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${target}/individual/register`, {
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
  });
  const promise = response.json();

  if (response.status === 201) {
    return promise.then(data => {
      _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__["showSuccess"])(data.message));
      setTimeout(() => window.location.reload(), 3000);
    }).catch(err => console.error("Error:", err));
  }
}

async function registrationAgency(name, password, email, password_confirmation, phone, agency_name) {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove("currentUser");
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

  if (response.status === 201) {
    return promise.then(data => {
      _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__["showSuccess"])(data.message));
      setTimeout(() => window.location.reload(), 3000);
    }).catch(err => console.error("Error:", err));
  }
}

async function logout() {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove("currentUser");
  return await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${target}/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  }).then(() => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login')).then(() => window.location.reload(true)).catch(err => console.error("Error:", err));
}

/***/ }),

/***/ "./src/_services/index.js":
/*!********************************!*\
  !*** ./src/_services/index.js ***!
  \********************************/
/*! exports provided: authenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["authenticationService"]; });



/***/ }),

/***/ "./src/assets/images/main/horizontal/model-1.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/main/horizontal/model-1.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/model-1-c3fa418eeb188a310a8abb8248eee72f.png";

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
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/home-page/Categories.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Categories({
  categories,
  newPosts,
  filterPosts
}) {
  const {
    0: filterCategory,
    1: setFilterCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

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

/***/ "./src/components/home-page/EscortContent.jsx":
/*!****************************************************!*\
  !*** ./src/components/home-page/EscortContent.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EscortContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _escort_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escort.module.scss */ "./src/components/home-page/escort.module.scss");
/* harmony import */ var _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_escort_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_filter_ModelsFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models-filter/ModelsFilter */ "./src/components/models-filter/ModelsFilter.jsx");
/* harmony import */ var _EscortList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EscortList */ "./src/components/home-page/EscortList.jsx");
/* harmony import */ var _EscortGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EscortGrid */ "./src/components/home-page/EscortGrid.jsx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/home-page/EscortContent.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function EscortContent({
  posts,
  pagesNumber,
  selectPostsPage,
  availability,
  available_to,
  ethnicity,
  eyes,
  hair,
  affiliation,
  filterPosts,
  addToFavorites,
  sortPosts
}) {
  const {
    0: visibleComponent,
    1: setVisibleComponent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("list");
  const {
    0: showFilter,
    1: setShowFilter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()(".filter_items_block").hide(() => {
      setShowFilter(false);
    });
  }, []);

  const slideFilter = () => {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()(".filter_items_block").slideToggle(() => {
      setShowFilter(!showFilter);
    });
  };

  const changeVisibleComponent = e => {
    e.persist();
    jquery__WEBPACK_IMPORTED_MODULE_5___default()(".models-view-block").fadeOut(300, function () {
      setVisibleComponent(jquery__WEBPACK_IMPORTED_MODULE_5___default()(e.target).attr("name"));
      jquery__WEBPACK_IMPORTED_MODULE_5___default()(".models-view-block").fadeIn(700);
    });
  };

  return __jsx("section", {
    className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.escort_content_block,
    style: {
      minHeight: "100vh"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `text-white ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.escort_content_title}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "Meet our selection of worldwide escorts")), __jsx("div", {
    className: `${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_sort_control}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_btn_wrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_btn_group,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("span", {
    onClick: slideFilter,
    className: `pl-2 ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_btn}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "FILTER"), __jsx("select", {
    className: `pl-2 form-control border-0 ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sorting_btn}`,
    onChange: e => sortPosts(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx("option", {
    value: "default",
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, "SORTING"), __jsx("option", {
    value: "date/-",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, "date added from new"), __jsx("option", {
    value: "date/+",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, "date added from old"), __jsx("option", {
    value: "reviews/-",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, "number of comments from less"), __jsx("option", {
    value: "reviews/+",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, "number of comments from more"))), __jsx("div", {
    className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_btn_group,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx("span", {
    name: "grid",
    className: `grid_btn carousel_layout_change_btn ${visibleComponent === "grid" ? "active_btn_pink" : ""} ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.grid_btn}`,
    onClick: e => changeVisibleComponent(e),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "GRID"), __jsx("span", {
    name: "list",
    className: `list_btn carousel_layout_change_btn ${visibleComponent === "list" ? "active_btn_pink" : ""} ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.list_btn}`,
    onClick: e => changeVisibleComponent(e),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, "LIST")))), __jsx("div", {
    className: `filter_items_block ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_items_block}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx(_models_filter_ModelsFilter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    availability: availability,
    available_to: available_to,
    ethnicity: ethnicity,
    affiliation: affiliation,
    filterPosts: filterPosts,
    eyes: eyes,
    hair: hair,
    slideFilter: slideFilter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "models-view-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, visibleComponent === "list" ? __jsx(_EscortList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    posts: posts,
    pagesNumber: pagesNumber,
    selectPostsPage: selectPostsPage,
    addToFavorites: addToFavorites,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }) : __jsx(_EscortGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    posts: posts,
    pagesNumber: pagesNumber,
    selectPostsPage: selectPostsPage,
    addToFavorites: addToFavorites,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  })));
}

/***/ }),

/***/ "./src/components/home-page/EscortGrid.jsx":
/*!*************************************************!*\
  !*** ./src/components/home-page/EscortGrid.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EscortGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _escort_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escort.module.scss */ "./src/components/home-page/escort.module.scss");
/* harmony import */ var _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_escort_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_main_signs_favorite_pink_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/main/signs/favorite-pink.png */ "./src/assets/images/main/signs/favorite-pink.png");
/* harmony import */ var _assets_images_main_signs_favorite_pink_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_favorite_pink_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/main/signs/crown-pink.png */ "./src/assets/images/main/signs/crown-pink.png");
/* harmony import */ var _assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/main/signs/star-pink.png */ "./src/assets/images/main/signs/star-pink.png");
/* harmony import */ var _assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/main/signs/plane-pink.png */ "./src/assets/images/main/signs/plane-pink.png");
/* harmony import */ var _assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modal_window_VerifiedWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-window/VerifiedWindow */ "./src/components/modal-window/VerifiedWindow.jsx");
/* harmony import */ var _assets_images_main_horizontal_model_1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/main/horizontal/model-1.png */ "./src/assets/images/main/horizontal/model-1.png");
/* harmony import */ var _assets_images_main_horizontal_model_1_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_horizontal_model_1_png__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/home-page/EscortGrid.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function EscortGrid({
  posts,
  pagesNumber,
  selectPostsPage,
  addToFavorites
}) {
  const {
    0: currentPage,
    1: setCurrentPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: pages,
    1: setPages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([1]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setPages([1]);

    for (let i = 0; i < pagesNumber; i++) {
      pages.push(1);
    }
  }, []);
  return __jsx("div", {
    style: {
      maxWidth: "1260px",
      margin: "1em auto",
      padding: "0 0 5em 0"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, posts && posts.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", {
    className: "list-group p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, posts.map((post, i) => {
    return __jsx("li", {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.vertical_slide,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.vertical_slide_image,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: post.photo_horizontal,
      alt: post.model_name,
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.model_photo_grid,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 23
      }
    })), __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.vertical_slide_model_info,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 23
      }
    }, __jsx("h5", {
      className: `text-white ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.name}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }
    }, post.model_name), __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.network_status,
      style: {
        textTransform: 'capitalize'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }, post.status), __jsx("div", {
      className: `text-white ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.location}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 25
      }
    }, "Location"), __jsx("p", {
      className: `text-white ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.summary}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }
    }, post.summary)), __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_control,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 23
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: _assets_images_main_signs_favorite_pink_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "",
      onClick: e => {
        e.preventDefault();
        addToFavorites(post.id);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 27
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: _assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 27
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: _assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 27
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: _assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 27
      }
    }))), __jsx("div", {
      className: `text-white ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.verification}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 23
      }
    }, __jsx("span", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.verified,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 25
      }
    }, __jsx(_modal_window_VerifiedWindow__WEBPACK_IMPORTED_MODULE_7__["default"], {
      buttonLabel: `VERIFIED`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 27
      }
    }), __jsx("i", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 27
      }
    })), __jsx("span", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.view_profile,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 25
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
        lineNumber: 84,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: "btn text-white",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 29
      }
    }, "VIEW PROFILE")))))));
  })), __jsx("nav", {
    "aria-label": "Page navigation example",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "pagination justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "page-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "page-link bg-dark text-white border-secondary",
    href: "#",
    onClick: e => {
      e.preventDefault();

      if (currentPage > 1) {
        selectPostsPage(currentPage - 1);
        setCurrentPage(currentPage - 1);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, "Previous")), pages.map((p, i) => __jsx("li", {
    key: i,
    className: "page-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "page-link bg-dark text-white border-secondary",
    href: "#",
    onClick: e => {
      e.preventDefault();
      selectPostsPage(i + 1);
      setCurrentPage(i + 1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  }, i + 1))), __jsx("li", {
    className: "page-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "page-link bg-dark text-white border-secondary",
    href: "#",
    onClick: e => {
      e.preventDefault();

      if (currentPage < pagesNumber) {
        selectPostsPage(currentPage + 1);
        setCurrentPage(currentPage + 1);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, "Next"))))) : __jsx("div", {
    className: "h1 text-info text-center py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, "No posts..."));
} // about: "aboutaboutaboutaboutaboutaboutaboutaboutaboutaboutabout"
// account_name: "account_nameaccount_nameaccount_nameaccount_name"
// affiliation_id: null
// age: 22
// available_to_date: null
// category_id: null
// city_id: null
// created_at: "2020-06-19T10:35:00.000000Z"
// ethnicity_id: null
// eye_id: null
// gender: "man"
// hair_id: null
// height: "235"
// id: 1
// is_more_photos: 0
// is_photos_vip: 0
// is_published: 0
// is_verify: 0
// is_vip: 0
// model_name: "Shluha"
// photo: null
// second_name: "second"
// state_id: null
// status: "other"
// summary: "summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary"
// updated_at: "2020-06-22T06:34:12.000000Z"
// user_id: null
// video_link: "https://www.youtube.com/watch?v=TQgGFwVWD24&list=RD-9Rng8OuM10&index=2"
// vip_to_date: null

/***/ }),

/***/ "./src/components/home-page/EscortList.jsx":
/*!*************************************************!*\
  !*** ./src/components/home-page/EscortList.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EscortList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _escort_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./escort.module.scss */ "./src/components/home-page/escort.module.scss");
/* harmony import */ var _escort_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_escort_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_main_signs_favorite_pink_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/main/signs/favorite-pink.png */ "./src/assets/images/main/signs/favorite-pink.png");
/* harmony import */ var _assets_images_main_signs_favorite_pink_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_favorite_pink_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/main/signs/plane-pink.png */ "./src/assets/images/main/signs/plane-pink.png");
/* harmony import */ var _assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/main/signs/star-pink.png */ "./src/assets/images/main/signs/star-pink.png");
/* harmony import */ var _assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/main/signs/crown-pink.png */ "./src/assets/images/main/signs/crown-pink.png");
/* harmony import */ var _assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_main_horizontal_model_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/main/horizontal/model-1.png */ "./src/assets/images/main/horizontal/model-1.png");
/* harmony import */ var _assets_images_main_horizontal_model_1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_horizontal_model_1_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/home-page/EscortList.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import Slider from "react-slick"







function EscortList({
  posts,
  pagesNumber,
  selectPostsPage,
  addToFavorites
}) {
  const {
    0: currentPage,
    1: setCurrentPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: pages,
    1: setPages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([1]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setPages([1]);

    for (let i = 0; i < pagesNumber; i++) {
      pages.push(1);
    }
  }, []);
  const settings = {
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
  return __jsx("div", {
    style: {
      maxWidth: '1260px',
      padding: '1.5em 0 5em 0',
      margin: '0 auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, posts && posts.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", {
    className: `${_escort_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.escort_list}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, posts.map((post, i) => {
    return __jsx("li", {
      key: i,
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slide,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 20
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: {
        pathname: "/modelProfile",
        query: {
          id: post.id
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 82
      }
    }, __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.model_photo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: post.photo_vertical,
      alt: post.model_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 19
      }
    })), __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.model_info,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.model_info_title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 19
      }
    }, __jsx("h5", {
      className: "text-white",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }
    }, post.model_name), __jsx("div", {
      style: {
        textTransform: 'capitalize'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }
    }, post.status)), __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.signs_group,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sign,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: _assets_images_main_signs_favorite_pink_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "model",
      onClick: e => {
        e.preventDefault();
        addToFavorites(post.id);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 23
      }
    })), __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sign,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: _assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      alt: "model",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 23
      }
    })), __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sign,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: _assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "model",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 23
      }
    })), __jsx("div", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sign,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: _assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "model",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 23
      }
    })))))));
  })), __jsx("nav", {
    "aria-label": "Page navigation example",
    className: "pt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "pagination justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "page-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "page-link bg-dark text-white border-secondary",
    href: "#",
    onClick: e => {
      e.preventDefault();

      if (currentPage > 1) {
        selectPostsPage(currentPage - 1);
        setCurrentPage(currentPage - 1);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, "Previous")), pages.map((p, i) => __jsx("li", {
    key: i,
    className: "page-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "page-link bg-dark text-white border-secondary",
    href: "#",
    onClick: e => {
      e.preventDefault();
      selectPostsPage(i + 1);
      setCurrentPage(i + 1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, i + 1))), __jsx("li", {
    className: "page-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "page-link bg-dark text-white border-secondary",
    href: "#",
    onClick: e => {
      e.preventDefault();

      if (currentPage < pagesNumber) {
        selectPostsPage(currentPage + 1);
        setCurrentPage(currentPage + 1);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, "Next"))))) : __jsx("div", {
    className: "h1 text-info text-center py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, "No posts..."));
} // about: "aboutaboutaboutaboutaboutaboutaboutaboutaboutaboutabout"
// account_name: "account_nameaccount_nameaccount_nameaccount_name"
// affiliation_id: null
// age: 22
// available_to_date: null
// category_id: null
// city_id: null
// created_at: "2020-06-19T10:35:00.000000Z"
// ethnicity_id: null
// eye_id: null
// gender: "man"
// hair_id: null
// height: "235"
// id: 1
// is_more_photos: 0
// is_photos_vip: 0
// is_published: 0
// is_verify: 0
// is_vip: 0
// model_name: "Shluha"
// photo: null
// second_name: "second"
// state_id: null
// status: "other"
// summary: "summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary"
// updated_at: "2020-06-22T06:34:12.000000Z"
// user_id: null
// video_link: "https://www.youtube.com/watch?v=TQgGFwVWD24&list=RD-9Rng8OuM10&index=2"
// vip_to_date: null

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
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/home-page/Location.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Location({
  states,
  getCities
}) {
  const {
    0: currentLocation,
    1: setCurrentLocation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const changeLocation = stateId => {
    getCities(stateId);
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
      lineNumber: 25,
      columnNumber: 5
    }
  }, states.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `text-white ${_location_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.locaton_block_title}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "SELECT A LOCATION BELOW")), __jsx("div", {
    className: _location_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.location_block_select,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("select", {
    className: "form-control",
    onChange: e => changeLocation(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "default",
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Location"), states.map((state, i) => __jsx("option", {
    key: i,
    value: state.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, state.name)))), __jsx("div", {
    className: _location_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.location_block_list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
        lineNumber: 43,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/location",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: currentLocation === state ? 'active_btn_blue' : '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
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
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/home-page/NewPosts.jsx";
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
      columnNumber: 9
    }
  }, newPosts && newPosts.length ? __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, settings, {
    style: {
      maxWidth: "1260px",
      margin: "0 auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }), "newPosts.map((post, i) => (", __jsx("div", {
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _categories_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
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
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: post.photo_vertical,
    alt: "model",
    className: "w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 41
    }
  }, post.model_name)))))), "))") : __jsx("div", {
    className: `text-center text-info py-5`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, "No posts..."));
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
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/home-page/Search.jsx";
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

/***/ "./src/components/home-page/escort.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/home-page/escort.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"escort_content_title": "escort_escort_content_title__2cVW6",
	"filter_sort_control": "escort_filter_sort_control__2yITi",
	"filter_btn_wrap": "escort_filter_btn_wrap__1sACd",
	"filter_btn_group": "escort_filter_btn_group__x-FSM",
	"sorting_btn": "escort_sorting_btn__38jh3",
	"filter_items_block": "escort_filter_items_block__3Mqa3",
	"escort_list": "escort_escort_list__1N50Z",
	"slide": "escort_slide__qnbIj",
	"model_photo": "escort_model_photo__3tyeD",
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

/***/ "./src/components/modal-window/VerifiedWindow.jsx":
/*!********************************************************!*\
  !*** ./src/components/modal-window/VerifiedWindow.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/modal-window/VerifiedWindow.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const VerifiedWindow = props => {
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
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    inline: true,
    onSubmit: e => e.preventDefault(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "",
    className: `p-0 text-white`,
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, buttonLabel)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
    toggle: toggle,
    style: {
      fontFamily: 'Audiowide, cursive'
    },
    className: "bg-dark text-info border-bottom border-secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Vibe City Verified"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
    className: "bg-dark text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "In order for an Eros advertiser to be eligible to have the Verified seal affixed to their advertisement or to be placed in Eros' Verified category, the Eros Guide must have received tangible information that the individual appearing in the photographs on any specific advertisement intended to be advertised on the Eros Guide is an individual providing adult companionship. Such proof could include comparing the pictures submitted to the Eros Guide on an advertisement with either government issued ID\u2019s other photographic evidence."), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "However, please be aware that the Eros Guide cannot and does not make any guarantees or warranties that either (a) the advertiser in the pictures on any particular ad will be the same individual who shows up for any date arranged between an advertiser and yourself, (b) that any of the text, including the name of the advertiser, or stats that appears on an advertisement, is accurate or truthful. Finally, the term \u201CVerified\u201D does not mean that Eros Guide has reviewed or confirmed any licensure or permits issued to the advertiser."))));
};

/* harmony default export */ __webpack_exports__["default"] = (VerifiedWindow);
reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  centered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelledBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  keyboard: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  backdrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['static'])]),
  scrollable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onOpened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClosed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  wrapClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  modalClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  backdropClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  contentClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fade: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  unmountOnClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  returnFocusAfterClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./src/components/models-filter/ModelsFilter.jsx":
/*!*******************************************************!*\
  !*** ./src/components/models-filter/ModelsFilter.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModelsFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.module.scss */ "./src/components/models-filter/form.module.scss");
/* harmony import */ var _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/models-filter/ModelsFilter.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ModelsFilter({
  availability,
  available_to,
  ethnicity,
  affiliation,
  eyes,
  hair,
  filterPosts,
  slideFilter
}) {
  const {
    0: sex,
    1: setSex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['gender', '']);
  const {
    0: ageFrom,
    1: setAgeFrom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['ageFrom', 0]);
  const {
    0: ageTo,
    1: setAgeTo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['ageTo', 0]);
  const {
    0: stateEthnicity,
    1: setEthnicity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['ethnicity_id', '']);
  const {
    0: stateHair,
    1: setHair
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['hair_id', '']);
  const {
    0: stateEye,
    1: setEye
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['eye_id', '']);
  const {
    0: stateAffiliation,
    1: setAffiliation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['affiliation_id', '']);
  const {
    0: stateAvailableTo,
    1: setAvailableTo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['availableto_ids', []]);
  const {
    0: stateAvailability,
    1: setAvailability
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['availability_ids', []]);

  const applyFilter = e => {
    e.preventDefault();
    const filterItems = {};
    new Promise(res => {
      [sex, stateEthnicity, stateHair, stateEye, stateAffiliation, stateAvailableTo, stateAvailability].forEach(item => {
        if (item[1].toString().length) {
          filterItems[item[0]] = item[1];
        }
      });
      res();
    }).then(() => {
      filterPosts(filterItems);
      slideFilter();
    }).catch(err => console.error('Error: ', err));
  };

  return __jsx("form", {
    onSubmit: applyFilter,
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_form,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sex_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Gender"), __jsx("label", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("input", {
    className: "mr-2",
    value: "female",
    type: "radio",
    name: "sex",
    onChange: e => setSex(['gender', e.target.value]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.checkmark,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), "Female"), __jsx("label", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("input", {
    className: "mr-2",
    value: "male",
    type: "radio",
    name: "sex",
    onChange: e => setSex(['gender', e.target.value]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.checkmark,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }), "Male")), __jsx("label", {
    className: `${_form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.age_block} form-group`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "Age"), __jsx("input", {
    min: "18",
    className: "mr-2",
    className: "form-control",
    type: "number",
    placeholder: "from",
    onClick: e => setAgeFrom(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx("input", {
    className: "mr-2",
    className: "form-control",
    type: "number",
    placeholder: "to",
    onClick: e => setAgeTo(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  })), __jsx("label", {
    className: `${_form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ethnicity_block} form-group`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "Ethnicity:"), __jsx("select", {
    className: "form-control dropdown",
    onChange: e => setEthnicity(['ethnicity_id', e.target.value]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx("option", {
    hidden: true,
    value: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, "-- select one --"), ethnicity.length ? ethnicity.map(e => __jsx("option", {
    key: e.id,
    value: e.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, e.value)) : null)), __jsx("div", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hair_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, "Hair"), hair.length ? hair.map(h => __jsx("label", {
    key: h.id,
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx("input", {
    className: "mr-2",
    value: h.id,
    type: "radio",
    name: "hair",
    onClick: e => setHair(['hair_id', e.target.value]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.checkmark,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }), h.value)) : null), __jsx("div", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.eye_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, __jsx("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, "Eye"), eyes.length ? eyes.map(e => __jsx("label", {
    key: e.id,
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx("input", {
    className: "mr-2",
    value: e.id,
    type: "radio",
    name: "eye",
    onClick: e => setEye(['eye_id', e.target.value]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.checkmark,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }), e.value)) : null), __jsx("div", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.affiliation_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, __jsx("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, "Affiliation"), affiliation.length ? affiliation.map(a => __jsx("label", {
    key: a.id,
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, __jsx("input", {
    className: "mr-2",
    value: a.id,
    type: "radio",
    name: "affiliation",
    onClick: e => setAffiliation(['affiliation_id', e.target.value]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.checkmark,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }), a.value)) : null), __jsx("div", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.availableTo_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, __jsx("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, " Available To:"), available_to.length ? available_to.map(a => __jsx("label", {
    key: a.id,
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, __jsx("input", {
    className: "mr-2",
    type: "checkbox",
    value: a.id,
    onChange: e => {
      if (e.target.checked) {
        setAvailableTo(['availableto_ids', [...stateAvailableTo[1], e.target.value]]);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.checksign,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 15
    }
  }), a.value)) : null), __jsx("div", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.availability_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }, __jsx("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, "Availability:"), availability.length ? availability.map(a => __jsx("label", {
    key: a.id,
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, __jsx("input", {
    className: "mr-2",
    type: "checkbox",
    value: a.id,
    onChange: e => {
      if (e.target.checked) {
        setAvailability(['availability_ids', [...stateAvailability[1], e.target.value]]);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.checksign,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 15
    }
  }), a.value)) : null), __jsx("button", {
    type: "submit",
    className: `rounded border-0 ${_form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.btn_submit}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }
  }, "Show"));
}

/***/ }),

/***/ "./src/components/models-filter/form.module.scss":
/*!*******************************************************!*\
  !*** ./src/components/models-filter/form.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"filter_form": "form_filter_form__28CEN",
	"sex_block": "form_sex_block__3IeCb",
	"age_block": "form_age_block__3QEmS",
	"ethnicity_block": "form_ethnicity_block__2lW57",
	"hair_block": "form_hair_block__1hfG5",
	"eye_block": "form_eye_block__RiYpX",
	"affiliation_block": "form_affiliation_block__14X6b",
	"availableTo_block": "form_availableTo_block__2ijNB",
	"availability_block": "form_availability_block__1zVmT",
	"btn_submit": "form_btn_submit__3QKYZ",
	"label": "form_label__24gTY",
	"checkmark": "form_checkmark__3KKlf",
	"checksign": "form_checksign__2ef4R"
};


/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home_page_Location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/home-page/Location */ "./src/components/home-page/Location.jsx");
/* harmony import */ var _components_home_page_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home-page/Search */ "./src/components/home-page/Search.jsx");
/* harmony import */ var _components_home_page_Categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home-page/Categories */ "./src/components/home-page/Categories.jsx");
/* harmony import */ var _components_home_page_EscortContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home-page/EscortContent */ "./src/components/home-page/EscortContent.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/actions */ "./src/redux/actions/actions.ts");
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function Home({
  categories,
  getAllPosts,
  posts,
  getLocationsInfo,
  states,
  getNewPosts,
  newPosts,
  pagesNumber,
  selectPostsPage,
  filterPosts,
  availability,
  available_to,
  ethnicity,
  eyes,
  hair,
  affiliation,
  addToFavorites,
  sortPosts,
  getAppInfo
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getAllPosts();
    getLocationsInfo();
    getNewPosts();
    getAppInfo();
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 3
    }
  }, __jsx(_components_home_page_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    states: states,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }
  }), __jsx(_components_home_page_Search__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }
  }), __jsx(_components_home_page_Categories__WEBPACK_IMPORTED_MODULE_3__["default"], {
    categories: categories,
    newPosts: newPosts,
    filterPosts: filterPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }
  }), __jsx(_components_home_page_EscortContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    posts: posts,
    pagesNumber: pagesNumber,
    selectPostsPage: selectPostsPage,
    availability: availability,
    available_to: available_to,
    ethnicity: ethnicity,
    eyes: eyes,
    hair: hair,
    affiliation: affiliation,
    filterPosts: filterPosts,
    addToFavorites: addToFavorites,
    sortPosts: sortPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }
  }));
}

const mapStateToProps = state => {
  return _objectSpread(_objectSpread({}, state), {}, {
    categories: state.app.categories,
    posts: state.app.posts,
    states: state.app.states,
    newPosts: state.app.newPosts,
    pagesNumber: state.app.pagesNumber,
    availability: state.app.availability,
    available_to: state.app.available_to,
    ethnicity: state.app.ethnicity,
    eyes: state.app.eyes,
    hair: state.app.hair,
    affiliation: state.app.affiliation
  });
};

const mapDispatchToPops = {
  getAllPosts: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["getAllPosts"],
  getLocationsInfo: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["getLocationsInfo"],
  getNewPosts: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["getNewPosts"],
  selectPostsPage: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["selectPostsPage"],
  filterPosts: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["filterPosts"],
  addToFavorites: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["addToFavorites"],
  sortPosts: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["sortPosts"],
  getAppInfo: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["getAppInfo"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToPops)(Home));

/***/ }),

/***/ "./src/redux/actions/actions.ts":
/*!**************************************!*\
  !*** ./src/redux/actions/actions.ts ***!
  \**************************************/
/*! exports provided: createPost, showLoader, hideLoader, showAlert, hideAlert, fetchPosts, getAllPosts, getNewPosts, getLocationsInfo, getAppInfo, getCities, createSupportTask, getAllUsersTasks, selectPostsPage, getPostComments, createPostComment, filterPosts, reportPost, addToFavorites, addToFavoritesBusiness, getFavoritesBusiness, getFavoritesUser, getComplains, sortPosts, showSuccess */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportPost", function() { return reportPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToFavorites", function() { return addToFavorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToFavoritesBusiness", function() { return addToFavoritesBusiness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoritesBusiness", function() { return getFavoritesBusiness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoritesUser", function() { return getFavoritesUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComplains", function() { return getComplains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortPosts", function() { return sortPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSuccess", function() { return showSuccess; });
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
    console.log(res); // return dispatch({ type: GET_APP_INFO, payload: res.data });
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
  }).catch(err => console.error('Error: ', err));
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
  }).catch(err => console.error('Error: ', err));
  ;
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
  }).catch(err => console.error('Error: ', err));
  ;
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
  }).catch(err => console.error('Error: ', err));
  ;
};
const reportPost = (postId, message) => async dispatch => {
  const user = _services__WEBPACK_IMPORTED_MODULE_2__["authenticationService"].currentUserValue;
  return await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/${postId}/complaints/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${user.token_type} ${user.token}`
    },
    body: JSON.stringify({
      message,
      status: 'In progress'
    })
  }); // const promise = response.json();
  // return promise.then(res => {
  //     dispatch({ type: REPORT_POST });
  // });
};
const addToFavorites = postId => async dispatch => {
  const user = _services__WEBPACK_IMPORTED_MODULE_2__["authenticationService"].currentUserValue;
  return await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/posts/${postId}/favorites/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${user.token_type} ${user.token}`
    },
    body: JSON.stringify({
      is_favorite: true
    })
  });
};
const addToFavoritesBusiness = postId => async dispatch => {
  const user = _services__WEBPACK_IMPORTED_MODULE_2__["authenticationService"].currentUserValue;
  return await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/posts/${postId}/favorites_business/add`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${user.token_type} ${user.token}`
    }
  });
};
const getFavoritesBusiness = () => async dispatch => {
  const user = _services__WEBPACK_IMPORTED_MODULE_2__["authenticationService"].currentUserValue;
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/favorites_business/my`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${user.token_type} ${user.token}`
    }
  });
  const promise = response.json();
  return promise.then(res => {
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_FAVORITES"],
      payload: res.data
    });
  }).catch(err => console.error('Error: ', err));
};
const getFavoritesUser = () => async dispatch => {
  const user = _services__WEBPACK_IMPORTED_MODULE_2__["authenticationService"].currentUserValue;
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/favorites/my`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${user.token_type} ${user.token}`
    }
  });
  const promise = response.json();
  return promise.then(res => {
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_FAVORITES"],
      payload: res.data
    });
  }).catch(err => console.error('Error: ', err));
};
const getComplains = userId => async dispatch => {
  const user = _services__WEBPACK_IMPORTED_MODULE_2__["authenticationService"].currentUserValue;
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/posts/complaints/user/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${user.token_type} ${user.token}`
    }
  });
  const promise = response.json();
  return promise.then(res => {
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_COMPLAINS"],
      payload: res.data
    });
  }).catch(err => console.error('Error: ', err));
};
const sortPosts = sortType => async dispatch => {
  return dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SORT_POSTS"],
    payload: sortType
  });
};
const showSuccess = text => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SHOW_SUCCESS"],
    payload: text
  });
  setTimeout(() => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SHOW_SUCCESS"],
      payload: null
    });
  }, 3000);
};

/***/ }),

/***/ "./src/redux/actions/types.ts":
/*!************************************!*\
  !*** ./src/redux/actions/types.ts ***!
  \************************************/
/*! exports provided: TEST_CREATE_POST, TEST_FETCH_POST, TEST_REQUEST_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, GET_ALL_POSTS, GET_PAGES_NUMBER, GET_NEW_POSTS, GET_LOCAITONS_INFO, GET_CITIES, CREATE_SUPPORT_TASK, GET_ALL_USER_TASKS, GET_APP_INFO, GET_POST_COMMENTS, CREATE_POST_COMMENT, FILTER_POSTS, REPORT_POST, GET_FAVORITES, GET_COMPLAINS, SORT_POSTS, SHOW_SUCCESS, ADD_POST, REMOVE_POST, UPDATE_POST, SELECT_STATE, SELECT_CITY, SELECT_LIST_SORT, SELECT_LIST_FILTER, SELECT_CATEGORY, GET_ALL_SUPPORT_TASKS, EDIT_SUPPORT_TASKS, DELETE_SUPPORT_TASK */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPORT_POST", function() { return REPORT_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAVORITES", function() { return GET_FAVORITES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMPLAINS", function() { return GET_COMPLAINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_POSTS", function() { return SORT_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_SUCCESS", function() { return SHOW_SUCCESS; });
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
const FILTER_POSTS = 'FILTER_POSTS';
const REPORT_POST = 'REPORT_POST';
const GET_FAVORITES = 'GET_FAVORITES';
const GET_COMPLAINS = 'GET_GET_COMPLAINS';
const SORT_POSTS = 'SORT_POSTS';
const SHOW_SUCCESS = 'SHOW_SUCCESS'; // provider

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

/***/ "./src/redux/reducers/adminReducer.ts":
/*!********************************************!*\
  !*** ./src/redux/reducers/adminReducer.ts ***!
  \********************************************/
/*! exports provided: adminReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminReducer", function() { return adminReducer; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/redux/actions/types.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  tasks: []
};
const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_SUPPORT_TASKS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        tasks: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["DELETE_SUPPORT_TASK"]:
      const tasks = state.tasks.filter(task => task.id != action.payload);
      return _objectSpread(_objectSpread({}, state), {}, {
        tasks
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/reducers/appReducer.ts":
/*!******************************************!*\
  !*** ./src/redux/reducers/appReducer.ts ***!
  \******************************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/redux/actions/types.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  postComments: [],
  loading: false,
  alert: null,
  categories: [],
  posts: [],
  newPosts: [],
  states: [],
  cities: [],
  supportTasks: [],
  affiliation: [],
  availability: [],
  available_to: [],
  ethnicity: [],
  eyes: [],
  hair: [],
  pagesNumber: 0,
  favorites: [],
  complains: [],
  success: null
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SHOW_LOADER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SHOW_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        success: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["HIDE_LOADER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SHOW_ALERT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        alert: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["HIDE_ALERT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        alert: null
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_POSTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SORT_POSTS"]:
      let newPosts = state.posts;

      if (action.payload === 'date/-') {
        newPosts.sort((a, b) => {
          const dateA = new Date(a.created_at.split('T')[0].split('-').join('/'));
          const dateB = new Date(b.created_at.split('T')[0].split('-').join('/'));

          if (dateA.getTime() < dateB.getTime()) {
            return a - b;
          } else if (dateA.getTime() > dateB.getTime()) {
            return b - a;
          } else return;
        });
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        posts: newPosts
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["FILTER_POSTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_PAGES_NUMBER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pagesNumber: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_NEW_POSTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        newPosts: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_LOCAITONS_INFO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        states: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_CITIES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        cities: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_COMPLAINS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        complains: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_FAVORITES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        favorites: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CREATE_SUPPORT_TASK"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        supportTasks: [...state.supportTasks, action.payload]
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_USER_TASKS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        supportTasks: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_POST_COMMENTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        postComments: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CREATE_POST_COMMENT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        postComments: [...state.postComments, action.payload]
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_APP_INFO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        categories: action.payload.categories,
        affiliation: action.payload.affiliation,
        availability: action.payload.availability,
        available_to: action.payload.available_to,
        ethnicity: action.payload.ethnicity,
        eyes: action.payload.eyes,
        hair: action.payload.hair
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/reducers/providerReducer.ts":
/*!***********************************************!*\
  !*** ./src/redux/reducers/providerReducer.ts ***!
  \***********************************************/
/*! exports provided: providerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providerReducer", function() { return providerReducer; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/redux/actions/types.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  providerPosts: []
};
const providerReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["ADD_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        providerPosts: state.providerPosts.concat(action.payload)
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        providerPosts: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        providerPosts: action.payload
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/reducers/rootReducer.ts":
/*!*******************************************!*\
  !*** ./src/redux/reducers/rootReducer.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _testReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testReducer */ "./src/redux/reducers/testReducer.ts");
/* harmony import */ var _appReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appReducer */ "./src/redux/reducers/appReducer.ts");
/* harmony import */ var _providerReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providerReducer */ "./src/redux/reducers/providerReducer.ts");
/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userReducer */ "./src/redux/reducers/userReducer.ts");
/* harmony import */ var _adminReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adminReducer */ "./src/redux/reducers/adminReducer.ts");






const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  testPosts: _testReducer__WEBPACK_IMPORTED_MODULE_1__["testReducer"],
  app: _appReducer__WEBPACK_IMPORTED_MODULE_2__["appReducer"],
  provider: _providerReducer__WEBPACK_IMPORTED_MODULE_3__["providerReducer"],
  user: _userReducer__WEBPACK_IMPORTED_MODULE_4__["userReducer"],
  admin: _adminReducer__WEBPACK_IMPORTED_MODULE_5__["adminReducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/redux/reducers/testReducer.ts":
/*!*******************************************!*\
  !*** ./src/redux/reducers/testReducer.ts ***!
  \*******************************************/
/*! exports provided: testReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testReducer", function() { return testReducer; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/redux/actions/types.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  posts: [],
  fetchedPosts: []
};
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["TEST_CREATE_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: state.posts.concat(action.payload)
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["TEST_FETCH_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        fetchedPosts: action.payload
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/reducers/userReducer.ts":
/*!*******************************************!*\
  !*** ./src/redux/reducers/userReducer.ts ***!
  \*******************************************/
/*! exports provided: userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/redux/actions/types.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  posts: []
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SELECT_STATE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SELECT_CITY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SELECT_LIST_SORT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SELECT_LIST_FILTER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SELECT_CATEGORY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: action.payload
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/sagas/sagas.ts":
/*!**********************************!*\
  !*** ./src/redux/sagas/sagas.ts ***!
  \**********************************/
/*! exports provided: rootSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootSaga", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _testSagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testSagas */ "./src/redux/sagas/testSagas.ts");

 // import { userSagaWatcher } from './userSagas';

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_testSagas__WEBPACK_IMPORTED_MODULE_1__["sagaWatcher"])() // userSagaWatcher()
  ]);
}

/***/ }),

/***/ "./src/redux/sagas/testSagas.ts":
/*!**************************************!*\
  !*** ./src/redux/sagas/testSagas.ts ***!
  \**************************************/
/*! exports provided: sagaWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaWatcher", function() { return sagaWatcher; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/types */ "./src/redux/actions/types.ts");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/actions */ "./src/redux/actions/actions.ts");




function* sagaWatcher() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions_types__WEBPACK_IMPORTED_MODULE_2__["TEST_REQUEST_POSTS"], sagaWorker);
}

function* sagaWorker() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_3__["showLoader"])());
    const payload = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(fetchPosts);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_types__WEBPACK_IMPORTED_MODULE_2__["TEST_FETCH_POST"],
      payload
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_3__["hideLoader"])());
  } catch (e) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_3__["showAlert"])('Something going wrong'));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_3__["hideLoader"])());
  }
}

async function fetchPosts() {
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()('https://jsonplaceholder.typicode.com/posts');
  return await response.json();
}

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/rootReducer */ "./src/redux/reducers/rootReducer.ts");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sagas_sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sagas/sagas */ "./src/redux/sagas/sagas.ts");


 // import { forbiddenWordsMiddlwware } from './middleware';



const preloadedState = {};
const saga = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__["default"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a, // forbiddenWordsMiddlwware,
saga));
saga.run(_sagas_sagas__WEBPACK_IMPORTED_MODULE_4__["rootSaga"]);
store.subscribe(() => {
  console.log('updated state: ', store.getState());
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/pages/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dev-2/WebstormProjects/vibe/src/pages/index.jsx */"./src/pages/index.jsx");


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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX3NlcnZpY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haW4vaG9yaXpvbnRhbC9tb2RlbC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL2Nyb3duLXBpbmsucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvZmF2b3JpdGUtcGluay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9wbGFuZS1waW5rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3N0YXItcGluay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL0NhdGVnb3JpZXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9Fc2NvcnRDb250ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvRXNjb3J0R3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL0VzY29ydExpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9Mb2NhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL05ld1Bvc3RzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvU2VhcmNoLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvY2F0ZWdvcmllcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvZXNjb3J0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9sb2NhdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2Uvc2VhcmNoLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsLXdpbmRvdy9WZXJpZmllZFdpbmRvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWxzLWZpbHRlci9Nb2RlbHNGaWx0ZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGVscy1maWx0ZXIvZm9ybS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2FkbWluUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXBwUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcHJvdmlkZXJSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9yb290UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvdGVzdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3VzZXJSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zYWdhcy9zYWdhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc2FnYXMvdGVzdFNhZ2FzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zdG9yZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3VybCIsIl91dGlscyIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsImlzTG9jYWwiLCJocmVmIiwidXJsIiwicGFyc2UiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsInRhcmdldCIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJMaW5rIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInAiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJlIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicmVzb2x2ZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJ0eXBlIiwicHJvY2VzcyIsImNsb25lRWxlbWVudCIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsInZhbHVlIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsImV2ZW50Iiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiRXJyb3IiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsIl9sZW4iLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJzbGljZSIsIm1hcCIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInN1YnN0ciIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwicXVlcnkiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJmZXRjaCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiY29kZSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsInNkYyIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwibWV0aG9kIiwiX2FzIiwicmVqZWN0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiVEVTVF9ST1VURSIsInRlc3QiLCJyZSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfIiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwibm9ybWFsaXplZFJvdXRlIiwiZXNjYXBlZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsIiQxIiwiaXNDYXRjaEFsbCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfYSIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXQiLCJTUCIsIm1lYXN1cmUiLCJjdXJyZW50VXNlclN1YmplY3QiLCJDb29raWVzIiwiZ2V0SlNPTiIsImF1dGhlbnRpY2F0aW9uU2VydmljZSIsImxvZ2luIiwibG9nb3V0IiwicmVnaXN0cmF0aW9uQWRtaW4iLCJyZWdpc3RyYXRpb25DbGllbnQiLCJyZWdpc3RyYXRpb25Qcm92aWRlciIsInJlZ2lzdHJhdGlvbkFnZW5jeSIsImN1cnJlbnRVc2VyIiwiY3VycmVudFVzZXJWYWx1ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyZW1vdmUiLCJyZXNwb25zZSIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvbWlzZSIsImV4cGlyZXMiLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJzdG9yZSIsImRpc3BhdGNoIiwic2hvd1N1Y2Nlc3MiLCJzZXRUaW1lb3V0IiwicGhvbmUiLCJhZ2VuY3lfbmFtZSIsIkNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwibmV3UG9zdHMiLCJmaWx0ZXJQb3N0cyIsImZpbHRlckNhdGVnb3J5Iiwic2V0RmlsdGVyQ2F0ZWdvcnkiLCJ1c2VTdGF0ZSIsImNoYW5nZUNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJpZCIsInMiLCJjYXRlZ29yaWVzX2Jsb2NrIiwiY2F0ZWdvcmllc190aXRsZSIsImNhdGVnb3JpZXNfY29udGVudCIsImNhdGVnb3JpZXNfY29udHJvbCIsImMiLCJpIiwidG9Mb3dlckNhc2UiLCJjYXRlZ29yaWVzX3N1YnRpdGxlIiwiY2F0ZWdvcmllc19jYXJvdXNlbCIsIkVzY29ydENvbnRlbnQiLCJwb3N0cyIsInBhZ2VzTnVtYmVyIiwic2VsZWN0UG9zdHNQYWdlIiwiYXZhaWxhYmlsaXR5IiwiYXZhaWxhYmxlX3RvIiwiZXRobmljaXR5IiwiZXllcyIsImhhaXIiLCJhZmZpbGlhdGlvbiIsImFkZFRvRmF2b3JpdGVzIiwic29ydFBvc3RzIiwidmlzaWJsZUNvbXBvbmVudCIsInNldFZpc2libGVDb21wb25lbnQiLCJzaG93RmlsdGVyIiwic2V0U2hvd0ZpbHRlciIsInVzZUVmZmVjdCIsIiQiLCJoaWRlIiwic2xpZGVGaWx0ZXIiLCJzbGlkZVRvZ2dsZSIsImNoYW5nZVZpc2libGVDb21wb25lbnQiLCJwZXJzaXN0IiwiZmFkZU91dCIsImF0dHIiLCJmYWRlSW4iLCJlc2NvcnRfY29udGVudF9ibG9jayIsIm1pbkhlaWdodCIsImVzY29ydF9jb250ZW50X3RpdGxlIiwiZmlsdGVyX3NvcnRfY29udHJvbCIsImZpbHRlcl9idG5fd3JhcCIsImZpbHRlcl9idG5fZ3JvdXAiLCJmaWx0ZXJfYnRuIiwic29ydGluZ19idG4iLCJncmlkX2J0biIsImxpc3RfYnRuIiwiZmlsdGVyX2l0ZW1zX2Jsb2NrIiwiRXNjb3J0R3JpZCIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwYWdlcyIsInNldFBhZ2VzIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwicG9zdCIsInZlcnRpY2FsX3NsaWRlIiwidmVydGljYWxfc2xpZGVfaW1hZ2UiLCJwaG90b19ob3Jpem9udGFsIiwibW9kZWxfbmFtZSIsIm1vZGVsX3Bob3RvX2dyaWQiLCJ2ZXJ0aWNhbF9zbGlkZV9tb2RlbF9pbmZvIiwibmV0d29ya19zdGF0dXMiLCJ0ZXh0VHJhbnNmb3JtIiwic3VtbWFyeSIsImNhcmRfY29udHJvbCIsImZhdiIsImNyb3duIiwic3RhciIsInBsYW5lIiwidmVyaWZpY2F0aW9uIiwidmVyaWZpZWQiLCJ2aWV3X3Byb2ZpbGUiLCJFc2NvcnRMaXN0Iiwic2V0dGluZ3MiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcnJvd3MiLCJkb3RzIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiZHJhZ2dhYmxlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJpbml0aWFsU2xpZGUiLCJlc2NvcnRfbGlzdCIsInNsaWRlIiwibW9kZWxfcGhvdG8iLCJwaG90b192ZXJ0aWNhbCIsIm1vZGVsX2luZm8iLCJtb2RlbF9pbmZvX3RpdGxlIiwic2lnbnNfZ3JvdXAiLCJzaWduIiwiTG9jYXRpb24iLCJzdGF0ZXMiLCJnZXRDaXRpZXMiLCJjdXJyZW50TG9jYXRpb24iLCJzZXRDdXJyZW50TG9jYXRpb24iLCJjaGFuZ2VMb2NhdGlvbiIsInN0YXRlSWQiLCJsb2NhdGlvbl93cmFwcGVyIiwibG9jYXRvbl9ibG9ja190aXRsZSIsImxvY2F0aW9uX2Jsb2NrX3NlbGVjdCIsImxvY2F0aW9uX2Jsb2NrX2xpc3QiLCJTaW1wbGVTbGlkZXIiLCJmYWRlIiwiU2VhcmNoIiwic2VhcmNoX2Jsb2NrIiwic2VhcmNoX2Jsb2NrX2NvbnRlbnQiLCJzZWFyY2hfaW5wdXRfbGFiZWwiLCJzZWFyY2hfaW5wdXQiLCJhZGRfcG9zdF9idG4iLCJWZXJpZmllZFdpbmRvdyIsImJ1dHRvbkxhYmVsIiwiY2xhc3NOYW1lIiwibW9kYWwiLCJzZXRNb2RhbCIsInRvZ2dsZSIsImZvbnRGYW1pbHkiLCJNb2RhbCIsImlzT3BlbiIsImF1dG9Gb2N1cyIsImNlbnRlcmVkIiwic2l6ZSIsImZ1bmMiLCJyb2xlIiwibGFiZWxsZWRCeSIsImtleWJvYXJkIiwiYmFja2Ryb3AiLCJvbmVPZiIsInNjcm9sbGFibGUiLCJvbkVudGVyIiwib25FeGl0Iiwib25PcGVuZWQiLCJvbkNsb3NlZCIsIndyYXBDbGFzc05hbWUiLCJtb2RhbENsYXNzTmFtZSIsImJhY2tkcm9wQ2xhc3NOYW1lIiwiY29udGVudENsYXNzTmFtZSIsImNzc01vZHVsZSIsInpJbmRleCIsIm51bWJlciIsInVubW91bnRPbkNsb3NlIiwicmV0dXJuRm9jdXNBZnRlckNsb3NlIiwiTW9kZWxzRmlsdGVyIiwic2V4Iiwic2V0U2V4IiwiYWdlRnJvbSIsInNldEFnZUZyb20iLCJhZ2VUbyIsInNldEFnZVRvIiwic3RhdGVFdGhuaWNpdHkiLCJzZXRFdGhuaWNpdHkiLCJzdGF0ZUhhaXIiLCJzZXRIYWlyIiwic3RhdGVFeWUiLCJzZXRFeWUiLCJzdGF0ZUFmZmlsaWF0aW9uIiwic2V0QWZmaWxpYXRpb24iLCJzdGF0ZUF2YWlsYWJsZVRvIiwic2V0QXZhaWxhYmxlVG8iLCJzdGF0ZUF2YWlsYWJpbGl0eSIsInNldEF2YWlsYWJpbGl0eSIsImFwcGx5RmlsdGVyIiwiZmlsdGVySXRlbXMiLCJpdGVtIiwidG9TdHJpbmciLCJmaWx0ZXJfZm9ybSIsInNleF9ibG9jayIsImxhYmVsIiwiY2hlY2ttYXJrIiwiYWdlX2Jsb2NrIiwiZXRobmljaXR5X2Jsb2NrIiwiaGFpcl9ibG9jayIsImgiLCJleWVfYmxvY2siLCJhZmZpbGlhdGlvbl9ibG9jayIsImEiLCJhdmFpbGFibGVUb19ibG9jayIsImNoZWNrZWQiLCJjaGVja3NpZ24iLCJhdmFpbGFiaWxpdHlfYmxvY2siLCJidG5fc3VibWl0IiwiSG9tZSIsImdldEFsbFBvc3RzIiwiZ2V0TG9jYXRpb25zSW5mbyIsImdldE5ld1Bvc3RzIiwiZ2V0QXBwSW5mbyIsIm1hcFN0YXRlVG9Qcm9wcyIsImFwcCIsIm1hcERpc3BhdGNoVG9Qb3BzIiwiY29ubmVjdCIsImNyZWF0ZVBvc3QiLCJURVNUX0NSRUFURV9QT1NUIiwicGF5bG9hZCIsInNob3dMb2FkZXIiLCJTSE9XX0xPQURFUiIsImhpZGVMb2FkZXIiLCJISURFX0xPQURFUiIsInNob3dBbGVydCIsInRleHQiLCJTSE9XX0FMRVJUIiwiaGlkZUFsZXJ0IiwiSElERV9BTEVSVCIsImZldGNoUG9zdHMiLCJURVNUX1JFUVVFU1RfUE9TVFMiLCJHRVRfUEFHRVNfTlVNQkVSIiwibGFzdF9wYWdlIiwiR0VUX0FMTF9QT1NUUyIsIkdFVF9ORVdfUE9TVFMiLCJHRVRfTE9DQUlUT05TX0lORk8iLCJsb2ciLCJHRVRfQ0lUSUVTIiwiY3JlYXRlU3VwcG9ydFRhc2siLCJ0YXNrIiwidXNlciIsInRva2VuX3R5cGUiLCJ0b2tlbiIsIkNSRUFURV9TVVBQT1JUX1RBU0siLCJnZXRBbGxVc2Vyc1Rhc2tzIiwiR0VUX0FMTF9VU0VSX1RBU0tTIiwiZ2V0UG9zdENvbW1lbnRzIiwicG9zdElkIiwiR0VUX1BPU1RfQ09NTUVOVFMiLCJjcmVhdGVQb3N0Q29tbWVudCIsImNvbW1lbnQiLCJDUkVBVEVfUE9TVF9DT01NRU5UIiwiZmlsdGVySXRlbXNPYmplY3QiLCJGSUxURVJfUE9TVFMiLCJyZXBvcnRQb3N0IiwiaXNfZmF2b3JpdGUiLCJhZGRUb0Zhdm9yaXRlc0J1c2luZXNzIiwiZ2V0RmF2b3JpdGVzQnVzaW5lc3MiLCJHRVRfRkFWT1JJVEVTIiwiZ2V0RmF2b3JpdGVzVXNlciIsImdldENvbXBsYWlucyIsInVzZXJJZCIsIkdFVF9DT01QTEFJTlMiLCJzb3J0VHlwZSIsIlNPUlRfUE9TVFMiLCJTSE9XX1NVQ0NFU1MiLCJURVNUX0ZFVENIX1BPU1QiLCJHRVRfQVBQX0lORk8iLCJSRVBPUlRfUE9TVCIsIkFERF9QT1NUIiwiUkVNT1ZFX1BPU1QiLCJVUERBVEVfUE9TVCIsIlNFTEVDVF9TVEFURSIsIlNFTEVDVF9DSVRZIiwiU0VMRUNUX0xJU1RfU09SVCIsIlNFTEVDVF9MSVNUX0ZJTFRFUiIsIlNFTEVDVF9DQVRFR09SWSIsIkdFVF9BTExfU1VQUE9SVF9UQVNLUyIsIkVESVRfU1VQUE9SVF9UQVNLUyIsIkRFTEVURV9TVVBQT1JUX1RBU0siLCJpbml0aWFsU3RhdGUiLCJ0YXNrcyIsImFkbWluUmVkdWNlciIsImFjdGlvbiIsInBvc3RDb21tZW50cyIsImxvYWRpbmciLCJhbGVydCIsImNpdGllcyIsInN1cHBvcnRUYXNrcyIsImZhdm9yaXRlcyIsImNvbXBsYWlucyIsImFwcFJlZHVjZXIiLCJzb3J0IiwiYiIsImRhdGVBIiwiRGF0ZSIsImNyZWF0ZWRfYXQiLCJkYXRlQiIsImdldFRpbWUiLCJwcm92aWRlclBvc3RzIiwicHJvdmlkZXJSZWR1Y2VyIiwiY29uY2F0Iiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ0ZXN0UG9zdHMiLCJ0ZXN0UmVkdWNlciIsInByb3ZpZGVyIiwidXNlclJlZHVjZXIiLCJhZG1pbiIsImZldGNoZWRQb3N0cyIsInJvb3RTYWdhIiwic2FnYVdhdGNoZXIiLCJ0YWtlRXZlcnkiLCJzYWdhV29ya2VyIiwicHV0IiwiY2FsbCIsInByZWxvYWRlZFN0YXRlIiwic2FnYSIsImNyZWF0ZVNhZ2FzTWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJydW4iLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkEsK0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHtzaG93U3VjY2Vzc30gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvYWN0aW9uc1wiO1xuXG5sZXQgY3VycmVudFVzZXJTdWJqZWN0ID0gQ29va2llcy5nZXRKU09OKFwiY3VycmVudFVzZXJcIilcbiAgICA/IENvb2tpZXMuZ2V0SlNPTihcImN1cnJlbnRVc2VyXCIpXG4gICAgOiB7fTtcblxuY29uc3QgdGFyZ2V0ID0gYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGlgO1xuXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRpb25TZXJ2aWNlID0ge1xuICAgIGxvZ2luLFxuICAgIGxvZ291dCxcbiAgICByZWdpc3RyYXRpb25BZG1pbixcbiAgICByZWdpc3RyYXRpb25DbGllbnQsXG4gICAgcmVnaXN0cmF0aW9uUHJvdmlkZXIsXG4gICAgcmVnaXN0cmF0aW9uQWdlbmN5LFxuICAgIGN1cnJlbnRVc2VyOiBjdXJyZW50VXNlclN1YmplY3QsXG4gICAgZ2V0IGN1cnJlbnRVc2VyVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50VXNlclN1YmplY3Q7XG4gICAgfSxcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIENvb2tpZXMucmVtb3ZlKFwiY3VycmVudFVzZXJcIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2xvZ2luYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7ZW1haWwsIHBhc3N3b3JkfSksXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIENvb2tpZXMuc2V0KFwiY3VycmVudFVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtleHBpcmVzOiAxfSk7XG4gICAgICAgICAgICBjdXJyZW50VXNlclN1YmplY3QgPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLnRoZW4oKCkgPT4gUm91dGVyLnB1c2goJy8nKSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0cmF0aW9uQ2xpZW50KFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBwYXNzd29yZDogc3RyaW5nLFxuICAgIGVtYWlsOiBzdHJpbmcsXG4gICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBzdHJpbmdcbik6IFByb21pc2U8YW55PiB7XG4gICAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2NsaWVudC9yZWdpc3RlcmAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb24sXG4gICAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goc2hvd1N1Y2Nlc3MoZGF0YS5tZXNzYWdlKSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpLCAzMDAwKVxuICAgICAgICB9KS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWdpc3RyYXRpb25BZG1pbihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZyxcbiAgICBlbWFpbDogc3RyaW5nLFxuICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogc3RyaW5nXG4pOiBQcm9taXNlPGFueT4ge1xuICAgIENvb2tpZXMucmVtb3ZlKFwiY3VycmVudFVzZXJcIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2FkbWluL3JlZ2lzdGVyYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzaG93U3VjY2VzcyhkYXRhLm1lc3NhZ2UpKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCksIDMwMDApXG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvblByb3ZpZGVyKFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBwYXNzd29yZDogc3RyaW5nLFxuICAgIGVtYWlsOiBzdHJpbmcsXG4gICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBzdHJpbmcsXG4gICAgcGhvbmU6IHN0cmluZyB8IG51bWJlclxuKTogUHJvbWlzZTxhbnk+IHtcbiAgICBDb29raWVzLnJlbW92ZShcImN1cnJlbnRVc2VyXCIpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9pbmRpdmlkdWFsL3JlZ2lzdGVyYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgICAgIHBob25lXG4gICAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goc2hvd1N1Y2Nlc3MoZGF0YS5tZXNzYWdlKSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpLCAzMDAwKVxuICAgICAgICB9KS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWdpc3RyYXRpb25BZ2VuY3koXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHBhc3N3b3JkOiBzdHJpbmcsXG4gICAgZW1haWw6IHN0cmluZyxcbiAgICBwYXNzd29yZF9jb25maXJtYXRpb246IHN0cmluZyxcbiAgICBwaG9uZTogc3RyaW5nIHwgbnVtYmVyLFxuICAgIGFnZW5jeV9uYW1lOiBzdHJpbmdcbik6IFByb21pc2U8YW55PiB7XG4gICAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RhcmdldH0vYWdlbmN5L3JlZ2lzdGVyYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgICAgIHBob25lLFxuICAgICAgICAgICAgYWdlbmN5X25hbWVcbiAgICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzaG93U3VjY2VzcyhkYXRhLm1lc3NhZ2UpKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCksIDMwMDApXG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIENvb2tpZXMucmVtb3ZlKFwiY3VycmVudFVzZXJcIik7XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKGAke3RhcmdldH0vbG9nb3V0YCwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4gUm91dGVyLnB1c2goJy9sb2dpbicpKVxuICAgICAgICAudGhlbigoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbW9kZWwtMS1jM2ZhNDE4ZWViMTg4YTMxMGE4YWJiODI0OGVlZTcyZi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFUQ0FNQUFBQ25VdDJIQUFBQUFYTlNSMElCMmNrc2Z3QUFBRVZRVEZSRkFBQUE1M2l2NUhleDVIZXg1SGl5NUhleDVIV3Y1SGV4NUhleDMzQ3Y1SGV4NDNleDVIYXk1SGl3NDNldzVuYXo1SGl4NUhpeDVIZXc1SGV4NVhheDVIZXk0M2l2czFEdHJRQUFBQmQwVWs1VEFDRFA3MkRmTUpEL0VQQ3djT0N2VU1DZ245Qi92MEQ2K3I3UUFBQUFwVWxFUVZSNG5IMlE2UkxESUFpRU1SNWROZkZvanZkLzFJS21qZjdwenVqZ0o4Z2lrVWd0MmhBWmJSMDllZ0h3RklBNHdCVUlSTnNQR3BzOCtRZ3V6eWdjcGlWTHpTcXBWUjZwclVoTERTZFZqamdzRFc3a0l0NUVPNUFkZDVQcnlCYThwUEs1aWdWbGVFbXJ5SURQMnZMR0Y2WDN4eVRUb0E4VDlOMXFIVm05NThranpOOHBBL2JTSmRQK2tUclNLWDVnejNTb0cyN2ptN1l6Ti92cy8zek44Q0w2QUlwRUNOZW9vQkgxQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQllBQUFBVENBTUFBQUNqcHcyNkFBQUFBWE5TUjBJQjJja3Nmd0FBQUR4UVRGUkZBQUFBMzNDdjVIZXg1SGV4NUhleDVIZXg1WGF4NUhleTVIZXg1SFd2NUhleDVIaXk1SGl4NDNleDVIZXg1bmF6NDNpdjVIZXg0M2l4NUhpd2ZFTG4yQUFBQUJSMFVrNVRBQkNQMy8vUGY3L3ZNTkJnb0xEd1VFQ1FnT0NXRThxc0FBQUFlRWxFUVZSNG5IV1FVUTZFSUF3RjM5c3RXaFNSMWZ2ZlZWRFVOZFQ1bWt4b0NRRGc1eXV1SXpMc2V1MFA5U29GOVplNnJCamtRRW10Nm9CUlRrSzRkTVFrQmhPaWxSVldGYkZQeDdmZHM1VVRFTnI2Szg5cytvS2QrWEh0bWxEaDM4QkMzS1E2RUQwZWNQK3hnVURiMjFyNmF0UzhQOTIrQWZNdUJpc2t5UGtDQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQklBQUFBVENBTUFBQUNxVEszQUFBQUFBWE5TUjBJQjJja3Nmd0FBQUV0UVRGUkZBQUFBNUhpdzVYYXg0M2l4NUhleDVIZXc1SGV4NUhleTMzQ3Y1SGV4NUhleDUzaXY0M1d5NUhXdjVIZXg1SGF5NDNleDVuYXo1SGl5NUhleDVIaXg1SGl4NUhleDQzaXY0M2V3YWFBSytRQUFBQmwwVWs1VEFPQi9nUCtmMEw4UThNOGdQekRmY0xCUVlKQ2d3TzlBcitYbktZNEFBQUNOU1VSQlZIaWNaWS9oRnNJZ0NFYlZJZW1XNVp5YnZmK1RKakRLRm4rRWV6aDhWMk9kdWRZRS9vOGgzTUlGaFFpenNPWGVpOXNVWWFoSEl2WWNVVjRsNGF5WXkzbDJrN211MzRDZHlKRitOUUFRam1WQW5WaFRWWVYxT3BxTXlRTnIvWFFmQXNMc25IOFJLZ0NWdjRHYzdFVkxMaGMybzc3S0VsMURWSzJteVMzSi9yYXJzdjFZcUhjcS9Md0JZSVFGUVAzSTczWUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFUQ0FNQUFBQ25VdDJIQUFBQUFYTlNSMElCMmNrc2Z3QUFBRDlRVEZSRkFBQUE0M2l2NUhleDVIZXg1SGl5NUhleDMzQ3Y1SGV4NDNpeDVIZXg0M2V4NUhleDVIZXk0M1d5NUhpeDUzaXY1SGV4NUhheTVIaXg1SGl3NDNleEpIY3F5QUFBQUJWMFVrNVRBRURRejJEL0VOK0E3MitQdnorZ0lQQnd3T0N3U25mWU9BQUFBSGhKUkVGVWVKeGwwRnNXZ0NBSUJGQWwwYkpTZSt4L3JhR2xKTTduUFFwelVLcEdhelVHcHRFTW9wRm1IYUtUT0NObEZnK1hqSXZsdFg3ZDhNdTIrcDBvNEpDZ0xFZ0RHaUlWeXVCZTRWc1dFMXVLZGYvQmVQVE4zM0QvWDYzUThHUThHMTU1cXpHNUJSK0ZIcFFMYS9wU0xZWjJkSDNuU2c4K1NnVG9BL0FHdXdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcyBmcm9tICcuL2NhdGVnb3JpZXMubW9kdWxlLnNjc3MnXG5pbXBvcnQgTmV3UG9zdHMgZnJvbSAnLi9OZXdQb3N0cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcmllcyh7IGNhdGVnb3JpZXMsIG5ld1Bvc3RzLCBmaWx0ZXJQb3N0cyB9KSB7XG4gIGNvbnN0IFtmaWx0ZXJDYXRlZ29yeSwgc2V0RmlsdGVyQ2F0ZWdvcnldID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGNoYW5nZUNhdGVnb3J5ID0gKGNhdGVnb3J5LCBpZCkgPT4ge1xuICAgIHNldEZpbHRlckNhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICBmaWx0ZXJQb3N0cyh7J2NhdGVnb3J5X2lkJzogaWR9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17cy5jYXRlZ29yaWVzX2Jsb2NrfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3MuY2F0ZWdvcmllc190aXRsZX1gfT5cbiAgICAgICAgPHA+U0VMRUNUIEEgQ0FURUdPUlk8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNhdGVnb3JpZXNfY29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzLmNhdGVnb3JpZXNfY29udHJvbH1gfT5cbiAgICAgICAgICB7KGNhdGVnb3JpZXMgJiYgY2F0ZWdvcmllcy5sZW5ndGgpXG4gICAgICAgICAgICA/IGNhdGVnb3JpZXMubWFwKChjLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxzcGFuIGtleT17aX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IGNoYW5nZUNhdGVnb3J5KGMubmFtZS50b0xvd2VyQ2FzZSgpLCBjLmlkKX0gY2xhc3NOYW1lPXtgJHtzLmNhdGVnb3J5fSAke2ZpbHRlckNhdGVnb3J5ID09PSBjLm5hbWUudG9Mb3dlckNhc2UoKSA/ICdhY3RpdmVfYnRuX2JsdWUnIDogJyd9YH0+e2MubmFtZS50b1VwcGVyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgICA6IDw+PGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWJvcmRlciB0ZXh0LWluZm9cIiByb2xlPVwic3RhdHVzXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTIgdGV4dC1pbmZvXCI+Tm8gY2F0ZWdvcmllcyBmcm9tIHNlcnZlci4uLjwvc3Bhbj5cbiAgICAgICAgICAgIDwvPn1cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5jYXRlZ29yaWVzX3N1YnRpdGxlfWB9PlxuICAgICAgICAgIDxwPk5FVyBPTiBUSEUgU0lURTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNhdGVnb3JpZXNfY2Fyb3VzZWx9PlxuICAgICAgICAgIDxOZXdQb3N0cyBuZXdQb3N0cz17bmV3UG9zdHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzIGZyb20gXCIuL2VzY29ydC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IE1vZGVsc0ZpbHRlciBmcm9tIFwiLi4vbW9kZWxzLWZpbHRlci9Nb2RlbHNGaWx0ZXJcIjtcbmltcG9ydCBFc2NvcnRMaXN0IGZyb20gXCIuL0VzY29ydExpc3RcIjtcbmltcG9ydCBFc2NvcnRHcmlkIGZyb20gXCIuL0VzY29ydEdyaWRcIjtcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXNjb3J0Q29udGVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VzTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UG9zdHNQYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmlsaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlX3RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXRobmljaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhaXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZmZpbGlhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclBvc3RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9GYXZvcml0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0UG9zdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkge1xuICAgIGNvbnN0IFt2aXNpYmxlQ29tcG9uZW50LCBzZXRWaXNpYmxlQ29tcG9uZW50XSA9IHVzZVN0YXRlKFwibGlzdFwiKTtcbiAgICBjb25zdCBbc2hvd0ZpbHRlciwgc2V0U2hvd0ZpbHRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAkKFwiLmZpbHRlcl9pdGVtc19ibG9ja1wiKS5oaWRlKCgpID0+IHtcbiAgICAgICAgICAgIHNldFNob3dGaWx0ZXIoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBzbGlkZUZpbHRlciA9ICgpID0+IHtcbiAgICAgICAgJChcIi5maWx0ZXJfaXRlbXNfYmxvY2tcIikuc2xpZGVUb2dnbGUoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd0ZpbHRlcighc2hvd0ZpbHRlcik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGFuZ2VWaXNpYmxlQ29tcG9uZW50ID0gKGUpID0+IHtcbiAgICAgICAgZS5wZXJzaXN0KCk7XG4gICAgICAgICQoXCIubW9kZWxzLXZpZXctYmxvY2tcIikuZmFkZU91dCgzMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldFZpc2libGVDb21wb25lbnQoJChlLnRhcmdldCkuYXR0cihcIm5hbWVcIikpO1xuICAgICAgICAgICAgJChcIi5tb2RlbHMtdmlldy1ibG9ja1wiKS5mYWRlSW4oNzAwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17cy5lc2NvcnRfY29udGVudF9ibG9ja30gc3R5bGU9e3ttaW5IZWlnaHQ6IFwiMTAwdmhcIn19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5lc2NvcnRfY29udGVudF90aXRsZX1gfT5cbiAgICAgICAgICAgICAgICA8cD5NZWV0IG91ciBzZWxlY3Rpb24gb2Ygd29ybGR3aWRlIGVzY29ydHM8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzLmZpbHRlcl9zb3J0X2NvbnRyb2x9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZmlsdGVyX2J0bl93cmFwfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZmlsdGVyX2J0bl9ncm91cH0+XG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtzbGlkZUZpbHRlcn0gY2xhc3NOYW1lPXtgcGwtMiAke3MuZmlsdGVyX2J0bn1gfT5cbiAgICAgICAgICAgICAgRklMVEVSXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17YHBsLTIgZm9ybS1jb250cm9sIGJvcmRlci0wICR7cy5zb3J0aW5nX2J0bn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzb3J0UG9zdHMoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVmYXVsdFwiIGhpZGRlbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU09SVElOR1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXRlLy1cIj5kYXRlIGFkZGVkIGZyb20gbmV3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhdGUvK1wiPmRhdGUgYWRkZWQgZnJvbSBvbGQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmV2aWV3cy8tXCI+bnVtYmVyIG9mIGNvbW1lbnRzIGZyb20gbGVzczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZXZpZXdzLytcIj5udW1iZXIgb2YgY29tbWVudHMgZnJvbSBtb3JlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmZpbHRlcl9idG5fZ3JvdXB9PlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBuYW1lPVwiZ3JpZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JpZF9idG4gY2Fyb3VzZWxfbGF5b3V0X2NoYW5nZV9idG4gJHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZUNvbXBvbmVudCA9PT0gXCJncmlkXCIgPyBcImFjdGl2ZV9idG5fcGlua1wiIDogXCJcIlxuICAgICAgICAgICAgICAgIH0gJHtzLmdyaWRfYnRufWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGNoYW5nZVZpc2libGVDb21wb25lbnQoZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEdSSURcblx0XHRcdFx0XHRcdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGxpc3RfYnRuIGNhcm91c2VsX2xheW91dF9jaGFuZ2VfYnRuICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGVDb21wb25lbnQgPT09IFwibGlzdFwiID8gXCJhY3RpdmVfYnRuX3BpbmtcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICR7cy5saXN0X2J0bn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2VWaXNpYmxlQ29tcG9uZW50KGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMSVNUXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmlsdGVyX2l0ZW1zX2Jsb2NrICR7cy5maWx0ZXJfaXRlbXNfYmxvY2t9YH0+XG4gICAgICAgICAgICAgICAgPE1vZGVsc0ZpbHRlclxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFiaWxpdHk9e2F2YWlsYWJpbGl0eX1cbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlX3RvPXthdmFpbGFibGVfdG99XG4gICAgICAgICAgICAgICAgICAgIGV0aG5pY2l0eT17ZXRobmljaXR5fVxuICAgICAgICAgICAgICAgICAgICBhZmZpbGlhdGlvbj17YWZmaWxpYXRpb259XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclBvc3RzPXtmaWx0ZXJQb3N0c31cbiAgICAgICAgICAgICAgICAgICAgZXllcz17ZXllc31cbiAgICAgICAgICAgICAgICAgICAgaGFpcj17aGFpcn1cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVGaWx0ZXI9e3NsaWRlRmlsdGVyfS8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlbHMtdmlldy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIHt2aXNpYmxlQ29tcG9uZW50ID09PSBcImxpc3RcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgPEVzY29ydExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RzPXtwb3N0c31cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VzTnVtYmVyPXtwYWdlc051bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFBvc3RzUGFnZT17c2VsZWN0UG9zdHNQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9GYXZvcml0ZXM9e2FkZFRvRmF2b3JpdGVzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxFc2NvcnRHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0cz17cG9zdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlc051bWJlcj17cGFnZXNOdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RQb3N0c1BhZ2U9e3NlbGVjdFBvc3RzUGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvRmF2b3JpdGVzPXthZGRUb0Zhdm9yaXRlc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzIGZyb20gXCIuL2VzY29ydC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGZhdiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL2Zhdm9yaXRlLXBpbmsucG5nXCI7XG5pbXBvcnQgY3Jvd24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9jcm93bi1waW5rLnBuZ1wiO1xuaW1wb3J0IHN0YXIgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9zdGFyLXBpbmsucG5nXCI7XG5pbXBvcnQgcGxhbmUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9wbGFuZS1waW5rLnBuZ1wiO1xuaW1wb3J0IFZlcmlmaWVkV2luZG93IGZyb20gXCIuLi9tb2RhbC13aW5kb3cvVmVyaWZpZWRXaW5kb3dcIjtcblxuaW1wb3J0IG1vZGVsIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vaG9yaXpvbnRhbC9tb2RlbC0xLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFc2NvcnRHcmlkKHsgcG9zdHMsIHBhZ2VzTnVtYmVyLCBzZWxlY3RQb3N0c1BhZ2UsIGFkZFRvRmF2b3JpdGVzIH0pIHtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3BhZ2VzLCBzZXRQYWdlc10gPSB1c2VTdGF0ZShbMV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGFnZXMoWzFdKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VzTnVtYmVyOyBpKyspIHtcbiAgICAgIHBhZ2VzLnB1c2goMSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBtYXhXaWR0aDogXCIxMjYwcHhcIixcbiAgICAgICAgbWFyZ2luOiBcIjFlbSBhdXRvXCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMCAwIDVlbSAwXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwb3N0cyAmJiBwb3N0cy5sZW5ndGggPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgcC0wXCI+XG4gICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0LCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy52ZXJ0aWNhbF9zbGlkZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnZlcnRpY2FsX3NsaWRlX2ltYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QucGhvdG9faG9yaXpvbnRhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC5tb2RlbF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLm1vZGVsX3Bob3RvX2dyaWR9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnZlcnRpY2FsX3NsaWRlX21vZGVsX2luZm99PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3MubmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QubW9kZWxfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5uZXR3b3JrX3N0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3MubG9jYXRpb259YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIExvY2F0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLnN1bW1hcnl9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnN1bW1hcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY2FyZF9jb250cm9sfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmYXZ9IGFsdD1cIlwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvRmF2b3JpdGVzKHBvc3QuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y3Jvd259IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzdGFyfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGxhbmV9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLnZlcmlmaWNhdGlvbn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy52ZXJpZmllZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxWZXJpZmllZFdpbmRvdyBidXR0b25MYWJlbD17YFZFUklGSUVEYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnZpZXdfcHJvZmlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL21vZGVsUHJvZmlsZVwiLCBxdWVyeTogeyBpZDogcG9zdC5pZCB9IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biB0ZXh0LXdoaXRlXCI+VklFVyBQUk9GSUxFPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiUGFnZSBuYXZpZ2F0aW9uIGV4YW1wbGVcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2UtbGluayBiZy1kYXJrIHRleHQtd2hpdGUgYm9yZGVyLXNlY29uZGFyeVwiIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFBvc3RzUGFnZShjdXJyZW50UGFnZSAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgUHJldmlvdXNcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIHtwYWdlcy5tYXAoKHAsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2UtbGluayBiZy1kYXJrIHRleHQtd2hpdGUgYm9yZGVyLXNlY29uZGFyeVwiIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UG9zdHNQYWdlKGkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZShpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH19PntpICsgMX08L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwYWdlLWxpbmsgYmctZGFyayB0ZXh0LXdoaXRlIGJvcmRlci1zZWNvbmRhcnlcIiBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA8IHBhZ2VzTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UG9zdHNQYWdlKGN1cnJlbnRQYWdlICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICBOZXh0XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDEgdGV4dC1pbmZvIHRleHQtY2VudGVyIHB5LTVcIj5ObyBwb3N0cy4uLjwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgPC9kaXYgPlxuICApO1xufVxuXG4vLyBhYm91dDogXCJhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0XCJcbi8vIGFjY291bnRfbmFtZTogXCJhY2NvdW50X25hbWVhY2NvdW50X25hbWVhY2NvdW50X25hbWVhY2NvdW50X25hbWVcIlxuLy8gYWZmaWxpYXRpb25faWQ6IG51bGxcbi8vIGFnZTogMjJcbi8vIGF2YWlsYWJsZV90b19kYXRlOiBudWxsXG4vLyBjYXRlZ29yeV9pZDogbnVsbFxuLy8gY2l0eV9pZDogbnVsbFxuLy8gY3JlYXRlZF9hdDogXCIyMDIwLTA2LTE5VDEwOjM1OjAwLjAwMDAwMFpcIlxuLy8gZXRobmljaXR5X2lkOiBudWxsXG4vLyBleWVfaWQ6IG51bGxcbi8vIGdlbmRlcjogXCJtYW5cIlxuLy8gaGFpcl9pZDogbnVsbFxuLy8gaGVpZ2h0OiBcIjIzNVwiXG4vLyBpZDogMVxuLy8gaXNfbW9yZV9waG90b3M6IDBcbi8vIGlzX3Bob3Rvc192aXA6IDBcbi8vIGlzX3B1Ymxpc2hlZDogMFxuLy8gaXNfdmVyaWZ5OiAwXG4vLyBpc192aXA6IDBcbi8vIG1vZGVsX25hbWU6IFwiU2hsdWhhXCJcbi8vIHBob3RvOiBudWxsXG4vLyBzZWNvbmRfbmFtZTogXCJzZWNvbmRcIlxuLy8gc3RhdGVfaWQ6IG51bGxcbi8vIHN0YXR1czogXCJvdGhlclwiXG4vLyBzdW1tYXJ5OiBcInN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5XCJcbi8vIHVwZGF0ZWRfYXQ6IFwiMjAyMC0wNi0yMlQwNjozNDoxMi4wMDAwMDBaXCJcbi8vIHVzZXJfaWQ6IG51bGxcbi8vIHZpZGVvX2xpbms6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1UUWdHRndWV0QyNCZsaXN0PVJELTlSbmc4T3VNMTAmaW5kZXg9MlwiXG4vLyB2aXBfdG9fZGF0ZTogbnVsbFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbi8vIGltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCJcbmltcG9ydCBzIGZyb20gJy4vZXNjb3J0Lm1vZHVsZS5zY3NzJ1xuaW1wb3J0IGZhdiBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvZmF2b3JpdGUtcGluay5wbmcnXG5pbXBvcnQgcGxhbmUgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3BsYW5lLXBpbmsucG5nJ1xuaW1wb3J0IHN0YXIgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3N0YXItcGluay5wbmcnXG5pbXBvcnQgY3Jvd24gZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL2Nyb3duLXBpbmsucG5nJ1xuXG5pbXBvcnQgbW9kZWwgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL2hvcml6b250YWwvbW9kZWwtMS5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVzY29ydExpc3QoeyBwb3N0cywgcGFnZXNOdW1iZXIsIHNlbGVjdFBvc3RzUGFnZSwgYWRkVG9GYXZvcml0ZXMgfSkge1xuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbcGFnZXMsIHNldFBhZ2VzXSA9IHVzZVN0YXRlKFsxXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQYWdlcyhbMV0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZXNOdW1iZXI7IGkrKykge1xuICAgICAgcGFnZXMucHVzaCgxKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogMTAwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgYXJyb3dzOiB0cnVlLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGF1dG9wbGF5U3BlZWQ6IDgwMDAsXG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjUsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OSxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgaW5pdGlhbFNsaWRlOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgIG1heFdpZHRoOiAnMTI2MHB4JyxcbiAgICAgIHBhZGRpbmc6ICcxLjVlbSAwIDVlbSAwJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bydcbiAgICB9fT5cbiAgICAgIHsocG9zdHMgJiYgcG9zdHMubGVuZ3RoKSA/IDw+XG4gICAgICAgIHsvKiA8U2xpZGVyIHsuLi5zZXR0aW5nc30gPiAqL31cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7cy5lc2NvcnRfbGlzdH1gfT5cbiAgICAgICAgICB7cG9zdHMubWFwKChwb3N0LCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0gY2xhc3NOYW1lPXtzLnNsaWRlfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvbW9kZWxQcm9maWxlXCIsIHF1ZXJ5OiB7IGlkOiBwb3N0LmlkIH0gfX0+PGE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW9kZWxfcGhvdG99PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QucGhvdG9fdmVydGljYWx9IGFsdD17cG9zdC5tb2RlbF9uYW1lfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1vZGVsX2luZm99PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW9kZWxfaW5mb190aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3Bvc3QubW9kZWxfbmFtZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyB9fT57cG9zdC5zdGF0dXN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNpZ25zX2dyb3VwfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2lnbn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Zhdn0gYWx0PVwibW9kZWxcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9GYXZvcml0ZXMocG9zdC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNpZ259PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjcm93bn0gYWx0PVwibW9kZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2lnbn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3N0YXJ9IGFsdD1cIm1vZGVsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNpZ259PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwbGFuZX0gYWx0PVwibW9kZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgey8qIDwvU2xpZGVyPiAqL31cbiAgICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiUGFnZSBuYXZpZ2F0aW9uIGV4YW1wbGVcIiBjbGFzc05hbWU9XCJwdC00XCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb24ganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwYWdlLWxpbmsgYmctZGFyayB0ZXh0LXdoaXRlIGJvcmRlci1zZWNvbmRhcnlcIiBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0UG9zdHNQYWdlKGN1cnJlbnRQYWdlIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlIC0gMSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgUHJldmlvdXNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB7cGFnZXMubWFwKChwLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2UtbGluayBiZy1kYXJrIHRleHQtd2hpdGUgYm9yZGVyLXNlY29uZGFyeVwiIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0UG9zdHNQYWdlKGkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoaSArIDEpO1xuICAgICAgICAgICAgICAgICAgfX0+e2kgKyAxfTwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwYWdlLWxpbmsgYmctZGFyayB0ZXh0LXdoaXRlIGJvcmRlci1zZWNvbmRhcnlcIiBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA8IHBhZ2VzTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFBvc3RzUGFnZShjdXJyZW50UGFnZSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSArIDEpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8Lz5cbiAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cImgxIHRleHQtaW5mbyB0ZXh0LWNlbnRlciBweS01XCI+Tm8gcG9zdHMuLi48L2Rpdj59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gYWJvdXQ6IFwiYWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dFwiXG4gICAgLy8gYWNjb3VudF9uYW1lOiBcImFjY291bnRfbmFtZWFjY291bnRfbmFtZWFjY291bnRfbmFtZWFjY291bnRfbmFtZVwiXG4gICAgLy8gYWZmaWxpYXRpb25faWQ6IG51bGxcbiAgICAvLyBhZ2U6IDIyXG4gICAgLy8gYXZhaWxhYmxlX3RvX2RhdGU6IG51bGxcbiAgICAvLyBjYXRlZ29yeV9pZDogbnVsbFxuICAgIC8vIGNpdHlfaWQ6IG51bGxcbiAgICAvLyBjcmVhdGVkX2F0OiBcIjIwMjAtMDYtMTlUMTA6MzU6MDAuMDAwMDAwWlwiXG4gICAgLy8gZXRobmljaXR5X2lkOiBudWxsXG4gICAgLy8gZXllX2lkOiBudWxsXG4gICAgLy8gZ2VuZGVyOiBcIm1hblwiXG4gICAgLy8gaGFpcl9pZDogbnVsbFxuICAgIC8vIGhlaWdodDogXCIyMzVcIlxuICAgIC8vIGlkOiAxXG4gICAgLy8gaXNfbW9yZV9waG90b3M6IDBcbiAgICAvLyBpc19waG90b3NfdmlwOiAwXG4gICAgLy8gaXNfcHVibGlzaGVkOiAwXG4gICAgLy8gaXNfdmVyaWZ5OiAwXG4gICAgLy8gaXNfdmlwOiAwXG4gICAgLy8gbW9kZWxfbmFtZTogXCJTaGx1aGFcIlxuICAgIC8vIHBob3RvOiBudWxsXG4gICAgLy8gc2Vjb25kX25hbWU6IFwic2Vjb25kXCJcbiAgICAvLyBzdGF0ZV9pZDogbnVsbFxuICAgIC8vIHN0YXR1czogXCJvdGhlclwiXG4gICAgLy8gc3VtbWFyeTogXCJzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeVwiXG4gICAgLy8gdXBkYXRlZF9hdDogXCIyMDIwLTA2LTIyVDA2OjM0OjEyLjAwMDAwMFpcIlxuICAgIC8vIHVzZXJfaWQ6IG51bGxcbiAgICAvLyB2aWRlb19saW5rOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VFFnR0Z3VldEMjQmbGlzdD1SRC05Um5nOE91TTEwJmluZGV4PTJcIlxuICAgIC8vIHZpcF90b19kYXRlOiBudWxsIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBzIGZyb20gXCIuL2xvY2F0aW9uLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NhdGlvbih7IHN0YXRlcywgZ2V0Q2l0aWVzIH0pIHtcbiAgY29uc3QgW2N1cnJlbnRMb2NhdGlvbiwgc2V0Q3VycmVudExvY2F0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgY2hhbmdlTG9jYXRpb24gPSBzdGF0ZUlkID0+IHtcbiAgICBnZXRDaXRpZXMoc3RhdGVJZCk7XG4gICAgc2V0Q3VycmVudExvY2F0aW9uKHN0YXRlSWQpO1xuICAgIHN0YXRlcy5mb3JFYWNoKHN0YXRlID0+IHtcbiAgICAgIGlmICgrc3RhdGUuaWQgPT09ICtzdGF0ZUlkKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICBwYXRobmFtZTogYC9sb2NhdGlvbmAsXG4gICAgICAgICAgcXVlcnk6IHsgc3RhdGU6IHN0YXRlLm5hbWUsIGlkOiBzdGF0ZS5pZCB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3MubG9jYXRpb25fd3JhcHBlcn0+XG4gICAgICB7c3RhdGVzLmxlbmd0aCA/IDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3MubG9jYXRvbl9ibG9ja190aXRsZX1gfT5cbiAgICAgICAgICA8cD5TRUxFQ1QgQSBMT0NBVElPTiBCRUxPVzwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxvY2F0aW9uX2Jsb2NrX3NlbGVjdH0+XG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlTG9jYXRpb24oZS50YXJnZXQudmFsdWUpfSA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVmYXVsdFwiIGhpZGRlbj5Mb2NhdGlvbjwvb3B0aW9uPlxuICAgICAgICAgICAge3N0YXRlcy5tYXAoKHN0YXRlLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17c3RhdGUuaWR9PntzdGF0ZS5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5sb2NhdGlvbl9ibG9ja19saXN0fT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7c3RhdGVzLm1hcCgoc3RhdGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBjaGFuZ2VMb2NhdGlvbihzdGF0ZS5pZCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gdGV4dC13aGl0ZSBsb2NhdGlvbl9pdGVtYH0+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3VycmVudExvY2F0aW9uID09PSBzdGF0ZSA/ICdhY3RpdmVfYnRuX2JsdWUnIDogJyd9PntzdGF0ZS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz4gOiBudWxsfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzIGZyb20gXCIuL2NhdGVnb3JpZXMubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2ltcGxlU2xpZGVyKHtuZXdQb3N0c30pIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiAxMDAwMCxcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjUsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY5LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGZhZGU6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTI2MHB4J1xuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtuZXdQb3N0cyAmJiBuZXdQb3N0cy5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLnNldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTI2MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBuZXdQb3N0cy5tYXAoKHBvc3QsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2xpZGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3twYXRobmFtZTogXCIvbW9kZWxQcm9maWxlXCIsIHF1ZXJ5OiB7aWQ6IHBvc3QuaWR9fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QucGhvdG9fdmVydGljYWx9IGFsdD1cIm1vZGVsXCIgY2xhc3NOYW1lPVwidy0xMDBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0Lm1vZGVsX25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT17YHRleHQtY2VudGVyIHRleHQtaW5mbyBweS01YH0+Tm8gcG9zdHMuLi48L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgcyBmcm9tICcuL3NlYXJjaC5tb2R1bGUuc2NzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17cy5zZWFyY2hfYmxvY2t9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2VhcmNoX2Jsb2NrX2NvbnRlbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLnNlYXJjaF9pbnB1dF9sYWJlbH1gfT5TRUFSQ0g8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2VhcmNoX2lucHV0fT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5hZGRfcG9zdF9idG59YH0+XG4gICAgICAgICAgPHNwYW4+UE9TVCBBRDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhdGVnb3JpZXNfYmxvY2tcIjogXCJjYXRlZ29yaWVzX2NhdGVnb3JpZXNfYmxvY2tfXzE0QVZfXCIsXG5cdFwiY2F0ZWdvcmllc190aXRsZVwiOiBcImNhdGVnb3JpZXNfY2F0ZWdvcmllc190aXRsZV9fM0t5T1hcIixcblx0XCJjYXRlZ29yaWVzX2NvbnRlbnRcIjogXCJjYXRlZ29yaWVzX2NhdGVnb3JpZXNfY29udGVudF9fMnZQdXRcIixcblx0XCJjYXRlZ29yaWVzX2NvbnRyb2xcIjogXCJjYXRlZ29yaWVzX2NhdGVnb3JpZXNfY29udHJvbF9fMmdwY2VcIixcblx0XCJjYXRlZ29yeVwiOiBcImNhdGVnb3JpZXNfY2F0ZWdvcnlfXzNSR2p3XCIsXG5cdFwiY2F0ZWdvcmllc19zdWJ0aXRsZVwiOiBcImNhdGVnb3JpZXNfY2F0ZWdvcmllc19zdWJ0aXRsZV9fM1ltWGFcIixcblx0XCJzbGlkZVwiOiBcImNhdGVnb3JpZXNfc2xpZGVfXzJMTmp1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJlc2NvcnRfY29udGVudF90aXRsZVwiOiBcImVzY29ydF9lc2NvcnRfY29udGVudF90aXRsZV9fMmNWVzZcIixcblx0XCJmaWx0ZXJfc29ydF9jb250cm9sXCI6IFwiZXNjb3J0X2ZpbHRlcl9zb3J0X2NvbnRyb2xfXzJ5SVRpXCIsXG5cdFwiZmlsdGVyX2J0bl93cmFwXCI6IFwiZXNjb3J0X2ZpbHRlcl9idG5fd3JhcF9fMXNBQ2RcIixcblx0XCJmaWx0ZXJfYnRuX2dyb3VwXCI6IFwiZXNjb3J0X2ZpbHRlcl9idG5fZ3JvdXBfX3gtRlNNXCIsXG5cdFwic29ydGluZ19idG5cIjogXCJlc2NvcnRfc29ydGluZ19idG5fXzM4amgzXCIsXG5cdFwiZmlsdGVyX2l0ZW1zX2Jsb2NrXCI6IFwiZXNjb3J0X2ZpbHRlcl9pdGVtc19ibG9ja19fM01xYTNcIixcblx0XCJlc2NvcnRfbGlzdFwiOiBcImVzY29ydF9lc2NvcnRfbGlzdF9fMU41MFpcIixcblx0XCJzbGlkZVwiOiBcImVzY29ydF9zbGlkZV9fcW5iSWpcIixcblx0XCJtb2RlbF9waG90b1wiOiBcImVzY29ydF9tb2RlbF9waG90b19fM3R5ZURcIixcblx0XCJtb2RlbF9pbmZvXCI6IFwiZXNjb3J0X21vZGVsX2luZm9fX2lGMkFaXCIsXG5cdFwibW9kZWxfaW5mb190aXRsZVwiOiBcImVzY29ydF9tb2RlbF9pbmZvX3RpdGxlX18zTlltWFwiLFxuXHRcInNpZ25zX2dyb3VwXCI6IFwiZXNjb3J0X3NpZ25zX2dyb3VwX19kZXR3RVwiLFxuXHRcInZlcnRpY2FsX3NsaWRlXCI6IFwiZXNjb3J0X3ZlcnRpY2FsX3NsaWRlX18xenlBYVwiLFxuXHRcInZlcnRpY2FsX3NsaWRlX2ltYWdlXCI6IFwiZXNjb3J0X3ZlcnRpY2FsX3NsaWRlX2ltYWdlX18xeUZsSFwiLFxuXHRcInZlcnRpY2FsX3NsaWRlX21vZGVsX2luZm9cIjogXCJlc2NvcnRfdmVydGljYWxfc2xpZGVfbW9kZWxfaW5mb19fM2Jpb29cIixcblx0XCJuYW1lXCI6IFwiZXNjb3J0X25hbWVfXzJ2VnlXXCIsXG5cdFwibmV0d29ya19zdGF0dXNcIjogXCJlc2NvcnRfbmV0d29ya19zdGF0dXNfXzFZY0F1XCIsXG5cdFwibG9jYXRpb25cIjogXCJlc2NvcnRfbG9jYXRpb25fXzF3UzRsXCIsXG5cdFwic3VtbWFyeVwiOiBcImVzY29ydF9zdW1tYXJ5X19PZVRralwiLFxuXHRcInZlcmlmaWNhdGlvblwiOiBcImVzY29ydF92ZXJpZmljYXRpb25fXzI5ajg2XCIsXG5cdFwiY2FyZF9jb250cm9sXCI6IFwiZXNjb3J0X2NhcmRfY29udHJvbF9fMWRXU3ZcIixcblx0XCJ2ZXJpZmllZFwiOiBcImVzY29ydF92ZXJpZmllZF9fMUF0TW9cIixcblx0XCJ2aWV3X3Byb2ZpbGVcIjogXCJlc2NvcnRfdmlld19wcm9maWxlX196VkFnNlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9jYXRpb25fd3JhcHBlclwiOiBcImxvY2F0aW9uX2xvY2F0aW9uX3dyYXBwZXJfXzFhT0wwXCIsXG5cdFwibG9jYXRvbl9ibG9ja190aXRsZVwiOiBcImxvY2F0aW9uX2xvY2F0b25fYmxvY2tfdGl0bGVfX2xZRHpLXCIsXG5cdFwibG9jYXRpb25fYmxvY2tfc2VsZWN0XCI6IFwibG9jYXRpb25fbG9jYXRpb25fYmxvY2tfc2VsZWN0X19ZMWFXaVwiLFxuXHRcImxvY2F0aW9uX2Jsb2NrX2xpc3RcIjogXCJsb2NhdGlvbl9sb2NhdGlvbl9ibG9ja19saXN0X18xSWpiWVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VhcmNoX2Jsb2NrXCI6IFwic2VhcmNoX3NlYXJjaF9ibG9ja19fMjFzTVNcIixcblx0XCJzZWFyY2hfYmxvY2tfY29udGVudFwiOiBcInNlYXJjaF9zZWFyY2hfYmxvY2tfY29udGVudF9fMVp2TGxcIixcblx0XCJzZWFyY2hfaW5wdXRfbGFiZWxcIjogXCJzZWFyY2hfc2VhcmNoX2lucHV0X2xhYmVsX18xdUpwcVwiLFxuXHRcInNlYXJjaF9pbnB1dFwiOiBcInNlYXJjaF9zZWFyY2hfaW5wdXRfXzJYTWxzXCIsXG5cdFwiYWRkX3Bvc3RfYnRuXCI6IFwic2VhcmNoX2FkZF9wb3N0X2J0bl9fM2NFOGJcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBGb3JtIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmNvbnN0IFZlcmlmaWVkV2luZG93ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBidXR0b25MYWJlbCxcbiAgICBjbGFzc05hbWVcbiAgfSA9IHByb3BzO1xuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRNb2RhbCghbW9kYWwpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxGb3JtIGlubGluZSBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJcIiBjbGFzc05hbWU9e2BwLTAgdGV4dC13aGl0ZWB9IG9uQ2xpY2s9e3RvZ2dsZX0+e2J1dHRvbkxhYmVsfTwvQnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuXG4gICAgICA8TW9kYWwgaXNPcGVuPXttb2RhbH0gdG9nZ2xlPXt0b2dnbGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dG9nZ2xlfSBzdHlsZT17eyBmb250RmFtaWx5OiAnQXVkaW93aWRlLCBjdXJzaXZlJyB9fSBjbGFzc05hbWU9XCJiZy1kYXJrIHRleHQtaW5mbyBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnlcIiA+VmliZSBDaXR5IFZlcmlmaWVkPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgPE1vZGFsQm9keSBjbGFzc05hbWU9XCJiZy1kYXJrIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICA8cD5JbiBvcmRlciBmb3IgYW4gRXJvcyBhZHZlcnRpc2VyIHRvIGJlIGVsaWdpYmxlIHRvIGhhdmUgdGhlIFZlcmlmaWVkIHNlYWwgYWZmaXhlZCB0byB0aGVpciBhZHZlcnRpc2VtZW50IG9yIHRvIGJlIHBsYWNlZCBpbiBFcm9zJyBWZXJpZmllZCBjYXRlZ29yeSwgdGhlIEVyb3MgR3VpZGUgbXVzdCBoYXZlIHJlY2VpdmVkIHRhbmdpYmxlIGluZm9ybWF0aW9uIHRoYXQgdGhlIGluZGl2aWR1YWwgYXBwZWFyaW5nIGluIHRoZSBwaG90b2dyYXBocyBvbiBhbnkgc3BlY2lmaWMgYWR2ZXJ0aXNlbWVudCBpbnRlbmRlZCB0byBiZSBhZHZlcnRpc2VkIG9uIHRoZSBFcm9zIEd1aWRlIGlzIGFuIGluZGl2aWR1YWwgcHJvdmlkaW5nIGFkdWx0IGNvbXBhbmlvbnNoaXAuIFN1Y2ggcHJvb2YgY291bGQgaW5jbHVkZSBjb21wYXJpbmcgdGhlIHBpY3R1cmVzIHN1Ym1pdHRlZCB0byB0aGUgRXJvcyBHdWlkZSBvbiBhbiBhZHZlcnRpc2VtZW50IHdpdGggZWl0aGVyIGdvdmVybm1lbnQgaXNzdWVkIElE4oCZcyBvdGhlciBwaG90b2dyYXBoaWMgZXZpZGVuY2UuPC9wPlxuICAgICAgICAgIDxwPkhvd2V2ZXIsIHBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBFcm9zIEd1aWRlIGNhbm5vdCBhbmQgZG9lcyBub3QgbWFrZSBhbnkgZ3VhcmFudGVlcyBvciB3YXJyYW50aWVzIHRoYXQgZWl0aGVyIChhKSB0aGUgYWR2ZXJ0aXNlciBpbiB0aGUgcGljdHVyZXMgb24gYW55IHBhcnRpY3VsYXIgYWQgd2lsbCBiZSB0aGUgc2FtZSBpbmRpdmlkdWFsIHdobyBzaG93cyB1cCBmb3IgYW55IGRhdGUgYXJyYW5nZWQgYmV0d2VlbiBhbiBhZHZlcnRpc2VyIGFuZCB5b3Vyc2VsZiwgKGIpIHRoYXQgYW55IG9mIHRoZSB0ZXh0LCBpbmNsdWRpbmcgdGhlIG5hbWUgb2YgdGhlIGFkdmVydGlzZXIsIG9yIHN0YXRzIHRoYXQgYXBwZWFycyBvbiBhbiBhZHZlcnRpc2VtZW50LCBpcyBhY2N1cmF0ZSBvciB0cnV0aGZ1bC4gRmluYWxseSwgdGhlIHRlcm0g4oCcVmVyaWZpZWTigJ0gZG9lcyBub3QgbWVhbiB0aGF0IEVyb3MgR3VpZGUgaGFzIHJldmlld2VkIG9yIGNvbmZpcm1lZCBhbnkgbGljZW5zdXJlIG9yIHBlcm1pdHMgaXNzdWVkIHRvIHRoZSBhZHZlcnRpc2VyLjwvcD5cbiAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICA8L01vZGFsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBWZXJpZmllZFdpbmRvdztcblxuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIGNlbnRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcbiAgcm9sZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWxsZWRCeTogUHJvcFR5cGVzLnN0cmluZyxcbiAga2V5Ym9hcmQ6IFByb3BUeXBlcy5ib29sLFxuICBiYWNrZHJvcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgUHJvcFR5cGVzLm9uZU9mKFsnc3RhdGljJ10pXG4gIF0pLFxuICBzY3JvbGxhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uT3BlbmVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbG9zZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1vZGFsQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBiYWNrZHJvcENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udGVudENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmFkZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgekluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gIF0pLFxuICB1bm1vdW50T25DbG9zZTogUHJvcFR5cGVzLmJvb2wsXG4gIHJldHVybkZvY3VzQWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmJvb2xcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHMgZnJvbSBcIi4vZm9ybS5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RlbHNGaWx0ZXIoe1xuICBhdmFpbGFiaWxpdHksXG4gIGF2YWlsYWJsZV90byxcbiAgZXRobmljaXR5LFxuICBhZmZpbGlhdGlvbixcbiAgZXllcyxcbiAgaGFpcixcbiAgZmlsdGVyUG9zdHMsXG4gIHNsaWRlRmlsdGVyXG59KSB7XG4gIGNvbnN0IFtzZXgsIHNldFNleF0gPSB1c2VTdGF0ZShbJ2dlbmRlcicsICcnXSk7XG4gIGNvbnN0IFthZ2VGcm9tLCBzZXRBZ2VGcm9tXSA9IHVzZVN0YXRlKFsnYWdlRnJvbScsIDBdKTtcbiAgY29uc3QgW2FnZVRvLCBzZXRBZ2VUb10gPSB1c2VTdGF0ZShbJ2FnZVRvJywgMF0pO1xuICBjb25zdCBbc3RhdGVFdGhuaWNpdHksIHNldEV0aG5pY2l0eV0gPSB1c2VTdGF0ZShbJ2V0aG5pY2l0eV9pZCcsICcnXSk7XG4gIGNvbnN0IFtzdGF0ZUhhaXIsIHNldEhhaXJdID0gdXNlU3RhdGUoWydoYWlyX2lkJywgJyddKTtcbiAgY29uc3QgW3N0YXRlRXllLCBzZXRFeWVdID0gdXNlU3RhdGUoWydleWVfaWQnLCAnJ10pO1xuICBjb25zdCBbc3RhdGVBZmZpbGlhdGlvbiwgc2V0QWZmaWxpYXRpb25dID0gdXNlU3RhdGUoWydhZmZpbGlhdGlvbl9pZCcsICcnXSk7XG4gIGNvbnN0IFtzdGF0ZUF2YWlsYWJsZVRvLCBzZXRBdmFpbGFibGVUb10gPSB1c2VTdGF0ZShbJ2F2YWlsYWJsZXRvX2lkcycsIFtdXSk7XG4gIGNvbnN0IFtzdGF0ZUF2YWlsYWJpbGl0eSwgc2V0QXZhaWxhYmlsaXR5XSA9IHVzZVN0YXRlKFsnYXZhaWxhYmlsaXR5X2lkcycsIFtdXSk7XG5cbiAgY29uc3QgYXBwbHlGaWx0ZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmaWx0ZXJJdGVtcyA9IHt9O1xuICAgIG5ldyBQcm9taXNlKHJlcyA9PiB7XG4gICAgICBbc2V4LCBzdGF0ZUV0aG5pY2l0eSwgc3RhdGVIYWlyLCBzdGF0ZUV5ZSwgc3RhdGVBZmZpbGlhdGlvbiwgc3RhdGVBdmFpbGFibGVUbywgc3RhdGVBdmFpbGFiaWxpdHldLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtWzFdLnRvU3RyaW5nKCkubGVuZ3RoKSB7XG4gICAgICAgICAgZmlsdGVySXRlbXNbaXRlbVswXV0gPSBpdGVtWzFdXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmVzKCk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBmaWx0ZXJQb3N0cyhmaWx0ZXJJdGVtcyk7XG4gICAgICBzbGlkZUZpbHRlcigpO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXthcHBseUZpbHRlcn0gY2xhc3NOYW1lPXtzLmZpbHRlcl9mb3JtfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNleF9ibG9ja30+XG4gICAgICAgIDxsZWdlbmQ+R2VuZGVyPC9sZWdlbmQ+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWx9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgICB2YWx1ZT1cImZlbWFsZVwiXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgbmFtZT1cInNleFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNleChbJ2dlbmRlcicsIGUudGFyZ2V0LnZhbHVlXSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY2hlY2ttYXJrfT48L3NwYW4+XG5cdFx0XHRcdFx0RmVtYWxlXG5cdFx0XHRcdDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWx9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgICB2YWx1ZT1cIm1hbGVcIlxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIG5hbWU9XCJzZXhcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZXgoWydnZW5kZXInLCBlLnRhcmdldC52YWx1ZV0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNoZWNrbWFya30+PC9zcGFuPlxuXHRcdFx0XHRcdE1hbGVcblx0XHRcdFx0PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgJHtzLmFnZV9ibG9ja30gZm9ybS1ncm91cGB9PlxuICAgICAgICA8bGVnZW5kPkFnZTwvbGVnZW5kPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBtaW49XCIxOFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImZyb21cIlxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRBZ2VGcm9tKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInRvXCJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0QWdlVG8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7cy5ldGhuaWNpdHlfYmxvY2t9IGZvcm0tZ3JvdXBgfT5cbiAgICAgICAgPGxlZ2VuZD5FdGhuaWNpdHk6PC9sZWdlbmQ+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZHJvcGRvd25cIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RXRobmljaXR5KFsnZXRobmljaXR5X2lkJywgZS50YXJnZXQudmFsdWVdKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gaGlkZGVuIHZhbHVlPVwiZGVmYXVsdFwiPlxuICAgICAgICAgICAgLS0gc2VsZWN0IG9uZSAtLVxuXHRcdFx0XHRcdDwvb3B0aW9uPlxuICAgICAgICAgIHtldGhuaWNpdHkubGVuZ3RoID8gZXRobmljaXR5Lm1hcChlID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtlLmlkfSB2YWx1ZT17ZS5pZH0+e2UudmFsdWV9PC9vcHRpb24+XG4gICAgICAgICAgKSkgOiBudWxsfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhhaXJfYmxvY2t9PlxuICAgICAgICA8bGVnZW5kPkhhaXI8L2xlZ2VuZD5cbiAgICAgICAge2hhaXIubGVuZ3RoID9cbiAgICAgICAgICBoYWlyLm1hcChoID0+IChcbiAgICAgICAgICAgIDxsYWJlbCBrZXk9e2guaWR9IGNsYXNzTmFtZT17cy5sYWJlbH0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtoLmlkfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cImhhaXJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRIYWlyKFsnaGFpcl9pZCcsIGUudGFyZ2V0LnZhbHVlXSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jaGVja21hcmt9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAge2gudmFsdWV9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICkpIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5leWVfYmxvY2t9PlxuICAgICAgICA8bGVnZW5kPkV5ZTwvbGVnZW5kPlxuICAgICAgICB7ZXllcy5sZW5ndGggP1xuICAgICAgICAgIGV5ZXMubWFwKGUgPT4gKFxuICAgICAgICAgICAgPGxhYmVsIGtleT17ZS5pZH0gY2xhc3NOYW1lPXtzLmxhYmVsfT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2UuaWR9XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZXllXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0RXllKFsnZXllX2lkJywgZS50YXJnZXQudmFsdWVdKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNoZWNrbWFya30+PC9zcGFuPlxuICAgICAgICAgICAgICB7ZS52YWx1ZX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgKSkgOiBudWxsfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmFmZmlsaWF0aW9uX2Jsb2NrfT5cbiAgICAgICAgPGxlZ2VuZD5BZmZpbGlhdGlvbjwvbGVnZW5kPlxuICAgICAgICB7YWZmaWxpYXRpb24ubGVuZ3RoID9cbiAgICAgICAgICBhZmZpbGlhdGlvbi5tYXAoYSA9PiAoXG4gICAgICAgICAgICA8bGFiZWwga2V5PXthLmlkfSBjbGFzc05hbWU9e3MubGFiZWx9PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YS5pZH1cbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJhZmZpbGlhdGlvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEFmZmlsaWF0aW9uKFsnYWZmaWxpYXRpb25faWQnLCBlLnRhcmdldC52YWx1ZV0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY2hlY2ttYXJrfT48L3NwYW4+XG4gICAgICAgICAgICAgIHthLnZhbHVlfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICApKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYXZhaWxhYmxlVG9fYmxvY2t9PlxuICAgICAgICA8bGVnZW5kPiBBdmFpbGFibGUgVG86PC9sZWdlbmQ+XG4gICAgICAgIHthdmFpbGFibGVfdG8ubGVuZ3RoID9cbiAgICAgICAgICBhdmFpbGFibGVfdG8ubWFwKGEgPT4gKFxuICAgICAgICAgICAgPGxhYmVsIGtleT17YS5pZH0gY2xhc3NOYW1lPXtzLmxhYmVsfT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YS5pZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEF2YWlsYWJsZVRvKFtcbiAgICAgICAgICAgICAgICAgICAgICAnYXZhaWxhYmxldG9faWRzJyxcbiAgICAgICAgICAgICAgICAgICAgICBbLi4uc3RhdGVBdmFpbGFibGVUb1sxXSxcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY2hlY2tzaWdufT48L3NwYW4+XG4gICAgICAgICAgICAgIHthLnZhbHVlfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICApKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYXZhaWxhYmlsaXR5X2Jsb2NrfT5cbiAgICAgICAgPGxlZ2VuZD5BdmFpbGFiaWxpdHk6PC9sZWdlbmQ+XG4gICAgICAgIHthdmFpbGFiaWxpdHkubGVuZ3RoID9cbiAgICAgICAgICBhdmFpbGFiaWxpdHkubWFwKGEgPT4gKFxuICAgICAgICAgICAgPGxhYmVsIGtleT17YS5pZH0gY2xhc3NOYW1lPXtzLmxhYmVsfT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YS5pZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEF2YWlsYWJpbGl0eShbXG4gICAgICAgICAgICAgICAgICAgICAgJ2F2YWlsYWJpbGl0eV9pZHMnLFxuICAgICAgICAgICAgICAgICAgICAgIFsuLi5zdGF0ZUF2YWlsYWJpbGl0eVsxXSxcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY2hlY2tzaWdufT48L3NwYW4+XG4gICAgICAgICAgICAgIHthLnZhbHVlfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICApKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtgcm91bmRlZCBib3JkZXItMCAke3MuYnRuX3N1Ym1pdH1gfT5cbiAgICAgICAgU2hvd1xuXHRcdFx0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmlsdGVyX2Zvcm1cIjogXCJmb3JtX2ZpbHRlcl9mb3JtX18yOENFTlwiLFxuXHRcInNleF9ibG9ja1wiOiBcImZvcm1fc2V4X2Jsb2NrX18zSWVDYlwiLFxuXHRcImFnZV9ibG9ja1wiOiBcImZvcm1fYWdlX2Jsb2NrX18zUUVtU1wiLFxuXHRcImV0aG5pY2l0eV9ibG9ja1wiOiBcImZvcm1fZXRobmljaXR5X2Jsb2NrX18ybFc1N1wiLFxuXHRcImhhaXJfYmxvY2tcIjogXCJmb3JtX2hhaXJfYmxvY2tfXzFoZkc1XCIsXG5cdFwiZXllX2Jsb2NrXCI6IFwiZm9ybV9leWVfYmxvY2tfX1JpWXBYXCIsXG5cdFwiYWZmaWxpYXRpb25fYmxvY2tcIjogXCJmb3JtX2FmZmlsaWF0aW9uX2Jsb2NrX18xNFg2YlwiLFxuXHRcImF2YWlsYWJsZVRvX2Jsb2NrXCI6IFwiZm9ybV9hdmFpbGFibGVUb19ibG9ja19fMmlqTkJcIixcblx0XCJhdmFpbGFiaWxpdHlfYmxvY2tcIjogXCJmb3JtX2F2YWlsYWJpbGl0eV9ibG9ja19fMXpWbVRcIixcblx0XCJidG5fc3VibWl0XCI6IFwiZm9ybV9idG5fc3VibWl0X18zUUtZWlwiLFxuXHRcImxhYmVsXCI6IFwiZm9ybV9sYWJlbF9fMjRnVFlcIixcblx0XCJjaGVja21hcmtcIjogXCJmb3JtX2NoZWNrbWFya19fM0tLbGZcIixcblx0XCJjaGVja3NpZ25cIjogXCJmb3JtX2NoZWNrc2lnbl9fMmVmNFJcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2NhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lLXBhZ2UvTG9jYXRpb25cIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS1wYWdlL1NlYXJjaFwiO1xuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS1wYWdlL0NhdGVnb3JpZXNcIjtcbmltcG9ydCBFc2NvcnRDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUtcGFnZS9Fc2NvcnRDb250ZW50XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1xuXHRnZXRBbGxQb3N0cyxcblx0Z2V0TG9jYXRpb25zSW5mbyxcblx0Z2V0TmV3UG9zdHMsXG5cdHNlbGVjdFBvc3RzUGFnZSxcblx0ZmlsdGVyUG9zdHMsXG5cdGFkZFRvRmF2b3JpdGVzLFxuXHRzb3J0UG9zdHMsXG5cdGdldEFwcEluZm9cbn0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvYWN0aW9uc1wiO1xuXG5mdW5jdGlvbiBIb21lKHtcblx0Y2F0ZWdvcmllcyxcblx0Z2V0QWxsUG9zdHMsXG5cdHBvc3RzLFxuXHRnZXRMb2NhdGlvbnNJbmZvLFxuXHRzdGF0ZXMsXG5cdGdldE5ld1Bvc3RzLFxuXHRuZXdQb3N0cyxcblx0cGFnZXNOdW1iZXIsXG5cdHNlbGVjdFBvc3RzUGFnZSxcblx0ZmlsdGVyUG9zdHMsXG5cdGF2YWlsYWJpbGl0eSxcblx0YXZhaWxhYmxlX3RvLFxuXHRldGhuaWNpdHksXG5cdGV5ZXMsXG5cdGhhaXIsXG5cdGFmZmlsaWF0aW9uLFxuXHRhZGRUb0Zhdm9yaXRlcyxcblx0c29ydFBvc3RzLFxuXHRnZXRBcHBJbmZvXG59KSB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Z2V0QWxsUG9zdHMoKTtcblx0XHRnZXRMb2NhdGlvbnNJbmZvKCk7XG5cdFx0Z2V0TmV3UG9zdHMoKTtcblx0XHRnZXRBcHBJbmZvKCk7XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8TG9jYXRpb24gc3RhdGVzPXtzdGF0ZXN9IC8+XG5cdFx0XHQ8U2VhcmNoIC8+XG5cdFx0XHQ8Q2F0ZWdvcmllc1xuXHRcdFx0XHRjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxuXHRcdFx0XHRuZXdQb3N0cz17bmV3UG9zdHN9XG5cdFx0XHRcdGZpbHRlclBvc3RzPXtmaWx0ZXJQb3N0c31cblx0XHRcdC8+XG5cdFx0XHQ8RXNjb3J0Q29udGVudFxuXHRcdFx0XHRwb3N0cz17cG9zdHN9XG5cdFx0XHRcdHBhZ2VzTnVtYmVyPXtwYWdlc051bWJlcn1cblx0XHRcdFx0c2VsZWN0UG9zdHNQYWdlPXtzZWxlY3RQb3N0c1BhZ2V9XG5cdFx0XHRcdGF2YWlsYWJpbGl0eT17YXZhaWxhYmlsaXR5fVxuXHRcdFx0XHRhdmFpbGFibGVfdG89e2F2YWlsYWJsZV90b31cblx0XHRcdFx0ZXRobmljaXR5PXtldGhuaWNpdHl9XG5cdFx0XHRcdGV5ZXM9e2V5ZXN9XG5cdFx0XHRcdGhhaXI9e2hhaXJ9XG5cdFx0XHRcdGFmZmlsaWF0aW9uPXthZmZpbGlhdGlvbn1cblx0XHRcdFx0ZmlsdGVyUG9zdHM9e2ZpbHRlclBvc3RzfVxuXHRcdFx0XHRhZGRUb0Zhdm9yaXRlcz17YWRkVG9GYXZvcml0ZXN9XG5cdFx0XHRcdHNvcnRQb3N0cz17c29ydFBvc3RzfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Li4uc3RhdGUsXG5cdFx0Y2F0ZWdvcmllczogc3RhdGUuYXBwLmNhdGVnb3JpZXMsXG5cdFx0cG9zdHM6IHN0YXRlLmFwcC5wb3N0cyxcblx0XHRzdGF0ZXM6IHN0YXRlLmFwcC5zdGF0ZXMsXG5cdFx0bmV3UG9zdHM6IHN0YXRlLmFwcC5uZXdQb3N0cyxcblx0XHRwYWdlc051bWJlcjogc3RhdGUuYXBwLnBhZ2VzTnVtYmVyLFxuXHRcdGF2YWlsYWJpbGl0eTogc3RhdGUuYXBwLmF2YWlsYWJpbGl0eSxcblx0XHRhdmFpbGFibGVfdG86IHN0YXRlLmFwcC5hdmFpbGFibGVfdG8sXG5cdFx0ZXRobmljaXR5OiBzdGF0ZS5hcHAuZXRobmljaXR5LFxuXHRcdGV5ZXM6IHN0YXRlLmFwcC5leWVzLFxuXHRcdGhhaXI6IHN0YXRlLmFwcC5oYWlyLFxuXHRcdGFmZmlsaWF0aW9uOiBzdGF0ZS5hcHAuYWZmaWxpYXRpb25cblx0fTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qb3BzID0ge1xuXHRnZXRBbGxQb3N0cyxcblx0Z2V0TG9jYXRpb25zSW5mbyxcblx0Z2V0TmV3UG9zdHMsXG5cdHNlbGVjdFBvc3RzUGFnZSxcblx0ZmlsdGVyUG9zdHMsXG5cdGFkZFRvRmF2b3JpdGVzLFxuXHRzb3J0UG9zdHMsXG5cdGdldEFwcEluZm9cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUG9wcykoSG9tZSk7XG4iLCJpbXBvcnQge1xuICAgIFRFU1RfQ1JFQVRFX1BPU1QsXG4gICAgU0hPV19MT0FERVIsXG4gICAgSElERV9MT0FERVIsXG4gICAgU0hPV19BTEVSVCxcbiAgICBISURFX0FMRVJULFxuICAgIFRFU1RfUkVRVUVTVF9QT1NUUyxcbiAgICBHRVRfQUxMX1BPU1RTLFxuICAgIEdFVF9MT0NBSVRPTlNfSU5GTyxcbiAgICBHRVRfQ0lUSUVTLFxuICAgIENSRUFURV9TVVBQT1JUX1RBU0ssXG4gICAgR0VUX0FMTF9VU0VSX1RBU0tTLFxuICAgIEdFVF9BUFBfSU5GTyxcbiAgICBHRVRfTkVXX1BPU1RTLFxuICAgIEdFVF9QQUdFU19OVU1CRVIsXG4gICAgR0VUX1BPU1RfQ09NTUVOVFMsXG4gICAgQ1JFQVRFX1BPU1RfQ09NTUVOVCxcbiAgICBGSUxURVJfUE9TVFMsXG4gICAgR0VUX0ZBVk9SSVRFUyxcbiAgICBHRVRfQ09NUExBSU5TLFxuICAgIFNPUlRfUE9TVFMsXG4gICAgU0hPV19TVUNDRVNTXG59IGZyb20gXCIuL3R5cGVzXCJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgYXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL19zZXJ2aWNlc1wiO1xuXG4vLyBUIEUgUyBUIFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvc3QocG9zdDogYW55KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBURVNUX0NSRUFURV9QT1NULFxuICAgICAgICBwYXlsb2FkOiBwb3N0XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9hZGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNIT1dfTE9BREVSXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMb2FkZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogSElERV9MT0FERVJcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd0FsZXJ0KHRleHQ6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogU0hPV19BTEVSVCxcbiAgICAgICAgICAgIHBheWxvYWQ6IHRleHRcbiAgICAgICAgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChoaWRlQWxlcnQoKSlcbiAgICAgICAgfSwgMzAwMClcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaGlkZUFsZXJ0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEhJREVfQUxFUlRcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb3N0cygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFRFU1RfUkVRVUVTVF9QT1NUU1xuICAgIH1cbn07XG5leHBvcnQgY29uc3QgZ2V0QWxsUG9zdHMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0c2ApO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX1BBR0VTX05VTUJFUiwgcGF5bG9hZDogcmVzLmxhc3RfcGFnZSB9KTtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfQUxMX1BPU1RTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xufVxuZXhwb3J0IGNvbnN0IGdldE5ld1Bvc3RzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvYWxsL25ld2ApO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9ORVdfUE9TVFMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XG59XG5leHBvcnQgY29uc3QgZ2V0TG9jYXRpb25zSW5mbyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2xvY2F0aW9uYCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0xPQ0FJVE9OU19JTkZPLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xufVxuZXhwb3J0IGNvbnN0IGdldEFwcEluZm8gPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9pbmZvYCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAvLyByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfQVBQX0lORk8sIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XG59XG5leHBvcnQgY29uc3QgZ2V0Q2l0aWVzID0gKHN0YXRlSWQ6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2xvY2F0aW9uL2NpdGllcy8ke3N0YXRlSWR9YCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0NJVElFUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBjcmVhdGVTdXBwb3J0VGFzayA9ICh0YXNrOiBhbnkpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9zdXBwb3J0L2NyZWF0ZWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhc2spXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xuICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IENSRUFURV9TVVBQT1JUX1RBU0ssIHBheWxvYWQ6IHRhc2sgfSlcbn1cbmV4cG9ydCBjb25zdCBnZXRBbGxVc2Vyc1Rhc2tzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3N1cHBvcnQvJHt1c2VyLnVzZXIuaWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0FMTF9VU0VSX1RBU0tTLCBwYXlsb2FkOiByZXMgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBzZWxlY3RQb3N0c1BhZ2UgPSAocGFnZTogbnVtYmVyIHwgc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cz9wYWdlPSR7cGFnZX1gKTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9QQUdFU19OVU1CRVIsIHBheWxvYWQ6IHJlcy5sYXN0X3BhZ2UgfSk7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX0FMTF9QT1NUUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBnZXRQb3N0Q29tbWVudHMgPSAocG9zdElkOiBudW1iZXIgfCBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cy8ke3Bvc3RJZH0vY29tbWVudHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9QT1NUX0NPTU1FTlRTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpOztcbn1cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0Q29tbWVudCA9IChwb3N0SWQ6IG51bWJlciB8IHN0cmluZywgY29tbWVudDogc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvJHtwb3N0SWR9L2NvbW1lbnRzL2NyZWF0ZWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29tbWVudCB9KVxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQ1JFQVRFX1BPU1RfQ09NTUVOVCwgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTs7XG59XG5leHBvcnQgY29uc3QgZmlsdGVyUG9zdHMgPSAoZmlsdGVySXRlbXNPYmplY3Q6IGFueSkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIC8vIGZyb20sIHRvLCBnZW5kZXIsIGV0aG5pY2l0eV9pZCwgaGFpcl9pZCwgZXllX2lkLCBjYXRlZ29yeV9pZCwgYWZmaWxpYXRpb25faWQsIGF2YWlsYWJpbGl0eV9pZHMoYXJyYXkpLCBhdmFpbGFibGV0b19pZHMoYXJyYXkpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9maWx0ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmaWx0ZXJJdGVtc09iamVjdClcbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfUEFHRVNfTlVNQkVSLCBwYXlsb2FkOiByZXMubGFzdF9wYWdlIH0pO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEZJTFRFUl9QT1NUUywgcGF5bG9hZDogcmVzLmRhdGEuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpOztcbn1cbmV4cG9ydCBjb25zdCByZXBvcnRQb3N0ID0gKHBvc3RJZDogbnVtYmVyIHwgc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpLyR7cG9zdElkfS9jb21wbGFpbnRzL2FkZGAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1lc3NhZ2UsIHN0YXR1czogJ0luIHByb2dyZXNzJ1xuICAgICAgICB9KVxuICAgIH0pO1xuICAgIC8vIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gcmV0dXJuIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgIC8vICAgICBkaXNwYXRjaCh7IHR5cGU6IFJFUE9SVF9QT1NUIH0pO1xuICAgIC8vIH0pO1xufVxuZXhwb3J0IGNvbnN0IGFkZFRvRmF2b3JpdGVzID0gKHBvc3RJZDogbnVtYmVyIHwgc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xuICAgIHJldHVybiBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cy8ke3Bvc3RJZH0vZmF2b3JpdGVzL2FkZGAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGlzX2Zhdm9yaXRlOiB0cnVlXG4gICAgICAgIH0pXG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgYWRkVG9GYXZvcml0ZXNCdXNpbmVzcyA9IChwb3N0SWQ6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvJHtwb3N0SWR9L2Zhdm9yaXRlc19idXNpbmVzcy9hZGRgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZXNCdXNpbmVzcyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9mYXZvcml0ZXNfYnVzaW5lc3MvbXlgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0ZBVk9SSVRFUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZXNVc2VyID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2Zhdm9yaXRlcy9teWAsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfRkFWT1JJVEVTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xufVxuZXhwb3J0IGNvbnN0IGdldENvbXBsYWlucyA9ICh1c2VySWQ6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzL2NvbXBsYWludHMvdXNlci8ke3VzZXJJZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0NPTVBMQUlOUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBzb3J0UG9zdHMgPSAoc29ydFR5cGU6IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IFNPUlRfUE9TVFMsIHBheWxvYWQ6IHNvcnRUeXBlIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzaG93U3VjY2VzcyA9ICh0ZXh0OiBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFNIT1dfU1VDQ0VTUywgcGF5bG9hZDogdGV4dCB9KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFNIT1dfU1VDQ0VTUywgcGF5bG9hZDogbnVsbCB9KVxuICAgIH0sIDMwMDApXG59XG4iLCIvLyB0ZXN0XG5leHBvcnQgY29uc3QgVEVTVF9DUkVBVEVfUE9TVCA9ICdDUkVBVEVfUE9TVCc7XG5leHBvcnQgY29uc3QgVEVTVF9GRVRDSF9QT1NUID0gJ0ZFVENIX1BPU1QnO1xuZXhwb3J0IGNvbnN0IFRFU1RfUkVRVUVTVF9QT1NUUyA9ICdSRVFVRVNUX1BPU1RTJztcblxuLy8gYXBwXG5leHBvcnQgY29uc3QgU0hPV19MT0FERVIgPSAnQVBQL1NIT1dfTE9BREVSJztcbmV4cG9ydCBjb25zdCBISURFX0xPQURFUiA9ICdBUFAvSElERV9MT0FERVInO1xuZXhwb3J0IGNvbnN0IFNIT1dfQUxFUlQgPSAnQVBQL1NIT1dfQUxFUlQnO1xuZXhwb3J0IGNvbnN0IEhJREVfQUxFUlQgPSAnQVBQL0hJREVfQUxFUlQnOyBcbmV4cG9ydCBjb25zdCBHRVRfQUxMX1BPU1RTID0gJ0dFVF9BTExfUE9TVFMnO1xuZXhwb3J0IGNvbnN0IEdFVF9QQUdFU19OVU1CRVIgPSAnR0VUX1BBR0VTX05VTUJFUic7XG5leHBvcnQgY29uc3QgR0VUX05FV19QT1NUUyA9ICdHRVRfTkVXX1BPU1RTJztcbmV4cG9ydCBjb25zdCBHRVRfTE9DQUlUT05TX0lORk8gPSAnR0VUX0xPQ0FJVE9OU19JTkZPJztcbmV4cG9ydCBjb25zdCBHRVRfQ0lUSUVTID0gJ0dFVF9DSVRJRVMnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9TVVBQT1JUX1RBU0sgPSAnQ1JFQVRFX1NVUFBPUlRfVEFTSyc7XG5leHBvcnQgY29uc3QgR0VUX0FMTF9VU0VSX1RBU0tTID0gJ0dFVF9BTExfVVNFUl9UQVNLUyc7XG5leHBvcnQgY29uc3QgR0VUX0FQUF9JTkZPID0gJ0dFVF9BUFBfSU5GTyc7XG5leHBvcnQgY29uc3QgR0VUX1BPU1RfQ09NTUVOVFMgPSAnR0VUX1BPU1RfQ09NTUVOVFMnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUX0NPTU1FTlQgPSAnQ1JFQVRFX1BPU1RfQ09NTUVOVCc7XG5leHBvcnQgY29uc3QgRklMVEVSX1BPU1RTID0gJ0ZJTFRFUl9QT1NUUyc7XG5leHBvcnQgY29uc3QgUkVQT1JUX1BPU1QgPSAnUkVQT1JUX1BPU1QnO1xuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURVMgPSAnR0VUX0ZBVk9SSVRFUyc7XG5leHBvcnQgY29uc3QgR0VUX0NPTVBMQUlOUyA9ICdHRVRfR0VUX0NPTVBMQUlOUyc7XG5leHBvcnQgY29uc3QgU09SVF9QT1NUUyA9ICdTT1JUX1BPU1RTJztcbmV4cG9ydCBjb25zdCBTSE9XX1NVQ0NFU1MgPSAnU0hPV19TVUNDRVNTJztcblxuLy8gcHJvdmlkZXJcbmV4cG9ydCBjb25zdCBBRERfUE9TVCA9ICdQUk9WSURFUi9BRERfUE9TVCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1QgPSAnUFJPVklERVIvUkVNT1ZFX1BPU1QnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NUID0gJ1BST1ZJREVSL1VQREFURV9QT1NUJztcblxuLy8gcHJvdmlkZXJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvdmlkZXJQb3N0IHtcbiAgaWQ6IG51bWJlciB8IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nLFxuICBzZWNvbmROYW1lOiBzdHJpbmcsXG4gIGFjY291bnRpbmdOYW1lOiBzdHJpbmcsXG4gIHNleDogc3RyaW5nLFxuICBhZ2U6IG51bWJlciB8IHN0cmluZyxcbiAgZW1haWw6IHN0cmluZyxcbiAgcGhvbmU6IG51bWJlciB8IHN0cmluZyxcbiAgZXRobml0aGl0eTogc3RyaW5nLFxuICBoYWlyOiBzdHJpbmcsXG4gIGV5ZXM6IHN0cmluZyxcbiAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gIGFmZmlsaWF0aW9uOiBzdHJpbmcsXG4gIGF2YWlsYWJsZVRvOiBzdHJpbmcsXG4gIGF2YWlsYWJpbGl0eTogc3RyaW5nLFxuICBzaG9ydFN1bW1hcnk6IHN0cmluZyxcbiAgYWJvdXQ6IHN0cmluZyxcbiAgcGhvdG9zOiBzdHJpbmdbXSxcbiAgdmlkZW9zOiBzdHJpbmdbXVxufVxuXG4vLyB1c2VyXG5leHBvcnQgY29uc3QgU0VMRUNUX1NUQVRFID0gJ1VTRVIvU0VMRUNUX1NUQVRFJztcbmV4cG9ydCBjb25zdCBTRUxFQ1RfQ0lUWSA9ICdVU0VSL1NFTEVDVF9DSVRZJztcbmV4cG9ydCBjb25zdCBTRUxFQ1RfTElTVF9TT1JUID0gJ1VTRVIvU0VMRUNUX0xJU1RfU09SVCc7XG5leHBvcnQgY29uc3QgU0VMRUNUX0xJU1RfRklMVEVSID0gJ1VTRVIvU0VMRUNUX0xJU1RfRklMVEVSJztcbmV4cG9ydCBjb25zdCBTRUxFQ1RfQ0FURUdPUlkgPSAnVVNFUi9TRUxFQ1RfQ0FURUdPUlknO1xuXG4vLyBhZG1pblxuZXhwb3J0IGNvbnN0IEdFVF9BTExfU1VQUE9SVF9UQVNLUyA9ICdHRVRfQUxMX1NVUFBPUlRfVEFTS1MnO1xuZXhwb3J0IGNvbnN0IEVESVRfU1VQUE9SVF9UQVNLUyA9ICdFRElUX1NVUFBPUlRfVEFTS1MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9TVVBQT1JUX1RBU0sgPSAnREVMRVRFX1NVUFBPUlRfVEFTSyc7XG4vLyBleHBvcnQgY29uc3QgQ1JFQVRFX0NBVEVHT1JZID0gJ0NSRUFURV9DQVRFR09SWSc7XG4vLyBleHBvcnQgY29uc3QgRURJVF9DQVRFR09SWSA9ICdFRElUX0NBVEVHT1JZJztcbi8vIGV4cG9ydCBjb25zdCBERUxFVEVfQ0FURUdPUlkgPSAnREVMRVRFX0NBVEVHT1JZJztcbiIsImltcG9ydCB7IEdFVF9BTExfU1VQUE9SVF9UQVNLUywgREVMRVRFX1NVUFBPUlRfVEFTSywgQ1JFQVRFX0NBVEVHT1JZIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHRhc2tzOiBbXSxcblxufVxuXG5leHBvcnQgY29uc3QgYWRtaW5SZWR1Y2VyID0gKHN0YXRlOiBhbnkgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdFVF9BTExfU1VQUE9SVF9UQVNLUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0YXNrczogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBERUxFVEVfU1VQUE9SVF9UQVNLOlxuICAgICAgY29uc3QgdGFza3MgPSBzdGF0ZS50YXNrcy5maWx0ZXIoKHRhc2s6IGFueSkgPT4gdGFzay5pZCAhPSBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdGFza3MgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgU0hPV19MT0FERVIsXG4gIEhJREVfTE9BREVSLFxuICBTSE9XX0FMRVJULFxuICBISURFX0FMRVJULFxuICBHRVRfQUxMX1BPU1RTLFxuICBHRVRfTE9DQUlUT05TX0lORk8sXG4gIEdFVF9DSVRJRVMsXG4gIENSRUFURV9TVVBQT1JUX1RBU0ssXG4gIEdFVF9BTExfVVNFUl9UQVNLUyxcbiAgR0VUX0FQUF9JTkZPLFxuICBHRVRfTkVXX1BPU1RTLFxuICBHRVRfUEFHRVNfTlVNQkVSLFxuICBHRVRfUE9TVF9DT01NRU5UUyxcbiAgQ1JFQVRFX1BPU1RfQ09NTUVOVCxcbiAgRklMVEVSX1BPU1RTLFxuICBHRVRfRkFWT1JJVEVTLFxuICBHRVRfQ09NUExBSU5TLFxuICBTT1JUX1BPU1RTLFxuICBTSE9XX1NVQ0NFU1Ncbn0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwb3N0Q29tbWVudHM6IFtdLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgYWxlcnQ6IG51bGwsXG4gIGNhdGVnb3JpZXM6IFtdLFxuICBwb3N0czogW10sXG4gIG5ld1Bvc3RzOiBbXSxcbiAgc3RhdGVzOiBbXSxcbiAgY2l0aWVzOiBbXSxcbiAgc3VwcG9ydFRhc2tzOiBbXSxcbiAgYWZmaWxpYXRpb246IFtdLFxuICBhdmFpbGFiaWxpdHk6IFtdLFxuICBhdmFpbGFibGVfdG86IFtdLFxuICBldGhuaWNpdHk6IFtdLFxuICBleWVzOiBbXSxcbiAgaGFpcjogW10sXG4gIHBhZ2VzTnVtYmVyOiAwLFxuICBmYXZvcml0ZXM6IFtdLFxuICBjb21wbGFpbnM6IFtdLFxuICBzdWNjZXNzOiBudWxsXG59O1xuXG5leHBvcnQgY29uc3QgYXBwUmVkdWNlciA9IChzdGF0ZTogYW55ID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTSE9XX0xPQURFUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cblxuICAgIGNhc2UgU0hPV19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHN1Y2Nlc3M6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgSElERV9MT0FERVI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuXG4gICAgY2FzZSBTSE9XX0FMRVJUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFsZXJ0OiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIEhJREVfQUxFUlQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYWxlcnQ6IG51bGwgfVxuXG4gICAgY2FzZSBHRVRfQUxMX1BPU1RTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIFNPUlRfUE9TVFM6XG4gICAgICBsZXQgbmV3UG9zdHMgPSBzdGF0ZS5wb3N0cztcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gJ2RhdGUvLScpIHtcbiAgICAgICAgbmV3UG9zdHMuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGEuY3JlYXRlZF9hdC5zcGxpdCgnVCcpWzBdLnNwbGl0KCctJykuam9pbignLycpKTtcbiAgICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGIuY3JlYXRlZF9hdC5zcGxpdCgnVCcpWzBdLnNwbGl0KCctJykuam9pbignLycpKTtcbiAgICAgICAgICBpZiAoZGF0ZUEuZ2V0VGltZSgpIDwgZGF0ZUIuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRlQS5nZXRUaW1lKCkgPiBkYXRlQi5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBiIC0gYTtcbiAgICAgICAgICB9IGVsc2UgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogbmV3UG9zdHMgfVxuXG4gICAgY2FzZSBGSUxURVJfUE9TVFM6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgR0VUX1BBR0VTX05VTUJFUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwYWdlc051bWJlcjogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBHRVRfTkVXX1BPU1RTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG5ld1Bvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIEdFVF9MT0NBSVRPTlNfSU5GTzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdGF0ZXM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgR0VUX0NJVElFUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaXRpZXM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgR0VUX0NPTVBMQUlOUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjb21wbGFpbnM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgR0VUX0ZBVk9SSVRFUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmYXZvcml0ZXM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgQ1JFQVRFX1NVUFBPUlRfVEFTSzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdXBwb3J0VGFza3M6IFsuLi5zdGF0ZS5zdXBwb3J0VGFza3MsIGFjdGlvbi5wYXlsb2FkXSB9XG5cbiAgICBjYXNlIEdFVF9BTExfVVNFUl9UQVNLUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdXBwb3J0VGFza3M6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgR0VUX1BPU1RfQ09NTUVOVFM6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdENvbW1lbnRzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIENSRUFURV9QT1NUX0NPTU1FTlQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdENvbW1lbnRzOiBbLi4uc3RhdGUucG9zdENvbW1lbnRzLCBhY3Rpb24ucGF5bG9hZF0gfVxuXG4gICAgY2FzZSBHRVRfQVBQX0lORk86XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2F0ZWdvcmllczogYWN0aW9uLnBheWxvYWQuY2F0ZWdvcmllcyxcbiAgICAgICAgYWZmaWxpYXRpb246IGFjdGlvbi5wYXlsb2FkLmFmZmlsaWF0aW9uLFxuICAgICAgICBhdmFpbGFiaWxpdHk6IGFjdGlvbi5wYXlsb2FkLmF2YWlsYWJpbGl0eSxcbiAgICAgICAgYXZhaWxhYmxlX3RvOiBhY3Rpb24ucGF5bG9hZC5hdmFpbGFibGVfdG8sXG4gICAgICAgIGV0aG5pY2l0eTogYWN0aW9uLnBheWxvYWQuZXRobmljaXR5LFxuICAgICAgICBleWVzOiBhY3Rpb24ucGF5bG9hZC5leWVzLFxuICAgICAgICBoYWlyOiBhY3Rpb24ucGF5bG9hZC5oYWlyXG4gICAgICB9XG5cbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgeyBBRERfUE9TVCwgUkVNT1ZFX1BPU1QsIFVQREFURV9QT1NUIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwcm92aWRlclBvc3RzOiBbXVxufTtcblxuZXhwb3J0IGNvbnN0IHByb3ZpZGVyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX1BPU1Q6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvdmlkZXJQb3N0czogc3RhdGUucHJvdmlkZXJQb3N0cy5jb25jYXQoYWN0aW9uLnBheWxvYWQpIH1cblxuICAgIGNhc2UgUkVNT1ZFX1BPU1Q6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvdmlkZXJQb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBVUERBVEVfUE9TVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm92aWRlclBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgdGVzdFJlZHVjZXIgfSBmcm9tICcuL3Rlc3RSZWR1Y2VyJztcbmltcG9ydCB7IGFwcFJlZHVjZXIgfSBmcm9tICcuL2FwcFJlZHVjZXInO1xuaW1wb3J0IHsgcHJvdmlkZXJSZWR1Y2VyIH0gZnJvbSAnLi9wcm92aWRlclJlZHVjZXInO1xuaW1wb3J0IHsgdXNlclJlZHVjZXIgfSBmcm9tICcuL3VzZXJSZWR1Y2VyJztcbmltcG9ydCB7IGFkbWluUmVkdWNlciB9IGZyb20gJy4vYWRtaW5SZWR1Y2VyJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHRlc3RQb3N0czogdGVzdFJlZHVjZXIsXG4gICAgYXBwOiBhcHBSZWR1Y2VyLFxuICAgIHByb3ZpZGVyOiBwcm92aWRlclJlZHVjZXIsXG4gICAgdXNlcjogdXNlclJlZHVjZXIsXG4gICAgYWRtaW46IGFkbWluUmVkdWNlclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHsgVEVTVF9DUkVBVEVfUE9TVCwgVEVTVF9GRVRDSF9QT1NUIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwb3N0czogW10sXG4gIGZldGNoZWRQb3N0czogW11cbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVEVTVF9DUkVBVEVfUE9TVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogc3RhdGUucG9zdHMuY29uY2F0KGFjdGlvbi5wYXlsb2FkKSB9XG5cbiAgICBjYXNlIFRFU1RfRkVUQ0hfUE9TVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmZXRjaGVkUG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgeyBTRUxFQ1RfU1RBVEUsIFNFTEVDVF9DSVRZLCBTRUxFQ1RfTElTVF9TT1JULCBTRUxFQ1RfTElTVF9GSUxURVIsIFNFTEVDVF9DQVRFR09SWSB9IGZyb20gXCIuLi9hY3Rpb25zL3R5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgcG9zdHM6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlIFNFTEVDVF9TVEFURTpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBTRUxFQ1RfQ0lUWTpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBTRUxFQ1RfTElTVF9TT1JUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIFNFTEVDVF9MSVNUX0ZJTFRFUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBTRUxFQ1RfQ0FURUdPUlk6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgeyBhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgc2FnYVdhdGNoZXIgfSBmcm9tICcuL3Rlc3RTYWdhcyc7XG4vLyBpbXBvcnQgeyB1c2VyU2FnYVdhdGNoZXIgfSBmcm9tICcuL3VzZXJTYWdhcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgc2FnYVdhdGNoZXIoKSxcbiAgICAvLyB1c2VyU2FnYVdhdGNoZXIoKVxuICBdKTtcbn1cbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgdGFrZUV2ZXJ5LCBwdXQsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgVEVTVF9SRVFVRVNUX1BPU1RTLCBURVNUX0ZFVENIX1BPU1QgfSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcbmltcG9ydCB7IHNob3dMb2FkZXIsIGhpZGVMb2FkZXIsIHNob3dBbGVydCB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9ucyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uKiBzYWdhV2F0Y2hlcigpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KFRFU1RfUkVRVUVTVF9QT1NUUywgc2FnYVdvcmtlcilcbn1cblxuZnVuY3Rpb24qIHNhZ2FXb3JrZXIoKSB7XG4gIHRyeSB7XG4gICAgeWllbGQgcHV0KHNob3dMb2FkZXIoKSk7XG4gICAgY29uc3QgcGF5bG9hZCA9IHlpZWxkIGNhbGwoZmV0Y2hQb3N0cyk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogVEVTVF9GRVRDSF9QT1NULCBwYXlsb2FkIH0pO1xuICAgIHlpZWxkIHB1dChoaWRlTG9hZGVyKCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KHNob3dBbGVydCgnU29tZXRoaW5nIGdvaW5nIHdyb25nJykpO1xuICAgIHlpZWxkIHB1dChoaWRlTG9hZGVyKCkpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoUG9zdHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpO1xuICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufSIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9yb290UmVkdWNlcic7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuLy8gaW1wb3J0IHsgZm9yYmlkZGVuV29yZHNNaWRkbHd3YXJlIH0gZnJvbSAnLi9taWRkbGV3YXJlJztcbmltcG9ydCBjcmVhdGVTYWdhc01pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgeyByb290U2FnYSB9IGZyb20gJy4vc2FnYXMvc2FnYXMnO1xuXG5jb25zdCBwcmVsb2FkZWRTdGF0ZSA9IHt9O1xuY29uc3Qgc2FnYSA9IGNyZWF0ZVNhZ2FzTWlkZGxld2FyZSgpO1xuXG5jb25zdCBzdG9yZTogYW55ID0gY3JlYXRlU3RvcmUoXG4gIHJvb3RSZWR1Y2VyLFxuICBwcmVsb2FkZWRTdGF0ZSxcbiAgYXBwbHlNaWRkbGV3YXJlKFxuICAgIHRodW5rLFxuICAgIC8vIGZvcmJpZGRlbldvcmRzTWlkZGx3d2FyZSxcbiAgICBzYWdhXG4gIClcbik7XG5cbnNhZ2EucnVuKHJvb3RTYWdhKTtcblxuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ3VwZGF0ZWQgc3RhdGU6ICcsIHN0b3JlLmdldFN0YXRlKCkpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=