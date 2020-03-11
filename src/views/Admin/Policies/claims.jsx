import React, { Component } from "react";
import { CardHeader, Table, Card, Container } from "reactstrap";
import FormHeader from "../../../components/Headers/FormHeader";
import moment from "moment";
import lodash from "lodash";

class AdminClaims extends Component {
  constructor(props) {
    super(props);
    this.state = {
      claims: [
        {
          id: 2,
          descriptionOfClaim: "So i kinda drove into a trunk",
          claimForms: "",
          claimPhotos: "claimPhotos-1583212540014.csv",
          policyId: "1",
          updatedAt: "2020-03-03T05:15:40.032Z",
          createdAt: "2020-03-03T05:15:40.032Z"
        }
      ]
    };
  }
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
                Customer Claims
              </h2>
              <Card style={{ padding: "20px" }} className="shadow">
                <CardHeader className="border-0">
                  <span style={{ fontSize: ".8rem", color: "orange" }}>
                    Please click on a row to view detail
                  </span>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Policy Holder</th>
                      <th scope="col">Policy Type</th>
                      <th scope="col">Date</th>
                      <th scope="col">Claim form</th>
                      <th scope="col">Documents</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {this.state.policies.map(policy => (
                      <tr>
                        <td>{`${policy.firstName} ${policy.lastName}`}</td>
                        <td>{policy.emailAddress}</td>
                        <td>{lodash.startCase(policy.coverType)}</td>
                        <td>{moment(policy.createdAt).format('MMMM Do YYYY')}</td>
                        <td>{policy.quoteAmount}</td>
                        <td>{policy.paid ? "Paid" : "Not paid"}</td>
                        <td>{policy.active ? "Active" : "Inactive"}</td>
                      </tr>
                    ))} */}
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
