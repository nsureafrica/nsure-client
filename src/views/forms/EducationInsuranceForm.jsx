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
import FormHeader from "../../components/Headers/FormHeader"

class EducationInsuranceForm extends React.Component {
  render() {
    return (
      <>
        <FormHeader name="Education Insurance" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwrybLv0bBwV98kkY0zp1yKiopc7vA52HBKbEsPRX9CrBI9c6y"/>
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Education Insurance Details</h3>
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
                              id="input-last-name"
                              placeholder="Full name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Age next birthday
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Age next birthday"
                              type="text"
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
                              id="input-email"
                              placeholder="Full name of child"
                              type="text"
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
                              type="text"
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
                              id="input-last-name"
                              placeholder="Policy term"
                              type="text"
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
                              id="input-last-name"
                              placeholder="Monthly payable premium"
                              type="text"
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
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Total and Permanent Disability
                            </label>
                            <div className="custom-control custom-radio mb-3">
                              <input
                                className="custom-control-input"
                                id="customRadio5"
                                name="custom-radio-2"
                                type="radio"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customRadio5"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="custom-control custom-radio mb-3">
                              <input
                                className="custom-control-input"
                                defaultChecked
                                id="customRadio6"
                                name="custom-radio-2"
                                type="radio"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customRadio6"
                              >
                                No
                              </label>
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Waiver of premium
                            </label>
                            <div className="custom-control custom-radio mb-3">
                              <input
                                className="custom-control-input"
                                id="customRadio5"
                                name="custom-radio-2"
                                type="radio"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customRadio5"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="custom-control custom-radio mb-3">
                              <input
                                className="custom-control-input"
                                defaultChecked
                                id="customRadio6"
                                name="custom-radio-2"
                                type="radio"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customRadio6"
                              >
                                No
                              </label>
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Child Accident Hospitalization Rider
                            </label>
                            <div className="custom-control custom-radio mb-3">
                              <input
                                className="custom-control-input"
                                id="customRadio5"
                                name="custom-radio-2"
                                type="radio"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customRadio5"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="custom-control custom-radio mb-3">
                              <input
                                className="custom-control-input"
                                defaultChecked
                                id="customRadio6"
                                name="custom-radio-2"
                                type="radio"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customRadio6"
                              >
                                No
                              </label>
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Adult Accident Hospitalization Rider
                            </label>
                            <div className="custom-control custom-radio mb-3">
                              <input
                                className="custom-control-input"
                                id="customRadio5"
                                name="custom-radio-2"
                                type="radio"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customRadio5"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="custom-control custom-radio mb-3">
                              <input
                                className="custom-control-input"
                                defaultChecked
                                id="customRadio6"
                                name="custom-radio-2"
                                type="radio"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customRadio6"
                              >
                                No
                              </label>
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Last Expense - Life Assured
                            </label>
                            <div className="custom-control custom-radio mb-3">
                              <input
                                className="custom-control-input"
                                id="customRadio5"
                                name="custom-radio-2"
                                type="radio"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customRadio5"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="custom-control custom-radio mb-3">
                              <input
                                className="custom-control-input"
                                defaultChecked
                                id="customRadio6"
                                name="custom-radio-2"
                                type="radio"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customRadio6"
                              >
                                No
                              </label>
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Last Expense - Beneficiary child
                            </label>
                            <div className="custom-control custom-radio mb-3">
                              <input
                                className="custom-control-input"
                                id="lastExpense"
                                name="custom-radio-2"
                                type="radio"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customRadio5"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="custom-control custom-radio mb-3">
                              <input
                                className="custom-control-input"
                                defaultChecked
                                id="customRadio6"
                                name="custom-radio-2"
                                type="radio"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customRadio6"
                              >
                                No
                              </label>
                            </div>
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

export default EducationInsuranceForm;
