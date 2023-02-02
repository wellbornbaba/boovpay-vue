import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ResetPassword from '../views/ResetPassword.vue'
import BvnVerification from '../views/BvnVerification.vue'
import NinVerification from '../views/NinVerification.vue'
import PhoneVerification from '../views/PhoneVerification.vue'
import TermsCondition from '../views/TermsCondition.vue'
import PolicyPrivacy from '../views/PolicyPrivacy.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/register',
			name: 'register',
			component: Register
		},
		{
			path: '/reset-password',
			name: 'resetpassword',
			component: ResetPassword
		},
		{
			path: '/bvn',
			name: 'bvn',
			component: BvnVerification
		},
		{
			path: '/nin',
			name: 'nin',
			component: NinVerification
		},
		{
			path: '/phone-verification',
			name: 'phone',
			component: PhoneVerification
		},
		{
			path: '/terms-and-condition',
			name: 'terms-and-condition',
			component: TermsCondition
		},
		{
			path: '/policy-and-privacy',
			name: 'policy-and-privacy',
			component: PolicyPrivacy
		}
	]
})

export default router
