<template>
<div class="about">
  <h1>About</h1>
  <p>Check out our  <router-link class="link" :to="{name: 'displayCards'}">Pokemon cards</router-link></p>

</div>
  
</template>

<script>
export default {

}
</script>

<style>
.about{
    text-align: center;
    text-decoration: none;
}
.link{
  text-decoration: none;
}

</style>