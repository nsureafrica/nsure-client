import React, { Component } from "react";
import {
  CardHeader,
  CardBody,
  Table,
  Card,
  Container,
  Button
} from "reactstrap";
import moment from "moment";
import ConfirmTransaction from "./confirmTrasnsaction";
import { getRequest, putRequest} from "../../../requests/requests";
import {
    ErrorOutline as Error,
    CheckCircleOutline as Success,
    ErrorRounded,
  } from "@material-ui/icons";
  import toaster from "toasted-notes";
  import "toasted-notes/src/styles.css";

class MedicalPolicyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: {},
      confirmTransaction: false,
      transactionDetails: {},
      verify:false
    };
  }

  componentDidMount() {
    //   fetch bill
    getRequest(`/bill/getbill/${this.props.location.state.BillId}`).then(
      response => {
        console.log(response.data);
        this.setState({ bill: response.data });
      }
    );
  }
  activatePolicy = (policyDetail) => {
    console.log("dfgh");
    putRequest(`/policies/medical/activateMedicalPolicy`, {
      id: policyDetail.id,
      coverStart: moment().endOf("day"),
      coverEnd: moment().endOf("day").add(1, "year"),
      active: true,
    })
      .then((response) => {
        toaster.notify(
          <div
            style={{
              color: "#0AA681",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            <Success style={{ width: "40px" }} /> Success
          </div>
        );
        this.props.history.push("medical-policies");
      })
      .catch((err) => {
        console.log(err);
        toaster.notify(
          <div
            style={{
              color: "#F96762",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            <Error style={{ width: "40px" }} /> An error occurred
          </div>
        );
      });
  };
  deactivatePolicy = (policyDetail) => {
    putRequest(`/policies/medical/activateMedicalPolicy`, {
      id: policyDetail.id,
      coverStart: moment().endOf("day"),
      coverEnd: moment().endOf("day").add(1, "year"),
      active: false,
    })
      .then((response) => {
        toaster.notify(
          <div
            style={{
              color: "#0AA681",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            <Success style={{ width: "40px" }} /> Success
          </div>
        );
        this.props.history.push("medical-policies");
      })
      .catch((err) => {
        toaster.notify(
          <div
            style={{
              color: "#F96762",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            <Error style={{ width: "40px" }} /> An error occurred
          </div>
        );
      });
  };
  confirmTransaction = transactionDetails => {
    this.setState({ confirmTransaction: true, transactionDetails, verify:true});
  };
  cancelVerification = transactionDetails => {
    this.setState({ confirmTransaction: true, transactionDetails, verify:false });
  };
  toggle = () => {
    this.setState(prevState => ({
      confirmTransaction: !prevState.confirmTransaction
    }));
    this.props.history.go();
  };
  render() {
    console.log(this.props.location.state);
    const policyDetail = this.props.location.state;
    return (
      <>
        <div className="header pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
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
                Medical Policy
              </h2>
              <Card style={{ padding: "20px" }} className="shadow">
                <CardHeader className="border-0">
                  <Button color="secondary"
                    onClick={() =>
                      this.props.history.push("/admin/medical-policies")
                    }
                  >
                    Back
                  </Button>
                </CardHeader>
                <CardBody
                  style={{
                    textAlign: "left",
                    color: "rgb(181, 0, 50)"
                  }}
                >
                  <div
                    tag="h2"
                    className=" "
                    style={{
                      textAlign: "left",
                      marginTop: "7px",
                      fontWeight: "bold",
                      fontSize: "12px"
                    }}
                  >
                    <Table>
                      POLICY PARTICULARS
                      <tr style={{ color: "black", fontWeight: "400" }}>
                        <td>Policy holder</td>
                        <td>
                          {policyDetail.firstName} {policyDetail.lastName}
                        </td>
                      </tr>
                      <tr style={{ color: "black", fontWeight: "400" }}>
                        <td>Policy Amount</td>
                        <td>
                          {this.state.bill.amount && this.state.bill.amount}
                        </td>
                      </tr>
                      <tr style={{ color: "black", fontWeight: "400" }}>
                        <td>Paid Amount</td>
                        <td>
                          {this.state.bill.totalAmountPaid &&
                            this.state.bill.totalAmountPaid}
                        </td>
                      </tr>
                      <tr style={{ color: "black", fontWeight: "400" }}>
                        <td>Last Payment</td>
                        <td>
                          {moment(this.state.bill.updatedAt).format(
                            "MMMM Do YYYY"
                          )}
                        </td>
                      </tr>
                      <tr style={{ color: "black", fontWeight: "400" }}>
                        <td>Policy Creation Date</td>
                        <td>
                          {moment(policyDetail.createdAt).format(
                            "MMMM Do YYYY"
                          )}
                        </td>
                      </tr>
                      <tr style={{ color: "black", fontWeight: "400" }}>
                        <td>Status</td>
                        <td>{policyDetail.active ? "Active" : "Inactive"}</td>
                      </tr>
                      <tr style={{ color: "black", fontWeight: "400" }}>
                        <td />
                        {policyDetail.active ? (
                          <td>
                            <Button
                              color="secondary"
                              style={{ width: "100%" }}
                              onClick={() =>
                                this.deactivatePolicy(policyDetail)
                              }
                            >
                              Deactivate policy
                            </Button>
                          </td>
                        ) : (
                          <td>
                            <Button
                              color="primary"
                              style={{ width: "100%" }}
                              onClick={() => this.activatePolicy(policyDetail)}
                            >
                              Activate Policy
                            </Button>
                          </td>
                        )}
                      </tr>
                    </Table>
                  </div>
                </CardBody>
              </Card>
              <br />
              <Card>
                <CardBody
                  style={{
                    textAlign: "left",
                    color: "rgb(181, 0, 50)"
                  }}
                >
                  <div
                    tag="h2"
                    className=" "
                    style={{
                      textAlign: "left",
                      marginTop: "7px",
                      fontWeight: "bold",
                      fontSize: "12px"
                    }}
                  >
                    <Table>
                      POLICY TRANSACTIONS
                      {this.state.bill.Transactions &&
                        this.state.bill.Transactions.map(transaction => (
                          <>
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              {/* <td>TransactionID: {transaction.id}</td> */}
                              <td>Transaction Reference</td>
                              <td>{transaction.transactionRef}</td>
                            </tr>
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              {/* <td /> */}
                              <td>Transaction Amount</td>
                              <td>{transaction.amount}</td>
                            </tr>
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              {/* <td /> */}
                              <td>Transaction Type</td>
                              <td>{transaction.transactionType}</td>
                            </tr>
                            {transaction.transactionType === "MPESA" && (
                              <tr style={{ color: "black", fontWeight: "400" }}>
                                {/* <td /> */}
                                <td>MSISDN</td>
                                <td>{transaction.msisdn_idnum}</td>
                              </tr>
                            )}
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              {/* <td /> */}
                              <td>Transaction Date</td>
                              <td>
                                {moment(transaction.createdAt).format(
                                  "MMMM Do YYYY"
                                )}
                              </td>
                            </tr>
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              {/* <td /> */}
                              <td>Status</td>
                              <td>
                               {transaction.verified?<div style = {{display:'flex'}}>Verified{' '} <img style = {{width:'1rem', marginLeft:'5px'}} src = '/check-circle-solid.svg'/></div>:"Not Verified"}
                              </td>
                            </tr>
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              <td />
                              {transaction.verified ? (
                                <td>
                                  <Button
                                    color="secondary"
                                    style={{ width: "100%" }}
                                    onClick={()=>this.cancelVerification(transaction)}
                                  >
                                    Cancel verification
                                  </Button>
                                </td>
                              ) : (
                                <td>
                                  <Button
                                    color="primary"
                                    style={{ width: "100%" }}
                                    onClick={() =>
                                      this.confirmTransaction(transaction)
                                    }
                                  >
                                    Verify this transaction
                                  </Button>
                                </td>
                              )}
                            </tr>
                          </>
                        ))}
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Container>
        </div>
        {this.state.confirmTransaction && (
          <ConfirmTransaction
            isOpen={this.state.confirmTransaction}
            transaction={this.state.transactionDetails}
            toggle={this.toggle}
            verify = {this.state.verify}
          />
        )}
      </>
    );
  }
}

export default MedicalPolicyDetail;
