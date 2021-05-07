<template>
    <div class="cocktail-data">
       <div class="cocktail-details" v-for="ele in dataCocktail" :key="ele.id">
            <div class="coctail-img">
                <img :src="ele.strDrinkThumb" :alt="ele.idDrink">
                <div class="orderButton">
                    <a-button @click="addToCart()"  type="danger" >
                        Order now
                    </a-button>
                </div>
            </div>
            <div class="cocktail-info">
                <div class="elements">
                    <h1><a-icon type="info-circle" />Information</h1>
                        <h4>Type  : {{ele.strAlcoholic}}</h4>
                        <h4>Glass : {{ele.strGlass}}</h4>
                        <h4>Category : {{ele.strCategory}}</h4>
                    <h1><a-icon type="deployment-unit" />Ingredients</h1>
                        <h4>{{ele.strIngredient1}}</h4>
                        <h4>{{ele.strIngredient2}}</h4>
                        <h4>{{ele.strIngredient3}}</h4>
                        <h4>{{ele.strIngredient4}}</h4>
                        <h4>{{ele.strIngredient5}}</h4>
                    <h1><a-icon type="control" />Measurement</h1>
                        <h4>{{ele.strMeasure1}}</h4>
                        <h4>{{ele.strMeasure2}}</h4>
                        <h4>{{ele.strMeasure3}}</h4>
                    <h1><a-icon type="question-circle" />How To Make ?</h1>
                        <h4>{{ele.strInstructions}}</h4>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
import fetch from 'node-fetch'
const key = 'updatable';
export default {
    props:['id'],
    data(){
        return{
            dataCocktail:[]
        }
    },
    methods:{
        addToCart(){
            this.$store.dispatch('addProductToCart',{
                product:this.dataCocktail,
                quantity:1
            })
            this.$message.loading({ content: 'Ordering...', key });
                setTimeout(() => {
                    this.$message.success({ content: 'Ordered!', key, duration: 2 });
                }, 1000);
            this.$router.path({path:'/yourorder'})
        },
    },
    async mounted(){
     const res =  await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`)
     const respData = await res.json()
     this.dataCocktail = respData.drinks
     console.log(this.dataCocktail)
  }
    
}
</script>

<style>
.cocktail-details .coctail-img img{
    height: 500px;
    width: 500px;
}
.cocktail-details .coctail-img {
    position: relative;
}
.cocktail-details{
    display: flex;
}
.cocktail-details .coctail-img{
    flex:0.5;
}
.cocktail-data{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cocktail-info{
    padding-left:20px;
}
.cocktail-info h4{
    margin-left:20px;
}
.orderButton{
    position: absolute;
    bottom: 0;
}
.elements{
    padding:10px;
}
</style>