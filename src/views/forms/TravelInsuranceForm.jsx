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
  Col,
} from "reactstrap";
// core components
import FormHeader from "../../components/Headers/FormHeader";
import Toggle from "../components/toggle";
import { postRequest } from "../../requests/requests";
import {
  ErrorOutline as Error,
  CheckCircleOutline as Success,
  ErrorRounded,
} from "@material-ui/icons";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

class TravelInsuranceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      // nationalId: "",
      // kraPin: "",
      nationalIdScan: [],
      KRAPinScan: [],
      passportScan: [],
      // passportNumber: "",
      destination: "",
      travelDate: null,
      returnDate: null,
      accompaniedByFamilyMember: false,
      medicalExpenses: 0,
      medicalEvaluationExpenses: 0,
      followUpTreatmentInCountryOfResidence: false,
      repartriationOfMortalRemains: false,
      prematureReturnInCaseOfDeath: false,
      legalAssistance: false,
      lossOrTheft: false,
      luggageDelay: false,
      showForm: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleToggle(identifier) {
    this.setState((state) => ({ [identifier]: !state[identifier] }));
  }
  handleFile = (event) => {
    this.setState({ [event.target.id]: event.target.files });
  };
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
      accompanyingFamilyMember: this.state.accompaniedByFamilyMember,
      prematureReturn: this.state.prematureReturnInCaseOfDeath,
      legalAssistance: this.state.legalAssistance,
      lossOrTheft: this.state.lossOrTheft,
      luggageDelay: this.state.luggageDelay,
      destination: this.state.destination,
      // nationalId: this.state.nationalId,
      // kraPin: this.state.kraPin,
      startDate: this.state.travelDate,
      endDate: this.state.returnDate,
      // passportNumber: this.state.passportNumber,
      // UserId: userData.id
    };
    var optionsSelected = this.state;
    var errors = [];
    var currentDate = new Date();
    if (optionsSelected.firstName === "" || optionsSelected.lastName === "") {
      errors.push("First name & Last name cannot be empty");
    }
    if (
      this.state.nationalIdScan.length === 0 ||
      this.state.nationalIdScan[0] === {}
    ) {
      errors.push("National ID missing");
    } else if (this.state.nationalIdScan[0].size > 2000000) {
      errors.push("National ID file too large");
    }

    if (this.state.KRAPinScan.length === 0 || this.state.KRAPinScan[0] === {}) {
      errors.push("KRA PIN missing");
    } else if (this.state.KRAPinScan[0].size > 2000000) {
      errors.push("KRA PIN file too large");
    }
    if (
      this.state.passportScan.length === 0 ||
      this.state.passportScan[0] === {}
    ) {
      errors.push("Passport missing");
    } else if (this.state.passportScan[0].size > 2000000) {
      errors.push("Passport file too large");
    }

    // if (optionsSelected.passportNumber === "") {
    //   errors.push("Passport Number cannot be empty");
    // }
    if (optionsSelected.destination === "") {
      errors.push("Destination cannot be empty");
    }
    if (
      optionsSelected.startDate === null ||
      optionsSelected.endDate === null
    ) {
      errors.push("Travel and Return dates cannot be empty");
    }

    let finalPayload = new FormData();
    Object.keys(payload).map((key) => {
      finalPayload.append(key, payload[key]);
    });

    for (var i = 0; i < this.state.nationalIdScan.length; i++) {
      finalPayload.append("nationalId", this.state.nationalIdScan[i]);
    }
    for (var i = 0; i < this.state.KRAPinScan.length; i++) {
      finalPayload.append("kraPin", this.state.KRAPinScan[i]);
    }
    for (var i = 0; i < this.state.passportScan.length; i++) {
      finalPayload.append("passport", this.state.passportScan[i]);
    }

    if (errors.length > 0) {
      // print errors
      toaster.notify(
        <div
          style={{
            color: "#F96762",
            fontSize: "13px",
            fontWeight: 600,
            textAlign: "left",
          }}
        >
          Please correct the following errors:
          {
            <ol>
              {errors.map((error) => (
                <li>{error}</li>
              ))}
            </ol>
          }
        </div>,
        {
          duration: 10000,
        }
      );
    } else {
      postRequest("/policies/travel/policy", finalPayload).then((response) => {
        console.log(response);
        this.props.history.push("/client/notified");
      });
    }
  }

  render() {
    console.log(this.state);
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
                      However, accidents sometimes do happen. When they do
                      occur, they can not only ruin your trip, but affect your
                      finances.
                    </p>
                    <p style={{ color: "#f66f31", fontWeight: 600 }}>
                      With travel insurance Spire Insurance Brokers , you don't
                      have to worry about unexpected incidents. Whether you
                      experience flight delays, lose your bags, or you become
                      ill while you’re away, We can help when you need it most.
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
              {this.state.showForm && (
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
                                First Name *
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
                                Last Name *
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
                                Colored National ID. (Size limit 2MB) *
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="nationalIdScan"
                                type="file"
                                // value={this.state.nationalIdScan}
                                onChange={this.handleFile}
                                required
                              />
                            </FormGroup>
                          </Col>
                          {/* <Col lg="6">
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
                          </Col> */}
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                KRA Pin Certificate (Size limit 2MB) *
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="KRAPinScan"
                                type="file"
                                // value={this.state.KRAPinScan}
                                onChange={this.handleFile}
                                required
                              />
                            </FormGroup>
                          </Col>
                          {/* <Col lg="6">
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
                          </Col> */}
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                Passport (Last Page, Size limit 2MB) *
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="passportScan"
                                type="file"
                                // value={this.state.KRAPinScan}
                                onChange={this.handleFile}
                                required
                              />
                            </FormGroup>
                          </Col>
                          {/* <Col lg="6">
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
                          </Col> */}
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                Destination *
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
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default TravelInsuranceForm;
