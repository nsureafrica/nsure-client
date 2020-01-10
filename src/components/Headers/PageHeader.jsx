import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class PageHeader extends React.Component {
  render() {
    const token = localStorage.getItem("token");
    const jwtDecode = require("jwt-decode");
    let userData;
    if (token) {
      userData = jwtDecode(token);
      console.log(userData);
    } else {
      // this.props.history.push("login");
    }
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "300px",
            backgroundImage:
              "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          <span className="mask bg-gradient-default opacity-8" />
        </div>
      </>
    );
  }
}

export default PageHeader;
