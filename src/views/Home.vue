<template>
    <div class="home" v-if="showRegister" @click="showRegister = false">
        <h1 class='welcome'>Welcome</h1>
        <p>continue to <router-link class="link" to="/login">Login</router-link></p>
    </div>
    <Registration v-else />
    
  
</template>

<script>
import Registration from '../views/Registration.vue'
export default {
    components: {Registration},
    data(){
        return{
            showRegister: true
        }
    }

}
</script>

<style scoped>
.home{
    background-color: #e6f0e4;
    
    text-align: center;
    

}
.home p .link{
    text-decoration: none;
    color: #852081;
}
.welcome{
    display: flex;
    justify-content: center;
    font-size: 60px;
    
}

</style>