import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Button from '@material-ui/core/Button';
import { Add } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from './../constants/index';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    status: 1
  },
  {
    id: 3,
    title: "Play game",
    description: "",
    status: 2
  }
];

class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={3}>
        {
          STATUSES.map((status, index) => {
            const taskFilter = listTask.filter(taskFil => taskFil.status === status.value);
            return (
              <TaskList key={index} 
                tasks={taskFilter} 
                status={status} 
                index={index} />
            );
          })
        }
      </Grid>
    );
    return xhtml;
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  }

  openForm = () => {
    this.setState({
      open: true
    });
  }

  renderForm = () => {
    const { open } = this.state;
    let xhtml = null;
    xhtml = (
      <TaskForm open={open} 
        handleCloseForm={this.handleClose}/>
    );
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button variant="contained" 
          color="primary" 
          onClick={this.openForm}>
          <Add />Thêm mới công việc
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps = (state, props) => {
  return {
    prop: state.prop
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));