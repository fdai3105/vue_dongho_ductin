<template>
	<NavBar />

	<div class="container">
		<h4 class="title text-uppercase">{{ $route.params.name }}</h4>

		<div class="row">
			<div div v-if="isLoading" class="col my-5">
				<Loading />
			</div>

			<div v-for="product in products" :key="product.id" class="col-3">
				<ItemProduct v-bind:product="product" />
			</div>
			<div v-if="!products.length && !isLoading">
				Không có sản phẩm nào trong danh mục này
			</div>
		</div>
	</div>
	<Footer />
</template>

<script>
import NavBar from "../components/commons/NavBar";
import Footer from "../components/commons/Footer";
import ItemProduct from "../components/ItemProduct";
import { productService } from "../services/product.service";
import Loading from "../components/commons/Loading.vue";
export default {
	components: { NavBar, Footer, ItemProduct, Loading },
	data() {
		return {
			products: Object,
			isLoading: true,
		};
	},
	methods: {
		fetch() {
			productService
				.getProductByBrand(this.$route.params.name)
				.then((result) => {
					this.products = result.data.data;
					this.isLoading = false;
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	watch: {
		$route(to, from) {
			if (to !== from) {
				this.products = [];
				this.isLoading = true;
				this.fetch();
			}
		},
	},
	created() {
		this.fetch();
	},
	mounted() {},
};
</script>

<style scoped>
.title {
	margin-top: 20px;
	margin-bottom: 20px;
	letter-spacing: 2px;
	color: #0e3a3b;
	font-weight: 700;
}
</style>