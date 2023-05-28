<template>
  <h1>Display Cards</h1>
  
  <div v-for="pokemon in pokemons" :key="pokemon.name">
    <h1>{{pokemon.name}}</h1>
    <p>{{ pokemons.indexOf(pokemon) + 1}}</p>
    <router-link :to="{name: 'displayCard', params: {id: pokemons.indexOf(pokemon) + 1}}">
      click
    </router-link>
  </div>
  
</template>

<script>
import {ref, onMounted} from 'vue'
import axios from 'axios'
export default {
  
  setup(){
    const pokemons = ref([]);
    const id = ref(null)

    const fetchData = async () =>{
      try {
        console.log("started here")
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        pokemons.value = response.data.results

        let arr = pokemons.value
        for(let i=0; i<arr.length; i++){
          console.log(arr[i].url)
          id.value = arr.indexOf(arr[i]) + 1
          console.log(id.value)
        }

        
      } catch (error) {
        console.log(error)
      }
    }

    onMounted(fetchData);


    return {
      pokemons,
      id
    }
  }
    
}
</script>

<style>

</style>