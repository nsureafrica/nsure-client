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
            minHeight: "600px",
            backgroundImage:
              "url(https://source.unsplash.com/collection/4429411/1600x900)",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="display-2 text-white">Hello User</h1>
                <p className="text-white mt-0 mb-5">
                An educational fund, in the context of insurance, refers to the use of a life insurance policy to pay for the education of the insured's child.
                </p>
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
