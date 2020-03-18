import React, { Component } from "react";
import { CardHeader, Table, Card, Container } from "reactstrap";
import { getRequest } from "../../requests/requests";
import "./medicalPlans.css";

class LastExpensePlans extends Component {
  constructor(props) {
    super(props);
    this.state = { lastExpensePlans: [] };
  }
  componentDidMount() {
    getRequest("/lastExpensePlans/getLastExpensePlans").then(response => {
      console.log(response);
      this.setState({ lastExpensePlans: response.data });
    });
  }
  handleRowClick(plan) {
      this.props.selectPlan(plan);
  }
  render() {
    console.log(this.state.lastExpensePlans);
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
                textTransform: "uppercase"
              }}
            >
              Last Expense Plans
            </h2>
            {/* {this.state.lastExpensePlans.map()} */}
            <Card style={{ padding: "20px" }} className="shadow">
              <CardHeader className="border-0">
                <span style={{ fontSize: ".8rem", color: "orange" }}>
                  Please click on a row to select a plan
                </span>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Underwriter</th>
                    <th scope="col">Type of Claim</th>
                    <th scope="col">Annual Cover</th>                    
                  </tr>
                </thead>
                <tbody>
                  {this.state.lastExpensePlans.map(plan => (
                    <tr
                      onClick={() => this.handleRowClick(plan)}
                      className="rowStyle"
                    >
                      <td>{plan.name}</td>
                      <td>{plan.Underwriter.name}</td>
                      <td>{plan.typeOfClaim}</td>
                      <td>{plan.annualCover}</td>
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

export default LastExpensePlans;
