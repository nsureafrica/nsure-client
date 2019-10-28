import React from "react";

// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

class UserHeader extends React.Component {
  render() {
    const token = localStorage.getItem("token");
    const jwtDecode = require("jwt-decode");
    let userData;
    if (token) {
      userData = jwtDecode(token);
      console.log(userData);
    } else {
      this.props.history.push("login");
    }
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "600px",
            backgroundImage:
              "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="display-2 text-white">
                  Hello {userData.firstName}
                </h1>
                <p className="text-white mt-0 mb-5">
                  This is your profile page. You can manage all your user details here.
                </p>
                <Button
                  color="info"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Edit profile
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default UserHeader;
