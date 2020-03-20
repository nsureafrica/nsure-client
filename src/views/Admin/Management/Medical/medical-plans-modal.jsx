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
import {
  putRequest,
  postRequest,
  getRequest
} from "../../../../requests/requests";
import { Alert } from "reactstrap";

class MedicalPlansManagementModal extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      name: this.props.plan.name,
      description: this.props.plan.description,
      inpatientCoverLimit: this.props.plan.inpatientCoverLimit,
      outpatientCoverLimit: this.props.plan.outpatientCoverLimit,
      chronicCases: this.props.plan.chronicCases,
      maternityCoverLimit: this.props.plan.maternityCoverLimit,
      personalAccident: this.props.plan.personalAccident,
      generalConditions: this.props.plan.generalConditions,
      UnderwriterId: this.props.plan.UnderwriterId|1,
      edit: false,
      underwriters: []
    };
  }
  componentDidMount() {
    getRequest("/underwriter/getAllUnderwriters").then(response => {
      this.setState({ underwriters: response.data });
    });
  }
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleEdit = () => {
    this.setState({ edit: true });
  };
  handleCancel = () => {
    this.setState({
      name: this.props.underwriter.name,
      logo: this.props.underwriter.logo,
      address: this.props.underwriter.address,
      website: this.props.underwriter.website,
      contact: this.props.underwriter.contact,
      edit: false
    });
  };
  handleSubmit = () => {
    const payload = {
      name: this.state.name,
      description: this.state.description,
      inpatientCoverLimit: this.state.inpatientCoverLimit,
      outpatientCoverLimit: this.state.outpatientCoverLimit,
      chronicCases: this.state.chronicCases,
      maternityCoverLimit: this.state.maternityCoverLimit,
      personalAccident: this.state.personalAccident,
      generalConditions: this.state.generalConditions,
      UnderwriterId: this.state.UnderwriterId,
    };
    const requestUrl = `/plans/medicalPlans/updatemedicalplanbyid/${this.props.plan.id}`;
    putRequest(requestUrl, payload).then(response => {
      console.log(response);
    });
  };
  handleCreate = () => {
    const payload = {
      name: this.state.name,
      description: this.state.description,
      inpatientCoverLimit: this.state.inpatientCoverLimit,
      outpatientCoverLimit: this.state.outpatientCoverLimit,
      chronicCases: this.state.chronicCases,
      maternityCoverLimit: this.state.maternityCoverLimit,
      personalAccident: this.state.personalAccident,
      generalConditions: this.state.generalConditions,
      UnderwriterId: this.state.UnderwriterId,
    };
    const requestUrl = `/medicalPlans/createMedicalPlan`;
    postRequest(requestUrl, payload).then(response => {
      console.log(response);
    });
  };
  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        {/* <ModalHeader> */}
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
            {this.props.create
              ? "Please fill the form to create a medical plan"
              : this.props.plan.name}
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
        {/* </ModalHeader> */}
        <ModalBody>
          <form>
            <div className="pl-lg-4">
              <Row>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Name</label>
                    <Input
                      disabled={this.props.create ? false : !this.state.edit}
                      className="form-control-alternative"
                      id="name"
                      type="text"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Underwriter</label>
                    <Input
                      disabled={this.props.create ? false : !this.state.edit}
                      className="form-control-alternative"
                      id="UnderwriterId"
                      type="select"
                      value={this.state.UnderwriterId}
                      onChange={this.handleChange}
                    >
                      {this.state.underwriters.map(underwriter => (
                        <option value={underwriter.id}>
                          {underwriter.name}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Description</label>
                    <Input
                      disabled={this.props.create ? false : !this.state.edit}
                      className="form-control-alternative"
                      id="description"
                      type="textarea"
                      value={this.state.description}
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Inpatient Cover Limit</label>
                    <Input
                      disabled={this.props.create ? false : !this.state.edit}
                      className="form-control-alternative"
                      id="inpatientCoverLimit"
                      type="text"
                      value={this.state.inpatientCoverLimit}
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Outpatient Cover Limit</label>
                    <Input
                      disabled={this.props.create ? false : !this.state.edit}
                      className="form-control-alternative"
                      id="outpatientCoverLimit"
                      type="text"
                      value={this.state.outpatientCoverLimit}
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Maternity Cover Limit</label>
                    <Input
                      disabled={this.props.create ? false : !this.state.edit}
                      className="form-control-alternative"
                      id="maternityCoverLimit"
                      type="text"
                      value={this.state.maternityCoverLimit}
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Chronic Cases</label>
                    <Input
                      disabled={this.props.create ? false : !this.state.edit}
                      className="form-control-alternative"
                      id="chronicCases"
                      type="text"
                      value={this.state.chronicCases}
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">General Conditions</label>
                    <Input
                      disabled={this.props.create ? false : !this.state.edit}
                      className="form-control-alternative"
                      id="generalConditions"
                      type="text"
                      value={this.state.generalConditions}
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Personal Accident Cover</label>
                    <Input
                      disabled={this.props.create ? false : !this.state.edit}
                      className="form-control-alternative"
                      id="personalAccident"
                      type="text"
                      value={this.state.personalAccident}
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </form>
        </ModalBody>
        {(this.state.edit || this.props.create) && (
          <ModalFooter>
            <Button
              color="primary"
              onClick={
                this.props.create
                  ? () => this.handleCreate()
                  : () => this.handleSubmit()
              }
            >
              Submit Details
            </Button>
            <Button
              color="secondary"
              onClick={
                this.props.create ? this.props.toggle : this.handleCancel
              }
            >
              Cancel
            </Button>
          </ModalFooter>
        )}
      </Modal>
    );
  }
}

export default MedicalPlansManagementModal;
