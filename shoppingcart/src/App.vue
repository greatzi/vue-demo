<template>
  <div id="app">
    <h2>购物车</h2>
    <products></products>
    <cart/>
  </div>
</template>

<script>
import Cart from './components/Cart'
import Products from './components/Products'

export default {
  name: 'App',
  components: {
    Cart,
    Products
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
