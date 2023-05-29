import {ref } from 'vue';
import axios from 'axios';



export function usePokemonImages(){
    const pokemonData = ref([])


    const fetchPokemonData = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response => {
            const results = response.data.results;


            results.forEach(pokemon => {
                axios.get(pokemon.url)
                .then(response => {
                    const pokemonName = response.data.name
                    const spriteUrl = response.data.sprites.front_default;

                    pokemonData.value.push({name: pokemonName, spriteUrl})
                })
                .catch(error =>{
                    console.log('Error fetching pokemon details', error)
                });
            });
        })
        .catch(error => {
            console.log('Error fetching pokemon list:', error)
        })
    };
    return {pokemonData, fetchPokemonData}
}