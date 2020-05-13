import React, { Component } from "react";
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

class MedicalQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: JSON.parse(
        localStorage.getItem("optionsSelected_Medical")
      )
    };
    this.buyPolicy = this.buyPolicy.bind(this);
  }
  buyPolicy(quote) {
    this.props.history.push("/client/invoice-medical", {
      quote
    });
  }
  render() {
    const quoteArray = this.props.location.state.quoteArray;
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
                            {quote.underwriter.name}
                            <button
                              className="select_underwriter"
                              onClick={() => this.buyPolicy(quote)}
                            >
                              Buy
                            </button>
                          </tr>
                          <tr style={{ color: "black", fontWeight: "400" }}>
                            <td>Principal Inpatient</td>
                            <td>
                              {quote.principalRate.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                          </tr>
                          {quote.principalRateOutpatient > 0 && (
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              <td>Principal Outpatient</td>
                              <td>
                                {quote.principalRateOutpatient.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </td>
                            </tr>
                          )}
                          {quote.spouseRate > 0 && (
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              <td>Spouse Basic</td>
                              <td>
                                {quote.spouseRate.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </td>
                            </tr>
                          )}
                          {quote.spouseRateOutpatient > 0 && (
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              <td>Spouse Outpatient</td>
                              <td>
                                {quote.spouseRateOutpatient.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </td>
                            </tr>
                          )}
                          {quote.childrenRate > 0 && (
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              <td>Children Basic</td>
                              <td>
                                {quote.childrenRate.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </td>
                            </tr>
                          )}
                          {quote.childrenRateOutpatient > 0 && (
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              <td>Children Outpatient</td>
                              <td>
                                {quote.childrenRateOutpatient.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </td>
                            </tr>
                          )}
                          {quote.levies > 0 && (
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              <td>Levies</td>
                              <td>
                                {quote.levies.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </td>
                            </tr>
                          )}
                          {quote.stampDuty > 0 && (
                            <tr style={{ color: "black", fontWeight: "400" }}>
                              <td>Stamp duty</td>
                              <td>
                                {quote.stampDuty.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </td>
                            </tr>
                          )}
                          <tr
                            style={{
                              color: "black",
                              fontWeight: "bold"
                            }}
                          >
                            <td>Total Amount</td>
                            <td>
                              {quote.quoteTotal.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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

export default MedicalQuote;
