import Index from "../views/Index.jsx"; 
import MotorInsuaranceForm from "../views/forms/MotorInsuaranceForm"
import MedicalInsuaranceForm from "../views/forms/MedicalInsuaranceForm"
import EducationInsuaranceForm from "../views/forms/EducationInsuaranceForm"
import SalamahTransitionCoverForm from "../views/forms/SalamahTransitionCoverForm"
import TravelInsuranceCoverForm from "../views/forms/TravelInsuaranceForm"

var PersonalInsuaranceRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 ",
    style:{color:'#8BCCBA'},
    component: Index,
    layout: "/admin"
  },
  {
    path: "/MotorInsuaranceForm",
    name: "Motor Insuarance",
    icon: "fa fa-car",
    component: MotorInsuaranceForm,
    style:{color:'#8BC34A'},
    layout: "/admin"
  },
  {
    path: "/MedicalInsuaranceForm",
    name: "Medical Insurance",
    icon: "fa fa-medkit",
    component: MedicalInsuaranceForm,
    style:{color:'#00BCD4'},
    layout: "/admin"
  },
  {
    path: "/EducationInsuaranceForm",
    name: "Education Insurance",
    icon: "fa fa-graduation-cap",
    style:{color:'#F44336'},
    component: EducationInsuaranceForm,
    layout: "/admin"
  },
  {
    path: "/TravelInsuranceCoverForm",
    name: "Travel Insurance",
    icon: "fa fa-globe",
    style:{color:'#FF9800'},
    component: TravelInsuranceCoverForm,
    layout: "/admin"
  },
  {
    path: "/SalamahTransitionCoverForm",
    name: "Salamah Transition Cover",
    icon: "fa fa-thumbs-up",
    style:{color:'#9C27B0'},
    component: SalamahTransitionCoverForm,
    layout: "/admin"
  },
];
export default PersonalInsuaranceRoutes;
