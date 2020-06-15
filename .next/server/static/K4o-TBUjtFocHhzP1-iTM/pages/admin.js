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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B6ue");


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

/***/ "B6ue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Admin; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/test/Alert.jsx
var Alert = __webpack_require__("y+yx");

// EXTERNAL MODULE: ./src/_services/index.js + 2 modules
var _services = __webpack_require__("rsSm");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/redux/actions/actions.ts
var actions = __webpack_require__("7zJJ");

// CONCATENATED MODULE: ./src/components/admin/AdminRegistration.jsx
var __jsx = external_react_default.a.createElement;






function AdminRegistration(props) {
  const {
    0: name,
    1: setName
  } = Object(external_react_["useState"])("");
  const {
    0: password,
    1: setPassword
  } = Object(external_react_["useState"])("");
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])("");
  const {
    0: confirmedPassword,
    1: setConfirmedPassword
  } = Object(external_react_["useState"])("");

  const submitHandler = e => {
    e.preventDefault();

    if (!name.length || !password.length || !email.length || !confirmedPassword.length) {
      return props.showAlert("All fields must be filled");
    }

    if (password !== confirmedPassword) {
      return props.showAlert("Password confirmation did not match");
    }

    _services["a" /* authenticationService */].registrationAdmin(name, password, email, confirmedPassword);
  };

  return __jsx("div", {
    className: "text-white"
  }, __jsx("span", {
    className: "text-center d-block py-3"
  }, "New admin registration"), __jsx("div", {
    className: "container"
  }, props.alert && __jsx(Alert["a" /* default */], {
    text: props.alert
  })), __jsx("form", {
    onSubmit: e => submitHandler(e),
    className: "form-group container"
  }, __jsx("label", {
    className: "form-group d-block"
  }, "name", __jsx("input", {
    type: "text",
    className: "form-control",
    onChange: e => setName(e.target.value)
  })), __jsx("label", {
    className: "form-group d-block"
  }, "password", __jsx("input", {
    type: "password",
    className: "form-control",
    onChange: e => setPassword(e.target.value)
  })), __jsx("label", {
    className: "form-group d-block"
  }, "email", __jsx("input", {
    type: "email",
    className: "form-control",
    onChange: e => setEmail(e.target.value)
  })), __jsx("label", {
    className: "form-group d-block"
  }, "password_confirmation", __jsx("input", {
    type: "password",
    className: "form-control",
    onChange: e => setConfirmedPassword(e.target.value)
  })), __jsx("button", {
    type: "submit",
    className: " btn btn-light"
  }, "Submit")));
}

const mapStateToProps = state => ({
  alert: state.app.alert
});

const mapDispatchToProps = {
  showAlert: actions["e" /* showAlert */]
};
/* harmony default export */ var admin_AdminRegistration = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(AdminRegistration));
// CONCATENATED MODULE: ./src/pages/admin.jsx
var admin_jsx = external_react_default.a.createElement;


function Admin() {
  return admin_jsx("div", null, admin_jsx(admin_AdminRegistration, null));
}

/***/ }),

/***/ "VhIb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ auth_header_authHeader; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ configureFakeBackend; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ handleResponse; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Role; });

// UNUSED EXPORTS: PrivateRoute, history

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// EXTERNAL MODULE: ./src/_services/index.js + 2 modules
var _services = __webpack_require__("rsSm");

// CONCATENATED MODULE: ./src/_helpers/PrivateRoute.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const PrivateRoute = (_ref) => {
  let {
    component: Component,
    roles
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["component", "roles"]);

  return __jsx(external_react_router_dom_["Route"], _extends({}, rest, {
    render: props => {
      const currentUser = _services["a" /* authenticationService */].currentUserValue;

      if (!currentUser) {
        // not logged in so redirect to login page with the return url
        return __jsx(external_react_router_dom_["Redirect"], {
          to: {
            pathname: '/login',
            state: {
              from: props.location
            }
          }
        });
      } // check if route is restricted by role


      if (roles && roles.indexOf(currentUser.role) === -1) {
        // role not authorised so redirect to home page
        return __jsx(external_react_router_dom_["Redirect"], {
          to: {
            pathname: '/'
          }
        });
      } // authorised so return component


      return __jsx(Component, props);
    }
  }));
};
// CONCATENATED MODULE: ./src/_helpers/auth-header.js

function auth_header_authHeader() {
  // return authorization header with jwt token
  const currentUser = _services["a" /* authenticationService */].currentUserValue;

  if (currentUser && currentUser.token) {
    return {
      Authorization: `Bearer ${currentUser.token}`
    };
  } else {
    return {};
  }
}
// CONCATENATED MODULE: ./src/_helpers/fake-backend.js

function configureFakeBackend() {
  let users = [{
    id: 1,
    username: 'admin',
    password: 'admin',
    firstName: 'Admin',
    lastName: 'Admin',
    role: Role.Admin,
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
    role: Role.Admin,
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
    role: Role.Provider,
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
    const role = roleString ? Role[roleString] : null;
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
            lastName: Role.User,
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
          if (id !== currentUser.id && role !== Role.Admin) return unauthorised();
          const user = users.find(x => x.id === id);
          return ok(user);
        } // get all users - admin only


        if (url.endsWith('/users') && opts.method === 'GET') {
          if (role !== Role.Admin) return unauthorised();
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
// CONCATENATED MODULE: ./src/_helpers/handle-response.js

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].indexOf(response.status) !== -1) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        _services["a" /* authenticationService */].logout();
        window.location.reload(true);
      }

      const error = data && data.message || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
