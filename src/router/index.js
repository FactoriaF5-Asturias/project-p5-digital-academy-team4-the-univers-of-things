import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
<<<<<<< HEAD
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
  path: '/register',
  name: 'register',
  component: () => import('../views/RegisterView.vue')
},

=======
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView },
>>>>>>> feat/user-directory
    {
      path: '/admin',
      component: () => import('../views/AdminDashboardView.vue'),
<<<<<<< HEAD
      meta: {
        requiresAuth: true,
        role: 'admin',
        hideHeader: true
      }
    },

    {
      path: '/user',
      name: 'user-dashboard',
      component: () => import('../views/UserDashboardView.vue'),
      meta: {
        requiresAuth: true,
        hideHeader: true
      }
    },
   {
  path: '/user/favorites',
  name: 'favorites',
  component: () => import('../views/FavoritesView.vue'),
  meta: {
    requiresAuth: true,
    hideHeader: true
      }
    }, 
    {
  path: '/user/settings',
  name: 'user-settings',
  component: () => import('../views/UserSettingsView.vue'),
  meta: {
    requiresAuth: true,
    hideHeader: true
=======
      // Al ponerlo aquí, todos los hijos lo heredan
      meta: { requiresAuth: true, hideHeader: true }, 
      children: [
        {
          path: '', 
          name: 'admin-dashboard',
          component: () => import('../views/DashboardHome.vue')
        },
        {
          path: 'users',
          name: 'user-directory',
          component: () => import('../views/UserDirectoryView.vue')
        },
        {
          path: 'featured',
          name: 'featured-management',
          component: () => import('../views/FeaturedManagementView.vue')
        }
      ]
>>>>>>> feat/user-directory
    }
   },
  ]
})

export default router