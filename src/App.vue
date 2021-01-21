<template>
	<Home></Home>
</template>

<script>
import Home from "./pages/Home";

export default {
	name: "App",
	components: {
		Home,
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

html,
body {
	font-family: "Inter", sans-serif;
}
#app {
	font-family: "Inter", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
