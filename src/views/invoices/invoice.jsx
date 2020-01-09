import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import Maps from "views/examples/Maps.jsx";
import PickUpPoints from "views/delivery/pickup.jsx";

class Invoice extends React.Component {
  render() {
    const token = localStorage.getItem("token");
    const jwtDecode = require("jwt-decode");
    let userData;
    if (token) {
      userData = jwtDecode(token);
      console.log(userData);
    } else {
      // this.props.history.push("/auth/login");
    }
    console.log(userData);
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
                  textTransform: "uppercase"
                }}
              >
                INVOICE
              </h2>
              <Card style={{ padding: "20px" }}>
                <div
                  style={{
                    textAlign: "right",
                    color: "#333",
                    borderBottom: "2px dotted",
                    marginBottom: "20px"
                  }}
                >
                  <h5>
                    {userData.firstName + " " + userData.lastName}
                    <br />
                    Phone: {userData.phoneNumber} <br />
                    Pick Up: SIB - Lenana Branch
                  </h5>
                </div>

                <Row
                  style={{
                    marginBottom: "10px",
                    fontWeight: "bold",
                    textAlign: "lwft",
                    color: "rgb(0, 43, 170)"
                  }}
                >
                  <Col lg="7" xl="7" sm="7" xs="7">
                    PRODUCT
                  </Col>

                  <Col
                    lg="5"
                    xl="5"
                    sm="5"
                    xs="5"
                    style={{ textAlign: "right" }}
                  >
                    COST
                  </Col>
                </Row>

                <Row
                  className="mb-2"
                  style={{ fontSize: "13px", textAlign: "left", color: "#333" }}
                >
                  <Col lg="7" xl="7" sm="7" xs="7">
                    Motor Insurance Policy
                  </Col>

                  <Col
                    lg="5"
                    xl="5"
                    sm="5"
                    xs="5"
                    style={{ textAlign: "right" }}
                  >
                    Kes{" "}
                    {this.props.location.state.quote.amount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Col>
                </Row>
                <Row
                  className="mb-2"
                  style={{ fontSize: "13px", textAlign: "lwft", color: "#333" }}
                >
                  <Col lg="7" xl="7" sm="7" xs="7">
                    Delivery Fee
                  </Col>

                  <Col
                    lg="5"
                    xl="5"
                    sm="5"
                    xs="5"
                    style={{ textAlign: "right" }}
                  >
                    0.00
                  </Col>
                </Row>

                <Row
                  className="mb-3 mt-2"
                  style={{
                    borderTop: "1px dashed #ccc",
                    fontWeight: "bold",
                    fontSize: "15px",
                    textAlign: "lwft",
                    color: "#333"
                  }}
                >
                  <Col lg="7" xl="7" sm="7" xs="7">
                    TOTAL
                  </Col>

                  <Col
                    lg="5"
                    xl="5"
                    sm="5"
                    xs="5"
                    style={{ textAlign: "right" }}
                  >
                    Kes{" "}
                    {this.props.location.state.quote.amount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Col>
                </Row>
                <div
                  className="mt-3 mb-3"
                  style={{ justifyContent: "center", textAlign: "center" }}
                >
                  <button
                    style={{
                      padding: "11px 35px",
                      background: "linear-gradient(101deg, #ff4b4b, #5b33f9)",
                      fontWeight: "bold",
                      color: "white",
                      textTransform: "uppercase",
                      borderRadius: "26px",
                      letterSpacing: "2px",
                      border: "none"
                    }}
                  >
                    Pay Now
                  </button>
                </div>
              </Card>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Invoice;
