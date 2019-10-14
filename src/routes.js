import Index from "views/Index.jsx";
import Maps from "views/examples/Maps.jsx";
import Delivery from "views/delivery/delivery.jsx";
import PickUpPoints from "views/delivery/pickup.jsx";
import Invoice from "views/invoices/invoice.jsx";
import Login from "views/login/login.jsx";
import Register from "views/login/register.jsx";
import Quote from "views/quote/quote.jsx";
import Profile from "./views/examples/Profile"
var routes = [
  {
    path: "/index",
    name: "Business Insuarance",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/client"
  },
  {
    path: "/maps",
    name: "Premiums,Policies and Claims",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/client"
  },
  {
    path: "/delivery",
    name: "Delivery",
    icon: "ni ni-pin-3 text-orange",
    component: Delivery,
    layout: "/client"
  },
  {
    path: "/quote",
    name: "Quote",
    icon: "ni ni-pin-3 text-orange",
    component: Quote,
    layout: "/client"
  },
  {
    path: "/pickup",
    name: "pickup",
    icon: "ni ni-pin-3 text-orange",
    component: PickUpPoints,
    layout: "/client"
  },
  {
    path: "/invoice",
    name: "invoice",
    icon: "ni ni-pin-3 text-orange",
    component: Invoice,
    layout: "/client"
  },
  {
    path: "/user-profile",
    name: "Profile",
    component: Profile,
    layout: "/client"
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    layout: "/auth"
  }

];
export default routes;
