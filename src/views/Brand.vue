<template>
	<NavBar />
	{{$route.params.name}}
	<Footer />
</template>

<script>
import axios from "axios";
import NavBar from "../components/commons/NavBar.vue";
import Footer from "../components/commons/Footer.vue";

export default {
	components: { NavBar, Footer },
	data() {
		return {
			products: Object,
		};
	},
	methods: {
		name() {},
	},
	created() {
		axios.get("http://127.0.0.1:8000/api/brand", {}).then().catch();
	},
	mounted() {},
};
</script>

<style>
</style>