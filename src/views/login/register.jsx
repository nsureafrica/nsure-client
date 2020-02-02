import React from "react";
import { handleRegistration } from "../../requests/authRequests";
// reactstrap components
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
import { postRequest } from "../../requests/requests";
import Notifier from "../../notifier";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      email: "",
      userCreated: undefined,
      message: "",
      showNotification: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  componentDidMount() {
    console.log("i got here okay");
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleRegister() {
    this.setState({ showNotification: false });
    let payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      password: this.state.password
    };
    postRequest("/signup", payload)
      .then(response => {
        var notifyUser = {
          userCreated: true,
          message: "User created successfully",
          showNotification: true
        };
        this.props.history.push("login", notifyUser);
      })
      .catch(error => {
        this.setState({
          userCreated: false,
          message: "Unable to create user",
          showNotification: true
        });
      });
  }
  render() {
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign up with credentials</small>
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
                      placeholder="First name"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.firstName}
                      id="firstName"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Last name"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.lastName}
                      id="lastName"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-mobile-button" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Phone number"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.phoneNumber}
                      id="phoneNumber"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onChange={this.handleChange}
                      value={this.state.email}
                      id="email"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      onChange={this.handleChange}
                      id="password"
                      value={this.state.password}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="confirmPassword"
                      value={this.state.confirmPassword}
                      placeholder="Confirm Password"
                      type="password"
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div>
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#" onClick={e => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button
                    className="mt-4"
                    color="primary"
                    type="button"
                    // eslint-disable-next-line react/prop-types
                    onClick={() => this.handleRegister()}
                  >
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#"
                onClick={e =>
                  e.preventDefault(this.props.history.push("/auth/login"))
                }
              >
                <small>Login</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#"
                onClick={e =>
                  e.preventDefault(
                    this.props.history.push("/auth/reset-password")
                  )
                }
              >
                <small>Forgot Password?</small>
              </a>
            </Col>
          </Row>
        </Col>
        {this.state.showNotification && (
          <Notifier
            variant={this.state.userCreated ? "success" : "error"}
            message={this.state.message}
          />
        )}
      </>
    );
  }
}

export default Register;
