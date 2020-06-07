import { Button, withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Add } from "@material-ui/icons";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as modalActions from "../../actions/modal";
import * as taskActions from "../../actions/task";
import SearchBox from "../../components/SearchBox";
import TaskForm from "./../TaskForm/index";
import TaskList from "./../../components/TaskList";
import { STATUSES } from "../../constants/index";
import styles from "./styles";


class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  // componentDidMount() {
  //   const { taskActionCreators } = this.props;
  //   const { fetchListTaskRequest } = taskActionCreators;
  //   fetchListTaskRequest();
  // }

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
    const { modalActionCreators } = this.props;
    const { showModal, changeModalTitle, changeModalContent } = modalActionCreators;
    showModal();
    changeModalTitle("Thêm mới công việc");    
    changeModalContent(<TaskForm />);
  };

  renderForm = () => {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} handleCloseForm={this.handleClose} />;
    return xhtml;
  };

  loadData = () => {
    const { taskActionCreators } = this.props;
    const { fetchListTasks } = taskActionCreators;
    fetchListTasks();
  };

  handleFilter = (e) => {
    const { value } = e.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  }

  renderSearchBox = () => {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter} />
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button variant="contained" color="primary" onClick={this.loadData}>
          Load data
        </Button>
        <Button variant="contained" color="primary" onClick={this.openForm}>
          <Add />
          Thêm mới công việc
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
        {/* {this.renderForm()} */}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActions: PropTypes.shape({
    fetListTask: PropTypes.func,
    filterTask: PropTypes.func,
  }),
  modalActions: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
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
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);