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
import { postRequest } from "../../requests/requests";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      passwordsMatch: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.validateNewPassword = this.validateNewPassword.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleChangePassword() {
    //   get user information from token. (user must be logged in)
    const jwtDecode = require("jwt-decode");
    const token = localStorage.getItem("token");
    let userData;
    if (token === "") {
      userData = jwtDecode(token);
    } else {
    //   this.props.history.push("/login");
    }

    // make api call to /changePassword
    if (userData) {
      postRequest("/changePassword", {
        username: userData.email,
        password: this.state.currentPassword,
        newPassword: this.state.newPassword
      })
        .then(response => {
          this.setState({
            notificationMessage: "Password changed successfully",
            emailSent: true,
            showNotification: true
          });
        })
        .catch(error => {
          this.setState({
            notificationMessage: "Password change failed",
            emailSent: false,
            showNotification: true
          });
        });
    } else {
      this.setState({
        notificationMessage: "Login to change password",
        emailSent: false,
        showNotification: true
      });
    }
  }
  validateNewPassword(event) {
    if (
      this.state.newPassword !== event.target.value ||
      this.state.newPassword == ""
    ) {
      this.setState({ passwordsMatch: false });
      return false;
    } else {
      this.setState({ passwordsMatch: true });
      return true;
    }
  }
  render() {
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Please fill the form to change your password</small>
              </div>
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Current password"
                      type="password"
                      onChange={this.handleChange}
                      value={this.state.currentPassword}
                      id="currentPassword"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="New password"
                      type="password"
                      onChange={this.handleChange}
                      value={this.state.newPassword}
                      id="newPassword"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Re-enter your new password"
                      type="password"
                      onChange={this.validateNewPassword}
                      id="confirmPassword"
                    />
                  </InputGroup>
                </FormGroup>

                <div className="text-center">
                  <Button
                    className="mt-4"
                    color="primary"
                    type="button"
                    disabled={!this.state.passwordsMatch}
                    // eslint-disable-next-line react/prop-types
                    onClick={() => this.handleChangePassword()}
                  >
                    Change Password
                  </Button>
                </div>
              </Form>
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

export default ChangePassword;