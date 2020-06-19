import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import { PropTypes } from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ADMIN_ROUTES } from './../../../constants/index';

class Siderbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    }
  }

  toggleDrawer = (value) => {
    this.setState({
      open: value
    })
  };

  renderList = () => {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="div">
          {ADMIN_ROUTES.map((item, index) => {
            return (
              <ListItem key={index} className={classes.menuItem} button>
                {item.name}
              </ListItem>
            )
          })}
        </List>
      </div>
    );
    return xhtml;
  }

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <Drawer open={open} onClose={() => this.toggleDrawer(false)}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {this.renderList()}
      </Drawer>
    );
  }
}

Siderbar.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
}

export default withStyles(styles)(Siderbar);
