<script setup>
    import { RouterView } from 'vue-router';

    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
</script>

<template>


    <Header></Header>
   <router-view></router-view>

    <Footer></Footer>

</template>
