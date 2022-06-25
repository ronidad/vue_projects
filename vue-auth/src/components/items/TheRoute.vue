<template>
    <base-card>
    <h1>{{ name }}</h1>
    <h4>Distance : {{ distance}}</h4>
    <p>Rate: {{rate}}</p>
   </base-card>
</template>

<script>
export default {
  
  props: ["id", "name", "distance", "rate"],
   created() {
    this.$store.dispatch('LoadRoutes');  
    
  },
  
};
</script>