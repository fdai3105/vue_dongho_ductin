<template>
	<nav class="navbar navbar-expand-lg">
		<div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
			<a class="navbar-brand mr-auto" href="#">
				<img height="46" src="https://ductinluxury.com/wp-content/uploads/2019/08/dong-ho-duc-tin-luxury-logo.png" alt="logo" />
			</a>

			<ul class="navbar-nav">
				<!-- Home -->
				<li class="nav-item mr-4">
					<a class="nav-link" href="#">Trang chủ<span class="sr-only">(current)</span></a>
				</li>

				<!-- Brand -->
				<li class="nav-item dropdown mr-4">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Thương hiệu
					</a>
					<div v-for="brand in brands" :key="brand.id" class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#">{{ brand.name }}</a>
					</div>
				</li>

				<!--Category -->
				<li class="nav-item dropdown mr-4">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Danh mục
					</a>
					<div v-for="category in categories" :key="category.id" class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#">{{ category.name }}</a>
					</div>
				</li>

				<!--  -->
				<li class="nav-item">
					<a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
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
			.get("http://127.0.0.1:8000/api/category")
			.then((response) => (this.categories = response.data))
			.catch();
		axios
			.get("http://127.0.0.1:8000/api/brand")
			.then((response) => (this.brands = response.data))
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
