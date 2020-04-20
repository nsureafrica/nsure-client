import React, { Component } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Table,
  Button
} from "reactstrap";
// core components
import PageHeader from "../../components/Headers/PageHeader";
import { getRequest, getFile } from "../../requests/requests";
import lodash from "lodash";
import moment from "moment";

class UserClaims extends Component {
  constructor(props) {
    super(props);
    this.state = { claims: [] };
    this.fetchAllUserClaims = this.fetchAllUserClaims.bind(this);
  }
  componentDidMount() {
    this.fetchAllUserClaims();
  }
  fetchAllUserClaims() {
    const jwtDecode = require("jwt-decode");
    const token = localStorage.getItem("token");
    let userData;
    if (token) {
      userData = jwtDecode(token);
    } else {
      // this.props.history.push("login");
    }
    if (userData) {
      getRequest(`/getUserClaims/${userData.id}`).then((response) => {
        console.log(response);
        this.setState({ claims: response.data });
      });
    } else {
    }
  }
  downloadClaimDocs = (claim) => {
    getFile(`/download/claims/downloadClaimDocuments?claimId=${claim.id}`).then(
      (response) => {
        console.log(response)
        const downloadUrl = window.URL.createObjectURL(new Blob([(response.data)]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'claim_documents.zip'); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
    );
  };
  render() {
    return (
      <>
        <PageHeader
          image="https://expertsystem.com/wp-content/uploads/2019/06/Speed-up-processes-with-automated-insurance-claim-management.jpg"
          name="My Claims"
        />
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card
                className="bg-secondary shadow"
                style={{
                  marginBottom: "8em",
                }}
              >
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Your Claims</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                <Table className="align-items-center table-flush" responsive>
                    <thead style={{ color: "black" }}>
                      <td>Policy Type</td>
                      <td>Policy Number</td>
                      <td>Date of Claim</td>
                      <td>Claim description</td>
                      <td>Claim documents</td>
                    </thead>
                    <tbody style={{ color: "grey" }}>
                      {this.state.claims.map((claim) => (
                        <tr>
                          <td>
                            {claim.PolicyType
                              ? lodash.startCase(
                                  claim.PolicyType.policyTypeName
                                )
                              : "Unknown"}
                          </td>
                          <td>{claim.policyId}</td>
                          <td>
                            {moment(claim.updatedAt).format("MMM Do YYYY")}
                          </td>
                          <td>{claim.descriptionOfClaim}</td>
                          <td>
                            <Button
                              onClick={() => this.downloadClaimDocs(claim)}
                            >
                              Download
                            </Button>
                          </td>
                        </tr>
                      ))}
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

export default UserClaims;
