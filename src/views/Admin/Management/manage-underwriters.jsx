import React, { Component } from "react";
import { CardHeader, Table, Card, Container } from "reactstrap";
import { getRequest } from "../../../requests/requests";
import moment from "moment";
import lodash from "lodash";

class ManageUnderwriters extends Component {
  constructor(props) {
    super(props);
    this.state = { underwriters: [], loading: false };
  }
  componentDidMount() {
    this.setState({ loading: true });
    getRequest("/underwriter/getAllUnderwriters")
      .then(response => {
        console.log(response);
        this.setState({ underwriters: response.data, loading: false });
      })
      .catch(err => {
        console.log(err);
        //   notify user of error
      });
  }
  handleRowClick = () => {
    // Do something
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
                  textAlign: "left",
                  color: "#001996",
                  letterSpacing: "3px",
                  textTransform: "uppercase"
                }}
              >
                Underwriters
              </h2>
              <Card style={{ padding: "20px" }} className="shadow">
                <CardHeader className="border-0">
                  <span style={{ fontSize: ".8rem", color: "orange" }}>
                    Please click on a row to edit
                  </span>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Website</th>
                      <th scope="col">Contact</th>
                    </tr>
                  </thead>

                  {this.state.loading ? (
                    <div
                      style={{
                        width: "100%",
                        textAlign: "center",
                        marginLeft: "50%"
                      }}
                    >
                      <img
                        style={{ color: "red" }}
                        alt="Loading..."
                        src="/spinner.gif"
                      />
                    </div>
                  ) : (
                    this.state.underwriters.map(underwriter => (
                      <tbody>
                        <tr onClick={this.handleRowClick}>
                          <td>{underwriter.name}</td>
                          <td>{underwriter.address}</td>
                          <td>{underwriter.website}</td>
                          <td>{underwriter.contact}</td>
                        </tr>
                      </tbody>
                    ))
                  )}
                </Table>
              </Card>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default ManageUnderwriters;
