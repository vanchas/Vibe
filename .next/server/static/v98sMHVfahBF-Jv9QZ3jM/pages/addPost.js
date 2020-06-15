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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k6yo");


/***/ }),

/***/ "7Cum":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"add_post_wrap": "add-post_add_post_wrap__3GvVY",
	"add_post_block": "add-post_add_post_block__oAasB",
	"add_post_block_title": "add-post_add_post_block_title__1rG6n",
	"add_post_block_info": "add-post_add_post_block_info__jZ39x",
	"add_post_block_info_text": "add-post_add_post_block_info_text__3u1sB",
	"save_btn": "add-post_save_btn__1RC8a"
};


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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "k6yo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ AddPost; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/add-post/add-post.module.scss
var add_post_module = __webpack_require__("7Cum");
var add_post_module_default = /*#__PURE__*/__webpack_require__.n(add_post_module);

// EXTERNAL MODULE: ./src/components/test/Alert.jsx
var Alert = __webpack_require__("y+yx");

// EXTERNAL MODULE: ./src/redux/actions/actions.ts
var actions = __webpack_require__("7zJJ");

// EXTERNAL MODULE: ./src/redux/actions/types.ts
var types = __webpack_require__("iO2Z");

// CONCATENATED MODULE: ./src/redux/actions/providerActions.ts

// import { useRouter } from "next/router"
function getAllProviderPost() {
  return {
    type: types["c" /* GET_ALL_POSTS */]
  };
}
;
async function addProviderPost(post) {
  // await fetch('https://intim-vibe-api.padilo.pro/api/posts/create', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*'
  //   },
  //   body: JSON.stringify({ post })
  // })
  //   .then(res => console.log(res))
  //   .catch(err => console.log('Error:', err))
  return {
    type: types["a" /* ADD_POST */]
  };
}
;
function updateProviderPost(post) {
  return {
    type: types["r" /* UPDATE_POST */],
    payload: post
  };
}
;
function removeProviderPost(id) {
  return {
    type: types["g" /* REMOVE_POST */],
    payload: id
  };
}
; // export function showAlert(text: string): any {
//     return (dispatch: Function) => {
//         dispatch({
//             type: SHOW_ALERT,
//             payload: text
//         })
//         setTimeout(() => {
//             dispatch(hideAlert())
//         }, 3000)
//     }
// }
// CONCATENATED MODULE: ./src/components/add-post/AddPostFrom.jsx
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import Router from 'next/router'

class AddPostFrom_AddPostFrom extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "submitHandler", e => {
      e.preventDefault(); // Router.push('/api/provider/post');
      // (this.state.gender.length && +this.state.age >= 18 && this.state.ethnicity.length && this.state.hair_color.length && this.state.eye_color.length && this.state.height.toString().length && this.state.affiliation.length && this.state.number.toString().length > 9 && this.state.number.toString().length < 12 && this.state.email.length && this.state.model_name.length && this.state.video_link.length && this.state.about.length && this.state.available_to.length && this.state.availability.length && this.state.summary.length && this.state.second_name.length && this.state.account_name.length && this.state.category.length) ?

