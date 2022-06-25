<template>
<div class="container">
    <table>
        <thead>
            <tr>
                <th>Registration</th>
                <th>Vehicle Owner</th>
                <th>Description</th>
            </tr>
            </thead> 
            <tbody>
                <tr>
                    <td>{{ registration}}</td>
                    <td>{{ owner}}</td>
                    <td>{{description}}</td>
                </tr>
            </tbody>
    </table>
</div>


    <!-- <td>
    <h1>{{ registration}}</h1>
    <h4>owned by: {{ owner}}</h4>
    <p>{{description}}</p>
   </td> -->
</template>

<script>
export default {
  
  props: ["id", "registration", "owner", "description"],
   created() {
    this.$store.dispatch('LoadVehicles');  
    
  },
  
};
</script>