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

/***/ "./src/components/add-post/AddPostFrom.jsx":
/*!*************************************************!*\
  !*** ./src/components/add-post/AddPostFrom.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddPostFrom; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _add_post_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-post.module.scss */ "./src/components/add-post/add-post.module.scss");
/* harmony import */ var _add_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_post_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _test_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test/Alert */ "./src/components/test/Alert.jsx");
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/actions */ "./src/redux/actions/actions.ts");
/* harmony import */ var _redux_actions_providerActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/providerActions */ "./src/redux/actions/providerActions.ts");
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\add-post\\AddPostFrom.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import Router from 'next/router'

class AddPostFrom extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "submitHandler", e => {
      e.preventDefault(); // Router.push('/api/provider/post');
      // (this.state.gender.length && +this.state.age >= 18 && this.state.ethnicity.length && this.state.hair_color.length && this.state.eye_color.length && this.state.height.toString().length && this.state.affiliation.length && this.state.number.toString().length > 9 && this.state.number.toString().length < 12 && this.state.email.length && this.state.model_name.length && this.state.video_link.length && this.state.about.length && this.state.available_to.length && this.state.availability.length && this.state.summary.length && this.state.second_name.length && this.state.account_name.length && this.state.category.length) ?

      Object(_redux_actions_providerActions__WEBPACK_IMPORTED_MODULE_4__["addProviderPost"])({
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
      className: `${_add_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.add_post_wrap}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: _add_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.add_post_block,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: _add_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.add_post_block_title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 6
      }
    }, "ADDING POST"), __jsx("div", {
      className: _add_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.add_post_block_info,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 6
      }
    }, this.props.alert && __jsx(_test_Alert__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: this.props.alert,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 28
      }
    }), __jsx("form", {
      onSubmit: this.submitHandler,
      className: _add_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.add_post_block_info_text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }
    }, __jsx("label", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 8
      }
    }, "First Name:", __jsx("input", {
      onChange: e => this.setState({
        model_name: e.target.value
      }),
      type: "text",
      className: "form-control bg-light",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }
    })), __jsx("label", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 8
      }
    }, "Second Name:", __jsx("input", {
      onChange: e => this.setState({
        second_name: e.target.value
      }),
      type: "text",
      className: "form-control bg-light ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    })), __jsx("label", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 8
      }
    }, "Account Name:", __jsx("input", {
      onChange: e => this.setState({
        account_name: e.target.value
      }),
      type: "text",
      className: "form-control bg-light ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }
    })), __jsx("div", {
      className: "d-lg-flex d-md-block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 8
      }
    }, __jsx("legend", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    }, "Gender:"), __jsx("label", {
      className: "form-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }
    }, "Male", __jsx("input", {
      onChange: e => this.setState({
        gender: e.target.value
      }),
      type: "radio",
      value: "male",
      name: "gender",
      className: "form-check-input bg-light",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 10
      }
    })), __jsx("label", {
      className: "form-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }
    }, "Female", __jsx("input", {
      onChange: e => this.setState({
        gender: e.target.value
      }),
      type: "radio",
      value: "female",
      className: "form-check-input bg-light",
      name: "gender",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 10
      }
    }))), __jsx("label", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 8
      }
    }, "Age:", __jsx("input", {
      onChange: e => this.setState({
        age: e.target.value
      }),
      type: "number",
      className: "form-control bg-light ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }
    })), __jsx("label", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 8
      }
    }, "Email:", __jsx("input", {
      onChange: e => this.setState({
        email: e.target.value
      }),
      type: "email",
      className: "form-control bg-light ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }
    })), __jsx("label", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 8
      }
    }, "Phone:", __jsx("input", {
      onChange: e => this.setState({
        number: e.target.value
      }),
      type: "text",
      className: "form-control bg-light ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }
    })), __jsx("label", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 8
      }
    }, "Ethnicity:", __jsx("select", {
      className: "form-control dropdown",
      onChange: e => this.setState({
        ethnicity: e.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }
    }, __jsx("option", {
      hidden: true,
      value: "default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 10
      }
    }, "-- select one --"), __jsx("optgroup", {
      label: "White",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 10
      }
    }, __jsx("option", {
      value: "White English",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 11
      }
    }, "English"), __jsx("option", {
      value: "White Welsh",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 11
      }
    }, "Welsh"), __jsx("option", {
      value: "White Scottish",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 11
      }
    }, "Scottish"), __jsx("option", {
      value: "White Northern Irish",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }
    }, "Northern Irish"), __jsx("option", {
      value: "White Irish",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }
    }, "Irish"), __jsx("option", {
      value: "White Gypsy or Irish Traveller",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 11
      }
    }, "Gypsy or Irish Traveller"), __jsx("option", {
      value: "White Other",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 11
      }
    }, "Any other White background")), __jsx("optgroup", {
      label: "Mixed or Multiple ethnic groups",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 10
      }
    }, __jsx("option", {
      value: "Mixed White and Black Caribbean",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 11
      }
    }, "White and Black Caribbean"), __jsx("option", {
      value: "Mixed White and Black African",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 11
      }
    }, "White and Black African"), __jsx("option", {
      value: "Mixed White Other",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 11
      }
    }, "Any other Mixed or Multiple background")), __jsx("optgroup", {
      label: "Asian",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 10
      }
    }, __jsx("option", {
      value: "Asian Indian",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 11
      }
    }, "Indian"), __jsx("option", {
      value: "Asian Pakistani",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 11
      }
    }, "Pakistani"), __jsx("option", {
      value: "Asian Bangladeshi",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 11
      }
    }, "Bangladeshi"), __jsx("option", {
      value: "Asian Chinese",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 11
      }
    }, "Chinese"), __jsx("option", {
      value: "Asian Other",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 11
      }
    }, "Any other Asian background")), __jsx("optgroup", {
      label: "Black",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 10
      }
    }, __jsx("option", {
      value: "Black African",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 11
      }
    }, "African"), __jsx("option", {
      value: "Black African American",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 11
      }
    }, "African American"), __jsx("option", {
      value: "Black Caribbean",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 11
      }
    }, "Caribbean"), __jsx("option", {
      value: "Black Other",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 11
      }
    }, "Any other Black background")), __jsx("optgroup", {
      label: "Other ethnic groups",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 10
      }
    }, __jsx("option", {
      value: "Arab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 11
      }
    }, "Arab"), __jsx("option", {
      value: "Hispanic",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 11
      }
    }, "Hispanic"), __jsx("option", {
      value: "Latino",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 11
      }
    }, "Latino"), __jsx("option", {
      value: "Native American",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 11
      }
    }, "Native American"), __jsx("option", {
      value: "Pacific Islander",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 11
      }
    }, "Pacific Islander"), __jsx("option", {
      value: "Other",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 11
      }
    }, "Any other ethnic group")))), __jsx("label", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 8
      }
    }, "Hair Color:", __jsx("select", {
      className: "form-control dropdown",
      onChange: e => this.setState({
        hair_color: e.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }
    }, __jsx("option", {
      value: "brown",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 10
      }
    }, "Brown"), __jsx("option", {
      value: "blonde",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 10
      }
    }, "Blonde"), __jsx("option", {
      value: "black",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 10
      }
    }, "Black"), __jsx("option", {
      value: "auburn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 10
      }
    }, "Auburn"), __jsx("option", {
      value: "color",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 10
      }
    }, "Color"))), __jsx("label", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 8
      }
    }, "Eye Color:", __jsx("select", {
      className: "form-control dropdown",
      onChange: e => this.setState({
        eye_color: e.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }
    }, __jsx("option", {
      value: "brown",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 10
      }
    }, "Brown"), __jsx("option", {
      value: "grey",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 10
      }
    }, "Grey"), __jsx("option", {
      value: "green",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 10
      }
    }, "Green"), __jsx("option", {
      value: "blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 10
      }
    }, "Blue"))), __jsx("label", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 8
      }
    }, "Height:", __jsx("input", {
      onChange: e => this.setState({
        height: e.target.value
      }),
      type: "nubmer",
      className: "form-control bg-light ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }
    })), __jsx("label", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 8
      }
    }, "Affiliation:", __jsx("select", {
      className: "form-control dropdown",
      onChange: e => this.setState({
        affiliation: e.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 9
      }
    }, __jsx("option", {
      value: "independent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 10
      }
    }, "Independent"), __jsx("option", {
      value: "agencies",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 10
      }
    }, "Agencies"))), __jsx("div", {
      className: "d-lg-flex d-md-block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 8
      }
    }, __jsx("legend", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 9
      }
    }, " Available To:"), __jsx("label", {
      className: "form-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 9
      }
    }, "Men", __jsx("input", {
      type: "checkbox",
      onChange: e => this.setState({
        available_to: e.target.value
      }),
      className: "form-check-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 10
      }
    })), __jsx("label", {
      className: "form-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 9
      }
    }, "Wemen", __jsx("input", {
      type: "checkbox",
      onChange: e => this.setState({
        available_to: e.target.value
      }),
      className: "form-check-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 10
      }
    })), __jsx("label", {
      className: "form-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }
    }, "Couples", __jsx("input", {
      type: "checkbox",
      onChange: e => this.setState({
        available_to: e.target.value
      }),
      className: "form-check-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 10
      }
    }))), __jsx("label", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 8
      }
    }, "Availability:", __jsx("select", {
      className: "form-control dropdown",
      onChange: e => this.setState({
        availability: e.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 9
      }
    }, __jsx("option", {
      value: "incall",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 10
      }
    }, "Incall"), __jsx("option", {
      value: "outcall",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 10
      }
    }, "Outcall"))), __jsx("label", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 8
      }
    }, "Short Summary:", __jsx("textarea", {
      onChange: e => this.setState({
        summary: e.target.value
      }),
      rows: "5",
      className: "form-control bg-light ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 9
      }
    })), __jsx("label", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 8
      }
    }, "About:", __jsx("textarea", {
      onChange: e => this.setState({
        about: e.target.value
      }),
      rows: "10",
      className: "form-control bg-light ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 9
      }
    })), __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 8
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 9
      }
    }, "Upload photo", __jsx("input", {
      type: "file",
      onChange: e => this.setState({
        photo: e.target.value
      }),
      className: "form-control-file",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 10
      }
    }))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 8
      }
    }, __jsx("button", {
      type: "submit",
      className: ` ${_add_post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.save_btn}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 9
      }
    }, "SAVE"))))));
  }

}

