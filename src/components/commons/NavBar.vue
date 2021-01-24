<template>
	<div class="topbar container-fluid text-white">
		<div class="h-25 px-5 py-2 row bg-success justify-content-end">
			<div class="row mr-5">
				<router-link class="" to="/login">
					Đăng nhập
				</router-link>
				<p style="margin:0px 10px">|</p>
				<router-link class="" to="/register">
					Đăng ký
				</router-link>
			</div>
			<router-link to="/cart">
				<svg style="height:25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
				</svg>
			</router-link>
		</div>
	</div>
	<nav class="navbar navbar-expand-lg">
		<div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
			<a class="navbar-brand mr-auto" href="#">
				<img height="46" src="https://ductinluxury.com/wp-content/uploads/2019/08/dong-ho-duc-tin-luxury-logo.png" alt="logo" />
			</a>

			<ul class="navbar-nav">
				<!-- Home -->
				<li class="nav-item mr-4">
					<router-link to='/' class="nav-link">Trang chủ</router-link>
				</li>

				<!-- Brand -->
				<li class="nav-item dropdown mr-4">
					<a class="nav-link dropdown-toggle" href="#" id="brandDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Thương hiệu
					</a>
					<div class="dropdown-menu" aria-labelledby="brandDropdown">
						<div v-if="!brands.length" class="dropdown-item">
							<div class="d-flex justify-content-center">
								<div class="spinner-grow spinner-grow-sm text-info" role="status">
									<span class="sr-only">Loading...</span>
								</div>
							</div>
						</div>
						<div v-for="brand in brands" :key="brand.id">
							<router-link :to="{path : '/brand/' + brand.name}" class="dropdown-item" :href="`brand/` + brand.name">{{ brand.name }}</router-link>
						</div>
					</div>
				</li>

				<!--Category -->
				<li class="nav-item dropdown mr-4">
					<a class="nav-link dropdown-toggle" href="#" id="categoryDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Danh mục
					</a>
					<div class="dropdown-menu" aria-labelledby="categoryDropdown">
						<div v-if="!brands.length" class="dropdown-item">
							<div class="d-flex justify-content-center">
								<div class="spinner-grow spinner-grow-sm text-info" role="status">
									<span class="sr-only">Loading...</span>
								</div>
							</div>
						</div>
						<div v-for="category in categories" :key="category.id">
							<router-link :to="{path : '/category/' + category.name}" class="dropdown-item" href="#">{{ category.name }}</router-link>
						</div>
					</div>
				</li>

				<!--  -->
				<li class="nav-item">
					<router-link to='/about' class="nav-link" tabindex="-1" aria-disabled="true">Về chúng tôi</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
import { productService } from "../../services/index";

export default {
	name: "NavBar",
	data() {
		return {
			categories: [],
			brands: [],
		};
	},
	methods: {},
	created() {
		productService
			.getCategory()
			.then((result) => {
				this.categories = result.data.data;
			})
			.catch((err) => {
				console.log(err);
			});
		productService
			.getBrand()
			.then((result) => {
				this.brands = result.data.data;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	mounted() {},
};
</script>

<style scoped>
.navbar {
	background-color: #0e3a3b;
}
.navbar a {
	color: white;
}
.navbar a:hover {
	color: white;
}
.dropdown-menu a {
	color: black;
}
.dropdown-menu a:hover {
	color: black;
}
</style>
