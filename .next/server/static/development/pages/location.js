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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./src/assets/images/main/signs/crown-yel.png":
/*!****************************************************!*\
  !*** ./src/assets/images/main/signs/crown-yel.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAMAAACnUt2HAAAAAXNSR0IB2cksfwAAAEVQTFRFAAAA/8cA/8YA/8YA/8cA/8YA/8UA/8YA/8YA/78A/8YA/8YA/8YA/8YA/8YA/8YA/8YA/8YA/8UA/8cA/8cA/8YA/8cAb3iceQAAABd0Uk5TACDP72DfMJD/EPCwcOCvUMCgn9B/v0D6+r7QAAAApUlEQVR4nH2Q6RLDIAiEMR5dNfFojvd/1IKmjf7pzujgJ8gikUgt2hAZbR09egHwFIA4wBUIRNsPGps8+QguzygcpiVLzSqpVR6prUhLDSdVjjgsDW7kIt5EO5Add5PryBa8pPK5igVleEmryIDP2vLGF6X3xyTToA8T9N1qHVm958kjzN8pA/bSJdP+kTrSKX5gz3SoG27jm7YzN/vs/3zN8CL6AIpECNeooBH1AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/main/signs/favorite-pink.png":
/*!********************************************************!*\
  !*** ./src/assets/images/main/signs/favorite-pink.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAMAAACjpw26AAAAAXNSR0IB2cksfwAAADxQTFRFAAAA33Cv5Hex5Hex5Hex5Hex5Xax5Hey5Hex5HWv5Hex5Hiy5Hix43ex5Hex5naz43iv5Hex43ix5HiwfELn2AAAABR0Uk5TABCP3//Pf7/vMNBgoLDwUECQgOCWE8qsAAAAeElEQVR4nHWQUQ6EIAwF39stWhSR1fvfVVDUNdT5mkxoCQDg5yuuIzLseu0P9SoF9Ze6rBjkQEmt6oBRTkK4dMQkBhOilRVWFbFPx7fds5UTENr6K89s+oKd+XHtmlDh38BC3KQ6ED0ecP+xgUDb21r6atS8P92+AfMuBiskyPkCAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/main/signs/favorite-yel.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/main/signs/favorite-yel.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAMAAACjpw26AAAAAXNSR0IB2cksfwAAADxQTFRFAAAA/78A/8YA/8YA/8YA/8YA/8cA/8YA/8YA/8UA/8cA/8cA/8YA/8YA/8YA/8YA/8cA/8YA/8UA/8YAuSKJLwAAABR0Uk5TABCP3//Pf7/vMNBgoLDwUECQgOCWE8qsAAAAeElEQVR4nHWQUQ6EIAwF39stWhSR1fvfVVDUNdT5mkxoCQDg5yuuIzLseu0P9SoF9Ze6rBjkQEmt6oBRTkK4dMQkBhOilRVWFbFPx7fds5UTENr6K89s+oKd+XHtmlDh38BC3KQ6ED0ecP+xgUDb21r6atS8P92+AfMuBiskyPkCAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/main/signs/plane-pink.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/main/signs/plane-pink.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAMAAACqTK3AAAAAAXNSR0IB2cksfwAAAEtQTFRFAAAA5Hiw5Xax43ix5Hex5Hew5Hex5Hey33Cv5Hex5Hex53iv43Wy5HWv5Hex5Hay43ex5naz5Hiy5Hex5Hix5Hix5Hex43iv43ewaaAK+QAAABl0Uk5TAOB/gP+f0L8Q8M8gPzDfcLBQYJCgwO9Ar+XnKY4AAACNSURBVHicZY/hFsIgCEbVIemW5Zybvf+TJjDKFn+Eezh8V2OdudYE/o8h3MIFhQizsOXei9sUYahHIvYcUV4l4ayYy3l2k7mu34CdyJF+NQAQjmVAnVhTVYV1OpqMyQNr/XQfAsLsnH8RKgCVv4Gc7EVLLhc2o77KEl1DVK2myS3J/rarsv1YqHcq/LwBYIQFQP3I73YAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/main/signs/plane-yel.png":
/*!****************************************************!*\
  !*** ./src/assets/images/main/signs/plane-yel.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAMAAACqTK3AAAAAAXNSR0IB2cksfwAAAEtQTFRFAAAA/8YA/8cA/8UA/8YA/8UA/8cA/8YA/78A/8YA/8YA/8cA/8YA/8UA/8YA/8YA/8YA/8YA/8cA/8YA/8YA/8YA/8YA/8cA/8YAk4S7zAAAABl0Uk5TAOB/gP+f0L8Q8M8gPzDfcLBQYJCgwO9Ar+XnKY4AAACNSURBVHicZY/hFsIgCEbVIemW5Zybvf+TJjDKFn+Eezh8V2OdudYE/o8h3MIFhQizsOXei9sUYahHIvYcUV4l4ayYy3l2k7mu34CdyJF+NQAQjmVAnVhTVYV1OpqMyQNr/XQfAsLsnH8RKgCVv4Gc7EVLLhc2o77KEl1DVK2myS3J/rarsv1YqHcq/LwBYIQFQP3I73YAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/main/signs/star-pink.png":
/*!****************************************************!*\
  !*** ./src/assets/images/main/signs/star-pink.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAMAAACnUt2HAAAAAXNSR0IB2cksfwAAAD9QTFRFAAAA43iv5Hex5Hex5Hiy5Hex33Cv5Hex43ix5Hex43ex5Hex5Hey43Wy5Hix53iv5Hex5Hay5Hix5Hiw43exJHcqyAAAABV0Uk5TAEDQz2D/EN+A72+Pvz+gIPBwwOCwSnfYOAAAAHhJREFUeJxl0FsWgCAIBFAl0bJSe+x/raGlJM7nPQpzUKpGazUGptEMopFmHaKTOCNlFg+XjIvltX7d8Mu2+p0o4JCgLEgDGiIVyuBe4VsWE1uKdf/BePTN33D/X63Q8GQ8G155qzG5BR+FHpQLa/pSLYZ2dH3nSg8+SgToA/AGuwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/images/main/signs/star-yel.png":
/*!***************************************************!*\
  !*** ./src/assets/images/main/signs/star-yel.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAMAAACnUt2HAAAAAXNSR0IB2cksfwAAAD9QTFRFAAAA/8cA/8cA/8YA/8cA/8YA/78A/8YA/8UA/8YA/8YA/8YA/8YA/8YA/8YA/8cA/8YA/8YA/8YA/8YA/8YAEDWwLwAAABV0Uk5TAEDQz2D/EN+A72+Pvz+gIPBwwOCwSnfYOAAAAHhJREFUeJxl0FsWgCAIBFAl0bJSe+x/raGlJM7nPQpzUKpGazUGptEMopFmHaKTOCNlFg+XjIvltX7d8Mu2+p0o4JCgLEgDGiIVyuBe4VsWE1uKdf/BePTN33D/X63Q8GQ8G155qzG5BR+FHpQLa/pSLYZ2dH3nSg8+SgToA/AGuwAAAABJRU5ErkJggg=="

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
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\home-page\\EscortGrid.jsx";
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

/***/ "./src/components/location-page/LocHorCarousel.jsx":
/*!*********************************************************!*\
  !*** ./src/components/location-page/LocHorCarousel.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocHorCarousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal.module.scss */ "./src/components/location-page/horizontal.module.scss");
/* harmony import */ var _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_main_signs_favorite_yel_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/main/signs/favorite-yel.png */ "./src/assets/images/main/signs/favorite-yel.png");
/* harmony import */ var _assets_images_main_signs_favorite_yel_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_favorite_yel_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_main_signs_crown_yel_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/main/signs/crown-yel.png */ "./src/assets/images/main/signs/crown-yel.png");
/* harmony import */ var _assets_images_main_signs_crown_yel_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_crown_yel_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_main_signs_star_yel_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/main/signs/star-yel.png */ "./src/assets/images/main/signs/star-yel.png");
/* harmony import */ var _assets_images_main_signs_star_yel_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_star_yel_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_main_signs_plane_yel_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/main/signs/plane-yel.png */ "./src/assets/images/main/signs/plane-yel.png");
/* harmony import */ var _assets_images_main_signs_plane_yel_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_main_signs_plane_yel_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\location-page\\LocHorCarousel.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function LocHorCarousel({
  posts,
  addToFavorites
}) {
  const {
    0: firstCurrentIndex,
    1: setFirstCurrentIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: secondCurrentIndex,
    1: setSecondCurrentIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);

  const autoSlide = delay => {
    setInterval(() => {
      changePhotoForvard();
    }, delay);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setFirstCurrentIndex(0);
  }, []);

  const changePhotoForvard = () => {
    if (posts.length > 1) {
      if (firstCurrentIndex < posts.length - 1) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('.model-photo').fadeOut(() => {
          setFirstCurrentIndex(firstCurrentIndex + 1);
          setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('.model-photo').fadeIn();
          }, 100);
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('.model-photo').fadeOut(() => {
          setFirstCurrentIndex(0);
          setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('.model-photo').fadeIn();
          }, 100);
        });
      }

      if (secondCurrentIndex < posts.length - 1) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('.model-photo-second').fadeOut(() => {
          setSecondCurrentIndex(secondCurrentIndex + 1);
          setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('.model-photo-second').fadeIn();
          }, 100);
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('.model-photo-second').fadeOut(() => {
          setSecondCurrentIndex(0);
          setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('.model-photo-second').fadeIn();
          }, 100);
        });
      }
    }
  };

  const changePhotoBack = () => {
    if (posts.length > 1) {
      if (firstCurrentIndex > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('.model-photo').fadeOut(() => {
          setFirstCurrentIndex(firstCurrentIndex - 1);
          setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('.model-photo').fadeIn();
          }, 100);
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('.model-photo').fadeOut(() => {
          setFirstCurrentIndex(posts.length - 1);
          setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('.model-photo').fadeIn();
          }, 100);
        });
      }

      if (secondCurrentIndex > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('.model-photo-second').fadeOut(() => {
          setSecondCurrentIndex(secondCurrentIndex - 1);
          setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('.model-photo-second').fadeIn();
          }, 100);
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('.model-photo-second').fadeOut(() => {
          setSecondCurrentIndex(posts.length - 1);
          setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('.model-photo-second').fadeIn();
          }, 100);
        });
      }
    }
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.loc_hor_carousel_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("h5", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Paid Announcements")), posts && posts.length ? __jsx("div", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.photo_slider,
    style: posts.length === 1 ? {
      gridTemplateColumns: '1fr'
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, posts.length > 1 ? __jsx("span", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.photo_toggler_back,
    onClick: changePhotoBack,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, "<") : null, __jsx("div", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: "/modelProfile",
      query: {
        id: posts[firstCurrentIndex].id
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 100
    }
  }, __jsx("img", {
    src: posts[firstCurrentIndex].photo_horizontal,
    alt: posts[firstCurrentIndex].model_name,
    className: `model-photo ${_horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.main_photo}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.loc_slide_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.loc_slide_info_head,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 19
    }
  }, posts[firstCurrentIndex].model_name, " ", posts[firstCurrentIndex].second_name), __jsx("div", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slide_network,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 19
    }
  }, posts[firstCurrentIndex].status), __jsx("div", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slide_control,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: _assets_images_main_signs_favorite_yel_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "",
    onClick: e => {
      e.preventDefault();
      addToFavorites(posts[firstCurrentIndex].id);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: _assets_images_main_signs_crown_yel_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: _assets_images_main_signs_star_yel_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: _assets_images_main_signs_plane_yel_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slide_location,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "m-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }, posts[firstCurrentIndex].state.name, " / ", posts[firstCurrentIndex].city.name)), __jsx("div", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slide_verification,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.verification,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 19
    }
  }, posts[firstCurrentIndex].is_verify ? 'OTHER VIP VERIFIED' : null), __jsx("span", {
    className: `text-white ${_horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.status}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 19
    }
  }, "SPECIAL STATUS")))))), posts.length !== 1 ? __jsx("div", {
    className: `${_horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.second_slide} ${_horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slide}`,
    style: posts.length === 1 ? {
      display: 'none'
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: "/modelProfile",
      query: {
        id: posts[secondCurrentIndex].id
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 101
    }
  }, __jsx("img", {
    src: posts[secondCurrentIndex].photo_horizontal,
    alt: posts[secondCurrentIndex].model_name,
    className: `model-photo-second ${_horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.main_photo}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.loc_slide_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.loc_slide_info_head,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 19
    }
  }, posts[secondCurrentIndex].model_name, " ", posts[secondCurrentIndex].second_name), __jsx("div", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slide_network,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 19
    }
  }, posts[secondCurrentIndex].status), __jsx("div", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slide_control,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: _assets_images_main_signs_favorite_yel_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "",
    onClick: e => {
      e.preventDefault();
      addToFavorites(posts[secondCurrentIndex].id);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: _assets_images_main_signs_crown_yel_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: _assets_images_main_signs_star_yel_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: _assets_images_main_signs_plane_yel_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slide_location,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "m-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  }, posts[secondCurrentIndex].state.name, " / ", posts[secondCurrentIndex].city.name)), __jsx("div", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slide_verification,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.verification,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 19
    }
  }, posts[secondCurrentIndex].is_verify ? 'OTHER VIP VERIFIED' : null), __jsx("span", {
    className: `text-white ${_horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.status}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 19
    }
  }, "SPECIAL STATUS")))))) : null, posts.length > 1 ? __jsx("span", {
    className: _horizontal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.photo_toggler_forvard,
    onClick: changePhotoForvard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }, ">") : null) : __jsx("div", {
    className: "py-5 text-center h3 text-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }, "No posts..."));
}

/***/ }),

/***/ "./src/components/location-page/LocPageControl.jsx":
/*!*********************************************************!*\
  !*** ./src/components/location-page/LocPageControl.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocPageControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _control_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control.module.scss */ "./src/components/location-page/control.module.scss");
/* harmony import */ var _control_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_control_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_filter_ModelsFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models-filter/ModelsFilter */ "./src/components/models-filter/ModelsFilter.jsx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\location-page\\LocPageControl.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function LocPageControl({
  cities,
  availability,
  available_to,
  ethnicity,
  eyes,
  hair,
  affiliation,
  filterPosts
}) {
  const {
    0: currentCity,
    1: setCurrentCity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: showCities,
    1: setShowCities
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showFilter,
    1: setShowFilter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setCurrentCity(router.query.state);
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.loc_cities_list').hide(() => {
      setShowCities(false);
    });
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.filter_items_block').hide(() => {
      setShowFilter(true);
    });
    return () => {
      setCurrentCity('');
    };
  }, []);

  const slideCitiesList = () => {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.loc_cities_list').slideToggle(() => {
      setShowCities(!showCities);
    });
  };

  const slideFilter = () => {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.filter_items_block').slideToggle(() => {
      setShowFilter(!showFilter);
    });
  };

  const changeCity = (name, id) => {
    setCurrentCity(name);
    filterPosts({
      'city_id': id
    });
    slideCitiesList();
  };

  return __jsx("div", {
    className: `${_control_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loc_page_control} text-white`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _control_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loc_page_control_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: `${_control_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loc_page_control_header}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "ESCORTS ", currentCity && currentCity.length ? 'IN ' + currentCity.toUpperCase() : null), __jsx("div", {
    onClick: slideCitiesList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "CHANGE LOCATION")), __jsx("div", {
    className: `loc_cities_list ${_control_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loc_cities_list}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, cities && cities.length ? __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 38
    }
  }, cities.map((c, i) => __jsx("li", {
    onClick: e => changeCity(c.name, c.id),
    key: i,
    className: `${currentCity === c.name ? 'active_btn_blue' : ''} btn city-item`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 144
    }
  }, c.name)))) : __jsx("div", {
    className: "text-center h1 text-info py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 22
    }
  }, "No cities ...")), __jsx("div", {
    className: `${_control_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loc_page_filter_control}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("div", {
    onClick: slideFilter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "FILTER"), __jsx("input", {
    type: "text",
    placeholder: "filter",
    className: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: `filter_items_block ${_control_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_items_block}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
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
      lineNumber: 75,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/components/location-page/LocPageFoot.jsx":
/*!******************************************************!*\
  !*** ./src/components/location-page/LocPageFoot.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocPageFoot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foot_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foot.module.scss */ "./src/components/location-page/foot.module.scss");
/* harmony import */ var _foot_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_foot_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\location-page\\LocPageFoot.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function LocPageFoot({
  filterPosts
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _foot_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loc_footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: `text-white ${_foot_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loc_foot_btn}`,
    onClick: () => filterPosts({
      'state_id': router.query.id
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "SEE ALL PROFILES IN THE STATE"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/components/location-page/LocVertCarousel.jsx":
/*!**********************************************************!*\
  !*** ./src/components/location-page/LocVertCarousel.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocVertCarousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vertical_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertical.module.scss */ "./src/components/location-page/vertical.module.scss");
/* harmony import */ var _vertical_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vertical_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_page_EscortGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home-page/EscortGrid */ "./src/components/home-page/EscortGrid.jsx");
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\location-page\\LocVertCarousel.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function LocVertCarousel({
  posts,
  addToFavorites
}) {
  return __jsx("div", {
    className: _vertical_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loc_vert_carousel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _vertical_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loc_vert_carousel_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("h5", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "Paid Announcements 2")), __jsx(_home_page_EscortGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    posts: posts,
    addToFavorites: addToFavorites,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/location-page/control.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/location-page/control.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loc_page_control_content": "control_loc_page_control_content__3Iv40",
	"loc_page_control_header": "control_loc_page_control_header__tVsMx",
	"loc_page_filter_control": "control_loc_page_filter_control__6pl9P",
	"loc_cities_list": "control_loc_cities_list__1jKGm"
};


/***/ }),

/***/ "./src/components/location-page/foot.module.scss":
/*!*******************************************************!*\
  !*** ./src/components/location-page/foot.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loc_footer": "foot_loc_footer__1SZ0C",
	"loc_foot_btn": "foot_loc_foot_btn__3iu5Z"
};


/***/ }),

/***/ "./src/components/location-page/horizontal.module.scss":
/*!*************************************************************!*\
  !*** ./src/components/location-page/horizontal.module.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loc_hor_carousel_header": "horizontal_loc_hor_carousel_header__3Az19",
	"loc_slide_info": "horizontal_loc_slide_info__JfeCa",
	"loc_slide_info_head": "horizontal_loc_slide_info_head__1uDFp",
	"slide_control": "horizontal_slide_control__1CLZ2",
	"status": "horizontal_status__2-T8S",
	"verification": "horizontal_verification__3KnC0",
	"slide_network": "horizontal_slide_network__JdCey",
	"slide_location": "horizontal_slide_location__1dOAx",
	"slide_verification": "horizontal_slide_verification__3SJKP",
	"photo_slider": "horizontal_photo_slider__32TRV",
	"second_slide": "horizontal_second_slide__1rvSR",
	"slide": "horizontal_slide__3f_7e",
	"main_photo": "horizontal_main_photo__2ssMs",
	"photo_toggler_back": "horizontal_photo_toggler_back__1gB07",
	"photo_toggler_forvard": "horizontal_photo_toggler_forvard__2b6lR"
};


/***/ }),

