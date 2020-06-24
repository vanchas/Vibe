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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


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

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./src/assets/images/header/header.png":
/*!*********************************************!*\
  !*** ./src/assets/images/header/header.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/header-24c3123be380ce163cd434710772a45c.png";

/***/ }),

/***/ "./src/components/header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/header/Header.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.module.scss */ "./src/components/header/header.module.scss");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_header_header_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/header/header.png */ "./src/assets/images/header/header.png");
/* harmony import */ var _assets_images_header_header_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_header_header_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nav */ "./src/components/header/Nav.jsx");
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\header\\Header.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Header() {
  return __jsx("div", {
    className: "jsx-2924529192" + " " + (_header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-2924529192" + " " + (_header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header_image_block || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: _assets_images_header_header_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Vibe City",
    className: "jsx-2924529192" + " " + "w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("h1", {
    className: "jsx-2924529192" + " " + `${_header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header_title} text-white`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("a", {
    style: {
      textDecoration: 'none'
    },
    className: "jsx-2924529192" + " " + "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 26
    }
  }, "VIBE ", __jsx("br", {
    className: "jsx-2924529192",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 18
    }
  }), " CITY")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2924529192",
    __self: this
  }, "@font-face{font-family:\"Progress\";src:url(\"/src/assets/fonts/progress.otf\");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxccHJvamVjdHNcXHZpYmVcXHNyY1xcY29tcG9uZW50c1xcaGVhZGVyXFxIZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFHa0MsdUJBQ21CLDBDQUM1QyIsImZpbGUiOiJDOlxcVXNlcnNcXHVzZXJcXHByb2plY3RzXFx2aWJlXFxzcmNcXGNvbXBvbmVudHNcXGhlYWRlclxcSGVhZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHMgZnJvbSBcIi4vaGVhZGVyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBIZWFkZXJCZyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIvaGVhZGVyLnBuZ1wiO1xyXG5pbXBvcnQgTmF2Q29tcG9uZW50IGZyb20gXCIuL05hdlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5oZWFkZXJ9PlxyXG4gICAgICA8TmF2Q29tcG9uZW50IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhlYWRlcl9pbWFnZV9ibG9ja30+XHJcbiAgICAgICAgPGltZyBzcmM9e0hlYWRlckJnfSBhbHQ9XCJWaWJlIENpdHlcIiBjbGFzc05hbWU9XCJ3LTEwMFwiIC8+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7cy5oZWFkZXJfdGl0bGV9IHRleHQtd2hpdGVgfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIFZJQkUgPGJyIC8+IENJVFlcclxuICAgICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlByb2dyZXNzXCI7XHJcbiAgICAgICAgICBzcmM6IHVybChcIi9zcmMvYXNzZXRzL2ZvbnRzL3Byb2dyZXNzLm90ZlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\user\\\\projects\\\\vibe\\\\src\\\\components\\\\header\\\\Header.jsx */"));
}

/***/ }),

/***/ "./src/components/header/Nav.jsx":
/*!***************************************!*\
  !*** ./src/components/header/Nav.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.module.scss */ "./src/components/header/header.module.scss");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services */ "./src/_services/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\header\\Nav.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const NavComponent = props => {
  const {
    0: activeLink,
    1: setActiveLink
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: role,
    1: setRole
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const toggle = () => setIsOpen(!isOpen);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (_services__WEBPACK_IMPORTED_MODULE_3__["authenticationService"].currentUserValue.user) {
      setRole(_services__WEBPACK_IMPORTED_MODULE_3__["authenticationService"].currentUserValue.user.role);
    }
  }, []);
  return __jsx("div", {
    style: {
      maxWidth: '1260px',
      margin: '0 auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    color: "dark",
    dark: true,
    expand: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarToggler"], {
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    className: "mr-auto",
    navbar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, role === 'individual' || role === 'agency' ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 61
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    href: "/modelCabinet",
    onClick: () => setActiveLink('model cabinet'),
    className: activeLink === 'model cabinet' ? _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.activeLink : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, "Model Cabinet")) : null, role === 'client' ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 34
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    href: "/userCabinet",
    onClick: () => setActiveLink('user cabinet'),
    className: activeLink === 'user cabinet' ? _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.activeLink : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, "User Cabinet")) : null, role === 'individual' || role === 'agency' ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 61
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    href: "/addPost",
    onClick: () => setActiveLink('add post'),
    className: activeLink === 'add post' ? _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.activeLink : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, "Add Post")) : null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    href: "/login",
    onClick: () => setActiveLink('login'),
    className: activeLink === 'login' ? _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.activeLink : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "Login")), role === 'admin' || role === 'individual' || role === 'client' || role === 'agency' ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 102
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    onClick: () => _services__WEBPACK_IMPORTED_MODULE_3__["authenticationService"].logout(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "Logout")) : null, role === 'admin' ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    href: "/admin",
    onClick: () => setActiveLink('admin'),
    className: activeLink === 'admin' ? _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.activeLink : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, "Admin")) : null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    href: "/test",
    onClick: () => setActiveLink('test'),
    className: activeLink === 'test' ? _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.activeLink : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "TEST"))))));
};

NavComponent.getInitialProps = async ({
  Component,
  ctx
}) => {
  return {};
};

NavComponent.propTypes = {
  light: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  dark: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  role: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  expand: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  tag: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])
};
/* harmony default export */ __webpack_exports__["default"] = (NavComponent);

/***/ }),

/***/ "./src/components/header/header.module.scss":
/*!**************************************************!*\
  !*** ./src/components/header/header.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header_header__2pLiX",
	"header_image_block": "header_header_image_block__18AcU",
	"header_title": "header_header_title__20EmA"
};


/***/ }),

/***/ "./src/components/layout/Layout.jsx":
/*!******************************************!*\
  !*** ./src/components/layout/Layout.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/Header */ "./src/components/header/Header.jsx");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.module.scss */ "./src/components/layout/layout.module.scss");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\layout\\Layout.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = ({
  children
}) => __jsx("div", {
  className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.layout,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx("div", {
  className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.layout_content,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("header", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}, __jsx(_header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
})), __jsx("main", {
  className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.layout_main_block,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}, children)));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/layout/layout.module.scss":
/*!**************************************************!*\
  !*** ./src/components/layout/layout.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout_layout__U0X7P",
	"layout_content": "layout_layout_content__FY5u5",
	"layout_main_block": "layout_layout_main_block__1K2uY"
};


/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.scss */ "./src/pages/styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Layout */ "./src/components/layout/Layout.jsx");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\pages\\_app.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













class CustomApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  static async getInitialProps(props) {
    const pageProps = props.Component.getInitialProps ? await props.Component.getInitialProps(props.ctx) : {};
    return {
      pageProps: pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }, __jsx("meta", {
      charSet: "utf-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }), __jsx("meta", {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "description",
      content: "Description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "keywords",
      content: "Keywords",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }), __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }, "Next.js PWA Example"), __jsx("link", {
      rel: "manifest",
      href: "/manifest.json",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "/favicon-16x16.png",
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "/favicon-32x32.png",
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "apple-touch-icon",
      href: "/apple-icon.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "theme-color",
      content: "#317EFB",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    })), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }))));
  }

} //makeStore function that returns a new store for every request


const makeStore = () => _redux_store__WEBPACK_IMPORTED_MODULE_7__["default"]; //withRedux wrapper that passes the store to the App Component


/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default()(makeStore)(CustomApp));

/***/ }),

/***/ "./src/pages/styles/app.scss":
/*!***********************************!*\
  !*** ./src/pages/styles/app.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
  supportTasks: [{
    subject: 'Task 1 Subject',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    id: 1
  }, {
    subject: 'Task 2 Subject',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    id: 2
  }, {
    subject: 'Task 3 Subject',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    id: 3
  }],
  affiliation: [],
  availability: [],
  available_to: [],
  ethnicity: [],
  eyes: [],
  hair: [],
  pagesNumber: 0
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SHOW_LOADER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
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
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/actions */ "./src/redux/actions/actions.ts");


 // import { forbiddenWordsMiddlwware } from './middleware';