_defineProperty(AddPostFrom, "getInitialProps", async ({
  ctx
}) => {
  return {
    showAlert: _redux_actions_actions__WEBPACK_IMPORTED_MODULE_3__["showAlert"]
  };
});

/***/ }),

/***/ "./src/components/add-post/add-post.module.scss":
/*!******************************************************!*\
  !*** ./src/components/add-post/add-post.module.scss ***!
  \******************************************************/
/*! no static exports found */
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

/***/ "./src/components/test/Alert.jsx":
/*!***************************************!*\
  !*** ./src/components/test/Alert.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Alert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\components\\test\\Alert.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Alert({
  text
}) {
  return __jsx("div", {
    className: "alert alert-warning",
    role: "alert",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, text);
}

/***/ }),

/***/ "./src/pages/addPost.jsx":
/*!*******************************!*\
  !*** ./src/pages/addPost.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddPost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_add_post_AddPostFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/add-post/AddPostFrom */ "./src/components/add-post/AddPostFrom.jsx");
var _jsxFileName = "C:\\Users\\user\\projects\\vibe\\src\\pages\\addPost.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function AddPost() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_components_add_post_AddPostFrom__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/redux/actions/actions.ts":
/*!**************************************!*\
  !*** ./src/redux/actions/actions.ts ***!
  \**************************************/
