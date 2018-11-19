import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios" 


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    brands: []

  },
  getters: {
    displayProducts(state) {
      console.log("ici state", state)
      return state.products;
    },
    displayBrands(state) {
      return state.brands
    }
  },
  mutations: {
    // sortProduct(ctx) {
    //   ctx.state.products.data[1].sort(function (a, b) {
    //     return a.price - b.price
    //   })
    // }
  },
  actions: {
    getProducts(ctx) {
      console.log("ctx", ctx)
      axios.get("http://localhost:8081/api/v1/products").then(res => {
        res.data[1].sort(function (a, b) {
          return a.price - b.price
        })
        ctx.state.products = res;
        console.log("products", res);
      }).catch(err => {
        console.log(err);
      })
    },
    getBrands(ctx) {
      console.log("ctx", ctx)
      axios.get("http://localhost:8081/api/v1/brand").then(res => {
        ctx.state.brands = res;
        console.log("brands", res);
      }).catch(err => {
        console.log(err);
      })
    },

  }
})
