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
import SalamahTransitionCoverFormHeader from "../../components/Headers/formHeaders/SalamahInsuranceFormHeader";

class SalamahTransitionCoverForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOfSpouse: "",
      idNumberOfSpouse: "",
      name: "",
      parentsId: "",
      parentsName: "",
      childName: "",
      additionalMemberName:"",
      additionalMemeberId:""
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
        <SalamahTransitionCoverFormHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Salamah Transition Cover Details</h3>
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
                      Spouse Information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Name of spouse
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="nameOfSpouse"
                              placeholder="Spouse Name"
                              type="text"
                              value={this.state.nameOfSpouse}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              ID number of spouse
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="idNumberOfSpouse"
                              placeholder="0123456789"
                              type="number"
                              value={this.state.idNumberOfSpouse}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Parents/parents-in-law details */}
                    <h6 className="heading-small text-muted mb-4">
                      Add parents/parents in law
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label className="form-control-label">Name</label>
                            <Input
                              className="form-control-alternative"
                              name="parentsName"
                              placeholder="Name"
                              type="text"
                              value={this.state.parentsName}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label className="form-control-label">ID</label>
                            <Input
                              className="form-control-alternative"
                              name="id"
                              placeholder="ID"
                              type="number"
                              value={this.state.parentsId}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Child details */}
                    <h6 className="heading-small text-muted mb-4">
                      Child Details(less than 18 years)
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label className="form-control-label">Name</label>
                            <Input
                              className="form-control-alternative"
                              name="childName"
                              placeholder="Name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Additional members */}
                    <h6 className="heading-small text-muted mb-4">
                      Additional members
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label className="form-control-label">Name</label>
                            <Input
                              className="form-control-alternative"
                              name="additionalMemberName"
                              placeholder="Name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label className="form-control-label">ID</label>
                            <Input
                              className="form-control-alternative"
                              name="additionalMemeberId"
                              placeholder="ID"
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

export default SalamahTransitionCoverForm;
