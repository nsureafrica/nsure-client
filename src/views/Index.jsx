import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";

import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Form, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
} from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
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
    let wow = () => {
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
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <>
        <Header />
        {/* Page content */}

        <Container className="mt--7" fluid>
          <h2 className="" style={{ textAlign: 'center', color: '#001996', letterSpacing: '3px', textTransform: 'uppercase' }}>My Current Covers</h2>
          <Row className="mt-3">
            <Col className="mb-5 mb-xl-0" >
              <Card className="shadow">
                {/* <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Current Insurance Covers</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button>
                    </div> *
                  </Row>
                </CardHeader> */}
                <CardBody>
                  <ul className="list-group list-group-flush list my--3">
                    <li className="list-group-item px-0">
                      <Row className="align-items-center">
                        <div className="col-auto">
                          <a href="#" className="avatar rounded-circle">

                          </a>
                        </div>
                        <div className="col ml--2">
                          {/* <h4 className="mb-0">
                            <a href="#!" style={{ color: '#115894cc', marginBottom: '10px', }}>SIB</a>
                          </h4> */}
                          <h5>
                            <a href="#!" style={{ color: '#e16470' }}>Medical Policy</a>
                          </h5>
                          <span className="text-success" style={{ marginRight: '12px' }}>●</span>
                          <span>Active</span>
                        </div>
                        <button type="button" class="btn btn-secondary" onClick={this.toggle}>Claim</button>
                      </Row>

                    </li>


                    <li className="list-group-item px-0">
                      <Row className="align-items-center">
                        <div className="col-auto">
                          <a href="#" className="avatar rounded-circle">

                          </a>
                        </div>
                        <div className="col ml--2">
                          {/* <h4 className="mb-0">
                            <a href="#!" style={{ color: '#115894cc', marginBottom: '10px', }}>HERITAGE INSURANCE</a>
                          </h4> */}
                          <h5>
                            <a href="#!" style={{ color: '#e16470' }}>Motor Policy</a>
                          </h5>
                          <span className="text-danger" style={{ marginRight: '12px' }}>●</span>
                          <span>Expired</span>
                        </div>
                        <button type="button" class="btn btn-secondary" >Renew</button>
                      </Row>

                    </li>

                  </ul>
                </CardBody>
              </Card>
            </Col>


          </Row>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
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
            <Button color="primary" onClick={this.toggle}>Submit Details</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Index;
