<template>
	<NavBar />
	{{$route.params.name}}
	<Footer />
</template>

<script>
import Footer from '../components/commons/Footer.vue';
import NavBar from '../components/commons/NavBar.vue';
export default {
	components: { Footer, NavBar },};
</script>

<style>
</style>