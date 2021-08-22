import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Blog from '../components/Blog.vue'
import SubCategory from '../components/SubCategory.vue'
import Article from '../components/Article.vue'
import Result from '../components/Result.vue'
import Category from '../components/Category.vue'
import NotFound from '../components/NotFound.vue'
import Privacy from '../components/Privacy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/blog/home',
    name: 'Blog',
    component: Blog
  },

  {
    path: '/blog/details',
    name: 'SubCategory',
    component: SubCategory
  },

  {
    path: '/blog/article',
    name: 'Article',
    component: Article
  },

  {
    path: '/search',
    name: 'Result',
    component: Result
  },

  {
    path: '/blog/subcategories',
    name: 'ShowSubs',
    component: Category
  },
  {
    path: '/privacy',
    name: 'Privacy Policy',
    component: Privacy
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
    meta: {
      requiresAuth: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
