<template >
    <div class="homepage">
        <h3>Cocktail Square 🍹</h3>
        <div class="list" v-for="cocktail in allCocktails" :key="cocktail.id">
            <div class="each-cocktail">
                <div class="cocktail-img">
                     <img :src="cocktail.strDrinkThumb" :alt="cocktail.idDrink">
                </div>
                <div class="cocktail-detail">
                    <h3>{{list.strIngredient1}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name:'Cocktail',
    computed: mapGetters(["allCocktails"]),
    created(){
        this.fetchCocktail()
    },
    methods:{
        ...mapActions(["fetchCocktail"])
    },
}
</script>
<style >
.homepage{
    font-family: "Poppins",sans-serif;
}
.list img{
    height: 150px;
    width: 150px;
}
.list{
    display: flex;
    flex-wrap: wrap;
}
</style>