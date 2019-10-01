import Index from "../views/Index.jsx"; 
import MotorInsuranceForm from "../views/forms/MotorInsuranceForm"
import MedicalInsuranceForm from "../views/forms/MedicalInsuranceForm"
import EducationInsuranceForm from "../views/forms/EducationInsuranceForm"
import SalamahTransitionCoverForm from "../views/forms/SalamahTransitionCoverForm"
import TravelInsuranceCoverForm from "../views/forms/TravelInsuranceForm"

var PersonalInsuranceRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 ",
    style:{color:'#8BCCBA'},
    component: Index,
    layout: "/admin"
  },
  {
    path: "/MotorInsuranceForm",
    name: "Motor Insurance",
    icon: "fa fa-car",
    component: MotorInsuranceForm,
    style:{color:'#8BC34A'},
    layout: "/admin"
  },
  {
    path: "/MedicalInsuranceForm",
    name: "Medical Insurance",
    icon: "fa fa-medkit",
    component: MedicalInsuranceForm,
    style:{color:'#00BCD4'},
    layout: "/admin"
  },
  {
    path: "/EducationInsuranceForm",
    name: "Education Insurance",
    icon: "fa fa-graduation-cap",
    style:{color:'#F44336'},
    component: EducationInsuranceForm,
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
export default PersonalInsuranceRoutes;