/*! exports provided: createPost, showLoader, hideLoader, showAlert, hideAlert, fetchPosts, getCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoader", function() { return showLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoader", function() { return hideLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAlert", function() { return showAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAlert", function() { return hideAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPosts", function() { return fetchPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/redux/actions/types.ts");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);

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
const getCategories = () => async dispatch => {
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('https://intim-vibe-api.padilo.pro/api/categories');
  const promise = response.json();
  promise.then(res => {
    // console.log('categories from action:', res.data);
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORIES"],
      payload: res.data
    };
  });
};

/***/ }),

/***/ "./src/redux/actions/providerActions.ts":
/*!**********************************************!*\
  !*** ./src/redux/actions/providerActions.ts ***!
  \**********************************************/
/*! exports provided: getAllProviderPost, addProviderPost, updateProviderPost, removeProviderPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProviderPost", function() { return getAllProviderPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProviderPost", function() { return addProviderPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProviderPost", function() { return updateProviderPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProviderPost", function() { return removeProviderPost; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/redux/actions/types.ts");

// import { useRouter } from "next/router"
function getAllProviderPost() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_POSTS"]
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
    type: _types__WEBPACK_IMPORTED_MODULE_0__["ADD_POST"]
  };
}
;
function updateProviderPost(post) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_POST"],
    payload: post
  };
}
;
function removeProviderPost(id) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_POST"],
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

/***/ }),

/***/ "./src/redux/actions/types.ts":
/*!************************************!*\
  !*** ./src/redux/actions/types.ts ***!
  \************************************/
