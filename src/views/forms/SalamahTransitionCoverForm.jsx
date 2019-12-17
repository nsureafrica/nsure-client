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
      additionalParents: [{ name: "", id: "" }],
      additionalMembers: [{ name: "", id: "" }]
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
  handleChange = e => {
    if (["name", "id"].includes(e.target.name)) {
      let additionalMembers = [...this.state.additionalMembers];
      additionalMembers[e.target.dataset.id][e.target.name] = e.target.value.toUpperCase();
      this.setState({ additionalMembers }, () => console.log(this.state.additionalMembers));
    } else {
      this.setState({ [e.target.id]: e.target.value.toUpperCase() });
    }
  };
  addAdditionalMember = e => {
    this.setState(prevState => ({
      additionalMembers: [...prevState.additionalMembers, { name: "", id: "" }]
    }));
  };

  handleParentChange = e => {
    if (["name", "id"].includes(e.target.name)) {
      let additionalParents = [...this.state.additionalParents];
      additionalParents[e.target.dataset.id][e.target.name] = e.target.value.toUpperCase();
      this.setState({ additionalParents }, () => console.log(this.state.additionalParents));
    } else {
      this.setState({ [e.target.id]: e.target.value.toUpperCase() });
    }
  }
  addAdditionalParent = e => {
    this.setState(prevState => ({
      additionalParents: [...prevState.additionalParents, {name: "", id: ""}]
    }))
  }
  render() {
    return (
      <>
        <FormHeader
          name="Salamah Insurance"
          image="https://images.unsplash.com/photo-1544813545-4827b64fcacb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
        />
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
                    {this.state.additionalParents.map((val, idx) => {
                      let additionalParentId = `member-${idx}`,
                        additionalParentIdId = `id-${idx}`;
                      return (
                        <div key={idx} className="pl-lg-4">
                          <Row>
                            <Col md="6">
                              <label
                                htmlFor={additionalParentId}
                                className="form-control-label"
                              >
                                Name
                              </label>
                              <Input
                                type="text"
                                name="name"
                                data-id={idx}
                                id={additionalParentIdId}
                                value={additionalParentId[idx].name}
                                className="form-control-alternative"
                                onChange={this.handleParentChange}
                                placeholder="Name"
                              />
                            </Col>
                            <Col md="6">
                              <label
                                htmlFor={additionalParentIdId}
                                className="form-control-label"
                              >
                                ID
                              </label>
                              <Input
                                type="number"
                                name="id"
                                data-id={idx}
                                id={additionalParentIdId}
                                value={additionalParentIdId[idx].id}
                                className="form-control-alternative"
                                placeholder="ID"
                                onChange={this.handleParentChange}
                              />
                            </Col>
                          </Row>
                        </div>
                      );
                    })}
                    <div className="pl-lg-4 text-right">
                      <Button onClick={this.addAdditionalParent}>
                        Add new Member
                      </Button>
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

                    {this.state.additionalMembers.map((val, idx) => {
                      let additionalMemberId = `member-${idx}`,
                        additionalMemberIdId = `id-${idx}`;
                      return (
                        <div key={idx} className="pl-lg-4">
                          <Row>
                            <Col md="6">
                              <label
                                htmlFor={additionalMemberId}
                                className="form-control-label"
                              >
                                Name
                              </label>
                              <Input
                                type="text"
                                name="name"
                                data-id={idx}
                                id={additionalMemberId}
                                value={additionalMemberId[idx].name}
                                className="form-control-alternative"
                                onChange={this.handleChange}
                                placeholder="Name"
                              />
                            </Col>
                            <Col md="6">
                              <label
                                htmlFor={additionalMemberIdId}
                                className="form-control-label"
                              >
                                ID
                              </label>
                              <Input
                                type="number"
                                name="id"
                                data-id={idx}
                                id={additionalMemberIdId}
                                value={additionalMemberIdId[idx].id}
                                className="form-control-alternative"
                                placeholder="ID"
                                onChange={this.handleChange}
                              />
                            </Col>
                          </Row>
                        </div>
                      );
                    })}
                    <div className="pl-lg-4 text-right">
                      <Button onClick={this.addAdditionalMember}>
                        Add new Member
                      </Button>
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

export default SalamahTransitionCoverForm;
