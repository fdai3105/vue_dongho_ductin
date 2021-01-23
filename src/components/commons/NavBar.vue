<template>
	<nav class="navbar navbar-expand-lg">
		<div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
			<a class="navbar-brand mr-auto" href="#">
				<img height="46" src="https://ductinluxury.com/wp-content/uploads/2019/08/dong-ho-duc-tin-luxury-logo.png" alt="logo" />
			</a>

			<ul class="navbar-nav">
				<!-- Home -->
				<li class="nav-item mr-4">
					<router-link to='/' class="nav-link">Trang chủ<span class="sr-only">(current)</span></router-link>
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
import axios from "axios";
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
		axios
			.get("https://078b52aae179.ngrok.io/api/category")
			.then((response) => (this.categories = response.data.data))
			.catch();
		axios
			.get("https://078b52aae179.ngrok.io/api/brand")
			.then((response) => (this.brands = response.data.data))
			.catch();
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
