import React, { Component } from "react";
import { CardHeader, Table, Card, Container, Button } from "reactstrap";
import { getRequest } from "../../../../requests/requests";
import moment from "moment";
import lodash from "lodash";
import UnderwriterManagementModal from "./management-modal";

class ManageUnderwriters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      underwriters: [],
      loading: false,
      openModal: false,
      createModal: false,
      selectedUnderwriter: {}
    };
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
  handleRowClick = underwriter => {
    // Do something
    this.setState({ openModal: true, selectedUnderwriter: underwriter });
  };
  toggle = () => {
    this.setState(prevState => ({
      openModal: !prevState.openModal
    }));
  };
  toggle2 = ()=>{
    this.setState(prevState => ({
      createModal: !prevState.createModal
    }));
  }
  openCreateModal = () => {
    this.setState({ createModal: true, selectedUnderwriter:{}});
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
                {/* <CardHeader className="border-0"> */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                    padding: "1rem"
                  }}
                >
                  <span style={{ fontSize: ".8rem", color: "orange" }}>
                    Please click on a row to edit
                  </span>
                  <Button onClick={this.openCreateModal}>Create new underwriter</Button>
                </div>
                {/* </CardHeader> */}
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
                        <tr onClick={() => this.handleRowClick(underwriter)}>
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
          {this.state.openModal && (
            <UnderwriterManagementModal
              isOpen={this.state.openModal}
              create={false}
              underwriter={this.state.selectedUnderwriter}
              toggle={this.toggle}
            />
          )}
          {this.state.createModal && (
            <UnderwriterManagementModal
              isOpen={this.state.createModal}
              create={true}
              underwriter={this.state.selectedUnderwriter}
              toggle={this.toggle2}
            />
          )}
        </div>
      </>
    );
  }
}

export default ManageUnderwriters;
