import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../components/Shop.vue'
import Checkout from '../views/Checkout'
import { nextTick } from 'vue'
const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    // component: () => import('../views/Checkout.vue')
    component: Checkout
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')

  },
  
  {
    path: '/example',
    name: 'Example',
    component: () => import('../views/Example.vue')

  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import('../views/Contact.vue')

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const oldScripts = [
  // 'oldjs/jquery.min.js',
  'oldjs/jquery-migrate-3.0.1.min.js',
  'oldjs/popper.min.js',
  'oldjs/bootstrap.min.js',
  'oldjs/jquery.easing.1.3.js',
  'oldjs/jquery.waypoints.min.js',
  'oldjs/jquery.stellar.min.js',
  'oldjs/owl.carousel.min.js',
  'oldjs/jquery.magnific-popup.min.js',
  'oldjs/aos.js',
  'oldjs/jquery.animateNumber.min.js',
  'oldjs/bootstrap-datepicker.js',
  'oldjs/scrollax.min.js',
  'oldjs/google-map.js',
  'oldjs/main.js'
]

router.beforeEach((to, from, next) => {
  let oldScript = document.createElement('script')
  oldScript.setAttribute('src', 'oldjs/jquery.min.js')
  document.head.appendChild(oldScript)


  setTimeout(() => {
    oldScripts.map(s => {
      let oldScript = document.createElement('script')
      oldScript.setAttribute('src', s)
      document.head.appendChild(oldScript)

    })

  }, 1000)
  next()

})
export default router
