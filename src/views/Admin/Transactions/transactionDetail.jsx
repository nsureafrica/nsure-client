import React, { Component } from "react";
import {
  CardHeader,
  CardBody,
  Table,
  Card,
  Container,
  Button,
} from "reactstrap";
import moment from "moment";
import ConfirmTransaction from "../Policies/confirmTrasnsaction";

class TransactionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmTransaction: false,
      transactionDetails: {},
      verify: false,
    };
  }
  cancelVerification = () => {
    this.setState({
      confirmTransaction: true,
      transactionDetails: this.props.location.state,
      verify: false,
    });
  };
  confirmTransaction = () => {
    this.setState({
      confirmTransaction: true,
      transactionDetails: this.props.location.state,
      verify: true,
    });
  };
  toggle = () => {
    this.setState((prevState) => ({
      confirmTransaction: !prevState.confirmTransaction,
    }));
    this.props.history.push("/admin/transactions");
  };
  render() {
    console.log(this.props);
    const TransactionDetail = this.props.location.state;
    return (
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
                textTransform: "uppercase",
              }}
            >
              Transaction Verification
            </h2>
            <Card style={{ padding: "20px" }} className="shadow">
              <CardHeader className="border-0">
                <Button
                  color="secondary"
                  onClick={() => this.props.history.push("/admin/transactions")}
                >
                  Back
                </Button>
              </CardHeader>
              <CardBody
                style={{
                  textAlign: "left",
                  color: "rgb(181, 0, 50)",
                }}
              >
                <div
                  tag="h2"
                  className=" "
                  style={{
                    textAlign: "left",
                    marginTop: "7px",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  <Table>
                    TRANSACTION PARTICULARS
                    <tr style={{ color: "black", fontWeight: "400" }}>
                      <td>Transaction Reference</td>
                      <td>{TransactionDetail.transactionRef}</td>
                    </tr>
                    <tr style={{ color: "black", fontWeight: "400" }}>
                      <td>Transaction Date</td>
                      <td>
                        {moment(TransactionDetail.createdAt).format(
                          "MMMM Do YYYY"
                        )}
                      </td>
                    </tr>
                    <tr style={{ color: "black", fontWeight: "400" }}>
                      <td>Transaction Amount</td>
                      <td>
                        {TransactionDetail.amount
                          .toFixed(0)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </td>
                    </tr>
                    <tr style={{ color: "black", fontWeight: "400" }}>
                      <td>Status</td>
                      <td>
                        {TransactionDetail.verified
                          ? "Verified"
                          : "Not Verified"}
                      </td>
                    </tr>
                    <tr style={{ color: "black", fontWeight: "400" }}>
                      <td />
                      {TransactionDetail.verified ? (
                        <td>
                          <Button
                            color="secondary"
                            style={{ width: "100%" }}
                            onClick={() => this.cancelVerification()}
                          >
                            Cancel verification
                          </Button>
                        </td>
                      ) : (
                        <td>
                          <Button
                            color="primary"
                            style={{ width: "100%" }}
                            onClick={() => this.confirmTransaction()}
                          >
                            Verify this transaction
                          </Button>
                        </td>
                      )}
                    </tr>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </div>
        </Container>
        {this.state.confirmTransaction && (
          <ConfirmTransaction
            isOpen={this.state.confirmTransaction}
            transaction={this.state.transactionDetails}
            toggle={this.toggle}
            verify={this.state.verify}
          />
        )}
      </div>
    );
  }
}

export default TransactionDetail;
