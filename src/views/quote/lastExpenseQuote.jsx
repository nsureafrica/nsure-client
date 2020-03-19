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

class LastExpenseQuote extends Component {
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
    this.props.history.push("/client/invoice-last-expense", {
      quote
    });
  }
  render() {
    const quote = this.props.location.state.quote;
    console.log(quote);
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
                        <td>Principal Per Nuclear Family</td>
                        <td>
                          {quote.annualPremiumNuclearFamily.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </td>
                      </tr>
                      {quote.annualPremiumParents > 0 && (
                        <tr style={{ color: "black", fontWeight: "400" }}>
                          <td>Parents Annual Premium</td>
                          <td>
                            {quote.annualPremiumParents.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </td>
                        </tr>
                      )}
                      {quote.annualPremiumExtraChild > 0 && (
                        <tr style={{ color: "black", fontWeight: "400" }}>
                          <td>Annual Premium Extra Child</td>
                          <td>
                            {quote.annualPremiumExtraChild.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
          </div>
        </Container>
      </div>
    );
  }
}

export default LastExpenseQuote;