/***/ "./src/components/location-page/vertical.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/location-page/vertical.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loc_vert_carousel_header": "vertical_loc_vert_carousel_header__KNciQ"
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
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\modal-window\\VerifiedWindow.jsx";
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
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\models-filter\\ModelsFilter.jsx";
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

/***/ "./src/pages/location.jsx":
/*!********************************!*\
  !*** ./src/pages/location.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home_page_Location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/home-page/Location */ "./src/components/home-page/Location.jsx");
/* harmony import */ var _components_home_page_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home-page/Search */ "./src/components/home-page/Search.jsx");
/* harmony import */ var _components_home_page_Categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home-page/Categories */ "./src/components/home-page/Categories.jsx");
/* harmony import */ var _components_location_page_LocPageControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/location-page/LocPageControl */ "./src/components/location-page/LocPageControl.jsx");
/* harmony import */ var _components_location_page_LocHorCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/location-page/LocHorCarousel */ "./src/components/location-page/LocHorCarousel.jsx");
/* harmony import */ var _components_location_page_LocVertCarousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/location-page/LocVertCarousel */ "./src/components/location-page/LocVertCarousel.jsx");
/* harmony import */ var _components_location_page_LocPageFoot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/location-page/LocPageFoot */ "./src/components/location-page/LocPageFoot.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/actions/actions */ "./src/redux/actions/actions.ts");
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\pages\\location.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function LocationPage(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    props.getCities(router.query.id);
    props.getAllPosts();
    props.getNewPosts();
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_components_home_page_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    states: props.states,
    filterPosts: props.filterPosts,
    getCities: props.getCities,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(_components_home_page_Search__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx(_components_home_page_Categories__WEBPACK_IMPORTED_MODULE_3__["default"], {
    categories: props.categories,
    newPosts: props.newPosts,
    filterPosts: props.filterPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx(_components_location_page_LocPageControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cities: props.cities,
    filterPosts: props.filterPosts,
    availability: props.availability,
    available_to: props.available_to,
    ethnicity: props.ethnicity,
    affiliation: props.affiliation,
    filterPosts: props.filterPosts,
    eyes: props.eyes,
    hair: props.hair,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(_components_location_page_LocHorCarousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    posts: props.posts,
    addToFavorites: props.addToFavorites,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx(_components_location_page_LocVertCarousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    posts: props.posts,
    addToFavorites: props.addToFavorites,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx(_components_location_page_LocPageFoot__WEBPACK_IMPORTED_MODULE_7__["default"], {
    filterPosts: props.filterPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }));
}

const mapStateToProps = state => {
  return {
    states: state.app.states,
    categories: state.app.categories,
    cities: state.app.cities,
    posts: state.app.posts,
    newPosts: state.app.newPosts,
    availability: state.app.availability,
    available_to: state.app.available_to,
    ethnicity: state.app.ethnicity,
    eyes: state.app.eyes,
    hair: state.app.hair,
    affiliation: state.app.affiliation
  };
};

const mapDispatchToProps = {
  getCities: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_10__["getCities"],
  getAllPosts: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_10__["getAllPosts"],
  getNewPosts: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_10__["getNewPosts"],
  filterPosts: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_10__["filterPosts"],
  addToFavorites: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_10__["addToFavorites"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(LocationPage));

/***/ }),

/***/ "./src/redux/actions/actions.ts":
/*!**************************************!*\
  !*** ./src/redux/actions/actions.ts ***!
  \**************************************/
/*! exports provided: createPost, showLoader, hideLoader, showAlert, hideAlert, fetchPosts, getAllPosts, getNewPosts, getLocationsInfo, getAppInfo, getCities, createSupportTask, getAllUsersTasks, selectPostsPage, getPostComments, createPostComment, filterPosts, reportPost, addToFavorites, addToFavoritesBusiness, getFavoritesBusiness, getFavoritesUser, getComplains, sortPosts */
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

/***/ }),

/***/ "./src/redux/actions/types.ts":
/*!************************************!*\
  !*** ./src/redux/actions/types.ts ***!
  \************************************/
/*! exports provided: TEST_CREATE_POST, TEST_FETCH_POST, TEST_REQUEST_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, GET_ALL_POSTS, GET_PAGES_NUMBER, GET_NEW_POSTS, GET_LOCAITONS_INFO, GET_CITIES, CREATE_SUPPORT_TASK, GET_ALL_USER_TASKS, GET_APP_INFO, GET_POST_COMMENTS, CREATE_POST_COMMENT, FILTER_POSTS, REPORT_POST, GET_FAVORITES, GET_COMPLAINS, SORT_POSTS, ADD_POST, REMOVE_POST, UPDATE_POST, SELECT_STATE, SELECT_CITY, SELECT_LIST_SORT, SELECT_LIST_FILTER, SELECT_CATEGORY, GET_ALL_SUPPORT_TASKS, EDIT_SUPPORT_TASKS, DELETE_SUPPORT_TASK */
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
const SORT_POSTS = 'SORT_POSTS'; // provider

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

/***/ 5:
/*!**************************************!*\
  !*** multi ./src/pages/location.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\projects\vibe\src\pages\location.jsx */"./src/pages/location.jsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9faGVscGVycy9Qcml2YXRlUm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19oZWxwZXJzL2F1dGgtaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9faGVscGVycy9mYWtlLWJhY2tlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19oZWxwZXJzL2hhbmRsZS1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX2hlbHBlcnMvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19oZWxwZXJzL3JvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9fc2VydmljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zZXJ2aWNlcy91c2VyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbi9ob3Jpem9udGFsL21vZGVsLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvY3Jvd24tcGluay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9jcm93bi15ZWwucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvZmF2b3JpdGUtcGluay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9mYXZvcml0ZS15ZWwucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvcGxhbmUtcGluay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9wbGFuZS15ZWwucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvc3Rhci1waW5rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3N0YXIteWVsLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvQ2F0ZWdvcmllcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL0VzY29ydEdyaWQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9Mb2NhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL05ld1Bvc3RzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvU2VhcmNoLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvY2F0ZWdvcmllcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvZXNjb3J0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9sb2NhdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2Uvc2VhcmNoLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvY2F0aW9uLXBhZ2UvTG9jSG9yQ2Fyb3VzZWwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvY2F0aW9uLXBhZ2UvTG9jUGFnZUNvbnRyb2wuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvY2F0aW9uLXBhZ2UvTG9jUGFnZUZvb3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvY2F0aW9uLXBhZ2UvTG9jVmVydENhcm91c2VsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2NhdGlvbi1wYWdlL2NvbnRyb2wubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9jYXRpb24tcGFnZS9mb290Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvY2F0aW9uLXBhZ2UvaG9yaXpvbnRhbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2NhdGlvbi1wYWdlL3ZlcnRpY2FsLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsLXdpbmRvdy9WZXJpZmllZFdpbmRvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWxzLWZpbHRlci9Nb2RlbHNGaWx0ZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGVscy1maWx0ZXIvZm9ybS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbG9jYXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlzdG9yeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpxdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91cmwiLCJfdXRpbHMiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJpc0xvY2FsIiwiaHJlZiIsInVybCIsInBhcnNlIiwib3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJob3N0IiwicHJvdG9jb2wiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdEZ1bmMiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJhcyIsInJlc3VsdCIsImZvcm1hdFVybCIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwib2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiTGluayIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJwIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwiZSIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlc29sdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbCIsImluZGV4T2YiLCJyZXBsYWNlIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiam9pbiIsIm9wdGlvbnMiLCJwYXRocyIsImNhdGNoIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwidHlwZSIsInByb2Nlc3MiLCJjbG9uZUVsZW1lbnQiLCJleGVjT25jZSIsIlByb3BUeXBlcyIsImV4YWN0IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJlbGVtZW50IiwicHJvcE5hbWUiLCJ2YWx1ZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIlJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJldmVudCIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwic2xpY2UiLCJtYXAiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJ1cmxfMSIsIm1pdHRfMSIsInV0aWxzXzEiLCJpc19keW5hbWljXzEiLCJyb3V0ZV9tYXRjaGVyXzEiLCJyb3V0ZV9yZWdleF8xIiwiYmFzZVBhdGgiLCJwYXRoIiwiZGVsQmFzZVBhdGgiLCJzdWJzdHIiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsInF1ZXJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJhdHRlbXB0cyIsImdldFJlc3BvbnNlIiwiZmV0Y2giLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsImlzU3NyIiwiYXNQYXRoIiwiX2JwcyIsIl9nZXRTdGF0aWNEYXRhIiwiUHJvbWlzZSIsIl9nZXRTZXJ2ZXJEYXRhIiwicm91dGUiLCJjb21wb25lbnRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJpc0R5bmFtaWNSb3V0ZSIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsIl9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCIsInVwZGF0ZSIsIm5ld0RhdGEiLCJub3RpZnkiLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsImNoYW5nZSIsIm1ldGhvZCIsIl9hcyIsInJlamVjdCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJ1cmxJc05ldyIsImFzUGF0aG5hbWUiLCJyb3V0ZVJlZ2V4IiwiZ2V0Um91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJnZXRSb3V0ZU1hdGNoZXIiLCJtaXNzaW5nUGFyYW1zIiwia2V5cyIsImdyb3VwcyIsImZpbHRlciIsInBhcmFtIiwiZ2V0Um91dGVJbmZvIiwicm91dGVJbmZvIiwiY2FuY2VsbGVkIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZmV0Y2hDb21wb25lbnQiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiX2dldERhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJoYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlRFU1RfUk9VVEUiLCJ0ZXN0IiwicmUiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiXyIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJyZXBlYXQiLCJlc2NhcGVSZWdleCIsInN0ciIsIm5vcm1hbGl6ZWRSb3V0ZSIsImVzY2FwZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCIkMSIsImlzQ2F0Y2hBbGwiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX2EiLCJwcm90b3R5cGUiLCJwYWdlUHJvcHMiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0IiwiU1AiLCJtZWFzdXJlIiwiUHJpdmF0ZVJvdXRlIiwiY29tcG9uZW50Iiwicm9sZXMiLCJyZXN0IiwiY3VycmVudFVzZXIiLCJhdXRoZW50aWNhdGlvblNlcnZpY2UiLCJjdXJyZW50VXNlclZhbHVlIiwiZnJvbSIsInJvbGUiLCJhdXRoSGVhZGVyIiwidG9rZW4iLCJBdXRob3JpemF0aW9uIiwiY29uZmlndXJlRmFrZUJhY2tlbmQiLCJ1c2VycyIsImlkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiUm9sZSIsIkFkbWluIiwic2Vjb25kX25hbWUiLCJlbWFpbCIsInBob25lIiwiUHJvdmlkZXIiLCJyZWFsRmV0Y2giLCJvcHRzIiwiaGVhZGVycyIsImlzTG9nZ2VkSW4iLCJzdGFydHNXaXRoIiwicm9sZVN0cmluZyIsInNldFRpbWVvdXQiLCJlbmRzV2l0aCIsIkpTT04iLCJ1c2VyIiwidSIsIlVzZXIiLCJtYXRjaCIsInVuYXV0aG9yaXNlZCIsInVybFBhcnRzIiwicGFyc2VJbnQiLCJmaW5kIiwieCIsInJlc3BvbnNlIiwidGV4dCIsInN0cmluZ2lmeSIsImhhbmRsZVJlc3BvbnNlIiwibG9nb3V0Iiwic3RhdHVzVGV4dCIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5IiwiY3VycmVudFVzZXJTdWJqZWN0IiwiQ29va2llcyIsImdldEpTT04iLCJsb2dpbiIsInJlZ2lzdHJhdGlvbkFkbWluIiwicmVnaXN0cmF0aW9uQ2xpZW50IiwicmVnaXN0cmF0aW9uUHJvdmlkZXIiLCJyZWdpc3RyYXRpb25BZ2VuY3kiLCJleHBpcmVzIiwicGFzc3dvcmRfY29uZmlybWF0aW9uIiwiY2xpZW50IiwiYWRtaW4iLCJwcm92aWRlciIsImFnZW5jeV9uYW1lIiwicHJvbWlzZSIsInJlbW92ZSIsInVzZXJTZXJ2aWNlIiwiZ2V0QWxsIiwiZ2V0QnlJZCIsImRlbGV0ZVVzZXIiLCJyZXF1ZXN0T3B0aW9ucyIsInJhdGluZyIsInBvc2l0aW9uIiwidGVsZWdyYW0iLCJ2aWJlciIsIndoYXRzYXBwIiwic2l0ZSIsImF2YXRhciIsIkNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwibmV3UG9zdHMiLCJmaWx0ZXJQb3N0cyIsImZpbHRlckNhdGVnb3J5Iiwic2V0RmlsdGVyQ2F0ZWdvcnkiLCJ1c2VTdGF0ZSIsImNoYW5nZUNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJzIiwiY2F0ZWdvcmllc19ibG9jayIsImNhdGVnb3JpZXNfdGl0bGUiLCJjYXRlZ29yaWVzX2NvbnRlbnQiLCJjYXRlZ29yaWVzX2NvbnRyb2wiLCJjIiwiaSIsInRvTG93ZXJDYXNlIiwiY2F0ZWdvcmllc19zdWJ0aXRsZSIsImNhdGVnb3JpZXNfY2Fyb3VzZWwiLCJFc2NvcnRHcmlkIiwicG9zdHMiLCJwYWdlc051bWJlciIsInNlbGVjdFBvc3RzUGFnZSIsImFkZFRvRmF2b3JpdGVzIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInBhZ2VzIiwic2V0UGFnZXMiLCJ1c2VFZmZlY3QiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJwb3N0IiwidmVydGljYWxfc2xpZGUiLCJ2ZXJ0aWNhbF9zbGlkZV9pbWFnZSIsInBob3RvX2hvcml6b250YWwiLCJtb2RlbF9uYW1lIiwibW9kZWxfcGhvdG9fZ3JpZCIsInZlcnRpY2FsX3NsaWRlX21vZGVsX2luZm8iLCJuZXR3b3JrX3N0YXR1cyIsInRleHRUcmFuc2Zvcm0iLCJzdW1tYXJ5IiwiY2FyZF9jb250cm9sIiwiZmF2IiwiY3Jvd24iLCJzdGFyIiwicGxhbmUiLCJ2ZXJpZmljYXRpb24iLCJ2ZXJpZmllZCIsInZpZXdfcHJvZmlsZSIsIkxvY2F0aW9uIiwic3RhdGVzIiwiZ2V0Q2l0aWVzIiwiY3VycmVudExvY2F0aW9uIiwic2V0Q3VycmVudExvY2F0aW9uIiwiY2hhbmdlTG9jYXRpb24iLCJzdGF0ZUlkIiwibG9jYXRpb25fd3JhcHBlciIsImxvY2F0b25fYmxvY2tfdGl0bGUiLCJsb2NhdGlvbl9ibG9ja19zZWxlY3QiLCJsb2NhdGlvbl9ibG9ja19saXN0IiwiU2ltcGxlU2xpZGVyIiwic2V0dGluZ3MiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcnJvd3MiLCJkb3RzIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiZHJhZ2dhYmxlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJpbml0aWFsU2xpZGUiLCJmYWRlIiwic2xpZGUiLCJwaG90b192ZXJ0aWNhbCIsIlNlYXJjaCIsInNlYXJjaF9ibG9jayIsInNlYXJjaF9ibG9ja19jb250ZW50Iiwic2VhcmNoX2lucHV0X2xhYmVsIiwic2VhcmNoX2lucHV0IiwiYWRkX3Bvc3RfYnRuIiwiTG9jSG9yQ2Fyb3VzZWwiLCJmaXJzdEN1cnJlbnRJbmRleCIsInNldEZpcnN0Q3VycmVudEluZGV4Iiwic2Vjb25kQ3VycmVudEluZGV4Iiwic2V0U2Vjb25kQ3VycmVudEluZGV4IiwiYXV0b1NsaWRlIiwiZGVsYXkiLCJzZXRJbnRlcnZhbCIsImNoYW5nZVBob3RvRm9ydmFyZCIsIiQiLCJmYWRlT3V0IiwiZmFkZUluIiwiY2hhbmdlUGhvdG9CYWNrIiwibG9jX2hvcl9jYXJvdXNlbF9oZWFkZXIiLCJwaG90b19zbGlkZXIiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwicGhvdG9fdG9nZ2xlcl9iYWNrIiwibWFpbl9waG90byIsImxvY19zbGlkZV9pbmZvIiwibG9jX3NsaWRlX2luZm9faGVhZCIsInNsaWRlX25ldHdvcmsiLCJzbGlkZV9jb250cm9sIiwic2xpZGVfbG9jYXRpb24iLCJjaXR5Iiwic2xpZGVfdmVyaWZpY2F0aW9uIiwiaXNfdmVyaWZ5Iiwic2Vjb25kX3NsaWRlIiwiZGlzcGxheSIsInBob3RvX3RvZ2dsZXJfZm9ydmFyZCIsIkxvY1BhZ2VDb250cm9sIiwiY2l0aWVzIiwiYXZhaWxhYmlsaXR5IiwiYXZhaWxhYmxlX3RvIiwiZXRobmljaXR5IiwiZXllcyIsImhhaXIiLCJhZmZpbGlhdGlvbiIsImN1cnJlbnRDaXR5Iiwic2V0Q3VycmVudENpdHkiLCJzaG93Q2l0aWVzIiwic2V0U2hvd0NpdGllcyIsInNob3dGaWx0ZXIiLCJzZXRTaG93RmlsdGVyIiwiaGlkZSIsInNsaWRlQ2l0aWVzTGlzdCIsInNsaWRlVG9nZ2xlIiwic2xpZGVGaWx0ZXIiLCJjaGFuZ2VDaXR5IiwibG9jX3BhZ2VfY29udHJvbCIsImxvY19wYWdlX2NvbnRyb2xfY29udGVudCIsImxvY19wYWdlX2NvbnRyb2xfaGVhZGVyIiwibG9jX2NpdGllc19saXN0IiwibG9jX3BhZ2VfZmlsdGVyX2NvbnRyb2wiLCJmaWx0ZXJfaXRlbXNfYmxvY2siLCJMb2NQYWdlRm9vdCIsImxvY19mb290ZXIiLCJsb2NfZm9vdF9idG4iLCJMb2NWZXJ0Q2Fyb3VzZWwiLCJsb2NfdmVydF9jYXJvdXNlbCIsImxvY192ZXJ0X2Nhcm91c2VsX2hlYWRlciIsIlZlcmlmaWVkV2luZG93IiwiYnV0dG9uTGFiZWwiLCJjbGFzc05hbWUiLCJtb2RhbCIsInNldE1vZGFsIiwidG9nZ2xlIiwiZm9udEZhbWlseSIsIk1vZGFsIiwiaXNPcGVuIiwiYXV0b0ZvY3VzIiwiY2VudGVyZWQiLCJzaXplIiwiZnVuYyIsImxhYmVsbGVkQnkiLCJrZXlib2FyZCIsImJhY2tkcm9wIiwib25lT2YiLCJzY3JvbGxhYmxlIiwib25FbnRlciIsIm9uRXhpdCIsIm9uT3BlbmVkIiwib25DbG9zZWQiLCJ3cmFwQ2xhc3NOYW1lIiwibW9kYWxDbGFzc05hbWUiLCJiYWNrZHJvcENsYXNzTmFtZSIsImNvbnRlbnRDbGFzc05hbWUiLCJjc3NNb2R1bGUiLCJ6SW5kZXgiLCJudW1iZXIiLCJ1bm1vdW50T25DbG9zZSIsInJldHVybkZvY3VzQWZ0ZXJDbG9zZSIsIk1vZGVsc0ZpbHRlciIsInNleCIsInNldFNleCIsImFnZUZyb20iLCJzZXRBZ2VGcm9tIiwiYWdlVG8iLCJzZXRBZ2VUbyIsInN0YXRlRXRobmljaXR5Iiwic2V0RXRobmljaXR5Iiwic3RhdGVIYWlyIiwic2V0SGFpciIsInN0YXRlRXllIiwic2V0RXllIiwic3RhdGVBZmZpbGlhdGlvbiIsInNldEFmZmlsaWF0aW9uIiwic3RhdGVBdmFpbGFibGVUbyIsInNldEF2YWlsYWJsZVRvIiwic3RhdGVBdmFpbGFiaWxpdHkiLCJzZXRBdmFpbGFiaWxpdHkiLCJhcHBseUZpbHRlciIsImZpbHRlckl0ZW1zIiwiaXRlbSIsInRvU3RyaW5nIiwiZmlsdGVyX2Zvcm0iLCJzZXhfYmxvY2siLCJsYWJlbCIsImNoZWNrbWFyayIsImFnZV9ibG9jayIsImV0aG5pY2l0eV9ibG9jayIsImhhaXJfYmxvY2siLCJoIiwiZXllX2Jsb2NrIiwiYWZmaWxpYXRpb25fYmxvY2siLCJhIiwiYXZhaWxhYmxlVG9fYmxvY2siLCJjaGVja2VkIiwiY2hlY2tzaWduIiwiYXZhaWxhYmlsaXR5X2Jsb2NrIiwiYnRuX3N1Ym1pdCIsIkxvY2F0aW9uUGFnZSIsImdldEFsbFBvc3RzIiwiZ2V0TmV3UG9zdHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhcHAiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0IiwiY3JlYXRlUG9zdCIsIlRFU1RfQ1JFQVRFX1BPU1QiLCJwYXlsb2FkIiwic2hvd0xvYWRlciIsIlNIT1dfTE9BREVSIiwiaGlkZUxvYWRlciIsIkhJREVfTE9BREVSIiwic2hvd0FsZXJ0IiwiZGlzcGF0Y2giLCJTSE9XX0FMRVJUIiwiaGlkZUFsZXJ0IiwiSElERV9BTEVSVCIsImZldGNoUG9zdHMiLCJURVNUX1JFUVVFU1RfUE9TVFMiLCJHRVRfUEFHRVNfTlVNQkVSIiwibGFzdF9wYWdlIiwiR0VUX0FMTF9QT1NUUyIsIkdFVF9ORVdfUE9TVFMiLCJnZXRMb2NhdGlvbnNJbmZvIiwiR0VUX0xPQ0FJVE9OU19JTkZPIiwiZ2V0QXBwSW5mbyIsIkdFVF9BUFBfSU5GTyIsIkdFVF9DSVRJRVMiLCJjcmVhdGVTdXBwb3J0VGFzayIsInRhc2siLCJ0b2tlbl90eXBlIiwibG9nIiwiQ1JFQVRFX1NVUFBPUlRfVEFTSyIsImdldEFsbFVzZXJzVGFza3MiLCJHRVRfQUxMX1VTRVJfVEFTS1MiLCJnZXRQb3N0Q29tbWVudHMiLCJwb3N0SWQiLCJHRVRfUE9TVF9DT01NRU5UUyIsImNyZWF0ZVBvc3RDb21tZW50IiwiY29tbWVudCIsIkNSRUFURV9QT1NUX0NPTU1FTlQiLCJmaWx0ZXJJdGVtc09iamVjdCIsIkZJTFRFUl9QT1NUUyIsInJlcG9ydFBvc3QiLCJpc19mYXZvcml0ZSIsImFkZFRvRmF2b3JpdGVzQnVzaW5lc3MiLCJnZXRGYXZvcml0ZXNCdXNpbmVzcyIsIkdFVF9GQVZPUklURVMiLCJnZXRGYXZvcml0ZXNVc2VyIiwiZ2V0Q29tcGxhaW5zIiwidXNlcklkIiwiR0VUX0NPTVBMQUlOUyIsInNvcnRQb3N0cyIsInNvcnRUeXBlIiwiU09SVF9QT1NUUyIsIlRFU1RfRkVUQ0hfUE9TVCIsIlJFUE9SVF9QT1NUIiwiQUREX1BPU1QiLCJSRU1PVkVfUE9TVCIsIlVQREFURV9QT1NUIiwiU0VMRUNUX1NUQVRFIiwiU0VMRUNUX0NJVFkiLCJTRUxFQ1RfTElTVF9TT1JUIiwiU0VMRUNUX0xJU1RfRklMVEVSIiwiU0VMRUNUX0NBVEVHT1JZIiwiR0VUX0FMTF9TVVBQT1JUX1RBU0tTIiwiRURJVF9TVVBQT1JUX1RBU0tTIiwiREVMRVRFX1NVUFBPUlRfVEFTSyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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dUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxvY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IHsgYXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vX3NlcnZpY2VzJztcclxuXHJcbmV4cG9ydCBjb25zdCBQcml2YXRlUm91dGUgPSAoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgcm9sZXMsIC4uLnJlc3QgfSkgPT4gKFxyXG4gIDxSb3V0ZSB7Li4ucmVzdH0gcmVuZGVyPXtwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xyXG4gICAgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgICAvLyBub3QgbG9nZ2VkIGluIHNvIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2Ugd2l0aCB0aGUgcmV0dXJuIHVybFxyXG4gICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXt7IHBhdGhuYW1lOiAnL2xvZ2luJywgc3RhdGU6IHsgZnJvbTogcHJvcHMubG9jYXRpb24gfSB9fSAvPlxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIGlmIHJvdXRlIGlzIHJlc3RyaWN0ZWQgYnkgcm9sZVxyXG4gICAgaWYgKHJvbGVzICYmIHJvbGVzLmluZGV4T2YoY3VycmVudFVzZXIucm9sZSkgPT09IC0xKSB7XHJcbiAgICAgIC8vIHJvbGUgbm90IGF1dGhvcmlzZWQgc28gcmVkaXJlY3QgdG8gaG9tZSBwYWdlXHJcbiAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89e3sgcGF0aG5hbWU6ICcvJyB9fSAvPlxyXG4gICAgfVxyXG5cclxuICAgIC8vIGF1dGhvcmlzZWQgc28gcmV0dXJuIGNvbXBvbmVudFxyXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxyXG4gIH19IC8+XHJcbikiLCJpbXBvcnQgeyBhdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhIZWFkZXIoKSB7XHJcbiAgLy8gcmV0dXJuIGF1dGhvcml6YXRpb24gaGVhZGVyIHdpdGggand0IHRva2VuXHJcbiAgY29uc3QgY3VycmVudFVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcclxuICBpZiAoY3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIudG9rZW4pIHtcclxuICAgIHJldHVybiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjdXJyZW50VXNlci50b2tlbn1gIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUm9sZSB9IGZyb20gJy4vJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZUZha2VCYWNrZW5kKCkge1xyXG4gIGxldCB1c2VycyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIHVzZXJuYW1lOiAnYWRtaW4nLFxyXG4gICAgICBwYXNzd29yZDogJ2FkbWluJyxcclxuICAgICAgZmlyc3ROYW1lOiAnQWRtaW4nLFxyXG4gICAgICBsYXN0TmFtZTogJ0FkbWluJyxcclxuICAgICAgcm9sZTogUm9sZS5BZG1pbixcclxuICAgICAgbmFtZTogXCJBZG1pblwiLFxyXG4gICAgICBzZWNvbmRfbmFtZTogbnVsbCxcclxuICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgIHBob25lOiBcIjM4MDk1MzQ0NDM0OFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIHVzZXJuYW1lOiAndXNlcicsXHJcbiAgICAgIHBhc3N3b3JkOiAndXNlcicsXHJcbiAgICAgIGZpcnN0TmFtZTogJ0l2YW4nLFxyXG4gICAgICBsYXN0TmFtZTogJ1VzZXInLFxyXG4gICAgICByb2xlOiBSb2xlLkFkbWluLFxyXG4gICAgICBuYW1lOiBcIlVzZXJcIixcclxuICAgICAgc2Vjb25kX25hbWU6IG51bGwsXHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBwaG9uZTogXCIzODA5NTM0NDQzNDhcIixcclxuICAgIH0sXHJcbiAgICAsXHJcbiAgICB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICB1c2VybmFtZTogJ3BybycsXHJcbiAgICAgIHBhc3N3b3JkOiAncHJvJyxcclxuICAgICAgZmlyc3ROYW1lOiAnTW9kZWwnLFxyXG4gICAgICBsYXN0TmFtZTogJ1Byb3ZpZGVyJyxcclxuICAgICAgcm9sZTogUm9sZS5Qcm92aWRlcixcclxuICAgICAgbmFtZTogXCJNb2RlbFwiLFxyXG4gICAgICBzZWNvbmRfbmFtZTogbnVsbCxcclxuICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgIHBob25lOiBcIjM4MDk1MzQ0NDM0OFwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgbGV0IHJlYWxGZXRjaCA9IHdpbmRvdy5mZXRjaDtcclxuICB3aW5kb3cuZmV0Y2ggPSBmdW5jdGlvbiAodXJsLCBvcHRzKSB7XHJcbiAgICBjb25zdCBhdXRoSGVhZGVyID0gb3B0cy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ107XHJcbiAgICBjb25zdCBpc0xvZ2dlZEluID0gYXV0aEhlYWRlciAmJiBhdXRoSGVhZGVyLnN0YXJ0c1dpdGgoJ0JlYXJlciBmYWtlLWp3dC10b2tlbicpO1xyXG4gICAgY29uc3Qgcm9sZVN0cmluZyA9IGlzTG9nZ2VkSW4gJiYgYXV0aEhlYWRlci5zcGxpdCgnLicpWzFdO1xyXG4gICAgY29uc3Qgcm9sZSA9IHJvbGVTdHJpbmcgPyBSb2xlW3JvbGVTdHJpbmddIDogbnVsbDtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAvLyB3cmFwIGluIHRpbWVvdXQgdG8gc2ltdWxhdGUgc2VydmVyIGFwaSBjYWxsXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vIGF1dGhlbnRpY2F0ZSAtIHB1YmxpY1xyXG4gICAgICAgIGlmICh1cmwuZW5kc1dpdGgoJy9hcGkvYXV0aC9sb2dpbicpICYmIG9wdHMubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IEpTT04ucGFyc2Uob3B0cy5ib2R5KTtcclxuICAgICAgICAgIC8vIGNvbnN0IHVzZXIgPSB1c2Vycy5maW5kKHggPT4geC51c2VybmFtZSA9PT0gcGFyYW1zLnVzZXJuYW1lICYmIHgucGFzc3dvcmQgPT09IHBhcmFtcy5wYXNzd29yZCk7XHJcbiAgICAgICAgICBsZXQgdXNlcjtcclxuICAgICAgICAgIHVzZXJzLmZvckVhY2godSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1LnBhc3N3b3JkID09PSBwYXJhbXMucGFzc3dvcmQgJiYgdS51c2VybmFtZSA9PT0gcGFyYW1zLnVzZXJuYW1lKSByZXR1cm4gdXNlciA9IHU7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gZXJyb3IoJ1VzZXJuYW1lIG9yIHBhc3N3b3JkIGlzIGluY29ycmVjdCcpO1xyXG4gICAgICAgICAgcmV0dXJuIG9rKHtcclxuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IHVzZXIuZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogdXNlci5sYXN0TmFtZSxcclxuICAgICAgICAgICAgcm9sZTogdXNlci5yb2xlLFxyXG4gICAgICAgICAgICB0b2tlbjogYGZha2Utand0LXRva2VuLiR7dXNlci5yb2xlfWAsXHJcbiAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICAgICAgc2Vjb25kX25hbWU6IHVzZXIuc2Vjb25kX25hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICBwaG9uZTogdXNlci5waG9uZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXJsLmVuZHNXaXRoKCcvYXBpL2F1dGgvcmVnaXN0ZXInKSAmJiBvcHRzLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSBKU09OLnBhcnNlKG9wdHMuYm9keSk7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgICAgICBpZDogdXNlcnMubGVuZ3RoICsgMSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHBhcmFtcy51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhcmFtcy5wYXNzd29yZCxcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiAnTm9ybWFsJyxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IFJvbGUuVXNlcixcclxuICAgICAgICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgICAgICAgc2Vjb25kX25hbWU6IG51bGwsXHJcbiAgICAgICAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICAgICAgICBwaG9uZTogbnVsbFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHVzZXJzLnB1c2godXNlcik7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIG9rKHtcclxuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IHVzZXIuZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogdXNlci5sYXN0TmFtZSxcclxuICAgICAgICAgICAgcm9sZTogdXNlci5yb2xlLFxyXG4gICAgICAgICAgICB0b2tlbjogYGZha2Utand0LXRva2VuLiR7dXNlci5yb2xlfWAsXHJcbiAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICAgICAgc2Vjb25kX25hbWU6IHVzZXIuc2Vjb25kX25hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICBwaG9uZTogdXNlci5waG9uZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnZXQgdXNlciBieSBpZCAtIGFkbWluIG9yIHVzZXIgKHVzZXIgY2FuIG9ubHkgYWNjZXNzIHRoZWlyIG93biByZWNvcmQpXHJcbiAgICAgICAgaWYgKHVybC5tYXRjaCgvXFwvdXNlcnNcXC9cXGQrJC8pICYmIG9wdHMubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgICAgaWYgKCFpc0xvZ2dlZEluKSByZXR1cm4gdW5hdXRob3Jpc2VkKCk7XHJcblxyXG4gICAgICAgICAgLy8gZ2V0IGlkIGZyb20gcmVxdWVzdCB1cmxcclxuICAgICAgICAgIGxldCB1cmxQYXJ0cyA9IHVybC5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgbGV0IGlkID0gcGFyc2VJbnQodXJsUGFydHNbdXJsUGFydHMubGVuZ3RoIC0gMV0pO1xyXG5cclxuICAgICAgICAgIC8vIG9ubHkgYWxsb3cgbm9ybWFsIHVzZXJzIGFjY2VzcyB0byB0aGVpciBvd24gcmVjb3JkXHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJzLmZpbmQoeCA9PiB4LnJvbGUgPT09IHJvbGUpO1xyXG4gICAgICAgICAgaWYgKGlkICE9PSBjdXJyZW50VXNlci5pZCAmJiByb2xlICE9PSBSb2xlLkFkbWluKSByZXR1cm4gdW5hdXRob3Jpc2VkKCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQoeCA9PiB4LmlkID09PSBpZCk7XHJcbiAgICAgICAgICByZXR1cm4gb2sodXNlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnZXQgYWxsIHVzZXJzIC0gYWRtaW4gb25seVxyXG4gICAgICAgIGlmICh1cmwuZW5kc1dpdGgoJy91c2VycycpICYmIG9wdHMubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgICAgaWYgKHJvbGUgIT09IFJvbGUuQWRtaW4pIHJldHVybiB1bmF1dGhvcmlzZWQoKTtcclxuICAgICAgICAgIHJldHVybiBvayh1c2Vycyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwYXNzIHRocm91Z2ggYW55IHJlcXVlc3RzIG5vdCBoYW5kbGVkIGFib3ZlXHJcbiAgICAgICAgcmVhbEZldGNoKHVybCwgb3B0cykudGhlbihyZXNwb25zZSA9PiByZXNvbHZlKHJlc3BvbnNlKSk7XHJcblxyXG4gICAgICAgIC8vIHByaXZhdGUgaGVscGVyIGZ1bmN0aW9uc1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvayhib2R5KSB7XHJcbiAgICAgICAgICByZXNvbHZlKHsgb2s6IHRydWUsIHRleHQ6ICgpID0+IFByb21pc2UucmVzb2x2ZShKU09OLnN0cmluZ2lmeShib2R5KSkgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHVuYXV0aG9yaXNlZCgpIHtcclxuICAgICAgICAgIHJlc29sdmUoeyBzdGF0dXM6IDQwMSwgdGV4dDogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ1VuYXV0aG9yaXNlZCcgfSkpIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XHJcbiAgICAgICAgICByZXNvbHZlKHsgc3RhdHVzOiA0MDAsIHRleHQ6ICgpID0+IFByb21pc2UucmVzb2x2ZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2UgfSkpIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICByZXR1cm4gcmVzcG9uc2UudGV4dCgpLnRoZW4odGV4dCA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gdGV4dCAmJiBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBpZiAoWzQwMSwgNDAzXS5pbmRleE9mKHJlc3BvbnNlLnN0YXR1cykgIT09IC0xKSB7XHJcbiAgICAgICAgLy8gYXV0byBsb2dvdXQgaWYgNDAxIFVuYXV0aG9yaXplZCBvciA0MDMgRm9yYmlkZGVuIHJlc3BvbnNlIHJldHVybmVkIGZyb20gYXBpXHJcbiAgICAgICAgYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGVycm9yID0gKGRhdGEgJiYgZGF0YS5tZXNzYWdlKSB8fCByZXNwb25zZS5zdGF0dXNUZXh0O1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcblxyXG5sZXQgaGlzdG9yeVxyXG5cclxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAvLyBjb25zdCBjcmVhdGVCcm93c2VySGlzdG9yeSA9IHJlcXVpcmUoJ2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnknKS5kZWZhdWx0XHJcblxyXG4gIGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpXHJcbn1cclxuXHJcbmV4cG9ydCB7IGhpc3RvcnkgfTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9Qcml2YXRlUm91dGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2F1dGgtaGVhZGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9mYWtlLWJhY2tlbmQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2hhbmRsZS1yZXNwb25zZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaGlzdG9yeSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcm9sZSc7XHJcbiIsImV4cG9ydCBjb25zdCBSb2xlID0ge1xyXG4gIEFkbWluOiAnQWRtaW4nLFxyXG4gIFVzZXI6ICdVc2VyJyxcclxuICBQcm92aWRlcjogJ1Byb3ZpZGVyJ1xyXG59XHJcbiIsImltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IHsgaGFuZGxlUmVzcG9uc2UgfSBmcm9tIFwiLi4vX2hlbHBlcnNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmxldCBjdXJyZW50VXNlclN1YmplY3QgPSBDb29raWVzLmdldEpTT04oXCJjdXJyZW50VXNlclwiKVxyXG4gID8gQ29va2llcy5nZXRKU09OKFwiY3VycmVudFVzZXJcIilcclxuICA6IHt9O1xyXG5cclxuY29uc3QgdGFyZ2V0ID0gYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGlgO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0aW9uU2VydmljZSA9IHtcclxuICBsb2dpbixcclxuICBsb2dvdXQsXHJcbiAgcmVnaXN0cmF0aW9uQWRtaW4sXHJcbiAgcmVnaXN0cmF0aW9uQ2xpZW50LFxyXG4gIHJlZ2lzdHJhdGlvblByb3ZpZGVyLFxyXG4gIHJlZ2lzdHJhdGlvbkFnZW5jeSxcclxuICBjdXJyZW50VXNlcjogY3VycmVudFVzZXJTdWJqZWN0LFxyXG4gIGdldCBjdXJyZW50VXNlclZhbHVlKCkge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRVc2VyU3ViamVjdDtcclxuICB9LFxyXG59O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKGAke3RhcmdldH0vbG9naW5gLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXHJcbiAgfSlcclxuICAgIC50aGVuKGhhbmRsZVJlc3BvbnNlKVxyXG4gICAgLnRoZW4oKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIudG9rZW4pIHtcclxuICAgICAgICBDb29raWVzLnNldChcImN1cnJlbnRVc2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpLCB7IGV4cGlyZXM6IDEgfSk7XHJcbiAgICAgICAgY3VycmVudFVzZXJTdWJqZWN0ID0gdXNlcjtcclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSkpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiByZWdpc3RyYXRpb25DbGllbnQoXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIHBhc3N3b3JkOiBzdHJpbmcsXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwYXNzd29yZF9jb25maXJtYXRpb246IHN0cmluZ1xyXG4pOiBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9jbGllbnQvcmVnaXN0ZXJgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcclxuICAgIH0pLFxyXG4gIH0pXHJcbiAgICAudGhlbihoYW5kbGVSZXNwb25zZSlcclxuICAgIC50aGVuKChjbGllbnQpID0+IHtcclxuICAgICAgQ29va2llcy5zZXQoXCJjdXJyZW50VXNlclwiLCBKU09OLnN0cmluZ2lmeShjbGllbnQpKTtcclxuICAgICAgY3VycmVudFVzZXJTdWJqZWN0ID0gY2xpZW50O1xyXG4gICAgICByZXR1cm4gY2xpZW50O1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgbG9naW4oZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBSb3V0ZXIucHVzaChcIi91c2VyQ2FiaW5ldFwiKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkFkbWluKFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBwYXNzd29yZDogc3RyaW5nLFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBzdHJpbmdcclxuKTogUHJvbWlzZTxhbnk+IHtcclxuICByZXR1cm4gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9hZG1pbi9yZWdpc3RlcmAsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uLFxyXG4gICAgfSksXHJcbiAgfSlcclxuICAgIC50aGVuKGhhbmRsZVJlc3BvbnNlKVxyXG4gICAgLnRoZW4oKGFkbWluKSA9PiB7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiY3VycmVudFVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoYWRtaW4pKTtcclxuICAgICAgY3VycmVudFVzZXJTdWJqZWN0ID0gYWRtaW47XHJcbiAgICAgIHJldHVybiBhZG1pbjtcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBsb2dpbihlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvblByb3ZpZGVyKFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBwYXNzd29yZDogc3RyaW5nLFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBzdHJpbmcsXHJcbiAgcGhvbmU6IHN0cmluZyB8IG51bWJlclxyXG4pOiBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2luZGl2aWR1YWwvcmVnaXN0ZXJgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcclxuICAgICAgcGhvbmVcclxuICAgIH0pLFxyXG4gIH0pXHJcbiAgICAudGhlbihoYW5kbGVSZXNwb25zZSlcclxuICAgIC50aGVuKChwcm92aWRlcikgPT4ge1xyXG4gICAgICBDb29raWVzLnNldChcImN1cnJlbnRVc2VyXCIsIEpTT04uc3RyaW5naWZ5KHByb3ZpZGVyLnVzZXIpKTtcclxuICAgICAgY3VycmVudFVzZXJTdWJqZWN0ID0gcHJvdmlkZXI7XHJcbiAgICAgIHJldHVybiBwcm92aWRlcjtcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBsb2dpbihlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IFJvdXRlci5wdXNoKFwiL21vZGVsQ2FiaW5ldFwiKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkFnZW5jeShcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgcGFzc3dvcmQ6IHN0cmluZyxcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogc3RyaW5nLFxyXG4gIHBob25lOiBzdHJpbmcgfCBudW1iZXIsXHJcbiAgYWdlbmN5X25hbWU6IHN0cmluZ1xyXG4pOiBQcm9taXNlPGFueT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9hZ2VuY3kvcmVnaXN0ZXJgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcclxuICAgICAgcGhvbmUsXHJcbiAgICAgIGFnZW5jeV9uYW1lXHJcbiAgICB9KSxcclxuICB9KTtcclxuICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gIHByb21pc2UudGhlbihwcm92aWRlciA9PiB7XHJcbiAgICBDb29raWVzLnNldChcImN1cnJlbnRVc2VyXCIsIEpTT04uc3RyaW5naWZ5KHByb3ZpZGVyKSk7XHJcbiAgICBjdXJyZW50VXNlclN1YmplY3QgPSBwcm92aWRlcjtcclxuICAgIHJldHVybiBwcm92aWRlcjtcclxuICB9KS50aGVuKCgpID0+IGxvZ2luKGVtYWlsLCBwYXNzd29yZCkpXHJcbiAgICAudGhlbigoKSA9PiBSb3V0ZXIucHVzaChcIi9tb2RlbENhYmluZXRcIikpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHtcclxuICBDb29raWVzLnJlbW92ZShcImN1cnJlbnRVc2VyXCIpO1xyXG4gIHJldHVybiBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2xvZ291dGAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gUm91dGVyLnB1c2goJy8nKSlcclxuICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSkpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcbiIsImltcG9ydCB7IGF1dGhIZWFkZXIsIGhhbmRsZVJlc3BvbnNlIH0gZnJvbSAnLi4vX2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJTZXJ2aWNlID0ge1xyXG4gIGdldEFsbCxcclxuICBnZXRCeUlkLFxyXG4gIHVwZGF0ZSxcclxuICBkZWxldGVVc2VyXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRBbGwoKSB7XHJcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9O1xyXG4gIHJldHVybiBmZXRjaChgL3VzZXJzYCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oaGFuZGxlUmVzcG9uc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCeUlkKGlkKSB7XHJcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9O1xyXG4gIHJldHVybiBmZXRjaChgL3VzZXJzLyR7aWR9YCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oaGFuZGxlUmVzcG9uc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUoaWQsIG5hbWUsIHNlY29uZF9uYW1lLCBlbWFpbCwgcGhvbmUsIHJhdGluZywgcG9zaXRpb24sIHRlbGVncmFtLCB2aWJlciwgd2hhdHNhcHAsIHNpdGUsIGF2YXRhcikge1xyXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiBhdXRoSGVhZGVyKCksXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHNlY29uZF9uYW1lLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGhvbmUsXHJcbiAgICAgIHJhdGluZyxcclxuICAgICAgcG9zaXRpb24sXHJcbiAgICAgIHRlbGVncmFtLFxyXG4gICAgICB2aWJlcixcclxuICAgICAgd2hhdHNhcHAsXHJcbiAgICAgIHNpdGUsXHJcbiAgICAgIGF2YXRhclxyXG4gICAgfSlcclxuICB9O1xyXG4gIHJldHVybiBmZXRjaChgL2FwaS9hdXRoL3VzZXIvdXBkYXRlLyR7aWR9YCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oaGFuZGxlUmVzcG9uc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVVc2VyKGlkKSB7XHJcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgaGVhZGVyczogYXV0aEhlYWRlcigpXHJcbiAgfTtcclxuICByZXR1cm4gZmV0Y2goYC9hcGkvYXV0aC91c2VyL2Rlc3Ryb3kvJHtpZH1gLCByZXF1ZXN0T3B0aW9ucykudGhlbihoYW5kbGVSZXNwb25zZSk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21vZGVsLTEtYzNmYTQxOGVlYjE4OGEzMTBhOGFiYjgyNDhlZWU3MmYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVENBTUFBQUNuVXQySEFBQUFBWE5TUjBJQjJja3Nmd0FBQUVWUVRGUkZBQUFBNTNpdjVIZXg1SGV4NUhpeTVIZXg1SFd2NUhleDVIZXgzM0N2NUhleDQzZXg1SGF5NUhpdzQzZXc1bmF6NUhpeDVIaXg1SGV3NUhleDVYYXg1SGV5NDNpdnMxRHRyUUFBQUJkMFVrNVRBQ0RQNzJEZk1KRC9FUEN3Y09DdlVNQ2duOUIvdjBENityN1FBQUFBcFVsRVFWUjRuSDJRNlJMRElBaUVNUjVkTmZGb2p2ZC8xSUttamY3cHp1amdKOGdpa1VndDJoQVpiUjA5ZWdId0ZJQTR3QlVJUk5zUEdwczgrUWd1enlnY3BpVkx6U3FwVlI2cHJVaExEU2RWampnc0RXN2tJdDVFTzVBZGQ1UHJ5QmE4cFBLNWlnVmxlRW1yeUlEUDJ2TEdGNlgzeHlUVG9BOFQ5TjFxSFZtOTU4a2p6TjhwQS9iU0pkUCtrVHJTS1g1Z3ozU29HMjdqbTdZek4vdnMvM3pOOENMNkFJcEVDTmVvb0JIMUFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVRDQU1BQUFDblV0MkhBQUFBQVhOU1IwSUIyY2tzZndBQUFFVlFURlJGQUFBQS84Y0EvOFlBLzhZQS84Y0EvOFlBLzhVQS84WUEvOFlBLzc4QS84WUEvOFlBLzhZQS84WUEvOFlBLzhZQS84WUEvOFlBLzhVQS84Y0EvOGNBLzhZQS84Y0FiM2ljZVFBQUFCZDBVazVUQUNEUDcyRGZNSkQvRVBDd2NPQ3ZVTUNnbjlCL3YwRDYrcjdRQUFBQXBVbEVRVlI0bkgyUTZSTERJQWlFTVI1ZE5mRm9qdmQvMUlLbWpmN3B6dWpnSjhnaWtVZ3QyaEFaYlIwOWVnSHdGSUE0d0JVSVJOc1BHcHM4K1FndXp5Z2NwaVZMelNxcFZSNnByVWhMRFNkVmpqZ3NEVzdrSXQ1RU81QWRkNVByeUJhOHBQSzVpZ1ZsZUVtcnlJRFAydkxHRjZYM3h5VFRvQThUOU4xcUhWbTk1OGtqek44cEEvYlNKZFAra1RyU0tYNWd6M1NvRzI3am03WXpOL3ZzLzN6TjhDTDZBSXBFQ05lb29CSDFBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCWUFBQUFUQ0FNQUFBQ2pwdzI2QUFBQUFYTlNSMElCMmNrc2Z3QUFBRHhRVEZSRkFBQUEzM0N2NUhleDVIZXg1SGV4NUhleDVYYXg1SGV5NUhleDVIV3Y1SGV4NUhpeTVIaXg0M2V4NUhleDVuYXo0M2l2NUhleDQzaXg1SGl3ZkVMbjJBQUFBQlIwVWs1VEFCQ1AzLy9QZjcvdk1OQmdvTER3VUVDUWdPQ1dFOHFzQUFBQWVFbEVRVlI0bkhXUVVRNkVJQXdGMzlzdFdoU1IxZnZmVlZEVU5kVDVta3hvQ1FEZzV5dXVJekxzZXUwUDlTb0Y5WmU2ckJqa1FFbXQ2b0JSVGtLNGRNUWtCaE9pbFJWV0ZiRlB4N2ZkczVVVEVOcjZLODlzK29LZCtYSHRtbERoMzhCQzNLUTZFRDBlY1AreGdVRGIyMXI2YXRTOFA5MitBZk11Qmlza3lQa0NBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCWUFBQUFUQ0FNQUFBQ2pwdzI2QUFBQUFYTlNSMElCMmNrc2Z3QUFBRHhRVEZSRkFBQUEvNzhBLzhZQS84WUEvOFlBLzhZQS84Y0EvOFlBLzhZQS84VUEvOGNBLzhjQS84WUEvOFlBLzhZQS84WUEvOGNBLzhZQS84VUEvOFlBdVNLSkx3QUFBQlIwVWs1VEFCQ1AzLy9QZjcvdk1OQmdvTER3VUVDUWdPQ1dFOHFzQUFBQWVFbEVRVlI0bkhXUVVRNkVJQXdGMzlzdFdoU1IxZnZmVlZEVU5kVDVta3hvQ1FEZzV5dXVJekxzZXUwUDlTb0Y5WmU2ckJqa1FFbXQ2b0JSVGtLNGRNUWtCaE9pbFJWV0ZiRlB4N2ZkczVVVEVOcjZLODlzK29LZCtYSHRtbERoMzhCQzNLUTZFRDBlY1AreGdVRGIyMXI2YXRTOFA5MitBZk11Qmlza3lQa0NBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCSUFBQUFUQ0FNQUFBQ3FUSzNBQUFBQUFYTlNSMElCMmNrc2Z3QUFBRXRRVEZSRkFBQUE1SGl3NVhheDQzaXg1SGV4NUhldzVIZXg1SGV5MzNDdjVIZXg1SGV4NTNpdjQzV3k1SFd2NUhleDVIYXk0M2V4NW5hejVIaXk1SGV4NUhpeDVIaXg1SGV4NDNpdjQzZXdhYUFLK1FBQUFCbDBVazVUQU9CL2dQK2YwTDhROE04Z1B6RGZjTEJRWUpDZ3dPOUFyK1huS1k0QUFBQ05TVVJCVkhpY1pZL2hGc0lnQ0ViVkllbVc1WnlidmYrVEpqREtGbitFZXpoOFYyT2R1ZFlFL284aDNNSUZoUWl6c09YZWk5c1VZYWhISXZZY1VWNGw0YXlZeTNsMms3bXUzNENkeUpGK05RQVFqbVZBblZoVFZZVjFPcHFNeVFOci9YUWZBc0xzbkg4UktnQ1Z2NEdjN0VWTExoYzJvNzdLRWwxRFZLMm15UzNKL3JhcnN2MVlxSGNxL0x3QllJUUZRUDNJNzNZQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJJQUFBQVRDQU1BQUFDcVRLM0FBQUFBQVhOU1IwSUIyY2tzZndBQUFFdFFURlJGQUFBQS84WUEvOGNBLzhVQS84WUEvOFVBLzhjQS84WUEvNzhBLzhZQS84WUEvOGNBLzhZQS84VUEvOFlBLzhZQS84WUEvOFlBLzhjQS84WUEvOFlBLzhZQS84WUEvOGNBLzhZQWs0Uzd6QUFBQUJsMFVrNVRBT0IvZ1ArZjBMOFE4TThnUHpEZmNMQlFZSkNnd085QXIrWG5LWTRBQUFDTlNVUkJWSGljWlkvaEZzSWdDRWJWSWVtVzVaeWJ2ZitUSmpES0ZuK0Vlemg4VjJPZHVkWUUvbzhoM01JRmhRaXpzT1hlaTlzVVlhaEhJdlljVVY0bDRheVl5M2wyazdtdTM0Q2R5SkYrTlFBUWptVkFuVmhUVllWMU9wcU15UU5yL1hRZkFzTHNuSDhSS2dDVnY0R2M3RVZMTGhjMm83N0tFbDFEVksybXlTM0ovcmFyc3YxWXFIY3EvTHdCWUlRRlFQM0k3M1lBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVENBTUFBQUNuVXQySEFBQUFBWE5TUjBJQjJja3Nmd0FBQUQ5UVRGUkZBQUFBNDNpdjVIZXg1SGV4NUhpeTVIZXgzM0N2NUhleDQzaXg1SGV4NDNleDVIZXg1SGV5NDNXeTVIaXg1M2l2NUhleDVIYXk1SGl4NUhpdzQzZXhKSGNxeUFBQUFCVjBVazVUQUVEUXoyRC9FTitBNzIrUHZ6K2dJUEJ3d09Dd1NuZllPQUFBQUhoSlJFRlVlSnhsMEZzV2dDQUlCRkFsMGJKU2UreC9yYUdsSk03blBRcHpVS3BHYXpVR3B0RU1vcEZtSGFLVE9DTmxGZytYakl2bHRYN2Q4TXUyK3AwbzRKQ2dMRWdER2lJVnl1QmU0VnNXRTF1S2RmL0JlUFROMzNEL1g2M1E4R1E4RzE1NXF6RzVCUitGSHBRTGEvcFNMWVoyZEgzblNnOCtTZ1RvQS9BR3V3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFUQ0FNQUFBQ25VdDJIQUFBQUFYTlNSMElCMmNrc2Z3QUFBRDlRVEZSRkFBQUEvOGNBLzhjQS84WUEvOGNBLzhZQS83OEEvOFlBLzhVQS84WUEvOFlBLzhZQS84WUEvOFlBLzhZQS84Y0EvOFlBLzhZQS84WUEvOFlBLzhZQUVEV3dMd0FBQUJWMFVrNVRBRURRejJEL0VOK0E3MitQdnorZ0lQQnd3T0N3U25mWU9BQUFBSGhKUkVGVWVKeGwwRnNXZ0NBSUJGQWwwYkpTZSt4L3JhR2xKTTduUFFwelVLcEdhelVHcHRFTW9wRm1IYUtUT0NObEZnK1hqSXZsdFg3ZDhNdTIrcDBvNEpDZ0xFZ0RHaUlWeXVCZTRWc1dFMXVLZGYvQmVQVE4zM0QvWDYzUThHUThHMTU1cXpHNUJSK0ZIcFFMYS9wU0xZWjJkSDNuU2c4K1NnVG9BL0FHdXdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzIGZyb20gJy4vY2F0ZWdvcmllcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE5ld1Bvc3RzIGZyb20gJy4vTmV3UG9zdHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yaWVzKHsgY2F0ZWdvcmllcywgbmV3UG9zdHMsIGZpbHRlclBvc3RzIH0pIHtcclxuICBjb25zdCBbZmlsdGVyQ2F0ZWdvcnksIHNldEZpbHRlckNhdGVnb3J5XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQ2F0ZWdvcnkgPSAoY2F0ZWdvcnksIGlkKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJDYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgICBmaWx0ZXJQb3N0cyh7J2NhdGVnb3J5X2lkJzogaWR9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzLmNhdGVnb3JpZXNfYmxvY2t9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLmNhdGVnb3JpZXNfdGl0bGV9YH0+XHJcbiAgICAgICAgPHA+U0VMRUNUIEEgQ0FURUdPUlk8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jYXRlZ29yaWVzX2NvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzLmNhdGVnb3JpZXNfY29udHJvbH1gfT5cclxuICAgICAgICAgIHsoY2F0ZWdvcmllcyAmJiBjYXRlZ29yaWVzLmxlbmd0aClcclxuICAgICAgICAgICAgPyBjYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGtleT17aX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gY2hhbmdlQ2F0ZWdvcnkoYy5uYW1lLnRvTG93ZXJDYXNlKCksIGMuaWQpfSBjbGFzc05hbWU9e2Ake3MuY2F0ZWdvcnl9ICR7ZmlsdGVyQ2F0ZWdvcnkgPT09IGMubmFtZS50b0xvd2VyQ2FzZSgpID8gJ2FjdGl2ZV9idG5fYmx1ZScgOiAnJ31gfT57Yy5uYW1lLnRvVXBwZXJDYXNlKCl9PC9zcGFuPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICA6IDw+PGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWJvcmRlciB0ZXh0LWluZm9cIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTIgdGV4dC1pbmZvXCI+Tm8gY2F0ZWdvcmllcyBmcm9tIHNlcnZlci4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC8+fVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLmNhdGVnb3JpZXNfc3VidGl0bGV9YH0+XHJcbiAgICAgICAgICA8cD5ORVcgT04gVEhFIFNJVEU8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY2F0ZWdvcmllc19jYXJvdXNlbH0+XHJcbiAgICAgICAgICA8TmV3UG9zdHMgbmV3UG9zdHM9e25ld1Bvc3RzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHMgZnJvbSBcIi4vZXNjb3J0Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGZhdiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL2Zhdm9yaXRlLXBpbmsucG5nXCI7XHJcbmltcG9ydCBjcm93biBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL2Nyb3duLXBpbmsucG5nXCI7XHJcbmltcG9ydCBzdGFyIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvc3Rhci1waW5rLnBuZ1wiO1xyXG5pbXBvcnQgcGxhbmUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9wbGFuZS1waW5rLnBuZ1wiO1xyXG5pbXBvcnQgVmVyaWZpZWRXaW5kb3cgZnJvbSBcIi4uL21vZGFsLXdpbmRvdy9WZXJpZmllZFdpbmRvd1wiO1xyXG5cclxuaW1wb3J0IG1vZGVsIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vaG9yaXpvbnRhbC9tb2RlbC0xLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXNjb3J0R3JpZCh7IHBvc3RzLCBwYWdlc051bWJlciwgc2VsZWN0UG9zdHNQYWdlLCBhZGRUb0Zhdm9yaXRlcyB9KSB7XHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbcGFnZXMsIHNldFBhZ2VzXSA9IHVzZVN0YXRlKFsxXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRQYWdlcyhbMV0pO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlc051bWJlcjsgaSsrKSB7XHJcbiAgICAgIHBhZ2VzLnB1c2goMSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIG1heFdpZHRoOiBcIjEyNjBweFwiLFxyXG4gICAgICAgIG1hcmdpbjogXCIxZW0gYXV0b1wiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMCAwIDVlbSAwXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtwb3N0cyAmJiBwb3N0cy5sZW5ndGggPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIHAtMFwiPlxyXG4gICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy52ZXJ0aWNhbF9zbGlkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MudmVydGljYWxfc2xpZGVfaW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QucGhvdG9faG9yaXpvbnRhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwb3N0Lm1vZGVsX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5tb2RlbF9waG90b19ncmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy52ZXJ0aWNhbF9zbGlkZV9tb2RlbF9pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5uYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0Lm1vZGVsX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm5ldHdvcmtfc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLmxvY2F0aW9ufWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExvY2F0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5zdW1tYXJ5fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnN1bW1hcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY2FyZF9jb250cm9sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZmF2fSBhbHQ9XCJcIiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9GYXZvcml0ZXMocG9zdC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nyb3dufSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3Rhcn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BsYW5lfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy52ZXJpZmljYXRpb259YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy52ZXJpZmllZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFZlcmlmaWVkV2luZG93IGJ1dHRvbkxhYmVsPXtgVkVSSUZJRURgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Mudmlld19wcm9maWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9tb2RlbFByb2ZpbGVcIiwgcXVlcnk6IHsgaWQ6IHBvc3QuaWQgfSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biB0ZXh0LXdoaXRlXCI+VklFVyBQUk9GSUxFPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJQYWdlIG5hdmlnYXRpb24gZXhhbXBsZVwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFnZS1saW5rIGJnLWRhcmsgdGV4dC13aGl0ZSBib3JkZXItc2Vjb25kYXJ5XCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RQb3N0c1BhZ2UoY3VycmVudFBhZ2UgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgUHJldmlvdXNcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIHtwYWdlcy5tYXAoKHAsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwYWdlLWxpbmsgYmctZGFyayB0ZXh0LXdoaXRlIGJvcmRlci1zZWNvbmRhcnlcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFBvc3RzUGFnZShpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZShpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0+e2kgKyAxfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFnZS1saW5rIGJnLWRhcmsgdGV4dC13aGl0ZSBib3JkZXItc2Vjb25kYXJ5XCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCBwYWdlc051bWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UG9zdHNQYWdlKGN1cnJlbnRQYWdlICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIE5leHRcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgxIHRleHQtaW5mbyB0ZXh0LWNlbnRlciBweS01XCI+Tm8gcG9zdHMuLi48L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIDwvZGl2ID5cclxuICApO1xyXG59XHJcblxyXG4vLyBhYm91dDogXCJhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0XCJcclxuLy8gYWNjb3VudF9uYW1lOiBcImFjY291bnRfbmFtZWFjY291bnRfbmFtZWFjY291bnRfbmFtZWFjY291bnRfbmFtZVwiXHJcbi8vIGFmZmlsaWF0aW9uX2lkOiBudWxsXHJcbi8vIGFnZTogMjJcclxuLy8gYXZhaWxhYmxlX3RvX2RhdGU6IG51bGxcclxuLy8gY2F0ZWdvcnlfaWQ6IG51bGxcclxuLy8gY2l0eV9pZDogbnVsbFxyXG4vLyBjcmVhdGVkX2F0OiBcIjIwMjAtMDYtMTlUMTA6MzU6MDAuMDAwMDAwWlwiXHJcbi8vIGV0aG5pY2l0eV9pZDogbnVsbFxyXG4vLyBleWVfaWQ6IG51bGxcclxuLy8gZ2VuZGVyOiBcIm1hblwiXHJcbi8vIGhhaXJfaWQ6IG51bGxcclxuLy8gaGVpZ2h0OiBcIjIzNVwiXHJcbi8vIGlkOiAxXHJcbi8vIGlzX21vcmVfcGhvdG9zOiAwXHJcbi8vIGlzX3Bob3Rvc192aXA6IDBcclxuLy8gaXNfcHVibGlzaGVkOiAwXHJcbi8vIGlzX3ZlcmlmeTogMFxyXG4vLyBpc192aXA6IDBcclxuLy8gbW9kZWxfbmFtZTogXCJTaGx1aGFcIlxyXG4vLyBwaG90bzogbnVsbFxyXG4vLyBzZWNvbmRfbmFtZTogXCJzZWNvbmRcIlxyXG4vLyBzdGF0ZV9pZDogbnVsbFxyXG4vLyBzdGF0dXM6IFwib3RoZXJcIlxyXG4vLyBzdW1tYXJ5OiBcInN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5XCJcclxuLy8gdXBkYXRlZF9hdDogXCIyMDIwLTA2LTIyVDA2OjM0OjEyLjAwMDAwMFpcIlxyXG4vLyB1c2VyX2lkOiBudWxsXHJcbi8vIHZpZGVvX2xpbms6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1UUWdHRndWV0QyNCZsaXN0PVJELTlSbmc4T3VNMTAmaW5kZXg9MlwiXHJcbi8vIHZpcF90b19kYXRlOiBudWxsXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHMgZnJvbSBcIi4vbG9jYXRpb24ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb24oeyBzdGF0ZXMsIGdldENpdGllcyB9KSB7XHJcbiAgY29uc3QgW2N1cnJlbnRMb2NhdGlvbiwgc2V0Q3VycmVudExvY2F0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlTG9jYXRpb24gPSBzdGF0ZUlkID0+IHtcclxuICAgIGdldENpdGllcyhzdGF0ZUlkKTtcclxuICAgIHNldEN1cnJlbnRMb2NhdGlvbihzdGF0ZUlkKTtcclxuICAgIHN0YXRlcy5mb3JFYWNoKHN0YXRlID0+IHtcclxuICAgICAgaWYgKCtzdGF0ZS5pZCA9PT0gK3N0YXRlSWQpIHtcclxuICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBwYXRobmFtZTogYC9sb2NhdGlvbmAsXHJcbiAgICAgICAgICBxdWVyeTogeyBzdGF0ZTogc3RhdGUubmFtZSwgaWQ6IHN0YXRlLmlkIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzLmxvY2F0aW9uX3dyYXBwZXJ9PlxyXG4gICAgICB7c3RhdGVzLmxlbmd0aCA/IDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5sb2NhdG9uX2Jsb2NrX3RpdGxlfWB9PlxyXG4gICAgICAgICAgPHA+U0VMRUNUIEEgTE9DQVRJT04gQkVMT1c8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubG9jYXRpb25fYmxvY2tfc2VsZWN0fT5cclxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlTG9jYXRpb24oZS50YXJnZXQudmFsdWUpfSA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWZhdWx0XCIgaGlkZGVuPkxvY2F0aW9uPC9vcHRpb24+XHJcbiAgICAgICAgICAgIHtzdGF0ZXMubWFwKChzdGF0ZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17c3RhdGUuaWR9PntzdGF0ZS5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxvY2F0aW9uX2Jsb2NrX2xpc3R9PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7c3RhdGVzLm1hcCgoc3RhdGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBjaGFuZ2VMb2NhdGlvbihzdGF0ZS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biB0ZXh0LXdoaXRlIGxvY2F0aW9uX2l0ZW1gfT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2NhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3VycmVudExvY2F0aW9uID09PSBzdGF0ZSA/ICdhY3RpdmVfYnRuX2JsdWUnIDogJyd9PntzdGF0ZS5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPiA6IG51bGx9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL2NhdGVnb3JpZXMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZVNsaWRlcih7IG5ld1Bvc3RzIH0pIHtcclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDEwMDAwLFxyXG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjUsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzY5LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgIGluaXRpYWxTbGlkZTogMlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICBmYWRlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgICAgbWF4V2lkdGg6ICcxMjYwcHgnXHJcbiAgICB9fT5cclxuICAgICAgPFNsaWRlclxyXG4gICAgICAgIHsuLi5zZXR0aW5nc31cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgbWF4V2lkdGg6IFwiMTI2MHB4XCIsXHJcbiAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtuZXdQb3N0cyAmJiBuZXdQb3N0cy5sZW5ndGhcclxuICAgICAgICAgID8gbmV3UG9zdHMubWFwKChwb3N0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zbGlkZX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9tb2RlbFByb2ZpbGVcIiwgcXVlcnk6IHsgaWQ6IHBvc3QuaWQgfSB9fT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QucGhvdG9fdmVydGljYWx9IGFsdD1cIm1vZGVsXCIgY2xhc3NOYW1lPVwidy0xMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5tb2RlbF9uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpIDogbnVsbH1cclxuICAgICAgPC9TbGlkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHMgZnJvbSAnLi9zZWFyY2gubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17cy5zZWFyY2hfYmxvY2t9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zZWFyY2hfYmxvY2tfY29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5zZWFyY2hfaW5wdXRfbGFiZWx9YH0+U0VBUkNIPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2VhcmNoX2lucHV0fT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5hZGRfcG9zdF9idG59YH0+XHJcbiAgICAgICAgICA8c3Bhbj5QT1NUIEFEPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2F0ZWdvcmllc19ibG9ja1wiOiBcImNhdGVnb3JpZXNfY2F0ZWdvcmllc19ibG9ja19fMTRBVl9cIixcblx0XCJjYXRlZ29yaWVzX3RpdGxlXCI6IFwiY2F0ZWdvcmllc19jYXRlZ29yaWVzX3RpdGxlX18zS3lPWFwiLFxuXHRcImNhdGVnb3JpZXNfY29udGVudFwiOiBcImNhdGVnb3JpZXNfY2F0ZWdvcmllc19jb250ZW50X18ydlB1dFwiLFxuXHRcImNhdGVnb3JpZXNfY29udHJvbFwiOiBcImNhdGVnb3JpZXNfY2F0ZWdvcmllc19jb250cm9sX18yZ3BjZVwiLFxuXHRcImNhdGVnb3J5XCI6IFwiY2F0ZWdvcmllc19jYXRlZ29yeV9fM1JHandcIixcblx0XCJjYXRlZ29yaWVzX3N1YnRpdGxlXCI6IFwiY2F0ZWdvcmllc19jYXRlZ29yaWVzX3N1YnRpdGxlX18zWW1YYVwiLFxuXHRcInNsaWRlXCI6IFwiY2F0ZWdvcmllc19zbGlkZV9fMkxOanVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImVzY29ydF9jb250ZW50X3RpdGxlXCI6IFwiZXNjb3J0X2VzY29ydF9jb250ZW50X3RpdGxlX18yY1ZXNlwiLFxuXHRcImZpbHRlcl9zb3J0X2NvbnRyb2xcIjogXCJlc2NvcnRfZmlsdGVyX3NvcnRfY29udHJvbF9fMnlJVGlcIixcblx0XCJmaWx0ZXJfYnRuX3dyYXBcIjogXCJlc2NvcnRfZmlsdGVyX2J0bl93cmFwX18xc0FDZFwiLFxuXHRcImZpbHRlcl9idG5fZ3JvdXBcIjogXCJlc2NvcnRfZmlsdGVyX2J0bl9ncm91cF9feC1GU01cIixcblx0XCJzb3J0aW5nX2J0blwiOiBcImVzY29ydF9zb3J0aW5nX2J0bl9fMzhqaDNcIixcblx0XCJmaWx0ZXJfaXRlbXNfYmxvY2tcIjogXCJlc2NvcnRfZmlsdGVyX2l0ZW1zX2Jsb2NrX18zTXFhM1wiLFxuXHRcImVzY29ydF9saXN0XCI6IFwiZXNjb3J0X2VzY29ydF9saXN0X18xTjUwWlwiLFxuXHRcInNsaWRlXCI6IFwiZXNjb3J0X3NsaWRlX19xbmJJalwiLFxuXHRcIm1vZGVsX3Bob3RvXCI6IFwiZXNjb3J0X21vZGVsX3Bob3RvX18zdHllRFwiLFxuXHRcIm1vZGVsX2luZm9cIjogXCJlc2NvcnRfbW9kZWxfaW5mb19faUYyQVpcIixcblx0XCJtb2RlbF9pbmZvX3RpdGxlXCI6IFwiZXNjb3J0X21vZGVsX2luZm9fdGl0bGVfXzNOWW1YXCIsXG5cdFwic2lnbnNfZ3JvdXBcIjogXCJlc2NvcnRfc2lnbnNfZ3JvdXBfX2RldHdFXCIsXG5cdFwidmVydGljYWxfc2xpZGVcIjogXCJlc2NvcnRfdmVydGljYWxfc2xpZGVfXzF6eUFhXCIsXG5cdFwidmVydGljYWxfc2xpZGVfaW1hZ2VcIjogXCJlc2NvcnRfdmVydGljYWxfc2xpZGVfaW1hZ2VfXzF5RmxIXCIsXG5cdFwidmVydGljYWxfc2xpZGVfbW9kZWxfaW5mb1wiOiBcImVzY29ydF92ZXJ0aWNhbF9zbGlkZV9tb2RlbF9pbmZvX18zYmlvb1wiLFxuXHRcIm5hbWVcIjogXCJlc2NvcnRfbmFtZV9fMnZWeVdcIixcblx0XCJuZXR3b3JrX3N0YXR1c1wiOiBcImVzY29ydF9uZXR3b3JrX3N0YXR1c19fMVljQXVcIixcblx0XCJsb2NhdGlvblwiOiBcImVzY29ydF9sb2NhdGlvbl9fMXdTNGxcIixcblx0XCJzdW1tYXJ5XCI6IFwiZXNjb3J0X3N1bW1hcnlfX09lVGtqXCIsXG5cdFwidmVyaWZpY2F0aW9uXCI6IFwiZXNjb3J0X3ZlcmlmaWNhdGlvbl9fMjlqODZcIixcblx0XCJjYXJkX2NvbnRyb2xcIjogXCJlc2NvcnRfY2FyZF9jb250cm9sX18xZFdTdlwiLFxuXHRcInZlcmlmaWVkXCI6IFwiZXNjb3J0X3ZlcmlmaWVkX18xQXRNb1wiLFxuXHRcInZpZXdfcHJvZmlsZVwiOiBcImVzY29ydF92aWV3X3Byb2ZpbGVfX3pWQWc2XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2NhdGlvbl93cmFwcGVyXCI6IFwibG9jYXRpb25fbG9jYXRpb25fd3JhcHBlcl9fMWFPTDBcIixcblx0XCJsb2NhdG9uX2Jsb2NrX3RpdGxlXCI6IFwibG9jYXRpb25fbG9jYXRvbl9ibG9ja190aXRsZV9fbFlEektcIixcblx0XCJsb2NhdGlvbl9ibG9ja19zZWxlY3RcIjogXCJsb2NhdGlvbl9sb2NhdGlvbl9ibG9ja19zZWxlY3RfX1kxYVdpXCIsXG5cdFwibG9jYXRpb25fYmxvY2tfbGlzdFwiOiBcImxvY2F0aW9uX2xvY2F0aW9uX2Jsb2NrX2xpc3RfXzFJamJZXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWFyY2hfYmxvY2tcIjogXCJzZWFyY2hfc2VhcmNoX2Jsb2NrX18yMXNNU1wiLFxuXHRcInNlYXJjaF9ibG9ja19jb250ZW50XCI6IFwic2VhcmNoX3NlYXJjaF9ibG9ja19jb250ZW50X18xWnZMbFwiLFxuXHRcInNlYXJjaF9pbnB1dF9sYWJlbFwiOiBcInNlYXJjaF9zZWFyY2hfaW5wdXRfbGFiZWxfXzF1SnBxXCIsXG5cdFwic2VhcmNoX2lucHV0XCI6IFwic2VhcmNoX3NlYXJjaF9pbnB1dF9fMlhNbHNcIixcblx0XCJhZGRfcG9zdF9idG5cIjogXCJzZWFyY2hfYWRkX3Bvc3RfYnRuX18zY0U4YlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHMgZnJvbSBcIi4vaG9yaXpvbnRhbC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZmF2IGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvZmF2b3JpdGUteWVsLnBuZ1wiO1xyXG5pbXBvcnQgY3Jvd24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9jcm93bi15ZWwucG5nXCI7XHJcbmltcG9ydCBzdGFyIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvc3Rhci15ZWwucG5nXCI7XHJcbmltcG9ydCBwbGFuZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3BsYW5lLXllbC5wbmdcIjtcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvY0hvckNhcm91c2VsKHsgcG9zdHMsIGFkZFRvRmF2b3JpdGVzIH0pIHtcclxuICBjb25zdCBbZmlyc3RDdXJyZW50SW5kZXgsIHNldEZpcnN0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzZWNvbmRDdXJyZW50SW5kZXgsIHNldFNlY29uZEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3QgYXV0b1NsaWRlID0gZGVsYXkgPT4ge1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjaGFuZ2VQaG90b0ZvcnZhcmQoKTtcclxuICAgIH0sIGRlbGF5KTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRGaXJzdEN1cnJlbnRJbmRleCgwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZVBob3RvRm9ydmFyZCA9ICgpID0+IHtcclxuICAgIGlmIChwb3N0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGlmIChmaXJzdEN1cnJlbnRJbmRleCA8IHBvc3RzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAkKCcubW9kZWwtcGhvdG8nKS5mYWRlT3V0KCgpID0+IHtcclxuICAgICAgICAgIHNldEZpcnN0Q3VycmVudEluZGV4KGZpcnN0Q3VycmVudEluZGV4ICsgMSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJCgnLm1vZGVsLXBob3RvJykuZmFkZUluKCk7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnLm1vZGVsLXBob3RvJykuZmFkZU91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRGaXJzdEN1cnJlbnRJbmRleCgwKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKCcubW9kZWwtcGhvdG8nKS5mYWRlSW4oKTtcclxuICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBpZiAoc2Vjb25kQ3VycmVudEluZGV4IDwgcG9zdHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICQoJy5tb2RlbC1waG90by1zZWNvbmQnKS5mYWRlT3V0KCgpID0+IHtcclxuICAgICAgICAgIHNldFNlY29uZEN1cnJlbnRJbmRleChzZWNvbmRDdXJyZW50SW5kZXggKyAxKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKCcubW9kZWwtcGhvdG8tc2Vjb25kJykuZmFkZUluKCk7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnLm1vZGVsLXBob3RvLXNlY29uZCcpLmZhZGVPdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2Vjb25kQ3VycmVudEluZGV4KDApO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICQoJy5tb2RlbC1waG90by1zZWNvbmQnKS5mYWRlSW4oKTtcclxuICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBjaGFuZ2VQaG90b0JhY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAocG9zdHMubGVuZ3RoID4gMSkge1xyXG4gICAgICBpZiAoZmlyc3RDdXJyZW50SW5kZXggPiAwKSB7XHJcbiAgICAgICAgJCgnLm1vZGVsLXBob3RvJykuZmFkZU91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRGaXJzdEN1cnJlbnRJbmRleChmaXJzdEN1cnJlbnRJbmRleCAtIDEpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICQoJy5tb2RlbC1waG90bycpLmZhZGVJbigpO1xyXG4gICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJy5tb2RlbC1waG90bycpLmZhZGVPdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0Rmlyc3RDdXJyZW50SW5kZXgocG9zdHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJCgnLm1vZGVsLXBob3RvJykuZmFkZUluKCk7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNlY29uZEN1cnJlbnRJbmRleCA+IDApIHtcclxuICAgICAgICAkKCcubW9kZWwtcGhvdG8tc2Vjb25kJykuZmFkZU91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTZWNvbmRDdXJyZW50SW5kZXgoc2Vjb25kQ3VycmVudEluZGV4IC0gMSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJCgnLm1vZGVsLXBob3RvLXNlY29uZCcpLmZhZGVJbigpO1xyXG4gICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJy5tb2RlbC1waG90by1zZWNvbmQnKS5mYWRlT3V0KCgpID0+IHtcclxuICAgICAgICAgIHNldFNlY29uZEN1cnJlbnRJbmRleChwb3N0cy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKCcubW9kZWwtcGhvdG8tc2Vjb25kJykuZmFkZUluKCk7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5sb2NfaG9yX2Nhcm91c2VsX2hlYWRlcn0+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5QYWlkIEFubm91bmNlbWVudHM8L2g1PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtwb3N0cyAmJiBwb3N0cy5sZW5ndGggP1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnBob3RvX3NsaWRlcn0gc3R5bGU9e3Bvc3RzLmxlbmd0aCA9PT0gMSA/IHsgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmcicgfSA6IHt9fT5cclxuICAgICAgICAgIHtwb3N0cy5sZW5ndGggPiAxXHJcbiAgICAgICAgICAgID8gPHNwYW4gY2xhc3NOYW1lPXtzLnBob3RvX3RvZ2dsZXJfYmFja31cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtjaGFuZ2VQaG90b0JhY2t9PiZsdDs8L3NwYW4+XHJcbiAgICAgICAgICAgIDogbnVsbH1cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zbGlkZX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL21vZGVsUHJvZmlsZVwiLCBxdWVyeTogeyBpZDogcG9zdHNbZmlyc3RDdXJyZW50SW5kZXhdLmlkIH0gfX0+PGE+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtwb3N0c1tmaXJzdEN1cnJlbnRJbmRleF0ucGhvdG9faG9yaXpvbnRhbH1cclxuICAgICAgICAgICAgICAgIGFsdD17cG9zdHNbZmlyc3RDdXJyZW50SW5kZXhdLm1vZGVsX25hbWV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btb2RlbC1waG90byAke3MubWFpbl9waG90b31gfSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxvY19zbGlkZV9pbmZvfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxvY19zbGlkZV9pbmZvX2hlYWR9PlxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPntwb3N0c1tmaXJzdEN1cnJlbnRJbmRleF0ubW9kZWxfbmFtZX0ge3Bvc3RzW2ZpcnN0Q3VycmVudEluZGV4XS5zZWNvbmRfbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zbGlkZV9uZXR3b3JrfT57cG9zdHNbZmlyc3RDdXJyZW50SW5kZXhdLnN0YXR1c308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2xpZGVfY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Zhdn0gYWx0PVwiXCIgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGFkZFRvRmF2b3JpdGVzKHBvc3RzW2ZpcnN0Q3VycmVudEluZGV4XS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y3Jvd259IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3N0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BsYW5lfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2xpZGVfbG9jYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTBcIj57cG9zdHNbZmlyc3RDdXJyZW50SW5kZXhdLnN0YXRlLm5hbWV9IC8ge3Bvc3RzW2ZpcnN0Q3VycmVudEluZGV4XS5jaXR5Lm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zbGlkZV92ZXJpZmljYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MudmVyaWZpY2F0aW9ufT57cG9zdHNbZmlyc3RDdXJyZW50SW5kZXhdLmlzX3ZlcmlmeSA/ICdPVEhFUiBWSVAgVkVSSUZJRUQnIDogbnVsbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLnN0YXR1c31gfT5TUEVDSUFMIFNUQVRVUzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAge3Bvc3RzLmxlbmd0aCAhPT0gMSA/IDxkaXYgY2xhc3NOYW1lPXtgJHtzLnNlY29uZF9zbGlkZX0gJHtzLnNsaWRlfWB9IHN0eWxlPXtwb3N0cy5sZW5ndGggPT09IDEgPyB7IGRpc3BsYXk6ICdub25lJyB9IDoge319PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9tb2RlbFByb2ZpbGVcIiwgcXVlcnk6IHsgaWQ6IHBvc3RzW3NlY29uZEN1cnJlbnRJbmRleF0uaWQgfSB9fT48YT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3Bvc3RzW3NlY29uZEN1cnJlbnRJbmRleF0ucGhvdG9faG9yaXpvbnRhbH1cclxuICAgICAgICAgICAgICAgIGFsdD17cG9zdHNbc2Vjb25kQ3VycmVudEluZGV4XS5tb2RlbF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbW9kZWwtcGhvdG8tc2Vjb25kICR7cy5tYWluX3Bob3RvfWB9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubG9jX3NsaWRlX2luZm99PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubG9jX3NsaWRlX2luZm9faGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3Bvc3RzW3NlY29uZEN1cnJlbnRJbmRleF0ubW9kZWxfbmFtZX0ge3Bvc3RzW3NlY29uZEN1cnJlbnRJbmRleF0uc2Vjb25kX25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2xpZGVfbmV0d29ya30+e3Bvc3RzW3NlY29uZEN1cnJlbnRJbmRleF0uc3RhdHVzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zbGlkZV9jb250cm9sfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZmF2fSBhbHQ9XCJcIiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWRkVG9GYXZvcml0ZXMocG9zdHNbc2Vjb25kQ3VycmVudEluZGV4XS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y3Jvd259IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3N0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BsYW5lfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2xpZGVfbG9jYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTBcIj57cG9zdHNbc2Vjb25kQ3VycmVudEluZGV4XS5zdGF0ZS5uYW1lfSAvIHtwb3N0c1tzZWNvbmRDdXJyZW50SW5kZXhdLmNpdHkubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNsaWRlX3ZlcmlmaWNhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy52ZXJpZmljYXRpb259Pntwb3N0c1tzZWNvbmRDdXJyZW50SW5kZXhdLmlzX3ZlcmlmeSA/ICdPVEhFUiBWSVAgVkVSSUZJRUQnIDogbnVsbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLnN0YXR1c31gfT5TUEVDSUFMIFNUQVRVUzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+IDogbnVsbH1cclxuXHJcbiAgICAgICAgICB7cG9zdHMubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICA/IDxzcGFuIGNsYXNzTmFtZT17cy5waG90b190b2dnbGVyX2ZvcnZhcmR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlUGhvdG9Gb3J2YXJkfT4mZ3Q7PC9zcGFuPlxyXG4gICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cInB5LTUgdGV4dC1jZW50ZXIgaDMgdGV4dC1pbmZvXCI+Tm8gcG9zdHMuLi5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHRleHQtaW5mb1wiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPC9kaXY+fVxyXG5cclxuICAgICAgey8qIHtwb3N0cy5tYXAoKHBvc3QsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvbW9kZWxQcm9maWxlXCIsIHF1ZXJ5OiB7IGlkOiBwb3NzdFtmaXJzdEN1cnJlbnRJbmRleF0uaWQgfSB9fT48YT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubG9jX2hvcl9jYXJvdXNlbF9zbGlkZX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3RzW2ZpcnN0Q3VycmVudEluZGV4XS5waG90b19ob3Jpem9udGFsfSBhbHQ9XCJtb2RlbFwiIGNsYXNzTmFtZT1cInctMTAwXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5sb2Nfc2xpZGVfaW5mb30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5sb2Nfc2xpZGVfaW5mb19oZWFkfT5cclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57cG9zdHNbZmlyc3RDdXJyZW50SW5kZXhdLm1vZGVsX25hbWV9IHtwb3N0c1tmaXJzdEN1cnJlbnRJbmRleF0uc2Vjb25kX25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2xpZGVfbmV0d29ya30+e3Bvc3RzW2ZpcnN0Q3VycmVudEluZGV4XS5zdGF0dXN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNsaWRlX2NvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmYXZ9IGFsdD1cIlwiIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhZGRUb0Zhdm9yaXRlcyhwb3N0c1tmaXJzdEN1cnJlbnRJbmRleF0uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nyb3dufSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzdGFyfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwbGFuZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNsaWRlX2xvY2F0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wXCI+e3Bvc3RzW2ZpcnN0Q3VycmVudEluZGV4XS5zdGF0ZS5uYW1lfSAvIHtwb3N0c1tmaXJzdEN1cnJlbnRJbmRleF0uY2l0eS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2xpZGVfdmVyaWZpY2F0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnZlcmlmaWNhdGlvbn0+e3Bvc3RzW2ZpcnN0Q3VycmVudEluZGV4XS5pc192ZXJpZnkgPyAnT1RIRVIgVklQIFZFUklGSUVEJyA6IG51bGx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5zdGF0dXN9YH0+U1BFQ0lBTCBTVEFUVVM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9KX0gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL2NvbnRyb2wubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IE1vZGVsc0ZpbHRlciBmcm9tICcuLi9tb2RlbHMtZmlsdGVyL01vZGVsc0ZpbHRlcidcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jUGFnZUNvbnRyb2woe1xyXG4gIGNpdGllcyxcclxuICBhdmFpbGFiaWxpdHksXHJcbiAgYXZhaWxhYmxlX3RvLFxyXG4gIGV0aG5pY2l0eSxcclxuICBleWVzLFxyXG4gIGhhaXIsXHJcbiAgYWZmaWxpYXRpb24sXHJcbiAgZmlsdGVyUG9zdHNcclxufSkge1xyXG4gIGNvbnN0IFtjdXJyZW50Q2l0eSwgc2V0Q3VycmVudENpdHldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzaG93Q2l0aWVzLCBzZXRTaG93Q2l0aWVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0ZpbHRlciwgc2V0U2hvd0ZpbHRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50Q2l0eShyb3V0ZXIucXVlcnkuc3RhdGUpO1xyXG4gICAgJCgnLmxvY19jaXRpZXNfbGlzdCcpLmhpZGUoKCkgPT4ge1xyXG4gICAgICBzZXRTaG93Q2l0aWVzKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLmZpbHRlcl9pdGVtc19ibG9jaycpLmhpZGUoKCkgPT4ge1xyXG4gICAgICBzZXRTaG93RmlsdGVyKHRydWUpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzZXRDdXJyZW50Q2l0eSgnJyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzbGlkZUNpdGllc0xpc3QgPSAoKSA9PiB7XHJcbiAgICAkKCcubG9jX2NpdGllc19saXN0Jykuc2xpZGVUb2dnbGUoKCkgPT4ge1xyXG4gICAgICBzZXRTaG93Q2l0aWVzKCFzaG93Q2l0aWVzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2xpZGVGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAkKCcuZmlsdGVyX2l0ZW1zX2Jsb2NrJykuc2xpZGVUb2dnbGUoKCkgPT4ge1xyXG4gICAgICBzZXRTaG93RmlsdGVyKCFzaG93RmlsdGVyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlQ2l0eSA9IChuYW1lLCBpZCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudENpdHkobmFtZSk7XHJcbiAgICBmaWx0ZXJQb3N0cyh7ICdjaXR5X2lkJzogaWQgfSlcclxuICAgIHNsaWRlQ2l0aWVzTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzLmxvY19wYWdlX2NvbnRyb2x9IHRleHQtd2hpdGVgfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MubG9jX3BhZ2VfY29udHJvbF9jb250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cy5sb2NfcGFnZV9jb250cm9sX2hlYWRlcn1gfT5cclxuICAgICAgICAgIDxoNT5FU0NPUlRTIHtjdXJyZW50Q2l0eSAmJiBjdXJyZW50Q2l0eS5sZW5ndGggPyAnSU4gJyArIGN1cnJlbnRDaXR5LnRvVXBwZXJDYXNlKCkgOiBudWxsfTwvaDU+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3NsaWRlQ2l0aWVzTGlzdH0+Q0hBTkdFIExPQ0FUSU9OPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbG9jX2NpdGllc19saXN0ICR7cy5sb2NfY2l0aWVzX2xpc3R9YH0+XHJcbiAgICAgICAgICB7Y2l0aWVzICYmIGNpdGllcy5sZW5ndGggPyA8dWw+e2NpdGllcy5tYXAoKGMsIGkpID0+IChcclxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e2UgPT4gY2hhbmdlQ2l0eShjLm5hbWUsIGMuaWQpfSBrZXk9e2l9IGNsYXNzTmFtZT17YCR7Y3VycmVudENpdHkgPT09IGMubmFtZSA/ICdhY3RpdmVfYnRuX2JsdWUnIDogJyd9IGJ0biBjaXR5LWl0ZW1gfT48c3Bhbj57Yy5uYW1lfTwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgKSl9PC91bD4gOiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGgxIHRleHQtaW5mbyBweS01XCI+Tm8gY2l0aWVzIC4uLjwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3MubG9jX3BhZ2VfZmlsdGVyX2NvbnRyb2x9YH0+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3NsaWRlRmlsdGVyfT5GSUxURVI8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZmlsdGVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpbHRlcl9pdGVtc19ibG9jayAke3MuZmlsdGVyX2l0ZW1zX2Jsb2NrfWB9PlxyXG4gICAgICAgIDxNb2RlbHNGaWx0ZXJcclxuICAgICAgICAgIGF2YWlsYWJpbGl0eT17YXZhaWxhYmlsaXR5fVxyXG4gICAgICAgICAgYXZhaWxhYmxlX3RvPXthdmFpbGFibGVfdG99XHJcbiAgICAgICAgICBldGhuaWNpdHk9e2V0aG5pY2l0eX1cclxuICAgICAgICAgIGFmZmlsaWF0aW9uPXthZmZpbGlhdGlvbn1cclxuICAgICAgICAgIGZpbHRlclBvc3RzPXtmaWx0ZXJQb3N0c31cclxuICAgICAgICAgIGV5ZXM9e2V5ZXN9XHJcbiAgICAgICAgICBoYWlyPXtoYWlyfVxyXG4gICAgICAgICAgc2xpZGVGaWx0ZXI9e3NsaWRlRmlsdGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL2Zvb3QubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NQYWdlRm9vdCh7IGZpbHRlclBvc3RzIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxvY19mb290ZXJ9PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5sb2NfZm9vdF9idG59YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZpbHRlclBvc3RzKHsgJ3N0YXRlX2lkJzogcm91dGVyLnF1ZXJ5LmlkIH0pfSA+XHJcbiAgICAgICAgICBTRUUgQUxMIFBST0ZJTEVTIElOIFRIRSBTVEFURVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL3ZlcnRpY2FsLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBFc2NvcnRHcmlkIGZyb20gXCIuLi9ob21lLXBhZ2UvRXNjb3J0R3JpZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jVmVydENhcm91c2VsKHsgcG9zdHMsIGFkZFRvRmF2b3JpdGVzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubG9jX3ZlcnRfY2Fyb3VzZWx9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5sb2NfdmVydF9jYXJvdXNlbF9oZWFkZXJ9PlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+UGFpZCBBbm5vdW5jZW1lbnRzIDI8L2g1PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEVzY29ydEdyaWQgcG9zdHM9e3Bvc3RzfSBhZGRUb0Zhdm9yaXRlcz17YWRkVG9GYXZvcml0ZXN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvY19wYWdlX2NvbnRyb2xfY29udGVudFwiOiBcImNvbnRyb2xfbG9jX3BhZ2VfY29udHJvbF9jb250ZW50X18zSXY0MFwiLFxuXHRcImxvY19wYWdlX2NvbnRyb2xfaGVhZGVyXCI6IFwiY29udHJvbF9sb2NfcGFnZV9jb250cm9sX2hlYWRlcl9fdFZzTXhcIixcblx0XCJsb2NfcGFnZV9maWx0ZXJfY29udHJvbFwiOiBcImNvbnRyb2xfbG9jX3BhZ2VfZmlsdGVyX2NvbnRyb2xfXzZwbDlQXCIsXG5cdFwibG9jX2NpdGllc19saXN0XCI6IFwiY29udHJvbF9sb2NfY2l0aWVzX2xpc3RfXzFqS0dtXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2NfZm9vdGVyXCI6IFwiZm9vdF9sb2NfZm9vdGVyX18xU1owQ1wiLFxuXHRcImxvY19mb290X2J0blwiOiBcImZvb3RfbG9jX2Zvb3RfYnRuX18zaXU1WlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9jX2hvcl9jYXJvdXNlbF9oZWFkZXJcIjogXCJob3Jpem9udGFsX2xvY19ob3JfY2Fyb3VzZWxfaGVhZGVyX18zQXoxOVwiLFxuXHRcImxvY19zbGlkZV9pbmZvXCI6IFwiaG9yaXpvbnRhbF9sb2Nfc2xpZGVfaW5mb19fSmZlQ2FcIixcblx0XCJsb2Nfc2xpZGVfaW5mb19oZWFkXCI6IFwiaG9yaXpvbnRhbF9sb2Nfc2xpZGVfaW5mb19oZWFkX18xdURGcFwiLFxuXHRcInNsaWRlX2NvbnRyb2xcIjogXCJob3Jpem9udGFsX3NsaWRlX2NvbnRyb2xfXzFDTFoyXCIsXG5cdFwic3RhdHVzXCI6IFwiaG9yaXpvbnRhbF9zdGF0dXNfXzItVDhTXCIsXG5cdFwidmVyaWZpY2F0aW9uXCI6IFwiaG9yaXpvbnRhbF92ZXJpZmljYXRpb25fXzNLbkMwXCIsXG5cdFwic2xpZGVfbmV0d29ya1wiOiBcImhvcml6b250YWxfc2xpZGVfbmV0d29ya19fSmRDZXlcIixcblx0XCJzbGlkZV9sb2NhdGlvblwiOiBcImhvcml6b250YWxfc2xpZGVfbG9jYXRpb25fXzFkT0F4XCIsXG5cdFwic2xpZGVfdmVyaWZpY2F0aW9uXCI6IFwiaG9yaXpvbnRhbF9zbGlkZV92ZXJpZmljYXRpb25fXzNTSktQXCIsXG5cdFwicGhvdG9fc2xpZGVyXCI6IFwiaG9yaXpvbnRhbF9waG90b19zbGlkZXJfXzMyVFJWXCIsXG5cdFwic2Vjb25kX3NsaWRlXCI6IFwiaG9yaXpvbnRhbF9zZWNvbmRfc2xpZGVfXzFydlNSXCIsXG5cdFwic2xpZGVcIjogXCJob3Jpem9udGFsX3NsaWRlX18zZl83ZVwiLFxuXHRcIm1haW5fcGhvdG9cIjogXCJob3Jpem9udGFsX21haW5fcGhvdG9fXzJzc01zXCIsXG5cdFwicGhvdG9fdG9nZ2xlcl9iYWNrXCI6IFwiaG9yaXpvbnRhbF9waG90b190b2dnbGVyX2JhY2tfXzFnQjA3XCIsXG5cdFwicGhvdG9fdG9nZ2xlcl9mb3J2YXJkXCI6IFwiaG9yaXpvbnRhbF9waG90b190b2dnbGVyX2ZvcnZhcmRfXzJiNmxSXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2NfdmVydF9jYXJvdXNlbF9oZWFkZXJcIjogXCJ2ZXJ0aWNhbF9sb2NfdmVydF9jYXJvdXNlbF9oZWFkZXJfX0tOY2lRXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIEZvcm0gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IFZlcmlmaWVkV2luZG93ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgYnV0dG9uTGFiZWwsXHJcbiAgICBjbGFzc05hbWVcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldE1vZGFsKCFtb2RhbCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Rm9ybSBpbmxpbmUgb25TdWJtaXQ9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJcIiBjbGFzc05hbWU9e2BwLTAgdGV4dC13aGl0ZWB9IG9uQ2xpY2s9e3RvZ2dsZX0+e2J1dHRvbkxhYmVsfTwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICA8TW9kYWwgaXNPcGVuPXttb2RhbH0gdG9nZ2xlPXt0b2dnbGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0b2dnbGV9IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdBdWRpb3dpZGUsIGN1cnNpdmUnIH19IGNsYXNzTmFtZT1cImJnLWRhcmsgdGV4dC1pbmZvIGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeVwiID5WaWJlIENpdHkgVmVyaWZpZWQ8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbEJvZHkgY2xhc3NOYW1lPVwiYmctZGFyayB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8cD5JbiBvcmRlciBmb3IgYW4gRXJvcyBhZHZlcnRpc2VyIHRvIGJlIGVsaWdpYmxlIHRvIGhhdmUgdGhlIFZlcmlmaWVkIHNlYWwgYWZmaXhlZCB0byB0aGVpciBhZHZlcnRpc2VtZW50IG9yIHRvIGJlIHBsYWNlZCBpbiBFcm9zJyBWZXJpZmllZCBjYXRlZ29yeSwgdGhlIEVyb3MgR3VpZGUgbXVzdCBoYXZlIHJlY2VpdmVkIHRhbmdpYmxlIGluZm9ybWF0aW9uIHRoYXQgdGhlIGluZGl2aWR1YWwgYXBwZWFyaW5nIGluIHRoZSBwaG90b2dyYXBocyBvbiBhbnkgc3BlY2lmaWMgYWR2ZXJ0aXNlbWVudCBpbnRlbmRlZCB0byBiZSBhZHZlcnRpc2VkIG9uIHRoZSBFcm9zIEd1aWRlIGlzIGFuIGluZGl2aWR1YWwgcHJvdmlkaW5nIGFkdWx0IGNvbXBhbmlvbnNoaXAuIFN1Y2ggcHJvb2YgY291bGQgaW5jbHVkZSBjb21wYXJpbmcgdGhlIHBpY3R1cmVzIHN1Ym1pdHRlZCB0byB0aGUgRXJvcyBHdWlkZSBvbiBhbiBhZHZlcnRpc2VtZW50IHdpdGggZWl0aGVyIGdvdmVybm1lbnQgaXNzdWVkIElE4oCZcyBvdGhlciBwaG90b2dyYXBoaWMgZXZpZGVuY2UuPC9wPlxyXG4gICAgICAgICAgPHA+SG93ZXZlciwgcGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIEVyb3MgR3VpZGUgY2Fubm90IGFuZCBkb2VzIG5vdCBtYWtlIGFueSBndWFyYW50ZWVzIG9yIHdhcnJhbnRpZXMgdGhhdCBlaXRoZXIgKGEpIHRoZSBhZHZlcnRpc2VyIGluIHRoZSBwaWN0dXJlcyBvbiBhbnkgcGFydGljdWxhciBhZCB3aWxsIGJlIHRoZSBzYW1lIGluZGl2aWR1YWwgd2hvIHNob3dzIHVwIGZvciBhbnkgZGF0ZSBhcnJhbmdlZCBiZXR3ZWVuIGFuIGFkdmVydGlzZXIgYW5kIHlvdXJzZWxmLCAoYikgdGhhdCBhbnkgb2YgdGhlIHRleHQsIGluY2x1ZGluZyB0aGUgbmFtZSBvZiB0aGUgYWR2ZXJ0aXNlciwgb3Igc3RhdHMgdGhhdCBhcHBlYXJzIG9uIGFuIGFkdmVydGlzZW1lbnQsIGlzIGFjY3VyYXRlIG9yIHRydXRoZnVsLiBGaW5hbGx5LCB0aGUgdGVybSDigJxWZXJpZmllZOKAnSBkb2VzIG5vdCBtZWFuIHRoYXQgRXJvcyBHdWlkZSBoYXMgcmV2aWV3ZWQgb3IgY29uZmlybWVkIGFueSBsaWNlbnN1cmUgb3IgcGVybWl0cyBpc3N1ZWQgdG8gdGhlIGFkdmVydGlzZXIuPC9wPlxyXG4gICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVyaWZpZWRXaW5kb3c7XHJcblxyXG5cclxuTW9kYWwucHJvcFR5cGVzID0ge1xyXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjZW50ZXJlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0b2dnbGU6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHJvbGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFiZWxsZWRCeTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBrZXlib2FyZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgYmFja2Ryb3A6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBQcm9wVHlwZXMub25lT2YoWydzdGF0aWMnXSlcclxuICBdKSxcclxuICBzY3JvbGxhYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uT3BlbmVkOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkNsb3NlZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHdyYXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbW9kYWxDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgYmFja2Ryb3BDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY29udGVudENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBmYWRlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjc3NNb2R1bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgekluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIF0pLFxyXG4gIHVubW91bnRPbkNsb3NlOiBQcm9wVHlwZXMuYm9vbCxcclxuICByZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IFByb3BUeXBlcy5ib29sXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL2Zvcm0ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGVsc0ZpbHRlcih7XHJcbiAgYXZhaWxhYmlsaXR5LFxyXG4gIGF2YWlsYWJsZV90byxcclxuICBldGhuaWNpdHksXHJcbiAgYWZmaWxpYXRpb24sXHJcbiAgZXllcyxcclxuICBoYWlyLFxyXG4gIGZpbHRlclBvc3RzLFxyXG4gIHNsaWRlRmlsdGVyXHJcbn0pIHtcclxuICBjb25zdCBbc2V4LCBzZXRTZXhdID0gdXNlU3RhdGUoWydnZW5kZXInLCAnJ10pO1xyXG4gIGNvbnN0IFthZ2VGcm9tLCBzZXRBZ2VGcm9tXSA9IHVzZVN0YXRlKFsnYWdlRnJvbScsIDBdKTtcclxuICBjb25zdCBbYWdlVG8sIHNldEFnZVRvXSA9IHVzZVN0YXRlKFsnYWdlVG8nLCAwXSk7XHJcbiAgY29uc3QgW3N0YXRlRXRobmljaXR5LCBzZXRFdGhuaWNpdHldID0gdXNlU3RhdGUoWydldGhuaWNpdHlfaWQnLCAnJ10pO1xyXG4gIGNvbnN0IFtzdGF0ZUhhaXIsIHNldEhhaXJdID0gdXNlU3RhdGUoWydoYWlyX2lkJywgJyddKTtcclxuICBjb25zdCBbc3RhdGVFeWUsIHNldEV5ZV0gPSB1c2VTdGF0ZShbJ2V5ZV9pZCcsICcnXSk7XHJcbiAgY29uc3QgW3N0YXRlQWZmaWxpYXRpb24sIHNldEFmZmlsaWF0aW9uXSA9IHVzZVN0YXRlKFsnYWZmaWxpYXRpb25faWQnLCAnJ10pO1xyXG4gIGNvbnN0IFtzdGF0ZUF2YWlsYWJsZVRvLCBzZXRBdmFpbGFibGVUb10gPSB1c2VTdGF0ZShbJ2F2YWlsYWJsZXRvX2lkcycsIFtdXSk7XHJcbiAgY29uc3QgW3N0YXRlQXZhaWxhYmlsaXR5LCBzZXRBdmFpbGFiaWxpdHldID0gdXNlU3RhdGUoWydhdmFpbGFiaWxpdHlfaWRzJywgW11dKTtcclxuXHJcbiAgY29uc3QgYXBwbHlGaWx0ZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZmlsdGVySXRlbXMgPSB7fTtcclxuICAgIG5ldyBQcm9taXNlKHJlcyA9PiB7XHJcbiAgICAgIFtzZXgsIHN0YXRlRXRobmljaXR5LCBzdGF0ZUhhaXIsIHN0YXRlRXllLCBzdGF0ZUFmZmlsaWF0aW9uLCBzdGF0ZUF2YWlsYWJsZVRvLCBzdGF0ZUF2YWlsYWJpbGl0eV0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbVsxXS50b1N0cmluZygpLmxlbmd0aCkge1xyXG4gICAgICAgICAgZmlsdGVySXRlbXNbaXRlbVswXV0gPSBpdGVtWzFdXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmVzKCk7XHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgZmlsdGVyUG9zdHMoZmlsdGVySXRlbXMpO1xyXG4gICAgICBzbGlkZUZpbHRlcigpO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17YXBwbHlGaWx0ZXJ9IGNsYXNzTmFtZT17cy5maWx0ZXJfZm9ybX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNleF9ibG9ja30+XHJcbiAgICAgICAgPGxlZ2VuZD5HZW5kZXI8L2xlZ2VuZD5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsfT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgdmFsdWU9XCJmZW1hbGVcIlxyXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICBuYW1lPVwic2V4XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZXgoWydnZW5kZXInLCBlLnRhcmdldC52YWx1ZV0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jaGVja21hcmt9Pjwvc3Bhbj5cclxuXHRcdFx0XHRcdEZlbWFsZVxyXG5cdFx0XHRcdDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgIHZhbHVlPVwibWFsZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgIG5hbWU9XCJzZXhcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNleChbJ2dlbmRlcicsIGUudGFyZ2V0LnZhbHVlXSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNoZWNrbWFya30+PC9zcGFuPlxyXG5cdFx0XHRcdFx0TWFsZVxyXG5cdFx0XHRcdDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7cy5hZ2VfYmxvY2t9IGZvcm0tZ3JvdXBgfT5cclxuICAgICAgICA8bGVnZW5kPkFnZTwvbGVnZW5kPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgbWluPVwiMThcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImZyb21cIlxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEFnZUZyb20oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwidG9cIlxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEFnZVRvKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7cy5ldGhuaWNpdHlfYmxvY2t9IGZvcm0tZ3JvdXBgfT5cclxuICAgICAgICA8bGVnZW5kPkV0aG5pY2l0eTo8L2xlZ2VuZD5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZHJvcGRvd25cIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFdGhuaWNpdHkoWydldGhuaWNpdHlfaWQnLCBlLnRhcmdldC52YWx1ZV0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gaGlkZGVuIHZhbHVlPVwiZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAtLSBzZWxlY3Qgb25lIC0tXHJcblx0XHRcdFx0XHQ8L29wdGlvbj5cclxuICAgICAgICAgIHtldGhuaWNpdHkubGVuZ3RoID8gZXRobmljaXR5Lm1hcChlID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2UuaWR9IHZhbHVlPXtlLmlkfT57ZS52YWx1ZX08L29wdGlvbj5cclxuICAgICAgICAgICkpIDogbnVsbH1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhhaXJfYmxvY2t9PlxyXG4gICAgICAgIDxsZWdlbmQ+SGFpcjwvbGVnZW5kPlxyXG4gICAgICAgIHtoYWlyLmxlbmd0aCA/XHJcbiAgICAgICAgICBoYWlyLm1hcChoID0+IChcclxuICAgICAgICAgICAgPGxhYmVsIGtleT17aC5pZH0gY2xhc3NOYW1lPXtzLmxhYmVsfT5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2guaWR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImhhaXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEhhaXIoWydoYWlyX2lkJywgZS50YXJnZXQudmFsdWVdKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jaGVja21hcmt9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICB7aC52YWx1ZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICkpIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5leWVfYmxvY2t9PlxyXG4gICAgICAgIDxsZWdlbmQ+RXllPC9sZWdlbmQ+XHJcbiAgICAgICAge2V5ZXMubGVuZ3RoID9cclxuICAgICAgICAgIGV5ZXMubWFwKGUgPT4gKFxyXG4gICAgICAgICAgICA8bGFiZWwga2V5PXtlLmlkfSBjbGFzc05hbWU9e3MubGFiZWx9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZS5pZH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZXllXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRFeWUoWydleWVfaWQnLCBlLnRhcmdldC52YWx1ZV0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNoZWNrbWFya30+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtlLnZhbHVlfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKSkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmFmZmlsaWF0aW9uX2Jsb2NrfT5cclxuICAgICAgICA8bGVnZW5kPkFmZmlsaWF0aW9uPC9sZWdlbmQ+XHJcbiAgICAgICAge2FmZmlsaWF0aW9uLmxlbmd0aCA/XHJcbiAgICAgICAgICBhZmZpbGlhdGlvbi5tYXAoYSA9PiAoXHJcbiAgICAgICAgICAgIDxsYWJlbCBrZXk9e2EuaWR9IGNsYXNzTmFtZT17cy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXthLmlkfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJhZmZpbGlhdGlvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0QWZmaWxpYXRpb24oWydhZmZpbGlhdGlvbl9pZCcsIGUudGFyZ2V0LnZhbHVlXSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY2hlY2ttYXJrfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAge2EudmFsdWV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYXZhaWxhYmxlVG9fYmxvY2t9PlxyXG4gICAgICAgIDxsZWdlbmQ+IEF2YWlsYWJsZSBUbzo8L2xlZ2VuZD5cclxuICAgICAgICB7YXZhaWxhYmxlX3RvLmxlbmd0aCA/XHJcbiAgICAgICAgICBhdmFpbGFibGVfdG8ubWFwKGEgPT4gKFxyXG4gICAgICAgICAgICA8bGFiZWwga2V5PXthLmlkfSBjbGFzc05hbWU9e3MubGFiZWx9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2EuaWR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBdmFpbGFibGVUbyhbXHJcbiAgICAgICAgICAgICAgICAgICAgICAnYXZhaWxhYmxldG9faWRzJyxcclxuICAgICAgICAgICAgICAgICAgICAgIFsuLi5zdGF0ZUF2YWlsYWJsZVRvWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWVdXHJcbiAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jaGVja3NpZ259Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICB7YS52YWx1ZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICkpIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5hdmFpbGFiaWxpdHlfYmxvY2t9PlxyXG4gICAgICAgIDxsZWdlbmQ+QXZhaWxhYmlsaXR5OjwvbGVnZW5kPlxyXG4gICAgICAgIHthdmFpbGFiaWxpdHkubGVuZ3RoID9cclxuICAgICAgICAgIGF2YWlsYWJpbGl0eS5tYXAoYSA9PiAoXHJcbiAgICAgICAgICAgIDxsYWJlbCBrZXk9e2EuaWR9IGNsYXNzTmFtZT17cy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YS5pZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEF2YWlsYWJpbGl0eShbXHJcbiAgICAgICAgICAgICAgICAgICAgICAnYXZhaWxhYmlsaXR5X2lkcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBbLi4uc3RhdGVBdmFpbGFiaWxpdHlbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZV1cclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNoZWNrc2lnbn0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHthLnZhbHVlfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKSkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17YHJvdW5kZWQgYm9yZGVyLTAgJHtzLmJ0bl9zdWJtaXR9YH0+XHJcbiAgICAgICAgU2hvd1xyXG5cdFx0XHQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZpbHRlcl9mb3JtXCI6IFwiZm9ybV9maWx0ZXJfZm9ybV9fMjhDRU5cIixcblx0XCJzZXhfYmxvY2tcIjogXCJmb3JtX3NleF9ibG9ja19fM0llQ2JcIixcblx0XCJhZ2VfYmxvY2tcIjogXCJmb3JtX2FnZV9ibG9ja19fM1FFbVNcIixcblx0XCJldGhuaWNpdHlfYmxvY2tcIjogXCJmb3JtX2V0aG5pY2l0eV9ibG9ja19fMmxXNTdcIixcblx0XCJoYWlyX2Jsb2NrXCI6IFwiZm9ybV9oYWlyX2Jsb2NrX18xaGZHNVwiLFxuXHRcImV5ZV9ibG9ja1wiOiBcImZvcm1fZXllX2Jsb2NrX19SaVlwWFwiLFxuXHRcImFmZmlsaWF0aW9uX2Jsb2NrXCI6IFwiZm9ybV9hZmZpbGlhdGlvbl9ibG9ja19fMTRYNmJcIixcblx0XCJhdmFpbGFibGVUb19ibG9ja1wiOiBcImZvcm1fYXZhaWxhYmxlVG9fYmxvY2tfXzJpak5CXCIsXG5cdFwiYXZhaWxhYmlsaXR5X2Jsb2NrXCI6IFwiZm9ybV9hdmFpbGFiaWxpdHlfYmxvY2tfXzF6Vm1UXCIsXG5cdFwiYnRuX3N1Ym1pdFwiOiBcImZvcm1fYnRuX3N1Ym1pdF9fM1FLWVpcIixcblx0XCJsYWJlbFwiOiBcImZvcm1fbGFiZWxfXzI0Z1RZXCIsXG5cdFwiY2hlY2ttYXJrXCI6IFwiZm9ybV9jaGVja21hcmtfXzNLS2xmXCIsXG5cdFwiY2hlY2tzaWduXCI6IFwiZm9ybV9jaGVja3NpZ25fXzJlZjRSXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS1wYWdlL0xvY2F0aW9uXCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS1wYWdlL1NlYXJjaFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lLXBhZ2UvQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQgTG9jYXRpb25QYWdlQ29udHJvbCBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2NhdGlvbi1wYWdlL0xvY1BhZ2VDb250cm9sXCI7XHJcbmltcG9ydCBMb2NIb3JDYXJvdXNlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2NhdGlvbi1wYWdlL0xvY0hvckNhcm91c2VsXCI7XHJcbmltcG9ydCBMb2NWZXJ0Q2Fyb3VzZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9jYXRpb24tcGFnZS9Mb2NWZXJ0Q2Fyb3VzZWxcIjtcclxuaW1wb3J0IExvY1BhZ2VGb290IGZyb20gXCIuLi9jb21wb25lbnRzL2xvY2F0aW9uLXBhZ2UvTG9jUGFnZUZvb3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGdldEFsbFBvc3RzLCBnZXROZXdQb3N0cywgZmlsdGVyUG9zdHMsIGFkZFRvRmF2b3JpdGVzLCBnZXRDaXRpZXMgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2FjdGlvbnMnXHJcblxyXG5mdW5jdGlvbiBMb2NhdGlvblBhZ2UocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb3BzLmdldENpdGllcyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgcHJvcHMuZ2V0QWxsUG9zdHMoKTtcclxuICAgIHByb3BzLmdldE5ld1Bvc3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExvY2F0aW9uIHN0YXRlcz17cHJvcHMuc3RhdGVzfVxyXG4gICAgICAgIGZpbHRlclBvc3RzPXtwcm9wcy5maWx0ZXJQb3N0c31cclxuICAgICAgICBnZXRDaXRpZXM9e3Byb3BzLmdldENpdGllc30gLz5cclxuICAgICAgPFNlYXJjaCAvPlxyXG4gICAgICA8Q2F0ZWdvcmllc1xyXG4gICAgICAgIGNhdGVnb3JpZXM9e3Byb3BzLmNhdGVnb3JpZXN9XHJcbiAgICAgICAgbmV3UG9zdHM9e3Byb3BzLm5ld1Bvc3RzfVxyXG4gICAgICAgIGZpbHRlclBvc3RzPXtwcm9wcy5maWx0ZXJQb3N0c31cclxuICAgICAgLz5cclxuICAgICAgPExvY2F0aW9uUGFnZUNvbnRyb2xcclxuICAgICAgICBjaXRpZXM9e3Byb3BzLmNpdGllc31cclxuICAgICAgICBmaWx0ZXJQb3N0cz17cHJvcHMuZmlsdGVyUG9zdHN9XHJcbiAgICAgICAgYXZhaWxhYmlsaXR5PXtwcm9wcy5hdmFpbGFiaWxpdHl9XHJcbiAgICAgICAgYXZhaWxhYmxlX3RvPXtwcm9wcy5hdmFpbGFibGVfdG99XHJcbiAgICAgICAgZXRobmljaXR5PXtwcm9wcy5ldGhuaWNpdHl9XHJcbiAgICAgICAgYWZmaWxpYXRpb249e3Byb3BzLmFmZmlsaWF0aW9ufVxyXG4gICAgICAgIGZpbHRlclBvc3RzPXtwcm9wcy5maWx0ZXJQb3N0c31cclxuICAgICAgICBleWVzPXtwcm9wcy5leWVzfVxyXG4gICAgICAgIGhhaXI9e3Byb3BzLmhhaXJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxMb2NIb3JDYXJvdXNlbCBwb3N0cz17cHJvcHMucG9zdHN9XHJcbiAgICAgICAgYWRkVG9GYXZvcml0ZXM9e3Byb3BzLmFkZFRvRmF2b3JpdGVzfSAvPlxyXG4gICAgICA8TG9jVmVydENhcm91c2VsIHBvc3RzPXtwcm9wcy5wb3N0c31cclxuICAgICAgICBhZGRUb0Zhdm9yaXRlcz17cHJvcHMuYWRkVG9GYXZvcml0ZXN9IC8+XHJcbiAgICAgIDxMb2NQYWdlRm9vdCBmaWx0ZXJQb3N0cz17cHJvcHMuZmlsdGVyUG9zdHN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXRlczogc3RhdGUuYXBwLnN0YXRlcyxcclxuICAgIGNhdGVnb3JpZXM6IHN0YXRlLmFwcC5jYXRlZ29yaWVzLFxyXG4gICAgY2l0aWVzOiBzdGF0ZS5hcHAuY2l0aWVzLFxyXG4gICAgcG9zdHM6IHN0YXRlLmFwcC5wb3N0cyxcclxuICAgIG5ld1Bvc3RzOiBzdGF0ZS5hcHAubmV3UG9zdHMsXHJcbiAgICBhdmFpbGFiaWxpdHk6IHN0YXRlLmFwcC5hdmFpbGFiaWxpdHksXHJcbiAgICBhdmFpbGFibGVfdG86IHN0YXRlLmFwcC5hdmFpbGFibGVfdG8sXHJcbiAgICBldGhuaWNpdHk6IHN0YXRlLmFwcC5ldGhuaWNpdHksXHJcbiAgICBleWVzOiBzdGF0ZS5hcHAuZXllcyxcclxuICAgIGhhaXI6IHN0YXRlLmFwcC5oYWlyLFxyXG4gICAgYWZmaWxpYXRpb246IHN0YXRlLmFwcC5hZmZpbGlhdGlvblxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gIGdldENpdGllcywgZ2V0QWxsUG9zdHMsIGdldE5ld1Bvc3RzLCBmaWx0ZXJQb3N0cywgYWRkVG9GYXZvcml0ZXNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTG9jYXRpb25QYWdlKTtcclxuIiwiaW1wb3J0IHsgVEVTVF9DUkVBVEVfUE9TVCwgU0hPV19MT0FERVIsIEhJREVfTE9BREVSLCBTSE9XX0FMRVJULCBISURFX0FMRVJULCBURVNUX1JFUVVFU1RfUE9TVFMsIEdFVF9BTExfUE9TVFMsIEdFVF9MT0NBSVRPTlNfSU5GTywgR0VUX0NJVElFUywgQ1JFQVRFX1NVUFBPUlRfVEFTSywgR0VUX0FMTF9VU0VSX1RBU0tTLCBHRVRfQVBQX0lORk8sIEdFVF9ORVdfUE9TVFMsIEdFVF9QQUdFU19OVU1CRVIsIEdFVF9QT1NUX0NPTU1FTlRTLCBDUkVBVEVfUE9TVF9DT01NRU5ULCBGSUxURVJfUE9TVFMsIEdFVF9GQVZPUklURVMsIEdFVF9DT01QTEFJTlMsIFNPUlRfUE9TVFMgfSBmcm9tIFwiLi90eXBlc1wiXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgeyBhdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vX3NlcnZpY2VzXCI7XHJcblxyXG4vLyBUIEUgUyBUIFxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUG9zdChwb3N0OiBhbnkpOiBhbnkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBURVNUX0NSRUFURV9QT1NULFxyXG4gICAgICAgIHBheWxvYWQ6IHBvc3RcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dMb2FkZXIoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFNIT1dfTE9BREVSXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMb2FkZXIoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IEhJREVfTE9BREVSXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBbGVydCh0ZXh0OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNIT1dfQUxFUlQsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHRleHRcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChoaWRlQWxlcnQoKSlcclxuICAgICAgICB9LCAzMDAwKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlQWxlcnQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IEhJREVfQUxFUlRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb3N0cygpOiBhbnkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBURVNUX1JFUVVFU1RfUE9TVFNcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IGdldEFsbFBvc3RzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0c2ApO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX1BBR0VTX05VTUJFUiwgcGF5bG9hZDogcmVzLmxhc3RfcGFnZSB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9BTExfUE9TVFMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0TmV3UG9zdHMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzL2FsbC9uZXdgKTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfTkVXX1BPU1RTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldExvY2F0aW9uc0luZm8gPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2xvY2F0aW9uYCk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0xPQ0FJVE9OU19JTkZPLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldEFwcEluZm8gPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2luZm9gKTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfQVBQX0lORk8sIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0Q2l0aWVzID0gKHN0YXRlSWQ6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvbG9jYXRpb24vY2l0aWVzLyR7c3RhdGVJZH1gKTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfQ0lUSUVTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVN1cHBvcnRUYXNrID0gKHRhc2s6IGFueSkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9zdXBwb3J0L2NyZWF0ZWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGFzaylcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHByb21pc2UudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcclxuICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IENSRUFURV9TVVBQT1JUX1RBU0ssIHBheWxvYWQ6IHRhc2sgfSlcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0QWxsVXNlcnNUYXNrcyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvc3VwcG9ydC8ke3VzZXIudXNlci5pZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9BTExfVVNFUl9UQVNLUywgcGF5bG9hZDogcmVzIH0pO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcclxufVxyXG5leHBvcnQgY29uc3Qgc2VsZWN0UG9zdHNQYWdlID0gKHBhZ2U6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cz9wYWdlPSR7cGFnZX1gKTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9QQUdFU19OVU1CRVIsIHBheWxvYWQ6IHJlcy5sYXN0X3BhZ2UgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfQUxMX1BPU1RTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldFBvc3RDb21tZW50cyA9IChwb3N0SWQ6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cy8ke3Bvc3RJZH0vY29tbWVudHNgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX1BPU1RfQ09NTUVOVFMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTs7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3RDb21tZW50ID0gKHBvc3RJZDogbnVtYmVyIHwgc3RyaW5nLCBjb21tZW50OiBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvJHtwb3N0SWR9L2NvbW1lbnRzL2NyZWF0ZWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb21tZW50IH0pXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IENSRUFURV9QT1NUX0NPTU1FTlQsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTs7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGZpbHRlclBvc3RzID0gKGZpbHRlckl0ZW1zT2JqZWN0OiBhbnkpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcclxuICAgIC8vIGZyb20sIHRvLCBnZW5kZXIsIGV0aG5pY2l0eV9pZCwgaGFpcl9pZCwgZXllX2lkLCBjYXRlZ29yeV9pZCwgYWZmaWxpYXRpb25faWQsIGF2YWlsYWJpbGl0eV9pZHMoYXJyYXkpLCBhdmFpbGFibGV0b19pZHMoYXJyYXkpXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2ZpbHRlcmAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZpbHRlckl0ZW1zT2JqZWN0KVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX1BBR0VTX05VTUJFUiwgcGF5bG9hZDogcmVzLmxhc3RfcGFnZSB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEZJTFRFUl9QT1NUUywgcGF5bG9hZDogcmVzLmRhdGEuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7O1xyXG59XHJcbmV4cG9ydCBjb25zdCByZXBvcnRQb3N0ID0gKHBvc3RJZDogbnVtYmVyIHwgc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcclxuICAgIHJldHVybiBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS8ke3Bvc3RJZH0vY29tcGxhaW50cy9hZGRgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbWVzc2FnZSwgc3RhdHVzOiAnSW4gcHJvZ3Jlc3MnXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgLy8gY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIC8vIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgIC8vICAgICBkaXNwYXRjaCh7IHR5cGU6IFJFUE9SVF9QT1NUIH0pO1xyXG4gICAgLy8gfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGFkZFRvRmF2b3JpdGVzID0gKHBvc3RJZDogbnVtYmVyIHwgc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XHJcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvJHtwb3N0SWR9L2Zhdm9yaXRlcy9hZGRgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgaXNfZmF2b3JpdGU6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGFkZFRvRmF2b3JpdGVzQnVzaW5lc3MgPSAocG9zdElkOiBudW1iZXIgfCBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcclxuICAgIHJldHVybiBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cy8ke3Bvc3RJZH0vZmF2b3JpdGVzX2J1c2luZXNzL2FkZGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldEZhdm9yaXRlc0J1c2luZXNzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9mYXZvcml0ZXNfYnVzaW5lc3MvbXlgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfRkFWT1JJVEVTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldEZhdm9yaXRlc1VzZXIgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2Zhdm9yaXRlcy9teWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9GQVZPUklURVMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0Q29tcGxhaW5zID0gKHVzZXJJZDogbnVtYmVyIHwgc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzL2NvbXBsYWludHMvdXNlci8ke3VzZXJJZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfQ09NUExBSU5TLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IHNvcnRQb3N0cyA9IChzb3J0VHlwZTogc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBTT1JUX1BPU1RTLCBwYXlsb2FkOiBzb3J0VHlwZSB9KVxyXG59XHJcbiIsIi8vIHRlc3RcclxuZXhwb3J0IGNvbnN0IFRFU1RfQ1JFQVRFX1BPU1QgPSAnQ1JFQVRFX1BPU1QnO1xyXG5leHBvcnQgY29uc3QgVEVTVF9GRVRDSF9QT1NUID0gJ0ZFVENIX1BPU1QnO1xyXG5leHBvcnQgY29uc3QgVEVTVF9SRVFVRVNUX1BPU1RTID0gJ1JFUVVFU1RfUE9TVFMnO1xyXG5cclxuLy8gYXBwXHJcbmV4cG9ydCBjb25zdCBTSE9XX0xPQURFUiA9ICdBUFAvU0hPV19MT0FERVInO1xyXG5leHBvcnQgY29uc3QgSElERV9MT0FERVIgPSAnQVBQL0hJREVfTE9BREVSJztcclxuZXhwb3J0IGNvbnN0IFNIT1dfQUxFUlQgPSAnQVBQL1NIT1dfQUxFUlQnO1xyXG5leHBvcnQgY29uc3QgSElERV9BTEVSVCA9ICdBUFAvSElERV9BTEVSVCc7IFxyXG5leHBvcnQgY29uc3QgR0VUX0FMTF9QT1NUUyA9ICdHRVRfQUxMX1BPU1RTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9QQUdFU19OVU1CRVIgPSAnR0VUX1BBR0VTX05VTUJFUic7XHJcbmV4cG9ydCBjb25zdCBHRVRfTkVXX1BPU1RTID0gJ0dFVF9ORVdfUE9TVFMnO1xyXG5leHBvcnQgY29uc3QgR0VUX0xPQ0FJVE9OU19JTkZPID0gJ0dFVF9MT0NBSVRPTlNfSU5GTyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0lUSUVTID0gJ0dFVF9DSVRJRVMnO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1NVUFBPUlRfVEFTSyA9ICdDUkVBVEVfU1VQUE9SVF9UQVNLJztcclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfVVNFUl9UQVNLUyA9ICdHRVRfQUxMX1VTRVJfVEFTS1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX0FQUF9JTkZPID0gJ0dFVF9BUFBfSU5GTyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfUE9TVF9DT01NRU5UUyA9ICdHRVRfUE9TVF9DT01NRU5UUyc7XHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TVF9DT01NRU5UID0gJ0NSRUFURV9QT1NUX0NPTU1FTlQnO1xyXG5leHBvcnQgY29uc3QgRklMVEVSX1BPU1RTID0gJ0ZJTFRFUl9QT1NUUyc7XHJcbmV4cG9ydCBjb25zdCBSRVBPUlRfUE9TVCA9ICdSRVBPUlRfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVTID0gJ0dFVF9GQVZPUklURVMnO1xyXG5leHBvcnQgY29uc3QgR0VUX0NPTVBMQUlOUyA9ICdHRVRfR0VUX0NPTVBMQUlOUyc7XHJcbmV4cG9ydCBjb25zdCBTT1JUX1BPU1RTID0gJ1NPUlRfUE9TVFMnO1xyXG5cclxuLy8gcHJvdmlkZXJcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUID0gJ1BST1ZJREVSL0FERF9QT1NUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUID0gJ1BST1ZJREVSL1JFTU9WRV9QT1NUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NUID0gJ1BST1ZJREVSL1VQREFURV9QT1NUJztcclxuXHJcbi8vIHByb3ZpZGVyXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvdmlkZXJQb3N0IHtcclxuICBpZDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBzZWNvbmROYW1lOiBzdHJpbmcsXHJcbiAgYWNjb3VudGluZ05hbWU6IHN0cmluZyxcclxuICBzZXg6IHN0cmluZyxcclxuICBhZ2U6IG51bWJlciB8IHN0cmluZyxcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBob25lOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgZXRobml0aGl0eTogc3RyaW5nLFxyXG4gIGhhaXI6IHN0cmluZyxcclxuICBleWVzOiBzdHJpbmcsXHJcbiAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgYWZmaWxpYXRpb246IHN0cmluZyxcclxuICBhdmFpbGFibGVUbzogc3RyaW5nLFxyXG4gIGF2YWlsYWJpbGl0eTogc3RyaW5nLFxyXG4gIHNob3J0U3VtbWFyeTogc3RyaW5nLFxyXG4gIGFib3V0OiBzdHJpbmcsXHJcbiAgcGhvdG9zOiBzdHJpbmdbXSxcclxuICB2aWRlb3M6IHN0cmluZ1tdXHJcbn1cclxuXHJcbi8vIHVzZXJcclxuZXhwb3J0IGNvbnN0IFNFTEVDVF9TVEFURSA9ICdVU0VSL1NFTEVDVF9TVEFURSc7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RfQ0lUWSA9ICdVU0VSL1NFTEVDVF9DSVRZJztcclxuZXhwb3J0IGNvbnN0IFNFTEVDVF9MSVNUX1NPUlQgPSAnVVNFUi9TRUxFQ1RfTElTVF9TT1JUJztcclxuZXhwb3J0IGNvbnN0IFNFTEVDVF9MSVNUX0ZJTFRFUiA9ICdVU0VSL1NFTEVDVF9MSVNUX0ZJTFRFUic7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RfQ0FURUdPUlkgPSAnVVNFUi9TRUxFQ1RfQ0FURUdPUlknO1xyXG5cclxuLy8gYWRtaW5cclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfU1VQUE9SVF9UQVNLUyA9ICdHRVRfQUxMX1NVUFBPUlRfVEFTS1MnO1xyXG5leHBvcnQgY29uc3QgRURJVF9TVVBQT1JUX1RBU0tTID0gJ0VESVRfU1VQUE9SVF9UQVNLUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfU1VQUE9SVF9UQVNLID0gJ0RFTEVURV9TVVBQT1JUX1RBU0snO1xyXG4vLyBleHBvcnQgY29uc3QgQ1JFQVRFX0NBVEVHT1JZID0gJ0NSRUFURV9DQVRFR09SWSc7XHJcbi8vIGV4cG9ydCBjb25zdCBFRElUX0NBVEVHT1JZID0gJ0VESVRfQ0FURUdPUlknO1xyXG4vLyBleHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZID0gJ0RFTEVURV9DQVRFR09SWSc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpc3RvcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==