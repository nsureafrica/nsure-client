import React, { Component } from "react";
import { Card, Container } from "reactstrap";


class Notified extends Component {
  state = {};
  render() {
    return (
      <div className="header pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
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
              Notification Sent
            </h2>
            <Card style={{ padding: "20px" }}>
              <div style={{ textAlign: "center" }}>
                <span style={{ display: "block", fontWeight: "600" }}>
                  The Team at Spire Insurance Brokers have received your request
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
                <span style={{ display: "block", margin: "2rem 0" }}>
                  You will be contacted shortly
                </span>
              </div>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}

export default Notified;
