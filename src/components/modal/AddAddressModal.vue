<template>
	<div class="modal fade" id="addAddressModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Thêm địa chỉ</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body text-left">
					<div class="form-group">
						<label for="note">Tỉnh:</label>
						<select v-model="citySelected" @change="fetchDistricts" class="custom-select">
							<option v-for="city in cities" :key="city.code" :value="{code: city.code, name: city.name}">{{city.name}}</option>
						</select>
					</div>

					<div class="form-group">
						<label for="note">Thành phố:</label>
						<select v-model="districtSelected" @change="fetchWards" class="custom-select">
							<option v-for="district in districs" :key="district.code" :value="{code: district.code, name: district.name}">{{district.name}}</option>
						</select>
					</div>

					<div class="form-group">
						<label for="note">Phường, xã:</label>
						<select v-model="wardSelected" class="custom-select">
							<option v-for="ward in wards" :key="ward.code">{{ward.name}}</option>
						</select>
					</div>

					<div class="form-group">
						<label for="note">Địa chỉ cụ thể</label>
						<textarea v-model="detail" class="form-control" id="note" rows="3"></textarea>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<button @click="submit" type="button" class="btn btn-primary">
						<span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
						OK</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { addressService, userService } from "../../services";

export default {
	data() {
		return {
			cities: [],
			districs: [],
			wards: [],
			citySelected: {},
			districtSelected: {},
			wardSelected: {},
			detail: "",
			err: "",
			isLoading: false,
		};
	},
	methods: {
		fetchCites() {
			addressService
				.getCities()
				.then((result) => {
					this.cities = result.data;
				})
				.catch((err) => {
					console.log(err.response);
				});
		},
		fetchDistricts() {
			this.districs = [];
			addressService
				.getDistricts(this.citySelected.code)
				.then((result) => {
					this.districs = result.data;
				})
				.catch((err) => {
					console.log(err.response);
				});
		},
		fetchWards() {
			this.wards = [];
			addressService
				.getWards(this.districtSelected.code)
				.then((result) => {
					this.wards = result.data;
				})
				.catch((err) => {
					console.log(err.response);
				});
		},
		validation() {
			if (
				this.citySelected &&
				this.districs &&
				this.wardSelected &&
				this.detail
			) {
				return true;
			} else {
				return false;
			}
		},
		submit() {
			this.isLoading = true;
			if (this.validation()) {
				addressService
					.addAddress(
						userService.auth().access_token,
						this.citySelected.name,
						this.districtSelected.name,
						this.wardSelected,
						this.detail
					)
					.then((result) => {
						result;
						window.location.href = "/cart";
						this.isLoading = false;
					})
					.catch((err) => {
						this.isLoading = false;
						console.log(err.response);
					});
			} else {
				this.err = "Vui lòng kiểm tra lại thông tin";
			}
		},
	},
	created() {
		this.fetchCites();
	},
};
</script>

<style>
</style>