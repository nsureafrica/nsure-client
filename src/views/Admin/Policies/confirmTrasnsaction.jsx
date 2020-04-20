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
import { Alert } from "reactstrap";
import { postRequest } from "../../../requests/requests";
import {
  ErrorOutline as Error,
  CheckCircleOutline as Success,
  ErrorRounded
} from "@material-ui/icons";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

class ConfirmTransaction extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      actualTransactionAmount: undefined
    };
  }
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = () => {
    const payload = {
      id: this.props.transaction.id,
      amount: this.props.verify ? parseInt(this.state.actualTransactionAmount) : 0,
      verified: this.props.verify
    };
    const requestUrl = `/transactions/confirmtransaction`;
    postRequest(requestUrl, payload)
      .then(response => {
        console.log(response);
        toaster.notify(
          <div
            style={{
              color: "#0AA681",
              fontSize: "13px",
              fontWeight: "600"
            }}
          >
            <Success style={{ width: "40px" }} /> Success
          </div>
        );
        this.props.toggle();
      })
      .catch(err => {
        toaster.notify(
          <div
            style={{
              color: "#F96762",
              fontSize: "13px",
              fontWeight: "600"
            }}
          >
            <Error style={{ width: "40px" }} /> An error occurred
          </div>
        );
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
            {this.props.verify ? "Verify Transaction" : "Cancel Verification"}
          </span>
        </div>
        {/* </ModalHeader> */}
        <ModalBody>
          {this.props.verify && (
            <form>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <FormGroup>
                      <label className="form-control-label">
                        Transaction Amount
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="actualTransactionAmount"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        multiple
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </form>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleSubmit}>
            Confirm
          </Button>
          <Button color="secondary" onClick={this.props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ConfirmTransaction;
