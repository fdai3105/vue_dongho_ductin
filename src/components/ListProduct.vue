<template>
	<div class="pt-5 pb-5">
		<h4 class="title text-uppercase">Sản phẩm mới</h4>
		<div class="container">
			<div class="row">
				<div v-if="!products.length" class="col">
					<Loading />
				</div>
				<div v-for="product in products" :key="product.id" class="col-3">
					<ItemProduct v-bind:product="product"></ItemProduct>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import ItemProduct from "./ItemProduct.vue";
import Loading from "./commons/Loading.vue";

export default {
	name: "ListProduct",
	components: {
		ItemProduct,
		Loading,
	},
	data() {
		return {
			products: [],
		};
	},
	methods() {},
	created() {
		axios
			.get("https://078b52aae179.ngrok.io/api/product")
			.then((response) => {
				this.products = response.data.data;
			})
			.catch(function () {});
	},
	mounted() {},
};
</script>

<style scoped>
.title {
	margin-bottom: 20px;
	letter-spacing: 2px;
	color: #0e3a3b;
	font-weight: 700;
}
</style>