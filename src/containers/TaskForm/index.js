import { Box, Button, Grid, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from "redux";
import * as ModalActions from "../../actions/modal";


class TaskForm extends Component {
  render() {
    var { classes, modalActionCreators } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="password"
              type="txt"
              fullWidth
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
              <Box m={1}>
                <Button variant="contained" color="primary">Lưu lại</Button>
              </Box>
              <Box m={1}>
                <Button variant="contained" color="secondary" onClick={hideModal}>Hủy bỏ</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    )
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
}

const mapStateToProps = (state, props) => {
  return {
    open: state.modal.showModal,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    modalActionCreators: bindActionCreators(ModalActions, dispatch),
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withStyles(styles), withConnect)(TaskForm);