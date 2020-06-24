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
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\home-page\\EscortContent.jsx";
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
  filterPosts
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
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: `text-white ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.escort_content_title}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Meet our selection of worldwide escorts")), __jsx("div", {
    className: `${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_sort_control}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_btn_wrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_btn_group,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("span", {
    onClick: slideFilter,
    className: `pl-2 ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_btn}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "FILTER"), __jsx("select", {
    className: `pl-2 form-control border-0 ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sorting_btn}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("option", {
    value: "default",
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "SORTING"), __jsx("option", {
    value: "price / from biger to smaller",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, "price / from biger to smaller"), __jsx("option", {
    value: "price / from smaller to biger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, "price / from smaller to biger"), __jsx("option", {
    value: "date added",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "date added"), __jsx("option", {
    value: "number of reviews",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, "number of reviews"))), __jsx("div", {
    className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_btn_group,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("span", {
    name: "grid",
    className: `grid_btn carousel_layout_change_btn ${visibleComponent === "grid" ? "active_btn_pink" : ""} ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.grid_btn}`,
    onClick: e => changeVisibleComponent(e),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "GRID"), __jsx("span", {
    name: "list",
    className: `list_btn carousel_layout_change_btn ${visibleComponent === "list" ? "active_btn_pink" : ""} ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.list_btn}`,
    onClick: e => changeVisibleComponent(e),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "LIST")))), __jsx("div", {
    className: `filter_items_block ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_items_block}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "models-view-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, visibleComponent === "list" ? __jsx(_EscortList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    posts: posts,
    pagesNumber: pagesNumber,
    selectPostsPage: selectPostsPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }) : __jsx(_EscortGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    posts: posts,
    pagesNumber: pagesNumber,
    selectPostsPage: selectPostsPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
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
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\home-page\\EscortGrid.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function EscortGrid({
  posts,
  pagesNumber,
  selectPostsPage
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
        lineNumber: 65,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: _assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
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
      src: _assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_5___default.a,
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
      src: _assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 27
      }
    }))), __jsx("div", {
      className: `text-white ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.verification}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 23
      }
    }, __jsx("span", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.verified,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 25
      }
    }, __jsx(_modal_window_VerifiedWindow__WEBPACK_IMPORTED_MODULE_7__["default"], {
      buttonLabel: `VERIFIED`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 27
      }
    }), __jsx("i", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 27
      }
    })), __jsx("span", {
      className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.view_profile,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
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
        lineNumber: 81,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: "btn text-white",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 29
      }
    }, "VIEW PROFILE")))))));
  })), __jsx("nav", {
    "aria-label": "Page navigation example",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "pagination justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "page-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
      lineNumber: 95,
      columnNumber: 17
    }
  }, "Previous")), pages.map((p, i) => __jsx("li", {
    key: i,
    className: "page-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
      lineNumber: 108,
      columnNumber: 19
    }
  }, i + 1))), __jsx("li", {
    className: "page-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 117,
      columnNumber: 17
    }
  }, "Next"))))) : __jsx("div", {
    className: "h1 text-info text-center py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
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
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\home-page\\EscortList.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import Slider from "react-slick"







function EscortList({
  posts,
  pagesNumber,
  selectPostsPage
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
        columnNumber: 78
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
        lineNumber: 83,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: _assets_images_main_signs_crown_pink_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      alt: "model",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
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
      src: _assets_images_main_signs_star_pink_png__WEBPACK_IMPORTED_MODULE_5___default.a,
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
      src: _assets_images_main_signs_plane_pink_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "model",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 23
      }
    })))))));
  })), __jsx("nav", {
    "aria-label": "Page navigation example",
    className: "pt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "pagination justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "page-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
      lineNumber: 102,
      columnNumber: 15
    }
  }, "Previous")), pages.map((p, i) => __jsx("li", {
    key: i,
    className: "page-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 115,
      columnNumber: 17
    }
  }, i + 1))), __jsx("li", {
    className: "page-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
      lineNumber: 124,
      columnNumber: 15
    }
  }, "Next"))))) : __jsx("div", {
    className: "h1 text-info text-center py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
  filterPosts
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
    }).catch(err => console.error('Error: ', err));
  };

  return __jsx("form", {
    onSubmit: applyFilter,
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_form,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sex_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "Gender"), __jsx("label", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("input", {
    className: "mr-2",
    value: "female",
    type: "radio",
    name: "sex",
    onChange: e => setSex(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.checkmark,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), "Female"), __jsx("label", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("input", {
    className: "mr-2",
    value: "male",
    type: "radio",
    name: "sex",
    onChange: e => setSex(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.checkmark,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), "Male")), __jsx("label", {
    className: `${_form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.age_block} form-group`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 68,
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
      lineNumber: 76,
      columnNumber: 9
    }
  })), __jsx("label", {
    className: `${_form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ethnicity_block} form-group`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "Ethnicity:"), __jsx("select", {
    className: "form-control dropdown",
    onChange: e => setEthnicity(['ethnicity_id', e.target.value]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("option", {
    hidden: true,
    value: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, "-- select one --"), ethnicity.length ? ethnicity.map(e => __jsx("option", {
    key: e.id,
    value: e.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, e.value)) : null)), __jsx("div", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hair_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "Hair"), hair.length ? hair.map(h => __jsx("label", {
    key: h.id,
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 105,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.checkmark,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }), h.value)) : null), __jsx("div", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.eye_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, "Eye"), eyes.length ? eyes.map(e => __jsx("label", {
    key: e.id,
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 123,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.checkmark,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }), e.value)) : null), __jsx("div", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.affiliation_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, __jsx("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, "Affiliation"), affiliation.length ? affiliation.map(a => __jsx("label", {
    key: a.id,
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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
      lineNumber: 141,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.checkmark,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }), a.value)) : null), __jsx("div", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.availableTo_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, __jsx("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, " Available To:"), available_to.length ? available_to.map(a => __jsx("label", {
    key: a.id,
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
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
      lineNumber: 159,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.checksign,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  }), a.value)) : null), __jsx("div", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.availability_block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }, __jsx("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, "Availability:"), availability.length ? availability.map(a => __jsx("label", {
    key: a.id,
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
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
      lineNumber: 184,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: _form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.checksign,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 15
    }
  }), a.value)) : null), __jsx("button", {
    type: "submit",
    className: `rounded border-0 ${_form_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.btn_submit}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
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
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\pages\\index.jsx";
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
  affiliation
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getAllPosts();
    getLocationsInfo();
    getNewPosts();
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 3
    }
  }, __jsx(_components_home_page_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    states: states,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }
  }), __jsx(_components_home_page_Search__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }
  }), __jsx(_components_home_page_Categories__WEBPACK_IMPORTED_MODULE_3__["default"], {
    categories: categories,
    newPosts: newPosts,
    filterPosts: filterPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
  filterPosts: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["filterPosts"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToPops)(Home));

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

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/pages/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\projects\vibe\src\pages\index.jsx */"./src/pages/index.jsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9faGVscGVycy9Qcml2YXRlUm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19oZWxwZXJzL2F1dGgtaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9faGVscGVycy9mYWtlLWJhY2tlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19oZWxwZXJzL2hhbmRsZS1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX2hlbHBlcnMvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19oZWxwZXJzL3JvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9fc2VydmljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zZXJ2aWNlcy91c2VyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbi9ob3Jpem9udGFsL21vZGVsLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvY3Jvd24tcGluay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9mYXZvcml0ZS1waW5rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3BsYW5lLXBpbmsucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvc3Rhci1waW5rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvQ2F0ZWdvcmllcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL0VzY29ydENvbnRlbnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9Fc2NvcnRHcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvRXNjb3J0TGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL0xvY2F0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvTmV3UG9zdHMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9TZWFyY2guanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9jYXRlZ29yaWVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9lc2NvcnQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL2xvY2F0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9zZWFyY2gubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwtd2luZG93L1ZlcmlmaWVkV2luZG93LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RlbHMtZmlsdGVyL01vZGVsc0ZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWxzLWZpbHRlci9mb3JtLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy90eXBlcy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoaXN0b3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3VybCIsIl91dGlscyIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsImlzTG9jYWwiLCJocmVmIiwidXJsIiwicGFyc2UiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsInRhcmdldCIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJMaW5rIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInAiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJlIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicmVzb2x2ZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJ0eXBlIiwicHJvY2VzcyIsImNsb25lRWxlbWVudCIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsInZhbHVlIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsImV2ZW50Iiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiRXJyb3IiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsIl9sZW4iLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJzbGljZSIsIm1hcCIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInN1YnN0ciIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwicXVlcnkiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJmZXRjaCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiY29kZSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsInNkYyIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwibWV0aG9kIiwiX2FzIiwicmVqZWN0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiVEVTVF9ST1VURSIsInRlc3QiLCJyZSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfIiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwibm9ybWFsaXplZFJvdXRlIiwiZXNjYXBlZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsIiQxIiwiaXNDYXRjaEFsbCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfYSIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXQiLCJTUCIsIm1lYXN1cmUiLCJQcml2YXRlUm91dGUiLCJjb21wb25lbnQiLCJyb2xlcyIsInJlc3QiLCJjdXJyZW50VXNlciIsImF1dGhlbnRpY2F0aW9uU2VydmljZSIsImN1cnJlbnRVc2VyVmFsdWUiLCJmcm9tIiwicm9sZSIsImF1dGhIZWFkZXIiLCJ0b2tlbiIsIkF1dGhvcml6YXRpb24iLCJjb25maWd1cmVGYWtlQmFja2VuZCIsInVzZXJzIiwiaWQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJSb2xlIiwiQWRtaW4iLCJzZWNvbmRfbmFtZSIsImVtYWlsIiwicGhvbmUiLCJQcm92aWRlciIsInJlYWxGZXRjaCIsIm9wdHMiLCJoZWFkZXJzIiwiaXNMb2dnZWRJbiIsInN0YXJ0c1dpdGgiLCJyb2xlU3RyaW5nIiwic2V0VGltZW91dCIsImVuZHNXaXRoIiwiSlNPTiIsInVzZXIiLCJ1IiwiVXNlciIsIm1hdGNoIiwidW5hdXRob3Jpc2VkIiwidXJsUGFydHMiLCJwYXJzZUludCIsImZpbmQiLCJ4IiwicmVzcG9uc2UiLCJ0ZXh0Iiwic3RyaW5naWZ5IiwiaGFuZGxlUmVzcG9uc2UiLCJsb2dvdXQiLCJzdGF0dXNUZXh0IiwiY3JlYXRlQnJvd3Nlckhpc3RvcnkiLCJjdXJyZW50VXNlclN1YmplY3QiLCJDb29raWVzIiwiZ2V0SlNPTiIsImxvZ2luIiwicmVnaXN0cmF0aW9uQWRtaW4iLCJyZWdpc3RyYXRpb25DbGllbnQiLCJyZWdpc3RyYXRpb25Qcm92aWRlciIsInJlZ2lzdHJhdGlvbkFnZW5jeSIsImV4cGlyZXMiLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJjbGllbnQiLCJhZG1pbiIsInByb3ZpZGVyIiwiYWdlbmN5X25hbWUiLCJwcm9taXNlIiwicmVtb3ZlIiwidXNlclNlcnZpY2UiLCJnZXRBbGwiLCJnZXRCeUlkIiwiZGVsZXRlVXNlciIsInJlcXVlc3RPcHRpb25zIiwicmF0aW5nIiwicG9zaXRpb24iLCJ0ZWxlZ3JhbSIsInZpYmVyIiwid2hhdHNhcHAiLCJzaXRlIiwiYXZhdGFyIiwiQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJuZXdQb3N0cyIsImZpbHRlclBvc3RzIiwiZmlsdGVyQ2F0ZWdvcnkiLCJzZXRGaWx0ZXJDYXRlZ29yeSIsInVzZVN0YXRlIiwiY2hhbmdlQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsInMiLCJjYXRlZ29yaWVzX2Jsb2NrIiwiY2F0ZWdvcmllc190aXRsZSIsImNhdGVnb3JpZXNfY29udGVudCIsImNhdGVnb3JpZXNfY29udHJvbCIsImMiLCJpIiwidG9Mb3dlckNhc2UiLCJjYXRlZ29yaWVzX3N1YnRpdGxlIiwiY2F0ZWdvcmllc19jYXJvdXNlbCIsIkVzY29ydENvbnRlbnQiLCJwb3N0cyIsInBhZ2VzTnVtYmVyIiwic2VsZWN0UG9zdHNQYWdlIiwiYXZhaWxhYmlsaXR5IiwiYXZhaWxhYmxlX3RvIiwiZXRobmljaXR5IiwiZXllcyIsImhhaXIiLCJhZmZpbGlhdGlvbiIsInZpc2libGVDb21wb25lbnQiLCJzZXRWaXNpYmxlQ29tcG9uZW50Iiwic2hvd0ZpbHRlciIsInNldFNob3dGaWx0ZXIiLCJ1c2VFZmZlY3QiLCIkIiwiaGlkZSIsInNsaWRlRmlsdGVyIiwic2xpZGVUb2dnbGUiLCJjaGFuZ2VWaXNpYmxlQ29tcG9uZW50IiwicGVyc2lzdCIsImZhZGVPdXQiLCJhdHRyIiwiZmFkZUluIiwiZXNjb3J0X2NvbnRlbnRfYmxvY2siLCJtaW5IZWlnaHQiLCJlc2NvcnRfY29udGVudF90aXRsZSIsImZpbHRlcl9zb3J0X2NvbnRyb2wiLCJmaWx0ZXJfYnRuX3dyYXAiLCJmaWx0ZXJfYnRuX2dyb3VwIiwiZmlsdGVyX2J0biIsInNvcnRpbmdfYnRuIiwiZ3JpZF9idG4iLCJsaXN0X2J0biIsImZpbHRlcl9pdGVtc19ibG9jayIsIkVzY29ydEdyaWQiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwicGFnZXMiLCJzZXRQYWdlcyIsIm1heFdpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsInBvc3QiLCJ2ZXJ0aWNhbF9zbGlkZSIsInZlcnRpY2FsX3NsaWRlX2ltYWdlIiwicGhvdG9faG9yaXpvbnRhbCIsIm1vZGVsX25hbWUiLCJtb2RlbF9waG90b19ncmlkIiwidmVydGljYWxfc2xpZGVfbW9kZWxfaW5mbyIsIm5ldHdvcmtfc3RhdHVzIiwidGV4dFRyYW5zZm9ybSIsInN1bW1hcnkiLCJjYXJkX2NvbnRyb2wiLCJmYXYiLCJjcm93biIsInN0YXIiLCJwbGFuZSIsInZlcmlmaWNhdGlvbiIsInZlcmlmaWVkIiwidmlld19wcm9maWxlIiwiRXNjb3J0TGlzdCIsInNldHRpbmdzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwiZG90cyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImRyYWdnYWJsZSIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiaW5pdGlhbFNsaWRlIiwiZXNjb3J0X2xpc3QiLCJzbGlkZSIsIm1vZGVsX3Bob3RvIiwicGhvdG9fdmVydGljYWwiLCJtb2RlbF9pbmZvIiwibW9kZWxfaW5mb190aXRsZSIsInNpZ25zX2dyb3VwIiwic2lnbiIsIkxvY2F0aW9uIiwic3RhdGVzIiwiY3VycmVudExvY2F0aW9uIiwic2V0Q3VycmVudExvY2F0aW9uIiwiY2hhbmdlTG9jYXRpb24iLCJzdGF0ZUlkIiwibG9jYXRpb25fd3JhcHBlciIsImxvY2F0b25fYmxvY2tfdGl0bGUiLCJsb2NhdGlvbl9ibG9ja19zZWxlY3QiLCJsb2NhdGlvbl9ibG9ja19saXN0IiwiU2ltcGxlU2xpZGVyIiwiZmFkZSIsIlNlYXJjaCIsInNlYXJjaF9ibG9jayIsInNlYXJjaF9ibG9ja19jb250ZW50Iiwic2VhcmNoX2lucHV0X2xhYmVsIiwic2VhcmNoX2lucHV0IiwiYWRkX3Bvc3RfYnRuIiwiVmVyaWZpZWRXaW5kb3ciLCJidXR0b25MYWJlbCIsImNsYXNzTmFtZSIsIm1vZGFsIiwic2V0TW9kYWwiLCJ0b2dnbGUiLCJmb250RmFtaWx5IiwiTW9kYWwiLCJpc09wZW4iLCJhdXRvRm9jdXMiLCJjZW50ZXJlZCIsInNpemUiLCJmdW5jIiwibGFiZWxsZWRCeSIsImtleWJvYXJkIiwiYmFja2Ryb3AiLCJvbmVPZiIsInNjcm9sbGFibGUiLCJvbkVudGVyIiwib25FeGl0Iiwib25PcGVuZWQiLCJvbkNsb3NlZCIsIndyYXBDbGFzc05hbWUiLCJtb2RhbENsYXNzTmFtZSIsImJhY2tkcm9wQ2xhc3NOYW1lIiwiY29udGVudENsYXNzTmFtZSIsImNzc01vZHVsZSIsInpJbmRleCIsIm51bWJlciIsInVubW91bnRPbkNsb3NlIiwicmV0dXJuRm9jdXNBZnRlckNsb3NlIiwiTW9kZWxzRmlsdGVyIiwic2V4Iiwic2V0U2V4IiwiYWdlRnJvbSIsInNldEFnZUZyb20iLCJhZ2VUbyIsInNldEFnZVRvIiwic3RhdGVFdGhuaWNpdHkiLCJzZXRFdGhuaWNpdHkiLCJzdGF0ZUhhaXIiLCJzZXRIYWlyIiwic3RhdGVFeWUiLCJzZXRFeWUiLCJzdGF0ZUFmZmlsaWF0aW9uIiwic2V0QWZmaWxpYXRpb24iLCJzdGF0ZUF2YWlsYWJsZVRvIiwic2V0QXZhaWxhYmxlVG8iLCJzdGF0ZUF2YWlsYWJpbGl0eSIsInNldEF2YWlsYWJpbGl0eSIsImFwcGx5RmlsdGVyIiwiZmlsdGVySXRlbXMiLCJpdGVtIiwidG9TdHJpbmciLCJmaWx0ZXJfZm9ybSIsInNleF9ibG9jayIsImxhYmVsIiwiY2hlY2ttYXJrIiwiYWdlX2Jsb2NrIiwiZXRobmljaXR5X2Jsb2NrIiwiaGFpcl9ibG9jayIsImgiLCJleWVfYmxvY2siLCJhZmZpbGlhdGlvbl9ibG9jayIsImEiLCJhdmFpbGFibGVUb19ibG9jayIsImNoZWNrZWQiLCJjaGVja3NpZ24iLCJhdmFpbGFiaWxpdHlfYmxvY2siLCJidG5fc3VibWl0IiwiSG9tZSIsImdldEFsbFBvc3RzIiwiZ2V0TG9jYXRpb25zSW5mbyIsImdldE5ld1Bvc3RzIiwibWFwU3RhdGVUb1Byb3BzIiwiYXBwIiwibWFwRGlzcGF0Y2hUb1BvcHMiLCJjb25uZWN0IiwiY3JlYXRlUG9zdCIsIlRFU1RfQ1JFQVRFX1BPU1QiLCJwYXlsb2FkIiwic2hvd0xvYWRlciIsIlNIT1dfTE9BREVSIiwiaGlkZUxvYWRlciIsIkhJREVfTE9BREVSIiwic2hvd0FsZXJ0IiwiZGlzcGF0Y2giLCJTSE9XX0FMRVJUIiwiaGlkZUFsZXJ0IiwiSElERV9BTEVSVCIsImZldGNoUG9zdHMiLCJURVNUX1JFUVVFU1RfUE9TVFMiLCJHRVRfUEFHRVNfTlVNQkVSIiwibGFzdF9wYWdlIiwiR0VUX0FMTF9QT1NUUyIsIkdFVF9ORVdfUE9TVFMiLCJHRVRfTE9DQUlUT05TX0lORk8iLCJnZXRBcHBJbmZvIiwiR0VUX0FQUF9JTkZPIiwiZ2V0Q2l0aWVzIiwiR0VUX0NJVElFUyIsImNyZWF0ZVN1cHBvcnRUYXNrIiwidGFzayIsInRva2VuX3R5cGUiLCJsb2ciLCJDUkVBVEVfU1VQUE9SVF9UQVNLIiwiZ2V0QWxsVXNlcnNUYXNrcyIsIkdFVF9BTExfVVNFUl9UQVNLUyIsImdldFBvc3RDb21tZW50cyIsInBvc3RJZCIsIkdFVF9QT1NUX0NPTU1FTlRTIiwiY3JlYXRlUG9zdENvbW1lbnQiLCJjb21tZW50IiwiQ1JFQVRFX1BPU1RfQ09NTUVOVCIsImZpbHRlckl0ZW1zT2JqZWN0IiwiRklMVEVSX1BPU1RTIiwiVEVTVF9GRVRDSF9QT1NUIiwiQUREX1BPU1QiLCJSRU1PVkVfUE9TVCIsIlVQREFURV9QT1NUIiwiU0VMRUNUX1NUQVRFIiwiU0VMRUNUX0NJVFkiLCJTRUxFQ1RfTElTVF9TT1JUIiwiU0VMRUNUX0xJU1RfRklMVEVSIiwiU0VMRUNUX0NBVEVHT1JZIiwiR0VUX0FMTF9TVVBQT1JUX1RBU0tTIiwiRURJVF9TVVBQT1JUX1RBU0tTIiwiREVMRVRFX1NVUFBPUlRfVEFTSyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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Ozs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCB7IGF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJpdmF0ZVJvdXRlID0gKHsgY29tcG9uZW50OiBDb21wb25lbnQsIHJvbGVzLCAuLi5yZXN0IH0pID0+IChcclxuICA8Um91dGUgey4uLnJlc3R9IHJlbmRlcj17cHJvcHMgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcclxuICAgIGlmICghY3VycmVudFVzZXIpIHtcclxuICAgICAgLy8gbm90IGxvZ2dlZCBpbiBzbyByZWRpcmVjdCB0byBsb2dpbiBwYWdlIHdpdGggdGhlIHJldHVybiB1cmxcclxuICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17eyBwYXRobmFtZTogJy9sb2dpbicsIHN0YXRlOiB7IGZyb206IHByb3BzLmxvY2F0aW9uIH0gfX0gLz5cclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayBpZiByb3V0ZSBpcyByZXN0cmljdGVkIGJ5IHJvbGVcclxuICAgIGlmIChyb2xlcyAmJiByb2xlcy5pbmRleE9mKGN1cnJlbnRVc2VyLnJvbGUpID09PSAtMSkge1xyXG4gICAgICAvLyByb2xlIG5vdCBhdXRob3Jpc2VkIHNvIHJlZGlyZWN0IHRvIGhvbWUgcGFnZVxyXG4gICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXt7IHBhdGhuYW1lOiAnLycgfX0gLz5cclxuICAgIH1cclxuXHJcbiAgICAvLyBhdXRob3Jpc2VkIHNvIHJldHVybiBjb21wb25lbnRcclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICB9fSAvPlxyXG4pIiwiaW1wb3J0IHsgYXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vX3NlcnZpY2VzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhdXRoSGVhZGVyKCkge1xyXG4gIC8vIHJldHVybiBhdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIGp3dCB0b2tlblxyXG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XHJcbiAgaWYgKGN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyLnRva2VuKSB7XHJcbiAgICByZXR1cm4geyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y3VycmVudFVzZXIudG9rZW59YCB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJvbGUgfSBmcm9tICcuLydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmVGYWtlQmFja2VuZCgpIHtcclxuICBsZXQgdXNlcnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICB1c2VybmFtZTogJ2FkbWluJyxcclxuICAgICAgcGFzc3dvcmQ6ICdhZG1pbicsXHJcbiAgICAgIGZpcnN0TmFtZTogJ0FkbWluJyxcclxuICAgICAgbGFzdE5hbWU6ICdBZG1pbicsXHJcbiAgICAgIHJvbGU6IFJvbGUuQWRtaW4sXHJcbiAgICAgIG5hbWU6IFwiQWRtaW5cIixcclxuICAgICAgc2Vjb25kX25hbWU6IG51bGwsXHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBwaG9uZTogXCIzODA5NTM0NDQzNDhcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICB1c2VybmFtZTogJ3VzZXInLFxyXG4gICAgICBwYXNzd29yZDogJ3VzZXInLFxyXG4gICAgICBmaXJzdE5hbWU6ICdJdmFuJyxcclxuICAgICAgbGFzdE5hbWU6ICdVc2VyJyxcclxuICAgICAgcm9sZTogUm9sZS5BZG1pbixcclxuICAgICAgbmFtZTogXCJVc2VyXCIsXHJcbiAgICAgIHNlY29uZF9uYW1lOiBudWxsLFxyXG4gICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgcGhvbmU6IFwiMzgwOTUzNDQ0MzQ4XCIsXHJcbiAgICB9LFxyXG4gICAgLFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgdXNlcm5hbWU6ICdwcm8nLFxyXG4gICAgICBwYXNzd29yZDogJ3BybycsXHJcbiAgICAgIGZpcnN0TmFtZTogJ01vZGVsJyxcclxuICAgICAgbGFzdE5hbWU6ICdQcm92aWRlcicsXHJcbiAgICAgIHJvbGU6IFJvbGUuUHJvdmlkZXIsXHJcbiAgICAgIG5hbWU6IFwiTW9kZWxcIixcclxuICAgICAgc2Vjb25kX25hbWU6IG51bGwsXHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBwaG9uZTogXCIzODA5NTM0NDQzNDhcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGxldCByZWFsRmV0Y2ggPSB3aW5kb3cuZmV0Y2g7XHJcbiAgd2luZG93LmZldGNoID0gZnVuY3Rpb24gKHVybCwgb3B0cykge1xyXG4gICAgY29uc3QgYXV0aEhlYWRlciA9IG9wdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddO1xyXG4gICAgY29uc3QgaXNMb2dnZWRJbiA9IGF1dGhIZWFkZXIgJiYgYXV0aEhlYWRlci5zdGFydHNXaXRoKCdCZWFyZXIgZmFrZS1qd3QtdG9rZW4nKTtcclxuICAgIGNvbnN0IHJvbGVTdHJpbmcgPSBpc0xvZ2dlZEluICYmIGF1dGhIZWFkZXIuc3BsaXQoJy4nKVsxXTtcclxuICAgIGNvbnN0IHJvbGUgPSByb2xlU3RyaW5nID8gUm9sZVtyb2xlU3RyaW5nXSA6IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgLy8gd3JhcCBpbiB0aW1lb3V0IHRvIHNpbXVsYXRlIHNlcnZlciBhcGkgY2FsbFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBhdXRoZW50aWNhdGUgLSBwdWJsaWNcclxuICAgICAgICBpZiAodXJsLmVuZHNXaXRoKCcvYXBpL2F1dGgvbG9naW4nKSAmJiBvcHRzLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSBKU09OLnBhcnNlKG9wdHMuYm9keSk7XHJcbiAgICAgICAgICAvLyBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh4ID0+IHgudXNlcm5hbWUgPT09IHBhcmFtcy51c2VybmFtZSAmJiB4LnBhc3N3b3JkID09PSBwYXJhbXMucGFzc3dvcmQpO1xyXG4gICAgICAgICAgbGV0IHVzZXI7XHJcbiAgICAgICAgICB1c2Vycy5mb3JFYWNoKHUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodS5wYXNzd29yZCA9PT0gcGFyYW1zLnBhc3N3b3JkICYmIHUudXNlcm5hbWUgPT09IHBhcmFtcy51c2VybmFtZSkgcmV0dXJuIHVzZXIgPSB1O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICghdXNlcikgcmV0dXJuIGVycm9yKCdVc2VybmFtZSBvciBwYXNzd29yZCBpcyBpbmNvcnJlY3QnKTtcclxuICAgICAgICAgIHJldHVybiBvayh7XHJcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiB1c2VyLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IHVzZXIubGFzdE5hbWUsXHJcbiAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcclxuICAgICAgICAgICAgdG9rZW46IGBmYWtlLWp3dC10b2tlbi4ke3VzZXIucm9sZX1gLFxyXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIHNlY29uZF9uYW1lOiB1c2VyLnNlY29uZF9uYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgcGhvbmU6IHVzZXIucGhvbmVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVybC5lbmRzV2l0aCgnL2FwaS9hdXRoL3JlZ2lzdGVyJykgJiYgb3B0cy5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgICAgY29uc3QgcGFyYW1zID0gSlNPTi5wYXJzZShvcHRzLmJvZHkpO1xyXG4gICAgICAgICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICAgICAgaWQ6IHVzZXJzLmxlbmd0aCArIDEsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBwYXJhbXMudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXJhbXMucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJ05vcm1hbCcsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBSb2xlLlVzZXIsXHJcbiAgICAgICAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgIHNlY29uZF9uYW1lOiBudWxsLFxyXG4gICAgICAgICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgICAgICAgcGhvbmU6IG51bGxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB1c2Vycy5wdXNoKHVzZXIpO1xyXG5cclxuICAgICAgICAgIHJldHVybiBvayh7XHJcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiB1c2VyLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IHVzZXIubGFzdE5hbWUsXHJcbiAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcclxuICAgICAgICAgICAgdG9rZW46IGBmYWtlLWp3dC10b2tlbi4ke3VzZXIucm9sZX1gLFxyXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIHNlY29uZF9uYW1lOiB1c2VyLnNlY29uZF9uYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgcGhvbmU6IHVzZXIucGhvbmVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0IHVzZXIgYnkgaWQgLSBhZG1pbiBvciB1c2VyICh1c2VyIGNhbiBvbmx5IGFjY2VzcyB0aGVpciBvd24gcmVjb3JkKVxyXG4gICAgICAgIGlmICh1cmwubWF0Y2goL1xcL3VzZXJzXFwvXFxkKyQvKSAmJiBvcHRzLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICAgIGlmICghaXNMb2dnZWRJbikgcmV0dXJuIHVuYXV0aG9yaXNlZCgpO1xyXG5cclxuICAgICAgICAgIC8vIGdldCBpZCBmcm9tIHJlcXVlc3QgdXJsXHJcbiAgICAgICAgICBsZXQgdXJsUGFydHMgPSB1cmwuc3BsaXQoJy8nKTtcclxuICAgICAgICAgIGxldCBpZCA9IHBhcnNlSW50KHVybFBhcnRzW3VybFBhcnRzLmxlbmd0aCAtIDFdKTtcclxuXHJcbiAgICAgICAgICAvLyBvbmx5IGFsbG93IG5vcm1hbCB1c2VycyBhY2Nlc3MgdG8gdGhlaXIgb3duIHJlY29yZFxyXG4gICAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2Vycy5maW5kKHggPT4geC5yb2xlID09PSByb2xlKTtcclxuICAgICAgICAgIGlmIChpZCAhPT0gY3VycmVudFVzZXIuaWQgJiYgcm9sZSAhPT0gUm9sZS5BZG1pbikgcmV0dXJuIHVuYXV0aG9yaXNlZCgpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSB1c2Vycy5maW5kKHggPT4geC5pZCA9PT0gaWQpO1xyXG4gICAgICAgICAgcmV0dXJuIG9rKHVzZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0IGFsbCB1c2VycyAtIGFkbWluIG9ubHlcclxuICAgICAgICBpZiAodXJsLmVuZHNXaXRoKCcvdXNlcnMnKSAmJiBvcHRzLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICAgIGlmIChyb2xlICE9PSBSb2xlLkFkbWluKSByZXR1cm4gdW5hdXRob3Jpc2VkKCk7XHJcbiAgICAgICAgICByZXR1cm4gb2sodXNlcnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcGFzcyB0aHJvdWdoIGFueSByZXF1ZXN0cyBub3QgaGFuZGxlZCBhYm92ZVxyXG4gICAgICAgIHJlYWxGZXRjaCh1cmwsIG9wdHMpLnRoZW4ocmVzcG9uc2UgPT4gcmVzb2x2ZShyZXNwb25zZSkpO1xyXG5cclxuICAgICAgICAvLyBwcml2YXRlIGhlbHBlciBmdW5jdGlvbnNcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb2soYm9keSkge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7IG9rOiB0cnVlLCB0ZXh0OiAoKSA9PiBQcm9taXNlLnJlc29sdmUoSlNPTi5zdHJpbmdpZnkoYm9keSkpIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB1bmF1dGhvcmlzZWQoKSB7XHJcbiAgICAgICAgICByZXNvbHZlKHsgc3RhdHVzOiA0MDEsIHRleHQ6ICgpID0+IFByb21pc2UucmVzb2x2ZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6ICdVbmF1dGhvcmlzZWQnIH0pKSB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7IHN0YXR1czogNDAwLCB0ZXh0OiAoKSA9PiBQcm9taXNlLnJlc29sdmUoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlIH0pKSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgNTAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBhdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKS50aGVuKHRleHQgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHRleHQgJiYgSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgaWYgKFs0MDEsIDQwM10uaW5kZXhPZihyZXNwb25zZS5zdGF0dXMpICE9PSAtMSkge1xyXG4gICAgICAgIC8vIGF1dG8gbG9nb3V0IGlmIDQwMSBVbmF1dGhvcml6ZWQgb3IgNDAzIEZvcmJpZGRlbiByZXNwb25zZSByZXR1cm5lZCBmcm9tIGFwaVxyXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzVGV4dDtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5cclxubGV0IGhpc3RvcnlcclxuXHJcbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgLy8gY29uc3QgY3JlYXRlQnJvd3Nlckhpc3RvcnkgPSByZXF1aXJlKCdoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5JykuZGVmYXVsdFxyXG5cclxuICBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKVxyXG59XHJcblxyXG5leHBvcnQgeyBoaXN0b3J5IH07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vUHJpdmF0ZVJvdXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9hdXRoLWhlYWRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZmFrZS1iYWNrZW5kJztcclxuZXhwb3J0ICogZnJvbSAnLi9oYW5kbGUtcmVzcG9uc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2hpc3RvcnknO1xyXG5leHBvcnQgKiBmcm9tICcuL3JvbGUnO1xyXG4iLCJleHBvcnQgY29uc3QgUm9sZSA9IHtcclxuICBBZG1pbjogJ0FkbWluJyxcclxuICBVc2VyOiAnVXNlcicsXHJcbiAgUHJvdmlkZXI6ICdQcm92aWRlcidcclxufVxyXG4iLCJpbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCB7IGhhbmRsZVJlc3BvbnNlIH0gZnJvbSBcIi4uL19oZWxwZXJzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5sZXQgY3VycmVudFVzZXJTdWJqZWN0ID0gQ29va2llcy5nZXRKU09OKFwiY3VycmVudFVzZXJcIilcclxuICA/IENvb2tpZXMuZ2V0SlNPTihcImN1cnJlbnRVc2VyXCIpXHJcbiAgOiB7fTtcclxuXHJcbmNvbnN0IHRhcmdldCA9IGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpYDtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGlvblNlcnZpY2UgPSB7XHJcbiAgbG9naW4sXHJcbiAgbG9nb3V0LFxyXG4gIHJlZ2lzdHJhdGlvbkFkbWluLFxyXG4gIHJlZ2lzdHJhdGlvbkNsaWVudCxcclxuICByZWdpc3RyYXRpb25Qcm92aWRlcixcclxuICByZWdpc3RyYXRpb25BZ2VuY3ksXHJcbiAgY3VycmVudFVzZXI6IGN1cnJlbnRVc2VyU3ViamVjdCxcclxuICBnZXQgY3VycmVudFVzZXJWYWx1ZSgpIHtcclxuICAgIHJldHVybiBjdXJyZW50VXNlclN1YmplY3Q7XHJcbiAgfSxcclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2xvZ2luYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxyXG4gIH0pXHJcbiAgICAudGhlbihoYW5kbGVSZXNwb25zZSlcclxuICAgIC50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgIGlmICh1c2VyLnRva2VuKSB7XHJcbiAgICAgICAgQ29va2llcy5zZXQoXCJjdXJyZW50VXNlclwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSwgeyBleHBpcmVzOiAxIH0pO1xyXG4gICAgICAgIGN1cnJlbnRVc2VyU3ViamVjdCA9IHVzZXI7XHJcbiAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0cmF0aW9uQ2xpZW50KFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBwYXNzd29yZDogc3RyaW5nLFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBzdHJpbmdcclxuKTogUHJvbWlzZTxhbnk+IHtcclxuICByZXR1cm4gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvY2xpZW50L3JlZ2lzdGVyYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgbmFtZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZF9jb25maXJtYXRpb24sXHJcbiAgICB9KSxcclxuICB9KVxyXG4gICAgLnRoZW4oaGFuZGxlUmVzcG9uc2UpXHJcbiAgICAudGhlbigoY2xpZW50KSA9PiB7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiY3VycmVudFVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoY2xpZW50KSk7XHJcbiAgICAgIGN1cnJlbnRVc2VyU3ViamVjdCA9IGNsaWVudDtcclxuICAgICAgcmV0dXJuIGNsaWVudDtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGxvZ2luKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gUm91dGVyLnB1c2goXCIvdXNlckNhYmluZXRcIikpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiByZWdpc3RyYXRpb25BZG1pbihcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgcGFzc3dvcmQ6IHN0cmluZyxcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogc3RyaW5nXHJcbik6IFByb21pc2U8YW55PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKGAke3RhcmdldH0vYWRtaW4vcmVnaXN0ZXJgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcclxuICAgIH0pLFxyXG4gIH0pXHJcbiAgICAudGhlbihoYW5kbGVSZXNwb25zZSlcclxuICAgIC50aGVuKChhZG1pbikgPT4ge1xyXG4gICAgICBDb29raWVzLnNldChcImN1cnJlbnRVc2VyXCIsIEpTT04uc3RyaW5naWZ5KGFkbWluKSk7XHJcbiAgICAgIGN1cnJlbnRVc2VyU3ViamVjdCA9IGFkbWluO1xyXG4gICAgICByZXR1cm4gYWRtaW47XHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgbG9naW4oZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiByZWdpc3RyYXRpb25Qcm92aWRlcihcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgcGFzc3dvcmQ6IHN0cmluZyxcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogc3RyaW5nLFxyXG4gIHBob25lOiBzdHJpbmcgfCBudW1iZXJcclxuKTogUHJvbWlzZTxhbnk+IHtcclxuICByZXR1cm4gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9pbmRpdmlkdWFsL3JlZ2lzdGVyYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgbmFtZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZF9jb25maXJtYXRpb24sXHJcbiAgICAgIHBob25lXHJcbiAgICB9KSxcclxuICB9KVxyXG4gICAgLnRoZW4oaGFuZGxlUmVzcG9uc2UpXHJcbiAgICAudGhlbigocHJvdmlkZXIpID0+IHtcclxuICAgICAgQ29va2llcy5zZXQoXCJjdXJyZW50VXNlclwiLCBKU09OLnN0cmluZ2lmeShwcm92aWRlci51c2VyKSk7XHJcbiAgICAgIGN1cnJlbnRVc2VyU3ViamVjdCA9IHByb3ZpZGVyO1xyXG4gICAgICByZXR1cm4gcHJvdmlkZXI7XHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgbG9naW4oZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBSb3V0ZXIucHVzaChcIi9tb2RlbENhYmluZXRcIikpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiByZWdpc3RyYXRpb25BZ2VuY3koXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIHBhc3N3b3JkOiBzdHJpbmcsXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwYXNzd29yZF9jb25maXJtYXRpb246IHN0cmluZyxcclxuICBwaG9uZTogc3RyaW5nIHwgbnVtYmVyLFxyXG4gIGFnZW5jeV9uYW1lOiBzdHJpbmdcclxuKTogUHJvbWlzZTxhbnk+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RhcmdldH0vYWdlbmN5L3JlZ2lzdGVyYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgbmFtZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZF9jb25maXJtYXRpb24sXHJcbiAgICAgIHBob25lLFxyXG4gICAgICBhZ2VuY3lfbmFtZVxyXG4gICAgfSksXHJcbiAgfSk7XHJcbiAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICBwcm9taXNlLnRoZW4ocHJvdmlkZXIgPT4ge1xyXG4gICAgQ29va2llcy5zZXQoXCJjdXJyZW50VXNlclwiLCBKU09OLnN0cmluZ2lmeShwcm92aWRlcikpO1xyXG4gICAgY3VycmVudFVzZXJTdWJqZWN0ID0gcHJvdmlkZXI7XHJcbiAgICByZXR1cm4gcHJvdmlkZXI7XHJcbiAgfSkudGhlbigoKSA9PiBsb2dpbihlbWFpbCwgcGFzc3dvcmQpKVxyXG4gICAgLnRoZW4oKCkgPT4gUm91dGVyLnB1c2goXCIvbW9kZWxDYWJpbmV0XCIpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcclxuICByZXR1cm4gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9sb2dvdXRgLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKCgpID0+IFJvdXRlci5wdXNoKCcvJykpXHJcbiAgICAudGhlbigoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG4iLCJpbXBvcnQgeyBhdXRoSGVhZGVyLCBoYW5kbGVSZXNwb25zZSB9IGZyb20gJy4uL19oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2VydmljZSA9IHtcclxuICBnZXRBbGwsXHJcbiAgZ2V0QnlJZCxcclxuICB1cGRhdGUsXHJcbiAgZGVsZXRlVXNlclxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0QWxsKCkge1xyXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCBoZWFkZXJzOiBhdXRoSGVhZGVyKCkgfTtcclxuICByZXR1cm4gZmV0Y2goYC91c2Vyc2AsIHJlcXVlc3RPcHRpb25zKS50aGVuKGhhbmRsZVJlc3BvbnNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QnlJZChpZCkge1xyXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCBoZWFkZXJzOiBhdXRoSGVhZGVyKCkgfTtcclxuICByZXR1cm4gZmV0Y2goYC91c2Vycy8ke2lkfWAsIHJlcXVlc3RPcHRpb25zKS50aGVuKGhhbmRsZVJlc3BvbnNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlKGlkLCBuYW1lLCBzZWNvbmRfbmFtZSwgZW1haWwsIHBob25lLCByYXRpbmcsIHBvc2l0aW9uLCB0ZWxlZ3JhbSwgdmliZXIsIHdoYXRzYXBwLCBzaXRlLCBhdmF0YXIpIHtcclxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczogYXV0aEhlYWRlcigpLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBzZWNvbmRfbmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBob25lLFxyXG4gICAgICByYXRpbmcsXHJcbiAgICAgIHBvc2l0aW9uLFxyXG4gICAgICB0ZWxlZ3JhbSxcclxuICAgICAgdmliZXIsXHJcbiAgICAgIHdoYXRzYXBwLFxyXG4gICAgICBzaXRlLFxyXG4gICAgICBhdmF0YXJcclxuICAgIH0pXHJcbiAgfTtcclxuICByZXR1cm4gZmV0Y2goYC9hcGkvYXV0aC91c2VyL3VwZGF0ZS8ke2lkfWAsIHJlcXVlc3RPcHRpb25zKS50aGVuKGhhbmRsZVJlc3BvbnNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVXNlcihpZCkge1xyXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgIGhlYWRlcnM6IGF1dGhIZWFkZXIoKVxyXG4gIH07XHJcbiAgcmV0dXJuIGZldGNoKGAvYXBpL2F1dGgvdXNlci9kZXN0cm95LyR7aWR9YCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oaGFuZGxlUmVzcG9uc2UpO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tb2RlbC0xLWMzZmE0MThlZWIxODhhMzEwYThhYmI4MjQ4ZWVlNzJmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVRDQU1BQUFDblV0MkhBQUFBQVhOU1IwSUIyY2tzZndBQUFFVlFURlJGQUFBQTUzaXY1SGV4NUhleDVIaXk1SGV4NUhXdjVIZXg1SGV4MzNDdjVIZXg0M2V4NUhheTVIaXc0M2V3NW5hejVIaXg1SGl4NUhldzVIZXg1WGF4NUhleTQzaXZzMUR0clFBQUFCZDBVazVUQUNEUDcyRGZNSkQvRVBDd2NPQ3ZVTUNnbjlCL3YwRDYrcjdRQUFBQXBVbEVRVlI0bkgyUTZSTERJQWlFTVI1ZE5mRm9qdmQvMUlLbWpmN3B6dWpnSjhnaWtVZ3QyaEFaYlIwOWVnSHdGSUE0d0JVSVJOc1BHcHM4K1FndXp5Z2NwaVZMelNxcFZSNnByVWhMRFNkVmpqZ3NEVzdrSXQ1RU81QWRkNVByeUJhOHBQSzVpZ1ZsZUVtcnlJRFAydkxHRjZYM3h5VFRvQThUOU4xcUhWbTk1OGtqek44cEEvYlNKZFAra1RyU0tYNWd6M1NvRzI3am03WXpOL3ZzLzN6TjhDTDZBSXBFQ05lb29CSDFBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCWUFBQUFUQ0FNQUFBQ2pwdzI2QUFBQUFYTlNSMElCMmNrc2Z3QUFBRHhRVEZSRkFBQUEzM0N2NUhleDVIZXg1SGV4NUhleDVYYXg1SGV5NUhleDVIV3Y1SGV4NUhpeTVIaXg0M2V4NUhleDVuYXo0M2l2NUhleDQzaXg1SGl3ZkVMbjJBQUFBQlIwVWs1VEFCQ1AzLy9QZjcvdk1OQmdvTER3VUVDUWdPQ1dFOHFzQUFBQWVFbEVRVlI0bkhXUVVRNkVJQXdGMzlzdFdoU1IxZnZmVlZEVU5kVDVta3hvQ1FEZzV5dXVJekxzZXUwUDlTb0Y5WmU2ckJqa1FFbXQ2b0JSVGtLNGRNUWtCaE9pbFJWV0ZiRlB4N2ZkczVVVEVOcjZLODlzK29LZCtYSHRtbERoMzhCQzNLUTZFRDBlY1AreGdVRGIyMXI2YXRTOFA5MitBZk11Qmlza3lQa0NBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCSUFBQUFUQ0FNQUFBQ3FUSzNBQUFBQUFYTlNSMElCMmNrc2Z3QUFBRXRRVEZSRkFBQUE1SGl3NVhheDQzaXg1SGV4NUhldzVIZXg1SGV5MzNDdjVIZXg1SGV4NTNpdjQzV3k1SFd2NUhleDVIYXk0M2V4NW5hejVIaXk1SGV4NUhpeDVIaXg1SGV4NDNpdjQzZXdhYUFLK1FBQUFCbDBVazVUQU9CL2dQK2YwTDhROE04Z1B6RGZjTEJRWUpDZ3dPOUFyK1huS1k0QUFBQ05TVVJCVkhpY1pZL2hGc0lnQ0ViVkllbVc1WnlidmYrVEpqREtGbitFZXpoOFYyT2R1ZFlFL284aDNNSUZoUWl6c09YZWk5c1VZYWhISXZZY1VWNGw0YXlZeTNsMms3bXUzNENkeUpGK05RQVFqbVZBblZoVFZZVjFPcHFNeVFOci9YUWZBc0xzbkg4UktnQ1Z2NEdjN0VWTExoYzJvNzdLRWwxRFZLMm15UzNKL3JhcnN2MVlxSGNxL0x3QllJUUZRUDNJNzNZQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVRDQU1BQUFDblV0MkhBQUFBQVhOU1IwSUIyY2tzZndBQUFEOVFURlJGQUFBQTQzaXY1SGV4NUhleDVIaXk1SGV4MzNDdjVIZXg0M2l4NUhleDQzZXg1SGV4NUhleTQzV3k1SGl4NTNpdjVIZXg1SGF5NUhpeDVIaXc0M2V4SkhjcXlBQUFBQlYwVWs1VEFFRFF6MkQvRU4rQTcyK1B2eitnSVBCd3dPQ3dTbmZZT0FBQUFIaEpSRUZVZUp4bDBGc1dnQ0FJQkZBbDBiSlNlK3gvcmFHbEpNN25QUXB6VUtwR2F6VUdwdEVNb3BGbUhhS1RPQ05sRmcrWGpJdmx0WDdkOE11MitwMG80SkNnTEVnREdpSVZ5dUJlNFZzV0UxdUtkZi9CZVBUTjMzRC9YNjNROEdROEcxNTVxekc1QlIrRkhwUUxhL3BTTFlaMmRIM25TZzgrU2dUb0EvQUd1d0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHMgZnJvbSAnLi9jYXRlZ29yaWVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTmV3UG9zdHMgZnJvbSAnLi9OZXdQb3N0cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3JpZXMoeyBjYXRlZ29yaWVzLCBuZXdQb3N0cywgZmlsdGVyUG9zdHMgfSkge1xyXG4gIGNvbnN0IFtmaWx0ZXJDYXRlZ29yeSwgc2V0RmlsdGVyQ2F0ZWdvcnldID0gdXNlU3RhdGUoJ2VzY29ydHMnKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQ2F0ZWdvcnkgPSAoY2F0ZWdvcnksIGlkKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJDYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgICBmaWx0ZXJQb3N0cyh7J2NhdGVnb3J5X2lkJzogaWR9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzLmNhdGVnb3JpZXNfYmxvY2t9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLmNhdGVnb3JpZXNfdGl0bGV9YH0+XHJcbiAgICAgICAgPHA+U0VMRUNUIEEgQ0FURUdPUlk8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jYXRlZ29yaWVzX2NvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzLmNhdGVnb3JpZXNfY29udHJvbH1gfT5cclxuICAgICAgICAgIHsoY2F0ZWdvcmllcyAmJiBjYXRlZ29yaWVzLmxlbmd0aClcclxuICAgICAgICAgICAgPyBjYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGtleT17aX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gY2hhbmdlQ2F0ZWdvcnkoYy5uYW1lLnRvTG93ZXJDYXNlKCksIGMuaWQpfSBjbGFzc05hbWU9e2Ake3MuY2F0ZWdvcnl9ICR7ZmlsdGVyQ2F0ZWdvcnkgPT09IGMubmFtZS50b0xvd2VyQ2FzZSgpID8gJ2FjdGl2ZV9idG5fYmx1ZScgOiAnJ31gfT57Yy5uYW1lLnRvVXBwZXJDYXNlKCl9PC9zcGFuPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICA6IDw+PGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWJvcmRlciB0ZXh0LWluZm9cIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTIgdGV4dC1pbmZvXCI+Tm8gY2F0ZWdvcmllcyBmcm9tIHNlcnZlci4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC8+fVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLmNhdGVnb3JpZXNfc3VidGl0bGV9YH0+XHJcbiAgICAgICAgICA8cD5ORVcgT04gVEhFIFNJVEU8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY2F0ZWdvcmllc19jYXJvdXNlbH0+XHJcbiAgICAgICAgICA8TmV3UG9zdHMgbmV3UG9zdHM9e25ld1Bvc3RzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHMgZnJvbSBcIi4vZXNjb3J0Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBNb2RlbHNGaWx0ZXIgZnJvbSBcIi4uL21vZGVscy1maWx0ZXIvTW9kZWxzRmlsdGVyXCI7XHJcbmltcG9ydCBFc2NvcnRMaXN0IGZyb20gXCIuL0VzY29ydExpc3RcIjtcclxuaW1wb3J0IEVzY29ydEdyaWQgZnJvbSBcIi4vRXNjb3J0R3JpZFwiO1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFc2NvcnRDb250ZW50KHtcclxuICBwb3N0cyxcclxuICBwYWdlc051bWJlcixcclxuICBzZWxlY3RQb3N0c1BhZ2UsXHJcbiAgYXZhaWxhYmlsaXR5LFxyXG4gIGF2YWlsYWJsZV90byxcclxuICBldGhuaWNpdHksXHJcbiAgZXllcyxcclxuICBoYWlyLFxyXG4gIGFmZmlsaWF0aW9uLFxyXG4gIGZpbHRlclBvc3RzXHJcbn0pIHtcclxuICBjb25zdCBbdmlzaWJsZUNvbXBvbmVudCwgc2V0VmlzaWJsZUNvbXBvbmVudF0gPSB1c2VTdGF0ZShcImxpc3RcIik7XHJcbiAgY29uc3QgW3Nob3dGaWx0ZXIsIHNldFNob3dGaWx0ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgJChcIi5maWx0ZXJfaXRlbXNfYmxvY2tcIikuaGlkZSgoKSA9PiB7XHJcbiAgICAgIHNldFNob3dGaWx0ZXIoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzbGlkZUZpbHRlciA9ICgpID0+IHtcclxuICAgICQoXCIuZmlsdGVyX2l0ZW1zX2Jsb2NrXCIpLnNsaWRlVG9nZ2xlKCgpID0+IHtcclxuICAgICAgc2V0U2hvd0ZpbHRlcighc2hvd0ZpbHRlcik7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VWaXNpYmxlQ29tcG9uZW50ID0gKGUpID0+IHtcclxuICAgIGUucGVyc2lzdCgpO1xyXG4gICAgJChcIi5tb2RlbHMtdmlldy1ibG9ja1wiKS5mYWRlT3V0KDMwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXRWaXNpYmxlQ29tcG9uZW50KCQoZS50YXJnZXQpLmF0dHIoXCJuYW1lXCIpKTtcclxuICAgICAgJChcIi5tb2RlbHMtdmlldy1ibG9ja1wiKS5mYWRlSW4oNzAwKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3MuZXNjb3J0X2NvbnRlbnRfYmxvY2t9IHN0eWxlPXt7IG1pbkhlaWdodDogXCIxMDB2aFwiIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLmVzY29ydF9jb250ZW50X3RpdGxlfWB9PlxyXG4gICAgICAgIDxwPk1lZXQgb3VyIHNlbGVjdGlvbiBvZiB3b3JsZHdpZGUgZXNjb3J0czwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzLmZpbHRlcl9zb3J0X2NvbnRyb2x9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZmlsdGVyX2J0bl93cmFwfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmZpbHRlcl9idG5fZ3JvdXB9PlxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtzbGlkZUZpbHRlcn0gY2xhc3NOYW1lPXtgcGwtMiAke3MuZmlsdGVyX2J0bn1gfT5cclxuICAgICAgICAgICAgICBGSUxURVJcclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17YHBsLTIgZm9ybS1jb250cm9sIGJvcmRlci0wICR7cy5zb3J0aW5nX2J0bn1gfT5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVmYXVsdFwiIGhpZGRlbj5cclxuICAgICAgICAgICAgICAgIFNPUlRJTkdcclxuXHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpY2UgLyBmcm9tIGJpZ2VyIHRvIHNtYWxsZXJcIj5cclxuICAgICAgICAgICAgICAgIHByaWNlIC8gZnJvbSBiaWdlciB0byBzbWFsbGVyXHJcblx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaWNlIC8gZnJvbSBzbWFsbGVyIHRvIGJpZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICBwcmljZSAvIGZyb20gc21hbGxlciB0byBiaWdlclxyXG5cdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXRlIGFkZGVkXCI+ZGF0ZSBhZGRlZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJudW1iZXIgb2YgcmV2aWV3c1wiPm51bWJlciBvZiByZXZpZXdzPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5maWx0ZXJfYnRuX2dyb3VwfT5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBuYW1lPVwiZ3JpZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JpZF9idG4gY2Fyb3VzZWxfbGF5b3V0X2NoYW5nZV9idG4gJHtcclxuICAgICAgICAgICAgICAgIHZpc2libGVDb21wb25lbnQgPT09IFwiZ3JpZFwiID8gXCJhY3RpdmVfYnRuX3BpbmtcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH0gJHtzLmdyaWRfYnRufWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGNoYW5nZVZpc2libGVDb21wb25lbnQoZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBHUklEXHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBuYW1lPVwibGlzdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGlzdF9idG4gY2Fyb3VzZWxfbGF5b3V0X2NoYW5nZV9idG4gJHtcclxuICAgICAgICAgICAgICAgIHZpc2libGVDb21wb25lbnQgPT09IFwibGlzdFwiID8gXCJhY3RpdmVfYnRuX3BpbmtcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH0gJHtzLmxpc3RfYnRufWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGNoYW5nZVZpc2libGVDb21wb25lbnQoZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMSVNUXHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmlsdGVyX2l0ZW1zX2Jsb2NrICR7cy5maWx0ZXJfaXRlbXNfYmxvY2t9YH0+XHJcbiAgICAgICAgPE1vZGVsc0ZpbHRlclxyXG4gICAgICAgICAgYXZhaWxhYmlsaXR5PXthdmFpbGFiaWxpdHl9XHJcbiAgICAgICAgICBhdmFpbGFibGVfdG89e2F2YWlsYWJsZV90b31cclxuICAgICAgICAgIGV0aG5pY2l0eT17ZXRobmljaXR5fVxyXG4gICAgICAgICAgYWZmaWxpYXRpb249e2FmZmlsaWF0aW9ufVxyXG4gICAgICAgICAgZmlsdGVyUG9zdHM9e2ZpbHRlclBvc3RzfVxyXG4gICAgICAgICAgZXllcz17ZXllc31cclxuICAgICAgICAgIGhhaXI9e2hhaXJ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlbHMtdmlldy1ibG9ja1wiPlxyXG4gICAgICAgIHt2aXNpYmxlQ29tcG9uZW50ID09PSBcImxpc3RcIiA/IChcclxuICAgICAgICAgIDxFc2NvcnRMaXN0XHJcbiAgICAgICAgICAgIHBvc3RzPXtwb3N0c31cclxuICAgICAgICAgICAgcGFnZXNOdW1iZXI9e3BhZ2VzTnVtYmVyfVxyXG4gICAgICAgICAgICBzZWxlY3RQb3N0c1BhZ2U9e3NlbGVjdFBvc3RzUGFnZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEVzY29ydEdyaWRcclxuICAgICAgICAgICAgICBwb3N0cz17cG9zdHN9XHJcbiAgICAgICAgICAgICAgcGFnZXNOdW1iZXI9e3BhZ2VzTnVtYmVyfVxyXG4gICAgICAgICAgICAgIHNlbGVjdFBvc3RzUGFnZT17c2VsZWN0UG9zdHNQYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcyBmcm9tIFwiLi9lc2NvcnQubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgZmF2IGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvZmF2b3JpdGUtcGluay5wbmdcIjtcclxuaW1wb3J0IGNyb3duIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvY3Jvd24tcGluay5wbmdcIjtcclxuaW1wb3J0IHN0YXIgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9zdGFyLXBpbmsucG5nXCI7XHJcbmltcG9ydCBwbGFuZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3BsYW5lLXBpbmsucG5nXCI7XHJcbmltcG9ydCBWZXJpZmllZFdpbmRvdyBmcm9tIFwiLi4vbW9kYWwtd2luZG93L1ZlcmlmaWVkV2luZG93XCI7XHJcblxyXG5pbXBvcnQgbW9kZWwgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi9ob3Jpem9udGFsL21vZGVsLTEucG5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFc2NvcnRHcmlkKHsgcG9zdHMsIHBhZ2VzTnVtYmVyLCBzZWxlY3RQb3N0c1BhZ2UgfSkge1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3BhZ2VzLCBzZXRQYWdlc10gPSB1c2VTdGF0ZShbMV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UGFnZXMoWzFdKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZXNOdW1iZXI7IGkrKykge1xyXG4gICAgICBwYWdlcy5wdXNoKDEpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBtYXhXaWR0aDogXCIxMjYwcHhcIixcclxuICAgICAgICBtYXJnaW46IFwiMWVtIGF1dG9cIixcclxuICAgICAgICBwYWRkaW5nOiBcIjAgMCA1ZW0gMFwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cG9zdHMgJiYgcG9zdHMubGVuZ3RoID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBwLTBcIj5cclxuICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MudmVydGljYWxfc2xpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnZlcnRpY2FsX3NsaWRlX2ltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwb3N0LnBob3RvX2hvcml6b250YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC5tb2RlbF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MubW9kZWxfcGhvdG9fZ3JpZH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MudmVydGljYWxfc2xpZGVfbW9kZWxfaW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3MubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5tb2RlbF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5uZXR3b3JrX3N0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3Quc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5sb2NhdGlvbn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NhdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3Muc3VtbWFyeX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5zdW1tYXJ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNhcmRfY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Zhdn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nyb3dufSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3Rhcn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BsYW5lfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy52ZXJpZmljYXRpb259YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy52ZXJpZmllZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFZlcmlmaWVkV2luZG93IGJ1dHRvbkxhYmVsPXtgVkVSSUZJRURgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Mudmlld19wcm9maWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9tb2RlbFByb2ZpbGVcIiwgcXVlcnk6IHsgaWQ6IHBvc3QuaWQgfSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biB0ZXh0LXdoaXRlXCI+VklFVyBQUk9GSUxFPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJQYWdlIG5hdmlnYXRpb24gZXhhbXBsZVwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFnZS1saW5rIGJnLWRhcmsgdGV4dC13aGl0ZSBib3JkZXItc2Vjb25kYXJ5XCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RQb3N0c1BhZ2UoY3VycmVudFBhZ2UgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgUHJldmlvdXNcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIHtwYWdlcy5tYXAoKHAsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwYWdlLWxpbmsgYmctZGFyayB0ZXh0LXdoaXRlIGJvcmRlci1zZWNvbmRhcnlcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFBvc3RzUGFnZShpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZShpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0+e2kgKyAxfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFnZS1saW5rIGJnLWRhcmsgdGV4dC13aGl0ZSBib3JkZXItc2Vjb25kYXJ5XCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCBwYWdlc051bWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UG9zdHNQYWdlKGN1cnJlbnRQYWdlICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIE5leHRcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgxIHRleHQtaW5mbyB0ZXh0LWNlbnRlciBweS01XCI+Tm8gcG9zdHMuLi48L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIDwvZGl2ID5cclxuICApO1xyXG59XHJcblxyXG4vLyBhYm91dDogXCJhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0XCJcclxuLy8gYWNjb3VudF9uYW1lOiBcImFjY291bnRfbmFtZWFjY291bnRfbmFtZWFjY291bnRfbmFtZWFjY291bnRfbmFtZVwiXHJcbi8vIGFmZmlsaWF0aW9uX2lkOiBudWxsXHJcbi8vIGFnZTogMjJcclxuLy8gYXZhaWxhYmxlX3RvX2RhdGU6IG51bGxcclxuLy8gY2F0ZWdvcnlfaWQ6IG51bGxcclxuLy8gY2l0eV9pZDogbnVsbFxyXG4vLyBjcmVhdGVkX2F0OiBcIjIwMjAtMDYtMTlUMTA6MzU6MDAuMDAwMDAwWlwiXHJcbi8vIGV0aG5pY2l0eV9pZDogbnVsbFxyXG4vLyBleWVfaWQ6IG51bGxcclxuLy8gZ2VuZGVyOiBcIm1hblwiXHJcbi8vIGhhaXJfaWQ6IG51bGxcclxuLy8gaGVpZ2h0OiBcIjIzNVwiXHJcbi8vIGlkOiAxXHJcbi8vIGlzX21vcmVfcGhvdG9zOiAwXHJcbi8vIGlzX3Bob3Rvc192aXA6IDBcclxuLy8gaXNfcHVibGlzaGVkOiAwXHJcbi8vIGlzX3ZlcmlmeTogMFxyXG4vLyBpc192aXA6IDBcclxuLy8gbW9kZWxfbmFtZTogXCJTaGx1aGFcIlxyXG4vLyBwaG90bzogbnVsbFxyXG4vLyBzZWNvbmRfbmFtZTogXCJzZWNvbmRcIlxyXG4vLyBzdGF0ZV9pZDogbnVsbFxyXG4vLyBzdGF0dXM6IFwib3RoZXJcIlxyXG4vLyBzdW1tYXJ5OiBcInN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5XCJcclxuLy8gdXBkYXRlZF9hdDogXCIyMDIwLTA2LTIyVDA2OjM0OjEyLjAwMDAwMFpcIlxyXG4vLyB1c2VyX2lkOiBudWxsXHJcbi8vIHZpZGVvX2xpbms6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1UUWdHRndWV0QyNCZsaXN0PVJELTlSbmc4T3VNMTAmaW5kZXg9MlwiXHJcbi8vIHZpcF90b19kYXRlOiBudWxsXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLy8gaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIlxyXG5pbXBvcnQgcyBmcm9tICcuL2VzY29ydC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IGZhdiBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvZmF2b3JpdGUtcGluay5wbmcnXHJcbmltcG9ydCBwbGFuZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvcGxhbmUtcGluay5wbmcnXHJcbmltcG9ydCBzdGFyIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9zdGFyLXBpbmsucG5nJ1xyXG5pbXBvcnQgY3Jvd24gZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL2Nyb3duLXBpbmsucG5nJ1xyXG5cclxuaW1wb3J0IG1vZGVsIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi9ob3Jpem9udGFsL21vZGVsLTEucG5nJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXNjb3J0TGlzdCh7IHBvc3RzLCBwYWdlc051bWJlciwgc2VsZWN0UG9zdHNQYWdlIH0pIHtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtwYWdlcywgc2V0UGFnZXNdID0gdXNlU3RhdGUoWzFdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFBhZ2VzKFsxXSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VzTnVtYmVyOyBpKyspIHtcclxuICAgICAgcGFnZXMucHVzaCgxKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogMTAwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDgwMDAsXHJcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTAyNSxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA3NjksXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgaW5pdGlhbFNsaWRlOiAyXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgIG1heFdpZHRoOiAnMTI2MHB4JyxcclxuICAgICAgcGFkZGluZzogJzEuNWVtIDAgNWVtIDAnLFxyXG4gICAgICBtYXJnaW46ICcwIGF1dG8nXHJcbiAgICB9fT5cclxuICAgICAgeyhwb3N0cyAmJiBwb3N0cy5sZW5ndGgpID8gPD5cclxuICAgICAgICB7LyogPFNsaWRlciB7Li4uc2V0dGluZ3N9ID4gKi99XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7cy5lc2NvcnRfbGlzdH1gfT5cclxuICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT17cy5zbGlkZX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17e3BhdGhuYW1lOiBcIi9tb2RlbFByb2ZpbGVcIiwgcXVlcnk6IHtpZDogcG9zdC5pZH19fT48YT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1vZGVsX3Bob3RvfT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QucGhvdG9fdmVydGljYWx9IGFsdD17cG9zdC5tb2RlbF9uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5tb2RlbF9pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW9kZWxfaW5mb190aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57cG9zdC5tb2RlbF9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0+e3Bvc3Quc3RhdHVzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2lnbnNfZ3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Zhdn0gYWx0PVwibW9kZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nyb3dufSBhbHQ9XCJtb2RlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2lnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3Rhcn0gYWx0PVwibW9kZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BsYW5lfSBhbHQ9XCJtb2RlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgey8qIDwvU2xpZGVyPiAqL31cclxuICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJQYWdlIG5hdmlnYXRpb24gZXhhbXBsZVwiIGNsYXNzTmFtZT1cInB0LTRcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2UtbGluayBiZy1kYXJrIHRleHQtd2hpdGUgYm9yZGVyLXNlY29uZGFyeVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFBvc3RzUGFnZShjdXJyZW50UGFnZSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICB7cGFnZXMubWFwKChwLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwicGFnZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwYWdlLWxpbmsgYmctZGFyayB0ZXh0LXdoaXRlIGJvcmRlci1zZWNvbmRhcnlcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFBvc3RzUGFnZShpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICB9fT57aSArIDF9PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFnZS1saW5rIGJnLWRhcmsgdGV4dC13aGl0ZSBib3JkZXItc2Vjb25kYXJ5XCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCBwYWdlc051bWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFBvc3RzUGFnZShjdXJyZW50UGFnZSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8Lz5cclxuICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwiaDEgdGV4dC1pbmZvIHRleHQtY2VudGVyIHB5LTVcIj5ObyBwb3N0cy4uLjwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuLy8gYWJvdXQ6IFwiYWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dFwiXHJcbiAgICAvLyBhY2NvdW50X25hbWU6IFwiYWNjb3VudF9uYW1lYWNjb3VudF9uYW1lYWNjb3VudF9uYW1lYWNjb3VudF9uYW1lXCJcclxuICAgIC8vIGFmZmlsaWF0aW9uX2lkOiBudWxsXHJcbiAgICAvLyBhZ2U6IDIyXHJcbiAgICAvLyBhdmFpbGFibGVfdG9fZGF0ZTogbnVsbFxyXG4gICAgLy8gY2F0ZWdvcnlfaWQ6IG51bGxcclxuICAgIC8vIGNpdHlfaWQ6IG51bGxcclxuICAgIC8vIGNyZWF0ZWRfYXQ6IFwiMjAyMC0wNi0xOVQxMDozNTowMC4wMDAwMDBaXCJcclxuICAgIC8vIGV0aG5pY2l0eV9pZDogbnVsbFxyXG4gICAgLy8gZXllX2lkOiBudWxsXHJcbiAgICAvLyBnZW5kZXI6IFwibWFuXCJcclxuICAgIC8vIGhhaXJfaWQ6IG51bGxcclxuICAgIC8vIGhlaWdodDogXCIyMzVcIlxyXG4gICAgLy8gaWQ6IDFcclxuICAgIC8vIGlzX21vcmVfcGhvdG9zOiAwXHJcbiAgICAvLyBpc19waG90b3NfdmlwOiAwXHJcbiAgICAvLyBpc19wdWJsaXNoZWQ6IDBcclxuICAgIC8vIGlzX3ZlcmlmeTogMFxyXG4gICAgLy8gaXNfdmlwOiAwXHJcbiAgICAvLyBtb2RlbF9uYW1lOiBcIlNobHVoYVwiXHJcbiAgICAvLyBwaG90bzogbnVsbFxyXG4gICAgLy8gc2Vjb25kX25hbWU6IFwic2Vjb25kXCJcclxuICAgIC8vIHN0YXRlX2lkOiBudWxsXHJcbiAgICAvLyBzdGF0dXM6IFwib3RoZXJcIlxyXG4gICAgLy8gc3VtbWFyeTogXCJzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeVwiXHJcbiAgICAvLyB1cGRhdGVkX2F0OiBcIjIwMjAtMDYtMjJUMDY6MzQ6MTIuMDAwMDAwWlwiXHJcbiAgICAvLyB1c2VyX2lkOiBudWxsXHJcbiAgICAvLyB2aWRlb19saW5rOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VFFnR0Z3VldEMjQmbGlzdD1SRC05Um5nOE91TTEwJmluZGV4PTJcIlxyXG4gICAgLy8gdmlwX3RvX2RhdGU6IG51bGwiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzIGZyb20gXCIuL2xvY2F0aW9uLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvY2F0aW9uKHsgc3RhdGVzIH0pIHtcclxuICBjb25zdCBbY3VycmVudExvY2F0aW9uLCBzZXRDdXJyZW50TG9jYXRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBjaGFuZ2VMb2NhdGlvbiA9IHN0YXRlSWQgPT4ge1xyXG4gICAgc2V0Q3VycmVudExvY2F0aW9uKHN0YXRlSWQpO1xyXG4gICAgc3RhdGVzLmZvckVhY2goc3RhdGUgPT4ge1xyXG4gICAgICBpZiAoK3N0YXRlLmlkID09PSArc3RhdGVJZCkge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIHBhdGhuYW1lOiBgL2xvY2F0aW9uYCxcclxuICAgICAgICAgIHF1ZXJ5OiB7IHN0YXRlOiBzdGF0ZS5uYW1lLCBpZDogc3RhdGUuaWQgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3MubG9jYXRpb25fd3JhcHBlcn0+XHJcbiAgICAgIHtzdGF0ZXMubGVuZ3RoID8gPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLmxvY2F0b25fYmxvY2tfdGl0bGV9YH0+XHJcbiAgICAgICAgICA8cD5TRUxFQ1QgQSBMT0NBVElPTiBCRUxPVzwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5sb2NhdGlvbl9ibG9ja19zZWxlY3R9PlxyXG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VMb2NhdGlvbihlLnRhcmdldC52YWx1ZSl9ID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlZmF1bHRcIiBoaWRkZW4+TG9jYXRpb248L29wdGlvbj5cclxuICAgICAgICAgICAge3N0YXRlcy5tYXAoKHN0YXRlLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtzdGF0ZS5pZH0+e3N0YXRlLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubG9jYXRpb25fYmxvY2tfbGlzdH0+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtzdGF0ZXMubWFwKChzdGF0ZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IGNoYW5nZUxvY2F0aW9uKHN0YXRlLmlkKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIHRleHQtd2hpdGUgbG9jYXRpb25faXRlbWB9PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjdXJyZW50TG9jYXRpb24gPT09IHN0YXRlID8gJ2FjdGl2ZV9idG5fYmx1ZScgOiAnJ30+e3N0YXRlLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+IDogbnVsbH1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHMgZnJvbSBcIi4vY2F0ZWdvcmllcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2ltcGxlU2xpZGVyKHsgbmV3UG9zdHMgfSkge1xyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogMTAwMDAsXHJcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTAyNSxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA3NjksXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgaW5pdGlhbFNsaWRlOiAyXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGZhZGU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICBtYXhXaWR0aDogJzEyNjBweCdcclxuICAgIH19PlxyXG4gICAgICA8U2xpZGVyXHJcbiAgICAgICAgey4uLnNldHRpbmdzfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBtYXhXaWR0aDogXCIxMjYwcHhcIixcclxuICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge25ld1Bvc3RzICYmIG5ld1Bvc3RzLmxlbmd0aFxyXG4gICAgICAgICAgPyBuZXdQb3N0cy5tYXAoKHBvc3QsIGkpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNsaWRlfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL21vZGVsUHJvZmlsZVwiLCBxdWVyeTogeyBpZDogcG9zdC5pZCB9IH19PlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5waG90b192ZXJ0aWNhbH0gYWx0PVwibW9kZWxcIiBjbGFzc05hbWU9XCJ3LTEwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0Lm1vZGVsX25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSkgOiBudWxsfVxyXG4gICAgICA8L1NsaWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcyBmcm9tICcuL3NlYXJjaC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzLnNlYXJjaF9ibG9ja30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNlYXJjaF9ibG9ja19jb250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLnNlYXJjaF9pbnB1dF9sYWJlbH1gfT5TRUFSQ0g8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zZWFyY2hfaW5wdXR9PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLmFkZF9wb3N0X2J0bn1gfT5cclxuICAgICAgICAgIDxzcGFuPlBPU1QgQUQ8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXRlZ29yaWVzX2Jsb2NrXCI6IFwiY2F0ZWdvcmllc19jYXRlZ29yaWVzX2Jsb2NrX18xNEFWX1wiLFxuXHRcImNhdGVnb3JpZXNfdGl0bGVcIjogXCJjYXRlZ29yaWVzX2NhdGVnb3JpZXNfdGl0bGVfXzNLeU9YXCIsXG5cdFwiY2F0ZWdvcmllc19jb250ZW50XCI6IFwiY2F0ZWdvcmllc19jYXRlZ29yaWVzX2NvbnRlbnRfXzJ2UHV0XCIsXG5cdFwiY2F0ZWdvcmllc19jb250cm9sXCI6IFwiY2F0ZWdvcmllc19jYXRlZ29yaWVzX2NvbnRyb2xfXzJncGNlXCIsXG5cdFwiY2F0ZWdvcnlcIjogXCJjYXRlZ29yaWVzX2NhdGVnb3J5X18zUkdqd1wiLFxuXHRcImNhdGVnb3JpZXNfc3VidGl0bGVcIjogXCJjYXRlZ29yaWVzX2NhdGVnb3JpZXNfc3VidGl0bGVfXzNZbVhhXCIsXG5cdFwic2xpZGVcIjogXCJjYXRlZ29yaWVzX3NsaWRlX18yTE5qdVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZXNjb3J0X2NvbnRlbnRfdGl0bGVcIjogXCJlc2NvcnRfZXNjb3J0X2NvbnRlbnRfdGl0bGVfXzJjVlc2XCIsXG5cdFwiZmlsdGVyX3NvcnRfY29udHJvbFwiOiBcImVzY29ydF9maWx0ZXJfc29ydF9jb250cm9sX18yeUlUaVwiLFxuXHRcImZpbHRlcl9idG5fd3JhcFwiOiBcImVzY29ydF9maWx0ZXJfYnRuX3dyYXBfXzFzQUNkXCIsXG5cdFwiZmlsdGVyX2J0bl9ncm91cFwiOiBcImVzY29ydF9maWx0ZXJfYnRuX2dyb3VwX194LUZTTVwiLFxuXHRcInNvcnRpbmdfYnRuXCI6IFwiZXNjb3J0X3NvcnRpbmdfYnRuX18zOGpoM1wiLFxuXHRcImZpbHRlcl9pdGVtc19ibG9ja1wiOiBcImVzY29ydF9maWx0ZXJfaXRlbXNfYmxvY2tfXzNNcWEzXCIsXG5cdFwiZXNjb3J0X2xpc3RcIjogXCJlc2NvcnRfZXNjb3J0X2xpc3RfXzFONTBaXCIsXG5cdFwic2xpZGVcIjogXCJlc2NvcnRfc2xpZGVfX3FuYklqXCIsXG5cdFwibW9kZWxfcGhvdG9cIjogXCJlc2NvcnRfbW9kZWxfcGhvdG9fXzN0eWVEXCIsXG5cdFwibW9kZWxfaW5mb1wiOiBcImVzY29ydF9tb2RlbF9pbmZvX19pRjJBWlwiLFxuXHRcIm1vZGVsX2luZm9fdGl0bGVcIjogXCJlc2NvcnRfbW9kZWxfaW5mb190aXRsZV9fM05ZbVhcIixcblx0XCJzaWduc19ncm91cFwiOiBcImVzY29ydF9zaWduc19ncm91cF9fZGV0d0VcIixcblx0XCJ2ZXJ0aWNhbF9zbGlkZVwiOiBcImVzY29ydF92ZXJ0aWNhbF9zbGlkZV9fMXp5QWFcIixcblx0XCJ2ZXJ0aWNhbF9zbGlkZV9pbWFnZVwiOiBcImVzY29ydF92ZXJ0aWNhbF9zbGlkZV9pbWFnZV9fMXlGbEhcIixcblx0XCJ2ZXJ0aWNhbF9zbGlkZV9tb2RlbF9pbmZvXCI6IFwiZXNjb3J0X3ZlcnRpY2FsX3NsaWRlX21vZGVsX2luZm9fXzNiaW9vXCIsXG5cdFwibmFtZVwiOiBcImVzY29ydF9uYW1lX18ydlZ5V1wiLFxuXHRcIm5ldHdvcmtfc3RhdHVzXCI6IFwiZXNjb3J0X25ldHdvcmtfc3RhdHVzX18xWWNBdVwiLFxuXHRcImxvY2F0aW9uXCI6IFwiZXNjb3J0X2xvY2F0aW9uX18xd1M0bFwiLFxuXHRcInN1bW1hcnlcIjogXCJlc2NvcnRfc3VtbWFyeV9fT2VUa2pcIixcblx0XCJ2ZXJpZmljYXRpb25cIjogXCJlc2NvcnRfdmVyaWZpY2F0aW9uX18yOWo4NlwiLFxuXHRcImNhcmRfY29udHJvbFwiOiBcImVzY29ydF9jYXJkX2NvbnRyb2xfXzFkV1N2XCIsXG5cdFwidmVyaWZpZWRcIjogXCJlc2NvcnRfdmVyaWZpZWRfXzFBdE1vXCIsXG5cdFwidmlld19wcm9maWxlXCI6IFwiZXNjb3J0X3ZpZXdfcHJvZmlsZV9felZBZzZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvY2F0aW9uX3dyYXBwZXJcIjogXCJsb2NhdGlvbl9sb2NhdGlvbl93cmFwcGVyX18xYU9MMFwiLFxuXHRcImxvY2F0b25fYmxvY2tfdGl0bGVcIjogXCJsb2NhdGlvbl9sb2NhdG9uX2Jsb2NrX3RpdGxlX19sWUR6S1wiLFxuXHRcImxvY2F0aW9uX2Jsb2NrX3NlbGVjdFwiOiBcImxvY2F0aW9uX2xvY2F0aW9uX2Jsb2NrX3NlbGVjdF9fWTFhV2lcIixcblx0XCJsb2NhdGlvbl9ibG9ja19saXN0XCI6IFwibG9jYXRpb25fbG9jYXRpb25fYmxvY2tfbGlzdF9fMUlqYllcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaF9ibG9ja1wiOiBcInNlYXJjaF9zZWFyY2hfYmxvY2tfXzIxc01TXCIsXG5cdFwic2VhcmNoX2Jsb2NrX2NvbnRlbnRcIjogXCJzZWFyY2hfc2VhcmNoX2Jsb2NrX2NvbnRlbnRfXzFadkxsXCIsXG5cdFwic2VhcmNoX2lucHV0X2xhYmVsXCI6IFwic2VhcmNoX3NlYXJjaF9pbnB1dF9sYWJlbF9fMXVKcHFcIixcblx0XCJzZWFyY2hfaW5wdXRcIjogXCJzZWFyY2hfc2VhcmNoX2lucHV0X18yWE1sc1wiLFxuXHRcImFkZF9wb3N0X2J0blwiOiBcInNlYXJjaF9hZGRfcG9zdF9idG5fXzNjRThiXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIEZvcm0gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IFZlcmlmaWVkV2luZG93ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgYnV0dG9uTGFiZWwsXHJcbiAgICBjbGFzc05hbWVcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldE1vZGFsKCFtb2RhbCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Rm9ybSBpbmxpbmUgb25TdWJtaXQ9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJcIiBjbGFzc05hbWU9e2BwLTAgdGV4dC13aGl0ZWB9IG9uQ2xpY2s9e3RvZ2dsZX0+e2J1dHRvbkxhYmVsfTwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICA8TW9kYWwgaXNPcGVuPXttb2RhbH0gdG9nZ2xlPXt0b2dnbGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0b2dnbGV9IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdBdWRpb3dpZGUsIGN1cnNpdmUnIH19IGNsYXNzTmFtZT1cImJnLWRhcmsgdGV4dC1pbmZvIGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeVwiID5WaWJlIENpdHkgVmVyaWZpZWQ8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbEJvZHkgY2xhc3NOYW1lPVwiYmctZGFyayB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8cD5JbiBvcmRlciBmb3IgYW4gRXJvcyBhZHZlcnRpc2VyIHRvIGJlIGVsaWdpYmxlIHRvIGhhdmUgdGhlIFZlcmlmaWVkIHNlYWwgYWZmaXhlZCB0byB0aGVpciBhZHZlcnRpc2VtZW50IG9yIHRvIGJlIHBsYWNlZCBpbiBFcm9zJyBWZXJpZmllZCBjYXRlZ29yeSwgdGhlIEVyb3MgR3VpZGUgbXVzdCBoYXZlIHJlY2VpdmVkIHRhbmdpYmxlIGluZm9ybWF0aW9uIHRoYXQgdGhlIGluZGl2aWR1YWwgYXBwZWFyaW5nIGluIHRoZSBwaG90b2dyYXBocyBvbiBhbnkgc3BlY2lmaWMgYWR2ZXJ0aXNlbWVudCBpbnRlbmRlZCB0byBiZSBhZHZlcnRpc2VkIG9uIHRoZSBFcm9zIEd1aWRlIGlzIGFuIGluZGl2aWR1YWwgcHJvdmlkaW5nIGFkdWx0IGNvbXBhbmlvbnNoaXAuIFN1Y2ggcHJvb2YgY291bGQgaW5jbHVkZSBjb21wYXJpbmcgdGhlIHBpY3R1cmVzIHN1Ym1pdHRlZCB0byB0aGUgRXJvcyBHdWlkZSBvbiBhbiBhZHZlcnRpc2VtZW50IHdpdGggZWl0aGVyIGdvdmVybm1lbnQgaXNzdWVkIElE4oCZcyBvdGhlciBwaG90b2dyYXBoaWMgZXZpZGVuY2UuPC9wPlxyXG4gICAgICAgICAgPHA+SG93ZXZlciwgcGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIEVyb3MgR3VpZGUgY2Fubm90IGFuZCBkb2VzIG5vdCBtYWtlIGFueSBndWFyYW50ZWVzIG9yIHdhcnJhbnRpZXMgdGhhdCBlaXRoZXIgKGEpIHRoZSBhZHZlcnRpc2VyIGluIHRoZSBwaWN0dXJlcyBvbiBhbnkgcGFydGljdWxhciBhZCB3aWxsIGJlIHRoZSBzYW1lIGluZGl2aWR1YWwgd2hvIHNob3dzIHVwIGZvciBhbnkgZGF0ZSBhcnJhbmdlZCBiZXR3ZWVuIGFuIGFkdmVydGlzZXIgYW5kIHlvdXJzZWxmLCAoYikgdGhhdCBhbnkgb2YgdGhlIHRleHQsIGluY2x1ZGluZyB0aGUgbmFtZSBvZiB0aGUgYWR2ZXJ0aXNlciwgb3Igc3RhdHMgdGhhdCBhcHBlYXJzIG9uIGFuIGFkdmVydGlzZW1lbnQsIGlzIGFjY3VyYXRlIG9yIHRydXRoZnVsLiBGaW5hbGx5LCB0aGUgdGVybSDigJxWZXJpZmllZOKAnSBkb2VzIG5vdCBtZWFuIHRoYXQgRXJvcyBHdWlkZSBoYXMgcmV2aWV3ZWQgb3IgY29uZmlybWVkIGFueSBsaWNlbnN1cmUgb3IgcGVybWl0cyBpc3N1ZWQgdG8gdGhlIGFkdmVydGlzZXIuPC9wPlxyXG4gICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVyaWZpZWRXaW5kb3c7XHJcblxyXG5cclxuTW9kYWwucHJvcFR5cGVzID0ge1xyXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjZW50ZXJlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0b2dnbGU6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHJvbGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFiZWxsZWRCeTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBrZXlib2FyZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgYmFja2Ryb3A6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBQcm9wVHlwZXMub25lT2YoWydzdGF0aWMnXSlcclxuICBdKSxcclxuICBzY3JvbGxhYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uT3BlbmVkOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkNsb3NlZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHdyYXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbW9kYWxDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgYmFja2Ryb3BDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY29udGVudENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBmYWRlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjc3NNb2R1bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgekluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIF0pLFxyXG4gIHVubW91bnRPbkNsb3NlOiBQcm9wVHlwZXMuYm9vbCxcclxuICByZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IFByb3BUeXBlcy5ib29sXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL2Zvcm0ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGVsc0ZpbHRlcih7XHJcbiAgYXZhaWxhYmlsaXR5LFxyXG4gIGF2YWlsYWJsZV90byxcclxuICBldGhuaWNpdHksXHJcbiAgYWZmaWxpYXRpb24sXHJcbiAgZXllcyxcclxuICBoYWlyLFxyXG4gIGZpbHRlclBvc3RzXHJcbn0pIHtcclxuICBjb25zdCBbc2V4LCBzZXRTZXhdID0gdXNlU3RhdGUoWydnZW5kZXInLCAnJ10pO1xyXG4gIGNvbnN0IFthZ2VGcm9tLCBzZXRBZ2VGcm9tXSA9IHVzZVN0YXRlKFsnYWdlRnJvbScsIDBdKTtcclxuICBjb25zdCBbYWdlVG8sIHNldEFnZVRvXSA9IHVzZVN0YXRlKFsnYWdlVG8nLCAwXSk7XHJcbiAgY29uc3QgW3N0YXRlRXRobmljaXR5LCBzZXRFdGhuaWNpdHldID0gdXNlU3RhdGUoWydldGhuaWNpdHlfaWQnLCAnJ10pO1xyXG4gIGNvbnN0IFtzdGF0ZUhhaXIsIHNldEhhaXJdID0gdXNlU3RhdGUoWydoYWlyX2lkJywgJyddKTtcclxuICBjb25zdCBbc3RhdGVFeWUsIHNldEV5ZV0gPSB1c2VTdGF0ZShbJ2V5ZV9pZCcsICcnXSk7XHJcbiAgY29uc3QgW3N0YXRlQWZmaWxpYXRpb24sIHNldEFmZmlsaWF0aW9uXSA9IHVzZVN0YXRlKFsnYWZmaWxpYXRpb25faWQnLCAnJ10pO1xyXG4gIGNvbnN0IFtzdGF0ZUF2YWlsYWJsZVRvLCBzZXRBdmFpbGFibGVUb10gPSB1c2VTdGF0ZShbJ2F2YWlsYWJsZXRvX2lkcycsIFtdXSk7XHJcbiAgY29uc3QgW3N0YXRlQXZhaWxhYmlsaXR5LCBzZXRBdmFpbGFiaWxpdHldID0gdXNlU3RhdGUoWydhdmFpbGFiaWxpdHlfaWRzJywgW11dKTtcclxuXHJcbiAgY29uc3QgYXBwbHlGaWx0ZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZmlsdGVySXRlbXMgPSB7fTtcclxuICAgIG5ldyBQcm9taXNlKHJlcyA9PiB7XHJcbiAgICAgIFtzZXgsIHN0YXRlRXRobmljaXR5LCBzdGF0ZUhhaXIsIHN0YXRlRXllLCBzdGF0ZUFmZmlsaWF0aW9uLCBzdGF0ZUF2YWlsYWJsZVRvLCBzdGF0ZUF2YWlsYWJpbGl0eV0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbVsxXS50b1N0cmluZygpLmxlbmd0aCkge1xyXG4gICAgICAgICAgZmlsdGVySXRlbXNbaXRlbVswXV0gPSBpdGVtWzFdXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmVzKCk7XHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgZmlsdGVyUG9zdHMoZmlsdGVySXRlbXMpO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17YXBwbHlGaWx0ZXJ9IGNsYXNzTmFtZT17cy5maWx0ZXJfZm9ybX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNleF9ibG9ja30+XHJcbiAgICAgICAgPGxlZ2VuZD5HZW5kZXI8L2xlZ2VuZD5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsfT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgdmFsdWU9XCJmZW1hbGVcIlxyXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICBuYW1lPVwic2V4XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZXgoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jaGVja21hcmt9Pjwvc3Bhbj5cclxuXHRcdFx0XHRcdEZlbWFsZVxyXG5cdFx0XHRcdDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgIHZhbHVlPVwibWFsZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgIG5hbWU9XCJzZXhcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNleChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNoZWNrbWFya30+PC9zcGFuPlxyXG5cdFx0XHRcdFx0TWFsZVxyXG5cdFx0XHRcdDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7cy5hZ2VfYmxvY2t9IGZvcm0tZ3JvdXBgfT5cclxuICAgICAgICA8bGVnZW5kPkFnZTwvbGVnZW5kPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgbWluPVwiMThcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImZyb21cIlxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEFnZUZyb20oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwidG9cIlxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEFnZVRvKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7cy5ldGhuaWNpdHlfYmxvY2t9IGZvcm0tZ3JvdXBgfT5cclxuICAgICAgICA8bGVnZW5kPkV0aG5pY2l0eTo8L2xlZ2VuZD5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZHJvcGRvd25cIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFdGhuaWNpdHkoWydldGhuaWNpdHlfaWQnLCBlLnRhcmdldC52YWx1ZV0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gaGlkZGVuIHZhbHVlPVwiZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAtLSBzZWxlY3Qgb25lIC0tXHJcblx0XHRcdFx0XHQ8L29wdGlvbj5cclxuICAgICAgICAgIHtldGhuaWNpdHkubGVuZ3RoID8gZXRobmljaXR5Lm1hcChlID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2UuaWR9IHZhbHVlPXtlLmlkfT57ZS52YWx1ZX08L29wdGlvbj5cclxuICAgICAgICAgICkpIDogbnVsbH1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhhaXJfYmxvY2t9PlxyXG4gICAgICAgIDxsZWdlbmQ+SGFpcjwvbGVnZW5kPlxyXG4gICAgICAgIHtoYWlyLmxlbmd0aCA/XHJcbiAgICAgICAgICBoYWlyLm1hcChoID0+IChcclxuICAgICAgICAgICAgPGxhYmVsIGtleT17aC5pZH0gY2xhc3NOYW1lPXtzLmxhYmVsfT5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2guaWR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImhhaXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEhhaXIoWydoYWlyX2lkJywgZS50YXJnZXQudmFsdWVdKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jaGVja21hcmt9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICB7aC52YWx1ZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICkpIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5leWVfYmxvY2t9PlxyXG4gICAgICAgIDxsZWdlbmQ+RXllPC9sZWdlbmQ+XHJcbiAgICAgICAge2V5ZXMubGVuZ3RoID9cclxuICAgICAgICAgIGV5ZXMubWFwKGUgPT4gKFxyXG4gICAgICAgICAgICA8bGFiZWwga2V5PXtlLmlkfSBjbGFzc05hbWU9e3MubGFiZWx9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZS5pZH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZXllXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRFeWUoWydleWVfaWQnLCBlLnRhcmdldC52YWx1ZV0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNoZWNrbWFya30+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtlLnZhbHVlfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKSkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmFmZmlsaWF0aW9uX2Jsb2NrfT5cclxuICAgICAgICA8bGVnZW5kPkFmZmlsaWF0aW9uPC9sZWdlbmQ+XHJcbiAgICAgICAge2FmZmlsaWF0aW9uLmxlbmd0aCA/XHJcbiAgICAgICAgICBhZmZpbGlhdGlvbi5tYXAoYSA9PiAoXHJcbiAgICAgICAgICAgIDxsYWJlbCBrZXk9e2EuaWR9IGNsYXNzTmFtZT17cy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXthLmlkfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJhZmZpbGlhdGlvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0QWZmaWxpYXRpb24oWydhZmZpbGlhdGlvbl9pZCcsIGUudGFyZ2V0LnZhbHVlXSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY2hlY2ttYXJrfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAge2EudmFsdWV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYXZhaWxhYmxlVG9fYmxvY2t9PlxyXG4gICAgICAgIDxsZWdlbmQ+IEF2YWlsYWJsZSBUbzo8L2xlZ2VuZD5cclxuICAgICAgICB7YXZhaWxhYmxlX3RvLmxlbmd0aCA/XHJcbiAgICAgICAgICBhdmFpbGFibGVfdG8ubWFwKGEgPT4gKFxyXG4gICAgICAgICAgICA8bGFiZWwga2V5PXthLmlkfSBjbGFzc05hbWU9e3MubGFiZWx9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2EuaWR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBdmFpbGFibGVUbyhbXHJcbiAgICAgICAgICAgICAgICAgICAgICAnYXZhaWxhYmxldG9faWRzJyxcclxuICAgICAgICAgICAgICAgICAgICAgIFsuLi5zdGF0ZUF2YWlsYWJsZVRvWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWVdXHJcbiAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jaGVja3NpZ259Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICB7YS52YWx1ZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICkpIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5hdmFpbGFiaWxpdHlfYmxvY2t9PlxyXG4gICAgICAgIDxsZWdlbmQ+QXZhaWxhYmlsaXR5OjwvbGVnZW5kPlxyXG4gICAgICAgIHthdmFpbGFiaWxpdHkubGVuZ3RoID9cclxuICAgICAgICAgIGF2YWlsYWJpbGl0eS5tYXAoYSA9PiAoXHJcbiAgICAgICAgICAgIDxsYWJlbCBrZXk9e2EuaWR9IGNsYXNzTmFtZT17cy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YS5pZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEF2YWlsYWJpbGl0eShbXHJcbiAgICAgICAgICAgICAgICAgICAgICAnYXZhaWxhYmlsaXR5X2lkcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBbLi4uc3RhdGVBdmFpbGFiaWxpdHlbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZV1cclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNoZWNrc2lnbn0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHthLnZhbHVlfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKSkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17YHJvdW5kZWQgYm9yZGVyLTAgJHtzLmJ0bl9zdWJtaXR9YH0+XHJcbiAgICAgICAgU2hvd1xyXG5cdFx0XHQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZpbHRlcl9mb3JtXCI6IFwiZm9ybV9maWx0ZXJfZm9ybV9fMjhDRU5cIixcblx0XCJzZXhfYmxvY2tcIjogXCJmb3JtX3NleF9ibG9ja19fM0llQ2JcIixcblx0XCJhZ2VfYmxvY2tcIjogXCJmb3JtX2FnZV9ibG9ja19fM1FFbVNcIixcblx0XCJldGhuaWNpdHlfYmxvY2tcIjogXCJmb3JtX2V0aG5pY2l0eV9ibG9ja19fMmxXNTdcIixcblx0XCJoYWlyX2Jsb2NrXCI6IFwiZm9ybV9oYWlyX2Jsb2NrX18xaGZHNVwiLFxuXHRcImV5ZV9ibG9ja1wiOiBcImZvcm1fZXllX2Jsb2NrX19SaVlwWFwiLFxuXHRcImFmZmlsaWF0aW9uX2Jsb2NrXCI6IFwiZm9ybV9hZmZpbGlhdGlvbl9ibG9ja19fMTRYNmJcIixcblx0XCJhdmFpbGFibGVUb19ibG9ja1wiOiBcImZvcm1fYXZhaWxhYmxlVG9fYmxvY2tfXzJpak5CXCIsXG5cdFwiYXZhaWxhYmlsaXR5X2Jsb2NrXCI6IFwiZm9ybV9hdmFpbGFiaWxpdHlfYmxvY2tfXzF6Vm1UXCIsXG5cdFwiYnRuX3N1Ym1pdFwiOiBcImZvcm1fYnRuX3N1Ym1pdF9fM1FLWVpcIixcblx0XCJsYWJlbFwiOiBcImZvcm1fbGFiZWxfXzI0Z1RZXCIsXG5cdFwiY2hlY2ttYXJrXCI6IFwiZm9ybV9jaGVja21hcmtfXzNLS2xmXCIsXG5cdFwiY2hlY2tzaWduXCI6IFwiZm9ybV9jaGVja3NpZ25fXzJlZjRSXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2NhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lLXBhZ2UvTG9jYXRpb25cIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lLXBhZ2UvU2VhcmNoXCI7XHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUtcGFnZS9DYXRlZ29yaWVzXCI7XHJcbmltcG9ydCBFc2NvcnRDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUtcGFnZS9Fc2NvcnRDb250ZW50XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuXHRnZXRBbGxQb3N0cyxcclxuXHRnZXRMb2NhdGlvbnNJbmZvLFxyXG5cdGdldE5ld1Bvc3RzLFxyXG5cdHNlbGVjdFBvc3RzUGFnZSxcclxuXHRmaWx0ZXJQb3N0cyxcclxufSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9hY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBIb21lKHtcclxuXHRjYXRlZ29yaWVzLFxyXG5cdGdldEFsbFBvc3RzLFxyXG5cdHBvc3RzLFxyXG5cdGdldExvY2F0aW9uc0luZm8sXHJcblx0c3RhdGVzLFxyXG5cdGdldE5ld1Bvc3RzLFxyXG5cdG5ld1Bvc3RzLFxyXG5cdHBhZ2VzTnVtYmVyLFxyXG5cdHNlbGVjdFBvc3RzUGFnZSxcclxuXHRmaWx0ZXJQb3N0cyxcclxuXHRhdmFpbGFiaWxpdHksXHJcblx0YXZhaWxhYmxlX3RvLFxyXG5cdGV0aG5pY2l0eSxcclxuXHRleWVzLFxyXG5cdGhhaXIsXHJcblx0YWZmaWxpYXRpb25cclxufSkge1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRnZXRBbGxQb3N0cygpO1xyXG5cdFx0Z2V0TG9jYXRpb25zSW5mbygpO1xyXG5cdFx0Z2V0TmV3UG9zdHMoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8TG9jYXRpb24gc3RhdGVzPXtzdGF0ZXN9IC8+XHJcblx0XHRcdDxTZWFyY2ggLz5cclxuXHRcdFx0PENhdGVnb3JpZXNcclxuXHRcdFx0XHRjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxyXG5cdFx0XHRcdG5ld1Bvc3RzPXtuZXdQb3N0c31cclxuXHRcdFx0XHRmaWx0ZXJQb3N0cz17ZmlsdGVyUG9zdHN9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxFc2NvcnRDb250ZW50XHJcblx0XHRcdFx0cG9zdHM9e3Bvc3RzfVxyXG5cdFx0XHRcdHBhZ2VzTnVtYmVyPXtwYWdlc051bWJlcn1cclxuXHRcdFx0XHRzZWxlY3RQb3N0c1BhZ2U9e3NlbGVjdFBvc3RzUGFnZX1cclxuXHRcdFx0XHRhdmFpbGFiaWxpdHk9e2F2YWlsYWJpbGl0eX1cclxuXHRcdFx0XHRhdmFpbGFibGVfdG89e2F2YWlsYWJsZV90b31cclxuXHRcdFx0XHRldGhuaWNpdHk9e2V0aG5pY2l0eX1cclxuXHRcdFx0XHRleWVzPXtleWVzfVxyXG5cdFx0XHRcdGhhaXI9e2hhaXJ9XHJcblx0XHRcdFx0YWZmaWxpYXRpb249e2FmZmlsaWF0aW9ufVxyXG5cdFx0XHRcdGZpbHRlclBvc3RzPXtmaWx0ZXJQb3N0c31cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHQuLi5zdGF0ZSxcclxuXHRcdGNhdGVnb3JpZXM6IHN0YXRlLmFwcC5jYXRlZ29yaWVzLFxyXG5cdFx0cG9zdHM6IHN0YXRlLmFwcC5wb3N0cyxcclxuXHRcdHN0YXRlczogc3RhdGUuYXBwLnN0YXRlcyxcclxuXHRcdG5ld1Bvc3RzOiBzdGF0ZS5hcHAubmV3UG9zdHMsXHJcblx0XHRwYWdlc051bWJlcjogc3RhdGUuYXBwLnBhZ2VzTnVtYmVyLFxyXG5cdFx0YXZhaWxhYmlsaXR5OiBzdGF0ZS5hcHAuYXZhaWxhYmlsaXR5LFxyXG5cdFx0YXZhaWxhYmxlX3RvOiBzdGF0ZS5hcHAuYXZhaWxhYmxlX3RvLFxyXG5cdFx0ZXRobmljaXR5OiBzdGF0ZS5hcHAuZXRobmljaXR5LFxyXG5cdFx0ZXllczogc3RhdGUuYXBwLmV5ZXMsXHJcblx0XHRoYWlyOiBzdGF0ZS5hcHAuaGFpcixcclxuXHRcdGFmZmlsaWF0aW9uOiBzdGF0ZS5hcHAuYWZmaWxpYXRpb25cclxuXHR9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1BvcHMgPSB7XHJcblx0Z2V0QWxsUG9zdHMsXHJcblx0Z2V0TG9jYXRpb25zSW5mbyxcclxuXHRnZXROZXdQb3N0cyxcclxuXHRzZWxlY3RQb3N0c1BhZ2UsXHJcblx0ZmlsdGVyUG9zdHMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1BvcHMpKEhvbWUpO1xyXG4iLCJpbXBvcnQgeyBURVNUX0NSRUFURV9QT1NULCBTSE9XX0xPQURFUiwgSElERV9MT0FERVIsIFNIT1dfQUxFUlQsIEhJREVfQUxFUlQsIFRFU1RfUkVRVUVTVF9QT1NUUywgR0VUX0FMTF9QT1NUUywgR0VUX0xPQ0FJVE9OU19JTkZPLCBHRVRfQ0lUSUVTLCBDUkVBVEVfU1VQUE9SVF9UQVNLLCBHRVRfQUxMX1VTRVJfVEFTS1MsIEdFVF9BUFBfSU5GTywgR0VUX05FV19QT1NUUywgR0VUX1BBR0VTX05VTUJFUiwgR0VUX1BPU1RfQ09NTUVOVFMsIENSRUFURV9QT1NUX0NPTU1FTlQsIEZJTFRFUl9QT1NUUyB9IGZyb20gXCIuL3R5cGVzXCJcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCB7IGF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9fc2VydmljZXNcIjtcclxuXHJcbi8vIFQgRSBTIFQgXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb3N0KHBvc3Q6IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFRFU1RfQ1JFQVRFX1BPU1QsXHJcbiAgICAgICAgcGF5bG9hZDogcG9zdFxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0xvYWRlcigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogU0hPV19MT0FERVJcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUxvYWRlcigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogSElERV9MT0FERVJcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FsZXJ0KHRleHQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICByZXR1cm4gKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogU0hPV19BTEVSVCxcclxuICAgICAgICAgICAgcGF5bG9hZDogdGV4dFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGhpZGVBbGVydCgpKVxyXG4gICAgICAgIH0sIDMwMDApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVBbGVydCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogSElERV9BTEVSVFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvc3RzKCk6IGFueSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFRFU1RfUkVRVUVTVF9QT1NUU1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0QWxsUG9zdHMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0c2ApO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX1BBR0VTX05VTUJFUiwgcGF5bG9hZDogcmVzLmxhc3RfcGFnZSB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9BTExfUE9TVFMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0TmV3UG9zdHMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cy9hbGwvbmV3YCk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX05FV19QT1NUUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbnNJbmZvID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvbG9jYXRpb25gKTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfTE9DQUlUT05TX0lORk8sIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0QXBwSW5mbyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2luZm9gKTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfQVBQX0lORk8sIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0Q2l0aWVzID0gKHN0YXRlSWQ6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvbG9jYXRpb24vY2l0aWVzLyR7c3RhdGVJZH1gKTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfQ0lUSUVTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVN1cHBvcnRUYXNrID0gKHRhc2s6IGFueSkgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvc3VwcG9ydC9jcmVhdGVgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhc2spXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBDUkVBVEVfU1VQUE9SVF9UQVNLLCBwYXlsb2FkOiB0YXNrIH0pXHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldEFsbFVzZXJzVGFza3MgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9zdXBwb3J0LyR7dXNlci51c2VyLmlkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0FMTF9VU0VSX1RBU0tTLCBwYXlsb2FkOiByZXMgfSk7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBzZWxlY3RQb3N0c1BhZ2UgPSAocGFnZTogbnVtYmVyIHwgc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cz9wYWdlPSR7cGFnZX1gKTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9QQUdFU19OVU1CRVIsIHBheWxvYWQ6IHJlcy5sYXN0X3BhZ2UgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfQUxMX1BPU1RTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pXHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0Q29tbWVudHMgPSAocG9zdElkOiBudW1iZXIgfCBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogYW55KSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzLyR7cG9zdElkfS9jb21tZW50c2AsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfUE9TVF9DT01NRU5UUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdENvbW1lbnQgPSAocG9zdElkOiBudW1iZXIgfCBzdHJpbmcsIGNvbW1lbnQ6IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvJHtwb3N0SWR9L2NvbW1lbnRzL2NyZWF0ZWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb21tZW50IH0pXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IENSRUFURV9QT1NUX0NPTU1FTlQsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGZpbHRlclBvc3RzID0gKGZpbHRlckl0ZW1zT2JqZWN0OiBhbnkpID0+IGFzeW5jIChkaXNwYXRjaDogYW55KSA9PiB7XHJcbiAgICAvLyBmcm9tLCB0bywgZ2VuZGVyLCBldGhuaWNpdHlfaWQsIGhhaXJfaWQsIGV5ZV9pZCwgY2F0ZWdvcnlfaWQsIGFmZmlsaWF0aW9uX2lkLCBhdmFpbGFiaWxpdHlfaWRzKGFycmF5KSwgYXZhaWxhYmxldG9faWRzKGFycmF5KVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9maWx0ZXJgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmaWx0ZXJJdGVtc09iamVjdClcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9QQUdFU19OVU1CRVIsIHBheWxvYWQ6IHJlcy5sYXN0X3BhZ2UgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBGSUxURVJfUE9TVFMsIHBheWxvYWQ6IHJlcy5kYXRhLmRhdGEgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCIvLyB0ZXN0XHJcbmV4cG9ydCBjb25zdCBURVNUX0NSRUFURV9QT1NUID0gJ0NSRUFURV9QT1NUJztcclxuZXhwb3J0IGNvbnN0IFRFU1RfRkVUQ0hfUE9TVCA9ICdGRVRDSF9QT1NUJztcclxuZXhwb3J0IGNvbnN0IFRFU1RfUkVRVUVTVF9QT1NUUyA9ICdSRVFVRVNUX1BPU1RTJztcclxuXHJcbi8vIGFwcFxyXG5leHBvcnQgY29uc3QgU0hPV19MT0FERVIgPSAnQVBQL1NIT1dfTE9BREVSJztcclxuZXhwb3J0IGNvbnN0IEhJREVfTE9BREVSID0gJ0FQUC9ISURFX0xPQURFUic7XHJcbmV4cG9ydCBjb25zdCBTSE9XX0FMRVJUID0gJ0FQUC9TSE9XX0FMRVJUJztcclxuZXhwb3J0IGNvbnN0IEhJREVfQUxFUlQgPSAnQVBQL0hJREVfQUxFUlQnOyBcclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfUE9TVFMgPSAnR0VUX0FMTF9QT1NUUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfUEFHRVNfTlVNQkVSID0gJ0dFVF9QQUdFU19OVU1CRVInO1xyXG5leHBvcnQgY29uc3QgR0VUX05FV19QT1NUUyA9ICdHRVRfTkVXX1BPU1RTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9MT0NBSVRPTlNfSU5GTyA9ICdHRVRfTE9DQUlUT05TX0lORk8nO1xyXG5leHBvcnQgY29uc3QgR0VUX0NJVElFUyA9ICdHRVRfQ0lUSUVTJztcclxuZXhwb3J0IGNvbnN0IENSRUFURV9TVVBQT1JUX1RBU0sgPSAnQ1JFQVRFX1NVUFBPUlRfVEFTSyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX1VTRVJfVEFTS1MgPSAnR0VUX0FMTF9VU0VSX1RBU0tTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9BUFBfSU5GTyA9ICdHRVRfQVBQX0lORk8nO1xyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfQ09NTUVOVFMgPSAnR0VUX1BPU1RfQ09NTUVOVFMnO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1RfQ09NTUVOVCA9ICdDUkVBVEVfUE9TVF9DT01NRU5UJztcclxuZXhwb3J0IGNvbnN0IEZJTFRFUl9QT1NUUyA9ICdGSUxURVJfUE9TVFMnO1xyXG5cclxuLy8gcHJvdmlkZXJcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUID0gJ1BST1ZJREVSL0FERF9QT1NUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUID0gJ1BST1ZJREVSL1JFTU9WRV9QT1NUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NUID0gJ1BST1ZJREVSL1VQREFURV9QT1NUJztcclxuXHJcbi8vIHByb3ZpZGVyXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvdmlkZXJQb3N0IHtcclxuICBpZDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBzZWNvbmROYW1lOiBzdHJpbmcsXHJcbiAgYWNjb3VudGluZ05hbWU6IHN0cmluZyxcclxuICBzZXg6IHN0cmluZyxcclxuICBhZ2U6IG51bWJlciB8IHN0cmluZyxcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBob25lOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgZXRobml0aGl0eTogc3RyaW5nLFxyXG4gIGhhaXI6IHN0cmluZyxcclxuICBleWVzOiBzdHJpbmcsXHJcbiAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgYWZmaWxpYXRpb246IHN0cmluZyxcclxuICBhdmFpbGFibGVUbzogc3RyaW5nLFxyXG4gIGF2YWlsYWJpbGl0eTogc3RyaW5nLFxyXG4gIHNob3J0U3VtbWFyeTogc3RyaW5nLFxyXG4gIGFib3V0OiBzdHJpbmcsXHJcbiAgcGhvdG9zOiBzdHJpbmdbXSxcclxuICB2aWRlb3M6IHN0cmluZ1tdXHJcbn1cclxuXHJcbi8vIHVzZXJcclxuZXhwb3J0IGNvbnN0IFNFTEVDVF9TVEFURSA9ICdVU0VSL1NFTEVDVF9TVEFURSc7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RfQ0lUWSA9ICdVU0VSL1NFTEVDVF9DSVRZJztcclxuZXhwb3J0IGNvbnN0IFNFTEVDVF9MSVNUX1NPUlQgPSAnVVNFUi9TRUxFQ1RfTElTVF9TT1JUJztcclxuZXhwb3J0IGNvbnN0IFNFTEVDVF9MSVNUX0ZJTFRFUiA9ICdVU0VSL1NFTEVDVF9MSVNUX0ZJTFRFUic7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RfQ0FURUdPUlkgPSAnVVNFUi9TRUxFQ1RfQ0FURUdPUlknO1xyXG5cclxuLy8gYWRtaW5cclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfU1VQUE9SVF9UQVNLUyA9ICdHRVRfQUxMX1NVUFBPUlRfVEFTS1MnO1xyXG5leHBvcnQgY29uc3QgRURJVF9TVVBQT1JUX1RBU0tTID0gJ0VESVRfU1VQUE9SVF9UQVNLUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfU1VQUE9SVF9UQVNLID0gJ0RFTEVURV9TVVBQT1JUX1RBU0snO1xyXG4vLyBleHBvcnQgY29uc3QgQ1JFQVRFX0NBVEVHT1JZID0gJ0NSRUFURV9DQVRFR09SWSc7XHJcbi8vIGV4cG9ydCBjb25zdCBFRElUX0NBVEVHT1JZID0gJ0VESVRfQ0FURUdPUlknO1xyXG4vLyBleHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZID0gJ0RFTEVURV9DQVRFR09SWSc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpc3RvcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==