"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var state = {
  added: [], // 购物车全部商品
  messageInfo: "确认后请提交！"
};

var mutations = {

  add_to_cart: function add_to_cart(state, productInfo) {
    var record = state.added.find(function (p) {
      //查询是不是已经在购物车了
      return p.id === productInfo.id;
    });

    if (!record) {
      // 如果购物车没有，则push到购物车
      state.added.push({
        title: productInfo.title,
        id: productInfo.id,
        price: productInfo.price,
        num: 1
      });
    } else {
      // 如果购物车有了，则数量加1
      record.num++;
    }
  },

  delete_cart_product: function delete_cart_product(state, productInfo) {
    state.added.find(function (p) {
      return p.id === productInfo.id;
    }).num--;
  },

  //提交购物车
  submit_cart_product: function submit_cart_product(state) {
    state.added = [];
    state.messageInfo = "提交成功！";
  }
};

exports.default = {
  state: state,
  mutations: mutations
};
//# sourceMappingURL=cart.js.map