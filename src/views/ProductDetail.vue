<template>
	<NavBar />
	<div class="row">
		<div class="col-4">
			<img src="" alt="" />
		</div>
		<div class="col-4">
			<h4>
				Đồng hồ nam Hublot Big Bang Caviar Gold Diamond 41mm –
				346.px.0880.vr.1204
			</h4>
			<p>945,000,000₫ 667,000,000₫</p>
			<p>Tình trạng: còn hàng</p>
			<div>
				<button class="btn">Mua hang`</button>
			</div>
		</div>
		<div class="col-4">
			<h4>SẢN PHẨM NỔI BẬT</h4>
			<ListHotProduct />
		</div>
	</div>
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

<style></style>