import React, { Component } from "react";
import {
  CardHeader,
  Table,
  Card,
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import FormHeader from "../../../components/Headers/FormHeader";
import { getRequest } from "../../../requests/requests";
import { Doughnut } from "react-chartjs-2";
import moment from "moment";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboardData: {},
      startDate: moment().startOf("day").subtract(7, "day").toDate(),
      endDate: moment().endOf("day").toDate(),
    };
  }
  componentDidMount() {
    this.fetchDashboardData();
  }
  fetchDashboardData = () => {
    getRequest(
      `/dashboard/getDashboardData?startDate=${this.state.startDate.toISOString()}&endDate=${this.state.endDate.toISOString()}`
    ).then((response) => {
      this.setState({ dashboardData: response.data });
    });
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
  render() {
    console.log(moment(this.state.startDate).toDate());
    console.log(new Date());
    const policiesCountData = {
      labels: [
        "Motor Policies",
        "Education Policies",
        "Medical Policies",
        "Travel Policies",
      ],
      datasets: [
        {
          data: [
            this.state.dashboardData.numberOfMotorPolicies,
            this.state.dashboardData.numberOfEducationPolicies,
            this.state.dashboardData.numberOfMedicalPolicies,
            this.state.dashboardData.numberOfTravelPolicies,
          ],
          backgroundColor: ["#8BC34A", "#F44336", "#00BCD4", "#FF9800"],
          hoverBackgroundColor: ["#8BC34A", "#F44336", "#00BCD4", "#FF9800"],
        },
      ],
    };
    return (
      <>
        <div className="header pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              <Row style = {{display:'flex', alignItems:'center'}}>
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
                  <Button onClick={this.fetchDashboardData}>
                    Apply filter
                  </Button>
                </Col>
              </Row>
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
                <Col lg="3">
                  <Card
                    style={{ padding: "20px", marginBottom: "20px" }}
                    className="shadow"
                  >
                    <div>
                      <h3>Motor Quote Total</h3>
                      <span>
                        {this.state.dashboardData.sumOfMotorQuoteAmount
                          ? this.state.dashboardData.sumOfMotorQuoteAmount[0]
                              .total_amount
                            ? `KES ${this.state.dashboardData.sumOfMotorQuoteAmount[0].total_amount
                                .toFixed(0)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                            : "KES 0"
                          : 0}
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
                      <h3>Education Quote Total</h3>
                      <span>
                        {this.state.dashboardData.sumOfEducationQuoteAmount
                          ? this.state.dashboardData
                              .sumOfEducationQuoteAmount[0].total_amount
                            ? `KES ${this.state.dashboardData.sumOfEducationQuoteAmount[0].total_amount
                                .toFixed(0)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                            : 0
                          : 0}
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
                      <h3>Medical Quote Total</h3>
                      <span>
                        {this.state.dashboardData.sumOfMedicalQuoteAmount
                          ? this.state.dashboardData.sumOfMedicalQuoteAmount[0]
                              .total_amount
                            ? `KES ${this.state.dashboardData.sumOfMedicalQuoteAmount[0].total_amount
                                .toFixed(0)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                            : 0
                          : 0}
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
                      <h3>Travel Quote Total</h3>
                      <span>
                        {this.state.dashboardData.sumOfTravelQuoteAmount
                          ? this.state.dashboardData.sumOfTravelQuoteAmount[0]
                              .total_amount
                            ? `KES ${this.state.dashboardData.sumOfTravelQuoteAmount[0].total_amount
                                .toFixed(0)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                            : "KES 0"
                          : "KES 0"}
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
                            display: true,
                          },
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
