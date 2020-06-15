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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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



let currentUserSubject = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.getJSON('currentUser') ? js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.getJSON('currentUser') : {};
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
  return await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${target}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then(_helpers__WEBPACK_IMPORTED_MODULE_2__["handleResponse"]).then(user => {
    // if (user.token) {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('currentUser', JSON.stringify(user));
    currentUserSubject = user;
    return user; // }
  }).catch(err => console.error('Error:', err)); // .then(() => window.location.reload(true));
}

async function registrationClient(name, password, email, password_confirmation) {
  // https://intim-vibe-api.padilo.pro/api/client/register
  return await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://intim-vibe-api.padilo.pro/api/client/register`, {
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
  }).then(_helpers__WEBPACK_IMPORTED_MODULE_2__["handleResponse"]).then(client => {
    console.log('client:', client);
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('currentUser', JSON.stringify(client));
    currentUserSubject = client;
    return client;
  }).catch(err => console.error('Error:', err));
}

async function registrationAdmin(name, password, email, password_confirmation) {
  return await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${target}/admin/register`, {
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
  }).then(_helpers__WEBPACK_IMPORTED_MODULE_2__["handleResponse"]).then(admin => {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('currentUser', JSON.stringify(admin));
    currentUserSubject = admin;
    return admin;
  }).catch(err => console.error('Error:', err));
}

async function registrationProvider(name, password, email, password_confirmation, phone) {
  return await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${target}/individual/register`, {
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
  }).then(_helpers__WEBPACK_IMPORTED_MODULE_2__["handleResponse"]).then(provider => {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('currentUser', JSON.stringify(provider));
    currentUserSubject = provider;
    return provider;
  }).catch(err => console.error('Error:', err));
}

async function logout() {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('currentUser');
  return await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${target}/logout`, {
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
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`/register/activate_email/${token}`, requestOptions).then(_helpers__WEBPACK_IMPORTED_MODULE_2__["handleResponse"]).catch(err => console.error('Error:', err));
}

function confirmSMS(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`/register/activate_sms/${token}`, requestOptions).then(_helpers__WEBPACK_IMPORTED_MODULE_2__["handleResponse"]).catch(err => console.error('Error:', err));
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

/***/ "./src/components/login-page/LoginControl.jsx":
/*!****************************************************!*\
  !*** ./src/components/login-page/LoginControl.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.module.scss */ "./src/components/login-page/login.module.scss");
/* harmony import */ var _login_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\login-page\\LoginControl.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function LoginControl({
  changeVisibleSignInComponent,
  visibleSignInComponent
}) {
  return __jsx("div", {
    className: `${visibleSignInComponent ? _login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active : null} ${_login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.login_btn_control}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "btn",
    onClick: changeVisibleSignInComponent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "SignIn / SignUp"));
}

/***/ }),

/***/ "./src/components/login-page/SignIn.jsx":
/*!**********************************************!*\
  !*** ./src/components/login-page/SignIn.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.module.scss */ "./src/components/login-page/login.module.scss");
/* harmony import */ var _login_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services */ "./src/_services/index.js");
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\login-page\\SignIn.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function SignIn() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return __jsx("div", {
    className: _login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.login_page_form,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "Login"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
      email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('email is required'),
      password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Password is required')
    }),
    onSubmit: ({
      email,
      password
    }, {
      setStatus,
      setSubmitting
    }) => {
      setStatus();
      _services__WEBPACK_IMPORTED_MODULE_5__["authenticationService"].login(email, password).then(user => {
        const {
          from
        } = // this.props.location.state ||
        {
          from: {
            pathname: "/"
          }
        };
        router.push(from);
      }, error => {
        setSubmitting(false);
        setStatus(error);
      });
    },
    render: ({
      errors,
      status,
      touched,
      isSubmitting
    }) => __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, __jsx("label", {
      htmlFor: "email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, "Email"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "email",
      type: "text",
      className: 'form-control' + (errors.email && touched.email ? ' is-invalid' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 15
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "email",
      component: "div",
      className: "invalid-feedback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, __jsx("label", {
      htmlFor: "password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
      }
    }, "Password"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "password",
      type: "password",
      className: 'form-control' + (errors.password && touched.password ? ' is-invalid' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "password",
      component: "div",
      className: "invalid-feedback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, __jsx("button", {
      type: "submit",
      className: `btn ${_login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.submit_btn}`,
      disabled: isSubmitting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }, "Submit"), isSubmitting && __jsx("div", {
      className: "spinner-border spinner-border-sm text-primary ml-3",
      role: "status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "sr-only",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 19
      }
    }, "Loading..."))), status && __jsx("div", {
      className: 'alert alert-danger',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, status)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/login-page/SignUp.jsx":
/*!**********************************************!*\
  !*** ./src/components/login-page/SignUp.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.module.scss */ "./src/components/login-page/login.module.scss");
