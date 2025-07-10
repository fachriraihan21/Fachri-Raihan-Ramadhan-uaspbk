import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Product from '../components/Product.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Checkout from '../components/Checkout.vue' 
import Cart from '../components/Cart.vue' 

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/product', name: 'Product', component: Product },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  // { path: '/cart', name: 'Cart', component: Cart },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
