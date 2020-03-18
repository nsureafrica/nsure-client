import AdminDashboard from "../views/Admin/Dashboard/dashboard";
import AdminMotorPolicies from '../views/Admin/Policies/motorPolicies';
import AdminClaims from "../views/Admin/Policies/claims";
import AdminMedicalPolicies from "../views/Admin/Policies/medicalPolicies";
import AdminLastExpensePolicies from "../views/Admin/Policies/lastExpensePolicies";
import BlastEmail from "../views/Admin/BlastEmail/blastEmail";
import Login from "../views/login/login.jsx";

const AdminRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 ",
    style: {color: "#8BCCBA"},
    component: AdminDashboard,
    layout: "/admin",
  },
  {
    path: "/motor-policies",
    name: "Motor Policies",
    icon: "ni ni-bus-front-12 ",
    style: {color: "#8BCCBA"},
    component: AdminMotorPolicies,
    layout: "/admin",
  },
  {
    path: "/medical-policies",
    name: "Medical Policies",
    icon: "ni ni-ambulance",
    style: {color: "#8BCCBA"},
    component: AdminMedicalPolicies,
    layout: "/admin",
  },
  {
    path: "/lastExpense-policies",
    name: "Last Expense Policies",
    icon: "ni ni-favourite-28 ",
    style: {color: "#8BCCBA"},
    component: AdminLastExpensePolicies,
    layout: "/admin",
  },
  {
    path: "/claims",
    name: "Claims",
    icon: "ni ni-archive-2 ",
    style: {color: "#8BCCBA"},
    component: AdminClaims,
    layout: "/admin",
  },
  {
    path: "/blast-email",
    name: "Blast Email",
    icon: "ni ni-email-83 ",
    style: {color: "#8BCCBA"},
    component: BlastEmail,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Log Out",
    icon: "ni ni-user-run",
    style: {color: "#8BCCBA"},
    component: Login,
    layout: "/auth",
  }
  
//   {
//     path: "/MotorInsuranceForm",
//     name: "Motor Insurance",
//     icon: "fa fa-car",
//     component: MotorInsuranceForm,
//     style: {color: "#8BC34A"},
//     layout: "/client",
//   },
//   {
//     path: "/MedicalPlans",
//     name: "Medical Insurance",
//     icon: "fa fa-medkit",
//     component: MedicalPlans,
//     style: {color: "#00BCD4"},
//     layout: "/client",
//   },
//   {
//     path: "/EducationInsuranceForm",
//     name: "Education Insurance",
//     icon: "fa fa-graduation-cap",
//     style: {color: "#F44336"},
//     component: EducationInsuranceForm,
//     layout: "/client",
//   },
//   {
//     path: "/TravelInsuranceCoverForm",
//     name: "Travel Insurance",
//     icon: "fa fa-globe",
//     style: {color: "#FF9800"},
//     component: TravelInsuranceCoverForm,
//     layout: "/client",
//   },
//   {
//     path: "/SalamahTransitionCoverForm",
//     name: "Salamah Transition Cover",
//     icon: "fa fa-thumbs-up",
//     style: {color: "#9C27B0"},
//     component: SalamahTransitionCoverForm,
//     layout: "/client",
//   },
];
export default AdminRoutes;
