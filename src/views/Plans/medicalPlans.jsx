import React, { Component } from "react";
import { CardHeader, Table, Card, Container } from "reactstrap";
import { getRequest } from "../../requests/requests";

class MedicalPlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicalPlans: []
    };
  }
  componentDidMount() {
    getRequest("/medicalPlans/getAllMedicalPlans").then(response => {
      this.setState({ medicalPlans: response.data });
    });
  }
  render() {
      console.log(this.state.medicalPlans)
    return (
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
              Available Medical Plans
            </h2>
            {this.state.medicalPlans.map()}
            <Card style={{ padding: "20px" }} className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Card tables</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Inpatient Cover Limit</th>
                    <th scope="col">Chronic Cases</th>
                    <th scope="col">Maternity Cover</th>
                    <th scope="col">Completion</th>
                    <th scope="col" />
                  </tr>
                </thead>
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
