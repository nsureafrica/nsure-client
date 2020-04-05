import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import Notifier from "../../notifier";
import { putRequest } from "../../requests/requests";
import {
  ErrorOutline as Error,
  CheckCircleOutline as Success,
  ErrorRounded
} from "@material-ui/icons";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      showNotification: false,
      emailSent: false,
      notificationMessage: ""
    };
    this.handleForgotPassword = this.handleForgotPassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleForgotPassword() {
    // call forgot password api
    const payload = { email: this.state.emailAddress };
    putRequest("/forgotPassword", payload)
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
            <Success style={{ width: "40px" }} /> Please check your email.
          </div>
        );
        this.props.history.push('/auth/login')
        // this.setState({
        //   notificationMessage: "Password reset successful",
        //   emailSent: true,
        //   showNotification: true
        // });
      })
      .catch(error => {
        toaster.notify(
          <div
            style={{
              color: "#F96762",
              fontSize: "13px",
              fontWeight: "600"
            }}
          >
            <Error style={{ width: "40px" }} /> An error occurred.
            again
          </div>
        );
      });
  }
  render() {
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Enter your email address</small>
              </div>
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email address"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.firstName}
                      id="emailAddress"
                    />
                  </InputGroup>
                </FormGroup>

                <div className="text-center">
                  <Button
                    className="mt-2"
                    color="primary"
                    type="button"
                    style = {{width:'100%'}}
                    // eslint-disable-next-line react/prop-types
                    onClick={() => this.handleForgotPassword()}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
              <Row className="mt-3">
            <Col xs="6">
              <a
                // className="text-light"
                href=""
                onClick={e =>
                  e.preventDefault(this.props.history.push("/auth/login"))
                }
              >
                <small>Login</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                // className="text-light"
                href=""
                onClick={e =>
                  e.preventDefault(this.props.history.push("/auth/register"))
                }
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
            </CardBody>
          </Card>
          
        </Col>

        {this.state.showNotification && (
          <Notifier
            variant={this.state.emailSent ? "success" : "error"}
            message={this.state.notificationMessage}
          />
        )}
      </>
    );
  }
}

export default ResetPassword;
