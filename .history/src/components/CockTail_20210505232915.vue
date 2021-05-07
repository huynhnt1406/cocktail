<template >
    <div class="homepage">
        <h3>Cocktail Square 🍹</h3>
        <div class="list" v-for="cocktail in allCocktails" :key="cocktail.id">
            <img :src="cocktail.strDrinkThumb" :alt="cocktail.idDrink">
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
    height: 200px;
    width: 150px;
}
</style>