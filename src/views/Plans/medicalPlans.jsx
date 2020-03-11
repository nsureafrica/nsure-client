import React, { Component } from "react";
import { CardHeader, Table, Card, Container } from "reactstrap";
import { getRequest } from "../../requests/requests";
import "./medicalPlans.css";
class MedicalPlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicalPlans: []
    };
  }
  componentDidMount() {
    getRequest("/medicalPlans/getAllMedicalPlans").then(response => {
      console.log(response);
      this.setState({ medicalPlans: response.data });
    });
  }
  handleRowClick(plan) {
    this.props.history.push('/client/MedicalInsuranceForm', {plan:plan})
  }
  render() {
    console.log(this.state.medicalPlans);
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
              Available Medical Plans
            </h2>
            {/* {this.state.medicalPlans.map()} */}
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
                  {this.state.medicalPlans.map(plan => (
                    <tr
                      onClick={() => this.handleRowClick(plan)}
                      className="rowStyle"
                    >
                      <td>{plan.name}</td>
                      <td>{plan.Underwriter.name}</td>
                      <td>{plan.inpatientCoverLimit}</td>
                      <td>{plan.limitPerFamilyPerAnnum}</td>
                      <td>{plan.chronicCases}</td>
                      <td>{plan.maternityCoverLimit}</td>
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

export default MedicalPlans;
