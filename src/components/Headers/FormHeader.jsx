import React from "react";

// reactstrap components
import {Button, Container, Col} from "reactstrap";

class FormHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-8  pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "250px",
            backgroundImage: `url(${this.props.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* Mask */}
          <span className="mask opacity-5" style={{backgroundColor: "rgb(69, 162, 240)", filter: "blur(11px)"}} />
          {/* Header container */}
          <Container className=" align-items-right" fluid style={{textAlign: "right"}}>
            <div>
              <Col lg="7" md="10" style={{float: "right"}}>
                <h1 className="text-white">{this.props.name}</h1>

                <Button
                  color="info"
                  href="#"
                  onClick={(e) => e.preventDefault()}
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

export default FormHeader;
