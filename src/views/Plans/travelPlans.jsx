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
class TravelPlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travelPlans: [],
      showForm: false,
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    getRequest("/travelRates/getAllTravelPlansGroupedByType")
      .then((response) => {
        console.log(response);
        this.setState({ travelPlans: response.data, loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }
  handleRowClick(plan) {
    this.props.history.push("/client/TravelInsuranceForm", { plan: plan });
  }
  render() {
    console.log(this.state.travelPlans);
    return (
      <>
        <FormHeader
          name="Travel Insurance"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTAdwqrmR4XVcCTAQfJSKo_74FfH9Z7m8Dj2mzTL_iBBBpHpvM"
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
                Available Travel Plans
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
                    Travelling is generally a fun, heart-warming experience.
                    However, accidents sometimes do happen. When they do occur,
                    they can not only ruin your trip, but affect your finances
                  </p>
                  <p style={{ color: "#f66f31", fontWeight: 600 }}>
                    With travel insurance Spire Insurance Brokers , you don't
                    have to worry about unexpected incidents. Whether you
                    experience flight delays, lose your bags, or you become ill
                    while you’re away, We can help when you need it most.
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
                  <>
                <Card style={{ padding: "20px" }} className="shadow">
                  <CardHeader className="border-0">
                    <span style={{ fontSize: ".8rem", color: "orange" }}>
                      Individual Plans
                    </span>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Underwriter</th>
                        <th scope="col">Type</th>
                        <th scope = 'col'>Currency</th>
                        <th scope="col">Medical expenses</th>
                        <th scope="col">Medical repatriation</th>
                        <th scope="col">Child repatriation</th>
                        <th scope="col">Relatives repatriation</th>
                        <th scope="col">Body repatriation</th>
                        <th scope="col">Optical emergency care</th>
                        <th scope="col">Dental emergency care</th>
                        <th scope="col">Follow-up treatment</th>
                        <th scope="col">Premature return incase of death</th>
                        <th scope="col">Advance of bail</th>
                        <th scope="col">Legal assistance</th>
                        <th scope="col">
                          Loss or theft of unregistered luggage
                        </th>
                        <th scope="col">Loss or theft of registered luggage</th>
                        <th scope="col">Luggage delay</th>
                        <th scope="col">Travel delay</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.travelPlans.individual.map((plan) => (
                        <tr
                          onClick={() => this.handleRowClick(plan)}
                          className="rowStyle"
                        >
                          <td>{plan.name}</td>
                          <td>{plan.Underwriter.name}</td>
                          <td>{plan.type}</td>
                          <td>{plan.currency}</td>
                          <td>
                            
                            {plan.medicalExpenses
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.medicalRepatriation
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.childRepatriation
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.relativesRepatriation
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.bodyRepatriation
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.opticalEmergencyCare
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.dentalEmergencyCare
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.followUpTreatment
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.prematureReturnInCaseOfDeath
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.advanceOfBail
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.legalAssistance
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.lossOrTheftUnregisteredLuggage
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.lossOrTheftRegisteredLuggage
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.luggageDelay
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.travelDelay
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
                <Card style={{ padding: "20px", marginTop:'20px' }} className="shadow">
                  <CardHeader className="border-0">
                    <span style={{ fontSize: ".8rem", color: "orange" }}>
                      Family Plans
                    </span>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Underwriter</th>
                        <th scope="col">Type</th>
                        <th scope = 'col'>Currency</th>
                        <th scope="col">Medical expenses</th>
                        <th scope="col">Medical repatriation</th>
                        <th scope="col">Child repatriation</th>
                        <th scope="col">Relatives repatriation</th>
                        <th scope="col">Body repatriation</th>
                        <th scope="col">Optical emergency care</th>
                        <th scope="col">Dental emergency care</th>
                        <th scope="col">Follow-up treatment</th>
                        <th scope="col">Premature return incase of death</th>
                        <th scope="col">Advance of bail</th>
                        <th scope="col">Legal assistance</th>
                        <th scope="col">
                          Loss or theft of unregistered luggage
                        </th>
                        <th scope="col">Loss or theft of registered luggage</th>
                        <th scope="col">Luggage delay</th>
                        <th scope="col">Travel delay</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.travelPlans.family.map((plan) => (
                        <tr
                          onClick={() => this.handleRowClick(plan)}
                          className="rowStyle"
                        >
                          <td>{plan.name}</td>
                          <td>{plan.Underwriter.name}</td>
                          <td>{plan.type}</td>
                          <td>{plan.currency}</td>
                          <td>
                            
                            {plan.medicalExpenses
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.medicalRepatriation
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.childRepatriation
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.relativesRepatriation
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.bodyRepatriation
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.opticalEmergencyCare
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.dentalEmergencyCare
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.followUpTreatment
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.prematureReturnInCaseOfDeath
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.advanceOfBail
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.legalAssistance
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.lossOrTheftUnregisteredLuggage
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.lossOrTheftRegisteredLuggage
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.luggageDelay
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.travelDelay
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
                <Card style={{ padding: "20px", marginTop:'20px' }} className="shadow">
                  <CardHeader className="border-0">
                    <span style={{ fontSize: ".8rem", color: "orange" }}>
                      Student Plans
                    </span>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Underwriter</th>
                        <th scope="col">Type</th>
                        <th scope = 'col'>Currency</th>
                        <th scope="col">Medical expenses</th>
                        <th scope="col">Medical repatriation</th>
                        <th scope="col">Child repatriation</th>
                        <th scope="col">Relatives repatriation</th>
                        <th scope="col">Body repatriation</th>
                        <th scope="col">Optical emergency care</th>
                        <th scope="col">Dental emergency care</th>
                        <th scope="col">Follow-up treatment</th>
                        <th scope="col">Premature return incase of death</th>
                        <th scope="col">Advance of bail</th>
                        <th scope="col">Legal assistance</th>
                        <th scope="col">
                          Loss or theft of unregistered luggage
                        </th>
                        <th scope="col">Loss or theft of registered luggage</th>
                        <th scope="col">Luggage delay</th>
                        <th scope="col">Travel delay</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.travelPlans.student.map((plan) => (
                        <tr
                          onClick={() => this.handleRowClick(plan)}
                          className="rowStyle"
                        >
                          <td>{plan.name}</td>
                          <td>{plan.Underwriter.name}</td>
                          <td>{plan.type}</td>
                          <td>{plan.currency}</td>
                          <td>
                            {plan.medicalExpenses
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            {plan.medicalRepatriation
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            {plan.childRepatriation
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            {plan.relativesRepatriation
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            {plan.bodyRepatriation
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            {plan.opticalEmergencyCare
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            {plan.dentalEmergencyCare
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            {plan.followUpTreatment
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            {plan.prematureReturnInCaseOfDeath
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            {plan.advanceOfBail
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.legalAssistance
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.lossOrTheftUnregisteredLuggage
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.lossOrTheftRegisteredLuggage
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.luggageDelay
                              .toFixed(0)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                          <td>
                            
                            {plan.travelDelay
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
                </>
              ))}
          </div>
        </Container>
        {/* </div> */}
      </>
    );
  }
}

export default TravelPlans;
