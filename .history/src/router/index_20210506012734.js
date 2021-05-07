import Vue from 'vue'
import VueRouter from 'vue-router'
import CockTail from '../components/CockTail'
import DetailPage from '../components/DetailPage'
const routes = [
    {
        path:'/',
        name:'CockTail',
        component:CockTail
    },
    {
        path:'/detailpage/:id',
        name:'DetailPage',
        component:DetailPage
    },
]
Vue.use(VueRouter)

export default new VueRouter({
    routes,
    mode:'history'
})