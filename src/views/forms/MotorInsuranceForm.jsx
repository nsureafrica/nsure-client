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
import { postRequest } from "../../requests/requests";

// core components
import FormHeader from "../../components/Headers/FormHeader";

class MotorInsuranceForm extends React.Component {
  categories = [
    {
      value: "motorcycle",
      label: "Motorcycle"
    },
    {
      value: "motorPrivate",
      label: "Motor Private"
    },
    {
      value: "motorCommercial",
      label: "Motor Commercial"
    },
    {
      value: "heavyMachinery",
      label: "Heavy Machinery"
    },
    {
      value: "tankers",
      label: "Tankers"
    },
    {
      value: "PMO",
      label: "PMO"
    },
    {
      value: "specialTypes",
      label: "specialTypes"
    },
    {
      value: "PSV",
      label: "PSV"
    },
    {
      value: "drivingSchools",
      label: "Driving Schools"
    }
  ];
  coverTypes = [
    {
      value: "comprehensive",
      label: "Comprehensive"
    },
    {
      value: "thirdParty",
      label: "Third Party"
    }
    // {
    //   value: "ownGoods",
    //   label: "Own Goods"
    // },
    // {
    //   value: "generalCartage",
    //   label: "General Cartage"
    // },
    // { value: "passengers", label: "Passengers" }
  ];
  vehicleTypes = [
    { value: "private", label: "Private" },
    { value: "commercial", label: "Commercial" }
  ];
  courtesyCarOptions = [
    { value: "6", label: "Six Days" },
    { value: "10", label: "Ten Days" }
  ];
  constructor(props) {
    super(props);
    this.state = {
      vehicleEstimatedValue: "",
      vehicleModel: "",
      vehicleType: "private",
      coverType: "comprehensive",
      category: "motorPrivate",
      courtesyCarOption: "6",
      registrationNumber: "",
      chasisNumber: "",
      engineNumber: "",
      firstName: "",
      lastName: "",
      address: "",
      emailAddress: "",
      city: "",
      country: "",
      postalCOde: "",
      yearOfManufacture: ""
    };
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
    this.onChange = this.onChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getQuote = this.getQuote.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }
  onChange(e) {
    if (onlyAllowNNumericalInput(e.target.value)) {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleFile(event) {
    console.log(event.target.files[0]);
    this.setState({ [event.target.name]: event.target.files });
  }

  getQuote() {
    let payload = new FormData();
    // create form data with the payload
    const payloadObject = {
      vehicleEstimatedValue: this.state.vehicleEstimatedValue,
      vehicleModel: this.state.vehicleModel,
      vehicleType: this.state.vehicleType,
      coverType: this.state.coverType,
      category: this.state.category,
      courtesyCarOption: this.state.courtesyCarOption,
      registrationNumber: this.state.registrationNumber,
      chasisNumber: this.state.chasisNumber,
      engineNumber: this.state.engineNumber,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      emailAddress: this.state.emailAddress,
      city: this.state.city,
      country: this.state.country,
      postalCode: this.state.postalCode,
      yearOfManufacture: this.state.yearOfManufacture
    };
    Object.keys(payloadObject).map(key => {
      payload.append(key, payloadObject[key]);
    });
    // append files
    for (var i = 0; i < this.state.logbook.length; i++) {
      payload.append("logbook", this.state.logbook[i]);
    }
    console.log(payload);
    postRequest("/policies/motor/policy", payload).then(response => {
      localStorage.setItem("quotes", JSON.stringify(response.data));
      localStorage.setItem("optionsSelected", JSON.stringify(payloadObject));
      this.props.history.push("quote");
    });
  }

  render() {
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
                      Automobile information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Vehicle's estimated value (KES)
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="Vehicle's estimated value (KES)"
                              type="text"
                              value={this.state.vehicleEstimatedValue}
                              onChange={this.onChange}
                              name="vehicleEstimatedValue"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Vehicle Model
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="vehicleModel"
                              placeholder="BMW"
                              type="text"
                              value={this.state.vehicleModel}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <Label
                              for="motorCategory"
                              className="form-control-label"
                            >
                              Category
                            </Label>
                            <Input
                              type="select"
                              name="category"
                              className="form-control-alternative"
                              value={this.state.category}
                              onChange={this.handleInputChange}
                            >
                              {this.categories.map(option => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <Label for="vehicleType">Vehicle Type</Label>
                            <Input
                              type="select"
                              name="vehicleType"
                              className="form-control-alternative"
                              value={this.state.vehicleType}
                              onChange={this.handleInputChange}
                            >
                              {this.vehicleTypes.map(option => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <Label for="coverType">Cover Type</Label>
                            <Input
                              type="select"
                              name="coverType"
                              className="form-control-alternative"
                              value={this.state.coverType}
                              onChange={this.handleInputChange}
                            >
                              {this.coverTypes.map(option => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <Label for="courtesyCarOption">
                              Courtesy Car Option
                            </Label>
                            <Input
                              type="select"
                              name="courtesyCarOption"
                              className="form-control-alternative"
                              value={this.state.courtesyCarOption}
                              onChange={this.handleInputChange}
                            >
                              {this.courtesyCarOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Number plate or registration number
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="registrationNumber"
                              placeholder="Number plate or registration number"
                              type="text"
                              value={this.state.registrationNumber}
                              onChange={this.handleInputChange}
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
                              name="chasisNumber"
                              placeholder="Chasis number"
                              type="text"
                              value={this.state.chasisNumber}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Engine Number
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="engineNumber"
                              placeholder="Engine Number"
                              type="text"
                              value={this.state.engineNumber}
                              onChange={this.handleInputChange}
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
                              name="yearOfManufacture"
                              placeholder="Year of manufacture"
                              type="text"
                              value={this.state.yearOfManufacture}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Upload Logbook
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="logbook"
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
                              name="firstName"
                              placeholder="First name"
                              type="text"
                              value={this.state.firstName}
                              onChange={this.handleInputChange}
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
                              name="lastName"
                              placeholder="Last name"
                              type="text"
                              value={this.state.lastName}
                              onChange={this.handleInputChange}
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
                              name="address"
                              placeholder="Address"
                              type="text"
                              value={this.state.address}
                              onChange={this.handleInputChange}
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
                              name="emailAddress"
                              placeholder="johndoe@example.com"
                              type="email"
                              value={this.state.emailAddress}
                              onChange={this.handleInputChange}
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
                              name="city"
                              placeholder="City"
                              type="text"
                              value={this.state.city}
                              onChange={this.handleInputChange}
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
                              name="country"
                              placeholder="Country"
                              type="text"
                              value={this.state.country}
                              onChange={this.handleInputChange}
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
                              name="postalCode"
                              placeholder="Postal code"
                              type="number"
                              value={this.state.postalCode}
                              onChange={this.handleInputChange}
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
      </>
    );
  }
}

export default MotorInsuranceForm;
