<template>
    <base-card>
    <h1>Vehicle: {{ vehicle }}</h1>
    <h4>type : {{ type}}</h4>
    <p>amount: {{amount}}</p>
    <p>notes: {{notes}}</p>
    <p>Date {{date}}</p>
   </base-card>
</template>

<script>
export default {
  
  props: ["id", "vehicle", "type", "amount", "date", "notes"],
   created() {
    this.$store.dispatch('LoadDeductions');  
    
  },
  
};
</script>