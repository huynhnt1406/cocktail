<template>
  <h3>hello detail page here</h3>
</template>

<script>
import axios from 'axios'
export default {
    props:['id']
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
            }
        }
    },
    created(){
        axios.get(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`)
            .then(res => console.log(res.data))
    }
    
}
</script>

<style>

</style>