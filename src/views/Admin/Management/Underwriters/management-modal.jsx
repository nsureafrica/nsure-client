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
import { putRequest, postRequest } from "../../../../requests/requests";
import { Alert } from "reactstrap";

class UnderwriterManagementModal extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      name: this.props.underwriter.name,
      logo: this.props.underwriter.logo,
      address: this.props.underwriter.address,
      website: this.props.underwriter.website,
      contact: this.props.underwriter.contact,
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
      logo: this.state.logo,
      address: this.state.address,
      website: this.state.website,
      contact: this.state.contact
    };
    const requestUrl = `/underwriter/updateunderwiterbyid/${this.props.underwriter.id}`;
    putRequest(requestUrl, payload).then(response => {
      console.log(response);
    });
  };
  handleCreate = () => {
    const payload = {
      name: this.state.name,
      logo: this.state.logo,
      address: this.state.address,
      website: this.state.website,
      contact: this.state.contact
    };
    const requestUrl = `/underwriter/createUnderwriter`;
    postRequest(requestUrl, payload).then(response => {
      console.log(response);
    });
  };
  render() {
    console.log(this.state);
    console.log(this.props.underwriter);
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
              ? "Please fill the form to create an underwriter"
              : this.props.underwriter.name}
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
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Logo</label>
                    <Input
                      disabled={this.props.create ? false : !this.state.edit}
                      className="form-control-alternative"
                      id="logo"
                      type="text"
                      value={this.state.logo}
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Website</label>
                    <Input
                      disabled={this.props.create ? false : !this.state.edit}
                      className="form-control-alternative"
                      id="website"
                      type="text"
                      value={this.state.website}
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Contact</label>
                    <Input
                      disabled={this.props.create ? false : !this.state.edit}
                      className="form-control-alternative"
                      id="contact"
                      type="text"
                      value={this.state.contact}
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Address</label>
                    <Input
                      disabled={this.props.create ? false : !this.state.edit}
                      className="form-control-alternative"
                      id="address"
                      type="text"
                      value={this.state.address}
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

export default UnderwriterManagementModal;
