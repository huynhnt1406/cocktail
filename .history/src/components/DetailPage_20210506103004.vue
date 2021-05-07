<template>
    <div class="cocktail-data">
       <h3>hllo {{id}}</h3>
    </div>
</template>

<script>
import axios from 'axios'
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
        axios.get(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`)
            .then(res => this.data = res.data)
    }
    
}
</script>

<style>

</style>