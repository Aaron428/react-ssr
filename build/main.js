/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/', style: { marginRight: 40 } },
      'go home'
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/login' },
      'To Login'
    )
  );
};

exports.default = Header;

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(/*! ../../components/Header */ "./src/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _actions = __webpack_require__(/*! ./store/actions */ "./src/containers/Home/store/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.newList.length === 0) {
        this.props.getHomeList();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          newList = _props.newList;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'h2',
          null,
          'Hello ',
          name,
          ', welcome to the lesson for React ssr!'
        ),
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return alert('you clicked!');
            } },
          'click me!'
        ),
        _react2.default.createElement(
          'ul',
          null,
          newList.map(function (news) {
            return _react2.default.createElement(
              'li',
              { key: news.id },
              news.title
            );
          })
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

Home.loadData = function (store) {
  return store.dispatch((0, _actions.getHomeListAction)());
  // console.log('load data');
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    name: state.home.name,
    newList: state.home.newList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getHomeList: function getHomeList() {
      return dispatch((0, _actions.getHomeListAction)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),

/***/ "./src/containers/Home/store/actions.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/actions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getHomeListAction = undefined;

var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__(/*! ./constants */ "./src/containers/Home/store/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var changeHomeList = function changeHomeList(newList) {
  return {
    type: _constants.CHANGE_HOME_LIST,
    newList: newList
  };
};

var getHomeListAction = exports.getHomeListAction = function getHomeListAction() {
  return function (dispatch) {
    return _axios2.default.get('http://localhost:5090/news').then(function (res) {
      if (res.status === 200) {
        var list = res.data;
        dispatch(changeHomeList(list));
      }
    });
    // setTimeout(() => {
    //   console.log('fake data');
    // }, 1870);
  };
};

/***/ }),

/***/ "./src/containers/Home/store/constants.js":
/*!************************************************!*\
  !*** ./src/containers/Home/store/constants.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var CHANGE_HOME_LIST = exports.CHANGE_HOME_LIST = 'home/change_list';

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.reducer = undefined;

var _reducer = __webpack_require__(/*! ./reducer */ "./src/containers/Home/store/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.reducer = _reducer2.default;

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(/*! ./constants */ "./src/containers/Home/store/constants.js");

var defaultState = {
  name: 'george',
  newList: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.CHANGE_HOME_LIST:
      return _extends({}, state, {
        newList: action.newList
      });
    default:
      return state;
  }
};

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(/*! ../../components/Header */ "./src/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function Login() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, null),
    'Login'
  );
};

exports.default = Login;

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(/*! ./containers/Home */ "./src/containers/Home/index.js");

var _Home2 = _interopRequireDefault(_Home);

var _Login = __webpack_require__(/*! ./containers/Login */ "./src/containers/Login/index.js");

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default (
//   <div>
//     <Route path="/" exact component={Home} />
//     <Route path="/login" exact component={Login} />
//   </div>
// );

exports.default = [{
  key: 'Home',
  path: '/',
  exact: true,
  component: _Home2.default,
  loadData: _Home2.default.loadData
}, {
  key: 'Login',
  path: '/login',
  exact: true,
  component: _Login2.default
}];

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.render = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = exports.render = function render(store, routes, path) {
  var homeString = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: path, context: {} },
      _react2.default.createElement(
        _react2.default.Fragment,
        null,
        routes.map(function (route) {
          return _react2.default.createElement(_reactRouterDom.Route, route);
        })
      )
    )
  ));

  return '\n    <html>\n      <head>\n        <title>react ssr</title>\n      </head>\n      <body>\n        <div id="root">' + homeString + '</div>\n      </body>\n      <script>\n        window.context = {\n          state: ' + JSON.stringify(store.getState()) + '\n        }\n      </script>\n      <script src="/index.js"></script>\n    </html>\n  ';
};

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getClientStore = exports.getStore = undefined;

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _store = __webpack_require__(/*! ../containers/Home/store */ "./src/containers/Home/store/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  home: _store.reducer
});

var getStore = exports.getStore = function getStore() {
  return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};
var getClientStore = exports.getClientStore = function getClientStore() {
  var defaultState = window.context.state;
  return (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/


var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _routes = __webpack_require__(/*! ../routes */ "./src/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _utils = __webpack_require__(/*! ./utils */ "./src/server/utils.js");

var _store = __webpack_require__(/*! ../store */ "./src/store/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3009;

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  var store = (0, _store.getStore)();

  var matchedRoutes = [];
  var promises = [];

  _routes2.default.some(function (route) {
    var match = (0, _reactRouterDom.matchPath)(req.path, route);
    if (match) {
      matchedRoutes.push(route);
    }
  });
  matchedRoutes.forEach(function (item) {
    if (item.loadData) {
      promises.push(item.loadData(store));
    }
  });

  Promise.all(promises).then(function () {
    var html = (0, _utils.render)(store, _routes2.default, req.path);
    res.send(html);
  });
});

app.listen(port, function () {
  console.log('Server is running on http://127.0.0.1:' + port + '/');
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map