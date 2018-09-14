/*
 * Action 类似于 mutation，不同在于：
 * Action 提交的是 mutation，而不是直接变更状态。
 * Action 可以包含任意异步操作。
 *
 * 据此，可以简单地把actions看成对mutations的封装
 * */

// 引入api
import apiProducts from '../api/products'


var getAllProducts = function(context){
  var commit = context.commit;
    apiProducts.getProducts(function(products){
    //console.info(products)
    commit("receive_product", products)
  })
}

var addToCart = function(context,productInfo){
  var commit = context.commit;

  if (productInfo.inventory > 0) {     //库存大于0的时候可以调用
    commit("add_to_cart", productInfo)
  }
}

var deleteCartProducts = function (context, productInfo) {
  var commit = context.commit;

  if (productInfo.num > 0) {
    commit("delete_cart_product",productInfo)
  }
}

var submitCart = function(context){
  var commit = context.commit;
  commit("submit_cart_product");
}

export default {
  getAllProducts,
  addToCart,
  deleteCartProducts,
  submitCart,
}