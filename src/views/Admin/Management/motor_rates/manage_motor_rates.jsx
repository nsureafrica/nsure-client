import React, { Component } from "react";
import { CardHeader, Table, Card, Container, Button } from "reactstrap";
import { getRequest } from "../../../../requests/requests";
import MotorRatesManagementModal from "./edit_motor_rate_modal";
import CreateMotorRatesManagementModal from "./create_motor_rate_modal";
import moment from "moment";
import lodash from "lodash";

class ManageMotorRates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      motor_rates: [],
      loading: false,
      underwriters: [],
      motorClasses: [],
      selectedMotorRate: {}
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    getRequest("/motorRates/getAllMotorRates")
      .then(response => {
        console.log(response);
        this.setState({ motor_rates: response.data, loading: false });
        getRequest("/underwriter/getAllUnderwriters").then(response => {
          this.setState({ underwriters: response.data });
        });
        getRequest("/motorclass/getMotorClasses").then(response => {
          this.setState({ motorClasses: response.data });
        });
      })
      .catch(err => {
        console.log(err);
        // notify user of error
      });
  }

  handleRowClick = motorRate => {
    this.setState({
      openModal: true,
      selectedMotorRate: motorRate
    });
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
  openCreateModal = (underwriters, motorClasses) => {
    this.setState({
      createModal: true,
      allUnderwritters: underwriters,
      allVehicleClasses: motorClasses
    });
  };
  getUnderwriterName = underwriterID => {
    var selectedUnderwriter = "";
    if (this.state.underwriters.length > 0) {
      selectedUnderwriter = this.state.underwriters.find(
        underwriter => underwriter.id === underwriterID
      );
    }
    console.log(selectedUnderwriter);
    return selectedUnderwriter;
  };
  getMotorClassName = motorClassID => {
    var selectedMotorClass = "";
    if (this.state.motorClasses.length > 0) {
      selectedMotorClass = this.state.motorClasses.find(
        motorClass => motorClass.id === motorClassID
      );
    }
    console.log(selectedMotorClass);
    return selectedMotorClass;
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
                Motor Rates
              </h2>
              <Card style={{ padding: "20px" }} className="shadow">
                <CardHeader className="border-0">
                  <span style={{ fontSize: ".8rem", color: "orange" }}>
                    Please click on a row to edit
                  </span>
                  <span>
                    <Button
                      onClick={this.openCreateModal}
                      style={{ float: "right" }}
                    >
                      Create new motor rate
                    </Button>
                  </span>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Underwritter</th>
                      <th scope="col">Vehicle Class</th>
                      <th scope="col">Cover Type</th>
                      <th scope="col">Basic</th>
                      <th scope="col">Courtesy Car</th>
                      <th scope="col">Excess Protector</th>
                      <th scope="col">Levies</th>
                      <th scope="col">Minimum Excess</th>
                      <th scope="col">Minimum Political Violence Terrorism</th>
                      <th scope="col">Minimum Premium</th>
                      <th scope="col">Nature of Goods</th>
                      <th scope="col">Passenger Legal Liability</th>
                      <th scope="col">Political Violence Terrorism</th>
                      <th scope="col">Roadside Assistance</th>
                      <th scope="col">Stamp Duty</th>
                      <th scope="col">Vehicle Type</th>
                      <th scope="col">Created At</th>
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
                    this.state.motor_rates.map(motor_rate => (
                      <tbody>
                        <tr onClick={() => this.handleRowClick(motor_rate)}>
                          <td>
                            {this.getUnderwriterName(motor_rate.UnderwriterId).name}
                          </td>
                          <td>
                            {this.getMotorClassName(motor_rate.VehicleClassId).name}
                          </td>
                          <td>{motor_rate.coverType}</td>
                          <td>{motor_rate.basic}%</td>
                          <td>KSh {motor_rate.courtesyCar}</td>
                          <td>{motor_rate.excessProtector}%</td>
                          <td>{motor_rate.levies}%</td>
                          <td>KSh {motor_rate.minimumExcess}</td>
                          <td>
                            KSh {motor_rate.minimumPoliticalViolenceTerrorism}
                          </td>
                          <td>KSh {motor_rate.minimumPremium}</td>
                          <td>{motor_rate.natureOfGoods}</td>
                          <td>KSh {motor_rate.passengerLegalLiability}</td>
                          <td>{motor_rate.politicalViolenceTerrorism}%</td>
                          <td>KSh {motor_rate.roadsideAssistance}</td>
                          <td>KSh {motor_rate.stampDuty}</td>
                          <td>{motor_rate.vehicleType}</td>
                          <td>{motor_rate.createdAt}</td>
                        </tr>
                      </tbody>
                    ))
                  )}
                </Table>
              </Card>
            </div>
          </Container>
          {this.state.openModal && (
            <MotorRatesManagementModal
              isOpen={this.state.openModal}
              motorRate={this.state.selectedMotorRate}
              underwriters={this.state.underwriters}
              motorClasses={this.state.motorClasses}
              toggle={this.toggle}
            />
          )}
          {this.state.createModal && (
            <CreateMotorRatesManagementModal
              isOpen={this.state.createModal}
              underwriters={this.state.underwriters}
              motorClasses={this.state.motorClasses}
              toggle={this.toggle2}
            />
          )}
        </div>
      </>
    );
  }
}

export default ManageMotorRates;
