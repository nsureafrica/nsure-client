import Index from "views/Index.jsx";
import Maps from "views/examples/Maps.jsx";
import SalamahTransitionCoverForm from "./views/forms/SalamahTransitionCoverForm"

var routes = [
  {
    path: "/index",
    name: "Business Insuarance",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/SalamahTransitionCoverForm",
    name: "Salamah Transition Cover",
    icon: "ni ni-planet text-blue",
    component: SalamahTransitionCoverForm,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Premiums,Policies and Claims",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
];
export default routes;
