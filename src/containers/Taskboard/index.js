import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import { Add } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../constants/index";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as taskActions from "../../actions/task";
import { bindActionCreators } from "redux";
<<<<<<< HEAD
import { toast } from 'react-toastify';
=======
>>>>>>> 23e3f2348ea0233608abc7d9b872a1645dd3aace


class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTaskRequest } = taskActionCreators;
    fetchListTaskRequest();
  }

  renderBoard = () => {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={3}>
        {STATUSES.map((status, index) => {
          const taskFilter = listTask.filter(
            (taskFil) => taskFil.status === status.value
          );
          return (
            <TaskList
              key={index}
              tasks={taskFilter}
              status={status}
              index={index}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderForm = () => {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} handleCloseForm={this.handleClose} />;
    return xhtml;
  };

  render() {
<<<<<<< HEAD
    const notify = () => toast.success("Wow so easy !");
=======
>>>>>>> 23e3f2348ea0233608abc7d9b872a1645dd3aace
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button variant="contained" color="primary" onClick={this.openForm}>
          <Add />
          Thêm mới công việc
        </Button>
<<<<<<< HEAD
        <Button onClick={notify}>Notify !</Button>
=======
>>>>>>> 23e3f2348ea0233608abc7d9b872a1645dd3aace
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActions: PropTypes.shape({
    fetListTask: PropTypes.func,
  }),
  listTask: PropTypes.array,
};

const mapStateToProps = (state, props) => {
  return {
    listTask: state.task.listTask,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch), //bindActionCreators Gộp nhiều action
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
