import Vue from 'vue'
import VueRouter from 'vue-router'
import CockTail from '../components/CockTail'
import DetailPage from '../components/DetailPage'
import Order from '../components/Order'
import AboutUs  from '../components/AboutUs'
import PolicyandPrivacy from '../components/PolicyandPrivacy'
const routes = [
    {
        path:'/',
        name:'CockTail',
        component:CockTail
    },
    {
        name:'DetailPage',
        component:DetailPage,
        props:true
    },
    {
        path:'/yourorder',
        name:'Order',
        component:Order,
    },
    {
        path:'/aboutus',
        name:'AboutUs',
        component:AboutUs,
    },
    {
        path:'/policyandprivacy',
        name:'PolicyandPrivacy',
        component:PolicyandPrivacy,
    },
]
Vue.use(VueRouter)

export default new VueRouter({
    routes,
    mode:'history'
})