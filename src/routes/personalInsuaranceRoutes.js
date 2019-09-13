import Index from "../views/Index.jsx";
import MotorInsuaranceForm from "../views/MotorInsuaranceForm"

var PersonalInsuaranceRoutes = [
  {
    path: "/index",
    name: "Motor Insuarance",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/MotorInsuaranceForm",
    name: "Medical Insurance",
    icon: "ni ni-tv-2 text-primary",
    component: MotorInsuaranceForm,
    layout: "/admin"
  },
  {
    path: "/MotorInsuaranceForm",
    name: "Education Insurance",
    icon: "ni ni-tv-2 text-primary",
    component: MotorInsuaranceForm,
    layout: "/admin"
  },
  {
    path: "/MotorInsuaranceForm",
    name: "Travel Insurance",
    icon: "ni ni-tv-2 text-primary",
    component: MotorInsuaranceForm,
    layout: "/admin"
  },
  {
    path: "/MotorInsuaranceForm",
    name: "Salamah Transition Cover",
    icon: "ni ni-tv-2 text-primary",
    component: MotorInsuaranceForm,
    layout: "/admin"
  },
];
export default PersonalInsuaranceRoutes;
