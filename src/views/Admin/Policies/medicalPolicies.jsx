import React, { Component } from "react";
import { CardHeader, Table, Card, Container } from "reactstrap";
import { getRequest } from "../../../requests/requests";
import moment from "moment";
import lodash from "lodash";

class AdminMedicalPolicies extends Component {
  constructor(props) {
    super(props);
    this.state = {policies:[{
      "dentalCover": false,
      "opticalCover": false,
      "id": 5,
      "firstName": "Tony",
      "lastName": "N",
      "dateOfBirth": "",
      "idNumber": "",
      "kraPin": "",
      "principalAgeDateOfBirth": 1577192884,
      "numberOfChildren": 1,
      "outPatientPerPerson": true,
      "maternityCover": true,
      "UserId": 1,
      "updatedAt": "2020-03-03T04:32:35.844Z",
      "createdAt": "2020-03-03T04:32:35.844Z"
  }]};
  }
  
  componentDidMount(){
    // get all medical policies
    getRequest("/policies/medical/getAllmedicalpolicies")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({ policies: response.data });
        }
      })
      .catch(err => {});
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
                User Medical Policies
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
                    <th scope="col">Policy holder</th>
                    <th scope="col">Plan</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.policies.map(policy => (
                      <tr>
                        <td>{`${policy.firstName} ${policy.lastName}`}</td>
                        <td></td>
                        <td>{moment(policy.createdAt).format('MMMM Do YYYY')}</td>
                        <td></td>
                        <td>Not paid</td>
                        <td>Inactive</td>
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

export default AdminMedicalPolicies;
