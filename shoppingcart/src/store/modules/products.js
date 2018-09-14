var state = {
  all: []
}

var mutations = {

  receive_product: function (state, products) {
    console.log(products)
    state.all = products;
  },

  add_to_cart: function(state,productInfo){
    state.all.find(function(p){
        return p.id === productInfo.id;
    }).inventory --;
  },

  delete_cart_product:function(state,productInfo){
    state.all.find(function(p){
        return p.id === productInfo.id;
    }).inventory ++
  }

}

export default {
    state,
    mutations
}