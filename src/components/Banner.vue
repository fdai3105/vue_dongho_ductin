<template>
	<div class="banner">
		<img class="w-100" src="https://ductinluxury.com/wp-content/uploads/2020/02/d7dbda9a100ee850b11f.jpg">
		<div class="banner-overlay d-flex align-items-center">
			<div class="banner-text w-50 text-left">
				<h4 class="banner-title font-weight-bolder">ĐỨC TÍN LUXURY</h4>
				<p class="card-text">Đức Tín Luxury – Cửa hàng bán đồng hồ Thụy Sỹ cao cấp, điện thoại Vertu chính hãng số 1 Hà Nội – GIá chiết khấu từ 20-40% cho tất cả các sản phẩm – Dịch vụ của chúng tôi bảo hành quốc tế theo tiêu chuẩn hãng – Order nhanh chóng.</p>
				<button class="btn btn-outline-primary px-4">Mua ngay</button>
			</div>
			<div class="w-50"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Banner",
};
</script>

<style scoped>
h4 {
	color: #eacc82;
}
p {
	color: white;
}
.banner {
	position: relative;
}
.banner-overlay {
	background-color: rgba(0, 0, 0, 0.377);
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.banner-text {
	padding: 0 180px 0 180px;
}

.banner-text > .btn {
	color: #eacc82;
	border-color: #eacc82;
}
.banner-text > .btn:hover {
	color: white;
	background-color: #eacc82;
}
</style>