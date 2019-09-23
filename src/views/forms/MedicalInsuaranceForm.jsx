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
import MedicalInsuaranceFormHeader from "../../components/Headers/formHeaders/MedicalInsuaranceFormHeader"

class MedicalInsuaranceForm extends React.Component {
  render() {
    return (
      <>
        <MedicalInsuaranceFormHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Medical insurance form</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="delivery"
                        // onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Submit form
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
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              First Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder=" First Name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Second Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="Second Name"
                              type="text"
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
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Principal age(18-65 years)
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="Principal age(18-65 years)"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Age of the spouse (18-65 years)
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="Age of the spouse (18-65 years)"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Number of children(1 month - 17 years)
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="Number of children(1 month - 17 years)"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Optional benefits */}
                    <h6 className="heading-small text-muted mb-4">Optional Benefits</h6>
                    <div className="pl-lg-4">
                      <Row>
                      <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Outpatient per person
                            </label>
                            <div className="custom-control custom-radio mb-3">
                            <input
                              className="custom-control-input"
                              id="outpatientPerPerson"
                              name="outPatientPerPerson"
                              type="radio"
                            />
                            <label className="custom-control-label" htmlFor="outPatientPerPerson">
                              Yes
                            </label>
                          </div>
                          <div className="custom-control custom-radio mb-3">
                            <input
                              className="custom-control-input"
                              defaultChecked
                              id="outpatientPerPerson"
                              name="outPatientPerPerson"
                              type="radio"
                            />
                            <label className="custom-control-label" htmlFor="outPatientPerPerson">
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
                            <label className="custom-control-label" htmlFor="maternityCover">
                              Yes
                            </label>
                          </div>
                          <div className="custom-control custom-radio mb-3">
                            <input
                              className="custom-control-input"
                              defaultChecked
                              id="maternityCover"
                              name="maternityCover"
                              type="radio"
                            />
                            <label className="custom-control-label" htmlFor="maternityCover">
                              No
                            </label>
                          </div>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                      <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Enter number of people to receive dental cover(Optional)
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="number of people to receive dental cover"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Enter number of people to receive optical cover(Optional)
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="Number of people to receive optical cover"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Number of members to be covered under last expense(Optional)
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="members to be covered under last expense"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Number of members to be covered under personal accident(Optional) - (18 and over)
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder=" members to be covered under personal accident"
                              type="email"
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

export default MedicalInsuaranceForm;