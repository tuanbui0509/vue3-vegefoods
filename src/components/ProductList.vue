<template>
	<section class="ftco-section">
    	<div class="container">
				<div class="row justify-content-center mb-3 pb-3">
          <div class="col-md-12 heading-section text-center ftco-animate">
          	<span class="subheading">Featured Products</span>
            <h2 class="mb-4">Our Products</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>   		
    	</div>
    	<div class="container">
    		<div class="row">
    			<div v-for="p in productList" :key="p.id" class="col-md-6 col-lg-3 ftco-animate">
    				<div class="product">
    					<a href="#"  class="img-prod"><img class="img-fluid" :src="p.imagePath" alt="Colorlib Template">
    						<span class="status">{{p.status}}%</span>
    						<div class="overlay"></div>
    					</a>
    					<div class="text py-3 pb-4 px-3 text-center">
    						<h3><a href="#">{{p.name}}</a></h3>
    						<div class="d-flex">
    							<div class="pricing">
		    						<p class="price"><span class="mr-2 price-dc">{{formatNumber(p.price)}}</span><span class="price-sale">{{formatNumber(p.discountPrice)}}</span></p>
		    					</div>
	    					</div>
	    					<div class="bottom-area d-flex px-3">
	    						<div class="m-auto d-flex">
	    							<a class="add-to-cart d-flex justify-content-center align-items-center text-center">
	    								<span><i class="ion-ios-menu"></i></span>
	    							</a>
	    							<a class="buy-now d-flex justify-content-center align-items-center mx-1" data-toggle="popover" data-content="1 item added to cart">
	    								<span  @click="clickAddingToCart(p)"><i  class="ion-ios-cart"></i></span>
	    								<!-- <span><i @click="addToCart(p)" class="ion-ios-cart"></i></span> -->
	    							</a>

	    							<a href="#" class="heart d-flex justify-content-center align-items-center ">
	    								<span><i class="ion-ios-heart"></i></span>
	    							</a>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>
</template>

<script>
import $ from "jquery";

import { 
	mapActions,
 	mapGetters,
  mapMutations,
	mapState
} from "vuex";
import {
	LOAD_PRODUCT_LIST,
	ADD_PRODUCT_TO_CART,
} from '@/store/actions.type.js'
export default {
  name: 'ProductList',
	created() {
      this.LOAD_PRODUCT_LIST();
      // this.loadProductList();
  },
	computed: {
		// ...mapGetters(['productList']),
		// ...mapState({productList: state => state.products.productList}),
		productList() {
			return this.$store.state.products.productList
		}
	},
	methods: {
		...mapActions([LOAD_PRODUCT_LIST]),
		// ...mapActions({
		// 	loadProductList: LOAD_PRODUCT_LIST,
		// 	}),
			...mapMutations([ADD_PRODUCT_TO_CART]),
			// ...mapMutations({
			// 	addToCart: ADD_PRODUCT_TO_CART
			// }),
		
		formatNumber(number) {
			return new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2 }).format(number)
		},

		clickAddingToCart(product) {
			this.ADD_PRODUCT_TO_CART(product)
			// this.addToCart(product);

			$('[data-toggle="popover"]').popover().click(function () {
        setTimeout(function () {
            $('.popover').fadeOut('slow');
        }, 3000);
			});
		}
	},
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
