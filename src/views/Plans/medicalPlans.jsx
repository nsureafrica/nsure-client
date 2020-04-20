import React, { Component } from "react";
import {
  CardHeader,
  Table,
  Card,
  Container,
  Row,
  Col,
  CardBody,
  Button,
} from "reactstrap";
import { getRequest } from "../../requests/requests";
import "./medicalPlans.css";
import FormHeader from "../../components/Headers/FormHeader";
class MedicalPlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicalPlans: [],
      showForm: false,
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    getRequest("/medicalPlans/getAllMedicalPlans")
      .then((response) => {
        console.log(response);
        this.setState({ medicalPlans: response.data, loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }
  handleRowClick(plan) {
    this.props.history.push("/client/MedicalInsuranceForm", { plan: plan });
  }
  render() {
    console.log(this.state.medicalPlans);
    return (
      <>
        <FormHeader
          name="Medical Insurance"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBmXiTO2oAlqyGzfMp_NDH0_a9hig45Y3SoF4D47SXYgHWMDbF"
        />
        {/* <div className="header pb-8 pt-5 pt-md-8"> */}
          <Container className="mt--7" fluid>
            <div className="header-body">
              {this.state.showForm && (
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
                  Available Medical Plans
                </h2>
              )}
              {/* {this.state.medicalPlans.map()} */}
              {!this.state.showForm && (
                <Card
                  className="bg-secondary shadow"
                  style={{
                    marginBottom: "8em",
                  }}
                >
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3
                          className="mb-0"
                          style={{ color: "#11576a", fontWeight: 800 }}
                        >
                          Policy Description
                        </h3>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <p style={{ color: "#f66f31", fontWeight: 600 }}>
                      We are here to provide you with Peace of mind that comes
                      from knowing that you and your loved ones are covered the
                      sure way. We have partnered with the most reliable ,
                      affordable and reputable insurance companies to provide
                      Health insurance options made for you and that suit your
                      needs.
                    </p>
                    <p style={{ color: "#f66f31", fontWeight: 600 }}>
                      With access to a network of over 500 medical providers and
                      specialists around the country, Seamless Emergency Road
                      and air Evacuation our medical insurance gives you the
                      flexibility to choose where and how to receive treatment.
                    </p>
                    <p style={{ color: "#11576a", fontWeight: 800 }}>
                      Get Covered the Sure Way
                    </p>
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
              {this.state.showForm &&
                (this.state.loading ? (
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginLeft: "50%",
                    }}
                  >
                    <img
                      style={{ color: "red" }}
                      alt="Loading..."
                      src="/spinner.gif"
                    />
                  </div>
                ) : (
                  <Card style={{ padding: "20px" }} className="shadow">
                    <CardHeader className="border-0">
                      <span style={{ fontSize: ".8rem", color: "orange" }}>
                        Please click on a row to select a plan
                      </span>
                    </CardHeader>
                    <Table
                      className="align-items-center table-flush"
                      responsive
                    >
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Underwriter</th>
                          <th scope="col">Inpatient</th>
                          <th scope="col">Outpatient</th>
                          <th scope="col">Chronic & Pre-existing Conditions</th>
                          <th scope="col">Maternity</th>
                          <th scope="col">Personal Accident Limit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.medicalPlans.map((plan) => (
                          <tr
                            onClick={() => this.handleRowClick(plan)}
                            className="rowStyle"
                          >
                            <td>{plan.name}</td>
                            <td>{plan.Underwriter.name}</td>
                            <td>
                              Ksh{" "}
                              {plan.inpatientCoverLimit
                                .toFixed(0)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                            <td>
                              Ksh{" "}
                              {plan.outpatientCoverLimit
                                .toFixed(0)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                            <td>
                              Ksh{" "}
                              {plan.chronicCases
                                .toFixed(0)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                            <td>
                              Ksh{" "}
                              {plan.maternityCoverLimit
                                .toFixed(0)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                            <td>
                              Ksh{" "}
                              {plan.personalAccident
                                .toFixed(0)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tbody></tbody>
                    </Table>
                  </Card>
                ))}
            </div>
          </Container>
        {/* </div> */}
      </>
    );
  }
}

export default MedicalPlans;
