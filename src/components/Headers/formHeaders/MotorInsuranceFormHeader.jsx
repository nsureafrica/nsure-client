import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class MotorInsuranceFormHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-8  pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "250px",
            backgroundImage:
              "url(https://i.roamcdn.net/hz/pi/og-image-category/312b0538e2660e8c604a7f23d89748c2/-/hzfiles/pi/og_image/q10dk3/de0486672589668c4785ef6d9165689ac266cd2e.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask opacity-5" style={{backgroundColor:'rgb(69, 162, 240)', filter:'blur(11px)'}} />
          {/* Header container */}
          <Container className=" align-items-right" fluid style={{textAlign:'right'}}>
            <div>
              <Col lg="7" md="10" style={{float:'right'}}>
                <h1 className="text-white">Motor Insurance</h1>
              
                <Button
                  color="info"
                  href="#"
                  onClick={e => e.preventDefault()}
                >
                  Bring existing policy on board
                </Button>
              </Col>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default MotorInsuranceFormHeader;