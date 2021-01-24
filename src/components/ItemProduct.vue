<template>
	<div class="card h-100">
		<img v-if="product.images.length" :src="'https://4c5430123f64.ngrok.io' + product.images[0].image" />
		<img v-if="!product.images.length" src="../assets/placeholder.jpg" class="object-fit: cover">
		<div class="card-body">
			<p class="card-title" style="height: 45px;">{{ formatName }}</p>
			<p class="card-text">{{ product.price.toLocaleString() }}₫</p>
		</div>
		<router-link :to="{ path: '/product/' + product.name }" class="stretched-link" />
	</div>
</template>

<script>
export default {
	name: "item-product",
	props: {
		product: Object,
	},
	computed: {
		formatName() {
			if (this.product.name.length > 50) {
				return this.product.name.slice(0, 50) + "..."
			} else {
				return this.product.name;
			}
		},
	},
	created() {},
};
</script>

<style scoped>
.card {
	border: none;
}
.card:hover {
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.card img {
	height: 260px;
	object-fit: cover;
	padding: 14px;
}
.card-body {
	padding: 0px;
	padding-bottom: 10px;
}
.card-title {
	margin-bottom: 3px;
}
.card-text {
	font-size: 16px;
	font-weight: 600;
}
</style>
