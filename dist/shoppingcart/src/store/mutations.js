'use strict';

var _products = require('../api/products');

var _products2 = _interopRequireDefault(_products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getProductsMutations = function getProductsMutations(state) {
    _products2.default.getProducts(function (products) {
        state.products = products;
    });
}; // 引入api


var addToCartMutations = function addToCartMutations(state) {
    _products2.default.getProducts(function (products) {
        state.products = products;
    });
};
//# sourceMappingURL=mutations.js.map