import React from "react";
import {Route, Switch} from "react-router-dom";
// reactstrap components
import {Container} from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.jsx";
import AdminFooter from "components/Footers/AdminFooter.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import routes from "routes.js";
// import PersonalInsuranceRoutes from "../routes/personalInsuranceRoutes";
import {AdminRoutes, AdminManagementRoutes} from "../routes/adminRoutes";
import {PersonalInsuranceRoutes} from "../routes/personalInsuranceRoutes";

class Admin extends React.Component {
  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
  }
  getRoutes = (routes) => {
    console.log(routes)
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = (path) => {
    for (let i = 0; i < AdminRoutes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
            AdminRoutes[i].layout + AdminRoutes[i].path
        ) !== -1
      ) {
        return AdminRoutes[i].name;
      }
    }
    return "Brand";
  };
  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          PersonalInsuranceRoutes={PersonalInsuranceRoutes}
          AdminRoutes={AdminRoutes}
          AdminManagementRoutes = {AdminManagementRoutes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("assets/img/brand/spire.png"),
            imgAlt: "...",
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>{this.getRoutes(routes)}</Switch>
          <Switch>{this.getRoutes(AdminRoutes)}</Switch>
          <Switch>{this.getRoutes(AdminManagementRoutes)}</Switch>
          <Container fluid>
            <AdminFooter />
          </Container>
        </div>
      </>
    );
  }
}

export default Admin;
