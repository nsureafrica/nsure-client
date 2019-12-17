import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

const notificationIcons = {
  success: CheckCircleIcon,
  error: ErrorIcon,
  info: InfoIcon,
  warning: WarningIcon
};

const colors = {
  success: 'rgba(59, 183, 94, 1)',
  error: 'rgba(238, 49, 42, 1)',
  info: 'rgba(0, 184, 222, 1)',
  warning: 'rgba(255, 191, 0, 1)'
};

const notificationStyles = makeStyles(theme => ({
  success: {
    backgroundColor: 'rgba(59, 183, 94, 1)'
  },
  error: {
    backgroundColor: colors.error
  },
  info: {
    backgroundColor: colors.info
  },
  warning: {
    backgroundColor: colors.warning
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: '20px'
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
}));

class Notify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose() {
    console.log(this.props);
    this.setState({ open: false });
  }
  render() {
    const { message, type, ...other } = this.props;
    const Icon = notificationIcons[type];
    const classes = notificationStyles();
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={this.state.open}
        autoHideDuration={5000}
        onClose={this.handleClose}>
        <SnackbarContent
          className={notificationStyles.type}
          message={
            <span className={notificationStyles.message}>
              <Icon className={clsx(notificationStyles.icon, notificationStyles.iconVariant)} />
              {message}
            </span>
          }
          action={[
            <IconButton key="close" color="inherit" onClick={this.handleClose}>
              <CloseIcon className={notificationStyles.icon} />
            </IconButton>
          ]}
          {...other}
        />
      </Snackbar>
    );
  }
}

Notify.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']).isRequired
};
export default Notify;
