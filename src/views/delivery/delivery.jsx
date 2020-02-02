import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import Maps from "views/examples/Maps.jsx";
import PickUpPoints from "views/delivery/pickup.jsx";
import { postRequest } from "../../requests/requests";
import Notifier from "../../notifier";

class Delivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveryLocation: {},
      delivery: "sendy",
      showNotification: false,
      message: "",
      variant: ""
    };
    this.setCoordinates = this.setCoordinates.bind(this);
    this.submitSendy = this.submitSendy.bind(this);
  }
  // state = {
  //   delivery: "sendy"
  // };

  but = { backgroundColor: "rgba(255, 255, 255, 0.2)", border: "none" };
  butActive = {
    boxShadow: "rgba(101, 63, 75, 0.44) 0px 0px 8px 1px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    border: "none"
  };

  setCoordinates(lat, lng) {
    console.log(lat, lng);
    this.setState({
      deliveryLocation: {
        to_lat: lat,
        to_long: lng,
        to_description: "",
        policy_id: this.props.location.state.quote.policyId,
        policy_type_id: 1
      }
    });
  }
  submitSendy() {
    postRequest("/sendy/requestDelivery", this.state.deliveryLocation)
      .then(response => {
        // this.props.history.push(
        //   "invoice",
        //   this.props.location.state
        // )
        console.log(response);
        var state = {
          ...this.props.location.state,
          deliveryFee: response.data.data.amount
        };
        this.props.history.push("invoice", state);
      })
      .catch(err => {
        console.log(err);
        this.setState({
          showNotification: true,
          message: "Could not set delivery location",
          variant: "error"
        });
      });
  }
  render() {
    return (
      <>
        <div className="header pb-8 pt-3 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
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
                Select Delivery Type
              </h2>
              <Row style={{ justifyContent: "center" }}>
                <Col lg="3" xl="3" sm="5" xs="5">
                  <div
                    onClick={() => {
                      this.setState({ delivery: "sendy" });
                    }}
                  >
                    <Card
                      className="card-stats mb-4 mb-xl-0"
                      style={
                        this.state.delivery === "sendy"
                          ? this.butActive
                          : this.but
                      }
                    >
                      <CardBody
                        style={{
                          textAlign: "center",
                          color: "rgb(181, 0, 50)"
                        }}
                      >
                        <div className="">
                          <i
                            className="fa fa-motorcycle "
                            style={{ fontSize: "4rem" }}
                          />
                        </div>

                        <div
                          tag="h2"
                          className=" "
                          style={{
                            textAlign: "center",
                            marginTop: "7px",
                            fontWeight: "bold",
                            fontSize: "12px"
                          }}
                        >
                          Sendy Delivery <br></br>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </Col>

                <Col lg="3" xl="3" sm="5" xs="5">
                  <div
                    onClick={() => {
                      this.setState({ delivery: "pickup" });
                    }}
                  >
                    <Card
                      className="card-stats  mb-4 mb-xl-0"
                      style={
                        this.state.delivery === "pickup"
                          ? this.butActive
                          : this.but
                      }
                    >
                      <CardBody
                        style={{ textAlign: "center", color: "rgb(0, 84, 95)" }}
                      >
                        <div className="">
                          <i
                            className="fa fa-map-marked "
                            style={{ fontSize: "4rem" }}
                          />
                        </div>

                        <div
                          tag="h2"
                          className=" "
                          style={{
                            textAlign: "center",
                            marginTop: "7px",
                            fontWeight: "bold",
                            fontSize: "12px"
                          }}
                        >
                          Pickup Point
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </Col>
              </Row>
              {this.state.delivery === "sendy" && (
                <Maps setCoordinates={this.setCoordinates} />
              )}
              {this.state.delivery === "pickup" && <PickUpPoints />}

              <div
                className="mt-3 mb-3"
                style={{ justifyContent: "center", textAlign: "center" }}
              >
                <button
                  style={{
                    padding: "11px 35px",
                    background: "linear-gradient(101deg, #ff4b4b, #5b33f9)",
                    fontWeight: "bold",
                    color: "white",
                    textTransform: "uppercase",
                    borderRadius: "26px",
                    letterSpacing: "2px",
                    border: "none"
                  }}
                  onClick={
                    () => this.submitSendy()
                    // this.props.history.push(
                    //   "invoice",
                    //   this.props.location.state
                    // )
                  }
                >
                  Next
                </button>
                {/* <a
                  // href="invoice"
                  href="#"
                  onClick={()=>this.props.history.push(
                    "invoice",
                    this.props.location.state
                  )}
                  style={{
                    padding: "11px 35px",
                    background: "linear-gradient(101deg, #ff4b4b, #5b33f9)",
                    fontWeight: "bold",
                    color: "white",
                    textTransform: "uppercase",
                    borderRadius: "26px",
                    letterSpacing: "2px",
                    border: "none"
                  }}
                >
                  Next
                </a> */}
              </div>
            </div>
          </Container>
        </div>
        {this.state.showNotification && (
          <Notifier message={this.state.message} variant={this.state.variant} />
        )}
      </>
    );
  }
}

export default Delivery;