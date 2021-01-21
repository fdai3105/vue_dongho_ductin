<template>
	<div class="container-fluid p-0">
		<div class="row no-gutters">
			<div class="col-4">
				<div class="banner-item" style="height:100vh">
					<div class="bg-img bg-img-1"></div>
					<div class="banner-item-overlay">
						<p class="overlay-title">BIG BANG</p>
						<p class="overlay-text">UNICO TEAK ITALIA <br> INDEPENDENT TITANIUM</p>
						<button class="btn btn-outline-light px-4">Mua ngay</button>
					</div>
				</div>
			</div>
			<div class="col-4">
				<div class="banner-item">
					<div class="bg-img  bg-img-2"></div>
					<div class="banner-item-overlay">
						<p class="overlay-title">PATEK PHILIPPE</p>
						<p class="overlay-text">PATEK PHILIPPE AQUANAUT</p>
						<button class="btn btn-outline-light px-4">Mua ngay</button>

					</div>
				</div>
				<div class="banner-item">
					<div class="bg-img  bg-img-3"></div>
					<div class="banner-item-overlay">
						<p class="overlay-title">ROLEX</p>
						<p class="overlay-text">ROLEX D-DAY 40</p>
						<button class="btn btn-outline-light px-4">Mua ngay</button>
					</div>
				</div>
			</div>
			<div class="col-4">
				<div class="banner-item" style="height:100vh">
					<div class="bg-img  bg-img-4"></div>
					<div class="banner-item-overlay">
						<p class="overlay-title">FRANCK MULLER</p>
						<p class="overlay-text">Crazy Hours</p>
						<button class="btn btn-outline-light px-4">Mua ngay</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "BannerGrid",
};
</script>

<style scoped>
.banner-item {
	height: 50vh;
	background-color: teal;
	position: relative;
}
.bg-img {
	height: 100%;
	width: 100%;
	background-size: cover !important;
	background-repeat: no-repeat !important;
	background-position: 50% 50%;
}

.bg-img-1 {
	background-image: url("https://ductinluxury.com/wp-content/uploads/2020/02/Big-Bang-UNICO-SORAI-banner-pc-526x800-1.jpg");
}
.bg-img-2 {
	background-image: url("https://ductinluxury.com/wp-content/uploads/2020/02/likewatch_blog_banner.jpg");
}
.bg-img-3 {
	background-image: url("https://ductinluxury.com/wp-content/uploads/2020/02/homepage_classic_watches_datejust_0001_675x825.jpg");
}
.bg-img-4 {
	background-image: url("https://ductinluxury.com/wp-content/uploads/2020/02/alvin-mahmudov-oBT4lJvNMQg-unsplash-526x800-1.jpg");
}
.banner-item-overlay {
	background-color: #09272793;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.overlay-title {
	margin-bottom: 0px;
	color: white;
	font-size: 30px;
	font-weight: 400;
}
.overlay-text {
	color: white;
	font-size: 24px;
	font-weight: 800;
}
</style>