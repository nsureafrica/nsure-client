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
import { getMotorQuote } from "../../requests/quoteRequests";
import { postRequest } from "../../requests/requests";

// core components
import MotorInsuranceFormHeader from "../../components/Headers/formHeaders/MotorInsuranceFormHeader";

class MotorInsuranceForm extends React.Component {
  categories = [
    {
      value: "motorcycle",
      label: "Motorcycles"
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
      motorEstimateValue: "",
      carModel: "",
      motorCategory: "",
      vehicleType: "",
      coverType: "",
      courtesyCarOption: "",
      numberPlateOrRegistrationNumber: "",
      chasisNumber: "",
      engineNumber: "",
      yearOfManufacture: "",
      firstName: "",
      lastName: "",
      address: "",
      emailAddress: "",
      city: "",
      country: "",
      postalCode: ""
    };
    this.onChange = this.onChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getQuote = this.getQuote.bind(this);
  }
  onChange(e) {
    if (onlyAllowNNumericalInput(e.target.value)) {
      this.setState({ motorEstimateValue: e.target.value });
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

  getQuote() {
    const motorQuoteEndpoint = "/quotes/motor";
    const payload = {
      category: this.state.motorCategory,
      vehicleType: this.state.vehicleType,
      coverType: this.state.coverType,
      vehicleEstimatedValue: this.state.motorEstimateValue,
      courtesyCarOption: this.state.courtesyCarOption,
      politicalViolence: false,
      excessProtector: false
    };
    const quotePromise = postRequest(motorQuoteEndpoint, payload);
    quotePromise.then(response => {
      console.log(response.data);
      localStorage.setItem(
        "quoteAmount",
        JSON.stringify(response.data.quoteAmount)
      );
      localStorage.setItem("optionsSelected", JSON.stringify(payload));
      this.props.history.push("quote");
    });
  }

  render() {
    console.log(this.state);
    return (
      <>
        <MotorInsuranceFormHeader />
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
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        // href="delivery"
                        onClick={this.getQuote}
                        // onClick={() =>
                        //   getMotorQuote(
                        //     this.state.motorCategory,
                        //     this.state.vehicleType,
                        //     this.state.coverType,
                        //     this.state.motorEstimateValue,
                        //     this.state.courtesyCarOption,
                        //     this.state.politicalViolence,
                        //     this.state.excessProtector,
                        //     this.props
                        //   )
                        // }
                        size="sm"
                      >
                        Submit details
                      </Button>
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
                              Motor estimate value (KES)
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="Motor estimate value (KES)"
                              type="text"
                              value={this.state.motorEstimateValue}
                              onChange={this.onChange}
                              name="motorEstimateValue"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Car Model
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="carModel"
                              placeholder="BMW"
                              type="text"
                              value={this.state.carModel}
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
                              name="motorCategory"
                              className="form-control-alternative"
                              value={this.state.motorCategory}
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
                              name="numberPlateOrRegistrationNumber"
                              placeholder="Number plate or registration number"
                              type="text"
                              value={this.state.numberPlateOrRegistrationNumber}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Chassis Number
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="chassisNumber"
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
                              name="uploadLogbook"
                              placeholder="Motor estimate value (KES)"
                              type="file"
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
                        <Col lg="4">
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
                        <Col lg="4">
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
                        <Col lg="4">
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