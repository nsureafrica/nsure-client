import Index from "views/Index.jsx";
import Maps from "views/examples/Maps.jsx";
import Delivery from "views/delivery/delivery.jsx";
import PickUpPoints from "views/delivery/pickup.jsx";
import Invoice from "views/invoices/invoice.jsx";
import Login from "views/login/login.jsx";
import Register from "views/login/register.jsx";
import Profile from "./views/examples/Profile";
import ResetPassword from "./views/login/resetPassword";
import ChangePassword from "./views/login/changePassword";
import UserClaims from "./views/userclaims/userclaims";
import UserPolicies from "./views/userpolicies/userpolicies";
import MotorQuote from "./views/quote/motorQuote";
import Congratulations from "./views/Confirmation/confirmation";
import Confirmation from "./views/Confirmation/confirmation";
import Travel from "./views/Confirmation/travel";
import Dashboard from "./views/Dashboard/dashboard";
import MedicalInsuranceForm from "./views/forms/MedicalInsuranceForm";
import PolicyDetail from "./views/Admin/Policies/motorPolicyDetail.jsx";
import MedicalPolicyDetail from "./views/Admin/Policies/medicalPolicyDetail.jsx";
import LastExpensePolicyDetail from './views/Admin/Policies/lastExpensePolicyDetail';
import MedicalQuote from "./views/quote/medicalquote";
import MedicalInvoice from "./views/invoices/medical_invoice";
import LastExpenseQuote from "./views/quote/lastExpenseQuote";
import LastExpenseInvoice from "./views/invoices/last_expense";
import ManageMotorRates from "./views/Admin/Management/motor_rates/manage_motor_rates";
import ManageUnderwriters from "./views/Admin/Management/Underwriters/manage-underwriters";
import ManageMedicalPlans from "./views/Admin/Management/Medical/manage-medical-plans";
import TransactionDetail from "./views/Admin/Transactions/transactionDetail";
import ManageLastExpensePlans from "./views/Admin/Management/LastExpense/manage-last-expense-plans";
import TravelInsuranceForm from "./views/forms/TravelInsuranceForm";
import HomeCareQuote from "./views/quote/homeCareQuote";
import HomeCareInvoice from "./views/invoices/home_care";

const routes = [
  {
    path: "/index",
    name: "Business Insurance",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/client",
  },
  {
    path: "/maps",
    name: "Premiums,Policies and Claims",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/client",
  },
  // {
  //   path: "/delivery",
  //   name: "Delivery",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Delivery,
  //   layout: "/client"
  // },
  {
    path: "/motor-quote",
    name: "Motor Quote",
    icon: "ni ni-pin-3 text-orange",
    component: MotorQuote,
    layout: "/client",
  },
  {
    path: "/medical-quote",
    name: "Medical Quote",
    icon: "ni ni-pin-3 text-orange",
    component: MedicalQuote,
    layout: "/client",
  },
  {
    path: "/last-expense-quote",
    name: "Last Expense Quote",
    component: LastExpenseQuote,
    layout: "/client",
  },
  {
    path: "/home-care-quote",
    name: "Home Care Quote",
    component: HomeCareQuote,
    layout: "/client",
  },

  // {
  //   path: "/pickup",
  //   name: "Pickup",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: PickUpPoints,
  //   layout: "/client"
  // },
  {
    path: "/invoice",
    name: "Invoice",
    icon: "ni ni-pin-3 text-orange",
    component: Invoice,
    layout: "/client",
  },
  {
    path: "/invoice-medical",
    name: "Medical Invoice",
    icon: "ni ni-pin-3 text-orange",
    component: MedicalInvoice,
    layout: "/client",
  },
  
  {
    path: "/invoice-last-expense",
    name: "Last Expense Invoice",
    icon: "ni ni-pin-3 text-orange",
    component: LastExpenseInvoice,
    layout: "/client",
  },
  {
    path: "/invoice-home-care",
    name: "Last Expense Invoice",
    icon: "ni ni-pin-3 text-orange",
    component: HomeCareInvoice,
    layout: "/client",
  },
  {
    path: "/confirmation",
    name: "Confirmation",
    icon: "ni ni-pin-3 text-orange",
    component: Confirmation,
    layout: "/client",
  },
  {
    path: "/notified",
    name: "travel",
    icon: "ni ni-pin-3 text-orange",
    component: Travel,
    layout: "/client",
  },
  {
    path: "/user-profile",
    name: "Profile",
    component: Profile,
    layout: "/client",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/reset-password",
    name: "Reset-password",
    component: ResetPassword,
    layout: "/auth",
  },
  {
    path: "/change-password",
    name: "Change-password",
    component: ChangePassword,
    layout: "/auth",
  },
  // {
  //   path: "/claims",
  //   name: "Claims",
  //   component: UserClaims,
  //   layout: "/client"
  // },
  {
    path: "/policies",
    name: "Policies",
    component: UserPolicies,
    layout: "/client",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/auth",
  },
  {
    path: "/MedicalInsuranceForm",
    name: "Medical Insurance",
    component: MedicalInsuranceForm,
    layout: "/client",
  },
  {
    path: "/TravelInsuranceForm",
    name: "Travel Insurance",
    component: TravelInsuranceForm,
    layout: "/client",
  },
  {
    path: "/PolicyDetail",
    name: "Policy Detail",
    component: PolicyDetail,
    layout: "/admin",
  },
  {
    path: "/PolicyDetail_Medical",
    name: "Medical Policy Detail",
    component: MedicalPolicyDetail,
    layout: "/admin",
  },
  {
    path: "/PolicyDetail_LastExpense",
    name: "Last Expense Policy Detail",
    component: LastExpensePolicyDetail,
    layout: "/admin",
  },
  {
    path: "/manage-underwriters",
    name: "Manage Underwriters",
    component: ManageUnderwriters,
    layout: "/admin",
  },
  {
    path: "/manage-motor-rates",
    name: "Manage Motor Rates",
    component: ManageMotorRates,
    layout: "/admin",
  },
  {
    path: "/manage-medical-plans",
    name: "Manage Medical Plans",
    component: ManageMedicalPlans,
    layout: "/admin",
  },
  {
    path: "/manage-last-expense-plans",
    name: "Manage Last Expense Plans",
    component: ManageLastExpensePlans,
    layout: "/admin",
  },
  {
    path: "/transaction-detail",
    name: "TransactionDetail",
    component: TransactionDetail,
    layout: "/admin",
  },
];
export default routes;
