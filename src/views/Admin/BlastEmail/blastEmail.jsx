import React, { Component } from "react";
import {
  CardHeader,
  Table,
  Card,
  Container,
  CardBody,
  Form,
  Row,
  Col,
  FormGroup,
  Input,
  Button
} from "reactstrap";
import FormHeader from "../../../components/Headers/FormHeader";
import moment from "moment";
import lodash from "lodash";
import { postRequest } from "../../../requests/requests";
import Notifier from "../../../notifier";

class BlastEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      message: "",
      notificationMessage: "",
      showNotification: false,
      variant: "success"
    };
    this.sendBlast = this.sendBlast.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  sendBlast = () => {
    postRequest("/sendMail/allUsers", {
      subject: this.state.subject,
      message: this.state.message
    }).then(response => {
      this.setState({
        notificationMessage: "Email has been sent to all users",
        showNotification: true,
        variant: "success"
      });
    });
  };
  render() {
    return (
      <>
        <div className="header pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              <h2
                className=""
                style={{
                  marginBottom: "1em",
                  textAlign: "center",
                  color: "#001996",
                  letterSpacing: "3px",
                  textTransform: "uppercase"
                }}
              >
                Send Email to all customers
              </h2>
              <Card style={{ padding: "20px" }} className="shadow">
                <CardHeader className="border-0">
                  <span style={{ fontSize: ".8rem", color: "orange" }}>
                    Please fill in the form below
                  </span>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={() => this.getQuote()}>
                    <div className="pl-lg-4" style={{ marginTop: "1rem" }}>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Email Subject
                            </label>
                            <Input
                              className="form-control-alternative"
                              // placeholder="Vehicle's estimated value (KES)"
                              type="text"
                              value={this.state.subject}
                              onChange={this.handleChange}
                              id="subject"
                              required
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Email Body
                            </label>
                            <Input
                              className="form-control-alternative"
                              // placeholder="Vehicle's estimated value (KES)"
                              type="textarea"
                              value={this.state.message}
                              onChange={this.handleChange}
                              id="message"
                              required
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          onClick={this.sendBlast}
                        >
                          Send
                        </Button>
                      </div>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Container>
        </div>
        {this.state.showNotification && (
          <Notifier
            showNotification={this.state.showNotification}
            variant={this.state.variant}
            message={this.state.notificationMessage}
          />
        )}
      </>
    );
  }
}

export default BlastEmail;
