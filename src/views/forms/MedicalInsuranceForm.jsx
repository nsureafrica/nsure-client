/* eslint-disable no-console */
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
import Toggle from "../components/toggle";

// core components
import FormHeader from "../../components/Headers/FormHeader";
import { postRequest } from "../../requests/requests";
import {
  ErrorOutline as Error,
  CheckCircleOutline as Success,
  ErrorRounded
} from "@material-ui/icons";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

class MedicalInsuranceForm extends React.Component {
  constructor(props) {
    super(props);
    const optionsSelected = JSON.parse(localStorage.getItem("optionsSelected_Medical"));
    this.state = {
      principalFirstName: optionsSelected ? optionsSelected.principalFirstName :"",
      principalLastName: optionsSelected ? optionsSelected.principalLastName :"",
      principalAge: optionsSelected ? optionsSelected.principalAge :"",
      principalIdNumber: optionsSelected ? optionsSelected.principalIdNumber :"",
      principalKraPin: optionsSelected ? optionsSelected.principalKraPin :"",
      married: optionsSelected ? optionsSelected.married :false,
      numberOfChildren: optionsSelected ? optionsSelected.numberOfChildren :0,
      spouseFirstName: optionsSelected ? optionsSelected.spouseFirstName :"",
      spouseLastName: optionsSelected ? optionsSelected.spouseLastName :"",
      spouseAge: optionsSelected ? optionsSelected.spouseAge :"",
      spouseIdNumber: optionsSelected ? optionsSelected.spouseIdNumber :"",
      spouseKraPin: optionsSelected ? optionsSelected.spouseKraPin :"",
      outpatientPerPerson: optionsSelected ? optionsSelected.outPatientPerPerson :false,
      maternityCover: optionsSelected ? optionsSelected.maternityCover :false,
      dentalCover: optionsSelected ? optionsSelected.dentalCover :false,
      opticalCover: optionsSelected ? optionsSelected.opticalCover :false
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
  getQuote() {
    const payload = {
      medicalPlanId: this.props.location.state.plan.id,
      outPatientPerPerson: this.state.outpatientPerPerson,
      principalAge: this.state.principalAge,
      spouseAge: this.state.spouseAge,
      numberOfChildren: this.state.numberOfChildren
    };
    var selectedOptions_medical = { ...this.state };
    var errors = [];
    var currentDate = new Date();
    if (
      selectedOptions_medical.principalFirstName === "" ||
      selectedOptions_medical.principalLastName === ""
    ) {
      errors.push("Principal First name & Last name cannot be empty");
    }
    if (selectedOptions_medical.principalAge === "") {
      errors.push("Principal Age cannot be empty");
    }
    if (!parseInt(selectedOptions_medical.principalAge)) {
      errors.push("Principal Age has to be a number");
    } else if (
      parseInt(selectedOptions_medical.principalAge) > 65 ||
      parseInt(selectedOptions_medical.principalAge) < 18
    ) {
      errors.push("Principal Age has to be between 18 and 65");
    }
    if (selectedOptions_medical.principalIdNumber === "") {
      errors.push("Principal ID number cannot be empty");
    }
    if (selectedOptions_medical.principalKraPin === "") {
      errors.push("Principal KRA PIN cannot be empty");
    }
    if (selectedOptions_medical.married) {
      if (
        selectedOptions_medical.spouseFirstName === "" ||
        selectedOptions_medical.spouseLastName === ""
      ) {
        errors.push("Spouse First name & Last name cannot be empty");
      }
      if (selectedOptions_medical.spouseAge === "") {
        errors.push("Spouse Age cannot be empty");
      }
      if (!parseInt(selectedOptions_medical.spouseAge)) {
        errors.push("Spouse Age has to be a number");
      } else if (
        parseInt(selectedOptions_medical.spouseAge) > 65 ||
        parseInt(selectedOptions_medical.spouseAge) < 18
      ) {
        errors.push("Spouse Age has to be between 18 and 65");
      }
      if (selectedOptions_medical.spouseIdNumber === "") {
        errors.push("Spouse ID number cannot be empty");
      }
      if (selectedOptions_medical.spouseKraPin === "") {
        errors.push("Spouse KRA PIN cannot be empty");
      }
    }

    if (errors.length > 0) {
      // print errors
      toaster.notify(
        <div
          style={{
            color: "#F96762",
            fontSize: "13px",
            fontWeight: 600,
            textAlign: "left"
          }}
        >
          Please correct the following errors:
          {
            <ol>
              {errors.map(error => (
                <li>{error}</li>
              ))}
            </ol>
          }
        </div>,
        {
          duration: 10000
        }
      );
    } else {
      postRequest("/quotes/medical", payload).then(response => {
        localStorage.setItem(
          "optionsSelected_Medical",
          JSON.stringify(selectedOptions_medical)
        );
        console.log(response);
        this.props.history.push("/client/medical-quote", {
          quoteArray: response.data
        });
      });
    }
  }
  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <>
        <FormHeader
          name="Medical Insurance"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBmXiTO2oAlqyGzfMp_NDH0_a9hig45Y3SoF4D47SXYgHWMDbF"
        />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Medical Insurance Details</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">Principal</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              First Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="principalFirstName"
                              // placeholder=" First Name"
                              type="text"
                              value={this.state.principalFirstName}
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
                              id="principalLastName"
                              // placeholder="Second Name"
                              type="text"
                              value={this.state.principalLastName}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Age (18-65 years)
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="principalAge"
                              // placeholder="Second Name"
                              type="number"
                              value={this.state.principalAge}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              ID Number
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="principalIdNumber"
                              // placeholder="Second Name"
                              type="number"
                              value={this.state.principalIdNumber}
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
                              id="principalKraPin"
                              // placeholder="Second Name"
                              type="text"
                              value={this.state.principalKraPin}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <label className="form-control-label"></label>
                          <Toggle
                            fieldName="Married"
                            identifier="married"
                            toggleValue={this.state.married}
                            toggleHandler={this.handleToggle}
                          />
                        </Col>
                        {this.state.married && (
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                Number of children (1month - 17Yrs)
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="numberOfChildren"
                                // placeholder="Second Name"
                                type="number"
                                value={this.state.numberOfChildren}
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        )}
                      </Row>
                    </div>
                    {this.state.married && (
                      <>
                        <hr className="my-4" />
                        <h6 className="heading-small text-muted mb-4">
                          Spouse
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  First Name
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="spouseFirstName"
                                  // placeholder=" First Name"
                                  type="text"
                                  value={this.state.spouseFirstName}
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
                                  id="spouseLastName"
                                  // placeholder="Second Name"
                                  type="text"
                                  value={this.state.spouseLastName}
                                  onChange={this.handleChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  Age (18-65 years)
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="spouseAge"
                                  // placeholder="Second Name"
                                  type="number"
                                  value={this.state.spouseAge}
                                  onChange={this.handleChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  ID Number
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="spouseIdNumber"
                                  // placeholder="Second Name"
                                  type="text"
                                  value={this.state.spouseIdNumber}
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
                                  id="spouseKraPin"
                                  // placeholder="Second Name"
                                  type="text"
                                  value={this.state.spouseKraPin}
                                  onChange={this.handleChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                      </>
                    )}
                    <hr className="my-4" />
                    {/* Optional benefits */}
                    <h6 className="heading-small text-muted mb-4">
                      Optional Benefits
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="6">
                          <Toggle
                            fieldName="Outpatient Per Person"
                            identifier="outpatientPerPerson"
                            toggleValue={this.state.outpatientPerPerson}
                            toggleHandler={this.handleToggle}
                          />

                          <Toggle
                            fieldName="Maternity Cover"
                            identifier="maternityCover"
                            toggleValue={this.state.maternityCover}
                            toggleHandler={this.handleToggle}
                          />
                          <Toggle
                            fieldName="Dental Cover"
                            identifier="dentalCover"
                            toggleValue={this.state.dentalCover}
                            toggleHandler={this.handleToggle}
                          />
                          <Toggle
                            fieldName="Optical Cover"
                            identifier="opticalCover"
                            toggleValue={this.state.opticalCover}
                            toggleHandler={this.handleToggle}
                          />
                        </Col>
                      </Row>
                      {/* <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Enter number of people to receive dental
                              cover(Optional)
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="numberOfPeopleToReceiveDentalCover"
                              placeholder="number of people to receive dental cover"
                              type="number"
                              value={
                                this.state.numberOfPeopleToReceiveDentalCover
                              }
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Enter number of people to receive optical
                              cover(Optional)
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="numberOfPeopleToReceiveOpticalCover"
                              placeholder="Number of people to receive optical cover"
                              type="number"
                              value={
                                this.state.numberOfPeopleToReceiveOpticalCover
                              }
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Number of members to be covered under last
                              expense(Optional)
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="numberofMembersToBeCoveredUnderLastExpense"
                              placeholder="Members to be covered under last expense"
                              type="number"
                              value={
                                this.state
                                  .numberofMembersToBeCoveredUnderLastExpense
                              }
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Number of members to be covered under personal
                              accident(Optional) - (18 and over)
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="numberOfMembersToBeCoveredUnderPersonalAccident"
                              placeholder=" members to be covered under personal accident"
                              type="number"
                              value={
                                this.state
                                  .numberOfMembersToBeCoveredUnderPersonalAccident
                              }
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row> */}
                    </div>
                    <hr className="my-4" />

                    <div className="text-center">
                      <Button
                        className="my-4"
                        color="primary"
                        onClick={() => this.getQuote()}
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

export default MedicalInsuranceForm;
