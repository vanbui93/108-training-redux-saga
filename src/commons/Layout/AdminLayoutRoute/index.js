import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './../../../components/Dashboard/index';
import { PropTypes } from 'prop-types';

class AdminLayoutRoute extends Component {
  render() {
    const { route } = this.props;
    const { component: YourComponent, name, ...remainProps } = route; //remainProps là các thuộc tính còn lại trong ADMIN_ROUTES
    return (
      //render là props của route
      //render là kết xuất component inline nội tuyến: render={() => <div>Home</div>}
      //mà ko phải truyền vào dạng:  component={Dashboard}
      <Route {...remainProps} render={(routeProps) => <Dashboard><YourComponent {...routeProps} /></Dashboard> }/>
    )
  }
}

AdminLayoutRoute.propTypes = {
  route: PropTypes.object,
};

export default AdminLayoutRoute;