import React, { Component } from 'react'
import { withStyles, Fab } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

class TaskItem extends Component {
  render() {
    const { classes, status, task } = this.props;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">
                {task.title}
              </Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
            <AddIcon/>
          </Fab>
          <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
            <DeleteIcon />
          </Fab>
        </CardActions>
      </Card>
    )
  }
}
export default withStyles(styles)(TaskItem);