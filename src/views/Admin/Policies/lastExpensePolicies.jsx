import React, { Component } from "react";
import { CardHeader, Table, Card, Container } from "reactstrap";

class AdminLastExpensePolicies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
                textTransform: "uppercase"
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
                    <th scope="col">Name</th>
                    <th scope="col">Underwriter</th>
                    <th scope="col">Inpatient</th>
                    <th scope="col">Outpatient</th>
                    <th scope="col">Chronic & Pre-existing Conditions</th>
                    <th scope="col">Maternity</th>
                  </tr>
                </thead>
                <tbody>
                  
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
