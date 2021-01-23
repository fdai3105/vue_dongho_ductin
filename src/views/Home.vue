<template>
	<NavBar></NavBar>
	<Banner></Banner>
	<BannerGrid></BannerGrid>
	<ListProduct></ListProduct>
	<Footer></Footer>
</template>

<script>
import NavBar from "../components/commons/NavBar";
import Banner from "../components/Banner.vue";
import BannerGrid from "../components/BannerGrid.vue";
import ListProduct from "../components/ListProduct.vue";
import Footer from "../components/commons/Footer";

export default {
	components: {
		NavBar,
		Banner,
		BannerGrid,
		ListProduct,
		Footer,
	},
};
</script>

<style></style>
