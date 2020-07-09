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
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/header/Header.jsx";

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
  }, "@font-face{font-family:\"Progress\";src:url(\"/src/assets/fonts/progress.otf\");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rldi0yL1dlYnN0b3JtUHJvamVjdHMvdmliZS9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmtCLEFBR2tDLHVCQUNtQiwwQ0FDNUMiLCJmaWxlIjoiL2hvbWUvZGV2LTIvV2Vic3Rvcm1Qcm9qZWN0cy92aWJlL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHMgZnJvbSBcIi4vaGVhZGVyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWRlckJnIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci9oZWFkZXIucG5nXCI7XG5pbXBvcnQgTmF2Q29tcG9uZW50IGZyb20gXCIuL05hdlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuaGVhZGVyfT5cbiAgICAgIDxOYXZDb21wb25lbnQgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhlYWRlcl9pbWFnZV9ibG9ja30+XG4gICAgICAgIDxpbWcgc3JjPXtIZWFkZXJCZ30gYWx0PVwiVmliZSBDaXR5XCIgY2xhc3NOYW1lPVwidy0xMDBcIiAvPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgJHtzLmhlYWRlcl90aXRsZX0gdGV4dC13aGl0ZWB9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICBWSUJFIDxiciAvPiBDSVRZXG4gICAgICAgICAgPC9hPjwvTGluaz5cbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQcm9ncmVzc1wiO1xuICAgICAgICAgIHNyYzogdXJsKFwiL3NyYy9hc3NldHMvZm9udHMvcHJvZ3Jlc3Mub3RmXCIpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/dev-2/WebstormProjects/vibe/src/components/header/Header.jsx */"));
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
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/header/Nav.jsx";
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
  }, "Admin")) : null))));
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
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/layout/Layout.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = ({
  children
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
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
}, children))));

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
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/pages/_app.jsx";
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
        lineNumber: 27,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, __jsx("meta", {
      charSet: "utf-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }), __jsx("meta", {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "description",
      content: "Description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "keywords",
      content: "Keywords",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }), __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }, "Next.js PWA Example"), __jsx("link", {
      rel: "manifest",
      href: "/manifest.json",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
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
        lineNumber: 37,
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
        lineNumber: 38,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "apple-touch-icon",
      href: "/apple-icon.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "theme-color",
      content: "#317EFB",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    })), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
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

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./src/pages/_app.jsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9fc2VydmljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2hlYWRlci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL05hdi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9hZG1pblJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2FwcFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Byb3ZpZGVyUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcm9vdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Rlc3RSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2VyUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwidGFyZ2V0IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkxpbmsiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicCIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsImUiLCJub2RlTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJyZXNvbHZlIiwicHJldmVudERlZmF1bHQiLCJzY3JvbGwiLCJpbmRleE9mIiwicmVwbGFjZSIsInNoYWxsb3ciLCJ0aGVuIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZG9jdW1lbnQiLCJib2R5IiwiZm9jdXMiLCJwcmVmZXRjaCIsIndhcm4iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicGFyc2VkSHJlZiIsInBhcnNlZEFzIiwicmVzb2x2ZWRIcmVmIiwiaGFuZGxlUmVmIiwicmVmIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImpvaW4iLCJvcHRpb25zIiwicGF0aHMiLCJjYXRjaCIsInJlbmRlciIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY3VycmVudCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwYXNzSHJlZiIsInR5cGUiLCJwcm9jZXNzIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwidmFsdWUiLCJfZGVmYXVsdCIsInVzZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsImNyZWF0ZVJvdXRlciIsIndpdGhSb3V0ZXIiLCJSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJndW1lbnRzIiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwibWFwIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIkNvbnRhaW5lciIsImNyZWF0ZVVybCIsIkFwcEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsIl9yZWYiLCJjb21wb25lbnREaWRDYXRjaCIsIl9lcnJvckluZm8iLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsInB1c2hVcmwiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiY3VycmVudFVzZXJTdWJqZWN0IiwiQ29va2llcyIsImdldEpTT04iLCJhdXRoZW50aWNhdGlvblNlcnZpY2UiLCJsb2dpbiIsImxvZ291dCIsInJlZ2lzdHJhdGlvbkFkbWluIiwicmVnaXN0cmF0aW9uQ2xpZW50IiwicmVnaXN0cmF0aW9uUHJvdmlkZXIiLCJyZWdpc3RyYXRpb25BZ2VuY3kiLCJjdXJyZW50VXNlciIsImN1cnJlbnRVc2VyVmFsdWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVtb3ZlIiwicmVzcG9uc2UiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb21pc2UiLCJleHBpcmVzIiwic3RvcmUiLCJkaXNwYXRjaCIsInNob3dBbGVydCIsInBhc3N3b3JkX2NvbmZpcm1hdGlvbiIsInNob3dTdWNjZXNzIiwic2V0VGltZW91dCIsInBob25lIiwiYWdlbmN5X25hbWUiLCJIZWFkZXIiLCJzIiwiaGVhZGVyIiwiaGVhZGVyX2ltYWdlX2Jsb2NrIiwiSGVhZGVyQmciLCJoZWFkZXJfdGl0bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIk5hdkNvbXBvbmVudCIsImFjdGl2ZUxpbmsiLCJzZXRBY3RpdmVMaW5rIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJyb2xlIiwic2V0Um9sZSIsInRvZ2dsZSIsInVzZUVmZmVjdCIsInVzZXIiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImxpZ2h0IiwiZGFyayIsImZpeGVkIiwiY29sb3IiLCJleHBhbmQiLCJ0YWciLCJmdW5jIiwiTGF5b3V0IiwibGF5b3V0IiwibGF5b3V0X2NvbnRlbnQiLCJsYXlvdXRfbWFpbl9ibG9jayIsIkN1c3RvbUFwcCIsIm1ha2VTdG9yZSIsIndpdGhSZWR1eCIsImNyZWF0ZVBvc3QiLCJwb3N0IiwiVEVTVF9DUkVBVEVfUE9TVCIsInBheWxvYWQiLCJzaG93TG9hZGVyIiwiU0hPV19MT0FERVIiLCJoaWRlTG9hZGVyIiwiSElERV9MT0FERVIiLCJ0ZXh0IiwiU0hPV19BTEVSVCIsImhpZGVBbGVydCIsIkhJREVfQUxFUlQiLCJmZXRjaFBvc3RzIiwiVEVTVF9SRVFVRVNUX1BPU1RTIiwiZ2V0QWxsUG9zdHMiLCJHRVRfUEFHRVNfTlVNQkVSIiwibGFzdF9wYWdlIiwiR0VUX0FMTF9QT1NUUyIsImdldE5ld1Bvc3RzIiwiR0VUX05FV19QT1NUUyIsImdldExvY2F0aW9uc0luZm8iLCJHRVRfTE9DQUlUT05TX0lORk8iLCJnZXRBcHBJbmZvIiwiR0VUX0FQUF9JTkZPIiwiZ2V0Q2l0aWVzIiwic3RhdGVJZCIsIkdFVF9DSVRJRVMiLCJjcmVhdGVTdXBwb3J0VGFzayIsInRhc2siLCJ0b2tlbl90eXBlIiwidG9rZW4iLCJsb2ciLCJDUkVBVEVfU1VQUE9SVF9UQVNLIiwiZ2V0QWxsVXNlcnNUYXNrcyIsImlkIiwiR0VUX0FMTF9VU0VSX1RBU0tTIiwic2VsZWN0UG9zdHNQYWdlIiwiZ2V0UG9zdENvbW1lbnRzIiwicG9zdElkIiwiR0VUX1BPU1RfQ09NTUVOVFMiLCJjcmVhdGVQb3N0Q29tbWVudCIsImNvbW1lbnQiLCJDUkVBVEVfUE9TVF9DT01NRU5UIiwiZmlsdGVyUG9zdHMiLCJmaWx0ZXJJdGVtc09iamVjdCIsIkZJTFRFUl9QT1NUUyIsInJlcG9ydFBvc3QiLCJhZGRUb0Zhdm9yaXRlcyIsImlzX2Zhdm9yaXRlIiwiYWRkVG9GYXZvcml0ZXNCdXNpbmVzcyIsImdldEZhdm9yaXRlc0J1c2luZXNzIiwiR0VUX0ZBVk9SSVRFUyIsImdldEZhdm9yaXRlc1VzZXIiLCJnZXRDb21wbGFpbnMiLCJ1c2VySWQiLCJHRVRfQ09NUExBSU5TIiwic29ydFBvc3RzIiwic29ydFR5cGUiLCJTT1JUX1BPU1RTIiwiU0hPV19TVUNDRVNTIiwiVEVTVF9GRVRDSF9QT1NUIiwiUkVQT1JUX1BPU1QiLCJBRERfUE9TVCIsIlJFTU9WRV9QT1NUIiwiVVBEQVRFX1BPU1QiLCJTRUxFQ1RfU1RBVEUiLCJTRUxFQ1RfQ0lUWSIsIlNFTEVDVF9MSVNUX1NPUlQiLCJTRUxFQ1RfTElTVF9GSUxURVIiLCJTRUxFQ1RfQ0FURUdPUlkiLCJHRVRfQUxMX1NVUFBPUlRfVEFTS1MiLCJFRElUX1NVUFBPUlRfVEFTS1MiLCJERUxFVEVfU1VQUE9SVF9UQVNLIiwiaW5pdGlhbFN0YXRlIiwidGFza3MiLCJhZG1pblJlZHVjZXIiLCJhY3Rpb24iLCJwb3N0Q29tbWVudHMiLCJsb2FkaW5nIiwiYWxlcnQiLCJjYXRlZ29yaWVzIiwicG9zdHMiLCJuZXdQb3N0cyIsInN0YXRlcyIsImNpdGllcyIsInN1cHBvcnRUYXNrcyIsImFmZmlsaWF0aW9uIiwiYXZhaWxhYmlsaXR5IiwiYXZhaWxhYmxlX3RvIiwiZXRobmljaXR5IiwiZXllcyIsImhhaXIiLCJwYWdlc051bWJlciIsImZhdm9yaXRlcyIsImNvbXBsYWlucyIsImFwcFJlZHVjZXIiLCJzb3J0IiwiYSIsImIiLCJkYXRlQSIsIkRhdGUiLCJjcmVhdGVkX2F0IiwiZGF0ZUIiLCJnZXRUaW1lIiwicHJvdmlkZXJQb3N0cyIsInByb3ZpZGVyUmVkdWNlciIsImNvbmNhdCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidGVzdFBvc3RzIiwidGVzdFJlZHVjZXIiLCJhcHAiLCJwcm92aWRlciIsInVzZXJSZWR1Y2VyIiwiYWRtaW4iLCJmZXRjaGVkUG9zdHMiLCJwcmVsb2FkZWRTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUI7Ozs7Ozs7Ozs7Ozs7QUNBL0I7O0FBQUEsSUFBSUEsc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsb0hBQUQsQ0FBbEM7O0FBQW1GLElBQUlDLHVCQUF1QixHQUFDRCxtQkFBTyxDQUFDLHNIQUFELENBQW5DOztBQUFxRkUsT0FBTyxDQUFDQyxVQUFSLEdBQW1CLElBQW5CO0FBQXdCRCxPQUFPLENBQUNFLE9BQVIsR0FBZ0IsS0FBSyxDQUFyQjs7QUFBdUIsSUFBSUMsTUFBTSxHQUFDSix1QkFBdUIsQ0FBQ0QsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQWxDOztBQUFxRCxJQUFJTSxJQUFJLEdBQUNOLG1CQUFPLENBQUMsZ0JBQUQsQ0FBaEI7O0FBQXdCLElBQUlPLE1BQU0sR0FBQ1AsbUJBQU8sQ0FBQywwREFBRCxDQUFsQjs7QUFBK0MsSUFBSVEsT0FBTyxHQUFDVCxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQywyREFBRCxDQUFSLENBQWxDOztBQUF3RCxJQUFJUyxRQUFRLEdBQUNULG1CQUFPLENBQUMsbUdBQUQsQ0FBcEI7O0FBQXlELFNBQVNVLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXNCO0FBQUMsTUFBSUMsR0FBRyxHQUFDLENBQUMsR0FBRU4sSUFBSSxDQUFDTyxLQUFSLEVBQWVGLElBQWYsRUFBb0IsS0FBcEIsRUFBMEIsSUFBMUIsQ0FBUjtBQUF3QyxNQUFJRyxNQUFNLEdBQUMsQ0FBQyxHQUFFUixJQUFJLENBQUNPLEtBQVIsRUFBZSxDQUFDLEdBQUVOLE1BQU0sQ0FBQ1EsaUJBQVYsR0FBZixFQUE4QyxLQUE5QyxFQUFvRCxJQUFwRCxDQUFYO0FBQXFFLFNBQU0sQ0FBQ0gsR0FBRyxDQUFDSSxJQUFMLElBQVdKLEdBQUcsQ0FBQ0ssUUFBSixLQUFlSCxNQUFNLENBQUNHLFFBQXRCLElBQWdDTCxHQUFHLENBQUNJLElBQUosS0FBV0YsTUFBTSxDQUFDRSxJQUFuRTtBQUF5RTs7QUFBQSxTQUFTRSxpQkFBVCxDQUEyQkMsVUFBM0IsRUFBc0M7QUFBQyxNQUFJQyxRQUFRLEdBQUMsSUFBYjtBQUFrQixNQUFJQyxNQUFNLEdBQUMsSUFBWDtBQUFnQixNQUFJQyxVQUFVLEdBQUMsSUFBZjtBQUFvQixTQUFNLENBQUNYLElBQUQsRUFBTVksRUFBTixLQUFXO0FBQUMsUUFBR0QsVUFBVSxJQUFFWCxJQUFJLEtBQUdTLFFBQW5CLElBQTZCRyxFQUFFLEtBQUdGLE1BQXJDLEVBQTRDO0FBQUMsYUFBT0MsVUFBUDtBQUFtQjs7QUFBQSxRQUFJRSxNQUFNLEdBQUNMLFVBQVUsQ0FBQ1IsSUFBRCxFQUFNWSxFQUFOLENBQXJCO0FBQStCSCxZQUFRLEdBQUNULElBQVQ7QUFBY1UsVUFBTSxHQUFDRSxFQUFQO0FBQVVELGNBQVUsR0FBQ0UsTUFBWDtBQUFrQixXQUFPQSxNQUFQO0FBQWUsR0FBMUs7QUFBNEs7O0FBQUEsU0FBU0MsU0FBVCxDQUFtQmIsR0FBbkIsRUFBdUI7QUFBQyxTQUFPQSxHQUFHLElBQUUsT0FBT0EsR0FBUCxLQUFhLFFBQWxCLEdBQTJCLENBQUMsR0FBRUwsTUFBTSxDQUFDbUIsb0JBQVYsRUFBZ0NkLEdBQWhDLENBQTNCLEdBQWdFQSxHQUF2RTtBQUE0RTs7QUFBQSxJQUFJZSxRQUFKO0FBQWEsSUFBSUMsU0FBUyxHQUFDLElBQUlDLEdBQUosRUFBZDtBQUF3QixJQUFJQyxvQkFBb0IsR0FBQyxRQUE0QkMsU0FBNUIsR0FBd0QsSUFBakY7QUFBc0YsSUFBSUMsVUFBVSxHQUFDLEVBQWY7O0FBQWtCLFNBQVNDLFdBQVQsR0FBc0I7QUFBQztBQUMvcUMsTUFBR04sUUFBSCxFQUFZO0FBQUMsV0FBT0EsUUFBUDtBQUFpQixHQURncEMsQ0FDaHBDOzs7QUFDOUIsTUFBRyxDQUFDRyxvQkFBSixFQUF5QjtBQUFDLFdBQU9JLFNBQVA7QUFBa0I7O0FBQUEsU0FBT1AsUUFBUSxHQUFDLElBQUlHLG9CQUFKLENBQXlCSyxPQUFPLElBQUU7QUFBQ0EsV0FBTyxDQUFDQyxPQUFSLENBQWdCQyxLQUFLLElBQUU7QUFBQyxVQUFHLENBQUNULFNBQVMsQ0FBQ1UsR0FBVixDQUFjRCxLQUFLLENBQUNFLE1BQXBCLENBQUosRUFBZ0M7QUFBQztBQUFROztBQUFBLFVBQUlDLEVBQUUsR0FBQ1osU0FBUyxDQUFDYSxHQUFWLENBQWNKLEtBQUssQ0FBQ0UsTUFBcEIsQ0FBUDs7QUFBbUMsVUFBR0YsS0FBSyxDQUFDSyxjQUFOLElBQXNCTCxLQUFLLENBQUNNLGlCQUFOLEdBQXdCLENBQWpELEVBQW1EO0FBQUNoQixnQkFBUSxDQUFDaUIsU0FBVCxDQUFtQlAsS0FBSyxDQUFDRSxNQUF6QjtBQUFpQ1gsaUJBQVMsQ0FBQ2lCLE1BQVYsQ0FBaUJSLEtBQUssQ0FBQ0UsTUFBdkI7QUFBK0JDLFVBQUU7QUFBSTtBQUFDLEtBQS9OO0FBQWtPLEdBQXJRLEVBQXNRO0FBQUNNLGNBQVUsRUFBQztBQUFaLEdBQXRRLENBQWhCO0FBQTZTOztBQUFBLElBQUlDLHFCQUFxQixHQUFDLENBQUNDLEVBQUQsRUFBSVIsRUFBSixLQUFTO0FBQUMsTUFBSWIsUUFBUSxHQUFDTSxXQUFXLEVBQXhCOztBQUEyQixNQUFHLENBQUNOLFFBQUosRUFBYTtBQUFDLFdBQU0sTUFBSSxDQUFFLENBQVo7QUFBYzs7QUFBQUEsVUFBUSxDQUFDc0IsT0FBVCxDQUFpQkQsRUFBakI7QUFBcUJwQixXQUFTLENBQUNzQixHQUFWLENBQWNGLEVBQWQsRUFBaUJSLEVBQWpCO0FBQXFCLFNBQU0sTUFBSTtBQUFDLFFBQUc7QUFBQ2IsY0FBUSxDQUFDaUIsU0FBVCxDQUFtQkksRUFBbkI7QUFBd0IsS0FBNUIsQ0FBNEIsT0FBTUcsR0FBTixFQUFVO0FBQUNDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQW9COztBQUFBdkIsYUFBUyxDQUFDaUIsTUFBVixDQUFpQkcsRUFBakI7QUFBc0IsR0FBNUY7QUFBOEYsQ0FBbk87O0FBQW9PLE1BQU1NLElBQU4sU0FBbUJqRCxNQUFNLENBQUNrRCxTQUExQixDQUFtQztBQUFDQyxhQUFXLENBQUNDLEtBQUQsRUFBTztBQUFDLFVBQU1BLEtBQU47QUFBYSxTQUFLQyxDQUFMLEdBQU8sS0FBSyxDQUFaOztBQUFjLFNBQUtDLGdCQUFMLEdBQXNCLE1BQUksQ0FBRSxDQUE1Qjs7QUFBNkIsU0FBS0MsVUFBTCxHQUFnQjFDLGlCQUFpQixDQUFDLENBQUNQLElBQUQsRUFBTWtELE1BQU4sS0FBZTtBQUFDLGFBQU07QUFBQ2xELFlBQUksRUFBQyxDQUFDLEdBQUVGLFFBQVEsQ0FBQ3FELFdBQVosRUFBeUJyQyxTQUFTLENBQUNkLElBQUQsQ0FBbEMsQ0FBTjtBQUFnRFksVUFBRSxFQUFDc0MsTUFBTSxHQUFDLENBQUMsR0FBRXBELFFBQVEsQ0FBQ3FELFdBQVosRUFBeUJyQyxTQUFTLENBQUNvQyxNQUFELENBQWxDLENBQUQsR0FBNkNBO0FBQXRHLE9BQU47QUFBcUgsS0FBdEksQ0FBakM7O0FBQXlLLFNBQUtFLFdBQUwsR0FBaUJDLENBQUMsSUFBRTtBQUFDLFVBQUc7QUFBQ0MsZ0JBQUQ7QUFBVTFCO0FBQVYsVUFBa0J5QixDQUFDLENBQUNFLGFBQXZCOztBQUFxQyxVQUFHRCxRQUFRLEtBQUcsR0FBWCxLQUFpQjFCLE1BQU0sSUFBRUEsTUFBTSxLQUFHLE9BQWpCLElBQTBCeUIsQ0FBQyxDQUFDRyxPQUE1QixJQUFxQ0gsQ0FBQyxDQUFDSSxPQUF2QyxJQUFnREosQ0FBQyxDQUFDSyxRQUFsRCxJQUE0REwsQ0FBQyxDQUFDTSxXQUFGLElBQWVOLENBQUMsQ0FBQ00sV0FBRixDQUFjQyxLQUFkLEtBQXNCLENBQWxILENBQUgsRUFBd0g7QUFBQztBQUN4Z0M7QUFBUTs7QUFBQSxVQUFHO0FBQUM1RCxZQUFEO0FBQU1ZO0FBQU4sVUFBVSxLQUFLcUMsVUFBTCxDQUFnQixLQUFLSCxLQUFMLENBQVc5QyxJQUEzQixFQUFnQyxLQUFLOEMsS0FBTCxDQUFXbEMsRUFBM0MsQ0FBYjs7QUFBNEQsVUFBRyxDQUFDYixPQUFPLENBQUNDLElBQUQsQ0FBWCxFQUFrQjtBQUFDO0FBQ3ZGO0FBQVE7O0FBQUEsVUFBRztBQUFDNkQ7QUFBRCxVQUFXekMsTUFBTSxDQUFDMEMsUUFBckI7QUFBOEI5RCxVQUFJLEdBQUMsQ0FBQyxHQUFFTCxJQUFJLENBQUNvRSxPQUFSLEVBQWlCRixRQUFqQixFQUEwQjdELElBQTFCLENBQUw7QUFBcUNZLFFBQUUsR0FBQ0EsRUFBRSxHQUFDLENBQUMsR0FBRWpCLElBQUksQ0FBQ29FLE9BQVIsRUFBaUJGLFFBQWpCLEVBQTBCakQsRUFBMUIsQ0FBRCxHQUErQlosSUFBcEM7QUFBeUNxRCxPQUFDLENBQUNXLGNBQUYsR0FGcXZCLENBRWx1Qjs7QUFDdkksVUFBRztBQUFDQztBQUFELFVBQVMsS0FBS25CLEtBQWpCOztBQUF1QixVQUFHbUIsTUFBTSxJQUFFLElBQVgsRUFBZ0I7QUFBQ0EsY0FBTSxHQUFDckQsRUFBRSxDQUFDc0QsT0FBSCxDQUFXLEdBQVgsSUFBZ0IsQ0FBdkI7QUFBMEIsT0FIdXlCLENBR3Z5Qjs7O0FBQ2xFckUsYUFBTyxDQUFDSixPQUFSLENBQWdCLEtBQUtxRCxLQUFMLENBQVdxQixPQUFYLEdBQW1CLFNBQW5CLEdBQTZCLE1BQTdDLEVBQXFEbkUsSUFBckQsRUFBMERZLEVBQTFELEVBQTZEO0FBQUN3RCxlQUFPLEVBQUMsS0FBS3RCLEtBQUwsQ0FBV3NCO0FBQXBCLE9BQTdELEVBQTJGQyxJQUEzRixDQUFnR0MsT0FBTyxJQUFFO0FBQUMsWUFBRyxDQUFDQSxPQUFKLEVBQVk7O0FBQU8sWUFBR0wsTUFBSCxFQUFVO0FBQUM3QyxnQkFBTSxDQUFDbUQsUUFBUCxDQUFnQixDQUFoQixFQUFrQixDQUFsQjtBQUFxQkMsa0JBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFkO0FBQXVCO0FBQUMsT0FBckw7QUFBd0wsS0FKNnBCOztBQUk1cEIsY0FBdUM7QUFBQyxVQUFHNUIsS0FBSyxDQUFDNkIsUUFBVCxFQUFrQjtBQUFDbEMsZUFBTyxDQUFDbUMsSUFBUixDQUFhLGlLQUFiO0FBQWlMO0FBQUM7O0FBQUEsU0FBSzdCLENBQUwsR0FBT0QsS0FBSyxDQUFDNkIsUUFBTixLQUFpQixLQUF4QjtBQUErQjs7QUFBQUUsc0JBQW9CLEdBQUU7QUFBQyxTQUFLN0IsZ0JBQUw7QUFBeUI7O0FBQUE4QixVQUFRLEdBQUU7QUFBQyxRQUFHO0FBQUNqQjtBQUFELFFBQVd6QyxNQUFNLENBQUMwQyxRQUFyQjtBQUE4QixRQUFHO0FBQUM5RCxVQUFJLEVBQUMrRSxVQUFOO0FBQWlCbkUsUUFBRSxFQUFDb0U7QUFBcEIsUUFBOEIsS0FBSy9CLFVBQUwsQ0FBZ0IsS0FBS0gsS0FBTCxDQUFXOUMsSUFBM0IsRUFBZ0MsS0FBSzhDLEtBQUwsQ0FBV2xDLEVBQTNDLENBQWpDO0FBQWdGLFFBQUlxRSxZQUFZLEdBQUMsQ0FBQyxHQUFFdEYsSUFBSSxDQUFDb0UsT0FBUixFQUFpQkYsUUFBakIsRUFBMEJrQixVQUExQixDQUFqQjtBQUF1RCxXQUFNLENBQUNFLFlBQUQsRUFBY0QsUUFBUSxHQUFDLENBQUMsR0FBRXJGLElBQUksQ0FBQ29FLE9BQVIsRUFBaUJGLFFBQWpCLEVBQTBCbUIsUUFBMUIsQ0FBRCxHQUFxQ0MsWUFBM0QsQ0FBTjtBQUFnRjs7QUFBQUMsV0FBUyxDQUFDQyxHQUFELEVBQUs7QUFBQyxRQUFHLEtBQUtwQyxDQUFMLElBQVE1QixvQkFBUixJQUE4QmdFLEdBQTlCLElBQW1DQSxHQUFHLENBQUNDLE9BQTFDLEVBQWtEO0FBQUMsV0FBS3BDLGdCQUFMO0FBQXdCLFVBQUlxQyxZQUFZLEdBQUNoRSxVQUFVLENBQUMsS0FBS3lELFFBQUwsR0FBZ0JRLElBQWhCLEVBQXFCO0FBQ2g0QixTQUQyMkIsQ0FBRCxDQUEzQjs7QUFDejBCLFVBQUcsQ0FBQ0QsWUFBSixFQUFpQjtBQUFDLGFBQUtyQyxnQkFBTCxHQUFzQloscUJBQXFCLENBQUMrQyxHQUFELEVBQUssTUFBSTtBQUFDLGVBQUtSLFFBQUw7QUFBaUIsU0FBM0IsQ0FBM0M7QUFBeUU7QUFBQztBQUFDLEdBTDZmLENBSzdmO0FBQ25HOzs7QUFDQUEsVUFBUSxDQUFDWSxPQUFELEVBQVM7QUFBQyxRQUFHLENBQUMsS0FBS3hDLENBQU4sUUFBSCxFQUF3QyxPQUF6QyxDQUFnRDs7QUFDakUsUUFBSXlDLEtBQUssR0FBQyxLQUFLVixRQUFMLEVBQVYsQ0FEaUIsQ0FDUztBQUMxQjtBQUNBOztBQUNBakYsV0FBTyxDQUFDSixPQUFSLENBQWdCa0YsUUFBaEIsQ0FBeUJhLEtBQUs7QUFBQztBQUFVLEtBQVgsQ0FBOUIsRUFBNENBLEtBQUs7QUFBQztBQUFZLEtBQWIsQ0FBakQsRUFBaUVELE9BQWpFLEVBQTBFRSxLQUExRSxDQUFnRmpELEdBQUcsSUFBRTtBQUFDLGdCQUF1QztBQUFDO0FBQzlILGNBQU1BLEdBQU47QUFBVztBQUFDLEtBRFo7O0FBQ2NuQixjQUFVLENBQUNtRSxLQUFLLENBQUNGLElBQU4sRUFBVztBQUNwQyxPQUR5QixDQUFELENBQVYsR0FDUixJQURRO0FBQ0Y7O0FBQUFJLFFBQU0sR0FBRTtBQUFDLFFBQUc7QUFBQ0M7QUFBRCxRQUFXLEtBQUs3QyxLQUFuQjtBQUF5QixRQUFHO0FBQUM5QyxVQUFEO0FBQU1ZO0FBQU4sUUFBVSxLQUFLcUMsVUFBTCxDQUFnQixLQUFLSCxLQUFMLENBQVc5QyxJQUEzQixFQUFnQyxLQUFLOEMsS0FBTCxDQUFXbEMsRUFBM0MsQ0FBYixDQUExQixDQUFzRjs7QUFDMUcsUUFBRyxPQUFPK0UsUUFBUCxLQUFrQixRQUFyQixFQUE4QjtBQUFDQSxjQUFRLEdBQUMsYUFBYWpHLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlbUcsYUFBZixDQUE2QixHQUE3QixFQUFpQyxJQUFqQyxFQUFzQ0QsUUFBdEMsQ0FBdEI7QUFBdUUsS0FEbEYsQ0FDa0Y7OztBQUN0RyxRQUFJRSxLQUFLLEdBQUNuRyxNQUFNLENBQUNvRyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkosUUFBckIsQ0FBVjs7QUFBeUMsUUFBSTdDLEtBQUssR0FBQztBQUFDcUMsU0FBRyxFQUFDOUMsRUFBRSxJQUFFO0FBQUMsYUFBSzZDLFNBQUwsQ0FBZTdDLEVBQWY7O0FBQW1CLFlBQUd3RCxLQUFLLElBQUUsT0FBT0EsS0FBUCxLQUFlLFFBQXRCLElBQWdDQSxLQUFLLENBQUNWLEdBQXpDLEVBQTZDO0FBQUMsY0FBRyxPQUFPVSxLQUFLLENBQUNWLEdBQWIsS0FBbUIsVUFBdEIsRUFBaUNVLEtBQUssQ0FBQ1YsR0FBTixDQUFVOUMsRUFBVixFQUFqQyxLQUFvRCxJQUFHLE9BQU93RCxLQUFLLENBQUNWLEdBQWIsS0FBbUIsUUFBdEIsRUFBK0I7QUFBQ1UsaUJBQUssQ0FBQ1YsR0FBTixDQUFVYSxPQUFWLEdBQWtCM0QsRUFBbEI7QUFBc0I7QUFBQztBQUFDLE9BQXZMO0FBQXdMNEQsa0JBQVksRUFBQzVDLENBQUMsSUFBRTtBQUFDLFlBQUd3QyxLQUFLLENBQUMvQyxLQUFOLElBQWEsT0FBTytDLEtBQUssQ0FBQy9DLEtBQU4sQ0FBWW1ELFlBQW5CLEtBQWtDLFVBQWxELEVBQTZEO0FBQUNKLGVBQUssQ0FBQy9DLEtBQU4sQ0FBWW1ELFlBQVosQ0FBeUI1QyxDQUF6QjtBQUE2Qjs7QUFBQSxhQUFLc0IsUUFBTCxDQUFjO0FBQUN1QixrQkFBUSxFQUFDO0FBQVYsU0FBZDtBQUFnQyxPQUFwVTtBQUFxVUMsYUFBTyxFQUFDOUMsQ0FBQyxJQUFFO0FBQUMsWUFBR3dDLEtBQUssQ0FBQy9DLEtBQU4sSUFBYSxPQUFPK0MsS0FBSyxDQUFDL0MsS0FBTixDQUFZcUQsT0FBbkIsS0FBNkIsVUFBN0MsRUFBd0Q7QUFBQ04sZUFBSyxDQUFDL0MsS0FBTixDQUFZcUQsT0FBWixDQUFvQjlDLENBQXBCO0FBQXdCOztBQUFBLFlBQUcsQ0FBQ0EsQ0FBQyxDQUFDK0MsZ0JBQU4sRUFBdUI7QUFBQyxlQUFLaEQsV0FBTCxDQUFpQkMsQ0FBakI7QUFBcUI7QUFBQztBQUFoZCxLQUFWLENBRnJCLENBRWlmO0FBQ3JnQjs7QUFDQSxRQUFHLEtBQUtQLEtBQUwsQ0FBV3VELFFBQVgsSUFBcUJSLEtBQUssQ0FBQ1MsSUFBTixLQUFhLEdBQWIsSUFBa0IsRUFBRSxVQUFTVCxLQUFLLENBQUMvQyxLQUFqQixDQUExQyxFQUFrRTtBQUFDQSxXQUFLLENBQUM5QyxJQUFOLEdBQVdZLEVBQUUsSUFBRVosSUFBZjtBQUFxQixLQUpwRSxDQUlvRTtBQUN4Rjs7O0FBQ0EsUUFBR3VHLEtBQUgsRUFBNEMsZ0NBQStPOztBQUFBLFdBQU83RyxNQUFNLENBQUNELE9BQVAsQ0FBZStHLFlBQWYsQ0FBNEJYLEtBQTVCLEVBQWtDL0MsS0FBbEMsQ0FBUDtBQUFpRDs7QUFuQm9SOztBQW1CblIsVUFBd0M7QUFBQyxNQUFJOEIsSUFBSSxHQUFDLENBQUMsR0FBRWhGLE1BQU0sQ0FBQzZHLFFBQVYsRUFBb0JoRSxPQUFPLENBQUNDLEtBQTVCLENBQVQsQ0FBRCxDQUE2Qzs7QUFDbGEsTUFBSWdFLFNBQVMsR0FBQ3JILG1CQUFPLENBQUMsOEJBQUQsQ0FBckI7O0FBQW9DLE1BQUlzSCxLQUFLLEdBQUN0SCxtQkFBTyxDQUFDLDBDQUFELENBQWpCLENBRGlWLENBQzNTOzs7QUFDMUVzRCxNQUFJLENBQUNpRSxTQUFMLEdBQWVELEtBQUssQ0FBQztBQUFDM0csUUFBSSxFQUFDMEcsU0FBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILFNBQVMsQ0FBQ0ksTUFBWCxFQUFrQkosU0FBUyxDQUFDSyxNQUE1QixDQUFwQixFQUF5REMsVUFBL0Q7QUFBMEVwRyxNQUFFLEVBQUM4RixTQUFTLENBQUNHLFNBQVYsQ0FBb0IsQ0FBQ0gsU0FBUyxDQUFDSSxNQUFYLEVBQWtCSixTQUFTLENBQUNLLE1BQTVCLENBQXBCLENBQTdFO0FBQXNJcEMsWUFBUSxFQUFDK0IsU0FBUyxDQUFDTyxJQUF6SjtBQUE4SjlDLFdBQU8sRUFBQ3VDLFNBQVMsQ0FBQ08sSUFBaEw7QUFBcUw3QyxXQUFPLEVBQUNzQyxTQUFTLENBQUNPLElBQXZNO0FBQTRNWixZQUFRLEVBQUNLLFNBQVMsQ0FBQ08sSUFBL047QUFBb09oRCxVQUFNLEVBQUN5QyxTQUFTLENBQUNPLElBQXJQO0FBQTBQdEIsWUFBUSxFQUFDZSxTQUFTLENBQUNHLFNBQVYsQ0FBb0IsQ0FBQ0gsU0FBUyxDQUFDUSxPQUFYLEVBQW1CLENBQUNwRSxLQUFELEVBQU9xRSxRQUFQLEtBQWtCO0FBQUMsVUFBSUMsS0FBSyxHQUFDdEUsS0FBSyxDQUFDcUUsUUFBRCxDQUFmOztBQUEwQixVQUFHLE9BQU9DLEtBQVAsS0FBZSxRQUFsQixFQUEyQjtBQUFDeEMsWUFBSSxDQUFDLGlJQUFELENBQUo7QUFBeUk7O0FBQUEsYUFBTyxJQUFQO0FBQWEsS0FBbFAsQ0FBcEIsRUFBeVFvQztBQUE1Z0IsR0FBRCxDQUFwQjtBQUEraUI7O0FBQUEsSUFBSUssUUFBUSxHQUFDMUUsSUFBYjtBQUFrQnBELE9BQU8sQ0FBQ0UsT0FBUixHQUFnQjRILFFBQWhCLEM7Ozs7Ozs7Ozs7OztBQ3ZCcGpCOztBQUFBLElBQUkvSCx1QkFBdUIsR0FBQ0QsbUJBQU8sQ0FBQyxzSEFBRCxDQUFuQzs7QUFBcUYsSUFBSUQsc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsb0hBQUQsQ0FBbEM7O0FBQW1GRSxPQUFPLENBQUNDLFVBQVIsR0FBbUIsSUFBbkI7QUFBd0JELE9BQU8sQ0FBQytILFNBQVIsR0FBa0JBLFNBQWxCO0FBQTRCL0gsT0FBTyxDQUFDZ0ksd0JBQVIsR0FBaUNBLHdCQUFqQztBQUEwRGhJLE9BQU8sQ0FBQ2lJLFlBQVIsR0FBcUJqSSxPQUFPLENBQUNrSSxVQUFSLEdBQW1CbEksT0FBTyxDQUFDRSxPQUFSLEdBQWdCLEtBQUssQ0FBN0Q7O0FBQStELElBQUlDLE1BQU0sR0FBQ04sc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFqQzs7QUFBb0QsSUFBSVMsUUFBUSxHQUFDUix1QkFBdUIsQ0FBQ0QsbUJBQU8sQ0FBQyxtR0FBRCxDQUFSLENBQXBDOztBQUFrRkUsT0FBTyxDQUFDbUksTUFBUixHQUFlNUgsUUFBUSxDQUFDTCxPQUF4QjtBQUFnQ0YsT0FBTyxDQUFDb0ksVUFBUixHQUFtQjdILFFBQVEsQ0FBQzZILFVBQTVCOztBQUF1QyxJQUFJQyxjQUFjLEdBQUN2SSxtQkFBTyxDQUFDLDRFQUFELENBQTFCOztBQUFnRSxJQUFJd0ksV0FBVyxHQUFDekksc0JBQXNCLENBQUNDLG1CQUFPLENBQUMscUVBQUQsQ0FBUixDQUF0Qzs7QUFBaUVFLE9BQU8sQ0FBQ2tJLFVBQVIsR0FBbUJJLFdBQVcsQ0FBQ3BJLE9BQS9CO0FBQXVDOztBQUFtQixJQUFJcUksZUFBZSxHQUFDO0FBQUNDLFFBQU0sRUFBQyxJQUFSO0FBQWE7QUFDM3dCQyxnQkFBYyxFQUFDLEVBRCt1Qjs7QUFDNXVCQyxPQUFLLENBQUNwRyxFQUFELEVBQUk7QUFBQyxRQUFHLEtBQUtrRyxNQUFSLEVBQWUsT0FBT2xHLEVBQUUsRUFBVDs7QUFBWSxlQUErQixFQUErQjtBQUFDOztBQUR3b0IsQ0FBcEIsQyxDQUNsbkI7O0FBQ3hILElBQUlxRyxpQkFBaUIsR0FBQyxDQUFDLFVBQUQsRUFBWSxPQUFaLEVBQW9CLE9BQXBCLEVBQTRCLFFBQTVCLEVBQXFDLFlBQXJDLEVBQWtELFlBQWxELEVBQStELFVBQS9ELENBQXRCO0FBQWlHLElBQUlDLFlBQVksR0FBQyxDQUFDLGtCQUFELEVBQW9CLHFCQUFwQixFQUEwQyxxQkFBMUMsRUFBZ0Usa0JBQWhFLEVBQW1GLGlCQUFuRixFQUFxRyxvQkFBckcsQ0FBakI7QUFBNEksSUFBSUMsZ0JBQWdCLEdBQUMsQ0FBQyxNQUFELEVBQVEsU0FBUixFQUFrQixRQUFsQixFQUEyQixNQUEzQixFQUFrQyxVQUFsQyxFQUE2QyxnQkFBN0MsQ0FBckIsQyxDQUFvRjs7QUFDalVDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQlIsZUFBdEIsRUFBc0MsUUFBdEMsRUFBK0M7QUFBQ2hHLEtBQUcsR0FBRTtBQUFDLFdBQU9oQyxRQUFRLENBQUNMLE9BQVQsQ0FBaUI4SSxNQUF4QjtBQUFnQzs7QUFBdkMsQ0FBL0M7QUFBeUZMLGlCQUFpQixDQUFDekcsT0FBbEIsQ0FBMEIrRyxLQUFLLElBQUU7QUFBQztBQUMzSDtBQUNBO0FBQ0E7QUFDQUgsUUFBTSxDQUFDQyxjQUFQLENBQXNCUixlQUF0QixFQUFzQ1UsS0FBdEMsRUFBNEM7QUFBQzFHLE9BQUcsR0FBRTtBQUFDLFVBQUlpRyxNQUFNLEdBQUNVLFNBQVMsRUFBcEI7QUFBdUIsYUFBT1YsTUFBTSxDQUFDUyxLQUFELENBQWI7QUFBc0I7O0FBQXBELEdBQTVDO0FBQW9HLENBSlg7QUFJYUosZ0JBQWdCLENBQUMzRyxPQUFqQixDQUF5QitHLEtBQUssSUFBRTtBQUFDO0FBQ3ZJOztBQUFDVixpQkFBZSxDQUFDVSxLQUFELENBQWYsR0FBdUIsWUFBVTtBQUFDLFFBQUlULE1BQU0sR0FBQ1UsU0FBUyxFQUFwQjtBQUF1QixXQUFPVixNQUFNLENBQUNTLEtBQUQsQ0FBTixDQUFjLEdBQUdFLFNBQWpCLENBQVA7QUFBb0MsR0FBN0Y7QUFBK0YsQ0FETTtBQUNKUCxZQUFZLENBQUMxRyxPQUFiLENBQXFCa0gsS0FBSyxJQUFFO0FBQUNiLGlCQUFlLENBQUNHLEtBQWhCLENBQXNCLE1BQUk7QUFBQ25JLFlBQVEsQ0FBQ0wsT0FBVCxDQUFpQjhJLE1BQWpCLENBQXdCSyxFQUF4QixDQUEyQkQsS0FBM0IsRUFBaUMsWUFBVTtBQUFDLFVBQUlFLFVBQVUsR0FBQyxPQUFLRixLQUFLLENBQUNHLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxXQUFoQixFQUFMLEdBQW1DSixLQUFLLENBQUNLLFNBQU4sQ0FBZ0IsQ0FBaEIsQ0FBbEQ7QUFBcUUsVUFBSUMsZ0JBQWdCLEdBQUNuQixlQUFyQjs7QUFBcUMsVUFBR21CLGdCQUFnQixDQUFDSixVQUFELENBQW5CLEVBQWdDO0FBQUMsWUFBRztBQUFDSSwwQkFBZ0IsQ0FBQ0osVUFBRCxDQUFoQixDQUE2QixHQUFHSCxTQUFoQztBQUE0QyxTQUFoRCxDQUFnRCxPQUFNbEcsR0FBTixFQUFVO0FBQUM7QUFDNVlDLGlCQUFPLENBQUNDLEtBQVIsQ0FBYywwQ0FBd0NtRyxVQUF0RCxFQUQyWSxDQUN6VTs7QUFDbEVwRyxpQkFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQUcsQ0FBQzBHLE9BQUosR0FBWSxJQUFaLEdBQWlCMUcsR0FBRyxDQUFDMkcsS0FBbkM7QUFBMkM7QUFBQztBQUFDLEtBRjZHO0FBRTFHLEdBRitFO0FBRTVFLENBRitDOztBQUU3QyxTQUFTVixTQUFULEdBQW9CO0FBQUMsTUFBRyxDQUFDWCxlQUFlLENBQUNDLE1BQXBCLEVBQTJCO0FBQUMsUUFBSW1CLE9BQU8sR0FBQyxnQ0FBOEIseUVBQTFDO0FBQW9ILFVBQU0sSUFBSUUsS0FBSixDQUFVRixPQUFWLENBQU47QUFBMEI7O0FBQUEsU0FBT3BCLGVBQWUsQ0FBQ0MsTUFBdkI7QUFBK0IsQyxDQUFBOzs7QUFDblIsSUFBSVYsUUFBUSxHQUFDUyxlQUFiLEMsQ0FBNkI7O0FBQzdCdkksT0FBTyxDQUFDRSxPQUFSLEdBQWdCNEgsUUFBaEI7O0FBQXlCLFNBQVNDLFNBQVQsR0FBb0I7QUFBQyxTQUFPNUgsTUFBTSxDQUFDRCxPQUFQLENBQWU0SixVQUFmLENBQTBCekIsY0FBYyxDQUFDMEIsYUFBekMsQ0FBUDtBQUFnRSxDLENBQUE7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBSTlCLFlBQVksR0FBQyxTQUFTQSxZQUFULEdBQXVCO0FBQUMsT0FBSSxJQUFJK0IsSUFBSSxHQUFDYixTQUFTLENBQUNjLE1BQW5CLEVBQTBCQyxJQUFJLEdBQUMsSUFBSUMsS0FBSixDQUFVSCxJQUFWLENBQS9CLEVBQStDSSxJQUFJLEdBQUMsQ0FBeEQsRUFBMERBLElBQUksR0FBQ0osSUFBL0QsRUFBb0VJLElBQUksRUFBeEUsRUFBMkU7QUFBQ0YsUUFBSSxDQUFDRSxJQUFELENBQUosR0FBV2pCLFNBQVMsQ0FBQ2lCLElBQUQsQ0FBcEI7QUFBNEI7O0FBQUE3QixpQkFBZSxDQUFDQyxNQUFoQixHQUF1QixJQUFJakksUUFBUSxDQUFDTCxPQUFiLENBQXFCLEdBQUdnSyxJQUF4QixDQUF2QjtBQUFxRDNCLGlCQUFlLENBQUNFLGNBQWhCLENBQStCdkcsT0FBL0IsQ0FBdUNJLEVBQUUsSUFBRUEsRUFBRSxFQUE3QztBQUFpRGlHLGlCQUFlLENBQUNFLGNBQWhCLEdBQStCLEVBQS9CO0FBQWtDLFNBQU9GLGVBQWUsQ0FBQ0MsTUFBdkI7QUFBK0IsQ0FBeFQsQyxDQUF5VDs7O0FBQ3pUeEksT0FBTyxDQUFDaUksWUFBUixHQUFxQkEsWUFBckI7O0FBQWtDLFNBQVNELHdCQUFULENBQWtDUSxNQUFsQyxFQUF5QztBQUFDLE1BQUlsSSxPQUFPLEdBQUNrSSxNQUFaO0FBQW1CLE1BQUk2QixRQUFRLEdBQUMsRUFBYjs7QUFBZ0IsT0FBSSxJQUFJQyxRQUFSLElBQW9CM0IsaUJBQXBCLEVBQXNDO0FBQUMsUUFBRyxPQUFPckksT0FBTyxDQUFDZ0ssUUFBRCxDQUFkLEtBQTJCLFFBQTlCLEVBQXVDO0FBQUNELGNBQVEsQ0FBQ0MsUUFBRCxDQUFSLEdBQW1CeEIsTUFBTSxDQUFDeUIsTUFBUCxDQUFjLEVBQWQsRUFBaUJqSyxPQUFPLENBQUNnSyxRQUFELENBQXhCLENBQW5CLENBQUQsQ0FBd0Q7O0FBQ3JQO0FBQVU7O0FBQUFELFlBQVEsQ0FBQ0MsUUFBRCxDQUFSLEdBQW1CaEssT0FBTyxDQUFDZ0ssUUFBRCxDQUExQjtBQUFzQyxHQUQyQixDQUMzQjs7O0FBQ2hERCxVQUFRLENBQUNyQixNQUFULEdBQWdCekksUUFBUSxDQUFDTCxPQUFULENBQWlCOEksTUFBakM7QUFBd0NILGtCQUFnQixDQUFDM0csT0FBakIsQ0FBeUIrRyxLQUFLLElBQUU7QUFBQ29CLFlBQVEsQ0FBQ3BCLEtBQUQsQ0FBUixHQUFnQixZQUFVO0FBQUMsYUFBTzNJLE9BQU8sQ0FBQzJJLEtBQUQsQ0FBUCxDQUFlLEdBQUdFLFNBQWxCLENBQVA7QUFBcUMsS0FBaEU7QUFBa0UsR0FBbkc7QUFBcUcsU0FBT2tCLFFBQVA7QUFBaUIsQzs7Ozs7Ozs7Ozs7O0FDckJqSjs7QUFBQSxJQUFJeEssc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsb0hBQUQsQ0FBbEM7O0FBQW1GRSxPQUFPLENBQUNDLFVBQVIsR0FBbUIsSUFBbkI7QUFBd0JELE9BQU8sQ0FBQ0UsT0FBUixHQUFnQmdJLFVBQWhCOztBQUEyQixJQUFJL0gsTUFBTSxHQUFDTixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQWpDOztBQUFvRCxJQUFJUSxPQUFPLEdBQUNSLG1CQUFPLENBQUMsMkRBQUQsQ0FBbkI7O0FBQWdDLFNBQVNvSSxVQUFULENBQW9Cc0MsaUJBQXBCLEVBQXNDO0FBQUMsV0FBU0MsaUJBQVQsQ0FBMkJsSCxLQUEzQixFQUFpQztBQUFDLFdBQU0sYUFBYXBELE1BQU0sQ0FBQ0QsT0FBUCxDQUFlbUcsYUFBZixDQUE2Qm1FLGlCQUE3QixFQUErQzFCLE1BQU0sQ0FBQ3lCLE1BQVAsQ0FBYztBQUFDL0IsWUFBTSxFQUFDLENBQUMsR0FBRWxJLE9BQU8sQ0FBQ3lILFNBQVg7QUFBUixLQUFkLEVBQStDeEUsS0FBL0MsQ0FBL0MsQ0FBbkI7QUFBMEg7O0FBQUFrSCxtQkFBaUIsQ0FBQ0MsZUFBbEIsR0FBa0NGLGlCQUFpQixDQUFDRSxlQUFwRCxDQUFtRTtBQUFuRTtBQUN6YUQsbUJBQWlCLENBQUNFLG1CQUFsQixHQUFzQ0gsaUJBQWlCLENBQUNHLG1CQUF4RDs7QUFBNEUsWUFBdUM7QUFBQyxRQUFJQyxJQUFJLEdBQUNKLGlCQUFpQixDQUFDSyxXQUFsQixJQUErQkwsaUJBQWlCLENBQUNJLElBQWpELElBQXVELFNBQWhFO0FBQTBFSCxxQkFBaUIsQ0FBQ0ksV0FBbEIsR0FBOEIsZ0JBQWNELElBQWQsR0FBbUIsR0FBakQ7QUFBc0Q7O0FBQUEsU0FBT0gsaUJBQVA7QUFBMEIsQzs7Ozs7Ozs7Ozs7O0FDRGxRO0FBQ2I7Ozs7Ozs7Ozs7OztBQVdBM0IsTUFBTSxDQUFDQyxjQUFQLENBQXNCL0ksT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRTZILE9BQUssRUFBRTtBQUFULENBQTdDOztBQUNBLFNBQVNpRCxJQUFULEdBQWdCO0FBQ1osUUFBTUMsR0FBRyxHQUFHakMsTUFBTSxDQUFDa0MsTUFBUCxDQUFjLElBQWQsQ0FBWjtBQUNBLFNBQU87QUFDSDNCLE1BQUUsQ0FBQ3RDLElBQUQsRUFBT2tFLE9BQVAsRUFBZ0I7QUFDZDtBQUNBLE9BQUNGLEdBQUcsQ0FBQ2hFLElBQUQsQ0FBSCxLQUFjZ0UsR0FBRyxDQUFDaEUsSUFBRCxDQUFILEdBQVksRUFBMUIsQ0FBRCxFQUFnQ21FLElBQWhDLENBQXFDRCxPQUFyQztBQUNILEtBSkU7O0FBS0hFLE9BQUcsQ0FBQ3BFLElBQUQsRUFBT2tFLE9BQVAsRUFBZ0I7QUFDZixVQUFJRixHQUFHLENBQUNoRSxJQUFELENBQVAsRUFBZTtBQUNYO0FBQ0FnRSxXQUFHLENBQUNoRSxJQUFELENBQUgsQ0FBVXFFLE1BQVYsQ0FBaUJMLEdBQUcsQ0FBQ2hFLElBQUQsQ0FBSCxDQUFVcEMsT0FBVixDQUFrQnNHLE9BQWxCLE1BQStCLENBQWhELEVBQW1ELENBQW5EO0FBQ0g7QUFDSixLQVZFOztBQVdISSxRQUFJLENBQUN0RSxJQUFELEVBQU8sR0FBR3VFLElBQVYsRUFBZ0I7QUFDaEI7QUFDQTtBQUNBLE9BQUNQLEdBQUcsQ0FBQ2hFLElBQUQsQ0FBSCxJQUFhLEVBQWQsRUFBa0J3RSxLQUFsQixHQUEwQkMsR0FBMUIsQ0FBK0JQLE9BQUQsSUFBYTtBQUN2Q0EsZUFBTyxDQUFDLEdBQUdLLElBQUosQ0FBUDtBQUNILE9BRkQ7QUFHSDs7QUFqQkUsR0FBUDtBQW1CSDs7QUFDRHRMLE9BQU8sQ0FBQ0UsT0FBUixHQUFrQjRLLElBQWxCLEM7Ozs7Ozs7Ozs7OztBQ25DYTs7QUFDYixJQUFJVyxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVDLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ3pMLFVBQVosR0FBMEJ5TCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBNUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCL0ksT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRTZILE9BQUssRUFBRTtBQUFULENBQTdDOztBQUNBLE1BQU04RCxLQUFLLEdBQUc3TCxtQkFBTyxDQUFDLGdCQUFELENBQXJCOztBQUNBLE1BQU04TCxNQUFNLEdBQUdILGVBQWUsQ0FBQzNMLG1CQUFPLENBQUMsaUVBQUQsQ0FBUixDQUE5Qjs7QUFDQSxNQUFNK0wsT0FBTyxHQUFHL0wsbUJBQU8sQ0FBQyxtRUFBRCxDQUF2Qjs7QUFDQSxNQUFNZ00sWUFBWSxHQUFHaE0sbUJBQU8sQ0FBQywrRkFBRCxDQUE1Qjs7QUFDQSxNQUFNaU0sZUFBZSxHQUFHak0sbUJBQU8sQ0FBQyxxR0FBRCxDQUEvQjs7QUFDQSxNQUFNa00sYUFBYSxHQUFHbE0sbUJBQU8sQ0FBQyxpR0FBRCxDQUE3Qjs7QUFDQSxNQUFNbU0sUUFBUSxHQUFHakYsTUFBQSxJQUFzQyxFQUF2RDs7QUFDQSxTQUFTcEQsV0FBVCxDQUFxQnNJLElBQXJCLEVBQTJCO0FBQ3ZCLFNBQU9BLElBQUksQ0FBQ3ZILE9BQUwsQ0FBYXNILFFBQWIsTUFBMkIsQ0FBM0IsR0FBK0JBLFFBQVEsR0FBR0MsSUFBMUMsR0FBaURBLElBQXhEO0FBQ0g7O0FBQ0RsTSxPQUFPLENBQUM0RCxXQUFSLEdBQXNCQSxXQUF0Qjs7QUFDQSxTQUFTdUksV0FBVCxDQUFxQkQsSUFBckIsRUFBMkI7QUFDdkIsU0FBT0EsSUFBSSxDQUFDdkgsT0FBTCxDQUFhc0gsUUFBYixNQUEyQixDQUEzQixHQUNEQyxJQUFJLENBQUNFLE1BQUwsQ0FBWUgsUUFBUSxDQUFDaEMsTUFBckIsS0FBZ0MsR0FEL0IsR0FFRGlDLElBRk47QUFHSDs7QUFDRGxNLE9BQU8sQ0FBQ21NLFdBQVIsR0FBc0JBLFdBQXRCOztBQUNBLFNBQVNFLE9BQVQsQ0FBaUJILElBQWpCLEVBQXVCO0FBQ25CLFNBQU9BLElBQUksQ0FBQ3RILE9BQUwsQ0FBYSxLQUFiLEVBQW9CLEVBQXBCLEtBQTJCLEdBQWxDO0FBQ0g7O0FBQ0QsTUFBTTBILFlBQVksR0FBSUosSUFBRCxJQUFVRyxPQUFPLENBQUMsQ0FBQ0gsSUFBRCxJQUFTQSxJQUFJLEtBQUssR0FBbEIsR0FBd0IsUUFBeEIsR0FBbUNBLElBQXBDLENBQXRDOztBQUNBLFNBQVNLLGFBQVQsQ0FBdUJqSSxRQUF2QixFQUFpQ2tJLEtBQWpDLEVBQXdDQyxjQUF4QyxFQUF3RG5LLEVBQXhELEVBQTREO0FBQ3hELE1BQUlvSyxRQUFRLEdBQUdELGNBQWMsR0FBRyxDQUFILEdBQU8sQ0FBcEM7O0FBQ0EsV0FBU0UsV0FBVCxHQUF1QjtBQUNuQixXQUFPQyxLQUFLLENBQUNmLE9BQU8sQ0FBQ3JLLG9CQUFSLENBQTZCO0FBQ3RDOEMsY0FBUSxFQUFFVixXQUFXLEVBQ3JCO0FBQ0MscUJBQWNpSixhQUFhLENBQUNDLE9BQVEsR0FBRVgsV0FBVyxDQUFDN0gsUUFBRCxDQUFXLE9BRnhDLENBRGlCO0FBSXRDa0k7QUFKc0MsS0FBN0IsQ0FBRCxFQUtSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBTyxpQkFBVyxFQUFFO0FBWmIsS0FMUSxDQUFMLENBa0JKakksSUFsQkksQ0FrQkNrSSxHQUFHLElBQUk7QUFDWCxVQUFJLENBQUNBLEdBQUcsQ0FBQ0MsRUFBVCxFQUFhO0FBQ1QsWUFBSSxFQUFFUCxRQUFGLEdBQWEsQ0FBYixJQUFrQk0sR0FBRyxDQUFDRSxNQUFKLElBQWMsR0FBcEMsRUFBeUM7QUFDckMsaUJBQU9QLFdBQVcsRUFBbEI7QUFDSDs7QUFDRCxjQUFNLElBQUk5QyxLQUFKLENBQVcsNkJBQVgsQ0FBTjtBQUNIOztBQUNELGFBQU9tRCxHQUFHLENBQUNHLElBQUosRUFBUDtBQUNILEtBMUJNLENBQVA7QUEyQkg7O0FBQ0QsU0FBT1IsV0FBVyxHQUNiN0gsSUFERSxDQUNHc0ksSUFBSSxJQUFJO0FBQ2QsV0FBTzlLLEVBQUUsR0FBR0EsRUFBRSxDQUFDOEssSUFBRCxDQUFMLEdBQWNBLElBQXZCO0FBQ0gsR0FITSxFQUlGbEgsS0FKRSxDQUlLakQsR0FBRCxJQUFTO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFFBQUksQ0FBQ3dKLGNBQUwsRUFBcUI7QUFDakI7QUFDQXhKLFNBQUcsQ0FBQ29LLElBQUosR0FBVyxpQkFBWDtBQUNIOztBQUNELFVBQU1wSyxHQUFOO0FBQ0gsR0FiTSxDQUFQO0FBY0g7O0FBQ0QsTUFBTWtGLE1BQU4sQ0FBYTtBQUNUN0UsYUFBVyxDQUFDZ0IsUUFBRCxFQUFXa0ksS0FBWCxFQUFrQm5MLEVBQWxCLEVBQXNCO0FBQUVpTSxnQkFBRjtBQUFnQkMsY0FBaEI7QUFBNEJDLE9BQTVCO0FBQWlDQyxXQUFqQztBQUEwQ3BLLGFBQTFDO0FBQXFESixPQUFyRDtBQUEwRHlLLGdCQUExRDtBQUF3RUM7QUFBeEUsR0FBdEIsRUFBNkc7QUFDcEg7QUFDQSxTQUFLQyxHQUFMLEdBQVcsRUFBWDs7QUFDQSxTQUFLQyxVQUFMLEdBQW1CL0osQ0FBRCxJQUFPO0FBQ3JCLFVBQUksQ0FBQ0EsQ0FBQyxDQUFDZ0ssS0FBUCxFQUFjO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUFFeEosa0JBQUY7QUFBWWtJO0FBQVosWUFBc0IsSUFBNUI7QUFDQSxhQUFLdUIsV0FBTCxDQUFpQixjQUFqQixFQUFpQ2xDLE9BQU8sQ0FBQ3JLLG9CQUFSLENBQTZCO0FBQUU4QyxrQkFBRjtBQUFZa0k7QUFBWixTQUE3QixDQUFqQyxFQUFvRlgsT0FBTyxDQUFDbUMsTUFBUixFQUFwRjtBQUNBO0FBQ0gsT0Fkb0IsQ0FlckI7QUFDQTs7O0FBQ0EsVUFBSWxLLENBQUMsQ0FBQ2dLLEtBQUYsSUFDQSxLQUFLRyxLQURMLElBRUFuSyxDQUFDLENBQUNnSyxLQUFGLENBQVF6TSxFQUFSLEtBQWUsS0FBSzZNLE1BRnBCLElBR0F2QyxLQUFLLENBQUNoTCxLQUFOLENBQVltRCxDQUFDLENBQUNnSyxLQUFGLENBQVFwTixHQUFwQixFQUF5QjRELFFBQXpCLEtBQXNDLEtBQUtBLFFBSC9DLEVBR3lEO0FBQ3JEO0FBQ0gsT0F0Qm9CLENBdUJyQjtBQUNBOzs7QUFDQSxVQUFJLEtBQUs2SixJQUFMLElBQWEsQ0FBQyxLQUFLQSxJQUFMLENBQVVySyxDQUFDLENBQUNnSyxLQUFaLENBQWxCLEVBQXNDO0FBQ2xDO0FBQ0g7O0FBQ0QsWUFBTTtBQUFFcE4sV0FBRjtBQUFPVyxVQUFQO0FBQVcyRTtBQUFYLFVBQXVCbEMsQ0FBQyxDQUFDZ0ssS0FBL0I7O0FBQ0EsZ0JBQTJDO0FBQ3ZDLFlBQUksT0FBT3BOLEdBQVAsS0FBZSxXQUFmLElBQThCLE9BQU9XLEVBQVAsS0FBYyxXQUFoRCxFQUE2RDtBQUN6RDZCLGlCQUFPLENBQUNtQyxJQUFSLENBQWEsMEhBQWI7QUFDSDtBQUNKOztBQUNELFdBQUtULE9BQUwsQ0FBYWxFLEdBQWIsRUFBa0JXLEVBQWxCLEVBQXNCMkUsT0FBdEI7QUFDSCxLQW5DRDs7QUFvQ0EsU0FBS29JLGNBQUwsR0FBdUJGLE1BQUQsSUFBWTtBQUM5QixZQUFNNUosUUFBUSxHQUFHZ0ksWUFBWSxDQUFDWCxLQUFLLENBQUNoTCxLQUFOLENBQVl1TixNQUFaLEVBQW9CNUosUUFBckIsQ0FBN0I7QUFDQSxhQUFPLFNBQ0QrSixTQURDLEdBRUQ5QixhQUFhLENBQUNqSSxRQUFELEVBQVcsSUFBWCxFQUFpQixLQUFLMkosS0FBdEIsRUFBNkJiLElBQUksSUFBSyxLQUFLUSxHQUFMLENBQVN0SixRQUFULElBQXFCOEksSUFBM0QsQ0FGbkI7QUFHSCxLQUxEOztBQU1BLFNBQUtrQixjQUFMLEdBQXVCSixNQUFELElBQVk7QUFDOUIsVUFBSTtBQUFFNUosZ0JBQUY7QUFBWWtJO0FBQVosVUFBc0JiLEtBQUssQ0FBQ2hMLEtBQU4sQ0FBWXVOLE1BQVosRUFBb0IsSUFBcEIsQ0FBMUI7QUFDQTVKLGNBQVEsR0FBR2dJLFlBQVksQ0FBQ2hJLFFBQUQsQ0FBdkI7QUFDQSxhQUFPaUksYUFBYSxDQUFDakksUUFBRCxFQUFXa0ksS0FBWCxFQUFrQixLQUFLeUIsS0FBdkIsQ0FBcEI7QUFDSCxLQUpELENBN0NvSCxDQWtEcEg7OztBQUNBLFNBQUtNLEtBQUwsR0FBYWxDLE9BQU8sQ0FBQy9ILFFBQUQsQ0FBcEIsQ0FuRG9ILENBb0RwSDs7QUFDQSxTQUFLa0ssVUFBTCxHQUFrQixFQUFsQixDQXJEb0gsQ0FzRHBIO0FBQ0E7QUFDQTs7QUFDQSxRQUFJbEssUUFBUSxLQUFLLFNBQWpCLEVBQTRCO0FBQ3hCLFdBQUtrSyxVQUFMLENBQWdCLEtBQUtELEtBQXJCLElBQThCO0FBQzFCbEwsaUJBRDBCO0FBRTFCRSxhQUFLLEVBQUUrSixZQUZtQjtBQUcxQnJLLFdBSDBCO0FBSTFCd0wsZUFBTyxFQUFFbkIsWUFBWSxJQUFJQSxZQUFZLENBQUNtQixPQUpaO0FBSzFCQyxlQUFPLEVBQUVwQixZQUFZLElBQUlBLFlBQVksQ0FBQ29CO0FBTFosT0FBOUI7QUFPSDs7QUFDRCxTQUFLRixVQUFMLENBQWdCLE9BQWhCLElBQTJCO0FBQUVuTCxlQUFTLEVBQUVtSztBQUFiLEtBQTNCLENBbEVvSCxDQW1FcEg7QUFDQTs7QUFDQSxTQUFLeEUsTUFBTCxHQUFjYixNQUFNLENBQUNhLE1BQXJCO0FBQ0EsU0FBS3VFLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS2pKLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS2tJLEtBQUwsR0FBYUEsS0FBYixDQXhFb0gsQ0F5RXBIO0FBQ0E7O0FBQ0EsU0FBSzBCLE1BQUwsR0FDSTtBQUNBcEMsZ0JBQVksQ0FBQzZDLGNBQWIsQ0FBNEJySyxRQUE1QixLQUF5Q3VJLGFBQWEsQ0FBQytCLFVBQXZELEdBQW9FdEssUUFBcEUsR0FBK0VqRCxFQUZuRjtBQUdBLFNBQUs0SyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUs0QyxHQUFMLEdBQVduQixZQUFYO0FBQ0EsU0FBS29CLEdBQUwsR0FBVyxJQUFYO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQnRCLE9BQWhCLENBakZvSCxDQWtGcEg7QUFDQTs7QUFDQSxTQUFLUSxLQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUtOLFVBQUwsR0FBa0JBLFVBQWxCOztBQUNBLGVBQW1DLEVBU2xDO0FBQ0osR0FqR1EsQ0FrR1Q7OztBQUNBLFNBQU9xQix3QkFBUCxDQUFnQ3RPLEdBQWhDLEVBQXFDO0FBQ2pDLFFBQUlzRyxLQUFKLEVBQThDLEVBQTlDLE1BS0s7QUFDRCxhQUFPdEcsR0FBUDtBQUNIO0FBQ0o7O0FBQ0R1TyxRQUFNLENBQUNWLEtBQUQsRUFBUTdDLEdBQVIsRUFBYTtBQUNmLFVBQU1ySSxTQUFTLEdBQUdxSSxHQUFHLENBQUN4TCxPQUFKLElBQWV3TCxHQUFqQztBQUNBLFVBQU0wQixJQUFJLEdBQUcsS0FBS29CLFVBQUwsQ0FBZ0JELEtBQWhCLENBQWI7O0FBQ0EsUUFBSSxDQUFDbkIsSUFBTCxFQUFXO0FBQ1AsWUFBTSxJQUFJdkQsS0FBSixDQUFXLG9DQUFtQzBFLEtBQU0sRUFBcEQsQ0FBTjtBQUNIOztBQUNELFVBQU1XLE9BQU8sR0FBR3BHLE1BQU0sQ0FBQ3lCLE1BQVAsQ0FBY3pCLE1BQU0sQ0FBQ3lCLE1BQVAsQ0FBYyxFQUFkLEVBQWtCNkMsSUFBbEIsQ0FBZCxFQUF1QztBQUFFL0osZUFBRjtBQUFhb0wsYUFBTyxFQUFFL0MsR0FBRyxDQUFDK0MsT0FBMUI7QUFBbUNDLGFBQU8sRUFBRWhELEdBQUcsQ0FBQ2dEO0FBQWhELEtBQXZDLENBQWhCO0FBQ0EsU0FBS0YsVUFBTCxDQUFnQkQsS0FBaEIsSUFBeUJXLE9BQXpCLENBUGUsQ0FRZjs7QUFDQSxRQUFJWCxLQUFLLEtBQUssT0FBZCxFQUF1QjtBQUNuQixXQUFLWSxNQUFMLENBQVksS0FBS1gsVUFBTCxDQUFnQixLQUFLRCxLQUFyQixDQUFaO0FBQ0E7QUFDSDs7QUFDRCxRQUFJQSxLQUFLLEtBQUssS0FBS0EsS0FBbkIsRUFBMEI7QUFDdEIsV0FBS1ksTUFBTCxDQUFZRCxPQUFaO0FBQ0g7QUFDSjs7QUFDREUsUUFBTSxHQUFHO0FBQ0x2TixVQUFNLENBQUMwQyxRQUFQLENBQWdCNkssTUFBaEI7QUFDSDtBQUNEOzs7OztBQUdBQyxNQUFJLEdBQUc7QUFDSHhOLFVBQU0sQ0FBQ3lOLE9BQVAsQ0FBZUQsSUFBZjtBQUNIO0FBQ0Q7Ozs7Ozs7O0FBTUFuRSxNQUFJLENBQUN4SyxHQUFELEVBQU1XLEVBQUUsR0FBR1gsR0FBWCxFQUFnQnNGLE9BQU8sR0FBRyxFQUExQixFQUE4QjtBQUM5QixXQUFPLEtBQUt1SixNQUFMLENBQVksV0FBWixFQUF5QjdPLEdBQXpCLEVBQThCVyxFQUE5QixFQUFrQzJFLE9BQWxDLENBQVA7QUFDSDtBQUNEOzs7Ozs7OztBQU1BcEIsU0FBTyxDQUFDbEUsR0FBRCxFQUFNVyxFQUFFLEdBQUdYLEdBQVgsRUFBZ0JzRixPQUFPLEdBQUcsRUFBMUIsRUFBOEI7QUFDakMsV0FBTyxLQUFLdUosTUFBTCxDQUFZLGNBQVosRUFBNEI3TyxHQUE1QixFQUFpQ1csRUFBakMsRUFBcUMyRSxPQUFyQyxDQUFQO0FBQ0g7O0FBQ0R1SixRQUFNLENBQUNDLE1BQUQsRUFBU3BQLElBQVQsRUFBZXFQLEdBQWYsRUFBb0J6SixPQUFwQixFQUE2QjtBQUMvQixXQUFPLElBQUlxSSxPQUFKLENBQVksQ0FBQzdKLE9BQUQsRUFBVWtMLE1BQVYsS0FBcUI7QUFDcEMsVUFBSSxDQUFDMUosT0FBTyxDQUFDMkosRUFBYixFQUFpQjtBQUNiLGFBQUsxQixLQUFMLEdBQWEsS0FBYjtBQUNILE9BSG1DLENBSXBDOzs7QUFDQSxVQUFJcEMsT0FBTyxDQUFDK0QsRUFBWixFQUFnQjtBQUNaQyxtQkFBVyxDQUFDQyxJQUFaLENBQWlCLGFBQWpCO0FBQ0gsT0FQbUMsQ0FRcEM7QUFDQTs7O0FBQ0EsVUFBSXBQLEdBQUcsR0FBRyxPQUFPTixJQUFQLEtBQWdCLFFBQWhCLEdBQTJCeUwsT0FBTyxDQUFDckssb0JBQVIsQ0FBNkJwQixJQUE3QixDQUEzQixHQUFnRUEsSUFBMUU7QUFDQSxVQUFJaUIsRUFBRSxHQUFHLE9BQU9vTyxHQUFQLEtBQWUsUUFBZixHQUEwQjVELE9BQU8sQ0FBQ3JLLG9CQUFSLENBQTZCaU8sR0FBN0IsQ0FBMUIsR0FBOERBLEdBQXZFO0FBQ0EvTyxTQUFHLEdBQUdrRCxXQUFXLENBQUNsRCxHQUFELENBQWpCO0FBQ0FXLFFBQUUsR0FBR3VDLFdBQVcsQ0FBQ3ZDLEVBQUQsQ0FBaEIsQ0Fib0MsQ0FjcEM7QUFDQTs7QUFDQSxVQUFJMkYsS0FBSixFQUE4QyxFQU83Qzs7QUFDRCxXQUFLK0ksa0JBQUwsQ0FBd0IxTyxFQUF4QixFQXhCb0MsQ0F5QnBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsVUFBSSxDQUFDMkUsT0FBTyxDQUFDMkosRUFBVCxJQUFlLEtBQUtLLGVBQUwsQ0FBcUIzTyxFQUFyQixDQUFuQixFQUE2QztBQUN6QyxhQUFLNk0sTUFBTCxHQUFjN00sRUFBZDtBQUNBOEcsY0FBTSxDQUFDYSxNQUFQLENBQWNxQyxJQUFkLENBQW1CLGlCQUFuQixFQUFzQ2hLLEVBQXRDO0FBQ0EsYUFBSzBNLFdBQUwsQ0FBaUJ5QixNQUFqQixFQUF5QjlPLEdBQXpCLEVBQThCVyxFQUE5QixFQUFrQzJFLE9BQWxDO0FBQ0EsYUFBS2lLLFlBQUwsQ0FBa0I1TyxFQUFsQjtBQUNBOEcsY0FBTSxDQUFDYSxNQUFQLENBQWNxQyxJQUFkLENBQW1CLG9CQUFuQixFQUF5Q2hLLEVBQXpDO0FBQ0EsZUFBT21ELE9BQU8sQ0FBQyxJQUFELENBQWQ7QUFDSDs7QUFDRCxZQUFNO0FBQUVGLGdCQUFGO0FBQVlrSSxhQUFaO0FBQW1Cekw7QUFBbkIsVUFBZ0M0SyxLQUFLLENBQUNoTCxLQUFOLENBQVlELEdBQVosRUFBaUIsSUFBakIsQ0FBdEM7O0FBQ0EsVUFBSSxDQUFDNEQsUUFBRCxJQUFhdkQsUUFBakIsRUFBMkI7QUFDdkIsa0JBQTJDO0FBQ3ZDLGdCQUFNLElBQUk4SSxLQUFKLENBQVcsa0NBQWlDbkosR0FBSSxrREFBaEQsQ0FBTjtBQUNIOztBQUNELGVBQU84RCxPQUFPLENBQUMsS0FBRCxDQUFkO0FBQ0gsT0E1Q21DLENBNkNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxVQUFJLENBQUMsS0FBSzBMLFFBQUwsQ0FBYzdPLEVBQWQsQ0FBTCxFQUF3QjtBQUNwQm1PLGNBQU0sR0FBRyxjQUFUO0FBQ0g7O0FBQ0QsWUFBTWpCLEtBQUssR0FBR2xDLE9BQU8sQ0FBQy9ILFFBQUQsQ0FBckI7QUFDQSxZQUFNO0FBQUVPLGVBQU8sR0FBRztBQUFaLFVBQXNCbUIsT0FBNUI7O0FBQ0EsVUFBSThGLFlBQVksQ0FBQzZDLGNBQWIsQ0FBNEJKLEtBQTVCLENBQUosRUFBd0M7QUFDcEMsY0FBTTtBQUFFakssa0JBQVEsRUFBRTZMO0FBQVosWUFBMkJ4RSxLQUFLLENBQUNoTCxLQUFOLENBQVlVLEVBQVosQ0FBakM7QUFDQSxjQUFNK08sVUFBVSxHQUFHcEUsYUFBYSxDQUFDcUUsYUFBZCxDQUE0QjlCLEtBQTVCLENBQW5CO0FBQ0EsY0FBTStCLFVBQVUsR0FBR3ZFLGVBQWUsQ0FBQ3dFLGVBQWhCLENBQWdDSCxVQUFoQyxFQUE0Q0QsVUFBNUMsQ0FBbkI7O0FBQ0EsWUFBSSxDQUFDRyxVQUFMLEVBQWlCO0FBQ2IsZ0JBQU1FLGFBQWEsR0FBRzFILE1BQU0sQ0FBQzJILElBQVAsQ0FBWUwsVUFBVSxDQUFDTSxNQUF2QixFQUErQkMsTUFBL0IsQ0FBc0NDLEtBQUssSUFBSSxDQUFDcEUsS0FBSyxDQUFDb0UsS0FBRCxDQUFyRCxDQUF0Qjs7QUFDQSxjQUFJSixhQUFhLENBQUN2RyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzFCLHNCQUEyQztBQUN2Qy9HLHFCQUFPLENBQUNtQyxJQUFSLENBQWMsNkRBQUQsR0FDUixlQUFjbUwsYUFBYSxDQUFDekssSUFBZCxDQUFtQixJQUFuQixDQUF5Qiw4QkFENUM7QUFFSDs7QUFDRCxtQkFBTzJKLE1BQU0sQ0FBQyxJQUFJN0YsS0FBSixDQUFXLDhCQUE2QnNHLFVBQVcsOENBQTZDNUIsS0FBTSxLQUE1RixHQUNuQiw2REFEUyxDQUFELENBQWI7QUFFSDtBQUNKLFNBVkQsTUFXSztBQUNEO0FBQ0F6RixnQkFBTSxDQUFDeUIsTUFBUCxDQUFjaUMsS0FBZCxFQUFxQjhELFVBQXJCO0FBQ0g7QUFDSjs7QUFDRG5JLFlBQU0sQ0FBQ2EsTUFBUCxDQUFjcUMsSUFBZCxDQUFtQixrQkFBbkIsRUFBdUNoSyxFQUF2QyxFQTNFb0MsQ0E0RXBDOztBQUNBLFdBQUt3UCxZQUFMLENBQWtCdEMsS0FBbEIsRUFBeUJqSyxRQUF6QixFQUFtQ2tJLEtBQW5DLEVBQTBDbkwsRUFBMUMsRUFBOEN3RCxPQUE5QyxFQUF1REMsSUFBdkQsQ0FBNERnTSxTQUFTLElBQUk7QUFDckUsY0FBTTtBQUFFM047QUFBRixZQUFZMk4sU0FBbEI7O0FBQ0EsWUFBSTNOLEtBQUssSUFBSUEsS0FBSyxDQUFDNE4sU0FBbkIsRUFBOEI7QUFDMUIsaUJBQU92TSxPQUFPLENBQUMsS0FBRCxDQUFkO0FBQ0g7O0FBQ0QyRCxjQUFNLENBQUNhLE1BQVAsQ0FBY3FDLElBQWQsQ0FBbUIscUJBQW5CLEVBQTBDaEssRUFBMUM7QUFDQSxhQUFLME0sV0FBTCxDQUFpQnlCLE1BQWpCLEVBQXlCOU8sR0FBekIsRUFBOEJXLEVBQTlCLEVBQWtDMkUsT0FBbEM7O0FBQ0Esa0JBQTJDO0FBQ3ZDLGdCQUFNZ0wsT0FBTyxHQUFHLEtBQUt4QyxVQUFMLENBQWdCLE9BQWhCLEVBQXlCbkwsU0FBekM7QUFDQXhCLGdCQUFNLENBQUNvUCxJQUFQLENBQVlDLGFBQVosR0FDSUYsT0FBTyxDQUFDdEcsZUFBUixLQUE0QnNHLE9BQU8sQ0FBQ3JHLG1CQUFwQyxJQUNJLENBQUNtRyxTQUFTLENBQUN6TixTQUFWLENBQW9CcUgsZUFGN0I7QUFHSDs7QUFDRCxhQUFLMUgsR0FBTCxDQUFTdUwsS0FBVCxFQUFnQmpLLFFBQWhCLEVBQTBCa0ksS0FBMUIsRUFBaUNuTCxFQUFqQyxFQUFxQ3lQLFNBQXJDOztBQUNBLFlBQUkzTixLQUFKLEVBQVc7QUFDUGdGLGdCQUFNLENBQUNhLE1BQVAsQ0FBY3FDLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDbEksS0FBdkMsRUFBOEM5QixFQUE5QztBQUNBLGdCQUFNOEIsS0FBTjtBQUNIOztBQUNEZ0YsY0FBTSxDQUFDYSxNQUFQLENBQWNxQyxJQUFkLENBQW1CLHFCQUFuQixFQUEwQ2hLLEVBQTFDO0FBQ0EsZUFBT21ELE9BQU8sQ0FBQyxJQUFELENBQWQ7QUFDSCxPQXBCRCxFQW9CR2tMLE1BcEJIO0FBcUJILEtBbEdNLENBQVA7QUFtR0g7O0FBQ0QzQixhQUFXLENBQUN5QixNQUFELEVBQVM5TyxHQUFULEVBQWNXLEVBQWQsRUFBa0IyRSxPQUFPLEdBQUcsRUFBNUIsRUFBZ0M7QUFDdkMsY0FBMkM7QUFDdkMsVUFBSSxPQUFPbkUsTUFBTSxDQUFDeU4sT0FBZCxLQUEwQixXQUE5QixFQUEyQztBQUN2Q3BNLGVBQU8sQ0FBQ0MsS0FBUixDQUFlLDJDQUFmO0FBQ0E7QUFDSDs7QUFDRCxVQUFJLE9BQU90QixNQUFNLENBQUN5TixPQUFQLENBQWVFLE1BQWYsQ0FBUCxLQUFrQyxXQUF0QyxFQUFtRDtBQUMvQ3RNLGVBQU8sQ0FBQ0MsS0FBUixDQUFlLDJCQUEwQnFNLE1BQU8sbUJBQWhEO0FBQ0E7QUFDSDtBQUNKOztBQUNELFFBQUlBLE1BQU0sS0FBSyxXQUFYLElBQTBCM0QsT0FBTyxDQUFDbUMsTUFBUixPQUFxQjNNLEVBQW5ELEVBQXVEO0FBQ25EUSxZQUFNLENBQUN5TixPQUFQLENBQWVFLE1BQWYsRUFBdUI7QUFDbkI5TyxXQURtQjtBQUVuQlcsVUFGbUI7QUFHbkIyRTtBQUhtQixPQUF2QixFQUtBO0FBQ0E7QUFDQTtBQUNBLFFBUkEsRUFRSTNFLEVBUko7QUFTSDtBQUNKOztBQUNEd1AsY0FBWSxDQUFDdEMsS0FBRCxFQUFRakssUUFBUixFQUFrQmtJLEtBQWxCLEVBQXlCbkwsRUFBekIsRUFBNkJ3RCxPQUFPLEdBQUcsS0FBdkMsRUFBOEM7QUFDdEQsVUFBTXNNLGVBQWUsR0FBRyxLQUFLM0MsVUFBTCxDQUFnQkQsS0FBaEIsQ0FBeEIsQ0FEc0QsQ0FFdEQ7QUFDQTs7QUFDQSxRQUFJMUosT0FBTyxJQUFJc00sZUFBWCxJQUE4QixLQUFLNUMsS0FBTCxLQUFlQSxLQUFqRCxFQUF3RDtBQUNwRCxhQUFPRixPQUFPLENBQUM3SixPQUFSLENBQWdCMk0sZUFBaEIsQ0FBUDtBQUNIOztBQUNELFVBQU1DLFdBQVcsR0FBRyxDQUFDbk8sR0FBRCxFQUFNb08sYUFBTixLQUF3QjtBQUN4QyxhQUFPLElBQUloRCxPQUFKLENBQVk3SixPQUFPLElBQUk7QUFDMUIsWUFBSXZCLEdBQUcsQ0FBQ29LLElBQUosS0FBYSxpQkFBYixJQUFrQ2dFLGFBQXRDLEVBQXFEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXhQLGdCQUFNLENBQUMwQyxRQUFQLENBQWdCOUQsSUFBaEIsR0FBdUJZLEVBQXZCLENBTmlELENBT2pEO0FBQ0E7O0FBQ0E0QixhQUFHLENBQUM4TixTQUFKLEdBQWdCLElBQWhCLENBVGlELENBVWpEOztBQUNBLGlCQUFPdk0sT0FBTyxDQUFDO0FBQUVyQixpQkFBSyxFQUFFRjtBQUFULFdBQUQsQ0FBZDtBQUNIOztBQUNELFlBQUlBLEdBQUcsQ0FBQzhOLFNBQVIsRUFBbUI7QUFDZjtBQUNBLGlCQUFPdk0sT0FBTyxDQUFDO0FBQUVyQixpQkFBSyxFQUFFRjtBQUFULFdBQUQsQ0FBZDtBQUNIOztBQUNEdUIsZUFBTyxDQUFDLEtBQUs4TSxjQUFMLENBQW9CLFNBQXBCLEVBQ0h4TSxJQURHLENBQ0VrSSxHQUFHLElBQUk7QUFDYixnQkFBTTtBQUFFdUUsZ0JBQUksRUFBRWxPO0FBQVIsY0FBc0IySixHQUE1QjtBQUNBLGdCQUFNOEQsU0FBUyxHQUFHO0FBQUV6TixxQkFBRjtBQUFhSjtBQUFiLFdBQWxCO0FBQ0EsaUJBQU8sSUFBSW9MLE9BQUosQ0FBWTdKLE9BQU8sSUFBSTtBQUMxQixpQkFBS2tHLGVBQUwsQ0FBcUJySCxTQUFyQixFQUFnQztBQUM1QkosaUJBRDRCO0FBRTVCcUIsc0JBRjRCO0FBRzVCa0k7QUFINEIsYUFBaEMsRUFJRzFILElBSkgsQ0FJUXZCLEtBQUssSUFBSTtBQUNidU4sdUJBQVMsQ0FBQ3ZOLEtBQVYsR0FBa0JBLEtBQWxCO0FBQ0F1Tix1QkFBUyxDQUFDM04sS0FBVixHQUFrQkYsR0FBbEI7QUFDQXVCLHFCQUFPLENBQUNzTSxTQUFELENBQVA7QUFDSCxhQVJELEVBUUdVLE1BQU0sSUFBSTtBQUNUdE8scUJBQU8sQ0FBQ0MsS0FBUixDQUFjLHlDQUFkLEVBQXlEcU8sTUFBekQ7QUFDQVYsdUJBQVMsQ0FBQzNOLEtBQVYsR0FBa0JGLEdBQWxCO0FBQ0E2Tix1QkFBUyxDQUFDdk4sS0FBVixHQUFrQixFQUFsQjtBQUNBaUIscUJBQU8sQ0FBQ3NNLFNBQUQsQ0FBUDtBQUNILGFBYkQ7QUFjSCxXQWZNLENBQVA7QUFnQkgsU0FwQk8sRUFxQkg1SyxLQXJCRyxDQXFCR2pELEdBQUcsSUFBSW1PLFdBQVcsQ0FBQ25PLEdBQUQsRUFBTSxJQUFOLENBckJyQixDQUFELENBQVA7QUFzQkgsT0F4Q00sQ0FBUDtBQXlDSCxLQTFDRDs7QUEyQ0EsV0FBTyxJQUFJb0wsT0FBSixDQUFZLENBQUM3SixPQUFELEVBQVVrTCxNQUFWLEtBQXFCO0FBQ3BDLFVBQUl5QixlQUFKLEVBQXFCO0FBQ2pCLGVBQU8zTSxPQUFPLENBQUMyTSxlQUFELENBQWQ7QUFDSDs7QUFDRCxXQUFLRyxjQUFMLENBQW9CL0MsS0FBcEIsRUFBMkJ6SixJQUEzQixDQUFnQ2tJLEdBQUcsSUFBSXhJLE9BQU8sQ0FBQztBQUMzQ25CLGlCQUFTLEVBQUUySixHQUFHLENBQUN1RSxJQUQ0QjtBQUUzQzlDLGVBQU8sRUFBRXpCLEdBQUcsQ0FBQ3RCLEdBQUosQ0FBUStDLE9BRjBCO0FBRzNDQyxlQUFPLEVBQUUxQixHQUFHLENBQUN0QixHQUFKLENBQVFnRDtBQUgwQixPQUFELENBQTlDLEVBSUlnQixNQUpKO0FBS0gsS0FUTSxFQVVGNUssSUFWRSxDQVVJZ00sU0FBRCxJQUFlO0FBQ3JCLFlBQU07QUFBRXpOLGlCQUFGO0FBQWFvTCxlQUFiO0FBQXNCQztBQUF0QixVQUFrQ29DLFNBQXhDOztBQUNBLGdCQUEyQztBQUN2QyxjQUFNO0FBQUVXO0FBQUYsWUFBeUIzUixtQkFBTyxDQUFDLDBCQUFELENBQXRDOztBQUNBLFlBQUksQ0FBQzJSLGtCQUFrQixDQUFDcE8sU0FBRCxDQUF2QixFQUFvQztBQUNoQyxnQkFBTSxJQUFJd0csS0FBSixDQUFXLHlEQUF3RHZGLFFBQVMsR0FBNUUsQ0FBTjtBQUNIO0FBQ0o7O0FBQ0QsYUFBTyxLQUFLb04sUUFBTCxDQUFjLE1BQU1qRCxPQUFPLEdBQzVCLEtBQUtMLGNBQUwsQ0FBb0IvTSxFQUFwQixDQUQ0QixHQUU1QnFOLE9BQU8sR0FDSCxLQUFLSixjQUFMLENBQW9Cak4sRUFBcEIsQ0FERyxHQUVILEtBQUtxSixlQUFMLENBQXFCckgsU0FBckIsRUFDRjtBQUNBO0FBQ0lpQixnQkFESjtBQUVJa0ksYUFGSjtBQUdJMEIsY0FBTSxFQUFFN007QUFIWixPQUZFLENBSkgsRUFVS3lELElBVkwsQ0FVVXZCLEtBQUssSUFBSTtBQUN0QnVOLGlCQUFTLENBQUN2TixLQUFWLEdBQWtCQSxLQUFsQjtBQUNBLGFBQUtpTCxVQUFMLENBQWdCRCxLQUFoQixJQUF5QnVDLFNBQXpCO0FBQ0EsZUFBT0EsU0FBUDtBQUNILE9BZE0sQ0FBUDtBQWVILEtBakNNLEVBa0NGNUssS0FsQ0UsQ0FrQ0lrTCxXQWxDSixDQUFQO0FBbUNIOztBQUNEcE8sS0FBRyxDQUFDdUwsS0FBRCxFQUFRakssUUFBUixFQUFrQmtJLEtBQWxCLEVBQXlCbkwsRUFBekIsRUFBNkIrTCxJQUE3QixFQUFtQztBQUNsQyxTQUFLTyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBS1ksS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS2pLLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS2tJLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUswQixNQUFMLEdBQWM3TSxFQUFkO0FBQ0EsU0FBSzhOLE1BQUwsQ0FBWS9CLElBQVo7QUFDSDtBQUNEOzs7Ozs7QUFJQXVFLGdCQUFjLENBQUNyUCxFQUFELEVBQUs7QUFDZixTQUFLNkwsSUFBTCxHQUFZN0wsRUFBWjtBQUNIOztBQUNEME4saUJBQWUsQ0FBQzNPLEVBQUQsRUFBSztBQUNoQixRQUFJLENBQUMsS0FBSzZNLE1BQVYsRUFDSSxPQUFPLEtBQVA7QUFDSixVQUFNLENBQUMwRCxZQUFELEVBQWVDLE9BQWYsSUFBMEIsS0FBSzNELE1BQUwsQ0FBWTRELEtBQVosQ0FBa0IsR0FBbEIsQ0FBaEM7QUFDQSxVQUFNLENBQUNDLFlBQUQsRUFBZUMsT0FBZixJQUEwQjNRLEVBQUUsQ0FBQ3lRLEtBQUgsQ0FBUyxHQUFULENBQWhDLENBSmdCLENBS2hCOztBQUNBLFFBQUlFLE9BQU8sSUFBSUosWUFBWSxLQUFLRyxZQUE1QixJQUE0Q0YsT0FBTyxLQUFLRyxPQUE1RCxFQUFxRTtBQUNqRSxhQUFPLElBQVA7QUFDSCxLQVJlLENBU2hCOzs7QUFDQSxRQUFJSixZQUFZLEtBQUtHLFlBQXJCLEVBQW1DO0FBQy9CLGFBQU8sS0FBUDtBQUNILEtBWmUsQ0FhaEI7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFdBQU9GLE9BQU8sS0FBS0csT0FBbkI7QUFDSDs7QUFDRC9CLGNBQVksQ0FBQzVPLEVBQUQsRUFBSztBQUNiLFVBQU0sR0FBRzRRLElBQUgsSUFBVzVRLEVBQUUsQ0FBQ3lRLEtBQUgsQ0FBUyxHQUFULENBQWpCLENBRGEsQ0FFYjs7QUFDQSxRQUFJRyxJQUFJLEtBQUssRUFBYixFQUFpQjtBQUNicFEsWUFBTSxDQUFDbUQsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNBO0FBQ0gsS0FOWSxDQU9iOzs7QUFDQSxVQUFNa04sSUFBSSxHQUFHak4sUUFBUSxDQUFDa04sY0FBVCxDQUF3QkYsSUFBeEIsQ0FBYjs7QUFDQSxRQUFJQyxJQUFKLEVBQVU7QUFDTkEsVUFBSSxDQUFDRSxjQUFMO0FBQ0E7QUFDSCxLQVpZLENBYWI7QUFDQTs7O0FBQ0EsVUFBTUMsTUFBTSxHQUFHcE4sUUFBUSxDQUFDcU4saUJBQVQsQ0FBMkJMLElBQTNCLEVBQWlDLENBQWpDLENBQWY7O0FBQ0EsUUFBSUksTUFBSixFQUFZO0FBQ1JBLFlBQU0sQ0FBQ0QsY0FBUDtBQUNIO0FBQ0o7O0FBQ0RsQyxVQUFRLENBQUNoQyxNQUFELEVBQVM7QUFDYixXQUFPLEtBQUtBLE1BQUwsS0FBZ0JBLE1BQXZCO0FBQ0g7QUFDRDs7Ozs7Ozs7QUFNQTlJLFVBQVEsQ0FBQzFFLEdBQUQsRUFBTXdOLE1BQU0sR0FBR3hOLEdBQWYsRUFBb0JzRixPQUFPLEdBQUcsRUFBOUIsRUFBa0M7QUFDdEMsV0FBTyxJQUFJcUksT0FBSixDQUFZLENBQUM3SixPQUFELEVBQVVrTCxNQUFWLEtBQXFCO0FBQ3BDLFlBQU07QUFBRXBMLGdCQUFGO0FBQVl2RDtBQUFaLFVBQXlCNEssS0FBSyxDQUFDaEwsS0FBTixDQUFZRCxHQUFaLENBQS9COztBQUNBLFVBQUksQ0FBQzRELFFBQUQsSUFBYXZELFFBQWpCLEVBQTJCO0FBQ3ZCLGtCQUEyQztBQUN2QyxnQkFBTSxJQUFJOEksS0FBSixDQUFXLGtDQUFpQ25KLEdBQUksa0RBQWhELENBQU47QUFDSDs7QUFDRDtBQUNILE9BUG1DLENBUXBDOzs7QUFDQSxnQkFBMkM7QUFDdkM7QUFDSDs7QUFDRCxZQUFNNk4sS0FBSyxHQUFHcEMsV0FBVyxDQUFDRSxPQUFPLENBQUMvSCxRQUFELENBQVIsQ0FBekI7QUFDQStKLGFBQU8sQ0FBQ3RELEdBQVIsQ0FBWSxDQUNSLEtBQUt3QyxVQUFMLENBQWdCZ0YsWUFBaEIsQ0FBNkI3UixHQUE3QixFQUFrQ3lMLFdBQVcsQ0FBQytCLE1BQUQsQ0FBN0MsQ0FEUSxFQUVSLEtBQUtYLFVBQUwsQ0FBZ0J2SCxPQUFPLENBQUNXLFFBQVIsR0FBbUIsVUFBbkIsR0FBZ0MsVUFBaEQsRUFBNEQ0SCxLQUE1RCxDQUZRLENBQVosRUFHR3pKLElBSEgsQ0FHUSxNQUFNTixPQUFPLEVBSHJCLEVBR3lCa0wsTUFIekI7QUFJSCxLQWpCTSxDQUFQO0FBa0JIOztBQUNELFFBQU00QixjQUFOLENBQXFCL0MsS0FBckIsRUFBNEI7QUFDeEIsUUFBSXdDLFNBQVMsR0FBRyxLQUFoQjs7QUFDQSxVQUFNeUIsTUFBTSxHQUFJLEtBQUsxRCxHQUFMLEdBQVcsTUFBTTtBQUM3QmlDLGVBQVMsR0FBRyxJQUFaO0FBQ0gsS0FGRDs7QUFHQXhDLFNBQUssR0FBR3BDLFdBQVcsQ0FBQ29DLEtBQUQsQ0FBbkI7QUFDQSxVQUFNa0UsZUFBZSxHQUFHLE1BQU0sS0FBS2xGLFVBQUwsQ0FBZ0JtRixRQUFoQixDQUF5Qm5FLEtBQXpCLENBQTlCOztBQUNBLFFBQUl3QyxTQUFKLEVBQWU7QUFDWCxZQUFNNU4sS0FBSyxHQUFHLElBQUkwRyxLQUFKLENBQVcsd0NBQXVDMEUsS0FBTSxHQUF4RCxDQUFkO0FBQ0FwTCxXQUFLLENBQUM0TixTQUFOLEdBQWtCLElBQWxCO0FBQ0EsWUFBTTVOLEtBQU47QUFDSDs7QUFDRCxRQUFJcVAsTUFBTSxLQUFLLEtBQUsxRCxHQUFwQixFQUF5QjtBQUNyQixXQUFLQSxHQUFMLEdBQVcsSUFBWDtBQUNIOztBQUNELFdBQU8yRCxlQUFQO0FBQ0g7O0FBQ0RmLFVBQVEsQ0FBQ2lCLEVBQUQsRUFBSztBQUNULFFBQUk1QixTQUFTLEdBQUcsS0FBaEI7O0FBQ0EsVUFBTXlCLE1BQU0sR0FBRyxNQUFNO0FBQ2pCekIsZUFBUyxHQUFHLElBQVo7QUFDSCxLQUZEOztBQUdBLFNBQUtqQyxHQUFMLEdBQVcwRCxNQUFYO0FBQ0EsV0FBT0csRUFBRSxHQUFHN04sSUFBTCxDQUFVc0ksSUFBSSxJQUFJO0FBQ3JCLFVBQUlvRixNQUFNLEtBQUssS0FBSzFELEdBQXBCLEVBQXlCO0FBQ3JCLGFBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7O0FBQ0QsVUFBSWlDLFNBQUosRUFBZTtBQUNYLGNBQU05TixHQUFHLEdBQUcsSUFBSTRHLEtBQUosQ0FBVSxpQ0FBVixDQUFaO0FBQ0E1RyxXQUFHLENBQUM4TixTQUFKLEdBQWdCLElBQWhCO0FBQ0EsY0FBTTlOLEdBQU47QUFDSDs7QUFDRCxhQUFPbUssSUFBUDtBQUNILEtBVk0sQ0FBUDtBQVdIOztBQUNEMUMsaUJBQWUsQ0FBQ3JILFNBQUQsRUFBWXVQLEdBQVosRUFBaUI7QUFDNUIsVUFBTTtBQUFFdlAsZUFBUyxFQUFFbUs7QUFBYixRQUFxQixLQUFLZ0IsVUFBTCxDQUFnQixPQUFoQixDQUEzQjs7QUFDQSxVQUFNcUUsT0FBTyxHQUFHLEtBQUs5RCxRQUFMLENBQWN2QixHQUFkLENBQWhCOztBQUNBb0YsT0FBRyxDQUFDQyxPQUFKLEdBQWNBLE9BQWQ7QUFDQSxXQUFPaEgsT0FBTyxDQUFDaUgsbUJBQVIsQ0FBNEJ0RixHQUE1QixFQUFpQztBQUNwQ3FGLGFBRG9DO0FBRXBDeFAsZUFGb0M7QUFHcENtRixZQUFNLEVBQUUsSUFINEI7QUFJcENvSztBQUpvQyxLQUFqQyxDQUFQO0FBTUg7O0FBQ0Q3QyxvQkFBa0IsQ0FBQzFPLEVBQUQsRUFBSztBQUNuQixRQUFJLEtBQUt5TixHQUFULEVBQWM7QUFDVixZQUFNaEwsQ0FBQyxHQUFHLElBQUkrRixLQUFKLENBQVUsaUJBQVYsQ0FBVjtBQUNBL0YsT0FBQyxDQUFDaU4sU0FBRixHQUFjLElBQWQ7QUFDQTVJLFlBQU0sQ0FBQ2EsTUFBUCxDQUFjcUMsSUFBZCxDQUFtQixrQkFBbkIsRUFBdUN2SCxDQUF2QyxFQUEwQ3pDLEVBQTFDO0FBQ0EsV0FBS3lOLEdBQUw7QUFDQSxXQUFLQSxHQUFMLEdBQVcsSUFBWDtBQUNIO0FBQ0o7O0FBQ0RLLFFBQU0sQ0FBQy9CLElBQUQsRUFBTztBQUNULFNBQUt5QixHQUFMLENBQVN6QixJQUFULEVBQWUsS0FBS29CLFVBQUwsQ0FBZ0IsT0FBaEIsRUFBeUJuTCxTQUF4QztBQUNIOztBQXZmUTs7QUF5ZmJyRCxPQUFPLENBQUNFLE9BQVIsR0FBa0JpSSxNQUFsQjtBQUNBQSxNQUFNLENBQUNhLE1BQVAsR0FBZ0I0QyxNQUFNLENBQUMxTCxPQUFQLEVBQWhCLEM7Ozs7Ozs7Ozs7OztBQ2xrQmE7O0FBQ2I0SSxNQUFNLENBQUNDLGNBQVAsQ0FBc0IvSSxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFNkgsT0FBSyxFQUFFO0FBQVQsQ0FBN0MsRSxDQUNBOztBQUNBLE1BQU1rTCxVQUFVLEdBQUcsc0JBQW5COztBQUNBLFNBQVNwRSxjQUFULENBQXdCSixLQUF4QixFQUErQjtBQUMzQixTQUFPd0UsVUFBVSxDQUFDQyxJQUFYLENBQWdCekUsS0FBaEIsQ0FBUDtBQUNIOztBQUNEdk8sT0FBTyxDQUFDMk8sY0FBUixHQUF5QkEsY0FBekIsQzs7Ozs7Ozs7Ozs7O0FDUGE7O0FBQ2I3RixNQUFNLENBQUNDLGNBQVAsQ0FBc0IvSSxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFNkgsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7O0FBQ0EsU0FBUzBJLGVBQVQsQ0FBeUJILFVBQXpCLEVBQXFDO0FBQ2pDLFFBQU07QUFBRTZDLE1BQUY7QUFBTXZDO0FBQU4sTUFBaUJOLFVBQXZCO0FBQ0EsU0FBUTlMLFFBQUQsSUFBYztBQUNqQixVQUFNZ00sVUFBVSxHQUFHMkMsRUFBRSxDQUFDQyxJQUFILENBQVE1TyxRQUFSLENBQW5COztBQUNBLFFBQUksQ0FBQ2dNLFVBQUwsRUFBaUI7QUFDYixhQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFNNkMsTUFBTSxHQUFJdkMsS0FBRCxJQUFXO0FBQ3RCLFVBQUk7QUFDQSxlQUFPd0Msa0JBQWtCLENBQUN4QyxLQUFELENBQXpCO0FBQ0gsT0FGRCxDQUdBLE9BQU95QyxDQUFQLEVBQVU7QUFDTixjQUFNcFEsR0FBRyxHQUFHLElBQUk0RyxLQUFKLENBQVUsd0JBQVYsQ0FBWjtBQUNBNUcsV0FBRyxDQUFDb0ssSUFBSixHQUFXLGVBQVg7QUFDQSxjQUFNcEssR0FBTjtBQUNIO0FBQ0osS0FURDs7QUFVQSxVQUFNcVEsTUFBTSxHQUFHLEVBQWY7QUFDQXhLLFVBQU0sQ0FBQzJILElBQVAsQ0FBWUMsTUFBWixFQUFvQnhPLE9BQXBCLENBQTZCcVIsUUFBRCxJQUFjO0FBQ3RDLFlBQU1DLENBQUMsR0FBRzlDLE1BQU0sQ0FBQzZDLFFBQUQsQ0FBaEI7QUFDQSxZQUFNRSxDQUFDLEdBQUduRCxVQUFVLENBQUNrRCxDQUFDLENBQUNFLEdBQUgsQ0FBcEI7O0FBQ0EsVUFBSUQsQ0FBQyxLQUFLelIsU0FBVixFQUFxQjtBQUNqQnNSLGNBQU0sQ0FBQ0MsUUFBRCxDQUFOLEdBQW1CLENBQUNFLENBQUMsQ0FBQzlPLE9BQUYsQ0FBVSxHQUFWLENBQUQsR0FDYjhPLENBQUMsQ0FBQzNCLEtBQUYsQ0FBUSxHQUFSLEVBQWF0RyxHQUFiLENBQWlCckosS0FBSyxJQUFJZ1IsTUFBTSxDQUFDaFIsS0FBRCxDQUFoQyxDQURhLEdBRWJxUixDQUFDLENBQUNHLE1BQUYsR0FDSSxDQUFDUixNQUFNLENBQUNNLENBQUQsQ0FBUCxDQURKLEdBRUlOLE1BQU0sQ0FBQ00sQ0FBRCxDQUpoQjtBQUtIO0FBQ0osS0FWRDtBQVdBLFdBQU9ILE1BQVA7QUFDSCxHQTVCRDtBQTZCSDs7QUFDRHRULE9BQU8sQ0FBQ3VRLGVBQVIsR0FBMEJBLGVBQTFCLEM7Ozs7Ozs7Ozs7OztBQ2xDYTs7QUFDYnpILE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQi9JLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUU2SCxPQUFLLEVBQUU7QUFBVCxDQUE3QyxFLENBQ0E7QUFDQTs7QUFDQSxTQUFTK0wsV0FBVCxDQUFxQkMsR0FBckIsRUFBMEI7QUFDdEIsU0FBT0EsR0FBRyxDQUFDalAsT0FBSixDQUFZLHNCQUFaLEVBQW9DLE1BQXBDLENBQVA7QUFDSDs7QUFDRCxTQUFTeUwsYUFBVCxDQUF1QnlELGVBQXZCLEVBQXdDO0FBQ3BDO0FBQ0EsUUFBTUMsWUFBWSxHQUFHSCxXQUFXLENBQUNFLGVBQWUsQ0FBQ2xQLE9BQWhCLENBQXdCLEtBQXhCLEVBQStCLEVBQS9CLEtBQXNDLEdBQXZDLENBQWhDO0FBQ0EsUUFBTThMLE1BQU0sR0FBRyxFQUFmO0FBQ0EsTUFBSXNELFVBQVUsR0FBRyxDQUFqQjtBQUNBLFFBQU1DLGtCQUFrQixHQUFHRixZQUFZLENBQUNuUCxPQUFiLENBQXFCLDZCQUFyQixFQUFvRCxDQUFDeU8sQ0FBRCxFQUFJYSxFQUFKLEtBQVc7QUFDdEYsVUFBTUMsVUFBVSxHQUFHLGFBQWFuQixJQUFiLENBQWtCa0IsRUFBbEIsQ0FBbkI7QUFDQXhELFVBQU0sQ0FBQ3dELEVBQUUsQ0FDTDtBQURLLEtBRUp0UCxPQUZFLENBRU0sMEJBRk4sRUFFa0MsSUFGbEMsRUFHRkEsT0FIRSxDQUdNLFFBSE4sRUFHZ0IsRUFIaEIsQ0FBRCxDQUlOO0FBSk0sS0FBTixHQUtJO0FBQUU4TyxTQUFHLEVBQUVNLFVBQVUsRUFBakI7QUFBcUJMLFlBQU0sRUFBRVE7QUFBN0IsS0FMSjtBQU1BLFdBQU9BLFVBQVUsR0FBRyxRQUFILEdBQWMsV0FBL0I7QUFDSCxHQVQwQixDQUEzQjtBQVVBLE1BQUlDLHVCQUFKLENBZm9DLENBZ0JwQztBQUNBOztBQUNBLFlBQW1DO0FBQy9CQSwyQkFBdUIsR0FBR0wsWUFBWSxDQUFDblAsT0FBYixDQUFxQiw2QkFBckIsRUFBb0QsQ0FBQ3lPLENBQUQsRUFBSWEsRUFBSixLQUFXO0FBQ3JGLFlBQU1DLFVBQVUsR0FBRyxhQUFhbkIsSUFBYixDQUFrQmtCLEVBQWxCLENBQW5CO0FBQ0EsWUFBTUcsR0FBRyxHQUFHSCxFQUFFLENBQ1Y7QUFEVSxPQUVUdFAsT0FGTyxDQUVDLDBCQUZELEVBRTZCLElBRjdCLEVBR1BBLE9BSE8sQ0FHQyxRQUhELEVBR1csRUFIWCxDQUFaO0FBSUEsYUFBT3VQLFVBQVUsR0FDVixPQUFNUCxXQUFXLENBQUNTLEdBQUQsQ0FBTSxPQURiLEdBRVYsT0FBTVQsV0FBVyxDQUFDUyxHQUFELENBQU0sVUFGOUI7QUFHSCxLQVR5QixDQUExQjtBQVVIOztBQUNELFNBQU92TCxNQUFNLENBQUN5QixNQUFQLENBQWM7QUFBRTBJLE1BQUUsRUFBRSxJQUFJcUIsTUFBSixDQUFXLE1BQU1MLGtCQUFOLEdBQTJCLFNBQXRDLEVBQWlELEdBQWpELENBQU47QUFBNkR2RDtBQUE3RCxHQUFkLEVBQXNGMEQsdUJBQXVCLEdBQzlHO0FBQ0VHLGNBQVUsRUFBRyxJQUFHSCx1QkFBd0I7QUFEMUMsR0FEOEcsR0FJOUcsRUFKQyxDQUFQO0FBS0g7O0FBQ0RwVSxPQUFPLENBQUNxUSxhQUFSLEdBQXdCQSxhQUF4QixDOzs7Ozs7Ozs7Ozs7QUMzQ2E7O0FBQ2J2SCxNQUFNLENBQUNDLGNBQVAsQ0FBc0IvSSxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFNkgsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7O0FBQ0EsTUFBTThELEtBQUssR0FBRzdMLG1CQUFPLENBQUMsZ0JBQUQsQ0FBckI7QUFDQTs7Ozs7QUFHQSxTQUFTb0gsUUFBVCxDQUFrQnlMLEVBQWxCLEVBQXNCO0FBQ2xCLE1BQUk2QixJQUFJLEdBQUcsS0FBWDtBQUNBLE1BQUlsVCxNQUFKO0FBQ0EsU0FBUSxDQUFDLEdBQUc0SSxJQUFKLEtBQWE7QUFDakIsUUFBSSxDQUFDc0ssSUFBTCxFQUFXO0FBQ1BBLFVBQUksR0FBRyxJQUFQO0FBQ0FsVCxZQUFNLEdBQUdxUixFQUFFLENBQUMsR0FBR3pJLElBQUosQ0FBWDtBQUNIOztBQUNELFdBQU81SSxNQUFQO0FBQ0gsR0FORDtBQU9IOztBQUNEdEIsT0FBTyxDQUFDa0gsUUFBUixHQUFtQkEsUUFBbkI7O0FBQ0EsU0FBU3JHLGlCQUFULEdBQTZCO0FBQ3pCLFFBQU07QUFBRUUsWUFBRjtBQUFZMFQsWUFBWjtBQUFzQkM7QUFBdEIsTUFBK0I3UyxNQUFNLENBQUMwQyxRQUE1QztBQUNBLFNBQVEsR0FBRXhELFFBQVMsS0FBSTBULFFBQVMsR0FBRUMsSUFBSSxHQUFHLE1BQU1BLElBQVQsR0FBZ0IsRUFBRyxFQUF6RDtBQUNIOztBQUNEMVUsT0FBTyxDQUFDYSxpQkFBUixHQUE0QkEsaUJBQTVCOztBQUNBLFNBQVNtTixNQUFULEdBQWtCO0FBQ2QsUUFBTTtBQUFFdk47QUFBRixNQUFXb0IsTUFBTSxDQUFDMEMsUUFBeEI7QUFDQSxRQUFNM0QsTUFBTSxHQUFHQyxpQkFBaUIsRUFBaEM7QUFDQSxTQUFPSixJQUFJLENBQUNnSixTQUFMLENBQWU3SSxNQUFNLENBQUNxSixNQUF0QixDQUFQO0FBQ0g7O0FBQ0RqSyxPQUFPLENBQUNnTyxNQUFSLEdBQWlCQSxNQUFqQjs7QUFDQSxTQUFTMkcsY0FBVCxDQUF3QnRSLFNBQXhCLEVBQW1DO0FBQy9CLFNBQU8sT0FBT0EsU0FBUCxLQUFxQixRQUFyQixHQUNEQSxTQURDLEdBRURBLFNBQVMsQ0FBQ3dILFdBQVYsSUFBeUJ4SCxTQUFTLENBQUN1SCxJQUFuQyxJQUEyQyxTQUZqRDtBQUdIOztBQUNENUssT0FBTyxDQUFDMlUsY0FBUixHQUF5QkEsY0FBekI7O0FBQ0EsU0FBU0MsU0FBVCxDQUFtQjVILEdBQW5CLEVBQXdCO0FBQ3BCLFNBQU9BLEdBQUcsQ0FBQzZILFFBQUosSUFBZ0I3SCxHQUFHLENBQUM4SCxXQUEzQjtBQUNIOztBQUNEOVUsT0FBTyxDQUFDNFUsU0FBUixHQUFvQkEsU0FBcEI7O0FBQ0EsZUFBZTlCLG1CQUFmLENBQW1DdEYsR0FBbkMsRUFBd0NvRixHQUF4QyxFQUE2QztBQUN6QyxNQUFJbUMsRUFBSjs7QUFDQSxZQUEyQztBQUN2QyxRQUFJLENBQUNBLEVBQUUsR0FBR3ZILEdBQUcsQ0FBQ3dILFNBQVYsTUFBeUIsSUFBekIsSUFBaUNELEVBQUUsS0FBSyxLQUFLLENBQTdDLEdBQWlELEtBQUssQ0FBdEQsR0FBMERBLEVBQUUsQ0FBQ3JLLGVBQWpFLEVBQWtGO0FBQzlFLFlBQU1mLE9BQU8sR0FBSSxJQUFHZ0wsY0FBYyxDQUFDbkgsR0FBRCxDQUFNLHdKQUF4QztBQUNBLFlBQU0sSUFBSTNELEtBQUosQ0FBVUYsT0FBVixDQUFOO0FBQ0g7QUFDSixHQVB3QyxDQVF6Qzs7O0FBQ0EsUUFBTXFELEdBQUcsR0FBRzRGLEdBQUcsQ0FBQzVGLEdBQUosSUFBWTRGLEdBQUcsQ0FBQ0EsR0FBSixJQUFXQSxHQUFHLENBQUNBLEdBQUosQ0FBUTVGLEdBQTNDOztBQUNBLE1BQUksQ0FBQ1EsR0FBRyxDQUFDOUMsZUFBVCxFQUEwQjtBQUN0QixRQUFJa0ksR0FBRyxDQUFDQSxHQUFKLElBQVdBLEdBQUcsQ0FBQ3ZQLFNBQW5CLEVBQThCO0FBQzFCO0FBQ0EsYUFBTztBQUNINFIsaUJBQVMsRUFBRSxNQUFNbkMsbUJBQW1CLENBQUNGLEdBQUcsQ0FBQ3ZQLFNBQUwsRUFBZ0J1UCxHQUFHLENBQUNBLEdBQXBCO0FBRGpDLE9BQVA7QUFHSDs7QUFDRCxXQUFPLEVBQVA7QUFDSDs7QUFDRCxRQUFNclAsS0FBSyxHQUFHLE1BQU1pSyxHQUFHLENBQUM5QyxlQUFKLENBQW9Ca0ksR0FBcEIsQ0FBcEI7O0FBQ0EsTUFBSTVGLEdBQUcsSUFBSTRILFNBQVMsQ0FBQzVILEdBQUQsQ0FBcEIsRUFBMkI7QUFDdkIsV0FBT3pKLEtBQVA7QUFDSDs7QUFDRCxNQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSLFVBQU1vRyxPQUFPLEdBQUksSUFBR2dMLGNBQWMsQ0FBQ25ILEdBQUQsQ0FBTSwrREFBOERqSyxLQUFNLFlBQTVHO0FBQ0EsVUFBTSxJQUFJc0csS0FBSixDQUFVRixPQUFWLENBQU47QUFDSDs7QUFDRCxZQUEyQztBQUN2QyxRQUFJYixNQUFNLENBQUMySCxJQUFQLENBQVlsTixLQUFaLEVBQW1CMEcsTUFBbkIsS0FBOEIsQ0FBOUIsSUFBbUMsQ0FBQzJJLEdBQUcsQ0FBQ0EsR0FBNUMsRUFBaUQ7QUFDN0MxUCxhQUFPLENBQUNtQyxJQUFSLENBQWMsR0FBRXNQLGNBQWMsQ0FBQ25ILEdBQUQsQ0FBTSw0S0FBcEM7QUFDSDtBQUNKOztBQUNELFNBQU9qSyxLQUFQO0FBQ0g7O0FBQ0R2RCxPQUFPLENBQUM4UyxtQkFBUixHQUE4QkEsbUJBQTlCO0FBQ0E5UyxPQUFPLENBQUNrVixhQUFSLEdBQXdCLENBQ3BCLE1BRG9CLEVBRXBCLE1BRm9CLEVBR3BCLE1BSG9CLEVBSXBCLFVBSm9CLEVBS3BCLE1BTG9CLEVBTXBCLE1BTm9CLEVBT3BCLFVBUG9CLEVBUXBCLE1BUm9CLEVBU3BCLFVBVG9CLEVBVXBCLE9BVm9CLEVBV3BCLFFBWG9CLEVBWXBCLFNBWm9CLENBQXhCOztBQWNBLFNBQVMxVCxvQkFBVCxDQUE4QmQsR0FBOUIsRUFBbUNzRixPQUFuQyxFQUE0QztBQUN4QyxZQUE0QztBQUN4QyxRQUFJdEYsR0FBRyxLQUFLLElBQVIsSUFBZ0IsT0FBT0EsR0FBUCxLQUFlLFFBQW5DLEVBQTZDO0FBQ3pDb0ksWUFBTSxDQUFDMkgsSUFBUCxDQUFZL1AsR0FBWixFQUFpQndCLE9BQWpCLENBQXlCbVMsR0FBRyxJQUFJO0FBQzVCLFlBQUlyVSxPQUFPLENBQUNrVixhQUFSLENBQXNCdlEsT0FBdEIsQ0FBOEIwUCxHQUE5QixNQUF1QyxDQUFDLENBQTVDLEVBQStDO0FBQzNDblIsaUJBQU8sQ0FBQ21DLElBQVIsQ0FBYyxxREFBb0RnUCxHQUFJLEVBQXRFO0FBQ0g7QUFDSixPQUpEO0FBS0g7QUFDSjs7QUFDRCxTQUFPMUksS0FBSyxDQUFDd0osTUFBTixDQUFhelUsR0FBYixFQUFrQnNGLE9BQWxCLENBQVA7QUFDSDs7QUFDRGhHLE9BQU8sQ0FBQ3dCLG9CQUFSLEdBQStCQSxvQkFBL0I7QUFDQXhCLE9BQU8sQ0FBQ29WLEVBQVIsR0FBYSxPQUFPdkYsV0FBUCxLQUF1QixXQUFwQztBQUNBN1AsT0FBTyxDQUFDNFAsRUFBUixHQUFhNVAsT0FBTyxDQUFDb1YsRUFBUixJQUNULE9BQU92RixXQUFXLENBQUNDLElBQW5CLEtBQTRCLFVBRG5CLElBRVQsT0FBT0QsV0FBVyxDQUFDd0YsT0FBbkIsS0FBK0IsVUFGbkMsQzs7Ozs7Ozs7Ozs7O0FDdEdhOztBQUFBLElBQUl4VixzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxvSEFBRCxDQUFsQzs7QUFBbUZFLE9BQU8sQ0FBQ0MsVUFBUixHQUFtQixJQUFuQjtBQUF3QkQsT0FBTyxDQUFDc1YsU0FBUixHQUFrQkEsU0FBbEI7QUFBNEJ0VixPQUFPLENBQUN1VixTQUFSLEdBQWtCQSxTQUFsQjtBQUE0QnZWLE9BQU8sQ0FBQ0UsT0FBUixHQUFnQixLQUFLLENBQXJCOztBQUF1QixJQUFJQyxNQUFNLEdBQUNOLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBakM7O0FBQW9ELElBQUlPLE1BQU0sR0FBQ1AsbUJBQU8sQ0FBQywwREFBRCxDQUFsQjs7QUFBK0NFLE9BQU8sQ0FBQ3dWLGVBQVIsR0FBd0JuVixNQUFNLENBQUNtVixlQUEvQjtBQUErQzs7Ozs7QUFHdFYsZUFBZUMsa0JBQWYsQ0FBa0NDLElBQWxDLEVBQXVDO0FBQUMsTUFBRztBQUFDclMsYUFBRDtBQUFXdVA7QUFBWCxNQUFnQjhDLElBQW5CO0FBQXdCLE1BQUlULFNBQVMsR0FBQyxNQUFLLENBQUMsR0FBRTVVLE1BQU0sQ0FBQ3lTLG1CQUFWLEVBQStCelAsU0FBL0IsRUFBeUN1UCxHQUF6QyxDQUFuQjtBQUFpRSxTQUFNO0FBQUNxQztBQUFELEdBQU47QUFBbUI7O0FBQUEsTUFBTXpILEdBQU4sU0FBa0JyTixNQUFNLENBQUNELE9BQVAsQ0FBZW1ELFNBQWpDLENBQTBDO0FBQUM7QUFDbE07QUFDQTtBQUNBc1MsbUJBQWlCLENBQUN4UyxLQUFELEVBQU95UyxVQUFQLEVBQWtCO0FBQUMsVUFBTXpTLEtBQU47QUFBYTs7QUFBQWdELFFBQU0sR0FBRTtBQUFDLFFBQUc7QUFBQ3FDLFlBQUQ7QUFBUW5GLGVBQVI7QUFBa0I0UixlQUFsQjtBQUE0QnhHLGFBQTVCO0FBQW9DQztBQUFwQyxRQUE2QyxLQUFLbkwsS0FBckQ7QUFBMkQsV0FBTSxhQUFhcEQsTUFBTSxDQUFDRCxPQUFQLENBQWVtRyxhQUFmLENBQTZCaEQsU0FBN0IsRUFBdUN5RixNQUFNLENBQUN5QixNQUFQLENBQWMsRUFBZCxFQUFpQjBLLFNBQWpCLEVBQTJCO0FBQzFNO0FBQ0EsTUFBRXhHLE9BQU8sSUFBRUMsT0FBWCxJQUFvQjtBQUFDaE8sU0FBRyxFQUFDNlUsU0FBUyxDQUFDL00sTUFBRDtBQUFkLEtBQXBCLEdBQTRDLEVBRm1JLENBQXZDLENBQW5CO0FBRW5FOztBQUwrSTs7QUFLOUl4SSxPQUFPLENBQUNFLE9BQVIsR0FBZ0JzTixHQUFoQjtBQUFvQkEsR0FBRyxDQUFDN0MsbUJBQUosR0FBd0I4SyxrQkFBeEI7QUFBMkNqSSxHQUFHLENBQUM5QyxlQUFKLEdBQW9CK0ssa0JBQXBCO0FBQXVDLElBQUlJLGFBQUo7QUFBa0IsSUFBSUMsT0FBSjs7QUFBWSxVQUF1QztBQUFDRCxlQUFhLEdBQUMsQ0FBQyxHQUFFeFYsTUFBTSxDQUFDNkcsUUFBVixFQUFvQixNQUFJO0FBQUNoRSxXQUFPLENBQUNtQyxJQUFSLENBQWEsb0lBQWI7QUFBb0osR0FBN0ssQ0FBZDtBQUE2THlRLFNBQU8sR0FBQyxDQUFDLEdBQUV6VixNQUFNLENBQUM2RyxRQUFWLEVBQW9CLE1BQUk7QUFBQ2hFLFdBQU8sQ0FBQ0MsS0FBUixDQUFjLHVGQUFkO0FBQXdHLEdBQWpJLENBQVI7QUFBNEksQyxDQUFBOzs7QUFDeGlCLFNBQVNtUyxTQUFULENBQW1COVIsQ0FBbkIsRUFBcUI7QUFBQyxZQUF1Q3FTLGFBQWE7QUFBRyxTQUFPclMsQ0FBQyxDQUFDNEMsUUFBVDtBQUFtQjs7QUFBQSxTQUFTbVAsU0FBVCxDQUFtQi9NLE1BQW5CLEVBQTBCO0FBQUM7QUFDM0gsTUFBRztBQUFDbEUsWUFBRDtBQUFVNEosVUFBVjtBQUFpQjFCO0FBQWpCLE1BQXdCaEUsTUFBM0I7QUFBa0MsU0FBTTtBQUFDLFFBQUlnRSxLQUFKLEdBQVc7QUFBQyxnQkFBdUNzSixPQUFPO0FBQUcsYUFBT3RKLEtBQVA7QUFBYyxLQUE1RTs7QUFBNkUsUUFBSWxJLFFBQUosR0FBYztBQUFDLGdCQUF1Q3dSLE9BQU87QUFBRyxhQUFPeFIsUUFBUDtBQUFpQixLQUE5Sjs7QUFBK0osUUFBSTRKLE1BQUosR0FBWTtBQUFDLGdCQUF1QzRILE9BQU87QUFBRyxhQUFPNUgsTUFBUDtBQUFlLEtBQTVPOztBQUE2T21CLFFBQUksRUFBQyxNQUFJO0FBQUMsZ0JBQXVDeUcsT0FBTztBQUFHdE4sWUFBTSxDQUFDNkcsSUFBUDtBQUFlLEtBQXZUO0FBQXdUbkUsUUFBSSxFQUFDLENBQUN4SyxHQUFELEVBQUtXLEVBQUwsS0FBVTtBQUFDLGdCQUF1Q3lVLE9BQU87QUFBRyxhQUFPdE4sTUFBTSxDQUFDMEMsSUFBUCxDQUFZeEssR0FBWixFQUFnQlcsRUFBaEIsQ0FBUDtBQUE0QixLQUFyWjtBQUFzWjBVLFVBQU0sRUFBQyxDQUFDdFYsSUFBRCxFQUFNWSxFQUFOLEtBQVc7QUFBQyxnQkFBdUN5VSxPQUFPO0FBQUcsVUFBSUUsU0FBUyxHQUFDM1UsRUFBRSxHQUFDWixJQUFELEdBQU0sRUFBdEI7QUFBeUIsVUFBSXdWLE9BQU8sR0FBQzVVLEVBQUUsSUFBRVosSUFBaEI7QUFBcUIsYUFBTytILE1BQU0sQ0FBQzBDLElBQVAsQ0FBWThLLFNBQVosRUFBc0JDLE9BQXRCLENBQVA7QUFBdUMsS0FBL2lCO0FBQWdqQnJSLFdBQU8sRUFBQyxDQUFDbEUsR0FBRCxFQUFLVyxFQUFMLEtBQVU7QUFBQyxnQkFBdUN5VSxPQUFPO0FBQUcsYUFBT3ROLE1BQU0sQ0FBQzVELE9BQVAsQ0FBZWxFLEdBQWYsRUFBbUJXLEVBQW5CLENBQVA7QUFBK0IsS0FBbnBCO0FBQW9wQjZVLGFBQVMsRUFBQyxDQUFDelYsSUFBRCxFQUFNWSxFQUFOLEtBQVc7QUFBQyxnQkFBdUN5VSxPQUFPO0FBQUcsVUFBSUssWUFBWSxHQUFDOVUsRUFBRSxHQUFDWixJQUFELEdBQU0sRUFBekI7QUFBNEIsVUFBSTJWLFVBQVUsR0FBQy9VLEVBQUUsSUFBRVosSUFBbkI7QUFBd0IsYUFBTytILE1BQU0sQ0FBQzVELE9BQVAsQ0FBZXVSLFlBQWYsRUFBNEJDLFVBQTVCLENBQVA7QUFBZ0Q7QUFBL3pCLEdBQU47QUFBdzBCLEM7Ozs7Ozs7Ozs7O0FDVjEyQixpQkFBaUIsbUJBQU8sQ0FBQyxtRUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlDLGtCQUFrQixHQUFHQyxnREFBTyxDQUFDQyxPQUFSLENBQWdCLGFBQWhCLElBQ25CRCxnREFBTyxDQUFDQyxPQUFSLENBQWdCLGFBQWhCLENBRG1CLEdBRW5CLEVBRk47QUFJQSxNQUFNbFUsTUFBTSxHQUFJLHVDQUFoQjtBQUVPLE1BQU1tVSxxQkFBcUIsR0FBRztBQUNqQ0MsT0FEaUM7QUFFakNDLFFBRmlDO0FBR2pDQyxtQkFIaUM7QUFJakNDLG9CQUppQztBQUtqQ0Msc0JBTGlDO0FBTWpDQyxvQkFOaUM7QUFPakNDLGFBQVcsRUFBRVYsa0JBUG9COztBQVFqQyxNQUFJVyxnQkFBSixHQUF1QjtBQUNuQixXQUFPWCxrQkFBUDtBQUNIOztBQVZnQyxDQUE5Qjs7QUFhUCxlQUFlSSxLQUFmLENBQXFCUSxLQUFyQixFQUFvQ0MsUUFBcEMsRUFBb0U7QUFDaEVaLGtEQUFPLENBQUNhLE1BQVIsQ0FBZSxhQUFmO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQU14Syx5REFBSyxDQUFFLEdBQUV2SyxNQUFPLFFBQVgsRUFBb0I7QUFDNUNtTixVQUFNLEVBQUUsTUFEb0M7QUFFNUM2SCxXQUFPLEVBQUU7QUFBQyxzQkFBZ0I7QUFBakIsS0FGbUM7QUFHNUNuUyxRQUFJLEVBQUVvUyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDTixXQUFEO0FBQVFDO0FBQVIsS0FBZjtBQUhzQyxHQUFwQixDQUE1QjtBQUtBLFFBQU1NLE9BQU8sR0FBR0osUUFBUSxDQUFDakssSUFBVCxFQUFoQjs7QUFDQSxNQUFJaUssUUFBUSxDQUFDbEssTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUN6QixXQUFPc0ssT0FBTyxDQUFDMVMsSUFBUixDQUFhc0ksSUFBSSxJQUFJO0FBQ3hCa0osc0RBQU8sQ0FBQ3RULEdBQVIsQ0FBWSxhQUFaLEVBQTJCc1UsSUFBSSxDQUFDQyxTQUFMLENBQWVuSyxJQUFmLENBQTNCLEVBQWlEO0FBQUNxSyxlQUFPLEVBQUU7QUFBVixPQUFqRDtBQUNBcEIsd0JBQWtCLEdBQUdqSixJQUFyQjtBQUNBLGFBQU9BLElBQVA7QUFDSCxLQUpNLEVBSUp0SSxJQUpJLENBSUMsTUFBTXFELGtEQUFNLENBQUMrQyxJQUFQLENBQVksR0FBWixDQUpQLEVBS0ZwRyxJQUxFLENBS0csTUFBTWpELE1BQU0sQ0FBQzBDLFFBQVAsQ0FBZ0I2SyxNQUFoQixFQUxULEVBTUZsSixLQU5FLENBTUtqRCxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFFBQWQsRUFBd0JGLEdBQXhCLENBTmIsQ0FBUDtBQU9ILEdBUkQsTUFRTztBQUNILFdBQU91VSxPQUFPLENBQ1QxUyxJQURFLENBQ0dzSSxJQUFJLElBQUlzSyxvREFBSyxDQUFDQyxRQUFOLENBQWVDLHdFQUFTLENBQUN4SyxJQUFJLENBQUN6RCxPQUFOLENBQXhCLENBRFgsRUFFRnpELEtBRkUsQ0FFS2pELEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxLQUFSLENBQWMsUUFBZCxFQUF3QkYsR0FBeEIsQ0FGYixDQUFQO0FBR0g7QUFDSjs7QUFFRCxlQUFlMlQsa0JBQWYsQ0FDSWhNLElBREosRUFFSXNNLFFBRkosRUFHSUQsS0FISixFQUlJWSxxQkFKSixFQUtnQjtBQUNadkIsa0RBQU8sQ0FBQ2EsTUFBUixDQUFlLGFBQWY7QUFDQSxRQUFNQyxRQUFRLEdBQUcsTUFBTXhLLHlEQUFLLENBQUUsdURBQUYsRUFBMEQ7QUFDbEY0QyxVQUFNLEVBQUUsTUFEMEU7QUFFbEY2SCxXQUFPLEVBQUU7QUFBQyxzQkFBZ0Isa0JBQWpCO0FBQXFDLGdCQUFVO0FBQS9DLEtBRnlFO0FBR2xGblMsUUFBSSxFQUFFb1MsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDakIzTSxVQURpQjtBQUVqQnNNLGNBRmlCO0FBR2pCRCxXQUhpQjtBQUlqQlk7QUFKaUIsS0FBZjtBQUg0RSxHQUExRCxDQUE1QjtBQVVBLFFBQU1MLE9BQU8sR0FBR0osUUFBUSxDQUFDakssSUFBVCxFQUFoQjs7QUFDQSxNQUFJaUssUUFBUSxDQUFDbEssTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUN6QixXQUFPc0ssT0FBTyxDQUFDMVMsSUFBUixDQUFjc0ksSUFBRCxJQUFlO0FBQy9Cc0ssMERBQUssQ0FBQ0MsUUFBTixDQUFlRywwRUFBVyxDQUFDMUssSUFBSSxDQUFDekQsT0FBTixDQUExQjtBQUNBb08sZ0JBQVUsQ0FBQyxNQUFNbFcsTUFBTSxDQUFDMEMsUUFBUCxDQUFnQjZLLE1BQWhCLEVBQVAsRUFBaUMsSUFBakMsQ0FBVjtBQUNILEtBSE0sRUFHSmxKLEtBSEksQ0FHR2pELEdBQUQsSUFBY0MsT0FBTyxDQUFDQyxLQUFSLENBQWMsUUFBZCxFQUF3QkYsR0FBeEIsQ0FIaEIsQ0FBUDtBQUlILEdBTEQsTUFLTztBQUNILFdBQU91VSxPQUFPLENBQ1QxUyxJQURFLENBQ0dzSSxJQUFJLElBQUlzSyxvREFBSyxDQUFDQyxRQUFOLENBQWVDLHdFQUFTLENBQUN4SyxJQUFJLENBQUN6RCxPQUFOLENBQXhCLENBRFgsRUFFRnpELEtBRkUsQ0FFS2pELEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxLQUFSLENBQWMsUUFBZCxFQUF3QkYsR0FBeEIsQ0FGYixDQUFQO0FBR0g7QUFDSjs7QUFFRCxlQUFlMFQsaUJBQWYsQ0FDSS9MLElBREosRUFFSXNNLFFBRkosRUFHSUQsS0FISixFQUlJWSxxQkFKSixFQUtnQjtBQUNadkIsa0RBQU8sQ0FBQ2EsTUFBUixDQUFlLGFBQWY7QUFDQSxRQUFNQyxRQUFRLEdBQUcsTUFBTXhLLHlEQUFLLENBQUUsR0FBRXZLLE1BQU8saUJBQVgsRUFBNkI7QUFDckRtTixVQUFNLEVBQUUsTUFENkM7QUFFckQ2SCxXQUFPLEVBQUU7QUFBQyxzQkFBZ0Isa0JBQWpCO0FBQXFDLGdCQUFVO0FBQS9DLEtBRjRDO0FBR3JEblMsUUFBSSxFQUFFb1MsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDakIzTSxVQURpQjtBQUVqQnNNLGNBRmlCO0FBR2pCRCxXQUhpQjtBQUlqQlk7QUFKaUIsS0FBZjtBQUgrQyxHQUE3QixDQUE1QjtBQVVBLFFBQU1MLE9BQU8sR0FBR0osUUFBUSxDQUFDakssSUFBVCxFQUFoQjs7QUFDQSxNQUFJaUssUUFBUSxDQUFDbEssTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUN6QixXQUFPc0ssT0FBTyxDQUFDMVMsSUFBUixDQUFjc0ksSUFBRCxJQUFlO0FBQy9Cc0ssMERBQUssQ0FBQ0MsUUFBTixDQUFlRywwRUFBVyxDQUFDMUssSUFBSSxDQUFDekQsT0FBTixDQUExQjtBQUNBb08sZ0JBQVUsQ0FBQyxNQUFNbFcsTUFBTSxDQUFDMEMsUUFBUCxDQUFnQjZLLE1BQWhCLEVBQVAsRUFBaUMsSUFBakMsQ0FBVjtBQUNILEtBSE0sRUFHSmxKLEtBSEksQ0FHR2pELEdBQUQsSUFBY0MsT0FBTyxDQUFDQyxLQUFSLENBQWMsUUFBZCxFQUF3QkYsR0FBeEIsQ0FIaEIsQ0FBUDtBQUlILEdBTEQsTUFLTztBQUNILFdBQU91VSxPQUFPLENBQ1QxUyxJQURFLENBQ0dzSSxJQUFJLElBQUlzSyxvREFBSyxDQUFDQyxRQUFOLENBQWVDLHdFQUFTLENBQUN4SyxJQUFJLENBQUN6RCxPQUFOLENBQXhCLENBRFgsRUFFRnpELEtBRkUsQ0FFS2pELEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxLQUFSLENBQWMsUUFBZCxFQUF3QkYsR0FBeEIsQ0FGYixDQUFQO0FBR0g7QUFDSjs7QUFFRCxlQUFlNFQsb0JBQWYsQ0FDSWpNLElBREosRUFFSXNNLFFBRkosRUFHSUQsS0FISixFQUlJWSxxQkFKSixFQUtJRyxLQUxKLEVBTWdCO0FBQ1oxQixrREFBTyxDQUFDYSxNQUFSLENBQWUsYUFBZjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNeEsseURBQUssQ0FBRSxHQUFFdkssTUFBTyxzQkFBWCxFQUFrQztBQUMxRG1OLFVBQU0sRUFBRSxNQURrRDtBQUUxRDZILFdBQU8sRUFBRTtBQUFDLHNCQUFnQixrQkFBakI7QUFBcUMsZ0JBQVU7QUFBL0MsS0FGaUQ7QUFHMURuUyxRQUFJLEVBQUVvUyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQjNNLFVBRGlCO0FBRWpCc00sY0FGaUI7QUFHakJELFdBSGlCO0FBSWpCWSwyQkFKaUI7QUFLakJHO0FBTGlCLEtBQWY7QUFIb0QsR0FBbEMsQ0FBNUI7QUFXQSxRQUFNUixPQUFPLEdBQUdKLFFBQVEsQ0FBQ2pLLElBQVQsRUFBaEI7O0FBQ0EsTUFBSWlLLFFBQVEsQ0FBQ2xLLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDekIsV0FBT3NLLE9BQU8sQ0FBQzFTLElBQVIsQ0FBY3NJLElBQUQsSUFBZTtBQUMvQnNLLDBEQUFLLENBQUNDLFFBQU4sQ0FBZUcsMEVBQVcsQ0FBQzFLLElBQUksQ0FBQ3pELE9BQU4sQ0FBMUI7QUFDQW9PLGdCQUFVLENBQUMsTUFBTWxXLE1BQU0sQ0FBQzBDLFFBQVAsQ0FBZ0I2SyxNQUFoQixFQUFQLEVBQWlDLElBQWpDLENBQVY7QUFDSCxLQUhNLEVBR0psSixLQUhJLENBR0dqRCxHQUFELElBQWNDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFFBQWQsRUFBd0JGLEdBQXhCLENBSGhCLENBQVA7QUFJSCxHQUxELE1BS087QUFDSCxXQUFPdVUsT0FBTyxDQUNUMVMsSUFERSxDQUNHc0ksSUFBSSxJQUFJc0ssb0RBQUssQ0FBQ0MsUUFBTixDQUFlQyx3RUFBUyxDQUFDeEssSUFBSSxDQUFDekQsT0FBTixDQUF4QixDQURYLEVBRUZ6RCxLQUZFLENBRUtqRCxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFFBQWQsRUFBd0JGLEdBQXhCLENBRmIsQ0FBUDtBQUdIO0FBQ0o7O0FBRUQsZUFBZTZULGtCQUFmLENBQ0lsTSxJQURKLEVBRUlzTSxRQUZKLEVBR0lELEtBSEosRUFJSVkscUJBSkosRUFLSUcsS0FMSixFQU1JQyxXQU5KLEVBT2dCO0FBQ1ozQixrREFBTyxDQUFDYSxNQUFSLENBQWUsYUFBZjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNeEsseURBQUssQ0FBRSxHQUFFdkssTUFBTyxrQkFBWCxFQUE4QjtBQUN0RG1OLFVBQU0sRUFBRSxNQUQ4QztBQUV0RDZILFdBQU8sRUFBRTtBQUFDLHNCQUFnQixrQkFBakI7QUFBcUMsZ0JBQVU7QUFBL0MsS0FGNkM7QUFHdERuUyxRQUFJLEVBQUVvUyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQjNNLFVBRGlCO0FBRWpCc00sY0FGaUI7QUFHakJELFdBSGlCO0FBSWpCWSwyQkFKaUI7QUFLakJHLFdBTGlCO0FBTWpCQztBQU5pQixLQUFmO0FBSGdELEdBQTlCLENBQTVCO0FBWUEsUUFBTVQsT0FBTyxHQUFHSixRQUFRLENBQUNqSyxJQUFULEVBQWhCOztBQUNBLE1BQUlpSyxRQUFRLENBQUNsSyxNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCLFdBQU9zSyxPQUFPLENBQUMxUyxJQUFSLENBQWNzSSxJQUFELElBQWU7QUFDL0JzSywwREFBSyxDQUFDQyxRQUFOLENBQWVHLDBFQUFXLENBQUMxSyxJQUFJLENBQUN6RCxPQUFOLENBQTFCO0FBQ0FvTyxnQkFBVSxDQUFDLE1BQU1sVyxNQUFNLENBQUMwQyxRQUFQLENBQWdCNkssTUFBaEIsRUFBUCxFQUFpQyxJQUFqQyxDQUFWO0FBQ0gsS0FITSxFQUdKbEosS0FISSxDQUdHakQsR0FBRCxJQUFjQyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxRQUFkLEVBQXdCRixHQUF4QixDQUhoQixDQUFQO0FBSUgsR0FMRCxNQUtPO0FBQ0gsV0FBT3VVLE9BQU8sQ0FDVDFTLElBREUsQ0FDR3NJLElBQUksSUFBSXNLLG9EQUFLLENBQUNDLFFBQU4sQ0FBZUMsd0VBQVMsQ0FBQ3hLLElBQUksQ0FBQ3pELE9BQU4sQ0FBeEIsQ0FEWCxFQUVGekQsS0FGRSxDQUVLakQsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxRQUFkLEVBQXdCRixHQUF4QixDQUZiLENBQVA7QUFHSDtBQUNKOztBQUVELGVBQWV5VCxNQUFmLEdBQXNDO0FBQ2xDSixrREFBTyxDQUFDYSxNQUFSLENBQWUsYUFBZjtBQUNBLFNBQU8sTUFBTXZLLHlEQUFLLENBQUUsR0FBRXZLLE1BQU8sU0FBWCxFQUFxQjtBQUNuQ21OLFVBQU0sRUFBRSxLQUQyQjtBQUVuQzZILFdBQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLHFDQUErQjtBQUYxQjtBQUYwQixHQUFyQixDQUFMLENBT1J2UyxJQVBRLENBT0gsTUFBTXFELGtEQUFNLENBQUMrQyxJQUFQLENBQVksUUFBWixDQVBILEVBUVJwRyxJQVJRLENBUUgsTUFBTWpELE1BQU0sQ0FBQzBDLFFBQVAsQ0FBZ0I2SyxNQUFoQixDQUF1QixJQUF2QixDQVJILEVBU1JsSixLQVRRLENBU0RqRCxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFFBQWQsRUFBd0JGLEdBQXhCLENBVFAsQ0FBYjtBQVVILEM7Ozs7Ozs7Ozs7OztBQzFMRDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsb0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU2lWLE1BQVQsR0FBa0I7QUFDL0IsU0FDRTtBQUFBLHlDQUFnQkMsMERBQUMsQ0FBQ0MsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQSx5Q0FBZ0JELDBEQUFDLENBQUNFLGtCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVDLHVFQUFWO0FBQW9CLE9BQUcsRUFBQyxXQUF4QjtBQUFBLHdDQUE4QyxPQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBLHdDQUFnQixHQUFFSCwwREFBQyxDQUFDSSxZQUFhLGFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlO0FBQUcsU0FBSyxFQUFFO0FBQUVDLG9CQUFjLEVBQUU7QUFBbEIsS0FBVjtBQUFBLHdDQUFnRCxZQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFEsVUFBZixDQURGLENBRkYsQ0FGRjtBQUFBO0FBQUE7QUFBQSxncURBREY7QUFtQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVUEsTUFBTUMsWUFBWSxHQUFHbFYsS0FBSyxJQUFJO0FBQzVCLFFBQU07QUFBQSxPQUFDbVYsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLEVBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRixzREFBUSxDQUFDLEtBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JKLHNEQUFRLENBQUMsRUFBRCxDQUFoQzs7QUFFQSxRQUFNSyxNQUFNLEdBQUcsTUFBTUgsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBOUI7O0FBRUFLLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUkxQywrREFBcUIsQ0FBQ1EsZ0JBQXRCLENBQXVDbUMsSUFBM0MsRUFBaUQ7QUFDL0NILGFBQU8sQ0FBQ3hDLCtEQUFxQixDQUFDUSxnQkFBdEIsQ0FBdUNtQyxJQUF2QyxDQUE0Q0osSUFBN0MsQ0FBUDtBQUNEO0FBQ0YsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLFNBQ0U7QUFBSyxTQUFLLEVBQUU7QUFDVkssY0FBUSxFQUFFLFFBREE7QUFDVUMsWUFBTSxFQUFFO0FBRGxCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFLE1BQUMsaURBQUQ7QUFBUSxTQUFLLEVBQUMsTUFBZDtBQUFxQixRQUFJLE1BQXpCO0FBQTBCLFVBQU0sRUFBQyxJQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFlLFdBQU8sRUFBRUosTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxtREFBRDtBQUFVLFVBQU0sRUFBRUosTUFBbEI7QUFBMEIsVUFBTSxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQXlCLFVBQU0sTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJRSxJQUFJLEtBQUssWUFBVCxJQUF5QkEsSUFBSSxLQUFLLFFBQW5DLEdBQStDLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUM5QyxNQUFDLGtEQUFEO0FBQVMsUUFBSSxFQUFDLGVBQWQ7QUFBOEIsV0FBTyxFQUFFLE1BQU1KLGFBQWEsQ0FBQyxlQUFELENBQTFEO0FBQTZFLGFBQVMsRUFBRUQsVUFBVSxLQUFLLGVBQWYsR0FBaUNQLDBEQUFDLENBQUNPLFVBQW5DLEdBQWdELElBQXhJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRDhDLENBQS9DLEdBRVksSUFIZixFQUlHSyxJQUFJLEtBQUssUUFBVCxHQUFvQixNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDbkIsTUFBQyxrREFBRDtBQUFTLFFBQUksRUFBQyxjQUFkO0FBQTZCLFdBQU8sRUFBRSxNQUFNSixhQUFhLENBQUMsY0FBRCxDQUF6RDtBQUEyRSxhQUFTLEVBQUVELFVBQVUsS0FBSyxjQUFmLEdBQWdDUCwwREFBQyxDQUFDTyxVQUFsQyxHQUErQyxJQUFySTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURtQixDQUFwQixHQUVZLElBTmYsRUFPSUssSUFBSSxLQUFLLFlBQVQsSUFBeUJBLElBQUksS0FBSyxRQUFuQyxHQUErQyxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDOUMsTUFBQyxrREFBRDtBQUFTLFFBQUksRUFBQyxVQUFkO0FBQXlCLFdBQU8sRUFBRSxNQUFNSixhQUFhLENBQUMsVUFBRCxDQUFyRDtBQUFtRSxhQUFTLEVBQUVELFVBQVUsS0FBSyxVQUFmLEdBQTRCUCwwREFBQyxDQUFDTyxVQUE5QixHQUEyQyxJQUF6SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUQ4QyxDQUEvQyxHQUVZLElBVGYsRUFVRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQVMsUUFBSSxFQUFDLFFBQWQ7QUFBdUIsV0FBTyxFQUFFLE1BQU1DLGFBQWEsQ0FBQyxPQUFELENBQW5EO0FBQThELGFBQVMsRUFBRUQsVUFBVSxLQUFLLE9BQWYsR0FBeUJQLDBEQUFDLENBQUNPLFVBQTNCLEdBQXdDLElBQWpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQVZGLEVBYUlLLElBQUksS0FBSyxPQUFULElBQW9CQSxJQUFJLEtBQUssWUFBN0IsSUFBNkNBLElBQUksS0FBSyxRQUF0RCxJQUFrRUEsSUFBSSxLQUFLLFFBQTVFLEdBQXdGLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUN2RixNQUFDLGtEQUFEO0FBQVMsV0FBTyxFQUFFLE1BQU12QywrREFBcUIsQ0FBQ0UsTUFBdEIsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUR1RixDQUF4RixHQUVZLElBZmYsRUFnQkdxQyxJQUFJLEtBQUssT0FBVCxHQUFtQixNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDbEIsTUFBQyxrREFBRDtBQUFTLFFBQUksRUFBQyxRQUFkO0FBQXVCLFdBQU8sRUFBRSxNQUFNSixhQUFhLENBQUMsT0FBRCxDQUFuRDtBQUE4RCxhQUFTLEVBQUVELFVBQVUsS0FBSyxPQUFmLEdBQXlCUCwwREFBQyxDQUFDTyxVQUEzQixHQUF3QyxJQUFqSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGtCLENBQW5CLEdBRVksSUFsQmYsQ0FERixDQUZGLENBSEYsQ0FERjtBQWtDRCxDQS9DRDs7QUFpREFELFlBQVksQ0FBQy9OLGVBQWIsR0FBK0IsT0FBTztBQUFFckgsV0FBRjtBQUFhdVA7QUFBYixDQUFQLEtBQThCO0FBQzNELFNBQU8sRUFBUDtBQUNELENBRkQ7O0FBS0E2RixZQUFZLENBQUNwUixTQUFiLEdBQXlCO0FBQ3ZCaVMsT0FBSyxFQUFFblMsaURBQVMsQ0FBQ08sSUFETTtBQUV2QjZSLE1BQUksRUFBRXBTLGlEQUFTLENBQUNPLElBRk87QUFHdkI4UixPQUFLLEVBQUVyUyxpREFBUyxDQUFDSSxNQUhNO0FBSXZCa1MsT0FBSyxFQUFFdFMsaURBQVMsQ0FBQ0ksTUFKTTtBQUt2QndSLE1BQUksRUFBRTVSLGlEQUFTLENBQUNJLE1BTE87QUFNdkJtUyxRQUFNLEVBQUV2UyxpREFBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILGlEQUFTLENBQUNPLElBQVgsRUFBaUJQLGlEQUFTLENBQUNJLE1BQTNCLENBQXBCLENBTmU7QUFPdkJvUyxLQUFHLEVBQUV4UyxpREFBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILGlEQUFTLENBQUN5UyxJQUFYLEVBQWlCelMsaURBQVMsQ0FBQ0ksTUFBM0IsQ0FBcEI7QUFQa0IsQ0FBekI7QUFVZWtSLDJFQUFmLEU7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7O0FBRUEsTUFBTW9CLE1BQU0sR0FBRyxDQUFDO0FBQUV6VDtBQUFGLENBQUQsS0FBbUIsbUVBQ2hDO0FBQUssV0FBUyxFQUFFK1IsMERBQUMsQ0FBQzJCLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBRTNCLDBEQUFDLENBQUM0QixjQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLENBREYsRUFJRTtBQUFNLFdBQVMsRUFBRTVCLDBEQUFDLENBQUM2QixpQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNHNVQsUUFESCxDQUpGLENBREYsQ0FEZ0MsQ0FBbEM7O0FBYWV5VCxxRUFBZixFOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUksU0FBTixTQUF3QnpNLCtDQUF4QixDQUE0QjtBQUUxQixlQUFhOUMsZUFBYixDQUE2Qm5ILEtBQTdCLEVBQW9DO0FBQ2xDLFVBQU0wUixTQUFTLEdBQUcxUixLQUFLLENBQUNGLFNBQU4sQ0FBZ0JxSCxlQUFoQixHQUFrQyxNQUFNbkgsS0FBSyxDQUFDRixTQUFOLENBQWdCcUgsZUFBaEIsQ0FBZ0NuSCxLQUFLLENBQUNxUCxHQUF0QyxDQUF4QyxHQUFxRixFQUF2RztBQUNBLFdBQU87QUFDTHFDLGVBQVMsRUFBRUE7QUFETixLQUFQO0FBR0Q7O0FBRUQ5TyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUU5QyxlQUFGO0FBQWE0UixlQUFiO0FBQXdCeUM7QUFBeEIsUUFBa0MsS0FBS25VLEtBQTdDO0FBRUEsV0FDRSxNQUFDLG9EQUFEO0FBQVUsV0FBSyxFQUFFbVUsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sYUFBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsaUJBQWhCO0FBQWtDLGFBQU8sRUFBQyxTQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFHRTtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQXNCLGFBQU8sRUFBQyxxRkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLEVBSUU7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUF5QixhQUFPLEVBQUMsYUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLEVBS0U7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUMsVUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFORixFQVFFO0FBQU0sU0FBRyxFQUFDLFVBQVY7QUFBcUIsVUFBSSxFQUFDLGdCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkYsRUFTRTtBQUFNLFVBQUksRUFBQyxvQkFBWDtBQUFnQyxTQUFHLEVBQUMsTUFBcEM7QUFBMkMsVUFBSSxFQUFDLFdBQWhEO0FBQTRELFdBQUssRUFBQyxPQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVEYsRUFVRTtBQUFNLFVBQUksRUFBQyxvQkFBWDtBQUFnQyxTQUFHLEVBQUMsTUFBcEM7QUFBMkMsVUFBSSxFQUFDLFdBQWhEO0FBQTRELFdBQUssRUFBQyxPQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVkYsRUFXRTtBQUFNLFNBQUcsRUFBQyxrQkFBVjtBQUE2QixVQUFJLEVBQUMsaUJBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFYRixFQVlFO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsYUFBTyxFQUFDLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFaRixDQURGLEVBZUUsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxTQUFELGVBQWV6QyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERixDQWZGLENBREY7QUFxQkQ7O0FBakN5QixDLENBb0M1Qjs7O0FBQ0EsTUFBTWlGLFNBQVMsR0FBRyxNQUFNeEMsb0RBQXhCLEMsQ0FFQTs7O0FBQ2V5Qyx3SEFBUyxDQUFDRCxTQUFELENBQVQsQ0FBcUJELFNBQXJCLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1QkE7Q0FHQTs7QUFDTyxTQUFTRyxVQUFULENBQW9CQyxJQUFwQixFQUFvQztBQUN2QyxTQUFPO0FBQ0h0VCxRQUFJLEVBQUV1VCx1REFESDtBQUVIQyxXQUFPLEVBQUVGO0FBRk4sR0FBUDtBQUlIO0FBQUE7QUFDTSxTQUFTRyxVQUFULEdBQXNCO0FBQ3pCLFNBQU87QUFDSHpULFFBQUksRUFBRTBULGtEQUFXQTtBQURkLEdBQVA7QUFHSDtBQUNNLFNBQVNDLFVBQVQsR0FBc0I7QUFDekIsU0FBTztBQUNIM1QsUUFBSSxFQUFFNFQsa0RBQVdBO0FBRGQsR0FBUDtBQUdIO0FBQ00sU0FBUy9DLFNBQVQsQ0FBbUJnRCxJQUFuQixFQUFzQztBQUN6QyxTQUFRakQsUUFBRCxJQUF3QjtBQUMzQkEsWUFBUSxDQUFDO0FBQ0w1USxVQUFJLEVBQUU4VCxpREFERDtBQUVMTixhQUFPLEVBQUVLO0FBRkosS0FBRCxDQUFSO0FBSUE3QyxjQUFVLENBQUMsTUFBTTtBQUNiSixjQUFRLENBQUNtRCxTQUFTLEVBQVYsQ0FBUjtBQUNILEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHSCxHQVJEO0FBU0g7QUFDTSxTQUFTQSxTQUFULEdBQXFCO0FBQ3hCLFNBQU87QUFDSC9ULFFBQUksRUFBRWdVLGlEQUFVQTtBQURiLEdBQVA7QUFHSDtBQUNNLFNBQVNDLFVBQVQsR0FBMkI7QUFDOUIsU0FBTztBQUNIalUsUUFBSSxFQUFFa1UseURBQWtCQTtBQURyQixHQUFQO0FBR0g7QUFBQTtBQUNNLE1BQU1DLFdBQVcsR0FBRyxNQUFNLE1BQU92RCxRQUFQLElBQThCO0FBQzNELFFBQU1QLFFBQVEsR0FBRyxNQUFNeEsseURBQUssQ0FBRSw2Q0FBRixDQUE1QjtBQUNBLFFBQU00SyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ2pLLElBQVQsRUFBaEI7QUFDQXFLLFNBQU8sQ0FBQzFTLElBQVIsQ0FBYWtJLEdBQUcsSUFBSTtBQUNoQjJLLFlBQVEsQ0FBQztBQUFFNVEsVUFBSSxFQUFFb1UsdURBQVI7QUFBMEJaLGFBQU8sRUFBRXZOLEdBQUcsQ0FBQ29PO0FBQXZDLEtBQUQsQ0FBUjtBQUNBekQsWUFBUSxDQUFDO0FBQUU1USxVQUFJLEVBQUVzVSxvREFBUjtBQUF1QmQsYUFBTyxFQUFFdk4sR0FBRyxDQUFDSTtBQUFwQyxLQUFELENBQVI7QUFDSCxHQUhELEVBR0dsSCxLQUhILENBR1NqRCxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFNBQWQsRUFBeUJGLEdBQXpCLENBSGhCO0FBSUgsQ0FQTTtBQVFBLE1BQU1xWSxXQUFXLEdBQUcsTUFBTSxNQUFPM0QsUUFBUCxJQUE4QjtBQUMzRCxRQUFNUCxRQUFRLEdBQUcsTUFBTXhLLHlEQUFLLENBQUUscURBQUYsQ0FBNUI7QUFDQSxRQUFNNEssT0FBTyxHQUFHSixRQUFRLENBQUNqSyxJQUFULEVBQWhCO0FBQ0FxSyxTQUFPLENBQUMxUyxJQUFSLENBQWFrSSxHQUFHLElBQUk7QUFDaEIsV0FBTzJLLFFBQVEsQ0FBQztBQUFFNVEsVUFBSSxFQUFFd1Usb0RBQVI7QUFBdUJoQixhQUFPLEVBQUV2TixHQUFHLENBQUNJO0FBQXBDLEtBQUQsQ0FBZjtBQUNILEdBRkQsRUFFR2xILEtBRkgsQ0FFU2pELEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxLQUFSLENBQWMsU0FBZCxFQUF5QkYsR0FBekIsQ0FGaEI7QUFHSCxDQU5NO0FBT0EsTUFBTXVZLGdCQUFnQixHQUFHLE1BQU0sTUFBTzdELFFBQVAsSUFBOEI7QUFDaEUsUUFBTVAsUUFBUSxHQUFHLE1BQU14Syx5REFBSyxDQUFFLGdEQUFGLENBQTVCO0FBQ0EsUUFBTTRLLE9BQU8sR0FBR0osUUFBUSxDQUFDakssSUFBVCxFQUFoQjtBQUNBcUssU0FBTyxDQUFDMVMsSUFBUixDQUFha0ksR0FBRyxJQUFJO0FBQ2hCLFdBQU8ySyxRQUFRLENBQUM7QUFBRTVRLFVBQUksRUFBRTBVLHlEQUFSO0FBQTRCbEIsYUFBTyxFQUFFdk4sR0FBRyxDQUFDSTtBQUF6QyxLQUFELENBQWY7QUFDSCxHQUZELEVBRUdsSCxLQUZILENBRVNqRCxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFNBQWQsRUFBeUJGLEdBQXpCLENBRmhCO0FBR0gsQ0FOTTtBQU9BLE1BQU15WSxVQUFVLEdBQUcsTUFBTSxNQUFPL0QsUUFBUCxJQUE4QjtBQUMxRCxRQUFNUCxRQUFRLEdBQUcsTUFBTXhLLHlEQUFLLENBQUUsNENBQUYsQ0FBNUI7QUFDQSxRQUFNNEssT0FBTyxHQUFHSixRQUFRLENBQUNqSyxJQUFULEVBQWhCO0FBQ0FxSyxTQUFPLENBQUMxUyxJQUFSLENBQWFrSSxHQUFHLElBQUk7QUFDaEIsV0FBTzJLLFFBQVEsQ0FBQztBQUFFNVEsVUFBSSxFQUFFNFUsbURBQVI7QUFBc0JwQixhQUFPLEVBQUV2TixHQUFHLENBQUNJO0FBQW5DLEtBQUQsQ0FBZjtBQUNILEdBRkQsRUFFR2xILEtBRkgsQ0FFU2pELEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxLQUFSLENBQWMsU0FBZCxFQUF5QkYsR0FBekIsQ0FGaEI7QUFHSCxDQU5NO0FBT0EsTUFBTTJZLFNBQVMsR0FBSUMsT0FBRCxJQUE4QixNQUFPbEUsUUFBUCxJQUF5QjtBQUM1RSxRQUFNUCxRQUFRLEdBQUcsTUFBTXhLLHlEQUFLLENBQUUseURBQXdEaVAsT0FBUSxFQUFsRSxDQUE1QjtBQUNBLFFBQU1yRSxPQUFPLEdBQUdKLFFBQVEsQ0FBQ2pLLElBQVQsRUFBaEI7QUFDQXFLLFNBQU8sQ0FBQzFTLElBQVIsQ0FBYWtJLEdBQUcsSUFBSTtBQUNoQixXQUFPMkssUUFBUSxDQUFDO0FBQUU1USxVQUFJLEVBQUUrVSxpREFBUjtBQUFvQnZCLGFBQU8sRUFBRXZOLEdBQUcsQ0FBQ0k7QUFBakMsS0FBRCxDQUFmO0FBQ0gsR0FGRCxFQUVHbEgsS0FGSCxDQUVTakQsR0FBRyxJQUFJQyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxTQUFkLEVBQXlCRixHQUF6QixDQUZoQjtBQUdILENBTk07QUFPQSxNQUFNOFksaUJBQWlCLEdBQUlDLElBQUQsSUFBZSxNQUFPckUsUUFBUCxJQUE4QjtBQUMxRSxRQUFNd0IsSUFBSSxHQUFHM0MsK0RBQXFCLENBQUNRLGdCQUFuQztBQUNBLFFBQU1JLFFBQVEsR0FBRyxNQUFNeEsseURBQUssQ0FBRSxzREFBRixFQUF5RDtBQUNqRjRDLFVBQU0sRUFBRSxNQUR5RTtBQUVqRjZILFdBQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLHFDQUErQixHQUYxQjtBQUdMLHVCQUFrQixHQUFFOEIsSUFBSSxDQUFDOEMsVUFBVyxJQUFHOUMsSUFBSSxDQUFDK0MsS0FBTTtBQUg3QyxLQUZ3RTtBQU9qRmhYLFFBQUksRUFBRW9TLElBQUksQ0FBQ0MsU0FBTCxDQUFleUUsSUFBZjtBQVAyRSxHQUF6RCxDQUE1QjtBQVNBLFFBQU14RSxPQUFPLEdBQUdKLFFBQVEsQ0FBQ2pLLElBQVQsRUFBaEI7QUFDQXFLLFNBQU8sQ0FBQzFTLElBQVIsQ0FBYWtJLEdBQUcsSUFBSTlKLE9BQU8sQ0FBQ2laLEdBQVIsQ0FBWW5QLEdBQVosQ0FBcEIsRUFDSzlHLEtBREwsQ0FDV2pELEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxLQUFSLENBQWMsU0FBZCxFQUF5QkYsR0FBekIsQ0FEbEI7QUFFQSxTQUFPMFUsUUFBUSxDQUFDO0FBQUU1USxRQUFJLEVBQUVxViwwREFBUjtBQUE2QjdCLFdBQU8sRUFBRXlCO0FBQXRDLEdBQUQsQ0FBZjtBQUNILENBZk07QUFnQkEsTUFBTUssZ0JBQWdCLEdBQUcsTUFBTSxNQUFPMUUsUUFBUCxJQUE4QjtBQUNoRSxRQUFNd0IsSUFBSSxHQUFHLE1BQU0zQywrREFBcUIsQ0FBQ1EsZ0JBQXpDO0FBQ0EsUUFBTUksUUFBUSxHQUFHLE1BQU14Syx5REFBSyxDQUFFLGlEQUFnRHVNLElBQUksQ0FBQ0EsSUFBTCxDQUFVbUQsRUFBRyxFQUEvRCxFQUFrRTtBQUMxRjlNLFVBQU0sRUFBRSxLQURrRjtBQUUxRjZILFdBQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLHFDQUErQixHQUYxQjtBQUdMLHVCQUFrQixHQUFFOEIsSUFBSSxDQUFDOEMsVUFBVyxJQUFHOUMsSUFBSSxDQUFDK0MsS0FBTTtBQUg3QztBQUZpRixHQUFsRSxDQUE1QjtBQVFBLFFBQU0xRSxPQUFPLEdBQUdKLFFBQVEsQ0FBQ2pLLElBQVQsRUFBaEI7QUFDQXFLLFNBQU8sQ0FBQzFTLElBQVIsQ0FBYWtJLEdBQUcsSUFBSTtBQUNoQixXQUFPMkssUUFBUSxDQUFDO0FBQUU1USxVQUFJLEVBQUV3Vix5REFBUjtBQUE0QmhDLGFBQU8sRUFBRXZOO0FBQXJDLEtBQUQsQ0FBZjtBQUNILEdBRkQsRUFFRzlHLEtBRkgsQ0FFU2pELEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxLQUFSLENBQWMsU0FBZCxFQUF5QkYsR0FBekIsQ0FGaEI7QUFHSCxDQWRNO0FBZUEsTUFBTXVaLGVBQWUsR0FBSWpMLElBQUQsSUFBMkIsTUFBT29HLFFBQVAsSUFBOEI7QUFDcEYsUUFBTVAsUUFBUSxHQUFHLE1BQU14Syx5REFBSyxDQUFFLG9EQUFtRDJFLElBQUssRUFBMUQsQ0FBNUI7QUFDQSxRQUFNaUcsT0FBTyxHQUFHSixRQUFRLENBQUNqSyxJQUFULEVBQWhCO0FBQ0FxSyxTQUFPLENBQUMxUyxJQUFSLENBQWFrSSxHQUFHLElBQUk7QUFDaEIySyxZQUFRLENBQUM7QUFBRTVRLFVBQUksRUFBRW9VLHVEQUFSO0FBQTBCWixhQUFPLEVBQUV2TixHQUFHLENBQUNvTztBQUF2QyxLQUFELENBQVI7QUFDQXpELFlBQVEsQ0FBQztBQUFFNVEsVUFBSSxFQUFFc1Usb0RBQVI7QUFBdUJkLGFBQU8sRUFBRXZOLEdBQUcsQ0FBQ0k7QUFBcEMsS0FBRCxDQUFSO0FBQ0gsR0FIRCxFQUdHbEgsS0FISCxDQUdTakQsR0FBRyxJQUFJQyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxTQUFkLEVBQXlCRixHQUF6QixDQUhoQjtBQUlILENBUE07QUFRQSxNQUFNd1osZUFBZSxHQUFJQyxNQUFELElBQTZCLE1BQU8vRSxRQUFQLElBQThCO0FBQ3RGLFFBQU13QixJQUFJLEdBQUcsTUFBTTNDLCtEQUFxQixDQUFDUSxnQkFBekM7QUFDQSxRQUFNSSxRQUFRLEdBQUcsTUFBTXhLLHlEQUFLLENBQUUsK0NBQThDOFAsTUFBTyxXQUF2RCxFQUFtRTtBQUMzRmxOLFVBQU0sRUFBRSxLQURtRjtBQUUzRjZILFdBQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLHFDQUErQixHQUYxQjtBQUdMLHVCQUFrQixHQUFFOEIsSUFBSSxDQUFDOEMsVUFBVyxJQUFHOUMsSUFBSSxDQUFDK0MsS0FBTTtBQUg3QztBQUZrRixHQUFuRSxDQUE1QjtBQVFBLFFBQU0xRSxPQUFPLEdBQUdKLFFBQVEsQ0FBQ2pLLElBQVQsRUFBaEI7QUFDQXFLLFNBQU8sQ0FBQzFTLElBQVIsQ0FBYWtJLEdBQUcsSUFBSTtBQUNoQjJLLFlBQVEsQ0FBQztBQUFFNVEsVUFBSSxFQUFFNFYsd0RBQVI7QUFBMkJwQyxhQUFPLEVBQUV2TixHQUFHLENBQUNJO0FBQXhDLEtBQUQsQ0FBUjtBQUNILEdBRkQsRUFFR2xILEtBRkgsQ0FFU2pELEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxLQUFSLENBQWMsU0FBZCxFQUF5QkYsR0FBekIsQ0FGaEI7QUFFK0M7QUFDbEQsQ0FkTTtBQWVBLE1BQU0yWixpQkFBaUIsR0FBRyxDQUFDRixNQUFELEVBQTBCRyxPQUExQixLQUE4QyxNQUFPbEYsUUFBUCxJQUE4QjtBQUN6RyxRQUFNd0IsSUFBSSxHQUFHLE1BQU0zQywrREFBcUIsQ0FBQ1EsZ0JBQXpDO0FBQ0EsUUFBTUksUUFBUSxHQUFHLE1BQU14Syx5REFBSyxDQUFFLCtDQUE4QzhQLE1BQU8sa0JBQXZELEVBQTBFO0FBQ2xHbE4sVUFBTSxFQUFFLE1BRDBGO0FBRWxHNkgsV0FBTyxFQUFFO0FBQ0wsc0JBQWdCLGtCQURYO0FBRUwscUNBQStCLEdBRjFCO0FBR0wsdUJBQWtCLEdBQUU4QixJQUFJLENBQUM4QyxVQUFXLElBQUc5QyxJQUFJLENBQUMrQyxLQUFNO0FBSDdDLEtBRnlGO0FBT2xHaFgsUUFBSSxFQUFFb1MsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRXNGO0FBQUYsS0FBZjtBQVA0RixHQUExRSxDQUE1QjtBQVNBLFFBQU1yRixPQUFPLEdBQUdKLFFBQVEsQ0FBQ2pLLElBQVQsRUFBaEI7QUFDQXFLLFNBQU8sQ0FBQzFTLElBQVIsQ0FBYWtJLEdBQUcsSUFBSTtBQUNoQjJLLFlBQVEsQ0FBQztBQUFFNVEsVUFBSSxFQUFFK1YsMERBQVI7QUFBNkJ2QyxhQUFPLEVBQUV2TixHQUFHLENBQUNJO0FBQTFDLEtBQUQsQ0FBUjtBQUNILEdBRkQsRUFFR2xILEtBRkgsQ0FFU2pELEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxLQUFSLENBQWMsU0FBZCxFQUF5QkYsR0FBekIsQ0FGaEI7QUFFK0M7QUFDbEQsQ0FmTTtBQWdCQSxNQUFNOFosV0FBVyxHQUFJQyxpQkFBRCxJQUE0QixNQUFPckYsUUFBUCxJQUE4QjtBQUNqRjtBQUNBLFFBQU1QLFFBQVEsR0FBRyxNQUFNeEsseURBQUssQ0FBRSw4Q0FBRixFQUFpRDtBQUN6RTRDLFVBQU0sRUFBRSxNQURpRTtBQUV6RTZILFdBQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLHFDQUErQjtBQUYxQixLQUZnRTtBQU16RW5TLFFBQUksRUFBRW9TLElBQUksQ0FBQ0MsU0FBTCxDQUFleUYsaUJBQWY7QUFObUUsR0FBakQsQ0FBNUI7QUFRQSxRQUFNeEYsT0FBTyxHQUFHSixRQUFRLENBQUNqSyxJQUFULEVBQWhCO0FBQ0EsU0FBT3FLLE9BQU8sQ0FBQzFTLElBQVIsQ0FBYWtJLEdBQUcsSUFBSTtBQUN2QjJLLFlBQVEsQ0FBQztBQUFFNVEsVUFBSSxFQUFFb1UsdURBQVI7QUFBMEJaLGFBQU8sRUFBRXZOLEdBQUcsQ0FBQ29PO0FBQXZDLEtBQUQsQ0FBUjtBQUNBekQsWUFBUSxDQUFDO0FBQUU1USxVQUFJLEVBQUVrVyxtREFBUjtBQUFzQjFDLGFBQU8sRUFBRXZOLEdBQUcsQ0FBQ0ksSUFBSixDQUFTQTtBQUF4QyxLQUFELENBQVI7QUFDSCxHQUhNLEVBR0psSCxLQUhJLENBR0VqRCxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFNBQWQsRUFBeUJGLEdBQXpCLENBSFQsQ0FBUDtBQUcrQztBQUNsRCxDQWZNO0FBZ0JBLE1BQU1pYSxVQUFVLEdBQUcsQ0FBQ1IsTUFBRCxFQUEwQi9TLE9BQTFCLEtBQThDLE1BQU9nTyxRQUFQLElBQThCO0FBQ2xHLFFBQU13QixJQUFJLEdBQUczQywrREFBcUIsQ0FBQ1EsZ0JBQW5DO0FBQ0EsU0FBTyxNQUFNcEsseURBQUssQ0FBRSx5Q0FBd0M4UCxNQUFPLGlCQUFqRCxFQUFtRTtBQUNqRmxOLFVBQU0sRUFBRSxNQUR5RTtBQUVqRjZILFdBQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLHFDQUErQixHQUYxQjtBQUdMLHVCQUFrQixHQUFFOEIsSUFBSSxDQUFDOEMsVUFBVyxJQUFHOUMsSUFBSSxDQUFDK0MsS0FBTTtBQUg3QyxLQUZ3RTtBQU9qRmhYLFFBQUksRUFBRW9TLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCNU4sYUFEaUI7QUFDUnVELFlBQU0sRUFBRTtBQURBLEtBQWY7QUFQMkUsR0FBbkUsQ0FBbEIsQ0FGa0csQ0FhbEc7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQWpCTTtBQWtCQSxNQUFNaVEsY0FBYyxHQUFJVCxNQUFELElBQTZCLE1BQU8vRSxRQUFQLElBQThCO0FBQ3JGLFFBQU13QixJQUFJLEdBQUczQywrREFBcUIsQ0FBQ1EsZ0JBQW5DO0FBQ0EsU0FBTyxNQUFNcEsseURBQUssQ0FBRSwrQ0FBOEM4UCxNQUFPLGdCQUF2RCxFQUF3RTtBQUN0RmxOLFVBQU0sRUFBRSxNQUQ4RTtBQUV0RjZILFdBQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLHFDQUErQixHQUYxQjtBQUdMLHVCQUFrQixHQUFFOEIsSUFBSSxDQUFDOEMsVUFBVyxJQUFHOUMsSUFBSSxDQUFDK0MsS0FBTTtBQUg3QyxLQUY2RTtBQU90RmhYLFFBQUksRUFBRW9TLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCNkYsaUJBQVcsRUFBRTtBQURJLEtBQWY7QUFQZ0YsR0FBeEUsQ0FBbEI7QUFXSCxDQWJNO0FBY0EsTUFBTUMsc0JBQXNCLEdBQUlYLE1BQUQsSUFBNkIsTUFBTy9FLFFBQVAsSUFBOEI7QUFDN0YsUUFBTXdCLElBQUksR0FBRzNDLCtEQUFxQixDQUFDUSxnQkFBbkM7QUFDQSxTQUFPLE1BQU1wSyx5REFBSyxDQUFFLCtDQUE4QzhQLE1BQU8seUJBQXZELEVBQWlGO0FBQy9GbE4sVUFBTSxFQUFFLEtBRHVGO0FBRS9GNkgsV0FBTyxFQUFFO0FBQ0wsc0JBQWdCLGtCQURYO0FBRUwscUNBQStCLEdBRjFCO0FBR0wsdUJBQWtCLEdBQUU4QixJQUFJLENBQUM4QyxVQUFXLElBQUc5QyxJQUFJLENBQUMrQyxLQUFNO0FBSDdDO0FBRnNGLEdBQWpGLENBQWxCO0FBUUgsQ0FWTTtBQVdBLE1BQU1vQixvQkFBb0IsR0FBRyxNQUFNLE1BQU8zRixRQUFQLElBQThCO0FBQ3BFLFFBQU13QixJQUFJLEdBQUczQywrREFBcUIsQ0FBQ1EsZ0JBQW5DO0FBQ0EsUUFBTUksUUFBUSxHQUFHLE1BQU14Syx5REFBSyxDQUFFLDZEQUFGLEVBQWdFO0FBQ3hGNEMsVUFBTSxFQUFFLEtBRGdGO0FBRXhGNkgsV0FBTyxFQUFFO0FBQ0wsc0JBQWdCLGtCQURYO0FBRUwscUNBQStCLEdBRjFCO0FBR0wsdUJBQWtCLEdBQUU4QixJQUFJLENBQUM4QyxVQUFXLElBQUc5QyxJQUFJLENBQUMrQyxLQUFNO0FBSDdDO0FBRitFLEdBQWhFLENBQTVCO0FBUUEsUUFBTTFFLE9BQU8sR0FBR0osUUFBUSxDQUFDakssSUFBVCxFQUFoQjtBQUNBLFNBQU9xSyxPQUFPLENBQUMxUyxJQUFSLENBQWFrSSxHQUFHLElBQUk7QUFDdkIsV0FBTzJLLFFBQVEsQ0FBQztBQUFFNVEsVUFBSSxFQUFFd1csb0RBQVI7QUFBdUJoRCxhQUFPLEVBQUV2TixHQUFHLENBQUNJO0FBQXBDLEtBQUQsQ0FBZjtBQUNILEdBRk0sRUFFSmxILEtBRkksQ0FFRWpELEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxLQUFSLENBQWMsU0FBZCxFQUF5QkYsR0FBekIsQ0FGVCxDQUFQO0FBR0gsQ0FkTTtBQWVBLE1BQU11YSxnQkFBZ0IsR0FBRyxNQUFNLE1BQU83RixRQUFQLElBQThCO0FBQ2hFLFFBQU13QixJQUFJLEdBQUczQywrREFBcUIsQ0FBQ1EsZ0JBQW5DO0FBQ0EsUUFBTUksUUFBUSxHQUFHLE1BQU14Syx5REFBSyxDQUFFLG9EQUFGLEVBQXVEO0FBQy9FNEMsVUFBTSxFQUFFLEtBRHVFO0FBRS9FNkgsV0FBTyxFQUFFO0FBQ0wsc0JBQWdCLGtCQURYO0FBRUwscUNBQStCLEdBRjFCO0FBR0wsdUJBQWtCLEdBQUU4QixJQUFJLENBQUM4QyxVQUFXLElBQUc5QyxJQUFJLENBQUMrQyxLQUFNO0FBSDdDO0FBRnNFLEdBQXZELENBQTVCO0FBUUEsUUFBTTFFLE9BQU8sR0FBR0osUUFBUSxDQUFDakssSUFBVCxFQUFoQjtBQUNBLFNBQU9xSyxPQUFPLENBQUMxUyxJQUFSLENBQWFrSSxHQUFHLElBQUk7QUFDdkIsV0FBTzJLLFFBQVEsQ0FBQztBQUFFNVEsVUFBSSxFQUFFd1csb0RBQVI7QUFBdUJoRCxhQUFPLEVBQUV2TixHQUFHLENBQUNJO0FBQXBDLEtBQUQsQ0FBZjtBQUNILEdBRk0sRUFFSmxILEtBRkksQ0FFRWpELEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxLQUFSLENBQWMsU0FBZCxFQUF5QkYsR0FBekIsQ0FGVCxDQUFQO0FBR0gsQ0FkTTtBQWVBLE1BQU13YSxZQUFZLEdBQUlDLE1BQUQsSUFBNkIsTUFBTy9GLFFBQVAsSUFBOEI7QUFDbkYsUUFBTXdCLElBQUksR0FBRzNDLCtEQUFxQixDQUFDUSxnQkFBbkM7QUFDQSxRQUFNSSxRQUFRLEdBQUcsTUFBTXhLLHlEQUFLLENBQUUsK0RBQThEOFEsTUFBTyxFQUF2RSxFQUEwRTtBQUNsR2xPLFVBQU0sRUFBRSxLQUQwRjtBQUVsRzZILFdBQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLHFDQUErQixHQUYxQjtBQUdMLHVCQUFrQixHQUFFOEIsSUFBSSxDQUFDOEMsVUFBVyxJQUFHOUMsSUFBSSxDQUFDK0MsS0FBTTtBQUg3QztBQUZ5RixHQUExRSxDQUE1QjtBQVFBLFFBQU0xRSxPQUFPLEdBQUdKLFFBQVEsQ0FBQ2pLLElBQVQsRUFBaEI7QUFDQSxTQUFPcUssT0FBTyxDQUFDMVMsSUFBUixDQUFha0ksR0FBRyxJQUFJO0FBQ3ZCLFdBQU8ySyxRQUFRLENBQUM7QUFBRTVRLFVBQUksRUFBRTRXLG9EQUFSO0FBQXVCcEQsYUFBTyxFQUFFdk4sR0FBRyxDQUFDSTtBQUFwQyxLQUFELENBQWY7QUFDSCxHQUZNLEVBRUpsSCxLQUZJLENBRUVqRCxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFNBQWQsRUFBeUJGLEdBQXpCLENBRlQsQ0FBUDtBQUdILENBZE07QUFlQSxNQUFNMmEsU0FBUyxHQUFJQyxRQUFELElBQXNCLE1BQU9sRyxRQUFQLElBQThCO0FBQ3pFLFNBQU9BLFFBQVEsQ0FBQztBQUFFNVEsUUFBSSxFQUFFK1csaURBQVI7QUFBb0J2RCxXQUFPLEVBQUVzRDtBQUE3QixHQUFELENBQWY7QUFDSCxDQUZNO0FBSUEsTUFBTS9GLFdBQVcsR0FBSThDLElBQUQsSUFBa0IsTUFBT2pELFFBQVAsSUFBOEI7QUFDdkVBLFVBQVEsQ0FBQztBQUFFNVEsUUFBSSxFQUFFZ1gsbURBQVI7QUFBc0J4RCxXQUFPLEVBQUVLO0FBQS9CLEdBQUQsQ0FBUjtBQUNBN0MsWUFBVSxDQUFDLE1BQU07QUFDYkosWUFBUSxDQUFDO0FBQUU1USxVQUFJLEVBQUVnWCxtREFBUjtBQUFzQnhELGFBQU8sRUFBRTtBQUEvQixLQUFELENBQVI7QUFDSCxHQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0gsQ0FMTSxDOzs7Ozs7Ozs7Ozs7QUN0UlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sTUFBTUQsZ0JBQWdCLEdBQUcsYUFBekI7QUFDQSxNQUFNMEQsZUFBZSxHQUFHLFlBQXhCO0FBQ0EsTUFBTS9DLGtCQUFrQixHQUFHLGVBQTNCLEMsQ0FFUDs7QUFDTyxNQUFNUixXQUFXLEdBQUcsaUJBQXBCO0FBQ0EsTUFBTUUsV0FBVyxHQUFHLGlCQUFwQjtBQUNBLE1BQU1FLFVBQVUsR0FBRyxnQkFBbkI7QUFDQSxNQUFNRSxVQUFVLEdBQUcsZ0JBQW5CO0FBQ0EsTUFBTU0sYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUYsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUksYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUUsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUssVUFBVSxHQUFHLFlBQW5CO0FBQ0EsTUFBTU0sbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUcsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTVosWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTWdCLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1HLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1HLFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1nQixXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNVixhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNSSxhQUFhLEdBQUcsbUJBQXRCO0FBQ0EsTUFBTUcsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGNBQXJCLEMsQ0FFUDs7QUFDTyxNQUFNRyxRQUFRLEdBQUcsbUJBQWpCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLHNCQUFwQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxzQkFBcEIsQyxDQUVQOztBQXVCQTtBQUNPLE1BQU1DLFlBQVksR0FBRyxtQkFBckI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsa0JBQXBCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsdUJBQXpCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcseUJBQTNCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLHNCQUF4QixDLENBRVA7O0FBQ08sTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCLEMsQ0FDUDtBQUNBO0FBQ0Esb0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUdBLE1BQU1DLFlBQVksR0FBRztBQUNuQkMsT0FBSyxFQUFFO0FBRFksQ0FBckI7QUFLTyxNQUFNQyxZQUFZLEdBQUcsQ0FBQ2pSLEtBQVUsR0FBRytRLFlBQWQsRUFBNEJHLE1BQTVCLEtBQTRDO0FBQ3RFLFVBQVFBLE1BQU0sQ0FBQ2pZLElBQWY7QUFDRSxTQUFLMlgsb0VBQUw7QUFDRSw2Q0FBWTVRLEtBQVo7QUFBbUJnUixhQUFLLEVBQUVFLE1BQU0sQ0FBQ3pFO0FBQWpDOztBQUVGLFNBQUtxRSxrRUFBTDtBQUNFLFlBQU1FLEtBQUssR0FBR2hSLEtBQUssQ0FBQ2dSLEtBQU4sQ0FBWW5PLE1BQVosQ0FBb0JxTCxJQUFELElBQWVBLElBQUksQ0FBQ00sRUFBTCxJQUFXMEMsTUFBTSxDQUFDekUsT0FBcEQsQ0FBZDtBQUNBLDZDQUFZek0sS0FBWjtBQUFtQmdSO0FBQW5COztBQUVGO0FBQ0UsYUFBT2hSLEtBQVA7QUFUSjtBQVdELENBWk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUlA7QUFzQkEsTUFBTStRLFlBQVksR0FBRztBQUNuQkksY0FBWSxFQUFFLEVBREs7QUFFbkJDLFNBQU8sRUFBRSxLQUZVO0FBR25CQyxPQUFLLEVBQUUsSUFIWTtBQUluQkMsWUFBVSxFQUFFLEVBSk87QUFLbkJDLE9BQUssRUFBRSxFQUxZO0FBTW5CQyxVQUFRLEVBQUUsRUFOUztBQU9uQkMsUUFBTSxFQUFFLEVBUFc7QUFRbkJDLFFBQU0sRUFBRSxFQVJXO0FBU25CQyxjQUFZLEVBQUUsRUFUSztBQVVuQkMsYUFBVyxFQUFFLEVBVk07QUFXbkJDLGNBQVksRUFBRSxFQVhLO0FBWW5CQyxjQUFZLEVBQUUsRUFaSztBQWFuQkMsV0FBUyxFQUFFLEVBYlE7QUFjbkJDLE1BQUksRUFBRSxFQWRhO0FBZW5CQyxNQUFJLEVBQUUsRUFmYTtBQWdCbkJDLGFBQVcsRUFBRSxDQWhCTTtBQWlCbkJDLFdBQVMsRUFBRSxFQWpCUTtBQWtCbkJDLFdBQVMsRUFBRSxFQWxCUTtBQW1CbkJuYixTQUFPLEVBQUU7QUFuQlUsQ0FBckI7QUFzQk8sTUFBTW9iLFVBQVUsR0FBRyxDQUFDclMsS0FBVSxHQUFHK1EsWUFBZCxFQUE0QkcsTUFBNUIsS0FBNEM7QUFDcEUsVUFBUUEsTUFBTSxDQUFDalksSUFBZjtBQUNFLFNBQUswVCwwREFBTDtBQUNFLDZDQUFZM00sS0FBWjtBQUFtQm9SLGVBQU8sRUFBRTtBQUE1Qjs7QUFFRixTQUFLbkIsMkRBQUw7QUFDRSw2Q0FBWWpRLEtBQVo7QUFBbUIvSSxlQUFPLEVBQUVpYSxNQUFNLENBQUN6RTtBQUFuQzs7QUFFRixTQUFLSSwwREFBTDtBQUNFLDZDQUFZN00sS0FBWjtBQUFtQm9SLGVBQU8sRUFBRTtBQUE1Qjs7QUFFRixTQUFLckUseURBQUw7QUFDRSw2Q0FBWS9NLEtBQVo7QUFBbUJxUixhQUFLLEVBQUVILE1BQU0sQ0FBQ3pFO0FBQWpDOztBQUVGLFNBQUtRLHlEQUFMO0FBQ0UsNkNBQVlqTixLQUFaO0FBQW1CcVIsYUFBSyxFQUFFO0FBQTFCOztBQUVGLFNBQUs5RCw0REFBTDtBQUNFLDZDQUFZdk4sS0FBWjtBQUFtQnVSLGFBQUssRUFBRUwsTUFBTSxDQUFDekU7QUFBakM7O0FBRUYsU0FBS3VELHlEQUFMO0FBQ0UsVUFBSXdCLFFBQVEsR0FBR3hSLEtBQUssQ0FBQ3VSLEtBQXJCOztBQUNBLFVBQUlMLE1BQU0sQ0FBQ3pFLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0IrRSxnQkFBUSxDQUFDYyxJQUFULENBQWMsQ0FBQ0MsQ0FBRCxFQUFTQyxDQUFULEtBQW9CO0FBQ2hDLGdCQUFNQyxLQUFLLEdBQUcsSUFBSUMsSUFBSixDQUFTSCxDQUFDLENBQUNJLFVBQUYsQ0FBYTNPLEtBQWIsQ0FBbUIsR0FBbkIsRUFBd0IsQ0FBeEIsRUFBMkJBLEtBQTNCLENBQWlDLEdBQWpDLEVBQXNDL0wsSUFBdEMsQ0FBMkMsR0FBM0MsQ0FBVCxDQUFkO0FBQ0EsZ0JBQU0yYSxLQUFLLEdBQUcsSUFBSUYsSUFBSixDQUFTRixDQUFDLENBQUNHLFVBQUYsQ0FBYTNPLEtBQWIsQ0FBbUIsR0FBbkIsRUFBd0IsQ0FBeEIsRUFBMkJBLEtBQTNCLENBQWlDLEdBQWpDLEVBQXNDL0wsSUFBdEMsQ0FBMkMsR0FBM0MsQ0FBVCxDQUFkOztBQUNBLGNBQUl3YSxLQUFLLENBQUNJLE9BQU4sS0FBa0JELEtBQUssQ0FBQ0MsT0FBTixFQUF0QixFQUF1QztBQUNyQyxtQkFBT04sQ0FBQyxHQUFHQyxDQUFYO0FBQ0QsV0FGRCxNQUVPLElBQUlDLEtBQUssQ0FBQ0ksT0FBTixLQUFrQkQsS0FBSyxDQUFDQyxPQUFOLEVBQXRCLEVBQXVDO0FBQzVDLG1CQUFPTCxDQUFDLEdBQUdELENBQVg7QUFDRCxXQUZNLE1BRUE7QUFDUixTQVJEO0FBU0Q7O0FBQ0QsNkNBQVl2UyxLQUFaO0FBQW1CdVIsYUFBSyxFQUFFQztBQUExQjs7QUFFRixTQUFLckMsMkRBQUw7QUFDRSw2Q0FBWW5QLEtBQVo7QUFBbUJ1UixhQUFLLEVBQUVMLE1BQU0sQ0FBQ3pFO0FBQWpDOztBQUVGLFNBQUtZLCtEQUFMO0FBQ0UsNkNBQVlyTixLQUFaO0FBQW1Ca1MsbUJBQVcsRUFBRWhCLE1BQU0sQ0FBQ3pFO0FBQXZDOztBQUVGLFNBQUtnQiw0REFBTDtBQUNFLDZDQUFZek4sS0FBWjtBQUFtQndSLGdCQUFRLEVBQUVOLE1BQU0sQ0FBQ3pFO0FBQXBDOztBQUVGLFNBQUtrQixpRUFBTDtBQUNFLDZDQUFZM04sS0FBWjtBQUFtQnlSLGNBQU0sRUFBRVAsTUFBTSxDQUFDekU7QUFBbEM7O0FBRUYsU0FBS3VCLHlEQUFMO0FBQ0UsNkNBQVloTyxLQUFaO0FBQW1CMFIsY0FBTSxFQUFFUixNQUFNLENBQUN6RTtBQUFsQzs7QUFFRixTQUFLb0QsNERBQUw7QUFDRSw2Q0FBWTdQLEtBQVo7QUFBbUJvUyxpQkFBUyxFQUFFbEIsTUFBTSxDQUFDekU7QUFBckM7O0FBRUYsU0FBS2dELDREQUFMO0FBQ0UsNkNBQVl6UCxLQUFaO0FBQW1CbVMsaUJBQVMsRUFBRWpCLE1BQU0sQ0FBQ3pFO0FBQXJDOztBQUVGLFNBQUs2QixrRUFBTDtBQUNFLDZDQUFZdE8sS0FBWjtBQUFtQjJSLG9CQUFZLEVBQUUsQ0FBQyxHQUFHM1IsS0FBSyxDQUFDMlIsWUFBVixFQUF3QlQsTUFBTSxDQUFDekUsT0FBL0I7QUFBakM7O0FBRUYsU0FBS2dDLGlFQUFMO0FBQ0UsNkNBQVl6TyxLQUFaO0FBQW1CMlIsb0JBQVksRUFBRVQsTUFBTSxDQUFDekU7QUFBeEM7O0FBRUYsU0FBS29DLGdFQUFMO0FBQ0UsNkNBQVk3TyxLQUFaO0FBQW1CbVIsb0JBQVksRUFBRUQsTUFBTSxDQUFDekU7QUFBeEM7O0FBRUYsU0FBS3VDLGtFQUFMO0FBQ0UsNkNBQVloUCxLQUFaO0FBQW1CbVIsb0JBQVksRUFBRSxDQUFDLEdBQUduUixLQUFLLENBQUNtUixZQUFWLEVBQXdCRCxNQUFNLENBQUN6RSxPQUEvQjtBQUFqQzs7QUFFRixTQUFLb0IsMkRBQUw7QUFDRSw2Q0FDSzdOLEtBREw7QUFFRXNSLGtCQUFVLEVBQUVKLE1BQU0sQ0FBQ3pFLE9BQVAsQ0FBZTZFLFVBRjdCO0FBR0VNLG1CQUFXLEVBQUVWLE1BQU0sQ0FBQ3pFLE9BQVAsQ0FBZW1GLFdBSDlCO0FBSUVDLG9CQUFZLEVBQUVYLE1BQU0sQ0FBQ3pFLE9BQVAsQ0FBZW9GLFlBSi9CO0FBS0VDLG9CQUFZLEVBQUVaLE1BQU0sQ0FBQ3pFLE9BQVAsQ0FBZXFGLFlBTC9CO0FBTUVDLGlCQUFTLEVBQUViLE1BQU0sQ0FBQ3pFLE9BQVAsQ0FBZXNGLFNBTjVCO0FBT0VDLFlBQUksRUFBRWQsTUFBTSxDQUFDekUsT0FBUCxDQUFldUYsSUFQdkI7QUFRRUMsWUFBSSxFQUFFZixNQUFNLENBQUN6RSxPQUFQLENBQWV3RjtBQVJ2Qjs7QUFXRjtBQUFTLGFBQU9qUyxLQUFQO0FBL0VYO0FBaUZELENBbEZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDUDtBQUVBLE1BQU0rUSxZQUFZLEdBQUc7QUFDbkIrQixlQUFhLEVBQUU7QUFESSxDQUFyQjtBQUlPLE1BQU1DLGVBQWUsR0FBRyxDQUFDL1MsS0FBSyxHQUFHK1EsWUFBVCxFQUF1QkcsTUFBdkIsS0FBdUM7QUFDcEUsVUFBUUEsTUFBTSxDQUFDalksSUFBZjtBQUNFLFNBQUttWCx1REFBTDtBQUNFLDZDQUFZcFEsS0FBWjtBQUFtQjhTLHFCQUFhLEVBQUU5UyxLQUFLLENBQUM4UyxhQUFOLENBQW9CRSxNQUFwQixDQUEyQjlCLE1BQU0sQ0FBQ3pFLE9BQWxDO0FBQWxDOztBQUVGLFNBQUs0RCwwREFBTDtBQUNFLDZDQUFZclEsS0FBWjtBQUFtQjhTLHFCQUFhLEVBQUU1QixNQUFNLENBQUN6RTtBQUF6Qzs7QUFFRixTQUFLNkQsMERBQUw7QUFDRSw2Q0FBWXRRLEtBQVo7QUFBbUI4UyxxQkFBYSxFQUFFNUIsTUFBTSxDQUFDekU7QUFBekM7O0FBRUY7QUFDRSxhQUFPek0sS0FBUDtBQVhKO0FBYUQsQ0FkTSxDOzs7Ozs7Ozs7Ozs7QUNOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTWlULFdBQVcsR0FBR0MsNkRBQWUsQ0FBQztBQUNoQ0MsV0FBUyxFQUFFQyx3REFEcUI7QUFFaENDLEtBQUcsRUFBRWhCLHNEQUYyQjtBQUdoQ2lCLFVBQVEsRUFBRVAsZ0VBSHNCO0FBSWhDMUgsTUFBSSxFQUFFa0ksd0RBSjBCO0FBS2hDQyxPQUFLLEVBQUV2QywwREFBWUE7QUFMYSxDQUFELENBQW5DO0FBUWVnQywwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVBLE1BQU1sQyxZQUFZLEdBQUc7QUFDbkJRLE9BQUssRUFBRSxFQURZO0FBRW5Ca0MsY0FBWSxFQUFFO0FBRkssQ0FBckI7QUFLTyxNQUFNTCxXQUFXLEdBQUcsQ0FBQ3BULEtBQUssR0FBRytRLFlBQVQsRUFBdUJHLE1BQXZCLEtBQXVDO0FBQ2hFLFVBQVFBLE1BQU0sQ0FBQ2pZLElBQWY7QUFDRSxTQUFLdVQsK0RBQUw7QUFDRSw2Q0FBWXhNLEtBQVo7QUFBbUJ1UixhQUFLLEVBQUV2UixLQUFLLENBQUN1UixLQUFOLENBQVl5QixNQUFaLENBQW1COUIsTUFBTSxDQUFDekUsT0FBMUI7QUFBMUI7O0FBRUYsU0FBS3lELDhEQUFMO0FBQ0UsNkNBQVlsUSxLQUFaO0FBQW1CeVQsb0JBQVksRUFBRXZDLE1BQU0sQ0FBQ3pFO0FBQXhDOztBQUVGO0FBQ0UsYUFBT3pNLEtBQVA7QUFSSjtBQVVELENBWE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUFA7QUFFQSxNQUFNK1EsWUFBWSxHQUFHO0FBQ25CUSxPQUFLLEVBQUU7QUFEWSxDQUFyQjtBQUlPLE1BQU1nQyxXQUFXLEdBQUcsQ0FBQ3ZULEtBQUssR0FBRytRLFlBQVQsRUFBdUJHLE1BQXZCLEtBQXVDO0FBQ2hFLFVBQVFBLE1BQU0sQ0FBQ2pZLElBQWY7QUFFRSxTQUFLc1gsMkRBQUw7QUFDRSw2Q0FBWXZRLEtBQVo7QUFBbUJ1UixhQUFLLEVBQUVMLE1BQU0sQ0FBQ3pFO0FBQWpDOztBQUVGLFNBQUsrRCwwREFBTDtBQUNFLDZDQUFZeFEsS0FBWjtBQUFtQnVSLGFBQUssRUFBRUwsTUFBTSxDQUFDekU7QUFBakM7O0FBRUYsU0FBS2dFLCtEQUFMO0FBQ0UsNkNBQVl6USxLQUFaO0FBQW1CdVIsYUFBSyxFQUFFTCxNQUFNLENBQUN6RTtBQUFqQzs7QUFFRixTQUFLaUUsaUVBQUw7QUFDRSw2Q0FBWTFRLEtBQVo7QUFBbUJ1UixhQUFLLEVBQUVMLE1BQU0sQ0FBQ3pFO0FBQWpDOztBQUVGLFNBQUtrRSw4REFBTDtBQUNFLDZDQUFZM1EsS0FBWjtBQUFtQnVSLGFBQUssRUFBRUwsTUFBTSxDQUFDekU7QUFBakM7O0FBRUY7QUFDRSxhQUFPek0sS0FBUDtBQWxCSjtBQW9CRCxDQXJCTSxDOzs7Ozs7Ozs7Ozs7QUNOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNMFQsY0FBYyxHQUFHLEVBQXZCO0FBRUEsTUFBTTlKLEtBQVUsR0FBRytKLHlEQUFXLENBQzVCViw2REFENEIsRUFFNUJTLGNBRjRCLEVBRzVCRSw2REFBZSxDQUNiQyxrREFEYSxDQUhhLENBQTlCO0FBUUFqSyxLQUFLLENBQUNrSyxTQUFOLENBQWdCLE1BQU07QUFDcEIxZSxTQUFPLENBQUNpWixHQUFSLENBQVksaUJBQVosRUFBK0J6RSxLQUFLLENBQUNtSyxRQUFOLEVBQS9CO0FBQ0QsQ0FGRDtBQUllbkssb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5Db250YWluZXI9Q29udGFpbmVyO2V4cG9ydHMuY3JlYXRlVXJsPWNyZWF0ZVVybDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzOy8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoX3JlZil7dmFye0NvbXBvbmVudCxjdHh9PV9yZWY7dmFyIHBhZ2VQcm9wcz1hd2FpdCgwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShDb21wb25lbnQsY3R4KTtyZXR1cm57cGFnZVByb3BzfTt9Y2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50ey8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4vLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsX2Vycm9ySW5mbyl7dGhyb3cgZXJyb3I7fXJlbmRlcigpe3Zhcntyb3V0ZXIsQ29tcG9uZW50LHBhZ2VQcm9wcyxfX05fU1NHLF9fTl9TU1B9PXRoaXMucHJvcHM7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe30scGFnZVByb3BzLC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiEoX19OX1NTR3x8X19OX1NTUCk/e3VybDpjcmVhdGVVcmwocm91dGVyKX06e30pKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO3ZhciB3YXJuQ29udGFpbmVyO3ZhciB3YXJuVXJsO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt3YXJuQ29udGFpbmVyPSgwLF91dGlscy5leGVjT25jZSkoKCk9Pntjb25zb2xlLndhcm4oXCJXYXJuaW5nOiB0aGUgYENvbnRhaW5lcmAgaW4gYF9hcHBgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkXCIpO30pO3dhcm5Vcmw9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUuZXJyb3IoXCJXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3VybC1kZXByZWNhdGVkXCIpO30pO30vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZnVuY3Rpb24gQ29udGFpbmVyKHApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5Db250YWluZXIoKTtyZXR1cm4gcC5jaGlsZHJlbjt9ZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcil7Ly8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbnZhcntwYXRobmFtZSxhc1BhdGgscXVlcnl9PXJvdXRlcjtyZXR1cm57Z2V0IHF1ZXJ5KCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBxdWVyeTt9LGdldCBwYXRobmFtZSgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcGF0aG5hbWU7fSxnZXQgYXNQYXRoKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBhc1BhdGg7fSxiYWNrOigpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JvdXRlci5iYWNrKCk7fSxwdXNoOih1cmwsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiByb3V0ZXIucHVzaCh1cmwsYXMpO30scHVzaFRvOihocmVmLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTt2YXIgcHVzaFJvdXRlPWFzP2hyZWY6Jyc7dmFyIHB1c2hVcmw9YXN8fGhyZWY7cmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSxwdXNoVXJsKTt9LHJlcGxhY2U6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCxhcyk7fSxyZXBsYWNlVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciByZXBsYWNlUm91dGU9YXM/aHJlZjonJzt2YXIgcmVwbGFjZVVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLHJlcGxhY2VVcmwpO319O30iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7c2hvd0FsZXJ0LCBzaG93U3VjY2Vzc30gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvYWN0aW9uc1wiO1xuXG5sZXQgY3VycmVudFVzZXJTdWJqZWN0ID0gQ29va2llcy5nZXRKU09OKFwiY3VycmVudFVzZXJcIilcbiAgICA/IENvb2tpZXMuZ2V0SlNPTihcImN1cnJlbnRVc2VyXCIpXG4gICAgOiB7fTtcblxuY29uc3QgdGFyZ2V0ID0gYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGlgO1xuXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRpb25TZXJ2aWNlID0ge1xuICAgIGxvZ2luLFxuICAgIGxvZ291dCxcbiAgICByZWdpc3RyYXRpb25BZG1pbixcbiAgICByZWdpc3RyYXRpb25DbGllbnQsXG4gICAgcmVnaXN0cmF0aW9uUHJvdmlkZXIsXG4gICAgcmVnaXN0cmF0aW9uQWdlbmN5LFxuICAgIGN1cnJlbnRVc2VyOiBjdXJyZW50VXNlclN1YmplY3QsXG4gICAgZ2V0IGN1cnJlbnRVc2VyVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50VXNlclN1YmplY3Q7XG4gICAgfSxcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIENvb2tpZXMucmVtb3ZlKFwiY3VycmVudFVzZXJcIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2xvZ2luYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7ZW1haWwsIHBhc3N3b3JkfSksXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIENvb2tpZXMuc2V0KFwiY3VycmVudFVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtleHBpcmVzOiAxfSk7XG4gICAgICAgICAgICBjdXJyZW50VXNlclN1YmplY3QgPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLnRoZW4oKCkgPT4gUm91dGVyLnB1c2goJy8nKSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHN0b3JlLmRpc3BhdGNoKHNob3dBbGVydChkYXRhLm1lc3NhZ2UpKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0cmF0aW9uQ2xpZW50KFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBwYXNzd29yZDogc3RyaW5nLFxuICAgIGVtYWlsOiBzdHJpbmcsXG4gICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBzdHJpbmdcbik6IFByb21pc2U8YW55PiB7XG4gICAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2NsaWVudC9yZWdpc3RlcmAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb24sXG4gICAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goc2hvd1N1Y2Nlc3MoZGF0YS5tZXNzYWdlKSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpLCAzMDAwKVxuICAgICAgICB9KS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2VcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gc3RvcmUuZGlzcGF0Y2goc2hvd0FsZXJ0KGRhdGEubWVzc2FnZSkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWdpc3RyYXRpb25BZG1pbihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZyxcbiAgICBlbWFpbDogc3RyaW5nLFxuICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogc3RyaW5nXG4pOiBQcm9taXNlPGFueT4ge1xuICAgIENvb2tpZXMucmVtb3ZlKFwiY3VycmVudFVzZXJcIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2FkbWluL3JlZ2lzdGVyYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzaG93U3VjY2VzcyhkYXRhLm1lc3NhZ2UpKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCksIDMwMDApXG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBzdG9yZS5kaXNwYXRjaChzaG93QWxlcnQoZGF0YS5tZXNzYWdlKSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvblByb3ZpZGVyKFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBwYXNzd29yZDogc3RyaW5nLFxuICAgIGVtYWlsOiBzdHJpbmcsXG4gICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBzdHJpbmcsXG4gICAgcGhvbmU6IHN0cmluZyB8IG51bWJlclxuKTogUHJvbWlzZTxhbnk+IHtcbiAgICBDb29raWVzLnJlbW92ZShcImN1cnJlbnRVc2VyXCIpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9pbmRpdmlkdWFsL3JlZ2lzdGVyYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgICAgIHBob25lXG4gICAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goc2hvd1N1Y2Nlc3MoZGF0YS5tZXNzYWdlKSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpLCAzMDAwKVxuICAgICAgICB9KS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2VcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gc3RvcmUuZGlzcGF0Y2goc2hvd0FsZXJ0KGRhdGEubWVzc2FnZSkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWdpc3RyYXRpb25BZ2VuY3koXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHBhc3N3b3JkOiBzdHJpbmcsXG4gICAgZW1haWw6IHN0cmluZyxcbiAgICBwYXNzd29yZF9jb25maXJtYXRpb246IHN0cmluZyxcbiAgICBwaG9uZTogc3RyaW5nIHwgbnVtYmVyLFxuICAgIGFnZW5jeV9uYW1lOiBzdHJpbmdcbik6IFByb21pc2U8YW55PiB7XG4gICAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RhcmdldH0vYWdlbmN5L3JlZ2lzdGVyYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgICAgIHBob25lLFxuICAgICAgICAgICAgYWdlbmN5X25hbWVcbiAgICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzaG93U3VjY2VzcyhkYXRhLm1lc3NhZ2UpKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCksIDMwMDApXG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBzdG9yZS5kaXNwYXRjaChzaG93QWxlcnQoZGF0YS5tZXNzYWdlKSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIENvb2tpZXMucmVtb3ZlKFwiY3VycmVudFVzZXJcIik7XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKGAke3RhcmdldH0vbG9nb3V0YCwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4gUm91dGVyLnB1c2goJy9sb2dpbicpKVxuICAgICAgICAudGhlbigoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaGVhZGVyLTI0YzMxMjNiZTM4MGNlMTYzY2Q0MzQ3MTA3NzJhNDVjLnBuZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzIGZyb20gXCIuL2hlYWRlci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkZXJCZyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIvaGVhZGVyLnBuZ1wiO1xuaW1wb3J0IE5hdkNvbXBvbmVudCBmcm9tIFwiLi9OYXZcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhlYWRlcn0+XG4gICAgICA8TmF2Q29tcG9uZW50IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5oZWFkZXJfaW1hZ2VfYmxvY2t9PlxuICAgICAgICA8aW1nIHNyYz17SGVhZGVyQmd9IGFsdD1cIlZpYmUgQ2l0eVwiIGNsYXNzTmFtZT1cInctMTAwXCIgLz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7cy5oZWFkZXJfdGl0bGV9IHRleHQtd2hpdGVgfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgVklCRSA8YnIgLz4gQ0lUWVxuICAgICAgICAgIDwvYT48L0xpbms+XG4gICAgICAgIDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUHJvZ3Jlc3NcIjtcbiAgICAgICAgICBzcmM6IHVybChcIi9zcmMvYXNzZXRzL2ZvbnRzL3Byb2dyZXNzLm90ZlwiKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcyBmcm9tICcuL2hlYWRlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgYXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vX3NlcnZpY2VzJztcbmltcG9ydCB7XG4gIENvbGxhcHNlLFxuICBOYXZiYXIsXG4gIE5hdmJhclRvZ2dsZXIsXG4gIE5hdmJhckJyYW5kLFxuICBOYXYsXG4gIE5hdkl0ZW0sXG4gIE5hdkxpbmtcbn0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmNvbnN0IE5hdkNvbXBvbmVudCA9IHByb3BzID0+IHtcbiAgY29uc3QgW2FjdGl2ZUxpbmssIHNldEFjdGl2ZUxpbmtdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZS51c2VyKSB7XG4gICAgICBzZXRSb2xlKGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlLnVzZXIucm9sZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICBtYXhXaWR0aDogJzEyNjBweCcsIG1hcmdpbjogJzAgYXV0bydcbiAgICB9fT5cbiAgICAgIDxOYXZiYXIgY29sb3I9XCJkYXJrXCIgZGFyayBleHBhbmQ9XCJsZ1wiPlxuICAgICAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XG4gICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIG5hdmJhcj5cbiAgICAgICAgICAgIHsocm9sZSA9PT0gJ2luZGl2aWR1YWwnIHx8IHJvbGUgPT09ICdhZ2VuY3knKSA/IDxOYXZJdGVtPlxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL21vZGVsQ2FiaW5ldFwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUxpbmsoJ21vZGVsIGNhYmluZXQnKX0gY2xhc3NOYW1lPXthY3RpdmVMaW5rID09PSAnbW9kZWwgY2FiaW5ldCcgPyBzLmFjdGl2ZUxpbmsgOiBudWxsfT5Nb2RlbCBDYWJpbmV0PC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9OYXZJdGVtPiA6IG51bGx9XG4gICAgICAgICAgICB7cm9sZSA9PT0gJ2NsaWVudCcgPyA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi91c2VyQ2FiaW5ldFwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUxpbmsoJ3VzZXIgY2FiaW5ldCcpfSBjbGFzc05hbWU9e2FjdGl2ZUxpbmsgPT09ICd1c2VyIGNhYmluZXQnID8gcy5hY3RpdmVMaW5rIDogbnVsbH0+VXNlciBDYWJpbmV0PC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9OYXZJdGVtPiA6IG51bGx9XG4gICAgICAgICAgICB7KHJvbGUgPT09ICdpbmRpdmlkdWFsJyB8fCByb2xlID09PSAnYWdlbmN5JykgPyA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9hZGRQb3N0XCIgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTGluaygnYWRkIHBvc3QnKX0gY2xhc3NOYW1lPXthY3RpdmVMaW5rID09PSAnYWRkIHBvc3QnID8gcy5hY3RpdmVMaW5rIDogbnVsbH0+QWRkIFBvc3Q8L05hdkxpbms+XG4gICAgICAgICAgICA8L05hdkl0ZW0+IDogbnVsbH1cbiAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2xvZ2luXCIgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTGluaygnbG9naW4nKX0gY2xhc3NOYW1lPXthY3RpdmVMaW5rID09PSAnbG9naW4nID8gcy5hY3RpdmVMaW5rIDogbnVsbH0+TG9naW48L05hdkxpbms+XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICB7KHJvbGUgPT09ICdhZG1pbicgfHwgcm9sZSA9PT0gJ2luZGl2aWR1YWwnIHx8IHJvbGUgPT09ICdjbGllbnQnIHx8IHJvbGUgPT09ICdhZ2VuY3knKSA/IDxOYXZJdGVtPlxuICAgICAgICAgICAgICA8TmF2TGluayBvbkNsaWNrPXsoKSA9PiBhdXRoZW50aWNhdGlvblNlcnZpY2UubG9nb3V0KCl9ID5Mb2dvdXQ8L05hdkxpbms+XG4gICAgICAgICAgICA8L05hdkl0ZW0+IDogbnVsbH1cbiAgICAgICAgICAgIHtyb2xlID09PSAnYWRtaW4nID8gPE5hdkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvYWRtaW5cIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVMaW5rKCdhZG1pbicpfSBjbGFzc05hbWU9e2FjdGl2ZUxpbmsgPT09ICdhZG1pbicgPyBzLmFjdGl2ZUxpbmsgOiBudWxsfT5BZG1pbjwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvTmF2SXRlbT4gOiBudWxsfVxuICAgICAgICAgICAgey8qPE5hdkl0ZW0+Ki99XG4gICAgICAgICAgICB7LyogIDxOYXZMaW5rIGhyZWY9XCIvdGVzdFwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUxpbmsoJ3Rlc3QnKX0gY2xhc3NOYW1lPXthY3RpdmVMaW5rID09PSAndGVzdCcgPyBzLmFjdGl2ZUxpbmsgOiBudWxsfT5URVNUPC9OYXZMaW5rPiovfVxuICAgICAgICAgICAgey8qPC9OYXZJdGVtPiovfVxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgPC9OYXZiYXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTmF2Q29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IENvbXBvbmVudCwgY3R4IH0pID0+IHtcbiAgcmV0dXJuIHt9XG59XG5cblxuTmF2Q29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgbGlnaHQ6IFByb3BUeXBlcy5ib29sLFxuICBkYXJrOiBQcm9wVHlwZXMuYm9vbCxcbiAgZml4ZWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleHBhbmQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHRhZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zdHJpbmddKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZDb21wb25lbnQ7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJoZWFkZXJfaGVhZGVyX18ycExpWFwiLFxuXHRcImhlYWRlcl9pbWFnZV9ibG9ja1wiOiBcImhlYWRlcl9oZWFkZXJfaW1hZ2VfYmxvY2tfXzE4QWNVXCIsXG5cdFwiaGVhZGVyX3RpdGxlXCI6IFwiaGVhZGVyX2hlYWRlcl90aXRsZV9fMjBFbUFcIlxufTtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgcyBmcm9tICcuL2xheW91dC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+ICg8PlxuICA8ZGl2IGNsYXNzTmFtZT17cy5sYXlvdXR9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxheW91dF9jb250ZW50fT5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzLmxheW91dF9tYWluX2Jsb2NrfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvPik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxheW91dFwiOiBcImxheW91dF9sYXlvdXRfX1UwWDdQXCIsXG5cdFwibGF5b3V0X2NvbnRlbnRcIjogXCJsYXlvdXRfbGF5b3V0X2NvbnRlbnRfX0ZZNXU1XCIsXG5cdFwibGF5b3V0X21haW5fYmxvY2tcIjogXCJsYXlvdXRfbGF5b3V0X21haW5fYmxvY2tfXzFLMnVZXCJcbn07XG4iLCJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcbmltcG9ydCAgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xuXG5cbmNsYXNzIEN1c3RvbUFwcCBleHRlbmRzIEFwcCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IHBhZ2VQcm9wcyA9IHByb3BzLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBwcm9wcy5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKHByb3BzLmN0eCkgOiB7fTtcbiAgICByZXR1cm4ge1xuICAgICAgcGFnZVByb3BzOiBwYWdlUHJvcHNcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9J1gtVUEtQ29tcGF0aWJsZScgY29udGVudD0nSUU9ZWRnZScgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSxtaW5pbXVtLXNjYWxlPTEsbWF4aW11bS1zY2FsZT0xLHVzZXItc2NhbGFibGU9bm8nIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0Rlc2NyaXB0aW9uJyAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9J2tleXdvcmRzJyBjb250ZW50PSdLZXl3b3JkcycgLz5cbiAgICAgICAgICA8dGl0bGU+TmV4dC5qcyBQV0EgRXhhbXBsZTwvdGl0bGU+XG5cbiAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiIC8+XG4gICAgICAgICAgPGxpbmsgaHJlZj0nL2Zhdmljb24tMTZ4MTYucG5nJyByZWw9J2ljb24nIHR5cGU9J2ltYWdlL3BuZycgc2l6ZXM9JzE2eDE2JyAvPlxuICAgICAgICAgIDxsaW5rIGhyZWY9Jy9mYXZpY29uLTMyeDMyLnBuZycgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPSczMngzMicgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi9hcHBsZS1pY29uLnBuZ1wiPjwvbGluaz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzMxN0VGQlwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbi8vbWFrZVN0b3JlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG5ldyBzdG9yZSBmb3IgZXZlcnkgcmVxdWVzdFxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gc3RvcmU7XG5cbi8vd2l0aFJlZHV4IHdyYXBwZXIgdGhhdCBwYXNzZXMgdGhlIHN0b3JlIHRvIHRoZSBBcHAgQ29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgobWFrZVN0b3JlKShDdXN0b21BcHApO1xuXG5cbiIsImltcG9ydCB7XG4gICAgVEVTVF9DUkVBVEVfUE9TVCxcbiAgICBTSE9XX0xPQURFUixcbiAgICBISURFX0xPQURFUixcbiAgICBTSE9XX0FMRVJULFxuICAgIEhJREVfQUxFUlQsXG4gICAgVEVTVF9SRVFVRVNUX1BPU1RTLFxuICAgIEdFVF9BTExfUE9TVFMsXG4gICAgR0VUX0xPQ0FJVE9OU19JTkZPLFxuICAgIEdFVF9DSVRJRVMsXG4gICAgQ1JFQVRFX1NVUFBPUlRfVEFTSyxcbiAgICBHRVRfQUxMX1VTRVJfVEFTS1MsXG4gICAgR0VUX0FQUF9JTkZPLFxuICAgIEdFVF9ORVdfUE9TVFMsXG4gICAgR0VUX1BBR0VTX05VTUJFUixcbiAgICBHRVRfUE9TVF9DT01NRU5UUyxcbiAgICBDUkVBVEVfUE9TVF9DT01NRU5ULFxuICAgIEZJTFRFUl9QT1NUUyxcbiAgICBHRVRfRkFWT1JJVEVTLFxuICAgIEdFVF9DT01QTEFJTlMsXG4gICAgU09SVF9QT1NUUyxcbiAgICBTSE9XX1NVQ0NFU1Ncbn0gZnJvbSBcIi4vdHlwZXNcIlxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBhdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vX3NlcnZpY2VzXCI7XG5cbi8vIFQgRSBTIFQgXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUG9zdChwb3N0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFRFU1RfQ1JFQVRFX1BPU1QsXG4gICAgICAgIHBheWxvYWQ6IHBvc3RcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dMb2FkZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogU0hPV19MT0FERVJcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaGlkZUxvYWRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBISURFX0xPQURFUlxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWxlcnQodGV4dDogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBTSE9XX0FMRVJULFxuICAgICAgICAgICAgcGF5bG9hZDogdGV4dFxuICAgICAgICB9KVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGhpZGVBbGVydCgpKVxuICAgICAgICB9LCAzMDAwKVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQWxlcnQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogSElERV9BTEVSVFxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvc3RzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVEVTVF9SRVFVRVNUX1BPU1RTXG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBnZXRBbGxQb3N0cyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzYCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfUEFHRVNfTlVNQkVSLCBwYXlsb2FkOiByZXMubGFzdF9wYWdlIH0pO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9BTExfUE9TVFMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XG59XG5leHBvcnQgY29uc3QgZ2V0TmV3UG9zdHMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cy9hbGwvbmV3YCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX05FV19QT1NUUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbnNJbmZvID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvbG9jYXRpb25gKTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfTE9DQUlUT05TX0lORk8sIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XG59XG5leHBvcnQgY29uc3QgZ2V0QXBwSW5mbyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2luZm9gKTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfQVBQX0lORk8sIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XG59XG5leHBvcnQgY29uc3QgZ2V0Q2l0aWVzID0gKHN0YXRlSWQ6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2xvY2F0aW9uL2NpdGllcy8ke3N0YXRlSWR9YCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0NJVElFUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBjcmVhdGVTdXBwb3J0VGFzayA9ICh0YXNrOiBhbnkpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9zdXBwb3J0L2NyZWF0ZWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhc2spXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xuICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IENSRUFURV9TVVBQT1JUX1RBU0ssIHBheWxvYWQ6IHRhc2sgfSlcbn1cbmV4cG9ydCBjb25zdCBnZXRBbGxVc2Vyc1Rhc2tzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3N1cHBvcnQvJHt1c2VyLnVzZXIuaWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0FMTF9VU0VSX1RBU0tTLCBwYXlsb2FkOiByZXMgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBzZWxlY3RQb3N0c1BhZ2UgPSAocGFnZTogbnVtYmVyIHwgc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cz9wYWdlPSR7cGFnZX1gKTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9QQUdFU19OVU1CRVIsIHBheWxvYWQ6IHJlcy5sYXN0X3BhZ2UgfSk7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX0FMTF9QT1NUUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBnZXRQb3N0Q29tbWVudHMgPSAocG9zdElkOiBudW1iZXIgfCBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cy8ke3Bvc3RJZH0vY29tbWVudHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9QT1NUX0NPTU1FTlRTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpOztcbn1cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0Q29tbWVudCA9IChwb3N0SWQ6IG51bWJlciB8IHN0cmluZywgY29tbWVudDogc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvJHtwb3N0SWR9L2NvbW1lbnRzL2NyZWF0ZWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29tbWVudCB9KVxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQ1JFQVRFX1BPU1RfQ09NTUVOVCwgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTs7XG59XG5leHBvcnQgY29uc3QgZmlsdGVyUG9zdHMgPSAoZmlsdGVySXRlbXNPYmplY3Q6IGFueSkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIC8vIGZyb20sIHRvLCBnZW5kZXIsIGV0aG5pY2l0eV9pZCwgaGFpcl9pZCwgZXllX2lkLCBjYXRlZ29yeV9pZCwgYWZmaWxpYXRpb25faWQsIGF2YWlsYWJpbGl0eV9pZHMoYXJyYXkpLCBhdmFpbGFibGV0b19pZHMoYXJyYXkpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9maWx0ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmaWx0ZXJJdGVtc09iamVjdClcbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfUEFHRVNfTlVNQkVSLCBwYXlsb2FkOiByZXMubGFzdF9wYWdlIH0pO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEZJTFRFUl9QT1NUUywgcGF5bG9hZDogcmVzLmRhdGEuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpOztcbn1cbmV4cG9ydCBjb25zdCByZXBvcnRQb3N0ID0gKHBvc3RJZDogbnVtYmVyIHwgc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpLyR7cG9zdElkfS9jb21wbGFpbnRzL2FkZGAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1lc3NhZ2UsIHN0YXR1czogJ0luIHByb2dyZXNzJ1xuICAgICAgICB9KVxuICAgIH0pO1xuICAgIC8vIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gcmV0dXJuIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgIC8vICAgICBkaXNwYXRjaCh7IHR5cGU6IFJFUE9SVF9QT1NUIH0pO1xuICAgIC8vIH0pO1xufVxuZXhwb3J0IGNvbnN0IGFkZFRvRmF2b3JpdGVzID0gKHBvc3RJZDogbnVtYmVyIHwgc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xuICAgIHJldHVybiBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cy8ke3Bvc3RJZH0vZmF2b3JpdGVzL2FkZGAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGlzX2Zhdm9yaXRlOiB0cnVlXG4gICAgICAgIH0pXG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgYWRkVG9GYXZvcml0ZXNCdXNpbmVzcyA9IChwb3N0SWQ6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvJHtwb3N0SWR9L2Zhdm9yaXRlc19idXNpbmVzcy9hZGRgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZXNCdXNpbmVzcyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9mYXZvcml0ZXNfYnVzaW5lc3MvbXlgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0ZBVk9SSVRFUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZXNVc2VyID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2Zhdm9yaXRlcy9teWAsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfRkFWT1JJVEVTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xufVxuZXhwb3J0IGNvbnN0IGdldENvbXBsYWlucyA9ICh1c2VySWQ6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzL2NvbXBsYWludHMvdXNlci8ke3VzZXJJZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0NPTVBMQUlOUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBzb3J0UG9zdHMgPSAoc29ydFR5cGU6IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IFNPUlRfUE9TVFMsIHBheWxvYWQ6IHNvcnRUeXBlIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzaG93U3VjY2VzcyA9ICh0ZXh0OiBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFNIT1dfU1VDQ0VTUywgcGF5bG9hZDogdGV4dCB9KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFNIT1dfU1VDQ0VTUywgcGF5bG9hZDogbnVsbCB9KVxuICAgIH0sIDMwMDApXG59XG4iLCIvLyB0ZXN0XG5leHBvcnQgY29uc3QgVEVTVF9DUkVBVEVfUE9TVCA9ICdDUkVBVEVfUE9TVCc7XG5leHBvcnQgY29uc3QgVEVTVF9GRVRDSF9QT1NUID0gJ0ZFVENIX1BPU1QnO1xuZXhwb3J0IGNvbnN0IFRFU1RfUkVRVUVTVF9QT1NUUyA9ICdSRVFVRVNUX1BPU1RTJztcblxuLy8gYXBwXG5leHBvcnQgY29uc3QgU0hPV19MT0FERVIgPSAnQVBQL1NIT1dfTE9BREVSJztcbmV4cG9ydCBjb25zdCBISURFX0xPQURFUiA9ICdBUFAvSElERV9MT0FERVInO1xuZXhwb3J0IGNvbnN0IFNIT1dfQUxFUlQgPSAnQVBQL1NIT1dfQUxFUlQnO1xuZXhwb3J0IGNvbnN0IEhJREVfQUxFUlQgPSAnQVBQL0hJREVfQUxFUlQnOyBcbmV4cG9ydCBjb25zdCBHRVRfQUxMX1BPU1RTID0gJ0dFVF9BTExfUE9TVFMnO1xuZXhwb3J0IGNvbnN0IEdFVF9QQUdFU19OVU1CRVIgPSAnR0VUX1BBR0VTX05VTUJFUic7XG5leHBvcnQgY29uc3QgR0VUX05FV19QT1NUUyA9ICdHRVRfTkVXX1BPU1RTJztcbmV4cG9ydCBjb25zdCBHRVRfTE9DQUlUT05TX0lORk8gPSAnR0VUX0xPQ0FJVE9OU19JTkZPJztcbmV4cG9ydCBjb25zdCBHRVRfQ0lUSUVTID0gJ0dFVF9DSVRJRVMnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9TVVBQT1JUX1RBU0sgPSAnQ1JFQVRFX1NVUFBPUlRfVEFTSyc7XG5leHBvcnQgY29uc3QgR0VUX0FMTF9VU0VSX1RBU0tTID0gJ0dFVF9BTExfVVNFUl9UQVNLUyc7XG5leHBvcnQgY29uc3QgR0VUX0FQUF9JTkZPID0gJ0dFVF9BUFBfSU5GTyc7XG5leHBvcnQgY29uc3QgR0VUX1BPU1RfQ09NTUVOVFMgPSAnR0VUX1BPU1RfQ09NTUVOVFMnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUX0NPTU1FTlQgPSAnQ1JFQVRFX1BPU1RfQ09NTUVOVCc7XG5leHBvcnQgY29uc3QgRklMVEVSX1BPU1RTID0gJ0ZJTFRFUl9QT1NUUyc7XG5leHBvcnQgY29uc3QgUkVQT1JUX1BPU1QgPSAnUkVQT1JUX1BPU1QnO1xuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURVMgPSAnR0VUX0ZBVk9SSVRFUyc7XG5leHBvcnQgY29uc3QgR0VUX0NPTVBMQUlOUyA9ICdHRVRfR0VUX0NPTVBMQUlOUyc7XG5leHBvcnQgY29uc3QgU09SVF9QT1NUUyA9ICdTT1JUX1BPU1RTJztcbmV4cG9ydCBjb25zdCBTSE9XX1NVQ0NFU1MgPSAnU0hPV19TVUNDRVNTJztcblxuLy8gcHJvdmlkZXJcbmV4cG9ydCBjb25zdCBBRERfUE9TVCA9ICdQUk9WSURFUi9BRERfUE9TVCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1QgPSAnUFJPVklERVIvUkVNT1ZFX1BPU1QnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NUID0gJ1BST1ZJREVSL1VQREFURV9QT1NUJztcblxuLy8gcHJvdmlkZXJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvdmlkZXJQb3N0IHtcbiAgaWQ6IG51bWJlciB8IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nLFxuICBzZWNvbmROYW1lOiBzdHJpbmcsXG4gIGFjY291bnRpbmdOYW1lOiBzdHJpbmcsXG4gIHNleDogc3RyaW5nLFxuICBhZ2U6IG51bWJlciB8IHN0cmluZyxcbiAgZW1haWw6IHN0cmluZyxcbiAgcGhvbmU6IG51bWJlciB8IHN0cmluZyxcbiAgZXRobml0aGl0eTogc3RyaW5nLFxuICBoYWlyOiBzdHJpbmcsXG4gIGV5ZXM6IHN0cmluZyxcbiAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gIGFmZmlsaWF0aW9uOiBzdHJpbmcsXG4gIGF2YWlsYWJsZVRvOiBzdHJpbmcsXG4gIGF2YWlsYWJpbGl0eTogc3RyaW5nLFxuICBzaG9ydFN1bW1hcnk6IHN0cmluZyxcbiAgYWJvdXQ6IHN0cmluZyxcbiAgcGhvdG9zOiBzdHJpbmdbXSxcbiAgdmlkZW9zOiBzdHJpbmdbXVxufVxuXG4vLyB1c2VyXG5leHBvcnQgY29uc3QgU0VMRUNUX1NUQVRFID0gJ1VTRVIvU0VMRUNUX1NUQVRFJztcbmV4cG9ydCBjb25zdCBTRUxFQ1RfQ0lUWSA9ICdVU0VSL1NFTEVDVF9DSVRZJztcbmV4cG9ydCBjb25zdCBTRUxFQ1RfTElTVF9TT1JUID0gJ1VTRVIvU0VMRUNUX0xJU1RfU09SVCc7XG5leHBvcnQgY29uc3QgU0VMRUNUX0xJU1RfRklMVEVSID0gJ1VTRVIvU0VMRUNUX0xJU1RfRklMVEVSJztcbmV4cG9ydCBjb25zdCBTRUxFQ1RfQ0FURUdPUlkgPSAnVVNFUi9TRUxFQ1RfQ0FURUdPUlknO1xuXG4vLyBhZG1pblxuZXhwb3J0IGNvbnN0IEdFVF9BTExfU1VQUE9SVF9UQVNLUyA9ICdHRVRfQUxMX1NVUFBPUlRfVEFTS1MnO1xuZXhwb3J0IGNvbnN0IEVESVRfU1VQUE9SVF9UQVNLUyA9ICdFRElUX1NVUFBPUlRfVEFTS1MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9TVVBQT1JUX1RBU0sgPSAnREVMRVRFX1NVUFBPUlRfVEFTSyc7XG4vLyBleHBvcnQgY29uc3QgQ1JFQVRFX0NBVEVHT1JZID0gJ0NSRUFURV9DQVRFR09SWSc7XG4vLyBleHBvcnQgY29uc3QgRURJVF9DQVRFR09SWSA9ICdFRElUX0NBVEVHT1JZJztcbi8vIGV4cG9ydCBjb25zdCBERUxFVEVfQ0FURUdPUlkgPSAnREVMRVRFX0NBVEVHT1JZJztcbiIsImltcG9ydCB7IEdFVF9BTExfU1VQUE9SVF9UQVNLUywgREVMRVRFX1NVUFBPUlRfVEFTSyB9IGZyb20gXCIuLi9hY3Rpb25zL3R5cGVzXCI7XG5cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB0YXNrczogW10sXG5cbn1cblxuZXhwb3J0IGNvbnN0IGFkbWluUmVkdWNlciA9IChzdGF0ZTogYW55ID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHRVRfQUxMX1NVUFBPUlRfVEFTS1M6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdGFza3M6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgREVMRVRFX1NVUFBPUlRfVEFTSzpcbiAgICAgIGNvbnN0IHRhc2tzID0gc3RhdGUudGFza3MuZmlsdGVyKCh0YXNrOiBhbnkpID0+IHRhc2suaWQgIT0gYWN0aW9uLnBheWxvYWQpO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRhc2tzIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFNIT1dfTE9BREVSLFxuICBISURFX0xPQURFUixcbiAgU0hPV19BTEVSVCxcbiAgSElERV9BTEVSVCxcbiAgR0VUX0FMTF9QT1NUUyxcbiAgR0VUX0xPQ0FJVE9OU19JTkZPLFxuICBHRVRfQ0lUSUVTLFxuICBDUkVBVEVfU1VQUE9SVF9UQVNLLFxuICBHRVRfQUxMX1VTRVJfVEFTS1MsXG4gIEdFVF9BUFBfSU5GTyxcbiAgR0VUX05FV19QT1NUUyxcbiAgR0VUX1BBR0VTX05VTUJFUixcbiAgR0VUX1BPU1RfQ09NTUVOVFMsXG4gIENSRUFURV9QT1NUX0NPTU1FTlQsXG4gIEZJTFRFUl9QT1NUUyxcbiAgR0VUX0ZBVk9SSVRFUyxcbiAgR0VUX0NPTVBMQUlOUyxcbiAgU09SVF9QT1NUUyxcbiAgU0hPV19TVUNDRVNTXG59IGZyb20gXCIuLi9hY3Rpb25zL3R5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgcG9zdENvbW1lbnRzOiBbXSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGFsZXJ0OiBudWxsLFxuICBjYXRlZ29yaWVzOiBbXSxcbiAgcG9zdHM6IFtdLFxuICBuZXdQb3N0czogW10sXG4gIHN0YXRlczogW10sXG4gIGNpdGllczogW10sXG4gIHN1cHBvcnRUYXNrczogW10sXG4gIGFmZmlsaWF0aW9uOiBbXSxcbiAgYXZhaWxhYmlsaXR5OiBbXSxcbiAgYXZhaWxhYmxlX3RvOiBbXSxcbiAgZXRobmljaXR5OiBbXSxcbiAgZXllczogW10sXG4gIGhhaXI6IFtdLFxuICBwYWdlc051bWJlcjogMCxcbiAgZmF2b3JpdGVzOiBbXSxcbiAgY29tcGxhaW5zOiBbXSxcbiAgc3VjY2VzczogbnVsbFxufTtcblxuZXhwb3J0IGNvbnN0IGFwcFJlZHVjZXIgPSAoc3RhdGU6IGFueSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0hPV19MT0FERVI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG5cbiAgICBjYXNlIFNIT1dfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdWNjZXNzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIEhJREVfTE9BREVSOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH1cblxuICAgIGNhc2UgU0hPV19BTEVSVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhbGVydDogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBISURFX0FMRVJUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFsZXJ0OiBudWxsIH1cblxuICAgIGNhc2UgR0VUX0FMTF9QT1NUUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBTT1JUX1BPU1RTOlxuICAgICAgbGV0IG5ld1Bvc3RzID0gc3RhdGUucG9zdHM7XG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQgPT09ICdkYXRlLy0nKSB7XG4gICAgICAgIG5ld1Bvc3RzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShhLmNyZWF0ZWRfYXQuc3BsaXQoJ1QnKVswXS5zcGxpdCgnLScpLmpvaW4oJy8nKSk7XG4gICAgICAgICAgY29uc3QgZGF0ZUIgPSBuZXcgRGF0ZShiLmNyZWF0ZWRfYXQuc3BsaXQoJ1QnKVswXS5zcGxpdCgnLScpLmpvaW4oJy8nKSk7XG4gICAgICAgICAgaWYgKGRhdGVBLmdldFRpbWUoKSA8IGRhdGVCLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZUEuZ2V0VGltZSgpID4gZGF0ZUIuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gYiAtIGE7XG4gICAgICAgICAgfSBlbHNlIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdHM6IG5ld1Bvc3RzIH1cblxuICAgIGNhc2UgRklMVEVSX1BPU1RTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIEdFVF9QQUdFU19OVU1CRVI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcGFnZXNOdW1iZXI6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgR0VUX05FV19QT1NUUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBuZXdQb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBHRVRfTE9DQUlUT05TX0lORk86XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3RhdGVzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIEdFVF9DSVRJRVM6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2l0aWVzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIEdFVF9DT01QTEFJTlM6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY29tcGxhaW5zOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIEdFVF9GQVZPUklURVM6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZmF2b3JpdGVzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIENSRUFURV9TVVBQT1JUX1RBU0s6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3VwcG9ydFRhc2tzOiBbLi4uc3RhdGUuc3VwcG9ydFRhc2tzLCBhY3Rpb24ucGF5bG9hZF0gfVxuXG4gICAgY2FzZSBHRVRfQUxMX1VTRVJfVEFTS1M6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3VwcG9ydFRhc2tzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIEdFVF9QT1NUX0NPTU1FTlRTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RDb21tZW50czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBDUkVBVEVfUE9TVF9DT01NRU5UOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RDb21tZW50czogWy4uLnN0YXRlLnBvc3RDb21tZW50cywgYWN0aW9uLnBheWxvYWRdIH1cblxuICAgIGNhc2UgR0VUX0FQUF9JTkZPOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhdGVnb3JpZXM6IGFjdGlvbi5wYXlsb2FkLmNhdGVnb3JpZXMsXG4gICAgICAgIGFmZmlsaWF0aW9uOiBhY3Rpb24ucGF5bG9hZC5hZmZpbGlhdGlvbixcbiAgICAgICAgYXZhaWxhYmlsaXR5OiBhY3Rpb24ucGF5bG9hZC5hdmFpbGFiaWxpdHksXG4gICAgICAgIGF2YWlsYWJsZV90bzogYWN0aW9uLnBheWxvYWQuYXZhaWxhYmxlX3RvLFxuICAgICAgICBldGhuaWNpdHk6IGFjdGlvbi5wYXlsb2FkLmV0aG5pY2l0eSxcbiAgICAgICAgZXllczogYWN0aW9uLnBheWxvYWQuZXllcyxcbiAgICAgICAgaGFpcjogYWN0aW9uLnBheWxvYWQuaGFpclxuICAgICAgfVxuXG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0IHsgQUREX1BPU1QsIFJFTU9WRV9QT1NULCBVUERBVEVfUE9TVCB9IGZyb20gXCIuLi9hY3Rpb25zL3R5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgcHJvdmlkZXJQb3N0czogW11cbn07XG5cbmV4cG9ydCBjb25zdCBwcm92aWRlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9QT1NUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb3ZpZGVyUG9zdHM6IHN0YXRlLnByb3ZpZGVyUG9zdHMuY29uY2F0KGFjdGlvbi5wYXlsb2FkKSB9XG5cbiAgICBjYXNlIFJFTU9WRV9QT1NUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb3ZpZGVyUG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgVVBEQVRFX1BPU1Q6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvdmlkZXJQb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHRlc3RSZWR1Y2VyIH0gZnJvbSAnLi90ZXN0UmVkdWNlcic7XG5pbXBvcnQgeyBhcHBSZWR1Y2VyIH0gZnJvbSAnLi9hcHBSZWR1Y2VyJztcbmltcG9ydCB7IHByb3ZpZGVyUmVkdWNlciB9IGZyb20gJy4vcHJvdmlkZXJSZWR1Y2VyJztcbmltcG9ydCB7IHVzZXJSZWR1Y2VyIH0gZnJvbSAnLi91c2VyUmVkdWNlcic7XG5pbXBvcnQgeyBhZG1pblJlZHVjZXIgfSBmcm9tICcuL2FkbWluUmVkdWNlcic7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICB0ZXN0UG9zdHM6IHRlc3RSZWR1Y2VyLFxuICAgIGFwcDogYXBwUmVkdWNlcixcbiAgICBwcm92aWRlcjogcHJvdmlkZXJSZWR1Y2VyLFxuICAgIHVzZXI6IHVzZXJSZWR1Y2VyLFxuICAgIGFkbWluOiBhZG1pblJlZHVjZXJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiIsImltcG9ydCB7IFRFU1RfQ1JFQVRFX1BPU1QsIFRFU1RfRkVUQ0hfUE9TVCB9IGZyb20gXCIuLi9hY3Rpb25zL3R5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgcG9zdHM6IFtdLFxuICBmZXRjaGVkUG9zdHM6IFtdXG59O1xuXG5leHBvcnQgY29uc3QgdGVzdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFRFU1RfQ1JFQVRFX1BPU1Q6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdHM6IHN0YXRlLnBvc3RzLmNvbmNhdChhY3Rpb24ucGF5bG9hZCkgfVxuXG4gICAgY2FzZSBURVNUX0ZFVENIX1BPU1Q6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZmV0Y2hlZFBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0IHsgU0VMRUNUX1NUQVRFLCBTRUxFQ1RfQ0lUWSwgU0VMRUNUX0xJU1RfU09SVCwgU0VMRUNUX0xJU1RfRklMVEVSLCBTRUxFQ1RfQ0FURUdPUlkgfSBmcm9tIFwiLi4vYWN0aW9ucy90eXBlc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHBvc3RzOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSBTRUxFQ1RfU1RBVEU6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgU0VMRUNUX0NJVFk6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgU0VMRUNUX0xJU1RfU09SVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBTRUxFQ1RfTElTVF9GSUxURVI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgU0VMRUNUX0NBVEVHT1JZOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyJztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5cbmNvbnN0IHByZWxvYWRlZFN0YXRlID0ge307XG5cbmNvbnN0IHN0b3JlOiBhbnkgPSBjcmVhdGVTdG9yZShcbiAgcm9vdFJlZHVjZXIsXG4gIHByZWxvYWRlZFN0YXRlLFxuICBhcHBseU1pZGRsZXdhcmUoXG4gICAgdGh1bmssXG4gIClcbik7XG5cbnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCd1cGRhdGVkIHN0YXRlOiAnLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9