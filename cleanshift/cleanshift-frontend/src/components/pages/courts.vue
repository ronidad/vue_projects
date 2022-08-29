<template>
    <the-headersider></the-headersider>
<table class="table table-striped table-bordered">
        <thead>
            <tr >
                <th><h3>Name</h3></th>
                <th><h3>area</h3></th>
                <th><h3>Registration Date</h3></th>
            </tr>
            </thead> 
            <tbody>
                <tr v-for="court in courts" :key="court.id">
                    <td>{{ court.name}}</td>
                    <td>{{ court.area}}</td>
                    <td>{{ court.reg_date}}</td>
                    
                </tr>
            </tbody>
    </table>
    <router-link to="/register/court">register new Court</router-link>


</template>
<script>



export default {
    computed: {
        courts() {
            return  this.$store.getters.allCourts

            
        }

    },
     created() {
    this.$store.dispatch('LoadCourts');  
    
    
  },
 

}

</script>
