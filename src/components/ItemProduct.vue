<template>
	<div class="card" style="cursor: pointer">
		<img src="https://ductinluxury.com/wp-content/uploads/2018/09/341.pe_.2010.rw_.1104_main-247x296.jpg" alt="product_image">
		<div class="card-body">
			<p class="card-title">{{ product.name }}</p>
			<p class="card-text">{{ product.price.toLocaleString() }}₫</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "item-product",
	props: {
		product: Object,
	},
	created() {},
};
</script>

<style scoped>
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
}
.card-title {
	margin-bottom: 6px;
}
.card-text {
	font-size: 16px;
	font-weight: 600;
}
</style>