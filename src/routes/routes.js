import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'
import LoginLayout from '@/pages/Layout/LoginLayout.vue'

import Accounts from '@/pages/Accounts.vue'
import AddAccount from '@/pages/AddAccount.vue'
import Profile from '@/pages/Profile.vue'
import Login from '@/pages/Login.vue'
import Terms from '@/pages/Terms.vue'
import PasswordChange from '@/pages/PasswordChange.vue'
import Notifications from '@/pages/Notifications.vue'

const routes = [
  {
    path: '/',
    component: LoginLayout,
    redirect: '/login',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'terms',
        name: 'Terms',
        component: Terms
      },
      {
        path: 'pwdchange',
        name: 'Change',
        component: PasswordChange
      }
    ]
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/accounts',
    children: [
      {
        path: 'accounts',
        name: 'Accounts',
        component: Accounts
      },
      {
        path: 'add',
        name: 'Add Account',
        component: AddAccount
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  }
]

export default routes
