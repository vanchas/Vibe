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
  getAppInfo,
  getCities
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
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_components_home_page_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    states: states,
    getCities: getCities,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), __jsx(_components_home_page_Search__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx(_components_home_page_Categories__WEBPACK_IMPORTED_MODULE_3__["default"], {
    categories: categories,
    newPosts: newPosts,
    filterPosts: filterPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
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
      lineNumber: 58,
      columnNumber: 13
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
  getAppInfo: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["getAppInfo"],
  getCities: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["getCities"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX3NlcnZpY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haW4vaG9yaXpvbnRhbC9tb2RlbC0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL2Nyb3duLXBpbmsucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvZmF2b3JpdGUtcGluay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9wbGFuZS1waW5rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3N0YXItcGluay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL0NhdGVnb3JpZXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9Fc2NvcnRDb250ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvRXNjb3J0R3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL0VzY29ydExpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9Mb2NhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL05ld1Bvc3RzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvU2VhcmNoLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvY2F0ZWdvcmllcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvZXNjb3J0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9sb2NhdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2Uvc2VhcmNoLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsLXdpbmRvdy9WZXJpZmllZFdpbmRvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWxzLWZpbHRlci9Nb2RlbHNGaWx0ZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGVscy1maWx0ZXIvZm9ybS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2FkbWluUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXBwUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcHJvdmlkZXJSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9yb290UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvdGVzdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3VzZXJSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zdG9yZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwidGFyZ2V0IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkxpbmsiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicCIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsImUiLCJub2RlTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJyZXNvbHZlIiwicHJldmVudERlZmF1bHQiLCJzY3JvbGwiLCJpbmRleE9mIiwicmVwbGFjZSIsInNoYWxsb3ciLCJ0aGVuIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZG9jdW1lbnQiLCJib2R5IiwiZm9jdXMiLCJwcmVmZXRjaCIsIndhcm4iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicGFyc2VkSHJlZiIsInBhcnNlZEFzIiwicmVzb2x2ZWRIcmVmIiwiaGFuZGxlUmVmIiwicmVmIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImpvaW4iLCJvcHRpb25zIiwicGF0aHMiLCJjYXRjaCIsInJlbmRlciIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY3VycmVudCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwYXNzSHJlZiIsInR5cGUiLCJwcm9jZXNzIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwidmFsdWUiLCJfZGVmYXVsdCIsInVzZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsImNyZWF0ZVJvdXRlciIsIndpdGhSb3V0ZXIiLCJSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJndW1lbnRzIiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwibWFwIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsImN1cnJlbnRVc2VyU3ViamVjdCIsIkNvb2tpZXMiLCJnZXRKU09OIiwiYXV0aGVudGljYXRpb25TZXJ2aWNlIiwibG9naW4iLCJsb2dvdXQiLCJyZWdpc3RyYXRpb25BZG1pbiIsInJlZ2lzdHJhdGlvbkNsaWVudCIsInJlZ2lzdHJhdGlvblByb3ZpZGVyIiwicmVnaXN0cmF0aW9uQWdlbmN5IiwiY3VycmVudFVzZXIiLCJjdXJyZW50VXNlclZhbHVlIiwiZW1haWwiLCJwYXNzd29yZCIsInJlbW92ZSIsInJlc3BvbnNlIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcm9taXNlIiwiZXhwaXJlcyIsInN0b3JlIiwiZGlzcGF0Y2giLCJzaG93QWxlcnQiLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJzaG93U3VjY2VzcyIsInNldFRpbWVvdXQiLCJwaG9uZSIsImFnZW5jeV9uYW1lIiwiQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJuZXdQb3N0cyIsImZpbHRlclBvc3RzIiwiZmlsdGVyQ2F0ZWdvcnkiLCJzZXRGaWx0ZXJDYXRlZ29yeSIsInVzZVN0YXRlIiwiY2hhbmdlQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsImlkIiwicyIsImNhdGVnb3JpZXNfYmxvY2siLCJjYXRlZ29yaWVzX3RpdGxlIiwiY2F0ZWdvcmllc19jb250ZW50IiwiY2F0ZWdvcmllc19jb250cm9sIiwiYyIsImkiLCJ0b0xvd2VyQ2FzZSIsImNhdGVnb3JpZXNfc3VidGl0bGUiLCJjYXRlZ29yaWVzX2Nhcm91c2VsIiwiRXNjb3J0Q29udGVudCIsInBvc3RzIiwicGFnZXNOdW1iZXIiLCJzZWxlY3RQb3N0c1BhZ2UiLCJhdmFpbGFiaWxpdHkiLCJhdmFpbGFibGVfdG8iLCJldGhuaWNpdHkiLCJleWVzIiwiaGFpciIsImFmZmlsaWF0aW9uIiwiYWRkVG9GYXZvcml0ZXMiLCJzb3J0UG9zdHMiLCJ2aXNpYmxlQ29tcG9uZW50Iiwic2V0VmlzaWJsZUNvbXBvbmVudCIsInNob3dGaWx0ZXIiLCJzZXRTaG93RmlsdGVyIiwidXNlRWZmZWN0IiwiJCIsImhpZGUiLCJzbGlkZUZpbHRlciIsInNsaWRlVG9nZ2xlIiwiY2hhbmdlVmlzaWJsZUNvbXBvbmVudCIsInBlcnNpc3QiLCJmYWRlT3V0IiwiYXR0ciIsImZhZGVJbiIsImVzY29ydF9jb250ZW50X2Jsb2NrIiwibWluSGVpZ2h0IiwiZXNjb3J0X2NvbnRlbnRfdGl0bGUiLCJmaWx0ZXJfc29ydF9jb250cm9sIiwiZmlsdGVyX2J0bl93cmFwIiwiZmlsdGVyX2J0bl9ncm91cCIsImZpbHRlcl9idG4iLCJzb3J0aW5nX2J0biIsImdyaWRfYnRuIiwibGlzdF9idG4iLCJmaWx0ZXJfaXRlbXNfYmxvY2siLCJFc2NvcnRHcmlkIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInBhZ2VzIiwic2V0UGFnZXMiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJwb3N0IiwidmVydGljYWxfc2xpZGUiLCJ2ZXJ0aWNhbF9zbGlkZV9pbWFnZSIsInBob3RvX2hvcml6b250YWwiLCJtb2RlbF9uYW1lIiwibW9kZWxfcGhvdG9fZ3JpZCIsInZlcnRpY2FsX3NsaWRlX21vZGVsX2luZm8iLCJuZXR3b3JrX3N0YXR1cyIsInRleHRUcmFuc2Zvcm0iLCJzdW1tYXJ5IiwiY2FyZF9jb250cm9sIiwiZmF2IiwiY3Jvd24iLCJzdGFyIiwicGxhbmUiLCJ2ZXJpZmljYXRpb24iLCJ2ZXJpZmllZCIsInZpZXdfcHJvZmlsZSIsIkVzY29ydExpc3QiLCJzZXR0aW5ncyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsImRvdHMiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJkcmFnZ2FibGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImluaXRpYWxTbGlkZSIsImVzY29ydF9saXN0Iiwic2xpZGUiLCJtb2RlbF9waG90byIsInBob3RvX3ZlcnRpY2FsIiwibW9kZWxfaW5mbyIsIm1vZGVsX2luZm9fdGl0bGUiLCJzaWduc19ncm91cCIsInNpZ24iLCJMb2NhdGlvbiIsInN0YXRlcyIsImdldENpdGllcyIsImN1cnJlbnRMb2NhdGlvbiIsInNldEN1cnJlbnRMb2NhdGlvbiIsImNoYW5nZUxvY2F0aW9uIiwic3RhdGVJZCIsImxvY2F0aW9uX3dyYXBwZXIiLCJsb2NhdG9uX2Jsb2NrX3RpdGxlIiwibG9jYXRpb25fYmxvY2tfc2VsZWN0IiwibG9jYXRpb25fYmxvY2tfbGlzdCIsIlNpbXBsZVNsaWRlciIsImZhZGUiLCJpbmRleCIsInNldEluZGV4IiwibmV3X3Bvc3RzX2Nhcm91c2VsIiwiU2VhcmNoIiwic2VhcmNoX2Jsb2NrIiwic2VhcmNoX2Jsb2NrX2NvbnRlbnQiLCJzZWFyY2hfaW5wdXRfbGFiZWwiLCJzZWFyY2hfaW5wdXQiLCJhZGRfcG9zdF9idG4iLCJWZXJpZmllZFdpbmRvdyIsImJ1dHRvbkxhYmVsIiwiY2xhc3NOYW1lIiwibW9kYWwiLCJzZXRNb2RhbCIsInRvZ2dsZSIsImZvbnRGYW1pbHkiLCJNb2RhbCIsImlzT3BlbiIsImF1dG9Gb2N1cyIsImNlbnRlcmVkIiwic2l6ZSIsImZ1bmMiLCJyb2xlIiwibGFiZWxsZWRCeSIsImtleWJvYXJkIiwiYmFja2Ryb3AiLCJvbmVPZiIsInNjcm9sbGFibGUiLCJvbkVudGVyIiwib25FeGl0Iiwib25PcGVuZWQiLCJvbkNsb3NlZCIsIndyYXBDbGFzc05hbWUiLCJtb2RhbENsYXNzTmFtZSIsImJhY2tkcm9wQ2xhc3NOYW1lIiwiY29udGVudENsYXNzTmFtZSIsImNzc01vZHVsZSIsInpJbmRleCIsIm51bWJlciIsInVubW91bnRPbkNsb3NlIiwicmV0dXJuRm9jdXNBZnRlckNsb3NlIiwiTW9kZWxzRmlsdGVyIiwic2V4Iiwic2V0U2V4IiwiYWdlRnJvbSIsInNldEFnZUZyb20iLCJhZ2VUbyIsInNldEFnZVRvIiwic3RhdGVFdGhuaWNpdHkiLCJzZXRFdGhuaWNpdHkiLCJzdGF0ZUhhaXIiLCJzZXRIYWlyIiwic3RhdGVFeWUiLCJzZXRFeWUiLCJzdGF0ZUFmZmlsaWF0aW9uIiwic2V0QWZmaWxpYXRpb24iLCJzdGF0ZUF2YWlsYWJsZVRvIiwic2V0QXZhaWxhYmxlVG8iLCJzdGF0ZUF2YWlsYWJpbGl0eSIsInNldEF2YWlsYWJpbGl0eSIsImFwcGx5RmlsdGVyIiwiZmlsdGVySXRlbXMiLCJpdGVtIiwidG9TdHJpbmciLCJmaWx0ZXJfZm9ybSIsInNleF9ibG9jayIsImxhYmVsIiwiY2hlY2ttYXJrIiwiYWdlX2Jsb2NrIiwiZXRobmljaXR5X2Jsb2NrIiwiaGFpcl9ibG9jayIsImgiLCJleWVfYmxvY2siLCJhZmZpbGlhdGlvbl9ibG9jayIsImEiLCJhdmFpbGFibGVUb19ibG9jayIsImNoZWNrZWQiLCJjaGVja3NpZ24iLCJhdmFpbGFiaWxpdHlfYmxvY2siLCJidG5fc3VibWl0IiwiSG9tZSIsImdldEFsbFBvc3RzIiwiZ2V0TG9jYXRpb25zSW5mbyIsImdldE5ld1Bvc3RzIiwiZ2V0QXBwSW5mbyIsIm1hcFN0YXRlVG9Qcm9wcyIsImFwcCIsIm1hcERpc3BhdGNoVG9Qb3BzIiwiY29ubmVjdCIsImNyZWF0ZVBvc3QiLCJURVNUX0NSRUFURV9QT1NUIiwicGF5bG9hZCIsInNob3dMb2FkZXIiLCJTSE9XX0xPQURFUiIsImhpZGVMb2FkZXIiLCJISURFX0xPQURFUiIsInRleHQiLCJTSE9XX0FMRVJUIiwiaGlkZUFsZXJ0IiwiSElERV9BTEVSVCIsImZldGNoUG9zdHMiLCJURVNUX1JFUVVFU1RfUE9TVFMiLCJHRVRfUEFHRVNfTlVNQkVSIiwibGFzdF9wYWdlIiwiR0VUX0FMTF9QT1NUUyIsIkdFVF9ORVdfUE9TVFMiLCJHRVRfTE9DQUlUT05TX0lORk8iLCJHRVRfQVBQX0lORk8iLCJHRVRfQ0lUSUVTIiwiY3JlYXRlU3VwcG9ydFRhc2siLCJ0YXNrIiwidXNlciIsInRva2VuX3R5cGUiLCJ0b2tlbiIsImxvZyIsIkNSRUFURV9TVVBQT1JUX1RBU0siLCJnZXRBbGxVc2Vyc1Rhc2tzIiwiR0VUX0FMTF9VU0VSX1RBU0tTIiwiZ2V0UG9zdENvbW1lbnRzIiwicG9zdElkIiwiR0VUX1BPU1RfQ09NTUVOVFMiLCJjcmVhdGVQb3N0Q29tbWVudCIsImNvbW1lbnQiLCJDUkVBVEVfUE9TVF9DT01NRU5UIiwiZmlsdGVySXRlbXNPYmplY3QiLCJGSUxURVJfUE9TVFMiLCJyZXBvcnRQb3N0IiwiaXNfZmF2b3JpdGUiLCJhZGRUb0Zhdm9yaXRlc0J1c2luZXNzIiwiZ2V0RmF2b3JpdGVzQnVzaW5lc3MiLCJHRVRfRkFWT1JJVEVTIiwiZ2V0RmF2b3JpdGVzVXNlciIsImdldENvbXBsYWlucyIsInVzZXJJZCIsIkdFVF9DT01QTEFJTlMiLCJzb3J0VHlwZSIsIlNPUlRfUE9TVFMiLCJTSE9XX1NVQ0NFU1MiLCJURVNUX0ZFVENIX1BPU1QiLCJSRVBPUlRfUE9TVCIsIkFERF9QT1NUIiwiUkVNT1ZFX1BPU1QiLCJVUERBVEVfUE9TVCIsIlNFTEVDVF9TVEFURSIsIlNFTEVDVF9DSVRZIiwiU0VMRUNUX0xJU1RfU09SVCIsIlNFTEVDVF9MSVNUX0ZJTFRFUiIsIlNFTEVDVF9DQVRFR09SWSIsIkdFVF9BTExfU1VQUE9SVF9UQVNLUyIsIkVESVRfU1VQUE9SVF9UQVNLUyIsIkRFTEVURV9TVVBQT1JUX1RBU0siLCJpbml0aWFsU3RhdGUiLCJ0YXNrcyIsImFkbWluUmVkdWNlciIsImFjdGlvbiIsInBvc3RDb21tZW50cyIsImxvYWRpbmciLCJhbGVydCIsImNpdGllcyIsInN1cHBvcnRUYXNrcyIsImZhdm9yaXRlcyIsImNvbXBsYWlucyIsImFwcFJlZHVjZXIiLCJzb3J0IiwiYiIsImRhdGVBIiwiRGF0ZSIsImNyZWF0ZWRfYXQiLCJkYXRlQiIsImdldFRpbWUiLCJwcm92aWRlclBvc3RzIiwicHJvdmlkZXJSZWR1Y2VyIiwiY29uY2F0Iiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ0ZXN0UG9zdHMiLCJ0ZXN0UmVkdWNlciIsInByb3ZpZGVyIiwidXNlclJlZHVjZXIiLCJhZG1pbiIsImZldGNoZWRQb3N0cyIsInByZWxvYWRlZFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsInN1YnNjcmliZSIsImdldFN0YXRlIl0sIm1hcHBp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QWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkEsK0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHtzaG93QWxlcnQsIHNob3dTdWNjZXNzfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9hY3Rpb25zXCI7XG5cbmxldCBjdXJyZW50VXNlclN1YmplY3QgPSBDb29raWVzLmdldEpTT04oXCJjdXJyZW50VXNlclwiKVxuICAgID8gQ29va2llcy5nZXRKU09OKFwiY3VycmVudFVzZXJcIilcbiAgICA6IHt9O1xuXG5jb25zdCB0YXJnZXQgPSBgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaWA7XG5cbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGlvblNlcnZpY2UgPSB7XG4gICAgbG9naW4sXG4gICAgbG9nb3V0LFxuICAgIHJlZ2lzdHJhdGlvbkFkbWluLFxuICAgIHJlZ2lzdHJhdGlvbkNsaWVudCxcbiAgICByZWdpc3RyYXRpb25Qcm92aWRlcixcbiAgICByZWdpc3RyYXRpb25BZ2VuY3ksXG4gICAgY3VycmVudFVzZXI6IGN1cnJlbnRVc2VyU3ViamVjdCxcbiAgICBnZXQgY3VycmVudFVzZXJWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRVc2VyU3ViamVjdDtcbiAgICB9LFxufTtcblxuYXN5bmMgZnVuY3Rpb24gbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RhcmdldH0vbG9naW5gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtlbWFpbCwgcGFzc3dvcmR9KSxcbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgQ29va2llcy5zZXQoXCJjdXJyZW50VXNlclwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSwge2V4cGlyZXM6IDF9KTtcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyU3ViamVjdCA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkudGhlbigoKSA9PiBSb3V0ZXIucHVzaCgnLycpKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2VcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gc3RvcmUuZGlzcGF0Y2goc2hvd0FsZXJ0KGRhdGEubWVzc2FnZSkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWdpc3RyYXRpb25DbGllbnQoXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHBhc3N3b3JkOiBzdHJpbmcsXG4gICAgZW1haWw6IHN0cmluZyxcbiAgICBwYXNzd29yZF9jb25maXJtYXRpb246IHN0cmluZ1xuKTogUHJvbWlzZTxhbnk+IHtcbiAgICBDb29raWVzLnJlbW92ZShcImN1cnJlbnRVc2VyXCIpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvY2xpZW50L3JlZ2lzdGVyYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzaG93U3VjY2VzcyhkYXRhLm1lc3NhZ2UpKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCksIDMwMDApXG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBzdG9yZS5kaXNwYXRjaChzaG93QWxlcnQoZGF0YS5tZXNzYWdlKSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkFkbWluKFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBwYXNzd29yZDogc3RyaW5nLFxuICAgIGVtYWlsOiBzdHJpbmcsXG4gICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBzdHJpbmdcbik6IFByb21pc2U8YW55PiB7XG4gICAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RhcmdldH0vYWRtaW4vcmVnaXN0ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHNob3dTdWNjZXNzKGRhdGEubWVzc2FnZSkpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSwgMzAwMClcbiAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHN0b3JlLmRpc3BhdGNoKHNob3dBbGVydChkYXRhLm1lc3NhZ2UpKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0cmF0aW9uUHJvdmlkZXIoXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHBhc3N3b3JkOiBzdHJpbmcsXG4gICAgZW1haWw6IHN0cmluZyxcbiAgICBwYXNzd29yZF9jb25maXJtYXRpb246IHN0cmluZyxcbiAgICBwaG9uZTogc3RyaW5nIHwgbnVtYmVyXG4pOiBQcm9taXNlPGFueT4ge1xuICAgIENvb2tpZXMucmVtb3ZlKFwiY3VycmVudFVzZXJcIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2luZGl2aWR1YWwvcmVnaXN0ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgcGhvbmVcbiAgICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzaG93U3VjY2VzcyhkYXRhLm1lc3NhZ2UpKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCksIDMwMDApXG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBzdG9yZS5kaXNwYXRjaChzaG93QWxlcnQoZGF0YS5tZXNzYWdlKSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkFnZW5jeShcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZyxcbiAgICBlbWFpbDogc3RyaW5nLFxuICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogc3RyaW5nLFxuICAgIHBob25lOiBzdHJpbmcgfCBudW1iZXIsXG4gICAgYWdlbmN5X25hbWU6IHN0cmluZ1xuKTogUHJvbWlzZTxhbnk+IHtcbiAgICBDb29raWVzLnJlbW92ZShcImN1cnJlbnRVc2VyXCIpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9hZ2VuY3kvcmVnaXN0ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgcGhvbmUsXG4gICAgICAgICAgICBhZ2VuY3lfbmFtZVxuICAgICAgICB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHNob3dTdWNjZXNzKGRhdGEubWVzc2FnZSkpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSwgMzAwMClcbiAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHN0b3JlLmRpc3BhdGNoKHNob3dBbGVydChkYXRhLm1lc3NhZ2UpKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9sb2dvdXRgLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgICAgfSxcbiAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiBSb3V0ZXIucHVzaCgnL2xvZ2luJykpXG4gICAgICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSkpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tb2RlbC0xLWMzZmE0MThlZWIxODhhMzEwYThhYmI4MjQ4ZWVlNzJmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVRDQU1BQUFDblV0MkhBQUFBQVhOU1IwSUIyY2tzZndBQUFFVlFURlJGQUFBQTUzaXY1SGV4NUhleDVIaXk1SGV4NUhXdjVIZXg1SGV4MzNDdjVIZXg0M2V4NUhheTVIaXc0M2V3NW5hejVIaXg1SGl4NUhldzVIZXg1WGF4NUhleTQzaXZzMUR0clFBQUFCZDBVazVUQUNEUDcyRGZNSkQvRVBDd2NPQ3ZVTUNnbjlCL3YwRDYrcjdRQUFBQXBVbEVRVlI0bkgyUTZSTERJQWlFTVI1ZE5mRm9qdmQvMUlLbWpmN3B6dWpnSjhnaWtVZ3QyaEFaYlIwOWVnSHdGSUE0d0JVSVJOc1BHcHM4K1FndXp5Z2NwaVZMelNxcFZSNnByVWhMRFNkVmpqZ3NEVzdrSXQ1RU81QWRkNVByeUJhOHBQSzVpZ1ZsZUVtcnlJRFAydkxHRjZYM3h5VFRvQThUOU4xcUhWbTk1OGtqek44cEEvYlNKZFAra1RyU0tYNWd6M1NvRzI3am03WXpOL3ZzLzN6TjhDTDZBSXBFQ05lb29CSDFBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCWUFBQUFUQ0FNQUFBQ2pwdzI2QUFBQUFYTlNSMElCMmNrc2Z3QUFBRHhRVEZSRkFBQUEzM0N2NUhleDVIZXg1SGV4NUhleDVYYXg1SGV5NUhleDVIV3Y1SGV4NUhpeTVIaXg0M2V4NUhleDVuYXo0M2l2NUhleDQzaXg1SGl3ZkVMbjJBQUFBQlIwVWs1VEFCQ1AzLy9QZjcvdk1OQmdvTER3VUVDUWdPQ1dFOHFzQUFBQWVFbEVRVlI0bkhXUVVRNkVJQXdGMzlzdFdoU1IxZnZmVlZEVU5kVDVta3hvQ1FEZzV5dXVJekxzZXUwUDlTb0Y5WmU2ckJqa1FFbXQ2b0JSVGtLNGRNUWtCaE9pbFJWV0ZiRlB4N2ZkczVVVEVOcjZLODlzK29LZCtYSHRtbERoMzhCQzNLUTZFRDBlY1AreGdVRGIyMXI2YXRTOFA5MitBZk11Qmlza3lQa0NBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCSUFBQUFUQ0FNQUFBQ3FUSzNBQUFBQUFYTlNSMElCMmNrc2Z3QUFBRXRRVEZSRkFBQUE1SGl3NVhheDQzaXg1SGV4NUhldzVIZXg1SGV5MzNDdjVIZXg1SGV4NTNpdjQzV3k1SFd2NUhleDVIYXk0M2V4NW5hejVIaXk1SGV4NUhpeDVIaXg1SGV4NDNpdjQzZXdhYUFLK1FBQUFCbDBVazVUQU9CL2dQK2YwTDhROE04Z1B6RGZjTEJRWUpDZ3dPOUFyK1huS1k0QUFBQ05TVVJCVkhpY1pZL2hGc0lnQ0ViVkllbVc1WnlidmYrVEpqREtGbitFZXpoOFYyT2R1ZFlFL284aDNNSUZoUWl6c09YZWk5c1VZYWhISXZZY1VWNGw0YXlZeTNsMms3bXUzNENkeUpGK05RQVFqbVZBblZoVFZZVjFPcHFNeVFOci9YUWZBc0xzbkg4UktnQ1Z2NEdjN0VWTExoYzJvNzdLRWwxRFZLMm15UzNKL3JhcnN2MVlxSGNxL0x3QllJUUZRUDNJNzNZQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVRDQU1BQUFDblV0MkhBQUFBQVhOU1IwSUIyY2tzZndBQUFEOVFURlJGQUFBQTQzaXY1SGV4NUhleDVIaXk1SGV4MzNDdjVIZXg0M2l4NUhleDQzZXg1SGV4NUhleTQzV3k1SGl4NTNpdjVIZXg1SGF5NUhpeDVIaXc0M2V4SkhjcXlBQUFBQlYwVWs1VEFFRFF6MkQvRU4rQTcyK1B2eitnSVBCd3dPQ3dTbmZZT0FBQUFIaEpSRUZVZUp4bDBGc1dnQ0FJQkZBbDBiSlNlK3gvcmFHbEpNN25QUXB6VUtwR2F6VUdwdEVNb3BGbUhhS1RPQ05sRmcrWGpJdmx0WDdkOE11MitwMG80SkNnTEVnREdpSVZ5dUJlNFZzV0UxdUtkZi9CZVBUTjMzRC9YNjNROEdROEcxNTVxekc1QlIrRkhwUUxhL3BTTFlaMmRIM25TZzgrU2dUb0EvQUd1d0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzIGZyb20gJy4vY2F0ZWdvcmllcy5tb2R1bGUuc2NzcydcbmltcG9ydCBOZXdQb3N0cyBmcm9tICcuL05ld1Bvc3RzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yaWVzKHsgY2F0ZWdvcmllcywgbmV3UG9zdHMsIGZpbHRlclBvc3RzIH0pIHtcbiAgY29uc3QgW2ZpbHRlckNhdGVnb3J5LCBzZXRGaWx0ZXJDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgY2hhbmdlQ2F0ZWdvcnkgPSAoY2F0ZWdvcnksIGlkKSA9PiB7XG4gICAgc2V0RmlsdGVyQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgIGZpbHRlclBvc3RzKHsnY2F0ZWdvcnlfaWQnOiBpZH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzLmNhdGVnb3JpZXNfYmxvY2t9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5jYXRlZ29yaWVzX3RpdGxlfWB9PlxuICAgICAgICA8cD5TRUxFQ1QgQSBDQVRFR09SWTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY2F0ZWdvcmllc19jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3MuY2F0ZWdvcmllc19jb250cm9sfWB9PlxuICAgICAgICAgIHsoY2F0ZWdvcmllcyAmJiBjYXRlZ29yaWVzLmxlbmd0aClcbiAgICAgICAgICAgID8gY2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IChcbiAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gY2hhbmdlQ2F0ZWdvcnkoYy5uYW1lLnRvTG93ZXJDYXNlKCksIGMuaWQpfSBjbGFzc05hbWU9e2Ake3MuY2F0ZWdvcnl9ICR7ZmlsdGVyQ2F0ZWdvcnkgPT09IGMubmFtZS50b0xvd2VyQ2FzZSgpID8gJ2FjdGl2ZV9idG5fYmx1ZScgOiAnJ31gfT57Yy5uYW1lLnRvVXBwZXJDYXNlKCl9PC9zcGFuPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIDogPD48ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHRleHQtaW5mb1wiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGwtMiB0ZXh0LWluZm9cIj5ObyBjYXRlZ29yaWVzIGZyb20gc2VydmVyLi4uPC9zcGFuPlxuICAgICAgICAgICAgPC8+fVxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLmNhdGVnb3JpZXNfc3VidGl0bGV9YH0+XG4gICAgICAgICAgPHA+TkVXIE9OIFRIRSBTSVRFPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY2F0ZWdvcmllc19jYXJvdXNlbH0+XG4gICAgICAgICAgPE5ld1Bvc3RzIG5ld1Bvc3RzPXtuZXdQb3N0c30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHMgZnJvbSBcIi4vZXNjb3J0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgTW9kZWxzRmlsdGVyIGZyb20gXCIuLi9tb2RlbHMtZmlsdGVyL01vZGVsc0ZpbHRlclwiO1xuaW1wb3J0IEVzY29ydExpc3QgZnJvbSBcIi4vRXNjb3J0TGlzdFwiO1xuaW1wb3J0IEVzY29ydEdyaWQgZnJvbSBcIi4vRXNjb3J0R3JpZFwiO1xuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFc2NvcnRDb250ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZXNOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RQb3N0c1BhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFiaWxpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVfdG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldGhuaWNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFpcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmZmlsaWF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyUG9zdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb0Zhdm9yaXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRQb3N0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB7XG4gICAgY29uc3QgW3Zpc2libGVDb21wb25lbnQsIHNldFZpc2libGVDb21wb25lbnRdID0gdXNlU3RhdGUoXCJsaXN0XCIpO1xuICAgIGNvbnN0IFtzaG93RmlsdGVyLCBzZXRTaG93RmlsdGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICQoXCIuZmlsdGVyX2l0ZW1zX2Jsb2NrXCIpLmhpZGUoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd0ZpbHRlcihmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHNsaWRlRmlsdGVyID0gKCkgPT4ge1xuICAgICAgICAkKFwiLmZpbHRlcl9pdGVtc19ibG9ja1wiKS5zbGlkZVRvZ2dsZSgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTaG93RmlsdGVyKCFzaG93RmlsdGVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoYW5nZVZpc2libGVDb21wb25lbnQgPSAoZSkgPT4ge1xuICAgICAgICBlLnBlcnNpc3QoKTtcbiAgICAgICAgJChcIi5tb2RlbHMtdmlldy1ibG9ja1wiKS5mYWRlT3V0KDMwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0VmlzaWJsZUNvbXBvbmVudCgkKGUudGFyZ2V0KS5hdHRyKFwibmFtZVwiKSk7XG4gICAgICAgICAgICAkKFwiLm1vZGVscy12aWV3LWJsb2NrXCIpLmZhZGVJbig3MDApO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzLmVzY29ydF9jb250ZW50X2Jsb2NrfSBzdHlsZT17e21pbkhlaWdodDogXCIxMDB2aFwifX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLmVzY29ydF9jb250ZW50X3RpdGxlfWB9PlxuICAgICAgICAgICAgICAgIDxwPk1lZXQgb3VyIHNlbGVjdGlvbiBvZiB3b3JsZHdpZGUgZXNjb3J0czwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3MuZmlsdGVyX3NvcnRfY29udHJvbH1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5maWx0ZXJfYnRuX3dyYXB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5maWx0ZXJfYnRuX2dyb3VwfT5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3NsaWRlRmlsdGVyfSBjbGFzc05hbWU9e2BwbC0yICR7cy5maWx0ZXJfYnRufWB9PlxuICAgICAgICAgICAgICBGSUxURVJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtgcGwtMiBmb3JtLWNvbnRyb2wgYm9yZGVyLTAgJHtzLnNvcnRpbmdfYnRufWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNvcnRQb3N0cyhlLnRhcmdldC52YWx1ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWZhdWx0XCIgaGlkZGVuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTT1JUSU5HXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhdGUvLVwiPmRhdGUgYWRkZWQgZnJvbSBuZXc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGF0ZS8rXCI+ZGF0ZSBhZGRlZCBmcm9tIG9sZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZXZpZXdzLy1cIj5udW1iZXIgb2YgY29tbWVudHMgZnJvbSBsZXNzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJldmlld3MvK1wiPm51bWJlciBvZiBjb21tZW50cyBmcm9tIG1vcmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZmlsdGVyX2J0bl9ncm91cH0+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIG5hbWU9XCJncmlkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BncmlkX2J0biBjYXJvdXNlbF9sYXlvdXRfY2hhbmdlX2J0biAke1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlQ29tcG9uZW50ID09PSBcImdyaWRcIiA/IFwiYWN0aXZlX2J0bl9waW5rXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgfSAke3MuZ3JpZF9idG59YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlVmlzaWJsZUNvbXBvbmVudChlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR1JJRFxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGlzdF9idG4gY2Fyb3VzZWxfbGF5b3V0X2NoYW5nZV9idG4gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZUNvbXBvbmVudCA9PT0gXCJsaXN0XCIgPyBcImFjdGl2ZV9idG5fcGlua1wiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gJHtzLmxpc3RfYnRufWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGNoYW5nZVZpc2libGVDb21wb25lbnQoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExJU1Rcblx0XHRcdFx0XHRcdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmaWx0ZXJfaXRlbXNfYmxvY2sgJHtzLmZpbHRlcl9pdGVtc19ibG9ja31gfT5cbiAgICAgICAgICAgICAgICA8TW9kZWxzRmlsdGVyXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJpbGl0eT17YXZhaWxhYmlsaXR5fVxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVfdG89e2F2YWlsYWJsZV90b31cbiAgICAgICAgICAgICAgICAgICAgZXRobmljaXR5PXtldGhuaWNpdHl9XG4gICAgICAgICAgICAgICAgICAgIGFmZmlsaWF0aW9uPXthZmZpbGlhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyUG9zdHM9e2ZpbHRlclBvc3RzfVxuICAgICAgICAgICAgICAgICAgICBleWVzPXtleWVzfVxuICAgICAgICAgICAgICAgICAgICBoYWlyPXtoYWlyfVxuICAgICAgICAgICAgICAgICAgICBzbGlkZUZpbHRlcj17c2xpZGVGaWx0ZXJ9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVscy12aWV3LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAge3Zpc2libGVDb21wb25lbnQgPT09IFwibGlzdFwiID8gKFxuICAgICAgICAgICAgICAgICAgICA8RXNjb3J0TGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHM9e3Bvc3RzfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZXNOdW1iZXI9e3BhZ2VzTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UG9zdHNQYWdlPXtzZWxlY3RQb3N0c1BhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUb0Zhdm9yaXRlcz17YWRkVG9GYXZvcml0ZXN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPEVzY29ydEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RzPXtwb3N0c31cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VzTnVtYmVyPXtwYWdlc051bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFBvc3RzUGFnZT17c2VsZWN0UG9zdHNQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9GYXZvcml0ZXM9e2FkZFRvRmF2b3JpdGVzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHMgZnJvbSBcIi4vZXNjb3J0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgZmF2IGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvZmF2b3JpdGUtcGluay5wbmdcIjtcbmltcG9ydCBjcm93biBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL2Nyb3duLXBpbmsucG5nXCI7XG5pbXBvcnQgc3RhciBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3N0YXItcGluay5wbmdcIjtcbmltcG9ydCBwbGFuZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3BsYW5lLXBpbmsucG5nXCI7XG5pbXBvcnQgVmVyaWZpZWRXaW5kb3cgZnJvbSBcIi4uL21vZGFsLXdpbmRvdy9WZXJpZmllZFdpbmRvd1wiO1xuXG5pbXBvcnQgbW9kZWwgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi9ob3Jpem9udGFsL21vZGVsLTEucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVzY29ydEdyaWQoeyBwb3N0cywgcGFnZXNOdW1iZXIsIHNlbGVjdFBvc3RzUGFnZSwgYWRkVG9GYXZvcml0ZXMgfSkge1xuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbcGFnZXMsIHNldFBhZ2VzXSA9IHVzZVN0YXRlKFsxXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQYWdlcyhbMV0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZXNOdW1iZXI7IGkrKykge1xuICAgICAgcGFnZXMucHVzaCgxKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIG1heFdpZHRoOiBcIjEyNjBweFwiLFxuICAgICAgICBtYXJnaW46IFwiMWVtIGF1dG9cIixcbiAgICAgICAgcGFkZGluZzogXCIwIDAgNWVtIDBcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAge3Bvc3RzICYmIHBvc3RzLmxlbmd0aCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBwLTBcIj5cbiAgICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnZlcnRpY2FsX3NsaWRlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MudmVydGljYWxfc2xpZGVfaW1hZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5waG90b19ob3Jpem9udGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwb3N0Lm1vZGVsX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MubW9kZWxfcGhvdG9fZ3JpZH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MudmVydGljYWxfc2xpZGVfbW9kZWxfaW5mb30+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5uYW1lfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5tb2RlbF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm5ldHdvcmtfc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnN0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5sb2NhdGlvbn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTG9jYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3Muc3VtbWFyeX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3Quc3VtbWFyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jYXJkX2NvbnRyb2x9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Zhdn0gYWx0PVwiXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9GYXZvcml0ZXMocG9zdC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjcm93bn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3N0YXJ9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwbGFuZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3MudmVyaWZpY2F0aW9ufWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnZlcmlmaWVkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFZlcmlmaWVkV2luZG93IGJ1dHRvbkxhYmVsPXtgVkVSSUZJRURgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Mudmlld19wcm9maWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvbW9kZWxQcm9maWxlXCIsIHF1ZXJ5OiB7IGlkOiBwb3N0LmlkIH0gfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIHRleHQtd2hpdGVcIj5WSUVXIFBST0ZJTEU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJQYWdlIG5hdmlnYXRpb24gZXhhbXBsZVwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb24ganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnZS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFnZS1saW5rIGJnLWRhcmsgdGV4dC13aGl0ZSBib3JkZXItc2Vjb25kYXJ5XCIgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UG9zdHNQYWdlKGN1cnJlbnRQYWdlIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICBQcmV2aW91c1xuXHRcdFx0XHRcdFx0XHRcdDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAge3BhZ2VzLm1hcCgocCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFnZS1saW5rIGJnLWRhcmsgdGV4dC13aGl0ZSBib3JkZXItc2Vjb25kYXJ5XCIgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RQb3N0c1BhZ2UoaSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfX0+e2kgKyAxfTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2UtbGluayBiZy1kYXJrIHRleHQtd2hpdGUgYm9yZGVyLXNlY29uZGFyeVwiIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgcGFnZXNOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RQb3N0c1BhZ2UoY3VycmVudFBhZ2UgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIE5leHRcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMSB0ZXh0LWluZm8gdGV4dC1jZW50ZXIgcHktNVwiPk5vIHBvc3RzLi4uPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L2RpdiA+XG4gICk7XG59XG5cbi8vIGFib3V0OiBcImFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRcIlxuLy8gYWNjb3VudF9uYW1lOiBcImFjY291bnRfbmFtZWFjY291bnRfbmFtZWFjY291bnRfbmFtZWFjY291bnRfbmFtZVwiXG4vLyBhZmZpbGlhdGlvbl9pZDogbnVsbFxuLy8gYWdlOiAyMlxuLy8gYXZhaWxhYmxlX3RvX2RhdGU6IG51bGxcbi8vIGNhdGVnb3J5X2lkOiBudWxsXG4vLyBjaXR5X2lkOiBudWxsXG4vLyBjcmVhdGVkX2F0OiBcIjIwMjAtMDYtMTlUMTA6MzU6MDAuMDAwMDAwWlwiXG4vLyBldGhuaWNpdHlfaWQ6IG51bGxcbi8vIGV5ZV9pZDogbnVsbFxuLy8gZ2VuZGVyOiBcIm1hblwiXG4vLyBoYWlyX2lkOiBudWxsXG4vLyBoZWlnaHQ6IFwiMjM1XCJcbi8vIGlkOiAxXG4vLyBpc19tb3JlX3Bob3RvczogMFxuLy8gaXNfcGhvdG9zX3ZpcDogMFxuLy8gaXNfcHVibGlzaGVkOiAwXG4vLyBpc192ZXJpZnk6IDBcbi8vIGlzX3ZpcDogMFxuLy8gbW9kZWxfbmFtZTogXCJTaGx1aGFcIlxuLy8gcGhvdG86IG51bGxcbi8vIHNlY29uZF9uYW1lOiBcInNlY29uZFwiXG4vLyBzdGF0ZV9pZDogbnVsbFxuLy8gc3RhdHVzOiBcIm90aGVyXCJcbi8vIHN1bW1hcnk6IFwic3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlcIlxuLy8gdXBkYXRlZF9hdDogXCIyMDIwLTA2LTIyVDA2OjM0OjEyLjAwMDAwMFpcIlxuLy8gdXNlcl9pZDogbnVsbFxuLy8gdmlkZW9fbGluazogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVRRZ0dGd1ZXRDI0Jmxpc3Q9UkQtOVJuZzhPdU0xMCZpbmRleD0yXCJcbi8vIHZpcF90b19kYXRlOiBudWxsXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuLy8gaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIlxuaW1wb3J0IHMgZnJvbSAnLi9lc2NvcnQubW9kdWxlLnNjc3MnXG5pbXBvcnQgZmF2IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9mYXZvcml0ZS1waW5rLnBuZydcbmltcG9ydCBwbGFuZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvcGxhbmUtcGluay5wbmcnXG5pbXBvcnQgc3RhciBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvc3Rhci1waW5rLnBuZydcbmltcG9ydCBjcm93biBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvY3Jvd24tcGluay5wbmcnXG5cbmltcG9ydCBtb2RlbCBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vaG9yaXpvbnRhbC9tb2RlbC0xLnBuZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXNjb3J0TGlzdCh7IHBvc3RzLCBwYWdlc051bWJlciwgc2VsZWN0UG9zdHNQYWdlLCBhZGRUb0Zhdm9yaXRlcyB9KSB7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtwYWdlcywgc2V0UGFnZXNdID0gdXNlU3RhdGUoWzFdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBhZ2VzKFsxXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlc051bWJlcjsgaSsrKSB7XG4gICAgICBwYWdlcy5wdXNoKDEpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiAxMDAwLFxuICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICBhcnJvd3M6IHRydWUsXG4gICAgZG90czogZmFsc2UsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgYXV0b3BsYXlTcGVlZDogODAwMCxcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTAyNSxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNzY5LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICBpbml0aWFsU2xpZGU6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e1xuICAgICAgbWF4V2lkdGg6ICcxMjYwcHgnLFxuICAgICAgcGFkZGluZzogJzEuNWVtIDAgNWVtIDAnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJ1xuICAgIH19PlxuICAgICAgeyhwb3N0cyAmJiBwb3N0cy5sZW5ndGgpID8gPD5cbiAgICAgICAgey8qIDxTbGlkZXIgey4uLnNldHRpbmdzfSA+ICovfVxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtgJHtzLmVzY29ydF9saXN0fWB9PlxuICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfSBjbGFzc05hbWU9e3Muc2xpZGV9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9tb2RlbFByb2ZpbGVcIiwgcXVlcnk6IHsgaWQ6IHBvc3QuaWQgfSB9fT48YT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5tb2RlbF9waG90b30+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5waG90b192ZXJ0aWNhbH0gYWx0PXtwb3N0Lm1vZGVsX25hbWV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW9kZWxfaW5mb30+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5tb2RlbF9pbmZvX3RpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57cG9zdC5tb2RlbF9uYW1lfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnIH19Pntwb3N0LnN0YXR1c308L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2lnbnNfZ3JvdXB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zaWdufT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZmF2fSBhbHQ9XCJtb2RlbFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUb0Zhdm9yaXRlcyhwb3N0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2lnbn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nyb3dufSBhbHQ9XCJtb2RlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zaWdufT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3Rhcn0gYWx0PVwibW9kZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2lnbn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BsYW5lfSBhbHQ9XCJtb2RlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT48L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7LyogPC9TbGlkZXI+ICovfVxuICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJQYWdlIG5hdmlnYXRpb24gZXhhbXBsZVwiIGNsYXNzTmFtZT1cInB0LTRcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnZS1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2UtbGluayBiZy1kYXJrIHRleHQtd2hpdGUgYm9yZGVyLXNlY29uZGFyeVwiIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RQb3N0c1BhZ2UoY3VycmVudFBhZ2UgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgLSAxKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICBQcmV2aW91c1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIHtwYWdlcy5tYXAoKHAsIGkpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwicGFnZS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFnZS1saW5rIGJnLWRhcmsgdGV4dC13aGl0ZSBib3JkZXItc2Vjb25kYXJ5XCIgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RQb3N0c1BhZ2UoaSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZShpICsgMSk7XG4gICAgICAgICAgICAgICAgICB9fT57aSArIDF9PC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnZS1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2UtbGluayBiZy1kYXJrIHRleHQtd2hpdGUgYm9yZGVyLXNlY29uZGFyeVwiIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgcGFnZXNOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0UG9zdHNQYWdlKGN1cnJlbnRQYWdlICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlICsgMSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvPlxuICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwiaDEgdGV4dC1pbmZvIHRleHQtY2VudGVyIHB5LTVcIj5ObyBwb3N0cy4uLjwvZGl2Pn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBhYm91dDogXCJhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0XCJcbiAgICAvLyBhY2NvdW50X25hbWU6IFwiYWNjb3VudF9uYW1lYWNjb3VudF9uYW1lYWNjb3VudF9uYW1lYWNjb3VudF9uYW1lXCJcbiAgICAvLyBhZmZpbGlhdGlvbl9pZDogbnVsbFxuICAgIC8vIGFnZTogMjJcbiAgICAvLyBhdmFpbGFibGVfdG9fZGF0ZTogbnVsbFxuICAgIC8vIGNhdGVnb3J5X2lkOiBudWxsXG4gICAgLy8gY2l0eV9pZDogbnVsbFxuICAgIC8vIGNyZWF0ZWRfYXQ6IFwiMjAyMC0wNi0xOVQxMDozNTowMC4wMDAwMDBaXCJcbiAgICAvLyBldGhuaWNpdHlfaWQ6IG51bGxcbiAgICAvLyBleWVfaWQ6IG51bGxcbiAgICAvLyBnZW5kZXI6IFwibWFuXCJcbiAgICAvLyBoYWlyX2lkOiBudWxsXG4gICAgLy8gaGVpZ2h0OiBcIjIzNVwiXG4gICAgLy8gaWQ6IDFcbiAgICAvLyBpc19tb3JlX3Bob3RvczogMFxuICAgIC8vIGlzX3Bob3Rvc192aXA6IDBcbiAgICAvLyBpc19wdWJsaXNoZWQ6IDBcbiAgICAvLyBpc192ZXJpZnk6IDBcbiAgICAvLyBpc192aXA6IDBcbiAgICAvLyBtb2RlbF9uYW1lOiBcIlNobHVoYVwiXG4gICAgLy8gcGhvdG86IG51bGxcbiAgICAvLyBzZWNvbmRfbmFtZTogXCJzZWNvbmRcIlxuICAgIC8vIHN0YXRlX2lkOiBudWxsXG4gICAgLy8gc3RhdHVzOiBcIm90aGVyXCJcbiAgICAvLyBzdW1tYXJ5OiBcInN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5XCJcbiAgICAvLyB1cGRhdGVkX2F0OiBcIjIwMjAtMDYtMjJUMDY6MzQ6MTIuMDAwMDAwWlwiXG4gICAgLy8gdXNlcl9pZDogbnVsbFxuICAgIC8vIHZpZGVvX2xpbms6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1UUWdHRndWV0QyNCZsaXN0PVJELTlSbmc4T3VNMTAmaW5kZXg9MlwiXG4gICAgLy8gdmlwX3RvX2RhdGU6IG51bGwiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHMgZnJvbSBcIi4vbG9jYXRpb24ubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb24oeyBzdGF0ZXMsIGdldENpdGllcyB9KSB7XG4gIGNvbnN0IFtjdXJyZW50TG9jYXRpb24sIHNldEN1cnJlbnRMb2NhdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGNoYW5nZUxvY2F0aW9uID0gc3RhdGVJZCA9PiB7XG4gICAgZ2V0Q2l0aWVzKHN0YXRlSWQpO1xuICAgIHNldEN1cnJlbnRMb2NhdGlvbihzdGF0ZUlkKTtcbiAgICBzdGF0ZXMuZm9yRWFjaChzdGF0ZSA9PiB7XG4gICAgICBpZiAoK3N0YXRlLmlkID09PSArc3RhdGVJZCkge1xuICAgICAgICByb3V0ZXIucHVzaChgL2xvY2F0aW9uP2lkPSR7c3RhdGUuaWR9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17cy5sb2NhdGlvbl93cmFwcGVyfT5cbiAgICAgIHtzdGF0ZXMubGVuZ3RoID8gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5sb2NhdG9uX2Jsb2NrX3RpdGxlfWB9PlxuICAgICAgICAgIDxwPlNFTEVDVCBBIExPQ0FUSU9OIEJFTE9XPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubG9jYXRpb25fYmxvY2tfc2VsZWN0fT5cbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VMb2NhdGlvbihlLnRhcmdldC52YWx1ZSl9ID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWZhdWx0XCIgaGlkZGVuPkxvY2F0aW9uPC9vcHRpb24+XG4gICAgICAgICAgICB7c3RhdGVzLm1hcCgoc3RhdGUsIGkpID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtzdGF0ZS5pZH0+e3N0YXRlLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxvY2F0aW9uX2Jsb2NrX2xpc3R9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtzdGF0ZXMubWFwKChzdGF0ZSwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IGNoYW5nZUxvY2F0aW9uKHN0YXRlLmlkKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biB0ZXh0LXdoaXRlIGxvY2F0aW9uX2l0ZW1gfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3twYXRobmFtZTogYC9sb2NhdGlvbmAsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBzdGF0ZS5pZCB9fX0gPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2N1cnJlbnRMb2NhdGlvbiA9PT0gc3RhdGUgPyAnYWN0aXZlX2J0bl9ibHVlJyA6ICcnfT57c3RhdGUubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+IDogbnVsbH1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgcyBmcm9tIFwiLi9jYXRlZ29yaWVzLm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZVNsaWRlcih7bmV3UG9zdHN9KSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMTAwMDAsXG4gICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI1LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBmYWRlOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfTtcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMjYwcHgnXG4gICAgICAgIH19IGNsYXNzTmFtZT17cy5uZXdfcG9zdHNfY2Fyb3VzZWx9PlxuICAgICAgICAgICAge25ld1Bvc3RzICYmIG5ld1Bvc3RzLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgbmV3UG9zdHMubWFwKChwb3N0LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e3Muc2xpZGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e3BhdGhuYW1lOiBcIi9tb2RlbFByb2ZpbGVcIiwgcXVlcnk6IHtpZDogcG9zdC5pZH19fT48YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5waG90b192ZXJ0aWNhbH0gYWx0PVwibW9kZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3Bvc3QubW9kZWxfbmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgLy8gPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgICAgICAgIC8vICAgICB7bmV3UG9zdHMubWFwKChwb3N0LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgLy8gICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNsaWRlfT5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8TGluayBocmVmPXt7cGF0aG5hbWU6IFwiL21vZGVsUHJvZmlsZVwiLCBxdWVyeToge2lkOiBwb3N0LmlkfX19PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0LnBob3RvX3ZlcnRpY2FsfSBhbHQ9XCJtb2RlbFwiIGNsYXNzTmFtZT1cInctMTAwXCIvPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5tb2RlbF9uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICApKX1cbiAgICAgICAgICAgICAgICAvLyAgPC9TbGlkZXI+XG4gICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT17YHRleHQtY2VudGVyIHRleHQtaW5mbyBweS01YH0+Tm8gcG9zdHMuLi48L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgcyBmcm9tICcuL3NlYXJjaC5tb2R1bGUuc2NzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17cy5zZWFyY2hfYmxvY2t9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2VhcmNoX2Jsb2NrX2NvbnRlbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLnNlYXJjaF9pbnB1dF9sYWJlbH1gfT5TRUFSQ0g8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2VhcmNoX2lucHV0fT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5hZGRfcG9zdF9idG59YH0+XG4gICAgICAgICAgPHNwYW4+UE9TVCBBRDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhdGVnb3JpZXNfYmxvY2tcIjogXCJjYXRlZ29yaWVzX2NhdGVnb3JpZXNfYmxvY2tfXzE0QVZfXCIsXG5cdFwiY2F0ZWdvcmllc190aXRsZVwiOiBcImNhdGVnb3JpZXNfY2F0ZWdvcmllc190aXRsZV9fM0t5T1hcIixcblx0XCJjYXRlZ29yaWVzX2NvbnRlbnRcIjogXCJjYXRlZ29yaWVzX2NhdGVnb3JpZXNfY29udGVudF9fMnZQdXRcIixcblx0XCJjYXRlZ29yaWVzX2NvbnRyb2xcIjogXCJjYXRlZ29yaWVzX2NhdGVnb3JpZXNfY29udHJvbF9fMmdwY2VcIixcblx0XCJjYXRlZ29yeVwiOiBcImNhdGVnb3JpZXNfY2F0ZWdvcnlfXzNSR2p3XCIsXG5cdFwiY2F0ZWdvcmllc19zdWJ0aXRsZVwiOiBcImNhdGVnb3JpZXNfY2F0ZWdvcmllc19zdWJ0aXRsZV9fM1ltWGFcIixcblx0XCJuZXdfcG9zdHNfY2Fyb3VzZWxcIjogXCJjYXRlZ29yaWVzX25ld19wb3N0c19jYXJvdXNlbF9fMlhYaFlcIixcblx0XCJzbGlkZVwiOiBcImNhdGVnb3JpZXNfc2xpZGVfXzJMTmp1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJlc2NvcnRfY29udGVudF90aXRsZVwiOiBcImVzY29ydF9lc2NvcnRfY29udGVudF90aXRsZV9fMmNWVzZcIixcblx0XCJmaWx0ZXJfc29ydF9jb250cm9sXCI6IFwiZXNjb3J0X2ZpbHRlcl9zb3J0X2NvbnRyb2xfXzJ5SVRpXCIsXG5cdFwiZmlsdGVyX2J0bl93cmFwXCI6IFwiZXNjb3J0X2ZpbHRlcl9idG5fd3JhcF9fMXNBQ2RcIixcblx0XCJmaWx0ZXJfYnRuX2dyb3VwXCI6IFwiZXNjb3J0X2ZpbHRlcl9idG5fZ3JvdXBfX3gtRlNNXCIsXG5cdFwic29ydGluZ19idG5cIjogXCJlc2NvcnRfc29ydGluZ19idG5fXzM4amgzXCIsXG5cdFwiZmlsdGVyX2l0ZW1zX2Jsb2NrXCI6IFwiZXNjb3J0X2ZpbHRlcl9pdGVtc19ibG9ja19fM01xYTNcIixcblx0XCJlc2NvcnRfbGlzdFwiOiBcImVzY29ydF9lc2NvcnRfbGlzdF9fMU41MFpcIixcblx0XCJzbGlkZVwiOiBcImVzY29ydF9zbGlkZV9fcW5iSWpcIixcblx0XCJtb2RlbF9waG90b1wiOiBcImVzY29ydF9tb2RlbF9waG90b19fM3R5ZURcIixcblx0XCJtb2RlbF9pbmZvXCI6IFwiZXNjb3J0X21vZGVsX2luZm9fX2lGMkFaXCIsXG5cdFwibW9kZWxfaW5mb190aXRsZVwiOiBcImVzY29ydF9tb2RlbF9pbmZvX3RpdGxlX18zTlltWFwiLFxuXHRcInNpZ25zX2dyb3VwXCI6IFwiZXNjb3J0X3NpZ25zX2dyb3VwX19kZXR3RVwiLFxuXHRcInZlcnRpY2FsX3NsaWRlXCI6IFwiZXNjb3J0X3ZlcnRpY2FsX3NsaWRlX18xenlBYVwiLFxuXHRcInZlcnRpY2FsX3NsaWRlX2ltYWdlXCI6IFwiZXNjb3J0X3ZlcnRpY2FsX3NsaWRlX2ltYWdlX18xeUZsSFwiLFxuXHRcInZlcnRpY2FsX3NsaWRlX21vZGVsX2luZm9cIjogXCJlc2NvcnRfdmVydGljYWxfc2xpZGVfbW9kZWxfaW5mb19fM2Jpb29cIixcblx0XCJuYW1lXCI6IFwiZXNjb3J0X25hbWVfXzJ2VnlXXCIsXG5cdFwibmV0d29ya19zdGF0dXNcIjogXCJlc2NvcnRfbmV0d29ya19zdGF0dXNfXzFZY0F1XCIsXG5cdFwibG9jYXRpb25cIjogXCJlc2NvcnRfbG9jYXRpb25fXzF3UzRsXCIsXG5cdFwic3VtbWFyeVwiOiBcImVzY29ydF9zdW1tYXJ5X19PZVRralwiLFxuXHRcInZlcmlmaWNhdGlvblwiOiBcImVzY29ydF92ZXJpZmljYXRpb25fXzI5ajg2XCIsXG5cdFwiY2FyZF9jb250cm9sXCI6IFwiZXNjb3J0X2NhcmRfY29udHJvbF9fMWRXU3ZcIixcblx0XCJ2ZXJpZmllZFwiOiBcImVzY29ydF92ZXJpZmllZF9fMUF0TW9cIixcblx0XCJ2aWV3X3Byb2ZpbGVcIjogXCJlc2NvcnRfdmlld19wcm9maWxlX196VkFnNlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9jYXRpb25fd3JhcHBlclwiOiBcImxvY2F0aW9uX2xvY2F0aW9uX3dyYXBwZXJfXzFhT0wwXCIsXG5cdFwibG9jYXRvbl9ibG9ja190aXRsZVwiOiBcImxvY2F0aW9uX2xvY2F0b25fYmxvY2tfdGl0bGVfX2xZRHpLXCIsXG5cdFwibG9jYXRpb25fYmxvY2tfc2VsZWN0XCI6IFwibG9jYXRpb25fbG9jYXRpb25fYmxvY2tfc2VsZWN0X19ZMWFXaVwiLFxuXHRcImxvY2F0aW9uX2Jsb2NrX2xpc3RcIjogXCJsb2NhdGlvbl9sb2NhdGlvbl9ibG9ja19saXN0X18xSWpiWVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VhcmNoX2Jsb2NrXCI6IFwic2VhcmNoX3NlYXJjaF9ibG9ja19fMjFzTVNcIixcblx0XCJzZWFyY2hfYmxvY2tfY29udGVudFwiOiBcInNlYXJjaF9zZWFyY2hfYmxvY2tfY29udGVudF9fMVp2TGxcIixcblx0XCJzZWFyY2hfaW5wdXRfbGFiZWxcIjogXCJzZWFyY2hfc2VhcmNoX2lucHV0X2xhYmVsX18xdUpwcVwiLFxuXHRcInNlYXJjaF9pbnB1dFwiOiBcInNlYXJjaF9zZWFyY2hfaW5wdXRfXzJYTWxzXCIsXG5cdFwiYWRkX3Bvc3RfYnRuXCI6IFwic2VhcmNoX2FkZF9wb3N0X2J0bl9fM2NFOGJcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBGb3JtIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmNvbnN0IFZlcmlmaWVkV2luZG93ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBidXR0b25MYWJlbCxcbiAgICBjbGFzc05hbWVcbiAgfSA9IHByb3BzO1xuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRNb2RhbCghbW9kYWwpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxGb3JtIGlubGluZSBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJcIiBjbGFzc05hbWU9e2BwLTAgdGV4dC13aGl0ZWB9IG9uQ2xpY2s9e3RvZ2dsZX0+e2J1dHRvbkxhYmVsfTwvQnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuXG4gICAgICA8TW9kYWwgaXNPcGVuPXttb2RhbH0gdG9nZ2xlPXt0b2dnbGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dG9nZ2xlfSBzdHlsZT17eyBmb250RmFtaWx5OiAnQXVkaW93aWRlLCBjdXJzaXZlJyB9fSBjbGFzc05hbWU9XCJiZy1kYXJrIHRleHQtaW5mbyBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnlcIiA+VmliZSBDaXR5IFZlcmlmaWVkPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgPE1vZGFsQm9keSBjbGFzc05hbWU9XCJiZy1kYXJrIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICA8cD5JbiBvcmRlciBmb3IgYW4gRXJvcyBhZHZlcnRpc2VyIHRvIGJlIGVsaWdpYmxlIHRvIGhhdmUgdGhlIFZlcmlmaWVkIHNlYWwgYWZmaXhlZCB0byB0aGVpciBhZHZlcnRpc2VtZW50IG9yIHRvIGJlIHBsYWNlZCBpbiBFcm9zJyBWZXJpZmllZCBjYXRlZ29yeSwgdGhlIEVyb3MgR3VpZGUgbXVzdCBoYXZlIHJlY2VpdmVkIHRhbmdpYmxlIGluZm9ybWF0aW9uIHRoYXQgdGhlIGluZGl2aWR1YWwgYXBwZWFyaW5nIGluIHRoZSBwaG90b2dyYXBocyBvbiBhbnkgc3BlY2lmaWMgYWR2ZXJ0aXNlbWVudCBpbnRlbmRlZCB0byBiZSBhZHZlcnRpc2VkIG9uIHRoZSBFcm9zIEd1aWRlIGlzIGFuIGluZGl2aWR1YWwgcHJvdmlkaW5nIGFkdWx0IGNvbXBhbmlvbnNoaXAuIFN1Y2ggcHJvb2YgY291bGQgaW5jbHVkZSBjb21wYXJpbmcgdGhlIHBpY3R1cmVzIHN1Ym1pdHRlZCB0byB0aGUgRXJvcyBHdWlkZSBvbiBhbiBhZHZlcnRpc2VtZW50IHdpdGggZWl0aGVyIGdvdmVybm1lbnQgaXNzdWVkIElE4oCZcyBvdGhlciBwaG90b2dyYXBoaWMgZXZpZGVuY2UuPC9wPlxuICAgICAgICAgIDxwPkhvd2V2ZXIsIHBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBFcm9zIEd1aWRlIGNhbm5vdCBhbmQgZG9lcyBub3QgbWFrZSBhbnkgZ3VhcmFudGVlcyBvciB3YXJyYW50aWVzIHRoYXQgZWl0aGVyIChhKSB0aGUgYWR2ZXJ0aXNlciBpbiB0aGUgcGljdHVyZXMgb24gYW55IHBhcnRpY3VsYXIgYWQgd2lsbCBiZSB0aGUgc2FtZSBpbmRpdmlkdWFsIHdobyBzaG93cyB1cCBmb3IgYW55IGRhdGUgYXJyYW5nZWQgYmV0d2VlbiBhbiBhZHZlcnRpc2VyIGFuZCB5b3Vyc2VsZiwgKGIpIHRoYXQgYW55IG9mIHRoZSB0ZXh0LCBpbmNsdWRpbmcgdGhlIG5hbWUgb2YgdGhlIGFkdmVydGlzZXIsIG9yIHN0YXRzIHRoYXQgYXBwZWFycyBvbiBhbiBhZHZlcnRpc2VtZW50LCBpcyBhY2N1cmF0ZSBvciB0cnV0aGZ1bC4gRmluYWxseSwgdGhlIHRlcm0g4oCcVmVyaWZpZWTigJ0gZG9lcyBub3QgbWVhbiB0aGF0IEVyb3MgR3VpZGUgaGFzIHJldmlld2VkIG9yIGNvbmZpcm1lZCBhbnkgbGljZW5zdXJlIG9yIHBlcm1pdHMgaXNzdWVkIHRvIHRoZSBhZHZlcnRpc2VyLjwvcD5cbiAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICA8L01vZGFsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBWZXJpZmllZFdpbmRvdztcblxuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIGNlbnRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcbiAgcm9sZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWxsZWRCeTogUHJvcFR5cGVzLnN0cmluZyxcbiAga2V5Ym9hcmQ6IFByb3BUeXBlcy5ib29sLFxuICBiYWNrZHJvcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgUHJvcFR5cGVzLm9uZU9mKFsnc3RhdGljJ10pXG4gIF0pLFxuICBzY3JvbGxhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uT3BlbmVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbG9zZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1vZGFsQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBiYWNrZHJvcENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udGVudENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmFkZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgekluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gIF0pLFxuICB1bm1vdW50T25DbG9zZTogUHJvcFR5cGVzLmJvb2wsXG4gIHJldHVybkZvY3VzQWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmJvb2xcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHMgZnJvbSBcIi4vZm9ybS5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RlbHNGaWx0ZXIoe1xuICBhdmFpbGFiaWxpdHksXG4gIGF2YWlsYWJsZV90byxcbiAgZXRobmljaXR5LFxuICBhZmZpbGlhdGlvbixcbiAgZXllcyxcbiAgaGFpcixcbiAgZmlsdGVyUG9zdHMsXG4gIHNsaWRlRmlsdGVyXG59KSB7XG4gIGNvbnN0IFtzZXgsIHNldFNleF0gPSB1c2VTdGF0ZShbJ2dlbmRlcicsICcnXSk7XG4gIGNvbnN0IFthZ2VGcm9tLCBzZXRBZ2VGcm9tXSA9IHVzZVN0YXRlKFsnYWdlRnJvbScsIDBdKTtcbiAgY29uc3QgW2FnZVRvLCBzZXRBZ2VUb10gPSB1c2VTdGF0ZShbJ2FnZVRvJywgMF0pO1xuICBjb25zdCBbc3RhdGVFdGhuaWNpdHksIHNldEV0aG5pY2l0eV0gPSB1c2VTdGF0ZShbJ2V0aG5pY2l0eV9pZCcsICcnXSk7XG4gIGNvbnN0IFtzdGF0ZUhhaXIsIHNldEhhaXJdID0gdXNlU3RhdGUoWydoYWlyX2lkJywgJyddKTtcbiAgY29uc3QgW3N0YXRlRXllLCBzZXRFeWVdID0gdXNlU3RhdGUoWydleWVfaWQnLCAnJ10pO1xuICBjb25zdCBbc3RhdGVBZmZpbGlhdGlvbiwgc2V0QWZmaWxpYXRpb25dID0gdXNlU3RhdGUoWydhZmZpbGlhdGlvbl9pZCcsICcnXSk7XG4gIGNvbnN0IFtzdGF0ZUF2YWlsYWJsZVRvLCBzZXRBdmFpbGFibGVUb10gPSB1c2VTdGF0ZShbJ2F2YWlsYWJsZXRvX2lkcycsIFtdXSk7XG4gIGNvbnN0IFtzdGF0ZUF2YWlsYWJpbGl0eSwgc2V0QXZhaWxhYmlsaXR5XSA9IHVzZVN0YXRlKFsnYXZhaWxhYmlsaXR5X2lkcycsIFtdXSk7XG5cbiAgY29uc3QgYXBwbHlGaWx0ZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmaWx0ZXJJdGVtcyA9IHt9O1xuICAgIG5ldyBQcm9taXNlKHJlcyA9PiB7XG4gICAgICBbc2V4LCBzdGF0ZUV0aG5pY2l0eSwgc3RhdGVIYWlyLCBzdGF0ZUV5ZSwgc3RhdGVBZmZpbGlhdGlvbiwgc3RhdGVBdmFpbGFibGVUbywgc3RhdGVBdmFpbGFiaWxpdHldLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtWzFdLnRvU3RyaW5nKCkubGVuZ3RoKSB7XG4gICAgICAgICAgZmlsdGVySXRlbXNbaXRlbVswXV0gPSBpdGVtWzFdXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmVzKCk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBmaWx0ZXJQb3N0cyhmaWx0ZXJJdGVtcyk7XG4gICAgICBzbGlkZUZpbHRlcigpO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXthcHBseUZpbHRlcn0gY2xhc3NOYW1lPXtzLmZpbHRlcl9mb3JtfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNleF9ibG9ja30+XG4gICAgICAgIDxsZWdlbmQ+R2VuZGVyPC9sZWdlbmQ+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWx9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgICB2YWx1ZT1cImZlbWFsZVwiXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgbmFtZT1cInNleFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNleChbJ2dlbmRlcicsIGUudGFyZ2V0LnZhbHVlXSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY2hlY2ttYXJrfT48L3NwYW4+XG5cdFx0XHRcdFx0RmVtYWxlXG5cdFx0XHRcdDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWx9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgICB2YWx1ZT1cIm1hbGVcIlxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIG5hbWU9XCJzZXhcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZXgoWydnZW5kZXInLCBlLnRhcmdldC52YWx1ZV0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNoZWNrbWFya30+PC9zcGFuPlxuXHRcdFx0XHRcdE1hbGVcblx0XHRcdFx0PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgJHtzLmFnZV9ibG9ja30gZm9ybS1ncm91cGB9PlxuICAgICAgICA8bGVnZW5kPkFnZTwvbGVnZW5kPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBtaW49XCIxOFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImZyb21cIlxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRBZ2VGcm9tKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInRvXCJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0QWdlVG8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7cy5ldGhuaWNpdHlfYmxvY2t9IGZvcm0tZ3JvdXBgfT5cbiAgICAgICAgPGxlZ2VuZD5FdGhuaWNpdHk6PC9sZWdlbmQ+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZHJvcGRvd25cIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RXRobmljaXR5KFsnZXRobmljaXR5X2lkJywgZS50YXJnZXQudmFsdWVdKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gaGlkZGVuIHZhbHVlPVwiZGVmYXVsdFwiPlxuICAgICAgICAgICAgLS0gc2VsZWN0IG9uZSAtLVxuXHRcdFx0XHRcdDwvb3B0aW9uPlxuICAgICAgICAgIHtldGhuaWNpdHkubGVuZ3RoID8gZXRobmljaXR5Lm1hcChlID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtlLmlkfSB2YWx1ZT17ZS5pZH0+e2UudmFsdWV9PC9vcHRpb24+XG4gICAgICAgICAgKSkgOiBudWxsfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhhaXJfYmxvY2t9PlxuICAgICAgICA8bGVnZW5kPkhhaXI8L2xlZ2VuZD5cbiAgICAgICAge2hhaXIubGVuZ3RoID9cbiAgICAgICAgICBoYWlyLm1hcChoID0+IChcbiAgICAgICAgICAgIDxsYWJlbCBrZXk9e2guaWR9IGNsYXNzTmFtZT17cy5sYWJlbH0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtoLmlkfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cImhhaXJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRIYWlyKFsnaGFpcl9pZCcsIGUudGFyZ2V0LnZhbHVlXSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jaGVja21hcmt9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAge2gudmFsdWV9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICkpIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5leWVfYmxvY2t9PlxuICAgICAgICA8bGVnZW5kPkV5ZTwvbGVnZW5kPlxuICAgICAgICB7ZXllcy5sZW5ndGggP1xuICAgICAgICAgIGV5ZXMubWFwKGUgPT4gKFxuICAgICAgICAgICAgPGxhYmVsIGtleT17ZS5pZH0gY2xhc3NOYW1lPXtzLmxhYmVsfT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2UuaWR9XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZXllXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0RXllKFsnZXllX2lkJywgZS50YXJnZXQudmFsdWVdKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNoZWNrbWFya30+PC9zcGFuPlxuICAgICAgICAgICAgICB7ZS52YWx1ZX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgKSkgOiBudWxsfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmFmZmlsaWF0aW9uX2Jsb2NrfT5cbiAgICAgICAgPGxlZ2VuZD5BZmZpbGlhdGlvbjwvbGVnZW5kPlxuICAgICAgICB7YWZmaWxpYXRpb24ubGVuZ3RoID9cbiAgICAgICAgICBhZmZpbGlhdGlvbi5tYXAoYSA9PiAoXG4gICAgICAgICAgICA8bGFiZWwga2V5PXthLmlkfSBjbGFzc05hbWU9e3MubGFiZWx9PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YS5pZH1cbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJhZmZpbGlhdGlvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEFmZmlsaWF0aW9uKFsnYWZmaWxpYXRpb25faWQnLCBlLnRhcmdldC52YWx1ZV0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY2hlY2ttYXJrfT48L3NwYW4+XG4gICAgICAgICAgICAgIHthLnZhbHVlfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICApKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYXZhaWxhYmxlVG9fYmxvY2t9PlxuICAgICAgICA8bGVnZW5kPiBBdmFpbGFibGUgVG86PC9sZWdlbmQ+XG4gICAgICAgIHthdmFpbGFibGVfdG8ubGVuZ3RoID9cbiAgICAgICAgICBhdmFpbGFibGVfdG8ubWFwKGEgPT4gKFxuICAgICAgICAgICAgPGxhYmVsIGtleT17YS5pZH0gY2xhc3NOYW1lPXtzLmxhYmVsfT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YS5pZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEF2YWlsYWJsZVRvKFtcbiAgICAgICAgICAgICAgICAgICAgICAnYXZhaWxhYmxldG9faWRzJyxcbiAgICAgICAgICAgICAgICAgICAgICBbLi4uc3RhdGVBdmFpbGFibGVUb1sxXSxcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY2hlY2tzaWdufT48L3NwYW4+XG4gICAgICAgICAgICAgIHthLnZhbHVlfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICApKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYXZhaWxhYmlsaXR5X2Jsb2NrfT5cbiAgICAgICAgPGxlZ2VuZD5BdmFpbGFiaWxpdHk6PC9sZWdlbmQ+XG4gICAgICAgIHthdmFpbGFiaWxpdHkubGVuZ3RoID9cbiAgICAgICAgICBhdmFpbGFiaWxpdHkubWFwKGEgPT4gKFxuICAgICAgICAgICAgPGxhYmVsIGtleT17YS5pZH0gY2xhc3NOYW1lPXtzLmxhYmVsfT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YS5pZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEF2YWlsYWJpbGl0eShbXG4gICAgICAgICAgICAgICAgICAgICAgJ2F2YWlsYWJpbGl0eV9pZHMnLFxuICAgICAgICAgICAgICAgICAgICAgIFsuLi5zdGF0ZUF2YWlsYWJpbGl0eVsxXSxcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY2hlY2tzaWdufT48L3NwYW4+XG4gICAgICAgICAgICAgIHthLnZhbHVlfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICApKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtgcm91bmRlZCBib3JkZXItMCAke3MuYnRuX3N1Ym1pdH1gfT5cbiAgICAgICAgU2hvd1xuXHRcdFx0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmlsdGVyX2Zvcm1cIjogXCJmb3JtX2ZpbHRlcl9mb3JtX18yOENFTlwiLFxuXHRcInNleF9ibG9ja1wiOiBcImZvcm1fc2V4X2Jsb2NrX18zSWVDYlwiLFxuXHRcImFnZV9ibG9ja1wiOiBcImZvcm1fYWdlX2Jsb2NrX18zUUVtU1wiLFxuXHRcImV0aG5pY2l0eV9ibG9ja1wiOiBcImZvcm1fZXRobmljaXR5X2Jsb2NrX18ybFc1N1wiLFxuXHRcImhhaXJfYmxvY2tcIjogXCJmb3JtX2hhaXJfYmxvY2tfXzFoZkc1XCIsXG5cdFwiZXllX2Jsb2NrXCI6IFwiZm9ybV9leWVfYmxvY2tfX1JpWXBYXCIsXG5cdFwiYWZmaWxpYXRpb25fYmxvY2tcIjogXCJmb3JtX2FmZmlsaWF0aW9uX2Jsb2NrX18xNFg2YlwiLFxuXHRcImF2YWlsYWJsZVRvX2Jsb2NrXCI6IFwiZm9ybV9hdmFpbGFibGVUb19ibG9ja19fMmlqTkJcIixcblx0XCJhdmFpbGFiaWxpdHlfYmxvY2tcIjogXCJmb3JtX2F2YWlsYWJpbGl0eV9ibG9ja19fMXpWbVRcIixcblx0XCJidG5fc3VibWl0XCI6IFwiZm9ybV9idG5fc3VibWl0X18zUUtZWlwiLFxuXHRcImxhYmVsXCI6IFwiZm9ybV9sYWJlbF9fMjRnVFlcIixcblx0XCJjaGVja21hcmtcIjogXCJmb3JtX2NoZWNrbWFya19fM0tLbGZcIixcblx0XCJjaGVja3NpZ25cIjogXCJmb3JtX2NoZWNrc2lnbl9fMmVmNFJcIlxufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS1wYWdlL0xvY2F0aW9uXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUtcGFnZS9TZWFyY2hcIjtcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUtcGFnZS9DYXRlZ29yaWVzXCI7XG5pbXBvcnQgRXNjb3J0Q29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lLXBhZ2UvRXNjb3J0Q29udGVudFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gICAgZ2V0QWxsUG9zdHMsXG4gICAgZ2V0TG9jYXRpb25zSW5mbyxcbiAgICBnZXROZXdQb3N0cyxcbiAgICBzZWxlY3RQb3N0c1BhZ2UsXG4gICAgZmlsdGVyUG9zdHMsXG4gICAgYWRkVG9GYXZvcml0ZXMsXG4gICAgc29ydFBvc3RzLFxuICAgIGdldEFwcEluZm8sXG4gICAgZ2V0Q2l0aWVzXG59IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2FjdGlvbnNcIjtcblxuZnVuY3Rpb24gSG9tZSh7XG4gICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgZ2V0QWxsUG9zdHMsXG4gICAgICAgICAgICAgICAgICBwb3N0cyxcbiAgICAgICAgICAgICAgICAgIGdldExvY2F0aW9uc0luZm8sXG4gICAgICAgICAgICAgICAgICBzdGF0ZXMsXG4gICAgICAgICAgICAgICAgICBnZXROZXdQb3N0cyxcbiAgICAgICAgICAgICAgICAgIG5ld1Bvc3RzLFxuICAgICAgICAgICAgICAgICAgcGFnZXNOdW1iZXIsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RQb3N0c1BhZ2UsXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJQb3N0cyxcbiAgICAgICAgICAgICAgICAgIGF2YWlsYWJpbGl0eSxcbiAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZV90byxcbiAgICAgICAgICAgICAgICAgIGV0aG5pY2l0eSxcbiAgICAgICAgICAgICAgICAgIGV5ZXMsXG4gICAgICAgICAgICAgICAgICBoYWlyLFxuICAgICAgICAgICAgICAgICAgYWZmaWxpYXRpb24sXG4gICAgICAgICAgICAgICAgICBhZGRUb0Zhdm9yaXRlcyxcbiAgICAgICAgICAgICAgICAgIHNvcnRQb3N0cyxcbiAgICAgICAgICAgICAgICAgIGdldEFwcEluZm8sXG4gICAgICAgICAgICAgICAgICBnZXRDaXRpZXNcbiAgICAgICAgICAgICAgfSkge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldEFsbFBvc3RzKCk7XG4gICAgICAgIGdldExvY2F0aW9uc0luZm8oKTtcbiAgICAgICAgZ2V0TmV3UG9zdHMoKTtcbiAgICAgICAgZ2V0QXBwSW5mbygpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TG9jYXRpb24gc3RhdGVzPXtzdGF0ZXN9XG5cdFx0XHRcdFx0ICBnZXRDaXRpZXM9e2dldENpdGllc30vPlxuICAgICAgICAgICAgPFNlYXJjaC8+XG4gICAgICAgICAgICA8Q2F0ZWdvcmllc1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9XG4gICAgICAgICAgICAgICAgbmV3UG9zdHM9e25ld1Bvc3RzfVxuICAgICAgICAgICAgICAgIGZpbHRlclBvc3RzPXtmaWx0ZXJQb3N0c31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXNjb3J0Q29udGVudFxuICAgICAgICAgICAgICAgIHBvc3RzPXtwb3N0c31cbiAgICAgICAgICAgICAgICBwYWdlc051bWJlcj17cGFnZXNOdW1iZXJ9XG4gICAgICAgICAgICAgICAgc2VsZWN0UG9zdHNQYWdlPXtzZWxlY3RQb3N0c1BhZ2V9XG4gICAgICAgICAgICAgICAgYXZhaWxhYmlsaXR5PXthdmFpbGFiaWxpdHl9XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlX3RvPXthdmFpbGFibGVfdG99XG4gICAgICAgICAgICAgICAgZXRobmljaXR5PXtldGhuaWNpdHl9XG4gICAgICAgICAgICAgICAgZXllcz17ZXllc31cbiAgICAgICAgICAgICAgICBoYWlyPXtoYWlyfVxuICAgICAgICAgICAgICAgIGFmZmlsaWF0aW9uPXthZmZpbGlhdGlvbn1cbiAgICAgICAgICAgICAgICBmaWx0ZXJQb3N0cz17ZmlsdGVyUG9zdHN9XG4gICAgICAgICAgICAgICAgYWRkVG9GYXZvcml0ZXM9e2FkZFRvRmF2b3JpdGVzfVxuICAgICAgICAgICAgICAgIHNvcnRQb3N0cz17c29ydFBvc3RzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhdGVnb3JpZXM6IHN0YXRlLmFwcC5jYXRlZ29yaWVzLFxuICAgICAgICBwb3N0czogc3RhdGUuYXBwLnBvc3RzLFxuICAgICAgICBzdGF0ZXM6IHN0YXRlLmFwcC5zdGF0ZXMsXG4gICAgICAgIG5ld1Bvc3RzOiBzdGF0ZS5hcHAubmV3UG9zdHMsXG4gICAgICAgIHBhZ2VzTnVtYmVyOiBzdGF0ZS5hcHAucGFnZXNOdW1iZXIsXG4gICAgICAgIGF2YWlsYWJpbGl0eTogc3RhdGUuYXBwLmF2YWlsYWJpbGl0eSxcbiAgICAgICAgYXZhaWxhYmxlX3RvOiBzdGF0ZS5hcHAuYXZhaWxhYmxlX3RvLFxuICAgICAgICBldGhuaWNpdHk6IHN0YXRlLmFwcC5ldGhuaWNpdHksXG4gICAgICAgIGV5ZXM6IHN0YXRlLmFwcC5leWVzLFxuICAgICAgICBoYWlyOiBzdGF0ZS5hcHAuaGFpcixcbiAgICAgICAgYWZmaWxpYXRpb246IHN0YXRlLmFwcC5hZmZpbGlhdGlvblxuICAgIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUG9wcyA9IHtcbiAgICBnZXRBbGxQb3N0cyxcbiAgICBnZXRMb2NhdGlvbnNJbmZvLFxuICAgIGdldE5ld1Bvc3RzLFxuICAgIHNlbGVjdFBvc3RzUGFnZSxcbiAgICBmaWx0ZXJQb3N0cyxcbiAgICBhZGRUb0Zhdm9yaXRlcyxcbiAgICBzb3J0UG9zdHMsXG4gICAgZ2V0QXBwSW5mbyxcbiAgICBnZXRDaXRpZXNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUG9wcykoSG9tZSk7XG4iLCJpbXBvcnQge1xuICAgIFRFU1RfQ1JFQVRFX1BPU1QsXG4gICAgU0hPV19MT0FERVIsXG4gICAgSElERV9MT0FERVIsXG4gICAgU0hPV19BTEVSVCxcbiAgICBISURFX0FMRVJULFxuICAgIFRFU1RfUkVRVUVTVF9QT1NUUyxcbiAgICBHRVRfQUxMX1BPU1RTLFxuICAgIEdFVF9MT0NBSVRPTlNfSU5GTyxcbiAgICBHRVRfQ0lUSUVTLFxuICAgIENSRUFURV9TVVBQT1JUX1RBU0ssXG4gICAgR0VUX0FMTF9VU0VSX1RBU0tTLFxuICAgIEdFVF9BUFBfSU5GTyxcbiAgICBHRVRfTkVXX1BPU1RTLFxuICAgIEdFVF9QQUdFU19OVU1CRVIsXG4gICAgR0VUX1BPU1RfQ09NTUVOVFMsXG4gICAgQ1JFQVRFX1BPU1RfQ09NTUVOVCxcbiAgICBGSUxURVJfUE9TVFMsXG4gICAgR0VUX0ZBVk9SSVRFUyxcbiAgICBHRVRfQ09NUExBSU5TLFxuICAgIFNPUlRfUE9TVFMsXG4gICAgU0hPV19TVUNDRVNTXG59IGZyb20gXCIuL3R5cGVzXCJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgYXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL19zZXJ2aWNlc1wiO1xuXG4vLyBUIEUgUyBUIFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvc3QocG9zdDogYW55KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBURVNUX0NSRUFURV9QT1NULFxuICAgICAgICBwYXlsb2FkOiBwb3N0XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9hZGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNIT1dfTE9BREVSXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMb2FkZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogSElERV9MT0FERVJcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd0FsZXJ0KHRleHQ6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogU0hPV19BTEVSVCxcbiAgICAgICAgICAgIHBheWxvYWQ6IHRleHRcbiAgICAgICAgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChoaWRlQWxlcnQoKSlcbiAgICAgICAgfSwgMzAwMClcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaGlkZUFsZXJ0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEhJREVfQUxFUlRcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb3N0cygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFRFU1RfUkVRVUVTVF9QT1NUU1xuICAgIH1cbn07XG5leHBvcnQgY29uc3QgZ2V0QWxsUG9zdHMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0c2ApO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX1BBR0VTX05VTUJFUiwgcGF5bG9hZDogcmVzLmxhc3RfcGFnZSB9KTtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfQUxMX1BPU1RTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xufVxuZXhwb3J0IGNvbnN0IGdldE5ld1Bvc3RzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvYWxsL25ld2ApO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9ORVdfUE9TVFMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XG59XG5leHBvcnQgY29uc3QgZ2V0TG9jYXRpb25zSW5mbyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2xvY2F0aW9uYCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0xPQ0FJVE9OU19JTkZPLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xufVxuZXhwb3J0IGNvbnN0IGdldEFwcEluZm8gPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9pbmZvYCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0FQUF9JTkZPLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xufVxuZXhwb3J0IGNvbnN0IGdldENpdGllcyA9IChzdGF0ZUlkOiBudW1iZXIgfCBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogYW55KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9sb2NhdGlvbi9jaXRpZXMvJHtzdGF0ZUlkfWApO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9DSVRJRVMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XG59XG5leHBvcnQgY29uc3QgY3JlYXRlU3VwcG9ydFRhc2sgPSAodGFzazogYW55KSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvc3VwcG9ydC9jcmVhdGVgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0YXNrKVxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbiAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBDUkVBVEVfU1VQUE9SVF9UQVNLLCBwYXlsb2FkOiB0YXNrIH0pXG59XG5leHBvcnQgY29uc3QgZ2V0QWxsVXNlcnNUYXNrcyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9zdXBwb3J0LyR7dXNlci51c2VyLmlkfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9BTExfVVNFUl9UQVNLUywgcGF5bG9hZDogcmVzIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XG59XG5leHBvcnQgY29uc3Qgc2VsZWN0UG9zdHNQYWdlID0gKHBhZ2U6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHM/cGFnZT0ke3BhZ2V9YCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfUEFHRVNfTlVNQkVSLCBwYXlsb2FkOiByZXMubGFzdF9wYWdlIH0pO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9BTExfUE9TVFMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XG59XG5leHBvcnQgY29uc3QgZ2V0UG9zdENvbW1lbnRzID0gKHBvc3RJZDogbnVtYmVyIHwgc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvJHtwb3N0SWR9L2NvbW1lbnRzYCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfUE9TVF9DT01NRU5UUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTs7XG59XG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdENvbW1lbnQgPSAocG9zdElkOiBudW1iZXIgfCBzdHJpbmcsIGNvbW1lbnQ6IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzLyR7cG9zdElkfS9jb21tZW50cy9jcmVhdGVgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbW1lbnQgfSlcbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IENSRUFURV9QT1NUX0NPTU1FTlQsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7O1xufVxuZXhwb3J0IGNvbnN0IGZpbHRlclBvc3RzID0gKGZpbHRlckl0ZW1zT2JqZWN0OiBhbnkpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICAvLyBmcm9tLCB0bywgZ2VuZGVyLCBldGhuaWNpdHlfaWQsIGhhaXJfaWQsIGV5ZV9pZCwgY2F0ZWdvcnlfaWQsIGFmZmlsaWF0aW9uX2lkLCBhdmFpbGFiaWxpdHlfaWRzKGFycmF5KSwgYXZhaWxhYmxldG9faWRzKGFycmF5KVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvZmlsdGVyYCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZmlsdGVySXRlbXNPYmplY3QpXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX1BBR0VTX05VTUJFUiwgcGF5bG9hZDogcmVzLmxhc3RfcGFnZSB9KTtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBGSUxURVJfUE9TVFMsIHBheWxvYWQ6IHJlcy5kYXRhLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTs7XG59XG5leHBvcnQgY29uc3QgcmVwb3J0UG9zdCA9IChwb3N0SWQ6IG51bWJlciB8IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xuICAgIHJldHVybiBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS8ke3Bvc3RJZH0vY29tcGxhaW50cy9hZGRgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBtZXNzYWdlLCBzdGF0dXM6ICdJbiBwcm9ncmVzcydcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgICAvLyBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIC8vIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAvLyAgICAgZGlzcGF0Y2goeyB0eXBlOiBSRVBPUlRfUE9TVCB9KTtcbiAgICAvLyB9KTtcbn1cbmV4cG9ydCBjb25zdCBhZGRUb0Zhdm9yaXRlcyA9IChwb3N0SWQ6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvJHtwb3N0SWR9L2Zhdm9yaXRlcy9hZGRgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpc19mYXZvcml0ZTogdHJ1ZVxuICAgICAgICB9KVxuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IGFkZFRvRmF2b3JpdGVzQnVzaW5lc3MgPSAocG9zdElkOiBudW1iZXIgfCBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzLyR7cG9zdElkfS9mYXZvcml0ZXNfYnVzaW5lc3MvYWRkYCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVzQnVzaW5lc3MgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvZmF2b3JpdGVzX2J1c2luZXNzL215YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9GQVZPUklURVMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XG59XG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVzVXNlciA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9mYXZvcml0ZXMvbXlgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0ZBVk9SSVRFUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBnZXRDb21wbGFpbnMgPSAodXNlcklkOiBudW1iZXIgfCBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cy9jb21wbGFpbnRzL3VzZXIvJHt1c2VySWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9DT01QTEFJTlMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XG59XG5leHBvcnQgY29uc3Qgc29ydFBvc3RzID0gKHNvcnRUeXBlOiBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBTT1JUX1BPU1RTLCBwYXlsb2FkOiBzb3J0VHlwZSB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAodGV4dDogc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBTSE9XX1NVQ0NFU1MsIHBheWxvYWQ6IHRleHQgfSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBTSE9XX1NVQ0NFU1MsIHBheWxvYWQ6IG51bGwgfSlcbiAgICB9LCAzMDAwKVxufVxuIiwiLy8gdGVzdFxuZXhwb3J0IGNvbnN0IFRFU1RfQ1JFQVRFX1BPU1QgPSAnQ1JFQVRFX1BPU1QnO1xuZXhwb3J0IGNvbnN0IFRFU1RfRkVUQ0hfUE9TVCA9ICdGRVRDSF9QT1NUJztcbmV4cG9ydCBjb25zdCBURVNUX1JFUVVFU1RfUE9TVFMgPSAnUkVRVUVTVF9QT1NUUyc7XG5cbi8vIGFwcFxuZXhwb3J0IGNvbnN0IFNIT1dfTE9BREVSID0gJ0FQUC9TSE9XX0xPQURFUic7XG5leHBvcnQgY29uc3QgSElERV9MT0FERVIgPSAnQVBQL0hJREVfTE9BREVSJztcbmV4cG9ydCBjb25zdCBTSE9XX0FMRVJUID0gJ0FQUC9TSE9XX0FMRVJUJztcbmV4cG9ydCBjb25zdCBISURFX0FMRVJUID0gJ0FQUC9ISURFX0FMRVJUJzsgXG5leHBvcnQgY29uc3QgR0VUX0FMTF9QT1NUUyA9ICdHRVRfQUxMX1BPU1RTJztcbmV4cG9ydCBjb25zdCBHRVRfUEFHRVNfTlVNQkVSID0gJ0dFVF9QQUdFU19OVU1CRVInO1xuZXhwb3J0IGNvbnN0IEdFVF9ORVdfUE9TVFMgPSAnR0VUX05FV19QT1NUUyc7XG5leHBvcnQgY29uc3QgR0VUX0xPQ0FJVE9OU19JTkZPID0gJ0dFVF9MT0NBSVRPTlNfSU5GTyc7XG5leHBvcnQgY29uc3QgR0VUX0NJVElFUyA9ICdHRVRfQ0lUSUVTJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfU1VQUE9SVF9UQVNLID0gJ0NSRUFURV9TVVBQT1JUX1RBU0snO1xuZXhwb3J0IGNvbnN0IEdFVF9BTExfVVNFUl9UQVNLUyA9ICdHRVRfQUxMX1VTRVJfVEFTS1MnO1xuZXhwb3J0IGNvbnN0IEdFVF9BUFBfSU5GTyA9ICdHRVRfQVBQX0lORk8nO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX0NPTU1FTlRTID0gJ0dFVF9QT1NUX0NPTU1FTlRTJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TVF9DT01NRU5UID0gJ0NSRUFURV9QT1NUX0NPTU1FTlQnO1xuZXhwb3J0IGNvbnN0IEZJTFRFUl9QT1NUUyA9ICdGSUxURVJfUE9TVFMnO1xuZXhwb3J0IGNvbnN0IFJFUE9SVF9QT1NUID0gJ1JFUE9SVF9QT1NUJztcbmV4cG9ydCBjb25zdCBHRVRfRkFWT1JJVEVTID0gJ0dFVF9GQVZPUklURVMnO1xuZXhwb3J0IGNvbnN0IEdFVF9DT01QTEFJTlMgPSAnR0VUX0dFVF9DT01QTEFJTlMnO1xuZXhwb3J0IGNvbnN0IFNPUlRfUE9TVFMgPSAnU09SVF9QT1NUUyc7XG5leHBvcnQgY29uc3QgU0hPV19TVUNDRVNTID0gJ1NIT1dfU1VDQ0VTUyc7XG5cbi8vIHByb3ZpZGVyXG5leHBvcnQgY29uc3QgQUREX1BPU1QgPSAnUFJPVklERVIvQUREX1BPU1QnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUID0gJ1BST1ZJREVSL1JFTU9WRV9QT1NUJztcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TVCA9ICdQUk9WSURFUi9VUERBVEVfUE9TVCc7XG5cbi8vIHByb3ZpZGVyXG5leHBvcnQgaW50ZXJmYWNlIFByb3ZpZGVyUG9zdCB7XG4gIGlkOiBudW1iZXIgfCBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZyxcbiAgc2Vjb25kTmFtZTogc3RyaW5nLFxuICBhY2NvdW50aW5nTmFtZTogc3RyaW5nLFxuICBzZXg6IHN0cmluZyxcbiAgYWdlOiBudW1iZXIgfCBzdHJpbmcsXG4gIGVtYWlsOiBzdHJpbmcsXG4gIHBob25lOiBudW1iZXIgfCBzdHJpbmcsXG4gIGV0aG5pdGhpdHk6IHN0cmluZyxcbiAgaGFpcjogc3RyaW5nLFxuICBleWVzOiBzdHJpbmcsXG4gIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICBhZmZpbGlhdGlvbjogc3RyaW5nLFxuICBhdmFpbGFibGVUbzogc3RyaW5nLFxuICBhdmFpbGFiaWxpdHk6IHN0cmluZyxcbiAgc2hvcnRTdW1tYXJ5OiBzdHJpbmcsXG4gIGFib3V0OiBzdHJpbmcsXG4gIHBob3Rvczogc3RyaW5nW10sXG4gIHZpZGVvczogc3RyaW5nW11cbn1cblxuLy8gdXNlclxuZXhwb3J0IGNvbnN0IFNFTEVDVF9TVEFURSA9ICdVU0VSL1NFTEVDVF9TVEFURSc7XG5leHBvcnQgY29uc3QgU0VMRUNUX0NJVFkgPSAnVVNFUi9TRUxFQ1RfQ0lUWSc7XG5leHBvcnQgY29uc3QgU0VMRUNUX0xJU1RfU09SVCA9ICdVU0VSL1NFTEVDVF9MSVNUX1NPUlQnO1xuZXhwb3J0IGNvbnN0IFNFTEVDVF9MSVNUX0ZJTFRFUiA9ICdVU0VSL1NFTEVDVF9MSVNUX0ZJTFRFUic7XG5leHBvcnQgY29uc3QgU0VMRUNUX0NBVEVHT1JZID0gJ1VTRVIvU0VMRUNUX0NBVEVHT1JZJztcblxuLy8gYWRtaW5cbmV4cG9ydCBjb25zdCBHRVRfQUxMX1NVUFBPUlRfVEFTS1MgPSAnR0VUX0FMTF9TVVBQT1JUX1RBU0tTJztcbmV4cG9ydCBjb25zdCBFRElUX1NVUFBPUlRfVEFTS1MgPSAnRURJVF9TVVBQT1JUX1RBU0tTJztcbmV4cG9ydCBjb25zdCBERUxFVEVfU1VQUE9SVF9UQVNLID0gJ0RFTEVURV9TVVBQT1JUX1RBU0snO1xuLy8gZXhwb3J0IGNvbnN0IENSRUFURV9DQVRFR09SWSA9ICdDUkVBVEVfQ0FURUdPUlknO1xuLy8gZXhwb3J0IGNvbnN0IEVESVRfQ0FURUdPUlkgPSAnRURJVF9DQVRFR09SWSc7XG4vLyBleHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZID0gJ0RFTEVURV9DQVRFR09SWSc7XG4iLCJpbXBvcnQgeyBHRVRfQUxMX1NVUFBPUlRfVEFTS1MsIERFTEVURV9TVVBQT1JUX1RBU0sgfSBmcm9tIFwiLi4vYWN0aW9ucy90eXBlc1wiO1xuXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdGFza3M6IFtdLFxuXG59XG5cbmV4cG9ydCBjb25zdCBhZG1pblJlZHVjZXIgPSAoc3RhdGU6IGFueSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgR0VUX0FMTF9TVVBQT1JUX1RBU0tTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRhc2tzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIERFTEVURV9TVVBQT1JUX1RBU0s6XG4gICAgICBjb25zdCB0YXNrcyA9IHN0YXRlLnRhc2tzLmZpbHRlcigodGFzazogYW55KSA9PiB0YXNrLmlkICE9IGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0YXNrcyB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBTSE9XX0xPQURFUixcbiAgSElERV9MT0FERVIsXG4gIFNIT1dfQUxFUlQsXG4gIEhJREVfQUxFUlQsXG4gIEdFVF9BTExfUE9TVFMsXG4gIEdFVF9MT0NBSVRPTlNfSU5GTyxcbiAgR0VUX0NJVElFUyxcbiAgQ1JFQVRFX1NVUFBPUlRfVEFTSyxcbiAgR0VUX0FMTF9VU0VSX1RBU0tTLFxuICBHRVRfQVBQX0lORk8sXG4gIEdFVF9ORVdfUE9TVFMsXG4gIEdFVF9QQUdFU19OVU1CRVIsXG4gIEdFVF9QT1NUX0NPTU1FTlRTLFxuICBDUkVBVEVfUE9TVF9DT01NRU5ULFxuICBGSUxURVJfUE9TVFMsXG4gIEdFVF9GQVZPUklURVMsXG4gIEdFVF9DT01QTEFJTlMsXG4gIFNPUlRfUE9TVFMsXG4gIFNIT1dfU1VDQ0VTU1xufSBmcm9tIFwiLi4vYWN0aW9ucy90eXBlc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHBvc3RDb21tZW50czogW10sXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBhbGVydDogbnVsbCxcbiAgY2F0ZWdvcmllczogW10sXG4gIHBvc3RzOiBbXSxcbiAgbmV3UG9zdHM6IFtdLFxuICBzdGF0ZXM6IFtdLFxuICBjaXRpZXM6IFtdLFxuICBzdXBwb3J0VGFza3M6IFtdLFxuICBhZmZpbGlhdGlvbjogW10sXG4gIGF2YWlsYWJpbGl0eTogW10sXG4gIGF2YWlsYWJsZV90bzogW10sXG4gIGV0aG5pY2l0eTogW10sXG4gIGV5ZXM6IFtdLFxuICBoYWlyOiBbXSxcbiAgcGFnZXNOdW1iZXI6IDAsXG4gIGZhdm9yaXRlczogW10sXG4gIGNvbXBsYWluczogW10sXG4gIHN1Y2Nlc3M6IG51bGxcbn07XG5cbmV4cG9ydCBjb25zdCBhcHBSZWR1Y2VyID0gKHN0YXRlOiBhbnkgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNIT1dfTE9BREVSOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxuXG4gICAgY2FzZSBTSE9XX1NVQ0NFU1M6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3VjY2VzczogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBISURFX0xPQURFUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9XG5cbiAgICBjYXNlIFNIT1dfQUxFUlQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYWxlcnQ6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgSElERV9BTEVSVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhbGVydDogbnVsbCB9XG5cbiAgICBjYXNlIEdFVF9BTExfUE9TVFM6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgU09SVF9QT1NUUzpcbiAgICAgIGxldCBuZXdQb3N0cyA9IHN0YXRlLnBvc3RzO1xuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkID09PSAnZGF0ZS8tJykge1xuICAgICAgICBuZXdQb3N0cy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGVBID0gbmV3IERhdGUoYS5jcmVhdGVkX2F0LnNwbGl0KCdUJylbMF0uc3BsaXQoJy0nKS5qb2luKCcvJykpO1xuICAgICAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYi5jcmVhdGVkX2F0LnNwbGl0KCdUJylbMF0uc3BsaXQoJy0nKS5qb2luKCcvJykpO1xuICAgICAgICAgIGlmIChkYXRlQS5nZXRUaW1lKCkgPCBkYXRlQi5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGVBLmdldFRpbWUoKSA+IGRhdGVCLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGIgLSBhO1xuICAgICAgICAgIH0gZWxzZSByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RzOiBuZXdQb3N0cyB9XG5cbiAgICBjYXNlIEZJTFRFUl9QT1NUUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBHRVRfUEFHRVNfTlVNQkVSOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBhZ2VzTnVtYmVyOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIEdFVF9ORVdfUE9TVFM6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbmV3UG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgR0VUX0xPQ0FJVE9OU19JTkZPOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHN0YXRlczogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBHRVRfQ0lUSUVTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNpdGllczogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBHRVRfQ09NUExBSU5TOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNvbXBsYWluczogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBHRVRfRkFWT1JJVEVTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZhdm9yaXRlczogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBDUkVBVEVfU1VQUE9SVF9UQVNLOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHN1cHBvcnRUYXNrczogWy4uLnN0YXRlLnN1cHBvcnRUYXNrcywgYWN0aW9uLnBheWxvYWRdIH1cblxuICAgIGNhc2UgR0VUX0FMTF9VU0VSX1RBU0tTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHN1cHBvcnRUYXNrczogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBHRVRfUE9TVF9DT01NRU5UUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0Q29tbWVudHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgQ1JFQVRFX1BPU1RfQ09NTUVOVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0Q29tbWVudHM6IFsuLi5zdGF0ZS5wb3N0Q29tbWVudHMsIGFjdGlvbi5wYXlsb2FkXSB9XG5cbiAgICBjYXNlIEdFVF9BUFBfSU5GTzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXRlZ29yaWVzOiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yaWVzLFxuICAgICAgICBhZmZpbGlhdGlvbjogYWN0aW9uLnBheWxvYWQuYWZmaWxpYXRpb24sXG4gICAgICAgIGF2YWlsYWJpbGl0eTogYWN0aW9uLnBheWxvYWQuYXZhaWxhYmlsaXR5LFxuICAgICAgICBhdmFpbGFibGVfdG86IGFjdGlvbi5wYXlsb2FkLmF2YWlsYWJsZV90byxcbiAgICAgICAgZXRobmljaXR5OiBhY3Rpb24ucGF5bG9hZC5ldGhuaWNpdHksXG4gICAgICAgIGV5ZXM6IGFjdGlvbi5wYXlsb2FkLmV5ZXMsXG4gICAgICAgIGhhaXI6IGFjdGlvbi5wYXlsb2FkLmhhaXJcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCB7IEFERF9QT1NULCBSRU1PVkVfUE9TVCwgVVBEQVRFX1BPU1QgfSBmcm9tIFwiLi4vYWN0aW9ucy90eXBlc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHByb3ZpZGVyUG9zdHM6IFtdXG59O1xuXG5leHBvcnQgY29uc3QgcHJvdmlkZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfUE9TVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm92aWRlclBvc3RzOiBzdGF0ZS5wcm92aWRlclBvc3RzLmNvbmNhdChhY3Rpb24ucGF5bG9hZCkgfVxuXG4gICAgY2FzZSBSRU1PVkVfUE9TVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm92aWRlclBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIFVQREFURV9QT1NUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb3ZpZGVyUG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyB0ZXN0UmVkdWNlciB9IGZyb20gJy4vdGVzdFJlZHVjZXInO1xuaW1wb3J0IHsgYXBwUmVkdWNlciB9IGZyb20gJy4vYXBwUmVkdWNlcic7XG5pbXBvcnQgeyBwcm92aWRlclJlZHVjZXIgfSBmcm9tICcuL3Byb3ZpZGVyUmVkdWNlcic7XG5pbXBvcnQgeyB1c2VyUmVkdWNlciB9IGZyb20gJy4vdXNlclJlZHVjZXInO1xuaW1wb3J0IHsgYWRtaW5SZWR1Y2VyIH0gZnJvbSAnLi9hZG1pblJlZHVjZXInO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgdGVzdFBvc3RzOiB0ZXN0UmVkdWNlcixcbiAgICBhcHA6IGFwcFJlZHVjZXIsXG4gICAgcHJvdmlkZXI6IHByb3ZpZGVyUmVkdWNlcixcbiAgICB1c2VyOiB1c2VyUmVkdWNlcixcbiAgICBhZG1pbjogYWRtaW5SZWR1Y2VyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQgeyBURVNUX0NSRUFURV9QT1NULCBURVNUX0ZFVENIX1BPU1QgfSBmcm9tIFwiLi4vYWN0aW9ucy90eXBlc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHBvc3RzOiBbXSxcbiAgZmV0Y2hlZFBvc3RzOiBbXVxufTtcblxuZXhwb3J0IGNvbnN0IHRlc3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBURVNUX0NSRUFURV9QT1NUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RzOiBzdGF0ZS5wb3N0cy5jb25jYXQoYWN0aW9uLnBheWxvYWQpIH1cblxuICAgIGNhc2UgVEVTVF9GRVRDSF9QT1NUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZldGNoZWRQb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCB7IFNFTEVDVF9TVEFURSwgU0VMRUNUX0NJVFksIFNFTEVDVF9MSVNUX1NPUlQsIFNFTEVDVF9MSVNUX0ZJTFRFUiwgU0VMRUNUX0NBVEVHT1JZIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwb3N0czogW10sXG59O1xuXG5leHBvcnQgY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgU0VMRUNUX1NUQVRFOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIFNFTEVDVF9DSVRZOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIFNFTEVDVF9MSVNUX1NPUlQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgU0VMRUNUX0xJU1RfRklMVEVSOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIFNFTEVDVF9DQVRFR09SWTpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9yb290UmVkdWNlcic7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5jb25zdCBwcmVsb2FkZWRTdGF0ZSA9IHt9O1xuXG5jb25zdCBzdG9yZTogYW55ID0gY3JlYXRlU3RvcmUoXG4gIHJvb3RSZWR1Y2VyLFxuICBwcmVsb2FkZWRTdGF0ZSxcbiAgYXBwbHlNaWRkbGV3YXJlKFxuICAgIHRodW5rLFxuICApXG4pO1xuXG5zdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICBjb25zb2xlLmxvZygndXBkYXRlZCBzdGF0ZTogJywgc3RvcmUuZ2V0U3RhdGUoKSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==