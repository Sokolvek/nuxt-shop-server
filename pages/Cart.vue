<template>
    <section class="cart">
        <ul class="products">
            <li class="product" v-for="product in cart">
                <img :src="require(`../assets/images/${product.img}`)" :alt="`image of ${product.title}`">
                <span class="product-title">{{product.title}}</span>
                <span class="product-price">${{product.price}}</span>
                <button @click="removeFromCart(product)" class="add-to-cart-btn">Remove from cart</button>
            </li>
        </ul>
        <button v-if="cart.length != 0" class="add-to-cart-btn" :style="{opacity: 1, width: '200px', margin: '0 auto'}">Check out</button>
        <p v-else>You have nothing at cart :(</p>
    </section>
</template>
<script>

import { useStoreInfo } from '~/store';
export default{
    data(){
        const {cart} = useStoreInfo()
        return{
            cart
        }
    },
    methods:{
        removeFromCart(item) {
            const productInfo = useStoreInfo();
            productInfo.cart.splice(productInfo.cart.indexOf(item), 1);
        },
    }
}
</script>