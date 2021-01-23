import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Brand from '../views/Brand'
import Category from '../views/Category'
import ProductDetail from '../views/ProductDetail'
import About from '../views/About'

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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
