<template>
  <the-headersider></the-headersider>

  <section>
     
    
    
    <ul >
      <the-transporter
        v-for="transporter in transporters"
        :key="transporter.id_number"
        :id="transporter.id_number"
        :name="transporter.name"
        :account ="transporter.account"
        :phone_number="transporter.phone_number"
        
      ></the-transporter>
    </ul>
    
   
  </section>
</template>

<script>
import TheTransporter from "../../components/items/TheTransporter.vue"

export default {
  components: {
    TheTransporter
    
  },
  computed: {
    transporters() {
      return this.$store.getters.transporters;
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

