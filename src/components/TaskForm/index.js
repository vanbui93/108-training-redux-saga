import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles, Modal, Grid, Button, Box } from '@material-ui/core';

import styles from './styles';
import { PropTypes } from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';

class TaskForm extends Component {
  render() {
    var { classes, open, handleCloseForm } = this.props;
    return (
      <Modal open={open} onClose={handleCloseForm}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>Thêm mới</span>
            <CloseIcon className={classes.icon} onClick={handleCloseForm}/>
          </div>
          <div className={classes.content}>
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
                      <Button variant="contained" color="secondary" onClick={handleCloseForm}>Hủy bỏ</Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </Modal>
    )
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

export default withStyles(styles)(TaskForm);