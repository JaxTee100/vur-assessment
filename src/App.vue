<template>
  <nav>
    <router-link to='/'>Home</router-link>
    <router-link to='/about'>About</router-link>
    <router-link to='/jobs'>Jobs</router-link>
    
  </nav>
  
  <router-view/>
</template>

<script>

export default{
  setup() {
    
  },
}
</script>


<style>
body{
  background-color: #e6f0e4;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #e6f0e4;
}

nav {
  padding: 30px;
  border: 1px solid #f0eeeb;
  display: flex;
  justify-content: flex-end;
  box-shadow: 1px 1px 1px #d2e6cf;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: #a3a19d;
  margin-left: 40px;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
  border: 1px solid #d2e6cf;

  
}
</style>
