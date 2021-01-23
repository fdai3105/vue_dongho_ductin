<template>
	<NavBar />

	<table class="table">
		<thead class="bg-info">
			<tr>
				<th scope="col">Sản phẩm</th>
				<th scope="col">Đơn giá</th>
				<th scope="col">Số lượng</th>
				<th scope="col">Tổng cộng</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="cart in carts" :key="cart.id">
				<th>{{ cart.product.name }}</th>
				<th>{{ cart.product.price }}₫</th>
				<td>{{ cart.quanity }}</td>
				<th>{{ (cart.product.price * cart.quanity).toLocaleString() }}₫</th>
			</tr>
			<tr class="text-right">
				<td colspan="4">Tổng cộng: {{ total.toLocaleString() }}₫</td>
			</tr>
		</tbody>
	</table>

	<Footer />
</template>

<script>
import Footer from "../components/commons/Footer.vue";
import NavBar from "../components/commons/NavBar.vue";
export default {
	components: { NavBar, Footer },
	name: "About",
	data() {
		return {
			carts: [{ product: Object, quanity: Number }],
		};
	},
	computed: {
		total() {
			var total = 0;
			this.carts.forEach((element) => {
				total += element.product.price * element.quanity;
			});
			return total;
		},
	},
	mounted() {
		if (localStorage.getItem("carts")) {
			var parse = JSON.parse(localStorage.getItem("carts"));
			this.carts = parse;
		}
	},
};
</script>

<style>
</style>