import {ref} from 'vue'
import axios from 'axios'


const fetchData =  () =>{
    const pokemons = ref([]);
    const id = ref(null);
    const imgArr = ref([]);

    let load = async () =>{
        try {
            
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
            pokemons.value = response.data.results
      
        } catch (error) {
            console.log(error)
          }
        }

    


        
        return {
            pokemons,
            id,
            load,
            imgArr
          }


    }


    export default fetchData;
    

 


  