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

/***/ "./src/components/helpers/Success.jsx":
/*!********************************************!*\
  !*** ./src/components/helpers/Success.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _success_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./success.module.scss */ "./src/components/helpers/success.module.scss");
/* harmony import */ var _success_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_success_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/helpers/Success.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Success({
  success
}) {
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(success ? true : false);

  const toggle = () => setModal(!modal);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setModal(success ? true : false);
    setTimeout(() => setModal(false), 3000);
  }, []);
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "alert alert-info",
    role: "alert",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }
  }, success));
}

const mapStateToProps = state => ({
  success: state.app.success
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, null)(Success));

/***/ }),

/***/ "./src/components/helpers/success.module.scss":
/*!****************************************************!*\
  !*** ./src/components/helpers/success.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


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
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/login-page/LoginControl.jsx";
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
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/login-page/SignIn.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function SignIn({
  registeredPassword,
  registeredEmail
}) {
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
      _services__WEBPACK_IMPORTED_MODULE_5__["authenticationService"].login(email, password).then(data => {// console.log('data:', data);
        // if (data.token) {
        //   if (data.user.role === 'client') {
        //     router.push('/userCabinet');
        //   } else if (data.user.role = 'individual') {
        //     router.push('/modelCabinet');
        //   } else if (data.user.role === 'admin') {
        //     router.push('/admin');
        //   } else if (data.user.role === 'agency') {
        //     router.push('/modelCabinet');
        //   }
        // }
      }, error => {
        setSubmitting(false);
        setStatus(error);
      }) // .then(() => window.location.reload(true))
      .catch(err => console.error("Error:", err));
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
        lineNumber: 51,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, __jsx("label", {
      htmlFor: "email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 15
      }
    }, "Email"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "email",
      type: "text",
      className: 'form-control' + (errors.email && touched.email ? ' is-invalid' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "email",
      component: "div",
      className: "invalid-feedback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, __jsx("label", {
      htmlFor: "password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    }, "Password"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "password",
      type: "password",
      className: 'form-control' + (errors.password && touched.password ? ' is-invalid' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "password",
      component: "div",
      className: "invalid-feedback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, __jsx("button", {
      type: "submit",
      className: `btn ${_login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.submit_btn}`,
      disabled: isSubmitting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }, "Submit"), isSubmitting && __jsx("div", {
      className: "spinner-border spinner-border-sm text-primary ml-3",
      role: "status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "sr-only",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 19
      }
    }, "Loading..."))), status && __jsx("div", {
      className: 'alert alert-danger',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
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
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/components/login-page/SignUp.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function SignUp({
  setVisibleSignInComponent,
  setRegisteredEmail,
  setRegisteredPassword
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    0: formUser,
    1: setFormUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: isAgency,
    1: setIsAgency
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx("div", {
    className: _login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.login_page_form,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "Registration"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone: '',
      agency: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape(formUser ? {
      username: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Username is required'),
      password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Password is required'),
      email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Email is required'),
      password_confirmation: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Password is required')
    } : !isAgency ? {
      username: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Username is required'),
      password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Password is required'),
      email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Email is required'),
      password_confirmation: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Password is required'),
      phone: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Phone is required and must contain 12 characters')
    } : {
      username: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Username is required'),
      password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Password is required'),
      email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Email is required'),
      password_confirmation: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Password is required'),
      phone: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Phone is required and must contain 12 characters'),
      agency: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Agency is required')
    }),
    onSubmit: ({
      username,
      email,
      password,
      password_confirmation,
      phone,
      agency
    }, {
      setStatus,
      setSubmitting
    }) => {
      setStatus();
      phone.toString().length ? !isAgency ? _services__WEBPACK_IMPORTED_MODULE_5__["authenticationService"].registrationProvider(username, password, email, password_confirmation, phone) : _services__WEBPACK_IMPORTED_MODULE_5__["authenticationService"].registrationAgency(username, password, email, password_confirmation, phone, agency) : _services__WEBPACK_IMPORTED_MODULE_5__["authenticationService"].registrationClient(username, password, email, password_confirmation).then(user => {// const { from } =
        //   { from: { pathname: "/" } };
        // router.push({
        //   pathname: '/login',
        // query: { email, password }
        // });
        // setRegisteredEmail(email);
        // setRegisteredPassword(password);
        // setVisibleSignInComponent(true);
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
        lineNumber: 84,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: `${_login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.role_toggler}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    }, formUser ? __jsx("span", {
      className: `${_login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 27
      }
    }, "as User") : __jsx("span", {
      className: `${_login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.model}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 74
      }
    }, "as Model"), __jsx("label", {
      className: _login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.switch,
      htmlFor: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 15
      }
    }, __jsx("input", {
      type: "checkbox",
      id: "checkbox",
      onChange: () => setFormUser(!formUser),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: `${_login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slider} ${_login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.round}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }))), __jsx("div", {
      className: "form-group d-flex justify-content-end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, !formUser ? __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "h4 mr-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 26
      }
    }, "as Agency"), __jsx("input", {
      type: "checkbox",
      onChange: () => setIsAgency(!isAgency),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 19
      }
    })) : null), __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }, __jsx("label", {
      htmlFor: "username",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 15
      }
    }, "Username"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "username",
      type: "text",
      className: 'form-control' + (errors.username && touched.username ? ' is-invalid' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 15
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "username",
      component: "div",
      className: "invalid-feedback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }
    }, __jsx("label", {
      htmlFor: "email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }
    }, "Email"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "email",
      type: "email",
      className: 'form-control' + (errors.email && touched.email ? ' is-invalid' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 15
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "email",
      component: "div",
      className: "invalid-feedback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }
    }, __jsx("label", {
      htmlFor: "password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 15
      }
    }, "Password"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "password",
      type: "password",
      className: 'form-control' + (errors.password && touched.password ? ' is-invalid' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 15
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "password",
      component: "div",
      className: "invalid-feedback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }, __jsx("label", {
      htmlFor: "password_confirmation",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 15
      }
    }, "Confirm password"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "password_confirmation",
      type: "password",
      className: 'form-control' + (errors.password_confirmation && touched.password_confirmation ? ' is-invalid' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 15
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "password_confirmation",
      component: "div",
      className: "invalid-feedback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 15
      }
    })), !formUser && __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 27
      }
    }, __jsx("label", {
      htmlFor: "phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 15
      }
    }, "Phone"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "phone",
      type: "number",
      className: 'form-control' + (errors.phone && touched.phone ? ' is-invalid' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 15
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "phone",
      component: "div",
      className: "invalid-feedback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 15
      }
    })), isAgency && __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 26
      }
    }, __jsx("label", {
      htmlFor: "agency",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 15
      }
    }, "Agency Name"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "agency",
      type: "text",
      className: 'form-control' + (errors.agency && touched.agency ? ' is-invalid' : ''),
      id: "agency",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 15
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "agency",
      component: "div",
      className: "invalid-feedback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }, __jsx("button", {
      type: "submit",
      className: `btn ${_login_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.submit_btn}`,
      disabled: isSubmitting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 15
      }
    }, "Submit"), isSubmitting && __jsx("div", {
      className: "spinner-border spinner-border-sm text-primary ml-3",
      role: "status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "sr-only",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 19
      }
    }, "Loading..."))), status && __jsx("div", {
      className: 'alert alert-danger',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 15
      }
    }, JSON.stringify(status), console.log(status))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_login_page_SignIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/login-page/SignIn */ "./src/components/login-page/SignIn.jsx");
/* harmony import */ var _components_login_page_SignUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/login-page/SignUp */ "./src/components/login-page/SignUp.jsx");
/* harmony import */ var _components_login_page_LoginControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/login-page/LoginControl */ "./src/components/login-page/LoginControl.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_helpers_Success__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/helpers/Success */ "./src/components/helpers/Success.jsx");
var _jsxFileName = "/home/dev-2/WebstormProjects/vibe/src/pages/login.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function login({
  success
}) {
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
      lineNumber: 16,
      columnNumber: 3
    }
  }, __jsx(_components_login_page_LoginControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    visibleSignInComponent: visibleSignInComponent,
    changeVisibleSignInComponent: changeVisibleSignInComponent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }), success && __jsx(_components_helpers_Success__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 16
    }
  }), visibleSignInComponent ? __jsx(_components_login_page_SignIn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }) : __jsx(_components_login_page_SignUp__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }));
}

const mapStateToProps = state => ({
  success: state.app.success
});

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(login));

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
    console.log(res); // return dispatch({ type: GET_APP_INFO, payload: res.data });
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


 // import { forbiddenWordsMiddlwware } from './middleware';



