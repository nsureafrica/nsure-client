import React, { Component } from "react";
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
import { postRequest } from "../../../../requests/requests";
import { Alert } from "reactstrap";

class CreateMotorRatesManagementModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      underwriters: this.props.underwriters,
      motorClasses: this.props.motorClasses,
      selectedUnderwriterID: "",
      selectedVehicleClassID: "",
      basic: "",
      excessProtector: "",
      politicalViolenceTerrorism: "",
      minimumPremium: "",
      minimumExcess: "",
      minimumPoliticalViolenceTerrorism: "",
      passengerLegalLiability: "",
      roadsideAssistance: "",
      courtesyCar: "",
      vehicleType: "private",
      coverType: "comprehensive",
      natureOfGoods: "",
      levies: "",
      stampDuty: "",
    };
  }
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleCancel = () => {
    this.setState({});
  };

  handleSubmit = () => {
    const payload = {
      //   name: this.state.name,
      basic: this.state.basic,
      excessProtector: this.state.excessProtector,
      politicalViolenceTerrorism: this.state.politicalViolenceTerrorism,
      minimumPremium: this.state.minimumPremium,
      minimumExcess: this.state.minimumExcess,
      minimumPoliticalViolenceTerrorism: this.state
        .minimumPoliticalViolenceTerrorism,
      passengerLegalLiability: this.state.passengerLegalLiability,
      roadsideAssistance: this.state.roadsideAssistance,
      courtesyCar: this.state.courtesyCar,
      vehicleType: this.state.vehicleType,
      coverType: this.state.coverType,
      natureOfGoods: this.state.natureOfGoods,
      levies: this.state.levies,
      stampDuty: this.state.stampDuty,
      UnderwriterId: this.state.UnderwriterId,
      VehicleClassId: this.state.VehicleClassId
    };
    const requestUrl = `/motorRates/createMotorRate`;
    postRequest(requestUrl, payload).then(response => {
      console.log(response);
    });
  };

  render() {
    console.log(this.state);
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            padding: "1rem"
          }}
        >
          <span style={{ fontWeight: "600" }}>Create a new motor rate</span>
        </div>
        <ModalBody>
          <form>
            <div className="pl-lg-4">
              <Row>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">
                      Pick Underwritter
                    </label>
                    <Input
                      type="select"
                      name="select"
                      id="selectedUnderwriterID"
                      value={this.state.selectedUnderwriterID}
                      onChange={this.handleChange}
                    >
                      {this.props.underwriters.map(underwriter => (
                        <option value={underwriter.id}>
                          {underwriter.name}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">
                      Pick vehicle class
                    </label>
                    <Input
                      type="select"
                      name="select"
                      id="selectedVehicleClassID"
                      value={this.state.selectedVehicleClassID}
                      onChange={this.handleChange}
                    >
                      {this.props.motorClasses.map(motorClass => (
                        <option value={motorClass.id}>{motorClass.name}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Basic</label>
                    <Input
                      className="form-control-alternative"
                      id="basic"
                      type="text"
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">
                      Excess Protector
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="excessProtector"
                      type="text"
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">
                      Political Violence Terrorism
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="politicalViolenceTerrorism"
                      type="text"
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">
                      Minimum Premium
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="minimumPremium"
                      type="text"
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Minimum Excess</label>
                    <Input
                      className="form-control-alternative"
                      id="minimumExcess"
                      type="text"
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">
                      Minimum Political Violence Terrorism
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="minimumPoliticalViolenceTerrorism"
                      type="text"
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">
                      Passenger Legal Liability
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="passengerLegalLiability"
                      type="text"
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">
                      Roadside Assistance
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="roadsideAssistance"
                      type="text"
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Courtesy Car</label>
                    <Input
                      className="form-control-alternative"
                      id="courtesyCar"
                      type="text"
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Vehicle Type</label>
                    <Input
                      type="select"
                      id="vehicleType"
                      className="form-control-alternative"
                      value={this.state.vehicleType}
                      onChange={this.handleChange}
                      required
                    >
                      <option key="private" value="private">
                        Private
                      </option>
                      <option key="commercial" value="commercial">
                        Commercial (Boda boda)
                      </option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Cover Type</label>
                    <Input
                      type="select"
                      id="coverType"
                      className="form-control-alternative"
                      value={this.state.coverType}
                      onChange={this.handleChange}
                      required
                    >
                      <option key="comprehensive" value="comprehensive">
                        Comprehensive
                      </option>
                      <option key="third_party" value="third_party">
                        Third Party
                      </option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">
                      Nature of Goods
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="natureOfGoods"
                      type="text"
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Levis</label>
                    <Input
                      className="form-control-alternative"
                      id="levies"
                      type="text"
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Stamp Duty</label>
                    <Input
                      className="form-control-alternative"
                      id="stampDuty"
                      type="text"
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => this.handleSubmit()}>
            Submit Details
          </Button>
          <Button color="secondary" onClick={this.handleCancel}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default CreateMotorRatesManagementModal;
