import axios from 'axios'

const state = {
    cocktailLists: [],
}
const getters = {
    allCocktails : state => state.cocktailLists
}
const actions = {
    async fetchCocktail({commit}){
        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=e`)
        commit('getCocktail', res.data.drinks)
        console.log(res.data.drinks)
    }
}

const mutations = {
    getCocktail : (state, cocktailLists) => state.cocktailLists = cocktailLists
}

export default {
    state,getters,actions,mutations
}