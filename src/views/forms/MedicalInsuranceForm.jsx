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
import ToggleButton from "react-toggle-button";

// core components
import FormHeader from "../../components/Headers/FormHeader";

class MedicalInsuranceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      secondName: "",
      principalAge: "",
      ageOfSpouse: "",
      numberOfChildren: "",
      numberOfPeopleToReceiveOpticalCover: "",
      numberOfPeopleToReceiveDentalCover: "",
      numberOfMembersToBeCoveredUnderPersonalAccident: "",
      numberofMembersToBeCoveredUnderLastExpense: "",
      outpatientPerPerson: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  item = [
    {
      value: true,
      text: "Yes"
    },
    {
      value: false,
      text: "No"
    }
  ];
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "radio" ? target.value : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleOptionChange(changeEvent) {
    this.setState({
      outpatientPerPerson: changeEvent.target.value
    });
  }

  handleClick(event) {
    console.log(event.target.type);
    this.setState({ outpatientPerPerson: !this.state.outpatientPerPerson });
  }
  render() {
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
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="delivery"
                        // onClick={e => e.preventDefault()}
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
                      Client information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label">
                              First Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="firstName"
                              placeholder=" First Name"
                              type="text"
                              value={this.state.firstName}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label">
                              Second Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="secondName"
                              placeholder="Second Name"
                              type="text"
                              value={this.state.secondName}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Core cover */}
                    <h6 className="heading-small text-muted mb-4">
                      Core cover
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label">
                              Principal age(18-65 years)
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="principalAge"
                              placeholder="Principal age(18-65 years)"
                              type="number"
                              value={this.state.principalAge}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label">
                              Age of the spouse (18-65 years)
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="ageOfSpouse"
                              placeholder="Age of the spouse (18-65 years)"
                              type="number"
                              value={this.state.ageOfSpouse}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label">
                              Number of children(1 month - 17 years)
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="numberOfChildren"
                              placeholder="Number of children(1 month - 17 years)"
                              type="number"
                              value={this.state.numberOfChildren}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Optional benefits */}
                    <h6 className="heading-small text-muted mb-4">
                      Optional Benefits
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="6">
                          <label className="form-control-label">
                            Outpatient per person
                          </label>
                          <ToggleButton
                            inactiveLabel="Yes"
                            activeLabel="No"
                            colors={{
                              active: {
                                base: "rgb(207,221,245)",
                                hover: "rgb(177, 191, 215)"
                              },
                              inactive: {
                                base: "rgb(65,66,68)",
                                hover: "rgb(95,96,98)"
                              }
                            }}
                            value={this.state.outpatientPerPerson || false}
                            onToggle={value => {
                              this.setState({
                                outpatientPerPerson: !value
                              });
                            }}
                          />
                        </Col>
                        <Col md="12">
                          <FormGroup>
                            <label className="form-control-label">
                              Maternity Cover
                            </label>
                            {this.item.map(item => (
                              <div
                                className="custom-control custom-radio mb-3"
                                key={item.text}
                              >
                                <label className="custom-control-label">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    value={item.value}
                                    key={item.text}
                                    checked={
                                      this.state.maternityCover === item.value
                                    }
                                    onChange={this.handleInputChange}
                                  />
                                  {item.text}
                                </label>
                              </div>
                            ))}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
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
                        <Col lg="4">
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
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label">
                              Number of members to be covered under last
                              expense(Optional)
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="numberofMembersToBeCoveredUnderLastExpense"
                              placeholder="members to be covered under last expense"
                              type="number"
                              value={
                                this.state
                                  .numberofMembersToBeCoveredUnderLastExpense
                              }
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
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

export default MedicalInsuranceForm;
