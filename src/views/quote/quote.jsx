/* eslint-disable react/jsx-key */
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
<<<<<<< HEAD
  Button,
  Table
=======
  Button
>>>>>>> f5a94fc43d6e9a9e7970bbc3911206178e9881ac
} from "reactstrap";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      quotes: JSON.parse(localStorage.getItem("quotes")),
=======
      quoteAmount: localStorage.getItem("quoteAmount"),
>>>>>>> f5a94fc43d6e9a9e7970bbc3911206178e9881ac
      selectedOptions: JSON.parse(localStorage.getItem("optionsSelected"))
    };
    this.buyPolicy = this.buyPolicy.bind(this);
  }

  buyPolicy(quote) {
    this.props.history.push("delivery", { quote });
  }

  render() {
    const categories = [
      {
        value: "motorcycle",
        label: "Motorcycles"
      },
      {
        value: "motorPrivate",
        label: "Motor Private"
      },
      {
        value: "motorCommercial",
        label: "Motor Commercial"
      },
      {
        value: "heavyMachinery",
        label: "Heavy Machinery"
      },
      {
        value: "tankers",
        label: "Tankers"
      },
      {
        value: "PMO",
        label: "PMO"
      },
      {
        value: "specialTypes",
        label: "specialTypes"
      },
      {
        value: "PSV",
        label: "PSV"
      },
      {
        value: "drivingSchools",
        label: "Driving Schools"
      }
    ];
    const selectedCategory = categories.find(
      category => category.value === this.state.selectedOptions.category
    );
    return (
      <div className="header pb-8 pt-3 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <h1
              className=""
              style={{
                marginBottom: "1em",
                textAlign: "center",
                color: "#001996",
                letterSpacing: "3px",
                textTransform: "uppercase"
              }}
            >
              Your Quote
            </h1>
            <Card className="card-stats mb-4 mb-xl-0" style={{ width: "100%" }}>
              <CardBody
                style={{
                  textAlign: "left",
                  color: "rgb(181, 0, 50)"
                }}
              >
                <div
                  tag="h2"
                  className=" "
                  style={{
                    textAlign: "left",
                    marginTop: "7px",
                    fontWeight: "bold",
                    fontSize: "12px"
                  }}
                >
                  <h3>Selected options</h3>
                  Vehicle category :{" "}
                  {selectedCategory && selectedCategory.label}
                  <br />
                  Estimated value of vehicle : Kes{" "}
                  {this.state.selectedOptions.vehicleEstimatedValue
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  <br />
                  Vehicle type:{" "}
                  {this.state.selectedOptions.vehicleType
                    .charAt(0)
                    .toUpperCase() +
                    this.state.selectedOptions.vehicleType.slice(1)}
                  <br />
                  Cover type :{" "}
                  {this.state.selectedOptions.coverType
                    .charAt(0)
                    .toUpperCase() +
                    this.state.selectedOptions.coverType.slice(1)}
                  <br />
                  Courtesy car option :{" "}
                  {this.state.selectedOptions.courtesyCarOption} days
                  <br />
                  <br />
                  <Table>
                    <thead style = {{color:'black'}}>
                      <td>Company Name</td>
                      <td>Quote Amount</td>
                      <td>Action</td>
                    </thead>
                    <tbody style = {{color:'grey'}}>
                      {this.state.quotes.map(quote => (
                        <tr>
                          <td>{quote.companyName}</td>
                          <td>{quote.amount}</td>
                          <td>
                            <Button
                              color="primary"
                              size="sm"
                              onClick={() => this.buyPolicy(quote)}
                            >
                              Buy policy
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  {/* <span style={{ float: "right" }}>
                    <h4>
                      {this.state.quotes.map(quote => (
                        <>
                          <span>Company Name: {quote.companyName}</span>
                          <br />
                          <span>Amount: {quote.amount}</span>
                          <Button
                            color="primary"
                            size="sm"
                            style={{ float: "right" }}
                            onClick={this.buyPolicy}
                          >
                            Buy policy
                          </Button>
                          <br />
                          <br />
                        </>
                      ))}
                      {/* Quote amount : Kes{" "}
                      {this.state.quoteAmount
<<<<<<< HEAD
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
                  {/* </h4> */}
                  {/* </span> */}
                  <br />
                  <br />
=======
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </h4>
                  </span>
                  <br />
                  <br />
                  <Button
                    color="primary"
                    size="sm"
                    style={{ float: "right" }}
                    onClick={this.buyPolicy}
                  >
                    Buy policy
                  </Button>
>>>>>>> f5a94fc43d6e9a9e7970bbc3911206178e9881ac
                </div>
              </CardBody>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}

export default Quote;
