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
import TravelInsuranceFormHeader from "../../components/Headers/formHeaders/TravelInsuranceFormHeaders"

class TravelInsuranceForm extends React.Component {
  render() {
    return (
      <>
        <TravelInsuranceFormHeader />
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
                      Medical expenses
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Medical expenses ($450 excess)
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Medical expenses"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Follow up treatment in country of residence
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="treatment in country of residence"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Medical evaluation expenses
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-first-name"
                              placeholder=" Medical evaluation expenses"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Repartriation of mortal remains
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-last-name"
                              placeholder="Repartriation of mortal remains"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        
                      </Row>
                      <Row>
                      <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                             Accompanying family member
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-last-name"
                              placeholder="Accompanying family member"
                              type="text"
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
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Premature return in case of death or imminent death of a relative or a business associate 
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-address"
                              // placeholder="Home Address"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Legal Assisntace
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-city"
                              placeholder="Legal Assisntace"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">Luggage,trade samples or personal effects</h6>
                    <div className="pl-lg-4">
                    <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                                Loss or theft
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-address"
                              placeholder="Loss or theft"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Luggage delay
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-city"
                              placeholder="Luggage delay"
                              type="text"
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

export default TravelInsuranceForm;