/* eslint-disable react/jsx-key */
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Button,
  Table
} from "reactstrap";
import "./quotes.css";

class MotorQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: JSON.parse(localStorage.getItem("quotes")),
      // quoteAmount: localStorage.getItem("quoteAmount"),
      selectedOptions: JSON.parse(localStorage.getItem("optionsSelected"))
    };
    this.buyPolicy = this.buyPolicy.bind(this);
  }

  buyPolicy(quote) {
    this.props.history.push("/client/invoice", {
      quote,
      logBook: this.props.location.state.logBook,
      nationalIdScan: this.props.location.state.nationalIdScan,
      KRAPinScan: this.props.location.state.KRAPinScan
    });
  }

  render() {
    const quoteArray = this.props.location.state.quoteArray;
    console.log(this.props);
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
              Your Quote Breakdown
            </h1>

            {quoteArray.length > 0 &&
              quoteArray.map(quote => (
                <>
                  <Card
                    className="card-stats mb-4 mb-xl-0"
                    style={{ width: "100%" }}
                  >
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
                        <Table>
                          <tr
                            style={{
                              color: "black",
                              fontWeight: "600",
                              fontSize: "1rem"
                            }}
                          >
                            Underwriter: {quote.underwriter.name}
                            <button
                              className="select_underwriter"
                              onClick={() => this.buyPolicy(quote)}
                            >
                              Buy
                            </button>
                          </tr>
                          <tr style={{ color: "black", fontWeight: "400" }}>
                            <td>Basic Premium</td>
                            <td>
                              {quote.basic.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                          </tr>
                          {quote.excessProtector > 0 && (
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              <td>Excess Protector</td>
                              <td>
                                {quote.excessProtector.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </td>
                            </tr>
                          )}
                          {quote.politicalViolenceTerrorism > 0 && (
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              <td>Political Violence & Terrorism</td>
                              <td>
                                {quote.politicalViolenceTerrorism.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </td>
                            </tr>
                          )}
                          {quote.passengerLegalLiability > 0 && (
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              <td>Passenger Legal Liability</td>
                              <td>
                                {quote.passengerLegalLiability.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </td>
                            </tr>
                          )}
                          {quote.roadsideAssistance > 0 && (
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              <td>Roadside Assistance</td>
                              <td>
                                {quote.roadsideAssistance.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </td>
                            </tr>
                          )}
                          {quote.courtesyCar > 0 && (
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              <td>Courtesy Car Option</td>
                              <td>
                                {quote.courtesyCar.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </td>
                            </tr>
                          )}
                          <tr style={{ color: "black", fontWeight: "400" }}>
                            <td>Levies</td>
                            <td>
                              {quote.levies.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                          </tr>
                          <tr style={{ color: "black", fontWeight: "400" }}>
                            <td>Stamp duty</td>
                            <td>
                              {quote.stampDuty.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                          </tr>
                          <tr
                            style={{
                              color: "black",
                              fontWeight: "bold"
                            }}
                          >
                            <td>Total Amount</td>
                            <td>
                              {quote.quoteAmount.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                          </tr>
                        </Table>
                      </div>
                    </CardBody>
                  </Card>
                  <br />
                </>
              ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default MotorQuote;