// EXTERNAL MODULE: external "history"
var external_history_ = __webpack_require__("ZFcg");

// CONCATENATED MODULE: ./src/_helpers/history.js

let history_history;

if (typeof document !== 'undefined') {
  // const createBrowserHistory = require('history/createBrowserHistory').default
  history_history = Object(external_history_["createBrowserHistory"])();
}


// CONCATENATED MODULE: ./src/_helpers/role.js
const Role = {
  Admin: 'Admin',
  User: 'User',
  Provider: 'Provider'
};
// CONCATENATED MODULE: ./src/_helpers/index.js







/***/ }),

/***/ "ZFcg":
/***/ (function(module, exports) {

module.exports = require("history");

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

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "rsSm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ authenticationService; });

// UNUSED EXPORTS: userService

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: ./src/_helpers/index.js + 6 modules
var _helpers = __webpack_require__("VhIb");

// CONCATENATED MODULE: ./src/_services/authentication.service.ts



let currentUserSubject = external_js_cookie_default.a.getJSON('currentUser') ? external_js_cookie_default.a.getJSON('currentUser') : {};
const target = `https://intim-vibe-api.padilo.pro/api`;
const authenticationService = {
  login,
  logout,
  registrationAdmin,
  registrationClient,
  registrationProvider,
  confirmEmail,
  confirmSMS,
  currentUser: currentUserSubject,

  get currentUserValue() {
    return currentUserSubject;
  }

};

async function login(email, password) {
  return await external_isomorphic_unfetch_default()(`${target}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then(_helpers["d" /* handleResponse */]).then(user => {
    // if (user.token) {
    external_js_cookie_default.a.set('currentUser', JSON.stringify(user));
    currentUserSubject = user;
    return user; // }
  }).catch(err => console.error('Error:', err)); // .then(() => window.location.reload(true));
}

async function registrationClient(name, password, email, password_confirmation) {
  // https://intim-vibe-api.padilo.pro/api/client/register
  return await external_isomorphic_unfetch_default()(`https://intim-vibe-api.padilo.pro/api/client/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      password,
      email,
      password_confirmation
    })
  }).then(_helpers["d" /* handleResponse */]).then(client => {
    console.log('client:', client);
    external_js_cookie_default.a.set('currentUser', JSON.stringify(client));
    currentUserSubject = client;
    return client;
  }).catch(err => console.error('Error:', err));
}

async function registrationAdmin(name, password, email, password_confirmation) {
  return await external_isomorphic_unfetch_default()(`${target}/admin/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      password,
      email,
      password_confirmation
    })
  }).then(_helpers["d" /* handleResponse */]).then(admin => {
    external_js_cookie_default.a.set('currentUser', JSON.stringify(admin));
    currentUserSubject = admin;
    return admin;
  }).catch(err => console.error('Error:', err));
}

async function registrationProvider(name, password, email, password_confirmation, phone) {
  return await external_isomorphic_unfetch_default()(`${target}/individual/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      password,
      email,
      password_confirmation,
      phone
    })
  }).then(_helpers["d" /* handleResponse */]).then(provider => {
    external_js_cookie_default.a.set('currentUser', JSON.stringify(provider));
    currentUserSubject = provider;
    return provider;
  }).catch(err => console.error('Error:', err));
}

async function logout() {
  external_js_cookie_default.a.remove('currentUser');
  return await external_isomorphic_unfetch_default()(`${target}/logout`, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }).then(res => res).catch(err => console.error('Error:', err));
}

function confirmEmail(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return external_isomorphic_unfetch_default()(`/register/activate_email/${token}`, requestOptions).then(_helpers["d" /* handleResponse */]).catch(err => console.error('Error:', err));
}

function confirmSMS(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return external_isomorphic_unfetch_default()(`/register/activate_sms/${token}`, requestOptions).then(_helpers["d" /* handleResponse */]).catch(err => console.error('Error:', err));
}
// CONCATENATED MODULE: ./src/_services/user.service.js

const userService = {
  getAll,
  getById,
  update,
  deleteUser
};

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: Object(_helpers["b" /* authHeader */])()
  };
  return fetch(`/users`, requestOptions).then(_helpers["d" /* handleResponse */]);
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: Object(_helpers["b" /* authHeader */])()
  };
  return fetch(`/users/${id}`, requestOptions).then(_helpers["d" /* handleResponse */]);
}

function update(id, name, second_name, email, phone, rating, position, telegram, viber, whatsapp, site, avatar) {
  const requestOptions = {
    method: 'POST',
    headers: Object(_helpers["b" /* authHeader */])(),
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
  return fetch(`/api/auth/user/update/${id}`, requestOptions).then(_helpers["d" /* handleResponse */]);
}

function deleteUser(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: Object(_helpers["b" /* authHeader */])()
  };
  return fetch(`/api/auth/user/destroy/${id}`, requestOptions).then(_helpers["d" /* handleResponse */]);
}
// CONCATENATED MODULE: ./src/_services/index.js



/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

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