<template>
  <div class="order-page">
    <div v-for="(item, index) in cardItems" :key="index" class="order-header">
      <div class="item-img">
        <img :src="item.product[0].strDrinkThumb" :alt="item.product[0].idDrink">
      </div>
      <div class="item-info">
        <h3>{{item.product[0].strAlcoholic}}</h3>
        <h3>{{item.product[0].strDrink}}</h3>
        <h3>{{item.product[0].strGlass}}</h3>
      </div>
      <div class="item-actions">
        <a-button  type="primary" >
          Increase
        </a-button>
        <a-button  type="primary" ghost >
          Decrease
        </a-button>
        <a-button   type="danger" >
          Remove
        </a-button>
      </div>
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