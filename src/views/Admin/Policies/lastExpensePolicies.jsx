import React, { Component } from "react";
import {
  CardHeader,
  Table,
  Card,
  Container,
  Button,
  Row,
  Col,
  FormGroup,
  Input,
} from "reactstrap";
import { getRequest, getFile } from "../../../requests/requests";
import moment from "moment";

class AdminLastExpensePolicies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policies: [],
      startDate: moment().startOf("day").subtract(7, "day").toDate(),
      endDate: moment().endOf("day").toDate(),
    };
  }
  componentDidMount() {
    this.fetchAllLastExpensePolicies();
  }

  fetchAllLastExpensePolicies = () => {
    // get all motor policies
    getRequest(
      `/policies/lastExpense/getAllLastExpensePolicies?startDate=${this.state.startDate.toISOString()}&endDate=${this.state.endDate.toISOString()}`
    )
      .then((response) => {
        console.log(response);
        if (response.data.length > 0) {
          this.setState({ policies: response.data });
        }
      })
      .catch((err) => {});
  };

  handleChange = (event) => {
    if (event.target.id === "startDate") {
      this.setState({
        startDate: moment(event.target.value).startOf("day").toDate(),
      });
    } else if (event.target.id === "endDate") {
      this.setState({
        endDate: moment(event.target.value).endOf("day").toDate(),
      });
    }
  };
  ren

  exportCSVData = () => {
    console.log("test");
    getFile(`/policies/lastExpense/exportDataAsCsv?startDate=${this.state.startDate.toISOString()}&endDate=${this.state.endDate.toISOString()}`).then((response) => {
      console.log(response);
      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", "last_expense_policies.csv"); //any other extension
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  };

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
              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col lg="3">
                  <FormGroup>
                    <label className="form-control-label">Start date</label>
                    <Input
                      className="form-control-alternative"
                      // placeholder="Vehicle's estimated value (KES)"
                      type="date"
                      value={this.state.startDate.toISOString().substr(0, 10)}
                      onChange={this.handleChange}
                      id="startDate"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="3">
                  <FormGroup>
                    <label className="form-control-label">End date</label>
                    <Input
                      className="form-control-alternative"
                      // placeholder="Vehicle's estimated value (KES)"
                      type="date"
                      value={this.state.endDate.toISOString().substr(0, 10)}
                      onChange={this.handleChange}
                      id="endDate"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="3">
                  <Button onClick={this.fetchAllLastExpensePolicies}>
                    Apply filter
                  </Button>
                </Col>
              </Row>
              <Card style={{ padding: "20px" }} className="shadow">
                <CardHeader className="border-0">
                  <span style={{ fontSize: ".8rem", color: "orange" }}>
                    Please click on a row to select a plan
                  </span>
                  <Button
                    style={{ float: "right" }}
                    onClick={this.exportCSVData}
                  >
                    Export to CSV
                  </Button>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Policy holder</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Email</th>
                      <th scope="col">Date</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.policies.map((policy) => (
                      <tr onClick={() => this.handleRowClick(policy)}>
                        <td>{`${policy.firstName} ${policy.lastName}`}</td>
                        <td>{policy.User.phoneNumber}</td>
                        <td>{policy.User.email}</td>
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
