//@ts-check
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
  Label,
  Col,
} from "reactstrap";
import { onlyAllowNNumericalInput } from "../../miscFunctions";
import { postRequest, getRequest } from "../../requests/requests";
import Toggle from "../components/toggle";
import TermsAndConditions from "../termsandconditions/termsandconditions";

// core components
import FormHeader from "../../components/Headers/FormHeader";
import Notifier from "../../notifier";
import { pluginService } from "chart.js";
import {
  ErrorOutline as Error,
  CheckCircleOutline as Success,
  ErrorRounded,
} from "@material-ui/icons";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

class MotorInsuranceForm extends React.Component {
  constructor(props) {
    super(props);
    var jwtDecode = require("jwt-decode");
    var user;
    if (localStorage.getItem("token")) {
      user = jwtDecode(localStorage.getItem("token"));
    }
    this.getMotorClasses();
    const optionsSelected = JSON.parse(localStorage.getItem("optionsSelected"));
    this.state = {
      estimatedValue: optionsSelected ? optionsSelected.estimatedValue : null,
      make_model: optionsSelected ? optionsSelected.make_model : "",
      vehicleClass: optionsSelected ? optionsSelected.vehicleClass : 2,
      vehicleType: optionsSelected ? optionsSelected.vehicleType : "private",
      coverType: optionsSelected ? optionsSelected.coverType : "comprehensive",
      natureOfGoods: optionsSelected ? optionsSelected.natureOfGoods : "",
      registrationNumber: optionsSelected
        ? optionsSelected.registrationNumber
        : "",
      chasisNumber: optionsSelected ? optionsSelected.chasisNumber : "",
      engineNumber: optionsSelected ? optionsSelected.engineNumber : "",
      yearOfManufacture: optionsSelected
        ? optionsSelected.yearOfManufacture
        : null,
      numberOfSeats: optionsSelected ? optionsSelected.numberOfSeats : null,
      engineCapacity: optionsSelected ? optionsSelected.engineCapacity : "",
      logBook: optionsSelected ? optionsSelected.logBook : [],
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      address: "",
      emailAddress: user.email || "",
      city: optionsSelected ? optionsSelected.city : "",
      country: optionsSelected ? optionsSelected.country : "",
      postalCode: optionsSelected ? optionsSelected.postalCode : "",
      KRAPin: optionsSelected ? optionsSelected.KRAPin : "",
      IDNumber: optionsSelected ? optionsSelected.IDNumber : "",
      nationalIdScan: optionsSelected ? optionsSelected.nationalIdScan : [],
      KRAPinScan: optionsSelected ? optionsSelected.KRAPinScan : [],
      roadsideAssistance: optionsSelected
        ? optionsSelected.roadsideAssistance
        : false,
      courtesyCar: optionsSelected ? optionsSelected.courtesyCar : false,
      excessProtector: optionsSelected
        ? optionsSelected.excessProtector
        : false,
      politicalViolenceTerrorism: optionsSelected
        ? optionsSelected.politicalViolenceTerrorism
        : false,
      passengerLegalLiability: optionsSelected
        ? optionsSelected.passengerLegalLiability
        : false,
      vehicleClasses: [],
      variant: "",
      message: "",
      showForm: false,
      openTermsAndConditionsModal: false,
      payload: {},
      optionsSelected: {},
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.getQuote = this.getQuote.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  confirmTermsAndConditions = () => {
    this.setState({ openTermsAndConditionsModal: true });
  };
  toggleTermsandConditions = () => {
    this.setState((prevState) => ({
      openTermsAndConditionsModal: !prevState.openTermsAndConditionsModal,
    }));
  };
  getMotorClasses() {
    getRequest("/motorclass/getMotorClasses").then((response) => {
      this.setState({ vehicleClasses: response.data });
    });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSelect = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    var motorPrivate = this.state.vehicleClasses.find(
      (vehicleClass) => vehicleClass.name === "Motor private"
    );
    var motorcycle = this.state.vehicleClasses.find(
      (vehicleClass) => vehicleClass.name === "Motorcycle"
    );
    var motorCommercial = this.state.vehicleClasses.find(
      (vehicleClass) => vehicleClass.name === "Motor commercial"
    );
    var psv = this.state.vehicleClasses.find(
      (vehicleClass) => vehicleClass.name === "PSV"
    );
    console.log(motorCommercial.id, event.target.value);
    if (event.target.id === "vehicleClass") {
      if (event.target.value == motorPrivate.id) {
        this.setState({ vehicleType: "private" });
      } else if (event.target.value != motorcycle.id) {
        this.setState({ vehicleType: "commercial" });
      } else {
        this.setState({ vehicleType: "private" });
      }

      if (event.target.value == psv.id) {
        this.setState({ passengerLegalLiability: true });
      }

      if (event.target.value != motorCommercial.id) {
        this.setState({ natureOfGoods: "" });
      } else {
        this.setState({ natureOfGoods: "generalCartage" });
      }
    }
  };

  handleToggle(identifier) {
    this.setState((state) => ({ [identifier]: !state[identifier] }));
  }

  handleFile(event) {
    this.setState({ [event.target.id]: event.target.files });
  }
  handleValidation() {}

  validate = ()=> {
    // validate fields
    console.log(this.state);
    const payloadObject = {
      classId: this.state.vehicleClass,
      vehicleType: this.state.vehicleType,
      coverType: this.state.coverType,
      natureOfGoods: this.state.natureOfGoods,
      estimatedCarValue: this.state.estimatedValue,
      roadsideAssistance: this.state.roadsideAssistance,
      courtesyCar: this.state.courtesyCar,
      excessProtector: this.state.excessProtector,
      politicalViolenceTerrorism: this.state.politicalViolenceTerrorism,
      noOfSeats: this.state.numberOfSeats,
    };

    var optionsSelected = this.state;
    const optionsKeys = Object.keys(optionsSelected);
    var errors = [];
    var currentDate = new Date();
    if (optionsSelected.estimatedValue === "") {
      errors.push("Estimated Value cannot be empty");
    }
    if (optionsSelected.registrationNumber === "") {
      errors.push("Registration Number cannot be empty");
    }
    if (optionsSelected.chasisNumber === "") {
      errors.push("Chasis Number cannot be empty");
    }
    if (optionsSelected.engineNumber === "") {
      errors.push("Engine Number cannot be empty");
    }
    if (parseInt(optionsSelected.yearOfManufacture)) {
      if (optionsSelected.yearOfManufacture < currentDate.getFullYear() - 15) {
        errors.push(
          "Year of manufacture (vehicle should be no older than 15 yrs)"
        );
      }
    } else {
      errors.push("Year of manufacture (value should be numeric)");
    }
    if (!parseInt(optionsSelected.numberOfSeats)) {
      errors.push("Number of seats (value should be an integer)");
    } else if (parseInt(optionsSelected.numberOfSeats) <= 0) {
      errors.push("Number of seats (value should be > 0)");
    }
    if (!parseInt(optionsSelected.engineCapacity)) {
      errors.push("Engine capacity (value should be an integer)");
    } else if (parseInt(optionsSelected.engineCapacity) <= 0) {
      errors.push("Engine capacity (value should be > 0)");
    }

    if (this.state.logBook.length < 1 || this.state.logBook[0] === {}) {
      errors.push("Log book missing");
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
          duration: 5000,
        }
      );
    } else {
      this.setState({ payload:payloadObject, optionsSelected });
      this.confirmTermsAndConditions();
    }
  }
  getQuote=()=>{
    
    postRequest("/quotes/motor", this.state.payload).then((response) => {
      console.log(response);
      // set options selected
      localStorage.setItem(
        "optionsSelected",
        JSON.stringify(this.state.optionsSelected)
      );
      // set quote array
      localStorage.setItem("quoteArray", JSON.stringify(response.data));
      if (response.data.length == 0) {
        this.setState({
          message:
            "We were unable to find underwriters offering the options you selected",
          showNotification: true,
          variant: "warning",
        });
      } else {
        this.props.history.push("/client/motor-quote", {
          quoteArray: response.data,
          logBook: this.state.logBook,
          nationalIdScan: this.state.nationalIdScan,
          KRAPinScan: this.state.KRAPinScan,
        });
      }
    });

  }

