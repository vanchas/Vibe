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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ahTi");


/***/ }),

/***/ "BHMW":
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

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

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

/***/ "ahTi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ login; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/login-page/login.module.scss
var login_module = __webpack_require__("BHMW");
var login_module_default = /*#__PURE__*/__webpack_require__.n(login_module);

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/_services/index.js + 2 modules
var _services = __webpack_require__("rsSm");

// CONCATENATED MODULE: ./src/components/login-page/SignIn.jsx
var __jsx = external_react_default.a.createElement;






function SignIn() {
  const router = Object(router_["useRouter"])();
  return __jsx("div", {
    className: login_module_default.a.login_page_form
  }, __jsx("h2", null, "Login"), __jsx(external_formik_["Formik"], {
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: external_yup_["object"]().shape({
      email: external_yup_["string"]().required('email is required'),
      password: external_yup_["string"]().required('Password is required')
    }),
    onSubmit: ({
      email,
      password
    }, {
      setStatus,
      setSubmitting
    }) => {
      setStatus();
      _services["a" /* authenticationService */].login(email, password).then(user => {
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
    }) => __jsx(external_formik_["Form"], null, __jsx("div", {
      className: "form-group"
    }, __jsx("label", {
      htmlFor: "email"
    }, "Email"), __jsx(external_formik_["Field"], {
      name: "email",
      type: "text",
      className: 'form-control' + (errors.email && touched.email ? ' is-invalid' : '')
    }), __jsx(external_formik_["ErrorMessage"], {
      name: "email",
      component: "div",
      className: "invalid-feedback"
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("label", {
      htmlFor: "password"
    }, "Password"), __jsx(external_formik_["Field"], {
      name: "password",
      type: "password",
      className: 'form-control' + (errors.password && touched.password ? ' is-invalid' : '')
    }), __jsx(external_formik_["ErrorMessage"], {
      name: "password",
      component: "div",
      className: "invalid-feedback"
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("button", {
      type: "submit",
      className: `btn ${login_module_default.a.submit_btn}`,
      disabled: isSubmitting
    }, "Submit"), isSubmitting && __jsx("div", {
      className: "spinner-border spinner-border-sm text-primary ml-3",
      role: "status"
    }, __jsx("span", {
      className: "sr-only"
    }, "Loading..."))), status && __jsx("div", {
      className: 'alert alert-danger'
    }, status))
  }));
}
// CONCATENATED MODULE: ./src/components/login-page/SignUp.jsx
var SignUp_jsx = external_react_default.a.createElement;






function SignUp() {
  const router = Object(router_["useRouter"])();
  const {
    0: formUser,
    1: setFormUser
  } = Object(external_react_["useState"])(true);
  return SignUp_jsx("div", {
    className: login_module_default.a.login_page_form
  }, SignUp_jsx("h2", null, "Registration"), SignUp_jsx(external_formik_["Formik"], {
    initialValues: {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone: ''
    },
    validationSchema: external_yup_["object"]().shape(formUser ? {
      username: external_yup_["string"]().required('Username is required'),
      password: external_yup_["string"]().required('Password is required'),
      email: external_yup_["string"]().required('Email is required'),
      password_confirmation: external_yup_["string"]().required('Password is required')
    } : {
      username: external_yup_["string"]().required('Username is required'),
      password: external_yup_["string"]().required('Password is required'),
      email: external_yup_["string"]().required('Email is required'),
      password_confirmation: external_yup_["string"]().required('Password is required'),
      phone: external_yup_["string"]().required('Phone is required and must contain 12 characters')
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
      phone.toString().length ? _services["a" /* authenticationService */].registrationProvider(username, password, email, password_confirmation, phone) : _services["a" /* authenticationService */].registrationClient(username, password, email, password_confirmation).then(user => {
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
    }) => SignUp_jsx(external_formik_["Form"], null, SignUp_jsx("div", {
      className: `${login_module_default.a.role_toggler}`
    }, formUser ? SignUp_jsx("span", {
      className: `${login_module_default.a.user}`
    }, "as User") : SignUp_jsx("span", {
      className: `${login_module_default.a.model}`
    }, "as Model"), SignUp_jsx("label", {
      className: login_module_default.a.switch,
      htmlFor: "checkbox"
    }, SignUp_jsx("input", {
      type: "checkbox",
      id: "checkbox",
      onChange: () => setFormUser(!formUser)
    }), SignUp_jsx("div", {
      className: `${login_module_default.a.slider} ${login_module_default.a.round}`
    }))), SignUp_jsx("div", {
      className: "form-group"
    }, SignUp_jsx("label", {
      htmlFor: "username"
    }, "Username"), SignUp_jsx(external_formik_["Field"], {
      name: "username",
      type: "text",
      className: 'form-control' + (errors.username && touched.username ? ' is-invalid' : '')
    }), SignUp_jsx(external_formik_["ErrorMessage"], {
      name: "username",
      component: "div",
      className: "invalid-feedback"
    })), SignUp_jsx("div", {
      className: "form-group"
    }, SignUp_jsx("label", {
      htmlFor: "email"
    }, "Email"), SignUp_jsx(external_formik_["Field"], {
      name: "email",
      type: "email",
      className: 'form-control' + (errors.email && touched.email ? ' is-invalid' : '')
    }), SignUp_jsx(external_formik_["ErrorMessage"], {
      name: "email",
      component: "div",
      className: "invalid-feedback"
    })), SignUp_jsx("div", {
      className: "form-group"
    }, SignUp_jsx("label", {
      htmlFor: "password"
    }, "Password"), SignUp_jsx(external_formik_["Field"], {
      name: "password",
      type: "password",
      className: 'form-control' + (errors.password && touched.password ? ' is-invalid' : '')
    }), SignUp_jsx(external_formik_["ErrorMessage"], {
      name: "password",
      component: "div",
      className: "invalid-feedback"
    })), SignUp_jsx("div", {
      className: "form-group"
    }, SignUp_jsx("label", {
      htmlFor: "password_confirmation"
    }, "Confirm password"), SignUp_jsx(external_formik_["Field"], {
      name: "password_confirmation",
      type: "password",
      className: 'form-control' + (errors.password_confirmation && touched.password_confirmation ? ' is-invalid' : '')
    }), SignUp_jsx(external_formik_["ErrorMessage"], {
      name: "password_confirmation",
      component: "div",
      className: "invalid-feedback"
    })), !formUser && SignUp_jsx("div", {
      className: "form-group"
    }, SignUp_jsx("label", {
      htmlFor: "phone"
    }, "Phone"), SignUp_jsx(external_formik_["Field"], {
      name: "phone",
      type: "number",
      className: 'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')
    }), SignUp_jsx(external_formik_["ErrorMessage"], {
      name: "phone",
      component: "div",
      className: "invalid-feedback"
    })), SignUp_jsx("div", {
      className: "form-group"
    }, SignUp_jsx("button", {
      type: "submit",
      className: `btn ${login_module_default.a.submit_btn}`,
      disabled: isSubmitting
    }, "Submit"), isSubmitting && SignUp_jsx("div", {
      className: "spinner-border spinner-border-sm text-primary ml-3",
      role: "status"
    }, SignUp_jsx("span", {
      className: "sr-only"
    }, "Loading..."))), status && SignUp_jsx("div", {
      className: 'alert alert-danger'
    }, JSON.stringify(status), console.log(status)))
  }));
}
// CONCATENATED MODULE: ./src/components/login-page/LoginControl.jsx
var LoginControl_jsx = external_react_default.a.createElement;


function LoginControl({
  changeVisibleSignInComponent,
  visibleSignInComponent
}) {
  return LoginControl_jsx("div", {
    className: `${visibleSignInComponent ? login_module_default.a.active : null} ${login_module_default.a.login_btn_control}`
  }, LoginControl_jsx("span", {
    className: "btn",
    onClick: changeVisibleSignInComponent
  }, "SignIn / SignUp"));
}
// CONCATENATED MODULE: ./src/pages/login.jsx
var login_jsx = external_react_default.a.createElement;




function login() {
  const {
    0: visibleSignInComponent,
    1: setVisibleSignInComponent
  } = Object(external_react_["useState"])(true);

  const changeVisibleSignInComponent = () => {
    setVisibleSignInComponent(!visibleSignInComponent);
  };

  return login_jsx("div", {
    className: "px-2"
  }, login_jsx(LoginControl, {
    visibleSignInComponent: visibleSignInComponent,
    changeVisibleSignInComponent: changeVisibleSignInComponent
  }), visibleSignInComponent ? login_jsx(SignIn, null) : login_jsx(SignUp, null));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ })

/******/ });