import { Box, Button, Grid, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from "redux";
import * as ModalActions from "../../actions/modal";
import { Field, reduxForm } from 'redux-form';
import renderTextField from './../../components/FormHelper/TextField/index';
import validate from './validate';

class TaskForm extends Component {

  handleSubmitForm = (data) => {
    console.log('data', data);
  }

  required = (value) => {
    let error = 'Vui lòng nhập tiêu đề';
    if (value !== null && typeof value !== 'undefined' && value.trim() !== '') {
      error = null;
    }
    return error;
  }

  minLengths = value => {
    let error = null;
    if (value && value.length < 5) {
      error = 'Tiêu đề phải từ 5 kí tự';
    }
    return error;
  }

  render() {
    var { classes, modalActionCreators, handleSubmit } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Field
              id="title"
              label="Tiêu đề"
              className={classes.textField}
              margin="dense"
              name="title"
              component={renderTextField}
              fullWidth
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              label="Mô tả"
              name="description"
              multiple
              rowsMax="4"
              className={classes.textField}
              margin="dense"
              component={renderTextField}
              fullWidth
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
              <Box m={1}>
                <Button variant="contained" color="primary" type="submit">Lưu lại</Button>
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
  handleSubmit: PropTypes.func,
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


const formName = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
  form: 'formName',
  validate
});

export default compose
  (withStyles(styles),
    withConnect,
    withReduxForm,
  )(TaskForm);