<template>
	<div>
		<h4 class="title text-uppercase">Sản phẩm mới</h4>
		<div class="container">
			<div class="row">
				<div v-for="product in products" :key="product.data.id" class="col-3">
					<ItemProduct v-bind:product="product.data"></ItemProduct>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import ItemProduct from "./ItemProduct.vue";

export default {
	name: "ListProduct",
	components: {
		ItemProduct,
	},
	data() {
		return {
			products: [],
		};
	},
	methods() {},
	created() {
		axios
			.get("http://127.0.0.1:8000/api/product")
			.then((response) => {
				this.products = response.data;
			})
			.catch(function () {});
	},
	mounted() {},
};
</script>

<style scoped>
.title {
	margin-top: 30px;
	margin-bottom: 20px;
	letter-spacing: 2px;
	color: #0E3A3B;
	font-weight: 700;
	
}
</style>