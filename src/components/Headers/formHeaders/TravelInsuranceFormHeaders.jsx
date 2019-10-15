import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class TravelInsuranceFormHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-8  pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "250px",
            backgroundImage:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTAdwqrmR4XVcCTAQfJSKo_74FfH9Z7m8Dj2mzTL_iBBBpHpvM)",
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
                <h1 className="text-white">Travel Insurance</h1>
              
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

export default TravelInsuranceFormHeader;