import React from "react";

// reactstrap components
import {Card, CardBody, CardTitle, Container, Row, Col} from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <h2
                className=""
                style={{
                  marginBottom: "1em",
                  textAlign: "center",
                  color: "#001996",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                Compare and purchase insurance
              </h2>
              <Row>
                <Col lg="3" xl="2" sm="6" xs="6">
                  <a href="MotorInsuranceForm">
                    <Card
                      className="card-stats mb-4 mb-xl-0"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        border: "none",
                      }}
                    >
                      <CardBody
                        style={{textAlign: "center", color: "#8BC34A"}}
                      >
                        <div className="">
                          <i
                            className="fa fa-car "
                            style={{fontSize: "2rem"}}
                          />
                        </div>

                        <div
                          tag="h5"
                          className=" "
                          style={{
                            textAlign: "center",
                            marginTop: "7px",
                            fontWeight: "bold",
                            fontSize: "11px",
                          }}
                        >
                          Motor
                        </div>
                      </CardBody>
                    </Card>
                  </a>
                </Col>

                <Col lg="3" xl="2" sm="6" xs="6">
                  <a href="MedicalInsuranceForm">
                    <Card
                      className="card-stats mb-4 mb-xl-0"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        border: "none",
                      }}
                    >
                      <CardBody
                        style={{textAlign: "center", color: "#00BCD4"}}
                      >
                        <div className="">
                          <i
                            className="fa fa-medkit "
                            style={{fontSize: "2rem"}}
                          />
                        </div>

                        <div
                          tag="h5"
                          className=" "
                          style={{
                            textAlign: "center",
                            marginTop: "7px",
                            fontWeight: "bold",
                            fontSize: "11px",
                          }}
                        >
                          Medical
                        </div>
                      </CardBody>
                    </Card>
                  </a>
                </Col>

                <Col lg="3" xl="2" sm="6" xs="6">
                  <a href="EducationInsuranceForm">
                    <Card
                      className="card-stats mb-4 mb-xl-0"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        border: "none",
                      }}
                    >
                      <CardBody
                        style={{textAlign: "center", color: "#F44336"}}
                      >
                        <div className="">
                          <i
                            className="fa fa-graduation-cap nsure-icons "
                            style={{fontSize: "2rem"}}
                          />
                        </div>

                        <div
                          tag="h5"
                          className=" "
                          style={{
                            textAlign: "center",
                            marginTop: "7px",
                            fontWeight: "bold",
                            fontSize: "11px",
                          }}
                        >
                          Education
                        </div>
                      </CardBody>
                    </Card>
                  </a>
                </Col>
                <Col lg="2" xl="2" sm="6" xs="6">
                  <a href="TravelInsuranceCoverForm">
                    <Card
                      className="card-stats mb-4 mb-xl-0"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        border: "none",
                      }}
                    >
                      <CardBody
                        style={{textAlign: "center", color: "#FF9800"}}
                      >
                        <div className="">
                          <i
                            className="fa fa-globe "
                            style={{
                              fontSize: "2rem",
                            }}
                          />
                        </div>

                        <div
                          tag="h5"
                          className=" "
                          style={{
                            textAlign: "center",
                            marginTop: "7px",
                            fontWeight: "bold",
                            fontSize: "11px",
                          }}
                        >
                          Travel
                        </div>
                      </CardBody>
                    </Card>
                  </a>
                </Col>

                <Col lg="2" xl="2" sm="12" xs="12">
                  <a href="SalamahTransitionCoverForm">
                    <Card
                      className="card-stats mb-4 mb-xl-0"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        border: "none",
                      }}
                    >
                      <CardBody
                        style={{textAlign: "center", color: "#9C27B0"}}
                      >
                        <div className="">
                          <i
                            className="fa fa-thumbs-up"
                            style={{
                              fontSize: "2rem",
                            }}
                          />
                        </div>

                        <div
                          tag="h5"
                          className=" "
                          style={{
                            textAlign: "center",
                            marginTop: "7px",
                            fontWeight: "bold",
                            fontSize: "11px",
                          }}
                        >
                          Salamah
                        </div>
                      </CardBody>
                    </Card>
                  </a>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
