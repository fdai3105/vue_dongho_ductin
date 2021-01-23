<template>
	<NavBar />
	{{ product.price }}
	<Footer />
</template>

<script>
import Footer from "../components/commons/Footer";
import NavBar from "../components/commons/NavBar";
import { productService } from "../services/index";
export default {
	components: { Footer, NavBar },
	data() {
		return {
			product: Object,
		};
	},
	created() {
		productService
			.getProduct(this.$route.params.name)
			.then((result) => {
				console.log(result.data.data[0]);
				this.product = result.data.data;
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
</script>

<style>
</style>