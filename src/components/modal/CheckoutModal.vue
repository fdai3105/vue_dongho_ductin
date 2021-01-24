<template>
	<!-- Modal -->
	<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Thanh toán</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body text-left">
					<div v-if="err">
						<div class="alert alert-danger" role="alert">
							{{ err }}
						</div>
					</div>

					<div class="form-group">
						<label for="note">Note:</label>
						<textarea v-model="note" class="form-control" id="note" rows="3"></textarea>
					</div>

					<div class="form-group">
						<label class="w-100" for="address">Address:</label>
						<div v-for="item in address" :key="item" id="address" class="px-4 custom-control custom-radio">
							<input v-model="addressSelected" :value="item.id" type="radio" :id="`customRadio`+item.id" class="custom-control-input">
							<label class="custom-control-label" :for="`customRadio`+item.id">
								{{ item.city }}, {{ item.district}}, {{item.ward}}, {{item.address}}
							</label>
						</div>
						<button type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#addAddressModal">
							Thêm địa chỉ
						</button>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<button @click="checkout" type="button" class="btn btn-primary">OK</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { userService, cartService } from "../../services";

export default {
	data() {
		return {
			address: [],
			note: "",
			addressSelected: null,
			err: "",
		};
	},
	methods: {
		fetchAddress() {
			userService
				.getAddress(userService.auth().access_token)
				.then((result) => {
					this.address = result.data;
				})
				.catch((err) => {
					console.log(err.response);
				});
		},
		checkout() {
			if (!this.addressSelected) {
				this.err = "Vui lòng kiểm tra lại thông tin";
				return;
			}
			cartService
				.checkout(
					userService.auth().access_token,
					this.note,
					this.addressSelected
				)
				.then((result) => {
					result;
					window.location.href = "/cart";
				})
				.catch((err) => {
					console.log(err.response);
				});
		},
	},
	created() {
		this.fetchAddress();
	},
};
</script>

<style>
</style>