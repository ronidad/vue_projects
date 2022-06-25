<template>
<the-headersider></the-headersider>
     Welcome to kipngetich factory manament system                         
</template>
<script>
// const user = null;
// import axios from 'axios'
// import { mapGetters } from "vuex";
export default {
     computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },

  methods:{
    handleLogout() {
      this.$store.dispatch('clearToken')
      localStorage.removeItem('token') // clear your user's token from localstorage
      localStorage.removeItem('user') // clear your user from localstorage

      this.$router.push('/login')

    }
  },
     data(){
          return {
               user: ""
          }
     },
     mounted(){
          let user = localStorage.getItem('user')
          this.user = JSON.parse(user)
     },
     created (){
          // if (localStorage.user) {
          //      this.user = localStorage.getItem('user');
          //      console.log(user)
          // }
          // const response = await localStorage.getItem('user');
          // console.log(response)
     }
 
};
</script>