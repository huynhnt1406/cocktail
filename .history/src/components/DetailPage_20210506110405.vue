<template>
    <div class="cocktail-data">
       <h3>hllo</h3>
    </div>
</template>

<script>
import fetch from 'node-fetch'
export default {
    props:['id'],
    data(){
        return{
            dataCocktail:[]
        }
    },
    async mounted(){
     const res =  await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17222`)
     const respData = await res.json()
     this.dataCocktail = respData.drinks
     console.log(this.dataCocktail)
  }
    
}
</script>

<style>

</style>