<template>
<div class="row">
	<div class="col-md-12 ftco-animate">
		<div class="cart-list">
			<table class="table">
				<thead class="thead-primary">
					<tr class="text-center">
						<th>&nbsp;</th>
						<th>&nbsp;</th>
						<th>Product name</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="product in wishlist"
						:key="product"
						class="text-center">
						<td class="product-remove"><a @click="changeQuantity({id: product.id, quantity: 0 })"><span class="ion-ios-close"></span></a></td>
						
						<td class="image-prod"><div class="img" :style="{backgroundImage:'url('+ product.imagePath +')'}"></div></td>
						<!-- <td class="image-prod"><div class="img" style="background-image:url(images/product-3.jpg);"></div></td> -->
						
						<td class="product-name">
							<h3>{{product.name}}</h3>
							<p>Far far away, behind the word mountains, far from the countries</p>
						</td>
						
						<td class="price">${{product.price}}</td>
						
						<td class="quantity">
							<div class="input-group mb-3">
								<input
									type="number"
									:value="product.quantity"
									@change="changeQuantity({ id: product.id, quantity: parseInt($event.target.value) })"
									name="quantity" class="quantity form-control input-number" min="1" max="100">
							</div>
						</td>
						
						<td class="total">${{product.quantity * product.price}}</td>
					</tr><!-- END TR-->
				</tbody>
			</table>
		</div>
	</div>
</div>
  
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { ADD_PRODUCT_TO_CART, CHANGE_WISHLIST_SIZE} from '@/store/actions.type.js'
export default {
  computed: {
		// ...mapGetters(['wishlist']),
	},
	methods:{
    // ...mapMutations([ADD_PRODUCT_TO_CART, CHANGE_WISHLIST_SIZE]),
    // ...mapMutations({
    //   addProduct: ADD_PRODUCT_TO_CART,
    //   changeQuantity: CHANGE_WISHLIST_SIZE,
    // }),
	}
}
</script>