/*! exports provided: TEST_CREATE_POST, TEST_FETCH_POST, TEST_REQUEST_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, GET_CATEGORIES, GET_ALL_POSTS, ADD_POST, REMOVE_POST, UPDATE_POST, SELECT_STATE, SELECT_CITY, SELECT_LIST_SORT, SELECT_LIST_FILTER, SELECT_CATEGORY, ALL_POSTS */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES", function() { return GET_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_POSTS", function() { return GET_ALL_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST", function() { return ADD_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST", function() { return REMOVE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST", function() { return UPDATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_STATE", function() { return SELECT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_CITY", function() { return SELECT_CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_LIST_SORT", function() { return SELECT_LIST_SORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_LIST_FILTER", function() { return SELECT_LIST_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_CATEGORY", function() { return SELECT_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_POSTS", function() { return ALL_POSTS; });
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

/***/ 7:
/*!*************************************!*\
  !*** multi ./src/pages/addPost.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\projects\vibe\src\pages\addPost.jsx */"./src/pages/addPost.jsx");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkLXBvc3QvQWRkUG9zdEZyb20uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZC1wb3N0L2FkZC1wb3N0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rlc3QvQWxlcnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9hZGRQb3N0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3Byb3ZpZGVyQWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy90eXBlcy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkFkZFBvc3RGcm9tIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZFByb3ZpZGVyUG9zdCIsImdlbmRlciIsImFnZSIsImV0aG5pY2l0eSIsImhhaXJfY29sb3IiLCJleWVfY29sb3IiLCJoZWlnaHQiLCJhZmZpbGlhdGlvbiIsIm51bWJlciIsImVtYWlsIiwibW9kZWxfbmFtZSIsInZpZGVvX2xpbmsiLCJhYm91dCIsImF2YWlsYWJsZV90byIsImF2YWlsYWJpbGl0eSIsInN1bW1hcnkiLCJzZWNvbmRfbmFtZSIsImFjY291bnRfbmFtZSIsImNhdGVnb3J5Iiwic3RhdHVzIiwic3RhdGUiLCJoZWlndGgiLCJwaG90byIsInJlbmRlciIsInMiLCJhZGRfcG9zdF93cmFwIiwiYWRkX3Bvc3RfYmxvY2siLCJhZGRfcG9zdF9ibG9ja190aXRsZSIsImFkZF9wb3N0X2Jsb2NrX2luZm8iLCJhbGVydCIsInN1Ym1pdEhhbmRsZXIiLCJhZGRfcG9zdF9ibG9ja19pbmZvX3RleHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwic2F2ZV9idG4iLCJjdHgiLCJzaG93QWxlcnQiLCJBbGVydCIsInRleHQiLCJBZGRQb3N0IiwiY3JlYXRlUG9zdCIsInBvc3QiLCJ0eXBlIiwiVEVTVF9DUkVBVEVfUE9TVCIsInBheWxvYWQiLCJzaG93TG9hZGVyIiwiU0hPV19MT0FERVIiLCJoaWRlTG9hZGVyIiwiSElERV9MT0FERVIiLCJkaXNwYXRjaCIsIlNIT1dfQUxFUlQiLCJzZXRUaW1lb3V0IiwiaGlkZUFsZXJ0IiwiSElERV9BTEVSVCIsImZldGNoUG9zdHMiLCJURVNUX1JFUVVFU1RfUE9TVFMiLCJnZXRDYXRlZ29yaWVzIiwicmVzcG9uc2UiLCJmZXRjaCIsInByb21pc2UiLCJqc29uIiwidGhlbiIsInJlcyIsIkdFVF9DQVRFR09SSUVTIiwiZGF0YSIsImdldEFsbFByb3ZpZGVyUG9zdCIsIkdFVF9BTExfUE9TVFMiLCJBRERfUE9TVCIsInVwZGF0ZVByb3ZpZGVyUG9zdCIsIlVQREFURV9QT1NUIiwicmVtb3ZlUHJvdmlkZXJQb3N0IiwiaWQiLCJSRU1PVkVfUE9TVCIsIlRFU1RfRkVUQ0hfUE9TVCIsIlNFTEVDVF9TVEFURSIsIlNFTEVDVF9DSVRZIiwiU0VMRUNUX0xJU1RfU09SVCIsIlNFTEVDVF9MSVNUX0ZJTFRFUiIsIlNFTEVDVF9DQVRFR09SWSIsIkFMTF9QT1NUUyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FB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Ozs7Ozs7Ozs7O0FDaERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxNQUFNNUIsZ0JBQWdCLEdBQUcsYUFBekI7QUFDQSxNQUFNOEIsZUFBZSxHQUFHLFlBQXhCO0FBQ0EsTUFBTWxCLGtCQUFrQixHQUFHLGVBQTNCLEMsQ0FFUDs7QUFDTyxNQUFNVCxXQUFXLEdBQUcsaUJBQXBCO0FBQ0EsTUFBTUUsV0FBVyxHQUFHLGlCQUFwQjtBQUNBLE1BQU1FLFVBQVUsR0FBRyxnQkFBbkI7QUFDQSxNQUFNRyxVQUFVLEdBQUcsZ0JBQW5CO0FBQ0EsTUFBTVUsY0FBYyxHQUFHLG9CQUF2QixDLENBRVA7O0FBQ08sTUFBTUcsYUFBYSxHQUFHLHdCQUF0QjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxtQkFBakI7QUFDQSxNQUFNSyxXQUFXLEdBQUcsc0JBQXBCO0FBQ0EsTUFBTUgsV0FBVyxHQUFHLHNCQUFwQixDLENBRVA7O0FBdUJBO0FBQ08sTUFBTUssWUFBWSxHQUFHLG1CQUFyQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxrQkFBcEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyx1QkFBekI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyx5QkFBM0I7QUFDQSxNQUFNQyxlQUFlLEdBQUcsc0JBQXhCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLGdCQUFsQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DUCwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRkUG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHMgZnJvbSBcIi4vYWRkLXBvc3QubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLi90ZXN0L0FsZXJ0XCI7XHJcbmltcG9ydCB7IHNob3dBbGVydCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgYWRkUHJvdmlkZXJQb3N0IH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9wcm92aWRlckFjdGlvbnMnO1xyXG4vLyBpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkUG9zdEZyb20gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRtb2RlbF9uYW1lOiBcIlwiLFxyXG5cdFx0XHRzZWNvbmRfbmFtZTogXCJcIixcclxuXHRcdFx0YWNjb3VudF9uYW1lOiBcIlwiLFxyXG5cdFx0XHRnZW5kZXI6IFwiXCIsXHJcblx0XHRcdGFnZTogXCJcIixcclxuXHRcdFx0ZW1haWw6IFwiXCIsXHJcblx0XHRcdG51bWJlcjogXCJcIixcclxuXHRcdFx0ZXRobmljaXR5OiBcIlwiLFxyXG5cdFx0XHRoYWlyX2NvbG9yOiBcIlwiLFxyXG5cdFx0XHRleWVfY29sb3I6IFwiXCIsXHJcblx0XHRcdGhlaWd0aDogXCJcIixcclxuXHRcdFx0dmlkZW9fbGluazogXCJcIixcclxuXHRcdFx0YWZmaWxpYXRpb246IFwiXCIsXHJcblx0XHRcdGF2YWlsYWJsZV90bzogXCJcIixcclxuXHRcdFx0YXZhaWxhYmlsaXR5OiBcIlwiLFxyXG5cdFx0XHRzdW1tYXJ5OiBcIlwiLFxyXG5cdFx0XHRhYm91dDogXCJcIixcclxuXHRcdFx0cGhvdG86IFwiXCIsXHJcblx0XHRcdHN0YXR1czogXCJvdGhlclwiLFxyXG5cdFx0XHRjYXRlZ29yeTogJ2VzY29ydCdcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4IH0pID0+IHtcclxuXHRcdHJldHVybiB7IHNob3dBbGVydCB9XHJcblx0fVxyXG5cclxuXHRzdWJtaXRIYW5kbGVyID0gZSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQvLyBSb3V0ZXIucHVzaCgnL2FwaS9wcm92aWRlci9wb3N0Jyk7XHJcblx0XHQvLyAodGhpcy5zdGF0ZS5nZW5kZXIubGVuZ3RoICYmICt0aGlzLnN0YXRlLmFnZSA+PSAxOCAmJiB0aGlzLnN0YXRlLmV0aG5pY2l0eS5sZW5ndGggJiYgdGhpcy5zdGF0ZS5oYWlyX2NvbG9yLmxlbmd0aCAmJiB0aGlzLnN0YXRlLmV5ZV9jb2xvci5sZW5ndGggJiYgdGhpcy5zdGF0ZS5oZWlnaHQudG9TdHJpbmcoKS5sZW5ndGggJiYgdGhpcy5zdGF0ZS5hZmZpbGlhdGlvbi5sZW5ndGggJiYgdGhpcy5zdGF0ZS5udW1iZXIudG9TdHJpbmcoKS5sZW5ndGggPiA5ICYmIHRoaXMuc3RhdGUubnVtYmVyLnRvU3RyaW5nKCkubGVuZ3RoIDwgMTIgJiYgdGhpcy5zdGF0ZS5lbWFpbC5sZW5ndGggJiYgdGhpcy5zdGF0ZS5tb2RlbF9uYW1lLmxlbmd0aCAmJiB0aGlzLnN0YXRlLnZpZGVvX2xpbmsubGVuZ3RoICYmIHRoaXMuc3RhdGUuYWJvdXQubGVuZ3RoICYmIHRoaXMuc3RhdGUuYXZhaWxhYmxlX3RvLmxlbmd0aCAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5sZW5ndGggJiYgdGhpcy5zdGF0ZS5zdW1tYXJ5Lmxlbmd0aCAmJiB0aGlzLnN0YXRlLnNlY29uZF9uYW1lLmxlbmd0aCAmJiB0aGlzLnN0YXRlLmFjY291bnRfbmFtZS5sZW5ndGggJiYgdGhpcy5zdGF0ZS5jYXRlZ29yeS5sZW5ndGgpID9cclxuXHRcdGFkZFByb3ZpZGVyUG9zdCh7XHJcblx0XHRcdGdlbmRlcjogJ2ZlbWFsZScsXHJcblx0XHRcdGFnZTogMjUsXHJcblx0XHRcdGV0aG5pY2l0eTogJ3NvbWUnLFxyXG5cdFx0XHRoYWlyX2NvbG9yOiAnc29tZScsXHJcblx0XHRcdGV5ZV9jb2xvcjogJ3NvbWUnLFxyXG5cdFx0XHRoZWlnaHQ6ICdzb21lJyxcclxuXHRcdFx0YWZmaWxpYXRpb246ICdzb21lJyxcclxuXHRcdFx0bnVtYmVyOiAnKzAxMjM0NTY3ODknLFxyXG5cdFx0XHRlbWFpbDogJ3NvbWVAbWFpbC5jb20nLFxyXG5cdFx0XHRtb2RlbF9uYW1lOiAnc29tZScsXHJcblx0XHRcdHZpZGVvX2xpbms6ICdzb21lJyxcclxuXHRcdFx0YWJvdXQ6ICdzb21lJyxcclxuXHRcdFx0YXZhaWxhYmxlX3RvOiBbJ3NvbWUnLCAnc29tZSddLFxyXG5cdFx0XHRhdmFpbGFiaWxpdHk6IFsnc29tZScsICdzb21lJ10sXHJcblx0XHRcdHN1bW1hcnk6ICdzb21lJyxcclxuXHRcdFx0c2Vjb25kX25hbWU6ICdzb21lJyxcclxuXHRcdFx0YWNjb3VudF9uYW1lOiAnc29tZScsXHJcblx0XHRcdGNhdGVnb3J5OiAnc29tZScsXHJcblx0XHRcdHN0YXR1czogJ290aGVyJ1xyXG5cdFx0fSlcclxuXHRcdC8vIDogdGhpcy5wcm9wcy5zaG93QWxlcnQoJ0FMRVJUJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7cy5hZGRfcG9zdF93cmFwfWB9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLmFkZF9wb3N0X2Jsb2NrfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLmFkZF9wb3N0X2Jsb2NrX3RpdGxlfT5BRERJTkcgUE9TVDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3MuYWRkX3Bvc3RfYmxvY2tfaW5mb30+XHJcblxyXG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5hbGVydCAmJiA8QWxlcnQgdGV4dD17dGhpcy5wcm9wcy5hbGVydH0gLz59XHJcblxyXG5cdFx0XHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRIYW5kbGVyfSBjbGFzc05hbWU9e3MuYWRkX3Bvc3RfYmxvY2tfaW5mb190ZXh0fT5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0Rmlyc3QgTmFtZTpcclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgbW9kZWxfbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGJnLWxpZ2h0XCJcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0U2Vjb25kIE5hbWU6XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlY29uZF9uYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYmctbGlnaHQgXCJcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0QWNjb3VudCBOYW1lOlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50X25hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBiZy1saWdodCBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1sZy1mbGV4IGQtbWQtYmxvY2tcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxsZWdlbmQ+R2VuZGVyOjwvbGVnZW5kPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0TWFsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGdlbmRlcjogZS50YXJnZXQudmFsdWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cIm1hbGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJnZW5kZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXQgYmctbGlnaHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEZlbWFsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGdlbmRlcjogZS50YXJnZXQudmFsdWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cImZlbWFsZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dCBiZy1saWdodFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImdlbmRlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRBZ2U6XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGFnZTogZS50YXJnZXQudmFsdWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYmctbGlnaHQgXCJcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0RW1haWw6XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGJnLWxpZ2h0IFwiXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFBob25lOlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBudW1iZXI6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBiZy1saWdodCBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRFdGhuaWNpdHk6XHJcblx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBkcm9wZG93blwiIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBldGhuaWNpdHk6IGUudGFyZ2V0LnZhbHVlIH0pfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBoaWRkZW4gdmFsdWU9XCJkZWZhdWx0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LS0gc2VsZWN0IG9uZSAtLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGdyb3VwIGxhYmVsPVwiV2hpdGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiV2hpdGUgRW5nbGlzaFwiPkVuZ2xpc2g8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiV2hpdGUgV2Vsc2hcIj5XZWxzaDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJXaGl0ZSBTY290dGlzaFwiPlNjb3R0aXNoPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIldoaXRlIE5vcnRoZXJuIElyaXNoXCI+Tm9ydGhlcm4gSXJpc2g8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiV2hpdGUgSXJpc2hcIj5JcmlzaDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJXaGl0ZSBHeXBzeSBvciBJcmlzaCBUcmF2ZWxsZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEd5cHN5IG9yIElyaXNoIFRyYXZlbGxlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJXaGl0ZSBPdGhlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QW55IG90aGVyIFdoaXRlIGJhY2tncm91bmRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRncm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGdyb3VwIGxhYmVsPVwiTWl4ZWQgb3IgTXVsdGlwbGUgZXRobmljIGdyb3Vwc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJNaXhlZCBXaGl0ZSBhbmQgQmxhY2sgQ2FyaWJiZWFuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRXaGl0ZSBhbmQgQmxhY2sgQ2FyaWJiZWFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIk1peGVkIFdoaXRlIGFuZCBCbGFjayBBZnJpY2FuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRXaGl0ZSBhbmQgQmxhY2sgQWZyaWNhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJNaXhlZCBXaGl0ZSBPdGhlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QW55IG90aGVyIE1peGVkIG9yIE11bHRpcGxlIGJhY2tncm91bmRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRncm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGdyb3VwIGxhYmVsPVwiQXNpYW5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiQXNpYW4gSW5kaWFuXCI+SW5kaWFuPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkFzaWFuIFBha2lzdGFuaVwiPlBha2lzdGFuaTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJBc2lhbiBCYW5nbGFkZXNoaVwiPkJhbmdsYWRlc2hpPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkFzaWFuIENoaW5lc2VcIj5DaGluZXNlPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkFzaWFuIE90aGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBbnkgb3RoZXIgQXNpYW4gYmFja2dyb3VuZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0Z3JvdXAgbGFiZWw9XCJCbGFja1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJCbGFjayBBZnJpY2FuXCI+QWZyaWNhbjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJCbGFjayBBZnJpY2FuIEFtZXJpY2FuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBZnJpY2FuIEFtZXJpY2FuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkJsYWNrIENhcmliYmVhblwiPkNhcmliYmVhbjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJCbGFjayBPdGhlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QW55IG90aGVyIEJsYWNrIGJhY2tncm91bmRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRncm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGdyb3VwIGxhYmVsPVwiT3RoZXIgZXRobmljIGdyb3Vwc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJBcmFiXCI+QXJhYjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJIaXNwYW5pY1wiPkhpc3BhbmljPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkxhdGlub1wiPkxhdGlubzwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJOYXRpdmUgQW1lcmljYW5cIj5OYXRpdmUgQW1lcmljYW48L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiUGFjaWZpYyBJc2xhbmRlclwiPlBhY2lmaWMgSXNsYW5kZXI8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiT3RoZXJcIj5Bbnkgb3RoZXIgZXRobmljIGdyb3VwPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0Z3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRIYWlyIENvbG9yOlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZHJvcGRvd25cIiBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgaGFpcl9jb2xvcjogZS50YXJnZXQudmFsdWUgfSl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiYnJvd25cIj5Ccm93bjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiYmxvbmRlXCI+QmxvbmRlPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJibGFja1wiPkJsYWNrPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJhdWJ1cm5cIj5BdWJ1cm48L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cImNvbG9yXCI+Q29sb3I8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdEV5ZSBDb2xvcjpcclxuXHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGRyb3Bkb3duXCIgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGV5ZV9jb2xvcjogZS50YXJnZXQudmFsdWUgfSl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiYnJvd25cIj5Ccm93bjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiZ3JleVwiPkdyZXk8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cImdyZWVuXCI+R3JlZW48L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cImJsdWVcIj5CbHVlPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRIZWlnaHQ6XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGhlaWdodDogZS50YXJnZXQudmFsdWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudWJtZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYmctbGlnaHQgXCJcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0QWZmaWxpYXRpb246XHJcblx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBkcm9wZG93blwiIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBhZmZpbGlhdGlvbjogZS50YXJnZXQudmFsdWUgfSl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiaW5kZXBlbmRlbnRcIj5JbmRlcGVuZGVudDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiYWdlbmNpZXNcIj5BZ2VuY2llczwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtbGctZmxleCBkLW1kLWJsb2NrXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGVnZW5kPiBBdmFpbGFibGUgVG86PC9sZWdlbmQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRNZW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBhdmFpbGFibGVfdG86IGUudGFyZ2V0LnZhbHVlIH0pfSBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRXZW1lblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGF2YWlsYWJsZV90bzogZS50YXJnZXQudmFsdWUgfSl9IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdENvdXBsZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBhdmFpbGFibGVfdG86IGUudGFyZ2V0LnZhbHVlIH0pfSBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdEF2YWlsYWJpbGl0eTpcclxuXHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGRyb3Bkb3duXCIgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGF2YWlsYWJpbGl0eTogZS50YXJnZXQudmFsdWUgfSl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiaW5jYWxsXCI+SW5jYWxsPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJvdXRjYWxsXCI+T3V0Y2FsbDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0U2hvcnQgU3VtbWFyeTpcclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgc3VtbWFyeTogZS50YXJnZXQudmFsdWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI1XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGJnLWxpZ2h0IFwiXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdEFib3V0OlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBhYm91dDogZS50YXJnZXQudmFsdWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJvd3M9XCIxMFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBiZy1saWdodCBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRVcGxvYWQgcGhvdG9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IHBob3RvOiBlLnRhcmdldC52YWx1ZSB9KX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWZpbGVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtgICR7cy5zYXZlX2J0bn1gfT5TQVZFPC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWRkX3Bvc3Rfd3JhcFwiOiBcImFkZC1wb3N0X2FkZF9wb3N0X3dyYXBfXzNHdlZZXCIsXG5cdFwiYWRkX3Bvc3RfYmxvY2tcIjogXCJhZGQtcG9zdF9hZGRfcG9zdF9ibG9ja19fb0Fhc0JcIixcblx0XCJhZGRfcG9zdF9ibG9ja190aXRsZVwiOiBcImFkZC1wb3N0X2FkZF9wb3N0X2Jsb2NrX3RpdGxlX18xckc2blwiLFxuXHRcImFkZF9wb3N0X2Jsb2NrX2luZm9cIjogXCJhZGQtcG9zdF9hZGRfcG9zdF9ibG9ja19pbmZvX19qWjM5eFwiLFxuXHRcImFkZF9wb3N0X2Jsb2NrX2luZm9fdGV4dFwiOiBcImFkZC1wb3N0X2FkZF9wb3N0X2Jsb2NrX2luZm9fdGV4dF9fM3Uxc0JcIixcblx0XCJzYXZlX2J0blwiOiBcImFkZC1wb3N0X3NhdmVfYnRuX18xUkM4YVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxlcnQoeyB0ZXh0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC13YXJuaW5nXCIgcm9sZT1cImFsZXJ0XCI+e3RleHR9PC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFkZFBvc3RGcm9tIGZyb20gJy4uL2NvbXBvbmVudHMvYWRkLXBvc3QvQWRkUG9zdEZyb20nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRQb3N0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QWRkUG9zdEZyb20gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgeyBURVNUX0NSRUFURV9QT1NULCBTSE9XX0xPQURFUiwgSElERV9MT0FERVIsIFNIT1dfQUxFUlQsIEhJREVfQUxFUlQsIFRFU1RfUkVRVUVTVF9QT1NUUywgR0VUX0NBVEVHT1JJRVMgfSBmcm9tIFwiLi90eXBlc1wiXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5cclxuLy8gVCBFIFMgVCBcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvc3QocG9zdDogYW55KTogYW55IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogVEVTVF9DUkVBVEVfUE9TVCxcclxuICAgICAgICBwYXlsb2FkOiBwb3N0XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9hZGVyKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBTSE9XX0xPQURFUlxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlTG9hZGVyKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBISURFX0xPQURFUlxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93QWxlcnQodGV4dDogc3RyaW5nKTogYW55IHtcclxuICAgIHJldHVybiAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBTSE9XX0FMRVJULFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB0ZXh0XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goaGlkZUFsZXJ0KCkpXHJcbiAgICAgICAgfSwgMzAwMClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUFsZXJ0KCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBISURFX0FMRVJUXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9zdHMoKTogYW55IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogVEVTVF9SRVFVRVNUX1BPU1RTXHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yaWVzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGkvY2F0ZWdvcmllcycpO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHByb21pc2UudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjYXRlZ29yaWVzIGZyb20gYWN0aW9uOicsIHJlcy5kYXRhKTtcclxuICAgICAgICByZXR1cm4geyB0eXBlOiBHRVRfQ0FURUdPUklFUywgcGF5bG9hZDogcmVzLmRhdGEgfTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IEFERF9QT1NULCBQcm92aWRlclBvc3QsIFVQREFURV9QT1NULCBSRU1PVkVfUE9TVCwgR0VUX0FMTF9QT1NUUyB9IGZyb20gXCIuL3R5cGVzXCJcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQcm92aWRlclBvc3QoKTogYW55IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogR0VUX0FMTF9QT1NUU1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFByb3ZpZGVyUG9zdChwb3N0OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gIC8vIGF3YWl0IGZldGNoKCdodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL3Bvc3RzL2NyZWF0ZScsIHtcclxuICAvLyAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gIC8vICAgaGVhZGVyczoge1xyXG4gIC8vICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gIC8vICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwb3N0IH0pXHJcbiAgLy8gfSlcclxuICAvLyAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gIC8vICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6JywgZXJyKSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFERF9QT1NUXHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvdmlkZXJQb3N0KHBvc3Q6IFByb3ZpZGVyUG9zdCk6IGFueSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVQREFURV9QT1NULFxyXG4gICAgcGF5bG9hZDogcG9zdFxyXG4gIH1cclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb3ZpZGVyUG9zdChpZDogbnVtYmVyIHwgc3RyaW5nKTogYW55IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogUkVNT1ZFX1BPU1QsXHJcbiAgICBwYXlsb2FkOiBpZFxyXG4gIH1cclxufTtcclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBzaG93QWxlcnQodGV4dDogc3RyaW5nKTogYW55IHtcclxuLy8gICAgIHJldHVybiAoZGlzcGF0Y2g6IEZ1bmN0aW9uKSA9PiB7XHJcbi8vICAgICAgICAgZGlzcGF0Y2goe1xyXG4vLyAgICAgICAgICAgICB0eXBlOiBTSE9XX0FMRVJULFxyXG4vLyAgICAgICAgICAgICBwYXlsb2FkOiB0ZXh0XHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICAgICAgICAgICAgZGlzcGF0Y2goaGlkZUFsZXJ0KCkpXHJcbi8vICAgICAgICAgfSwgMzAwMClcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuIiwiLy8gdGVzdFxyXG5leHBvcnQgY29uc3QgVEVTVF9DUkVBVEVfUE9TVCA9ICdDUkVBVEVfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBURVNUX0ZFVENIX1BPU1QgPSAnRkVUQ0hfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBURVNUX1JFUVVFU1RfUE9TVFMgPSAnUkVRVUVTVF9QT1NUUyc7XHJcblxyXG4vLyBhcHBcclxuZXhwb3J0IGNvbnN0IFNIT1dfTE9BREVSID0gJ0FQUC9TSE9XX0xPQURFUic7XHJcbmV4cG9ydCBjb25zdCBISURFX0xPQURFUiA9ICdBUFAvSElERV9MT0FERVInO1xyXG5leHBvcnQgY29uc3QgU0hPV19BTEVSVCA9ICdBUFAvU0hPV19BTEVSVCc7XHJcbmV4cG9ydCBjb25zdCBISURFX0FMRVJUID0gJ0FQUC9ISURFX0FMRVJUJzsgXHJcbmV4cG9ydCBjb25zdCBHRVRfQ0FURUdPUklFUyA9ICdBUFAvR0VUX0NBVEVHT1JJRVMnO1xyXG5cclxuLy8gcHJvdmlkZXJcclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfUE9TVFMgPSAnUFJPVklERVIvR0VUX0FMTF9QT1NUUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVCA9ICdQUk9WSURFUi9BRERfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVCA9ICdQUk9WSURFUi9SRU1PVkVfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TVCA9ICdQUk9WSURFUi9VUERBVEVfUE9TVCc7XHJcblxyXG4vLyBwcm92aWRlclxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3ZpZGVyUG9zdCB7XHJcbiAgaWQ6IG51bWJlciB8IHN0cmluZyxcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgc2Vjb25kTmFtZTogc3RyaW5nLFxyXG4gIGFjY291bnRpbmdOYW1lOiBzdHJpbmcsXHJcbiAgc2V4OiBzdHJpbmcsXHJcbiAgYWdlOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwaG9uZTogbnVtYmVyIHwgc3RyaW5nLFxyXG4gIGV0aG5pdGhpdHk6IHN0cmluZyxcclxuICBoYWlyOiBzdHJpbmcsXHJcbiAgZXllczogc3RyaW5nLFxyXG4gIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxyXG4gIGFmZmlsaWF0aW9uOiBzdHJpbmcsXHJcbiAgYXZhaWxhYmxlVG86IHN0cmluZyxcclxuICBhdmFpbGFiaWxpdHk6IHN0cmluZyxcclxuICBzaG9ydFN1bW1hcnk6IHN0cmluZyxcclxuICBhYm91dDogc3RyaW5nLFxyXG4gIHBob3Rvczogc3RyaW5nW10sXHJcbiAgdmlkZW9zOiBzdHJpbmdbXVxyXG59XHJcblxyXG4vLyB1c2VyXHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RfU1RBVEUgPSAnVVNFUi9TRUxFQ1RfU1RBVEUnO1xyXG5leHBvcnQgY29uc3QgU0VMRUNUX0NJVFkgPSAnVVNFUi9TRUxFQ1RfQ0lUWSc7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RfTElTVF9TT1JUID0gJ1VTRVIvU0VMRUNUX0xJU1RfU09SVCc7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RfTElTVF9GSUxURVIgPSAnVVNFUi9TRUxFQ1RfTElTVF9GSUxURVInO1xyXG5leHBvcnQgY29uc3QgU0VMRUNUX0NBVEVHT1JZID0gJ1VTRVIvU0VMRUNUX0NBVEVHT1JZJztcclxuZXhwb3J0IGNvbnN0IEFMTF9QT1NUUyA9ICdVU0VSL0FMTF9QT1NUUyc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9