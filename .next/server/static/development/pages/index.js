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
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Router */ "next/Router");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_3__);




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
  }).then(user => {
    if (user.user.role === 'client') {
      next_Router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/userCabinet');
    } else if (user.user.role = 'individual') {
      next_Router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/modelCabinet');
    } else if (user.user.role === 'admin') {
      next_Router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/admin');
    } else if (user.user.role === 'agency') {
      next_Router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/modelCabinet');
    }
  }) // .then(() => window.location.reload(true))
  .catch(err => console.error("Error:", err));
}

async function registrationClient(name, password, email, password_confirmation) {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove("currentUser");
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
  }).then(_helpers__WEBPACK_IMPORTED_MODULE_2__["handleResponse"]) // .then((client) => {
  //   Cookies.set("currentUser", JSON.stringify(client));
  //   currentUserSubject = client;
  //   return client;
  // })
  // .then(() => {
  //   login(email, password);
  // })
  // .then(() => window.location.reload(true))
  .catch(err => console.error("Error:", err));
}

async function registrationAdmin(name, password, email, password_confirmation) {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove("currentUser");
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
  }).then(_helpers__WEBPACK_IMPORTED_MODULE_2__["handleResponse"]) // .then((admin) => {
  //   Cookies.set("currentUser", JSON.stringify(admin));
  //   currentUserSubject = admin;
  //   return admin;
  // })
  // .then(() => {
  //   login(email, password);
  // })
  // .then(() => window.location.reload(true))
  .catch(err => console.error("Error:", err));
}

async function registrationProvider(name, password, email, password_confirmation, phone) {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove("currentUser");
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
  }).then(_helpers__WEBPACK_IMPORTED_MODULE_2__["handleResponse"]) // .then((provider) => {
  //   Cookies.set("currentUser", JSON.stringify(provider.user));
  //   currentUserSubject = provider;
  //   return provider;
  // })
  // .then(() => {
  //   login(email, password);
  // })
  // .then(() => window.location.reload(true))
  .catch(err => console.error("Error:", err));
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
  promise.then(provider => {// Cookies.set("currentUser", JSON.stringify(provider));
    // currentUserSubject = provider;
    // return provider;
  }) // .then(() => login(email, password))
  // .then(() => window.location.reload(true))
  .catch(err => console.error("Error:", err));
}