      addProviderPost({
        gender: 'female',
        age: 25,
        ethnicity: 'some',
        hair_color: 'some',
        eye_color: 'some',
        height: 'some',
        affiliation: 'some',
        number: '+0123456789',
        email: 'some@mail.com',
        model_name: 'some',
        video_link: 'some',
        about: 'some',
        available_to: ['some', 'some'],
        availability: ['some', 'some'],
        summary: 'some',
        second_name: 'some',
        account_name: 'some',
        category: 'some',
        status: 'other'
      }); // : this.props.showAlert('ALERT');
    });

    this.state = {
      model_name: "",
      second_name: "",
      account_name: "",
      gender: "",
      age: "",
      email: "",
      number: "",
      ethnicity: "",
      hair_color: "",
      eye_color: "",
      heigth: "",
      video_link: "",
      affiliation: "",
      available_to: "",
      availability: "",
      summary: "",
      about: "",
      photo: "",
      status: "other",
      category: 'escort'
    };
  }

  render() {
    return __jsx("div", {
      className: `${add_post_module_default.a.add_post_wrap}`
    }, __jsx("div", {
      className: add_post_module_default.a.add_post_block
    }, __jsx("div", {
      className: add_post_module_default.a.add_post_block_title
    }, "ADDING POST"), __jsx("div", {
      className: add_post_module_default.a.add_post_block_info
    }, this.props.alert && __jsx(Alert["a" /* default */], {
      text: this.props.alert
    }), __jsx("form", {
      onSubmit: this.submitHandler,
      className: add_post_module_default.a.add_post_block_info_text
    }, __jsx("label", {
      className: "form-group"
    }, "First Name:", __jsx("input", {
      onChange: e => this.setState({
        model_name: e.target.value
      }),
      type: "text",
      className: "form-control bg-light"
    })), __jsx("label", {
      className: "form-group"
    }, "Second Name:", __jsx("input", {
      onChange: e => this.setState({
        second_name: e.target.value
      }),
      type: "text",
      className: "form-control bg-light "
    })), __jsx("label", {
      className: "form-group"
    }, "Account Name:", __jsx("input", {
      onChange: e => this.setState({
        account_name: e.target.value
      }),
      type: "text",
      className: "form-control bg-light "
    })), __jsx("div", {
      className: "d-lg-flex d-md-block"
    }, __jsx("legend", null, "Gender:"), __jsx("label", {
      className: "form-check"
    }, "Male", __jsx("input", {
      onChange: e => this.setState({
        gender: e.target.value
      }),
      type: "radio",
      value: "male",
      name: "gender",
      className: "form-check-input bg-light"
    })), __jsx("label", {
      className: "form-check"
    }, "Female", __jsx("input", {
      onChange: e => this.setState({
        gender: e.target.value
      }),
      type: "radio",
      value: "female",
      className: "form-check-input bg-light",
      name: "gender"
    }))), __jsx("label", {
      className: "form-group"
    }, "Age:", __jsx("input", {
      onChange: e => this.setState({
        age: e.target.value
      }),
      type: "number",
      className: "form-control bg-light "
    })), __jsx("label", {
      className: "form-group"
    }, "Email:", __jsx("input", {
      onChange: e => this.setState({
        email: e.target.value
      }),
      type: "email",
      className: "form-control bg-light "
    })), __jsx("label", {
      className: "form-group"
    }, "Phone:", __jsx("input", {
      onChange: e => this.setState({
        number: e.target.value
      }),
      type: "text",
      className: "form-control bg-light "
    })), __jsx("label", {
      className: "form-group"
    }, "Ethnicity:", __jsx("select", {
      className: "form-control dropdown",
      onChange: e => this.setState({
        ethnicity: e.target.value
      })
    }, __jsx("option", {
      hidden: true,
      value: "default"
    }, "-- select one --"), __jsx("optgroup", {
      label: "White"
    }, __jsx("option", {
      value: "White English"
    }, "English"), __jsx("option", {
      value: "White Welsh"
    }, "Welsh"), __jsx("option", {
      value: "White Scottish"
    }, "Scottish"), __jsx("option", {
      value: "White Northern Irish"
    }, "Northern Irish"), __jsx("option", {
      value: "White Irish"
    }, "Irish"), __jsx("option", {
      value: "White Gypsy or Irish Traveller"
    }, "Gypsy or Irish Traveller"), __jsx("option", {
      value: "White Other"
    }, "Any other White background")), __jsx("optgroup", {
      label: "Mixed or Multiple ethnic groups"
    }, __jsx("option", {
      value: "Mixed White and Black Caribbean"
    }, "White and Black Caribbean"), __jsx("option", {
      value: "Mixed White and Black African"
    }, "White and Black African"), __jsx("option", {
      value: "Mixed White Other"
    }, "Any other Mixed or Multiple background")), __jsx("optgroup", {
      label: "Asian"
    }, __jsx("option", {
      value: "Asian Indian"
    }, "Indian"), __jsx("option", {
      value: "Asian Pakistani"
    }, "Pakistani"), __jsx("option", {
      value: "Asian Bangladeshi"
    }, "Bangladeshi"), __jsx("option", {
      value: "Asian Chinese"
    }, "Chinese"), __jsx("option", {
      value: "Asian Other"
    }, "Any other Asian background")), __jsx("optgroup", {
      label: "Black"
    }, __jsx("option", {
      value: "Black African"
    }, "African"), __jsx("option", {
      value: "Black African American"
    }, "African American"), __jsx("option", {
      value: "Black Caribbean"
    }, "Caribbean"), __jsx("option", {
      value: "Black Other"
    }, "Any other Black background")), __jsx("optgroup", {
      label: "Other ethnic groups"
    }, __jsx("option", {
      value: "Arab"
    }, "Arab"), __jsx("option", {
      value: "Hispanic"
    }, "Hispanic"), __jsx("option", {
      value: "Latino"
    }, "Latino"), __jsx("option", {
      value: "Native American"
    }, "Native American"), __jsx("option", {
      value: "Pacific Islander"
    }, "Pacific Islander"), __jsx("option", {
      value: "Other"
    }, "Any other ethnic group")))), __jsx("label", {
      className: "form-group"
    }, "Hair Color:", __jsx("select", {
      className: "form-control dropdown",
      onChange: e => this.setState({
        hair_color: e.target.value
      })
    }, __jsx("option", {
      value: "brown"
    }, "Brown"), __jsx("option", {
      value: "blonde"
    }, "Blonde"), __jsx("option", {
      value: "black"
    }, "Black"), __jsx("option", {
      value: "auburn"
    }, "Auburn"), __jsx("option", {
      value: "color"
    }, "Color"))), __jsx("label", {
      className: "form-group"
    }, "Eye Color:", __jsx("select", {
      className: "form-control dropdown",
      onChange: e => this.setState({
        eye_color: e.target.value
      })
    }, __jsx("option", {
      value: "brown"
    }, "Brown"), __jsx("option", {
      value: "grey"
    }, "Grey"), __jsx("option", {
      value: "green"
    }, "Green"), __jsx("option", {
      value: "blue"
    }, "Blue"))), __jsx("label", {
      className: "form-group"
    }, "Height:", __jsx("input", {
      onChange: e => this.setState({
        height: e.target.value
      }),
      type: "nubmer",
      className: "form-control bg-light "
    })), __jsx("label", {
      className: "form-group"
    }, "Affiliation:", __jsx("select", {
      className: "form-control dropdown",
      onChange: e => this.setState({
        affiliation: e.target.value
      })
    }, __jsx("option", {
      value: "independent"
    }, "Independent"), __jsx("option", {
      value: "agencies"
    }, "Agencies"))), __jsx("div", {
      className: "d-lg-flex d-md-block"
    }, __jsx("legend", null, " Available To:"), __jsx("label", {
      className: "form-check"
    }, "Men", __jsx("input", {
      type: "checkbox",
      onChange: e => this.setState({
        available_to: e.target.value
      }),
      className: "form-check-input"
    })), __jsx("label", {
      className: "form-check"
    }, "Wemen", __jsx("input", {
      type: "checkbox",
      onChange: e => this.setState({
        available_to: e.target.value
      }),
      className: "form-check-input"
    })), __jsx("label", {
      className: "form-check"
    }, "Couples", __jsx("input", {
      type: "checkbox",
      onChange: e => this.setState({
        available_to: e.target.value
      }),
      className: "form-check-input"
    }))), __jsx("label", {
      className: "form-group"
    }, "Availability:", __jsx("select", {
      className: "form-control dropdown",
      onChange: e => this.setState({
        availability: e.target.value
      })
    }, __jsx("option", {
      value: "incall"
    }, "Incall"), __jsx("option", {
      value: "outcall"
    }, "Outcall"))), __jsx("label", {
      className: "form-group"
    }, "Short Summary:", __jsx("textarea", {
      onChange: e => this.setState({
        summary: e.target.value
      }),
      rows: "5",
      className: "form-control bg-light "
    })), __jsx("label", {
      className: "form-group"
    }, "About:", __jsx("textarea", {
      onChange: e => this.setState({
        about: e.target.value
      }),
      rows: "10",
      className: "form-control bg-light "
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Upload photo", __jsx("input", {
      type: "file",
      onChange: e => this.setState({
        photo: e.target.value
      }),
      className: "form-control-file"
    }))), __jsx("div", null, __jsx("button", {
      type: "submit",
      className: ` ${add_post_module_default.a.save_btn}`
    }, "SAVE"))))));
  }

}

_defineProperty(AddPostFrom_AddPostFrom, "getInitialProps", async ({
  ctx
}) => {
  return {
    showAlert: actions["e" /* showAlert */]
  };
});
// CONCATENATED MODULE: ./src/pages/addPost.jsx
var addPost_jsx = external_react_default.a.createElement;


function AddPost() {
  return addPost_jsx("div", null, addPost_jsx(AddPostFrom_AddPostFrom, null));
}

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