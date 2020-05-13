import React, { Component } from "react";
import FormHeader from "../../components/Headers/FormHeader";
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
  Label,
  Col,
  Table,
} from "reactstrap";
import Toggle from "../components/toggle";
import { getRequest, postRequest } from "../../requests/requests";
import {
  ErrorOutline as Error,
  CheckCircleOutline as Success,
  ErrorRounded,
} from "@material-ui/icons";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import * as yup from "yup";

class HomeCareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      currentSection: "A",
      buildingValue: "",
      privateDwelling: false,
      selfContainedRooms: false,
      selfContainedFlat: false,
      wallConstructionMaterial: "",
      roofConstructionMaterial: "",
      outbuildings: false,
      outbuildingWallConstructionMaterial: "",
      outbuildingRoofConstructionMaterial: "",
      businessOnDwelling: false,
      soleOccupation: true,
      numberOfGuests: "",
      numberOfDaysWithoutInhabitants: "",
      numberOfConsecutiveDaysWithoutInhabitants: "",
      goodStateOfRepair: false,
      insuredBefore: false,
      declinedInsurance: false,
      specialTermsToInsure: false,
      canceledorRefusedToRenew: false,
      increasedPremium: false,
      plans: [],
      contentValuePlanId: 1,
      numberOfWorkers: null,
      ownerLiability: false,
      personalLiability: false,
      proposerFullName: "",
      proposerAddress: "",
      postalCode: "",
      proposerPhone: "",
      professionOfOccupation: "",
      proposerEmail: "",
      insuranceStartDate: "",
      insuranceEndtDate: "",
      sustainedLoss: false,
    };
  }
  componentDidMount() {
    getRequest("/domesticPlans/getAllDomesticContentPlans")
      .then((response) => {
        this.setState({ plans: response.data });
      })
      .catch((err) => {
        toaster.notify(
          <div
            style={{
              color: "#F96762",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            An error occurred. Please try again
          </div>,
          {
            duration: 10000,
          }
        );
      });
  }
  handleToggle = (identifier) => {
    this.setState((state) => ({ [identifier]: !state[identifier] }));
  };
  handleSelect = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  validateSectionA = () => {
    const formFieldTypes = yup.object().shape({
      buildingValue: yup.number().required().label("Building estimated value"),
      wallConstructionMaterial: yup
        .string()
        .required()
        .max(30)
        .label("Dwelling wall construction material"),
      roofConstructionMaterial: yup
        .string()
        .required()
        .max(16)
        .label("Dwelling roof construction material"),
      numberOfDaysWithoutInhabitants: yup
        .number()
        .required()
        .label("Number of days without inhabitants"),
      numberOfConsecutiveDaysWithoutInhabitants: yup
        .number()
        .required()
        .label("Number of consecutive days without inhabitants"),
    });
    formFieldTypes
      .validate({
        buildingValue: this.state.buildingValue,
        wallConstructionMaterial: this.state.wallConstructionMaterial,
        roofConstructionMaterial: this.state.roofConstructionMaterial,
        numberOfDaysWithoutInhabitants: this.state
          .numberOfDaysWithoutInhabitants,
        numberOfConsecutiveDaysWithoutInhabitants: this.state
          .numberOfConsecutiveDaysWithoutInhabitants,
      })
      .catch((err) => {
        toaster.notify(
          <div
            style={{
              color: "#F96762",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            <Error style={{ width: "40px" }} /> {err.errors}
          </div>,
          {
            duration: 5000,
          }
        );
      });
    formFieldTypes
      .isValid({
        buildingValue: this.state.buildingValue,
        wallConstructionMaterial: this.state.wallConstructionMaterial,
        roofConstructionMaterial: this.state.roofConstructionMaterial,
        numberOfDaysWithoutInhabitants: this.state
          .numberOfDaysWithoutInhabitants,
        numberOfConsecutiveDaysWithoutInhabitants: this.state
          .numberOfConsecutiveDaysWithoutInhabitants,
      })
      .then((valid) => {
        if (valid) {
          this.setState({ currentSection: "B" });
        }
      });
  };
  validateSectionD = () => {
    const formFieldTypes = yup.object().shape({
      numberOfWorkers: yup.number().required().label("Number of workers"),
    });
    formFieldTypes
      .validate({
        numberOfWorkers: this.state.numberOfWorkers,
      })
      .catch((err) => {
        toaster.notify(
          <div
            style={{
              color: "#F96762",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            <Error style={{ width: "40px" }} /> {err.errors}
          </div>,
          {
            duration: 5000,
          }
        );
      });
    formFieldTypes
      .isValid({
        numberOfWorkers: this.state.numberOfWorkers,
      })
      .then((valid) => {
        if (valid) {
          this.setState({ currentSection: "proposerInfo" });
        }
      });
  };
  validateProposerDetails = () => {
    const formFieldTypes = yup.object().shape({
      proposerFullName: yup.string().required().label("Full name of proposer"),
      proposerAddress: yup.string().required().label("Postal Address"),
      postalCode: yup.string().required().label("Code"),
      proposerPhone: yup.string().required().max(13).label("Phone"),
      professionOfOccupation: yup
        .string()
        .required()
        .label("Profession of Occupation"),
      proposerEmail: yup.string().email().required().label("Email"),
      insuranceStartDate: yup
        .date()
        .required()
        .label("Period of insurance from"),
      insuranceEndtDate: yup.date().required().label("Period of insurance to"),
      physicalAddress: yup
        .string()
        .required()
        .label("Physical address of premises"),
    });
    formFieldTypes
      .validate({
        proposerFullName: this.state.proposerFullName,
        proposerAddress: this.state.proposerAddress,
        postalCode: this.state.postalCode,
        proposerPhone: this.state.proposerPhone,
        professionOfOccupation: this.state.professionOfOccupation,
        proposerEmail: this.state.proposerEmail,
        insuranceStartDate: this.state.insuranceStartDate,
        insuranceEndtDate: this.state.insuranceEndtDate,
        physicalAddress: this.state.physicalAddress,
      })
      .catch((err) => {
        toaster.notify(
          <div
            style={{
              color: "#F96762",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            <Error style={{ width: "40px" }} /> {err.errors}
          </div>,
          {
            duration: 5000,
          }
        );
      });
    formFieldTypes
      .isValid({
        proposerFullName: this.state.proposerFullName,
        proposerAddress: this.state.proposerAddress,
        postalCode: this.state.postalCode,
        proposerPhone: this.state.proposerPhone,
        professionOfOccupation: this.state.professionOfOccupation,
        proposerEmail: this.state.proposerEmail,
        insuranceStartDate: this.state.insuranceStartDate,
        insuranceEndtDate: this.state.insuranceEndtDate,
        physicalAddress: this.state.physicalAddress,
      })
      .then((valid) => {
        console.log(valid)
        if (valid) {
          let payload = {
            physical_address: this.state.physicalAddress,
            ownerLiability: this.state.ownerLiability,
            personalLiability: this.state.personalLiability,
            type_of_dwelling: this.state.privateDwelling
              ? "private"
              : "selfContained",
            rooms_not_self_contained: 0,
            wall_construction_material: this.state.wallConstructionMaterial,
            roof_construction_material: this.state.roofConstructionMaterial,
            outbuildings: this.state.outbuildings,
            outbuildings_wall_construction_material: this.state
              .outbuildingWallConstructionMaterial,
            outbuildings_roof_construction_material: this.state
              .outbuildingRoofConstructionMaterial,
            trade_activity_in_premise: this.state.businessOnDwelling,
            number_of_other_tenants: this.state.numberOfGuests,
            days_without_inhabitants: this.state.numberOfDaysWithoutInhabitants,
            consecutive_days_without_inhabitants: this.state
              .numberOfConsecutiveDaysWithoutInhabitants,
            building_state: this.state.goodStateOfRepair,
            previous_insurer: this.state.insuredBefore,
            previous_insurer_name: this.state.previousInsuranceCompany,
            previous_insurer_decline_to_insure: this.state.declinedInsurance,
            previous_insurer_require_special_terms: this.state
              .specialTermsToInsure,
            previous_insurer_canceled_insuarance: this.state
              .canceledorRefusedToRenew,
            loss_from_mentioned_perils: this.state.sustainedLoss,
          };
          let quotePayload = {
            buildingValue: this.state.buildingValue,
            contentValuePlanId: this.state.contentValuePlanId,
            numberOfWorkers: this.state.numberOfWorkers,
          };
          postRequest("/quotes/domestic", quotePayload).then((response) => {
            console.log(response);
            // set options selected
            localStorage.setItem(
              "optionsSelected_homeCare",
              JSON.stringify(payload)
            );
            // set quote array
            localStorage.setItem("quoteArray_homeCare", JSON.stringify(response.data));
            if (response.data.length == 0) {
              this.setState({
                message:
                  "We were unable to find underwriters offering the options you selected",
                showNotification: true,
                variant: "warning",
              });
            } else {
              this.props.history.push("/client/home-care-quote", {
                quote: response.data, payload:payload
              });
            }
          });
        }
      });
  };
  render() {
    console.log(this.state);
    return (
      <>
        <FormHeader
          name="Home Care"
          image="https://likeitgirl.com/wp-content/uploads/2019/08/home-insurance1-1200x509.jpg"
        />
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
                      Your home is your haven. Orient Home Insurance is designed
                      to cover your house, contents as well as domestic workers.
                      The ambulance service from Emergency Plus (E-PLUS)
                      provides you with a 24Hr rescue cover within Kenya.
                      <br />
                      Emergency Plus (E-PLUS) is a service of the Kenya Red
                      Cross Society.
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
                        <h3 className="mb-0">Home Care</h3>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    {this.state.currentSection === "A" && (
                      <Form onSubmit={() => this.validate()}>
                        <h6 className="heading-small text-muted mb-4">
                          Section A (Buildings)
                        </h6>
                        <span>
                          This section provides cover for residential buildings
                          (1st Class construction) against Fire, Explosion,
                          Lightening, Earthquake, Riot and Strike, Malicious
                          Damage, Storm, Flood, Burst Pipes and impact.
                          Buildings include house, servants quaters, garages,
                          stores and out buildings within the compound.
                        </span>
                        <br />
                        <span style={{ fontSize: ".8rem", color: "orange" }}>
                          Please fill in all the marked fields *
                        </span>
                        <div className="pl-lg-4" style={{ marginTop: "1rem" }}>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  Building Estimated value (KES) *
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  // placeholder="Vehicle's estimated value (KES)"
                                  type="text"
                                  value={this.state.buildingValue}
                                  onChange={this.handleChange}
                                  id="buildingValue"
                                  required
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  Is the dwelling
                                </label>
                                <Toggle
                                  fieldName="A private dwelling house?"
                                  identifier="privateDwelling"
                                  toggleValue={this.state.privateDwelling}
                                  toggleHandler={this.handleToggle}
                                />

                                <Toggle
                                  fieldName="A self contained flat with seperate entrance exclusively under your control?"
                                  identifier="selfContainedFlat"
                                  toggleValue={this.state.selfContainedFlat}
                                  toggleHandler={this.handleToggle}
                                />
                                <Toggle
                                  fieldName="Rooms not self contained?"
                                  identifier="selfContainedRooms"
                                  toggleValue={this.state.selfContainedRooms}
                                  toggleHandler={this.handleToggle}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <label className="form-control-label">
                                Dwelling Construction Materials
                              </label>
                              <FormGroup>
                                <label className="form-control-label">
                                  Wall
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  type="text"
                                  value={this.state.wallConstructionMaterial}
                                  onChange={this.handleChange}
                                  id="wallConstructionMaterial"
                                  required
                                />
                              </FormGroup>
                              <FormGroup>
                                <label className="form-control-label">
                                  Roof
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  type="text"
                                  value={this.state.roofConstructionMaterial}
                                  onChange={this.handleChange}
                                  id="roofConstructionMaterial"
                                  required
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  Outbuildings
                                </label>
                                <Toggle
                                  fieldName="Are there any outbuildings?"
                                  identifier="outbuildings"
                                  toggleValue={this.state.outbuildings}
                                  toggleHandler={this.handleToggle}
                                />
                              </FormGroup>
                              {this.state.outbuildings && (
                                <>
                                  <label className="form-control-label">
                                    Outbuilding Construction Materials
                                  </label>
                                  <FormGroup>
                                    <label className="form-control-label">
                                      Wall
                                    </label>
                                    <Input
                                      className="form-control-alternative"
                                      type="text"
                                      value={
                                        this.state
                                          .outbuildingWallConstructionMaterial
                                      }
                                      onChange={this.handleChange}
                                      id="outbuildingWallConstructionMaterial"
                                      required
                                    />

                                    <label className="form-control-label">
                                      Roof
                                    </label>
                                    <Input
                                      className="form-control-alternative"
                                      type="text"
                                      value={
                                        this.state
                                          .outbuildingRoofConstructionMaterial
                                      }
                                      onChange={this.handleChange}
                                      id="outbuildingRoofConstructionMaterial"
                                      required
                                    />
                                  </FormGroup>
                                </>
                              )}
                            </Col>
                            <Col lg={6}>
                              <Toggle
                                fieldName="Is any business, profession or trade carried out on any portion of the premises of which the dwelling forms?"
                                identifier="businessOnDwelling"
                                toggleValue={this.state.businessOnDwelling}
                                toggleHandler={this.handleToggle}
                              />
                            </Col>
                            <Col lg={6}>
                              <FormGroup>
                                <Toggle
                                  fieldName="Is the dwelling sorely in your occupation (including your family and servants)?"
                                  identifier="soleOccupation"
                                  toggleValue={this.state.soleOccupation}
                                  toggleHandler={this.handleToggle}
                                />
                              </FormGroup>
                              {!this.state.soleOccupation && (
                                <FormGroup>
                                  <label className="form-control-label">
                                    Number of tenants/lodgers/boarders or paying
                                    guests
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    type="text"
                                    value={this.state.numberOfGuests}
                                    onChange={this.handleChange}
                                    id="numberOfGuests"
                                    required
                                  />
                                </FormGroup>
                              )}
                            </Col>
                            <Col lg={6}>
                              <FormGroup>
                                <label className="form-control-label">
                                  How many days (whether consecutive or not) is
                                  the dwelling house likely to be left without
                                  inhabitants during one year?
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  type="text"
                                  value={
                                    this.state.numberOfDaysWithoutInhabitants
                                  }
                                  onChange={this.handleChange}
                                  id="numberOfDaysWithoutInhabitants"
                                  required
                                />
                              </FormGroup>
                            </Col>
                            <Col lg={6}>
                              <FormGroup>
                                <label className="form-control-label">
                                  State the number of days, the longest
                                  continuous period in any year during which the
                                  dwelling is to be left un-inhabited
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  type="text"
                                  value={
                                    this.state
                                      .numberOfConsecutiveDaysWithoutInhabitants
                                  }
                                  onChange={this.handleChange}
                                  id="numberOfConsecutiveDaysWithoutInhabitants"
                                  required
                                />
                              </FormGroup>
                            </Col>
                            <Col lg={6}>
                              <FormGroup>
                                <Toggle
                                  fieldName=" Are the buildings in good state of repair and will they be so maintained?"
                                  identifier="goodStateOfRepair"
                                  toggleValue={this.state.goodStateOfRepair}
                                  toggleHandler={this.handleToggle}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg={6}>
                              <FormGroup>
                                <Toggle
                                  fieldName="Have you been insured for home insurance before"
                                  identifier="insuredBefore"
                                  toggleValue={this.state.insuredBefore}
                                  toggleHandler={this.handleToggle}
                                />
                              </FormGroup>
                              {this.state.insuredBefore && (
                                <FormGroup>
                                  <label className="form-control-label">
                                    State the name of the insurance company.
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    type="text"
                                    value={this.state.previousInsuranceCompany}
                                    onChange={this.handleChange}
                                    id="previousInsuranceCompany"
                                    required
                                  />
                                </FormGroup>
                              )}
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label className="form-control-label">
                                  Has the Company or insurer in respect of any
                                  of the items to which this proposal applies:
                                </label>
                                <Toggle
                                  fieldName="Declined to insure you?"
                                  identifier="declinedInsurance"
                                  toggleValue={this.state.declinedInsurance}
                                  toggleHandler={this.handleToggle}
                                />

                                <Toggle
                                  fieldName="Required special terms to insure you?"
                                  identifier="specialTermsToInsure"
                                  toggleValue={this.state.specialTermsToInsure}
                                  toggleHandler={this.handleToggle}
                                />
                                <Toggle
                                  fieldName="Canceled or refused to renew your insurance?"
                                  identifier="canceledorRefusedToRenew"
                                  toggleValue={
                                    this.state.canceledorRefusedToRenew
                                  }
                                  toggleHandler={this.handleToggle}
                                />
                                <Toggle
                                  fieldName="Increased you Premium at Renewal?"
                                  identifier="increasedPremium"
                                  toggleValue={this.state.increasedPremium}
                                  toggleHandler={this.handleToggle}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg={6}>
                              <FormGroup>
                                <Toggle
                                  fieldName="Have you ever sustained loss from any of the herein mentioned Perils? "
                                  identifier="sustainedLoss"
                                  toggleValue={this.state.sustainedLoss}
                                  toggleHandler={this.handleToggle}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            onClick={this.validateSectionA}
                          >
                            Next
                          </Button>
                        </div>
                      </Form>
                    )}
                    {this.state.currentSection === "B" && (
                      <>
                        <h6 className="heading-small text-muted mb-4">
                          Section B (Contents)
                        </h6>
                        <p>
                          This section provides cover for your household
                          contents like household goods and personal effects of
                          every description owned by the Proposer or any member
                          of this family normally residing with him for which
                          the Proposer is liable against theft, damage by fire,
                          explosion, lighting, earthquake, riot and strike,
                          malicious damage, storm, flood burst pipes and impact
                          only within the residence, excluding:
                          <ol type="i">
                            <li>
                              Property more specifically insured elsewhere{" "}
                            </li>
                            <li>
                              Deed, bonds, bills of exchange, promissory notes,
                              cheques, travelers cheques, securities or money,
                              stamps, documents of any kind, cash, currency
                              notes, manuscripts, medals, coins, motor vehicles
                              and accessories and livestock unless specially
                              mentioned herein
                            </li>
                            <li>
                              Any part of the structure or ceiling of the
                              Buildings, wallpapers and the like or external
                              television and radio antennae, aerial fittings,
                              masts and towers.
                            </li>
                          </ol>
                        </p>
                        <br />
                        <Table
                          className="align-items-center table-flush"
                          responsive
                        >
                          <thead className="thead-light">
                            <tr>
                              <th scope="col">Items</th>
                              {this.state.plans.map((plan) => {
                                return <th>{plan.name}</th>;
                              })}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Sofa set</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.sofaSet
                                      .toFixed(0)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>Beds</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.beds
                                      .toFixed(0)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>Tables & stools - other furniture</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.otherFurniture
                                      .toFixed(0)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>Kitchen utensils</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.kitchenUtensils
                                      .toFixed(0)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>Clothes, beddings and curtains</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.clothes
                                      .toFixed(0)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>Carpets</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.carpets
                                      .toFixed(0)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>Gas cylinders</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.gasCylinders
                                      .toFixed(0)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>TV</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.tv
                                      .toFixed(0)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>DVD player</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.dvd
                                      .toFixed(0)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>Radio/music system</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.radio
                                      .toFixed(0)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>Microwave</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.microwave
                                      .toFixed(0)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>Fridge</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.fridge
                                      .toFixed(0)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>Deep freezer</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.deepFreezer
                                      ? plan.deepFreezer
                                          .toFixed(0)
                                          .toString()
                                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                      : 0}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>Washing machine</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.washingMachine
                                      ? plan.washingMachine
                                          .toFixed(0)
                                          .toString()
                                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                      : 0}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>Gas cooker</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.gasCooker
                                      ? plan.gasCooker
                                          .toFixed(0)
                                          .toString()
                                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                      : 0}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>Iron box(s)</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.ironBox
                                      ? plan.ironBox
                                          .toFixed(0)
                                          .toString()
                                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                      : 0}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>Other kitchen electric appliances</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.otherKitchenAppliance
                                      ? plan.otherKitchenAppliance
                                          .toFixed(0)
                                          .toString()
                                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                      : 0}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>Toys & Books</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.toysAndBooks
                                      ? plan.toysAndBooks
                                          .toFixed(0)
                                          .toString()
                                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                      : 0}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>E-PLUS Ambulance</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    {plan.ePlus === 0
                                      ? "FREE"
                                      : plan.ePlus
                                          .toFixed(0)
                                          .toString()
                                          .replace(
                                            /\B(?=(\d{3})+(?!\d))/g,
                                            ","
                                          )}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr style={{ fontWeight: "600" }}>
                              <td>TOTAL VALUE</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.total_value
                                      ? plan.total_value
                                          .toFixed(0)
                                          .toString()
                                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                      : ""}
                                  </th>
                                );
                              })}
                            </tr>
                            <tr style={{ fontWeight: "600" }}>
                              <td>PREMIUM</td>
                              {this.state.plans.map((plan) => {
                                return (
                                  <th>
                                    KES{" "}
                                    {plan.annual_premium
                                      ? plan.annual_premium
                                          .toFixed(0)
                                          .toString()
                                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                      : ""}
                                  </th>
                                );
                              })}
                            </tr>
                          </tbody>
                        </Table>
                        <Form style={{ marginTop: "30px" }}>
                          <Col lg={6}>
                            <FormGroup>
                              <Label className="form-control-label">
                                Select Plan
                              </Label>
                              <Input
                                type="select"
                                id="contentValuePlanId"
                                className="form-control-alternative"
                                value={this.state.contentValuePlanId}
                                onChange={this.handleSelect}
                                required
                              >
                                {this.state.plans.map((plan) => (
                                  <option key={plan.id} value={plan.id}>
                                    {plan.name}
                                  </option>
                                ))}
                              </Input>
                            </FormGroup>
                          </Col>
                        </Form>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            onClick={() =>
                              this.setState({ currentSection: "A" })
                            }
                          >
                            Back
                          </Button>
                          <Button
                            className="my-4"
                            color="primary"
                            onClick={() =>
                              this.setState({ currentSection: "C" })
                            }
                          >
                            Next
                          </Button>
                        </div>
                      </>
                    )}
                    {this.state.currentSection === "C" && (
                      <>
                        <h6 className="heading-small text-muted mb-4">
                          Section C (SCHEDULE OF PROPERTY ALL RISKS )
                        </h6>
                        <p>
                          section provides cover for loss or accidental damage
                          to damage to personal effects, i.e. cameras,
                          prescription glasses, phones, laptops or jewelry.
                          Please provide schedules of items to be covered and
                          their value.
                        </p>
                        <p>
                          Excess 10% of each and every loss / Minimum Kshs 5,000
                        </p>
                        <p>
                          Laptop & Computers / Excess 10% of each and every loss
                          / Minimum Kshs 10,000
                        </p>
                        <p>
                          Please give a detailed description and state
                          separately the full value of each items. For items of
                          jewelry valued at above Kshs 30,000/- Proof of
                          purchase of value must be attached
                        </p>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            onClick={() =>
                              this.setState({ currentSection: "B" })
                            }
                          >
                            Back
                          </Button>
                          <Button
                            className="my-4"
                            color="primary"
                            onClick={() =>
                              this.setState({ currentSection: "D" })
                            }
                          >
                            Next
                          </Button>
                        </div>
                      </>
                    )}
                    {this.state.currentSection === "D" && (
                      <>
                        <h6 className="heading-small text-muted mb-4">
                          Section D (WORK INJURY BENEFITS ACT - WIBA)
                        </h6>
                        <p>
                          The Work injury Benefits Insurance replaces employee
                          insurance previously under the Workmen's Compensation
                          and Employers Liability covers. This covers is as a
                          results of the Work Injury Benefits Act 2007 which
                          came into effect on June 2nd, 2008.
                        </p>
                        <p>
                          The Act requires that employers take out insurance for
                          all the employees including domestic servants. The
                          policy covers accidental injury or illnesses
                          contracted out of and in the course of employment.
                        </p>
                        <p>
                          Kindly state the number of servants for whom cover is
                          required, e.g. Gardeners, Chauffeurs, Watchmen & Cooks
                          etc: [ PREMIUM - Kshs 500/- per worker ]
                        </p>
                        <Form style={{ marginTop: "30px" }}>
                          <Col lg={6}>
                            <FormGroup>
                              <Label className="form-control-label">
                                Number of workers
                              </Label>
                              <Input
                                type="text"
                                id="numberOfWorkers"
                                className="form-control-alternative"
                                value={this.state.numberOfWorkers}
                                onChange={this.handleChange}
                                required
                              />
                            </FormGroup>
                          </Col>
                        </Form>

                        <h6 className="heading-small text-muted mb-4">
                          Section E (Owner Liability) FREE
                        </h6>
                        <p>
                          Provides covers for the insured's Provides covers for
                          the insured's legal liability to third parties for
                          death, injury or damage to property arising out of the
                          ownership of the property.
                        </p>

                        <Form style={{ marginTop: "30px" }}>
                          <Col lg={6}>
                            <FormGroup>
                              <Toggle
                                fieldName="Limit of Indemnity Kshs 1M. Is this cover required?"
                                identifier="ownerLiability"
                                toggleValue={this.state.ownerLiability}
                                toggleHandler={this.handleToggle}
                              />
                            </FormGroup>
                          </Col>
                        </Form>
                        <h6 className="heading-small text-muted mb-4">
                          Section F (Personal Liability) FREE
                        </h6>
                        <p>
                          Provides covers for the insured's Provides covers for
                          the insured's legal liability to third parties for
                          death, injury or damage to property arising out of the
                          occupancy of the house.
                        </p>

                        <Form style={{ marginTop: "30px" }}>
                          <Col lg={6}>
                            <FormGroup>
                              <Toggle
                                fieldName="Limit of Indemnity Kshs 1M. Is this cover required?"
                                identifier="personalLiability"
                                toggleValue={this.state.personalLiability}
                                toggleHandler={this.handleToggle}
                              />
                            </FormGroup>
                          </Col>
                        </Form>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            onClick={() =>
                              this.setState({ currentSection: "C" })
                            }
                          >
                            Back
                          </Button>
                          <Button
                            className="my-4"
                            color="primary"
                            onClick={this.validateSectionD}
                          >
                            Next
                          </Button>
                        </div>
                      </>
                    )}
                    {this.state.currentSection === "proposerInfo" && (
                      <>
                        <h6 className="heading-small text-muted mb-4">
                          Proposer Details
                        </h6>
                        <Form>
                          <Row>
                            <Col lg={6}>
                              <FormGroup>
                                <Label className="form-control-label">
                                  Full Name of Proposer
                                </Label>
                                <Input
                                  type="text"
                                  id="proposerFullName"
                                  className="form-control-alternative"
                                  value={this.state.proposerFullName}
                                  onChange={this.handleChange}
                                  required
                                />
                              </FormGroup>
                            </Col>
                            <Col lg={6}>
                              <FormGroup>
                                <Label className="form-control-label">
                                  Postal Address
                                </Label>
                                <Input
                                  type="text"
                                  id="proposerAddress"
                                  className="form-control-alternative"
                                  value={this.state.proposerAddress}
                                  onChange={this.handleChange}
                                  required
                                />
                              </FormGroup>
                            </Col>
                            <Col lg={6}>
                              <FormGroup>
                                <Label className="form-control-label">
                                  Code
                                </Label>
                                <Input
                                  type="text"
                                  id="postalCode"
                                  className="form-control-alternative"
                                  value={this.state.postalCode}
                                  onChange={this.handleChange}
                                  required
                                />
                              </FormGroup>
                            </Col>
                            <Col lg={6}>
                              <FormGroup>
                                <Label className="form-control-label">
                                  Phone
                                </Label>
                                <Input
                                  type="text"
                                  id="proposerPhone"
                                  className="form-control-alternative"
                                  value={this.state.proposerPhone}
                                  onChange={this.handleChange}
                                  required
                                />
                              </FormGroup>
                            </Col>
                            <Col lg={6}>
                              <FormGroup>
                                <Label className="form-control-label">
                                  Profession of Occupation
                                </Label>
                                <Input
                                  type="text"
                                  id="professionOfOccupation"
                                  className="form-control-alternative"
                                  value={this.state.professionOfOccupation}
                                  onChange={this.handleChange}
                                  required
                                />
                              </FormGroup>
                            </Col>
                            <Col lg={6}>
                              <FormGroup>
                                <Label className="form-control-label">
                                  Email
                                </Label>
                                <Input
                                  type="text"
                                  id="proposerEmail"
                                  className="form-control-alternative"
                                  value={this.state.proposerEmail}
                                  onChange={this.handleChange}
                                  required
                                />
                              </FormGroup>
                            </Col>
                            <Col lg={6}>
                              <FormGroup>
                                <Label className="form-control-label">
                                  Period of insurance From:
                                </Label>
                                <Input
                                  type="date"
                                  id="insuranceStartDate"
                                  className="form-control-alternative"
                                  value={this.state.insuranceStartDate}
                                  onChange={this.handleChange}
                                  required
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label className="form-control-label">
                                  Period of insurance To:
                                </Label>
                                <Input
                                  type="date"
                                  id="insuranceEndtDate"
                                  className="form-control-alternative"
                                  value={this.state.insuranceEndtDate}
                                  onChange={this.handleChange}
                                  required
                                />
                              </FormGroup>
                            </Col>
                            <Col lg={6}>
                              <FormGroup>
                                <Label className="form-control-label">
                                  Physical Address of premises at which the
                                  insurance is required
                                </Label>
                                <Input
                                  type="text"
                                  id="physicalAddress"
                                  className="form-control-alternative"
                                  value={this.state.physicalAddress}
                                  onChange={this.handleChange}
                                  required
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </Form>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            onClick={() =>
                              this.setState({ currentSection: "D" })
                            }
                          >
                            Back
                          </Button>
                          <Button
                            className="my-4"
                            color="primary"
                            onClick={this.validateProposerDetails}
                          >
                            Submit Form
                          </Button>
                        </div>
                      </>
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

export default HomeCareForm;
