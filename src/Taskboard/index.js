import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import styles from './styles';

class TaskBoard extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.taskboard}>
        <div className={classes.shape}>React js</div>
        <div className={classes.shape}>Angula js</div>
      </div>
    )
  }
}

export default withStyles(styles)(TaskBoard);