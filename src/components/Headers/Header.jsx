import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <h2 className="" style={{ textAlign: 'center', color: 'rgba(17, 61, 96, 0.49)', textTransform: 'uppercase' }}>ADD Insurance</h2>
              <Row>
                <Col lg="3" xl="3" sm="6" xs="6">
                  <a href="EducationInsuaranceForm">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardBody style={{ textAlign: 'center' }}>

                        <div className="">
                          <i className="fa fa-graduation-cap " style={{ fontSize: '3rem', color: 'rgba(213, 37, 53, 0.71)', }} />
                        </div>

                        <CardTitle
                          tag="h4"
                          className=" "
                          style={{ color: '#797d87', textAlign: 'center', marginTop: '15px' }}
                        >
                          Education
                          </CardTitle>
                      </CardBody>
                    </Card>
                  </a>
                </Col>
                <Col lg="3" xl="3" sm="6" xs="6">
                  <a href="MedicalInsuaranceForm">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardBody style={{ textAlign: 'center' }}>

                        <div className="">
                          <i className="fa fa-medkit " style={{ fontSize: '3rem', color: 'rgba(213, 37, 53, 0.71)', }} />
                        </div>

                        <CardTitle
                          tag="h4"
                          className=" "
                          style={{ color: '#797d87', textAlign: 'center', marginTop: '15px' }}
                        >
                          Medical
                          </CardTitle>
                      </CardBody>
                    </Card>
                  </a>
                </Col>


                <Col lg="3" xl="3" sm="6" xs="6">
                  <a href="MotorInsuaranceForm">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardBody style={{ textAlign: 'center' }}>

                        <div className="">
                          <i className="fa fa-car " style={{ fontSize: '3rem', color: 'rgba(213, 37, 53, 0.71)', }} />
                        </div>

                        <CardTitle
                          tag="h4"
                          className=" "
                          style={{ color: '#797d87', textAlign: 'center', marginTop: '15px' }}
                        >
                          Motor
                          </CardTitle>
                      </CardBody>
                    </Card>
                  </a>
                </Col>

                <Col lg="3" xl="3" sm="6" xs="6">
                  <a href="TravelInsuranceCoverForm">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardBody style={{ textAlign: 'center' }}>

                        <div className="">
                          <i className="fa fa-globe " style={{ fontSize: '3rem', color: 'rgba(213, 37, 53, 0.71)', }} />
                        </div>

                        <CardTitle
                          tag="h4"
                          className=" "
                          style={{ color: '#797d87', textAlign: 'center', marginTop: '15px' }}
                        >
                          Travel
                          </CardTitle>
                      </CardBody>
                    </Card>
                  </a>
                </Col>


                <Col lg="3" xl="3" sm="6" xs="6">
                  <a href="SalamahTransitionCoverForm">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardBody style={{ textAlign: 'center' }}>

                        <div className="">
                          <i className="fa fa-thumbs-up" style={{ fontSize: '3rem', color: 'rgba(213, 37, 53, 0.71)', }} />
                        </div>

                        <CardTitle
                          tag="h4"
                          className=" "
                          style={{ color: '#797d87', textAlign: 'center', marginTop: '15px' }}
                        >
                          Salamah
                          </CardTitle>
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
