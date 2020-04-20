import React, { Component } from "react";
import { CardHeader, Table, Card, Container } from "reactstrap";
import { getRequest } from "../../../requests/requests";
import moment from "moment";

class AdminLastExpensePolicies extends Component {
  constructor(props) {
    super(props);
    this.state = { policies: [] };
  }
  componentDidMount() {
    // get all medical policies
    getRequest("/policies/alllastexpensepolicies")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({ policies: response.data });
        }
      })
      .catch((err) => {});
  }
  handleRowClick = (policyDetails) => {
    console.log(policyDetails);
    this.props.history.push("/admin/PolicyDetail_LastExpense", policyDetails);
  };
  render() {
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
                  textTransform: "uppercase",
                }}
              >
                Last Expense Policies
              </h2>
              <Card style={{ padding: "20px" }} className="shadow">
                <CardHeader className="border-0">
                  <span style={{ fontSize: ".8rem", color: "orange" }}>
                    Please click on a row to select a plan
                  </span>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Policy holder</th>
                      <th scope="col">Date</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.policies.map((policy) => (
                      <tr onClick={() => this.handleRowClick(policy)}>
                        <td>{`${policy.firstName} ${policy.lastName}`}</td>
                        {/* <td></td> */}
                        <td>
                          {moment(policy.createdAt).format("MMMM Do YYYY")}
                        </td>
                        <td>
                          Ksh{" "}
                          {policy.Bill &&
                            policy.Bill.amount
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </td>
                        {/* <td>Not paid</td> */}
                        <td>{policy.active ? "Active" : "Inactive"}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tbody></tbody>
                </Table>
              </Card>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default AdminLastExpensePolicies;
