'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _getters = require('./getters');

var _getters2 = _interopRequireDefault(_getters);

var _products = require('./modules/products');

var _products2 = _interopRequireDefault(_products);

var _cart = require('./modules/cart');

var _cart2 = _interopRequireDefault(_cart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

exports.default = new _vuex2.default.Store({
  state: {
    count: 11
  },
  actions: _actions2.default,
  getters: _getters2.default,
  mutations: {},
  modules: {
    products: _products2.default,
    cart: _cart2.default
  }
});
//# sourceMappingURL=index.js.map