<template>
  <a-layout id="components-layout-demo-side" theme="light"  style="min-height: 100vh">
    <a-layout-sider style="background-color:white" v-model="collapsed" collapsible>
      <img style="height:64px ; width:50%" src="https://i.pinimg.com/originals/fd/3e/53/fd3e533305c578157dbaf393b76ac1ee.jpg" alt="">
      <a-menu theme="light" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="menu" />
          <span><router-link class="link" to="/">Alcoholic</router-link></span>
        </a-menu-item>
        <a-menu-item key="2">
           <a-icon type="shopping-cart" />
          <span><router-link class="link"  to="/yourorder">Your Order</router-link></span>
        </a-menu-item>
           <a-menu-item key="3">
           <a-icon type="info-circle" />
          <span><router-link class="link"  to="/aboutus">About us</router-link></span>
        </a-menu-item>
           <a-menu-item key="4">
           <a-icon type="safety-certificate" />
          <span><router-link class="link"  to="/policyandprivacy">Policy and Privacy</router-link></span>
        </a-menu-item>
      </a-menu>
      <img style="height:62% ; width:100%" src="https://www.gobourbon.com/wp-content/uploads/2019/03/EFCCF7C6-0A6F-4658-83B6-877007B0A1AC-751x1024.jpeg" alt="">
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" >
        <SearchBar/>
      </a-layout-header>
      <a-layout-content>
        <div class="cocktail-lists" :style="{ padding:'24px',  background: '#fff', minHeight: '360px' }">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer class="footer" :style="{height: '5vh',color:'white' ,background: '#002140', textAlign:'center'}">
        CockTail Store ©2021 Created by nthuynh
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import SearchBar from './components/SearchBar'
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  components:{
    SearchBar
  }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
#components-layout-demo-side{
  background-color: red;
}
.cocktail-lists{
  overflow-y: scroll;
  height:84vh;
}
.footer{
  background-color: #002140;
}
.link{
  color:black;
}
</style>
