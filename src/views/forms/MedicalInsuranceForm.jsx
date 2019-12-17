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
      outpatientPerPerson: false,
      maternityCover: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "radio" ? target.value : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleToggle(identifier) {
    this.setState(state => ({ [identifier]: !state[identifier] }));
  }

  render() {
    console.log(this.state.maternityCover);
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
                    <h6 className="heading-small text-muted mb-4">
                      Client information
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
                              name="firstName"
                              placeholder=" First Name"
                              type="text"
                              value={this.state.firstName}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
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
                        <Col lg="6">
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
                        <Col lg="6">
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
                      </Row>
                      <Row>
                        <Col lg="6">
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
                          <Toggle
                            fieldName="Outpatient Per Person"
                            identifier="outpatientPerPerson"
                            toggleValue={this.state.outpatientPerPerson}
                            toggleHandler={this.handleToggle}
                          />
                        </Col>
                      </Row>
                      <Toggle
                        fieldName="Maternity Cover"
                        identifier="maternityCover"
                        toggleValue={this.state.maternityCover}
                        toggleHandler={this.handleToggle}
                      />
                      <Row>
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
                      </Row>
                    </div>
                    <hr className="my-4" />

                    <div className="text-center">
                      <Button className="my-4" color="primary">
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
