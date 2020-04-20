import React, { Component } from "react";
import { CardHeader, Table, Card, Container, Button } from "reactstrap";
import { getRequest } from "../../../../requests/requests";
import moment from "moment";
import lodash from "lodash";
import LastExpensePlansManagementModal from "./last-expense-plans-modal";
// import UnderwriterManagementModal from "./management-modal";

class ManageLastExpensePlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastExpensePlans: [],
      loading: false,
      openModal: false,
      createModal: false,
      selectedPlan: {}
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    getRequest("/lastExpensePlans/getLastExpensePlans")
      .then(response => {
        console.log(response);
        this.setState({ lastExpensePlans: response.data, loading: false });
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
                Last Expense plans
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
                    Please click on a row to view plan
                  </span>
                  <Button onClick={this.openCreateModal}>
                    Create new last expense plan
                  </Button>
                </div>
                {/* </CardHeader> */}
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      {/* <th scope="col">Actions</th> */}
                      <th scope="col">Name</th>
                      <th scope="col">Underwriter</th>
                      <th scope="col">Annual cover</th>
                      <th scope="col">Type of claim</th>
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
                    this.state.lastExpensePlans.map(plan => (
                      <tbody>
                        <tr onClick={() => this.handleViewEdit(plan)}>
                          <td>{plan.name}</td>
                          <td>{plan.Underwriter.name}</td>
                          <td>{plan.annualCover}</td>
                          <td>{plan.typeOfClaim}</td>
                        </tr>
                      </tbody>
                    ))
                  )}
                </Table>
              </Card>
            </div>
          </Container>
          {this.state.openModal && (
            <LastExpensePlansManagementModal
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
            <LastExpensePlansManagementModal
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

export default ManageLastExpensePlans;
