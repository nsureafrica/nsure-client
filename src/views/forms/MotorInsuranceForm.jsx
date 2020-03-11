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
  Col
} from "reactstrap";
import { onlyAllowNNumericalInput } from "../../miscFunctions";
import { postRequest, getRequest } from "../../requests/requests";
import Toggle from "../components/toggle";

// core components
import FormHeader from "../../components/Headers/FormHeader";
import Notifier from "../../notifier";
import { pluginService } from "chart.js";

class MotorInsuranceForm extends React.Component {
  constructor(props) {
    super(props);
    var jwtDecode = require("jwt-decode");
    var user;
    if (localStorage.getItem("token")) {
      user = jwtDecode(localStorage.getItem("token"));
    }
    this.getMotorClasses();
    this.state = {
      estimatedValue: null,
      make_model: "",
      vehicleClass: 2,
      vehicleType: "private",
      coverType: "comprehensive",
      natureOfGoods: "",
      registrationNumber: "",
      chasisNumber: "",
      engineNumber: "",
      yearOfManufacture: "",
      numberOfSeats: "",
      engineCapacity: "",
      logBook: [],
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      address: "",
      emailAddress: user.email || "",
      city: "",
      country: "",
      postalCode: "",
      KRAPin: "",
      IDNumber: "",
      nationalIdScan: [],
      KRAPinScan: [],
      roadsideAssistance: false,
      courtesyCar: false,
      excessProtector: false,
      politicalViolenceTerrorism: false,
      passengerLegalLiability: false,
      vehicleClasses: [],
      variant: "",
      message: "",
      showNotification: false
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.getQuote = this.getQuote.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  getMotorClasses() {
    getRequest("/motorclass/getMotorClasses").then(response => {
      this.setState({ vehicleClasses: response.data });
    });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSelect(event) {
    this.setState({ [event.target.id]: event.target.value });
    var motorPrivate = this.state.vehicleClasses.find(
      vehicleClass => vehicleClass.name === "Motor private"
    );
    var motorcycle = this.state.vehicleClasses.find(
      vehicleClass => vehicleClass.name === "Motorcycle"
    );
    var motorCommercial = this.state.vehicleClasses.find(
      vehicleClass => vehicleClass.name === "Motor commercial"
    );
    var psv = this.state.vehicleClasses.find(
      vehicleClass => vehicleClass.name === "PSV"
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
  }

  handleToggle(identifier) {
    this.setState(state => ({ [identifier]: !state[identifier] }));
  }

  handleFile(event) {
    this.setState({ [event.target.id]: event.target.files });
  }
  handleValidation() {}

  getQuote() {
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
      noOfSeats: this.state.numberOfSeats
    };

    var optionsSelected = this.state;
    delete optionsSelected.showNotification;
    delete optionsSelected.message;
    delete optionsSelected.variant;
    delete optionsSelected.vehicleClasses;

    postRequest("/quotes/motor", payloadObject).then(response => {
      console.log(response);
      // set options selected
      localStorage.setItem("optionsSelected", JSON.stringify(optionsSelected));
      // set quote array
      localStorage.setItem("quoteArray", JSON.stringify(response.data));
      if (response.data.length == 0) {
        this.setState({
          message:
            "We were unable to find underwriters offering the options you selected",
          showNotification: true,
          variant: "warning"
        });
      } else {
        this.props.history.push("/client/motor-quote", {
          quoteArray: response.data,
          logBook: this.state.logBook,
          nationalIdScan: this.state.nationalIdScan,
          KRAPinScan: this.state.KRAPinScan
        });
      }
    });
  }

  render() {
    const vehicleClasses = this.state.vehicleClasses;
    var motorCommercial, motorcycle, motorPrivate;
    if (this.state.vehicleClasses.length > 0) {
      motorCommercial = this.state.vehicleClasses.find(
        vehicleClass => vehicleClass.name === "Motor commercial"
      );
      motorcycle = this.state.vehicleClasses.find(
        vehicleClass => vehicleClass.name === "Motorcycle"
      );
      motorPrivate = this.state.vehicleClasses.find(
        vehicleClass => vehicleClass.name === "Motor private"
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
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Motor Insurance Details</h3>
                    </Col>
                  </Row>
                </CardHeader>

                <CardBody>
                  <Form onSubmit={() => this.getQuote()}>
                    <h6 className="heading-small text-muted mb-4">
                      Vehicle information{" "}
                    </h6>
                    <span style={{ fontSize: ".8rem", color: "orange" }}>
                      Please fill in all the fields *
                    </span>
                    <div className="pl-lg-4" style={{ marginTop: "1rem" }}>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Estimated value (KES)
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
                              Class of Vehicle
                            </Label>
                            <Input
                              type="select"
                              id="vehicleClass"
                              className="form-control-alternative"
                              value={this.state.vehicleClass}
                              onChange={this.handleSelect}
                              required
                            >
                              {vehicleClasses.map(vehicleClass => (
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
                                  Vehicle Type
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
                              <option key="comprehensive" value="comprehensive">
                                Comprehensive
                              </option>
                              <option key="third_party" value="third_party">
                                Third Party
                              </option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Vehicle Registration
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
                              Chasis Number
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
                              Engine Number
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
                              Year of manufacture
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
                              Number of Seats
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
                              Engine Capacity (cc)
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
                              Upload Logbook
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
                          this.state.vehicleClass == motorPrivate.id && (
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
                      Contact information
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
                              National ID. (Colored scanned document)
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
                              KRA Pin Certificate.
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
                        onClick={this.getQuote}
                      >
                        Get Quote
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
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
      </>
    );
  }
}

export default MotorInsuranceForm;