const preloadedState = {};
const saga = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__["default"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a, // forbiddenWordsMiddlwware,
saga));
saga.run(_sagas_sagas__WEBPACK_IMPORTED_MODULE_4__["rootSaga"]);
store.subscribe(() => {
  console.log('updated state: ', store.getState());
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./src/pages/login.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dev-2/WebstormProjects/vibe/src/pages/login.jsx */"./src/pages/login.jsx");


/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

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

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9fc2VydmljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVscGVycy9TdWNjZXNzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWxwZXJzL3N1Y2Nlc3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9naW4tcGFnZS9Mb2dpbkNvbnRyb2wuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luLXBhZ2UvU2lnbkluLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dpbi1wYWdlL1NpZ25VcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9naW4tcGFnZS9sb2dpbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbG9naW4uanN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2FkbWluUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXBwUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcHJvdmlkZXJSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9yb290UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvdGVzdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3VzZXJSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zYWdhcy9zYWdhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc2FnYXMvdGVzdFNhZ2FzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zdG9yZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ5dXBcIiJdLCJuYW1lcyI6WyJjdXJyZW50VXNlclN1YmplY3QiLCJDb29raWVzIiwiZ2V0SlNPTiIsInRhcmdldCIsImF1dGhlbnRpY2F0aW9uU2VydmljZSIsImxvZ2luIiwibG9nb3V0IiwicmVnaXN0cmF0aW9uQWRtaW4iLCJyZWdpc3RyYXRpb25DbGllbnQiLCJyZWdpc3RyYXRpb25Qcm92aWRlciIsInJlZ2lzdHJhdGlvbkFnZW5jeSIsImN1cnJlbnRVc2VyIiwiY3VycmVudFVzZXJWYWx1ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyZW1vdmUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvbWlzZSIsImpzb24iLCJzdGF0dXMiLCJ0aGVuIiwiZGF0YSIsInNldCIsImV4cGlyZXMiLCJSb3V0ZXIiLCJwdXNoIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm5hbWUiLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJzdG9yZSIsImRpc3BhdGNoIiwic2hvd1N1Y2Nlc3MiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsInBob25lIiwiYWdlbmN5X25hbWUiLCJTdWNjZXNzIiwic3VjY2VzcyIsIm1vZGFsIiwic2V0TW9kYWwiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsInVzZUVmZmVjdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiYXBwIiwiY29ubmVjdCIsIkxvZ2luQ29udHJvbCIsImNoYW5nZVZpc2libGVTaWduSW5Db21wb25lbnQiLCJ2aXNpYmxlU2lnbkluQ29tcG9uZW50IiwicyIsImFjdGl2ZSIsImxvZ2luX2J0bl9jb250cm9sIiwiU2lnbkluIiwicmVnaXN0ZXJlZFBhc3N3b3JkIiwicmVnaXN0ZXJlZEVtYWlsIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9naW5fcGFnZV9mb3JtIiwiWXVwIiwic2hhcGUiLCJyZXF1aXJlZCIsInNldFN0YXR1cyIsInNldFN1Ym1pdHRpbmciLCJlcnJvcnMiLCJ0b3VjaGVkIiwiaXNTdWJtaXR0aW5nIiwic3VibWl0X2J0biIsIlNpZ25VcCIsInNldFZpc2libGVTaWduSW5Db21wb25lbnQiLCJzZXRSZWdpc3RlcmVkRW1haWwiLCJzZXRSZWdpc3RlcmVkUGFzc3dvcmQiLCJmb3JtVXNlciIsInNldEZvcm1Vc2VyIiwiaXNBZ2VuY3kiLCJzZXRJc0FnZW5jeSIsInVzZXJuYW1lIiwiYWdlbmN5IiwidG9TdHJpbmciLCJsZW5ndGgiLCJ1c2VyIiwibG9nIiwicm9sZV90b2dnbGVyIiwibW9kZWwiLCJzd2l0Y2giLCJzbGlkZXIiLCJyb3VuZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNyZWF0ZVBvc3QiLCJwb3N0IiwidHlwZSIsIlRFU1RfQ1JFQVRFX1BPU1QiLCJwYXlsb2FkIiwic2hvd0xvYWRlciIsIlNIT1dfTE9BREVSIiwiaGlkZUxvYWRlciIsIkhJREVfTE9BREVSIiwic2hvd0FsZXJ0IiwidGV4dCIsIlNIT1dfQUxFUlQiLCJoaWRlQWxlcnQiLCJISURFX0FMRVJUIiwiZmV0Y2hQb3N0cyIsIlRFU1RfUkVRVUVTVF9QT1NUUyIsImdldEFsbFBvc3RzIiwicmVzIiwiR0VUX1BBR0VTX05VTUJFUiIsImxhc3RfcGFnZSIsIkdFVF9BTExfUE9TVFMiLCJnZXROZXdQb3N0cyIsIkdFVF9ORVdfUE9TVFMiLCJnZXRMb2NhdGlvbnNJbmZvIiwiR0VUX0xPQ0FJVE9OU19JTkZPIiwiZ2V0QXBwSW5mbyIsImdldENpdGllcyIsInN0YXRlSWQiLCJHRVRfQ0lUSUVTIiwiY3JlYXRlU3VwcG9ydFRhc2siLCJ0YXNrIiwidG9rZW5fdHlwZSIsInRva2VuIiwiQ1JFQVRFX1NVUFBPUlRfVEFTSyIsImdldEFsbFVzZXJzVGFza3MiLCJpZCIsIkdFVF9BTExfVVNFUl9UQVNLUyIsInNlbGVjdFBvc3RzUGFnZSIsInBhZ2UiLCJnZXRQb3N0Q29tbWVudHMiLCJwb3N0SWQiLCJHRVRfUE9TVF9DT01NRU5UUyIsImNyZWF0ZVBvc3RDb21tZW50IiwiY29tbWVudCIsIkNSRUFURV9QT1NUX0NPTU1FTlQiLCJmaWx0ZXJQb3N0cyIsImZpbHRlckl0ZW1zT2JqZWN0IiwiRklMVEVSX1BPU1RTIiwicmVwb3J0UG9zdCIsImFkZFRvRmF2b3JpdGVzIiwiaXNfZmF2b3JpdGUiLCJhZGRUb0Zhdm9yaXRlc0J1c2luZXNzIiwiZ2V0RmF2b3JpdGVzQnVzaW5lc3MiLCJHRVRfRkFWT1JJVEVTIiwiZ2V0RmF2b3JpdGVzVXNlciIsImdldENvbXBsYWlucyIsInVzZXJJZCIsIkdFVF9DT01QTEFJTlMiLCJzb3J0UG9zdHMiLCJzb3J0VHlwZSIsIlNPUlRfUE9TVFMiLCJTSE9XX1NVQ0NFU1MiLCJURVNUX0ZFVENIX1BPU1QiLCJHRVRfQVBQX0lORk8iLCJSRVBPUlRfUE9TVCIsIkFERF9QT1NUIiwiUkVNT1ZFX1BPU1QiLCJVUERBVEVfUE9TVCIsIlNFTEVDVF9TVEFURSIsIlNFTEVDVF9DSVRZIiwiU0VMRUNUX0xJU1RfU09SVCIsIlNFTEVDVF9MSVNUX0ZJTFRFUiIsIlNFTEVDVF9DQVRFR09SWSIsIkdFVF9BTExfU1VQUE9SVF9UQVNLUyIsIkVESVRfU1VQUE9SVF9UQVNLUyIsIkRFTEVURV9TVVBQT1JUX1RBU0siLCJpbml0aWFsU3RhdGUiLCJ0YXNrcyIsImFkbWluUmVkdWNlciIsImFjdGlvbiIsImZpbHRlciIsInBvc3RDb21tZW50cyIsImxvYWRpbmciLCJhbGVydCIsImNhdGVnb3JpZXMiLCJwb3N0cyIsIm5ld1Bvc3RzIiwic3RhdGVzIiwiY2l0aWVzIiwic3VwcG9ydFRhc2tzIiwiYWZmaWxpYXRpb24iLCJhdmFpbGFiaWxpdHkiLCJhdmFpbGFibGVfdG8iLCJldGhuaWNpdHkiLCJleWVzIiwiaGFpciIsInBhZ2VzTnVtYmVyIiwiZmF2b3JpdGVzIiwiY29tcGxhaW5zIiwiYXBwUmVkdWNlciIsInNvcnQiLCJhIiwiYiIsImRhdGVBIiwiRGF0ZSIsImNyZWF0ZWRfYXQiLCJzcGxpdCIsImpvaW4iLCJkYXRlQiIsImdldFRpbWUiLCJwcm92aWRlclBvc3RzIiwicHJvdmlkZXJSZWR1Y2VyIiwiY29uY2F0Iiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ0ZXN0UG9zdHMiLCJ0ZXN0UmVkdWNlciIsInByb3ZpZGVyIiwidXNlclJlZHVjZXIiLCJhZG1pbiIsImZldGNoZWRQb3N0cyIsInJvb3RTYWdhIiwiYWxsIiwic2FnYVdhdGNoZXIiLCJ0YWtlRXZlcnkiLCJzYWdhV29ya2VyIiwicHV0IiwiY2FsbCIsImUiLCJwcmVsb2FkZWRTdGF0ZSIsInNhZ2EiLCJjcmVhdGVTYWdhc01pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwicnVuIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsa0JBQWtCLEdBQUdDLGdEQUFPLENBQUNDLE9BQVIsQ0FBZ0IsYUFBaEIsSUFDbkJELGdEQUFPLENBQUNDLE9BQVIsQ0FBZ0IsYUFBaEIsQ0FEbUIsR0FFbkIsRUFGTjtBQUlBLE1BQU1DLE1BQU0sR0FBSSx1Q0FBaEI7QUFFTyxNQUFNQyxxQkFBcUIsR0FBRztBQUNqQ0MsT0FEaUM7QUFFakNDLFFBRmlDO0FBR2pDQyxtQkFIaUM7QUFJakNDLG9CQUppQztBQUtqQ0Msc0JBTGlDO0FBTWpDQyxvQkFOaUM7QUFPakNDLGFBQVcsRUFBRVgsa0JBUG9COztBQVFqQyxNQUFJWSxnQkFBSixHQUF1QjtBQUNuQixXQUFPWixrQkFBUDtBQUNIOztBQVZnQyxDQUE5Qjs7QUFhUCxlQUFlSyxLQUFmLENBQXFCUSxLQUFyQixFQUFvQ0MsUUFBcEMsRUFBb0U7QUFDaEViLGtEQUFPLENBQUNjLE1BQVIsQ0FBZSxhQUFmO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLHlEQUFLLENBQUUsR0FBRWQsTUFBTyxRQUFYLEVBQW9CO0FBQzVDZSxVQUFNLEVBQUUsTUFEb0M7QUFFNUNDLFdBQU8sRUFBRTtBQUFDLHNCQUFnQjtBQUFqQixLQUZtQztBQUc1Q0MsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDVCxXQUFEO0FBQVFDO0FBQVIsS0FBZjtBQUhzQyxHQUFwQixDQUE1QjtBQUtBLFFBQU1TLE9BQU8sR0FBR1AsUUFBUSxDQUFDUSxJQUFULEVBQWhCOztBQUNBLE1BQUlSLFFBQVEsQ0FBQ1MsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUN6QixXQUFPRixPQUFPLENBQUNHLElBQVIsQ0FBYUMsSUFBSSxJQUFJO0FBQ3hCMUIsc0RBQU8sQ0FBQzJCLEdBQVIsQ0FBWSxhQUFaLEVBQTJCUCxJQUFJLENBQUNDLFNBQUwsQ0FBZUssSUFBZixDQUEzQixFQUFpRDtBQUFDRSxlQUFPLEVBQUU7QUFBVixPQUFqRDtBQUNBN0Isd0JBQWtCLEdBQUcyQixJQUFyQjtBQUNBLGFBQU9BLElBQVA7QUFDSCxLQUpNLEVBSUpELElBSkksQ0FJQyxNQUFNSSxrREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWixDQUpQLEVBS0ZMLElBTEUsQ0FLRyxNQUFNTSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLEVBTFQsRUFNRkMsS0FORSxDQU1LQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFFBQWQsRUFBd0JGLEdBQXhCLENBTmIsQ0FBUDtBQU9IO0FBQ0o7O0FBRUQsZUFBZTVCLGtCQUFmLENBQ0krQixJQURKLEVBRUl6QixRQUZKLEVBR0lELEtBSEosRUFJSTJCLHFCQUpKLEVBS2dCO0FBQ1p2QyxrREFBTyxDQUFDYyxNQUFSLENBQWUsYUFBZjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyx5REFBSyxDQUFFLHVEQUFGLEVBQTBEO0FBQ2xGQyxVQUFNLEVBQUUsTUFEMEU7QUFFbEZDLFdBQU8sRUFBRTtBQUFDLHNCQUFnQixrQkFBakI7QUFBcUMsZ0JBQVU7QUFBL0MsS0FGeUU7QUFHbEZDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDakJpQixVQURpQjtBQUVqQnpCLGNBRmlCO0FBR2pCRCxXQUhpQjtBQUlqQjJCO0FBSmlCLEtBQWY7QUFINEUsR0FBMUQsQ0FBNUI7QUFVQSxRQUFNakIsT0FBTyxHQUFHUCxRQUFRLENBQUNRLElBQVQsRUFBaEI7O0FBQ0EsTUFBSVIsUUFBUSxDQUFDUyxNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCLFdBQU9GLE9BQU8sQ0FBQ0csSUFBUixDQUFjQyxJQUFELElBQWU7QUFDL0JjLDBEQUFLLENBQUNDLFFBQU4sQ0FBZUMsMEVBQVcsQ0FBQ2hCLElBQUksQ0FBQ2lCLE9BQU4sQ0FBMUI7QUFDQUMsZ0JBQVUsQ0FBQyxNQUFNYixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLEVBQVAsRUFBaUMsSUFBakMsQ0FBVjtBQUNILEtBSE0sRUFHSkMsS0FISSxDQUdHQyxHQUFELElBQWNDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFFBQWQsRUFBd0JGLEdBQXhCLENBSGhCLENBQVA7QUFJSDtBQUNKOztBQUVELGVBQWU3QixpQkFBZixDQUNJZ0MsSUFESixFQUVJekIsUUFGSixFQUdJRCxLQUhKLEVBSUkyQixxQkFKSixFQUtnQjtBQUNadkMsa0RBQU8sQ0FBQ2MsTUFBUixDQUFlLGFBQWY7QUFDQSxRQUFNQyxRQUFRLEdBQUcsTUFBTUMseURBQUssQ0FBRSxHQUFFZCxNQUFPLGlCQUFYLEVBQTZCO0FBQ3JEZSxVQUFNLEVBQUUsTUFENkM7QUFFckRDLFdBQU8sRUFBRTtBQUFDLHNCQUFnQixrQkFBakI7QUFBcUMsZ0JBQVU7QUFBL0MsS0FGNEM7QUFHckRDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDakJpQixVQURpQjtBQUVqQnpCLGNBRmlCO0FBR2pCRCxXQUhpQjtBQUlqQjJCO0FBSmlCLEtBQWY7QUFIK0MsR0FBN0IsQ0FBNUI7QUFVQSxRQUFNakIsT0FBTyxHQUFHUCxRQUFRLENBQUNRLElBQVQsRUFBaEI7O0FBQ0EsTUFBSVIsUUFBUSxDQUFDUyxNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCLFdBQU9GLE9BQU8sQ0FBQ0csSUFBUixDQUFjQyxJQUFELElBQWU7QUFDL0JjLDBEQUFLLENBQUNDLFFBQU4sQ0FBZUMsMEVBQVcsQ0FBQ2hCLElBQUksQ0FBQ2lCLE9BQU4sQ0FBMUI7QUFDQUMsZ0JBQVUsQ0FBQyxNQUFNYixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLEVBQVAsRUFBaUMsSUFBakMsQ0FBVjtBQUNILEtBSE0sRUFHSkMsS0FISSxDQUdHQyxHQUFELElBQWNDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFFBQWQsRUFBd0JGLEdBQXhCLENBSGhCLENBQVA7QUFJSDtBQUNKOztBQUVELGVBQWUzQixvQkFBZixDQUNJOEIsSUFESixFQUVJekIsUUFGSixFQUdJRCxLQUhKLEVBSUkyQixxQkFKSixFQUtJTSxLQUxKLEVBTWdCO0FBQ1o3QyxrREFBTyxDQUFDYyxNQUFSLENBQWUsYUFBZjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyx5REFBSyxDQUFFLEdBQUVkLE1BQU8sc0JBQVgsRUFBa0M7QUFDMURlLFVBQU0sRUFBRSxNQURrRDtBQUUxREMsV0FBTyxFQUFFO0FBQUMsc0JBQWdCLGtCQUFqQjtBQUFxQyxnQkFBVTtBQUEvQyxLQUZpRDtBQUcxREMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQmlCLFVBRGlCO0FBRWpCekIsY0FGaUI7QUFHakJELFdBSGlCO0FBSWpCMkIsMkJBSmlCO0FBS2pCTTtBQUxpQixLQUFmO0FBSG9ELEdBQWxDLENBQTVCO0FBV0EsUUFBTXZCLE9BQU8sR0FBR1AsUUFBUSxDQUFDUSxJQUFULEVBQWhCOztBQUNBLE1BQUlSLFFBQVEsQ0FBQ1MsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUN6QixXQUFPRixPQUFPLENBQUNHLElBQVIsQ0FBY0MsSUFBRCxJQUFlO0FBQy9CYywwREFBSyxDQUFDQyxRQUFOLENBQWVDLDBFQUFXLENBQUNoQixJQUFJLENBQUNpQixPQUFOLENBQTFCO0FBQ0FDLGdCQUFVLENBQUMsTUFBTWIsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixFQUFQLEVBQWlDLElBQWpDLENBQVY7QUFDSCxLQUhNLEVBR0pDLEtBSEksQ0FHR0MsR0FBRCxJQUFjQyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxRQUFkLEVBQXdCRixHQUF4QixDQUhoQixDQUFQO0FBSUg7QUFDSjs7QUFFRCxlQUFlMUIsa0JBQWYsQ0FDSTZCLElBREosRUFFSXpCLFFBRkosRUFHSUQsS0FISixFQUlJMkIscUJBSkosRUFLSU0sS0FMSixFQU1JQyxXQU5KLEVBT2dCO0FBQ1o5QyxrREFBTyxDQUFDYyxNQUFSLENBQWUsYUFBZjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyx5REFBSyxDQUFFLEdBQUVkLE1BQU8sa0JBQVgsRUFBOEI7QUFDdERlLFVBQU0sRUFBRSxNQUQ4QztBQUV0REMsV0FBTyxFQUFFO0FBQUMsc0JBQWdCLGtCQUFqQjtBQUFxQyxnQkFBVTtBQUEvQyxLQUY2QztBQUd0REMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQmlCLFVBRGlCO0FBRWpCekIsY0FGaUI7QUFHakJELFdBSGlCO0FBSWpCMkIsMkJBSmlCO0FBS2pCTSxXQUxpQjtBQU1qQkM7QUFOaUIsS0FBZjtBQUhnRCxHQUE5QixDQUE1QjtBQVlBLFFBQU14QixPQUFPLEdBQUdQLFFBQVEsQ0FBQ1EsSUFBVCxFQUFoQjs7QUFDQSxNQUFJUixRQUFRLENBQUNTLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDekIsV0FBT0YsT0FBTyxDQUFDRyxJQUFSLENBQWNDLElBQUQsSUFBZTtBQUMvQmMsMERBQUssQ0FBQ0MsUUFBTixDQUFlQywwRUFBVyxDQUFDaEIsSUFBSSxDQUFDaUIsT0FBTixDQUExQjtBQUNBQyxnQkFBVSxDQUFDLE1BQU1iLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsRUFBUCxFQUFpQyxJQUFqQyxDQUFWO0FBQ0gsS0FITSxFQUdKQyxLQUhJLENBR0dDLEdBQUQsSUFBY0MsT0FBTyxDQUFDQyxLQUFSLENBQWMsUUFBZCxFQUF3QkYsR0FBeEIsQ0FIaEIsQ0FBUDtBQUlIO0FBQ0o7O0FBRUQsZUFBZTlCLE1BQWYsR0FBc0M7QUFDbENMLGtEQUFPLENBQUNjLE1BQVIsQ0FBZSxhQUFmO0FBQ0EsU0FBTyxNQUFNRSx5REFBSyxDQUFFLEdBQUVkLE1BQU8sU0FBWCxFQUFxQjtBQUNuQ2UsVUFBTSxFQUFFLEtBRDJCO0FBRW5DQyxXQUFPLEVBQUU7QUFDTCxzQkFBZ0Isa0JBRFg7QUFFTCxxQ0FBK0I7QUFGMUI7QUFGMEIsR0FBckIsQ0FBTCxDQU9STyxJQVBRLENBT0gsTUFBTUksa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVosQ0FQSCxFQVFSTCxJQVJRLENBUUgsTUFBTU0sTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixDQUF1QixJQUF2QixDQVJILEVBU1JDLEtBVFEsQ0FTREMsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxRQUFkLEVBQXdCRixHQUF4QixDQVRQLENBQWI7QUFVSCxDOzs7Ozs7Ozs7Ozs7QUN0S0Q7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNZLE9BQVQsQ0FBaUI7QUFBQ0M7QUFBRCxDQUFqQixFQUE0QjtBQUN4QixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUNILE9BQU8sR0FBRyxJQUFILEdBQVUsS0FBbEIsQ0FBbEM7O0FBRUEsUUFBTUksTUFBTSxHQUFHLE1BQU1GLFFBQVEsQ0FBQyxDQUFDRCxLQUFGLENBQTdCOztBQUVBSSx5REFBUyxDQUFDLE1BQU07QUFDWkgsWUFBUSxDQUFDRixPQUFPLEdBQUcsSUFBSCxHQUFVLEtBQWxCLENBQVI7QUFDQUosY0FBVSxDQUFDLE1BQU1NLFFBQVEsQ0FBQyxLQUFELENBQWYsRUFBd0IsSUFBeEIsQ0FBVjtBQUNILEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxTQUNJLE1BQUMsZ0RBQUQ7QUFBTyxVQUFNLEVBQUVELEtBQWY7QUFBc0IsVUFBTSxFQUFFRyxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBa0MsUUFBSSxFQUFDLE9BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0osT0FETCxDQURILENBREo7QUFPSDs7QUFFRCxNQUFNTSxlQUFlLEdBQUdDLEtBQUssS0FBSztBQUM5QlAsU0FBTyxFQUFFTyxLQUFLLENBQUNDLEdBQU4sQ0FBVVI7QUFEVyxDQUFMLENBQTdCOztBQUllUywwSEFBTyxDQUFDSCxlQUFELEVBQWtCLElBQWxCLENBQVAsQ0FBK0JQLE9BQS9CLENBQWYsRTs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUVlLFNBQVNXLFlBQVQsQ0FBc0I7QUFBRUMsOEJBQUY7QUFBZ0NDO0FBQWhDLENBQXRCLEVBQWdGO0FBQzdGLFNBQ0U7QUFBSyxhQUFTLEVBQUcsR0FBRUEsc0JBQXNCLEdBQUdDLHlEQUFDLENBQUNDLE1BQUwsR0FBYyxJQUFLLElBQUdELHlEQUFDLENBQUNFLGlCQUFrQixFQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsS0FBaEI7QUFDRSxXQUFPLEVBQUVKLDRCQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsQ0FERjtBQU9ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNLLE1BQVQsQ0FBZ0I7QUFBRUMsb0JBQUY7QUFBc0JDO0FBQXRCLENBQWhCLEVBQXlEO0FBQ3RFLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFFUCx5REFBQyxDQUFDUSxlQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUUsTUFBQyw2Q0FBRDtBQUNFLGlCQUFhLEVBQUU7QUFDYnpELFdBQUssRUFBRSxFQURNO0FBRWJDLGNBQVEsRUFBRTtBQUZHLEtBRGpCO0FBS0Usb0JBQWdCLEVBQUV5RCwwQ0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQ25DM0QsV0FBSyxFQUFFMEQsMENBQUEsR0FBYUUsUUFBYixDQUFzQixtQkFBdEIsQ0FENEI7QUFFbkMzRCxjQUFRLEVBQUV5RCwwQ0FBQSxHQUFhRSxRQUFiLENBQXNCLHNCQUF0QjtBQUZ5QixLQUFuQixDQUxwQjtBQVNFLFlBQVEsRUFBRSxDQUFDO0FBQUU1RCxXQUFGO0FBQVNDO0FBQVQsS0FBRCxFQUFzQjtBQUFFNEQsZUFBRjtBQUFhQztBQUFiLEtBQXRCLEtBQXVEO0FBQy9ERCxlQUFTO0FBQ1R0RSxxRUFBcUIsQ0FBQ0MsS0FBdEIsQ0FBNEJRLEtBQTVCLEVBQW1DQyxRQUFuQyxFQUNHWSxJQURILENBRUlDLElBQUksSUFBSSxDQUNOO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELE9BaEJMLEVBaUJJVyxLQUFLLElBQUk7QUFDUHFDLHFCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0FELGlCQUFTLENBQUNwQyxLQUFELENBQVQ7QUFDRCxPQXBCTCxFQXNCRTtBQXRCRixPQXVCR0gsS0F2QkgsQ0F1QlVDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxLQUFSLENBQWMsUUFBZCxFQUF3QkYsR0FBeEIsQ0F2QmxCO0FBd0JELEtBbkNIO0FBb0NFLFVBQU0sRUFBRSxDQUFDO0FBQUV3QyxZQUFGO0FBQVVuRCxZQUFWO0FBQWtCb0QsYUFBbEI7QUFBMkJDO0FBQTNCLEtBQUQsS0FDTixNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFPLGFBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFLE1BQUMsNENBQUQ7QUFBTyxVQUFJLEVBQUMsT0FBWjtBQUFvQixVQUFJLEVBQUMsTUFBekI7QUFBZ0MsZUFBUyxFQUFFLGtCQUFrQkYsTUFBTSxDQUFDL0QsS0FBUCxJQUFnQmdFLE9BQU8sQ0FBQ2hFLEtBQXhCLEdBQWdDLGFBQWhDLEdBQWdELEVBQWxFLENBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFLE1BQUMsbURBQUQ7QUFBYyxVQUFJLEVBQUMsT0FBbkI7QUFBMkIsZUFBUyxFQUFDLEtBQXJDO0FBQTJDLGVBQVMsRUFBQyxrQkFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLENBREYsRUFNRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFPLGFBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRSxNQUFDLDRDQUFEO0FBQU8sVUFBSSxFQUFDLFVBQVo7QUFBdUIsVUFBSSxFQUFDLFVBQTVCO0FBQXVDLGVBQVMsRUFBRSxrQkFBa0IrRCxNQUFNLENBQUM5RCxRQUFQLElBQW1CK0QsT0FBTyxDQUFDL0QsUUFBM0IsR0FBc0MsYUFBdEMsR0FBc0QsRUFBeEUsQ0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0UsTUFBQyxtREFBRDtBQUFjLFVBQUksRUFBQyxVQUFuQjtBQUE4QixlQUFTLEVBQUMsS0FBeEM7QUFBOEMsZUFBUyxFQUFDLGtCQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsQ0FORixFQVdFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBUyxFQUFHLE9BQU1nRCx5REFBQyxDQUFDaUIsVUFBVyxFQUFyRDtBQUF3RCxjQUFRLEVBQUVELFlBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFR0EsWUFBWSxJQUNYO0FBQUssZUFBUyxFQUFDLG9EQUFmO0FBQW9FLFVBQUksRUFBQyxRQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQUhKLENBWEYsRUFtQkdyRCxNQUFNLElBQ0w7QUFBSyxlQUFTLEVBQUUsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdUNBLE1BQXZDLENBcEJKLENBckNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBbUVELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTdUQsTUFBVCxDQUFnQjtBQUFFQywyQkFBRjtBQUE2QkMsb0JBQTdCO0FBQWlEQztBQUFqRCxDQUFoQixFQUEwRjtBQUN2RyxRQUFNZixNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFBLE9BQUNlLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCakMsc0RBQVEsQ0FBQyxJQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNrQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQm5DLHNEQUFRLENBQUMsS0FBRCxDQUF4QztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVVLHlEQUFDLENBQUNRLGVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUUsTUFBQyw2Q0FBRDtBQUNFLGlCQUFhLEVBQUU7QUFDYmtCLGNBQVEsRUFBRSxFQURHO0FBRWIzRSxXQUFLLEVBQUUsRUFGTTtBQUdiQyxjQUFRLEVBQUUsRUFIRztBQUliMEIsMkJBQXFCLEVBQUUsRUFKVjtBQUtiTSxXQUFLLEVBQUUsRUFMTTtBQU1iMkMsWUFBTSxFQUFFO0FBTkssS0FEakI7QUFTRSxvQkFBZ0IsRUFBRWxCLDBDQUFBLEdBQWFDLEtBQWIsQ0FDaEJZLFFBQVEsR0FDSjtBQUNBSSxjQUFRLEVBQUVqQiwwQ0FBQSxHQUFhRSxRQUFiLENBQXNCLHNCQUF0QixDQURWO0FBRUEzRCxjQUFRLEVBQUV5RCwwQ0FBQSxHQUFhRSxRQUFiLENBQXNCLHNCQUF0QixDQUZWO0FBR0E1RCxXQUFLLEVBQUUwRCwwQ0FBQSxHQUFhRSxRQUFiLENBQXNCLG1CQUF0QixDQUhQO0FBSUFqQywyQkFBcUIsRUFBRStCLDBDQUFBLEdBQWFFLFFBQWIsQ0FBc0Isc0JBQXRCO0FBSnZCLEtBREksR0FPSCxDQUFDYSxRQUFGLEdBQ0U7QUFDQUUsY0FBUSxFQUFFakIsMENBQUEsR0FBYUUsUUFBYixDQUFzQixzQkFBdEIsQ0FEVjtBQUVBM0QsY0FBUSxFQUFFeUQsMENBQUEsR0FBYUUsUUFBYixDQUFzQixzQkFBdEIsQ0FGVjtBQUdBNUQsV0FBSyxFQUFFMEQsMENBQUEsR0FBYUUsUUFBYixDQUFzQixtQkFBdEIsQ0FIUDtBQUlBakMsMkJBQXFCLEVBQUUrQiwwQ0FBQSxHQUFhRSxRQUFiLENBQXNCLHNCQUF0QixDQUp2QjtBQUtBM0IsV0FBSyxFQUFFeUIsMENBQUEsR0FBYUUsUUFBYixDQUFzQixrREFBdEI7QUFMUCxLQURGLEdBUUU7QUFDQWUsY0FBUSxFQUFFakIsMENBQUEsR0FBYUUsUUFBYixDQUFzQixzQkFBdEIsQ0FEVjtBQUVBM0QsY0FBUSxFQUFFeUQsMENBQUEsR0FBYUUsUUFBYixDQUFzQixzQkFBdEIsQ0FGVjtBQUdBNUQsV0FBSyxFQUFFMEQsMENBQUEsR0FBYUUsUUFBYixDQUFzQixtQkFBdEIsQ0FIUDtBQUlBakMsMkJBQXFCLEVBQUUrQiwwQ0FBQSxHQUFhRSxRQUFiLENBQXNCLHNCQUF0QixDQUp2QjtBQUtBM0IsV0FBSyxFQUFFeUIsMENBQUEsR0FBYUUsUUFBYixDQUFzQixrREFBdEIsQ0FMUDtBQU1BZ0IsWUFBTSxFQUFFbEIsMENBQUEsR0FBYUUsUUFBYixDQUFzQixvQkFBdEI7QUFOUixLQWhCVSxDQVRwQjtBQWlDRSxZQUFRLEVBQUUsQ0FBQztBQUFFZSxjQUFGO0FBQVkzRSxXQUFaO0FBQW1CQyxjQUFuQjtBQUE2QjBCLDJCQUE3QjtBQUFvRE0sV0FBcEQ7QUFBMkQyQztBQUEzRCxLQUFELEVBQXNFO0FBQUVmLGVBQUY7QUFBYUM7QUFBYixLQUF0RSxLQUF1RztBQUMvR0QsZUFBUztBQUNSNUIsV0FBSyxDQUFDNEMsUUFBTixHQUFpQkMsTUFBbEIsR0FDSyxDQUFDTCxRQUFGLEdBQ0VsRiwrREFBcUIsQ0FBQ0ssb0JBQXRCLENBQ0ErRSxRQURBLEVBQ1UxRSxRQURWLEVBQ29CRCxLQURwQixFQUVBMkIscUJBRkEsRUFFdUJNLEtBRnZCLENBREYsR0FLRTFDLCtEQUFxQixDQUFDTSxrQkFBdEIsQ0FDQThFLFFBREEsRUFDVTFFLFFBRFYsRUFDb0JELEtBRHBCLEVBRUEyQixxQkFGQSxFQUV1Qk0sS0FGdkIsRUFFOEIyQyxNQUY5QixDQU5OLEdBVUlyRiwrREFBcUIsQ0FBQ0ksa0JBQXRCLENBQ0FnRixRQURBLEVBQ1UxRSxRQURWLEVBQ29CRCxLQURwQixFQUMyQjJCLHFCQUQzQixFQUdDZCxJQUhELENBSUVrRSxJQUFJLElBQUksQ0FDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxPQWRILEVBZUV0RCxLQUFLLElBQUk7QUFDUEQsZUFBTyxDQUFDd0QsR0FBUixDQUFZLFFBQVosRUFBc0J2RCxLQUF0QjtBQUNBcUMscUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQUQsaUJBQVMsQ0FBQ3BDLEtBQUQsQ0FBVDtBQUNELE9BbkJILENBVko7QUErQkQsS0FsRUg7QUFtRUUsVUFBTSxFQUFFLENBQUM7QUFBRXNDLFlBQUY7QUFBVW5ELFlBQVY7QUFBa0JvRCxhQUFsQjtBQUEyQkM7QUFBM0IsS0FBRCxLQUNOLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFHLEdBQUVoQix5REFBQyxDQUFDZ0MsWUFBYSxFQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dWLFFBQVEsR0FBRztBQUFNLGVBQVMsRUFBRyxHQUFFdEIseURBQUMsQ0FBQzhCLElBQUssRUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSCxHQUFrRDtBQUFNLGVBQVMsRUFBRyxHQUFFOUIseURBQUMsQ0FBQ2lDLEtBQU0sRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEN0QsRUFFRTtBQUFPLGVBQVMsRUFBRWpDLHlEQUFDLENBQUNrQyxNQUFwQjtBQUE0QixhQUFPLEVBQUMsVUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU8sVUFBSSxFQUFDLFVBQVo7QUFBdUIsUUFBRSxFQUFDLFVBQTFCO0FBQXFDLGNBQVEsRUFBRSxNQUFNWCxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFLLGVBQVMsRUFBRyxHQUFFdEIseURBQUMsQ0FBQ21DLE1BQU8sSUFBR25DLHlEQUFDLENBQUNvQyxLQUFNLEVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQUZGLENBREYsRUFRRTtBQUFLLGVBQVMsRUFBQyx1Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csQ0FBQ2QsUUFBRCxHQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBTztBQUFNLGVBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQLEVBQ0E7QUFBTyxVQUFJLEVBQUMsVUFBWjtBQUF1QixjQUFRLEVBQUUsTUFBTUcsV0FBVyxDQUFDLENBQUNELFFBQUYsQ0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURBLENBREgsR0FJRyxJQUxOLENBUkYsRUFlRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFPLGFBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRSxNQUFDLDRDQUFEO0FBQU8sVUFBSSxFQUFDLFVBQVo7QUFBdUIsVUFBSSxFQUFDLE1BQTVCO0FBQW1DLGVBQVMsRUFBRSxrQkFBa0JWLE1BQU0sQ0FBQ1ksUUFBUCxJQUFtQlgsT0FBTyxDQUFDVyxRQUEzQixHQUFzQyxhQUF0QyxHQUFzRCxFQUF4RSxDQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFHRSxNQUFDLG1EQUFEO0FBQWMsVUFBSSxFQUFDLFVBQW5CO0FBQThCLGVBQVMsRUFBQyxLQUF4QztBQUE4QyxlQUFTLEVBQUMsa0JBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixDQWZGLEVBb0JFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU8sYUFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUUsTUFBQyw0Q0FBRDtBQUFPLFVBQUksRUFBQyxPQUFaO0FBQW9CLFVBQUksRUFBQyxPQUF6QjtBQUFpQyxlQUFTLEVBQUUsa0JBQWtCWixNQUFNLENBQUMvRCxLQUFQLElBQWdCZ0UsT0FBTyxDQUFDaEUsS0FBeEIsR0FBZ0MsYUFBaEMsR0FBZ0QsRUFBbEUsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0UsTUFBQyxtREFBRDtBQUFjLFVBQUksRUFBQyxPQUFuQjtBQUEyQixlQUFTLEVBQUMsS0FBckM7QUFBMkMsZUFBUyxFQUFDLGtCQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsQ0FwQkYsRUF5QkU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTyxhQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUUsTUFBQyw0Q0FBRDtBQUFPLFVBQUksRUFBQyxVQUFaO0FBQXVCLFVBQUksRUFBQyxVQUE1QjtBQUF1QyxlQUFTLEVBQUUsa0JBQWtCK0QsTUFBTSxDQUFDOUQsUUFBUCxJQUFtQitELE9BQU8sQ0FBQy9ELFFBQTNCLEdBQXNDLGFBQXRDLEdBQXNELEVBQXhFLENBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFLE1BQUMsbURBQUQ7QUFBYyxVQUFJLEVBQUMsVUFBbkI7QUFBOEIsZUFBUyxFQUFDLEtBQXhDO0FBQThDLGVBQVMsRUFBQyxrQkFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLENBekJGLEVBOEJFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU8sYUFBTyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsRUFFRSxNQUFDLDRDQUFEO0FBQU8sVUFBSSxFQUFDLHVCQUFaO0FBQW9DLFVBQUksRUFBQyxVQUF6QztBQUFvRCxlQUFTLEVBQUUsa0JBQWtCOEQsTUFBTSxDQUFDcEMscUJBQVAsSUFBZ0NxQyxPQUFPLENBQUNyQyxxQkFBeEMsR0FBZ0UsYUFBaEUsR0FBZ0YsRUFBbEcsQ0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0UsTUFBQyxtREFBRDtBQUFjLFVBQUksRUFBQyx1QkFBbkI7QUFBMkMsZUFBUyxFQUFDLEtBQXJEO0FBQTJELGVBQVMsRUFBQyxrQkFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLENBOUJGLEVBbUNHLENBQUM0QyxRQUFELElBQWE7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ1o7QUFBTyxhQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFksRUFFWixNQUFDLDRDQUFEO0FBQU8sVUFBSSxFQUFDLE9BQVo7QUFBb0IsVUFBSSxFQUFDLFFBQXpCO0FBQWtDLGVBQVMsRUFBRSxrQkFBa0JSLE1BQU0sQ0FBQzlCLEtBQVAsSUFBZ0IrQixPQUFPLENBQUMvQixLQUF4QixHQUFnQyxhQUFoQyxHQUFnRCxFQUFsRSxDQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRlksRUFHWixNQUFDLG1EQUFEO0FBQWMsVUFBSSxFQUFDLE9BQW5CO0FBQTJCLGVBQVMsRUFBQyxLQUFyQztBQUEyQyxlQUFTLEVBQUMsa0JBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIWSxDQW5DaEIsRUF3Q0d3QyxRQUFRLElBQUk7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ1g7QUFBTyxhQUFPLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURXLEVBRVgsTUFBQyw0Q0FBRDtBQUFPLFVBQUksRUFBQyxRQUFaO0FBQXFCLFVBQUksRUFBQyxNQUExQjtBQUFpQyxlQUFTLEVBQUUsa0JBQWtCVixNQUFNLENBQUNhLE1BQVAsSUFBaUJaLE9BQU8sQ0FBQ1ksTUFBekIsR0FBa0MsYUFBbEMsR0FBa0QsRUFBcEUsQ0FBNUM7QUFBcUgsUUFBRSxFQUFDLFFBQXhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGVyxFQUdYLE1BQUMsbURBQUQ7QUFBYyxVQUFJLEVBQUMsUUFBbkI7QUFBNEIsZUFBUyxFQUFDLEtBQXRDO0FBQTRDLGVBQVMsRUFBQyxrQkFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhXLENBeENmLEVBNkNFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBUyxFQUFHLE9BQU0zQix5REFBQyxDQUFDaUIsVUFBVyxFQUFyRDtBQUF3RCxjQUFRLEVBQUVELFlBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFR0EsWUFBWSxJQUNYO0FBQUssZUFBUyxFQUFDLG9EQUFmO0FBQW9FLFVBQUksRUFBQyxRQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQUhKLENBN0NGLEVBcURHckQsTUFBTSxJQUNMO0FBQUssZUFBUyxFQUFFLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVDSixJQUFJLENBQUNDLFNBQUwsQ0FBZUcsTUFBZixDQUF2QyxFQUErRFksT0FBTyxDQUFDd0QsR0FBUixDQUFZcEUsTUFBWixDQUEvRCxDQXRESixDQXBFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQW9JRCxDOzs7Ozs7Ozs7OztBQ2hKRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNwQixLQUFULENBQWU7QUFBQzRDO0FBQUQsQ0FBZixFQUEwQjtBQUN6QixRQUFNO0FBQUEsT0FBQ1ksc0JBQUQ7QUFBQSxPQUF5Qm9CO0FBQXpCLE1BQXNEN0Isc0RBQVEsQ0FBQyxJQUFELENBQXBFOztBQUVBLFFBQU1RLDRCQUE0QixHQUFHLE1BQU07QUFDMUNxQiw2QkFBeUIsQ0FBQyxDQUFDcEIsc0JBQUYsQ0FBekI7QUFDQSxHQUZEOztBQUlBLFNBQ0M7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyRUFBRDtBQUNDLDBCQUFzQixFQUFFQSxzQkFEekI7QUFFQyxnQ0FBNEIsRUFBRUQsNEJBRi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUtFWCxPQUFPLElBQUksTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTGIsRUFNRVksc0JBQXNCLEdBQ3BCLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURvQixHQUVwQixNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixDQUREO0FBWUE7O0FBRUQsTUFBTU4sZUFBZSxHQUFHQyxLQUFLLEtBQUs7QUFDakNQLFNBQU8sRUFBRU8sS0FBSyxDQUFDQyxHQUFOLENBQVVSO0FBRGMsQ0FBTCxDQUE3Qjs7QUFJQSxNQUFNa0Qsa0JBQWtCLEdBQUcsRUFBM0I7QUFHZXpDLDBIQUFPLENBQUNILGVBQUQsRUFBa0I0QyxrQkFBbEIsQ0FBUCxDQUE2QzlGLEtBQTdDLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUJBO0NBR0E7O0FBQ08sU0FBUytGLFVBQVQsQ0FBb0JDLElBQXBCLEVBQW9DO0FBQ3ZDLFNBQU87QUFDSEMsUUFBSSxFQUFFQyx1REFESDtBQUVIQyxXQUFPLEVBQUVIO0FBRk4sR0FBUDtBQUlIO0FBQUE7QUFDTSxTQUFTSSxVQUFULEdBQXNCO0FBQ3pCLFNBQU87QUFDSEgsUUFBSSxFQUFFSSxrREFBV0E7QUFEZCxHQUFQO0FBR0g7QUFDTSxTQUFTQyxVQUFULEdBQXNCO0FBQ3pCLFNBQU87QUFDSEwsUUFBSSxFQUFFTSxrREFBV0E7QUFEZCxHQUFQO0FBR0g7QUFDTSxTQUFTQyxTQUFULENBQW1CQyxJQUFuQixFQUFzQztBQUN6QyxTQUFRcEUsUUFBRCxJQUF3QjtBQUMzQkEsWUFBUSxDQUFDO0FBQ0w0RCxVQUFJLEVBQUVTLGlEQUREO0FBRUxQLGFBQU8sRUFBRU07QUFGSixLQUFELENBQVI7QUFJQWpFLGNBQVUsQ0FBQyxNQUFNO0FBQ2JILGNBQVEsQ0FBQ3NFLFNBQVMsRUFBVixDQUFSO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILEdBUkQ7QUFTSDtBQUNNLFNBQVNBLFNBQVQsR0FBcUI7QUFDeEIsU0FBTztBQUNIVixRQUFJLEVBQUVXLGlEQUFVQTtBQURiLEdBQVA7QUFHSDtBQUNNLFNBQVNDLFVBQVQsR0FBMkI7QUFDOUIsU0FBTztBQUNIWixRQUFJLEVBQUVhLHlEQUFrQkE7QUFEckIsR0FBUDtBQUdIO0FBQUE7QUFDTSxNQUFNQyxXQUFXLEdBQUcsTUFBTSxNQUFPMUUsUUFBUCxJQUE4QjtBQUMzRCxRQUFNMUIsUUFBUSxHQUFHLE1BQU1DLHlEQUFLLENBQUUsNkNBQUYsQ0FBNUI7QUFDQSxRQUFNTSxPQUFPLEdBQUdQLFFBQVEsQ0FBQ1EsSUFBVCxFQUFoQjtBQUNBRCxTQUFPLENBQUNHLElBQVIsQ0FBYTJGLEdBQUcsSUFBSTtBQUNoQjNFLFlBQVEsQ0FBQztBQUFFNEQsVUFBSSxFQUFFZ0IsdURBQVI7QUFBMEJkLGFBQU8sRUFBRWEsR0FBRyxDQUFDRTtBQUF2QyxLQUFELENBQVI7QUFDQTdFLFlBQVEsQ0FBQztBQUFFNEQsVUFBSSxFQUFFa0Isb0RBQVI7QUFBdUJoQixhQUFPLEVBQUVhLEdBQUcsQ0FBQzFGO0FBQXBDLEtBQUQsQ0FBUjtBQUNILEdBSEQsRUFHR1EsS0FISCxDQUdTQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFNBQWQsRUFBeUJGLEdBQXpCLENBSGhCO0FBSUgsQ0FQTTtBQVFBLE1BQU1xRixXQUFXLEdBQUcsTUFBTSxNQUFPL0UsUUFBUCxJQUE4QjtBQUMzRCxRQUFNMUIsUUFBUSxHQUFHLE1BQU1DLHlEQUFLLENBQUUscURBQUYsQ0FBNUI7QUFDQSxRQUFNTSxPQUFPLEdBQUdQLFFBQVEsQ0FBQ1EsSUFBVCxFQUFoQjtBQUNBRCxTQUFPLENBQUNHLElBQVIsQ0FBYTJGLEdBQUcsSUFBSTtBQUNoQixXQUFPM0UsUUFBUSxDQUFDO0FBQUU0RCxVQUFJLEVBQUVvQixvREFBUjtBQUF1QmxCLGFBQU8sRUFBRWEsR0FBRyxDQUFDMUY7QUFBcEMsS0FBRCxDQUFmO0FBQ0gsR0FGRCxFQUVHUSxLQUZILENBRVNDLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxLQUFSLENBQWMsU0FBZCxFQUF5QkYsR0FBekIsQ0FGaEI7QUFHSCxDQU5NO0FBT0EsTUFBTXVGLGdCQUFnQixHQUFHLE1BQU0sTUFBT2pGLFFBQVAsSUFBOEI7QUFDaEUsUUFBTTFCLFFBQVEsR0FBRyxNQUFNQyx5REFBSyxDQUFFLGdEQUFGLENBQTVCO0FBQ0EsUUFBTU0sT0FBTyxHQUFHUCxRQUFRLENBQUNRLElBQVQsRUFBaEI7QUFDQUQsU0FBTyxDQUFDRyxJQUFSLENBQWEyRixHQUFHLElBQUk7QUFDaEIsV0FBTzNFLFFBQVEsQ0FBQztBQUFFNEQsVUFBSSxFQUFFc0IseURBQVI7QUFBNEJwQixhQUFPLEVBQUVhLEdBQUcsQ0FBQzFGO0FBQXpDLEtBQUQsQ0FBZjtBQUNILEdBRkQsRUFFR1EsS0FGSCxDQUVTQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFNBQWQsRUFBeUJGLEdBQXpCLENBRmhCO0FBR0gsQ0FOTTtBQU9BLE1BQU15RixVQUFVLEdBQUcsTUFBTSxNQUFPbkYsUUFBUCxJQUE4QjtBQUMxRCxRQUFNMUIsUUFBUSxHQUFHLE1BQU1DLHlEQUFLLENBQUUsNENBQUYsQ0FBNUI7QUFDQSxRQUFNTSxPQUFPLEdBQUdQLFFBQVEsQ0FBQ1EsSUFBVCxFQUFoQjtBQUNBRCxTQUFPLENBQUNHLElBQVIsQ0FBYTJGLEdBQUcsSUFBSTtBQUNoQmhGLFdBQU8sQ0FBQ3dELEdBQVIsQ0FBWXdCLEdBQVosRUFEZ0IsQ0FFaEI7QUFDSCxHQUhELEVBR0dsRixLQUhILENBR1NDLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxLQUFSLENBQWMsU0FBZCxFQUF5QkYsR0FBekIsQ0FIaEI7QUFJSCxDQVBNO0FBUUEsTUFBTTBGLFNBQVMsR0FBSUMsT0FBRCxJQUE4QixNQUFPckYsUUFBUCxJQUF5QjtBQUM1RSxRQUFNMUIsUUFBUSxHQUFHLE1BQU1DLHlEQUFLLENBQUUseURBQXdEOEcsT0FBUSxFQUFsRSxDQUE1QjtBQUNBLFFBQU14RyxPQUFPLEdBQUdQLFFBQVEsQ0FBQ1EsSUFBVCxFQUFoQjtBQUNBRCxTQUFPLENBQUNHLElBQVIsQ0FBYTJGLEdBQUcsSUFBSTtBQUNoQixXQUFPM0UsUUFBUSxDQUFDO0FBQUU0RCxVQUFJLEVBQUUwQixpREFBUjtBQUFvQnhCLGFBQU8sRUFBRWEsR0FBRyxDQUFDMUY7QUFBakMsS0FBRCxDQUFmO0FBQ0gsR0FGRCxFQUVHUSxLQUZILENBRVNDLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxLQUFSLENBQWMsU0FBZCxFQUF5QkYsR0FBekIsQ0FGaEI7QUFHSCxDQU5NO0FBT0EsTUFBTTZGLGlCQUFpQixHQUFJQyxJQUFELElBQWUsTUFBT3hGLFFBQVAsSUFBOEI7QUFDMUUsUUFBTWtELElBQUksR0FBR3hGLCtEQUFxQixDQUFDUSxnQkFBbkM7QUFDQSxRQUFNSSxRQUFRLEdBQUcsTUFBTUMseURBQUssQ0FBRSxzREFBRixFQUF5RDtBQUNqRkMsVUFBTSxFQUFFLE1BRHlFO0FBRWpGQyxXQUFPLEVBQUU7QUFDTCxzQkFBZ0Isa0JBRFg7QUFFTCxxQ0FBK0IsR0FGMUI7QUFHTCx1QkFBa0IsR0FBRXlFLElBQUksQ0FBQ3VDLFVBQVcsSUFBR3ZDLElBQUksQ0FBQ3dDLEtBQU07QUFIN0MsS0FGd0U7QUFPakZoSCxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlNEcsSUFBZjtBQVAyRSxHQUF6RCxDQUE1QjtBQVNBLFFBQU0zRyxPQUFPLEdBQUdQLFFBQVEsQ0FBQ1EsSUFBVCxFQUFoQjtBQUNBRCxTQUFPLENBQUNHLElBQVIsQ0FBYTJGLEdBQUcsSUFBSWhGLE9BQU8sQ0FBQ3dELEdBQVIsQ0FBWXdCLEdBQVosQ0FBcEIsRUFDS2xGLEtBREwsQ0FDV0MsR0FBRyxJQUFJQyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxTQUFkLEVBQXlCRixHQUF6QixDQURsQjtBQUVBLFNBQU9NLFFBQVEsQ0FBQztBQUFFNEQsUUFBSSxFQUFFK0IsMERBQVI7QUFBNkI3QixXQUFPLEVBQUUwQjtBQUF0QyxHQUFELENBQWY7QUFDSCxDQWZNO0FBZ0JBLE1BQU1JLGdCQUFnQixHQUFHLE1BQU0sTUFBTzVGLFFBQVAsSUFBOEI7QUFDaEUsUUFBTWtELElBQUksR0FBRyxNQUFNeEYsK0RBQXFCLENBQUNRLGdCQUF6QztBQUNBLFFBQU1JLFFBQVEsR0FBRyxNQUFNQyx5REFBSyxDQUFFLGlEQUFnRDJFLElBQUksQ0FBQ0EsSUFBTCxDQUFVMkMsRUFBRyxFQUEvRCxFQUFrRTtBQUMxRnJILFVBQU0sRUFBRSxLQURrRjtBQUUxRkMsV0FBTyxFQUFFO0FBQ0wsc0JBQWdCLGtCQURYO0FBRUwscUNBQStCLEdBRjFCO0FBR0wsdUJBQWtCLEdBQUV5RSxJQUFJLENBQUN1QyxVQUFXLElBQUd2QyxJQUFJLENBQUN3QyxLQUFNO0FBSDdDO0FBRmlGLEdBQWxFLENBQTVCO0FBUUEsUUFBTTdHLE9BQU8sR0FBR1AsUUFBUSxDQUFDUSxJQUFULEVBQWhCO0FBQ0FELFNBQU8sQ0FBQ0csSUFBUixDQUFhMkYsR0FBRyxJQUFJO0FBQ2hCLFdBQU8zRSxRQUFRLENBQUM7QUFBRTRELFVBQUksRUFBRWtDLHlEQUFSO0FBQTRCaEMsYUFBTyxFQUFFYTtBQUFyQyxLQUFELENBQWY7QUFDSCxHQUZELEVBRUdsRixLQUZILENBRVNDLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxLQUFSLENBQWMsU0FBZCxFQUF5QkYsR0FBekIsQ0FGaEI7QUFHSCxDQWRNO0FBZUEsTUFBTXFHLGVBQWUsR0FBSUMsSUFBRCxJQUEyQixNQUFPaEcsUUFBUCxJQUE4QjtBQUNwRixRQUFNMUIsUUFBUSxHQUFHLE1BQU1DLHlEQUFLLENBQUUsb0RBQW1EeUgsSUFBSyxFQUExRCxDQUE1QjtBQUNBLFFBQU1uSCxPQUFPLEdBQUdQLFFBQVEsQ0FBQ1EsSUFBVCxFQUFoQjtBQUNBRCxTQUFPLENBQUNHLElBQVIsQ0FBYTJGLEdBQUcsSUFBSTtBQUNoQjNFLFlBQVEsQ0FBQztBQUFFNEQsVUFBSSxFQUFFZ0IsdURBQVI7QUFBMEJkLGFBQU8sRUFBRWEsR0FBRyxDQUFDRTtBQUF2QyxLQUFELENBQVI7QUFDQTdFLFlBQVEsQ0FBQztBQUFFNEQsVUFBSSxFQUFFa0Isb0RBQVI7QUFBdUJoQixhQUFPLEVBQUVhLEdBQUcsQ0FBQzFGO0FBQXBDLEtBQUQsQ0FBUjtBQUNILEdBSEQsRUFHR1EsS0FISCxDQUdTQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFNBQWQsRUFBeUJGLEdBQXpCLENBSGhCO0FBSUgsQ0FQTTtBQVFBLE1BQU11RyxlQUFlLEdBQUlDLE1BQUQsSUFBNkIsTUFBT2xHLFFBQVAsSUFBOEI7QUFDdEYsUUFBTWtELElBQUksR0FBRyxNQUFNeEYsK0RBQXFCLENBQUNRLGdCQUF6QztBQUNBLFFBQU1JLFFBQVEsR0FBRyxNQUFNQyx5REFBSyxDQUFFLCtDQUE4QzJILE1BQU8sV0FBdkQsRUFBbUU7QUFDM0YxSCxVQUFNLEVBQUUsS0FEbUY7QUFFM0ZDLFdBQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLHFDQUErQixHQUYxQjtBQUdMLHVCQUFrQixHQUFFeUUsSUFBSSxDQUFDdUMsVUFBVyxJQUFHdkMsSUFBSSxDQUFDd0MsS0FBTTtBQUg3QztBQUZrRixHQUFuRSxDQUE1QjtBQVFBLFFBQU03RyxPQUFPLEdBQUdQLFFBQVEsQ0FBQ1EsSUFBVCxFQUFoQjtBQUNBRCxTQUFPLENBQUNHLElBQVIsQ0FBYTJGLEdBQUcsSUFBSTtBQUNoQjNFLFlBQVEsQ0FBQztBQUFFNEQsVUFBSSxFQUFFdUMsd0RBQVI7QUFBMkJyQyxhQUFPLEVBQUVhLEdBQUcsQ0FBQzFGO0FBQXhDLEtBQUQsQ0FBUjtBQUNILEdBRkQsRUFFR1EsS0FGSCxDQUVTQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFNBQWQsRUFBeUJGLEdBQXpCLENBRmhCO0FBRStDO0FBQ2xELENBZE07QUFlQSxNQUFNMEcsaUJBQWlCLEdBQUcsQ0FBQ0YsTUFBRCxFQUEwQkcsT0FBMUIsS0FBOEMsTUFBT3JHLFFBQVAsSUFBOEI7QUFDekcsUUFBTWtELElBQUksR0FBRyxNQUFNeEYsK0RBQXFCLENBQUNRLGdCQUF6QztBQUNBLFFBQU1JLFFBQVEsR0FBRyxNQUFNQyx5REFBSyxDQUFFLCtDQUE4QzJILE1BQU8sa0JBQXZELEVBQTBFO0FBQ2xHMUgsVUFBTSxFQUFFLE1BRDBGO0FBRWxHQyxXQUFPLEVBQUU7QUFDTCxzQkFBZ0Isa0JBRFg7QUFFTCxxQ0FBK0IsR0FGMUI7QUFHTCx1QkFBa0IsR0FBRXlFLElBQUksQ0FBQ3VDLFVBQVcsSUFBR3ZDLElBQUksQ0FBQ3dDLEtBQU07QUFIN0MsS0FGeUY7QUFPbEdoSCxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUV5SDtBQUFGLEtBQWY7QUFQNEYsR0FBMUUsQ0FBNUI7QUFTQSxRQUFNeEgsT0FBTyxHQUFHUCxRQUFRLENBQUNRLElBQVQsRUFBaEI7QUFDQUQsU0FBTyxDQUFDRyxJQUFSLENBQWEyRixHQUFHLElBQUk7QUFDaEIzRSxZQUFRLENBQUM7QUFBRTRELFVBQUksRUFBRTBDLDBEQUFSO0FBQTZCeEMsYUFBTyxFQUFFYSxHQUFHLENBQUMxRjtBQUExQyxLQUFELENBQVI7QUFDSCxHQUZELEVBRUdRLEtBRkgsQ0FFU0MsR0FBRyxJQUFJQyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxTQUFkLEVBQXlCRixHQUF6QixDQUZoQjtBQUUrQztBQUNsRCxDQWZNO0FBZ0JBLE1BQU02RyxXQUFXLEdBQUlDLGlCQUFELElBQTRCLE1BQU94RyxRQUFQLElBQThCO0FBQ2pGO0FBQ0EsUUFBTTFCLFFBQVEsR0FBRyxNQUFNQyx5REFBSyxDQUFFLDhDQUFGLEVBQWlEO0FBQ3pFQyxVQUFNLEVBQUUsTUFEaUU7QUFFekVDLFdBQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLHFDQUErQjtBQUYxQixLQUZnRTtBQU16RUMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTRILGlCQUFmO0FBTm1FLEdBQWpELENBQTVCO0FBUUEsUUFBTTNILE9BQU8sR0FBR1AsUUFBUSxDQUFDUSxJQUFULEVBQWhCO0FBQ0EsU0FBT0QsT0FBTyxDQUFDRyxJQUFSLENBQWEyRixHQUFHLElBQUk7QUFDdkIzRSxZQUFRLENBQUM7QUFBRTRELFVBQUksRUFBRWdCLHVEQUFSO0FBQTBCZCxhQUFPLEVBQUVhLEdBQUcsQ0FBQ0U7QUFBdkMsS0FBRCxDQUFSO0FBQ0E3RSxZQUFRLENBQUM7QUFBRTRELFVBQUksRUFBRTZDLG1EQUFSO0FBQXNCM0MsYUFBTyxFQUFFYSxHQUFHLENBQUMxRixJQUFKLENBQVNBO0FBQXhDLEtBQUQsQ0FBUjtBQUNILEdBSE0sRUFHSlEsS0FISSxDQUdFQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFNBQWQsRUFBeUJGLEdBQXpCLENBSFQsQ0FBUDtBQUcrQztBQUNsRCxDQWZNO0FBZ0JBLE1BQU1nSCxVQUFVLEdBQUcsQ0FBQ1IsTUFBRCxFQUEwQmhHLE9BQTFCLEtBQThDLE1BQU9GLFFBQVAsSUFBOEI7QUFDbEcsUUFBTWtELElBQUksR0FBR3hGLCtEQUFxQixDQUFDUSxnQkFBbkM7QUFDQSxTQUFPLE1BQU1LLHlEQUFLLENBQUUseUNBQXdDMkgsTUFBTyxpQkFBakQsRUFBbUU7QUFDakYxSCxVQUFNLEVBQUUsTUFEeUU7QUFFakZDLFdBQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLHFDQUErQixHQUYxQjtBQUdMLHVCQUFrQixHQUFFeUUsSUFBSSxDQUFDdUMsVUFBVyxJQUFHdkMsSUFBSSxDQUFDd0MsS0FBTTtBQUg3QyxLQUZ3RTtBQU9qRmhILFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDakJzQixhQURpQjtBQUNSbkIsWUFBTSxFQUFFO0FBREEsS0FBZjtBQVAyRSxHQUFuRSxDQUFsQixDQUZrRyxDQWFsRztBQUNBO0FBQ0E7QUFDQTtBQUNILENBakJNO0FBa0JBLE1BQU00SCxjQUFjLEdBQUlULE1BQUQsSUFBNkIsTUFBT2xHLFFBQVAsSUFBOEI7QUFDckYsUUFBTWtELElBQUksR0FBR3hGLCtEQUFxQixDQUFDUSxnQkFBbkM7QUFDQSxTQUFPLE1BQU1LLHlEQUFLLENBQUUsK0NBQThDMkgsTUFBTyxnQkFBdkQsRUFBd0U7QUFDdEYxSCxVQUFNLEVBQUUsTUFEOEU7QUFFdEZDLFdBQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLHFDQUErQixHQUYxQjtBQUdMLHVCQUFrQixHQUFFeUUsSUFBSSxDQUFDdUMsVUFBVyxJQUFHdkMsSUFBSSxDQUFDd0MsS0FBTTtBQUg3QyxLQUY2RTtBQU90RmhILFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDakJnSSxpQkFBVyxFQUFFO0FBREksS0FBZjtBQVBnRixHQUF4RSxDQUFsQjtBQVdILENBYk07QUFjQSxNQUFNQyxzQkFBc0IsR0FBSVgsTUFBRCxJQUE2QixNQUFPbEcsUUFBUCxJQUE4QjtBQUM3RixRQUFNa0QsSUFBSSxHQUFHeEYsK0RBQXFCLENBQUNRLGdCQUFuQztBQUNBLFNBQU8sTUFBTUsseURBQUssQ0FBRSwrQ0FBOEMySCxNQUFPLHlCQUF2RCxFQUFpRjtBQUMvRjFILFVBQU0sRUFBRSxLQUR1RjtBQUUvRkMsV0FBTyxFQUFFO0FBQ0wsc0JBQWdCLGtCQURYO0FBRUwscUNBQStCLEdBRjFCO0FBR0wsdUJBQWtCLEdBQUV5RSxJQUFJLENBQUN1QyxVQUFXLElBQUd2QyxJQUFJLENBQUN3QyxLQUFNO0FBSDdDO0FBRnNGLEdBQWpGLENBQWxCO0FBUUgsQ0FWTTtBQVdBLE1BQU1vQixvQkFBb0IsR0FBRyxNQUFNLE1BQU85RyxRQUFQLElBQThCO0FBQ3BFLFFBQU1rRCxJQUFJLEdBQUd4RiwrREFBcUIsQ0FBQ1EsZ0JBQW5DO0FBQ0EsUUFBTUksUUFBUSxHQUFHLE1BQU1DLHlEQUFLLENBQUUsNkRBQUYsRUFBZ0U7QUFDeEZDLFVBQU0sRUFBRSxLQURnRjtBQUV4RkMsV0FBTyxFQUFFO0FBQ0wsc0JBQWdCLGtCQURYO0FBRUwscUNBQStCLEdBRjFCO0FBR0wsdUJBQWtCLEdBQUV5RSxJQUFJLENBQUN1QyxVQUFXLElBQUd2QyxJQUFJLENBQUN3QyxLQUFNO0FBSDdDO0FBRitFLEdBQWhFLENBQTVCO0FBUUEsUUFBTTdHLE9BQU8sR0FBR1AsUUFBUSxDQUFDUSxJQUFULEVBQWhCO0FBQ0EsU0FBT0QsT0FBTyxDQUFDRyxJQUFSLENBQWEyRixHQUFHLElBQUk7QUFDdkIsV0FBTzNFLFFBQVEsQ0FBQztBQUFFNEQsVUFBSSxFQUFFbUQsb0RBQVI7QUFBdUJqRCxhQUFPLEVBQUVhLEdBQUcsQ0FBQzFGO0FBQXBDLEtBQUQsQ0FBZjtBQUNILEdBRk0sRUFFSlEsS0FGSSxDQUVFQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFNBQWQsRUFBeUJGLEdBQXpCLENBRlQsQ0FBUDtBQUdILENBZE07QUFlQSxNQUFNc0gsZ0JBQWdCLEdBQUcsTUFBTSxNQUFPaEgsUUFBUCxJQUE4QjtBQUNoRSxRQUFNa0QsSUFBSSxHQUFHeEYsK0RBQXFCLENBQUNRLGdCQUFuQztBQUNBLFFBQU1JLFFBQVEsR0FBRyxNQUFNQyx5REFBSyxDQUFFLG9EQUFGLEVBQXVEO0FBQy9FQyxVQUFNLEVBQUUsS0FEdUU7QUFFL0VDLFdBQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLHFDQUErQixHQUYxQjtBQUdMLHVCQUFrQixHQUFFeUUsSUFBSSxDQUFDdUMsVUFBVyxJQUFHdkMsSUFBSSxDQUFDd0MsS0FBTTtBQUg3QztBQUZzRSxHQUF2RCxDQUE1QjtBQVFBLFFBQU03RyxPQUFPLEdBQUdQLFFBQVEsQ0FBQ1EsSUFBVCxFQUFoQjtBQUNBLFNBQU9ELE9BQU8sQ0FBQ0csSUFBUixDQUFhMkYsR0FBRyxJQUFJO0FBQ3ZCLFdBQU8zRSxRQUFRLENBQUM7QUFBRTRELFVBQUksRUFBRW1ELG9EQUFSO0FBQXVCakQsYUFBTyxFQUFFYSxHQUFHLENBQUMxRjtBQUFwQyxLQUFELENBQWY7QUFDSCxHQUZNLEVBRUpRLEtBRkksQ0FFRUMsR0FBRyxJQUFJQyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxTQUFkLEVBQXlCRixHQUF6QixDQUZULENBQVA7QUFHSCxDQWRNO0FBZUEsTUFBTXVILFlBQVksR0FBSUMsTUFBRCxJQUE2QixNQUFPbEgsUUFBUCxJQUE4QjtBQUNuRixRQUFNa0QsSUFBSSxHQUFHeEYsK0RBQXFCLENBQUNRLGdCQUFuQztBQUNBLFFBQU1JLFFBQVEsR0FBRyxNQUFNQyx5REFBSyxDQUFFLCtEQUE4RDJJLE1BQU8sRUFBdkUsRUFBMEU7QUFDbEcxSSxVQUFNLEVBQUUsS0FEMEY7QUFFbEdDLFdBQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLHFDQUErQixHQUYxQjtBQUdMLHVCQUFrQixHQUFFeUUsSUFBSSxDQUFDdUMsVUFBVyxJQUFHdkMsSUFBSSxDQUFDd0MsS0FBTTtBQUg3QztBQUZ5RixHQUExRSxDQUE1QjtBQVFBLFFBQU03RyxPQUFPLEdBQUdQLFFBQVEsQ0FBQ1EsSUFBVCxFQUFoQjtBQUNBLFNBQU9ELE9BQU8sQ0FBQ0csSUFBUixDQUFhMkYsR0FBRyxJQUFJO0FBQ3ZCLFdBQU8zRSxRQUFRLENBQUM7QUFBRTRELFVBQUksRUFBRXVELG9EQUFSO0FBQXVCckQsYUFBTyxFQUFFYSxHQUFHLENBQUMxRjtBQUFwQyxLQUFELENBQWY7QUFDSCxHQUZNLEVBRUpRLEtBRkksQ0FFRUMsR0FBRyxJQUFJQyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxTQUFkLEVBQXlCRixHQUF6QixDQUZULENBQVA7QUFHSCxDQWRNO0FBZUEsTUFBTTBILFNBQVMsR0FBSUMsUUFBRCxJQUFzQixNQUFPckgsUUFBUCxJQUE4QjtBQUN6RSxTQUFPQSxRQUFRLENBQUM7QUFBRTRELFFBQUksRUFBRTBELGlEQUFSO0FBQW9CeEQsV0FBTyxFQUFFdUQ7QUFBN0IsR0FBRCxDQUFmO0FBQ0gsQ0FGTTtBQUlBLE1BQU1wSCxXQUFXLEdBQUltRSxJQUFELElBQWtCLE1BQU9wRSxRQUFQLElBQThCO0FBQ3ZFQSxVQUFRLENBQUM7QUFBRTRELFFBQUksRUFBRTJELG1EQUFSO0FBQXNCekQsV0FBTyxFQUFFTTtBQUEvQixHQUFELENBQVI7QUFDQWpFLFlBQVUsQ0FBQyxNQUFNO0FBQ2JILFlBQVEsQ0FBQztBQUFFNEQsVUFBSSxFQUFFMkQsbURBQVI7QUFBc0J6RCxhQUFPLEVBQUU7QUFBL0IsS0FBRCxDQUFSO0FBQ0gsR0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILENBTE0sQzs7Ozs7Ozs7Ozs7O0FDdlJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLE1BQU1ELGdCQUFnQixHQUFHLGFBQXpCO0FBQ0EsTUFBTTJELGVBQWUsR0FBRyxZQUF4QjtBQUNBLE1BQU0vQyxrQkFBa0IsR0FBRyxlQUEzQixDLENBRVA7O0FBQ08sTUFBTVQsV0FBVyxHQUFHLGlCQUFwQjtBQUNBLE1BQU1FLFdBQVcsR0FBRyxpQkFBcEI7QUFDQSxNQUFNRyxVQUFVLEdBQUcsZ0JBQW5CO0FBQ0EsTUFBTUUsVUFBVSxHQUFHLGdCQUFuQjtBQUNBLE1BQU1PLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1GLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1JLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1FLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1JLFVBQVUsR0FBRyxZQUFuQjtBQUNBLE1BQU1LLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1HLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU0yQixZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNdEIsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUcsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUcsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTWlCLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1YLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1JLGFBQWEsR0FBRyxtQkFBdEI7QUFDQSxNQUFNRyxVQUFVLEdBQUcsWUFBbkI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckIsQyxDQUVQOztBQUNPLE1BQU1JLFFBQVEsR0FBRyxtQkFBakI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsc0JBQXBCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLHNCQUFwQixDLENBRVA7O0FBdUJBO0FBQ08sTUFBTUMsWUFBWSxHQUFHLG1CQUFyQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxrQkFBcEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyx1QkFBekI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyx5QkFBM0I7QUFDQSxNQUFNQyxlQUFlLEdBQUcsc0JBQXhCLEMsQ0FFUDs7QUFDTyxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUIsQyxDQUNQO0FBQ0E7QUFDQSxvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBR0EsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUU7QUFEWSxDQUFyQjtBQUtPLE1BQU1DLFlBQVksR0FBRyxDQUFDMUgsS0FBVSxHQUFHd0gsWUFBZCxFQUE0QkcsTUFBNUIsS0FBNEM7QUFDdEUsVUFBUUEsTUFBTSxDQUFDN0UsSUFBZjtBQUNFLFNBQUt1RSxvRUFBTDtBQUNFLDZDQUFZckgsS0FBWjtBQUFtQnlILGFBQUssRUFBRUUsTUFBTSxDQUFDM0U7QUFBakM7O0FBRUYsU0FBS3VFLGtFQUFMO0FBQ0UsWUFBTUUsS0FBSyxHQUFHekgsS0FBSyxDQUFDeUgsS0FBTixDQUFZRyxNQUFaLENBQW9CbEQsSUFBRCxJQUFlQSxJQUFJLENBQUNLLEVBQUwsSUFBVzRDLE1BQU0sQ0FBQzNFLE9BQXBELENBQWQ7QUFDQSw2Q0FBWWhELEtBQVo7QUFBbUJ5SDtBQUFuQjs7QUFFRjtBQUNFLGFBQU96SCxLQUFQO0FBVEo7QUFXRCxDQVpNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JQO0FBc0JBLE1BQU13SCxZQUFZLEdBQUc7QUFDbkJLLGNBQVksRUFBRSxFQURLO0FBRW5CQyxTQUFPLEVBQUUsS0FGVTtBQUduQkMsT0FBSyxFQUFFLElBSFk7QUFJbkJDLFlBQVUsRUFBRSxFQUpPO0FBS25CQyxPQUFLLEVBQUUsRUFMWTtBQU1uQkMsVUFBUSxFQUFFLEVBTlM7QUFPbkJDLFFBQU0sRUFBRSxFQVBXO0FBUW5CQyxRQUFNLEVBQUUsRUFSVztBQVNuQkMsY0FBWSxFQUFFLEVBVEs7QUFVbkJDLGFBQVcsRUFBRSxFQVZNO0FBV25CQyxjQUFZLEVBQUUsRUFYSztBQVluQkMsY0FBWSxFQUFFLEVBWks7QUFhbkJDLFdBQVMsRUFBRSxFQWJRO0FBY25CQyxNQUFJLEVBQUUsRUFkYTtBQWVuQkMsTUFBSSxFQUFFLEVBZmE7QUFnQm5CQyxhQUFXLEVBQUUsQ0FoQk07QUFpQm5CQyxXQUFTLEVBQUUsRUFqQlE7QUFrQm5CQyxXQUFTLEVBQUUsRUFsQlE7QUFtQm5CckosU0FBTyxFQUFFO0FBbkJVLENBQXJCO0FBc0JPLE1BQU1zSixVQUFVLEdBQUcsQ0FBQy9JLEtBQVUsR0FBR3dILFlBQWQsRUFBNEJHLE1BQTVCLEtBQTRDO0FBQ3BFLFVBQVFBLE1BQU0sQ0FBQzdFLElBQWY7QUFDRSxTQUFLSSwwREFBTDtBQUNFLDZDQUFZbEQsS0FBWjtBQUFtQjhILGVBQU8sRUFBRTtBQUE1Qjs7QUFFRixTQUFLckIsMkRBQUw7QUFDRSw2Q0FBWXpHLEtBQVo7QUFBbUJQLGVBQU8sRUFBRWtJLE1BQU0sQ0FBQzNFO0FBQW5DOztBQUVGLFNBQUtJLDBEQUFMO0FBQ0UsNkNBQVlwRCxLQUFaO0FBQW1COEgsZUFBTyxFQUFFO0FBQTVCOztBQUVGLFNBQUt2RSx5REFBTDtBQUNFLDZDQUFZdkQsS0FBWjtBQUFtQitILGFBQUssRUFBRUosTUFBTSxDQUFDM0U7QUFBakM7O0FBRUYsU0FBS1MseURBQUw7QUFDRSw2Q0FBWXpELEtBQVo7QUFBbUIrSCxhQUFLLEVBQUU7QUFBMUI7O0FBRUYsU0FBSy9ELDREQUFMO0FBQ0UsNkNBQVloRSxLQUFaO0FBQW1CaUksYUFBSyxFQUFFTixNQUFNLENBQUMzRTtBQUFqQzs7QUFFRixTQUFLd0QseURBQUw7QUFDRSxVQUFJMEIsUUFBUSxHQUFHbEksS0FBSyxDQUFDaUksS0FBckI7O0FBQ0EsVUFBSU4sTUFBTSxDQUFDM0UsT0FBUCxLQUFtQixRQUF2QixFQUFpQztBQUMvQmtGLGdCQUFRLENBQUNjLElBQVQsQ0FBYyxDQUFDQyxDQUFELEVBQVNDLENBQVQsS0FBb0I7QUFDaEMsZ0JBQU1DLEtBQUssR0FBRyxJQUFJQyxJQUFKLENBQVNILENBQUMsQ0FBQ0ksVUFBRixDQUFhQyxLQUFiLENBQW1CLEdBQW5CLEVBQXdCLENBQXhCLEVBQTJCQSxLQUEzQixDQUFpQyxHQUFqQyxFQUFzQ0MsSUFBdEMsQ0FBMkMsR0FBM0MsQ0FBVCxDQUFkO0FBQ0EsZ0JBQU1DLEtBQUssR0FBRyxJQUFJSixJQUFKLENBQVNGLENBQUMsQ0FBQ0csVUFBRixDQUFhQyxLQUFiLENBQW1CLEdBQW5CLEVBQXdCLENBQXhCLEVBQTJCQSxLQUEzQixDQUFpQyxHQUFqQyxFQUFzQ0MsSUFBdEMsQ0FBMkMsR0FBM0MsQ0FBVCxDQUFkOztBQUNBLGNBQUlKLEtBQUssQ0FBQ00sT0FBTixLQUFrQkQsS0FBSyxDQUFDQyxPQUFOLEVBQXRCLEVBQXVDO0FBQ3JDLG1CQUFPUixDQUFDLEdBQUdDLENBQVg7QUFDRCxXQUZELE1BRU8sSUFBSUMsS0FBSyxDQUFDTSxPQUFOLEtBQWtCRCxLQUFLLENBQUNDLE9BQU4sRUFBdEIsRUFBdUM7QUFDNUMsbUJBQU9QLENBQUMsR0FBR0QsQ0FBWDtBQUNELFdBRk0sTUFFQTtBQUNSLFNBUkQ7QUFTRDs7QUFDRCw2Q0FBWWpKLEtBQVo7QUFBbUJpSSxhQUFLLEVBQUVDO0FBQTFCOztBQUVGLFNBQUt2QywyREFBTDtBQUNFLDZDQUFZM0YsS0FBWjtBQUFtQmlJLGFBQUssRUFBRU4sTUFBTSxDQUFDM0U7QUFBakM7O0FBRUYsU0FBS2MsK0RBQUw7QUFDRSw2Q0FBWTlELEtBQVo7QUFBbUI0SSxtQkFBVyxFQUFFakIsTUFBTSxDQUFDM0U7QUFBdkM7O0FBRUYsU0FBS2tCLDREQUFMO0FBQ0UsNkNBQVlsRSxLQUFaO0FBQW1Ca0ksZ0JBQVEsRUFBRVAsTUFBTSxDQUFDM0U7QUFBcEM7O0FBRUYsU0FBS29CLGlFQUFMO0FBQ0UsNkNBQVlwRSxLQUFaO0FBQW1CbUksY0FBTSxFQUFFUixNQUFNLENBQUMzRTtBQUFsQzs7QUFFRixTQUFLd0IseURBQUw7QUFDRSw2Q0FBWXhFLEtBQVo7QUFBbUJvSSxjQUFNLEVBQUVULE1BQU0sQ0FBQzNFO0FBQWxDOztBQUVGLFNBQUtxRCw0REFBTDtBQUNFLDZDQUFZckcsS0FBWjtBQUFtQjhJLGlCQUFTLEVBQUVuQixNQUFNLENBQUMzRTtBQUFyQzs7QUFFRixTQUFLaUQsNERBQUw7QUFDRSw2Q0FBWWpHLEtBQVo7QUFBbUI2SSxpQkFBUyxFQUFFbEIsTUFBTSxDQUFDM0U7QUFBckM7O0FBRUYsU0FBSzZCLGtFQUFMO0FBQ0UsNkNBQVk3RSxLQUFaO0FBQW1CcUksb0JBQVksRUFBRSxDQUFDLEdBQUdySSxLQUFLLENBQUNxSSxZQUFWLEVBQXdCVixNQUFNLENBQUMzRSxPQUEvQjtBQUFqQzs7QUFFRixTQUFLZ0MsaUVBQUw7QUFDRSw2Q0FBWWhGLEtBQVo7QUFBbUJxSSxvQkFBWSxFQUFFVixNQUFNLENBQUMzRTtBQUF4Qzs7QUFFRixTQUFLcUMsZ0VBQUw7QUFDRSw2Q0FBWXJGLEtBQVo7QUFBbUI2SCxvQkFBWSxFQUFFRixNQUFNLENBQUMzRTtBQUF4Qzs7QUFFRixTQUFLd0Msa0VBQUw7QUFDRSw2Q0FBWXhGLEtBQVo7QUFBbUI2SCxvQkFBWSxFQUFFLENBQUMsR0FBRzdILEtBQUssQ0FBQzZILFlBQVYsRUFBd0JGLE1BQU0sQ0FBQzNFLE9BQS9CO0FBQWpDOztBQUVGLFNBQUsyRCwyREFBTDtBQUNFLDZDQUNLM0csS0FETDtBQUVFZ0ksa0JBQVUsRUFBRUwsTUFBTSxDQUFDM0UsT0FBUCxDQUFlZ0YsVUFGN0I7QUFHRU0sbUJBQVcsRUFBRVgsTUFBTSxDQUFDM0UsT0FBUCxDQUFlc0YsV0FIOUI7QUFJRUMsb0JBQVksRUFBRVosTUFBTSxDQUFDM0UsT0FBUCxDQUFldUYsWUFKL0I7QUFLRUMsb0JBQVksRUFBRWIsTUFBTSxDQUFDM0UsT0FBUCxDQUFld0YsWUFML0I7QUFNRUMsaUJBQVMsRUFBRWQsTUFBTSxDQUFDM0UsT0FBUCxDQUFleUYsU0FONUI7QUFPRUMsWUFBSSxFQUFFZixNQUFNLENBQUMzRSxPQUFQLENBQWUwRixJQVB2QjtBQVFFQyxZQUFJLEVBQUVoQixNQUFNLENBQUMzRSxPQUFQLENBQWUyRjtBQVJ2Qjs7QUFXRjtBQUFTLGFBQU8zSSxLQUFQO0FBL0VYO0FBaUZELENBbEZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDUDtBQUVBLE1BQU13SCxZQUFZLEdBQUc7QUFDbkJrQyxlQUFhLEVBQUU7QUFESSxDQUFyQjtBQUlPLE1BQU1DLGVBQWUsR0FBRyxDQUFDM0osS0FBSyxHQUFHd0gsWUFBVCxFQUF1QkcsTUFBdkIsS0FBdUM7QUFDcEUsVUFBUUEsTUFBTSxDQUFDN0UsSUFBZjtBQUNFLFNBQUsrRCx1REFBTDtBQUNFLDZDQUFZN0csS0FBWjtBQUFtQjBKLHFCQUFhLEVBQUUxSixLQUFLLENBQUMwSixhQUFOLENBQW9CRSxNQUFwQixDQUEyQmpDLE1BQU0sQ0FBQzNFLE9BQWxDO0FBQWxDOztBQUVGLFNBQUs4RCwwREFBTDtBQUNFLDZDQUFZOUcsS0FBWjtBQUFtQjBKLHFCQUFhLEVBQUUvQixNQUFNLENBQUMzRTtBQUF6Qzs7QUFFRixTQUFLK0QsMERBQUw7QUFDRSw2Q0FBWS9HLEtBQVo7QUFBbUIwSixxQkFBYSxFQUFFL0IsTUFBTSxDQUFDM0U7QUFBekM7O0FBRUY7QUFDRSxhQUFPaEQsS0FBUDtBQVhKO0FBYUQsQ0FkTSxDOzs7Ozs7Ozs7Ozs7QUNOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTTZKLFdBQVcsR0FBR0MsNkRBQWUsQ0FBQztBQUNoQ0MsV0FBUyxFQUFFQyx3REFEcUI7QUFFaEMvSixLQUFHLEVBQUU4SSxzREFGMkI7QUFHaENrQixVQUFRLEVBQUVOLGdFQUhzQjtBQUloQ3ZILE1BQUksRUFBRThILHdEQUowQjtBQUtoQ0MsT0FBSyxFQUFFekMsMERBQVlBO0FBTGEsQ0FBRCxDQUFuQztBQVFlbUMsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQSxNQUFNckMsWUFBWSxHQUFHO0FBQ25CUyxPQUFLLEVBQUUsRUFEWTtBQUVuQm1DLGNBQVksRUFBRTtBQUZLLENBQXJCO0FBS08sTUFBTUosV0FBVyxHQUFHLENBQUNoSyxLQUFLLEdBQUd3SCxZQUFULEVBQXVCRyxNQUF2QixLQUF1QztBQUNoRSxVQUFRQSxNQUFNLENBQUM3RSxJQUFmO0FBQ0UsU0FBS0MsK0RBQUw7QUFDRSw2Q0FBWS9DLEtBQVo7QUFBbUJpSSxhQUFLLEVBQUVqSSxLQUFLLENBQUNpSSxLQUFOLENBQVkyQixNQUFaLENBQW1CakMsTUFBTSxDQUFDM0UsT0FBMUI7QUFBMUI7O0FBRUYsU0FBSzBELDhEQUFMO0FBQ0UsNkNBQVkxRyxLQUFaO0FBQW1Cb0ssb0JBQVksRUFBRXpDLE1BQU0sQ0FBQzNFO0FBQXhDOztBQUVGO0FBQ0UsYUFBT2hELEtBQVA7QUFSSjtBQVVELENBWE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUFA7QUFFQSxNQUFNd0gsWUFBWSxHQUFHO0FBQ25CUyxPQUFLLEVBQUU7QUFEWSxDQUFyQjtBQUlPLE1BQU1pQyxXQUFXLEdBQUcsQ0FBQ2xLLEtBQUssR0FBR3dILFlBQVQsRUFBdUJHLE1BQXZCLEtBQXVDO0FBQ2hFLFVBQVFBLE1BQU0sQ0FBQzdFLElBQWY7QUFFRSxTQUFLa0UsMkRBQUw7QUFDRSw2Q0FBWWhILEtBQVo7QUFBbUJpSSxhQUFLLEVBQUVOLE1BQU0sQ0FBQzNFO0FBQWpDOztBQUVGLFNBQUtpRSwwREFBTDtBQUNFLDZDQUFZakgsS0FBWjtBQUFtQmlJLGFBQUssRUFBRU4sTUFBTSxDQUFDM0U7QUFBakM7O0FBRUYsU0FBS2tFLCtEQUFMO0FBQ0UsNkNBQVlsSCxLQUFaO0FBQW1CaUksYUFBSyxFQUFFTixNQUFNLENBQUMzRTtBQUFqQzs7QUFFRixTQUFLbUUsaUVBQUw7QUFDRSw2Q0FBWW5ILEtBQVo7QUFBbUJpSSxhQUFLLEVBQUVOLE1BQU0sQ0FBQzNFO0FBQWpDOztBQUVGLFNBQUtvRSw4REFBTDtBQUNFLDZDQUFZcEgsS0FBWjtBQUFtQmlJLGFBQUssRUFBRU4sTUFBTSxDQUFDM0U7QUFBakM7O0FBRUY7QUFDRSxhQUFPaEQsS0FBUDtBQWxCSjtBQW9CRCxDQXJCTSxDOzs7Ozs7Ozs7Ozs7QUNOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFFTyxVQUFVcUssUUFBVixHQUFxQjtBQUMxQixRQUFNQyw4REFBRyxDQUFDLENBQ1JDLDhEQUFXLEVBREgsQ0FFUjtBQUZRLEdBQUQsQ0FBVDtBQUlELEM7Ozs7Ozs7Ozs7OztBQ1REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLFVBQVVBLFdBQVYsR0FBd0I7QUFDN0IsUUFBTUMsb0VBQVMsQ0FBQzdHLGlFQUFELEVBQXFCOEcsVUFBckIsQ0FBZjtBQUNEOztBQUVELFVBQVVBLFVBQVYsR0FBdUI7QUFDckIsTUFBSTtBQUNGLFVBQU1DLDhEQUFHLENBQUN6SCxtRUFBVSxFQUFYLENBQVQ7QUFDQSxVQUFNRCxPQUFPLEdBQUcsTUFBTTJILCtEQUFJLENBQUNqSCxVQUFELENBQTFCO0FBQ0EsVUFBTWdILDhEQUFHLENBQUM7QUFBRTVILFVBQUksRUFBRTRELDhEQUFSO0FBQXlCMUQ7QUFBekIsS0FBRCxDQUFUO0FBQ0EsVUFBTTBILDhEQUFHLENBQUN2SCxtRUFBVSxFQUFYLENBQVQ7QUFDRCxHQUxELENBS0UsT0FBT3lILENBQVAsRUFBVTtBQUNWLFVBQU1GLDhEQUFHLENBQUNySCxrRUFBUyxDQUFDLHVCQUFELENBQVYsQ0FBVDtBQUNBLFVBQU1xSCw4REFBRyxDQUFDdkgsbUVBQVUsRUFBWCxDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxlQUFlTyxVQUFmLEdBQTRCO0FBQzFCLFFBQU1sRyxRQUFRLEdBQUcsTUFBTUMseURBQUssQ0FBQyw0Q0FBRCxDQUE1QjtBQUNBLFNBQU8sTUFBTUQsUUFBUSxDQUFDUSxJQUFULEVBQWI7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUN6QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFFQSxNQUFNNk0sY0FBYyxHQUFHLEVBQXZCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxpREFBcUIsRUFBbEM7QUFFQSxNQUFNOUwsS0FBVSxHQUFHK0wseURBQVcsQ0FDNUJuQiw2REFENEIsRUFFNUJnQixjQUY0QixFQUc1QkksNkRBQWUsQ0FDYkMsa0RBRGEsRUFFYjtBQUNBSixJQUhhLENBSGEsQ0FBOUI7QUFVQUEsSUFBSSxDQUFDSyxHQUFMLENBQVNkLHFEQUFUO0FBRUFwTCxLQUFLLENBQUNtTSxTQUFOLENBQWdCLE1BQU07QUFDcEJ2TSxTQUFPLENBQUN3RCxHQUFSLENBQVksaUJBQVosRUFBK0JwRCxLQUFLLENBQUNvTSxRQUFOLEVBQS9CO0FBQ0QsQ0FGRDtBQUllcE0sb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQge3Nob3dTdWNjZXNzfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9hY3Rpb25zXCI7XG5cbmxldCBjdXJyZW50VXNlclN1YmplY3QgPSBDb29raWVzLmdldEpTT04oXCJjdXJyZW50VXNlclwiKVxuICAgID8gQ29va2llcy5nZXRKU09OKFwiY3VycmVudFVzZXJcIilcbiAgICA6IHt9O1xuXG5jb25zdCB0YXJnZXQgPSBgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaWA7XG5cbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGlvblNlcnZpY2UgPSB7XG4gICAgbG9naW4sXG4gICAgbG9nb3V0LFxuICAgIHJlZ2lzdHJhdGlvbkFkbWluLFxuICAgIHJlZ2lzdHJhdGlvbkNsaWVudCxcbiAgICByZWdpc3RyYXRpb25Qcm92aWRlcixcbiAgICByZWdpc3RyYXRpb25BZ2VuY3ksXG4gICAgY3VycmVudFVzZXI6IGN1cnJlbnRVc2VyU3ViamVjdCxcbiAgICBnZXQgY3VycmVudFVzZXJWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRVc2VyU3ViamVjdDtcbiAgICB9LFxufTtcblxuYXN5bmMgZnVuY3Rpb24gbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RhcmdldH0vbG9naW5gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtlbWFpbCwgcGFzc3dvcmR9KSxcbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgQ29va2llcy5zZXQoXCJjdXJyZW50VXNlclwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSwge2V4cGlyZXM6IDF9KTtcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyU3ViamVjdCA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkudGhlbigoKSA9PiBSb3V0ZXIucHVzaCgnLycpKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWdpc3RyYXRpb25DbGllbnQoXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHBhc3N3b3JkOiBzdHJpbmcsXG4gICAgZW1haWw6IHN0cmluZyxcbiAgICBwYXNzd29yZF9jb25maXJtYXRpb246IHN0cmluZ1xuKTogUHJvbWlzZTxhbnk+IHtcbiAgICBDb29raWVzLnJlbW92ZShcImN1cnJlbnRVc2VyXCIpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvY2xpZW50L3JlZ2lzdGVyYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzaG93U3VjY2VzcyhkYXRhLm1lc3NhZ2UpKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCksIDMwMDApXG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkFkbWluKFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBwYXNzd29yZDogc3RyaW5nLFxuICAgIGVtYWlsOiBzdHJpbmcsXG4gICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBzdHJpbmdcbik6IFByb21pc2U8YW55PiB7XG4gICAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RhcmdldH0vYWRtaW4vcmVnaXN0ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHNob3dTdWNjZXNzKGRhdGEubWVzc2FnZSkpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSwgMzAwMClcbiAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0cmF0aW9uUHJvdmlkZXIoXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHBhc3N3b3JkOiBzdHJpbmcsXG4gICAgZW1haWw6IHN0cmluZyxcbiAgICBwYXNzd29yZF9jb25maXJtYXRpb246IHN0cmluZyxcbiAgICBwaG9uZTogc3RyaW5nIHwgbnVtYmVyXG4pOiBQcm9taXNlPGFueT4ge1xuICAgIENvb2tpZXMucmVtb3ZlKFwiY3VycmVudFVzZXJcIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2luZGl2aWR1YWwvcmVnaXN0ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgcGhvbmVcbiAgICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzaG93U3VjY2VzcyhkYXRhLm1lc3NhZ2UpKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCksIDMwMDApXG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkFnZW5jeShcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZyxcbiAgICBlbWFpbDogc3RyaW5nLFxuICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogc3RyaW5nLFxuICAgIHBob25lOiBzdHJpbmcgfCBudW1iZXIsXG4gICAgYWdlbmN5X25hbWU6IHN0cmluZ1xuKTogUHJvbWlzZTxhbnk+IHtcbiAgICBDb29raWVzLnJlbW92ZShcImN1cnJlbnRVc2VyXCIpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9hZ2VuY3kvcmVnaXN0ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgcGhvbmUsXG4gICAgICAgICAgICBhZ2VuY3lfbmFtZVxuICAgICAgICB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHNob3dTdWNjZXNzKGRhdGEubWVzc2FnZSkpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSwgMzAwMClcbiAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9sb2dvdXRgLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgICAgfSxcbiAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiBSb3V0ZXIucHVzaCgnL2xvZ2luJykpXG4gICAgICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSkpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQge2Nvbm5lY3R9ZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgcyBmcm9tICcuL3N1Y2Nlc3MubW9kdWxlLnNjc3MnXG5cbmZ1bmN0aW9uIFN1Y2Nlc3Moe3N1Y2Nlc3N9KSB7XG4gICAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShzdWNjZXNzID8gdHJ1ZSA6IGZhbHNlKTtcblxuICAgIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldE1vZGFsKCFtb2RhbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRNb2RhbChzdWNjZXNzID8gdHJ1ZSA6IGZhbHNlKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldE1vZGFsKGZhbHNlKSwgMzAwMClcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbCBpc09wZW49e21vZGFsfSB0b2dnbGU9e3RvZ2dsZX0+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAge3N1Y2Nlc3N9XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01vZGFsPlxuICAgIClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBzdWNjZXNzOiBzdGF0ZS5hcHAuc3VjY2Vzc1xufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFN1Y2Nlc3MpXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHMgZnJvbSAnLi9sb2dpbi5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luQ29udHJvbCh7IGNoYW5nZVZpc2libGVTaWduSW5Db21wb25lbnQsIHZpc2libGVTaWduSW5Db21wb25lbnQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt2aXNpYmxlU2lnbkluQ29tcG9uZW50ID8gcy5hY3RpdmUgOiBudWxsfSAke3MubG9naW5fYnRuX2NvbnRyb2x9YH0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICBvbkNsaWNrPXtjaGFuZ2VWaXNpYmxlU2lnbkluQ29tcG9uZW50fT5cbiAgICAgICAgU2lnbkluIC8gU2lnblVwPC9zcGFuPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHMgZnJvbSAnLi9sb2dpbi5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBGb3JtaWssIEZpZWxkLCBGb3JtLCBFcnJvck1lc3NhZ2UgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBhdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9fc2VydmljZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oeyByZWdpc3RlcmVkUGFzc3dvcmQsIHJlZ2lzdGVyZWRFbWFpbCB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubG9naW5fcGFnZV9mb3JtfT5cbiAgICAgIDxoMj5Mb2dpbjwvaDI+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICAgIH19XG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e1l1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgICAgICAgZW1haWw6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnZW1haWwgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICBwYXNzd29yZDogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdQYXNzd29yZCBpcyByZXF1aXJlZCcpXG4gICAgICAgIH0pfVxuICAgICAgICBvblN1Ym1pdD17KHsgZW1haWwsIHBhc3N3b3JkIH0sIHsgc2V0U3RhdHVzLCBzZXRTdWJtaXR0aW5nIH0pID0+IHtcbiAgICAgICAgICBzZXRTdGF0dXMoKTtcbiAgICAgICAgICBhdXRoZW50aWNhdGlvblNlcnZpY2UubG9naW4oZW1haWwsIHBhc3N3b3JkKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhOicsIGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgKGRhdGEudG9rZW4pIHtcbiAgICAgICAgICAgICAgICAvLyAgIGlmIChkYXRhLnVzZXIucm9sZSA9PT0gJ2NsaWVudCcpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgcm91dGVyLnB1c2goJy91c2VyQ2FiaW5ldCcpO1xuICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIGlmIChkYXRhLnVzZXIucm9sZSA9ICdpbmRpdmlkdWFsJykge1xuICAgICAgICAgICAgICAgIC8vICAgICByb3V0ZXIucHVzaCgnL21vZGVsQ2FiaW5ldCcpO1xuICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIGlmIChkYXRhLnVzZXIucm9sZSA9PT0gJ2FkbWluJykge1xuICAgICAgICAgICAgICAgIC8vICAgICByb3V0ZXIucHVzaCgnL2FkbWluJyk7XG4gICAgICAgICAgICAgICAgLy8gICB9IGVsc2UgaWYgKGRhdGEudXNlci5yb2xlID09PSAnYWdlbmN5Jykge1xuICAgICAgICAgICAgICAgIC8vICAgICByb3V0ZXIucHVzaCgnL21vZGVsQ2FiaW5ldCcpO1xuICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldFN0YXR1cyhlcnJvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC8vIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICAgICAgfX1cbiAgICAgICAgcmVuZGVyPXsoeyBlcnJvcnMsIHN0YXR1cywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcbiAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImVtYWlsXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eydmb3JtLWNvbnRyb2wnICsgKGVycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsID8gJyBpcy1pbnZhbGlkJyA6ICcnKX0gLz5cbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwiZW1haWxcIiBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9eydmb3JtLWNvbnRyb2wnICsgKGVycm9ycy5wYXNzd29yZCAmJiB0b3VjaGVkLnBhc3N3b3JkID8gJyBpcy1pbnZhbGlkJyA6ICcnKX0gLz5cbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwicGFzc3dvcmRcIiBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17YGJ0biAke3Muc3VibWl0X2J0bn1gfSBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAge2lzU3VibWl0dGluZyAmJlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gdGV4dC1wcmltYXJ5IG1sLTNcIiByb2xlPVwic3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7c3RhdHVzICYmXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYWxlcnQgYWxlcnQtZGFuZ2VyJ30+e3N0YXR1c308L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcyBmcm9tICcuL2xvZ2luLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEZvcm1paywgRmllbGQsIEZvcm0sIEVycm9yTWVzc2FnZSB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL19zZXJ2aWNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcCh7IHNldFZpc2libGVTaWduSW5Db21wb25lbnQsIHNldFJlZ2lzdGVyZWRFbWFpbCwgc2V0UmVnaXN0ZXJlZFBhc3N3b3JkIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtmb3JtVXNlciwgc2V0Rm9ybVVzZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc0FnZW5jeSwgc2V0SXNBZ2VuY3ldID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubG9naW5fcGFnZV9mb3JtfT5cbiAgICAgIDxoMj5SZWdpc3RyYXRpb248L2gyPlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJyxcbiAgICAgICAgICBwaG9uZTogJycsXG4gICAgICAgICAgYWdlbmN5OiAnJ1xuICAgICAgICB9fVxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtZdXAub2JqZWN0KCkuc2hhcGUoXG4gICAgICAgICAgZm9ybVVzZXJcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICB1c2VybmFtZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdVc2VybmFtZSBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgICBwYXNzd29yZDogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdQYXNzd29yZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgICBlbWFpbDogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdFbWFpbCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnUGFzc3dvcmQgaXMgcmVxdWlyZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiAoIWlzQWdlbmN5KVxuICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdVc2VybmFtZSBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgICAgICAgZW1haWw6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnRW1haWwgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnUGFzc3dvcmQgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgICAgICBwaG9uZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdQaG9uZSBpcyByZXF1aXJlZCBhbmQgbXVzdCBjb250YWluIDEyIGNoYXJhY3RlcnMnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoJ1VzZXJuYW1lIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnUGFzc3dvcmQgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgICAgICBlbWFpbDogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdFbWFpbCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdQYXNzd29yZCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgICAgIHBob25lOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoJ1Bob25lIGlzIHJlcXVpcmVkIGFuZCBtdXN0IGNvbnRhaW4gMTIgY2hhcmFjdGVycycpLFxuICAgICAgICAgICAgICAgIGFnZW5jeTogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdBZ2VuY3kgaXMgcmVxdWlyZWQnKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgb25TdWJtaXQ9eyh7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHBhc3N3b3JkX2NvbmZpcm1hdGlvbiwgcGhvbmUsIGFnZW5jeSB9LCB7IHNldFN0YXR1cywgc2V0U3VibWl0dGluZyB9KSA9PiB7XG4gICAgICAgICAgc2V0U3RhdHVzKCk7XG4gICAgICAgICAgKHBob25lLnRvU3RyaW5nKCkubGVuZ3RoKVxuICAgICAgICAgICAgPyAoIWlzQWdlbmN5KVxuICAgICAgICAgICAgICA/IGF1dGhlbnRpY2F0aW9uU2VydmljZS5yZWdpc3RyYXRpb25Qcm92aWRlcihcbiAgICAgICAgICAgICAgICB1c2VybmFtZSwgcGFzc3dvcmQsIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbiwgcGhvbmVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IGF1dGhlbnRpY2F0aW9uU2VydmljZS5yZWdpc3RyYXRpb25BZ2VuY3koXG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsIHBhc3N3b3JkLCBlbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb24sIHBob25lLCBhZ2VuY3lcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBhdXRoZW50aWNhdGlvblNlcnZpY2UucmVnaXN0cmF0aW9uQ2xpZW50KFxuICAgICAgICAgICAgICB1c2VybmFtZSwgcGFzc3dvcmQsIGVtYWlsLCBwYXNzd29yZF9jb25maXJtYXRpb25cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zdCB7IGZyb20gfSA9XG4gICAgICAgICAgICAgICAgICAvLyAgIHsgZnJvbTogeyBwYXRobmFtZTogXCIvXCIgfSB9O1xuICAgICAgICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgLy8gICBwYXRobmFtZTogJy9sb2dpbicsXG4gICAgICAgICAgICAgICAgICAvLyBxdWVyeTogeyBlbWFpbCwgcGFzc3dvcmQgfVxuICAgICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgICAvLyBzZXRSZWdpc3RlcmVkRW1haWwoZW1haWwpO1xuICAgICAgICAgICAgICAgICAgLy8gc2V0UmVnaXN0ZXJlZFBhc3N3b3JkKHBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICAgIC8vIHNldFZpc2libGVTaWduSW5Db21wb25lbnQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBzZXRTdGF0dXMoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgICAgcmVuZGVyPXsoeyBlcnJvcnMsIHN0YXR1cywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcbiAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzLnJvbGVfdG9nZ2xlcn1gfT5cbiAgICAgICAgICAgICAge2Zvcm1Vc2VyID8gPHNwYW4gY2xhc3NOYW1lPXtgJHtzLnVzZXJ9YH0+YXMgVXNlcjwvc3Bhbj4gOiA8c3BhbiBjbGFzc05hbWU9e2Ake3MubW9kZWx9YH0+YXMgTW9kZWw8L3NwYW4+fVxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLnN3aXRjaH0gaHRtbEZvcj1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17KCkgPT4gc2V0Rm9ybVVzZXIoIWZvcm1Vc2VyKX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cy5zbGlkZXJ9ICR7cy5yb3VuZH1gfSAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgICAgICAgeyFmb3JtVXNlclxuICAgICAgICAgICAgICAgID8gPGxhYmVsPjxzcGFuIGNsYXNzTmFtZT1cImg0IG1yLTJcIj5hcyBBZ2VuY3k8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eygpID0+IHNldElzQWdlbmN5KCFpc0FnZW5jeSl9IC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eydmb3JtLWNvbnRyb2wnICsgKGVycm9ycy51c2VybmFtZSAmJiB0b3VjaGVkLnVzZXJuYW1lID8gJyBpcy1pbnZhbGlkJyA6ICcnKX0gLz5cbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwidXNlcm5hbWVcIiBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9eydmb3JtLWNvbnRyb2wnICsgKGVycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsID8gJyBpcy1pbnZhbGlkJyA6ICcnKX0gLz5cbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwiZW1haWxcIiBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9eydmb3JtLWNvbnRyb2wnICsgKGVycm9ycy5wYXNzd29yZCAmJiB0b3VjaGVkLnBhc3N3b3JkID8gJyBpcy1pbnZhbGlkJyA6ICcnKX0gLz5cbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwicGFzc3dvcmRcIiBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRfY29uZmlybWF0aW9uXCI+Q29uZmlybSBwYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPXsnZm9ybS1jb250cm9sJyArIChlcnJvcnMucGFzc3dvcmRfY29uZmlybWF0aW9uICYmIHRvdWNoZWQucGFzc3dvcmRfY29uZmlybWF0aW9uID8gJyBpcy1pbnZhbGlkJyA6ICcnKX0gLz5cbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIgY29tcG9uZW50PVwiZGl2XCIgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHshZm9ybVVzZXIgJiYgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj5QaG9uZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGhvbmVcIiB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPXsnZm9ybS1jb250cm9sJyArIChlcnJvcnMucGhvbmUgJiYgdG91Y2hlZC5waG9uZSA/ICcgaXMtaW52YWxpZCcgOiAnJyl9IC8+XG4gICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cInBob25lXCIgY29tcG9uZW50PVwiZGl2XCIgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICB7aXNBZ2VuY3kgJiYgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWdlbmN5XCI+QWdlbmN5IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImFnZW5jeVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsnZm9ybS1jb250cm9sJyArIChlcnJvcnMuYWdlbmN5ICYmIHRvdWNoZWQuYWdlbmN5ID8gJyBpcy1pbnZhbGlkJyA6ICcnKX0gaWQ9XCJhZ2VuY3lcIiAvPlxuICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJhZ2VuY3lcIiBjb21wb25lbnQ9XCJkaXZcIiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCIgLz5cbiAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e2BidG4gJHtzLnN1Ym1pdF9idG59YH0gZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgIHtpc1N1Ym1pdHRpbmcgJiZcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtIHRleHQtcHJpbWFyeSBtbC0zXCIgcm9sZT1cInN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3N0YXR1cyAmJlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2FsZXJ0IGFsZXJ0LWRhbmdlcid9PntKU09OLnN0cmluZ2lmeShzdGF0dXMpfXtjb25zb2xlLmxvZyhzdGF0dXMpfTwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvZ2luX3BhZ2VfZm9ybVwiOiBcImxvZ2luX2xvZ2luX3BhZ2VfZm9ybV9fMUkzaFhcIixcblx0XCJzdWJtaXRfYnRuXCI6IFwibG9naW5fc3VibWl0X2J0bl9fbldaYjlcIixcblx0XCJsb2dpbl9idG5fY29udHJvbFwiOiBcImxvZ2luX2xvZ2luX2J0bl9jb250cm9sX18xVlhoSVwiLFxuXHRcImFjdGl2ZVwiOiBcImxvZ2luX2FjdGl2ZV9fMzVHWTNcIixcblx0XCJ1c2VyXCI6IFwibG9naW5fdXNlcl9fMjJCZE1cIixcblx0XCJtb2RlbFwiOiBcImxvZ2luX21vZGVsX19zRjRCTlwiLFxuXHRcInJvbGVfdG9nZ2xlclwiOiBcImxvZ2luX3JvbGVfdG9nZ2xlcl9fajVhWjZcIixcblx0XCJzd2l0Y2hcIjogXCJsb2dpbl9zd2l0Y2hfXzJLWVFVXCIsXG5cdFwic2xpZGVyXCI6IFwibG9naW5fc2xpZGVyX185ZXFyZFwiLFxuXHRcInJvdW5kXCI6IFwibG9naW5fcm91bmRfXzFyU0tmXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaWduSW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9naW4tcGFnZS9TaWduSW5cIjtcbmltcG9ydCBTaWduVXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9naW4tcGFnZS9TaWduVXBcIjtcbmltcG9ydCBMb2dpbkNvbnRyb2wgZnJvbSAnLi4vY29tcG9uZW50cy9sb2dpbi1wYWdlL0xvZ2luQ29udHJvbCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFN1Y2Nlc3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVscGVycy9TdWNjZXNzXCI7XG5cbmZ1bmN0aW9uIGxvZ2luKHtzdWNjZXNzfSkge1xuXHRjb25zdCBbdmlzaWJsZVNpZ25JbkNvbXBvbmVudCwgc2V0VmlzaWJsZVNpZ25JbkNvbXBvbmVudF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuXHRjb25zdCBjaGFuZ2VWaXNpYmxlU2lnbkluQ29tcG9uZW50ID0gKCkgPT4ge1xuXHRcdHNldFZpc2libGVTaWduSW5Db21wb25lbnQoIXZpc2libGVTaWduSW5Db21wb25lbnQpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJweC0yXCI+XG5cdFx0XHQ8TG9naW5Db250cm9sXG5cdFx0XHRcdHZpc2libGVTaWduSW5Db21wb25lbnQ9e3Zpc2libGVTaWduSW5Db21wb25lbnR9XG5cdFx0XHRcdGNoYW5nZVZpc2libGVTaWduSW5Db21wb25lbnQ9e2NoYW5nZVZpc2libGVTaWduSW5Db21wb25lbnR9XG5cdFx0XHQvPlxuXHRcdFx0e3N1Y2Nlc3MgJiYgPFN1Y2Nlc3MgLz59XG5cdFx0XHR7dmlzaWJsZVNpZ25JbkNvbXBvbmVudFxuXHRcdFx0XHQ/IDxTaWduSW4gLz5cblx0XHRcdFx0OiA8U2lnblVwIC8+fVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuXHRzdWNjZXNzOiBzdGF0ZS5hcHAuc3VjY2Vzc1xufSlcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuXG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShsb2dpbikiLCJpbXBvcnQge1xuICAgIFRFU1RfQ1JFQVRFX1BPU1QsXG4gICAgU0hPV19MT0FERVIsXG4gICAgSElERV9MT0FERVIsXG4gICAgU0hPV19BTEVSVCxcbiAgICBISURFX0FMRVJULFxuICAgIFRFU1RfUkVRVUVTVF9QT1NUUyxcbiAgICBHRVRfQUxMX1BPU1RTLFxuICAgIEdFVF9MT0NBSVRPTlNfSU5GTyxcbiAgICBHRVRfQ0lUSUVTLFxuICAgIENSRUFURV9TVVBQT1JUX1RBU0ssXG4gICAgR0VUX0FMTF9VU0VSX1RBU0tTLFxuICAgIEdFVF9BUFBfSU5GTyxcbiAgICBHRVRfTkVXX1BPU1RTLFxuICAgIEdFVF9QQUdFU19OVU1CRVIsXG4gICAgR0VUX1BPU1RfQ09NTUVOVFMsXG4gICAgQ1JFQVRFX1BPU1RfQ09NTUVOVCxcbiAgICBGSUxURVJfUE9TVFMsXG4gICAgR0VUX0ZBVk9SSVRFUyxcbiAgICBHRVRfQ09NUExBSU5TLFxuICAgIFNPUlRfUE9TVFMsXG4gICAgU0hPV19TVUNDRVNTXG59IGZyb20gXCIuL3R5cGVzXCJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgYXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL19zZXJ2aWNlc1wiO1xuXG4vLyBUIEUgUyBUIFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvc3QocG9zdDogYW55KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBURVNUX0NSRUFURV9QT1NULFxuICAgICAgICBwYXlsb2FkOiBwb3N0XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9hZGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNIT1dfTE9BREVSXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMb2FkZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogSElERV9MT0FERVJcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd0FsZXJ0KHRleHQ6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogU0hPV19BTEVSVCxcbiAgICAgICAgICAgIHBheWxvYWQ6IHRleHRcbiAgICAgICAgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChoaWRlQWxlcnQoKSlcbiAgICAgICAgfSwgMzAwMClcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaGlkZUFsZXJ0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEhJREVfQUxFUlRcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb3N0cygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFRFU1RfUkVRVUVTVF9QT1NUU1xuICAgIH1cbn07XG5leHBvcnQgY29uc3QgZ2V0QWxsUG9zdHMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0c2ApO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX1BBR0VTX05VTUJFUiwgcGF5bG9hZDogcmVzLmxhc3RfcGFnZSB9KTtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfQUxMX1BPU1RTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xufVxuZXhwb3J0IGNvbnN0IGdldE5ld1Bvc3RzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvYWxsL25ld2ApO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9ORVdfUE9TVFMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XG59XG5leHBvcnQgY29uc3QgZ2V0TG9jYXRpb25zSW5mbyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2xvY2F0aW9uYCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0xPQ0FJVE9OU19JTkZPLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xufVxuZXhwb3J0IGNvbnN0IGdldEFwcEluZm8gPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9pbmZvYCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAvLyByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfQVBQX0lORk8sIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKSk7XG59XG5leHBvcnQgY29uc3QgZ2V0Q2l0aWVzID0gKHN0YXRlSWQ6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2xvY2F0aW9uL2NpdGllcy8ke3N0YXRlSWR9YCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0NJVElFUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBjcmVhdGVTdXBwb3J0VGFzayA9ICh0YXNrOiBhbnkpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9zdXBwb3J0L2NyZWF0ZWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhc2spXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xuICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IENSRUFURV9TVVBQT1JUX1RBU0ssIHBheWxvYWQ6IHRhc2sgfSlcbn1cbmV4cG9ydCBjb25zdCBnZXRBbGxVc2Vyc1Rhc2tzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3N1cHBvcnQvJHt1c2VyLnVzZXIuaWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYCR7dXNlci50b2tlbl90eXBlfSAke3VzZXIudG9rZW59YFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0FMTF9VU0VSX1RBU0tTLCBwYXlsb2FkOiByZXMgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBzZWxlY3RQb3N0c1BhZ2UgPSAocGFnZTogbnVtYmVyIHwgc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cz9wYWdlPSR7cGFnZX1gKTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9QQUdFU19OVU1CRVIsIHBheWxvYWQ6IHJlcy5sYXN0X3BhZ2UgfSk7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX0FMTF9QT1NUUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBnZXRQb3N0Q29tbWVudHMgPSAocG9zdElkOiBudW1iZXIgfCBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cy8ke3Bvc3RJZH0vY29tbWVudHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9QT1NUX0NPTU1FTlRTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpOztcbn1cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0Q29tbWVudCA9IChwb3N0SWQ6IG51bWJlciB8IHN0cmluZywgY29tbWVudDogc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvJHtwb3N0SWR9L2NvbW1lbnRzL2NyZWF0ZWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29tbWVudCB9KVxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQ1JFQVRFX1BPU1RfQ09NTUVOVCwgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTs7XG59XG5leHBvcnQgY29uc3QgZmlsdGVyUG9zdHMgPSAoZmlsdGVySXRlbXNPYmplY3Q6IGFueSkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIC8vIGZyb20sIHRvLCBnZW5kZXIsIGV0aG5pY2l0eV9pZCwgaGFpcl9pZCwgZXllX2lkLCBjYXRlZ29yeV9pZCwgYWZmaWxpYXRpb25faWQsIGF2YWlsYWJpbGl0eV9pZHMoYXJyYXkpLCBhdmFpbGFibGV0b19pZHMoYXJyYXkpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9maWx0ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmaWx0ZXJJdGVtc09iamVjdClcbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfUEFHRVNfTlVNQkVSLCBwYXlsb2FkOiByZXMubGFzdF9wYWdlIH0pO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEZJTFRFUl9QT1NUUywgcGF5bG9hZDogcmVzLmRhdGEuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpOztcbn1cbmV4cG9ydCBjb25zdCByZXBvcnRQb3N0ID0gKHBvc3RJZDogbnVtYmVyIHwgc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpLyR7cG9zdElkfS9jb21wbGFpbnRzL2FkZGAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1lc3NhZ2UsIHN0YXR1czogJ0luIHByb2dyZXNzJ1xuICAgICAgICB9KVxuICAgIH0pO1xuICAgIC8vIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gcmV0dXJuIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgIC8vICAgICBkaXNwYXRjaCh7IHR5cGU6IFJFUE9SVF9QT1NUIH0pO1xuICAgIC8vIH0pO1xufVxuZXhwb3J0IGNvbnN0IGFkZFRvRmF2b3JpdGVzID0gKHBvc3RJZDogbnVtYmVyIHwgc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlO1xuICAgIHJldHVybiBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9wb3N0cy8ke3Bvc3RJZH0vZmF2b3JpdGVzL2FkZGAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGlzX2Zhdm9yaXRlOiB0cnVlXG4gICAgICAgIH0pXG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgYWRkVG9GYXZvcml0ZXNCdXNpbmVzcyA9IChwb3N0SWQ6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvcG9zdHMvJHtwb3N0SWR9L2Zhdm9yaXRlc19idXNpbmVzcy9hZGRgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZXNCdXNpbmVzcyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRpbS12aWJlLWFwaS5wYWRpbG8ucHJvL2FwaS9mYXZvcml0ZXNfYnVzaW5lc3MvbXlgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0ZBVk9SSVRFUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZXNVc2VyID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2Zhdm9yaXRlcy9teWAsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGAke3VzZXIudG9rZW5fdHlwZX0gJHt1c2VyLnRva2VufWBcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfRkFWT1JJVEVTLCBwYXlsb2FkOiByZXMuZGF0YSB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycikpO1xufVxuZXhwb3J0IGNvbnN0IGdldENvbXBsYWlucyA9ICh1c2VySWQ6IG51bWJlciB8IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzL2NvbXBsYWludHMvdXNlci8ke3VzZXJJZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHt1c2VyLnRva2VuX3R5cGV9ICR7dXNlci50b2tlbn1gXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogR0VUX0NPTVBMQUlOUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpKTtcbn1cbmV4cG9ydCBjb25zdCBzb3J0UG9zdHMgPSAoc29ydFR5cGU6IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBGdW5jdGlvbikgPT4ge1xuICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IFNPUlRfUE9TVFMsIHBheWxvYWQ6IHNvcnRUeXBlIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzaG93U3VjY2VzcyA9ICh0ZXh0OiBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRnVuY3Rpb24pID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFNIT1dfU1VDQ0VTUywgcGF5bG9hZDogdGV4dCB9KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFNIT1dfU1VDQ0VTUywgcGF5bG9hZDogbnVsbCB9KVxuICAgIH0sIDMwMDApXG59XG4iLCIvLyB0ZXN0XG5leHBvcnQgY29uc3QgVEVTVF9DUkVBVEVfUE9TVCA9ICdDUkVBVEVfUE9TVCc7XG5leHBvcnQgY29uc3QgVEVTVF9GRVRDSF9QT1NUID0gJ0ZFVENIX1BPU1QnO1xuZXhwb3J0IGNvbnN0IFRFU1RfUkVRVUVTVF9QT1NUUyA9ICdSRVFVRVNUX1BPU1RTJztcblxuLy8gYXBwXG5leHBvcnQgY29uc3QgU0hPV19MT0FERVIgPSAnQVBQL1NIT1dfTE9BREVSJztcbmV4cG9ydCBjb25zdCBISURFX0xPQURFUiA9ICdBUFAvSElERV9MT0FERVInO1xuZXhwb3J0IGNvbnN0IFNIT1dfQUxFUlQgPSAnQVBQL1NIT1dfQUxFUlQnO1xuZXhwb3J0IGNvbnN0IEhJREVfQUxFUlQgPSAnQVBQL0hJREVfQUxFUlQnOyBcbmV4cG9ydCBjb25zdCBHRVRfQUxMX1BPU1RTID0gJ0dFVF9BTExfUE9TVFMnO1xuZXhwb3J0IGNvbnN0IEdFVF9QQUdFU19OVU1CRVIgPSAnR0VUX1BBR0VTX05VTUJFUic7XG5leHBvcnQgY29uc3QgR0VUX05FV19QT1NUUyA9ICdHRVRfTkVXX1BPU1RTJztcbmV4cG9ydCBjb25zdCBHRVRfTE9DQUlUT05TX0lORk8gPSAnR0VUX0xPQ0FJVE9OU19JTkZPJztcbmV4cG9ydCBjb25zdCBHRVRfQ0lUSUVTID0gJ0dFVF9DSVRJRVMnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9TVVBQT1JUX1RBU0sgPSAnQ1JFQVRFX1NVUFBPUlRfVEFTSyc7XG5leHBvcnQgY29uc3QgR0VUX0FMTF9VU0VSX1RBU0tTID0gJ0dFVF9BTExfVVNFUl9UQVNLUyc7XG5leHBvcnQgY29uc3QgR0VUX0FQUF9JTkZPID0gJ0dFVF9BUFBfSU5GTyc7XG5leHBvcnQgY29uc3QgR0VUX1BPU1RfQ09NTUVOVFMgPSAnR0VUX1BPU1RfQ09NTUVOVFMnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUX0NPTU1FTlQgPSAnQ1JFQVRFX1BPU1RfQ09NTUVOVCc7XG5leHBvcnQgY29uc3QgRklMVEVSX1BPU1RTID0gJ0ZJTFRFUl9QT1NUUyc7XG5leHBvcnQgY29uc3QgUkVQT1JUX1BPU1QgPSAnUkVQT1JUX1BPU1QnO1xuZXhwb3J0IGNvbnN0IEdFVF9GQVZPUklURVMgPSAnR0VUX0ZBVk9SSVRFUyc7XG5leHBvcnQgY29uc3QgR0VUX0NPTVBMQUlOUyA9ICdHRVRfR0VUX0NPTVBMQUlOUyc7XG5leHBvcnQgY29uc3QgU09SVF9QT1NUUyA9ICdTT1JUX1BPU1RTJztcbmV4cG9ydCBjb25zdCBTSE9XX1NVQ0NFU1MgPSAnU0hPV19TVUNDRVNTJztcblxuLy8gcHJvdmlkZXJcbmV4cG9ydCBjb25zdCBBRERfUE9TVCA9ICdQUk9WSURFUi9BRERfUE9TVCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1QgPSAnUFJPVklERVIvUkVNT1ZFX1BPU1QnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NUID0gJ1BST1ZJREVSL1VQREFURV9QT1NUJztcblxuLy8gcHJvdmlkZXJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvdmlkZXJQb3N0IHtcbiAgaWQ6IG51bWJlciB8IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nLFxuICBzZWNvbmROYW1lOiBzdHJpbmcsXG4gIGFjY291bnRpbmdOYW1lOiBzdHJpbmcsXG4gIHNleDogc3RyaW5nLFxuICBhZ2U6IG51bWJlciB8IHN0cmluZyxcbiAgZW1haWw6IHN0cmluZyxcbiAgcGhvbmU6IG51bWJlciB8IHN0cmluZyxcbiAgZXRobml0aGl0eTogc3RyaW5nLFxuICBoYWlyOiBzdHJpbmcsXG4gIGV5ZXM6IHN0cmluZyxcbiAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gIGFmZmlsaWF0aW9uOiBzdHJpbmcsXG4gIGF2YWlsYWJsZVRvOiBzdHJpbmcsXG4gIGF2YWlsYWJpbGl0eTogc3RyaW5nLFxuICBzaG9ydFN1bW1hcnk6IHN0cmluZyxcbiAgYWJvdXQ6IHN0cmluZyxcbiAgcGhvdG9zOiBzdHJpbmdbXSxcbiAgdmlkZW9zOiBzdHJpbmdbXVxufVxuXG4vLyB1c2VyXG5leHBvcnQgY29uc3QgU0VMRUNUX1NUQVRFID0gJ1VTRVIvU0VMRUNUX1NUQVRFJztcbmV4cG9ydCBjb25zdCBTRUxFQ1RfQ0lUWSA9ICdVU0VSL1NFTEVDVF9DSVRZJztcbmV4cG9ydCBjb25zdCBTRUxFQ1RfTElTVF9TT1JUID0gJ1VTRVIvU0VMRUNUX0xJU1RfU09SVCc7XG5leHBvcnQgY29uc3QgU0VMRUNUX0xJU1RfRklMVEVSID0gJ1VTRVIvU0VMRUNUX0xJU1RfRklMVEVSJztcbmV4cG9ydCBjb25zdCBTRUxFQ1RfQ0FURUdPUlkgPSAnVVNFUi9TRUxFQ1RfQ0FURUdPUlknO1xuXG4vLyBhZG1pblxuZXhwb3J0IGNvbnN0IEdFVF9BTExfU1VQUE9SVF9UQVNLUyA9ICdHRVRfQUxMX1NVUFBPUlRfVEFTS1MnO1xuZXhwb3J0IGNvbnN0IEVESVRfU1VQUE9SVF9UQVNLUyA9ICdFRElUX1NVUFBPUlRfVEFTS1MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9TVVBQT1JUX1RBU0sgPSAnREVMRVRFX1NVUFBPUlRfVEFTSyc7XG4vLyBleHBvcnQgY29uc3QgQ1JFQVRFX0NBVEVHT1JZID0gJ0NSRUFURV9DQVRFR09SWSc7XG4vLyBleHBvcnQgY29uc3QgRURJVF9DQVRFR09SWSA9ICdFRElUX0NBVEVHT1JZJztcbi8vIGV4cG9ydCBjb25zdCBERUxFVEVfQ0FURUdPUlkgPSAnREVMRVRFX0NBVEVHT1JZJztcbiIsImltcG9ydCB7IEdFVF9BTExfU1VQUE9SVF9UQVNLUywgREVMRVRFX1NVUFBPUlRfVEFTSywgQ1JFQVRFX0NBVEVHT1JZIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHRhc2tzOiBbXSxcblxufVxuXG5leHBvcnQgY29uc3QgYWRtaW5SZWR1Y2VyID0gKHN0YXRlOiBhbnkgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdFVF9BTExfU1VQUE9SVF9UQVNLUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0YXNrczogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBERUxFVEVfU1VQUE9SVF9UQVNLOlxuICAgICAgY29uc3QgdGFza3MgPSBzdGF0ZS50YXNrcy5maWx0ZXIoKHRhc2s6IGFueSkgPT4gdGFzay5pZCAhPSBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdGFza3MgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgU0hPV19MT0FERVIsXG4gIEhJREVfTE9BREVSLFxuICBTSE9XX0FMRVJULFxuICBISURFX0FMRVJULFxuICBHRVRfQUxMX1BPU1RTLFxuICBHRVRfTE9DQUlUT05TX0lORk8sXG4gIEdFVF9DSVRJRVMsXG4gIENSRUFURV9TVVBQT1JUX1RBU0ssXG4gIEdFVF9BTExfVVNFUl9UQVNLUyxcbiAgR0VUX0FQUF9JTkZPLFxuICBHRVRfTkVXX1BPU1RTLFxuICBHRVRfUEFHRVNfTlVNQkVSLFxuICBHRVRfUE9TVF9DT01NRU5UUyxcbiAgQ1JFQVRFX1BPU1RfQ09NTUVOVCxcbiAgRklMVEVSX1BPU1RTLFxuICBHRVRfRkFWT1JJVEVTLFxuICBHRVRfQ09NUExBSU5TLFxuICBTT1JUX1BPU1RTLFxuICBTSE9XX1NVQ0NFU1Ncbn0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwb3N0Q29tbWVudHM6IFtdLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgYWxlcnQ6IG51bGwsXG4gIGNhdGVnb3JpZXM6IFtdLFxuICBwb3N0czogW10sXG4gIG5ld1Bvc3RzOiBbXSxcbiAgc3RhdGVzOiBbXSxcbiAgY2l0aWVzOiBbXSxcbiAgc3VwcG9ydFRhc2tzOiBbXSxcbiAgYWZmaWxpYXRpb246IFtdLFxuICBhdmFpbGFiaWxpdHk6IFtdLFxuICBhdmFpbGFibGVfdG86IFtdLFxuICBldGhuaWNpdHk6IFtdLFxuICBleWVzOiBbXSxcbiAgaGFpcjogW10sXG4gIHBhZ2VzTnVtYmVyOiAwLFxuICBmYXZvcml0ZXM6IFtdLFxuICBjb21wbGFpbnM6IFtdLFxuICBzdWNjZXNzOiBudWxsXG59O1xuXG5leHBvcnQgY29uc3QgYXBwUmVkdWNlciA9IChzdGF0ZTogYW55ID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTSE9XX0xPQURFUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cblxuICAgIGNhc2UgU0hPV19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHN1Y2Nlc3M6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgSElERV9MT0FERVI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxuXG4gICAgY2FzZSBTSE9XX0FMRVJUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFsZXJ0OiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIEhJREVfQUxFUlQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYWxlcnQ6IG51bGwgfVxuXG4gICAgY2FzZSBHRVRfQUxMX1BPU1RTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIFNPUlRfUE9TVFM6XG4gICAgICBsZXQgbmV3UG9zdHMgPSBzdGF0ZS5wb3N0cztcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gJ2RhdGUvLScpIHtcbiAgICAgICAgbmV3UG9zdHMuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGEuY3JlYXRlZF9hdC5zcGxpdCgnVCcpWzBdLnNwbGl0KCctJykuam9pbignLycpKTtcbiAgICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGIuY3JlYXRlZF9hdC5zcGxpdCgnVCcpWzBdLnNwbGl0KCctJykuam9pbignLycpKTtcbiAgICAgICAgICBpZiAoZGF0ZUEuZ2V0VGltZSgpIDwgZGF0ZUIuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRlQS5nZXRUaW1lKCkgPiBkYXRlQi5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBiIC0gYTtcbiAgICAgICAgICB9IGVsc2UgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogbmV3UG9zdHMgfVxuXG4gICAgY2FzZSBGSUxURVJfUE9TVFM6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgR0VUX1BBR0VTX05VTUJFUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwYWdlc051bWJlcjogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBHRVRfTkVXX1BPU1RTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG5ld1Bvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIEdFVF9MT0NBSVRPTlNfSU5GTzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdGF0ZXM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgR0VUX0NJVElFUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaXRpZXM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgR0VUX0NPTVBMQUlOUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjb21wbGFpbnM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgR0VUX0ZBVk9SSVRFUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmYXZvcml0ZXM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgQ1JFQVRFX1NVUFBPUlRfVEFTSzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdXBwb3J0VGFza3M6IFsuLi5zdGF0ZS5zdXBwb3J0VGFza3MsIGFjdGlvbi5wYXlsb2FkXSB9XG5cbiAgICBjYXNlIEdFVF9BTExfVVNFUl9UQVNLUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdXBwb3J0VGFza3M6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGNhc2UgR0VUX1BPU1RfQ09NTUVOVFM6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdENvbW1lbnRzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIENSRUFURV9QT1NUX0NPTU1FTlQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdENvbW1lbnRzOiBbLi4uc3RhdGUucG9zdENvbW1lbnRzLCBhY3Rpb24ucGF5bG9hZF0gfVxuXG4gICAgY2FzZSBHRVRfQVBQX0lORk86XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2F0ZWdvcmllczogYWN0aW9uLnBheWxvYWQuY2F0ZWdvcmllcyxcbiAgICAgICAgYWZmaWxpYXRpb246IGFjdGlvbi5wYXlsb2FkLmFmZmlsaWF0aW9uLFxuICAgICAgICBhdmFpbGFiaWxpdHk6IGFjdGlvbi5wYXlsb2FkLmF2YWlsYWJpbGl0eSxcbiAgICAgICAgYXZhaWxhYmxlX3RvOiBhY3Rpb24ucGF5bG9hZC5hdmFpbGFibGVfdG8sXG4gICAgICAgIGV0aG5pY2l0eTogYWN0aW9uLnBheWxvYWQuZXRobmljaXR5LFxuICAgICAgICBleWVzOiBhY3Rpb24ucGF5bG9hZC5leWVzLFxuICAgICAgICBoYWlyOiBhY3Rpb24ucGF5bG9hZC5oYWlyXG4gICAgICB9XG5cbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgeyBBRERfUE9TVCwgUkVNT1ZFX1BPU1QsIFVQREFURV9QT1NUIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwcm92aWRlclBvc3RzOiBbXVxufTtcblxuZXhwb3J0IGNvbnN0IHByb3ZpZGVyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX1BPU1Q6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvdmlkZXJQb3N0czogc3RhdGUucHJvdmlkZXJQb3N0cy5jb25jYXQoYWN0aW9uLnBheWxvYWQpIH1cblxuICAgIGNhc2UgUkVNT1ZFX1BPU1Q6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvdmlkZXJQb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBVUERBVEVfUE9TVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm92aWRlclBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgdGVzdFJlZHVjZXIgfSBmcm9tICcuL3Rlc3RSZWR1Y2VyJztcbmltcG9ydCB7IGFwcFJlZHVjZXIgfSBmcm9tICcuL2FwcFJlZHVjZXInO1xuaW1wb3J0IHsgcHJvdmlkZXJSZWR1Y2VyIH0gZnJvbSAnLi9wcm92aWRlclJlZHVjZXInO1xuaW1wb3J0IHsgdXNlclJlZHVjZXIgfSBmcm9tICcuL3VzZXJSZWR1Y2VyJztcbmltcG9ydCB7IGFkbWluUmVkdWNlciB9IGZyb20gJy4vYWRtaW5SZWR1Y2VyJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHRlc3RQb3N0czogdGVzdFJlZHVjZXIsXG4gICAgYXBwOiBhcHBSZWR1Y2VyLFxuICAgIHByb3ZpZGVyOiBwcm92aWRlclJlZHVjZXIsXG4gICAgdXNlcjogdXNlclJlZHVjZXIsXG4gICAgYWRtaW46IGFkbWluUmVkdWNlclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHsgVEVTVF9DUkVBVEVfUE9TVCwgVEVTVF9GRVRDSF9QT1NUIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwb3N0czogW10sXG4gIGZldGNoZWRQb3N0czogW11cbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVEVTVF9DUkVBVEVfUE9TVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogc3RhdGUucG9zdHMuY29uY2F0KGFjdGlvbi5wYXlsb2FkKSB9XG5cbiAgICBjYXNlIFRFU1RfRkVUQ0hfUE9TVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmZXRjaGVkUG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgeyBTRUxFQ1RfU1RBVEUsIFNFTEVDVF9DSVRZLCBTRUxFQ1RfTElTVF9TT1JULCBTRUxFQ1RfTElTVF9GSUxURVIsIFNFTEVDVF9DQVRFR09SWSB9IGZyb20gXCIuLi9hY3Rpb25zL3R5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgcG9zdHM6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlIFNFTEVDVF9TVEFURTpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBTRUxFQ1RfQ0lUWTpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBTRUxFQ1RfTElTVF9TT1JUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RzOiBhY3Rpb24ucGF5bG9hZCB9XG5cbiAgICBjYXNlIFNFTEVDVF9MSVNUX0ZJTFRFUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogYWN0aW9uLnBheWxvYWQgfVxuXG4gICAgY2FzZSBTRUxFQ1RfQ0FURUdPUlk6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5wYXlsb2FkIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgeyBhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgc2FnYVdhdGNoZXIgfSBmcm9tICcuL3Rlc3RTYWdhcyc7XG4vLyBpbXBvcnQgeyB1c2VyU2FnYVdhdGNoZXIgfSBmcm9tICcuL3VzZXJTYWdhcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgc2FnYVdhdGNoZXIoKSxcbiAgICAvLyB1c2VyU2FnYVdhdGNoZXIoKVxuICBdKTtcbn1cbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgdGFrZUV2ZXJ5LCBwdXQsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgVEVTVF9SRVFVRVNUX1BPU1RTLCBURVNUX0ZFVENIX1BPU1QgfSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcbmltcG9ydCB7IHNob3dMb2FkZXIsIGhpZGVMb2FkZXIsIHNob3dBbGVydCB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9ucyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uKiBzYWdhV2F0Y2hlcigpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KFRFU1RfUkVRVUVTVF9QT1NUUywgc2FnYVdvcmtlcilcbn1cblxuZnVuY3Rpb24qIHNhZ2FXb3JrZXIoKSB7XG4gIHRyeSB7XG4gICAgeWllbGQgcHV0KHNob3dMb2FkZXIoKSk7XG4gICAgY29uc3QgcGF5bG9hZCA9IHlpZWxkIGNhbGwoZmV0Y2hQb3N0cyk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogVEVTVF9GRVRDSF9QT1NULCBwYXlsb2FkIH0pO1xuICAgIHlpZWxkIHB1dChoaWRlTG9hZGVyKCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KHNob3dBbGVydCgnU29tZXRoaW5nIGdvaW5nIHdyb25nJykpO1xuICAgIHlpZWxkIHB1dChoaWRlTG9hZGVyKCkpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoUG9zdHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpO1xuICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufSIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9yb290UmVkdWNlcic7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuLy8gaW1wb3J0IHsgZm9yYmlkZGVuV29yZHNNaWRkbHd3YXJlIH0gZnJvbSAnLi9taWRkbGV3YXJlJztcbmltcG9ydCBjcmVhdGVTYWdhc01pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgeyByb290U2FnYSB9IGZyb20gJy4vc2FnYXMvc2FnYXMnO1xuXG5jb25zdCBwcmVsb2FkZWRTdGF0ZSA9IHt9O1xuY29uc3Qgc2FnYSA9IGNyZWF0ZVNhZ2FzTWlkZGxld2FyZSgpO1xuXG5jb25zdCBzdG9yZTogYW55ID0gY3JlYXRlU3RvcmUoXG4gIHJvb3RSZWR1Y2VyLFxuICBwcmVsb2FkZWRTdGF0ZSxcbiAgYXBwbHlNaWRkbGV3YXJlKFxuICAgIHRodW5rLFxuICAgIC8vIGZvcmJpZGRlbldvcmRzTWlkZGx3d2FyZSxcbiAgICBzYWdhXG4gIClcbik7XG5cbnNhZ2EucnVuKHJvb3RTYWdhKTtcblxuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ3VwZGF0ZWQgc3RhdGU6ICcsIHN0b3JlLmdldFN0YXRlKCkpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==