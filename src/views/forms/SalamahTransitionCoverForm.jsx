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
import Toggle from "../components/toggle";
import LastExpensePlans from "../Plans/lastExpensePlans";
import { postRequest, getRequest } from "../../requests/requests";
import {
  ErrorOutline as Error,
  CheckCircleOutline as Success,
  ErrorRounded
} from "@material-ui/icons";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

class SalamahTransitionCoverForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      principalFirstName: "",
      principalLastName: "",
      principalDOB: "",
      principalIDNumber: "",
      principalKraPin: "",
      spouseFirstName: "",
      spouseLastName: "",
      spouseDOB: "",
      spouseIDNumber: "",
      parents: [],
      maxParents: 4,
      children: [],
      maxChildren: 4,
      married: false,
      showPlans: false,
      selectedPlan: undefined,
      showForm:false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleParentChange = this.handleParentChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleToggle(identifier) {
    this.setState(state => ({ [identifier]: !state[identifier] }));
  }

  handleChange = e => {
    if (["name", "id"].includes(e.target.name)) {
      let additionalMembers = [...this.state.additionalMembers];
      additionalMembers[e.target.dataset.id][
        e.target.name
      ] = e.target.value.toUpperCase();
      this.setState({ additionalMembers }, () =>
        console.log(this.state.additionalMembers)
      );
    } else {
      this.setState({ [e.target.id]: e.target.value.toUpperCase() });
    }
  };

  addChildren = e => {
    this.setState(prevState => ({
      children: [
        ...prevState.children,
        {
          firstName: "",
          lastName: "",
          DOB: "",
          idNumber: "",
          relationship: "child"
        }
      ]
    }));
  };
  removeChildren = e => {
    var children = this.state.children;
    if (children.length > 0) {
      children.pop();
      this.setState({ children });
    }
  };
  handleChildrenChange(event, index) {
    console.log(event.target.value);
    const id = event.target.id;
    const value = event.target.value;
    var children = this.state.children;
    var child = children[index];
    child[id] = value;
    children[index] = child;
    this.setState({ children });
  }
  addParent = e => {
    this.setState(prevState => ({
      parents: [
        ...prevState.parents,
        { firstName: "", lastName: "", DOB: "", idNumber: "", relationship: "" }
      ]
    }));
  };
  handleParentChange(event, index) {
    const id = event.target.id;
    const value = event.target.value;
    var parents = this.state.parents;
    var parent = parents[index];
    parent[id] = value;
    parents[index] = parent;
    this.setState({ parents });
  }
  handleRelationshipSelect = (event, index) => {
    const id = "relationship";
    const value = event.target.value;
    var parents = this.state.parents;
    var parent = parents[index];
    parent[id] = value;
    parents[index] = parent;
    this.setState({ parents });
  };
  addAdditionalMember = e => {
    this.setState(prevState => ({
      additionalMembers: [...prevState.additionalMembers, { name: "", id: "" }]
    }));
  };

  selectPlan = plan => {
    this.setState({ selectedPlan: plan, showPlans: false });
  };

  getQuote = () => {
    // validate fields
    console.log(this.state);
    const payloadObject = {
      lastExpensePlanId: this.state.selectedPlan.id,
      noOfParents: this.state.parents.length,
      noOfChildren: this.state.children.length,
      noOfNuclearFamily:
        this.state.children.length +
        this.state.parents.length +
        1 +
        (this.state.married ? 1 : 0)
    };
    var optionsSelected = this.state;
    var errors = [];
    var currentDate = new Date();
    if (
      optionsSelected.principalFirstName === "" ||
      optionsSelected.principalLastName === ""
    ) {
      errors.push("Principal First name & Last name cannot be empty");
    }
    if (optionsSelected.principalAge === "") {
      errors.push("Principal Age cannot be empty");
    }
    if (!parseInt(optionsSelected.principalAge)) {
      errors.push("Principal Age has to be a number");
    } else if (
      parseInt(optionsSelected.principalAge) > 65 ||
      parseInt(optionsSelected.principalAge) < 18
    ) {
      errors.push("Principal Age has to be between 18 and 65");
    }
    if (optionsSelected.principalIDNumber === "") {
      errors.push("Principal ID number cannot be empty");
    }
    if (optionsSelected.principalKraPin === "") {
      errors.push("Principal KRA PIN cannot be empty");
    }
    if (optionsSelected.married) {
      if (
        optionsSelected.spouseFirstName === "" ||
        optionsSelected.spouseLastName === ""
      ) {
        errors.push("Spouse First name & Last name cannot be empty");
      }
      if (optionsSelected.spouseAge === "") {
        errors.push("Spouse Age cannot be empty");
      }
      if (!parseInt(optionsSelected.spouseAge)) {
        errors.push("Spouse Age has to be a number");
      } else if (
        parseInt(optionsSelected.spouseAge) > 65 ||
        parseInt(optionsSelected.spouseAge) < 18
      ) {
        errors.push("Spouse Age has to be between 18 and 65");
      }
      if (optionsSelected.spouseIDNumber === "") {
        errors.push("Spouse ID number cannot be empty");
      }
      if (optionsSelected.spouseKraPin === "") {
        errors.push("Spouse KRA PIN cannot be empty");
      }
    }
    if (errors.length > 0) {
      // print errors
      toaster.notify(
        <div
          style={{
            color: "#F96762",
            fontSize: "13px",
            fontWeight: 600,
            textAlign: "left"
          }}
        >
          Please correct the following errors:
          {
            <ol>
              {errors.map(error => (
                <li>{error}</li>
              ))}
            </ol>
          }
        </div>,
        {
          duration: 10000
        }
      );
    } else {
    postRequest("/quotes/lastexpense", payloadObject).then(response => {
      console.log(response);
      // set options selected
      localStorage.setItem(
        "optionsSelected_LastExpense",
        JSON.stringify(optionsSelected)
      );
      // set quote array
      localStorage.setItem(
        "quoteArray_LastExpense",
        JSON.stringify(response.data)
      );
      if (response.data.length == 0) {
        this.setState({
          message:
            "We were unable to find underwriters offering the options you selected",
          showNotification: true,
          variant: "warning"
        });
      } else {
        this.props.history.push("/client/last-expense-quote", {
          quote: response.data
        });
      }
    });
  }
  };
  render() {
    const relationships = [
      "Father",
      "Mother",
      "Mother in Law",
      "Father in Law"
    ];
    return (
      <>
        <FormHeader
          name="Last Expense Cover"
          image="https://images.unsplash.com/photo-1544813545-4827b64fcacb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
        />
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              {!this.state.showPlans &&
                (!this.state.showForm ? (
                  <Card
                    className="bg-secondary shadow"
                    style={{
                      marginBottom: "8em"
                    }}
                  >
                    <CardHeader className="bg-white border-0">
                      <Row className="align-items-center">
                        <Col xs="8">
                          <h3 className="mb-0">Policy Description</h3>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      A good quality education is a necessity in today’s world.
                      It equips us with everything we need to help us achieve
                      economic freedom and to make our dreams come true. Your
                      child’s education is therefore a top priority. However,
                      due to uncertainties such as the increasing costs of
                      higher education, insufficient funds or the premature
                      death of one or both parents, your child may not be able
                      to complete his education. That is why his future should
                      be anticipated and planned for today. We have a unique
                      product to help you finance your child’s educational
                      needs. So, protect your child’s future. Give him one of
                      life’s greatest gifts, a good education Kindly provide us
                      the below details to take the first steps to securing your
                      childs future and we will reach out to you with a proposed
                      plan
                    </CardBody>
                    <div className="text-center">
                      <Button
                        className="my-4"
                        color="primary"
                        onClick={() => this.setState({ showForm: true })}
                      >
                        Continue
                      </Button>
                    </div>
                  </Card>
                ) : (
                  <Card className="bg-secondary shadow">
                    <CardHeader className="bg-white border-0">
                      <Row className="align-items-center">
                        <Col xs="8">
                          <h3 className="mb-0">Last Expense Cover Details</h3>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <h6 className="heading-small text-muted mb-4">
                          Principal Information
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
                                  name="principalFirstName"
                                  placeholder=""
                                  type="text"
                                  value={this.state.principalFirstName}
                                  onChange={this.handleInputChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  Last Name
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="principalLastName"
                                  placeholder=""
                                  type="text"
                                  value={this.state.principalLastName}
                                  onChange={this.handleInputChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  Date of birth
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="principalDOB"
                                  placeholder=""
                                  type="date"
                                  value={this.state.principalDOB}
                                  onChange={this.handleInputChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  ID Number
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="principalIDNumber"
                                  placeholder=""
                                  type="text"
                                  value={this.state.principalIDNumber}
                                  onChange={this.handleInputChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  KRA Pin
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="principalKraPin"
                                  placeholder=""
                                  type="text"
                                  value={this.state.principalKraPin}
                                  onChange={this.handleInputChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <label className="form-control-label"></label>
                              <Toggle
                                fieldName="Married"
                                identifier="married"
                                toggleValue={this.state.married}
                                toggleHandler={this.handleToggle}
                              />
                            </Col>
                          </Row>
                        </div>
                        {this.state.married && (
                          <>
                            <hr className="my-4" />
                            <div className="pl-lg-4">
                              <h6 className="heading-small text-muted mb-4">
                                Spouse Information
                              </h6>
                              <Row>
                                <Col lg="6">
                                  <FormGroup>
                                    <label className="form-control-label">
                                      First Name
                                    </label>
                                    <Input
                                      className="form-control-alternative"
                                      name="spouseFirstName"
                                      placeholder=""
                                      type="text"
                                      value={this.state.spouseFirstName}
                                      onChange={this.handleInputChange}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup>
                                    <label className="form-control-label">
                                      Last Name
                                    </label>
                                    <Input
                                      className="form-control-alternative"
                                      name="spouseLastName"
                                      placeholder=""
                                      type="text"
                                      value={this.state.spouseLastName}
                                      onChange={this.handleInputChange}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup>
                                    <label className="form-control-label">
                                      Date of birth
                                    </label>
                                    <Input
                                      className="form-control-alternative"
                                      name="spouseDOB"
                                      placeholder=""
                                      type="date"
                                      value={this.state.spouseDOB}
                                      onChange={this.handleInputChange}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup>
                                    <label className="form-control-label">
                                      ID Number
                                    </label>
                                    <Input
                                      className="form-control-alternative"
                                      name="spouseIDNumber"
                                      placeholder=""
                                      type="text"
                                      value={this.state.spouseIDNumber}
                                      onChange={this.handleInputChange}
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                            </div>
                          </>
                        )}

                        <>
                          <hr className="my-4" />
                          <div className="pl-lg-4">
                            <h6 className="heading-small text-muted mb-4">
                              Parents
                              {this.state.married
                                ? "/ Parents In Law"
                                : ""}{" "}
                              (Max - 4)
                            </h6>
                            <div className="pl-lg-4">
                              {this.state.parents.map((value, index) => {
                                return (
                                  <div style={{ marginBottom: "20px" }}>
                                    <Row>
                                      <Col md="6">
                                        <FormGroup>
                                          <label className="form-control-label">
                                            First Name
                                          </label>
                                          <Input
                                            type="text"
                                            id="firstName"
                                            value={
                                              this.state.parents[index]
                                                .firstName
                                            }
                                            className="form-control-alternative"
                                            onChange={event =>
                                              this.handleParentChange(
                                                event,
                                                index
                                              )
                                            }
                                          />
                                        </FormGroup>
                                      </Col>
                                      <Col md="6">
                                        <FormGroup>
                                          <label className="form-control-label">
                                            Last Name
                                          </label>
                                          <Input
                                            type="text"
                                            id="lastName"
                                            value={
                                              this.state.parents[index].lastName
                                            }
                                            className="form-control-alternative"
                                            onChange={event =>
                                              this.handleParentChange(
                                                event,
                                                index
                                              )
                                            }
                                          />
                                        </FormGroup>
                                      </Col>
                                      <Col md="6">
                                        <FormGroup>
                                          <label className="form-control-label">
                                            Date of birth
                                          </label>
                                          <Input
                                            type="date"
                                            id="DOB"
                                            value={
                                              this.state.parents[index].DOB
                                            }
                                            className="form-control-alternative"
                                            onChange={event =>
                                              this.handleParentChange(
                                                event,
                                                index
                                              )
                                            }
                                          />
                                        </FormGroup>
                                      </Col>
                                      <Col md="6">
                                        <FormGroup>
                                          <label className="form-control-label">
                                            ID Number
                                          </label>
                                          <Input
                                            type="text"
                                            id="idNumber"
                                            value={
                                              this.state.parents[index].idNumber
                                            }
                                            className="form-control-alternative"
                                            onChange={event =>
                                              this.handleParentChange(
                                                event,
                                                index
                                              )
                                            }
                                          />
                                        </FormGroup>
                                      </Col>
                                      <Col md="6">
                                        <FormGroup>
                                          <label className="form-control-label">
                                            Relationship
                                          </label>
                                          <Input
                                            type="select"
                                            id="relationship"
                                            value={
                                              this.state.parents[index]
                                                .relationship
                                            }
                                            className="form-control-alternative"
                                            onChange={event =>
                                              this.handleRelationshipSelect(
                                                event,
                                                index
                                              )
                                            }
                                          >
                                            {relationships.map(relationship => (
                                              <option
                                                key={relationship}
                                                value={relationship}
                                              >
                                                {relationship}
                                              </option>
                                            ))}
                                          </Input>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                    <hr className="my-4" />
                                  </div>
                                );
                              })}
                              {this.state.parents.length < 4 && (
                                <div
                                  style={{ marginTop: "20px" }}
                                  className="pl-lg-4 text-right"
                                >
                                  <Button onClick={this.addParent}>
                                    Add Parent
                                  </Button>
                                </div>
                              )}
                            </div>
                          </div>
                        </>

                        <hr className="my-4" />
                        <>
                          <div className="pl-lg-4">
                            <h6 className="heading-small text-muted mb-4">
                              Children
                            </h6>
                            <div className="pl-lg-4">
                              {this.state.children.map((value, index) => {
                                return (
                                  <div style={{ marginBottom: "20px" }}>
                                    <Row>
                                      <Col md="6">
                                        <FormGroup>
                                          <label className="form-control-label">
                                            First Name
                                          </label>
                                          <Input
                                            type="text"
                                            id="firstName"
                                            value={
                                              this.state.children[index]
                                                .firstName
                                            }
                                            className="form-control-alternative"
                                            onChange={event =>
                                              this.handleChildrenChange(
                                                event,
                                                index
                                              )
                                            }
                                          />
                                        </FormGroup>
                                      </Col>
                                      <Col md="6">
                                        <FormGroup>
                                          <label className="form-control-label">
                                            Last Name
                                          </label>
                                          <Input
                                            type="text"
                                            id="lastName"
                                            value={
                                              this.state.children[index]
                                                .lastName
                                            }
                                            className="form-control-alternative"
                                            onChange={event =>
                                              this.handleChildrenChange(
                                                event,
                                                index
                                              )
                                            }
                                          />
                                        </FormGroup>
                                      </Col>
                                      <Col md="6">
                                        <FormGroup>
                                          <label className="form-control-label">
                                            Date of birth
                                          </label>
                                          <Input
                                            type="date"
                                            id="DOB"
                                            value={
                                              this.state.children[index].DOB
                                            }
                                            className="form-control-alternative"
                                            onChange={event =>
                                              this.handleChildrenChange(
                                                event,
                                                index
                                              )
                                            }
                                          />
                                        </FormGroup>
                                      </Col>
                                      <Col md="6">
                                        <FormGroup>
                                          <label className="form-control-label">
                                            ID Number
                                          </label>
                                          <Input
                                            type="text"
                                            id="idNumber"
                                            value={
                                              this.state.children[index]
                                                .idNumber
                                            }
                                            className="form-control-alternative"
                                            onChange={event =>
                                              this.handleChildrenChange(
                                                event,
                                                index
                                              )
                                            }
                                          />
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                    <hr className="my-4" />
                                  </div>
                                );
                              })}

                              <div
                                style={{ marginTop: "20px" }}
                                className="pl-lg-4 text-right"
                              >
                                {this.state.children.length !== 0 && (
                                  <Button onClick={this.removeChildren}>
                                    Remove child
                                  </Button>
                                )}
                                <Button onClick={this.addChildren}>
                                  Add child
                                </Button>
                              </div>
                            </div>
                          </div>
                        </>
                        <hr className="my-4" />
                        {this.state.selectedPlan !== undefined ? (
                          <>
                            <Row className="align-items-left">
                              <Col md="6">
                                <b>Selected Plan:</b>{" "}
                                {this.state.selectedPlan.name}
                              </Col>
                            </Row>
                          </>
                        ) : (
                          ""
                        )}
                        {this.state.selectedPlan === undefined ? (
                          <div className="text-center">
                            <Button
                              className="my-4"
                              color="primary"
                              onClick={() => this.setState({ showPlans: true })}
                            >
                              Select Plan
                            </Button>
                          </div>
                        ) : (
                          <div className="text-center">
                            <Button
                              className="my-4"
                              color="primary"
                              onClick={this.getQuote}
                            >
                              Get Quote
                            </Button>
                          </div>
                        )}
                      </Form>
                    </CardBody>
                  </Card>
                ))}
              {this.state.showPlans && (
                <LastExpensePlans selectPlan={this.selectPlan} />
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SalamahTransitionCoverForm;
