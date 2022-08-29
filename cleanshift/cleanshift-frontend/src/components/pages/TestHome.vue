<template>
<the-headersider></the-headersider>
<section>
  <base-card>
   <h2>details</h2>
  <h3> REG: {{ registration }}</h3>

  </base-card>
   

</section>
   
</template>

<script>

export default {
  props: ["id"],
  data() {
    return {
       selectedVehicle: null,

    }
   

  },
  computed: {
    registration() {
      return this.selectedVehicle.registration

    }

  }, 
  created() {
    this.selectedVehicle = this.$store.getters.allvehicles.find(
      (vehicle)=>vehicle.id===this.id
    );
    


  }

}


</script>
