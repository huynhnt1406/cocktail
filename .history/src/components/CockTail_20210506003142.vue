<template >
    <div class="homepage">
        <div class="cocktail-list">
            <div class="singlecocktail" v-for="cocktail in allCocktails" :key="cocktail.id">
                <div class="each-cocktail">
                    <div class="cocktail-img">
                        <img :src="cocktail.strDrinkThumb" :alt="cocktail.idDrink">
                    </div>
                    <div class="cocktail-detail">
                        <h3>Category : {{cocktail.strCategory}}</h3>
                    </div>
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
.singlecocktail img{
    height: 150px;
    width: 150px;
}
</style>