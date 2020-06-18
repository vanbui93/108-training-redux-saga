import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

class Header extends Component {
  render() {
    return (
      <div>
        Đây là Header
      </div>
    );
  }
}


export default withStyles(styles)(Header);
