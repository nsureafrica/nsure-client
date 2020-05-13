import Index from "../views/Index.jsx";
import MotorInsuranceForm from "../views/forms/MotorInsuranceForm";
// import MedicalInsuranceForm from "../views/forms/MedicalInsuranceForm";
import EducationInsuranceForm from "../views/forms/EducationInsuranceForm";
import LastExpenseCoverForm from "../views/forms/LastExpenseCoverForm";
// import TravelInsuranceCoverForm from "../views/forms/TravelInsuranceForm";
import MedicalPlans from "./../views/Plans/medicalPlans"
import TravelPlans from "./../views/Plans/travelPlans"
import UserClaims from "../views/userclaims/userclaims.jsx";
import Login from "../views/login/login.jsx";
import HomeCareForm from "../views/forms/HomeCareForm.jsx";

const PersonalInsuranceRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 ",
    style: {color: "#8BCCBA"},
    component: Index,
    layout: "/client",
  },
  {
    path: "/MotorInsuranceForm",
    name: "Motor Insurance",
    icon: "fa fa-car",
    component: MotorInsuranceForm,
    style: {color: "#8BC34A"},
    layout: "/client",
  },
  {
    path: "/MedicalPlans",
    name: "Medical Insurance",
    icon: "fa fa-medkit",
    component: MedicalPlans,
    style: {color: "#00BCD4"},
    layout: "/client",
  },
  {
    path: "/EducationInsuranceForm",
    name: "Education Insurance",
    icon: "fa fa-graduation-cap",
    style: {color: "#F44336"},
    component: EducationInsuranceForm,
    layout: "/client",
  },
  {
    path: "/TravelPlans",
    name: "Travel Insurance",
    icon: "fa fa-globe",
    style: {color: "#FF9800"},
    component: TravelPlans,
    layout: "/client",
  },
  {
    path: "/LastExpenseCoverForm",
    name: "Last Expense",
    icon: "fa fa-monument",
    style: {color: "#9C27B0"},
    component: LastExpenseCoverForm,
    layout: "/client",
  },
  {
    path: "/HomeCareForm",
    name: "Home Care",
    icon: "fa fa-home",
    style: {color: ""},
    component: HomeCareForm,
    layout: "/client",
  }
];
const OtherRoutes = [
  {
    path: "/claims",
    name: "My Claims",
    icon: "ni ni-archive-2 ",
    style: {color: "#8BCCBA"},
    component: UserClaims,
    layout: "/client",
  },
  {
    path: "/login",
    name: "Log Out",
    icon: "ni ni-user-run",
    style: {color: "#8BCCBA"},
    component: Login,
    layout: "/auth",
  }
]
export {PersonalInsuranceRoutes, OtherRoutes};
