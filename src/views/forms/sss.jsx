import React from "react";

import {
  Col,
} from "reactstrap";
import ToggleButton from "react-toggle-button";

// eslint-disable-next-line no-undef
class Thingy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Col md="6">
          <label className="form-control-label">Outpatient per person</label>
        </Col>
        <Col md="6">
          <ToggleButton
            style={{float: "right"}}
            inactiveLabel="Yes"
            activeLabel="No"
            colors={{
              active: {
                base: "rgb(207,221,245)",
                hover: "rgb(177, 191, 215)",
              },
              inactive: {
                base: "rgb(65,66,68)",
                hover: "rgb(95,96,98)",
              },
            }}
            value={this.state.outpatientPerPerson || false}
            onToggle={(value) => {
              this.setState({
                outpatientPerPerson: !value,
              });
            }}
          />
        </Col>
      </div>
    );
  }
}

export default Thingy;
