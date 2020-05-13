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
  Col,
} from "reactstrap";
// core components
import FormHeader from "../../components/Headers/FormHeader";
import { postRequest } from "../../requests/requests";
import {
  ErrorOutline as Error,
  CheckCircleOutline as Success,
  ErrorRounded,
} from "@material-ui/icons";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

class EducationInsuranceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      dob: Date.now(),
      expectedCommencementDate: Date.now(),
      ageNextBirthday: "",
      policyTerm: "",
      sumAssured: undefined,
      premium: undefined,
      frequency: "monthly",
      targetAmount: undefined,
      showForm: false,
      requestQuote: false,
      productSelected: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit() {
    const payload = this.state;
    var errors = [];
    var currentDate = new Date();
    if (payload.firstName === "" || payload.lastName === "") {
      errors.push("First name & Last name cannot be empty");
    }
    if (payload.dob === "") {
      errors.push("Date of birth cannot be empty");
    }
    if (payload.expectedCommencementDate === "") {
      errors.push("Expected commencement date cannot be empty");
    }
    if (payload.ageNextBirthday === "") {
      errors.push("Age of child cannot be empty");
    }
    if (!parseInt(payload.policyTerm)) {
      errors.push("Policy term has to be a number");
    }
    if (!parseFloat(payload.sumAssured)) {
      errors.push("Sum assured has to be a number");
    }
    if (!parseFloat(payload.premium)) {
      errors.push("Amount to pay per month has to be a number");
    }
    if (!parseFloat(payload.targetAmount)) {
      errors.push("Target amount has to be a number");
    }

    if (errors.length > 0) {
      // print errors
      toaster.notify(
        <div
          style={{
            color: "#F96762",
            fontSize: "13px",
            fontWeight: 600,
            textAlign: "left",
          }}
        >
          Please correct the following errors:
          {
            <ol>
              {errors.map((error) => (
                <li>{error}</li>
              ))}
            </ol>
          }
        </div>,
        {
          duration: 10000,
        }
      );
    } else {
      // post to endpoint
      postRequest("/policies/education/policy", payload)
        .then((response) => {
          console.log(response);
          this.props.history.push("/client/notified");
        })
        .catch((err) => {
          // handle err
          this.props.history.push("/client/notified");
        });
    }
  }

  render() {
    console.log(this.state);
    return (
      <>
        <FormHeader
          name="Education Insurance"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwrybLv0bBwV98kkY0zp1yKiopc7vA52HBKbEsPRX9CrBI9c6y"
        />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              {!this.state.showForm && (
                <Card
                  className="bg-secondary shadow"
                  style={{
                    marginBottom: "8em",
                  }}
                >
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3
                          className="mb-0"
                          style={{ color: "#11576a", fontWeight: 800 }}
                        >
                          Policy Description
                        </h3>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <p style={{ color: "#f66f31", fontWeight: 600 }}>
                      The cost of higher education is increasing. The need for
                      access to higher education and the cost will put a
                      financial strain on you and your family. That is why it is
                      important to start planning for your child's education as
                      soon as possible, because the earlier you begin, the more
                      time you allow your money to grow.
                    </p>
                    <p style={{ color: "#f66f31", fontWeight: 600 }}>
                      The education policy will provide the funds needed by your
                      child to pursue further education and assures that
                      whatever happens in the future, your child will still have
                      the means to pursue some of his/her goals in life.
                    </p>
                    <p style={{ color: "#11576a", fontWeight: 800 }}>
                      Get Covered the Sure Way
                    </p>
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
              )}
              {this.state.showForm && (
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3 className="mb-0">Education Insurance Details</h3>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    {!this.state.requestQuote && (
                      <>
                        <div>
                          <button
                            onClick={() =>
                              this.setState({ productSelected: "fanaka" })
                            }
                          >
                            Fanaka Jubilee
                          </button>
                          <button
                            onClick={() =>
                              this.setState({ productSelected: "academia" })
                            }
                          >
                            Academia CIC
                          </button>
                        </div>
                        <div>
                          {this.state.productSelected === "fanaka" && (
                            <div style={{ width: "100%" }}>
                              <img
                                style={{ marginTop: "30px" }}
                                src="images/fanaka.png"
                                alt="fanaka jubilee"
                              />
                            </div>
                          )}
                          {this.state.productSelected === "academia" && (
                            <>
                              <ul style={{ marginTop: "30px" }}>
                                <li>
                                  A tax free investment. The final payout is not
                                  taxable.
                                </li>
                                <li>
                                  Tax relief benefit. The government has given a
                                  relief of 15% of monthly premium or Kshs 5,000
                                  whichever is less to all life policy holders.
                                  This is a saving on taxable income.
                                </li>
                                <li>
                                  Forced savings hence ensuring money is saved
                                  for purpose intended.
                                </li>
                                <li>
                                  Premiums are constant throughout the term thus
                                  allows you to better budget.
                                </li>
                                <li>
                                  Forced savings hence ensuring money is saved
                                  for purpose intended.
                                </li>
                                <li>
                                  It guarantees the child’s education on death
                                  or permanent disability of the
                                  parent/guardian, the policy pays 50% of the
                                  sum assured and all future premiums are waived
                                  as the policy cover and benefits continue
                                  unabated until maturity.
                                </li>
                                <li>
                                  The 50% is used to build capacity on the
                                  declared guardian beneficiary to take up
                                  additional responsibility of taking care of
                                  Children.
                                </li>
                                <li>
                                  The waiver of premium ensures peace of mind as
                                  the money will be availed when needed.
                                </li>
                                <li>You enjoy a life cover.</li>
                                <ul>
                                  <li>
                                    Death and Permanent Total disability Cover.
                                  </li>
                                  <li>
                                    A waiver of premium Critical illness to
                                    ensure that the policy is still paid for in
                                    case of diagnosis of critical illness.
                                  </li>
                                  <li>
                                    A 150% of Sum assured cover due to
                                    accidental death.
                                  </li>
                                </ul>
                                <h4>BENEFITS TO CHILD</h4>
                                <ul>
                                  <li>
                                    It ensures that the benefits are known from
                                    the outset.
                                  </li>
                                  <li>
                                    The benefits are payable during the last 4
                                    years of the policy in equal Installments:
                                    15% of (Sum Assured plus accrued bonuses)
                                    with 45% of the Sum Assured plus accrued
                                    bonuses payable on the maturity date.
                                  </li>
                                </ul>
                                <h5>Cash surrender value and Loan benefit</h5>
                                <ul>
                                  <li>
                                    The policy can be surrendered after 3 years.
                                    A maximum loan of 85% of surrender value is
                                    available.
                                  </li>
                                </ul>
                                <h5>Paid-Up policy values</h5>
                                <ul>
                                  <li>
                                    The paid up value will be determined after
                                    the policy attaining surrender value, in
                                    which case no more premiums are payable and
                                    the company keeps the policy in force until
                                    maturity at an adjusted sum assured.
                                  </li>
                                </ul>
                                <h5>Who is eligible?</h5>
                                <ul>
                                  <li>
                                    Individuals of a minimum age of 18 years to
                                    a maximum of 55 years.
                                  </li>
                                </ul>
                                <h5>How do I pay premium?</h5>
                                <ul>
                                  <li>
                                    Premiums are payable throughout the premium
                                    term unless premature death occurs. Premiums
                                    are payable annually, half yearly, quarterly
                                    and monthly.
                                  </li>
                                </ul>
                              </ul>
                            </>
                          )}
                          {this.state.productSelected !== "" && (
                            <div style={{ width: "100%", textAlign: "center" }}>
                              <Button
                                className="my-4"
                                color="primary"
                                onClick={() =>
                                  this.setState({ requestQuote: true })
                                }
                              >
                                Get Quote
                              </Button>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                    {this.state.requestQuote && (
                      <Form>
                        <h6 className="heading-small text-muted mb-4">
                          Details
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  First name *
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="firstName"
                                  placeholder=""
                                  type="text"
                                  value={this.state.firstName}
                                  onChange={this.handleChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  Last name *
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="lastName"
                                  placeholder=""
                                  type="text"
                                  value={this.state.lastName}
                                  onChange={this.handleChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  Date of Birth *
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="dob"
                                  placeholder=""
                                  type="date"
                                  value={this.state.dob}
                                  onChange={this.handleChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  Expected commemcement date
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="expectedCommencementDate"
                                  placeholder=""
                                  type="date"
                                  value={this.state.expectedCommencementDate}
                                  onChange={this.handleChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  Age of child (Next birthday) *
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="ageNextBirthday"
                                  placeholder=""
                                  type="number"
                                  value={this.state.ageNextBirthday}
                                  onChange={this.handleChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  Policy Term (in years) *
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="policyTerm"
                                  placeholder="Policy term"
                                  type="number"
                                  value={this.state.policyTerm}
                                  onChange={this.handleChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  Sum assured *
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="sumAssured"
                                  placeholder=""
                                  type="number"
                                  value={this.state.sumAssured}
                                  onChange={this.handleChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  Amount to pay per month *
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="premium"
                                  placeholder=""
                                  type="number"
                                  value={this.state.premium}
                                  onChange={this.handleChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  Frequency
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="frequency"
                                  placeholder=""
                                  type="select"
                                  value={this.state.frequency}
                                  onChange={this.handleChange}
                                >
                                  <option value="monthly">Monthly</option>
                                  <option value="quarterly">Quarterly</option>
                                  <option value="halfAnnually">
                                    Half annually
                                  </option>
                                  <option value="annually">
                                    Annually (Yearly)
                                  </option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  Target amount *
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="targetAmount"
                                  placeholder=""
                                  type="number"
                                  value={this.state.targetAmount}
                                  onChange={this.handleChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        {/* <hr className="my-4" /> */}
                        {/* Address */}
                        {/* <h6 className="heading-small text-muted mb-4">
                      Riders(Optional)
                    </h6> */}
                        {/* <div className="pl-lg-4">
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
                    </div> */}
                        {/* <hr className="my-4" /> */}

                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            onClick={() => this.handleSubmit()}
                          >
                            Submit details
                          </Button>
                        </div>
                      </Form>
                    )}
                  </CardBody>
                </Card>
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default EducationInsuranceForm;
