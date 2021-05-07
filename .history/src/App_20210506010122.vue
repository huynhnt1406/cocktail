<template>
  <a-layout id="components-layout-demo-side" theme="light"  style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="light" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <span>🍹</span>
          <span>Alcoholic</span>
        </a-menu-item>
        <a-menu-item key="2">
           <span>🍹</span>
          <span>Alcoholic</span>
        </a-menu-item>
           <a-menu-item key="3">
           <span>🍹</span>
          <span>Alcoholic</span>
        </a-menu-item>
           <a-menu-item key="4">
           <span>🍹</span>
          <span>Alcoholic</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" >
        <SearchBar/>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Cocktail Square 🍹</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="cocktail-lists" :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <CockTail/>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        CockTail Store ©2018 Created by nthuynh
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import SearchBar from './components/SearchBar'
import CockTail from './components/CockTail'
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  components:{
    CockTail,
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
  height: 75vh;
}
</style>
