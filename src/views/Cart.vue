<template>
	<NavBar />

	<div class="h-100 container mt-5 mb-5">
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
					<td>{{ cart.product.name }}</td>
					<td>{{ cart.product.price }}₫</td>
					<td>{{ cart.quanity }}</td>
					<td>{{ (cart.product.price * cart.quanity).toLocaleString() }}₫</td>
				</tr>
				<tr class="text-right">
					<td colspan="4">Tổng cộng: {{ total.toLocaleString() }}₫</td>
				</tr>
			</tbody>
		</table>
	</div>

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
.table {
	color: white !important;
}
.table th {
}
.table td {
	color: black;
}
</style>