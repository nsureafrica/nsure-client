import Index from "views/Index.jsx";
import Maps from "views/examples/Maps.jsx";
import Delivery from "views/delivery/delivery.jsx";
import PickUpPoints from "views/delivery/pickup.jsx";
import Invoice from "views/invoices/invoice.jsx";
import Login from "views/login/login.jsx";

var routes = [
  {
    path: "/index",
    name: "Business Insuarance",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Premiums,Policies and Claims",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/delivery",
    name: "Delivery",
    icon: "ni ni-pin-3 text-orange",
    component: Delivery,
    layout: "/admin"
  },
  {
    path: "/pickup",
    name: "pickup",
    icon: "ni ni-pin-3 text-orange",
    component: PickUpPoints,
    layout: "/admin"
  },
  {
    path: "/invoice",
    name: "invoice",
    icon: "ni ni-pin-3 text-orange",
    component: Invoice,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    layout: "/auth"
  },
];
export default routes;
