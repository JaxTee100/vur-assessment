<template>
  <div class="display-card">
    
    <h1>{{ pokemonName }}</h1>
    <img :src="pokemonImages" alt="">
    <h2>Abilities:</h2>
   
    <p>{{abilityOne}}, {{abilityTwo}}</p>
    
    
  </div>
  
</template>

<script>
import {ref, onMounted} from 'vue'
import axios from 'axios'
export default {
  props: ['id'],
  
  setup(props){
    const pokemons = ref(null);
    const pokemonImages = ref(null)
    const pokemonName = ref(null)
    const abilityOne = ref(null)
    const abilityTwo = ref(null)

    const fetchData = async () =>{
      try {
        console.log("started here")
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+props.id);
        console.log("response", response.data.abilities[0].ability.name)
        pokemons.value = response.data.results
        pokemonImages.value = response.data.sprites.front_default
        pokemonName.value = response.data.species.name.toUpperCase()
        abilityOne.value = response.data.abilities[0].ability.name.toUpperCase()
        abilityTwo.value = response.data.abilities[1].ability.name.toUpperCase()
        

        

        
      } catch (error) {
        console.log("api specific error", error)
      }
    }

    onMounted(fetchData);


    return {
      pokemons,
      pokemonImages,
      pokemonName,
      abilityOne,
      abilityTwo
    }
  }
    
}
</script>

<style>
.display-card {
  box-shadow: 1px 1px 1px grey;
}
.display-card h1{
  color: #fcfafa;
  text-shadow: 1px 1px 1px grey;
}

.display-card img{
  width: 200px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 4px 1px 1px grey;
}
.display-card p{
  color: crimson;
}

</style>