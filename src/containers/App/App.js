import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Taskboard from '../Taskboard';
import theme from './../../commons/Theme';
import { Provider } from 'react-redux';
import configureStore from './../../redux/configureStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GloballLoading from './../../components/GloballLoading/index';
import Modal from '../../components/Modal';

const store = configureStore();

//Container connect tới reducer
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer/>
          <GloballLoading/>
          <Modal/>
          <Taskboard />
        </ThemeProvider>
      </Provider>
    );
  }
}
