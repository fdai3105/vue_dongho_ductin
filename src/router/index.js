import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Brand from '../views/Brand'
import Category from '../views/Category'
import ProductDetail from '../views/ProductDetail'
import About from '../views/About'
import Cart from '../views/Cart'
import Login from ''

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/',
    name: 'About',
    component: About,
  },
  {
    path: '/brand/:name',
    name: 'Brand',
    component: Brand,
  },
  {
    path: '/category/:name',
    name: 'Category',
    component: Category,
  },
  {
    path: '/product/:name',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
  }, {}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
