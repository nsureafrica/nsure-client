import React, { Component } from "react";
import { Snackbar, SnackbarContent, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";
import InfoIcon from "@material-ui/icons/Info";
import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

class Notifier extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ open: false });
    // this.props.hideNotification();
  }

  render() {
    const variantIcon = {
      success: CheckCircleIcon,
      warning: WarningIcon,
      error: ErrorIcon,
      info: InfoIcon
    };

    const Icon = variantIcon[this.props.variant];

    return (
      <Snackbar
        classes={{ root: `notification_${this.props.variant}` }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={this.state.open}
        autoHideDuration={5000}
        onClose={this.handleClose}
        key={this.props.message}
      >
        <SnackbarContent
          classes={{ root: `notification_${this.props.variant}` }}
          message={
            <span style={{ display: "flex", alignItems: "center" }}>
              <Icon style={{ marginRight: "1em", fontSize: "1em" }} />
              {this.props.message}
            </span>
          }
          action={[
            <IconButton onClick={() => this.handleClose()}>
              <img src="images/icons/close.svg" style={{ height: "0.4em" }} />
            </IconButton>
          ]}
        />
      </Snackbar>
    );
  }
}

Notifier.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired
};

export default Notifier;
