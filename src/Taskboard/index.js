import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Button from '@material-ui/core/Button';
import { Add } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from './../constants/index';

const listTask = [
  {
    id: 1,
    title: "ReadBook",
    description: "Read material ui book",
    status: 0
  },
  {
    id: 2,
    title: "Play Football",
    description: "With my friend",
    status: 2
  },
  {
    id: 3,
    title: "Play game",
    description: "",
    status: 3
  }
];

class TaskBoard extends Component {
  renderBoard = () => {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={3}>
        {
          STATUSES.map((status, index) => {
            const taskFilter = listTask.filter(taskFil => taskFil.status === status.value)
            return (
              <Grid item md={4} xs={12} key={index}>
                <div className={classes.status}>{status.label}</div>
                <div className={classes.wraperListTask}>
                  {
                    taskFilter.map((task) => {
                      return (
                        <h1>{task.title}</h1>
                      )
                    })
                  }
                </div>
              </Grid>
            )
          })
        }
      </Grid>
    )
    return xhtml;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.taskboard}>
        <Button variant="contained" color="primary">
          <Add />Thêm mới công việc
        </Button>
        {this.renderBoard()}
      </div>
    )
  }
}

export default withStyles(styles)(TaskBoard);