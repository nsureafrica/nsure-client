import AdminDashboard from "../views/Admin/Dashboard/dashboard";
import AdminMotorPolicies from '../views/Admin/Policies/motorPolicies';
import AdminClaims from "../views/Admin/Policies/claims";
import AdminMedicalPolicies from "../views/Admin/Policies/medicalPolicies";
import AdminLastExpensePolicies from "../views/Admin/Policies/lastExpensePolicies";
import BlastEmail from "../views/Admin/BlastEmail/blastEmail";
import Login from "../views/login/login.jsx";
import Management from "../views/Admin/Management/management";
import Transactions from "../views/Admin/Transactions/transactions";

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
    path: "/transactions",
    name: "Transactions",
    icon: "ni ni-money-coins",
    style: {color: "#8BCCBA"},
    component: Transactions,
    layout: "/admin",
  },
  {
    path: "/blast-email",
    name: "Blast Email",
    icon: "ni ni-email-83 ",
    style: {color: "#8BCCBA"},
    component: BlastEmail,
    layout: "/admin",
  } 
];
const AdminManagementRoutes = [
  {
    path: "/management",
    name: "Management",
    icon: "ni ni-settings",
    style: {color: "#8BCCBA"},
    component: Management,
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
]
export {AdminRoutes, AdminManagementRoutes};