/* harmony import */ var _login_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services */ "./src/_services/index.js");
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\login-page\\SignUp.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function SignUp() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    0: formUser,
    1: setFormUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  return __jsx("div", {
    className: _login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.login_page_form,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "Registration"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape(formUser ? {
      username: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Username is required'),
      password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Password is required'),
      email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Email is required'),
      password_confirmation: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Password is required')
    } : {
      username: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Username is required'),
      password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Password is required'),
      email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Email is required'),
      password_confirmation: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Password is required'),
      phone: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Phone is required and must contain 12 characters')
    }),
    onSubmit: ({
      username,
      email,
      password,
      password_confirmation,
      phone
    }, {
      setStatus,
      setSubmitting
    }) => {
      setStatus();
      phone.toString().length ? _services__WEBPACK_IMPORTED_MODULE_5__["authenticationService"].registrationProvider(username, password, email, password_confirmation, phone) : _services__WEBPACK_IMPORTED_MODULE_5__["authenticationService"].registrationClient(username, password, email, password_confirmation).then(user => {
        console.log('user:', user);
        const {
          from
        } = // this.props.location.state ||
        {
          from: {
            pathname: "/"
          }
        };
        router.push(from);
      }, error => {
        console.log('error:', error);
        setSubmitting(false);
        setStatus(error);
      });
    },
    render: ({
      errors,
      status,
      touched,
      isSubmitting
    }) => __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: `${_login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.role_toggler}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, formUser ? __jsx("span", {
      className: `${_login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 27
      }
    }, "as User") : __jsx("span", {
      className: `${_login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.model}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 74
      }
    }, "as Model"), __jsx("label", {
      className: _login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.switch,
      htmlFor: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    }, __jsx("input", {
      type: "checkbox",
      id: "checkbox",
      onChange: () => setFormUser(!formUser),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: `${_login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slider} ${_login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.round}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }))), __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, __jsx("label", {
      htmlFor: "username",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    }, "Username"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "username",
      type: "text",
      className: 'form-control' + (errors.username && touched.username ? ' is-invalid' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 15
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "username",
      component: "div",
      className: "invalid-feedback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, __jsx("label", {
      htmlFor: "email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 15
      }
    }, "Email"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "email",
      type: "email",
      className: 'form-control' + (errors.email && touched.email ? ' is-invalid' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 15
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "email",
      component: "div",
      className: "invalid-feedback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }
    }, __jsx("label", {
      htmlFor: "password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }
    }, "Password"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "password",
      type: "password",
      className: 'form-control' + (errors.password && touched.password ? ' is-invalid' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "password",
      component: "div",
      className: "invalid-feedback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, __jsx("label", {
      htmlFor: "password_confirmation",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }
    }, "Confirm password"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "password_confirmation",
      type: "password",
      className: 'form-control' + (errors.password_confirmation && touched.password_confirmation ? ' is-invalid' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "password_confirmation",
      component: "div",
      className: "invalid-feedback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }
    })), !formUser && __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 27
      }
    }, __jsx("label", {
      htmlFor: "phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 15
      }
    }, "Phone"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "phone",
      type: "number",
      className: 'form-control' + (errors.phone && touched.phone ? ' is-invalid' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 15
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "phone",
      component: "div",
      className: "invalid-feedback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, __jsx("button", {
      type: "submit",
      className: `btn ${_login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.submit_btn}`,
      disabled: isSubmitting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 15
      }
    }, "Submit"), isSubmitting && __jsx("div", {
      className: "spinner-border spinner-border-sm text-primary ml-3",
      role: "status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "sr-only",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 19
      }
    }, "Loading..."))), status && __jsx("div", {
      className: 'alert alert-danger',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 15
      }
    }, JSON.stringify(status), console.log(status))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/login-page/login.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/login-page/login.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"login_page_form": "login_login_page_form__1I3hX",
	"submit_btn": "login_submit_btn__nWZb9",
	"login_btn_control": "login_login_btn_control__1VXhI",
	"active": "login_active__35GY3",
	"user": "login_user__22BdM",
	"model": "login_model__sF4BN",
	"role_toggler": "login_role_toggler__j5aZ6",
	"switch": "login_switch__2KYQU",
	"slider": "login_slider__9eqrd",
	"round": "login_round__1rSKf"
};


/***/ }),

/***/ "./src/pages/login.jsx":
/*!*****************************!*\
  !*** ./src/pages/login.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_login_page_SignIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/login-page/SignIn */ "./src/components/login-page/SignIn.jsx");
/* harmony import */ var _components_login_page_SignUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/login-page/SignUp */ "./src/components/login-page/SignUp.jsx");
/* harmony import */ var _components_login_page_LoginControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/login-page/LoginControl */ "./src/components/login-page/LoginControl.jsx");
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\pages\\login.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function login() {
  const {
    0: visibleSignInComponent,
    1: setVisibleSignInComponent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const changeVisibleSignInComponent = () => {
    setVisibleSignInComponent(!visibleSignInComponent);
  };

  return __jsx("div", {
    className: "px-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }, __jsx(_components_login_page_LoginControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    visibleSignInComponent: visibleSignInComponent,
    changeVisibleSignInComponent: changeVisibleSignInComponent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }), visibleSignInComponent ? __jsx(_components_login_page_SignIn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 30
    }
  }) : __jsx(_components_login_page_SignUp__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 43
    }
  }));
}

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./src/pages/login.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\projects\vibe\src\pages\login.jsx */"./src/pages/login.jsx");


