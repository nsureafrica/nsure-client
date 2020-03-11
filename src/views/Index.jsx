import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
import lodash from "lodash";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

// core components
import { chartOptions, parseOptions } from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";
import Claim from "./forms/claim";
import { getAllUserPolicies } from "../requests/requests";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      userPolicies: [],
      policyArr: [
        "motor",
        "medical",
        "education",
        "lastExpense",
        "travel"
      ]
    };

    this.toggle = this.toggle.bind(this);
  }
  state = {
    activeNav: 1,
    chartExample1Data: "data1",
    open: false
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    const wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  componentDidMount() {
    this.fetchUserPolicies();
  }
  toggle(policyID) {
    this.setState(prevState => ({
      modal: !prevState.modal,
      policyID:policyID
    }));
  }
  fetchUserPolicies() {
    // fetch motor policies
    // fetch medical policies
    var policyArr = [
      "motor",
      "medical",
      "education",
      "lastExpense",
      "travel"
    ];
    getAllUserPolicies(this.state.policyArr).then(responseArr => {
      this.setState({
        userPolicies: responseArr
      });
    });
  }

  render() {  
    console.log(this.state.userPolicies);
    return (
      <>
        <Header />
        {/* Page content */}

        <Container className="mt--7" fluid>
          <h2
            className=""
            style={{
              textAlign: "center",
              color: "#001996",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            My Current Covers
          </h2>
          <Row className="mt-3">
            <Col className="mb-5 mb-xl-0">
              <Card className="shadow">
                <CardHeader className="border-0">
                </CardHeader>
                <CardBody>
                  <ul className="list-group list-group-flush list my--3">
                    {this.state.policyArr.map(
                      (policyType, index) =>
                        this.state.userPolicies.length > 0 &&
                        this.state.userPolicies[index].data.length > 0 && (
                          <li className="list-group-item px-0">
                            <Row className="align-items-center">
                              <div className="col ml--2">
                                <h5>
                                  <a href="#!" style={{ color: "#e16470" }}>
                                    {lodash.startCase(policyType)}
                                  </a>
                                </h5>
                                {this.state.userPolicies[index].data.map(
                                  policy => (
                                    <div
                                      style={{
                                        display: "block",
                                        padding: "15px 0"
                                      }}
                                    >
                                      <span
                                        className="text-success"
                                        style={{ marginRight: "12px" }}
                                      >
                                        ●
                                      </span>
                                      <span>
                                        {policyType === "motor"
                                          ? policy.registrationNumber
                                          : null}
                                        {" "}(Active)
                                      </span>
                                      <button
                                        type="button"
                                        className="btn btn-secondary"
                                        style={{ float: "right" }}
                                        onClick={()=>this.toggle(policy.id)}
                                      >
                                        Claim
                                      </button>
                                    </div>
                                  )
                                )}
                              </div>
                            </Row>
                          </li>
                        )
                    )}
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Claim
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          policyID = {this.state.policyID}
        />
        {/* <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Claim Form</ModalHeader>
          <ModalBody>
            <Form>
              <h6 className="heading-small text-muted mb-4">Claim Details</h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Upload photo
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-username"
                        placeholder=" First Name"
                        type="file"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Upload form
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-username"
                        placeholder=" First Name"
                        type="file"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-first-name"
                      >
                        Description of the accident
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-first-name"
                        placeholder="Second name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Submit Details
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal> */}
      </>
    );
  }
}

export default Index;
