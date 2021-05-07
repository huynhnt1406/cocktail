import Vue from 'vue'
import VueRouter from 'vue-router'
import CockTail from '../components/CockTail'
const routes = [
    {
        path:'/',
        name:'CockTail',
        component:CockTail
    }
]
Vue.use(VueRouter)

export default new VueRouter({
    routes,
    mode:'history'
})