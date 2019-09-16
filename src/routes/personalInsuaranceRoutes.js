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
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/MotorInsuaranceForm",
    name: "Motor Insuarance",
    icon: "ni ni-tv-2 text-primary",
    component: MotorInsuaranceForm,
    layout: "/admin"
  },
  {
    path: "/MedicalInsuaranceForm",
    name: "Medical Insurance",
    icon: "ni ni-tv-2 text-primary",
    component: MedicalInsuaranceForm,
    layout: "/admin"
  },
  {
    path: "/EducationInsuaranceForm",
    name: "Education Insurance",
    icon: "ni ni-tv-2 text-primary",
    component: EducationInsuaranceForm,
    layout: "/admin"
  },
  {
    path: "/TravelInsuranceCoverForm",
    name: "Travel Insurance",
    icon: "ni ni-tv-2 text-primary",
    component: TravelInsuranceCoverForm,
    layout: "/admin"
  },
  {
    path: "/SalamahTransitionCoverForm",
    name: "Salamah Transition Cover",
    icon: "ni ni-tv-2 text-primary",
    component: SalamahTransitionCoverForm,
    layout: "/admin"
  },
];
export default PersonalInsuaranceRoutes;
