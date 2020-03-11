import React, { Component } from "react";
import { CardHeader, Table, Card, Container, Row, Col } from "reactstrap";
import FormHeader from "../../../components/Headers/FormHeader";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="header pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              <Row>
                <Col lg="3">
                  <Card style={{ padding: "20px" }} className="shadow">
                    <div>
                      <h3>Motor Policies</h3>
                    </div>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card style={{ padding: "20px" }} className="shadow">
                    <div>
                      <h3>Education Policies</h3>
                    </div>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card style={{ padding: "20px" }} className="shadow">
                    <div>
                      <h3>Medical Policies</h3>
                    </div>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card style={{ padding: "20px" }} className="shadow">
                    <div>
                      <h3>Travel Policies</h3>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default AdminDashboard;
