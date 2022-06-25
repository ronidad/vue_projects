<template>
  <the-headersider></the-headersider>

  <section>
     
    
    
    <ul >
      <the-deduction
        v-for="deduction in deductions"
        :key="deduction.id"
        :id="deduction.id"
        :vehicle="deduction.vehicle"
        :type ="deduction.type"
        :amount="deduction.amount"
        :notes="deduction.notes"
        :Date="deduction.Date"
        
      ></the-deduction>
    </ul>
    
   
  </section>
</template>

<script>
import TheDeduction from "../../components/items/TheDeduction.vue"

export default {
  components: {
    TheDeduction
    
  },
  computed: {
    deductions() {
      return this.$store.getters.deductions;
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

