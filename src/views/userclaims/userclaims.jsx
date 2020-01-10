import React, { Component } from "react";

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
  import Toggle from "../components/toggle";
import UserHeader from "../../components/Headers/UserHeader";
import PageHeader from "../../components/Headers/PageHeader";

class UserClaims extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <PageHeader/>
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Education Insurance Details</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">Details</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Full name of life assured
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="fullNameOfLifeAssured"
                              placeholder="Full name"
                              type="text"
                              value={this.state.fullNameOfLifeAssured}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Age next birthday
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="ageNextBirthday"
                              placeholder="Age next birthday"
                              type="number"
                              value={this.state.ageNextBirthday}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Full name of child
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="fullNameOfChild"
                              placeholder="Full name of child"
                              type="text"
                              value={this.state.fullNameOfChild}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Age of child
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-first-name"
                              placeholder="Age of child"
                              type="number"
                              value={this.state.ageOfChild}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Policy Term (in years)
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="policyTerm"
                              placeholder="Policy term"
                              type="number"
                              value={this.state.policyTerm}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Monthly payable premium
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="monthlyPayablePremium"
                              placeholder="Monthly payable premium"
                              type="number"
                              value={this.state.monthlyPayablePremium}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Riders(Optional)
                    </h6>
                    <div className="pl-lg-4">
                      <Toggle
                        fieldName="Total and permanent disability"
                        identifier="totalAndPermanentDisability"
                        toggleValue={this.state.totalAndPermanentDisability}
                        toggleHandler={this.handleToggle}
                      />
                      <Toggle
                        fieldName="Waiver of premium"
                        identifier="waiverOfPremium"
                        toggleValue={this.state.waiverOfPremium}
                        toggleHandler={this.handleToggle}
                      />
                      <Toggle
                        fieldName="Child Accident Hospitalization Rider"
                        identifier="childAccidentHospitalizationRider"
                        toggleValue={
                          this.state.childAccidentHospitalizationRider
                        }
                        toggleHandler={this.handleToggle}
                      />
                      <Toggle
                        fieldName="Adult Accident Hospitalization Rider"
                        identifier="adultAccidentHospitalizationRider"
                        toggleValue={
                          this.state.adultAccidentHospitalizationRider
                        }
                        toggleHandler={this.handleToggle}
                      />
                      <Toggle
                        fieldName="Last Expense - Life Assured"
                        identifier="lastExpenseLifeAssured"
                        toggleValue={this.state.lastExpenseLifeAssured}
                        toggleHandler={this.handleToggle}
                      />
                      <Toggle
                        fieldName="Last Expense - Beneficiary child"
                        identifier="lastExpenseBeneficiaryChild"
                        toggleValue={this.state.lastExpenseBeneficiaryChild}
                        toggleHandler={this.handleToggle}
                      />
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

export default UserClaims;