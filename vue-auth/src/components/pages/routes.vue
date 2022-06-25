<template>
  <the-headersider></the-headersider>

  <section>
     
    
    
    <ul >
      <the-route
        v-for="route in routes"
        :key="route.id"
        :id="route.id"
        :name="route.name"
        :distance ="route.distance"
        :rate="route.rate"
        
      ></the-route>
    </ul>
    
   
  </section>
</template>

<script>
import TheRoute from "../../components/items/TheRoute.vue"

export default {
  components: {
    TheRoute
    
  },
  computed: {
    routes() {
      return this.$store.getters.routes;
    }

  },
 

  

 
  
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