  render() {
    const vehicleClasses = this.state.vehicleClasses;
    var motorCommercial, motorcycle, motorPrivate;
    if (this.state.vehicleClasses.length > 0) {
      motorCommercial = this.state.vehicleClasses.find(
        (vehicleClass) => vehicleClass.name === "Motor commercial"
      );
      motorcycle = this.state.vehicleClasses.find(
        (vehicleClass) => vehicleClass.name === "Motorcycle"
      );
      motorPrivate = this.state.vehicleClasses.find(
        (vehicleClass) => vehicleClass.name === "Motor private"
      );
    }
    return (
      <>
        <FormHeader
          name="Motor Insurance"
          image="https://i.roamcdn.net/hz/pi/og-image-category/312b0538e2660e8c604a7f23d89748c2/-/hzfiles/pi/og_image/q10dk3/de0486672589668c4785ef6d9165689ac266cd2e.jpeg"
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
                      The most important coverage has to be the minimum
                      liability coverage through your car Insurance. More than
                      anything else, you need to maintain car insurance to keep
                      yourself legal to drive.
                    </p>
                    <p style={{ color: "#f66f31", fontWeight: 600 }}>
                      We offer the highest level of cover you can get. It
                      protects against damage to your own car as well as
                      accidents involving other people. It can also include a
                      courtesy car ,Excess protector and Protection against
                      Political Violence and terrorism, at 3.5% ALL INCLUSIVE.
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
                        <h3 className="mb-0">Motor Insurance Details</h3>
                      </Col>
                    </Row>
                  </CardHeader>

                  <CardBody>
                    <Form onSubmit={() => this.validate()}>
                      <h6 className="heading-small text-muted mb-4">
                        Vehicle information{" "}
                      </h6>
                      <span style={{ fontSize: ".8rem", color: "orange" }}>
                        Please fill in all the marked fields *
                      </span>
                      <div className="pl-lg-4" style={{ marginTop: "1rem" }}>
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                Estimated value (KES) *
                              </label>
                              <Input
                                className="form-control-alternative"
                                // placeholder="Vehicle's estimated value (KES)"
                                type="text"
                                value={this.state.estimatedValue}
                                onChange={this.handleChange}
                                id="estimatedValue"
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                Make & Model
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="make_model"
                                placeholder="Toyota Camry"
                                type="text"
                                value={this.state.make_model}
                                onChange={this.handleChange}
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <Label className="form-control-label">
                                Class of Vehicle *
                              </Label>
                              <Input
                                type="select"
                                id="vehicleClass"
                                className="form-control-alternative"
                                value={this.state.vehicleClass}
                                onChange={this.handleSelect}
                                required
                              >
                                {vehicleClasses.map((vehicleClass) => (
                                  <option
                                    key={vehicleClass.id}
                                    value={vehicleClass.id}
                                  >
                                    {vehicleClass.name}
                                  </option>
                                ))}
                              </Input>
                            </FormGroup>
                          </Col>
                          {motorcycle !== undefined &&
                            this.state.vehicleClass == motorcycle.id && (
                              <Col lg="6">
                                <FormGroup>
                                  <Label className="form-control-label">
                                    Vehicle Type *
                                  </Label>
                                  <Input
                                    type="select"
                                    id="vehicleType"
                                    className="form-control-alternative"
                                    value={this.state.vehicleType}
                                    onChange={this.handleSelect}
                                    required
                                  >
                                    <option key="private" value="private">
                                      Private
                                    </option>
                                    <option key="commercial" value="commercial">
                                      Commercial (Boda boda)
                                    </option>
                                  </Input>
                                </FormGroup>
                              </Col>
                            )}
                          {motorCommercial !== undefined &&
                            this.state.vehicleClass == motorCommercial.id && (
                              <Col lg="6">
                                <FormGroup>
                                  <Label className="form-control-label">
                                    Nature of Goods
                                  </Label>
                                  <Input
                                    type="select"
                                    id="natureOfGoods"
                                    className="form-control-alternative"
                                    value={this.state.natureOfGoods}
                                    onChange={this.handleSelect}
                                    required
                                  >
                                    <option key="ownGoods" value="ownGoods">
                                      Own Goods
                                    </option>
                                    <option
                                      key="generalCartage"
                                      value="generalCartage"
                                    >
                                      General Cartage
                                    </option>
                                  </Input>
                                </FormGroup>
                              </Col>
                            )}
                          <Col lg="6">
                            <FormGroup>
                              <Label className="form-control-label">
                                Cover Type
                              </Label>
                              <Input
                                type="select"
                                id="coverType"
                                className="form-control-alternative"
                                value={this.state.coverType}
                                onChange={this.handleSelect}
                                required
                              >
                                <option
                                  key="comprehensive"
                                  value="comprehensive"
                                >
                                  Comprehensive
                                </option>
                                <option key="thirdParty" value="thirdParty">
                                  Third Party
                                </option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                Vehicle Registration *
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="registrationNumber"
                                // placeholder="KCZ 123Z"
                                type="text"
                                value={this.state.registrationNumber}
                                onChange={this.handleChange}
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                Chasis Number *
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="chasisNumber"
                                // placeholder="Chasis Number"
                                type="text"
                                value={this.state.chasisNumber}
                                onChange={this.handleChange}
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                Engine Number *
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="engineNumber"
                                placeholder="Engine Number"
                                type="text"
                                value={this.state.engineNumber}
                                onChange={this.handleChange}
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                Year of manufacture *
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="yearOfManufacture"
                                placeholder="Year of manufacture"
                                type="text"
                                value={this.state.yearOfManufacture}
                                onChange={this.handleChange}
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                Number of Seats *
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="numberOfSeats"
                                placeholder=""
                                type="number"
                                value={this.state.numberOfSeats}
                                onChange={this.handleChange}
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                Engine Capacity (cc) *
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="engineCapacity"
                                placeholder=""
                                type="number"
                                value={this.state.engineCapacity}
                                onChange={this.handleChange}
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                Upload Logbook *
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="logBook"
                                placeholder="Vehicle logbook"
                                type="file"
                                onChange={this.handleFile}
                                required
                              />
                            </FormGroup>
                          </Col>
                          {motorPrivate !== undefined &&
                            this.state.vehicleClass == motorPrivate.id &&
                            this.state.coverType === "comprehensive" && (
                              <Col lg="6">
                                <label className="form-control-label">
                                  Riders (optional)
                                </label>
                                <Toggle
                                  fieldName="Courtesy Car"
                                  identifier="courtesyCar"
                                  toggleValue={this.state.courtesyCar}
                                  toggleHandler={this.handleToggle}
                                />
                                <Toggle
                                  fieldName="Road-side Assistance"
                                  identifier="roadsideAssistance"
                                  toggleValue={this.state.roadsideAssistance}
                                  toggleHandler={this.handleToggle}
                                />
                                <Toggle
                                  fieldName="Excess Protector"
                                  identifier="excessProtector"
                                  toggleValue={this.state.excessProtector}
                                  toggleHandler={this.handleToggle}
                                />
                                <Toggle
                                  fieldName="Political Violence and Terrorism Protector"
                                  identifier="politicalViolenceTerrorism"
                                  toggleValue={
                                    this.state.politicalViolenceTerrorism
                                  }
                                  toggleHandler={this.handleToggle}
                                />
                              </Col>
                            )}
                        </Row>
                      </div>
                      <hr className="my-4" />
                      {/* Address */}
                      <h6 className="heading-small text-muted mb-4">
                        Policy Holder's Information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                First name
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="firstName"
                                placeholder="First name"
                                type="text"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                Last name
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="lastName"
                                placeholder="Last name"
                                type="text"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                National ID. (Colored scanned document) *
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
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                KRA Pin Certificate. *
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
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                Address
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="address"
                                placeholder="Address"
                                type="text"
                                value={this.state.address}
                                onChange={this.handleChange}
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label className="form-control-label">
                                Email address
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="emailAddress"
                                placeholder="johndoe@example.com"
                                type="email"
                                value={this.state.emailAddress}
                                onChange={this.handleChange}
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label className="form-control-label">City</label>
                              <Input
                                className="form-control-alternative"
                                id="city"
                                placeholder="City"
                                type="text"
                                value={this.state.city}
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label className="form-control-label">
                                Country
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="country"
                                placeholder="Country"
                                type="text"
                                value={this.state.country}
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label className="form-control-label">
                                Postal code
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="postalCode"
                                placeholder="Postal code"
                                type="number"
                                value={this.state.postalCode}
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <hr className="my-4" />

                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          onClick={this.validate}
                        >
                          Get Quote
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              )}
            </Col>
          </Row>
        </Container>
        {this.state.showNotification && (
          <Notifier
            showNotification={this.state.showNotification}
            variant={this.state.variant}
            message={this.state.message}
          />
        )}
        <TermsAndConditions
          open={this.state.openTermsAndConditionsModal}
          toggle={this.toggleTermsandConditions}
          policy="motor"
          continue={this.getQuote}
        />
      </>
    );
  }
}

export default MotorInsuranceForm;