async function logout() {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove("currentUser");
  return await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${target}/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  }).then(() => next_Router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/login')).then(() => window.location.reload(true)).catch(err => console.error("Error:", err));
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
      columnNumber: 5
    }
  }, __jsx("div", {
    className: `text-white ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.escort_content_title}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Meet our selection of worldwide escorts")), __jsx("div", {
    className: `${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_sort_control}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_btn_wrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_btn_group,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
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
      columnNumber: 13
    }
  }, __jsx("option", {
    value: "default",
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, "SORTING"), __jsx("option", {
    value: "date/-",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "date added from new"), __jsx("option", {
    value: "date/+",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "date added from old"), __jsx("option", {
    value: "reviews/-",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, "number of comments from less"), __jsx("option", {
    value: "reviews/+",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, "number of comments from more"))), __jsx("div", {
    className: _escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_btn_group,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("span", {
    name: "grid",
    className: `grid_btn carousel_layout_change_btn ${visibleComponent === "grid" ? "active_btn_pink" : ""} ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.grid_btn}`,
    onClick: e => changeVisibleComponent(e),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "GRID"), __jsx("span", {
    name: "list",
    className: `list_btn carousel_layout_change_btn ${visibleComponent === "list" ? "active_btn_pink" : ""} ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.list_btn}`,
    onClick: e => changeVisibleComponent(e),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "LIST")))), __jsx("div", {
    className: `filter_items_block ${_escort_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter_items_block}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 96,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "models-view-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, visibleComponent === "list" ? __jsx(_EscortList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    posts: posts,
    pagesNumber: pagesNumber,
    selectPostsPage: selectPostsPage,
    addToFavorites: addToFavorites,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }) : __jsx(_EscortGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    posts: posts,
    pagesNumber: pagesNumber,
    selectPostsPage: selectPostsPage,
    addToFavorites: addToFavorites,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\home-page\\EscortList.jsx";
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
  affiliation,
  addToFavorites,
  sortPosts
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
      lineNumber: 44,
      columnNumber: 3
    }
  }, __jsx(_components_home_page_Location__WEBPACK_IMPORTED_MODULE_1__["default"], {
    states: states,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }
  }), __jsx(_components_home_page_Search__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }
  }), __jsx(_components_home_page_Categories__WEBPACK_IMPORTED_MODULE_3__["default"], {
    categories: categories,
    newPosts: newPosts,
    filterPosts: filterPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 52,
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
  sortPosts: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["sortPosts"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToPops)(Home));

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

/***/ "next/Router":
/*!******************************!*\
  !*** external "next/Router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9faGVscGVycy9Qcml2YXRlUm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19oZWxwZXJzL2F1dGgtaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9faGVscGVycy9mYWtlLWJhY2tlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19oZWxwZXJzL2hhbmRsZS1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX2hlbHBlcnMvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19oZWxwZXJzL3JvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9fc2VydmljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbi9ob3Jpem9udGFsL21vZGVsLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvY3Jvd24tcGluay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9mYXZvcml0ZS1waW5rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3BsYW5lLXBpbmsucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvc3Rhci1waW5rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvQ2F0ZWdvcmllcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL0VzY29ydENvbnRlbnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9Fc2NvcnRHcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvRXNjb3J0TGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL0xvY2F0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvTmV3UG9zdHMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9TZWFyY2guanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9jYXRlZ29yaWVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9lc2NvcnQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1wYWdlL2xvY2F0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUtcGFnZS9zZWFyY2gubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwtd2luZG93L1ZlcmlmaWVkV2luZG93LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RlbHMtZmlsdGVyL01vZGVsc0ZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWxzLWZpbHRlci9mb3JtLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy90eXBlcy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoaXN0b3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9Sb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwidGFyZ2V0IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkxpbmsiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicCIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsImUiLCJub2RlTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJyZXNvbHZlIiwicHJldmVudERlZmF1bHQiLCJzY3JvbGwiLCJpbmRleE9mIiwicmVwbGFjZSIsInNoYWxsb3ciLCJ0aGVuIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZG9jdW1lbnQiLCJib2R5IiwiZm9jdXMiLCJwcmVmZXRjaCIsIndhcm4iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicGFyc2VkSHJlZiIsInBhcnNlZEFzIiwicmVzb2x2ZWRIcmVmIiwiaGFuZGxlUmVmIiwicmVmIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImpvaW4iLCJvcHRpb25zIiwicGF0aHMiLCJjYXRjaCIsInJlbmRlciIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY3VycmVudCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwYXNzSHJlZiIsInR5cGUiLCJwcm9jZXNzIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwidmFsdWUiLCJfZGVmYXVsdCIsInVzZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsImNyZWF0ZVJvdXRlciIsIndpdGhSb3V0ZXIiLCJSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJndW1lbnRzIiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwibWFwIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIlByaXZhdGVSb3V0ZSIsImNvbXBvbmVudCIsInJvbGVzIiwicmVzdCIsImN1cnJlbnRVc2VyIiwiYXV0aGVudGljYXRpb25TZXJ2aWNlIiwiY3VycmVudFVzZXJWYWx1ZSIsImZyb20iLCJyb2xlIiwiYXV0aEhlYWRlciIsInRva2VuIiwiQXV0aG9yaXphdGlvbiIsImNvbmZpZ3VyZUZha2VCYWNrZW5kIiwidXNlcnMiLCJpZCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIlJvbGUiLCJBZG1pbiIsInNlY29uZF9uYW1lIiwiZW1haWwiLCJwaG9uZSIsIlByb3ZpZGVyIiwicmVhbEZldGNoIiwib3B0cyIsImhlYWRlcnMiLCJpc0xvZ2dlZEluIiwic3RhcnRzV2l0aCIsInJvbGVTdHJpbmciLCJzZXRUaW1lb3V0IiwiZW5kc1dpdGgiLCJKU09OIiwidXNlciIsInUiLCJVc2VyIiwibWF0Y2giLCJ1bmF1dGhvcmlzZWQiLCJ1cmxQYXJ0cyIsInBhcnNlSW50IiwiZmluZCIsIngiLCJyZXNwb25zZSIsInRleHQiLCJzdHJpbmdpZnkiLCJoYW5kbGVSZXNwb25zZSIsImxvZ291dCIsInN0YXR1c1RleHQiLCJjcmVhdGVCcm93c2VySGlzdG9yeSIsImN1cnJlbnRVc2VyU3ViamVjdCIsIkNvb2tpZXMiLCJnZXRKU09OIiwibG9naW4iLCJyZWdpc3RyYXRpb25BZG1pbiIsInJlZ2lzdHJhdGlvbkNsaWVudCIsInJlZ2lzdHJhdGlvblByb3ZpZGVyIiwicmVnaXN0cmF0aW9uQWdlbmN5IiwicmVtb3ZlIiwiZXhwaXJlcyIsInBhc3N3b3JkX2NvbmZpcm1hdGlvbiIsImFnZW5jeV9uYW1lIiwicHJvbWlzZSIsInByb3ZpZGVyIiwiQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJuZXdQb3N0cyIsImZpbHRlclBvc3RzIiwiZmlsdGVyQ2F0ZWdvcnkiLCJzZXRGaWx0ZXJDYXRlZ29yeSIsInVzZVN0YXRlIiwiY2hhbmdlQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsInMiLCJjYXRlZ29yaWVzX2Jsb2NrIiwiY2F0ZWdvcmllc190aXRsZSIsImNhdGVnb3JpZXNfY29udGVudCIsImNhdGVnb3JpZXNfY29udHJvbCIsImMiLCJpIiwidG9Mb3dlckNhc2UiLCJjYXRlZ29yaWVzX3N1YnRpdGxlIiwiY2F0ZWdvcmllc19jYXJvdXNlbCIsIkVzY29ydENvbnRlbnQiLCJwb3N0cyIsInBhZ2VzTnVtYmVyIiwic2VsZWN0UG9zdHNQYWdlIiwiYXZhaWxhYmlsaXR5IiwiYXZhaWxhYmxlX3RvIiwiZXRobmljaXR5IiwiZXllcyIsImhhaXIiLCJhZmZpbGlhdGlvbiIsImFkZFRvRmF2b3JpdGVzIiwic29ydFBvc3RzIiwidmlzaWJsZUNvbXBvbmVudCIsInNldFZpc2libGVDb21wb25lbnQiLCJzaG93RmlsdGVyIiwic2V0U2hvd0ZpbHRlciIsInVzZUVmZmVjdCIsIiQiLCJoaWRlIiwic2xpZGVGaWx0ZXIiLCJzbGlkZVRvZ2dsZSIsImNoYW5nZVZpc2libGVDb21wb25lbnQiLCJwZXJzaXN0IiwiZmFkZU91dCIsImF0dHIiLCJmYWRlSW4iLCJlc2NvcnRfY29udGVudF9ibG9jayIsIm1pbkhlaWdodCIsImVzY29ydF9jb250ZW50X3RpdGxlIiwiZmlsdGVyX3NvcnRfY29udHJvbCIsImZpbHRlcl9idG5fd3JhcCIsImZpbHRlcl9idG5fZ3JvdXAiLCJmaWx0ZXJfYnRuIiwic29ydGluZ19idG4iLCJncmlkX2J0biIsImxpc3RfYnRuIiwiZmlsdGVyX2l0ZW1zX2Jsb2NrIiwiRXNjb3J0R3JpZCIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwYWdlcyIsInNldFBhZ2VzIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwicG9zdCIsInZlcnRpY2FsX3NsaWRlIiwidmVydGljYWxfc2xpZGVfaW1hZ2UiLCJwaG90b19ob3Jpem9udGFsIiwibW9kZWxfbmFtZSIsIm1vZGVsX3Bob3RvX2dyaWQiLCJ2ZXJ0aWNhbF9zbGlkZV9tb2RlbF9pbmZvIiwibmV0d29ya19zdGF0dXMiLCJ0ZXh0VHJhbnNmb3JtIiwic3VtbWFyeSIsImNhcmRfY29udHJvbCIsImZhdiIsImNyb3duIiwic3RhciIsInBsYW5lIiwidmVyaWZpY2F0aW9uIiwidmVyaWZpZWQiLCJ2aWV3X3Byb2ZpbGUiLCJFc2NvcnRMaXN0Iiwic2V0dGluZ3MiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcnJvd3MiLCJkb3RzIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiZHJhZ2dhYmxlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJpbml0aWFsU2xpZGUiLCJlc2NvcnRfbGlzdCIsInNsaWRlIiwibW9kZWxfcGhvdG8iLCJwaG90b192ZXJ0aWNhbCIsIm1vZGVsX2luZm8iLCJtb2RlbF9pbmZvX3RpdGxlIiwic2lnbnNfZ3JvdXAiLCJzaWduIiwiTG9jYXRpb24iLCJzdGF0ZXMiLCJnZXRDaXRpZXMiLCJjdXJyZW50TG9jYXRpb24iLCJzZXRDdXJyZW50TG9jYXRpb24iLCJjaGFuZ2VMb2NhdGlvbiIsInN0YXRlSWQiLCJsb2NhdGlvbl93cmFwcGVyIiwibG9jYXRvbl9ibG9ja190aXRsZSIsImxvY2F0aW9uX2Jsb2NrX3NlbGVjdCIsImxvY2F0aW9uX2Jsb2NrX2xpc3QiLCJTaW1wbGVTbGlkZXIiLCJmYWRlIiwiU2VhcmNoIiwic2VhcmNoX2Jsb2NrIiwic2VhcmNoX2Jsb2NrX2NvbnRlbnQiLCJzZWFyY2hfaW5wdXRfbGFiZWwiLCJzZWFyY2hfaW5wdXQiLCJhZGRfcG9zdF9idG4iLCJWZXJpZmllZFdpbmRvdyIsImJ1dHRvbkxhYmVsIiwiY2xhc3NOYW1lIiwibW9kYWwiLCJzZXRNb2RhbCIsInRvZ2dsZSIsImZvbnRGYW1pbHkiLCJNb2RhbCIsImlzT3BlbiIsImF1dG9Gb2N1cyIsImNlbnRlcmVkIiwic2l6ZSIsImZ1bmMiLCJsYWJlbGxlZEJ5Iiwia2V5Ym9hcmQiLCJiYWNrZHJvcCIsIm9uZU9mIiwic2Nyb2xsYWJsZSIsIm9uRW50ZXIiLCJvbkV4aXQiLCJvbk9wZW5lZCIsIm9uQ2xvc2VkIiwid3JhcENsYXNzTmFtZSIsIm1vZGFsQ2xhc3NOYW1lIiwiYmFja2Ryb3BDbGFzc05hbWUiLCJjb250ZW50Q2xhc3NOYW1lIiwiY3NzTW9kdWxlIiwiekluZGV4IiwibnVtYmVyIiwidW5tb3VudE9uQ2xvc2UiLCJyZXR1cm5Gb2N1c0FmdGVyQ2xvc2UiLCJNb2RlbHNGaWx0ZXIiLCJzZXgiLCJzZXRTZXgiLCJhZ2VGcm9tIiwic2V0QWdlRnJvbSIsImFnZVRvIiwic2V0QWdlVG8iLCJzdGF0ZUV0aG5pY2l0eSIsInNldEV0aG5pY2l0eSIsInN0YXRlSGFpciIsInNldEhhaXIiLCJzdGF0ZUV5ZSIsInNldEV5ZSIsInN0YXRlQWZmaWxpYXRpb24iLCJzZXRBZmZpbGlhdGlvbiIsInN0YXRlQXZhaWxhYmxlVG8iLCJzZXRBdmFpbGFibGVUbyIsInN0YXRlQXZhaWxhYmlsaXR5Iiwic2V0QXZhaWxhYmlsaXR5IiwiYXBwbHlGaWx0ZXIiLCJmaWx0ZXJJdGVtcyIsIml0ZW0iLCJ0b1N0cmluZyIsImZpbHRlcl9mb3JtIiwic2V4X2Jsb2NrIiwibGFiZWwiLCJjaGVja21hcmsiLCJhZ2VfYmxvY2siLCJldGhuaWNpdHlfYmxvY2siLCJoYWlyX2Jsb2NrIiwiaCIsImV5ZV9ibG9jayIsImFmZmlsaWF0aW9uX2Jsb2NrIiwiYSIsImF2YWlsYWJsZVRvX2Jsb2NrIiwiY2hlY2tlZCIsImNoZWNrc2lnbiIsImF2YWlsYWJpbGl0eV9ibG9jayIsImJ0bl9zdWJtaXQiLCJIb21lIiwiZ2V0QWxsUG9zdHMiLCJnZXRMb2NhdGlvbnNJbmZvIiwiZ2V0TmV3UG9zdHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhcHAiLCJtYXBEaXNwYXRjaFRvUG9wcyIsImNvbm5lY3QiLCJjcmVhdGVQb3N0IiwiVEVTVF9DUkVBVEVfUE9TVCIsInBheWxvYWQiLCJzaG93TG9hZGVyIiwiU0hPV19MT0FERVIiLCJoaWRlTG9hZGVyIiwiSElERV9MT0FERVIiLCJzaG93QWxlcnQiLCJkaXNwYXRjaCIsIlNIT1dfQUxFUlQiLCJoaWRlQWxlcnQiLCJISURFX0FMRVJUIiwiZmV0Y2hQb3N0cyIsIlRFU1RfUkVRVUVTVF9QT1NUUyIsIkdFVF9QQUdFU19OVU1CRVIiLCJsYXN0X3BhZ2UiLCJHRVRfQUxMX1BPU1RTIiwiR0VUX05FV19QT1NUUyIsIkdFVF9MT0NBSVRPTlNfSU5GTyIsImdldEFwcEluZm8iLCJHRVRfQVBQX0lORk8iLCJHRVRfQ0lUSUVTIiwiY3JlYXRlU3VwcG9ydFRhc2siLCJ0YXNrIiwidG9rZW5fdHlwZSIsImxvZyIsIkNSRUFURV9TVVBQT1JUX1RBU0siLCJnZXRBbGxVc2Vyc1Rhc2tzIiwiR0VUX0FMTF9VU0VSX1RBU0tTIiwiZ2V0UG9zdENvbW1lbnRzIiwicG9zdElkIiwiR0VUX1BPU1RfQ09NTUVOVFMiLCJjcmVhdGVQb3N0Q29tbWVudCIsImNvbW1lbnQiLCJDUkVBVEVfUE9TVF9DT01NRU5UIiwiZmlsdGVySXRlbXNPYmplY3QiLCJGSUxURVJfUE9TVFMiLCJyZXBvcnRQb3N0IiwiaXNfZmF2b3JpdGUiLCJhZGRUb0Zhdm9yaXRlc0J1c2luZXNzIiwiZ2V0RmF2b3JpdGVzQnVzaW5lc3MiLCJHRVRfRkFWT1JJVEVTIiwiZ2V0RmF2b3JpdGVzVXNlciIsImdldENvbXBsYWlucyIsInVzZXJJZCIsIkdFVF9DT01QTEFJTlMiLCJzb3J0VHlwZSIsIlNPUlRfUE9TVFMiLCJURVNUX0ZFVENIX1BPU1QiLCJSRVBPUlRfUE9TVCIsIkFERF9QT1NUIiwiUkVNT1ZFX1BPU1QiLCJVUERBVEVfUE9TVCIsIlNFTEVDVF9TVEFURSIsIlNFTEVDVF9DSVRZIiwiU0VMRUNUX0xJU1RfU09SVCIsIlNFTEVDVF9MSVNUX0ZJTFRFUiIsIlNFTEVDVF9DQVRFR09SWSIsIkdFVF9BTExfU1VQUE9SVF9UQVNLUyIsIkVESVRfU1VQUE9SVF9UQVNLUyIsIkRFTEVURV9TVVBQT1JUX1RBU0siXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FB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Ozs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCB7IGF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJpdmF0ZVJvdXRlID0gKHsgY29tcG9uZW50OiBDb21wb25lbnQsIHJvbGVzLCAuLi5yZXN0IH0pID0+IChcclxuICA8Um91dGUgey4uLnJlc3R9IHJlbmRlcj17cHJvcHMgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcclxuICAgIGlmICghY3VycmVudFVzZXIpIHtcclxuICAgICAgLy8gbm90IGxvZ2dlZCBpbiBzbyByZWRpcmVjdCB0byBsb2dpbiBwYWdlIHdpdGggdGhlIHJldHVybiB1cmxcclxuICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17eyBwYXRobmFtZTogJy9sb2dpbicsIHN0YXRlOiB7IGZyb206IHByb3BzLmxvY2F0aW9uIH0gfX0gLz5cclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayBpZiByb3V0ZSBpcyByZXN0cmljdGVkIGJ5IHJvbGVcclxuICAgIGlmIChyb2xlcyAmJiByb2xlcy5pbmRleE9mKGN1cnJlbnRVc2VyLnJvbGUpID09PSAtMSkge1xyXG4gICAgICAvLyByb2xlIG5vdCBhdXRob3Jpc2VkIHNvIHJlZGlyZWN0IHRvIGhvbWUgcGFnZVxyXG4gICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXt7IHBhdGhuYW1lOiAnLycgfX0gLz5cclxuICAgIH1cclxuXHJcbiAgICAvLyBhdXRob3Jpc2VkIHNvIHJldHVybiBjb21wb25lbnRcclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICB9fSAvPlxyXG4pIiwiaW1wb3J0IHsgYXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vX3NlcnZpY2VzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhdXRoSGVhZGVyKCkge1xyXG4gIC8vIHJldHVybiBhdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIGp3dCB0b2tlblxyXG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XHJcbiAgaWYgKGN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyLnRva2VuKSB7XHJcbiAgICByZXR1cm4geyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y3VycmVudFVzZXIudG9rZW59YCB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJvbGUgfSBmcm9tICcuLydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmVGYWtlQmFja2VuZCgpIHtcclxuICBsZXQgdXNlcnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICB1c2VybmFtZTogJ2FkbWluJyxcclxuICAgICAgcGFzc3dvcmQ6ICdhZG1pbicsXHJcbiAgICAgIGZpcnN0TmFtZTogJ0FkbWluJyxcclxuICAgICAgbGFzdE5hbWU6ICdBZG1pbicsXHJcbiAgICAgIHJvbGU6IFJvbGUuQWRtaW4sXHJcbiAgICAgIG5hbWU6IFwiQWRtaW5cIixcclxuICAgICAgc2Vjb25kX25hbWU6IG51bGwsXHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBwaG9uZTogXCIzODA5NTM0NDQzNDhcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICB1c2VybmFtZTogJ3VzZXInLFxyXG4gICAgICBwYXNzd29yZDogJ3VzZXInLFxyXG4gICAgICBmaXJzdE5hbWU6ICdJdmFuJyxcclxuICAgICAgbGFzdE5hbWU6ICdVc2VyJyxcclxuICAgICAgcm9sZTogUm9sZS5BZG1pbixcclxuICAgICAgbmFtZTogXCJVc2VyXCIsXHJcbiAgICAgIHNlY29uZF9uYW1lOiBudWxsLFxyXG4gICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgcGhvbmU6IFwiMzgwOTUzNDQ0MzQ4XCIsXHJcbiAgICB9LFxyXG4gICAgLFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgdXNlcm5hbWU6ICdwcm8nLFxyXG4gICAgICBwYXNzd29yZDogJ3BybycsXHJcbiAgICAgIGZpcnN0TmFtZTogJ01vZGVsJyxcclxuICAgICAgbGFzdE5hbWU6ICdQcm92aWRlcicsXHJcbiAgICAgIHJvbGU6IFJvbGUuUHJvdmlkZXIsXHJcbiAgICAgIG5hbWU6IFwiTW9kZWxcIixcclxuICAgICAgc2Vjb25kX25hbWU6IG51bGwsXHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBwaG9uZTogXCIzODA5NTM0NDQzNDhcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGxldCByZWFsRmV0Y2ggPSB3aW5kb3cuZmV0Y2g7XHJcbiAgd2luZG93LmZldGNoID0gZnVuY3Rpb24gKHVybCwgb3B0cykge1xyXG4gICAgY29uc3QgYXV0aEhlYWRlciA9IG9wdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddO1xyXG4gICAgY29uc3QgaXNMb2dnZWRJbiA9IGF1dGhIZWFkZXIgJiYgYXV0aEhlYWRlci5zdGFydHNXaXRoKCdCZWFyZXIgZmFrZS1qd3QtdG9rZW4nKTtcclxuICAgIGNvbnN0IHJvbGVTdHJpbmcgPSBpc0xvZ2dlZEluICYmIGF1dGhIZWFkZXIuc3BsaXQoJy4nKVsxXTtcclxuICAgIGNvbnN0IHJvbGUgPSByb2xlU3RyaW5nID8gUm9sZVtyb2xlU3RyaW5nXSA6IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgLy8gd3JhcCBpbiB0aW1lb3V0IHRvIHNpbXVsYXRlIHNlcnZlciBhcGkgY2FsbFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBhdXRoZW50aWNhdGUgLSBwdWJsaWNcclxuICAgICAgICBpZiAodXJsLmVuZHNXaXRoKCcvYXBpL2F1dGgvbG9naW4nKSAmJiBvcHRzLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSBKU09OLnBhcnNlKG9wdHMuYm9keSk7XHJcbiAgICAgICAgICAvLyBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh4ID0+IHgudXNlcm5hbWUgPT09IHBhcmFtcy51c2VybmFtZSAmJiB4LnBhc3N3b3JkID09PSBwYXJhbXMucGFzc3dvcmQpO1xyXG4gICAgICAgICAgbGV0IHVzZXI7XHJcbiAgICAgICAgICB1c2Vycy5mb3JFYWNoKHUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodS5wYXNzd29yZCA9PT0gcGFyYW1zLnBhc3N3b3JkICYmIHUudXNlcm5hbWUgPT09IHBhcmFtcy51c2VybmFtZSkgcmV0dXJuIHVzZXIgPSB1O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICghdXNlcikgcmV0dXJuIGVycm9yKCdVc2VybmFtZSBvciBwYXNzd29yZCBpcyBpbmNvcnJlY3QnKTtcclxuICAgICAgICAgIHJldHVybiBvayh7XHJcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiB1c2VyLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IHVzZXIubGFzdE5hbWUsXHJcbiAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcclxuICAgICAgICAgICAgdG9rZW46IGBmYWtlLWp3dC10b2tlbi4ke3VzZXIucm9sZX1gLFxyXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIHNlY29uZF9uYW1lOiB1c2VyLnNlY29uZF9uYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgcGhvbmU6IHVzZXIucGhvbmVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVybC5lbmRzV2l0aCgnL2FwaS9hdXRoL3JlZ2lzdGVyJykgJiYgb3B0cy5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgICAgY29uc3QgcGFyYW1zID0gSlNPTi5wYXJzZShvcHRzLmJvZHkpO1xyXG4gICAgICAgICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICAgICAgaWQ6IHVzZXJzLmxlbmd0aCArIDEsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBwYXJhbXMudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXJhbXMucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJ05vcm1hbCcsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBSb2xlLlVzZXIsXHJcbiAgICAgICAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgIHNlY29uZF9uYW1lOiBudWxsLFxyXG4gICAgICAgICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgICAgICAgcGhvbmU6IG51bGxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB1c2Vycy5wdXNoKHVzZXIpO1xyXG5cclxuICAgICAgICAgIHJldHVybiBvayh7XHJcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiB1c2VyLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IHVzZXIubGFzdE5hbWUsXHJcbiAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcclxuICAgICAgICAgICAgdG9rZW46IGBmYWtlLWp3dC10b2tlbi4ke3VzZXIucm9sZX1gLFxyXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIHNlY29uZF9uYW1lOiB1c2VyLnNlY29uZF9uYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgcGhvbmU6IHVzZXIucGhvbmVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0IHVzZXIgYnkgaWQgLSBhZG1pbiBvciB1c2VyICh1c2VyIGNhbiBvbmx5IGFjY2VzcyB0aGVpciBvd24gcmVjb3JkKVxyXG4gICAgICAgIGlmICh1cmwubWF0Y2goL1xcL3VzZXJzXFwvXFxkKyQvKSAmJiBvcHRzLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICAgIGlmICghaXNMb2dnZWRJbikgcmV0dXJuIHVuYXV0aG9yaXNlZCgpO1xyXG5cclxuICAgICAgICAgIC8vIGdldCBpZCBmcm9tIHJlcXVlc3QgdXJsXHJcbiAgICAgICAgICBsZXQgdXJsUGFydHMgPSB1cmwuc3BsaXQoJy8nKTtcclxuICAgICAgICAgIGxldCBpZCA9IHBhcnNlSW50KHVybFBhcnRzW3VybFBhcnRzLmxlbmd0aCAtIDFdKTtcclxuXHJcbiAgICAgICAgICAvLyBvbmx5IGFsbG93IG5vcm1hbCB1c2VycyBhY2Nlc3MgdG8gdGhlaXIgb3duIHJlY29yZFxyXG4gICAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2Vycy5maW5kKHggPT4geC5yb2xlID09PSByb2xlKTtcclxuICAgICAgICAgIGlmIChpZCAhPT0gY3VycmVudFVzZXIuaWQgJiYgcm9sZSAhPT0gUm9sZS5BZG1pbikgcmV0dXJuIHVuYXV0aG9yaXNlZCgpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSB1c2Vycy5maW5kKHggPT4geC5pZCA9PT0gaWQpO1xyXG4gICAgICAgICAgcmV0dXJuIG9rKHVzZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0IGFsbCB1c2VycyAtIGFkbWluIG9ubHlcclxuICAgICAgICBpZiAodXJsLmVuZHNXaXRoKCcvdXNlcnMnKSAmJiBvcHRzLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICAgIGlmIChyb2xlICE9PSBSb2xlLkFkbWluKSByZXR1cm4gdW5hdXRob3Jpc2VkKCk7XHJcbiAgICAgICAgICByZXR1cm4gb2sodXNlcnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcGFzcyB0aHJvdWdoIGFueSByZXF1ZXN0cyBub3QgaGFuZGxlZCBhYm92ZVxyXG4gICAgICAgIHJlYWxGZXRjaCh1cmwsIG9wdHMpLnRoZW4ocmVzcG9uc2UgPT4gcmVzb2x2ZShyZXNwb25zZSkpO1xyXG5cclxuICAgICAgICAvLyBwcml2YXRlIGhlbHBlciBmdW5jdGlvbnNcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb2soYm9keSkge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7IG9rOiB0cnVlLCB0ZXh0OiAoKSA9PiBQcm9taXNlLnJlc29sdmUoSlNPTi5zdHJpbmdpZnkoYm9keSkpIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB1bmF1dGhvcmlzZWQoKSB7XHJcbiAgICAgICAgICByZXNvbHZlKHsgc3RhdHVzOiA0MDEsIHRleHQ6ICgpID0+IFByb21pc2UucmVzb2x2ZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6ICdVbmF1dGhvcmlzZWQnIH0pKSB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7IHN0YXR1czogNDAwLCB0ZXh0OiAoKSA9PiBQcm9taXNlLnJlc29sdmUoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlIH0pKSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgNTAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBhdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKS50aGVuKHRleHQgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHRleHQgJiYgSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgaWYgKFs0MDEsIDQwM10uaW5kZXhPZihyZXNwb25zZS5zdGF0dXMpICE9PSAtMSkge1xyXG4gICAgICAgIC8vIGF1dG8gbG9nb3V0IGlmIDQwMSBVbmF1dGhvcml6ZWQgb3IgNDAzIEZvcmJpZGRlbiByZXNwb25zZSByZXR1cm5lZCBmcm9tIGFwaVxyXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzVGV4dDtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5cclxubGV0IGhpc3RvcnlcclxuXHJcbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgLy8gY29uc3QgY3JlYXRlQnJvd3Nlckhpc3RvcnkgPSByZXF1aXJlKCdoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5JykuZGVmYXVsdFxyXG5cclxuICBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKVxyXG59XHJcblxyXG5leHBvcnQgeyBoaXN0b3J5IH07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vUHJpdmF0ZVJvdXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9hdXRoLWhlYWRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZmFrZS1iYWNrZW5kJztcclxuZXhwb3J0ICogZnJvbSAnLi9oYW5kbGUtcmVzcG9uc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2hpc3RvcnknO1xyXG5leHBvcnQgKiBmcm9tICcuL3JvbGUnO1xyXG4iLCJleHBvcnQgY29uc3QgUm9sZSA9IHtcclxuICBBZG1pbjogJ0FkbWluJyxcclxuICBVc2VyOiAnVXNlcicsXHJcbiAgUHJvdmlkZXI6ICdQcm92aWRlcidcclxufVxyXG4iLCJpbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCB7IGhhbmRsZVJlc3BvbnNlIH0gZnJvbSBcIi4uL19oZWxwZXJzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvUm91dGVyXCI7XHJcblxyXG5sZXQgY3VycmVudFVzZXJTdWJqZWN0ID0gQ29va2llcy5nZXRKU09OKFwiY3VycmVudFVzZXJcIilcclxuICA/IENvb2tpZXMuZ2V0SlNPTihcImN1cnJlbnRVc2VyXCIpXHJcbiAgOiB7fTtcclxuXHJcbmNvbnN0IHRhcmdldCA9IGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpYDtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGlvblNlcnZpY2UgPSB7XHJcbiAgbG9naW4sXHJcbiAgbG9nb3V0LFxyXG4gIHJlZ2lzdHJhdGlvbkFkbWluLFxyXG4gIHJlZ2lzdHJhdGlvbkNsaWVudCxcclxuICByZWdpc3RyYXRpb25Qcm92aWRlcixcclxuICByZWdpc3RyYXRpb25BZ2VuY3ksXHJcbiAgY3VycmVudFVzZXI6IGN1cnJlbnRVc2VyU3ViamVjdCxcclxuICBnZXQgY3VycmVudFVzZXJWYWx1ZSgpIHtcclxuICAgIHJldHVybiBjdXJyZW50VXNlclN1YmplY3Q7XHJcbiAgfSxcclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gIENvb2tpZXMucmVtb3ZlKFwiY3VycmVudFVzZXJcIik7XHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKGAke3RhcmdldH0vbG9naW5gLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXHJcbiAgfSlcclxuICAgIC50aGVuKGhhbmRsZVJlc3BvbnNlKVxyXG4gICAgLnRoZW4oKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIudG9rZW4pIHtcclxuICAgICAgICBDb29raWVzLnNldChcImN1cnJlbnRVc2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpLCB7IGV4cGlyZXM6IDEgfSk7XHJcbiAgICAgICAgY3VycmVudFVzZXJTdWJqZWN0ID0gdXNlcjtcclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgfVxyXG4gICAgfSkudGhlbigodXNlcikgPT4ge1xyXG4gICAgICBpZiAodXNlci51c2VyLnJvbGUgPT09ICdjbGllbnQnKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy91c2VyQ2FiaW5ldCcpO1xyXG4gICAgICB9IGVsc2UgaWYgKHVzZXIudXNlci5yb2xlID0gJ2luZGl2aWR1YWwnKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9tb2RlbENhYmluZXQnKTtcclxuICAgICAgfSBlbHNlIGlmICh1c2VyLnVzZXIucm9sZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4nKTtcclxuICAgICAgfSBlbHNlIGlmICh1c2VyLnVzZXIucm9sZSA9PT0gJ2FnZW5jeScpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL21vZGVsQ2FiaW5ldCcpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLy8gLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkNsaWVudChcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgcGFzc3dvcmQ6IHN0cmluZyxcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogc3RyaW5nXHJcbik6IFByb21pc2U8YW55PiB7XHJcbiAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcclxuICByZXR1cm4gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvY2xpZW50L3JlZ2lzdGVyYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgbmFtZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZF9jb25maXJtYXRpb24sXHJcbiAgICB9KSxcclxuICB9KVxyXG4gICAgLnRoZW4oaGFuZGxlUmVzcG9uc2UpXHJcbiAgICAvLyAudGhlbigoY2xpZW50KSA9PiB7XHJcbiAgICAvLyAgIENvb2tpZXMuc2V0KFwiY3VycmVudFVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoY2xpZW50KSk7XHJcbiAgICAvLyAgIGN1cnJlbnRVc2VyU3ViamVjdCA9IGNsaWVudDtcclxuICAgIC8vICAgcmV0dXJuIGNsaWVudDtcclxuICAgIC8vIH0pXHJcbiAgICAvLyAudGhlbigoKSA9PiB7XHJcbiAgICAvLyAgIGxvZ2luKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAvLyB9KVxyXG4gICAgLy8gLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkFkbWluKFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBwYXNzd29yZDogc3RyaW5nLFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBzdHJpbmdcclxuKTogUHJvbWlzZTxhbnk+IHtcclxuICBDb29raWVzLnJlbW92ZShcImN1cnJlbnRVc2VyXCIpO1xyXG4gIHJldHVybiBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2FkbWluL3JlZ2lzdGVyYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgbmFtZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZF9jb25maXJtYXRpb24sXHJcbiAgICB9KSxcclxuICB9KVxyXG4gICAgLnRoZW4oaGFuZGxlUmVzcG9uc2UpXHJcbiAgICAvLyAudGhlbigoYWRtaW4pID0+IHtcclxuICAgIC8vICAgQ29va2llcy5zZXQoXCJjdXJyZW50VXNlclwiLCBKU09OLnN0cmluZ2lmeShhZG1pbikpO1xyXG4gICAgLy8gICBjdXJyZW50VXNlclN1YmplY3QgPSBhZG1pbjtcclxuICAgIC8vICAgcmV0dXJuIGFkbWluO1xyXG4gICAgLy8gfSlcclxuICAgIC8vIC50aGVuKCgpID0+IHtcclxuICAgIC8vICAgbG9naW4oZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIC8vIH0pXHJcbiAgICAvLyAudGhlbigoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0cmF0aW9uUHJvdmlkZXIoXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIHBhc3N3b3JkOiBzdHJpbmcsXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwYXNzd29yZF9jb25maXJtYXRpb246IHN0cmluZyxcclxuICBwaG9uZTogc3RyaW5nIHwgbnVtYmVyXHJcbik6IFByb21pc2U8YW55PiB7XHJcbiAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcclxuICByZXR1cm4gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9pbmRpdmlkdWFsL3JlZ2lzdGVyYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgbmFtZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZF9jb25maXJtYXRpb24sXHJcbiAgICAgIHBob25lXHJcbiAgICB9KSxcclxuICB9KVxyXG4gICAgLnRoZW4oaGFuZGxlUmVzcG9uc2UpXHJcbiAgICAvLyAudGhlbigocHJvdmlkZXIpID0+IHtcclxuICAgIC8vICAgQ29va2llcy5zZXQoXCJjdXJyZW50VXNlclwiLCBKU09OLnN0cmluZ2lmeShwcm92aWRlci51c2VyKSk7XHJcbiAgICAvLyAgIGN1cnJlbnRVc2VyU3ViamVjdCA9IHByb3ZpZGVyO1xyXG4gICAgLy8gICByZXR1cm4gcHJvdmlkZXI7XHJcbiAgICAvLyB9KVxyXG4gICAgLy8gLnRoZW4oKCkgPT4ge1xyXG4gICAgLy8gICBsb2dpbihlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgLy8gfSlcclxuICAgIC8vIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSkpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiByZWdpc3RyYXRpb25BZ2VuY3koXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIHBhc3N3b3JkOiBzdHJpbmcsXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwYXNzd29yZF9jb25maXJtYXRpb246IHN0cmluZyxcclxuICBwaG9uZTogc3RyaW5nIHwgbnVtYmVyLFxyXG4gIGFnZW5jeV9uYW1lOiBzdHJpbmdcclxuKTogUHJvbWlzZTxhbnk+IHtcclxuICBDb29raWVzLnJlbW92ZShcImN1cnJlbnRVc2VyXCIpO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9hZ2VuY3kvcmVnaXN0ZXJgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcclxuICAgICAgcGhvbmUsXHJcbiAgICAgIGFnZW5jeV9uYW1lXHJcbiAgICB9KSxcclxuICB9KTtcclxuICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gIHByb21pc2UudGhlbihwcm92aWRlciA9PiB7XHJcbiAgICAvLyBDb29raWVzLnNldChcImN1cnJlbnRVc2VyXCIsIEpTT04uc3RyaW5naWZ5KHByb3ZpZGVyKSk7XHJcbiAgICAvLyBjdXJyZW50VXNlclN1YmplY3QgPSBwcm92aWRlcjtcclxuICAgIC8vIHJldHVybiBwcm92aWRlcjtcclxuICB9KVxyXG4gICAgLy8gLnRoZW4oKCkgPT4gbG9naW4oZW1haWwsIHBhc3N3b3JkKSlcclxuICAgIC8vIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSkpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHtcclxuICBDb29raWVzLnJlbW92ZShcImN1cnJlbnRVc2VyXCIpO1xyXG4gIHJldHVybiBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2xvZ291dGAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gUm91dGVyLnB1c2goJy9sb2dpbicpKVxyXG4gICAgLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tb2RlbC0xLWMzZmE0MThlZWIxODhhMzEwYThhYmI4MjQ4ZWVlNzJmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVRDQU1BQUFDblV0MkhBQUFBQVhOU1IwSUIyY2tzZndBQUFFVlFURlJGQUFBQTUzaXY1SGV4NUhleDVIaXk1SGV4NUhXdjVIZXg1SGV4MzNDdjVIZXg0M2V4NUhheTVIaXc0M2V3NW5hejVIaXg1SGl4NUhldzVIZXg1WGF4NUhleTQzaXZzMUR0clFBQUFCZDBVazVUQUNEUDcyRGZNSkQvRVBDd2NPQ3ZVTUNnbjlCL3YwRDYrcjdRQUFBQXBVbEVRVlI0bkgyUTZSTERJQWlFTVI1ZE5mRm9qdmQvMUlLbWpmN3B6dWpnSjhnaWtVZ3QyaEFaYlIwOWVnSHdGSUE0d0JVSVJOc1BHcHM4K1FndXp5Z2NwaVZMelNxcFZSNnByVWhMRFNkVmpqZ3NEVzdrSXQ1RU81QWRkNVByeUJhOHBQSzVpZ1ZsZUVtcnlJRFAydkxHRjZYM3h5VFRvQThUOU4xcUhWbTk1OGtqek44cEEvYlNKZFAra1RyU0tYNWd6M1NvRzI3am03WXpOL3ZzLzN6TjhDTDZBSXBFQ05lb29CSDFBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCWUFBQUFUQ0FNQUFBQ2pwdzI2QUFBQUFYTlNSMElCMmNrc2Z3QUFBRHhRVEZSRkFBQUEzM0N2NUhleDVIZXg1SGV4NUhleDVYYXg1SGV5NUhleDVIV3Y1SGV4NUhpeTVIaXg0M2V4NUhleDVuYXo0M2l2NUhleDQzaXg1SGl3ZkVMbjJBQUFBQlIwVWs1VEFCQ1AzLy9QZjcvdk1OQmdvTER3VUVDUWdPQ1dFOHFzQUFBQWVFbEVRVlI0bkhXUVVRNkVJQXdGMzlzdFdoU1IxZnZmVlZEVU5kVDVta3hvQ1FEZzV5dXVJekxzZXUwUDlTb0Y5WmU2ckJqa1FFbXQ2b0JSVGtLNGRNUWtCaE9pbFJWV0ZiRlB4N2ZkczVVVEVOcjZLODlzK29LZCtYSHRtbERoMzhCQzNLUTZFRDBlY1AreGdVRGIyMXI2YXRTOFA5MitBZk11Qmlza3lQa0NBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCSUFBQUFUQ0FNQUFBQ3FUSzNBQUFBQUFYTlNSMElCMmNrc2Z3QUFBRXRRVEZSRkFBQUE1SGl3NVhheDQzaXg1SGV4NUhldzVIZXg1SGV5MzNDdjVIZXg1SGV4NTNpdjQzV3k1SFd2NUhleDVIYXk0M2V4NW5hejVIaXk1SGV4NUhpeDVIaXg1SGV4NDNpdjQzZXdhYUFLK1FBQUFCbDBVazVUQU9CL2dQK2YwTDhROE04Z1B6RGZjTEJRWUpDZ3dPOUFyK1huS1k0QUFBQ05TVVJCVkhpY1pZL2hGc0lnQ0ViVkllbVc1WnlidmYrVEpqREtGbitFZXpoOFYyT2R1ZFlFL284aDNNSUZoUWl6c09YZWk5c1VZYWhISXZZY1VWNGw0YXlZeTNsMms3bXUzNENkeUpGK05RQVFqbVZBblZoVFZZVjFPcHFNeVFOci9YUWZBc0xzbkg4UktnQ1Z2NEdjN0VWTExoYzJvNzdLRWwxRFZLMm15UzNKL3JhcnN2MVlxSGNxL0x3QllJUUZRUDNJNzNZQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVRDQU1BQUFDblV0MkhBQUFBQVhOU1IwSUIyY2tzZndBQUFEOVFURlJGQUFBQTQzaXY1SGV4NUhleDVIaXk1SGV4MzNDdjVIZXg0M2l4NUhleDQzZXg1SGV4NUhleTQzV3k1SGl4NTNpdjVIZXg1SGF5NUhpeDVIaXc0M2V4SkhjcXlBQUFBQlYwVWs1VEFFRFF6MkQvRU4rQTcyK1B2eitnSVBCd3dPQ3dTbmZZT0FBQUFIaEpSRUZVZUp4bDBGc1dnQ0FJQkZBbDBiSlNlK3gvcmFHbEpNN25QUXB6VUtwR2F6VUdwdEVNb3BGbUhhS1RPQ05sRmcrWGpJdmx0WDdkOE11MitwMG80SkNnTEVnREdpSVZ5dUJlNFZzV0UxdUtkZi9CZVBUTjMzRC9YNjNROEdROEcxNTVxekc1QlIrRkhwUUxhL3BTTFlaMmRIM25TZzgrU2dUb0EvQUd1d0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHMgZnJvbSAnLi9jYXRlZ29yaWVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTmV3UG9zdHMgZnJvbSAnLi9OZXdQb3N0cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3JpZXMoeyBjYXRlZ29yaWVzLCBuZXdQb3N0cywgZmlsdGVyUG9zdHMgfSkge1xyXG4gIGNvbnN0IFtmaWx0ZXJDYXRlZ29yeSwgc2V0RmlsdGVyQ2F0ZWdvcnldID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBjaGFuZ2VDYXRlZ29yeSA9IChjYXRlZ29yeSwgaWQpID0+IHtcclxuICAgIHNldEZpbHRlckNhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgIGZpbHRlclBvc3RzKHsnY2F0ZWdvcnlfaWQnOiBpZH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3MuY2F0ZWdvcmllc19ibG9ja30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3MuY2F0ZWdvcmllc190aXRsZX1gfT5cclxuICAgICAgICA8cD5TRUxFQ1QgQSBDQVRFR09SWTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNhdGVnb3JpZXNfY29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3MuY2F0ZWdvcmllc19jb250cm9sfWB9PlxyXG4gICAgICAgICAgeyhjYXRlZ29yaWVzICYmIGNhdGVnb3JpZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICA/IGNhdGVnb3JpZXMubWFwKChjLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBjaGFuZ2VDYXRlZ29yeShjLm5hbWUudG9Mb3dlckNhc2UoKSwgYy5pZCl9IGNsYXNzTmFtZT17YCR7cy5jYXRlZ29yeX0gJHtmaWx0ZXJDYXRlZ29yeSA9PT0gYy5uYW1lLnRvTG93ZXJDYXNlKCkgPyAnYWN0aXZlX2J0bl9ibHVlJyA6ICcnfWB9PntjLm5hbWUudG9VcHBlckNhc2UoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIDogPD48ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHRleHQtaW5mb1wiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGwtMiB0ZXh0LWluZm9cIj5ObyBjYXRlZ29yaWVzIGZyb20gc2VydmVyLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICA8Lz59XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3MuY2F0ZWdvcmllc19zdWJ0aXRsZX1gfT5cclxuICAgICAgICAgIDxwPk5FVyBPTiBUSEUgU0lURTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jYXRlZ29yaWVzX2Nhcm91c2VsfT5cclxuICAgICAgICAgIDxOZXdQb3N0cyBuZXdQb3N0cz17bmV3UG9zdHN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcyBmcm9tIFwiLi9lc2NvcnQubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IE1vZGVsc0ZpbHRlciBmcm9tIFwiLi4vbW9kZWxzLWZpbHRlci9Nb2RlbHNGaWx0ZXJcIjtcclxuaW1wb3J0IEVzY29ydExpc3QgZnJvbSBcIi4vRXNjb3J0TGlzdFwiO1xyXG5pbXBvcnQgRXNjb3J0R3JpZCBmcm9tIFwiLi9Fc2NvcnRHcmlkXCI7XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVzY29ydENvbnRlbnQoe1xyXG4gIHBvc3RzLFxyXG4gIHBhZ2VzTnVtYmVyLFxyXG4gIHNlbGVjdFBvc3RzUGFnZSxcclxuICBhdmFpbGFiaWxpdHksXHJcbiAgYXZhaWxhYmxlX3RvLFxyXG4gIGV0aG5pY2l0eSxcclxuICBleWVzLFxyXG4gIGhhaXIsXHJcbiAgYWZmaWxpYXRpb24sXHJcbiAgZmlsdGVyUG9zdHMsXHJcbiAgYWRkVG9GYXZvcml0ZXMsXHJcbiAgc29ydFBvc3RzXHJcbn0pIHtcclxuICBjb25zdCBbdmlzaWJsZUNvbXBvbmVudCwgc2V0VmlzaWJsZUNvbXBvbmVudF0gPSB1c2VTdGF0ZShcImxpc3RcIik7XHJcbiAgY29uc3QgW3Nob3dGaWx0ZXIsIHNldFNob3dGaWx0ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgJChcIi5maWx0ZXJfaXRlbXNfYmxvY2tcIikuaGlkZSgoKSA9PiB7XHJcbiAgICAgIHNldFNob3dGaWx0ZXIoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzbGlkZUZpbHRlciA9ICgpID0+IHtcclxuICAgICQoXCIuZmlsdGVyX2l0ZW1zX2Jsb2NrXCIpLnNsaWRlVG9nZ2xlKCgpID0+IHtcclxuICAgICAgc2V0U2hvd0ZpbHRlcighc2hvd0ZpbHRlcik7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VWaXNpYmxlQ29tcG9uZW50ID0gKGUpID0+IHtcclxuICAgIGUucGVyc2lzdCgpO1xyXG4gICAgJChcIi5tb2RlbHMtdmlldy1ibG9ja1wiKS5mYWRlT3V0KDMwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXRWaXNpYmxlQ29tcG9uZW50KCQoZS50YXJnZXQpLmF0dHIoXCJuYW1lXCIpKTtcclxuICAgICAgJChcIi5tb2RlbHMtdmlldy1ibG9ja1wiKS5mYWRlSW4oNzAwKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3MuZXNjb3J0X2NvbnRlbnRfYmxvY2t9IHN0eWxlPXt7IG1pbkhlaWdodDogXCIxMDB2aFwiIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLmVzY29ydF9jb250ZW50X3RpdGxlfWB9PlxyXG4gICAgICAgIDxwPk1lZXQgb3VyIHNlbGVjdGlvbiBvZiB3b3JsZHdpZGUgZXNjb3J0czwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzLmZpbHRlcl9zb3J0X2NvbnRyb2x9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZmlsdGVyX2J0bl93cmFwfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmZpbHRlcl9idG5fZ3JvdXB9PlxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtzbGlkZUZpbHRlcn0gY2xhc3NOYW1lPXtgcGwtMiAke3MuZmlsdGVyX2J0bn1gfT5cclxuICAgICAgICAgICAgICBGSUxURVJcclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17YHBsLTIgZm9ybS1jb250cm9sIGJvcmRlci0wICR7cy5zb3J0aW5nX2J0bn1gfSBvbkNoYW5nZT17ZSA9PiBzb3J0UG9zdHMoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVmYXVsdFwiIGhpZGRlbj5cclxuICAgICAgICAgICAgICAgIFNPUlRJTkdcclxuXHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICB7LyogPG9wdGlvbiB2YWx1ZT1cInByaWNlIC8gZnJvbSBiaWdlciB0byBzbWFsbGVyXCI+XHJcbiAgICAgICAgICAgICAgICBwcmljZSAvIGZyb20gYmlnZXIgdG8gc21hbGxlclxyXG5cdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmljZSAvIGZyb20gc21hbGxlciB0byBiaWdlclwiPlxyXG4gICAgICAgICAgICAgICAgcHJpY2UgLyBmcm9tIHNtYWxsZXIgdG8gYmlnZXJcclxuXHRcdFx0XHRcdFx0XHQ8L29wdGlvbj4gKi99XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhdGUvLVwiPmRhdGUgYWRkZWQgZnJvbSBuZXc8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGF0ZS8rXCI+ZGF0ZSBhZGRlZCBmcm9tIG9sZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZXZpZXdzLy1cIj5udW1iZXIgb2YgY29tbWVudHMgZnJvbSBsZXNzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJldmlld3MvK1wiPm51bWJlciBvZiBjb21tZW50cyBmcm9tIG1vcmU8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmZpbHRlcl9idG5fZ3JvdXB9PlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIG5hbWU9XCJncmlkXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BncmlkX2J0biBjYXJvdXNlbF9sYXlvdXRfY2hhbmdlX2J0biAke1xyXG4gICAgICAgICAgICAgICAgdmlzaWJsZUNvbXBvbmVudCA9PT0gXCJncmlkXCIgPyBcImFjdGl2ZV9idG5fcGlua1wiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSAke3MuZ3JpZF9idG59YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlVmlzaWJsZUNvbXBvbmVudChlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEdSSURcclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIG5hbWU9XCJsaXN0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BsaXN0X2J0biBjYXJvdXNlbF9sYXlvdXRfY2hhbmdlX2J0biAke1xyXG4gICAgICAgICAgICAgICAgdmlzaWJsZUNvbXBvbmVudCA9PT0gXCJsaXN0XCIgPyBcImFjdGl2ZV9idG5fcGlua1wiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSAke3MubGlzdF9idG59YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlVmlzaWJsZUNvbXBvbmVudChlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExJU1RcclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BmaWx0ZXJfaXRlbXNfYmxvY2sgJHtzLmZpbHRlcl9pdGVtc19ibG9ja31gfT5cclxuICAgICAgICA8TW9kZWxzRmlsdGVyXHJcbiAgICAgICAgICBhdmFpbGFiaWxpdHk9e2F2YWlsYWJpbGl0eX1cclxuICAgICAgICAgIGF2YWlsYWJsZV90bz17YXZhaWxhYmxlX3RvfVxyXG4gICAgICAgICAgZXRobmljaXR5PXtldGhuaWNpdHl9XHJcbiAgICAgICAgICBhZmZpbGlhdGlvbj17YWZmaWxpYXRpb259XHJcbiAgICAgICAgICBmaWx0ZXJQb3N0cz17ZmlsdGVyUG9zdHN9XHJcbiAgICAgICAgICBleWVzPXtleWVzfVxyXG4gICAgICAgICAgaGFpcj17aGFpcn1cclxuICAgICAgICAgIHNsaWRlRmlsdGVyPXtzbGlkZUZpbHRlcn0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVscy12aWV3LWJsb2NrXCI+XHJcbiAgICAgICAge3Zpc2libGVDb21wb25lbnQgPT09IFwibGlzdFwiID8gKFxyXG4gICAgICAgICAgPEVzY29ydExpc3RcclxuICAgICAgICAgICAgcG9zdHM9e3Bvc3RzfVxyXG4gICAgICAgICAgICBwYWdlc051bWJlcj17cGFnZXNOdW1iZXJ9XHJcbiAgICAgICAgICAgIHNlbGVjdFBvc3RzUGFnZT17c2VsZWN0UG9zdHNQYWdlfVxyXG4gICAgICAgICAgICBhZGRUb0Zhdm9yaXRlcz17YWRkVG9GYXZvcml0ZXN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxFc2NvcnRHcmlkXHJcbiAgICAgICAgICAgICAgcG9zdHM9e3Bvc3RzfVxyXG4gICAgICAgICAgICAgIHBhZ2VzTnVtYmVyPXtwYWdlc051bWJlcn1cclxuICAgICAgICAgICAgICBzZWxlY3RQb3N0c1BhZ2U9e3NlbGVjdFBvc3RzUGFnZX1cclxuICAgICAgICAgICAgICBhZGRUb0Zhdm9yaXRlcz17YWRkVG9GYXZvcml0ZXN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL2VzY29ydC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBmYXYgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9mYXZvcml0ZS1waW5rLnBuZ1wiO1xyXG5pbXBvcnQgY3Jvd24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9jcm93bi1waW5rLnBuZ1wiO1xyXG5pbXBvcnQgc3RhciBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3N0YXItcGluay5wbmdcIjtcclxuaW1wb3J0IHBsYW5lIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvcGxhbmUtcGluay5wbmdcIjtcclxuaW1wb3J0IFZlcmlmaWVkV2luZG93IGZyb20gXCIuLi9tb2RhbC13aW5kb3cvVmVyaWZpZWRXaW5kb3dcIjtcclxuXHJcbmltcG9ydCBtb2RlbCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL2hvcml6b250YWwvbW9kZWwtMS5wbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVzY29ydEdyaWQoeyBwb3N0cywgcGFnZXNOdW1iZXIsIHNlbGVjdFBvc3RzUGFnZSwgYWRkVG9GYXZvcml0ZXMgfSkge1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3BhZ2VzLCBzZXRQYWdlc10gPSB1c2VTdGF0ZShbMV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UGFnZXMoWzFdKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZXNOdW1iZXI7IGkrKykge1xyXG4gICAgICBwYWdlcy5wdXNoKDEpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBtYXhXaWR0aDogXCIxMjYwcHhcIixcclxuICAgICAgICBtYXJnaW46IFwiMWVtIGF1dG9cIixcclxuICAgICAgICBwYWRkaW5nOiBcIjAgMCA1ZW0gMFwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cG9zdHMgJiYgcG9zdHMubGVuZ3RoID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBwLTBcIj5cclxuICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MudmVydGljYWxfc2xpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnZlcnRpY2FsX3NsaWRlX2ltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwb3N0LnBob3RvX2hvcml6b250YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC5tb2RlbF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MubW9kZWxfcGhvdG9fZ3JpZH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MudmVydGljYWxfc2xpZGVfbW9kZWxfaW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3MubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5tb2RlbF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5uZXR3b3JrX3N0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3Quc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7cy5sb2NhdGlvbn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NhdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3Muc3VtbWFyeX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5zdW1tYXJ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNhcmRfY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Zhdn0gYWx0PVwiXCIgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvRmF2b3JpdGVzKHBvc3QuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjcm93bn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3N0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwbGFuZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke3MudmVyaWZpY2F0aW9ufWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MudmVyaWZpZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxWZXJpZmllZFdpbmRvdyBidXR0b25MYWJlbD17YFZFUklGSUVEYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnZpZXdfcHJvZmlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvbW9kZWxQcm9maWxlXCIsIHF1ZXJ5OiB7IGlkOiBwb3N0LmlkIH0gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gdGV4dC13aGl0ZVwiPlZJRVcgUFJPRklMRTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiUGFnZSBuYXZpZ2F0aW9uIGV4YW1wbGVcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb24ganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2UtbGluayBiZy1kYXJrIHRleHQtd2hpdGUgYm9yZGVyLXNlY29uZGFyeVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UG9zdHNQYWdlKGN1cnJlbnRQYWdlIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIFByZXZpb3VzXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICB7cGFnZXMubWFwKChwLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFnZS1saW5rIGJnLWRhcmsgdGV4dC13aGl0ZSBib3JkZXItc2Vjb25kYXJ5XCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RQb3N0c1BhZ2UoaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PntpICsgMX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2UtbGluayBiZy1kYXJrIHRleHQtd2hpdGUgYm9yZGVyLXNlY29uZGFyeVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgcGFnZXNOdW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFBvc3RzUGFnZShjdXJyZW50UGFnZSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICBOZXh0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMSB0ZXh0LWluZm8gdGV4dC1jZW50ZXIgcHktNVwiPk5vIHBvc3RzLi4uPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICA8L2RpdiA+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gYWJvdXQ6IFwiYWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dFwiXHJcbi8vIGFjY291bnRfbmFtZTogXCJhY2NvdW50X25hbWVhY2NvdW50X25hbWVhY2NvdW50X25hbWVhY2NvdW50X25hbWVcIlxyXG4vLyBhZmZpbGlhdGlvbl9pZDogbnVsbFxyXG4vLyBhZ2U6IDIyXHJcbi8vIGF2YWlsYWJsZV90b19kYXRlOiBudWxsXHJcbi8vIGNhdGVnb3J5X2lkOiBudWxsXHJcbi8vIGNpdHlfaWQ6IG51bGxcclxuLy8gY3JlYXRlZF9hdDogXCIyMDIwLTA2LTE5VDEwOjM1OjAwLjAwMDAwMFpcIlxyXG4vLyBldGhuaWNpdHlfaWQ6IG51bGxcclxuLy8gZXllX2lkOiBudWxsXHJcbi8vIGdlbmRlcjogXCJtYW5cIlxyXG4vLyBoYWlyX2lkOiBudWxsXHJcbi8vIGhlaWdodDogXCIyMzVcIlxyXG4vLyBpZDogMVxyXG4vLyBpc19tb3JlX3Bob3RvczogMFxyXG4vLyBpc19waG90b3NfdmlwOiAwXHJcbi8vIGlzX3B1Ymxpc2hlZDogMFxyXG4vLyBpc192ZXJpZnk6IDBcclxuLy8gaXNfdmlwOiAwXHJcbi8vIG1vZGVsX25hbWU6IFwiU2hsdWhhXCJcclxuLy8gcGhvdG86IG51bGxcclxuLy8gc2Vjb25kX25hbWU6IFwic2Vjb25kXCJcclxuLy8gc3RhdGVfaWQ6IG51bGxcclxuLy8gc3RhdHVzOiBcIm90aGVyXCJcclxuLy8gc3VtbWFyeTogXCJzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeVwiXHJcbi8vIHVwZGF0ZWRfYXQ6IFwiMjAyMC0wNi0yMlQwNjozNDoxMi4wMDAwMDBaXCJcclxuLy8gdXNlcl9pZDogbnVsbFxyXG4vLyB2aWRlb19saW5rOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VFFnR0Z3VldEMjQmbGlzdD1SRC05Um5nOE91TTEwJmluZGV4PTJcIlxyXG4vLyB2aXBfdG9fZGF0ZTogbnVsbFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbi8vIGltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCJcclxuaW1wb3J0IHMgZnJvbSAnLi9lc2NvcnQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBmYXYgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL2Zhdm9yaXRlLXBpbmsucG5nJ1xyXG5pbXBvcnQgcGxhbmUgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluL3NpZ25zL3BsYW5lLXBpbmsucG5nJ1xyXG5pbXBvcnQgc3RhciBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vc2lnbnMvc3Rhci1waW5rLnBuZydcclxuaW1wb3J0IGNyb3duIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi9zaWducy9jcm93bi1waW5rLnBuZydcclxuXHJcbmltcG9ydCBtb2RlbCBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL21haW4vaG9yaXpvbnRhbC9tb2RlbC0xLnBuZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVzY29ydExpc3QoeyBwb3N0cywgcGFnZXNOdW1iZXIsIHNlbGVjdFBvc3RzUGFnZSwgYWRkVG9GYXZvcml0ZXMgfSkge1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3BhZ2VzLCBzZXRQYWdlc10gPSB1c2VTdGF0ZShbMV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UGFnZXMoWzFdKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZXNOdW1iZXI7IGkrKykge1xyXG4gICAgICBwYWdlcy5wdXNoKDEpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogODAwMCxcclxuICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxMDI1LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OSxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICBpbml0aWFsU2xpZGU6IDJcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgbWF4V2lkdGg6ICcxMjYwcHgnLFxyXG4gICAgICBwYWRkaW5nOiAnMS41ZW0gMCA1ZW0gMCcsXHJcbiAgICAgIG1hcmdpbjogJzAgYXV0bydcclxuICAgIH19PlxyXG4gICAgICB7KHBvc3RzICYmIHBvc3RzLmxlbmd0aCkgPyA8PlxyXG4gICAgICAgIHsvKiA8U2xpZGVyIHsuLi5zZXR0aW5nc30gPiAqL31cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtgJHtzLmVzY29ydF9saXN0fWB9PlxyXG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0gY2xhc3NOYW1lPXtzLnNsaWRlfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9tb2RlbFByb2ZpbGVcIiwgcXVlcnk6IHsgaWQ6IHBvc3QuaWQgfSB9fT48YT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1vZGVsX3Bob3RvfT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QucGhvdG9fdmVydGljYWx9IGFsdD17cG9zdC5tb2RlbF9uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5tb2RlbF9pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW9kZWxfaW5mb190aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57cG9zdC5tb2RlbF9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0+e3Bvc3Quc3RhdHVzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2lnbnNfZ3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Zhdn0gYWx0PVwibW9kZWxcIiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvRmF2b3JpdGVzKHBvc3QuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjcm93bn0gYWx0PVwibW9kZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3N0YXJ9IGFsdD1cIm1vZGVsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwbGFuZX0gYWx0PVwibW9kZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIHsvKiA8L1NsaWRlcj4gKi99XHJcbiAgICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiUGFnZSBuYXZpZ2F0aW9uIGV4YW1wbGVcIiBjbGFzc05hbWU9XCJwdC00XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwYWdlLWxpbmsgYmctZGFyayB0ZXh0LXdoaXRlIGJvcmRlci1zZWNvbmRhcnlcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RQb3N0c1BhZ2UoY3VycmVudFBhZ2UgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAge3BhZ2VzLm1hcCgocCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFnZS1saW5rIGJnLWRhcmsgdGV4dC13aGl0ZSBib3JkZXItc2Vjb25kYXJ5XCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RQb3N0c1BhZ2UoaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgfX0+e2kgKyAxfTwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2UtbGluayBiZy1kYXJrIHRleHQtd2hpdGUgYm9yZGVyLXNlY29uZGFyeVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgcGFnZXNOdW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RQb3N0c1BhZ2UoY3VycmVudFBhZ2UgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC8+XHJcbiAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cImgxIHRleHQtaW5mbyB0ZXh0LWNlbnRlciBweS01XCI+Tm8gcG9zdHMuLi48L2Rpdj59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbi8vIGFib3V0OiBcImFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRhYm91dGFib3V0YWJvdXRcIlxyXG4gICAgLy8gYWNjb3VudF9uYW1lOiBcImFjY291bnRfbmFtZWFjY291bnRfbmFtZWFjY291bnRfbmFtZWFjY291bnRfbmFtZVwiXHJcbiAgICAvLyBhZmZpbGlhdGlvbl9pZDogbnVsbFxyXG4gICAgLy8gYWdlOiAyMlxyXG4gICAgLy8gYXZhaWxhYmxlX3RvX2RhdGU6IG51bGxcclxuICAgIC8vIGNhdGVnb3J5X2lkOiBudWxsXHJcbiAgICAvLyBjaXR5X2lkOiBudWxsXHJcbiAgICAvLyBjcmVhdGVkX2F0OiBcIjIwMjAtMDYtMTlUMTA6MzU6MDAuMDAwMDAwWlwiXHJcbiAgICAvLyBldGhuaWNpdHlfaWQ6IG51bGxcclxuICAgIC8vIGV5ZV9pZDogbnVsbFxyXG4gICAgLy8gZ2VuZGVyOiBcIm1hblwiXHJcbiAgICAvLyBoYWlyX2lkOiBudWxsXHJcbiAgICAvLyBoZWlnaHQ6IFwiMjM1XCJcclxuICAgIC8vIGlkOiAxXHJcbiAgICAvLyBpc19tb3JlX3Bob3RvczogMFxyXG4gICAgLy8gaXNfcGhvdG9zX3ZpcDogMFxyXG4gICAgLy8gaXNfcHVibGlzaGVkOiAwXHJcbiAgICAvLyBpc192ZXJpZnk6IDBcclxuICAgIC8vIGlzX3ZpcDogMFxyXG4gICAgLy8gbW9kZWxfbmFtZTogXCJTaGx1aGFcIlxyXG4gICAgLy8gcGhvdG86IG51bGxcclxuICAgIC8vIHNlY29uZF9uYW1lOiBcInNlY29uZFwiXHJcbiAgICAvLyBzdGF0ZV9pZDogbnVsbFxyXG4gICAgLy8gc3RhdHVzOiBcIm90aGVyXCJcclxuICAgIC8vIHN1bW1hcnk6IFwic3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlzdW1tYXJ5c3VtbWFyeXN1bW1hcnlcIlxyXG4gICAgLy8gdXBkYXRlZF9hdDogXCIyMDIwLTA2LTIyVDA2OjM0OjEyLjAwMDAwMFpcIlxyXG4gICAgLy8gdXNlcl9pZDogbnVsbFxyXG4gICAgLy8gdmlkZW9fbGluazogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVRRZ0dGd1ZXRDI0Jmxpc3Q9UkQtOVJuZzhPdU0xMCZpbmRleD0yXCJcclxuICAgIC8vIHZpcF90b19kYXRlOiBudWxsIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgcyBmcm9tIFwiLi9sb2NhdGlvbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NhdGlvbih7IHN0YXRlcywgZ2V0Q2l0aWVzIH0pIHtcclxuICBjb25zdCBbY3VycmVudExvY2F0aW9uLCBzZXRDdXJyZW50TG9jYXRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBjaGFuZ2VMb2NhdGlvbiA9IHN0YXRlSWQgPT4ge1xyXG4gICAgZ2V0Q2l0aWVzKHN0YXRlSWQpO1xyXG4gICAgc2V0Q3VycmVudExvY2F0aW9uKHN0YXRlSWQpO1xyXG4gICAgc3RhdGVzLmZvckVhY2goc3RhdGUgPT4ge1xyXG4gICAgICBpZiAoK3N0YXRlLmlkID09PSArc3RhdGVJZCkge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIHBhdGhuYW1lOiBgL2xvY2F0aW9uYCxcclxuICAgICAgICAgIHF1ZXJ5OiB7IHN0YXRlOiBzdGF0ZS5uYW1lLCBpZDogc3RhdGUuaWQgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3MubG9jYXRpb25fd3JhcHBlcn0+XHJcbiAgICAgIHtzdGF0ZXMubGVuZ3RoID8gPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLmxvY2F0b25fYmxvY2tfdGl0bGV9YH0+XHJcbiAgICAgICAgICA8cD5TRUxFQ1QgQSBMT0NBVElPTiBCRUxPVzwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5sb2NhdGlvbl9ibG9ja19zZWxlY3R9PlxyXG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VMb2NhdGlvbihlLnRhcmdldC52YWx1ZSl9ID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlZmF1bHRcIiBoaWRkZW4+TG9jYXRpb248L29wdGlvbj5cclxuICAgICAgICAgICAge3N0YXRlcy5tYXAoKHN0YXRlLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtzdGF0ZS5pZH0+e3N0YXRlLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubG9jYXRpb25fYmxvY2tfbGlzdH0+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtzdGF0ZXMubWFwKChzdGF0ZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IGNoYW5nZUxvY2F0aW9uKHN0YXRlLmlkKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIHRleHQtd2hpdGUgbG9jYXRpb25faXRlbWB9PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjdXJyZW50TG9jYXRpb24gPT09IHN0YXRlID8gJ2FjdGl2ZV9idG5fYmx1ZScgOiAnJ30+e3N0YXRlLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+IDogbnVsbH1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHMgZnJvbSBcIi4vY2F0ZWdvcmllcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2ltcGxlU2xpZGVyKHsgbmV3UG9zdHMgfSkge1xyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogMTAwMDAsXHJcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTAyNSxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA3NjksXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgaW5pdGlhbFNsaWRlOiAyXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGZhZGU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICBtYXhXaWR0aDogJzEyNjBweCdcclxuICAgIH19PlxyXG4gICAgICA8U2xpZGVyXHJcbiAgICAgICAgey4uLnNldHRpbmdzfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBtYXhXaWR0aDogXCIxMjYwcHhcIixcclxuICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge25ld1Bvc3RzICYmIG5ld1Bvc3RzLmxlbmd0aFxyXG4gICAgICAgICAgPyBuZXdQb3N0cy5tYXAoKHBvc3QsIGkpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNsaWRlfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL21vZGVsUHJvZmlsZVwiLCBxdWVyeTogeyBpZDogcG9zdC5pZCB9IH19PlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5waG90b192ZXJ0aWNhbH0gYWx0PVwibW9kZWxcIiBjbGFzc05hbWU9XCJ3LTEwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0Lm1vZGVsX25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSkgOiBudWxsfVxyXG4gICAgICA8L1NsaWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcyBmcm9tICcuL3NlYXJjaC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzLnNlYXJjaF9ibG9ja30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNlYXJjaF9ibG9ja19jb250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLnNlYXJjaF9pbnB1dF9sYWJlbH1gfT5TRUFSQ0g8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zZWFyY2hfaW5wdXR9PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtzLmFkZF9wb3N0X2J0bn1gfT5cclxuICAgICAgICAgIDxzcGFuPlBPU1QgQUQ8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXRlZ29yaWVzX2Jsb2NrXCI6IFwiY2F0ZWdvcmllc19jYXRlZ29yaWVzX2Jsb2NrX18xNEFWX1wiLFxuXHRcImNhdGVnb3JpZXNfdGl0bGVcIjogXCJjYXRlZ29yaWVzX2NhdGVnb3JpZXNfdGl0bGVfXzNLeU9YXCIsXG5cdFwiY2F0ZWdvcmllc19jb250ZW50XCI6IFwiY2F0ZWdvcmllc19jYXRlZ29yaWVzX2NvbnRlbnRfXzJ2UHV0XCIsXG5cdFwiY2F0ZWdvcmllc19jb250cm9sXCI6IFwiY2F0ZWdvcmllc19jYXRlZ29yaWVzX2NvbnRyb2xfXzJncGNlXCIsXG5cdFwiY2F0ZWdvcnlcIjogXCJjYXRlZ29yaWVzX2NhdGVnb3J5X18zUkdqd1wiLFxuXHRcImNhdGVnb3JpZXNfc3VidGl0bGVcIjogXCJjYXRlZ29yaWVzX2NhdGVnb3JpZXNfc3VidGl0bGVfXzNZbVhhXCIsXG5cdFwic2xpZGVcIjogXCJjYXRlZ29yaWVzX3NsaWRlX18yTE5qdVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZXNjb3J0X2NvbnRlbnRfdGl0bGVcIjogXCJlc2NvcnRfZXNjb3J0X2NvbnRlbnRfdGl0bGVfXzJjVlc2XCIsXG5cdFwiZmlsdGVyX3NvcnRfY29udHJvbFwiOiBcImVzY29ydF9maWx0ZXJfc29ydF9jb250cm9sX18yeUlUaVwiLFxuXHRcImZpbHRlcl9idG5fd3JhcFwiOiBcImVzY29ydF9maWx0ZXJfYnRuX3dyYXBfXzFzQUNkXCIsXG5cdFwiZmlsdGVyX2J0bl9ncm91cFwiOiBcImVzY29ydF9maWx0ZXJfYnRuX2dyb3VwX194LUZTTVwiLFxuXHRcInNvcnRpbmdfYnRuXCI6IFwiZXNjb3J0X3NvcnRpbmdfYnRuX18zOGpoM1wiLFxuXHRcImZpbHRlcl9pdGVtc19ibG9ja1wiOiBcImVzY29ydF9maWx0ZXJfaXRlbXNfYmxvY2tfXzNNcWEzXCIsXG5cdFwiZXNjb3J0X2xpc3RcIjogXCJlc2NvcnRfZXNjb3J0X2xpc3RfXzFONTBaXCIsXG5cdFwic2xpZGVcIjogXCJlc2NvcnRfc2xpZGVfX3FuYklqXCIsXG5cdFwibW9kZWxfcGhvdG9cIjogXCJlc2NvcnRfbW9kZWxfcGhvdG9fXzN0eWVEXCIsXG5cdFwibW9kZWxfaW5mb1wiOiBcImVzY29ydF9tb2RlbF9pbmZvX19pRjJBWlwiLFxuXHRcIm1vZGVsX2luZm9fdGl0bGVcIjogXCJlc2NvcnRfbW9kZWxfaW5mb190aXRsZV9fM05ZbVhcIixcblx0XCJzaWduc19ncm91cFwiOiBcImVzY29ydF9zaWduc19ncm91cF9fZGV0d0VcIixcblx0XCJ2ZXJ0aWNhbF9zbGlkZVwiOiBcImVzY29ydF92ZXJ0aWNhbF9zbGlkZV9fMXp5QWFcIixcblx0XCJ2ZXJ0aWNhbF9zbGlkZV9pbWFnZVwiOiBcImVzY29ydF92ZXJ0aWNhbF9zbGlkZV9pbWFnZV9fMXlGbEhcIixcblx0XCJ2ZXJ0aWNhbF9zbGlkZV9tb2RlbF9pbmZvXCI6IFwiZXNjb3J0X3ZlcnRpY2FsX3NsaWRlX21vZGVsX2luZm9fXzNiaW9vXCIsXG5cdFwibmFtZVwiOiBcImVzY29ydF9uYW1lX18ydlZ5V1wiLFxuXHRcIm5ldHdvcmtfc3RhdHVzXCI6IFwiZXNjb3J0X25ldHdvcmtfc3RhdHVzX18xWWNBdVwiLFxuXHRcImxvY2F0aW9uXCI6IFwiZXNjb3J0X2xvY2F0aW9uX18xd1M0bFwiLFxuXHRcInN1bW1hcnlcIjogXCJlc2NvcnRfc3VtbWFyeV9fT2VUa2pcIixcblx0XCJ2ZXJpZmljYXRpb25cIjogXCJlc2NvcnRfdmVyaWZpY2F0aW9uX18yOWo4NlwiLFxuXHRcImNhcmRfY29udHJvbFwiOiBcImVzY29ydF9jYXJkX2NvbnRyb2xfXzFkV1N2XCIsXG5cdFwidmVyaWZpZWRcIjogXCJlc2NvcnRfdmVyaWZpZWRfXzFBdE1vXCIsXG5cdFwidmlld19wcm9maWxlXCI6IFwiZXNjb3J0X3ZpZXdfcHJvZmlsZV9felZBZzZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvY2F0aW9uX3dyYXBwZXJcIjogXCJsb2NhdGlvbl9sb2NhdGlvbl93cmFwcGVyX18xYU9MMFwiLFxuXHRcImxvY2F0b25fYmxvY2tfdGl0bGVcIjogXCJsb2NhdGlvbl9sb2NhdG9uX2Jsb2NrX3RpdGxlX19sWUR6S1wiLFxuXHRcImxvY2F0aW9uX2Jsb2NrX3NlbGVjdFwiOiBcImxvY2F0aW9uX2xvY2F0aW9uX2Jsb2NrX3NlbGVjdF9fWTFhV2lcIixcblx0XCJsb2NhdGlvbl9ibG9ja19saXN0XCI6IFwibG9jYXRpb25fbG9jYXRpb25fYmxvY2tfbGlzdF9fMUlqYllcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaF9ibG9ja1wiOiBcInNlYXJjaF9zZWFyY2hfYmxvY2tfXzIxc01TXCIsXG5cdFwic2VhcmNoX2Jsb2NrX2NvbnRlbnRcIjogXCJzZWFyY2hfc2VhcmNoX2Jsb2NrX2NvbnRlbnRfXzFadkxsXCIsXG5cdFwic2VhcmNoX2lucHV0X2xhYmVsXCI6IFwic2VhcmNoX3NlYXJjaF9pbnB1dF9sYWJlbF9fMXVKcHFcIixcblx0XCJzZWFyY2hfaW5wdXRcIjogXCJzZWFyY2hfc2VhcmNoX2lucHV0X18yWE1sc1wiLFxuXHRcImFkZF9wb3N0X2J0blwiOiBcInNlYXJjaF9hZGRfcG9zdF9idG5fXzNjRThiXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIEZvcm0gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IFZlcmlmaWVkV2luZG93ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgYnV0dG9uTGFiZWwsXHJcbiAgICBjbGFzc05hbWVcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldE1vZGFsKCFtb2RhbCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Rm9ybSBpbmxpbmUgb25TdWJtaXQ9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJcIiBjbGFzc05hbWU9e2BwLTAgdGV4dC13aGl0ZWB9IG9uQ2xpY2s9e3RvZ2dsZX0+e2J1dHRvbkxhYmVsfTwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICA8TW9kYWwgaXNPcGVuPXttb2RhbH0gdG9nZ2xlPXt0b2dnbGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0b2dnbGV9IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdBdWRpb3dpZGUsIGN1cnNpdmUnIH19IGNsYXNzTmFtZT1cImJnLWRhcmsgdGV4dC1pbmZvIGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeVwiID5WaWJlIENpdHkgVmVyaWZpZWQ8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbEJvZHkgY2xhc3NOYW1lPVwiYmctZGFyayB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8cD5JbiBvcmRlciBmb3IgYW4gRXJvcyBhZHZlcnRpc2VyIHRvIGJlIGVsaWdpYmxlIHRvIGhhdmUgdGhlIFZlcmlmaWVkIHNlYWwgYWZmaXhlZCB0byB0aGVpciBhZHZlcnRpc2VtZW50IG9yIHRvIGJlIHBsYWNlZCBpbiBFcm9zJyBWZXJpZmllZCBjYXRlZ29yeSwgdGhlIEVyb3MgR3VpZGUgbXVzdCBoYXZlIHJlY2VpdmVkIHRhbmdpYmxlIGluZm9ybWF0aW9uIHRoYXQgdGhlIGluZGl2aWR1YWwgYXBwZWFyaW5nIGluIHRoZSBwaG90b2dyYXBocyBvbiBhbnkgc3BlY2lmaWMgYWR2ZXJ0aXNlbWVudCBpbnRlbmRlZCB0byBiZSBhZHZlcnRpc2VkIG9uIHRoZSBFcm9zIEd1aWRlIGlzIGFuIGluZGl2aWR1YWwgcHJvdmlkaW5nIGFkdWx0IGNvbXBhbmlvbnNoaXAuIFN1Y2ggcHJvb2YgY291bGQgaW5jbHVkZSBjb21wYXJpbmcgdGhlIHBpY3R1cmVzIHN1Ym1pdHRlZCB0byB0aGUgRXJvcyBHdWlkZSBvbiBhbiBhZHZlcnRpc2VtZW50IHdpdGggZWl0aGVyIGdvdmVybm1lbnQgaXNzdWVkIElE4oCZcyBvdGhlciBwaG90b2dyYXBoaWMgZXZpZGVuY2UuPC9wPlxyXG4gICAgICAgICAgPHA+SG93ZXZlciwgcGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIEVyb3MgR3VpZGUgY2Fubm90IGFuZCBkb2VzIG5vdCBtYWtlIGFueSBndWFyYW50ZWVzIG9yIHdhcnJhbnRpZXMgdGhhdCBlaXRoZXIgKGEpIHRoZSBhZHZlcnRpc2VyIGluIHRoZSBwaWN0dXJlcyBvbiBhbnkgcGFydGljdWxhciBhZCB3aWxsIGJlIHRoZSBzYW1lIGluZGl2aWR1YWwgd2hvIHNob3dzIHVwIGZvciBhbnkgZGF0ZSBhcnJhbmdlZCBiZXR3ZWVuIGFuIGFkdmVydGlzZXIgYW5kIHlvdXJzZWxmLCAoYikgdGhhdCBhbnkgb2YgdGhlIHRleHQsIGluY2x1ZGluZyB0aGUgbmFtZSBvZiB0aGUgYWR2ZXJ0aXNlciwgb3Igc3RhdHMgdGhhdCBhcHBlYXJzIG9uIGFuIGFkdmVydGlzZW1lbnQsIGlzIGFjY3VyYXRlIG9yIHRydXRoZnVsLiBGaW5hbGx5LCB0aGUgdGVybSDigJxWZXJpZmllZOKAnSBkb2VzIG5vdCBtZWFuIHRoYXQgRXJvcyBHdWlkZSBoYXMgcmV2aWV3ZWQgb3IgY29uZmlybWVkIGFueSBsaWNlbnN1cmUgb3IgcGVybWl0cyBpc3N1ZWQgdG8gdGhlIGFkdmVydGlzZXIuPC9wPlxyXG4gICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVyaWZpZWRXaW5kb3c7XHJcblxyXG5cclxuTW9kYWwucHJvcFR5cGVzID0ge1xyXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjZW50ZXJlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0b2dnbGU6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHJvbGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFiZWxsZWRCeTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBrZXlib2FyZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgYmFja2Ryb3A6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBQcm9wVHlwZXMub25lT2YoWydzdGF0aWMnXSlcclxuICBdKSxcclxuICBzY3JvbGxhYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uT3BlbmVkOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkNsb3NlZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHdyYXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbW9kYWxDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgYmFja2Ryb3BDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY29udGVudENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBmYWRlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjc3NNb2R1bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgekluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIF0pLFxyXG4gIHVubW91bnRPbkNsb3NlOiBQcm9wVHlwZXMuYm9vbCxcclxuICByZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IFByb3BUeXBlcy5ib29sXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL2Zvcm0ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGVsc0ZpbHRlcih7XHJcbiAgYXZhaWxhYmlsaXR5LFxyXG4gIGF2YWlsYWJsZV90byxcclxuICBldGhuaWNpdHksXHJcbiAgYWZmaWxpYXRpb24sXHJcbiAgZXllcyxcclxuICBoYWlyLFxyXG4gIGZpbHRlclBvc3RzLFxyXG4gIHNsaWRlRmlsdGVyXHJcbn0pIHtcclxuICBjb25zdCBbc2V4LCBzZXRTZXhdID0gdXNlU3RhdGUoWydnZW5kZXInLCAnJ10pO1xyXG4gIGNvbnN0IFthZ2VGcm9tLCBzZXRBZ2VGcm9tXSA9IHVzZVN0YXRlKFsnYWdlRnJvbScsIDBdKTtcclxuICBjb25zdCBbYWdlVG8sIHNldEFnZVRvXSA9IHVzZVN0YXRlKFsnYWdlVG8nLCAwXSk7XHJcbiAgY29uc3QgW3N0YXRlRXRobmljaXR5LCBzZXRFdGhuaWNpdHldID0gdXNlU3RhdGUoWydldGhuaWNpdHlfaWQnLCAnJ10pO1xyXG4gIGNvbnN0IFtzdGF0ZUhhaXIsIHNldEhhaXJdID0gdXNlU3RhdGUoWydoYWlyX2lkJywgJyddKTtcclxuICBjb25zdCBbc3RhdGVFeWUsIHNldEV5ZV0gPSB1c2VTdGF0ZShbJ2V5ZV9pZCcsICcnXSk7XHJcbiAgY29uc3QgW3N0YXRlQWZmaWxpYXRpb24sIHNldEFmZmlsaWF0aW9uXSA9IHVzZVN0YXRlKFsnYWZmaWxpYXRpb25faWQnLCAnJ10pO1xyXG4gIGNvbnN0IFtzdGF0ZUF2YWlsYWJsZVRvLCBzZXRBdmFpbGFibGVUb10gPSB1c2VTdGF0ZShbJ2F2YWlsYWJsZXRvX2lkcycsIFtdXSk7XHJcbiAgY29uc3QgW3N0YXRlQXZhaWxhYmlsaXR5LCBzZXRBdmFpbGFiaWxpdHldID0gdXNlU3RhdGUoWydhdmFpbGFiaWxpdHlfaWRzJywgW11dKTtcclxuXHJcbiAgY29uc3QgYXBwbHlGaWx0ZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZmlsdGVySXRlbXMgPSB7fTtcclxuICAgIG5ldyBQcm9taXNlKHJlcyA9PiB7XHJcbiAgICAgIFtzZXgsIHN0YXRlRXRobmljaXR5LCBzdGF0ZUhhaXIsIHN0YXRlRXllLCBzdGF0ZUFmZmlsaWF0aW9uLCBzdGF0ZUF2YWlsYWJsZVRvLCBzdGF0ZUF2YWlsYWJpbGl0eV0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbVsxXS50b1N0cmluZygpLmxlbmd0aCkge1xyXG4gICAgICAgICAgZmlsdGVySXRlbXNbaXRlbVswXV0gPSBpdGVtWzFdXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmVzKCk7XHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgZmlsdGVyUG9zdHMoZmlsdGVySXRlbXMpO1xyXG4gICAgICBzbGlkZUZpbHRlcigpO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17YXBwbHlGaWx0ZXJ9IGNsYXNzTmFtZT17cy5maWx0ZXJfZm9ybX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNleF9ibG9ja30+XHJcbiAgICAgICAgPGxlZ2VuZD5HZW5kZXI8L2xlZ2VuZD5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsfT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgdmFsdWU9XCJmZW1hbGVcIlxyXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICBuYW1lPVwic2V4XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZXgoWydnZW5kZXInLCBlLnRhcmdldC52YWx1ZV0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jaGVja21hcmt9Pjwvc3Bhbj5cclxuXHRcdFx0XHRcdEZlbWFsZVxyXG5cdFx0XHRcdDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgIHZhbHVlPVwibWFsZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgIG5hbWU9XCJzZXhcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNleChbJ2dlbmRlcicsIGUudGFyZ2V0LnZhbHVlXSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNoZWNrbWFya30+PC9zcGFuPlxyXG5cdFx0XHRcdFx0TWFsZVxyXG5cdFx0XHRcdDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7cy5hZ2VfYmxvY2t9IGZvcm0tZ3JvdXBgfT5cclxuICAgICAgICA8bGVnZW5kPkFnZTwvbGVnZW5kPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgbWluPVwiMThcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImZyb21cIlxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEFnZUZyb20oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwidG9cIlxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEFnZVRvKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7cy5ldGhuaWNpdHlfYmxvY2t9IGZvcm0tZ3JvdXBgfT5cclxuICAgICAgICA8bGVnZW5kPkV0aG5pY2l0eTo8L2xlZ2VuZD5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZHJvcGRvd25cIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFdGhuaWNpdHkoWydldGhuaWNpdHlfaWQnLCBlLnRhcmdldC52YWx1ZV0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gaGlkZGVuIHZhbHVlPVwiZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAtLSBzZWxlY3Qgb25lIC0tXHJcblx0XHRcdFx0XHQ8L29wdGlvbj5cclxuICAgICAgICAgIHtldGhuaWNpdHkubGVuZ3RoID8gZXRobmljaXR5Lm1hcChlID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2UuaWR9IHZhbHVlPXtlLmlkfT57ZS52YWx1ZX08L29wdGlvbj5cclxuICAgICAgICAgICkpIDogbnVsbH1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhhaXJfYmxvY2t9PlxyXG4gICAgICAgIDxsZWdlbmQ+SGFpcjwvbGVnZW5kPlxyXG4gICAgICAgIHtoYWlyLmxlbmd0aCA/XHJcbiAgICAgICAgICBoYWlyLm1hcChoID0+IChcclxuICAgICAgICAgICAgPGxhYmVsIGtleT17aC5pZH0gY2xhc3NOYW1lPXtzLmxhYmVsfT5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2guaWR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImhhaXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEhhaXIoWydoYWlyX2lkJywgZS50YXJnZXQudmFsdWVdKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jaGVja21hcmt9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICB7aC52YWx1ZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICkpIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5leWVfYmxvY2t9PlxyXG4gICAgICAgIDxsZWdlbmQ+RXllPC9sZWdlbmQ+XHJcbiAgICAgICAge2V5ZXMubGVuZ3RoID9cclxuICAgICAgICAgIGV5ZXMubWFwKGUgPT4gKFxyXG4gICAgICAgICAgICA8bGFiZWwga2V5PXtlLmlkfSBjbGFzc05hbWU9e3MubGFiZWx9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZS5pZH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZXllXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRFeWUoWydleWVfaWQnLCBlLnRhcmdldC52YWx1ZV0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNoZWNrbWFya30+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtlLnZhbHVlfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKSkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmFmZmlsaWF0aW9uX2Jsb2NrfT5cclxuICAgICAgICA8bGVnZW5kPkFmZmlsaWF0aW9uPC9sZWdlbmQ+XHJcbiAgICAgICAge2FmZmlsaWF0aW9uLmxlbmd0aCA/XHJcbiAgICAgICAgICBhZmZpbGlhdGlvbi5tYXAoYSA9PiAoXHJcbiAgICAgICAgICAgIDxsYWJlbCBrZXk9e2EuaWR9IGNsYXNzTmFtZT17cy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXthLmlkfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJhZmZpbGlhdGlvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0QWZmaWxpYXRpb24oWydhZmZpbGlhdGlvbl9pZCcsIGUudGFyZ2V0LnZhbHVlXSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY2hlY2ttYXJrfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAge2EudmFsdWV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYXZhaWxhYmxlVG9fYmxvY2t9PlxyXG4gICAgICAgIDxsZWdlbmQ+IEF2YWlsYWJsZSBUbzo8L2xlZ2VuZD5cclxuICAgICAgICB7YXZhaWxhYmxlX3RvLmxlbmd0aCA/XHJcbiAgICAgICAgICBhdmFpbGFibGVfdG8ubWFwKGEgPT4gKFxyXG4gICAgICAgICAgICA8bGFiZWwga2V5PXthLmlkfSBjbGFzc05hbWU9e3MubGFiZWx9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2EuaWR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBdmFpbGFibGVUbyhbXHJcbiAgICAgICAgICAgICAgICAgICAgICAnYXZhaWxhYmxldG9faWRzJyxcclxuICAgICAgICAgICAgICAgICAgICAgIFsuLi5zdGF0ZUF2YWlsYWJsZVRvWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWVdXHJcbiAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jaGVja3NpZ259Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICB7YS52YWx1ZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICkpIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5hdmFpbGFiaWxpdHlfYmxvY2t9PlxyXG4gICAgICAgIDxsZWdlbmQ+QXZhaWxhYmlsaXR5OjwvbGVnZW5kPlxyXG4gICAgICAgIHthdmFpbGFiaWxpdHkubGVuZ3RoID9cclxuICAgICAgICAgIGF2YWlsYWJpbGl0eS5tYXAoYSA9PiAoXHJcbiAgICAgICAgICAgIDxsYWJlbCBrZXk9e2EuaWR9IGNsYXNzTmFtZT17cy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YS5pZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEF2YWlsYWJpbGl0eShbXHJcbiAgICAgICAgICAgICAgICAgICAgICAnYXZhaWxhYmlsaXR5X2lkcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBbLi4uc3RhdGVBdmFpbGFiaWxpdHlbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZV1cclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNoZWNrc2lnbn0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHthLnZhbHVlfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKSkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17YHJvdW5kZWQgYm9yZGVyLTAgJHtzLmJ0bl9zdWJtaXR9YH0+XHJcbiAgICAgICAgU2hvd1xyXG5cdFx0XHQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZpbHRlcl9mb3JtXCI6IFwiZm9ybV9maWx0ZXJfZm9ybV9fMjhDRU5cIixcblx0XCJzZXhfYmxvY2tcIjogXCJmb3JtX3NleF9ibG9ja19fM0llQ2JcIixcblx0XCJhZ2VfYmxvY2tcIjogXCJmb3JtX2FnZV9ibG9ja19fM1FFbVNcIixcblx0XCJldGhuaWNpdHlfYmxvY2tcIjogXCJmb3JtX2V0aG5pY2l0eV9ibG9ja19fMmxXNTdcIixcblx0XCJoYWlyX2Jsb2NrXCI6IFwiZm9ybV9oYWlyX2Jsb2NrX18xaGZHNVwiLFxuXHRcImV5ZV9ibG9ja1wiOiBcImZvcm1fZXllX2Jsb2NrX19SaVlwWFwiLFxuXHRcImFmZmlsaWF0aW9uX2Jsb2NrXCI6IFwiZm9ybV9hZmZpbGlhdGlvbl9ibG9ja19fMTRYNmJcIixcblx0XCJhdmFpbGFibGVUb19ibG9ja1wiOiBcImZvcm1fYXZhaWxhYmxlVG9fYmxvY2tfXzJpak5CXCIsXG5cdFwiYXZhaWxhYmlsaXR5X2Jsb2NrXCI6IFwiZm9ybV9hdmFpbGFiaWxpdHlfYmxvY2tfXzF6Vm1UXCIsXG5cdFwiYnRuX3N1Ym1pdFwiOiBcImZvcm1fYnRuX3N1Ym1pdF9fM1FLWVpcIixcblx0XCJsYWJlbFwiOiBcImZvcm1fbGFiZWxfXzI0Z1RZXCIsXG5cdFwiY2hlY2ttYXJrXCI6IFwiZm9ybV9jaGVja21hcmtfXzNLS2xmXCIsXG5cdFwiY2hlY2tzaWduXCI6IFwiZm9ybV9jaGVja3NpZ25fXzJlZjRSXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2NhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lLXBhZ2UvTG9jYXRpb25cIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lLXBhZ2UvU2VhcmNoXCI7XHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUtcGFnZS9DYXRlZ29yaWVzXCI7XHJcbmltcG9ydCBFc2NvcnRDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUtcGFnZS9Fc2NvcnRDb250ZW50XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuXHRnZXRBbGxQb3N0cyxcclxuXHRnZXRMb2NhdGlvbnNJbmZvLFxyXG5cdGdldE5ld1Bvc3RzLFxyXG5cdHNlbGVjdFBvc3RzUGFnZSxcclxuXHRmaWx0ZXJQb3N0cyxcclxuXHRhZGRUb0Zhdm9yaXRlcyxcclxuXHRzb3J0UG9zdHNcclxufSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9hY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBIb21lKHtcclxuXHRjYXRlZ29yaWVzLFxyXG5cdGdldEFsbFBvc3RzLFxyXG5cdHBvc3RzLFxyXG5cdGdldExvY2F0aW9uc0luZm8sXHJcblx0c3RhdGVzLFxyXG5cdGdldE5ld1Bvc3RzLFxyXG5cdG5ld1Bvc3RzLFxyXG5cdHBhZ2VzTnVtYmVyLFxyXG5cdHNlbGVjdFBvc3RzUGFnZSxcclxuXHRmaWx0ZXJQb3N0cyxcclxuXHRhdmFpbGFiaWxpdHksXHJcblx0YXZhaWxhYmxlX3RvLFxyXG5cdGV0aG5pY2l0eSxcclxuXHRleWVzLFxyXG5cdGhhaXIsXHJcblx0YWZmaWxpYXRpb24sXHJcblx0YWRkVG9GYXZvcml0ZXMsXHJcblx0c29ydFBvc3RzXHJcbn0pIHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0QWxsUG9zdHMoKTtcclxuXHRcdGdldExvY2F0aW9uc0luZm8oKTtcclxuXHRcdGdldE5ld1Bvc3RzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PExvY2F0aW9uIHN0YXRlcz17c3RhdGVzfSAvPlxyXG5cdFx0XHQ8U2VhcmNoIC8+XHJcblx0XHRcdDxDYXRlZ29yaWVzXHJcblx0XHRcdFx0Y2F0ZWdvcmllcz17Y2F0ZWdvcmllc31cclxuXHRcdFx0XHRuZXdQb3N0cz17bmV3UG9zdHN9XHJcblx0XHRcdFx0ZmlsdGVyUG9zdHM9e2ZpbHRlclBvc3RzfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8RXNjb3J0Q29udGVudFxyXG5cdFx0XHRcdHBvc3RzPXtwb3N0c31cclxuXHRcdFx0XHRwYWdlc051bWJlcj17cGFnZXNOdW1iZXJ9XHJcblx0XHRcdFx0c2VsZWN0UG9zdHNQYWdlPXtzZWxlY3RQb3N0c1BhZ2V9XHJcblx0XHRcdFx0YXZhaWxhYmlsaXR5PXthdmFpbGFiaWxpdHl9XHJcblx0XHRcdFx0YXZhaWxhYmxlX3RvPXthdmFpbGFibGVfdG99XHJcblx0XHRcdFx0ZXRobmljaXR5PXtldGhuaWNpdHl9XHJcblx0XHRcdFx0ZXllcz17ZXllc31cclxuXHRcdFx0XHRoYWlyPXtoYWlyfVxyXG5cdFx0XHRcdGFmZmlsaWF0aW9uPXthZmZpbGlhdGlvbn1cclxuXHRcdFx0XHRmaWx0ZXJQb3N0cz17ZmlsdGVyUG9zdHN9XHJcblx0XHRcdFx0YWRkVG9GYXZvcml0ZXM9e2FkZFRvRmF2b3JpdGVzfVxyXG5cdFx0XHRcdHNvcnRQb3N0cz17c29ydFBvc3RzfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdC4uLnN0YXRlLFxyXG5cdFx0Y2F0ZWdvcmllczogc3RhdGUuYXBwLmNhdGVnb3JpZXMsXHJcblx0XHRwb3N0czogc3RhdGUuYXBwLnBvc3RzLFxyXG5cdFx0c3RhdGVzOiBzdGF0ZS5hcHAuc3RhdGVzLFxyXG5cdFx0bmV3UG9zdHM6IHN0YXRlLmFwcC5uZXdQb3N0cyxcclxuXHRcdHBhZ2VzTnVtYmVyOiBzdGF0ZS5hcHAucGFnZXNOdW1iZXIsXHJcblx0XHRhdmFpbGFiaWxpdHk6IHN0YXRlLmFwcC5hdmFpbGFiaWxpdHksXHJcblx0XHRhdmFpbGFibGVfdG86IHN0YXRlLmFwcC5hdmFpbGFibGVfdG8sXHJcblx0XHRldGhuaWNpdHk6IHN0YXRlLmFwcC5ldGhuaWNpdHksXHJcblx0XHRleWVzOiBzdGF0ZS5hcHAuZXllcyxcclxuXHRcdGhhaXI6IHN0YXRlLmFwcC5oYWlyLFxyXG5cdFx0YWZmaWxpYXRpb246IHN0YXRlLmFwcC5hZmZpbGlhdGlvblxyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUG9wcyA9IHtcclxuXHRnZXRBbGxQb3N0cyxcclxuXHRnZXRMb2NhdGlvbnNJbmZvLFxyXG5cdGdldE5ld1Bvc3RzLFxyXG5cdHNlbGVjdFBvc3RzUGFnZSxcclxuXHRmaWx0ZXJQb3N0cyxcclxuXHRhZGRUb0Zhdm9yaXRlcyxcclxuXHRzb3J0UG9zdHNcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUG9wcykoSG9tZSk7XHJcbiIsImltcG9ydCB7IFRFU1RfQ1JFQVRFX1BPU1QsIFNIT1dfTE9BREVSLCBISURFX0xPQURFUiwgU0hPV19BTEVSVCwgSElERV9BTEVSVCwgVEVTVF9SRVFVRVNUX1BPU1RTLCBHRVRfQUxMX1BPU1RTLCBHRVRfTE9DQUlUT05TX0lORk8sIEdFVF9DSVRJRVMsIENSRUFURV9TVVBQT1JUX1RBU0ssIEdFVF9BTExfVVNFUl9UQVNLUywgR0VUX0FQUF9JTkZPLCBHRVRfTkVXX1BPU1RTLCBHRVRfUEFHRVNfTlVNQkVSLCBHRVRfUE9TVF9DT01NRU5UUywgQ1JFQVRFX1BPU1RfQ09NTUVOVCwgRklMVEVSX1BPU1RTLCBHRVRfRkFWT1JJVEVTLCBHRVRfQ09NUExBSU5TLCBTT1JUX1BPU1RTIH0gZnJvbSBcIi4vdHlwZXNcIlxyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHsgYXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL19zZXJ2aWNlc1wiO1xyXG5cclxuLy8gVCBFIFMgVCBcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvc3QocG9zdDogYW55KTogYW55IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogVEVTVF9DUkVBVEVfUE9TVCxcclxuICAgICAgICBwYXlsb2FkOiBwb3N0XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9hZGVyKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBTSE9XX0xPQURFUlxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlTG9hZGVyKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBISURFX0xPQURFUlxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93QWxlcnQodGV4dDogc3RyaW5nKTogYW55IHtcclxuICAgIHJldHVybiAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBTSE9XX0FMRVJULFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB0ZXh0XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaGlkZUFsZXJ0KCkpXHJcbiAgICAgICAgfSwgMzAwMClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUFsZXJ0KCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBISURFX0FMRVJUXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9zdHMoKTogYW55IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogVEVTVF9SRVFVRVNUX1BPU1RTXHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRBbGxQb3N0cyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHNgKTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9QQUdFU19OVU1CRVIsIHBheWxvYWQ6IHJlcy5sYXN0X3BhZ2UgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfQUxMX1BPU1RTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldE5ld1Bvc3RzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cy9hbGwvbmV3YCk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX05FV19QT1NUUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbnNJbmZvID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9sb2NhdGlvbmApO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9MT0NBSVRPTlNfSU5GTywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRBcHBJbmZvID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9pbmZvYCk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0FQUF9JTkZPLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldENpdGllcyA9IChzdGF0ZUlkOiBudW1iZXIgfCBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2xvY2F0aW9uL2NpdGllcy8ke3N0YXRlSWR9YCk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0NJVElFUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVTdXBwb3J0VGFzayA9ICh0YXNrOiBhbnkpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvc3VwcG9ydC9jcmVhdGVgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhc2spXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBDUkVBVEVfU1VQUE9SVF9UQVNLLCBwYXlsb2FkOiB0YXNrIH0pXHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldEFsbFVzZXJzVGFza3MgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3N1cHBvcnQvJHt1c2VyLnVzZXIuaWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfQUxMX1VTRVJfVEFTS1MsIHBheWxvYWQ6IHJlcyB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFBvc3RzUGFnZSA9IChwYWdlOiBudW1iZXIgfCBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHM/cGFnZT0ke3BhZ2V9YCk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfUEFHRVNfTlVNQkVSLCBwYXlsb2FkOiByZXMubGFzdF9wYWdlIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX0FMTF9QT1NUUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0Q29tbWVudHMgPSAocG9zdElkOiBudW1iZXIgfCBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvJHtwb3N0SWR9L2NvbW1lbnRzYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9QT1NUX0NPTU1FTlRTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7O1xyXG59XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0Q29tbWVudCA9IChwb3N0SWQ6IG51bWJlciB8IHN0cmluZywgY29tbWVudDogc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzLyR7cG9zdElkfS9jb21tZW50cy9jcmVhdGVgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29tbWVudCB9KVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBDUkVBVEVfUE9TVF9DT01NRU5ULCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7O1xyXG59XHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJQb3N0cyA9IChmaWx0ZXJJdGVtc09iamVjdDogYW55KSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAvLyBmcm9tLCB0bywgZ2VuZGVyLCBldGhuaWNpdHlfaWQsIGhhaXJfaWQsIGV5ZV9pZCwgY2F0ZWdvcnlfaWQsIGFmZmlsaWF0aW9uX2lkLCBhdmFpbGFiaWxpdHlfaWRzKGFycmF5KSwgYXZhaWxhYmxldG9faWRzKGFycmF5KVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9maWx0ZXJgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmaWx0ZXJJdGVtc09iamVjdClcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9QQUdFU19OVU1CRVIsIHBheWxvYWQ6IHJlcy5sYXN0X3BhZ2UgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBGSUxURVJfUE9TVFMsIHBheWxvYWQ6IHJlcy5kYXRhLmRhdGEgfSk7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpOztcclxufVxyXG5leHBvcnQgY29uc3QgcmVwb3J0UG9zdCA9IChwb3N0SWQ6IG51bWJlciB8IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XHJcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvJHtwb3N0SWR9L2NvbXBsYWludHMvYWRkYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UsIHN0YXR1czogJ0luIHByb2dyZXNzJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAvLyByZXR1cm4gcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAvLyAgICAgZGlzcGF0Y2goeyB0eXBlOiBSRVBPUlRfUE9TVCB9KTtcclxuICAgIC8vIH0pO1xyXG59XHJcbmV4cG9ydCBjb25zdCBhZGRUb0Zhdm9yaXRlcyA9IChwb3N0SWQ6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xyXG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzLyR7cG9zdElkfS9mYXZvcml0ZXMvYWRkYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGlzX2Zhdm9yaXRlOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBjb25zdCBhZGRUb0Zhdm9yaXRlc0J1c2luZXNzID0gKHBvc3RJZDogbnVtYmVyIHwgc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XHJcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvJHtwb3N0SWR9L2Zhdm9yaXRlc19idXNpbmVzcy9hZGRgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZXNCdXNpbmVzcyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvZmF2b3JpdGVzX2J1c2luZXNzL215YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0ZBVk9SSVRFUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZXNVc2VyID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9mYXZvcml0ZXMvbXlgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfRkFWT1JJVEVTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldENvbXBsYWlucyA9ICh1c2VySWQ6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cy9jb21wbGFpbnRzL3VzZXIvJHt1c2VySWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0NPTVBMQUlOUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBzb3J0UG9zdHMgPSAoc29ydFR5cGU6IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogU09SVF9QT1NUUywgcGF5bG9hZDogc29ydFR5cGUgfSlcclxufVxyXG4iLCIvLyB0ZXN0XHJcbmV4cG9ydCBjb25zdCBURVNUX0NSRUFURV9QT1NUID0gJ0NSRUFURV9QT1NUJztcclxuZXhwb3J0IGNvbnN0IFRFU1RfRkVUQ0hfUE9TVCA9ICdGRVRDSF9QT1NUJztcclxuZXhwb3J0IGNvbnN0IFRFU1RfUkVRVUVTVF9QT1NUUyA9ICdSRVFVRVNUX1BPU1RTJztcclxuXHJcbi8vIGFwcFxyXG5leHBvcnQgY29uc3QgU0hPV19MT0FERVIgPSAnQVBQL1NIT1dfTE9BREVSJztcclxuZXhwb3J0IGNvbnN0IEhJREVfTE9BREVSID0gJ0FQUC9ISURFX0xPQURFUic7XHJcbmV4cG9ydCBjb25zdCBTSE9XX0FMRVJUID0gJ0FQUC9TSE9XX0FMRVJUJztcclxuZXhwb3J0IGNvbnN0IEhJREVfQUxFUlQgPSAnQVBQL0hJREVfQUxFUlQnOyBcclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfUE9TVFMgPSAnR0VUX0FMTF9QT1NUUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfUEFHRVNfTlVNQkVSID0gJ0dFVF9QQUdFU19OVU1CRVInO1xyXG5leHBvcnQgY29uc3QgR0VUX05FV19QT1NUUyA9ICdHRVRfTkVXX1BPU1RTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9MT0NBSVRPTlNfSU5GTyA9ICdHRVRfTE9DQUlUT05TX0lORk8nO1xyXG5leHBvcnQgY29uc3QgR0VUX0NJVElFUyA9ICdHRVRfQ0lUSUVTJztcclxuZXhwb3J0IGNvbnN0IENSRUFURV9TVVBQT1JUX1RBU0sgPSAnQ1JFQVRFX1NVUFBPUlRfVEFTSyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX1VTRVJfVEFTS1MgPSAnR0VUX0FMTF9VU0VSX1RBU0tTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9BUFBfSU5GTyA9ICdHRVRfQVBQX0lORk8nO1xyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfQ09NTUVOVFMgPSAnR0VUX1BPU1RfQ09NTUVOVFMnO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1RfQ09NTUVOVCA9ICdDUkVBVEVfUE9TVF9DT01NRU5UJztcclxuZXhwb3J0IGNvbnN0IEZJTFRFUl9QT1NUUyA9ICdGSUxURVJfUE9TVFMnO1xyXG5leHBvcnQgY29uc3QgUkVQT1JUX1BPU1QgPSAnUkVQT1JUX1BPU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZBVk9SSVRFUyA9ICdHRVRfRkFWT1JJVEVTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9DT01QTEFJTlMgPSAnR0VUX0dFVF9DT01QTEFJTlMnO1xyXG5leHBvcnQgY29uc3QgU09SVF9QT1NUUyA9ICdTT1JUX1BPU1RTJztcclxuXHJcbi8vIHByb3ZpZGVyXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVCA9ICdQUk9WSURFUi9BRERfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVCA9ICdQUk9WSURFUi9SRU1PVkVfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TVCA9ICdQUk9WSURFUi9VUERBVEVfUE9TVCc7XHJcblxyXG4vLyBwcm92aWRlclxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3ZpZGVyUG9zdCB7XHJcbiAgaWQ6IG51bWJlciB8IHN0cmluZyxcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgc2Vjb25kTmFtZTogc3RyaW5nLFxyXG4gIGFjY291bnRpbmdOYW1lOiBzdHJpbmcsXHJcbiAgc2V4OiBzdHJpbmcsXHJcbiAgYWdlOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwaG9uZTogbnVtYmVyIHwgc3RyaW5nLFxyXG4gIGV0aG5pdGhpdHk6IHN0cmluZyxcclxuICBoYWlyOiBzdHJpbmcsXHJcbiAgZXllczogc3RyaW5nLFxyXG4gIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gIGFmZmlsaWF0aW9uOiBzdHJpbmcsXHJcbiAgYXZhaWxhYmxlVG86IHN0cmluZyxcclxuICBhdmFpbGFiaWxpdHk6IHN0cmluZyxcclxuICBzaG9ydFN1bW1hcnk6IHN0cmluZyxcclxuICBhYm91dDogc3RyaW5nLFxyXG4gIHBob3Rvczogc3RyaW5nW10sXHJcbiAgdmlkZW9zOiBzdHJpbmdbXVxyXG59XHJcblxyXG4vLyB1c2VyXHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RfU1RBVEUgPSAnVVNFUi9TRUxFQ1RfU1RBVEUnO1xyXG5leHBvcnQgY29uc3QgU0VMRUNUX0NJVFkgPSAnVVNFUi9TRUxFQ1RfQ0lUWSc7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RfTElTVF9TT1JUID0gJ1VTRVIvU0VMRUNUX0xJU1RfU09SVCc7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RfTElTVF9GSUxURVIgPSAnVVNFUi9TRUxFQ1RfTElTVF9GSUxURVInO1xyXG5leHBvcnQgY29uc3QgU0VMRUNUX0NBVEVHT1JZID0gJ1VTRVIvU0VMRUNUX0NBVEVHT1JZJztcclxuXHJcbi8vIGFkbWluXHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX1NVUFBPUlRfVEFTS1MgPSAnR0VUX0FMTF9TVVBQT1JUX1RBU0tTJztcclxuZXhwb3J0IGNvbnN0IEVESVRfU1VQUE9SVF9UQVNLUyA9ICdFRElUX1NVUFBPUlRfVEFTS1MnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1NVUFBPUlRfVEFTSyA9ICdERUxFVEVfU1VQUE9SVF9UQVNLJztcclxuLy8gZXhwb3J0IGNvbnN0IENSRUFURV9DQVRFR09SWSA9ICdDUkVBVEVfQ0FURUdPUlknO1xyXG4vLyBleHBvcnQgY29uc3QgRURJVF9DQVRFR09SWSA9ICdFRElUX0NBVEVHT1JZJztcclxuLy8gZXhwb3J0IGNvbnN0IERFTEVURV9DQVRFR09SWSA9ICdERUxFVEVfQ0FURUdPUlknO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaXN0b3J5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvUm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=