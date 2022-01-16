<template>
  <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
    <div class="cart-total mb-3">
      <h3>Coupon Code</h3>
      <p>Enter your coupon code if you have one</p>
      <form action="#" class="info">
        <div class="form-group">
          <label for="">Coupon code</label>
          <input v-model="coupon" type="text" class="form-control text-left px-3" placeholder="">
        </div>
      </form>
    </div>
    <p><a @click="setCouponCode(coupon)" class="btn btn-primary py-3 px-4">Apply Coupon</a></p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { SET_COUPON_CODE } from '@/store/actions.type.js'

export default {
  data() {
		return {
      coupon: '',
		}
	},
  
	methods:{
    ...mapMutations([SET_COUPON_CODE]),
    ...mapMutations({
      setCouponCode: SET_COUPON_CODE,
    }),
    
  }
  
}
</script>