import { Box, Button, Grid, withStyles } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from "redux";
import { Field, reduxForm } from 'redux-form';
import * as ModalActions from "../../actions/modal";
import * as taskActions from "../../actions/task";
import renderTextField from './../../components/FormHelper/TextField/index';
import styles from './styles';
import validate from './validate';

class TaskForm extends Component {

  handleSubmitForm = (data) => {
    const { taskActionCreators } = this.props;
    const { addTask } = taskActionCreators;
    const { title, description } = data;
    addTask(title,description);
    console.log('data', data);
  }

  render() {
    var { classes, modalActionCreators, handleSubmit, invalid, submitting } = this.props;
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
                <Button variant="contained" color="primary" type="submit" disabled={invalid || submitting}>Lưu lại</Button>
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
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
}

const mapStateToProps = (state, props) => {
  return {
    open: state.modal.showModal,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    modalActionCreators: bindActionCreators(ModalActions, dispatch),
    taskActionCreators: bindActionCreators(taskActions, dispatch),
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