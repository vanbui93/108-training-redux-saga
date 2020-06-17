import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './../../../components/Dashboard/index';
import { PropTypes } from 'prop-types';

class AdminLayoutRoute extends Component {
  render() {
    const { route } = this.props;
    const { component: yourComponent, name, ...remainProps } = route; //remainProps là các thuộc tính còn lại trong ADMIN_ROUTES
    return (
      <Route {...remainProps} render={(routeProps) => {
        return (
          <Dashboard>
            <yourComponent {...routeProps}/>DashBoard
          </Dashboard>
        )
      }} />
    )
  }
}

AdminLayoutRoute.propTypes= {
  route: PropTypes.object,
};

export default AdminLayoutRoute;