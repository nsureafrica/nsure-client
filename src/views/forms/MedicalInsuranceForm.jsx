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
import MedicalInsuranceFormHeader from "../../components/Headers/formHeaders/MedicalInsuranceFormHeader";

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
      numberofMembersToBeCoveredUnderLastExpense: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <>
        <MedicalInsuranceFormHeader />
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
                        <Col md="12">
                          <FormGroup>
                            <label className="form-control-label">
                              Outpatient per person
                            </label>
                            <div className="custom-control custom-radio mb-3">
                              <input
                                className="custom-control-input"
                                id="outpatientPerPerson"
                                name="outPatientPerPerson"
                                type="radio"
                              />
                              <label className="custom-control-label">
                                Yes
                              </label>
                            </div>
                            <div className="custom-control custom-radio mb-3">
                              <input
                                className="custom-control-input"
                                defaultChecked
                                name="outPatientPerPerson"
                                type="radio"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="outPatientPerPerson"
                              >
                                No
                              </label>
                            </div>
                          </FormGroup>
                        </Col>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Maternity cover
                            </label>
                            <div className="custom-control custom-radio mb-3">
                              <input
                                className="custom-control-input"
                                id="maternityCover"
                                name="maternityCover"
                                type="radio"
                              />
                              <label className="custom-control-label">
                                Yes
                              </label>
                            </div>
                            <div className="custom-control custom-radio mb-3">
                              <input
                                className="custom-control-input"
                                defaultChecked
                                name="maternityCover"
                                type="radio"
                              />
                              <label className="custom-control-label">No</label>
                            </div>
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
