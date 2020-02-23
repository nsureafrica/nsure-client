import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import FormHeader from "../../components/Headers/FormHeader";
import Toggle from "../components/toggle";
import { postRequest } from "../../requests/requests";

class TravelInsuranceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      nationalId: "",
      kraPin: "",
      passportNumber: "",
      destination: "",
      travelDate: Date.now(),
      returnDate: Date.now(),
      accompaniedByFamilyMember: false,
      medicalExpenses: "",
      medicalEvaluationExpenses: "",
      followUpTreatmentInCountryOfResidence: false,
      repartriationOfMortalRemains: false,
      prematureReturnInCaseOfDeath: false,
      legalAssistance: false,
      lossOrTheft: false,
      luggageDelay: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleToggle(identifier) {
    this.setState(state => ({ [identifier]: !state[identifier] }));
  }
  submitDetails() {
    const token = localStorage.getItem("token");
    const jwtDecode = require("jwt-decode");
    let userData;
    if (token) {
      userData = jwtDecode(token);
    } else {
      // this.props.history.push("/auth/login");
    }
    const payload = {
      medicalExpenses: this.state.medicalExpenses,
      followUpTreatmentInCountryOfResidence: this.state
        .followUpTreatmentInCountryOfResidence,
      medicalEvaluationExpenses: this.state.medicalEvaluationExpenses,
      repartriationOfMortalRemains: this.state.repartriationOfMortalRemains,
      accompaniedByFamilyMember: this.state.accompaniedByFamilyMember,
      prematureReturn: this.state.prematureReturnInCaseOfDeath,
      legalAssistance: this.state.legalAssistance,
      lossOrTheft: this.state.lossOrTheft,
      luggageDelay: this.state.luggageDelay,
      destination: this.state.destination,
      nationalId: this.state.nationalId,
      kraPin: this.state.kraPin,
      startDate: this.state.travelDate,
      endDate: this.state.returnDate,
      passportNumber: this.state.passportNumber,
      UserId: userData.id
    };
    postRequest("/policies/travel/policy", payload).then(response => {
      console.log(response);
      this.props.history.push('/client/travel')
    });
  }

  render() {
    return (
      <>
        <FormHeader
          name="Travel Insurance"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTAdwqrmR4XVcCTAQfJSKo_74FfH9Z7m8Dj2mzTL_iBBBpHpvM"
        />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Travel Insurance Details</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">General</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              First Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="firstName"
                              placeholder="First name"
                              type="text"
                              value={this.state.firstName}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Last Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="lastName"
                              placeholder="Last name"
                              type="text"
                              value={this.state.lastName}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              National ID
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="nationalId"
                              type="number"
                              value={this.state.nationalId}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              KRA Pin
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="kraPin"
                              type="text"
                              value={this.state.kraPin}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Passport Number
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="passportNumber"
                              type="text"
                              value={this.state.passportNumber}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Destination
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="destination"
                              type="text"
                              value={this.state.destination}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>

                        <Col lg="6">
                          <Row>
                            <Col lg={6}>
                              <FormGroup>
                                <label className="form-control-label">
                                  Travel date
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="travelDate"
                                  type="date"
                                  value={this.state.travelDate}
                                  onChange={this.handleChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg={6}>
                              <FormGroup>
                                <label className="form-control-label">
                                  Return date
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="returnDate"
                                  type="date"
                                  value={this.state.returnDate}
                                  onChange={this.handleChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg="6">
                          <Toggle
                            fieldName="Accompanied by Family Member? (Minor)"
                            identifier="accompaniedByFamilyMember"
                            toggleValue={this.state.accompaniedByFamilyMember}
                            toggleHandler={this.handleToggle}
                          />
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Medical</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Medical expenses ($450 excess)
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="medicalExpenses"
                              placeholder="Medical expenses"
                              type="number"
                              value={this.state.medicalExpenses}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Medical evaluation expenses
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="medicalEvaluationExpenses"
                              placeholder=" Medical evaluation expenses"
                              type="text"
                              value={this.state.medicalEvaluationExpenses}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <Toggle
                            fieldName="Follow up treatment in country of residence"
                            identifier="followUpTreatmentInCountryOfResidence"
                            toggleValue={
                              this.state.followUpTreatmentInCountryOfResidence
                            }
                            toggleHandler={this.handleToggle}
                          />
                          <Toggle
                            fieldName="Repartriation of mortal remains (in case of death)"
                            identifier="repartriationOfMortalRemains"
                            toggleValue={
                              this.state.repartriationOfMortalRemains
                            }
                            toggleHandler={this.handleToggle}
                          />
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Travel Assistance Services
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="12">
                          <Toggle
                            fieldName="Premature return in case of death or imminent death of a relative or a business associate"
                            identifier="prematureReturnInCaseOfDeath"
                            toggleValue={
                              this.state.prematureReturnInCaseOfDeath
                            }
                            toggleHandler={this.handleToggle}
                          />
                        </Col>
                        <Col lg="12">
                          <Toggle
                            fieldName="Legal Assistance"
                            identifier="legalAssistance"
                            toggleValue={this.state.legalAssistance}
                            toggleHandler={this.handleToggle}
                          />
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">
                      Luggage,trade samples or personal effects
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="12">
                          <Toggle
                            fieldName="Loss or Theft"
                            identifier="lossOrTheft"
                            toggleValue={this.state.lossOrTheft}
                            toggleHandler={this.handleToggle}
                          />
                        </Col>
                        <Col lg="12">
                          <Toggle
                            fieldName="Luggage Delay"
                            identifier="luggageDelay"
                            toggleValue={this.state.luggageDelay}
                            toggleHandler={this.handleToggle}
                          />
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />

                    <div className="text-center">
                      <Button
                        className="my-4"
                        color="primary"
                        onClick={() => this.submitDetails()}
                      >
                        Submit details
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default TravelInsuranceForm;
