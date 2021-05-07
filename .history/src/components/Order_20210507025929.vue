<template>
  <div class="order-page">
    <div class="order-header">
      <h3>Your shopping basket</h3>
      <a-badge :count="cardItems.length">
        <a-icon type="shopping-cart" :style="{fontSize:'30px'}" />
      </a-badge>
    </div>
    <div v-for="(item, index) in cardItems" :key="index" class="order-header">
      <div class="item">
          <div class="item-img">
            <img :src="item.product[0].strDrinkThumb" :alt="item.product[0].idDrink">
              <div class="item-info">
                <h3>Type : {{item.product[0].strAlcoholic}}</h3>
                <h3>Drink : {{item.product[0].strDrink}}</h3>
                <h3>Glass : {{item.product[0].strGlass}}</h3>
              </div>
          </div>
          <div class="item-actions">
            <a-button class="m-2"   type="danger" >
              Remove
            </a-button>
          </div>
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
.item-img img{
  height: 100px;
  width:100px;
  margin:10px;
}
.item{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-img{
  display: flex;
  justify-content: center;
  align-items: center;
}
.order-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>