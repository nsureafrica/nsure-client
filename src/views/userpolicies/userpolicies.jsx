import React, { Component } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Table
} from "reactstrap";
// core components
import PageHeader from "../../components/Headers/PageHeader";
import { getRequest, getAllUserPolicies } from "../../requests/requests";
import lodash from "lodash";
import moment from "moment";

class UserPolicies extends Component {
  constructor(props) {
    super(props);
    this.state = { policiesArray: [] };
    // this.fetchAllUserPolicies = this.fetchAllUserPolicies.bind(this);
  }
  componentDidMount() {
    const policyArr = [
      "motor",
      "medical",
      "education",
      "salamahTransition",
      "travel"
    ];
    getAllUserPolicies(policyArr).then(response => {
      this.setState({
        policiesArray: response
      });
    });
  }

  render() {
    console.log('policies', this.state.policiesArray);
    return (
      <>
        <PageHeader />
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Your Policies</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Table>
                    <thead style={{ color: "black" }}>
                      <td>Policy Type</td>
                      <td>Policy Number</td>
                      <td>Date of Creation</td>
                      <td>Paid</td>
                      <td>Amount</td>
                    </thead>
                    <tbody style={{ color: "grey" }}>
                      {this.state.policiesArray.map(policies =>
                        policies.data.map(policy => (
                          <tr>
                            <td>Motor</td>
                            <td>{policy.id}</td>
                            <td>
                              {moment(policy.updatedAt).format("MMM Do YYYY")}
                            </td>
                            <td>{policy.paid ? "Yes" : "No"}</td>
                            <td>{policy.paidAmount?policy.paidAmount:0}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default UserPolicies;
