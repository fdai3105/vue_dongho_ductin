<template>
	<NavBar></NavBar>
	<Banner></Banner>
	<BannerGrid></BannerGrid>
	<ListProduct></ListProduct>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Banner from "../components/Banner.vue";
import BannerGrid from "../components/BannerGrid.vue";
import ListProduct from "../components/ListProduct.vue";

export default {
	components: {
		NavBar,
		Banner,
		BannerGrid,
		ListProduct,
	},
};
</script>

<style></style>
