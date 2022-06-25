// import { Router } from "express";
import { createRouter, createWebHistory } from "vue-router";

// import pages
import LoginUser from "./components/pages/LoginUser.vue";
import RegisterUser from "./components/pages/RegisterUser.vue";
import HomePage from "./components/pages/HomePage.vue";
import UserProfile from "./components/pages/UserProfile.vue";
import AllUsers from "./components/pages/AllUsers";
import ManageVehicles from "./components/pages/ManageVehicles";
import DashBoard from "./components/pages/DashBoard"
import TestHome from "./components/pages/TestHome"
import Trips from "./components/pages/trips";
import Vehicles from "./components/pages/vehicles"
import Reports from "./components/pages/reports"
import RegisterVehicle from "./components/pages/RegisterVehicle"
import RegisterTransporter from "./components/pages/RegisterTransporter"
import RegisterDriver from "./components/pages/RegisterDriver"
import NewTrip from "./components/pages/NewTrip"
import Transporters from "./components/pages/transporters"
import Routes from "./components/pages/routes"
import Deductions from "./components/pages/deductions"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/login", component: LoginUser },
    { path: "/register", component: RegisterUser },
    { path: "/profile", component: UserProfile },
    { path: "/all/users", component: AllUsers },
    {path: "/dashboard", component:DashBoard},
    {path: "/apps", component:ManageVehicles},
    {path: "/test",component:TestHome},
    {path: "/vehicles",component:Vehicles},
    {path: "/trips",component:Trips},
    {path: "/reports",component:Reports},
    {path: "/register/vehicle", component: RegisterVehicle},
    {path: "/register/transporter", component: RegisterTransporter},
    {path: "/register/driver", component: RegisterDriver},
    {path: "/new/trip", component: NewTrip},
    {path:"/transporters", component:Transporters},
    {path: "/routes", component:Routes},
    {path: "/deductions", component:Deductions}

  ],
});

export default router;
