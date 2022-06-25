//import vue from 'vue';
// import vuex from 'vuex';
import { createStore } from "vuex";

// vue.use(vuex);

// const state =  {
//     user:null,
//     token:null

// };
// const state = {
//     token: null,
//     user: null,
//   }

const store = createStore({
    state: {
      token: null,
      user: null,
      vehicles: [
      {
      // id: 1,
      // registration: 'KCS499R',
      // owner: 'Ronald Mosomi',
      // description: "HOnda Insight"
    },
    // {
    //   id: 2,
    //   registration: 'KDE473P',
    //   owner: 'Benard Mosomi',
    //   description: 'Isuzu FRR 2021'
    // },
    // {
    //   id: 3,
    //   registration: 'KCG524W',
    //   owner: 'Roberms Holdings Ltd',
    //   description: 'Isuzu FRR 2022'
    // },



      ],
      
      transporters: [
        {
          id: 1,
          name: 'Ronald Mosomi',
          phone_number: '0725029795',
          account: "nbca account number 10023378"

        },
      

      ],
      routes: [
      {
        id: 1,
        name: 'Nyamira',
        distance: 50,
        rate: 5

      },
      

      ],
      trips: [
        {
          id: 1,
          vehicle: 'KCS 499R',
          route: 'nyamira',
          weight: 50,
          date: '10/5/2022'
  
        },

      ],
      deductions: [
        {

        }
      ]


    },
    mutations: {
        setUser(state, user) {
          state.user = user;
        },
        setToken(state, token) {
          state.token = token;
        },
        removeToken(state){
            state.token = null
        }, 
        removeUser(state){
            state.user= null
        },
        setVehicles(state,vehicles){
          state.vehicles=vehicles
        },
        setTransporters(state,transporters){
          state.transporters=transporters
        },
        setRoutes(state,routes){
          state.routes=routes
        },
        setTrips(state,trips){
          state.trips=trips
        },
        setDeductions(state,deductions){
          state.deductions=deductions
        },

      },
      actions: {
          clearToken(context){
              context.commit('removeToken')
          },
          clearUser(context){
              context.commit('removeUser')
          },
          addToken(context){
              context.commit('setToken')
          },

          async LoadVehicles(context) {
            const url = `http://localhost:5000/get/vehicles`;
      
            const response = await fetch(url, {
              mode: "cors",
              // credentials: "include",
              headers: {
                "Access-Control-Allow-Origin": true,
              },
            });
            const responseData = await response.json();
            if (!response.ok) {
              //
            }
            const vehicles = [];
            for (const key in responseData) {
              const vehicle = {
                id: key,
                registration: responseData[key].registration,
                description: responseData[key].description,      
                owner: responseData[key].owner,
              };
              vehicles.push(vehicle);
            }
            context.commit("setVehicles", vehicles);
          },
          async LoadTransporters(context) {
            const url = `http://localhost:5000/get/transporters`;
      
            const response = await fetch(url, {
              mode: "cors",
              // credentials: "include",
              headers: {
                "Access-Control-Allow-Origin": true,
              },
            });
            const responseData = await response.json();
            if (!response.ok) {
              //
            }
            const transporters = [];
            for (const key in responseData) {
              const transporter = {
                id_number: key,
                name: responseData[key].name,
                account: responseData[key].account,      
                phone_number: responseData[key].phone_number,
              };
              transporters.push(transporter);
            }
            context.commit("setTransporters", transporters);
          },
          async LoadRoutes(context) {
            const url = `http://localhost:5000/get/routes`;
      
            const response = await fetch(url, {
              mode: "cors",
              // credentials: "include",
              headers: {
                "Access-Control-Allow-Origin": true,
              },
            });
            const responseData = await response.json();
            if (!response.ok) {
              //
            }
            const routes = [];
            for (const key in responseData) {
              const route = {
                id: key,
                name: responseData[key].name,
                distance: responseData[key].distance,      
                rate: responseData[key].rate,
              };
              routes.push(route);
            }
            context.commit("setRoutes", routes);
          },
          async LoadTrips(context) {
            const url = `http://localhost:5000/get/trips`;
      
            const response = await fetch(url, {
              mode: "cors",
              // credentials: "include",
              headers: {
                "Access-Control-Allow-Origin": true,
              },
            });
            const responseData = await response.json();
            if (!response.ok) {
              //
            }
            const trips = [];
            for (const key in responseData) {
              const trip = {
                id: key,
                vehicle: responseData[key].vehicle,
                route: responseData[key].route,      
                weight: responseData[key].weight,
                date: responseData[key].date
              };
              trips.push(trip);
            }
            context.commit("setTrips", trips);
          },
          async LoadDeductions(context) {
            const url = `http://localhost:5000/get/deductions`;
      
            const response = await fetch(url, {
              mode: "cors",
              // credentials: "include",
              headers: {
                "Access-Control-Allow-Origin": true,
              },
            });
            const responseData = await response.json();
            if (!response.ok) {
              //
            }
            const deductions = [];
            for (const key in responseData) {
              const deduction = {
                id: key,
                vehicle: responseData[key].vehicle,
                type: responseData[key].type,      
                amount: responseData[key].amount,
                date: responseData[key].date
              };
              deductions.push(deduction);
            }
            context.commit("setDeductions", deductions);
          },
      },
      getters: {
        isLoggedIn() {
            return !!localStorage.getItem('token'); 
          },
          vehicles1(state, vehicles){
            state.vehicles=vehicles

          },
          allvehicles: (state) => state.vehicles,
          transporters: (state) => state.transporters,
          routes: (state) => state.routes,
          trips: (state) => state.trips,
          deductions: (state) => state.deductions,
      },
    
    // 
    
   
});
export default store;
