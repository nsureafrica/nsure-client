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

// core components
import FormHeader from "../../components/Headers/FormHeader";
import Notifier from "../../notifier";

class MotorInsuranceForm extends React.Component {
  constructor(props) {
    super(props);
    this.getMotorClasses();
    var jwtDecode = require("jwt-decode");
    var user;
    if (localStorage.getItem("token")) {
      user = jwtDecode(localStorage.getItem("token"));
    }
    this.state = {
      estimatedValue: 0,
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
      vehicleClasses: []
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    // this.state = {
    //   vehicleEstimatedValue: "",
    //   vehicleModel: "",
    //   vehicleUse: "private",
    //   coverType: "comprehensive",
    //   category: "motorPrivate",
    //   courtesyCarOption: "6",
    //   registrationNumber: "",
    //   chasisNumber: "",
    //   engineNumber: "",
    //   firstName: "",
    //   lastName: "",
    //   address: "",
    //   emailAddress: "",
    //   city: "",
    //   country: "",
    //   postalCOde: "",
    //   yearOfManufacture: "",
    //   logbook: [],
    //   showNotification: false,
    //   message: ""
    // };
    // this.state = {
    //   motorEstimateValue: "0",
    //   carModel: "",
    //   motorCategory: "motorcycle",
    //   vehicleType: "private",
    //   value: "",
    //   coverType: "comprehensive",
    //   courtesyCarOption: "6",
    //   numberPlateOrRegistrationNumber: "",
    //   chasisNumber: "",
    //   engineNumber: "",
    //   yearOfManufacture: "",
    //   firstName: "",
    //   lastName: "",
    //   address: "",
    //   emailAddress: "",
    //   city: "",
    //   country: "",
    //   postalCode: ""
    // };
    // this.onChange = this.onChange.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.getQuote = this.getQuote.bind(this);
    // this.handleFile = this.handleFile.bind(this);
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
    console.log(motorPrivate);
    if (event.target.id === "vehicleClass") {
      if (event.target.value === motorPrivate.id) {
        this.setState({ vehicleType: "private" });
      } else if (event.target.value !== motorcycle.id) {
        this.setState({ vehicleType: "commercial" });
      }

      if (event.target.value !== motorCommercial.id) {
        this.setState({ natureOfGoods: "" });
      } else {
        this.setState({ natureOfGoods: "generalCartage" });
      }
    }
  }

  handleFile(event) {
    this.setState({ [event.target.id]: event.target.files });
  }

  // onChange(e) {
  //   if (onlyAllowNNumericalInput(e.target.value)) {
  //     this.setState({ [e.target.name]: e.target.value });
  //   }
  // }

  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // }
  // handleFile(event) {
  //   console.log(event.target.files[0]);
  //   this.setState({ [event.target.name]: event.target.files });
  // }

  // getQuote() {
  //   let payload = new FormData();
  //   // create form data with the payload
  //   const payloadObject = {
  //     vehicleEstimatedValue: this.state.vehicleEstimatedValue,
  //     vehicleModel: this.state.vehicleModel,
  //     vehicleType: this.state.vehicleType,
  //     coverType: this.state.coverType,
  //     category: this.state.category,
  //     courtesyCarOption: this.state.courtesyCarOption,
  //     registrationNumber: this.state.registrationNumber,
  //     chasisNumber: this.state.chasisNumber,
  //     engineNumber: this.state.engineNumber,
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName,
  //     address: this.state.address,
  //     emailAddress: this.state.emailAddress,
  //     city: this.state.city,
  //     country: this.state.country,
  //     postalCode: this.state.postalCode,
  //     yearOfManufacture: this.state.yearOfManufacture
  //   };
  //   Object.keys(payloadObject).map(key => {
  //     payload.append(key, payloadObject[key]);
  //   });
  //   // append files
  //   for (var i = 0; i < this.state.logbook.length; i++) {
  //     payload.append("logbook", this.state.logbook[i]);
  //   }
  //   console.log(payload);
  //   postRequest("/policies/motor/policy", payload)
  //     .then(response => {
  //       localStorage.setItem("quotes", JSON.stringify(response.data));
  //       localStorage.setItem("optionsSelected", JSON.stringify(payloadObject));
  //       this.props.history.push("quote");
  //     })
  //     .catch(error => {
  //       this.setState({
  //         message: error.response.data.message
  //           ? error.response.data.message
  //           : "Error, Unable to generate quote",
  //         showNotification: true
  //       });
  //     });
  // }

  render() {
    const { vehicleClasses } = this.state;
    // const vehicleClasses = [
    //   { name: "Motor Private", id: 5 },
    //   { name: "Motor Commercial", id: 6 },
    //   { name: "Motorcycle", id: 1 },
    //   { name: "School Bus", id: 2 },
    //   { name: "PSV", id: 3 },
    //   { name: "Tanker", id: 4 }
    // ];
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
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Vehicle information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Estimated value (KES)
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="Vehicle's estimated value (KES)"
                              type="text"
                              value={this.state.estimatedValue}
                              onChange={this.handleChange}
                              id="estimatedValue"
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
                            />
                          </FormGroup>
                        </Col>
                        {/* </Row>
                      <Row> */}
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
                        {this.state.vehicleClass === "1" && (
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
                              >
                                <option key="private" value="private">
                                  Private
                                </option>
                                <option key="commercial" value="commercial">
                                  Commercial
                                </option>
                              </Input>
                            </FormGroup>
                          </Col>
                        )}
                        {this.state.vehicleClass === "6" && (
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

                        {/* </Row>
                      <Row> */}
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
                        {/* </Row>
                      <Row> */}
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Vehicle Registration
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="registrationNumber"
                              placeholder="KCZ 123Z"
                              type="text"
                              value={this.state.registrationNumber}
                              onChange={this.handleChange}
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
                              placeholder="Chasis Number"
                              type="text"
                              value={this.state.chasisNumber}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        {/* </Row>
                      <Row> */}
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
                            />
                          </FormGroup>
                        </Col>
                        {/* </Row>
                      <Row> */}
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
                            />
                          </FormGroup>
                        </Col>
                        {/* </Row>
                      <Row> */}
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Upload Logbook
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="logbook"
                              placeholder="Vehicle logbook"
                              type="file"
                              onChange={this.handleFile}
                            />
                          </FormGroup>
                        </Col>
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
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
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
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
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
            variant={this.state.userCreated ? "success" : "error"}
            message={this.state.message}
          />
        )}
      </>
    );
  }
}

export default MotorInsuranceForm;
