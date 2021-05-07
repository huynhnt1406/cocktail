<template>
  <div class="order-page">
    <div v-for="(item, index) in cardItems" :key="index" class="order-header">
      <h3>{{item.product[0].strGlass}}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'Order',
  computed : mapGetters(["allItems"]),
  data(){
    return{
      cardItems:[]
    }
  },
  methods:{
    getItems(){
      this.cardItems = this.allItems
      console.log(this.cardItems)
    }
  },
  mounted(){
    this.getItems()
  }
}
</script>

<style>

</style>