<template>
	
	<!-- <SlotDialog 
		:openDialog="openDialog"
		@closeDialog="openDialog=false"
		
	>
		<template v-slot:default="slotProps">
			<h1>{{slotProps.dialogTitle}}</h1>
			{{message}}
		</template>
	</SlotDialog> -->
	<Dialog 
		:message="message"
		:openDialog="openDialog"
		@closeDialog="openDialog=false"
	/>
		<h3 class="mb-4 billing-heading">{{title}}</h3>

    <form action="#" class="billing-form">
			<p v-if="errors.length">
    		<b>Please correct the following error(s):</b>
    		<ul>
      		<li class="error" v-for="error in errors" :key="error">{{ error }}</li>
    		</ul>
  		</p>
			<div class="row align-items-end">
				<div class="col-md-6">
					<div class="form-group">
						<label for="firstname">First Name</label>
						<input v-focus v-model="formInfo.firstName" type="text" class="form-control" placeholder="">
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="lastname">Last Name</label>
						<input v-model="formInfo.lastName" type="text" class="form-control" placeholder="">
					</div>
				</div>
				<div class="w-100"></div>
				<div class="col-md-12">
					<div class="form-group">
						<label for="country">State / Country</label>
						<div class="select-wrap">
							<div class="icon"><span class="ion-ios-arrow-down"></span></div>
							<select v-model="formInfo.country" name="" id="" class="form-control">
								<option value="VN">Viet Nam</option>
								<option value="FR">France</option>
								<option value="IT">Italy</option>
								<option value="PH">Philippines</option>
								<option value="KR">South Korea</option>
								<option value="HK">Hongkong</option>
								<option value="JP">Japan</option>
							</select>
								<span>Selected: {{ selected }}</span>

						</div>
					</div>
				</div>
				<div class="w-100"></div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="streetaddress">Street Address</label>
						<input v-model="formInfo.street" type="text" class="form-control" placeholder="House number and street name">
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<input v-model="formInfo.apartment" type="text" class="form-control" placeholder="Appartment, suite, unit etc: (optional)">
					</div>
				</div>
				<div class="w-100"></div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="towncity">Town / City</label>
						<input v-model="formInfo.city" type="text" class="form-control" placeholder="">
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="postcodezip">Postcode / ZIP *</label>
						<input v-model="formInfo.zipCode" type="text" class="form-control" placeholder="">
					</div>
				</div>
				<div class="w-100"></div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="phone">Phone</label>
						<input v-model="formInfo.phone" type="text" class="form-control" placeholder="">
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="emailaddress">Email Address</label>
						<input v-model="formInfo.email" type="text" class="form-control" placeholder="">
					</div>
				</div>
				<div class="w-100"></div>
				<div class="col-md-12">
					<div class="form-group mt-4">
						<div class="radio">
							<label class="mr-3"><input type="radio" value="createAccount" name="optradio" v-model="formInfo.picked"> Create an Account? </label>
							<label><input type="radio" value="otherAddress" name="optradio" v-model="formInfo.picked"> Ship to different address</label>
							<span>{{picked}}</span>
						</div>
					</div>
				</div>
			</div>
			<p><input @click="submitForm" value="Submit" class="btn btn-primary py-3 px-4" /></p>
		</form><!-- END -->
</template>

<script>
import http from "@/services/http-common";
// import SlotDialog from "@/components/SlotDialog"
import Dialog from "@/components/Dialog"
const initialData = {
	firstName: '',
	lastName: '',
	country: '',
	street: '',
	city: '',
	zipCode: '',
	email: '',
	picked: '',
}
export default {
	components: {
		Dialog,
		// SlotDialog
	},
	props: {
		title: String,
	},
	directives: {
		focus: {
			mounted(el) {
				el.focus()
			}
		}
	},
  data() {
		return {
			formInfo: { ...initialData },
			errors:[],
			message: '',
			openDialog: false,
		}
	},
	methods: {
		async submitForm() {
			if (!this.checkForm()) {
				this.handleDialog('Please fix the errors read on top of the page')
				return;
			} 			
			this.errors = []
			try {
			const response = await http.post('http://localhost:8081/api/client', this.formInfo)
				this.handleDialog(response.data.message)
				this.formInfo = initialData;
			} catch(err){
				this.handleDialog(err.message)
			}
		},
		
		checkForm: function () {
			const { firstName, lastName, phone, email } = this.formInfo;
			if (firstName && lastName && phone && email) {
				return true;
			}

			this.errors = [];

			if (!firstName || !lastName) {
				this.errors.push('Full name required.');
			}
			if (!email) {
				this.errors.push('Email required.');
			}
			if (!phone) {
				this.errors.push('Phone required.');
			}
			return false;
		},
		handleDialog(msg, val=true) {
			this.message = msg;
			this.openDialog = val;
		},
		
	}
}
</script>

<style >
	.error {
		color: red
	}

	.modal-backdrop {
    z-index: 1040 !important;
}

	.modal-content {
    margin: 2px auto;
    z-index: 1100 !important;
}
</style>