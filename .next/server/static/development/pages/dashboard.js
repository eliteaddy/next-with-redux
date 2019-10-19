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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_titleAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/titleAction */ "./redux/actions/titleAction.js");
/* harmony import */ var _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/authActions */ "./redux/actions/authActions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class Dashboard extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      user: this.props.user,
      loading: true
    });
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`http://localhost:5000/users/api`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': this.props.token
      }
    }).then(res => {
      // console.log(res.data);
      this.setState({
        user: res.data,
        loading: false
      });
    });
  }

  render() {
    if (this.state.loading) {
      return __jsx("div", null, "Loading...");
    }

    return __jsx("div", {
      style: {
        textAlign: 'center'
      }
    }, __jsx("h2", null, "Dashboard"), __jsx("div", {
      style: {
        textAlign: 'left'
      }
    }, __jsx("h4", null, "Name : ", this.state.user.name), __jsx("h4", null, "Email : ", this.state.user.email), __jsx("h4", null, "Date Created : ", new Date(this.state.user.date).toLocaleDateString()), __jsx("h4", null, "Time Created : ", new Date(this.state.user.date).toLocaleTimeString())));
  }

}

Dashboard.getInitialProps = async ({
  store,
  res,
  req,
  isServer
}) => {
  const token = Object(_redux_actions_authActions__WEBPACK_IMPORTED_MODULE_6__["getCookie"])('token', req);
  store.dispatch(Object(_redux_actions_titleAction__WEBPACK_IMPORTED_MODULE_5__["setTitle"])('Dashboard')); // console.log(isServer, token);

  if (!token) {
    {
      isServer ? res.redirect('/signin') : next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/signin');
    }
  }

  if (token) {
    store.dispatch(Object(_redux_actions_authActions__WEBPACK_IMPORTED_MODULE_6__["getUser"])(token));
    const user = store.getState().authentication.user;
    return {
      user,
      token
    };
  }

  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(state => state, {
  setTitle: _redux_actions_titleAction__WEBPACK_IMPORTED_MODULE_5__["setTitle"],
  getUser: _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_6__["getUser"]
})(Dashboard));

/***/ }),

/***/ "./redux/actionTypes.js":
/*!******************************!*\
  !*** ./redux/actionTypes.js ***!
  \******************************/
/*! exports provided: API, AUTHENTICATE, DEAUTHENTICATE, TITLE, REGISTER, USERINFO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATE", function() { return AUTHENTICATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEAUTHENTICATE", function() { return DEAUTHENTICATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE", function() { return TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERINFO", function() { return USERINFO; });
// redux/actionTypes.js
const API = 'API';
const AUTHENTICATE = 'AUTHENTICATE';
const DEAUTHENTICATE = 'DEAUTHENTICATE';
const TITLE = 'TITLE';
const REGISTER = 'REGISTER';
const USERINFO = 'USERINFO';

/***/ }),

/***/ "./redux/actions/authActions.js":
/*!**************************************!*\
  !*** ./redux/actions/authActions.js ***!
  \**************************************/
/*! exports provided: authenticate, deauthenticate, register, getUser, setCookie, removeCookie, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deauthenticate", function() { return deauthenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actionTypes */ "./redux/actionTypes.js");

// actions/authActions.js




const authenticate = user => dispatch => isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(`http://localhost:5000/users/api`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(user)
}).then(data => data.json()).then(response => {
  // console.log('ok set cookie', response.token);
  setCookie('token', response.token);
  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/dashboard');
  dispatch({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["AUTHENTICATE"],
    payload: response.token
  });
}).catch(err => console.log(err));
const deauthenticate = () => {
  return dispatch => {
    removeCookie('token');
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["DEAUTHENTICATE"]
    });
  };
};
const register = user => dispatch => {
  // console.log(user);
  isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(`http://localhost:5000/users/api`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(user)
  }).then(data => data.json()).then(response => {
    // console.log('ok set cookie', response.token);
    setCookie('token', response.token);
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/dashboard');
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["REGISTER"],
      payload: response.token
    });
  }).catch(err => console.log(err));
};
const getUser = token => dispatch => {
  isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(`http://localhost:5000/users/api`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-auth-token': token
    }
  }).then(res => res.json()).then(user => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["USERINFO"],
      payload: user
    });
  });
};
/**
 * cookie helper methods
 */

const setCookie = (key, value) => {
  if (false) {}
};
const removeCookie = key => {
  if (false) {}
};
const getCookie = (key, req) => {
  return  false ? undefined : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }

  const rawCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`));

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split('=')[1];
};

/***/ }),

/***/ "./redux/actions/titleAction.js":
/*!**************************************!*\
  !*** ./redux/actions/titleAction.js ***!
  \**************************************/
/*! exports provided: setTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTitle", function() { return setTitle; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./redux/actionTypes.js");

const setTitle = data => dispatch => {
  dispatch({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["TITLE"],
    payload: data
  });
};

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./pages/dashboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/haryormeedey/Documents/React-Apps/withredux/frontend/pages/dashboard.js */"./pages/dashboard.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

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

/***/ })

/******/ });
//# sourceMappingURL=dashboard.js.map