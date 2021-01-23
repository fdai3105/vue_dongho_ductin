<template>
	<NavBar />

	<div class="container mt-5">
		<div class="row">
			<!-- loading placeholder -->
			<div v-if="!Object.entries(product).length" class="col-8 align-items-center">
				<Loading />
			</div>

			<transition name="fade">
				<div v-if="Object.entries(product).length" class="row col-8">
					<div class="col-6 text-center">
						<img v-if="product.images[0] != null" height="400" style="width:100%; object-fit:cover" :src="`http://127.0.0.1:8000/` + product.images[0].image" />
						<img v-if="product.images[0] == null" height="400" style="width:100%; object-fit:cover" src="../assets/placeholder.jpg" />
					</div>
					<div class="col-6 text-left">
						<p class="title">{{ product.name }}</p>
						<p class="price">{{ product.price.toLocaleString() }}₫</p>
						<p>Tình trạng: còn hàng</p>
						<div class="dropdown-divider"></div>
						<div>
							<div class="form-inline mt-3" action="">
								<div class="form-group">
									<input v-model="quanity" class="form-control w-50 mr-2" type="number" placeholder="số lượng: " />
									<button v-on:click="addToCart" class="btn btn-warning">Mua hàng</button>
								</div>
							</div>
						</div>
					</div>
					<div class="col-12 mt-5 text-left">
						<div class="desc">
							<p class="title">Thông số kỹ thuật</p>
							<p>Tên sản phẩm: {{ product.name }}</p>
							<p>Chất liệu vỏ: {{ product.material.name }}</p>
							<p>Chất liệu dây deo: {{ product.band_material }}</p>
							<p>Kích thước: {{ product.size }}</p>
							<p>Giới tính: {{ product.gender.name }}</p>
							<p>Kích thước: {{ product.size }}</p>
							<p>Phong cách: {{ product.style.name }}</p>
							<p>Chống nước: {{ product.waterpoof }}ATM</p>
						</div>

						<div class="desc">
							<p class="title">Đặc điểm</p>
							<p>{{ product.desc }}</p>
						</div>
					</div>
				</div>
			</transition>

			<div class="col-4 text-left">
				<h5>SẢN PHẨM NỔI BẬT</h5>
				<ListHotProduct />
			</div>
		</div>
	</div>
	<Footer />
</template>

<script>
import Footer from "../components/commons/Footer";
import Loading from "../components/commons/Loading.vue";
import NavBar from "../components/commons/NavBar";
import ListHotProduct from "../components/ListHotProduct";
import { productService } from "../services/index";

export default {
	components: { Footer, NavBar, ListHotProduct, Loading },
	data() {
		return {
			product: Object,
		};
	},
	methods: {
		addToCart() {
			const cart = {
				product: this.product,
				quanity: this.quanity ?? 1,
			};

			var carts = JSON.parse(localStorage.getItem("carts"));
			if (carts == null) carts = [];
			const alreadyAdd = carts.some((item) => {
				if (item.product.id == cart.product.id) {
					item.quanity++;
					return true;
				}
				return false;
			});
			if (!alreadyAdd) carts.push(cart);
			localStorage.setItem("carts", JSON.stringify(carts));
		},
	},
	created() {
		productService
			.getProduct(this.$route.params.name)
			.then((result) => {
				this.product = result.data.data;
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
</script>

<style scoped>
.title {
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 0px;
}
.price {
	font-size: 16px;
	font-weight: 600;
}
.desc {
	margin-bottom: 20px;
}
.desc .title {
	margin-bottom: 14px;
}
.desc p {
	margin-bottom: 10px;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>