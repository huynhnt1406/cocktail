<template>
    <div class="cocktail-data">
        <img :src="data.strDrinkThumb" :alt="data.idDrink">
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
            .then(console.log(this.data))
            .then(err => console.log(err))
    }
    
}
</script>

<style>

</style>