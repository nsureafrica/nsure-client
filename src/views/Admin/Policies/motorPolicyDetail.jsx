import React, { Component } from "react";
import { CardHeader, CardBody, Table, Card, Container } from "reactstrap";
import { getRequest } from "../../../requests/requests";
import moment from "moment";

class MotorPolicyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { bill: {} };
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
                Motor Policy
              </h2>
              <Card style={{ padding: "20px" }} className="shadow">
                <CardHeader className="border-0">
                  <button
                    onClick={() =>
                      this.props.history.push("/admin/motor-policies")
                    }
                  >
                    Back
                  </button>
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
                    </Table>
                  </div>
                </CardBody>
              </Card>
              <br/>
              <Card>
                <CardBody style={{
                    textAlign: "left",
                    color: "rgb(181, 0, 50)"
                  }}>
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
                              <td>TransactionID: {transaction.id}</td>
                              <td>Transaction Ref</td>
                              <td>{transaction.transactionRef}</td>
                            </tr>
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              <td />
                              <td>Transaction Amount</td>
                              <td>{transaction.amount}</td>
                            </tr>
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              <td />
                              <td>Transaction Type</td>
                              <td>{transaction.transactionType}</td>
                            </tr>
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              <td />
                              <td>Transaction Date</td>
                              <td>
                                {moment(transaction.createdAt).format(
                                  "MMMM Do YYYY"
                                )}
                              </td>
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
      </>
    );
  }
}

export default MotorPolicyDetail;
