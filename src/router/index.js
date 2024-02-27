import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutView from '../views/AboutView.vue'
import ProductList from '../views/ProductList.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Checkout2 from '../views/Checkout2.vue'
import Payments from '../views/Payments.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product-list',
      name: 'product-list',
      component: ProductList
    },
    {
      path: '/product-details',
      name: 'product-details',
      component: ProductDetails
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/checkout2',
      name: 'checkout2',
      component: Checkout2
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payments
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