const preloadedState = {};
const saga = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__["default"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a, // forbiddenWordsMiddlwware,
saga));
store.dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_5__["getAppInfo"])());
saga.run(_sagas_sagas__WEBPACK_IMPORTED_MODULE_4__["rootSaga"]);
store.subscribe(() => {
  console.log('updated state: ', store.getState());
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./src/pages/_app.jsx");


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

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19oZWxwZXJzL1ByaXZhdGVSb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX2hlbHBlcnMvYXV0aC1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19oZWxwZXJzL2Zha2UtYmFja2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX2hlbHBlcnMvaGFuZGxlLXJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9faGVscGVycy9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9faGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX2hlbHBlcnMvcm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zZXJ2aWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX3NlcnZpY2VzL3VzZXIuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9oZWFkZXIvaGVhZGVyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvTmF2LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9sYXlvdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2FkbWluUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXBwUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcHJvdmlkZXJSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9yb290UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvdGVzdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3VzZXJSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zYWdhcy9zYWdhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc2FnYXMvdGVzdFNhZ2FzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zdG9yZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoaXN0b3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91cmwiLCJfdXRpbHMiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJpc0xvY2FsIiwiaHJlZiIsInVybCIsInBhcnNlIiwib3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJob3N0IiwicHJvdG9jb2wiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdEZ1bmMiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJhcyIsInJlc3VsdCIsImZvcm1hdFVybCIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwib2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiTGluayIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJwIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwiZSIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlc29sdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbCIsImluZGV4T2YiLCJyZXBsYWNlIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiam9pbiIsIm9wdGlvbnMiLCJwYXRocyIsImNhdGNoIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwidHlwZSIsInByb2Nlc3MiLCJjbG9uZUVsZW1lbnQiLCJleGVjT25jZSIsIlByb3BUeXBlcyIsImV4YWN0IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJlbGVtZW50IiwicHJvcE5hbWUiLCJ2YWx1ZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIlJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJldmVudCIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwic2xpY2UiLCJtYXAiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJ1cmxfMSIsIm1pdHRfMSIsInV0aWxzXzEiLCJpc19keW5hbWljXzEiLCJyb3V0ZV9tYXRjaGVyXzEiLCJyb3V0ZV9yZWdleF8xIiwiYmFzZVBhdGgiLCJwYXRoIiwiZGVsQmFzZVBhdGgiLCJzdWJzdHIiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsInF1ZXJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJhdHRlbXB0cyIsImdldFJlc3BvbnNlIiwiZmV0Y2giLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsImlzU3NyIiwiYXNQYXRoIiwiX2JwcyIsIl9nZXRTdGF0aWNEYXRhIiwiUHJvbWlzZSIsIl9nZXRTZXJ2ZXJEYXRhIiwicm91dGUiLCJjb21wb25lbnRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJpc0R5bmFtaWNSb3V0ZSIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsIl9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCIsInVwZGF0ZSIsIm5ld0RhdGEiLCJub3RpZnkiLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsImNoYW5nZSIsIm1ldGhvZCIsIl9hcyIsInJlamVjdCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJ1cmxJc05ldyIsImFzUGF0aG5hbWUiLCJyb3V0ZVJlZ2V4IiwiZ2V0Um91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJnZXRSb3V0ZU1hdGNoZXIiLCJtaXNzaW5nUGFyYW1zIiwia2V5cyIsImdyb3VwcyIsImZpbHRlciIsInBhcmFtIiwiZ2V0Um91dGVJbmZvIiwicm91dGVJbmZvIiwiY2FuY2VsbGVkIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZmV0Y2hDb21wb25lbnQiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiX2dldERhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJoYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlRFU1RfUk9VVEUiLCJ0ZXN0IiwicmUiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiXyIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJyZXBlYXQiLCJlc2NhcGVSZWdleCIsInN0ciIsIm5vcm1hbGl6ZWRSb3V0ZSIsImVzY2FwZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCIkMSIsImlzQ2F0Y2hBbGwiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX2EiLCJwcm90b3R5cGUiLCJwYWdlUHJvcHMiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0IiwiU1AiLCJtZWFzdXJlIiwiQ29udGFpbmVyIiwiY3JlYXRlVXJsIiwiQXBwSW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiX3JlZiIsImNvbXBvbmVudERpZENhdGNoIiwiX2Vycm9ySW5mbyIsIndhcm5Db250YWluZXIiLCJ3YXJuVXJsIiwicHVzaFRvIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJQcml2YXRlUm91dGUiLCJjb21wb25lbnQiLCJyb2xlcyIsInJlc3QiLCJjdXJyZW50VXNlciIsImF1dGhlbnRpY2F0aW9uU2VydmljZSIsImN1cnJlbnRVc2VyVmFsdWUiLCJmcm9tIiwicm9sZSIsImF1dGhIZWFkZXIiLCJ0b2tlbiIsIkF1dGhvcml6YXRpb24iLCJjb25maWd1cmVGYWtlQmFja2VuZCIsInVzZXJzIiwiaWQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJSb2xlIiwiQWRtaW4iLCJzZWNvbmRfbmFtZSIsImVtYWlsIiwicGhvbmUiLCJQcm92aWRlciIsInJlYWxGZXRjaCIsIm9wdHMiLCJoZWFkZXJzIiwiaXNMb2dnZWRJbiIsInN0YXJ0c1dpdGgiLCJyb2xlU3RyaW5nIiwic2V0VGltZW91dCIsImVuZHNXaXRoIiwiSlNPTiIsInVzZXIiLCJ1IiwiVXNlciIsIm1hdGNoIiwidW5hdXRob3Jpc2VkIiwidXJsUGFydHMiLCJwYXJzZUludCIsImZpbmQiLCJ4IiwicmVzcG9uc2UiLCJ0ZXh0Iiwic3RyaW5naWZ5IiwiaGFuZGxlUmVzcG9uc2UiLCJsb2dvdXQiLCJzdGF0dXNUZXh0IiwiY3JlYXRlQnJvd3Nlckhpc3RvcnkiLCJjdXJyZW50VXNlclN1YmplY3QiLCJDb29raWVzIiwiZ2V0SlNPTiIsImxvZ2luIiwicmVnaXN0cmF0aW9uQWRtaW4iLCJyZWdpc3RyYXRpb25DbGllbnQiLCJyZWdpc3RyYXRpb25Qcm92aWRlciIsInJlZ2lzdHJhdGlvbkFnZW5jeSIsImV4cGlyZXMiLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJjbGllbnQiLCJhZG1pbiIsInByb3ZpZGVyIiwiYWdlbmN5X25hbWUiLCJwcm9taXNlIiwicmVtb3ZlIiwidXNlclNlcnZpY2UiLCJnZXRBbGwiLCJnZXRCeUlkIiwiZGVsZXRlVXNlciIsInJlcXVlc3RPcHRpb25zIiwicmF0aW5nIiwicG9zaXRpb24iLCJ0ZWxlZ3JhbSIsInZpYmVyIiwid2hhdHNhcHAiLCJzaXRlIiwiYXZhdGFyIiwiSGVhZGVyIiwicyIsImhlYWRlciIsImhlYWRlcl9pbWFnZV9ibG9jayIsIkhlYWRlckJnIiwiaGVhZGVyX3RpdGxlIiwidGV4dERlY29yYXRpb24iLCJOYXZDb21wb25lbnQiLCJhY3RpdmVMaW5rIiwic2V0QWN0aXZlTGluayIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwic2V0Um9sZSIsInRvZ2dsZSIsInVzZUVmZmVjdCIsIm1heFdpZHRoIiwibWFyZ2luIiwibGlnaHQiLCJkYXJrIiwiZml4ZWQiLCJjb2xvciIsImV4cGFuZCIsInRhZyIsImZ1bmMiLCJMYXlvdXQiLCJsYXlvdXQiLCJsYXlvdXRfY29udGVudCIsImxheW91dF9tYWluX2Jsb2NrIiwiQ3VzdG9tQXBwIiwic3RvcmUiLCJtYWtlU3RvcmUiLCJ3aXRoUmVkdXgiLCJjcmVhdGVQb3N0IiwicG9zdCIsIlRFU1RfQ1JFQVRFX1BPU1QiLCJwYXlsb2FkIiwic2hvd0xvYWRlciIsIlNIT1dfTE9BREVSIiwiaGlkZUxvYWRlciIsIkhJREVfTE9BREVSIiwic2hvd0FsZXJ0IiwiZGlzcGF0Y2giLCJTSE9XX0FMRVJUIiwiaGlkZUFsZXJ0IiwiSElERV9BTEVSVCIsImZldGNoUG9zdHMiLCJURVNUX1JFUVVFU1RfUE9TVFMiLCJnZXRBbGxQb3N0cyIsIkdFVF9QQUdFU19OVU1CRVIiLCJsYXN0X3BhZ2UiLCJHRVRfQUxMX1BPU1RTIiwiZ2V0TmV3UG9zdHMiLCJHRVRfTkVXX1BPU1RTIiwiZ2V0TG9jYXRpb25zSW5mbyIsIkdFVF9MT0NBSVRPTlNfSU5GTyIsImdldEFwcEluZm8iLCJHRVRfQVBQX0lORk8iLCJnZXRDaXRpZXMiLCJzdGF0ZUlkIiwiR0VUX0NJVElFUyIsImNyZWF0ZVN1cHBvcnRUYXNrIiwidGFzayIsInRva2VuX3R5cGUiLCJsb2ciLCJDUkVBVEVfU1VQUE9SVF9UQVNLIiwiZ2V0QWxsVXNlcnNUYXNrcyIsIkdFVF9BTExfVVNFUl9UQVNLUyIsInNlbGVjdFBvc3RzUGFnZSIsImdldFBvc3RDb21tZW50cyIsInBvc3RJZCIsIkdFVF9QT1NUX0NPTU1FTlRTIiwiY3JlYXRlUG9zdENvbW1lbnQiLCJjb21tZW50IiwiQ1JFQVRFX1BPU1RfQ09NTUVOVCIsImZpbHRlclBvc3RzIiwiZmlsdGVySXRlbXNPYmplY3QiLCJGSUxURVJfUE9TVFMiLCJURVNUX0ZFVENIX1BPU1QiLCJBRERfUE9TVCIsIlJFTU9WRV9QT1NUIiwiVVBEQVRFX1BPU1QiLCJTRUxFQ1RfU1RBVEUiLCJTRUxFQ1RfQ0lUWSIsIlNFTEVDVF9MSVNUX1NPUlQiLCJTRUxFQ1RfTElTVF9GSUxURVIiLCJTRUxFQ1RfQ0FURUdPUlkiLCJHRVRfQUxMX1NVUFBPUlRfVEFTS1MiLCJFRElUX1NVUFBPUlRfVEFTS1MiLCJERUxFVEVfU1VQUE9SVF9UQVNLIiwiaW5pdGlhbFN0YXRlIiwidGFza3MiLCJhZG1pblJlZHVjZXIiLCJhY3Rpb24iLCJwb3N0Q29tbWVudHMiLCJsb2FkaW5nIiwiYWxlcnQiLCJjYXRlZ29yaWVzIiwicG9zdHMiLCJuZXdQb3N0cyIsInN0YXRlcyIsImNpdGllcyIsInN1cHBvcnRUYXNrcyIsInN1YmplY3QiLCJhZmZpbGlhdGlvbiIsImF2YWlsYWJpbGl0eSIsImF2YWlsYWJsZV90byIsImV0aG5pY2l0eSIsImV5ZXMiLCJoYWlyIiwicGFnZXNOdW1iZXIiLCJhcHBSZWR1Y2VyIiwicHJvdmlkZXJQb3N0cyIsInByb3ZpZGVyUmVkdWNlciIsImNvbmNhdCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidGVzdFBvc3RzIiwidGVzdFJlZHVjZXIiLCJhcHAiLCJ1c2VyUmVkdWNlciIsImZldGNoZWRQb3N0cyIsInJvb3RTYWdhIiwic2FnYVdhdGNoZXIiLCJ0YWtlRXZlcnkiLCJzYWdhV29ya2VyIiwicHV0IiwiY2FsbCIsInByZWxvYWRlZFN0YXRlIiwic2FnYSIsImNyZWF0ZVNhZ2FzTWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJydW4iLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FB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QVIsQ0FBWSxpQkFBWixFQUErQmxDLEtBQUssQ0FBQzBHLFFBQU4sRUFBL0I7QUFDRCxDQUZEO0FBSWUxRyxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkNvbnRhaW5lcj1Db250YWluZXI7ZXhwb3J0cy5jcmVhdGVVcmw9Y3JlYXRlVXJsO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfcmVmKXt2YXJ7Q29tcG9uZW50LGN0eH09X3JlZjt2YXIgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7Ly8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbi8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4vLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG5jb21wb25lbnREaWRDYXRjaChlcnJvcixfZXJyb3JJbmZvKXt0aHJvdyBlcnJvcjt9cmVuZGVyKCl7dmFye3JvdXRlcixDb21wb25lbnQscGFnZVByb3BzLF9fTl9TU0csX19OX1NTUH09dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7fSxwYWdlUHJvcHMsLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4vLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuIShfX05fU1NHfHxfX05fU1NQKT97dXJsOmNyZWF0ZVVybChyb3V0ZXIpfTp7fSkpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7dmFyIHdhcm5Db250YWluZXI7dmFyIHdhcm5Vcmw7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3dhcm5Db250YWluZXI9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUud2FybihcIldhcm5pbmc6IHRoZSBgQ29udGFpbmVyYCBpbiBgX2FwcGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRcIik7fSk7d2FyblVybD0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS5lcnJvcihcIldhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvdXJsLWRlcHJlY2F0ZWRcIik7fSk7fS8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5mdW5jdGlvbiBDb250YWluZXIocCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FybkNvbnRhaW5lcigpO3JldHVybiBwLmNoaWxkcmVuO31mdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyKXsvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxudmFye3BhdGhuYW1lLGFzUGF0aCxxdWVyeX09cm91dGVyO3JldHVybntnZXQgcXVlcnkoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHF1ZXJ5O30sZ2V0IHBhdGhuYW1lKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBwYXRobmFtZTt9LGdldCBhc1BhdGgoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIGFzUGF0aDt9LGJhY2s6KCk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cm91dGVyLmJhY2soKTt9LHB1c2g6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5wdXNoKHVybCxhcyk7fSxwdXNoVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciBwdXNoUm91dGU9YXM/aHJlZjonJzt2YXIgcHVzaFVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLHB1c2hVcmwpO30scmVwbGFjZToodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLGFzKTt9LHJlcGxhY2VUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHJlcGxhY2VSb3V0ZT1hcz9ocmVmOicnO3ZhciByZXBsYWNlVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUscmVwbGFjZVVybCk7fX07fSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IHsgYXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vX3NlcnZpY2VzJztcclxuXHJcbmV4cG9ydCBjb25zdCBQcml2YXRlUm91dGUgPSAoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgcm9sZXMsIC4uLnJlc3QgfSkgPT4gKFxyXG4gIDxSb3V0ZSB7Li4ucmVzdH0gcmVuZGVyPXtwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xyXG4gICAgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgICAvLyBub3QgbG9nZ2VkIGluIHNvIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2Ugd2l0aCB0aGUgcmV0dXJuIHVybFxyXG4gICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXt7IHBhdGhuYW1lOiAnL2xvZ2luJywgc3RhdGU6IHsgZnJvbTogcHJvcHMubG9jYXRpb24gfSB9fSAvPlxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIGlmIHJvdXRlIGlzIHJlc3RyaWN0ZWQgYnkgcm9sZVxyXG4gICAgaWYgKHJvbGVzICYmIHJvbGVzLmluZGV4T2YoY3VycmVudFVzZXIucm9sZSkgPT09IC0xKSB7XHJcbiAgICAgIC8vIHJvbGUgbm90IGF1dGhvcmlzZWQgc28gcmVkaXJlY3QgdG8gaG9tZSBwYWdlXHJcbiAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89e3sgcGF0aG5hbWU6ICcvJyB9fSAvPlxyXG4gICAgfVxyXG5cclxuICAgIC8vIGF1dGhvcmlzZWQgc28gcmV0dXJuIGNvbXBvbmVudFxyXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxyXG4gIH19IC8+XHJcbikiLCJpbXBvcnQgeyBhdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhIZWFkZXIoKSB7XHJcbiAgLy8gcmV0dXJuIGF1dGhvcml6YXRpb24gaGVhZGVyIHdpdGggand0IHRva2VuXHJcbiAgY29uc3QgY3VycmVudFVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcclxuICBpZiAoY3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIudG9rZW4pIHtcclxuICAgIHJldHVybiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjdXJyZW50VXNlci50b2tlbn1gIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUm9sZSB9IGZyb20gJy4vJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZUZha2VCYWNrZW5kKCkge1xyXG4gIGxldCB1c2VycyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIHVzZXJuYW1lOiAnYWRtaW4nLFxyXG4gICAgICBwYXNzd29yZDogJ2FkbWluJyxcclxuICAgICAgZmlyc3ROYW1lOiAnQWRtaW4nLFxyXG4gICAgICBsYXN0TmFtZTogJ0FkbWluJyxcclxuICAgICAgcm9sZTogUm9sZS5BZG1pbixcclxuICAgICAgbmFtZTogXCJBZG1pblwiLFxyXG4gICAgICBzZWNvbmRfbmFtZTogbnVsbCxcclxuICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgIHBob25lOiBcIjM4MDk1MzQ0NDM0OFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIHVzZXJuYW1lOiAndXNlcicsXHJcbiAgICAgIHBhc3N3b3JkOiAndXNlcicsXHJcbiAgICAgIGZpcnN0TmFtZTogJ0l2YW4nLFxyXG4gICAgICBsYXN0TmFtZTogJ1VzZXInLFxyXG4gICAgICByb2xlOiBSb2xlLkFkbWluLFxyXG4gICAgICBuYW1lOiBcIlVzZXJcIixcclxuICAgICAgc2Vjb25kX25hbWU6IG51bGwsXHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBwaG9uZTogXCIzODA5NTM0NDQzNDhcIixcclxuICAgIH0sXHJcbiAgICAsXHJcbiAgICB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICB1c2VybmFtZTogJ3BybycsXHJcbiAgICAgIHBhc3N3b3JkOiAncHJvJyxcclxuICAgICAgZmlyc3ROYW1lOiAnTW9kZWwnLFxyXG4gICAgICBsYXN0TmFtZTogJ1Byb3ZpZGVyJyxcclxuICAgICAgcm9sZTogUm9sZS5Qcm92aWRlcixcclxuICAgICAgbmFtZTogXCJNb2RlbFwiLFxyXG4gICAgICBzZWNvbmRfbmFtZTogbnVsbCxcclxuICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgIHBob25lOiBcIjM4MDk1MzQ0NDM0OFwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgbGV0IHJlYWxGZXRjaCA9IHdpbmRvdy5mZXRjaDtcclxuICB3aW5kb3cuZmV0Y2ggPSBmdW5jdGlvbiAodXJsLCBvcHRzKSB7XHJcbiAgICBjb25zdCBhdXRoSGVhZGVyID0gb3B0cy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ107XHJcbiAgICBjb25zdCBpc0xvZ2dlZEluID0gYXV0aEhlYWRlciAmJiBhdXRoSGVhZGVyLnN0YXJ0c1dpdGgoJ0JlYXJlciBmYWtlLWp3dC10b2tlbicpO1xyXG4gICAgY29uc3Qgcm9sZVN0cmluZyA9IGlzTG9nZ2VkSW4gJiYgYXV0aEhlYWRlci5zcGxpdCgnLicpWzFdO1xyXG4gICAgY29uc3Qgcm9sZSA9IHJvbGVTdHJpbmcgPyBSb2xlW3JvbGVTdHJpbmddIDogbnVsbDtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAvLyB3cmFwIGluIHRpbWVvdXQgdG8gc2ltdWxhdGUgc2VydmVyIGFwaSBjYWxsXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vIGF1dGhlbnRpY2F0ZSAtIHB1YmxpY1xyXG4gICAgICAgIGlmICh1cmwuZW5kc1dpdGgoJy9hcGkvYXV0aC9sb2dpbicpICYmIG9wdHMubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IEpTT04ucGFyc2Uob3B0cy5ib2R5KTtcclxuICAgICAgICAgIC8vIGNvbnN0IHVzZXIgPSB1c2Vycy5maW5kKHggPT4geC51c2VybmFtZSA9PT0gcGFyYW1zLnVzZXJuYW1lICYmIHgucGFzc3dvcmQgPT09IHBhcmFtcy5wYXNzd29yZCk7XHJcbiAgICAgICAgICBsZXQgdXNlcjtcclxuICAgICAgICAgIHVzZXJzLmZvckVhY2godSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1LnBhc3N3b3JkID09PSBwYXJhbXMucGFzc3dvcmQgJiYgdS51c2VybmFtZSA9PT0gcGFyYW1zLnVzZXJuYW1lKSByZXR1cm4gdXNlciA9IHU7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gZXJyb3IoJ1VzZXJuYW1lIG9yIHBhc3N3b3JkIGlzIGluY29ycmVjdCcpO1xyXG4gICAgICAgICAgcmV0dXJuIG9rKHtcclxuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IHVzZXIuZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogdXNlci5sYXN0TmFtZSxcclxuICAgICAgICAgICAgcm9sZTogdXNlci5yb2xlLFxyXG4gICAgICAgICAgICB0b2tlbjogYGZha2Utand0LXRva2VuLiR7dXNlci5yb2xlfWAsXHJcbiAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICAgICAgc2Vjb25kX25hbWU6IHVzZXIuc2Vjb25kX25hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICBwaG9uZTogdXNlci5waG9uZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXJsLmVuZHNXaXRoKCcvYXBpL2F1dGgvcmVnaXN0ZXInKSAmJiBvcHRzLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSBKU09OLnBhcnNlKG9wdHMuYm9keSk7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgICAgICBpZDogdXNlcnMubGVuZ3RoICsgMSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHBhcmFtcy51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhcmFtcy5wYXNzd29yZCxcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiAnTm9ybWFsJyxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IFJvbGUuVXNlcixcclxuICAgICAgICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgICAgICAgc2Vjb25kX25hbWU6IG51bGwsXHJcbiAgICAgICAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICAgICAgICBwaG9uZTogbnVsbFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHVzZXJzLnB1c2godXNlcik7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIG9rKHtcclxuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IHVzZXIuZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogdXNlci5sYXN0TmFtZSxcclxuICAgICAgICAgICAgcm9sZTogdXNlci5yb2xlLFxyXG4gICAgICAgICAgICB0b2tlbjogYGZha2Utand0LXRva2VuLiR7dXNlci5yb2xlfWAsXHJcbiAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICAgICAgc2Vjb25kX25hbWU6IHVzZXIuc2Vjb25kX25hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICBwaG9uZTogdXNlci5waG9uZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnZXQgdXNlciBieSBpZCAtIGFkbWluIG9yIHVzZXIgKHVzZXIgY2FuIG9ubHkgYWNjZXNzIHRoZWlyIG93biByZWNvcmQpXHJcbiAgICAgICAgaWYgKHVybC5tYXRjaCgvXFwvdXNlcnNcXC9cXGQrJC8pICYmIG9wdHMubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgICAgaWYgKCFpc0xvZ2dlZEluKSByZXR1cm4gdW5hdXRob3Jpc2VkKCk7XHJcblxyXG4gICAgICAgICAgLy8gZ2V0IGlkIGZyb20gcmVxdWVzdCB1cmxcclxuICAgICAgICAgIGxldCB1cmxQYXJ0cyA9IHVybC5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgbGV0IGlkID0gcGFyc2VJbnQodXJsUGFydHNbdXJsUGFydHMubGVuZ3RoIC0gMV0pO1xyXG5cclxuICAgICAgICAgIC8vIG9ubHkgYWxsb3cgbm9ybWFsIHVzZXJzIGFjY2VzcyB0byB0aGVpciBvd24gcmVjb3JkXHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJzLmZpbmQoeCA9PiB4LnJvbGUgPT09IHJvbGUpO1xyXG4gICAgICAgICAgaWYgKGlkICE9PSBjdXJyZW50VXNlci5pZCAmJiByb2xlICE9PSBSb2xlLkFkbWluKSByZXR1cm4gdW5hdXRob3Jpc2VkKCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQoeCA9PiB4LmlkID09PSBpZCk7XHJcbiAgICAgICAgICByZXR1cm4gb2sodXNlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnZXQgYWxsIHVzZXJzIC0gYWRtaW4gb25seVxyXG4gICAgICAgIGlmICh1cmwuZW5kc1dpdGgoJy91c2VycycpICYmIG9wdHMubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgICAgaWYgKHJvbGUgIT09IFJvbGUuQWRtaW4pIHJldHVybiB1bmF1dGhvcmlzZWQoKTtcclxuICAgICAgICAgIHJldHVybiBvayh1c2Vycyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwYXNzIHRocm91Z2ggYW55IHJlcXVlc3RzIG5vdCBoYW5kbGVkIGFib3ZlXHJcbiAgICAgICAgcmVhbEZldGNoKHVybCwgb3B0cykudGhlbihyZXNwb25zZSA9PiByZXNvbHZlKHJlc3BvbnNlKSk7XHJcblxyXG4gICAgICAgIC8vIHByaXZhdGUgaGVscGVyIGZ1bmN0aW9uc1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvayhib2R5KSB7XHJcbiAgICAgICAgICByZXNvbHZlKHsgb2s6IHRydWUsIHRleHQ6ICgpID0+IFByb21pc2UucmVzb2x2ZShKU09OLnN0cmluZ2lmeShib2R5KSkgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHVuYXV0aG9yaXNlZCgpIHtcclxuICAgICAgICAgIHJlc29sdmUoeyBzdGF0dXM6IDQwMSwgdGV4dDogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ1VuYXV0aG9yaXNlZCcgfSkpIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XHJcbiAgICAgICAgICByZXNvbHZlKHsgc3RhdHVzOiA0MDAsIHRleHQ6ICgpID0+IFByb21pc2UucmVzb2x2ZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2UgfSkpIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICByZXR1cm4gcmVzcG9uc2UudGV4dCgpLnRoZW4odGV4dCA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gdGV4dCAmJiBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBpZiAoWzQwMSwgNDAzXS5pbmRleE9mKHJlc3BvbnNlLnN0YXR1cykgIT09IC0xKSB7XHJcbiAgICAgICAgLy8gYXV0byBsb2dvdXQgaWYgNDAxIFVuYXV0aG9yaXplZCBvciA0MDMgRm9yYmlkZGVuIHJlc3BvbnNlIHJldHVybmVkIGZyb20gYXBpXHJcbiAgICAgICAgYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGVycm9yID0gKGRhdGEgJiYgZGF0YS5tZXNzYWdlKSB8fCByZXNwb25zZS5zdGF0dXNUZXh0O1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcblxyXG5sZXQgaGlzdG9yeVxyXG5cclxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAvLyBjb25zdCBjcmVhdGVCcm93c2VySGlzdG9yeSA9IHJlcXVpcmUoJ2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnknKS5kZWZhdWx0XHJcblxyXG4gIGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpXHJcbn1cclxuXHJcbmV4cG9ydCB7IGhpc3RvcnkgfTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9Qcml2YXRlUm91dGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2F1dGgtaGVhZGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9mYWtlLWJhY2tlbmQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2hhbmRsZS1yZXNwb25zZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaGlzdG9yeSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcm9sZSc7XHJcbiIsImV4cG9ydCBjb25zdCBSb2xlID0ge1xyXG4gIEFkbWluOiAnQWRtaW4nLFxyXG4gIFVzZXI6ICdVc2VyJyxcclxuICBQcm92aWRlcjogJ1Byb3ZpZGVyJ1xyXG59XHJcbiIsImltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IHsgaGFuZGxlUmVzcG9uc2UgfSBmcm9tIFwiLi4vX2hlbHBlcnNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmxldCBjdXJyZW50VXNlclN1YmplY3QgPSBDb29raWVzLmdldEpTT04oXCJjdXJyZW50VXNlclwiKVxyXG4gID8gQ29va2llcy5nZXRKU09OKFwiY3VycmVudFVzZXJcIilcclxuICA6IHt9O1xyXG5cclxuY29uc3QgdGFyZ2V0ID0gYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGlgO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0aW9uU2VydmljZSA9IHtcclxuICBsb2dpbixcclxuICBsb2dvdXQsXHJcbiAgcmVnaXN0cmF0aW9uQWRtaW4sXHJcbiAgcmVnaXN0cmF0aW9uQ2xpZW50LFxyXG4gIHJlZ2lzdHJhdGlvblByb3ZpZGVyLFxyXG4gIHJlZ2lzdHJhdGlvbkFnZW5jeSxcclxuICBjdXJyZW50VXNlcjogY3VycmVudFVzZXJTdWJqZWN0LFxyXG4gIGdldCBjdXJyZW50VXNlclZhbHVlKCkge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRVc2VyU3ViamVjdDtcclxuICB9LFxyXG59O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKGAke3RhcmdldH0vbG9naW5gLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXHJcbiAgfSlcclxuICAgIC50aGVuKGhhbmRsZVJlc3BvbnNlKVxyXG4gICAgLnRoZW4oKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIudG9rZW4pIHtcclxuICAgICAgICBDb29raWVzLnNldChcImN1cnJlbnRVc2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpLCB7IGV4cGlyZXM6IDEgfSk7XHJcbiAgICAgICAgY3VycmVudFVzZXJTdWJqZWN0ID0gdXNlcjtcclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSkpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiByZWdpc3RyYXRpb25DbGllbnQoXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIHBhc3N3b3JkOiBzdHJpbmcsXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwYXNzd29yZF9jb25maXJtYXRpb246IHN0cmluZ1xyXG4pOiBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9jbGllbnQvcmVnaXN0ZXJgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcclxuICAgIH0pLFxyXG4gIH0pXHJcbiAgICAudGhlbihoYW5kbGVSZXNwb25zZSlcclxuICAgIC50aGVuKChjbGllbnQpID0+IHtcclxuICAgICAgQ29va2llcy5zZXQoXCJjdXJyZW50VXNlclwiLCBKU09OLnN0cmluZ2lmeShjbGllbnQpKTtcclxuICAgICAgY3VycmVudFVzZXJTdWJqZWN0ID0gY2xpZW50O1xyXG4gICAgICByZXR1cm4gY2xpZW50O1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgbG9naW4oZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBSb3V0ZXIucHVzaChcIi91c2VyQ2FiaW5ldFwiKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkFkbWluKFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBwYXNzd29yZDogc3RyaW5nLFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBzdHJpbmdcclxuKTogUHJvbWlzZTxhbnk+IHtcclxuICByZXR1cm4gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9hZG1pbi9yZWdpc3RlcmAsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uLFxyXG4gICAgfSksXHJcbiAgfSlcclxuICAgIC50aGVuKGhhbmRsZVJlc3BvbnNlKVxyXG4gICAgLnRoZW4oKGFkbWluKSA9PiB7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiY3VycmVudFVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoYWRtaW4pKTtcclxuICAgICAgY3VycmVudFVzZXJTdWJqZWN0ID0gYWRtaW47XHJcbiAgICAgIHJldHVybiBhZG1pbjtcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBsb2dpbihlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvblByb3ZpZGVyKFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBwYXNzd29yZDogc3RyaW5nLFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBzdHJpbmcsXHJcbiAgcGhvbmU6IHN0cmluZyB8IG51bWJlclxyXG4pOiBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2luZGl2aWR1YWwvcmVnaXN0ZXJgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcclxuICAgICAgcGhvbmVcclxuICAgIH0pLFxyXG4gIH0pXHJcbiAgICAudGhlbihoYW5kbGVSZXNwb25zZSlcclxuICAgIC50aGVuKChwcm92aWRlcikgPT4ge1xyXG4gICAgICBDb29raWVzLnNldChcImN1cnJlbnRVc2VyXCIsIEpTT04uc3RyaW5naWZ5KHByb3ZpZGVyLnVzZXIpKTtcclxuICAgICAgY3VycmVudFVzZXJTdWJqZWN0ID0gcHJvdmlkZXI7XHJcbiAgICAgIHJldHVybiBwcm92aWRlcjtcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBsb2dpbihlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IFJvdXRlci5wdXNoKFwiL21vZGVsQ2FiaW5ldFwiKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkFnZW5jeShcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgcGFzc3dvcmQ6IHN0cmluZyxcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogc3RyaW5nLFxyXG4gIHBob25lOiBzdHJpbmcgfCBudW1iZXIsXHJcbiAgYWdlbmN5X25hbWU6IHN0cmluZ1xyXG4pOiBQcm9taXNlPGFueT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9hZ2VuY3kvcmVnaXN0ZXJgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcclxuICAgICAgcGhvbmUsXHJcbiAgICAgIGFnZW5jeV9uYW1lXHJcbiAgICB9KSxcclxuICB9KTtcclxuICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gIHByb21pc2UudGhlbihwcm92aWRlciA9PiB7XHJcbiAgICBDb29raWVzLnNldChcImN1cnJlbnRVc2VyXCIsIEpTT04uc3RyaW5naWZ5KHByb3ZpZGVyKSk7XHJcbiAgICBjdXJyZW50VXNlclN1YmplY3QgPSBwcm92aWRlcjtcclxuICAgIHJldHVybiBwcm92aWRlcjtcclxuICB9KS50aGVuKCgpID0+IGxvZ2luKGVtYWlsLCBwYXNzd29yZCkpXHJcbiAgICAudGhlbigoKSA9PiBSb3V0ZXIucHVzaChcIi9tb2RlbENhYmluZXRcIikpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHtcclxuICBDb29raWVzLnJlbW92ZShcImN1cnJlbnRVc2VyXCIpO1xyXG4gIHJldHVybiBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2xvZ291dGAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gUm91dGVyLnB1c2goJy8nKSlcclxuICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSkpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcbiIsImltcG9ydCB7IGF1dGhIZWFkZXIsIGhhbmRsZVJlc3BvbnNlIH0gZnJvbSAnLi4vX2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJTZXJ2aWNlID0ge1xyXG4gIGdldEFsbCxcclxuICBnZXRCeUlkLFxyXG4gIHVwZGF0ZSxcclxuICBkZWxldGVVc2VyXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRBbGwoKSB7XHJcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9O1xyXG4gIHJldHVybiBmZXRjaChgL3VzZXJzYCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oaGFuZGxlUmVzcG9uc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCeUlkKGlkKSB7XHJcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9O1xyXG4gIHJldHVybiBmZXRjaChgL3VzZXJzLyR7aWR9YCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oaGFuZGxlUmVzcG9uc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUoaWQsIG5hbWUsIHNlY29uZF9uYW1lLCBlbWFpbCwgcGhvbmUsIHJhdGluZywgcG9zaXRpb24sIHRlbGVncmFtLCB2aWJlciwgd2hhdHNhcHAsIHNpdGUsIGF2YXRhcikge1xyXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiBhdXRoSGVhZGVyKCksXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHNlY29uZF9uYW1lLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGhvbmUsXHJcbiAgICAgIHJhdGluZyxcclxuICAgICAgcG9zaXRpb24sXHJcbiAgICAgIHRlbGVncmFtLFxyXG4gICAgICB2aWJlcixcclxuICAgICAgd2hhdHNhcHAsXHJcbiAgICAgIHNpdGUsXHJcbiAgICAgIGF2YXRhclxyXG4gICAgfSlcclxuICB9O1xyXG4gIHJldHVybiBmZXRjaChgL2FwaS9hdXRoL3VzZXIvdXBkYXRlLyR7aWR9YCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oaGFuZGxlUmVzcG9uc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVVc2VyKGlkKSB7XHJcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgaGVhZGVyczogYXV0aEhlYWRlcigpXHJcbiAgfTtcclxuICByZXR1cm4gZmV0Y2goYC9hcGkvYXV0aC91c2VyL2Rlc3Ryb3kvJHtpZH1gLCByZXF1ZXN0T3B0aW9ucykudGhlbihoYW5kbGVSZXNwb25zZSk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2hlYWRlci0yNGMzMTIzYmUzODBjZTE2M2NkNDM0NzEwNzcyYTQ1Yy5wbmdcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL2hlYWRlci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZGVyQmcgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2hlYWRlci5wbmdcIjtcclxuaW1wb3J0IE5hdkNvbXBvbmVudCBmcm9tIFwiLi9OYXZcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuaGVhZGVyfT5cclxuICAgICAgPE5hdkNvbXBvbmVudCAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5oZWFkZXJfaW1hZ2VfYmxvY2t9PlxyXG4gICAgICAgIDxpbWcgc3JjPXtIZWFkZXJCZ30gYWx0PVwiVmliZSBDaXR5XCIgY2xhc3NOYW1lPVwidy0xMDBcIiAvPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2Ake3MuaGVhZGVyX3RpdGxlfSB0ZXh0LXdoaXRlYH0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICBWSUJFIDxiciAvPiBDSVRZXHJcbiAgICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQcm9ncmVzc1wiO1xyXG4gICAgICAgICAgc3JjOiB1cmwoXCIvc3JjL2Fzc2V0cy9mb250cy9wcm9ncmVzcy5vdGZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcyBmcm9tICcuL2hlYWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL19zZXJ2aWNlcyc7XHJcbmltcG9ydCB7XHJcbiAgQ29sbGFwc2UsXHJcbiAgTmF2YmFyLFxyXG4gIE5hdmJhclRvZ2dsZXIsXHJcbiAgTmF2YmFyQnJhbmQsXHJcbiAgTmF2LFxyXG4gIE5hdkl0ZW0sXHJcbiAgTmF2TGlua1xyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgTmF2Q29tcG9uZW50ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVMaW5rLCBzZXRBY3RpdmVMaW5rXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZS51c2VyKSB7XHJcbiAgICAgIHNldFJvbGUoYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWUudXNlci5yb2xlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgIG1heFdpZHRoOiAnMTI2MHB4JywgbWFyZ2luOiAnMCBhdXRvJ1xyXG4gICAgfX0+XHJcbiAgICAgIDxOYXZiYXIgY29sb3I9XCJkYXJrXCIgZGFyayBleHBhbmQ9XCJsZ1wiPlxyXG4gICAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cclxuICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIG5hdmJhcj5cclxuICAgICAgICAgICAgeyhyb2xlID09PSAnaW5kaXZpZHVhbCcgfHwgcm9sZSA9PT0gJ2FnZW5jeScpID8gPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9tb2RlbENhYmluZXRcIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVMaW5rKCdtb2RlbCBjYWJpbmV0Jyl9IGNsYXNzTmFtZT17YWN0aXZlTGluayA9PT0gJ21vZGVsIGNhYmluZXQnID8gcy5hY3RpdmVMaW5rIDogbnVsbH0+TW9kZWwgQ2FiaW5ldDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPiA6IG51bGx9XHJcbiAgICAgICAgICAgIHtyb2xlID09PSAnY2xpZW50JyA/IDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvdXNlckNhYmluZXRcIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVMaW5rKCd1c2VyIGNhYmluZXQnKX0gY2xhc3NOYW1lPXthY3RpdmVMaW5rID09PSAndXNlciBjYWJpbmV0JyA/IHMuYWN0aXZlTGluayA6IG51bGx9PlVzZXIgQ2FiaW5ldDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPiA6IG51bGx9XHJcbiAgICAgICAgICAgIHsocm9sZSA9PT0gJ2luZGl2aWR1YWwnIHx8IHJvbGUgPT09ICdhZ2VuY3knKSA/IDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvYWRkUG9zdFwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUxpbmsoJ2FkZCBwb3N0Jyl9IGNsYXNzTmFtZT17YWN0aXZlTGluayA9PT0gJ2FkZCBwb3N0JyA/IHMuYWN0aXZlTGluayA6IG51bGx9PkFkZCBQb3N0PC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+IDogbnVsbH1cclxuICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9sb2dpblwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUxpbmsoJ2xvZ2luJyl9IGNsYXNzTmFtZT17YWN0aXZlTGluayA9PT0gJ2xvZ2luJyA/IHMuYWN0aXZlTGluayA6IG51bGx9PkxvZ2luPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIHsocm9sZSA9PT0gJ2FkbWluJyB8fCByb2xlID09PSAnaW5kaXZpZHVhbCcgfHwgcm9sZSA9PT0gJ2NsaWVudCcgfHwgcm9sZSA9PT0gJ2FnZW5jeScpID8gPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgb25DbGljaz17KCkgPT4gYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ291dCgpfSA+TG9nb3V0PC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+IDogbnVsbH1cclxuICAgICAgICAgICAge3JvbGUgPT09ICdhZG1pbicgPyA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2FkbWluXCIgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTGluaygnYWRtaW4nKX0gY2xhc3NOYW1lPXthY3RpdmVMaW5rID09PSAnYWRtaW4nID8gcy5hY3RpdmVMaW5rIDogbnVsbH0+QWRtaW48L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT4gOiBudWxsfVxyXG4gICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3Rlc3RcIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVMaW5rKCd0ZXN0Jyl9IGNsYXNzTmFtZT17YWN0aXZlTGluayA9PT0gJ3Rlc3QnID8gcy5hY3RpdmVMaW5rIDogbnVsbH0+VEVTVDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbk5hdkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBDb21wb25lbnQsIGN0eCB9KSA9PiB7XHJcbiAgcmV0dXJuIHt9XHJcbn1cclxuXHJcblxyXG5OYXZDb21wb25lbnQucHJvcFR5cGVzID0ge1xyXG4gIGxpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcclxuICBkYXJrOiBQcm9wVHlwZXMuYm9vbCxcclxuICBmaXhlZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGV4cGFuZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICB0YWc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuc3RyaW5nXSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2Q29tcG9uZW50O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJoZWFkZXJfaGVhZGVyX18ycExpWFwiLFxuXHRcImhlYWRlcl9pbWFnZV9ibG9ja1wiOiBcImhlYWRlcl9oZWFkZXJfaW1hZ2VfYmxvY2tfXzE4QWNVXCIsXG5cdFwiaGVhZGVyX3RpdGxlXCI6IFwiaGVhZGVyX2hlYWRlcl90aXRsZV9fMjBFbUFcIlxufTtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBzIGZyb20gJy4vbGF5b3V0Lm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17cy5sYXlvdXR9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubGF5b3V0X2NvbnRlbnR9PlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17cy5sYXlvdXRfbWFpbl9ibG9ja30+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGF5b3V0XCI6IFwibGF5b3V0X2xheW91dF9fVTBYN1BcIixcblx0XCJsYXlvdXRfY29udGVudFwiOiBcImxheW91dF9sYXlvdXRfY29udGVudF9fRlk1dTVcIixcblx0XCJsYXlvdXRfbWFpbl9ibG9ja1wiOiBcImxheW91dF9sYXlvdXRfbWFpbl9ibG9ja19fMUsydVlcIlxufTtcbiIsImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgIHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcblxyXG5cclxuY2xhc3MgQ3VzdG9tQXBwIGV4dGVuZHMgQXBwIHtcclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xyXG4gICAgY29uc3QgcGFnZVByb3BzID0gcHJvcHMuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IHByb3BzLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMocHJvcHMuY3R4KSA6IHt9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFnZVByb3BzOiBwYWdlUHJvcHNcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCBzdG9yZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxyXG4gICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PSdYLVVBLUNvbXBhdGlibGUnIGNvbnRlbnQ9J0lFPWVkZ2UnIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSxtaW5pbXVtLXNjYWxlPTEsbWF4aW11bS1zY2FsZT0xLHVzZXItc2NhbGFibGU9bm8nIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nRGVzY3JpcHRpb24nIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPSdrZXl3b3JkcycgY29udGVudD0nS2V5d29yZHMnIC8+XHJcbiAgICAgICAgICA8dGl0bGU+TmV4dC5qcyBQV0EgRXhhbXBsZTwvdGl0bGU+XHJcblxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIiAvPlxyXG4gICAgICAgICAgPGxpbmsgaHJlZj0nL2Zhdmljb24tMTZ4MTYucG5nJyByZWw9J2ljb24nIHR5cGU9J2ltYWdlL3BuZycgc2l6ZXM9JzE2eDE2JyAvPlxyXG4gICAgICAgICAgPGxpbmsgaHJlZj0nL2Zhdmljb24tMzJ4MzIucG5nJyByZWw9J2ljb24nIHR5cGU9J2ltYWdlL3BuZycgc2l6ZXM9JzMyeDMyJyAvPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCIvYXBwbGUtaWNvbi5wbmdcIj48L2xpbms+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzMxN0VGQlwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLy9tYWtlU3RvcmUgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbmV3IHN0b3JlIGZvciBldmVyeSByZXF1ZXN0XHJcbmNvbnN0IG1ha2VTdG9yZSA9ICgpID0+IHN0b3JlO1xyXG5cclxuLy93aXRoUmVkdXggd3JhcHBlciB0aGF0IHBhc3NlcyB0aGUgc3RvcmUgdG8gdGhlIEFwcCBDb21wb25lbnRcclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KG1ha2VTdG9yZSkoQ3VzdG9tQXBwKTtcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBURVNUX0NSRUFURV9QT1NULCBTSE9XX0xPQURFUiwgSElERV9MT0FERVIsIFNIT1dfQUxFUlQsIEhJREVfQUxFUlQsIFRFU1RfUkVRVUVTVF9QT1NUUywgR0VUX0FMTF9QT1NUUywgR0VUX0xPQ0FJVE9OU19JTkZPLCBHRVRfQ0lUSUVTLCBDUkVBVEVfU1VQUE9SVF9UQVNLLCBHRVRfQUxMX1VTRVJfVEFTS1MsIEdFVF9BUFBfSU5GTywgR0VUX05FV19QT1NUUywgR0VUX1BBR0VTX05VTUJFUiwgR0VUX1BPU1RfQ09NTUVOVFMsIENSRUFURV9QT1NUX0NPTU1FTlQsIEZJTFRFUl9QT1NUUyB9IGZyb20gXCIuL3R5cGVzXCJcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCB7IGF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9fc2VydmljZXNcIjtcclxuXHJcbi8vIFQgRSBTIFQgXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb3N0KHBvc3Q6IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFRFU1RfQ1JFQVRFX1BPU1QsXHJcbiAgICAgICAgcGF5bG9hZDogcG9zdFxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0xvYWRlcigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogU0hPV19MT0FERVJcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUxvYWRlcigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogSElERV9MT0FERVJcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FsZXJ0KHRleHQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICByZXR1cm4gKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogU0hPV19BTEVSVCxcclxuICAgICAgICAgICAgcGF5bG9hZDogdGV4dFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGhpZGVBbGVydCgpKVxyXG4gICAgICAgIH0sIDMwMDApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVBbGVydCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogSElERV9BTEVSVFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvc3RzKCk6IGFueSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFRFU1RfUkVRVUVTVF9QT1NUU1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0QWxsUG9zdHMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0c2ApO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX1BBR0VTX05VTUJFUiwgcGF5bG9hZDogcmVzLmxhc3RfcGFnZSB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9BTExfUE9TVFMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0TmV3UG9zdHMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cy9hbGwvbmV3YCk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX05FV19QT1NUUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbnNJbmZvID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvbG9jYXRpb25gKTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfTE9DQUlUT05TX0lORk8sIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0QXBwSW5mbyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2luZm9gKTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfQVBQX0lORk8sIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0Q2l0aWVzID0gKHN0YXRlSWQ6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvbG9jYXRpb24vY2l0aWVzLyR7c3RhdGVJZH1gKTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfQ0lUSUVTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVN1cHBvcnRUYXNrID0gKHRhc2s6IGFueSkgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvc3VwcG9ydC9jcmVhdGVgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhc2spXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBDUkVBVEVfU1VQUE9SVF9UQVNLLCBwYXlsb2FkOiB0YXNrIH0pXHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldEFsbFVzZXJzVGFza3MgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9zdXBwb3J0LyR7dXNlci51c2VyLmlkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0FMTF9VU0VSX1RBU0tTLCBwYXlsb2FkOiByZXMgfSk7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBzZWxlY3RQb3N0c1BhZ2UgPSAocGFnZTogbnVtYmVyIHwgc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cz9wYWdlPSR7cGFnZX1gKTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9QQUdFU19OVU1CRVIsIHBheWxvYWQ6IHJlcy5sYXN0X3BhZ2UgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfQUxMX1BPU1RTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcclxuICAgIH0pXHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0Q29tbWVudHMgPSAocG9zdElkOiBudW1iZXIgfCBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogYW55KSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzLyR7cG9zdElkfS9jb21tZW50c2AsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfUE9TVF9DT01NRU5UUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdENvbW1lbnQgPSAocG9zdElkOiBudW1iZXIgfCBzdHJpbmcsIGNvbW1lbnQ6IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvJHtwb3N0SWR9L2NvbW1lbnRzL2NyZWF0ZWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb21tZW50IH0pXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IENSRUFURV9QT1NUX0NPTU1FTlQsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGZpbHRlclBvc3RzID0gKGZpbHRlckl0ZW1zT2JqZWN0OiBhbnkpID0+IGFzeW5jIChkaXNwYXRjaDogYW55KSA9PiB7XHJcbiAgICAvLyBmcm9tLCB0bywgZ2VuZGVyLCBldGhuaWNpdHlfaWQsIGhhaXJfaWQsIGV5ZV9pZCwgY2F0ZWdvcnlfaWQsIGFmZmlsaWF0aW9uX2lkLCBhdmFpbGFiaWxpdHlfaWRzKGFycmF5KSwgYXZhaWxhYmxldG9faWRzKGFycmF5KVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9maWx0ZXJgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmaWx0ZXJJdGVtc09iamVjdClcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9QQUdFU19OVU1CRVIsIHBheWxvYWQ6IHJlcy5sYXN0X3BhZ2UgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBGSUxURVJfUE9TVFMsIHBheWxvYWQ6IHJlcy5kYXRhLmRhdGEgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCIvLyB0ZXN0XHJcbmV4cG9ydCBjb25zdCBURVNUX0NSRUFURV9QT1NUID0gJ0NSRUFURV9QT1NUJztcclxuZXhwb3J0IGNvbnN0IFRFU1RfRkVUQ0hfUE9TVCA9ICdGRVRDSF9QT1NUJztcclxuZXhwb3J0IGNvbnN0IFRFU1RfUkVRVUVTVF9QT1NUUyA9ICdSRVFVRVNUX1BPU1RTJztcclxuXHJcbi8vIGFwcFxyXG5leHBvcnQgY29uc3QgU0hPV19MT0FERVIgPSAnQVBQL1NIT1dfTE9BREVSJztcclxuZXhwb3J0IGNvbnN0IEhJREVfTE9BREVSID0gJ0FQUC9ISURFX0xPQURFUic7XHJcbmV4cG9ydCBjb25zdCBTSE9XX0FMRVJUID0gJ0FQUC9TSE9XX0FMRVJUJztcclxuZXhwb3J0IGNvbnN0IEhJREVfQUxFUlQgPSAnQVBQL0hJREVfQUxFUlQnOyBcclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfUE9TVFMgPSAnR0VUX0FMTF9QT1NUUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfUEFHRVNfTlVNQkVSID0gJ0dFVF9QQUdFU19OVU1CRVInO1xyXG5leHBvcnQgY29uc3QgR0VUX05FV19QT1NUUyA9ICdHRVRfTkVXX1BPU1RTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9MT0NBSVRPTlNfSU5GTyA9ICdHRVRfTE9DQUlUT05TX0lORk8nO1xyXG5leHBvcnQgY29uc3QgR0VUX0NJVElFUyA9ICdHRVRfQ0lUSUVTJztcclxuZXhwb3J0IGNvbnN0IENSRUFURV9TVVBQT1JUX1RBU0sgPSAnQ1JFQVRFX1NVUFBPUlRfVEFTSyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX1VTRVJfVEFTS1MgPSAnR0VUX0FMTF9VU0VSX1RBU0tTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9BUFBfSU5GTyA9ICdHRVRfQVBQX0lORk8nO1xyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfQ09NTUVOVFMgPSAnR0VUX1BPU1RfQ09NTUVOVFMnO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1RfQ09NTUVOVCA9ICdDUkVBVEVfUE9TVF9DT01NRU5UJztcclxuZXhwb3J0IGNvbnN0IEZJTFRFUl9QT1NUUyA9ICdGSUxURVJfUE9TVFMnO1xyXG5cclxuLy8gcHJvdmlkZXJcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUID0gJ1BST1ZJREVSL0FERF9QT1NUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUID0gJ1BST1ZJREVSL1JFTU9WRV9QT1NUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NUID0gJ1BST1ZJREVSL1VQREFURV9QT1NUJztcclxuXHJcbi8vIHByb3ZpZGVyXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvdmlkZXJQb3N0IHtcclxuICBpZDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBzZWNvbmROYW1lOiBzdHJpbmcsXHJcbiAgYWNjb3VudGluZ05hbWU6IHN0cmluZyxcclxuICBzZXg6IHN0cmluZyxcclxuICBhZ2U6IG51bWJlciB8IHN0cmluZyxcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBob25lOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgZXRobml0aGl0eTogc3RyaW5nLFxyXG4gIGhhaXI6IHN0cmluZyxcclxuICBleWVzOiBzdHJpbmcsXHJcbiAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgYWZmaWxpYXRpb246IHN0cmluZyxcclxuICBhdmFpbGFibGVUbzogc3RyaW5nLFxyXG4gIGF2YWlsYWJpbGl0eTogc3RyaW5nLFxyXG4gIHNob3J0U3VtbWFyeTogc3RyaW5nLFxyXG4gIGFib3V0OiBzdHJpbmcsXHJcbiAgcGhvdG9zOiBzdHJpbmdbXSxcclxuICB2aWRlb3M6IHN0cmluZ1tdXHJcbn1cclxuXHJcbi8vIHVzZXJcclxuZXhwb3J0IGNvbnN0IFNFTEVDVF9TVEFURSA9ICdVU0VSL1NFTEVDVF9TVEFURSc7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RfQ0lUWSA9ICdVU0VSL1NFTEVDVF9DSVRZJztcclxuZXhwb3J0IGNvbnN0IFNFTEVDVF9MSVNUX1NPUlQgPSAnVVNFUi9TRUxFQ1RfTElTVF9TT1JUJztcclxuZXhwb3J0IGNvbnN0IFNFTEVDVF9MSVNUX0ZJTFRFUiA9ICdVU0VSL1NFTEVDVF9MSVNUX0ZJTFRFUic7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RfQ0FURUdPUlkgPSAnVVNFUi9TRUxFQ1RfQ0FURUdPUlknO1xyXG5cclxuLy8gYWRtaW5cclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfU1VQUE9SVF9UQVNLUyA9ICdHRVRfQUxMX1NVUFBPUlRfVEFTS1MnO1xyXG5leHBvcnQgY29uc3QgRURJVF9TVVBQT1JUX1RBU0tTID0gJ0VESVRfU1VQUE9SVF9UQVNLUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfU1VQUE9SVF9UQVNLID0gJ0RFTEVURV9TVVBQT1JUX1RBU0snO1xyXG4vLyBleHBvcnQgY29uc3QgQ1JFQVRFX0NBVEVHT1JZID0gJ0NSRUFURV9DQVRFR09SWSc7XHJcbi8vIGV4cG9ydCBjb25zdCBFRElUX0NBVEVHT1JZID0gJ0VESVRfQ0FURUdPUlknO1xyXG4vLyBleHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZID0gJ0RFTEVURV9DQVRFR09SWSc7XHJcbiIsImltcG9ydCB7IEdFVF9BTExfU1VQUE9SVF9UQVNLUywgREVMRVRFX1NVUFBPUlRfVEFTSywgQ1JFQVRFX0NBVEVHT1JZIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcclxuXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdGFza3M6IFtdLFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkbWluUmVkdWNlciA9IChzdGF0ZTogYW55ID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgR0VUX0FMTF9TVVBQT1JUX1RBU0tTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdGFza3M6IGFjdGlvbi5wYXlsb2FkIH1cclxuXHJcbiAgICBjYXNlIERFTEVURV9TVVBQT1JUX1RBU0s6XHJcbiAgICAgIGNvbnN0IHRhc2tzID0gc3RhdGUudGFza3MuZmlsdGVyKCh0YXNrOiBhbnkpID0+IHRhc2suaWQgIT0gYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdGFza3MgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU0hPV19MT0FERVIsIEhJREVfTE9BREVSLCBTSE9XX0FMRVJULCBISURFX0FMRVJULCBHRVRfQUxMX1BPU1RTLCBHRVRfTE9DQUlUT05TX0lORk8sIEdFVF9DSVRJRVMsIENSRUFURV9TVVBQT1JUX1RBU0ssIEdFVF9BTExfVVNFUl9UQVNLUywgR0VUX0FQUF9JTkZPLCBHRVRfTkVXX1BPU1RTLCBHRVRfUEFHRVNfTlVNQkVSLCBHRVRfUE9TVF9DT01NRU5UUywgQ1JFQVRFX1BPU1RfQ09NTUVOVCwgRklMVEVSX1BPU1RTIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBwb3N0Q29tbWVudHM6IFtdLFxyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIGFsZXJ0OiBudWxsLFxyXG4gIGNhdGVnb3JpZXM6IFtdLFxyXG4gIHBvc3RzOiBbXSxcclxuICBuZXdQb3N0czogW10sXHJcbiAgc3RhdGVzOiBbXSxcclxuICBjaXRpZXM6IFtdLFxyXG4gIHN1cHBvcnRUYXNrczogW1xyXG4gICAgeyBzdWJqZWN0OiAnVGFzayAxIFN1YmplY3QnLCBtZXNzYWdlOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFF1aXMgaXBzdW0gc3VzcGVuZGlzc2UgdWx0cmljZXMgZ3JhdmlkYS4gUmlzdXMgY29tbW9kbyB2aXZlcnJhIG1hZWNlbmFzIGFjY3Vtc2FuIGxhY3VzIHZlbCBmYWNpbGlzaXMuJywgaWQ6IDEgfSxcclxuICAgIHsgc3ViamVjdDogJ1Rhc2sgMiBTdWJqZWN0JywgbWVzc2FnZTogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBRdWlzIGlwc3VtIHN1c3BlbmRpc3NlIHVsdHJpY2VzIGdyYXZpZGEuIFJpc3VzIGNvbW1vZG8gdml2ZXJyYSBtYWVjZW5hcyBhY2N1bXNhbiBsYWN1cyB2ZWwgZmFjaWxpc2lzLicsIGlkOiAyIH0sXHJcbiAgICB7IHN1YmplY3Q6ICdUYXNrIDMgU3ViamVjdCcsIG1lc3NhZ2U6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gUXVpcyBpcHN1bSBzdXNwZW5kaXNzZSB1bHRyaWNlcyBncmF2aWRhLiBSaXN1cyBjb21tb2RvIHZpdmVycmEgbWFlY2VuYXMgYWNjdW1zYW4gbGFjdXMgdmVsIGZhY2lsaXNpcy4nLCBpZDogMyB9XHJcbiAgXSxcclxuICBhZmZpbGlhdGlvbjogW10sXHJcbiAgYXZhaWxhYmlsaXR5OiBbXSxcclxuICBhdmFpbGFibGVfdG86IFtdLFxyXG4gIGV0aG5pY2l0eTogW10sXHJcbiAgZXllczogW10sXHJcbiAgaGFpcjogW10sXHJcbiAgcGFnZXNOdW1iZXI6IDAsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXBwUmVkdWNlciA9IChzdGF0ZTogYW55ID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU0hPV19MT0FERVI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cclxuXHJcbiAgICBjYXNlIEhJREVfTE9BREVSOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxyXG5cclxuICAgIGNhc2UgU0hPV19BTEVSVDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFsZXJ0OiBhY3Rpb24ucGF5bG9hZCB9XHJcblxyXG4gICAgY2FzZSBISURFX0FMRVJUOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYWxlcnQ6IG51bGwgfVxyXG5cclxuICAgIGNhc2UgR0VUX0FMTF9QT1NUUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XHJcblxyXG4gICAgY2FzZSBGSUxURVJfUE9TVFM6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogYWN0aW9uLnBheWxvYWQgfVxyXG5cclxuICAgIGNhc2UgR0VUX1BBR0VTX05VTUJFUjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBhZ2VzTnVtYmVyOiBhY3Rpb24ucGF5bG9hZCB9XHJcblxyXG4gICAgY2FzZSBHRVRfTkVXX1BPU1RTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbmV3UG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cclxuXHJcbiAgICBjYXNlIEdFVF9MT0NBSVRPTlNfSU5GTzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHN0YXRlczogYWN0aW9uLnBheWxvYWQgfVxyXG5cclxuICAgIGNhc2UgR0VUX0NJVElFUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNpdGllczogYWN0aW9uLnBheWxvYWQgfVxyXG5cclxuICAgIGNhc2UgQ1JFQVRFX1NVUFBPUlRfVEFTSzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHN1cHBvcnRUYXNrczogWy4uLnN0YXRlLnN1cHBvcnRUYXNrcywgYWN0aW9uLnBheWxvYWRdIH1cclxuXHJcbiAgICBjYXNlIEdFVF9BTExfVVNFUl9UQVNLUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHN1cHBvcnRUYXNrczogYWN0aW9uLnBheWxvYWQgfVxyXG5cclxuICAgIGNhc2UgR0VUX1BPU1RfQ09NTUVOVFM6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0Q29tbWVudHM6IGFjdGlvbi5wYXlsb2FkIH1cclxuXHJcbiAgICBjYXNlIENSRUFURV9QT1NUX0NPTU1FTlQ6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0Q29tbWVudHM6IFsuLi5zdGF0ZS5wb3N0Q29tbWVudHMsIGFjdGlvbi5wYXlsb2FkXSB9XHJcblxyXG4gICAgY2FzZSBHRVRfQVBQX0lORk86XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2F0ZWdvcmllczogYWN0aW9uLnBheWxvYWQuY2F0ZWdvcmllcyxcclxuICAgICAgICBhZmZpbGlhdGlvbjogYWN0aW9uLnBheWxvYWQuYWZmaWxpYXRpb24sXHJcbiAgICAgICAgYXZhaWxhYmlsaXR5OiBhY3Rpb24ucGF5bG9hZC5hdmFpbGFiaWxpdHksXHJcbiAgICAgICAgYXZhaWxhYmxlX3RvOiBhY3Rpb24ucGF5bG9hZC5hdmFpbGFibGVfdG8sXHJcbiAgICAgICAgZXRobmljaXR5OiBhY3Rpb24ucGF5bG9hZC5ldGhuaWNpdHksXHJcbiAgICAgICAgZXllczogYWN0aW9uLnBheWxvYWQuZXllcyxcclxuICAgICAgICBoYWlyOiBhY3Rpb24ucGF5bG9hZC5oYWlyXHJcbiAgICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQUREX1BPU1QsIFJFTU9WRV9QT1NULCBVUERBVEVfUE9TVCB9IGZyb20gXCIuLi9hY3Rpb25zL3R5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgcHJvdmlkZXJQb3N0czogW11cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm92aWRlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfUE9TVDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb3ZpZGVyUG9zdHM6IHN0YXRlLnByb3ZpZGVyUG9zdHMuY29uY2F0KGFjdGlvbi5wYXlsb2FkKSB9XHJcblxyXG4gICAgY2FzZSBSRU1PVkVfUE9TVDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb3ZpZGVyUG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cclxuXHJcbiAgICBjYXNlIFVQREFURV9QT1NUOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvdmlkZXJQb3N0czogYWN0aW9uLnBheWxvYWQgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyB0ZXN0UmVkdWNlciB9IGZyb20gJy4vdGVzdFJlZHVjZXInO1xuaW1wb3J0IHsgYXBwUmVkdWNlciB9IGZyb20gJy4vYXBwUmVkdWNlcic7XG5pbXBvcnQgeyBwcm92aWRlclJlZHVjZXIgfSBmcm9tICcuL3Byb3ZpZGVyUmVkdWNlcic7XG5pbXBvcnQgeyB1c2VyUmVkdWNlciB9IGZyb20gJy4vdXNlclJlZHVjZXInO1xuaW1wb3J0IHsgYWRtaW5SZWR1Y2VyIH0gZnJvbSAnLi9hZG1pblJlZHVjZXInO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgdGVzdFBvc3RzOiB0ZXN0UmVkdWNlcixcbiAgICBhcHA6IGFwcFJlZHVjZXIsXG4gICAgcHJvdmlkZXI6IHByb3ZpZGVyUmVkdWNlcixcbiAgICB1c2VyOiB1c2VyUmVkdWNlcixcbiAgICBhZG1pbjogYWRtaW5SZWR1Y2VyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQgeyBURVNUX0NSRUFURV9QT1NULCBURVNUX0ZFVENIX1BPU1QgfSBmcm9tIFwiLi4vYWN0aW9ucy90eXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHBvc3RzOiBbXSxcclxuICBmZXRjaGVkUG9zdHM6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdGVzdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBURVNUX0NSRUFURV9QT1NUOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdHM6IHN0YXRlLnBvc3RzLmNvbmNhdChhY3Rpb24ucGF5bG9hZCkgfVxyXG5cclxuICAgIGNhc2UgVEVTVF9GRVRDSF9QT1NUOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZmV0Y2hlZFBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFNFTEVDVF9TVEFURSwgU0VMRUNUX0NJVFksIFNFTEVDVF9MSVNUX1NPUlQsIFNFTEVDVF9MSVNUX0ZJTFRFUiwgU0VMRUNUX0NBVEVHT1JZIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBwb3N0czogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgU0VMRUNUX1NUQVRFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cclxuXHJcbiAgICBjYXNlIFNFTEVDVF9DSVRZOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cclxuXHJcbiAgICBjYXNlIFNFTEVDVF9MSVNUX1NPUlQ6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogYWN0aW9uLnBheWxvYWQgfVxyXG5cclxuICAgIGNhc2UgU0VMRUNUX0xJU1RfRklMVEVSOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cclxuXHJcbiAgICBjYXNlIFNFTEVDVF9DQVRFR09SWTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufSIsImltcG9ydCB7IGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IHNhZ2FXYXRjaGVyIH0gZnJvbSAnLi90ZXN0U2FnYXMnO1xyXG4vLyBpbXBvcnQgeyB1c2VyU2FnYVdhdGNoZXIgfSBmcm9tICcuL3VzZXJTYWdhcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBzYWdhV2F0Y2hlcigpLFxyXG4gICAgLy8gdXNlclNhZ2FXYXRjaGVyKClcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHsgdGFrZUV2ZXJ5LCBwdXQsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBURVNUX1JFUVVFU1RfUE9TVFMsIFRFU1RfRkVUQ0hfUE9TVCB9IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xyXG5pbXBvcnQgeyBzaG93TG9hZGVyLCBoaWRlTG9hZGVyLCBzaG93QWxlcnQgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbnMnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogc2FnYVdhdGNoZXIoKSB7XHJcbiAgeWllbGQgdGFrZUV2ZXJ5KFRFU1RfUkVRVUVTVF9QT1NUUywgc2FnYVdvcmtlcilcclxufVxyXG5cclxuZnVuY3Rpb24qIHNhZ2FXb3JrZXIoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dChzaG93TG9hZGVyKCkpO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHlpZWxkIGNhbGwoZmV0Y2hQb3N0cyk7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBURVNUX0ZFVENIX1BPU1QsIHBheWxvYWQgfSk7XHJcbiAgICB5aWVsZCBwdXQoaGlkZUxvYWRlcigpKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB5aWVsZCBwdXQoc2hvd0FsZXJ0KCdTb21ldGhpbmcgZ29pbmcgd3JvbmcnKSk7XHJcbiAgICB5aWVsZCBwdXQoaGlkZUxvYWRlcigpKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoUG9zdHMoKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJyk7XHJcbiAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxufSIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9yb290UmVkdWNlcic7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuLy8gaW1wb3J0IHsgZm9yYmlkZGVuV29yZHNNaWRkbHd3YXJlIH0gZnJvbSAnLi9taWRkbGV3YXJlJztcbmltcG9ydCBjcmVhdGVTYWdhc01pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgeyByb290U2FnYSB9IGZyb20gJy4vc2FnYXMvc2FnYXMnO1xuaW1wb3J0IHsgZ2V0QXBwSW5mbyB9IGZyb20gJy4vYWN0aW9ucy9hY3Rpb25zJztcblxuY29uc3QgcHJlbG9hZGVkU3RhdGUgPSB7fTtcbmNvbnN0IHNhZ2EgPSBjcmVhdGVTYWdhc01pZGRsZXdhcmUoKTtcblxuY29uc3Qgc3RvcmU6IGFueSA9IGNyZWF0ZVN0b3JlKFxuICByb290UmVkdWNlcixcbiAgcHJlbG9hZGVkU3RhdGUsXG4gIGFwcGx5TWlkZGxld2FyZShcbiAgICB0aHVuayxcbiAgICAvLyBmb3JiaWRkZW5Xb3Jkc01pZGRsd3dhcmUsXG4gICAgc2FnYVxuICApXG4pO1xuXG5zdG9yZS5kaXNwYXRjaChnZXRBcHBJbmZvKCkpO1xuXG5zYWdhLnJ1bihyb290U2FnYSk7XG5cbnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCd1cGRhdGVkIHN0YXRlOiAnLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpc3RvcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==