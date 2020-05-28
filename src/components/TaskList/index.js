import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import TaskItem from './../TaskItem/index';

class TaskList extends Component {
  render() {
    var { classes,tasks,status } = this.props;
    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box mb={2} mt={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapListTask}>
          {
            tasks.map((task) => {
              return (
                <TaskItem task={task} status={status} key={task.id} />
              )
            })
          }
        </div>
      </Grid>

    )
  }
}

export default withStyles(styles)(TaskList)