import React, { Component } from "react";
import { Card, Container } from "reactstrap";

class Confirmation extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="header pb-8 pt-5 pt-md-8">
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
              Payment Confirmation
            </h2>
            <Card style={{ padding: "20px" }}>
              <div style={{ textAlign: "center" }}>
                <span style={{ display: "block", fontWeight: "600" }}>
                  We are confirming your payment
                </span>
                <img
                  style={{
                    borderRadius: "5px",
                    width: "35%",
                    minWidth: "15rem",
                    margin: "2rem 0"
                  }}
                  src="/working.png"
                  alt="working"
                />
                <span style={{ display: "block", fontSize: ".9rem" }}>
                  Once confirmed, you will receive an email with a cover note.
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: ".8rem",
                    color: "orange"
                  }}
                >
                  Please note that this is NOT a policy document
                </span>
               {this.props.location.state.motor && <span style={{ display: "block", margin: "2rem 0" }}>
                  You will receive your digital insurance sticker within{" "}
                  <b>12Hrs</b>
                </span>}
              </div>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}

export default Confirmation;
