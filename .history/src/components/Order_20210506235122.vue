<template>
  <div class="order-page">
    <div v-for="item in allItems.product" :key="item.product.id" class="order-header">
      <h3>{{item.product.strCategory}}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'Order',
  computed : mapGetters(["allItems"]),
  methods:{
    getItems(){
      console.log(this.allItems)
    }
  },
  mounted(){
    this.getItems()
  }
}
</script>

<style>

</style>