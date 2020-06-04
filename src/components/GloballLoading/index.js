import React, { Component } from 'react'
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import LoadingIcon from './../../assets/images/loading.gif';
import { PropTypes } from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as uiActions from './../../actions/ui';

class GloballLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xtml = null;
    if (showLoading) {
      xtml = (
        <div className={classes.globallLoading}>
          <img src={LoadingIcon} alt="loading" className={classes.icon} />
        </div>
      )
    }
    return xtml;
  }
}

GloballLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool
}

const mapStateToProps = (state, props) => {
  return {
    showLoading: state.ui.showLoading
  }
}

const withConnect = connect(
  mapStateToProps,
  null
);

//compose giúp giải quyết vấn đề thứ tự, dễ hiểu, cái này gọi trước thì chạy trước
export default compose(withStyles(styles), withConnect)(GloballLoading);