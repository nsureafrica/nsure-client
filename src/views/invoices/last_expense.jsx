import React, { Component } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Label,
  Col
} from "reactstrap";
import { postRequest } from "../../requests/requests";

class LastExpenseInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = { payNow: false, confirmationNumber: "", policyDetails: {} };
    this.handleChange = this.handleChange.bind(this);
    this.handlePayNow = this.handlePayNow.bind(this);
    this.handlePayment = this.handlePayment.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handlePayNow() {
    this.setState({ payNow: true });
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    const jwtDecode = require("jwt-decode");
    let userData;
    if (token) {
      userData = jwtDecode(token);
    } else {
      // this.props.history.push("/auth/login");
    }
    console.log(this.props.location);
    // create policy
    const optionsSelected = JSON.parse(
      localStorage.getItem("optionsSelected_LastExpense")
    );
    console.log(optionsSelected);
    const beneficiaries = [
      ...optionsSelected.parents,
      ...optionsSelected.children,
      {
        firstName: optionsSelected.spouseFirstName,
        lastName: optionsSelected.spouseLastName,
        DOB: optionsSelected.spouseDOB,
        idNumber: optionsSelected.spouseIDNumber,
        relationship: "spouse"
      }
    ];
    const payloadObject = {
      firstName: optionsSelected.principalFirstName,
      lastName: optionsSelected.principalLastName,
      dateOfBirth: optionsSelected.principalDOB,
      idNumber: optionsSelected.principalIDNumber,
      kraPin: optionsSelected.principalKraPin,
      medicalHealthDeclaration: false,
      notHealthyBeneficiaries:'',
      principalAgeDateOfBirth: optionsSelected.principalDOB,
      notHealthyBeneficiaries: "",
      beneficiaries: JSON.stringify(beneficiaries),
      numberOfChildren: optionsSelected.children.length,
    };
    postRequest("/policies/lastexpense/createpolicy", payloadObject).then(
      response => {
        console.log(response);
        this.setState({ policyDetails: response.data });
      }
    );
  }
  handlePayment() {
    console.log(this.state.policyDetails);
    // redirect to confirmation
    if (this.state.confirmationNumber !== "") {
      const transactionPayload = {
        transactionType: "MPESA",
        transactionRef: this.state.confirmationNumber,
        amount: 0,
        BillId: this.state.policyDetails.BillId
      };
      postRequest("/transactions/createTransactions", transactionPayload).then(
        response => {
          console.log(response);
          this.props.history.push("/client/confirmation", { motor: false });
        }
      );
    } else {
      // ask user to enter confirmation number and try again
    }
  }
  handleCancel() {
    this.setState({ payNow: false });
  }

  render() {
    const token = localStorage.getItem("token");
    const jwtDecode = require("jwt-decode");
    let userData;
    if (token) {
      userData = jwtDecode(token);
    } else {
      // this.props.history.push("/auth/login");
    }
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
                    Last Expense Insurance Policy
                  </Col>

                  <Col
                    lg="5"
                    xl="5"
                    sm="5"
                    xs="5"
                    style={{ textAlign: "right" }}
                  >
                    Kes{" "}
                    {this.props.location.state.quote.quoteTotal
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Col>
                </Row>
                <Row
                  className="mb-2"
                  style={{ fontSize: "13px", textAlign: "left", color: "#333" }}
                >
                  <Col lg="7" xl="7" sm="7" xs="7">
                    Convenience Fee
                  </Col>

                  <Col
                    lg="5"
                    xl="5"
                    sm="5"
                    xs="5"
                    style={{ textAlign: "right" }}
                  >
                    Kes {"80".replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
                    {(this.props.location.state.quote.quoteTotal + 80)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Col>
                </Row>
                {!this.state.payNow ? (
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
                      onClick={() => this.handlePayNow()}
                    >
                      Pay Now
                    </button>
                  </div>
                ) : (
                  <div
                    style={{
                      justifyContent: "left",
                      textAlign: "left",
                      marginTop: "30px"
                      // maxWidth:'30rem'
                    }}
                  >
                    <span style={{ color: "#39b54a", fontWeight: "600" }}>
                      Safaricom - LIPA NA M-PESA
                    </span>
                    <ul>
                      <li>On the M-PESA Menu Go to "Lipa Na M-Pesa"</li>
                      <li>Select "Pay Bill" option</li>
                      <li>
                        Enter Business No: <b>498100</b>
                      </li>
                      <li>
                        Enter Account Number: <b>0403276202</b>
                      </li>
                      <li>
                        Enter Amount:{" "}
                        <b>
                          Kes{" "}
                          {(this.props.location.state.quote.quoteAmount + 80)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </b>
                      </li>
                      <li>Enter Your M-PESA PIN</li>
                      <li>Confirm that all details are correct and press OK</li>
                      <li>You will receive a confirmation SMS from M-PESA</li>
                    </ul>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label">
                            Enter your payment confirmation number
                          </label>
                          <Input
                            // className="form-control-alternative"
                            // placeholder="Vehicle's estimated value (KES)"
                            type="text"
                            value={this.state.confirmationNumber}
                            onChange={this.handleChange}
                            id="confirmationNumber"
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <button onClick={() => this.handleCancel()}>
                        Cancel
                      </button>
                      <button onClick={() => this.handlePayment()}>
                        Continue
                      </button>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default LastExpenseInvoice;
