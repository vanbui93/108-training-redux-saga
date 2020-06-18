import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './../../commons/Theme';
import { Provider } from 'react-redux';
import configureStore from './../../redux/configureStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GloballLoading from './../../components/GloballLoading/index';
import Modal from '../../components/Modal';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ADMIN_ROUTES } from './../../constants/index';
import AdminLayoutRoute from './../../commons/Layout/AdminLayoutRoute/index';

const store = configureStore();

//Container connect tới reducer
class App extends Component {
  renderAdminRoute = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route, index) => {
      console.log(ADMIN_ROUTES);

      return (
        <AdminLayoutRoute
          key={index}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      )
    })
    return xhtml;
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <ToastContainer />
            <GloballLoading />
            <Modal />
            <Switch>
              {this.renderAdminRoute()}
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
};

export default App;