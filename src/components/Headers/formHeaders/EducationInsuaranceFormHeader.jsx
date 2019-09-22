import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class EducationInsuaranceFormHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "250px",
            backgroundImage:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwrybLv0bBwV98kkY0zp1yKiopc7vA52HBKbEsPRX9CrBI9c6y)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundColor:'transparent',
            opacity:'1',

           
          }}
        >
          {/* Mask */}
          <span className="mask opacity-5" style={{backgroundColor:'rgb(69, 162, 240)', filter:'blur(11px)'}}  />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="text-white">Education Insurance</h1>
             
                <Button
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Bring existing policy on board
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default EducationInsuaranceFormHeader;
