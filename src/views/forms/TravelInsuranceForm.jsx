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
import FormHeader from "../../components/Headers/FormHeader";
class TravelInsuranceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      medicalExpenses: "",
      followUpTreatmentInCountryOfResidence: "",
      medicalEvaluationExpenses: "",
      repartriationOfMortalRemains: "",
      accompanyingFamilyMember: "",
      prematureReturnInCaseOfDeath: "",
      legalAssistance: "",
      lossOrTheft: "",
      luggageDelay: ""
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
        <FormHeader
          name="Travel Insurance"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTAdwqrmR4XVcCTAQfJSKo_74FfH9Z7m8Dj2mzTL_iBBBpHpvM"
        />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
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
                    <h6 className="heading-small text-muted mb-4">
                      Medical expenses
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Medical expenses ($450 excess)
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="medicalExpenses"
                              placeholder="Medical expenses"
                              type="number"
                              value={this.state.medicalExpenses}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Follow up treatment in country of residence
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="followUpTreatmentInCountryOfResidence"
                              placeholder="Treatment in country of residence"
                              type="text"
                              value={
                                this.state.followUpTreatmentInCountryOfResidence
                              }
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Medical evaluation expenses
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="medicalEvaluationExpenses"
                              placeholder=" Medical evaluation expenses"
                              type="text"
                              value={this.state.medicalEvaluationExpenses}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Repartriation of mortal remains
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="repartriationOfMortalRemains"
                              placeholder="Repartriation of mortal remains"
                              type="text"
                              value={this.state.repartriationOfMortalRemains}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Accompanying family member
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="accompanyingFamilyMember"
                              placeholder="Accompanying family member"
                              type="text"
                              value={this.state.accompanyingFamilyMember}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
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
                        <Col md="12">
                          <FormGroup>
                            <label className="form-control-label">
                              Premature return in case of death or imminent
                              death of a relative or a business associate
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="prematureReturnInCaseOfDeath"
                              type="text"
                              value={this.state.prematureReturnInCaseOfDeath}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label">
                              Legal Assisntace
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="legalAssistance"
                              placeholder="Legal Assisntace"
                              type="text"
                              value={this.state.legalAssistance}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">
                      Luggage,trade samples or personal effects
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label className="form-control-label">
                              Loss or theft
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="lossOrTheft"
                              placeholder="Loss or theft"
                              type="text"
                              value={this.state.lossOrTheft}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label">
                              Luggage delay
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="luggageDelay"
                              placeholder="Luggage delay"
                              type="text"
                              value={this.state.luggageDelay}
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

export default TravelInsuranceForm;
