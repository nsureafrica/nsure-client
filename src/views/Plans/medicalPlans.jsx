import React, { Component } from "react";
import {
  CardHeader,
  Table,
  Card,
  Container,
  Row,
  Col,
  CardBody,
  Button
} from "reactstrap";
import { getRequest } from "../../requests/requests";
import "./medicalPlans.css";
class MedicalPlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicalPlans: [],
      showForm: false
    };
  }
  componentDidMount() {
    getRequest("/medicalPlans/getAllMedicalPlans").then(response => {
      console.log(response);
      this.setState({ medicalPlans: response.data });
    });
  }
  handleRowClick(plan) {
    this.props.history.push("/client/MedicalInsuranceForm", { plan: plan });
  }
  render() {
    console.log(this.state.medicalPlans);
    return (
      <div className="header pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {this.state.showForm && (
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
            )}
            {/* {this.state.medicalPlans.map()} */}
            {!this.state.showForm && (
              <Card
                className="bg-secondary shadow"
                style={{
                  marginBottom: "8em"
                }}
              >
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Policy Description</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  A good quality education is a necessity in today’s world. It
                  equips us with everything we need to help us achieve economic
                  freedom and to make our dreams come true. Your child’s
                  education is therefore a top priority. However, due to
                  uncertainties such as the increasing costs of higher
                  education, insufficient funds or the premature death of one or
                  both parents, your child may not be able to complete his
                  education. That is why his future should be anticipated and
                  planned for today. We have a unique product to help you
                  finance your child’s educational needs. So, protect your
                  child’s future. Give him one of life’s greatest gifts, a good
                  education Kindly provide us the below details to take the
                  first steps to securing your childs future and we will reach
                  out to you with a proposed plan
                </CardBody>
                <div className="text-center">
                  <Button
                    className="my-4"
                    color="primary"
                    onClick={() => this.setState({ showForm: true })}
                  >
                    Continue
                  </Button>
                </div>
              </Card>
            )}
            {this.state.showForm && (
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
            )}
          </div>
        </Container>
      </div>
    );
  }
}

export default MedicalPlans;
