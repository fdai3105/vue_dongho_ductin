<template>
	<NavBar />
	<AddAddressModal />
	<CheckoutModal />
	<div class="h-100 container mt-5 mb-5">
		<div v-if="isLoading">
			<Loading />
		</div>
		<div v-else>
			<table v-if="carts.length" class="table">
				<thead class="bg-info">
					<tr>
						<th>Sản phẩm</th>
						<th>Đơn giá</th>
						<th>Số lượng</th>
						<th>Tổng cộng</th>
						<th>Hành động</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="cart in carts" :key="cart.id">
						<td>{{ cart.product.name }}</td>
						<td>{{ cart.product.price.toLocaleString() }}₫</td>
						<td>{{ cart.quantity }}</td>
						<td>{{ (cart.product.price * cart.quantity).toLocaleString() }}₫</td>
						<td>
							<button @click="removeCart(cart.id)" class="btn btn-danger">X</button>
						</td>
					</tr>
					<tr class="text-right">
						<td colspan="6">
							<div class="row justify-content-end align-items-center">
								<span class="mr-4 font-weight-bold">Tổng cộng: {{ total.toLocaleString() }}₫</span>
								<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
									Thanh toán
								</button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<div v-else>
				<img src="../assets/empty.png" alt="empty">
				<p class="text-dark mt-2 font-weight-bold">Hông có gì trong giỏ hàng</p>
			</div>
		</div>
	</div>

	<Footer />
</template>

<script>
import Footer from "../components/commons/Footer.vue";
import Loading from "../components/commons/Loading.vue";
import NavBar from "../components/commons/NavBar.vue";
import AddAddressModal from "../components/modal/AddAddressModal.vue";
import CheckoutModal from "../components/modal/CheckoutModal";
import { cartService, userService } from "../services/index";

export default {
	name: "About",
	components: { NavBar, Footer, Loading, CheckoutModal, AddAddressModal },
	data() {
		return {
			carts: [],
			isLoading: true,
		};
	},
	methods: {
		removeCart(id) {
			cartService
				.removeCart(userService.auth().access_token, id)
				.then((result) => {
					result;
					this.fetchCarts();
				})
				.catch((err) => {
					console.log(err.response);
				});
		},
		fetchCarts() {
			cartService
				.getCarts(userService.auth().access_token)
				.then((response) => {
					this.carts = response.data.data;
					this.isLoading = false;
				})
				.catch((err) => {
					console.log(err.response);
				});
		},
	},
	created() {
		this.fetchCarts();
	},
	computed: {
		total() {
			var total = 0;
			this.carts.forEach((element) => {
				total += element.product.price * element.quantity;
			});
			return total;
		},
	},
};
</script>

<style>
.table {
	color: white !important;
}
.table td {
	color: black;
	vertical-align: middle;
}
</style>