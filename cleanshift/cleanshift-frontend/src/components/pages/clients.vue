<template>
    <the-headersider></the-headersider>
    <base-card>
<table class="table table-striped table-bordered">
        <thead>
            <tr >
                <th><h3>Name</h3></th>
                <th><h3>phone</h3></th>
                <th><h3>court</h3></th>
            </tr>
            </thead> 
            <tbody>
                <tr v-for="client in clients" :key="client.id">
                    <td>{{ client.name}}</td> 
                    <td>{{ client.phone}}</td>
                    <td>{{ client.court}}</td>
                    
                </tr>
            </tbody>
    </table>
    
</base-card>
<router-link to="/register/clients">Register clients</router-link>
</template>
<script>



export default {
    computed: {
        clients() {
            return  this.$store.getters.clients

            
        }

    },
     created() {
    this.$store.dispatch('LoadClients');  
    
    
  },

}

</script>
