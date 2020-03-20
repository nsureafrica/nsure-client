import React, { Component } from "react";
import {
  CardHeader,
  Table,
  Card,
  Container,
  CardBody,
  Form,
  Row,
  Col,
  FormGroup,
  Input,
  Button
} from "reactstrap";

class Management extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <h3
              className=""
              style={{
                marginBottom: "20px",
                textAlign: "center",
                color: "#001996",
                letterSpacing: "3px",
                textTransform: "uppercase"
              }}
            >
              Manage Underwriters and Policy Rates
            </h3>

            <Row style={{ marginBottom: "20px" }}>
              <Col lg="4 " sm="12" xs="12">
                <a href="manage-underwriters">
                  <Card
                    className="card-stats mb-4 mb-xl-0"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "none"
                    }}
                  >
                    <CardBody style={{ textAlign: "center" }}>
                      <div className="">
                        <i
                          className="fa fa-building "
                          style={{ fontSize: "8rem" }}
                        />
                      </div>

                      <div
                        tag="h5"
                        className=" "
                        style={{
                          textAlign: "center",
                          marginTop: "7px",
                          fontWeight: "bold",
                          fontSize: "20px"
                        }}
                      >
                        Underwriters
                      </div>
                    </CardBody>
                  </Card>
                </a>
              </Col>
              <Col lg="4 " sm="12" xs="12">
                <a href="manage-motor-rates">
                  <Card
                    className="card-stats mb-4 mb-xl-0"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "none"
                    }}
                  >
                    <CardBody style={{ textAlign: "center" }}>
                      <div className="">
                        <i
                          className="fa fa-car "
                          style={{ fontSize: "8rem" }}
                        />
                      </div>

                      <div
                        tag="h5"
                        className=" "
                        style={{
                          textAlign: "center",
                          marginTop: "7px",
                          fontWeight: "bold",
                          fontSize: "20px"
                        }}
                      >
                        Motor Rates
                      </div>
                    </CardBody>
                  </Card>
                </a>
              </Col>
              <Col lg="4 " sm="12" xs="12">
                <a href="MotorInsuranceForm">
                  <Card
                    className="card-stats mb-4 mb-xl-0"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "none"
                    }}
                  >
                    <CardBody style={{ textAlign: "center" }}>
                      <div className="">
                        <i
                          className="fas fa-file-medical "
                          style={{ fontSize: "8rem" }}
                        />
                      </div>

                      <div
                        tag="h5"
                        className=" "
                        style={{
                          textAlign: "center",
                          marginTop: "7px",
                          fontWeight: "bold",
                          fontSize: "20px"
                        }}
                      >
                        Medical Rates
                      </div>
                    </CardBody>
                  </Card>
                </a>
              </Col>
            </Row>
            <Row>
              <Col lg="4 " sm="12" xs="12">
                <a href="MotorInsuranceForm">
                  <Card
                    className="card-stats mb-4 mb-xl-0"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "none"
                    }}
                  >
                    <CardBody style={{ textAlign: "center" }}>
                      <div className="">
                        <i
                          className="fa fa-book-open "
                          style={{ fontSize: "8rem" }}
                        />
                      </div>

                      <div
                        tag="h5"
                        className=" "
                        style={{
                          textAlign: "center",
                          marginTop: "7px",
                          fontWeight: "bold",
                          fontSize: "20px"
                        }}
                      >
                        Education Rates
                      </div>
                    </CardBody>
                  </Card>
                </a>
              </Col>
              <Col lg="4 " sm="12" xs="12">
                <a href="MotorInsuranceForm">
                  <Card
                    className="card-stats mb-4 mb-xl-0"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "none"
                    }}
                  >
                    <CardBody style={{ textAlign: "center" }}>
                      <div className="">
                        <i
                          className="fa fa-luggage-cart "
                          style={{ fontSize: "8rem" }}
                        />
                      </div>

                      <div
                        tag="h5"
                        className=" "
                        style={{
                          textAlign: "center",
                          marginTop: "7px",
                          fontWeight: "bold",
                          fontSize: "20px"
                        }}
                      >
                        Travel Rates
                      </div>
                    </CardBody>
                  </Card>
                </a>
              </Col>
              <Col lg="4 " sm="12" xs="12">
                <a href="MotorInsuranceForm">
                  <Card
                    className="card-stats mb-4 mb-xl-0"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "none",
                      marginBottom: "2rem"
                    }}
                  >
                    <CardBody style={{ textAlign: "center" }}>
                      <div className="">
                        <i
                          className="fa fa-building "
                          style={{ fontSize: "8rem" }}
                        />
                      </div>

                      <div
                        tag="h5"
                        className=" "
                        style={{
                          textAlign: "center",
                          marginTop: "7px",
                          fontWeight: "bold",
                          fontSize: "20px"
                        }}
                      >
                        Last Expense Rates
                      </div>
                    </CardBody>
                  </Card>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Management;
