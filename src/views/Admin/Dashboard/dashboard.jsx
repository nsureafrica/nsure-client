import React, { Component } from "react";
import { CardHeader, Table, Card, Container, Row, Col } from "reactstrap";
import FormHeader from "../../../components/Headers/FormHeader";
import { getRequest } from "../../../requests/requests";
import { Doughnut } from "react-chartjs-2";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { dashboardData: {} };
  }
  componentDidMount() {
    getRequest("/dashboard/getdashboarddata").then(response => {
      this.setState({ dashboardData: response.data });
    });
  }
  render() {
    const policiesCountData = {
      labels: [
        "Motor Policies",
        "Education Policies",
        "Medical Policies",
        "Travel Policies"
      ],
      datasets: [
        {
          data: [
            this.state.dashboardData.numberOfMotorPolicies,
            this.state.dashboardData.numberOfEducationPolicies,
            this.state.dashboardData.numberOfMedicalPolicies,
            this.state.dashboardData.numberOfTravelPolicies
          ],
          backgroundColor: ["#8BC34A", "#F44336", "#00BCD4", "#FF9800"],
          hoverBackgroundColor: ["#8BC34A", "#F44336", "#00BCD4", "#FF9800"]
        }
      ]
    };
    return (
      <>
        <div className="header pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              <Row>
                <Col lg="3">
                  <Card
                    style={{ padding: "20px", marginBottom: "20px" }}
                    className="shadow"
                  >
                    <div>
                      <h3>Motor Policies</h3>
                      <span>
                        {this.state.dashboardData.numberOfMotorPolicies}
                      </span>
                    </div>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card
                    style={{ padding: "20px", marginBottom: "20px" }}
                    className="shadow"
                  >
                    <div>
                      <h3>Education Policies</h3>
                      <span>
                        {this.state.dashboardData.numberOfEducationPolicies}
                      </span>
                    </div>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card
                    style={{ padding: "20px", marginBottom: "20px" }}
                    className="shadow"
                  >
                    <div>
                      <h3>Medical Policies</h3>
                      <span>
                        {this.state.dashboardData.numberOfMedicalPolicies}
                      </span>
                    </div>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card
                    style={{ padding: "20px", marginBottom: "20px" }}
                    className="shadow"
                  >
                    <div>
                      <h3>Travel Policies</h3>
                      <span>
                        {this.state.dashboardData.numberOfTravelPolicies}
                      </span>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <Card
                    style={{ padding: "20px", marginBottom: "20px" }}
                    className="shadow"
                  >
                    <CardHeader>Policy Breakdown</CardHeader>
                    <div style={{ padding: "40px 0px" }}>
                      <Doughnut
                        data={policiesCountData}
                        options={{
                          legend: {
                            display: true
                          }
                        }}
                      />
                    </div>
                  </Card>
                </Col>
                <Col lg="6"></Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default AdminDashboard;
