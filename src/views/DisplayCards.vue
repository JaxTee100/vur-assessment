<template>
  <h1>Display Cards</h1>
  <div class="pokemon-container">
  <div class="pokemon-cards" v-for='pokemon in pokemonData' :key='pokemon.name' >
    <router-link class="link" :to="{name: 'displayCard', params: {id: pokemonData.indexOf(pokemon) + 1}}">
      <div >
        <h3>{{pokemon.name.toUpperCase()}}</h3>
        <img  :src="pokemon.spriteUrl"  alt="pokemon" />
      </div>
    </router-link>
    
  </div>
  </div>
  
  
  
</template>

<script>
import fetchData from '../composables/fetchData'
import {usePokemonImages} from '../composables/usePokemonImages'
export default {
  
  setup(){

    const {pokemons, id, load, imgArr} = fetchData();
    const {pokemonData, fetchPokemonData} = usePokemonImages()

    fetchPokemonData();
    load()

    console.log("pokemondata",pokemonData.value)
    

  
    return { pokemons, id, imgArr, pokemonData}
  }
    
}
</script>

<style scoped>
h1{
  text-align: center;
  color: #2c3442;
}
  .pokemon-container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    padding: 5px;

  }
  .pokemon-cards{
    border: 1px solid #edeff2;
    display: flex;
    justify-content: center;
    box-shadow: 1px 1px 1px #a3a19d, -1px -2px 4px #b9bec7;
    
  }

  .link{
    text-decoration: none;
    color: #616b7a;
  }

  

</style>