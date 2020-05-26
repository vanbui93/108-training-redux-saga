import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import Taskboard from './../../Taskboard';
import theme from './../../commons/Theme';

//Container connect tới reducer
export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
    );
  }
}