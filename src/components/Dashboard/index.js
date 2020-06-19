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
    //props name lấy từ AdminLayoutRoute(remainProps), sau đó truyền vào cho header
    const { children, classes, name } = this.props;
    return (
      <div className={classes.dashboard}>
        <Header name={name}/>
        <Sidebar/>
        {children}
      </div>
    );
  }
};

Dashboard.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object,
  name: PropTypes.string,
};

export default withStyles(styles)(Dashboard);
