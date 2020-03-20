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
import { putRequest } from "../../../../requests/requests";
import { Alert } from "reactstrap";

class MotorRatesManagementModal extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      underwriters: this.props.underwriters,
      motorClasses: this.props.motorClasses,
      motorRate: this.props.motorRate,
      basic: this.props.motorRate.basic,
      excessProtector: this.props.motorRate.excessProtector,
      politicalViolenceTerrorism: this.props.motorRate
        .politicalViolenceTerrorism,
      minimumPremium: this.props.motorRate.minimumPremium,
      minimumExcess: this.props.motorRate.minimumExcess,
      minimumPoliticalViolenceTerrorism: this.props.motorRate
        .minimumPoliticalViolenceTerrorism,
      passengerLegalLiability: this.props.motorRate.passengerLegalLiability,
      roadsideAssistance: this.props.motorRate.roadsideAssistance,
      courtesyCar: this.props.motorRate.courtesyCar,
      vehicleType: this.props.motorRate.vehicleType,
      coverType: this.props.motorRate.coverType,
      natureOfGoods: this.props.motorRate.natureOfGoods,
      levies: this.props.motorRate.levies,
      stampDuty: this.props.motorRate.stampDuty,
      createdAt: this.props.motorRate.createdAt,
      updatedAt: this.props.motorRate.updatedAt,
      UnderwriterId: this.props.motorRate.UnderwriterId,
      VehicleClassId: this.props.motorRate.VehicleClassId,
      edit: false
    };
  }
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleEdit = () => {
    this.setState({ edit: true });
  };
  handleCancel = () => {
    this.setState({
      underwriters: this.props.underwriters,
      motorClasses: this.props.motorClasses,
      motorRate: this.props.motorRate,
      basic: this.props.motorRate.basic,
      excessProtector: this.props.motorRate.excessProtector,
      politicalViolenceTerrorism: this.props.motorRate
        .politicalViolenceTerrorism,
      minimumPremium: this.props.motorRate.minimumPremium,
      minimumExcess: this.props.motorRate.minimumExcess,
      minimumPoliticalViolenceTerrorism: this.props.motorRate
        .minimumPoliticalViolenceTerrorism,
      passengerLegalLiability: this.props.motorRate.passengerLegalLiability,
      roadsideAssistance: this.props.motorRate.roadsideAssistance,
      courtesyCar: this.props.motorRate.courtesyCar,
      vehicleType: this.props.motorRate.vehicleType,
      coverType: this.props.motorRate.coverType,
      natureOfGoods: this.props.motorRate.natureOfGoods,
      levies: this.props.motorRate.levies,
      stampDuty: this.props.motorRate.stampDuty,
      createdAt: this.props.motorRate.createdAt,
      updatedAt: this.props.motorRate.updatedAt,
      UnderwriterId: this.props.motorRate.UnderwriterId,
      VehicleClassId: this.props.motorRate.VehicleClassId,
      edit: false
    });
  };
  handleSubmit = () => {
    const payload = {
      underwriters: this.props.underwriters,
      motorClasses: this.props.motorClasses,
      motorRate: this.props.motorRate,
      basic: this.props.motorRate.basic,
      excessProtector: this.props.motorRate.excessProtector,
      politicalViolenceTerrorism: this.props.motorRate
        .politicalViolenceTerrorism,
      minimumPremium: this.props.motorRate.minimumPremium,
      minimumExcess: this.props.motorRate.minimumExcess,
      minimumPoliticalViolenceTerrorism: this.props.motorRate
        .minimumPoliticalViolenceTerrorism,
      passengerLegalLiability: this.props.motorRate.passengerLegalLiability,
      roadsideAssistance: this.props.motorRate.roadsideAssistance,
      courtesyCar: this.props.motorRate.courtesyCar,
      vehicleType: this.props.motorRate.vehicleType,
      coverType: this.props.motorRate.coverType,
      natureOfGoods: this.props.motorRate.natureOfGoods,
      levies: this.props.motorRate.levies,
      stampDuty: this.props.motorRate.stampDuty,
      createdAt: this.props.motorRate.createdAt,
      updatedAt: this.props.motorRate.updatedAt,
      UnderwriterId: this.props.motorRate.UnderwriterId,
      VehicleClassId: this.props.motorRate.VehicleClassId
    };
    const requestUrl = `/motorRates/updatemotorratebyid/${this.props.motorRate.id}`;
    putRequest(requestUrl, payload).then(response => {
      console.log(response);
    });
  };
  render() {
    console.log(this.state);
    console.log(this.props.motorRates);
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
          <span style={{ fontWeight: "600" }}>
            {/* {this.props.underwriter.name} */}
          </span>
          {!this.state.edit && !this.props.create && (
            <Button
              color="secondary"
              onClick={this.handleEdit}
              style={{ float: "right" }}
            >
              Edit
            </Button>
          )}
        </div>
        <ModalBody>
          <form>
            <div className="pl-lg-4">
              <Row>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Underwritter</label>
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
                      value={this.state.basic}
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
                      value={this.state.excessProtector}
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
                      value={this.state.politicalViolenceTerrorism}
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
                      value={this.state.minimumPremium}
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
                      value={this.state.minimumExcess}
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
                      value={this.state.minimumPoliticalViolenceTerrorism}
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
                      value={this.state.passengerLegalLiability}
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
                      value={this.state.roadsideAssistance}
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
                      value={this.state.courtesyCar}
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Vehicle Type</label>
                    <Input
                      className="form-control-alternative"
                      id="vehicleType"
                      type="text"
                      value={this.state.vehicleType}
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Cover Type</label>
                    <Input
                      className="form-control-alternative"
                      id="coverType"
                      type="text"
                      value={this.state.coverType}
                      onChange={this.handleChange}
                      multiple
                    />
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
                      value={this.state.natureOfGoods}
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
                      value={this.state.levis}
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
                      value={this.state.stampDuty}
                      multiple
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </form>
        </ModalBody>
        {this.state.edit && (
          <ModalFooter>
            <Button color="primary" onClick={() => this.handleSubmit()}>
              Submit Details
            </Button>
            <Button color="secondary" onClick={this.handleCancel}>
              Cancel
            </Button>
          </ModalFooter>
        )}
      </Modal>
    );
  }
}

export default MotorRatesManagementModal;
