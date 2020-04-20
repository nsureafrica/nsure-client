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
  ModalFooter,
} from "reactstrap";
import { postRequest } from "../../requests/requests";
import { Alert } from "reactstrap";
import {
  ErrorOutline as Error,
  CheckCircleOutline as Success,
  ErrorRounded
} from "@material-ui/icons";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

class Claim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
      claimForms: null,
      claimPhotos: null,
      descriptionOfClaim: "",
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFile(event) {
    console.log(event.target.files[0]);
    this.setState({ [event.target.id]: event.target.files });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit() {
    const token = localStorage.getItem("token");
    const jwtDecode = require("jwt-decode");
    let userData;
    if (token) {
      userData = jwtDecode(token);
    }
    const data = new FormData();
    for (var i = 0; i < this.state.claimPhotos.length; i++) {
      data.append("claimPhotos", this.state.claimPhotos[i]);
    }
    for (var i = 0; i < this.state.claimForms.length; i++) {
      data.append("claimDocs", this.state.claimForms[i]);
    }
    data.append("descriptionOfClaim", this.state.descriptionOfClaim);
    data.append("userId", userData.id);
    data.append("policyTypeId", 1);
    data.append("policyId", this.props.policyID);

    postRequest("/createClaim", data)
      .then((response) => {
        console.log(response);
        toaster.notify(
          <div
            style={{
              color: "#0AA681",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            <Success style={{ width: "40px" }} /> Notification sent. We are
            reviewing your details and will contact you with further directions.
          </div>
        );
      })
      .catch((err) => {
        console.log(err);
        toaster.notify(
          <div
            style={{
              color: "#F96762",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            <Error style={{ width: "40px" }} /> An error occurred
          </div>
        );
      });
  }

  render() {
    // console.log(this.props.policyID)
    console.log(this.state);
    return (
      <div>
        <Modal
          isOpen={this.props.isOpen}
          toggle={this.props.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggle}>Claim Form</ModalHeader>
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
                        id="claimPhotos"
                        name="claimPhotos"
                        type="file"
                        onChange={this.handleFile}
                        multiple
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
                        id="claimForms"
                        name="claimForms"
                        type="file"
                        onChange={this.handleFile}
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
                        rows="10"
                        className="form-control-alternative"
                        id="descriptionOfClaim"
                        placeholder="Brief description of the claim"
                        type="textarea"
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.handleSubmit()}>
              Submit Details
            </Button>{" "}
            <Button color="warning" onClick={this.props.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Claim;
