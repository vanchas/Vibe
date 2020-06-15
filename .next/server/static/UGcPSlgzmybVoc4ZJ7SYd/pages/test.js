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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JjlV");


/***/ }),

/***/ "7zJJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return showLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hideLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return showAlert; });
/* unused harmony export hideAlert */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCategories; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("iO2Z");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);

 // T E S T 

function createPost(post) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* TEST_CREATE_POST */ "o"],
    payload: post
  };
}
;
function showLoader() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* SHOW_LOADER */ "n"]
  };
}
function hideLoader() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* HIDE_LOADER */ "f"]
  };
}
function showAlert(text) {
  return dispatch => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__[/* SHOW_ALERT */ "m"],
      payload: text
    });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}
function hideAlert() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* HIDE_ALERT */ "e"]
  };
}
function fetchPosts() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* TEST_REQUEST_POSTS */ "q"]
  };
}
;
const getCategories = () => async dispatch => {
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('https://intim-vibe-api.padilo.pro/api/categories');
  const promise = response.json();
  promise.then(res => {
    // console.log('categories from action:', res.data);
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_0__[/* GET_CATEGORIES */ "d"],
      payload: res.data
    };
  });
};

/***/ }),

/***/ "JjlV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/redux/actions/actions.ts
var actions = __webpack_require__("7zJJ");

// EXTERNAL MODULE: ./src/components/test/Alert.jsx
var Alert = __webpack_require__("y+yx");

// CONCATENATED MODULE: ./src/components/test/PostForm.jsx
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class PostForm_PostForm extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "submitHandler", e => {
      e.preventDefault();
      const {
        title
      } = this.state;

      if (!title.trim()) {
        return this.props.showAlert('Post title can\'t be empty');
      }

      const newPost = {
        title,
        id: Date.now().toString()
      };
      this.props.createPost(newPost);
      this.setState({
        title: ''
      });
    });

    _defineProperty(this, "changeInputHandler", e => {
      e.persist();
      this.setState(prev => _objectSpread(_objectSpread({}, prev), {
        [e.target.name]: e.target.value
      }));
    });

    this.state = {
      title: ''
    };
  }

  render() {
    return __jsx("form", {
      onSubmit: this.submitHandler
    }, this.props.alert && __jsx(Alert["a" /* default */], {
      text: this.props.alert
    }), __jsx("div", {
      className: "form-group"
    }, __jsx("label", {
      htmlFor: "title"
    }, "Post title"), __jsx("input", {
      type: "text",
      className: "form-control",
      id: "title",
      name: "title",
      value: this.state.title,
      onChange: this.changeInputHandler
    })), __jsx("button", {
      className: "btn btn-success",
      type: "submit"
    }, "Create"));
  }

}

const mapStateToProps = state => ({
  alert: state.app.alert
});

const mapDispatchToProps = {
  createPost: actions["a" /* createPost */],
  showAlert: actions["e" /* showAlert */]
};
/* harmony default export */ var test_PostForm = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(PostForm_PostForm));
// CONCATENATED MODULE: ./src/components/test/Post.jsx
var Post_jsx = external_react_default.a.createElement;

/* harmony default export */ var Post = (({
  post
}) => {
  return Post_jsx("div", {
    className: "card text-dark"
  }, Post_jsx("div", {
    className: "card-body"
  }, Post_jsx("h5", {
    className: "card-title"
  }, post.title)));
});
// CONCATENATED MODULE: ./src/components/test/Posts.jsx
var Posts_jsx = external_react_default.a.createElement;



const Posts = ({
  syncPosts
}) => {
  if (!syncPosts.length) {
    return Posts_jsx("p", {
      className: "text-center"
    }, "No posts...");
  }

  return syncPosts.map((post, i) => Posts_jsx(Post, {
    post: post,
    key: i
  }));
};

/* harmony default export */ var test_Posts = (Posts);
// CONCATENATED MODULE: ./src/components/test/Loader.jsx
var Loader_jsx = external_react_default.a.createElement;

function Loader() {
  return Loader_jsx("div", {
    className: "spinner-border text-danger",
    role: "status"
  }, Loader_jsx("span", {
    className: "sr-only"
  }, "Loading..."));
}
// CONCATENATED MODULE: ./src/components/test/FetchedPosts.jsx
var FetchedPosts_jsx = external_react_default.a.createElement;





