import React from "react";
import { handleLogIn } from "../../requests/authRequests";
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
import Notifier from "../../notifier";
import {
  ErrorOutline as Error,
  CheckCircleOutline as Success,
  ErrorRounded
} from "@material-ui/icons";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
      variant: "",
      showNotification: false
    };
  }

  render() {
    localStorage.removeItem("token");

    localStorage.clear();
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Enter your credentials to sign in</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })}
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
                      value={this.state.password}
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button
                    className="my-4"
                    color="primary"
                    onClick={() =>
                      handleLogIn(
                        this.state.password,
                        this.state.email,
                        this.props
                      )
                        .then(response => {
                          console.log(response);
                          localStorage.setItem("token", response.data.token);
                          const jwtDecode = require("jwt-decode");
                          let userData = jwtDecode(response.data.token);
                          console.log(userData);
                          if (userData.tempPassword) {
                            this.props.history.push("/auth/change-password");
                          } else {
                            if (
                              userData.UserCategory.name !== "Administrator"
                            ) {
                              this.props.history.push("/client/index");
                            } else {
                              this.props.history.push("/admin/dashboard");
                            }
                          }
                        })
                        .catch(err => {
                          console.log(err.response.status);
                          toaster.notify(
                            <div
                              style={{
                                color: "#F96762",
                                fontSize: "13px",
                                fontWeight: "600"
                              }}
                            >
                              <Error style={{ width: "40px" }} />{" "}
                              {err.response.status === 401
                                ? "Incorrect username / password"
                                : "Network Error, try again later"}
                            </div>
                          );
                        })
                    }
                  >
                    Sign in
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
                  e.preventDefault(
                    this.props.history.push("/auth/reset-password")
                  )
                }
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#"
                onClick={e =>
                  e.preventDefault(this.props.history.push("/auth/register"))
                }
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
        </Col>
        {this.props.history.location.state !== undefined &&
          this.props.history.location.state.showNotification && (
            <Notifier
              variant={
                this.props.history.location.state.userCreated
                  ? "success"
                  : "error"
              }
              message={this.props.history.location.state.message}
            />
          )}
        {this.state.showNotification && (
          <Notifier
            showNotification={this.state.showNotification}
            variant={this.state.variant}
            message={this.state.message}
          />
        )}
      </>
    );
  }
}

export default Login;
