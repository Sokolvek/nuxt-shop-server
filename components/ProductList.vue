<template>
    <section class="product-list">
      <ul class="products">
        <li class="product" v-for="product in products" :key="product.id" v-show="category == product.category || category == 'all'">
          <img :src="require(`../assets/images/${product.img}`)" :alt="`image of ${product.title}`">
          <span class="product-title">{{product.title}}</span>
          <span class="product-price">${{product.price}}</span>
          <button @click="addToCart(product)" class="add-to-cart-btn">Add to cart</button>
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  import { useStoreInfo } from "../store";
  
  export default {
    props: {
      category: {
        type: String,
      },
    },
    data() {
      const { products } = useStoreInfo();
      return {
        products,
      };
    },
    methods: {
      addToCart(product) {
        const store = useStoreInfo();
        store.addToCart(product);
        console.log(store.cart[0]);
      },
    },
  };
  </script>