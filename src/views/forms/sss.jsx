import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "reactstrap";
import ToggleButton from "react-toggle-button";

// eslint-disable-next-line no-undef
class Thingy extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col lg="6">
          <label className="form-control-label">{this.props.fieldName}</label>
        </Col>
        <Col lg="6">
          <ToggleButton
            style={{ float: "right", textTransform: "capitalize" }}
            inactiveLabel="No"
            activeLabel="Yes"
            trackStyle={{
              height: 20
            }}
            colors={{
              active: {
                base: "rgb(207,221,245)",
                hover: "rgb(177, 191, 215)"
              },
              inactive: {
                base: "rgb(65,66,68)",
                hover: "rgb(95,96,98)"
              }
            }}
            value={this.props.toggleValue}
            onToggle={() => this.props.toggleHandler(this.props.identifier)}
          />
        </Col>
      </Row>
    );
  }
}

export default Thingy;
