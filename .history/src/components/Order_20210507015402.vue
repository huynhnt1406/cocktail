<template>
  <div class="order-page">
    <div v-for="item in allItems" :key="item.product.id" class="order-header">
      <h3>{{item.product.strCategory}}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'Order',
  data(){
    return{
      products:[]
    }
  },
  computed : mapGetters(["allItems"]),
  methods:{
    getItems(){
      const {product} = Object.values(this.allItems)
      console.log(product)
    }
  },
  mounted(){
    this.getItems()
  }
}
</script>

<style>

</style>