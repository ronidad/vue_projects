// import { Router } from "express";
import { createRouter, createWebHistory } from "vue-router";

// import pages
import LoginUser from "./components/pages/LoginUser.vue";
import RegisterUser from "./components/pages/RegisterUser.vue";
import HomePage from "./components/pages/HomePage.vue";
import UserProfile from "./components/pages/UserProfile.vue";
import DashBoard from "./components/pages/DashBoard"
import TestHome from "./components/pages/TestHome"
import Clients from "./components/pages/clients"
import RegisterCourt from "./components/pages/RegisterCourt"
import RegisterClient from "./components/pages/RegisterClient"
import ReceivePayment from "./components/pages/ReceivePayments"
import Payments from "./components/pages/payments"

import Reports from "./components/pages/reports"
import Courts from "./components/pages/courts"
import  ClientPayments from "./components/pages/ClientPayments"




const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/login", component: LoginUser },
    { path: "/register", component: RegisterUser },
    { path: "/profile", component: UserProfile },
    {path: "/dashboard", component:DashBoard},
    {path: "/apps", component:DashBoard},
    {path: "/test",component:TestHome},
    {path: "/reports",component:Reports},
    {path: "/register/clients", component: RegisterClient},
    {path: "/clients", component:Clients},
    {path: "/register/court", component: RegisterCourt},
    {path: "/courts", component: Courts},
    {path: "/receive/payment", component: ReceivePayment},
    {path: "/payments", component: Payments},
    {path: "/client/payments/:client", component: ClientPayments},
   
    

  ],
});

export default router;
