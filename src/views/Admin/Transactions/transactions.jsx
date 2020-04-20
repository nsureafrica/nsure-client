import React, { Component } from "react";
import { CardHeader, Table, Card, Container, Button } from "reactstrap";
import { getRequest } from "../../../requests/requests";
import moment from "moment";
import lodash from "lodash";
import {
  ErrorOutline as Error,
  CheckCircleOutline as Success,
  ErrorRounded,
} from "@material-ui/icons";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      transactionDetails: {},
      transactionReference: "",
    };
  }
  componentDidMount() {
    // get all motor policies
    getRequest("/transactions/getalltransactions")
      .then((response) => {
        console.log(response);
        if (response.data.length > 0) {
          this.setState({ transactions: response.data });
        }
      })
      .catch((err) => {});
  }
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleRowClick = (transactionDetails) => {
    console.log(transactionDetails);
    this.props.history.push("/admin/transaction-detail", transactionDetails);
  };
  searchByRef = () => {
    if (this.state.transactionReference === "") {
      toaster.notify(
        <div
          style={{
            color: "#F96762",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          <Error style={{ width: "40px" }} /> Please enter a transaction
          reference
        </div>
      );
    } else {
      getRequest(
        `/transactions/gettransactionbytransactionref?transactionRef=${this.state.transactionReference}`
      )
        .then((response) => {
          console.log(response);
          this.props.history.push("/admin/transaction-detail", response.data[0]);
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
              <Error style={{ width: "40px" }} /> Could not find a transaction
              with that reference
            </div>
          );
        });
    }
  };
  render() {
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
              User Medical Policies
            </h2>
            <Card style={{ padding: "20px" }} className="shadow">
              <CardHeader className="border-0">
                <span style={{ fontSize: ".8rem", color: "orange" }}>
                  Please click on a row to view detail or search by transaction
                  reference
                </span>
                <div
                  style={{
                    float: "right",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="text"
                    placeholder=""
                    className="form-control-alternative"
                    id="transactionReference"
                    style={{ height: "35px", padding: "0 10px" }}
                    onChange={this.handleChange}
                  />
                  <Button
                    className="my-4"
                    color="primary"
                    style={{
                      margin: "0",
                      marginLeft: "5px",
                      height: "35px",
                      padding: "0 20px",
                    }}
                    onClick={this.searchByRef}
                  >
                    Search
                  </Button>
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Reference</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Type</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.transactions.map((transaction) => (
                    <tr onClick={() => this.handleRowClick(transaction)}>
                      <td>{transaction.transactionRef}</td>
                      <td>
                        {moment(transaction.createdAt).format("MMMM Do YYYY")}
                      </td>
                      <td>
                        Ksh{" "}
                        {transaction.amount
                          .toFixed(0)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </td>
                      <td>{transaction.transactionType}</td>
                      <td>
                        {transaction.verified ? "Verified" : "Not Verified"}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tbody></tbody>
              </Table>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}

export default Transactions;
