import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import { PropTypes } from 'prop-types';
import Header from './Header/index';
import Sidebar from './Sidebar/index';

class Dashboard extends Component {
  render() {
    //children nhận tất cả props của route
    //(ở đây lấy props từ App(route) -> AdminLayoutRoute (routeProps)
    const { children, classes } = this.props;
    return (
      <div className={classes.dashboard}>
        <Header/>
        <Sidebar/>
        {children}
      </div>
    );
  }
};

Dashboard.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object,
};

export default withStyles(styles)(Dashboard);
