<template >
    <div class="homepage">
        <div class="cocktail-list">
            <div class="singlecocktail" v-for="cocktail in allCocktails" :key="cocktail.id">
                <div class="each-cocktail">
                    <div class="cocktail-img">
                        <img :src="cocktail.strDrinkThumb" :alt="cocktail.idDrink">
                    </div>
                    <div class="cocktail-detail">
                        <h3>🍹 {{cocktail.strCategory}}</h3>
                        <p><i class="fa fa-money" aria-hidden="true">{{money}}</i></p>
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
    data(){
        return{
            money:20
        }
    },
    computed: mapGetters(["allCocktails"]),
    created(){
        this.fetchCocktail()
    },
    methods:{
        ...mapActions(["fetchCocktail"]),
        randomMoney(){
            this.money = this.money + Math.trunc(Math.random() * 100)
            console.log(this.money)
        }
    },
    mounted(){
        this.randomMoney()
    }
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
.singlecocktail {
    height: 200px;
    width: 150px;
    margin:5px;
}
.cocktail-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>