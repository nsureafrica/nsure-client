import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

// reactstrap components
import {Card, Container, Row} from "reactstrap";

// core components
// import Header from "components/Headers/Header.jsx";
// mapTypeId={google.maps.MapTypeId.ROADMAP}
const MapWrapper = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat: -1.2884, lng: 36.8233}}
        defaultOptions={{
          scrollwheel: true,
          
        }}
      >
        <Marker position={{lat: -1.2884, lng: 36.8233}} />
      </GoogleMap>
    ))
);

class Maps extends React.Component {
  render() {
    return (
      <>
        {/* Page content */}
        <Container className="mt-2" fluid>
          <h3 className="" style={{textAlign: "center", color: "#001996", letterSpacing: "1px"}}>Select your delivery point</h3>
          <Row>
            <div className="col">
              <Card className="shadow border-0">
                <MapWrapper
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA54E-_bhMeiJg_xYv8D3O5WtfvS5T9rm8"
                  loadingElement={<div style={{height: "100%"}} />}
                  containerElement={
                    <div
                      style={{height: "600px"}}
                      className="map-canvas"
                      id="map-canvas"
                    />
                  }
                  mapElement={
                    <div style={{height: "100%", borderRadius: "inherit"}} />
                  }
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