/* harmony default export */ var FetchedPosts = (() => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const posts = Object(external_react_redux_["useSelector"])(state => state.testPosts.fetchedPosts);
  const loading = Object(external_react_redux_["useSelector"])(state => state.app.loading);
  if (loading) return FetchedPosts_jsx(Loader, null);

  if (!posts.length) {
    return FetchedPosts_jsx("button", {
      className: "btn btn-primary",
      onClick: () => dispatch(Object(actions["b" /* fetchPosts */])())
    }, "Upload");
  }

  return posts.map(post => FetchedPosts_jsx(Post, {
    post: post,
    key: post.id
  }));
});
// EXTERNAL MODULE: ./src/redux/actions/types.ts
var types = __webpack_require__("iO2Z");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./src/redux/actions/userActions.ts


async function allPosts() {
  const response = await external_isomorphic_unfetch_default()('https://intim-vibe-api.padilo.pro/api/posts');
  console.log(response.json());
  return {
    type: types["b" /* ALL_POSTS */]
  };
}
function selectState(state) {
  return {
    type: types["l" /* SELECT_STATE */],
    payload: state
  };
}
function selectCity(city) {
  return {
    type: types["i" /* SELECT_CITY */],
    payload: city
  };
}
function selectListSort(sort) {
  return {
    type: types["k" /* SELECT_LIST_SORT */],
    payload: sort
  };
}
function selectListFilter(filter) {
  return {
    type: types["j" /* SELECT_LIST_FILTER */],
    payload: filter
  };
}
function selectCategory(category) {
  return {
    type: types["h" /* SELECT_CATEGORY */],
    payload: category
  };
}
// CONCATENATED MODULE: ./src/pages/test.jsx
var test_jsx = external_react_default.a.createElement;







const Test = props => {
  return test_jsx("div", {
    className: "text-white container pt-3"
  }, test_jsx("div", {
    className: "row"
  }, test_jsx("div", {
    className: "col"
  }, test_jsx(test_PostForm, null))), test_jsx("div", {
    className: "row"
  }, test_jsx("div", {
    className: "col"
  }, test_jsx("h2", null, "Sync posts"), test_jsx(test_Posts, {
    syncPosts: props.syncPosts
  })), test_jsx("div", {
    className: "col"
  }, test_jsx("h2", null, "Async posts"), test_jsx(FetchedPosts, {
    posts: []
  }))), test_jsx("button", {
    onClick: () => {
      allPosts();
    }
  }, "posts"));
};

const test_mapStateToProps = state => {
  return {
    syncPosts: state.testPosts.posts
  };
};

const test_mapDispatchToProps = {// decrementCounter
};
/* harmony default export */ var test = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(test_mapStateToProps, test_mapDispatchToProps)(Test));

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "iO2Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return TEST_CREATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return TEST_FETCH_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return TEST_REQUEST_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SHOW_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return HIDE_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SHOW_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return HIDE_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_ALL_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REMOVE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return UPDATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SELECT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SELECT_CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SELECT_LIST_SORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SELECT_LIST_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SELECT_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ALL_POSTS; });
// test
const TEST_CREATE_POST = 'CREATE_POST';
const TEST_FETCH_POST = 'FETCH_POST';
const TEST_REQUEST_POSTS = 'REQUEST_POSTS'; // app

const SHOW_LOADER = 'APP/SHOW_LOADER';
const HIDE_LOADER = 'APP/HIDE_LOADER';
const SHOW_ALERT = 'APP/SHOW_ALERT';
const HIDE_ALERT = 'APP/HIDE_ALERT';
const GET_CATEGORIES = 'APP/GET_CATEGORIES'; // provider

const GET_ALL_POSTS = 'PROVIDER/GET_ALL_POSTS';
const ADD_POST = 'PROVIDER/ADD_POST';
const REMOVE_POST = 'PROVIDER/REMOVE_POST';
const UPDATE_POST = 'PROVIDER/UPDATE_POST'; // provider

// user
const SELECT_STATE = 'USER/SELECT_STATE';
const SELECT_CITY = 'USER/SELECT_CITY';
const SELECT_LIST_SORT = 'USER/SELECT_LIST_SORT';
const SELECT_LIST_FILTER = 'USER/SELECT_LIST_FILTER';
const SELECT_CATEGORY = 'USER/SELECT_CATEGORY';
const ALL_POSTS = 'USER/ALL_POSTS';

/***/ }),

/***/ "y+yx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Alert({
  text
}) {
  return __jsx("div", {
    className: "alert alert-warning",
    role: "alert"
  }, text);
}

/***/ })

/******/ });