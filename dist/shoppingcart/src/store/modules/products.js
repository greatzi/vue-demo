"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var state = {
  all: []
};

var mutations = {

  receive_product: function receive_product(state, products) {
    console.log(products);
    state.all = products;
  },

  add_to_cart: function add_to_cart(state, productInfo) {
    state.all.find(function (p) {
      return p.id === productInfo.id;
    }).inventory--;
  },

  delete_cart_product: function delete_cart_product(state, productInfo) {
    state.all.find(function (p) {
      return p.id === productInfo.id;
    }).inventory++;
  }

};

exports.default = {
  state: state,
  mutations: mutations
};
//# sourceMappingURL=products.js.map