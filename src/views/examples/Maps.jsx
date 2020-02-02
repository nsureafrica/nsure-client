import React from "react";
// reactstrap components
import { Card, Container, Row } from "reactstrap";
import MapWrapper from "./asas";

class Maps extends React.Component {
  render() {
    return (
      <>
        {/* Page content */}
        <Container className="mt-2" fluid>
          <h3
            className=""
            style={{
              textAlign: "center",
              color: "#001996",
              letterSpacing: "1px"
            }}
          >
            Select your delivery point
          </h3>
          <Row>
            <div className="col">
              <Card className="shadow border-0">
                <MapWrapper
                  setCoordinates={this.props.setCoordinates}
                  google={this.props.google}
                  center={{ lat: -1.2883556, lng: 36.8232516 }}
                  height="300px"
                  zoom={18}
                />
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Maps;
