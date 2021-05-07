<template>
    <div class="cocktail-data">
       <h3>hllo {{id}}</h3>
    </div>
</template>

<script>
import fetch from 'node-fetch'
export default {
    props:['id'],
    data(){
        return{
            data:{
                idDrink:'',
                strAlcoholic:'',
                strCategory:'',
                strGlass:'',
                strIngredient1:'',
                strIngredient2:'',
                strIngredient3:'',
                strIngredient4:'',
                strIngredient5:'',
                strDrinkThumb:''
            }
        }
    },
    created(){
       fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17222`, {
           method:'GET'
       }).then(res => res.json())
         .then(data => console.log(data.drinks))
    }
    
}
</script>

<style>

</style>