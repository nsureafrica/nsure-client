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
import {
  putRequest,
  postRequest,
  getRequest,
} from "../../../../requests/requests";
import { Alert } from "reactstrap";
import {
  ErrorOutline as Error,
  CheckCircleOutline as Success,
  ErrorRounded,
} from "@material-ui/icons";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

class LastExpensePlansManagementModal extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      name: this.props.plan.name,
      description: this.props.plan.description,
      annualCover:this.props.plan.annualCover,
      typeOfClaim:'single',
      UnderwriterId: this.props.plan.UnderwriterId | 1,
      edit: false,
      underwriters: [],
    };
  }
  componentDidMount() {
    getRequest("/underwriter/getAllUnderwriters").then((response) => {
      this.setState({ underwriters: response.data });
    });
  }
  handleChange = (event) => {
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
      edit: false,
    });
  };
  handleSubmit = () => {
    const payload = {
      name: this.state.name,
      description: this.state.description,
      annualCover:this.state.annualCover,
      typeOfClaim:this.state.typeOfClaim,
      UnderwriterId: this.state.UnderwriterId,
    };
    const requestUrl = `/lastExpensePlans/updatelastexpenseplanbyid/${this.props.plan.id}`;
    putRequest(requestUrl, payload).then((response) => {
      console.log(response);
    });
  };
  handleCreate = () => {
    const payload = {
        name: this.state.name,
        description: this.state.description,
        annualCover:this.state.annualCover,
        typeOfClaim:this.state.typeOfClaim,
        UnderwriterId: this.state.UnderwriterId,
      };
    const requestUrl = `/lastExpensePlans/createLastExpensePlan`;
    postRequest(requestUrl, payload)
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
            <Success style={{ width: "40px" }} /> Success
          </div>
        );
        window.location.reload();
      })
      .catch((err) => {
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
            padding: "1rem",
          }}
        >
          <span style={{ fontWeight: "600" }}>
            {this.props.create
              ? "Please fill the form to create a last expense plan"
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
                      {this.state.underwriters.map((underwriter) => (
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
                    <label className="form-control-label">Annual cover</label>
                    <Input
                      disabled={this.props.create ? false : !this.state.edit}
                      className="form-control-alternative"
                      id="annualCover"
                      type="text"
                      value={this.state.annualCover}
                      onChange={this.handleChange}
                      multiple
                    />
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Type of claim</label>
                    <Input
                      disabled={this.props.create ? false : !this.state.edit}
                      className="form-control-alternative"
                      id="typeOfClaim"
                      type="select"
                      value={this.state.typeOfClaim}
                      onChange={this.handleChange}
                    >
                      <option value="single">Single</option>
                      <option value="multiple">Multiple</option>
                    </Input>
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

export default LastExpensePlansManagementModal;
