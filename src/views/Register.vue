<template>
	<NavBar />

	<div class="container w-25 my-5">
		<h4 class="mb-4">Đăng ký</h4>
		<form @submit="submit" class="text-left">
			<div v-if="errors.length">
				<div class="alert alert-danger" role="alert">
					<ul class="mb-0">
						<li v-for="error in errors" :key="error">
							{{ error }}
						</li>
					</ul>
				</div>
			</div>
			<div class="form-group">
				<input v-model="fullName" type="text" class="form-control" placeholder="Tên của bạn: ">
			</div>
			<div class="form-group">
				<input v-model="email" type="email" class="form-control" placeholder="Email của bạn: ">
			</div>
			<div class="form-group">
				<input v-model="password" type="password" class="form-control" placeholder="Password: ">
			</div>
			<div class="form-group">
				<input v-model="passAgain" type="password" class="form-control" placeholder="Nhập lại mật khẩu password">
			</div>
			<div class="form-group">
				<input v-model="phoneNumber" type="tel" class="form-control" placeholder="Số điện thoại:">
			</div>
			<div class="form-group">
				<select v-model="gender" class="form-control">
					<option value="1">Nam</option>
					<option value="2">Nữ</option>
					<option value="0">Khác</option>
				</select>
			</div>
			<div class="d-flex justify-content-end">
				<button type="submit" class="btn btn-primary">
					<span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
					Đăng ký</button>
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
			fullName: "",
			email: "",
			password: "",
			passAgain: "",
			phoneNumber: "",
			gender: 1,
			errors: [],
			isLoading: false,
		};
	},
	methods: {
		validation: function () {
			if (
				this.fullName &&
				this.email &&
				this.password &&
				this.passAgain &&
				this.phoneNumber &&
				this.gender
			) {
				if (this.password == this.passAgain) {
					return true;
				} else {
					this.errors.push("Mật khẩu không trùng nhau.");
					return false;
				}
			} else {
				this.errors.push("Các ô không được để trống");
				return false;
			}
		},
		submit: function (e) {
			this.isLoading = true;
			if (this.validation()) {
				this.errors = "";
				userService
					.register(
						this.fullName,
						this.email,
						this.password,
						this.phoneNumber,
						this.gender
					)
					.then((user) => {
						user;
						this.isLoading = false;
						this.$router.push("/login");
					})
					.catch((err) => {
						console.log(err.response.data.errors);
						for (const key in err.response.data.errors) {
							this.errors.push(err.response.data.errors[key][0]);
						}
						this.isLoading = false;
					});
			}
			e.preventDefault();
		},
	},
};
</script>

<style>
</style>