/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL19oZWxwZXJzL1ByaXZhdGVSb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX2hlbHBlcnMvYXV0aC1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19oZWxwZXJzL2Zha2UtYmFja2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX2hlbHBlcnMvaGFuZGxlLXJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9faGVscGVycy9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9faGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX2hlbHBlcnMvcm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zZXJ2aWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX3NlcnZpY2VzL3VzZXIuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dpbi1wYWdlL0xvZ2luQ29udHJvbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9naW4tcGFnZS9TaWduSW4uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luLXBhZ2UvU2lnblVwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dpbi1wYWdlL2xvZ2luLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9sb2dpbi5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlzdG9yeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieXVwXCIiXSwibmFtZXMiOlsiUHJpdmF0ZVJvdXRlIiwiY29tcG9uZW50IiwiQ29tcG9uZW50Iiwicm9sZXMiLCJyZXN0IiwicHJvcHMiLCJjdXJyZW50VXNlciIsImF1dGhlbnRpY2F0aW9uU2VydmljZSIsImN1cnJlbnRVc2VyVmFsdWUiLCJwYXRobmFtZSIsInN0YXRlIiwiZnJvbSIsImxvY2F0aW9uIiwiaW5kZXhPZiIsInJvbGUiLCJhdXRoSGVhZGVyIiwidG9rZW4iLCJBdXRob3JpemF0aW9uIiwiY29uZmlndXJlRmFrZUJhY2tlbmQiLCJ1c2VycyIsImlkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiUm9sZSIsIkFkbWluIiwibmFtZSIsInNlY29uZF9uYW1lIiwiZW1haWwiLCJwaG9uZSIsIlByb3ZpZGVyIiwicmVhbEZldGNoIiwid2luZG93IiwiZmV0Y2giLCJ1cmwiLCJvcHRzIiwiaGVhZGVycyIsImlzTG9nZ2VkSW4iLCJzdGFydHNXaXRoIiwicm9sZVN0cmluZyIsInNwbGl0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiZW5kc1dpdGgiLCJtZXRob2QiLCJwYXJhbXMiLCJKU09OIiwicGFyc2UiLCJib2R5IiwidXNlciIsImZvckVhY2giLCJ1IiwiZXJyb3IiLCJvayIsImxlbmd0aCIsIlVzZXIiLCJwdXNoIiwibWF0Y2giLCJ1bmF1dGhvcmlzZWQiLCJ1cmxQYXJ0cyIsInBhcnNlSW50IiwiZmluZCIsIngiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0Iiwic3RyaW5naWZ5Iiwic3RhdHVzIiwibWVzc2FnZSIsImhhbmRsZVJlc3BvbnNlIiwiZGF0YSIsImxvZ291dCIsInJlbG9hZCIsInN0YXR1c1RleHQiLCJoaXN0b3J5IiwiZG9jdW1lbnQiLCJjcmVhdGVCcm93c2VySGlzdG9yeSIsImN1cnJlbnRVc2VyU3ViamVjdCIsIkNvb2tpZXMiLCJnZXRKU09OIiwidGFyZ2V0IiwibG9naW4iLCJyZWdpc3RyYXRpb25BZG1pbiIsInJlZ2lzdHJhdGlvbkNsaWVudCIsInJlZ2lzdHJhdGlvblByb3ZpZGVyIiwiY29uZmlybUVtYWlsIiwiY29uZmlybVNNUyIsInNldCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsInBhc3N3b3JkX2NvbmZpcm1hdGlvbiIsImNsaWVudCIsImxvZyIsImFkbWluIiwicHJvdmlkZXIiLCJyZW1vdmUiLCJtb2RlIiwicmVzIiwicmVxdWVzdE9wdGlvbnMiLCJ1c2VyU2VydmljZSIsImdldEFsbCIsImdldEJ5SWQiLCJ1cGRhdGUiLCJkZWxldGVVc2VyIiwicmF0aW5nIiwicG9zaXRpb24iLCJ0ZWxlZ3JhbSIsInZpYmVyIiwid2hhdHNhcHAiLCJzaXRlIiwiYXZhdGFyIiwiTG9naW5Db250cm9sIiwiY2hhbmdlVmlzaWJsZVNpZ25JbkNvbXBvbmVudCIsInZpc2libGVTaWduSW5Db21wb25lbnQiLCJzIiwiYWN0aXZlIiwibG9naW5fYnRuX2NvbnRyb2wiLCJTaWduSW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2dpbl9wYWdlX2Zvcm0iLCJZdXAiLCJzaGFwZSIsInJlcXVpcmVkIiwic2V0U3RhdHVzIiwic2V0U3VibWl0dGluZyIsImVycm9ycyIsInRvdWNoZWQiLCJpc1N1Ym1pdHRpbmciLCJzdWJtaXRfYnRuIiwiU2lnblVwIiwiZm9ybVVzZXIiLCJzZXRGb3JtVXNlciIsInVzZVN0YXRlIiwidG9TdHJpbmciLCJyb2xlX3RvZ2dsZXIiLCJtb2RlbCIsInN3aXRjaCIsInNsaWRlciIsInJvdW5kIiwic2V0VmlzaWJsZVNpZ25JbkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBZ0IsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTnhDLENBREQ7QUFVQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCRCxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCB7IGF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJpdmF0ZVJvdXRlID0gKHsgY29tcG9uZW50OiBDb21wb25lbnQsIHJvbGVzLCAuLi5yZXN0IH0pID0+IChcclxuICA8Um91dGUgey4uLnJlc3R9IHJlbmRlcj17cHJvcHMgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcclxuICAgIGlmICghY3VycmVudFVzZXIpIHtcclxuICAgICAgLy8gbm90IGxvZ2dlZCBpbiBzbyByZWRpcmVjdCB0byBsb2dpbiBwYWdlIHdpdGggdGhlIHJldHVybiB1cmxcclxuICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17eyBwYXRobmFtZTogJy9sb2dpbicsIHN0YXRlOiB7IGZyb206IHByb3BzLmxvY2F0aW9uIH0gfX0gLz5cclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayBpZiByb3V0ZSBpcyByZXN0cmljdGVkIGJ5IHJvbGVcclxuICAgIGlmIChyb2xlcyAmJiByb2xlcy5pbmRleE9mKGN1cnJlbnRVc2VyLnJvbGUpID09PSAtMSkge1xyXG4gICAgICAvLyByb2xlIG5vdCBhdXRob3Jpc2VkIHNvIHJlZGlyZWN0IHRvIGhvbWUgcGFnZVxyXG4gICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXt7IHBhdGhuYW1lOiAnLycgfX0gLz5cclxuICAgIH1cclxuXHJcbiAgICAvLyBhdXRob3Jpc2VkIHNvIHJldHVybiBjb21wb25lbnRcclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICB9fSAvPlxyXG4pIiwiaW1wb3J0IHsgYXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vX3NlcnZpY2VzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhdXRoSGVhZGVyKCkge1xyXG4gIC8vIHJldHVybiBhdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIGp3dCB0b2tlblxyXG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XHJcbiAgaWYgKGN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyLnRva2VuKSB7XHJcbiAgICByZXR1cm4geyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y3VycmVudFVzZXIudG9rZW59YCB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJvbGUgfSBmcm9tICcuLydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmVGYWtlQmFja2VuZCgpIHtcclxuICBsZXQgdXNlcnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICB1c2VybmFtZTogJ2FkbWluJyxcclxuICAgICAgcGFzc3dvcmQ6ICdhZG1pbicsXHJcbiAgICAgIGZpcnN0TmFtZTogJ0FkbWluJyxcclxuICAgICAgbGFzdE5hbWU6ICdBZG1pbicsXHJcbiAgICAgIHJvbGU6IFJvbGUuQWRtaW4sXHJcbiAgICAgIG5hbWU6IFwiQWRtaW5cIixcclxuICAgICAgc2Vjb25kX25hbWU6IG51bGwsXHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBwaG9uZTogXCIzODA5NTM0NDQzNDhcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICB1c2VybmFtZTogJ3VzZXInLFxyXG4gICAgICBwYXNzd29yZDogJ3VzZXInLFxyXG4gICAgICBmaXJzdE5hbWU6ICdJdmFuJyxcclxuICAgICAgbGFzdE5hbWU6ICdVc2VyJyxcclxuICAgICAgcm9sZTogUm9sZS5BZG1pbixcclxuICAgICAgbmFtZTogXCJVc2VyXCIsXHJcbiAgICAgIHNlY29uZF9uYW1lOiBudWxsLFxyXG4gICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgcGhvbmU6IFwiMzgwOTUzNDQ0MzQ4XCIsXHJcbiAgICB9LFxyXG4gICAgLFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgdXNlcm5hbWU6ICdwcm8nLFxyXG4gICAgICBwYXNzd29yZDogJ3BybycsXHJcbiAgICAgIGZpcnN0TmFtZTogJ01vZGVsJyxcclxuICAgICAgbGFzdE5hbWU6ICdQcm92aWRlcicsXHJcbiAgICAgIHJvbGU6IFJvbGUuUHJvdmlkZXIsXHJcbiAgICAgIG5hbWU6IFwiTW9kZWxcIixcclxuICAgICAgc2Vjb25kX25hbWU6IG51bGwsXHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBwaG9uZTogXCIzODA5NTM0NDQzNDhcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGxldCByZWFsRmV0Y2ggPSB3aW5kb3cuZmV0Y2g7XHJcbiAgd2luZG93LmZldGNoID0gZnVuY3Rpb24gKHVybCwgb3B0cykge1xyXG4gICAgY29uc3QgYXV0aEhlYWRlciA9IG9wdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddO1xyXG4gICAgY29uc3QgaXNMb2dnZWRJbiA9IGF1dGhIZWFkZXIgJiYgYXV0aEhlYWRlci5zdGFydHNXaXRoKCdCZWFyZXIgZmFrZS1qd3QtdG9rZW4nKTtcclxuICAgIGNvbnN0IHJvbGVTdHJpbmcgPSBpc0xvZ2dlZEluICYmIGF1dGhIZWFkZXIuc3BsaXQoJy4nKVsxXTtcclxuICAgIGNvbnN0IHJvbGUgPSByb2xlU3RyaW5nID8gUm9sZVtyb2xlU3RyaW5nXSA6IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgLy8gd3JhcCBpbiB0aW1lb3V0IHRvIHNpbXVsYXRlIHNlcnZlciBhcGkgY2FsbFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBhdXRoZW50aWNhdGUgLSBwdWJsaWNcclxuICAgICAgICBpZiAodXJsLmVuZHNXaXRoKCcvYXBpL2F1dGgvbG9naW4nKSAmJiBvcHRzLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSBKU09OLnBhcnNlKG9wdHMuYm9keSk7XHJcbiAgICAgICAgICAvLyBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh4ID0+IHgudXNlcm5hbWUgPT09IHBhcmFtcy51c2VybmFtZSAmJiB4LnBhc3N3b3JkID09PSBwYXJhbXMucGFzc3dvcmQpO1xyXG4gICAgICAgICAgbGV0IHVzZXI7XHJcbiAgICAgICAgICB1c2Vycy5mb3JFYWNoKHUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodS5wYXNzd29yZCA9PT0gcGFyYW1zLnBhc3N3b3JkICYmIHUudXNlcm5hbWUgPT09IHBhcmFtcy51c2VybmFtZSkgcmV0dXJuIHVzZXIgPSB1O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICghdXNlcikgcmV0dXJuIGVycm9yKCdVc2VybmFtZSBvciBwYXNzd29yZCBpcyBpbmNvcnJlY3QnKTtcclxuICAgICAgICAgIHJldHVybiBvayh7XHJcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiB1c2VyLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IHVzZXIubGFzdE5hbWUsXHJcbiAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcclxuICAgICAgICAgICAgdG9rZW46IGBmYWtlLWp3dC10b2tlbi4ke3VzZXIucm9sZX1gLFxyXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIHNlY29uZF9uYW1lOiB1c2VyLnNlY29uZF9uYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgcGhvbmU6IHVzZXIucGhvbmVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVybC5lbmRzV2l0aCgnL2FwaS9hdXRoL3JlZ2lzdGVyJykgJiYgb3B0cy5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgICAgY29uc3QgcGFyYW1zID0gSlNPTi5wYXJzZShvcHRzLmJvZHkpO1xyXG4gICAgICAgICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICAgICAgaWQ6IHVzZXJzLmxlbmd0aCArIDEsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBwYXJhbXMudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXJhbXMucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJ05vcm1hbCcsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBSb2xlLlVzZXIsXHJcbiAgICAgICAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgIHNlY29uZF9uYW1lOiBudWxsLFxyXG4gICAgICAgICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgICAgICAgcGhvbmU6IG51bGxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB1c2Vycy5wdXNoKHVzZXIpO1xyXG5cclxuICAgICAgICAgIHJldHVybiBvayh7XHJcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiB1c2VyLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IHVzZXIubGFzdE5hbWUsXHJcbiAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcclxuICAgICAgICAgICAgdG9rZW46IGBmYWtlLWp3dC10b2tlbi4ke3VzZXIucm9sZX1gLFxyXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIHNlY29uZF9uYW1lOiB1c2VyLnNlY29uZF9uYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgcGhvbmU6IHVzZXIucGhvbmVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0IHVzZXIgYnkgaWQgLSBhZG1pbiBvciB1c2VyICh1c2VyIGNhbiBvbmx5IGFjY2VzcyB0aGVpciBvd24gcmVjb3JkKVxyXG4gICAgICAgIGlmICh1cmwubWF0Y2goL1xcL3VzZXJzXFwvXFxkKyQvKSAmJiBvcHRzLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICAgIGlmICghaXNMb2dnZWRJbikgcmV0dXJuIHVuYXV0aG9yaXNlZCgpO1xyXG5cclxuICAgICAgICAgIC8vIGdldCBpZCBmcm9tIHJlcXVlc3QgdXJsXHJcbiAgICAgICAgICBsZXQgdXJsUGFydHMgPSB1cmwuc3BsaXQoJy8nKTtcclxuICAgICAgICAgIGxldCBpZCA9IHBhcnNlSW50KHVybFBhcnRzW3VybFBhcnRzLmxlbmd0aCAtIDFdKTtcclxuXHJcbiAgICAgICAgICAvLyBvbmx5IGFsbG93IG5vcm1hbCB1c2VycyBhY2Nlc3MgdG8gdGhlaXIgb3duIHJlY29yZFxyXG4gICAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2Vycy5maW5kKHggPT4geC5yb2xlID09PSByb2xlKTtcclxuICAgICAgICAgIGlmIChpZCAhPT0gY3VycmVudFVzZXIuaWQgJiYgcm9sZSAhPT0gUm9sZS5BZG1pbikgcmV0dXJuIHVuYXV0aG9yaXNlZCgpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSB1c2Vycy5maW5kKHggPT4geC5pZCA9PT0gaWQpO1xyXG4gICAgICAgICAgcmV0dXJuIG9rKHVzZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0IGFsbCB1c2VycyAtIGFkbWluIG9ubHlcclxuICAgICAgICBpZiAodXJsLmVuZHNXaXRoKCcvdXNlcnMnKSAmJiBvcHRzLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICAgIGlmIChyb2xlICE9PSBSb2xlLkFkbWluKSByZXR1cm4gdW5hdXRob3Jpc2VkKCk7XHJcbiAgICAgICAgICByZXR1cm4gb2sodXNlcnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcGFzcyB0aHJvdWdoIGFueSByZXF1ZXN0cyBub3QgaGFuZGxlZCBhYm92ZVxyXG4gICAgICAgIHJlYWxGZXRjaCh1cmwsIG9wdHMpLnRoZW4ocmVzcG9uc2UgPT4gcmVzb2x2ZShyZXNwb25zZSkpO1xyXG5cclxuICAgICAgICAvLyBwcml2YXRlIGhlbHBlciBmdW5jdGlvbnNcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb2soYm9keSkge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7IG9rOiB0cnVlLCB0ZXh0OiAoKSA9PiBQcm9taXNlLnJlc29sdmUoSlNPTi5zdHJpbmdpZnkoYm9keSkpIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB1bmF1dGhvcmlzZWQoKSB7XHJcbiAgICAgICAgICByZXNvbHZlKHsgc3RhdHVzOiA0MDEsIHRleHQ6ICgpID0+IFByb21pc2UucmVzb2x2ZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6ICdVbmF1dGhvcmlzZWQnIH0pKSB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7IHN0YXR1czogNDAwLCB0ZXh0OiAoKSA9PiBQcm9taXNlLnJlc29sdmUoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlIH0pKSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgNTAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBhdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKS50aGVuKHRleHQgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHRleHQgJiYgSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgaWYgKFs0MDEsIDQwM10uaW5kZXhPZihyZXNwb25zZS5zdGF0dXMpICE9PSAtMSkge1xyXG4gICAgICAgIC8vIGF1dG8gbG9nb3V0IGlmIDQwMSBVbmF1dGhvcml6ZWQgb3IgNDAzIEZvcmJpZGRlbiByZXNwb25zZSByZXR1cm5lZCBmcm9tIGFwaVxyXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzVGV4dDtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5cclxubGV0IGhpc3RvcnlcclxuXHJcbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgLy8gY29uc3QgY3JlYXRlQnJvd3Nlckhpc3RvcnkgPSByZXF1aXJlKCdoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5JykuZGVmYXVsdFxyXG5cclxuICBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKVxyXG59XHJcblxyXG5leHBvcnQgeyBoaXN0b3J5IH07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vUHJpdmF0ZVJvdXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9hdXRoLWhlYWRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZmFrZS1iYWNrZW5kJztcclxuZXhwb3J0ICogZnJvbSAnLi9oYW5kbGUtcmVzcG9uc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2hpc3RvcnknO1xyXG5leHBvcnQgKiBmcm9tICcuL3JvbGUnO1xyXG4iLCJleHBvcnQgY29uc3QgUm9sZSA9IHtcclxuICBBZG1pbjogJ0FkbWluJyxcclxuICBVc2VyOiAnVXNlcicsXHJcbiAgUHJvdmlkZXI6ICdQcm92aWRlcidcclxufVxyXG4iLCJpbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHsgaGFuZGxlUmVzcG9uc2UgfSBmcm9tICcuLi9faGVscGVycyc7XHJcblxyXG5sZXQgY3VycmVudFVzZXJTdWJqZWN0ID0gKENvb2tpZXMuZ2V0SlNPTignY3VycmVudFVzZXInKSkgPyBDb29raWVzLmdldEpTT04oJ2N1cnJlbnRVc2VyJykgOiB7fTtcclxuXHJcbmNvbnN0IHRhcmdldCA9IGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpYDtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGlvblNlcnZpY2UgPSB7XHJcbiAgbG9naW4sXHJcbiAgbG9nb3V0LFxyXG4gIHJlZ2lzdHJhdGlvbkFkbWluLFxyXG4gIHJlZ2lzdHJhdGlvbkNsaWVudCxcclxuICByZWdpc3RyYXRpb25Qcm92aWRlcixcclxuICBjb25maXJtRW1haWwsXHJcbiAgY29uZmlybVNNUyxcclxuICBjdXJyZW50VXNlcjogY3VycmVudFVzZXJTdWJqZWN0LFxyXG4gIGdldCBjdXJyZW50VXNlclZhbHVlKCkgeyByZXR1cm4gY3VycmVudFVzZXJTdWJqZWN0IH1cclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2xvZ2luYCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pXHJcbiAgfSkudGhlbihoYW5kbGVSZXNwb25zZSlcclxuICAgIC50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAvLyBpZiAodXNlci50b2tlbikge1xyXG4gICAgICBDb29raWVzLnNldCgnY3VycmVudFVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICAgIGN1cnJlbnRVc2VyU3ViamVjdCA9IHVzZXI7XHJcbiAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAvLyB9XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyKSlcclxuICAvLyAudGhlbigoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0cmF0aW9uQ2xpZW50KG5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IG51bWJlciB8IHN0cmluZywgZW1haWw6IHN0cmluZywgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBudW1iZXIgfCBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gIC8vIGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvY2xpZW50L3JlZ2lzdGVyXHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2NsaWVudC9yZWdpc3RlcmAsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uXHJcbiAgICB9KVxyXG4gIH0pXHJcbiAgICAudGhlbihoYW5kbGVSZXNwb25zZSlcclxuICAgIC50aGVuKGNsaWVudCA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjbGllbnQ6JywgY2xpZW50KTtcclxuXHJcbiAgICAgIENvb2tpZXMuc2V0KCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KGNsaWVudCkpO1xyXG4gICAgICBjdXJyZW50VXNlclN1YmplY3QgPSBjbGllbnQ7XHJcbiAgICAgIHJldHVybiBjbGllbnQ7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyKSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0cmF0aW9uQWRtaW4obmFtZTogc3RyaW5nLCBwYXNzd29yZDogbnVtYmVyIHwgc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZF9jb25maXJtYXRpb246IG51bWJlciB8IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKGAke3RhcmdldH0vYWRtaW4vcmVnaXN0ZXJgLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvblxyXG4gICAgfSlcclxuICB9KS50aGVuKGhhbmRsZVJlc3BvbnNlKVxyXG4gICAgLnRoZW4oYWRtaW4gPT4ge1xyXG4gICAgICBDb29raWVzLnNldCgnY3VycmVudFVzZXInLCBKU09OLnN0cmluZ2lmeShhZG1pbikpO1xyXG4gICAgICBjdXJyZW50VXNlclN1YmplY3QgPSBhZG1pbjtcclxuICAgICAgcmV0dXJuIGFkbWluO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyKSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0cmF0aW9uUHJvdmlkZXIobmFtZTogc3RyaW5nLCBwYXNzd29yZDogbnVtYmVyIHwgc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZF9jb25maXJtYXRpb246IG51bWJlciB8IHN0cmluZywgcGhvbmU6IHN0cmluZyB8IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKGAke3RhcmdldH0vaW5kaXZpZHVhbC9yZWdpc3RlcmAsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uLFxyXG4gICAgICBwaG9uZVxyXG4gICAgfSlcclxuICB9KS50aGVuKGhhbmRsZVJlc3BvbnNlKVxyXG4gICAgLnRoZW4ocHJvdmlkZXIgPT4ge1xyXG4gICAgICBDb29raWVzLnNldCgnY3VycmVudFVzZXInLCBKU09OLnN0cmluZ2lmeShwcm92aWRlcikpO1xyXG4gICAgICBjdXJyZW50VXNlclN1YmplY3QgPSBwcm92aWRlcjtcclxuICAgICAgcmV0dXJuIHByb3ZpZGVyO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyKSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgQ29va2llcy5yZW1vdmUoJ2N1cnJlbnRVc2VyJyk7XHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKGAke3RhcmdldH0vbG9nb3V0YCwge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIG1vZGU6ICduby1jb3JzJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xyXG4gICAgfVxyXG4gIH0pLnRoZW4ocmVzID0+IHJlcylcclxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyKSlcclxufVxyXG5cclxuZnVuY3Rpb24gY29uZmlybUVtYWlsKHRva2VuOiBzdHJpbmcpOiBhbnkge1xyXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKGAvcmVnaXN0ZXIvYWN0aXZhdGVfZW1haWwvJHt0b2tlbn1gLCByZXF1ZXN0T3B0aW9ucylcclxuICAgIC50aGVuKGhhbmRsZVJlc3BvbnNlKVxyXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnIpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb25maXJtU01TKHRva2VuOiBzdHJpbmcpOiBhbnkge1xyXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKGAvcmVnaXN0ZXIvYWN0aXZhdGVfc21zLyR7dG9rZW59YCwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAudGhlbihoYW5kbGVSZXNwb25zZSlcclxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyKSlcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcbiIsImltcG9ydCB7IGF1dGhIZWFkZXIsIGhhbmRsZVJlc3BvbnNlIH0gZnJvbSAnLi4vX2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJTZXJ2aWNlID0ge1xyXG4gIGdldEFsbCxcclxuICBnZXRCeUlkLFxyXG4gIHVwZGF0ZSxcclxuICBkZWxldGVVc2VyXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRBbGwoKSB7XHJcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9O1xyXG4gIHJldHVybiBmZXRjaChgL3VzZXJzYCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oaGFuZGxlUmVzcG9uc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCeUlkKGlkKSB7XHJcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9O1xyXG4gIHJldHVybiBmZXRjaChgL3VzZXJzLyR7aWR9YCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oaGFuZGxlUmVzcG9uc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUoaWQsIG5hbWUsIHNlY29uZF9uYW1lLCBlbWFpbCwgcGhvbmUsIHJhdGluZywgcG9zaXRpb24sIHRlbGVncmFtLCB2aWJlciwgd2hhdHNhcHAsIHNpdGUsIGF2YXRhcikge1xyXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiBhdXRoSGVhZGVyKCksXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHNlY29uZF9uYW1lLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGhvbmUsXHJcbiAgICAgIHJhdGluZyxcclxuICAgICAgcG9zaXRpb24sXHJcbiAgICAgIHRlbGVncmFtLFxyXG4gICAgICB2aWJlcixcclxuICAgICAgd2hhdHNhcHAsXHJcbiAgICAgIHNpdGUsXHJcbiAgICAgIGF2YXRhclxyXG4gICAgfSlcclxuICB9O1xyXG4gIHJldHVybiBmZXRjaChgL2FwaS9hdXRoL3VzZXIvdXBkYXRlLyR7aWR9YCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oaGFuZGxlUmVzcG9uc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVVc2VyKGlkKSB7XHJcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgaGVhZGVyczogYXV0aEhlYWRlcigpXHJcbiAgfTtcclxuICByZXR1cm4gZmV0Y2goYC9hcGkvYXV0aC91c2VyL2Rlc3Ryb3kvJHtpZH1gLCByZXF1ZXN0T3B0aW9ucykudGhlbihoYW5kbGVSZXNwb25zZSk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcyBmcm9tICcuL2xvZ2luLm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luQ29udHJvbCh7IGNoYW5nZVZpc2libGVTaWduSW5Db21wb25lbnQsIHZpc2libGVTaWduSW5Db21wb25lbnQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dmlzaWJsZVNpZ25JbkNvbXBvbmVudCA/IHMuYWN0aXZlIDogbnVsbH0gJHtzLmxvZ2luX2J0bl9jb250cm9sfWB9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG5cIlxyXG4gICAgICAgIG9uQ2xpY2s9e2NoYW5nZVZpc2libGVTaWduSW5Db21wb25lbnR9PlxyXG4gICAgICAgIFNpZ25JbiAvIFNpZ25VcDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcyBmcm9tICcuL2xvZ2luLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCwgRm9ybSwgRXJyb3JNZXNzYWdlIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgYXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vX3NlcnZpY2VzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxvZ2luX3BhZ2VfZm9ybX0+XHJcbiAgICAgIDxoMj5Mb2dpbjwvaDI+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICB9fVxyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e1l1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICAgICAgICBlbWFpbDogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdlbWFpbCBpcyByZXF1aXJlZCcpLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnUGFzc3dvcmQgaXMgcmVxdWlyZWQnKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIG9uU3VibWl0PXsoeyBlbWFpbCwgcGFzc3dvcmQgfSwgeyBzZXRTdGF0dXMsIHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgc2V0U3RhdHVzKCk7XHJcbiAgICAgICAgICBhdXRoZW50aWNhdGlvblNlcnZpY2UubG9naW4oZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICB1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZnJvbSB9ID1cclxuICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5sb2NhdGlvbi5zdGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICB7IGZyb206IHsgcGF0aG5hbWU6IFwiL1wiIH0gfTtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGZyb20pO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0dXMoZXJyb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIHJlbmRlcj17KHsgZXJyb3JzLCBzdGF0dXMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImVtYWlsXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eydmb3JtLWNvbnRyb2wnICsgKGVycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsID8gJyBpcy1pbnZhbGlkJyA6ICcnKX0gLz5cclxuICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJlbWFpbFwiIGNvbXBvbmVudD1cImRpdlwiIGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPXsnZm9ybS1jb250cm9sJyArIChlcnJvcnMucGFzc3dvcmQgJiYgdG91Y2hlZC5wYXNzd29yZCA/ICcgaXMtaW52YWxpZCcgOiAnJyl9IC8+XHJcbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwicGFzc3dvcmRcIiBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17YGJ0biAke3Muc3VibWl0X2J0bn1gfSBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICB7aXNTdWJtaXR0aW5nICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtIHRleHQtcHJpbWFyeSBtbC0zXCIgcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzdGF0dXMgJiZcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2FsZXJ0IGFsZXJ0LWRhbmdlcid9PntzdGF0dXN9PC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHMgZnJvbSAnLi9sb2dpbi5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEZvcm1paywgRmllbGQsIEZvcm0sIEVycm9yTWVzc2FnZSB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL19zZXJ2aWNlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2Zvcm1Vc2VyLCBzZXRGb3JtVXNlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxvZ2luX3BhZ2VfZm9ybX0+XHJcbiAgICAgIDxoMj5SZWdpc3RyYXRpb248L2gyPlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJyxcclxuICAgICAgICAgIHBob25lOiAnJ1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17WXVwLm9iamVjdCgpLnNoYXBlKFxyXG4gICAgICAgICAgZm9ybVVzZXJcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgdXNlcm5hbWU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnVXNlcm5hbWUgaXMgcmVxdWlyZWQnKSxcclxuICAgICAgICAgICAgICBwYXNzd29yZDogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdQYXNzd29yZCBpcyByZXF1aXJlZCcpLFxyXG4gICAgICAgICAgICAgIGVtYWlsOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoJ0VtYWlsIGlzIHJlcXVpcmVkJyksXHJcbiAgICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICB1c2VybmFtZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdVc2VybmFtZSBpcyByZXF1aXJlZCcpLFxyXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJyksXHJcbiAgICAgICAgICAgICAgZW1haWw6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnRW1haWwgaXMgcmVxdWlyZWQnKSxcclxuICAgICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnUGFzc3dvcmQgaXMgcmVxdWlyZWQnKSxcclxuICAgICAgICAgICAgICBwaG9uZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdQaG9uZSBpcyByZXF1aXJlZCBhbmQgbXVzdCBjb250YWluIDEyIGNoYXJhY3RlcnMnKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICBvblN1Ym1pdD17KHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCwgcGFzc3dvcmRfY29uZmlybWF0aW9uLCBwaG9uZSB9LCB7IHNldFN0YXR1cywgc2V0U3VibWl0dGluZyB9KSA9PiB7XHJcbiAgICAgICAgICBzZXRTdGF0dXMoKTtcclxuICAgICAgICAgIHBob25lLnRvU3RyaW5nKCkubGVuZ3RoXHJcbiAgICAgICAgICAgID8gYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZ2lzdHJhdGlvblByb3ZpZGVyKHVzZXJuYW1lLCBwYXNzd29yZCwgZW1haWwsIHBhc3N3b3JkX2NvbmZpcm1hdGlvbiwgcGhvbmUpXHJcbiAgICAgICAgICAgIDogYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZ2lzdHJhdGlvbkNsaWVudCh1c2VybmFtZSwgcGFzc3dvcmQsIGVtYWlsLCBwYXNzd29yZF9jb25maXJtYXRpb24pXHJcbiAgICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICB1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXI6JywgdXNlcik7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZnJvbSB9ID1cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmxvY2F0aW9uLnN0YXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgeyBmcm9tOiB7IHBhdGhuYW1lOiBcIi9cIiB9IH07XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGZyb20pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFN0YXR1cyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIHJlbmRlcj17KHsgZXJyb3JzLCBzdGF0dXMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3Mucm9sZV90b2dnbGVyfWB9PlxyXG4gICAgICAgICAgICAgIHtmb3JtVXNlciA/IDxzcGFuIGNsYXNzTmFtZT17YCR7cy51c2VyfWB9PmFzIFVzZXI8L3NwYW4+IDogPHNwYW4gY2xhc3NOYW1lPXtgJHtzLm1vZGVsfWB9PmFzIE1vZGVsPC9zcGFuPn1cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLnN3aXRjaH0gaHRtbEZvcj1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsoKSA9PiBzZXRGb3JtVXNlcighZm9ybVVzZXIpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3Muc2xpZGVyfSAke3Mucm91bmR9YH0gLz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eydmb3JtLWNvbnRyb2wnICsgKGVycm9ycy51c2VybmFtZSAmJiB0b3VjaGVkLnVzZXJuYW1lID8gJyBpcy1pbnZhbGlkJyA6ICcnKX0gLz5cclxuICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJ1c2VybmFtZVwiIGNvbXBvbmVudD1cImRpdlwiIGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPXsnZm9ybS1jb250cm9sJyArIChlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCA/ICcgaXMtaW52YWxpZCcgOiAnJyl9IC8+XHJcbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwiZW1haWxcIiBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT17J2Zvcm0tY29udHJvbCcgKyAoZXJyb3JzLnBhc3N3b3JkICYmIHRvdWNoZWQucGFzc3dvcmQgPyAnIGlzLWludmFsaWQnIDogJycpfSAvPlxyXG4gICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cInBhc3N3b3JkXCIgY29tcG9uZW50PVwiZGl2XCIgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiPkNvbmZpcm0gcGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPXsnZm9ybS1jb250cm9sJyArIChlcnJvcnMucGFzc3dvcmRfY29uZmlybWF0aW9uICYmIHRvdWNoZWQucGFzc3dvcmRfY29uZmlybWF0aW9uID8gJyBpcy1pbnZhbGlkJyA6ICcnKX0gLz5cclxuICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJwYXNzd29yZF9jb25maXJtYXRpb25cIiBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHshZm9ybVVzZXIgJiYgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPlBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInBob25lXCIgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT17J2Zvcm0tY29udHJvbCcgKyAoZXJyb3JzLnBob25lICYmIHRvdWNoZWQucGhvbmUgPyAnIGlzLWludmFsaWQnIDogJycpfSAvPlxyXG4gICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cInBob25lXCIgY29tcG9uZW50PVwiZGl2XCIgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtgYnRuICR7cy5zdWJtaXRfYnRufWB9IGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIHtpc1N1Ym1pdHRpbmcgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gdGV4dC1wcmltYXJ5IG1sLTNcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3N0YXR1cyAmJlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYWxlcnQgYWxlcnQtZGFuZ2VyJ30+e0pTT04uc3RyaW5naWZ5KHN0YXR1cyl9e2NvbnNvbGUubG9nKHN0YXR1cyl9PC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvZ2luX3BhZ2VfZm9ybVwiOiBcImxvZ2luX2xvZ2luX3BhZ2VfZm9ybV9fMUkzaFhcIixcblx0XCJzdWJtaXRfYnRuXCI6IFwibG9naW5fc3VibWl0X2J0bl9fbldaYjlcIixcblx0XCJsb2dpbl9idG5fY29udHJvbFwiOiBcImxvZ2luX2xvZ2luX2J0bl9jb250cm9sX18xVlhoSVwiLFxuXHRcImFjdGl2ZVwiOiBcImxvZ2luX2FjdGl2ZV9fMzVHWTNcIixcblx0XCJ1c2VyXCI6IFwibG9naW5fdXNlcl9fMjJCZE1cIixcblx0XCJtb2RlbFwiOiBcImxvZ2luX21vZGVsX19zRjRCTlwiLFxuXHRcInJvbGVfdG9nZ2xlclwiOiBcImxvZ2luX3JvbGVfdG9nZ2xlcl9fajVhWjZcIixcblx0XCJzd2l0Y2hcIjogXCJsb2dpbl9zd2l0Y2hfXzJLWVFVXCIsXG5cdFwic2xpZGVyXCI6IFwibG9naW5fc2xpZGVyX185ZXFyZFwiLFxuXHRcInJvdW5kXCI6IFwibG9naW5fcm91bmRfXzFyU0tmXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2dpbi1wYWdlL1NpZ25JblwiO1xyXG5pbXBvcnQgU2lnblVwIGZyb20gXCIuLi9jb21wb25lbnRzL2xvZ2luLXBhZ2UvU2lnblVwXCI7XHJcbmltcG9ydCBMb2dpbkNvbnRyb2wgZnJvbSAnLi4vY29tcG9uZW50cy9sb2dpbi1wYWdlL0xvZ2luQ29udHJvbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpbigpIHtcclxuXHRjb25zdCBbdmlzaWJsZVNpZ25JbkNvbXBvbmVudCwgc2V0VmlzaWJsZVNpZ25JbkNvbXBvbmVudF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblx0Y29uc3QgY2hhbmdlVmlzaWJsZVNpZ25JbkNvbXBvbmVudCA9ICgpID0+IHtcclxuXHRcdHNldFZpc2libGVTaWduSW5Db21wb25lbnQoIXZpc2libGVTaWduSW5Db21wb25lbnQpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB4LTJcIj5cclxuXHRcdFx0PExvZ2luQ29udHJvbFxyXG5cdFx0XHRcdHZpc2libGVTaWduSW5Db21wb25lbnQ9e3Zpc2libGVTaWduSW5Db21wb25lbnR9XHJcblx0XHRcdFx0Y2hhbmdlVmlzaWJsZVNpZ25JbkNvbXBvbmVudD17Y2hhbmdlVmlzaWJsZVNpZ25JbkNvbXBvbmVudH1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdHt2aXNpYmxlU2lnbkluQ29tcG9uZW50ID8gPFNpZ25JbiAvPiA6IDxTaWduVXAgLz59XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaXN0b3J5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==