<template>
    <header>
        <nav>
            <ul class="nav-list">
                <li class="nav-item" :style="{width: '60px'}">
                    <NuxtLink to="/" >
                         <img src="@/assets/images/online-shop-online-store-svgrepo-com.svg" alt="">
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/Decor">Decor</NuxtLink>
                    <NuxtLink to="/Furniture">Furniture</NuxtLink>
                </li>
                <li class="nav-item" >
                    <NuxtLink to="/Cart">
                        <img :style="{width: '60px'}" src="@/assets/images/cart-lines-1-svgrepo-com.svg" alt="">
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
</script>