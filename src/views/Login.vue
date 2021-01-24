<template>
	<NavBar />

	<div class="container w-25 my-5">
		<h4 class="mb-4">Đăng nhập</h4>
		<form @submit="submit" class="text-left">
			<div v-if="error">
				{{ error }}
			</div>
			<div class="form-group">
				<input v-model="email" type="email" class="form-control" placeholder="Enter email">
			</div>
			<div class="form-group">
				<input v-model="password" type="password" class="form-control" placeholder="Password">
			</div>
			<div class="d-flex justify-content-end">
				<button type="submit" class="btn btn-primary">Đăng nhập</button>
			</div>
		</form>
	</div>

	<Footer />
</template>

<script>
import Footer from "../components/commons/Footer.vue";
import NavBar from "../components/commons/NavBar.vue";
import { userService } from "../services";
export default {
	components: { NavBar, Footer },
	data() {
		return {
			email: "",
			password: "",
			error: "",
		};
	},
	methods: {
		validation: function () {
			if (this.email && this.password) {
				return true;
			} else {
				this.error = "Tài khoản hoặc mật khẩu không được để trống.";
				return false;
			}
		},
		submit: function (e) {
			if (this.validation()) {
				this.error = "";
				userService
					.login(this.email, this.password)
					.then((user) => {
						if (user.data.access_token) {
							localStorage.setItem("user", JSON.stringify(user.data));
							this.$router.push("/");
						}
					})
					.catch((err) => {
						console.log(err);
						this.error = "Sai mật khẩu hoặc tài khoản";
					});
			}
			e.preventDefault();
		},
	},
};
</script>

<style>
</style>