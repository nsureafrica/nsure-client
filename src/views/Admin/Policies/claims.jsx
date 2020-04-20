import React, { Component } from "react";
import { CardHeader, Table, Card, Container, Button } from "reactstrap";
import FormHeader from "../../../components/Headers/FormHeader";
import moment from "moment";
import lodash from "lodash";
import { getRequest, getFile } from "../../../requests/requests";

class AdminClaims extends Component {
  constructor(props) {
    super(props);
    this.state = {
      claims: [],
    };
  }
  componentDidMount() {
    getRequest("/claims/getAllClaims").then((response) => {
      this.setState({ claims: response.data });
    });
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
                  textTransform: "uppercase",
                }}
              >
                Customer Claims
              </h2>
              <Card style={{ padding: "20px" }} className="shadow">
                {/* <CardHeader className="border-0">
                  <span style={{ fontSize: ".8rem", color: "orange" }}>
                    Please click on a row to view detail
                  </span>
                </CardHeader> */}
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Policy ID</th>
                      <th scope="col">Policy Type</th>
                      <th scope="col">Claim Date</th>
                      <th>Claim description</th>
                      <th scope="col">Claim Documents</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.claims.map((claim) => (
                      <tr>
                        <td>{claim.policyId}</td>
                        <td>
                          {claim.PolicyTypeId === 1
                            ? "Motor"
                            : claim.PolicyTypeId}
                        </td>
                        <td>
                          {moment(claim.createdAt).format("MMMM Do YYYY")}
                        </td>
                        <td>{claim.descriptionOfClaim}</td>
                        <td>
                          <Button onClick={() => this.downloadClaimDocs(claim)}>
                            Download
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tbody></tbody>
                </Table>
              </Card>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default AdminClaims;
