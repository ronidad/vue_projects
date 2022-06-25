<template>
    <base-card>
    <h1>{{ name }}</h1>
    <h4>account: {{ account}}</h4>
    <p>Phone Number: {{phone_number}}</p>
   </base-card>
</template>

<script>
export default {
  
  props: ["id_number", "name", "account", "phone_number"],
   created() {
    this.$store.dispatch('LoadTransporters');  
    
  },
  
};
</script>