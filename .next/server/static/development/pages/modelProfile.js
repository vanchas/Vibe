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
  } else {
    return promise.then(data => _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__["showAlert"])(data.message))).catch(err => console.error("Error:", err));
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
  } else {
    return promise.then(data => _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__["showAlert"])(data.message))).catch(err => console.error("Error:", err));
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
  } else {
    return promise.then(data => _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__["showAlert"])(data.message))).catch(err => console.error("Error:", err));
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
  } else {
    return promise.then(data => _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__["showAlert"])(data.message))).catch(err => console.error("Error:", err));
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
  } else {
    return promise.then(data => _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__["showAlert"])(data.message))).catch(err => console.error("Error:", err));
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
        router.push(`/location?id=${state.id}`);
      }
    });
  };

  return __jsx("section", {
    className: _location_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.location_wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, states.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `text-white ${_location_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.locaton_block_title}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "SELECT A LOCATION BELOW")), __jsx("div", {
    className: _location_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.location_block_select,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("select", {
    className: "form-control",
    onChange: e => changeLocation(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "default",
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Location"), states.map((state, i) => __jsx("option", {
    key: i,
    value: state.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, state.name)))), __jsx("div", {
    className: _location_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.location_block_list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
        lineNumber: 39,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: {
        pathname: `/location`,
        query: {
          id: state.id
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: currentLocation === state ? 'active_btn_blue' : '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
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
  const {
    0: index,
    1: setIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return __jsx("div", {
    style: {
      margin: '0 auto',
      maxWidth: '1260px'
    },
    className: _categories_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.new_posts_carousel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, newPosts && newPosts.length ? newPosts.map((post, i) => __jsx("div", {
    key: i,
    className: _categories_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
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
      lineNumber: 53,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 88
    }
  }, __jsx("img", {
    src: post.photo_vertical,
    alt: "model",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, post.model_name))))) // <Slider {...settings}>
  //     {newPosts.map((post, i) => (
  //     <div key={i}>
  //         <div className={s.slide}>
  //             <Link href={{pathname: "/modelProfile", query: {id: post.id}}}>
  //                 <a>
  //                     <img src={post.photo_vertical} alt="model" className="w-100"/>
  //                     <div>
  //                         <span>{post.model_name}</span>
  //                     </div>
  //                 </a>
  //             </Link>
  //         </div>
  //     </div>
  //     ))}
  //  </Slider>
  : __jsx("div", {
    className: `text-center text-info py-5`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
	"new_posts_carousel": "categories_new_posts_carousel__2XXhY",
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
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/model-profile/ModelProfileCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function postProfileCard({
  posts,
  postComments,
  createPostComment,
  reportPost,
  alert,
  showAlert,
  addToFavorites
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
  }, __jsx(_ProfileCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    photo: [post.photo_horizontal, post.photo_vertical],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_ProfileVideo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    videoLink: post.video_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.report_btn_group,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(_ReportFakePhotos__WEBPACK_IMPORTED_MODULE_8__["default"], {
    reportPost: reportPost,
    buttonLabel: 'Report Fake Photos',
    className: ``,
    postId: post.postId,
    alert: alert,
    showAlert: showAlert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }), __jsx(_ReportTrafficking__WEBPACK_IMPORTED_MODULE_9__["default"], {
    buttonLabel: 'Report Trafficking',
    className: ``,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: `${_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.favorite_btn} text-white`,
    onClick: () => addToFavorites(post.id),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Add to favourites")), __jsx("div", {
    className: `text-white ${_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content_block}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content_block_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, post.first_name, " ", post.second_name), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, post.status), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: _assets_images_main_signs_favorite_pink_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    onClick: () => addToFavorites(post.id),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: _assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: _assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: _assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content_block_description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, "Summary"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, post.summary)), __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contacts_blue_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, post.is_verify ? 'VERIFIED VIP OTHER' : null), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, post.email ? __jsx("a", {
    href: `mailto:${post.email}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, post.email) : 'No access to see email...', post.number ? __jsx("a", {
    href: `tel:+${post.number}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  }, "+", post.number) : 'No access to see number...')), __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main_content_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text_block_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, "About"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, post.about)), __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.details_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "DETAILS"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("dl", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, "Category:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, post.category.name), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, "Gender:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, post.gender), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, "Age:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, post.age), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, "Ethnicity:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, post.ethnicity.value), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, "Hair Color:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, post.hair.value), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, "Eye Color:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, post.eye.value), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }, "Height:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, post.height), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, "Affiliation:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, post.affiliation.value), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, "Available To:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, post.availableto.map(a => a.value + ' ')), __jsx("dl", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, "Availability:"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, post.availability.map(a => a.value + ' ')))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, "CONTACT DETAILS"), post.number ? __jsx("a", {
    href: `tel:+${post.number}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }, "+", post.number) : 'No access to see number...', post.email ? __jsx("a", {
    href: `mailto:${post.email}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }, post.email) : 'No access to see email...')))), postComments && postComments.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.add_comment_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "text-white",
    onClick: async () => {
      if (commentText.length) {
        await createPostComment(router.query.id, commentText);
        setComment('');
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, "LEAVE A COMMENT"), __jsx("textarea", {
    onChange: e => setComment(e.target.value),
    rows: "8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comments_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: `${_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comments_block_title} text-white`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, "COMMENTS"), __jsx("ul", {
    className: "list-group p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, postComments.map((c, i) => __jsx("li", {
    key: i,
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comment_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, c.user.name), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, c.created_at.split('T')[0].split('-').join(' . '))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 19
    }
  }, c.comment))))), " ") : null) : __jsx("div", {
    className: "text-center py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "spinner-border text-info",
    role: "status",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/model-profile/ProfileCarousel.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ProfileCarousel({
  photo
}) {
  const {
    0: currentIndex,
    1: setCurrentIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const autoSlide = delay => {
    setInterval(() => {
      changePhotoForvard();
    }, delay);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setCurrentIndex(0);
  }, []);

  const changePhotoForvard = () => {
    if (photo.length > 1) {
      if (currentIndex < photo.length - 1) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.model-photo').fadeOut(() => {
          setCurrentIndex(currentIndex + 1);
          setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.model-photo').fadeIn();
          }, 100);
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.model-photo').fadeOut(() => {
          setCurrentIndex(0);
          setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.model-photo').fadeIn();
          }, 100);
        });
      }
    }
  };

  const changePhotoBack = () => {
    if (photo.length > 1) {
      if (currentIndex > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.model-photo').fadeOut(() => {
          setCurrentIndex(currentIndex - 1);
          setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.model-photo').fadeIn();
          }, 100);
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.model-photo').fadeOut(() => {
          setCurrentIndex(photo.length - 1);
          setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.model-photo').fadeIn();
          }, 100);
        });
      }
    }
  };

  return __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.photo_slider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, photo.length > 1 ? __jsx("span", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.photo_toggler_back,
    onClick: changePhotoBack,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "<") : null, __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: photo[currentIndex],
    className: "model-photo",
    alt: "model",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  })), photo.length > 1 ? __jsx("span", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.photo_toggler_forvard,
    onClick: changePhotoForvard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, ">") : null);
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
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/model-profile/ProfileVideo.jsx";
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
    allowFullScreen: true,
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/model-profile/ProfilesControl.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ProfilesControl({
  posts
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const showPreviousPost = async () => {
    if (router.query.id === '1') {
      await router.push(`/modelProfile?id=${posts.length}`);
      window.location.reload(true);
    } else {
      await router.push(`/modelProfile?id=${+router.query.id - 1}`);
      window.location.reload(true);
    }
  };

  const showNextPost = async () => {
    if (+router.query.id === +posts.length) {
      await router.push(`/modelProfile?id=1`);
      window.location.reload(true);
    } else {
      await router.push(`/modelProfile?id=${+router.query.id + 1}`);
      window.location.reload(true);
    }
  };

  return __jsx("div", {
    className: `text-white ${_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profile_control}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profile_control_buttons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("span", {
    onClick: showPreviousPost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "PREVIUS"), __jsx("span", {
    onClick: showNextPost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "NEXT")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 32
    }
  }, "CLOSE"))))));
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
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/model-profile/ReportFakePhotos.jsx";
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
  const {
    0: link,
    1: setLink
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const toggle = () => setModal(!modal);

  const reportHandler = () => {
    if (link.trim().length) {
      props.reportPost(props.postId, link);
      toggle();
    } else {
      props.showAlert('Link cannot be empty');
    }
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    inline: true,
    onSubmit: e => e.preventDefault(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "",
    className: `font-weight-bold text-white w-100 ${_profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.report_btn}`,
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, buttonLabel)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
      lineNumber: 32,
      columnNumber: 9
    }
  }, buttonLabel), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
    className: "pb-0 bg-dark text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Want to report fake photos on this ad? If so, use the box below to enter a link to the webpage that provides potential evidence of misuse, and VibeCity will investigate your claim. If you are owner of the photos in question, follow the DMCA link at the bottom of the page."), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 14
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, "IMPORTANT"), ": VibeCity takes the misuse of photographs seriously and will investigate any reasonable evidence of misuse provided to us. However, because it is not uncommon for well known models and adult stars to advertise on VibeCity, or for adult entertainers to advertise on numerous adult websites, often times under alternate names, the information you provide may or may not always result in the removal of the advertisement, or in any action at all. Please also be aware that the VibeCity Guide cannot and does not make any guarantees or warranties that either (a) the advertiser in the pictures on any particular ad will be the same individual who shows up for any date arranged between an advertiser and yourself, (b) that any of the text, including the name of the advertiser, or stats that appears on an advertisement is accurate or truthful."))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    className: "container bg-dark text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    className: "w-100 d-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Link for Evidence of Misuse:", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "url",
    onChange: e => setLink(e.target.value),
    className: "w-100 d-block bg-dark text-white boredr border-secondary",
    placeholder: "http://...",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalFooter"], {
    className: "bg-dark text-white border-top border-secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "info",
    onClick: reportHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "SEND REPORT"), ' ', __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "secondary",
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/model-profile/ReportTrafficking.jsx";
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
	"photo_slider": "profile_photo_slider__2GJA-",
	"slide": "profile_slide__2nG68",
	"photo_toggler_back": "profile_photo_toggler_back__3udL0",
	"photo_toggler_forvard": "profile_photo_toggler_forvard__1Lfvk",
	"image_block": "profile_image_block__2voGo",
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
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/pages/modelProfile.jsx";
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
      lineNumber: 31,
      columnNumber: 3
    }
  }, __jsx(_components_home_page_Location__WEBPACK_IMPORTED_MODULE_2__["default"], {
    states: props.states,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }
  }), __jsx(_components_home_page_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }), __jsx(_components_home_page_Categories__WEBPACK_IMPORTED_MODULE_1__["default"], {
    categories: props.categories,
    newPosts: props.newPosts,
    filterPosts: props.filterPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }), __jsx(_components_model_profile_ProfilesControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    posts: props.posts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }), __jsx(_components_model_profile_ModelProfileCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    posts: props.posts,
    postComments: props.postComments,
    createPostComment: props.createPostComment,
    getAllPosts: props.getAllPosts,
    reportPost: props.reportPost,
    alert: props.alert,
    showAlert: props.showAlert,
    addToFavorites: props.addToFavorites,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
    newPosts: state.app.newPosts,
    alert: state.app.alert
  });
};

const mapDispatchToPops = {
  getAllPosts: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["getAllPosts"],
  getLocationsInfo: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["getLocationsInfo"],
  selectPostsPage: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["selectPostsPage"],
  getPostComments: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["getPostComments"],
  createPostComment: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["createPostComment"],
  filterPosts: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["filterPosts"],
  reportPost: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["reportPost"],
  showAlert: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["showAlert"],
  addToFavorites: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["addToFavorites"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToPops)(ModelProfile));

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



const preloadedState = {};
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__["default"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a));
store.subscribe(() => {
  console.log('updated state: ', store.getState());
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 5:
/*!******************************************!*\
  !*** multi ./src/pages/modelProfile.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dev-2/WebstormProjects/vibe/src/pages/modelProfile.jsx */"./src/pages/modelProfile.jsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX3NlcnZpY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvY3Jvd24tcGluay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9mYXZvcml0ZS1waW5rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3BsYW5lLXBpbmsucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvc3Rhci1waW5rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvQ2F0ZWdvcmllcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL0xvY2F0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvTmV3UG9zdHMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9TZWFyY2guanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9jYXRlZ29yaWVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9sb2NhdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2Uvc2VhcmNoLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGVsLXByb2ZpbGUvTW9kZWxQcm9maWxlQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwtcHJvZmlsZS9Qcm9maWxlQ2Fyb3VzZWwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGVsLXByb2ZpbGUvUHJvZmlsZVZpZGVvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RlbC1wcm9maWxlL1Byb2ZpbGVzQ29udHJvbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwtcHJvZmlsZS9SZXBvcnRGYWtlUGhvdG9zLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RlbC1wcm9maWxlL1JlcG9ydFRyYWZmaWNraW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RlbC1wcm9maWxlL3Byb2ZpbGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL21vZGVsUHJvZmlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYWRtaW5SZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9hcHBSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9wcm92aWRlclJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy90ZXN0UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvdXNlclJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3N0b3JlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpxdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91cmwiLCJfdXRpbHMiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJpc0xvY2FsIiwiaHJlZiIsInVybCIsInBhcnNlIiwib3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJob3N0IiwicHJvdG9jb2wiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdEZ1bmMiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJhcyIsInJlc3VsdCIsImZvcm1hdFVybCIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwib2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiTGluayIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJwIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwiZSIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlc29sdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbCIsImluZGV4T2YiLCJyZXBsYWNlIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiam9pbiIsIm9wdGlvbnMiLCJwYXRocyIsImNhdGNoIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwidHlwZSIsInByb2Nlc3MiLCJjbG9uZUVsZW1lbnQiLCJleGVjT25jZSIsIlByb3BUeXBlcyIsImV4YWN0IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJlbGVtZW50IiwicHJvcE5hbWUiLCJ2YWx1ZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIlJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJldmVudCIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwic2xpY2UiLCJtYXAiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJ1cmxfMSIsIm1pdHRfMSIsInV0aWxzXzEiLCJpc19keW5hbWljXzEiLCJyb3V0ZV9tYXRjaGVyXzEiLCJyb3V0ZV9yZWdleF8xIiwiYmFzZVBhdGgiLCJwYXRoIiwiZGVsQmFzZVBhdGgiLCJzdWJzdHIiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsInF1ZXJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJhdHRlbXB0cyIsImdldFJlc3BvbnNlIiwiZmV0Y2giLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsImlzU3NyIiwiYXNQYXRoIiwiX2JwcyIsIl9nZXRTdGF0aWNEYXRhIiwiUHJvbWlzZSIsIl9nZXRTZXJ2ZXJEYXRhIiwicm91dGUiLCJjb21wb25lbnRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJpc0R5bmFtaWNSb3V0ZSIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsIl9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCIsInVwZGF0ZSIsIm5ld0RhdGEiLCJub3RpZnkiLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsImNoYW5nZSIsIm1ldGhvZCIsIl9hcyIsInJlamVjdCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJ1cmxJc05ldyIsImFzUGF0aG5hbWUiLCJyb3V0ZVJlZ2V4IiwiZ2V0Um91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJnZXRSb3V0ZU1hdGNoZXIiLCJtaXNzaW5nUGFyYW1zIiwia2V5cyIsImdyb3VwcyIsImZpbHRlciIsInBhcmFtIiwiZ2V0Um91dGVJbmZvIiwicm91dGVJbmZvIiwiY2FuY2VsbGVkIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZmV0Y2hDb21wb25lbnQiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiX2dldERhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJoYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlRFU1RfUk9VVEUiLCJ0ZXN0IiwicmUiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiXyIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJyZXBlYXQiLCJlc2NhcGVSZWdleCIsInN0ciIsIm5vcm1hbGl6ZWRSb3V0ZSIsImVzY2FwZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCIkMSIsImlzQ2F0Y2hBbGwiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX2EiLCJwcm90b3R5cGUiLCJwYWdlUHJvcHMiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0IiwiU1AiLCJtZWFzdXJlIiwiY3VycmVudFVzZXJTdWJqZWN0IiwiQ29va2llcyIsImdldEpTT04iLCJhdXRoZW50aWNhdGlvblNlcnZpY2UiLCJsb2dpbiIsImxvZ291dCIsInJlZ2lzdHJhdGlvbkFkbWluIiwicmVnaXN0cmF0aW9uQ2xpZW50IiwicmVnaXN0cmF0aW9uUHJvdmlkZXIiLCJyZWdpc3RyYXRpb25BZ2VuY3kiLCJjdXJyZW50VXNlciIsImN1cnJlbnRVc2VyVmFsdWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVtb3ZlIiwicmVzcG9uc2UiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb21pc2UiLCJleHBpcmVzIiwic3RvcmUiLCJkaXNwYXRjaCIsInNob3dBbGVydCIsInBhc3N3b3JkX2NvbmZpcm1hdGlvbiIsInNob3dTdWNjZXNzIiwic2V0VGltZW91dCIsInBob25lIiwiYWdlbmN5X25hbWUiLCJDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsIm5ld1Bvc3RzIiwiZmlsdGVyUG9zdHMiLCJmaWx0ZXJDYXRlZ29yeSIsInNldEZpbHRlckNhdGVnb3J5IiwidXNlU3RhdGUiLCJjaGFuZ2VDYXRlZ29yeSIsImNhdGVnb3J5IiwiaWQiLCJzIiwiY2F0ZWdvcmllc19ibG9jayIsImNhdGVnb3JpZXNfdGl0bGUiLCJjYXRlZ29yaWVzX2NvbnRlbnQiLCJjYXRlZ29yaWVzX2NvbnRyb2wiLCJjIiwiaSIsInRvTG93ZXJDYXNlIiwiY2F0ZWdvcmllc19zdWJ0aXRsZSIsImNhdGVnb3JpZXNfY2Fyb3VzZWwiLCJMb2NhdGlvbiIsInN0YXRlcyIsImdldENpdGllcyIsImN1cnJlbnRMb2NhdGlvbiIsInNldEN1cnJlbnRMb2NhdGlvbiIsImNoYW5nZUxvY2F0aW9uIiwic3RhdGVJZCIsImxvY2F0aW9uX3dyYXBwZXIiLCJsb2NhdG9uX2Jsb2NrX3RpdGxlIiwibG9jYXRpb25fYmxvY2tfc2VsZWN0IiwibG9jYXRpb25fYmxvY2tfbGlzdCIsIlNpbXBsZVNsaWRlciIsInNldHRpbmdzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwiZG90cyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImRyYWdnYWJsZSIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiaW5pdGlhbFNsaWRlIiwiZmFkZSIsImluZGV4Iiwic2V0SW5kZXgiLCJtYXJnaW4iLCJtYXhXaWR0aCIsIm5ld19wb3N0c19jYXJvdXNlbCIsInBvc3QiLCJzbGlkZSIsInBob3RvX3ZlcnRpY2FsIiwibW9kZWxfbmFtZSIsIlNlYXJjaCIsInNlYXJjaF9ibG9jayIsInNlYXJjaF9ibG9ja19jb250ZW50Iiwic2VhcmNoX2lucHV0X2xhYmVsIiwic2VhcmNoX2lucHV0IiwiYWRkX3Bvc3RfYnRuIiwicG9zdFByb2ZpbGVDYXJkIiwicG9zdHMiLCJwb3N0Q29tbWVudHMiLCJjcmVhdGVQb3N0Q29tbWVudCIsInJlcG9ydFBvc3QiLCJhbGVydCIsImFkZFRvRmF2b3JpdGVzIiwiY29tbWVudFRleHQiLCJzZXRDb21tZW50Iiwic2V0UG9zdCIsInVzZUVmZmVjdCIsInByb2ZpbGUiLCJjYXJkIiwiaW1hZ2VfYmxvY2siLCJwaG90b19ob3Jpem9udGFsIiwidmlkZW9fbGluayIsInJlcG9ydF9idG5fZ3JvdXAiLCJwb3N0SWQiLCJmYXZvcml0ZV9idG4iLCJjb250ZW50X2Jsb2NrIiwiY29udGVudF9ibG9ja19oZWFkZXIiLCJmaXJzdF9uYW1lIiwic2Vjb25kX25hbWUiLCJmYXYiLCJjcm93biIsInN0YXIiLCJwbGFuZSIsImNvbnRlbnRfYmxvY2tfZGVzY3JpcHRpb24iLCJzdW1tYXJ5IiwiY29udGFjdHNfYmx1ZV9ibG9jayIsImlzX3ZlcmlmeSIsIm51bWJlciIsIm1haW5fY29udGVudF9ibG9jayIsInRleHRfYmxvY2siLCJ0ZXh0X2Jsb2NrX3RpdGxlIiwiYWJvdXQiLCJkZXRhaWxzX2Jsb2NrIiwiZ2VuZGVyIiwiYWdlIiwiZXRobmljaXR5IiwiaGFpciIsImV5ZSIsImhlaWdodCIsImFmZmlsaWF0aW9uIiwiYXZhaWxhYmxldG8iLCJhIiwiYXZhaWxhYmlsaXR5IiwiYWRkX2NvbW1lbnRfYmxvY2siLCJjb21tZW50c19ibG9jayIsImNvbW1lbnRzX2Jsb2NrX3RpdGxlIiwiY29tbWVudCIsImNvbW1lbnRfdGl0bGUiLCJ1c2VyIiwiY3JlYXRlZF9hdCIsIlByb2ZpbGVDYXJvdXNlbCIsInBob3RvIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiYXV0b1NsaWRlIiwiZGVsYXkiLCJzZXRJbnRlcnZhbCIsImNoYW5nZVBob3RvRm9ydmFyZCIsIiQiLCJmYWRlT3V0IiwiZmFkZUluIiwiY2hhbmdlUGhvdG9CYWNrIiwicGhvdG9fc2xpZGVyIiwicGhvdG9fdG9nZ2xlcl9iYWNrIiwicGhvdG9fdG9nZ2xlcl9mb3J2YXJkIiwiUHJvZmlsZVZpZGVvIiwidmlkZW9MaW5rIiwiUHJvZmlsZXNDb250cm9sIiwic2hvd1ByZXZpb3VzUG9zdCIsInNob3dOZXh0UG9zdCIsInByb2ZpbGVfY29udHJvbCIsInByb2ZpbGVfY29udHJvbF9idXR0b25zIiwiUmVwb3J0RmFrZVBob3Rvc01vZGFsV2luZG93IiwiYnV0dG9uTGFiZWwiLCJjbGFzc05hbWUiLCJtb2RhbCIsInNldE1vZGFsIiwibGluayIsInNldExpbmsiLCJ0b2dnbGUiLCJyZXBvcnRIYW5kbGVyIiwidHJpbSIsInJlcG9ydF9idG4iLCJmb250RmFtaWx5IiwiTW9kYWwiLCJpc09wZW4iLCJhdXRvRm9jdXMiLCJjZW50ZXJlZCIsInNpemUiLCJmdW5jIiwicm9sZSIsImxhYmVsbGVkQnkiLCJrZXlib2FyZCIsImJhY2tkcm9wIiwib25lT2YiLCJzY3JvbGxhYmxlIiwib25FbnRlciIsIm9uRXhpdCIsIm9uT3BlbmVkIiwib25DbG9zZWQiLCJ3cmFwQ2xhc3NOYW1lIiwibW9kYWxDbGFzc05hbWUiLCJiYWNrZHJvcENsYXNzTmFtZSIsImNvbnRlbnRDbGFzc05hbWUiLCJjc3NNb2R1bGUiLCJ6SW5kZXgiLCJ1bm1vdW50T25DbG9zZSIsInJldHVybkZvY3VzQWZ0ZXJDbG9zZSIsIlJlcG9ydFRyYWZmaWNraW5nTW9kYWxXaW5kb3ciLCJNb2RlbFByb2ZpbGUiLCJnZXRBbGxQb3N0cyIsImdldExvY2F0aW9uc0luZm8iLCJnZXRQb3N0Q29tbWVudHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhcHAiLCJwYWdlc051bWJlciIsIm1hcERpc3BhdGNoVG9Qb3BzIiwic2VsZWN0UG9zdHNQYWdlIiwiY29ubmVjdCIsImNyZWF0ZVBvc3QiLCJURVNUX0NSRUFURV9QT1NUIiwicGF5bG9hZCIsInNob3dMb2FkZXIiLCJTSE9XX0xPQURFUiIsImhpZGVMb2FkZXIiLCJISURFX0xPQURFUiIsInRleHQiLCJTSE9XX0FMRVJUIiwiaGlkZUFsZXJ0IiwiSElERV9BTEVSVCIsImZldGNoUG9zdHMiLCJURVNUX1JFUVVFU1RfUE9TVFMiLCJHRVRfUEFHRVNfTlVNQkVSIiwibGFzdF9wYWdlIiwiR0VUX0FMTF9QT1NUUyIsImdldE5ld1Bvc3RzIiwiR0VUX05FV19QT1NUUyIsIkdFVF9MT0NBSVRPTlNfSU5GTyIsImdldEFwcEluZm8iLCJHRVRfQVBQX0lORk8iLCJHRVRfQ0lUSUVTIiwiY3JlYXRlU3VwcG9ydFRhc2siLCJ0YXNrIiwidG9rZW5fdHlwZSIsInRva2VuIiwibG9nIiwiQ1JFQVRFX1NVUFBPUlRfVEFTSyIsImdldEFsbFVzZXJzVGFza3MiLCJHRVRfQUxMX1VTRVJfVEFTS1MiLCJHRVRfUE9TVF9DT01NRU5UUyIsIkNSRUFURV9QT1NUX0NPTU1FTlQiLCJmaWx0ZXJJdGVtc09iamVjdCIsIkZJTFRFUl9QT1NUUyIsImlzX2Zhdm9yaXRlIiwiYWRkVG9GYXZvcml0ZXNCdXNpbmVzcyIsImdldEZhdm9yaXRlc0J1c2luZXNzIiwiR0VUX0ZBVk9SSVRFUyIsImdldEZhdm9yaXRlc1VzZXIiLCJnZXRDb21wbGFpbnMiLCJ1c2VySWQiLCJHRVRfQ09NUExBSU5TIiwic29ydFBvc3RzIiwic29ydFR5cGUiLCJTT1JUX1BPU1RTIiwiU0hPV19TVUNDRVNTIiwiVEVTVF9GRVRDSF9QT1NUIiwiUkVQT1JUX1BPU1QiLCJBRERfUE9TVCIsIlJFTU9WRV9QT1NUIiwiVVBEQVRFX1BPU1QiLCJTRUxFQ1RfU1RBVEUiLCJTRUxFQ1RfQ0lUWSIsIlNFTEVDVF9MSVNUX1NPUlQiLCJTRUxFQ1RfTElTVF9GSUxURVIiLCJTRUxFQ1RfQ0FURUdPUlkiLCJHRVRfQUxMX1NVUFBPUlRfVEFTS1MiLCJFRElUX1NVUFBPUlRfVEFTS1MiLCJERUxFVEVfU1VQUE9SVF9UQVNLIiwiaW5pdGlhbFN0YXRlIiwidGFza3MiLCJhZG1pblJlZHVjZXIiLCJhY3Rpb24iLCJsb2FkaW5nIiwiY2l0aWVzIiwic3VwcG9ydFRhc2tzIiwiYXZhaWxhYmxlX3RvIiwiZXllcyIsImZhdm9yaXRlcyIsImNvbXBsYWlucyIsImFwcFJlZHVjZXIiLCJzb3J0IiwiYiIsImRhdGVBIiwiRGF0ZSIsImRhdGVCIiwiZ2V0VGltZSIsInByb3ZpZGVyUG9zdHMiLCJwcm92aWRlclJlZHVjZXIiLCJjb25jYXQiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInRlc3RQb3N0cyIsInRlc3RSZWR1Y2VyIiwicHJvdmlkZXIiLCJ1c2VyUmVkdWNlciIsImFkbWluIiwiZmV0Y2hlZFBvc3RzIiwicHJlbG9hZGVkU3RhdGUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUE7QUFBQTtBQUFBO0FBQUEsa0RBQUosbUJBUEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMscUJBQVI7QUFBOEIsVUFBTSxFQUFDLFFBQXJDO0FBQThDLE9BQUcsRUFBQyxxQkFBbEQ7QUFBd0UsYUFBUyxFQUFDLFdBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBQUosbUJBUkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsb0NBQVI7QUFBNkMsVUFBTSxFQUFDLFFBQXBEO0FBQTZELE9BQUcsRUFBQyxxQkFBakU7QUFBdUYsYUFBUyxFQUFDLFdBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQUosbUJBVEYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsNkJBQVI7QUFBc0MsVUFBTSxFQUFDLFFBQTdDO0FBQXNELE9BQUcsRUFBQyxxQkFBMUQ7QUFBZ0YsYUFBUyxFQUFDLFdBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUosbUJBVkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsOEJBQVI7QUFBdUMsVUFBTSxFQUFDLFFBQTlDO0FBQXVELE9BQUcsRUFBQyxxQkFBM0Q7QUFBaUYsYUFBUyxFQUFDLFdBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBQUosb0JBWEYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMseUJBQVI7QUFBa0MsVUFBTSxFQUFDLFFBQXpDO0FBQWtELE9BQUcsRUFBQyxxQkFBdEQ7QUFBNEUsYUFBUyxFQUFDLFdBQXRGO0FBQUE7QUFBQTtBQUFBO0FB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O0FBQ0E7QUFFQSxNQUFNcWEsY0FBYyxHQUFHLEVBQXZCO0FBRUEsTUFBTXhSLEtBQVUsR0FBR3lSLHlEQUFXLENBQzVCVCw2REFENEIsRUFFNUJRLGNBRjRCLEVBRzVCRSw2REFBZSxDQUNiQyxrREFEYSxDQUhhLENBQTlCO0FBUUEzUixLQUFLLENBQUM0UixTQUFOLENBQWdCLE1BQU07QUFDcEJybEIsU0FBTyxDQUFDbWhCLEdBQVIsQ0FBWSxpQkFBWixFQUErQjFOLEtBQUssQ0FBQzZSLFFBQU4sRUFBL0I7QUFDRCxDQUZEO0FBSWU3UixvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvbW9kZWxQcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHtzaG93QWxlcnQsIHNob3dTdWNjZXNzfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9hY3Rpb25zXCI7XG5cbmxldCBjdXJyZW50VXNlclN1YmplY3QgPSBDb29raWVzLmdldEpTT04oXCJjdXJyZW50VXNlclwiKVxuICAgID8gQ29va2llcy5nZXRKU09OKFwiY3VycmVudFVzZXJcIilcbiAgICA6IHt9O1xuXG5jb25zdCB0YXJnZXQgPSBgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaWA7XG5cbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGlvblNlcnZpY2UgPSB7XG4gICAgbG9naW4sXG4gICAgbG9nb3V0LFxuICAgIHJlZ2lzdHJhdGlvbkFkbWluLFxuICAgIHJlZ2lzdHJhdGlvbkNsaWVudCxcbiAgICByZWdpc3RyYXRpb25Qcm92aWRlcixcbiAgICByZWdpc3RyYXRpb25BZ2VuY3ksXG4gICAgY3VycmVudFVzZXI6IGN1cnJlbnRVc2VyU3ViamVjdCxcbiAgICBnZXQgY3VycmVudFVzZXJWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRVc2VyU3ViamVjdDtcbiAgICB9LFxufTtcblxuYXN5bmMgZnVuY3Rpb24gbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RhcmdldH0vbG9naW5gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtlbWFpbCwgcGFzc3dvcmR9KSxcbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgQ29va2llcy5zZXQoXCJjdXJyZW50VXNlclwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSwge2V4cGlyZXM6IDF9KTtcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyU3ViamVjdCA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkudGhlbigoKSA9PiBSb3V0ZXIucHVzaCgnLycpKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2VcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gc3RvcmUuZGlzcGF0Y2goc2hvd0FsZXJ0KGRhdGEubWVzc2FnZSkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWdpc3RyYXRpb25DbGllbnQoXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHBhc3N3b3JkOiBzdHJpbmcsXG4gICAgZW1haWw6IHN0cmluZyxcbiAgICBwYXNzd29yZF9jb25maXJtYXRpb246IHN0cmluZ1xuKTogUHJvbWlzZTxhbnk+IHtcbiAgICBDb29raWVzLnJlbW92ZShcImN1cnJlbnRVc2VyXCIpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvY2xpZW50L3JlZ2lzdGVyYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzaG93U3VjY2VzcyhkYXRhLm1lc3NhZ2UpKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCksIDMwMDApXG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBzdG9yZS5kaXNwYXRjaChzaG93QWxlcnQoZGF0YS5tZXNzYWdlKSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkFkbWluKFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBwYXNzd29yZDogc3RyaW5nLFxuICAgIGVtYWlsOiBzdHJpbmcsXG4gICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBzdHJpbmdcbik6IFByb21pc2U8YW55PiB7XG4gICAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RhcmdldH0vYWRtaW4vcmVnaXN0ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHNob3dTdWNjZXNzKGRhdGEubWVzc2FnZSkpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSwgMzAwMClcbiAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHN0b3JlLmRpc3BhdGNoKHNob3dBbGVydChkYXRhLm1lc3NhZ2UpKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0cmF0aW9uUHJvdmlkZXIoXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHBhc3N3b3JkOiBzdHJpbmcsXG4gICAgZW1haWw6IHN0cmluZyxcbiAgICBwYXNzd29yZF9jb25maXJtYXRpb246IHN0cmluZyxcbiAgICBwaG9uZTogc3RyaW5nIHwgbnVtYmVyXG4pOiBQcm9taXNlPGFueT4ge1xuICAgIENvb2tpZXMucmVtb3ZlKFwiY3VycmVudFVzZXJcIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2luZGl2aWR1YWwvcmVnaXN0ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgcGhvbmVcbiAgICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzaG93U3VjY2VzcyhkYXRhLm1lc3NhZ2UpKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCksIDMwMDApXG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBzdG9yZS5kaXNwYXRjaChzaG93QWxlcnQoZGF0YS5tZXNzYWdlKSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkFnZW5jeShcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZyxcbiAgICBlbWFpbDogc3RyaW5nLFxuICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogc3RyaW5nLFxuICAgIHBob25lOiBzdHJpbmcgfCBudW1iZXIsXG4gICAgYWdlbmN5X25hbWU6IHN0cmluZ1xuKTogUHJvbWlzZTxhbnk+IHtcbiAgICBDb29raWVzLnJlbW92ZShcImN1cnJlbnRVc2VyXCIpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9hZ2VuY3kvcmVnaXN0ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgcGhvbmUsXG4gICAgICAgICAgICBhZ2VuY3lfbmFtZVxuICAgICAgICB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHNob3dTdWNjZXNzKGRhdGEubWVzc2FnZSkpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSwgMzAwMClcbiAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHN0b3JlLmRpc3BhdGNoKHNob3dBbGVydChkYXRhLm1lc3NhZ2UpKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9sb2dvdXRgLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgICAgfSxcbiAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiBSb3V0ZXIucHVzaCgnL2xvZ2luJykpXG4gICAgICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSkpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVRDQU1BQUFDblV0MkhBQUFBQVhOU1IwSUIyY2tzZndBQUFFVlFURlJGQUFBQTUzaXY1SGV4NUhleDVIaXk1SGV4NUhXdjVIZXg1SGV4MzNDdjVIZXg0M2V4NUhheTVIaXc0M2V3NW5hejVIaXg1SGl4NUhldzVIZXg1WGF4NUhleTQzaXZzMUR0clFBQUFCZDBVazVUQUNEUDcyRGZNSkQvRVBDd2NPQ3ZVTUNnbjlCL3YwRDYrcjdRQUFBQXBVbEVRVlI0bkgyUTZSTERJQWlFTVI1ZE5mRm9qdmQvMUlLbWpmN3B6dWpnSjhnaWtVZ3QyaEFaYlIwOWVnSHdGSUE0d0JVSVJOc1BHcHM4K1FndXp5Z2NwaVZMelNxcFZSNnByVWhMRFNkVmpqZ3NEVzdrSXQ1RU81QWRkNVByeUJhOHBQSzVpZ1ZsZUVtcnlJRFAydkxHRjZYM3h5VFRvQThUOU4xcUhWbTk1OGtqek44cEEvYlNKZFAra1RyU0tYNWd6M1NvRzI3am03WXpOL3ZzLzN6TjhDTDZBSXBFQ05lb29CSDFBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCWUFBQUFUQ0FNQUFBQ2pwdzI2QUFBQUFYTlNSMElCMmNrc2Z3QUFBRHhRVEZSRkFBQUEzM0N2NUhleDVIZXg1SGV4NUhleDVYYXg1SGV5NUhleDVIV3Y1SGV4NUhpeTVIaXg0M2V4NUhleDVuYXo0M2l2NUhleDQzaXg1SGl3ZkVMbjJBQUFBQlIwVWs1VEFCQ1AzLy9QZjcvdk1OQmdvTER3VUVDUWdPQ1dFOHFzQUFBQWVFbEVRVlI0bkhXUVVRNkVJQXdGMzlzdFdoU1IxZnZmVlZEVU5kVDVta3hvQ1FEZzV5dXVJekxzZXUwUDlTb0Y5WmU2ckJqa1FFbXQ2b0JSVGtLNGRNUWtCaE9pbFJWV0ZiRlB4N2ZkczVVVEVOcjZLODlzK29LZCtYSHRtbERoMzhCQzNLUTZFRDBlY1AreGdVRGIyMXI2YXRTOFA5MitBZk11Qmlza3lQa0NBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCSUFBQUFUQ0FNQUFBQ3FUSzNBQUFBQUFYTlNSMElCMmNrc2Z3QUFBRXRRVEZSRkFBQUE1SGl3NVhheDQzaXg1SGV4NUhldzVIZXg1SGV5MzNDdjVIZXg1SGV4NTNpdjQzV3k1SFd2NUhleDVIYXk0M2V4NW5hejVIaXk1SGV4NUhpeDVIaXg1SGV4NDNpdjQzZXdhYUFLK1FBQUFCbDBVazVUQU9CL2dQK2YwTDhROE04Z1B6RGZjTEJRWUpDZ3dPOUFyK1huS1k0QUFBQ05TVVJCVkhpY1pZL2hGc0lnQ0ViVkllbVc1WnlidmYrVEpqREtGbitFZXpoOFYyT2R1ZFlFL284aDNNSUZoUWl6c09YZWk5c1VZYWhISXZZY1VWNGw0YXlZeTNsMms3bXUzNENkeUpGK05RQVFqbVZBblZoVFZZVjFPcHFNeVFOci9YUWZBc0xzbkg4UktnQ1Z2NEdjN0VWTExoYzJvNzdLRWwxRFZLMm15UzNKL3JhcnN2MVlxSGNxL0x3QllJUUZRUDNJNzNZQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVRDQU1BQUFDblV0MkhBQUFBQVhOU1IwSUIyY2tzZndBQUFEOVFURlJGQUFBQTQzaXY1SGV4NUhleDVIaXk1SGV4MzNDdjVIZXg0M2l4NUhleDQzZXg1SGV4NUhleTQzV3k1SGl4NTNpdjVIZXg1SGF5NUhpeDVIaXc0M2V4SkhjcXlBQUFBQlYwVWs1VEFFRFF6MkQvRU4rQTcyK1B2eitnSVBCd3dPQ3dTbmZZT0FBQUFIaEpSRUZVZUp4bDBGc1dnQ0FJQkZBbDBiSlNlK3gvcmFHbEpNN25QUXB6VUtwR2F6VUdwdEVNb3BGbUhhS1RPQ05sRmcrWGpJdmx0WDdkOE11MitwMG80SkNnTEVnREdpSVZ5dUJlNFZzV0UxdUtkZi9CZVBUTjMzRC9YNjNROEdROEcxNTVxekc1QlIrRkhwUUxhL3BTTFlaMmRIM25TZzgrU2dUb0EvQUd1d0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzIGZyb20gJy4vY2F0ZWdvcmllcy5tb2R1bGUuc2NzcydcbmltcG9ydCBOZXdQb3N0cyBmcm9tICcuL05ld1Bvc3RzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yaWVzKHsgY2F0ZWdvcmllcywgbmV3UG9zdHMsIGZpbHRlclBvc3RzIH0pIHtcbiAgY29uc3QgW2ZpbHRlckNhdGVnb3J5LCBzZXRGaWx0ZXJDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgY2hhbmdlQ2F0ZWdvcnkgPSAoY2F0ZWdvcnksIGlkKSA9PiB7XG4gICAgc2V0RmlsdGVyQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgIGZpbHRlclBvc3RzKHsnY2F0ZWdvcnlfaWQnOiBpZH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzLmNhdGVnb3JpZXNfYmxvY2t9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5jYXRlZ29yaWVzX3RpdGxlfWB9PlxuICAgICAgICA8cD5TRUxFQ1QgQSBDQVRFR09SWTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY2F0ZWdvcmllc19jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3MuY2F0ZWdvcmllc19jb250cm9sfWB9PlxuICAgICAgICAgIHsoY2F0ZWdvcmllcyAmJiBjYXRlZ29yaWVzLmxlbmd0aClcbiAgICAgICAgICAgID8gY2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IChcbiAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gY2hhbmdlQ2F0ZWdvcnkoYy5uYW1lLnRvTG93ZXJDYXNlKCksIGMuaWQpfSBjbGFzc05hbWU9e2Ake3MuY2F0ZWdvcnl9ICR7ZmlsdGVyQ2F0ZWdvcnkgPT09IGMubmFtZS50b0xvd2VyQ2FzZSgpID8gJ2FjdGl2ZV9idG5fYmx1ZScgOiAnJ31gfT57Yy5uYW1lLnRvVXBwZXJDYXNlKCl9PC9zcGFuPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIDogPD48ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHRleHQtaW5mb1wiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGwtMiB0ZXh0LWluZm9cIj5ObyBjYXRlZ29yaWVzIGZyb20gc2VydmVyLi4uPC9zcGFuPlxuICAgICAgICAgICAgPC8+fVxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLmNhdGVnb3JpZXNfc3VidGl0bGV9YH0+XG4gICAgICAgICAgPHA+TkVXIE9OIFRIRSBTSVRFPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY2F0ZWdvcmllc19jYXJvdXNlbH0+XG4gICAgICAgICAgPE5ld1Bvc3RzIG5ld1Bvc3RzPXtuZXdQb3N0c30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgcyBmcm9tIFwiLi9sb2NhdGlvbi5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NhdGlvbih7IHN0YXRlcywgZ2V0Q2l0aWVzIH0pIHtcbiAgY29uc3QgW2N1cnJlbnRMb2NhdGlvbiwgc2V0Q3VycmVudExvY2F0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgY2hhbmdlTG9jYXRpb24gPSBzdGF0ZUlkID0+IHtcbiAgICBnZXRDaXRpZXMoc3RhdGVJZCk7XG4gICAgc2V0Q3VycmVudExvY2F0aW9uKHN0YXRlSWQpO1xuICAgIHN0YXRlcy5mb3JFYWNoKHN0YXRlID0+IHtcbiAgICAgIGlmICgrc3RhdGUuaWQgPT09ICtzdGF0ZUlkKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKGAvbG9jYXRpb24/aWQ9JHtzdGF0ZS5pZH1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzLmxvY2F0aW9uX3dyYXBwZXJ9PlxuICAgICAge3N0YXRlcy5sZW5ndGggPyA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLmxvY2F0b25fYmxvY2tfdGl0bGV9YH0+XG4gICAgICAgICAgPHA+U0VMRUNUIEEgTE9DQVRJT04gQkVMT1c8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5sb2NhdGlvbl9ibG9ja19zZWxlY3R9PlxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZUxvY2F0aW9uKGUudGFyZ2V0LnZhbHVlKX0gPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlZmF1bHRcIiBoaWRkZW4+TG9jYXRpb248L29wdGlvbj5cbiAgICAgICAgICAgIHtzdGF0ZXMubWFwKChzdGF0ZSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e3N0YXRlLmlkfT57c3RhdGUubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubG9jYXRpb25fYmxvY2tfbGlzdH0+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3N0YXRlcy5tYXAoKHN0YXRlLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gY2hhbmdlTG9jYXRpb24oc3RhdGUuaWQpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIHRleHQtd2hpdGUgbG9jYXRpb25faXRlbWB9PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e3BhdGhuYW1lOiBgL2xvY2F0aW9uYCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgaWQ6IHN0YXRlLmlkIH19fSA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3VycmVudExvY2F0aW9uID09PSBzdGF0ZSA/ICdhY3RpdmVfYnRuX2JsdWUnIDogJyd9PntzdGF0ZS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz4gOiBudWxsfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzIGZyb20gXCIuL2NhdGVnb3JpZXMubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2ltcGxlU2xpZGVyKHtuZXdQb3N0c30pIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiAxMDAwMCxcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjUsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY5LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGZhZGU6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9O1xuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICAgICAgICBtYXhXaWR0aDogJzEyNjBweCdcbiAgICAgICAgfX0gY2xhc3NOYW1lPXtzLm5ld19wb3N0c19jYXJvdXNlbH0+XG4gICAgICAgICAgICB7bmV3UG9zdHMgJiYgbmV3UG9zdHMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICBuZXdQb3N0cy5tYXAoKHBvc3QsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17cy5zbGlkZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7cGF0aG5hbWU6IFwiL21vZGVsUHJvZmlsZVwiLCBxdWVyeToge2lkOiBwb3N0LmlkfX19PjxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0LnBob3RvX3ZlcnRpY2FsfSBhbHQ9XCJtb2RlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57cG9zdC5tb2RlbF9uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAvLyA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgICAgICAgICAgLy8gICAgIHtuZXdQb3N0cy5tYXAoKHBvc3QsIGkpID0+IChcbiAgICAgICAgICAgICAgICAvLyAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2xpZGV9PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3twYXRobmFtZTogXCIvbW9kZWxQcm9maWxlXCIsIHF1ZXJ5OiB7aWQ6IHBvc3QuaWR9fX0+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QucGhvdG9fdmVydGljYWx9IGFsdD1cIm1vZGVsXCIgY2xhc3NOYW1lPVwidy0xMDBcIi8+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0Lm1vZGVsX25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgICkpfVxuICAgICAgICAgICAgICAgIC8vICA8L1NsaWRlcj5cbiAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPXtgdGV4dC1jZW50ZXIgdGV4dC1pbmZvIHB5LTVgfT5ObyBwb3N0cy4uLjwvZGl2Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzIGZyb20gJy4vc2VhcmNoLm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzLnNlYXJjaF9ibG9ja30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zZWFyY2hfYmxvY2tfY29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3Muc2VhcmNoX2lucHV0X2xhYmVsfWB9PlNFQVJDSDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zZWFyY2hfaW5wdXR9PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLmFkZF9wb3N0X2J0bn1gfT5cbiAgICAgICAgICA8c3Bhbj5QT1NUIEFEPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2F0ZWdvcmllc19ibG9ja1wiOiBcImNhdGVnb3JpZXNfY2F0ZWdvcmllc19ibG9ja19fMTRBVl9cIixcblx0XCJjYXRlZ29yaWVzX3RpdGxlXCI6IFwiY2F0ZWdvcmllc19jYXRlZ29yaWVzX3RpdGxlX18zS3lPWFwiLFxuXHRcImNhdGVnb3JpZXNfY29udGVudFwiOiBcImNhdGVnb3JpZXNfY2F0ZWdvcmllc19jb250ZW50X18ydlB1dFwiLFxuXHRcImNhdGVnb3JpZXNfY29udHJvbFwiOiBcImNhdGVnb3JpZXNfY2F0ZWdvcmllc19jb250cm9sX18yZ3BjZVwiLFxuXHRcImNhdGVnb3J5XCI6IFwiY2F0ZWdvcmllc19jYXRlZ29yeV9fM1JHandcIixcblx0XCJjYXRlZ29yaWVzX3N1YnRpdGxlXCI6IFwiY2F0ZWdvcmllc19jYXRlZ29yaWVzX3N1YnRpdGxlX18zWW1YYVwiLFxuXHRcIm5ld19wb3N0c19jYXJvdXNlbFwiOiBcImNhdGVnb3JpZXNfbmV3X3Bvc3RzX2Nhcm91c2VsX18yWFhoWVwiLFxuXHRcInNsaWRlXCI6IFwiY2F0ZWdvcmllc19zbGlkZV9fMkxOanVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvY2F0aW9uX3dyYXBwZXJcIjogXCJsb2NhdGlvbl9sb2NhdGlvbl93cmFwcGVyX18xYU9MMFwiLFxuXHRcImxvY2F0b25fYmxvY2tfdGl0bGVcIjogXCJsb2NhdGlvbl9sb2NhdG9uX2Jsb2NrX3RpdGxlX19sWUR6S1wiLFxuXHRcImxvY2F0aW9uX2Jsb2NrX3NlbGVjdFwiOiBcImxvY2F0aW9uX2xvY2F0aW9uX2Jsb2NrX3NlbGVjdF9fWTFhV2lcIixcblx0XCJsb2NhdGlvbl9ibG9ja19saXN0XCI6IFwibG9jYXRpb25fbG9jYXRpb25fYmxvY2tfbGlzdF9fMUlqYllcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaF9ibG9ja1wiOiBcInNlYXJjaF9zZWFyY2hfYmxvY2tfXzIxc01TXCIsXG5cdFwic2VhcmNoX2Jsb2NrX2NvbnRlbnRcIjogXCJzZWFyY2hfc2VhcmNoX2Jsb2NrX2NvbnRlbnRfXzFadkxsXCIsXG5cdFwic2VhcmNoX2lucHV0X2xhYmVsXCI6IFwic2VhcmNoX3NlYXJjaF9pbnB1dF9sYWJlbF9fMXVKcHFcIixcblx0XCJzZWFyY2hfaW5wdXRcIjogXCJzZWFyY2hfc2VhcmNoX2lucHV0X18yWE1sc1wiLFxuXHRcImFkZF9wb3N0X2J0blwiOiBcInNlYXJjaF9hZGRfcG9zdF9idG5fXzNjRThiXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHMgZnJvbSBcIi4vcHJvZmlsZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IFByb2ZpbGVDYXJvdXNlbCBmcm9tIFwiLi9Qcm9maWxlQ2Fyb3VzZWxcIjtcbmltcG9ydCBQcm9maWxlVmlkZW8gZnJvbSBcIi4vUHJvZmlsZVZpZGVvXCI7XG5pbXBvcnQgZmF2IGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvZmF2b3JpdGUtcGluay5wbmdcIjtcbmltcG9ydCBjcm93biBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL2Nyb3duLXBpbmsucG5nXCI7XG5pbXBvcnQgc3RhciBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3N0YXItcGluay5wbmdcIjtcbmltcG9ydCBwbGFuZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3BsYW5lLXBpbmsucG5nXCI7XG5pbXBvcnQgUmVwb3J0RmFrZVBob3Rvc01vZGFsV2luZG93IGZyb20gXCIuL1JlcG9ydEZha2VQaG90b3NcIjtcbmltcG9ydCBSZXBvcnRUcmFmZmlja2luZ01vZGFsV2luZG93IGZyb20gXCIuL1JlcG9ydFRyYWZmaWNraW5nXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9zdFByb2ZpbGVDYXJkKHsgcG9zdHMsIHBvc3RDb21tZW50cywgY3JlYXRlUG9zdENvbW1lbnQsIHJlcG9ydFBvc3QsIGFsZXJ0LCBzaG93QWxlcnQsIGFkZFRvRmF2b3JpdGVzIH0pIHtcbiAgY29uc3QgW2NvbW1lbnRUZXh0LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZvciAobGV0IHAgb2YgcG9zdHMpIHtcbiAgICAgIGlmIChwLmlkID09IHJvdXRlci5xdWVyeS5pZCkge1xuICAgICAgICBzZXRQb3N0KHApO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3Bvc3RzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5wcm9maWxlfT5cbiAgICAgIHtwb3N0LmNhdGVnb3J5ID8gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY2FyZH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaW1hZ2VfYmxvY2t9PlxuICAgICAgICAgICAgPFByb2ZpbGVDYXJvdXNlbCBwaG90bz17W3Bvc3QucGhvdG9faG9yaXpvbnRhbCwgcG9zdC5waG90b192ZXJ0aWNhbF19IC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8UHJvZmlsZVZpZGVvIHZpZGVvTGluaz17cG9zdC52aWRlb19saW5rfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yZXBvcnRfYnRuX2dyb3VwfT5cbiAgICAgICAgICAgICAgPFJlcG9ydEZha2VQaG90b3NNb2RhbFdpbmRvd1xuICAgICAgICAgICAgICAgIHJlcG9ydFBvc3Q9e3JlcG9ydFBvc3R9XG4gICAgICAgICAgICAgICAgYnV0dG9uTGFiZWw9eydSZXBvcnQgRmFrZSBQaG90b3MnfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGB9XG4gICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0LnBvc3RJZH1cbiAgICAgICAgICAgICAgICBhbGVydD17YWxlcnR9XG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0PXtzaG93QWxlcnR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSZXBvcnRUcmFmZmlja2luZ01vZGFsV2luZG93IGJ1dHRvbkxhYmVsPXsnUmVwb3J0IFRyYWZmaWNraW5nJ30gY2xhc3NOYW1lPXtgYH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3MuZmF2b3JpdGVfYnRufSB0ZXh0LXdoaXRlYH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkVG9GYXZvcml0ZXMocG9zdC5pZCl9PlxuICAgICAgICAgICAgICBBZGQgdG8gZmF2b3VyaXRlc1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3MuY29udGVudF9ibG9ja31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRlbnRfYmxvY2tfaGVhZGVyfT5cbiAgICAgICAgICAgICAgPGg1Pntwb3N0LmZpcnN0X25hbWV9IHtwb3N0LnNlY29uZF9uYW1lfTwvaDU+XG4gICAgICAgICAgICAgIDxzcGFuPntwb3N0LnN0YXR1c308L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Zhdn0gYWx0PVwiXCIgb25DbGljaz17KCkgPT4gYWRkVG9GYXZvcml0ZXMocG9zdC5pZCl9IC8+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nyb3dufSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzdGFyfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwbGFuZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRlbnRfYmxvY2tfZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICA8aDY+U3VtbWFyeTwvaDY+XG4gICAgICAgICAgICAgIDxwPntwb3N0LnN1bW1hcnl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWN0c19ibHVlX2Jsb2NrfT5cbiAgICAgICAgICAgICAgPGRpdj57cG9zdC5pc192ZXJpZnkgPyAnVkVSSUZJRUQgVklQIE9USEVSJyA6IG51bGx9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3Bvc3QuZW1haWwgP1xuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke3Bvc3QuZW1haWx9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LmVtYWlsfTwvYT5cbiAgICAgICAgICAgICAgICAgIDogJ05vIGFjY2VzcyB0byBzZWUgZW1haWwuLi4nfVxuICAgICAgICAgICAgICAgIHtwb3N0Lm51bWJlciA/XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtgdGVsOiske3Bvc3QubnVtYmVyfWB9PlxuICAgICAgICAgICAgICAgICAgICAre3Bvc3QubnVtYmVyfTwvYT5cbiAgICAgICAgICAgICAgICAgIDogJ05vIGFjY2VzcyB0byBzZWUgbnVtYmVyLi4uJ31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1haW5fY29udGVudF9ibG9ja30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnRleHRfYmxvY2t9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnRleHRfYmxvY2tfdGl0bGV9PkFib3V0PC9kaXY+XG4gICAgICAgICAgICAgICAgPHA+e3Bvc3QuYWJvdXR9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZGV0YWlsc19ibG9ja30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xXCI+REVUQUlMUzwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGw+XG4gICAgICAgICAgICAgICAgICAgIDxkdD5DYXRlZ29yeTo8L2R0PlxuICAgICAgICAgICAgICAgICAgICA8ZGQ+e3Bvc3QuY2F0ZWdvcnkubmFtZX08L2RkPlxuICAgICAgICAgICAgICAgICAgICA8ZHQ+R2VuZGVyOjwvZHQ+XG4gICAgICAgICAgICAgICAgICAgIDxkZD57cG9zdC5nZW5kZXJ9PC9kZD5cbiAgICAgICAgICAgICAgICAgICAgPGR0PkFnZTo8L2R0PlxuICAgICAgICAgICAgICAgICAgICA8ZGQ+e3Bvc3QuYWdlfTwvZGQ+XG4gICAgICAgICAgICAgICAgICAgIDxkdD5FdGhuaWNpdHk6PC9kdD5cbiAgICAgICAgICAgICAgICAgICAgPGRkPntwb3N0LmV0aG5pY2l0eS52YWx1ZX08L2RkPlxuICAgICAgICAgICAgICAgICAgICA8ZHQ+SGFpciBDb2xvcjo8L2R0PlxuICAgICAgICAgICAgICAgICAgICA8ZGQ+e3Bvc3QuaGFpci52YWx1ZX08L2RkPlxuICAgICAgICAgICAgICAgICAgICA8ZHQ+RXllIENvbG9yOjwvZHQ+XG4gICAgICAgICAgICAgICAgICAgIDxkZD57cG9zdC5leWUudmFsdWV9PC9kZD5cbiAgICAgICAgICAgICAgICAgICAgPGR0PkhlaWdodDo8L2R0PlxuICAgICAgICAgICAgICAgICAgICA8ZGQ+e3Bvc3QuaGVpZ2h0fTwvZGQ+XG4gICAgICAgICAgICAgICAgICAgIDxkdD5BZmZpbGlhdGlvbjo8L2R0PlxuICAgICAgICAgICAgICAgICAgICA8ZGQ+e3Bvc3QuYWZmaWxpYXRpb24udmFsdWV9PC9kZD5cbiAgICAgICAgICAgICAgICAgICAgPGR0PkF2YWlsYWJsZSBUbzo8L2R0PlxuICAgICAgICAgICAgICAgICAgICA8ZGQ+e3Bvc3QuYXZhaWxhYmxldG8ubWFwKGEgPT4gYS52YWx1ZSArICcgJyl9PC9kZD5cbiAgICAgICAgICAgICAgICAgICAgPGRsPkF2YWlsYWJpbGl0eTo8L2RsPlxuICAgICAgICAgICAgICAgICAgICA8ZGQ+e3Bvc3QuYXZhaWxhYmlsaXR5Lm1hcChhID0+IGEudmFsdWUgKyAnICcpfTwvZGQ+XG4gICAgICAgICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+Q09OVEFDVCBERVRBSUxTPC9kaXY+XG4gICAgICAgICAgICAgICAge3Bvc3QubnVtYmVyID9cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2B0ZWw6KyR7cG9zdC5udW1iZXJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICt7cG9zdC5udW1iZXJ9PC9hPlxuICAgICAgICAgICAgICAgICAgOiAnTm8gYWNjZXNzIHRvIHNlZSBudW1iZXIuLi4nfVxuICAgICAgICAgICAgICAgIHtwb3N0LmVtYWlsID9cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHtwb3N0LmVtYWlsfWB9PlxuICAgICAgICAgICAgICAgICAgICB7cG9zdC5lbWFpbH08L2E+XG4gICAgICAgICAgICAgICAgICA6ICdObyBhY2Nlc3MgdG8gc2VlIGVtYWlsLi4uJ31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge3Bvc3RDb21tZW50cyAmJiBwb3N0Q29tbWVudHMubGVuZ3RoID8gPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5hZGRfY29tbWVudF9ibG9ja30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbW1lbnRUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgYXdhaXQgY3JlYXRlUG9zdENvbW1lbnQocm91dGVyLnF1ZXJ5LmlkLCBjb21tZW50VGV4dCk7XG4gICAgICAgICAgICAgICAgICBzZXRDb21tZW50KCcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICBMRUFWRSBBIENPTU1FTlQ8L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBvbkNoYW5nZT17ZSA9PiBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKX0gcm93cz1cIjhcIj48L3RleHRhcmVhPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29tbWVudHNfYmxvY2t9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3MuY29tbWVudHNfYmxvY2tfdGl0bGV9IHRleHQtd2hpdGVgfT5DT01NRU5UUzwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgcC0wXCI+XG4gICAgICAgICAgICAgIHtwb3N0Q29tbWVudHMubWFwKChjLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPXtzLmNvbW1lbnR9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29tbWVudF90aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntjLnVzZXIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntjLmNyZWF0ZWRfYXQuc3BsaXQoJ1QnKVswXS5zcGxpdCgnLScpLmpvaW4oJyAuICcpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+e2MuY29tbWVudH08L3A+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PiA8Lz4gOiBudWxsfVxuXG4gICAgICA8Lz4gOiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHRleHQtaW5mb1wiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHMgZnJvbSBcIi4vcHJvZmlsZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZUNhcm91c2VsKHsgcGhvdG8gfSkge1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgYXV0b1NsaWRlID0gZGVsYXkgPT4ge1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNoYW5nZVBob3RvRm9ydmFyZCgpO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3VycmVudEluZGV4KDApO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2hhbmdlUGhvdG9Gb3J2YXJkID0gKCkgPT4ge1xuICAgIGlmIChwaG90by5sZW5ndGggPiAxKSB7XG4gICAgICBpZiAoY3VycmVudEluZGV4IDwgcGhvdG8ubGVuZ3RoIC0gMSkge1xuICAgICAgICAkKCcubW9kZWwtcGhvdG8nKS5mYWRlT3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4ICsgMSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKCcubW9kZWwtcGhvdG8nKS5mYWRlSW4oKTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLm1vZGVsLXBob3RvJykuZmFkZU91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0Q3VycmVudEluZGV4KDApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCgnLm1vZGVsLXBob3RvJykuZmFkZUluKCk7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgY2hhbmdlUGhvdG9CYWNrID0gKCkgPT4ge1xuICAgIGlmIChwaG90by5sZW5ndGggPiAxKSB7XG4gICAgICBpZiAoY3VycmVudEluZGV4ID4gMCkge1xuICAgICAgICAkKCcubW9kZWwtcGhvdG8nKS5mYWRlT3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4IC0gMSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKCcubW9kZWwtcGhvdG8nKS5mYWRlSW4oKTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLm1vZGVsLXBob3RvJykuZmFkZU91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0Q3VycmVudEluZGV4KHBob3RvLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCgnLm1vZGVsLXBob3RvJykuZmFkZUluKCk7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLnBob3RvX3NsaWRlcn0+XG4gICAgICB7cGhvdG8ubGVuZ3RoID4gMVxuICAgICAgICA/IDxzcGFuIGNsYXNzTmFtZT17cy5waG90b190b2dnbGVyX2JhY2t9XG4gICAgICAgICAgb25DbGljaz17Y2hhbmdlUGhvdG9CYWNrfT4mbHQ7PC9zcGFuPlxuICAgICAgICA6IG51bGx9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNsaWRlfT5cbiAgICAgICAgPGltZyBzcmM9e3Bob3RvW2N1cnJlbnRJbmRleF19IGNsYXNzTmFtZT1cIm1vZGVsLXBob3RvXCIgYWx0PVwibW9kZWxcIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtwaG90by5sZW5ndGggPiAxXG4gICAgICAgID8gPHNwYW4gY2xhc3NOYW1lPXtzLnBob3RvX3RvZ2dsZXJfZm9ydmFyZH1cbiAgICAgICAgICBvbkNsaWNrPXtjaGFuZ2VQaG90b0ZvcnZhcmR9PiZndDs8L3NwYW4+XG4gICAgICAgIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZVZpZGVvKHsgdmlkZW9MaW5rIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGlmcmFtZSB3aWR0aD1cIjQyMFwiIGhlaWdodD1cIjMxNVwiIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgc3JjPXt2aWRlb0xpbmt9IGFsbG93RnVsbFNjcmVlbj5cbiAgICAgIDwvaWZyYW1lPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHMgZnJvbSBcIi4vcHJvZmlsZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGVzQ29udHJvbCh7IHBvc3RzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgc2hvd1ByZXZpb3VzUG9zdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkID09PSAnMScpIHtcbiAgICAgIGF3YWl0IHJvdXRlci5wdXNoKGAvbW9kZWxQcm9maWxlP2lkPSR7cG9zdHMubGVuZ3RofWApO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgcm91dGVyLnB1c2goYC9tb2RlbFByb2ZpbGU/aWQ9JHsrcm91dGVyLnF1ZXJ5LmlkIC0gMX1gKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNob3dOZXh0UG9zdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoK3JvdXRlci5xdWVyeS5pZCA9PT0gK3Bvc3RzLmxlbmd0aCkge1xuICAgICAgYXdhaXQgcm91dGVyLnB1c2goYC9tb2RlbFByb2ZpbGU/aWQ9MWApO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgcm91dGVyLnB1c2goYC9tb2RlbFByb2ZpbGU/aWQ9JHsrcm91dGVyLnF1ZXJ5LmlkICsgMX1gKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLnByb2ZpbGVfY29udHJvbH1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnByb2ZpbGVfY29udHJvbF9idXR0b25zfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtzaG93UHJldmlvdXNQb3N0fT5QUkVWSVVTPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3Nob3dOZXh0UG9zdH0+TkVYVDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4+PExpbmsgaHJlZj1cIi9cIj48YT5DTE9TRTwvYT48L0xpbms+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzIGZyb20gXCIuL3Byb2ZpbGUubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyLCBJbnB1dCwgTGFiZWwsIEZvcm0sIEZvcm1Hcm91cCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5jb25zdCBSZXBvcnRGYWtlUGhvdG9zTW9kYWxXaW5kb3cgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGJ1dHRvbkxhYmVsLFxuICAgIGNsYXNzTmFtZVxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0TW9kYWwoIW1vZGFsKTtcblxuICBjb25zdCByZXBvcnRIYW5kbGVyID0gKCkgPT4ge1xuICAgIGlmIChsaW5rLnRyaW0oKS5sZW5ndGgpIHtcbiAgICAgIHByb3BzLnJlcG9ydFBvc3QocHJvcHMucG9zdElkLCBsaW5rKTtcbiAgICAgIHRvZ2dsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcy5zaG93QWxlcnQoJ0xpbmsgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEZvcm0gaW5saW5lIG9uU3VibWl0PXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cIlwiIGNsYXNzTmFtZT17YGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC13aGl0ZSB3LTEwMCAke3MucmVwb3J0X2J0bn1gfSBvbkNsaWNrPXt0b2dnbGV9PntidXR0b25MYWJlbH08L0J1dHRvbj5cbiAgICAgIDwvRm9ybT5cblxuICAgICAgPE1vZGFsIGlzT3Blbj17bW9kYWx9IHRvZ2dsZT17dG9nZ2xlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxNb2RhbEhlYWRlciB0b2dnbGU9e3RvZ2dsZX0gc3R5bGU9e3sgZm9udEZhbWlseTogJ0F1ZGlvd2lkZSwgY3Vyc2l2ZScgfX0gY2xhc3NOYW1lPVwiYmctZGFyayB0ZXh0LWluZm8gYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5XCIgPntidXR0b25MYWJlbH08L01vZGFsSGVhZGVyPlxuICAgICAgICA8TW9kYWxCb2R5IGNsYXNzTmFtZT1cInBiLTAgYmctZGFyayB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgPHA+V2FudCB0byByZXBvcnQgZmFrZSBwaG90b3Mgb24gdGhpcyBhZD8gSWYgc28sIHVzZSB0aGUgYm94IGJlbG93IHRvIGVudGVyIGEgbGluayB0byB0aGUgd2VicGFnZSB0aGF0IHByb3ZpZGVzIHBvdGVudGlhbCBldmlkZW5jZSBvZiBtaXN1c2UsIGFuZCBWaWJlQ2l0eSB3aWxsIGludmVzdGlnYXRlIHlvdXIgY2xhaW0uIElmIHlvdSBhcmUgb3duZXIgb2YgdGhlIHBob3RvcyBpbiBxdWVzdGlvbiwgZm9sbG93IHRoZSBETUNBIGxpbmsgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZS48L3A+XG4gICAgICAgICAgPHA+PHNtYWxsPjxzdHJvbmc+SU1QT1JUQU5UPC9zdHJvbmc+OiBWaWJlQ2l0eSB0YWtlcyB0aGUgbWlzdXNlIG9mIHBob3RvZ3JhcGhzIHNlcmlvdXNseSBhbmQgd2lsbCBpbnZlc3RpZ2F0ZSBhbnkgcmVhc29uYWJsZSBldmlkZW5jZSBvZiBtaXN1c2UgcHJvdmlkZWQgdG8gdXMuIEhvd2V2ZXIsIGJlY2F1c2UgaXQgaXMgbm90IHVuY29tbW9uIGZvciB3ZWxsIGtub3duIG1vZGVscyBhbmQgYWR1bHQgc3RhcnMgdG8gYWR2ZXJ0aXNlIG9uIFZpYmVDaXR5LCBvciBmb3IgYWR1bHQgZW50ZXJ0YWluZXJzIHRvIGFkdmVydGlzZSBvbiBudW1lcm91cyBhZHVsdCB3ZWJzaXRlcywgb2Z0ZW4gdGltZXMgdW5kZXIgYWx0ZXJuYXRlIG5hbWVzLCB0aGUgaW5mb3JtYXRpb24geW91IHByb3ZpZGUgbWF5IG9yIG1heSBub3QgYWx3YXlzIHJlc3VsdCBpbiB0aGUgcmVtb3ZhbCBvZiB0aGUgYWR2ZXJ0aXNlbWVudCwgb3IgaW4gYW55IGFjdGlvbiBhdCBhbGwuIFBsZWFzZSBhbHNvIGJlIGF3YXJlIHRoYXQgdGhlIFZpYmVDaXR5IEd1aWRlIGNhbm5vdCBhbmQgZG9lcyBub3QgbWFrZSBhbnkgZ3VhcmFudGVlcyBvciB3YXJyYW50aWVzIHRoYXQgZWl0aGVyIChhKSB0aGUgYWR2ZXJ0aXNlciBpbiB0aGUgcGljdHVyZXMgb24gYW55IHBhcnRpY3VsYXIgYWQgd2lsbCBiZSB0aGUgc2FtZSBpbmRpdmlkdWFsIHdobyBzaG93cyB1cCBmb3IgYW55IGRhdGUgYXJyYW5nZWQgYmV0d2VlbiBhbiBhZHZlcnRpc2VyIGFuZCB5b3Vyc2VsZiwgKGIpIHRoYXQgYW55IG9mIHRoZSB0ZXh0LCBpbmNsdWRpbmcgdGhlIG5hbWUgb2YgdGhlIGFkdmVydGlzZXIsIG9yIHN0YXRzIHRoYXQgYXBwZWFycyBvbiBhbiBhZHZlcnRpc2VtZW50IGlzIGFjY3VyYXRlIG9yIHRydXRoZnVsLjwvc21hbGw+PC9wPlxuICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiY29udGFpbmVyIGJnLWRhcmsgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwidy0xMDAgZC1ibG9ja1wiPlxuICAgICAgICAgICAgICBMaW5rIGZvciBFdmlkZW5jZSBvZiBNaXN1c2U6XG4gICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidXJsXCIgb25DaGFuZ2U9e2UgPT4gc2V0TGluayhlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctMTAwIGQtYmxvY2sgYmctZGFyayB0ZXh0LXdoaXRlIGJvcmVkciBib3JkZXItc2Vjb25kYXJ5XCIgcGxhY2Vob2xkZXI9XCJodHRwOi8vLi4uXCIgLz5cbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICAgPE1vZGFsRm9vdGVyIGNsYXNzTmFtZT1cImJnLWRhcmsgdGV4dC13aGl0ZSBib3JkZXItdG9wIGJvcmRlci1zZWNvbmRhcnlcIj5cbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5mb1wiIG9uQ2xpY2s9e3JlcG9ydEhhbmRsZXJ9PlNFTkQgUkVQT1JUPC9CdXR0b24+eycgJ31cbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dG9nZ2xlfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydEZha2VQaG90b3NNb2RhbFdpbmRvdztcblxuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIC8vIGJvb2xlYW4gdG8gY29udHJvbCB0aGUgc3RhdGUgb2YgdGhlIHBvcG92ZXJcbiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgLy8gaWYgbW9kYWwgc2hvdWxkIGJlIGNlbnRlcmVkIHZlcnRpY2FsbHkgaW4gdmlld3BvcnRcbiAgY2VudGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvLyBjb3JyZXNwb25kcyB0byBib290c3RyYXAncyBtb2RhbCBzaXplcywgaWUuICdsZycgb3IgJ3NtJ1xuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvLyBjYWxsYmFjayBmb3IgdG9nZ2xpbmcgaXNPcGVuIGluIHRoZSBjb250cm9sbGluZyBjb21wb25lbnRcbiAgdG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcbiAgcm9sZTogUHJvcFR5cGVzLnN0cmluZywgLy8gZGVmYXVsdHMgdG8gXCJkaWFsb2dcIlxuICAvLyB1c2VkIHRvIHJlZmVyZW5jZSB0aGUgSUQgb2YgdGhlIHRpdGxlIGVsZW1lbnQgaW4gdGhlIG1vZGFsXG4gIGxhYmVsbGVkQnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGtleWJvYXJkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLy8gY29udHJvbCBiYWNrZHJvcCwgc2VlIGh0dHA6Ly92NC1hbHBoYS5nZXRib290c3RyYXAuY29tL2NvbXBvbmVudHMvbW9kYWwvI29wdGlvbnNcbiAgYmFja2Ryb3A6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ib29sLFxuICAgIFByb3BUeXBlcy5vbmVPZihbJ3N0YXRpYyddKVxuICBdKSxcbiAgLy8gaWYgYm9keSBvZiBtb2RhbCBzaG91bGQgYmUgc2Nyb2xsYWJsZSB3aGVuIGNvbnRlbnQgaXMgbG9uZ1xuICBzY3JvbGxhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLy8gYWxsb3dzIGZvciBhIG5vZGUvY29tcG9uZW50IHRvIGV4aXN0IG5leHQgdG8gdGhlIG1vZGFsIChvdXRzaWRlIG9mIGl0KS4gVXNlZnVsIGZvciBleHRlcm5hbCBjbG9zZSBidXR0b25zXG4gIC8vIGV4dGVybmFsOiBQcm9wVHlwZXMubm9kZSxcbiAgLy8gY2FsbGVkIG9uIGNvbXBvbmVudERpZE1vdW50XG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAvLyBjYWxsZWQgb24gY29tcG9uZW50V2lsbFVubW91bnRcbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgLy8gY2FsbGVkIHdoZW4gZG9uZSB0cmFuc2l0aW9uaW5nIGluXG4gIG9uT3BlbmVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgLy8gY2FsbGVkIHdoZW4gZG9uZSB0cmFuc2l0aW9uaW5nIG91dFxuICBvbkNsb3NlZDogUHJvcFR5cGVzLmZ1bmMsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbW9kYWxDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJhY2tkcm9wQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb250ZW50Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvLyBib29sZWFuIHRvIGNvbnRyb2wgd2hldGhlciB0aGUgZmFkZSB0cmFuc2l0aW9uIG9jY3VycyAoZGVmYXVsdDogdHJ1ZSlcbiAgZmFkZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLy8gekluZGV4IGRlZmF1bHRzIHRvIDEwMDAuXG4gIHpJbmRleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICBdKSxcbiAgLy8gaWYgbW9kYWwgc2hvdWxkIGJlIGRlc3RydWN0ZWQvcmVtb3ZlZCBmcm9tIERPTSBhZnRlciBjbG9zaW5nXG4gIHVubW91bnRPbkNsb3NlOiBQcm9wVHlwZXMuYm9vbCwgLy8gZGVmYXVsdHMgdG8gdHJ1ZVxuICAvLyBpZiB0aGUgZWxlbWVudCB3aGljaCB0cmlnZ2VyZWQgdGhlIG1vZGFsIHRvIG9wZW4gc2hvdWxkIGZvY3VzZWQgYWZ0ZXIgdGhlIG1vZGFsIGNsb3NlcyAoc2VlIGV4YW1wbGUgc29tZXdoZXJlIGJlbG93KVxuICByZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IFByb3BUeXBlcy5ib29sIC8vIGRlZmF1bHRzIHRvIHRydWVcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgcyBmcm9tIFwiLi9wcm9maWxlLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciwgSW5wdXQsIExhYmVsLCBGb3JtLCBGb3JtR3JvdXAgfSBmcm9tICdyZWFjdHN0cmFwJztcblxuY29uc3QgUmVwb3J0VHJhZmZpY2tpbmdNb2RhbFdpbmRvdyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYnV0dG9uTGFiZWwsXG4gICAgY2xhc3NOYW1lXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0TW9kYWwoIW1vZGFsKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Rm9ybSBpbmxpbmUgb25TdWJtaXQ9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwiXCIgY2xhc3NOYW1lPXtgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXdoaXRlIHctMTAwICR7cy5yZXBvcnRfYnRufWB9IG9uQ2xpY2s9e3RvZ2dsZX0+e2J1dHRvbkxhYmVsfTwvQnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuXG4gICAgICA8TW9kYWwgaXNPcGVuPXttb2RhbH0gdG9nZ2xlPXt0b2dnbGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dG9nZ2xlfSBzdHlsZT17eyBmb250RmFtaWx5OiAnQXVkaW93aWRlLCBjdXJzaXZlJyB9fSBjbGFzc05hbWU9XCJiZy1kYXJrIHRleHQtaW5mbyBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnlcIiA+e2J1dHRvbkxhYmVsfTwvTW9kYWxIZWFkZXI+XG4gICAgICAgIDxNb2RhbEJvZHkgY2xhc3NOYW1lPVwicGItMCBiZy1kYXJrIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICA8aDU+QU5USS1UUkFGRklDS0lORyBBRFZPQ0FDWTo8L2g1PlxuICAgICAgICAgIDxwPlZpYmVDaXR5IGlzIHdob2xseSBjb21taXR0ZWQgdG8gcmFpc2luZyBhd2FyZW5lc3Mgb24gdGhlIGlzc3VlIG9mIGh1bWFuIHRyYWZmaWNraW5nIGFuZCBlbmdhZ2VzIGluIGJlc3QgcHJhY3RpY2VzIGFuZCBhZHZvY2FjeS4gSW4gdGhlIGV2ZW50IHdlIGJlY29tZSBhd2FyZSBvZiBhbnkgaW5jaWRlbnQgb2YgdHJhZmZpY2tpbmcsIHdlIGNvb3BlcmF0ZSBlbnRodXNpYXN0aWNhbGx5IHdpdGggbGF3IGVuZm9yY2VtZW50IGFuZCBhZ2VuY2llcyBpbnZvbHZlZCBpbiBjb21iYXRpbmcgdGhlIGFidXNlIG9mIGh1bWFuIHJpZ2h0cy48L3A+XG4gICAgICAgICAgPHA+PHN0cm9uZz5QbGVhc2UgcmVwb3J0IGFueSBzdXNwZWN0ZWQgc2V4dWFsIGV4cGxvaXRhdGlvbiBvZiBtaW5vcnMgYW5kL29yIGh1bWFuIHRyYWZmaWNraW5nIHRvIHRoZSBhcHByb3ByaWF0ZSBhdXRob3JpdGllcy48L3N0cm9uZz48L3A+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoNj5Vbml0ZWQgU3RhdGVzOjwvaDY+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly93d3cubWlzc2luZ2tpZHMuY29tL21pc3NpbmdraWRzL3NlcnZsZXQvUHVibGljSG9tZVNlcnZsZXQ/TGFuZ3VhZ2VDb3VudHJ5PWVuX1VTXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPk5hdGlvbmFsIENlbnRlciBmb3IgTWlzc2luZyAmIEV4cGxvaXRlZCBDaGlsZHJlbiAoTkNNRUMpPC9hPlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly93d3cubWlzc2luZ2tpZHMuY29tL21pc3NpbmdraWRzL3NlcnZsZXQvUGFnZVNlcnZsZXQ/TGFuZ3VhZ2VDb3VudHJ5PWVuX1VTJlBhZ2VJZD0yOTM2XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPkN5YmVyVGlwbGluZTwvYT4gLSByZXBvcnQgY2hpbGQgZXhwbG9pdGF0aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjI0LUhvdXIgSG90bGluZTogMS04MDAtODQzLTU2Nzg8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL3d3dy5wb2xhcmlzcHJvamVjdC5vcmcvaW5kZXgucGhwXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPlBvbGFyaXMgUHJvamVjdCAtIFJlcG9ydCBIdW1hbiBUcmFmZmlja2luZzwvYT46IDg4OC0zNzMtNzg4ODwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vd3d3Lmhocy5nb3YvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPiBEZXB0LiBvZiBIZWFsdGggJiBIdW1hbiBTZXJ2aWNlczwvYT46IDg4OC0zNzMtNzg4ODwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vd3d3LmNoaWxkcmVub2Z0aGVuaWdodC5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPkNoaWxkcmVuIG9mIHRoZSBOaWdodDwvYT46IDgwMC01NTEtMTMwMDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vd3d3LmFjZW5hdGlvbmFsLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwidGV4dC1pbmZvXCI+IEFDRSBOYXRpb25hbDwvYT46IDIwMi0yMjAtMzAxOTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vd3d3LmljZS5nb3YvaW5kZXguaHRtXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPiBIb21lbGFuZCBTZWN1cml0eSBJbnZlc3RpZ2F0aW9ucyBUaXAgTGluZTwvYT46IDg2Ni1ESFMtMi1JQ0U8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL3d3dy5qdXN0aWNlLmdvdi9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwidGV4dC1pbmZvXCI+IERlcHQuIG9mIEp1c3RpY2U8L2E+OiA4ODgtNDI4LTc1ODE8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5GQkkgT2ZmaWNlOiA8YSBocmVmPVwiaHR0cDovL3d3dy5mYmkuZ292L2NvbnRhY3QtdXMvZmllbGRcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwidGV4dC1pbmZvXCI+aHR0cDovL3d3dy5mYmkuZ292L2NvbnRhY3QtdXMvZmllbGQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGg2Pkdlcm1hbnk6PC9oNj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL3d3dy5rb2V0emZ1c2JhaG4uZGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPiBZUEEgQWdlbnQgLSBKdWdlbmRzY2h1dHpiZWF1ZnRyYWd0ZXI6IFJlY2h0c2Fud2FsdCBEci4gRGFuaWVsIEvDtnR6PC9hPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg1PldBUk5JTkcgU0lHTlMgT0YgUE9TU0lCTEUgSFVNQU4gVFJBRkZJQ0tJTkc6PC9oNT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPkRvZXMgYW4gZW50ZXJ0YWluZXIgYXJyaXZlIGFjY29tcGFuaWVkIGJ5IGFub3RoZXIgaW5kaXZpZHVhbD88L2xpPlxuICAgICAgICAgICAgICA8bGk+RG9lcyB0aGF0IGluZGl2aWR1YWwgc3BlYWsgZm9yIG9yIGFwcGVhciB0byBtYWludGFpbiBjb250cm9sIG92ZXIgdGhlIGVudGVydGFpbmVyPzwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Eb2VzIHRoZSBlbnRlcnRhaW5lciBzZWVtIGZlYXJmdWwgb2YgdGhhdCBpbmRpdmlkdWFsPzwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Eb2VzIHRoZSBlbnRlcnRhaW5lciBoYXZlIGRpZmZpY3VsdHkgY29tbXVuaWNhdGluZywgd2hldGhlciByZXN1bHRpbmcgZnJvbSBhIGxhbmd1YWdlIGJhcnJpZXIgb3IgZmVhciBvZiBpbnRlcmFjdGlvbj88L2xpPlxuICAgICAgICAgICAgICA8bGk+RG9lcyB0aGUgZW50ZXJ0YWluZXIgYXBwZWFyIHRvIGJlIHVuZGVyYWdlIG9yY2xvc2UgdG8gdW5kZXJhZ2U/PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICA8TW9kYWxGb290ZXIgY2xhc3NOYW1lPVwiYmctZGFyayB0ZXh0LXdoaXRlIGJvcmRlci10b3AgYm9yZGVyLXNlY29uZGFyeVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInctMTAwIHRleHQtY2VudGVyXCI+VXNlIGNvbW1vbiBzZW5zZSwgYW5kIGNvbnRhY3QgdGhlIGFwcHJvcHJpYXRlIGF1dGhvcml0aWVzIGlmIHlvdSBzdXNwZWN0IHRoYXQgc29tZW9uZSBpcyBiZWluZyB0cmFmZmlja2VkLjwvcD5cbiAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydFRyYWZmaWNraW5nTW9kYWxXaW5kb3c7XG5cblxuTW9kYWwucHJvcFR5cGVzID0ge1xuICAvLyBib29sZWFuIHRvIGNvbnRyb2wgdGhlIHN0YXRlIG9mIHRoZSBwb3BvdmVyXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIC8vIGlmIG1vZGFsIHNob3VsZCBiZSBjZW50ZXJlZCB2ZXJ0aWNhbGx5IGluIHZpZXdwb3J0XG4gIGNlbnRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLy8gY29ycmVzcG9uZHMgdG8gYm9vdHN0cmFwJ3MgbW9kYWwgc2l6ZXMsIGllLiAnbGcnIG9yICdzbSdcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLy8gY2FsbGJhY2sgZm9yIHRvZ2dsaW5nIGlzT3BlbiBpbiB0aGUgY29udHJvbGxpbmcgY29tcG9uZW50XG4gIHRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHJvbGU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGRlZmF1bHRzIHRvIFwiZGlhbG9nXCJcbiAgLy8gdXNlZCB0byByZWZlcmVuY2UgdGhlIElEIG9mIHRoZSB0aXRsZSBlbGVtZW50IGluIHRoZSBtb2RhbFxuICBsYWJlbGxlZEJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBrZXlib2FyZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8vIGNvbnRyb2wgYmFja2Ryb3AsIHNlZSBodHRwOi8vdjQtYWxwaGEuZ2V0Ym9vdHN0cmFwLmNvbS9jb21wb25lbnRzL21vZGFsLyNvcHRpb25zXG4gIGJhY2tkcm9wOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMub25lT2YoWydzdGF0aWMnXSlcbiAgXSksXG4gIC8vIGlmIGJvZHkgb2YgbW9kYWwgc2hvdWxkIGJlIHNjcm9sbGFibGUgd2hlbiBjb250ZW50IGlzIGxvbmdcbiAgc2Nyb2xsYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8vIGFsbG93cyBmb3IgYSBub2RlL2NvbXBvbmVudCB0byBleGlzdCBuZXh0IHRvIHRoZSBtb2RhbCAob3V0c2lkZSBvZiBpdCkuIFVzZWZ1bCBmb3IgZXh0ZXJuYWwgY2xvc2UgYnV0dG9uc1xuICAvLyBleHRlcm5hbDogUHJvcFR5cGVzLm5vZGUsXG4gIC8vIGNhbGxlZCBvbiBjb21wb25lbnREaWRNb3VudFxuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLy8gY2FsbGVkIG9uIGNvbXBvbmVudFdpbGxVbm1vdW50XG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG4gIC8vIGNhbGxlZCB3aGVuIGRvbmUgdHJhbnNpdGlvbmluZyBpblxuICBvbk9wZW5lZDogUHJvcFR5cGVzLmZ1bmMsXG4gIC8vIGNhbGxlZCB3aGVuIGRvbmUgdHJhbnNpdGlvbmluZyBvdXRcbiAgb25DbG9zZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1vZGFsQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBiYWNrZHJvcENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udGVudENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLy8gYm9vbGVhbiB0byBjb250cm9sIHdoZXRoZXIgdGhlIGZhZGUgdHJhbnNpdGlvbiBvY2N1cnMgKGRlZmF1bHQ6IHRydWUpXG4gIGZhZGU6IFByb3BUeXBlcy5ib29sLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8vIHpJbmRleCBkZWZhdWx0cyB0byAxMDAwLlxuICB6SW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgXSksXG4gIC8vIGlmIG1vZGFsIHNob3VsZCBiZSBkZXN0cnVjdGVkL3JlbW92ZWQgZnJvbSBET00gYWZ0ZXIgY2xvc2luZ1xuICB1bm1vdW50T25DbG9zZTogUHJvcFR5cGVzLmJvb2wsIC8vIGRlZmF1bHRzIHRvIHRydWVcbiAgLy8gaWYgdGhlIGVsZW1lbnQgd2hpY2ggdHJpZ2dlcmVkIHRoZSBtb2RhbCB0byBvcGVuIHNob3VsZCBmb2N1c2VkIGFmdGVyIHRoZSBtb2RhbCBjbG9zZXMgKHNlZSBleGFtcGxlIHNvbWV3aGVyZSBiZWxvdylcbiAgcmV0dXJuRm9jdXNBZnRlckNsb3NlOiBQcm9wVHlwZXMuYm9vbCAvLyBkZWZhdWx0cyB0byB0cnVlXG59XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwcm9maWxlX2NvbnRyb2xcIjogXCJwcm9maWxlX3Byb2ZpbGVfY29udHJvbF9fMjdtQ0dcIixcblx0XCJwcm9maWxlX2NvbnRyb2xfYnV0dG9uc1wiOiBcInByb2ZpbGVfcHJvZmlsZV9jb250cm9sX2J1dHRvbnNfXzJCVkdnXCIsXG5cdFwicHJvZmlsZVwiOiBcInByb2ZpbGVfcHJvZmlsZV9fMnFLYW1cIixcblx0XCJjYXJkXCI6IFwicHJvZmlsZV9jYXJkX18zZEc5VlwiLFxuXHRcInBob3RvX3NsaWRlclwiOiBcInByb2ZpbGVfcGhvdG9fc2xpZGVyX18yR0pBLVwiLFxuXHRcInNsaWRlXCI6IFwicHJvZmlsZV9zbGlkZV9fMm5HNjhcIixcblx0XCJwaG90b190b2dnbGVyX2JhY2tcIjogXCJwcm9maWxlX3Bob3RvX3RvZ2dsZXJfYmFja19fM3VkTDBcIixcblx0XCJwaG90b190b2dnbGVyX2ZvcnZhcmRcIjogXCJwcm9maWxlX3Bob3RvX3RvZ2dsZXJfZm9ydmFyZF9fMUxmdmtcIixcblx0XCJpbWFnZV9ibG9ja1wiOiBcInByb2ZpbGVfaW1hZ2VfYmxvY2tfXzJ2b0dvXCIsXG5cdFwicmVwb3J0X2J0bl9ncm91cFwiOiBcInByb2ZpbGVfcmVwb3J0X2J0bl9ncm91cF9fMWJRRGZcIixcblx0XCJyZXBvcnRfYnRuXCI6IFwicHJvZmlsZV9yZXBvcnRfYnRuX18ydndGeFwiLFxuXHRcImZhdm9yaXRlX2J0blwiOiBcInByb2ZpbGVfZmF2b3JpdGVfYnRuX18zUkx4UlwiLFxuXHRcImNvbnRlbnRfYmxvY2tcIjogXCJwcm9maWxlX2NvbnRlbnRfYmxvY2tfX1hsbHRMXCIsXG5cdFwiY29udGVudF9ibG9ja19oZWFkZXJcIjogXCJwcm9maWxlX2NvbnRlbnRfYmxvY2tfaGVhZGVyX19NdHdycFwiLFxuXHRcImNvbnRlbnRfYmxvY2tfZGVzY3JpcHRpb25cIjogXCJwcm9maWxlX2NvbnRlbnRfYmxvY2tfZGVzY3JpcHRpb25fX3FYdC1QXCIsXG5cdFwiY29udGFjdHNfYmx1ZV9ibG9ja1wiOiBcInByb2ZpbGVfY29udGFjdHNfYmx1ZV9ibG9ja19fblEtT0hcIixcblx0XCJtYWluX2NvbnRlbnRfYmxvY2tcIjogXCJwcm9maWxlX21haW5fY29udGVudF9ibG9ja19fcTBaYVBcIixcblx0XCJ0ZXh0X2Jsb2NrXCI6IFwicHJvZmlsZV90ZXh0X2Jsb2NrX18yaXNOcVwiLFxuXHRcInRleHRfYmxvY2tfdGl0bGVcIjogXCJwcm9maWxlX3RleHRfYmxvY2tfdGl0bGVfXzJoOXdFXCIsXG5cdFwiZGV0YWlsc19ibG9ja1wiOiBcInByb2ZpbGVfZGV0YWlsc19ibG9ja19fMWplMnRcIixcblx0XCJhZGRfY29tbWVudF9ibG9ja1wiOiBcInByb2ZpbGVfYWRkX2NvbW1lbnRfYmxvY2tfXzF6WTd3XCIsXG5cdFwiY29tbWVudHNfYmxvY2tcIjogXCJwcm9maWxlX2NvbW1lbnRzX2Jsb2NrX18zeFJOelwiLFxuXHRcImNvbW1lbnRzX2Jsb2NrX3RpdGxlXCI6IFwicHJvZmlsZV9jb21tZW50c19ibG9ja190aXRsZV9fZEpWM3VcIixcblx0XCJjb21tZW50XCI6IFwicHJvZmlsZV9jb21tZW50X18zd0pyN1wiLFxuXHRcImNvbW1lbnRfdGl0bGVcIjogXCJwcm9maWxlX2NvbW1lbnRfdGl0bGVfXzMzdDJlXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS1wYWdlL0NhdGVnb3JpZXNcIjtcbmltcG9ydCBMb2NhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lLXBhZ2UvTG9jYXRpb25cIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS1wYWdlL1NlYXJjaFwiO1xuaW1wb3J0IFByb2ZpbGVzQ29udHJvbCBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RlbC1wcm9maWxlL1Byb2ZpbGVzQ29udHJvbFwiO1xuaW1wb3J0IE1vZGVsUHJvZmlsZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kZWwtcHJvZmlsZS9Nb2RlbFByb2ZpbGVDYXJkXCI7XG5pbXBvcnQge1xuXHRnZXRBbGxQb3N0cyxcblx0Z2V0TG9jYXRpb25zSW5mbyxcblx0c2VsZWN0UG9zdHNQYWdlLFxuXHRnZXRQb3N0Q29tbWVudHMsXG5cdGNyZWF0ZVBvc3RDb21tZW50LFxuXHRmaWx0ZXJQb3N0cyxcblx0cmVwb3J0UG9zdCxcblx0c2hvd0FsZXJ0LFxuXHRhZGRUb0Zhdm9yaXRlc1xufSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9hY3Rpb25zXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZnVuY3Rpb24gTW9kZWxQcm9maWxlKHByb3BzKSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0cHJvcHMuZ2V0QWxsUG9zdHMoKTtcblx0XHRwcm9wcy5nZXRMb2NhdGlvbnNJbmZvKCk7XG5cdFx0cHJvcHMuZ2V0UG9zdENvbW1lbnRzKHJvdXRlci5xdWVyeS5pZCk7XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8TG9jYXRpb24gc3RhdGVzPXtwcm9wcy5zdGF0ZXN9IC8+XG5cdFx0XHQ8U2VhcmNoIC8+XG5cdFx0XHQ8Q2F0ZWdvcmllc1xuXHRcdFx0XHRjYXRlZ29yaWVzPXtwcm9wcy5jYXRlZ29yaWVzfVxuXHRcdFx0XHRuZXdQb3N0cz17cHJvcHMubmV3UG9zdHN9XG5cdFx0XHRcdGZpbHRlclBvc3RzPXtwcm9wcy5maWx0ZXJQb3N0c31cblx0XHRcdC8+XG5cdFx0XHQ8UHJvZmlsZXNDb250cm9sIHBvc3RzPXtwcm9wcy5wb3N0c30gLz5cblx0XHRcdDxNb2RlbFByb2ZpbGVDYXJkXG5cdFx0XHRcdHBvc3RzPXtwcm9wcy5wb3N0c31cblx0XHRcdFx0cG9zdENvbW1lbnRzPXtwcm9wcy5wb3N0Q29tbWVudHN9XG5cdFx0XHRcdGNyZWF0ZVBvc3RDb21tZW50PXtwcm9wcy5jcmVhdGVQb3N0Q29tbWVudH1cblx0XHRcdFx0Z2V0QWxsUG9zdHM9e3Byb3BzLmdldEFsbFBvc3RzfVxuXHRcdFx0XHRyZXBvcnRQb3N0PXtwcm9wcy5yZXBvcnRQb3N0fVxuXHRcdFx0XHRhbGVydD17cHJvcHMuYWxlcnR9XG5cdFx0XHRcdHNob3dBbGVydD17cHJvcHMuc2hvd0FsZXJ0fVxuXHRcdFx0XHRhZGRUb0Zhdm9yaXRlcz17cHJvcHMuYWRkVG9GYXZvcml0ZXN9XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblx0cmV0dXJuIHtcblx0XHQuLi5zdGF0ZSxcblx0XHRjYXRlZ29yaWVzOiBzdGF0ZS5hcHAuY2F0ZWdvcmllcyxcblx0XHRwb3N0czogc3RhdGUuYXBwLnBvc3RzLFxuXHRcdHN0YXRlczogc3RhdGUuYXBwLnN0YXRlcyxcblx0XHRwYWdlc051bWJlcjogc3RhdGUuYXBwLnBhZ2VzTnVtYmVyLFxuXHRcdHBvc3RDb21tZW50czogc3RhdGUuYXBwLnBvc3RDb21tZW50cyxcblx0XHRuZXdQb3N0czogc3RhdGUuYXBwLm5ld1Bvc3RzLFxuXHRcdGFsZXJ0OiBzdGF0ZS5hcHAuYWxlcnRcblx0fTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qb3BzID0ge1xuXHRnZXRBbGxQb3N0cyxcblx0Z2V0TG9jYXRpb25zSW5mbyxcblx0c2VsZWN0UG9zdHNQYWdlLFxuXHRnZXRQb3N0Q29tbWVudHMsXG5cdGNyZWF0ZVBvc3RDb21tZW50LFxuXHRmaWx0ZXJQb3N0cyxcblx0cmVwb3J0UG9zdCxcblx0c2hvd0FsZXJ0LFxuXHRhZGRUb0Zhdm9yaXRlc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qb3BzKShNb2RlbFByb2ZpbGUpO1xuIiwiaW1wb3J0IHtcbiAgICBURVNUX0NSRUFURV9QT1NULFxuICAgIFNIT1dfTE9BREVSLFxuICAgIEhJREVfTE9BREVSLFxuICAgIFNIT1dfQUxFUlQsXG4gICAgSElERV9BTEVSVCxcbiAgICBURVNUX1JFUVVFU1RfUE9TVFMsXG4gICAgR0VUX0FMTF9QT1NUUyxcbiAgICBHRVRfTE9DQUlUT05TX0lORk8sXG4gICAgR0VUX0NJVElFUyxcbiAgICBDUkVBVEVfU1VQUE9SVF9UQVNLLFxuICAgIEdFVF9BTExfVVNFUl9UQVNLUyxcbiAgICBHRVRfQVBQX0lORk8sXG4gICAgR0VUX05FV19QT1NUUyxcbiAgICBHRVRfUEFHRVNfTlVNQkVSLFxuICAgIEdFVF9QT1NUX0NPTU1FTlRTLFxuICAgIENSRUFURV9QT1NUX0NPTU1FTlQsXG4gICAgRklMVEVSX1BPU1RTLFxuICAgIEdFVF9GQVZPUklURVMsXG4gICAgR0VUX0NPTVBMQUlOUyxcbiAgICBTT1JUX1BPU1RTLFxuICAgIFNIT1dfU1VDQ0VTU1xufSBmcm9tIFwiLi90eXBlc1wiXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCB7IGF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9fc2VydmljZXNcIjtcblxuLy8gVCBFIFMgVCBcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb3N0KHBvc3Q6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVEVTVF9DUkVBVEVfUE9TVCxcbiAgICAgICAgcGF5bG9hZDogcG9zdFxuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gc2hvd0xvYWRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTSE9XX0xPQURFUlxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBoaWRlTG9hZGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEhJREVfTE9BREVSXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBbGVydCh0ZXh0OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFNIT1dfQUxFUlQsXG4gICAgICAgICAgICBwYXlsb2FkOiB0ZXh0XG4gICAgICAgIH0pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goaGlkZUFsZXJ0KCkpXG4gICAgICAgIH0sIDMwMDApXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVBbGVydCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBISURFX0FMRVJUXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9zdHMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBURVNUX1JFUVVFU1RfUE9TVFNcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IGdldEFsbFBvc3RzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHNgKTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9QQUdFU19OVU1CRVIsIHBheWxvYWQ6IHJlcy5sYXN0X3BhZ2UgfSk7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX0FMTF9QT1NUUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBnZXROZXdQb3N0cyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzL2FsbC9uZXdgKTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfTkVXX1BPU1RTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xufVxuZXhwb3J0IGNvbnN0IGdldExvY2F0aW9uc0luZm8gPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9sb2NhdGlvbmApO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9MT0NBSVRPTlNfSU5GTywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBnZXRBcHBJbmZvID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvaW5mb2ApO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9BUFBfSU5GTywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBnZXRDaXRpZXMgPSAoc3RhdGVJZDogbnVtYmVyIHwgc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IGFueSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvbG9jYXRpb24vY2l0aWVzLyR7c3RhdGVJZH1gKTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfQ0lUSUVTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xufVxuZXhwb3J0IGNvbnN0IGNyZWF0ZVN1cHBvcnRUYXNrID0gKHRhc2s6IGFueSkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3N1cHBvcnQvY3JlYXRlYCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGFzaylcbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHByb21pc2UudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XG4gICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogQ1JFQVRFX1NVUFBPUlRfVEFTSywgcGF5bG9hZDogdGFzayB9KVxufVxuZXhwb3J0IGNvbnN0IGdldEFsbFVzZXJzVGFza3MgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvc3VwcG9ydC8ke3VzZXIudXNlci5pZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfQUxMX1VTRVJfVEFTS1MsIHBheWxvYWQ6IHJlcyB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xufVxuZXhwb3J0IGNvbnN0IHNlbGVjdFBvc3RzUGFnZSA9IChwYWdlOiBudW1iZXIgfCBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzP3BhZ2U9JHtwYWdlfWApO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX1BBR0VTX05VTUJFUiwgcGF5bG9hZDogcmVzLmxhc3RfcGFnZSB9KTtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfQUxMX1BPU1RTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xufVxuZXhwb3J0IGNvbnN0IGdldFBvc3RDb21tZW50cyA9IChwb3N0SWQ6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzLyR7cG9zdElkfS9jb21tZW50c2AsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX1BPU1RfQ09NTUVOVFMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7O1xufVxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3RDb21tZW50ID0gKHBvc3RJZDogbnVtYmVyIHwgc3RyaW5nLCBjb21tZW50OiBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cy8ke3Bvc3RJZH0vY29tbWVudHMvY3JlYXRlYCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb21tZW50IH0pXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBDUkVBVEVfUE9TVF9DT01NRU5ULCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpOztcbn1cbmV4cG9ydCBjb25zdCBmaWx0ZXJQb3N0cyA9IChmaWx0ZXJJdGVtc09iamVjdDogYW55KSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgLy8gZnJvbSwgdG8sIGdlbmRlciwgZXRobmljaXR5X2lkLCBoYWlyX2lkLCBleWVfaWQsIGNhdGVnb3J5X2lkLCBhZmZpbGlhdGlvbl9pZCwgYXZhaWxhYmlsaXR5X2lkcyhhcnJheSksIGF2YWlsYWJsZXRvX2lkcyhhcnJheSlcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2ZpbHRlcmAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZpbHRlckl0ZW1zT2JqZWN0KVxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9QQUdFU19OVU1CRVIsIHBheWxvYWQ6IHJlcy5sYXN0X3BhZ2UgfSk7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogRklMVEVSX1BPU1RTLCBwYXlsb2FkOiByZXMuZGF0YS5kYXRhIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7O1xufVxuZXhwb3J0IGNvbnN0IHJlcG9ydFBvc3QgPSAocG9zdElkOiBudW1iZXIgfCBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvJHtwb3N0SWR9L2NvbXBsYWludHMvYWRkYCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbWVzc2FnZSwgc3RhdHVzOiAnSW4gcHJvZ3Jlc3MnXG4gICAgICAgIH0pXG4gICAgfSk7XG4gICAgLy8gY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvLyByZXR1cm4gcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgLy8gICAgIGRpc3BhdGNoKHsgdHlwZTogUkVQT1JUX1BPU1QgfSk7XG4gICAgLy8gfSk7XG59XG5leHBvcnQgY29uc3QgYWRkVG9GYXZvcml0ZXMgPSAocG9zdElkOiBudW1iZXIgfCBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzLyR7cG9zdElkfS9mYXZvcml0ZXMvYWRkYCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaXNfZmF2b3JpdGU6IHRydWVcbiAgICAgICAgfSlcbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBhZGRUb0Zhdm9yaXRlc0J1c2luZXNzID0gKHBvc3RJZDogbnVtYmVyIHwgc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xuICAgIHJldHVybiBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cy8ke3Bvc3RJZH0vZmF2b3JpdGVzX2J1c2luZXNzL2FkZGAsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IGdldEZhdm9yaXRlc0J1c2luZXNzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2Zhdm9yaXRlc19idXNpbmVzcy9teWAsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfRkFWT1JJVEVTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xufVxuZXhwb3J0IGNvbnN0IGdldEZhdm9yaXRlc1VzZXIgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvZmF2b3JpdGVzL215YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9GQVZPUklURVMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XG59XG5leHBvcnQgY29uc3QgZ2V0Q29tcGxhaW5zID0gKHVzZXJJZDogbnVtYmVyIHwgc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvY29tcGxhaW50cy91c2VyLyR7dXNlcklkfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfQ09NUExBSU5TLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xufVxuZXhwb3J0IGNvbnN0IHNvcnRQb3N0cyA9IChzb3J0VHlwZTogc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogU09SVF9QT1NUUywgcGF5bG9hZDogc29ydFR5cGUgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNob3dTdWNjZXNzID0gKHRleHQ6IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogU0hPV19TVUNDRVNTLCBwYXlsb2FkOiB0ZXh0IH0pXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogU0hPV19TVUNDRVNTLCBwYXlsb2FkOiBudWxsIH0pXG4gICAgfSwgMzAwMClcbn1cbiIsIi8vIHRlc3RcbmV4cG9ydCBjb25zdCBURVNUX0NSRUFURV9QT1NUID0gJ0NSRUFURV9QT1NUJztcbmV4cG9ydCBjb25zdCBURVNUX0ZFVENIX1BPU1QgPSAnRkVUQ0hfUE9TVCc7XG5leHBvcnQgY29uc3QgVEVTVF9SRVFVRVNUX1BPU1RTID0gJ1JFUVVFU1RfUE9TVFMnO1xuXG4vLyBhcHBcbmV4cG9ydCBjb25zdCBTSE9XX0xPQURFUiA9ICdBUFAvU0hPV19MT0FERVInO1xuZXhwb3J0IGNvbnN0IEhJREVfTE9BREVSID0gJ0FQUC9ISURFX0xPQURFUic7XG5leHBvcnQgY29uc3QgU0hPV19BTEVSVCA9ICdBUFAvU0hPV19BTEVSVCc7XG5leHBvcnQgY29uc3QgSElERV9BTEVSVCA9ICdBUFAvSElERV9BTEVSVCc7IFxuZXhwb3J0IGNvbnN0IEdFVF9BTExfUE9TVFMgPSAnR0VUX0FMTF9QT1NUUyc7XG5leHBvcnQgY29uc3QgR0VUX1BBR0VTX05VTUJFUiA9ICdHRVRfUEFHRVNfTlVNQkVSJztcbmV4cG9ydCBjb25zdCBHRVRfTkVXX1BPU1RTID0gJ0dFVF9ORVdfUE9TVFMnO1xuZXhwb3J0IGNvbnN0IEdFVF9MT0NBSVRPTlNfSU5GTyA9ICdHRVRfTE9DQUlUT05TX0lORk8nO1xuZXhwb3J0IGNvbnN0IEdFVF9DSVRJRVMgPSAnR0VUX0NJVElFUyc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1NVUFBPUlRfVEFTSyA9ICdDUkVBVEVfU1VQUE9SVF9UQVNLJztcbmV4cG9ydCBjb25zdCBHRVRfQUxMX1VTRVJfVEFTS1MgPSAnR0VUX0FMTF9VU0VSX1RBU0tTJztcbmV4cG9ydCBjb25zdCBHRVRfQVBQX0lORk8gPSAnR0VUX0FQUF9JTkZPJztcbmV4cG9ydCBjb25zdCBHRVRfUE9TVF9DT01NRU5UUyA9ICdHRVRfUE9TVF9DT01NRU5UUyc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1RfQ09NTUVOVCA9ICdDUkVBVEVfUE9TVF9DT01NRU5UJztcbmV4cG9ydCBjb25zdCBGSUxURVJfUE9TVFMgPSAnRklMVEVSX1BPU1RTJztcbmV4cG9ydCBjb25zdCBSRVBPUlRfUE9TVCA9ICdSRVBPUlRfUE9TVCc7XG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFUyA9ICdHRVRfRkFWT1JJVEVTJztcbmV4cG9ydCBjb25zdCBHRVRfQ09NUExBSU5TID0gJ0dFVF9HRVRfQ09NUExBSU5TJztcbmV4cG9ydCBjb25zdCBTT1JUX1BPU1RTID0gJ1NPUlRfUE9TVFMnO1xuZXhwb3J0IGNvbnN0IFNIT1dfU1VDQ0VTUyA9ICdTSE9XX1NVQ0NFU1MnO1xuXG4vLyBwcm92aWRlclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUID0gJ1BST1ZJREVSL0FERF9QT1NUJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVCA9ICdQUk9WSURFUi9SRU1PVkVfUE9TVCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU1QgPSAnUFJPVklERVIvVVBEQVRFX1BPU1QnO1xuXG4vLyBwcm92aWRlclxuZXhwb3J0IGludGVyZmFjZSBQcm92aWRlclBvc3Qge1xuICBpZDogbnVtYmVyIHwgc3RyaW5nLFxuICBuYW1lOiBzdHJpbmcsXG4gIHNlY29uZE5hbWU6IHN0cmluZyxcbiAgYWNjb3VudGluZ05hbWU6IHN0cmluZyxcbiAgc2V4OiBzdHJpbmcsXG4gIGFnZTogbnVtYmVyIHwgc3RyaW5nLFxuICBlbWFpbDogc3RyaW5nLFxuICBwaG9uZTogbnVtYmVyIHwgc3RyaW5nLFxuICBldGhuaXRoaXR5OiBzdHJpbmcsXG4gIGhhaXI6IHN0cmluZyxcbiAgZXllczogc3RyaW5nLFxuICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcbiAgYWZmaWxpYXRpb246IHN0cmluZyxcbiAgYXZhaWxhYmxlVG86IHN0cmluZyxcbiAgYXZhaWxhYmlsaXR5OiBzdHJpbmcsXG4gIHNob3J0U3VtbWFyeTogc3RyaW5nLFxuICBhYm91dDogc3RyaW5nLFxuICBwaG90b3M6IHN0cmluZ1tdLFxuICB2aWRlb3M6IHN0cmluZ1tdXG59XG5cbi8vIHVzZXJcbmV4cG9ydCBjb25zdCBTRUxFQ1RfU1RBVEUgPSAnVVNFUi9TRUxFQ1RfU1RBVEUnO1xuZXhwb3J0IGNvbnN0IFNFTEVDVF9DSVRZID0gJ1VTRVIvU0VMRUNUX0NJVFknO1xuZXhwb3J0IGNvbnN0IFNFTEVDVF9MSVNUX1NPUlQgPSAnVVNFUi9TRUxFQ1RfTElTVF9TT1JUJztcbmV4cG9ydCBjb25zdCBTRUxFQ1RfTElTVF9GSUxURVIgPSAnVVNFUi9TRUxFQ1RfTElTVF9GSUxURVInO1xuZXhwb3J0IGNvbnN0IFNFTEVDVF9DQVRFR09SWSA9ICdVU0VSL1NFTEVDVF9DQVRFR09SWSc7XG5cbi8vIGFkbWluXG5leHBvcnQgY29uc3QgR0VUX0FMTF9TVVBQT1JUX1RBU0tTID0gJ0dFVF9BTExfU1VQUE9SVF9UQVNLUyc7XG5leHBvcnQgY29uc3QgRURJVF9TVVBQT1JUX1RBU0tTID0gJ0VESVRfU1VQUE9SVF9UQVNLUyc7XG5leHBvcnQgY29uc3QgREVMRVRFX1NVUFBPUlRfVEFTSyA9ICdERUxFVEVfU1VQUE9SVF9UQVNLJztcbi8vIGV4cG9ydCBjb25zdCBDUkVBVEVfQ0FURUdPUlkgPSAnQ1JFQVRFX0NBVEVHT1JZJztcbi8vIGV4cG9ydCBjb25zdCBFRElUX0NBVEVHT1JZID0gJ0VESVRfQ0FURUdPUlknO1xuLy8gZXhwb3J0IGNvbnN0IERFTEVURV9DQVRFR09SWSA9ICdERUxFVEVfQ0FURUdPUlknO1xuIiwiaW1wb3J0IHsgR0VUX0FMTF9TVVBQT1JUX1RBU0tTLCBERUxFVEVfU1VQUE9SVF9UQVNLIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHRhc2tzOiBbXSxcblxufVxuXG5leHBvcnQgY29uc3QgYWRtaW5SZWR1Y2VyID0gKHN0YXRlOiBhbnkgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdFVF9BTExfU1VQUE9SVF9UQVNLUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0YXNrczogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBERUxFVEVfU1VQUE9SVF9UQVNLOlxuICAgICAgY29uc3QgdGFza3MgPSBzdGF0ZS50YXNrcy5maWx0ZXIoKHRhc2s6IGFueSkgPT4gdGFzay5pZCAhPSBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdGFza3MgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgU0hPV19MT0FERVIsXG4gIEhJREVfTE9BREVSLFxuICBTSE9XX0FMRVJULFxuICBISURFX0FMRVJULFxuICBHRVRfQUxMX1BPU1RTLFxuICBHRVRfTE9DQUlUT05TX0lORk8sXG4gIEdFVF9DSVRJRVMsXG4gIENSRUFURV9TVVBQT1JUX1RBU0ssXG4gIEdFVF9BTExfVVNFUl9UQVNLUyxcbiAgR0VUX0FQUF9JTkZPLFxuICBHRVRfTkVXX1BPU1RTLFxuICBHRVRfUEFHRVNfTlVNQkVSLFxuICBHRVRfUE9TVF9DT01NRU5UUyxcbiAgQ1JFQVRFX1BPU1RfQ09NTUVOVCxcbiAgRklMVEVSX1BPU1RTLFxuICBHRVRfRkFWT1JJVEVTLFxuICBHRVRfQ09NUExBSU5TLFxuICBTT1JUX1BPU1RTLFxuICBTSE9XX1NVQ0NFU1Ncbn0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwb3N0Q29tbWVudHM6IFtdLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgYWxlcnQ6IG51bGwsXG4gIGNhdGVnb3JpZXM6IFtdLFxuICBwb3N0czogW10sXG4gIG5ld1Bvc3RzOiBbXSxcbiAgc3RhdGVzOiBbXSxcbiAgY2l0aWVzOiBbXSxcbiAgc3VwcG9ydFRhc2tzOiBbXSxcbiAgYWZmaWxpYXRpb246IFtdLFxuICBhdmFpbGFiaWxpdHk6IFtdLFxuICBhdmFpbGFibGVfdG86IFtdLFxuICBldGhuaWNpdHk6IFtdLFxuICBleWVzOiBbXSxcbiAgaGFpcjogW10sXG4gIHBhZ2VzTnVtYmVyOiAwLFxuICBmYXZvcml0ZXM6IFtdLFxuICBjb21wbGFpbnM6IFtdLFxuICBzdWNjZXNzOiBudWxsXG59O1xuXG5leHBvcnQgY29uc3QgYXBwUmVkdWNlciA9IChzdGF0ZTogYW55ID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTSE9XX0xPQURFUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cblxuICAgIGNhc2UgU0hPV19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHN1Y2Nlc3M6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgSElERV9MT0FERVI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuXG4gICAgY2FzZSBTSE9XX0FMRVJUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFsZXJ0OiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIEhJREVfQUxFUlQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYWxlcnQ6IG51bGwgfVxuXG4gICAgY2FzZSBHRVRfQUxMX1BPU1RTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIFNPUlRfUE9TVFM6XG4gICAgICBsZXQgbmV3UG9zdHMgPSBzdGF0ZS5wb3N0cztcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gJ2RhdGUvLScpIHtcbiAgICAgICAgbmV3UG9zdHMuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGEuY3JlYXRlZF9hdC5zcGxpdCgnVCcpWzBdLnNwbGl0KCctJykuam9pbignLycpKTtcbiAgICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGIuY3JlYXRlZF9hdC5zcGxpdCgnVCcpWzBdLnNwbGl0KCctJykuam9pbignLycpKTtcbiAgICAgICAgICBpZiAoZGF0ZUEuZ2V0VGltZSgpIDwgZGF0ZUIuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRlQS5nZXRUaW1lKCkgPiBkYXRlQi5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBiIC0gYTtcbiAgICAgICAgICB9IGVsc2UgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogbmV3UG9zdHMgfVxuXG4gICAgY2FzZSBGSUxURVJfUE9TVFM6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgR0VUX1BBR0VTX05VTUJFUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwYWdlc051bWJlcjogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBHRVRfTkVXX1BPU1RTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG5ld1Bvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIEdFVF9MT0NBSVRPTlNfSU5GTzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdGF0ZXM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgR0VUX0NJVElFUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaXRpZXM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgR0VUX0NPTVBMQUlOUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjb21wbGFpbnM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgR0VUX0ZBVk9SSVRFUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmYXZvcml0ZXM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgQ1JFQVRFX1NVUFBPUlRfVEFTSzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdXBwb3J0VGFza3M6IFsuLi5zdGF0ZS5zdXBwb3J0VGFza3MsIGFjdGlvbi5wYXlsb2FkXSB9XG5cbiAgICBjYXNlIEdFVF9BTExfVVNFUl9UQVNLUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdXBwb3J0VGFza3M6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgR0VUX1BPU1RfQ09NTUVOVFM6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdENvbW1lbnRzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIENSRUFURV9QT1NUX0NPTU1FTlQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdENvbW1lbnRzOiBbLi4uc3RhdGUucG9zdENvbW1lbnRzLCBhY3Rpb24ucGF5bG9hZF0gfVxuXG4gICAgY2FzZSBHRVRfQVBQX0lORk86XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2F0ZWdvcmllczogYWN0aW9uLnBheWxvYWQuY2F0ZWdvcmllcyxcbiAgICAgICAgYWZmaWxpYXRpb246IGFjdGlvbi5wYXlsb2FkLmFmZmlsaWF0aW9uLFxuICAgICAgICBhdmFpbGFiaWxpdHk6IGFjdGlvbi5wYXlsb2FkLmF2YWlsYWJpbGl0eSxcbiAgICAgICAgYXZhaWxhYmxlX3RvOiBhY3Rpb24ucGF5bG9hZC5hdmFpbGFibGVfdG8sXG4gICAgICAgIGV0aG5pY2l0eTogYWN0aW9uLnBheWxvYWQuZXRobmljaXR5LFxuICAgICAgICBleWVzOiBhY3Rpb24ucGF5bG9hZC5leWVzLFxuICAgICAgICBoYWlyOiBhY3Rpb24ucGF5bG9hZC5oYWlyXG4gICAgICB9XG5cbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgeyBBRERfUE9TVCwgUkVNT1ZFX1BPU1QsIFVQREFURV9QT1NUIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwcm92aWRlclBvc3RzOiBbXVxufTtcblxuZXhwb3J0IGNvbnN0IHByb3ZpZGVyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX1BPU1Q6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvdmlkZXJQb3N0czogc3RhdGUucHJvdmlkZXJQb3N0cy5jb25jYXQoYWN0aW9uLnBheWxvYWQpIH1cblxuICAgIGNhc2UgUkVNT1ZFX1BPU1Q6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvdmlkZXJQb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBVUERBVEVfUE9TVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm92aWRlclBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgdGVzdFJlZHVjZXIgfSBmcm9tICcuL3Rlc3RSZWR1Y2VyJztcbmltcG9ydCB7IGFwcFJlZHVjZXIgfSBmcm9tICcuL2FwcFJlZHVjZXInO1xuaW1wb3J0IHsgcHJvdmlkZXJSZWR1Y2VyIH0gZnJvbSAnLi9wcm92aWRlclJlZHVjZXInO1xuaW1wb3J0IHsgdXNlclJlZHVjZXIgfSBmcm9tICcuL3VzZXJSZWR1Y2VyJztcbmltcG9ydCB7IGFkbWluUmVkdWNlciB9IGZyb20gJy4vYWRtaW5SZWR1Y2VyJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHRlc3RQb3N0czogdGVzdFJlZHVjZXIsXG4gICAgYXBwOiBhcHBSZWR1Y2VyLFxuICAgIHByb3ZpZGVyOiBwcm92aWRlclJlZHVjZXIsXG4gICAgdXNlcjogdXNlclJlZHVjZXIsXG4gICAgYWRtaW46IGFkbWluUmVkdWNlclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHsgVEVTVF9DUkVBVEVfUE9TVCwgVEVTVF9GRVRDSF9QT1NUIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwb3N0czogW10sXG4gIGZldGNoZWRQb3N0czogW11cbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVEVTVF9DUkVBVEVfUE9TVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogc3RhdGUucG9zdHMuY29uY2F0KGFjdGlvbi5wYXlsb2FkKSB9XG5cbiAgICBjYXNlIFRFU1RfRkVUQ0hfUE9TVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmZXRjaGVkUG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgeyBTRUxFQ1RfU1RBVEUsIFNFTEVDVF9DSVRZLCBTRUxFQ1RfTElTVF9TT1JULCBTRUxFQ1RfTElTVF9GSUxURVIsIFNFTEVDVF9DQVRFR09SWSB9IGZyb20gXCIuLi9hY3Rpb25zL3R5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgcG9zdHM6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlIFNFTEVDVF9TVEFURTpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBTRUxFQ1RfQ0lUWTpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBTRUxFQ1RfTElTVF9TT1JUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIFNFTEVDVF9MSVNUX0ZJTFRFUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBTRUxFQ1RfQ0FURUdPUlk6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvcm9vdFJlZHVjZXInO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcblxuY29uc3QgcHJlbG9hZGVkU3RhdGUgPSB7fTtcblxuY29uc3Qgc3RvcmU6IGFueSA9IGNyZWF0ZVN0b3JlKFxuICByb290UmVkdWNlcixcbiAgcHJlbG9hZGVkU3RhdGUsXG4gIGFwcGx5TWlkZGxld2FyZShcbiAgICB0aHVuayxcbiAgKVxuKTtcblxuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ3VwZGF0ZWQgc3RhdGU6ICcsIHN0b3JlLmdldFN0YXRlKCkpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=