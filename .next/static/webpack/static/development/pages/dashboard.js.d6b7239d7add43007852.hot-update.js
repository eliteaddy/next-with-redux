webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./node_modules/isomorphic-unfetch/browser.js":
/*!****************************************************!*\
  !*** ./node_modules/isomorphic-unfetch/browser.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.fetch || (window.fetch = __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.mjs").default || __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.mjs"));


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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actionTypes */ "./redux/actionTypes.js");

// actions/authActions.js




var authenticate = function authenticate(user) {
  return function (dispatch) {
    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("http://localhost:5000/users/api", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(user)
    }).then(function (data) {
      return data.json();
    }).then(function (response) {
      // console.log('ok set cookie', response.token);
      setCookie('token', response.token);
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/dashboard');
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["AUTHENTICATE"],
        payload: response.token
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};
var deauthenticate = function deauthenticate() {
  return function (dispatch) {
    removeCookie('token');
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["DEAUTHENTICATE"]
    });
  };
};
var register = function register(user) {
  return function (dispatch) {
    // console.log(user);
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("http://localhost:5000/users/api", {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(user)
    }).then(function (data) {
      return data.json();
    }).then(function (response) {
      // console.log('ok set cookie', response.token);
      setCookie('token', response.token);
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/dashboard');
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["REGISTER"],
        payload: response.token
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};
var getUser = function getUser(token) {
  return function (dispatch) {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("http://localhost:5000/users/api", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': token
      }
    }).then(function (res) {
      return res.json();
    }).then(function (user) {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["USERINFO"],
        payload: user
      });
    });
  };
};
/**
 * cookie helper methods
 */

var setCookie = function setCookie(key, value) {
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set(key, value, {
      expires: 1,
      path: '/'
    });
  }
};
var removeCookie = function removeCookie(key) {
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove(key, {
      expires: 1
    });
  }
};
var getCookie = function getCookie(key, req) {
  return  true ? getCookieFromBrowser(key) : undefined;
};

var getCookieFromBrowser = function getCookieFromBrowser(key) {
  return js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(key);
};

var getCookieFromServer = function getCookieFromServer(key, req) {
  if (!req.headers.cookie) {
    return undefined;
  }

  var rawCookie = req.headers.cookie.split(';').find(function (c) {
    return c.trim().startsWith("".concat(key, "="));
  });

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split('=')[1];
};

/***/ })

})
//# sourceMappingURL=dashboard.js.d6b7239d7add43007852.hot-update.js.map