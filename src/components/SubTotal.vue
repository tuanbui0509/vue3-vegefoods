<template>
  <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
    <div class="cart-total mb-3">
      <h3>Cart Totals</h3>
      <p class="d-flex">
        <span>Subtotal</span>
        <span>$20.60</span>
      </p>
      <p class="d-flex">
        <span>Delivery</span>
        <span>$0.00</span>
      </p>
      <p class="d-flex">
        <span>Discount</span>
        <span>${{discount}}</span>
      </p>
      <hr>
      <p class="d-flex total-price">
        <span>Total</span>
        <span>$17.60</span>
      </p>
    </div>
    <p><a href="checkout.html" class="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
  </div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue'
// import { useCoupon } from '@/compositions/subTotal.js'
const useCoupon = (couponCode) => {
  let discountValue = 0
  
  switch(couponCode.toUpperCase()) {
    case 'DISCOUNT-5':
      discountValue = 5
      break
    case 'DISCOUNT-10':
      discountValue = 10
      break
  }
  return discountValue
  // let discountValue = ref(0)
  // switch(couponCode.toUpperCase()) {
  //   case 'DISCOUNT-5':
  //     discountValue.value = 5
  //     break
  //   case 'DISCOUNT-10':
  //     discountValue.value = 10
  //     break
  // }
  // return discountValue
}
export default {
  name: 'SubTotal',
  props: ['couponCode'],
    
  
  setup(props) {
    let discount = ref(0)
    // watch(() => props.couponCode, (val, prevVal) => {
    //   const discountValue = useCoupon(val)
    //   discount.value = discountValue
    // })
    watchEffect(() =>  {
      const discountValue = useCoupon(props.couponCode)
      discount.value = discountValue
    })
    return { discount }
  },
}
</script>