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
const routes = [
  {
    path: "/index",
    name: "Business Insuarance",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/client"
  },
  {
    path: "/maps",
    name: "Premiums,Policies and Claims",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/client"
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
    layout: "/client"
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
    layout: "/client"
  },
  {
    path: "/confirmation",
    name: "Confirmation",
    icon: "ni ni-pin-3 text-orange",
    component: Confirmation,
    layout: "/client"
  },
  {
    path: "/travel",
    name: "travel",
    icon: "ni ni-pin-3 text-orange",
    component: Travel,
    layout: "/client"
  },
  {
    path: "/user-profile",
    name: "Profile",
    component: Profile,
    layout: "/client"
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/reset-password",
    name: "Reset-password",
    component: ResetPassword,
    layout: "/auth"
  },
  {
    path: "/change-password",
    name: "Change-password",
    component: ChangePassword,
    layout: "/auth"
  },
  {
    path: "/claims",
    name: "Claims",
    component: UserClaims,
    layout: "/client"
  },
  {
    path: "/policies",
    name: "Policies",
    component: UserPolicies,
    layout: "/client"
  }
];
export default routes;
