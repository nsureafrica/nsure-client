import React, { Component } from "react";
import { CardHeader, Table, Card, Container, Button } from "reactstrap";
import { getRequest } from "../../../../requests/requests";
import moment from "moment";
import lodash from "lodash";
import MedicalPlansManagementModal from "./medical-plans-modal";
// import UnderwriterManagementModal from "./management-modal";

class ManageMedicalPlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicalPlans: [],
      loading: false,
      openModal: false,
      createModal: false,
      selectedPlan: {}
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    getRequest("/medicalPlans/getAllMedicalPlans")
      .then(response => {
        console.log(response);
        this.setState({ medicalPlans: response.data, loading: false });
      })
      .catch(err => {
        console.log(err);
        //   notify user of error
      });
  }
  handleViewEdit = plan => {
    // Do something
    this.setState({ openModal: true, selectedPlan: plan });
  };
  toggle = () => {
    this.setState(prevState => ({
      openModal: !prevState.openModal
    }));
  };
  toggle2 = () => {
    this.setState(prevState => ({
      createModal: !prevState.createModal
    }));
  };
  openCreateModal = () => {
    this.setState({ createModal: true, selectedPlan: {} });
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
                Medical plans
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
                  <Button onClick={this.openCreateModal}>
                    Create new medical plan
                  </Button>
                </div>
                {/* </CardHeader> */}
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Actions</th>
                      <th scope="col">Name</th>
                      <th scope="col">Underwriter</th>
                      <th scope="col">Inpatient limit</th>
                      <th scope="col">Outpatient limit</th>
                      <th scope="col">Chronic case limit</th>
                      <th scope="col">Manternity limit</th>
                      <th scope="col">Personal Accident cover</th>
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
                    this.state.medicalPlans.map(plan => (
                      <tbody>
                        <tr>
                          <td>
                            <Button onClick={() => this.handleViewEdit(plan)}>
                              View Plan
                            </Button>
                            <Button
                              onClick={() => console.log("you clicked me")}
                            >
                              Plan Rates
                            </Button>
                          </td>
                          <td>{plan.name}</td>
                          <td>{plan.Underwriter.name}</td>
                          <td>{plan.inpatientCoverLimit}</td>
                          <td>{plan.outpatientCoverLimit}</td>
                          <td>{plan.chronicCases}</td>
                          <td>{plan.maternityCoverLimit}</td>
                          <td>{plan.personalAccident}</td>
                        </tr>
                      </tbody>
                    ))
                  )}
                </Table>
              </Card>
            </div>
          </Container>
          {this.state.openModal && (
            <MedicalPlansManagementModal
              isOpen={this.state.openModal}
              create={false}
              plan={this.state.selectedPlan}
              toggle={this.toggle}
            />
            // <UnderwriterManagementModal
            //   isOpen={this.state.openModal}
            //   create={false}
            //   underwriter={this.state.selectedUnderwriter}
            //   toggle={this.toggle}
            // />
          )}
          {this.state.createModal && (
            <MedicalPlansManagementModal
              isOpen={this.state.createModal}
              create={true}
              plan={this.state.selectedPlan}
              toggle={this.toggle2}
            />
            // <UnderwriterManagementModal
            //   isOpen={this.state.createModal}
            //   create={true}
            //   underwriter={this.state.selectedUnderwriter}
            //   toggle={this.toggle2}
            // />
          )}
        </div>
      </>
    );
  }
}

export default ManageMedicalPlans;
