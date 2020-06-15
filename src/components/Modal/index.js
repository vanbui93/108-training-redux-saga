import { Modal } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/styles";
import { PropTypes } from 'prop-types';
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as ModalActions from './../../actions/modal';
import styles from './styles';

class CommonModal extends Component {
    render() {
        const { classes, open, component, modalActionCreators, title } = this.props;
        const { hideModal } = modalActionCreators;
        return (
            <Modal open={open} onClose={hideModal}>
                <div className={classes.modal}>
                    <div className={classes.header}>
                        <span className={classes.title}>{title}</span>
                        <CloseIcon className={classes.icon} onClick={hideModal} />
                    </div>
                    <div className={classes.content}>{component}</div>
                </div>
            </Modal>
        );
    }
}

CommonModal.propTypes = {
    classes: PropTypes.object,
    open: PropTypes.bool,
    component: PropTypes.object,
    title: PropTypes.string,
    modalActionCreators: PropTypes.shape({
        hideModal: PropTypes.func,
    }),
};

const mapStateToProps = (state, props) => {
    return {
        open: state.modal.showModal,
        component: state.modal.component,
        title: state.modal.title,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        modalActionCreators: bindActionCreators(ModalActions, dispatch),
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(withStyles(styles), withConnect)(CommonModal);
