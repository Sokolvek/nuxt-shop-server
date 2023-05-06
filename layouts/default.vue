<template>
    <div>
        <Header />
        <Nuxt />

    </div>
</template>

<script>

import Header from "../components/layouts/Header.vue"

import "@/assets/styles/reset.less"
import "@/assets/styles/productlist.less"
import "@/assets/styles/header.less"
import "@/assets/styles/cart.less"

export default{
    components:{
        Header
    }
}
</script>