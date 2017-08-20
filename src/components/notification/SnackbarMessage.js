import React, {Component} from 'react';
import {connect} from 'react-redux';
import {finishedFlashError, finishedFlashInfo} from '../../store/actions';
import {Snackbar} from 'react-mdl';

class SnackbarMessageView extends Component {
    closeSnackbar = () => {
        const {error, info, finishedFlashError, finishedFlashInfo} = this.props;
        if (error) {
            finishedFlashError();
        }

        if (info) {
            finishedFlashInfo();
        }
    };

    render() {
        const {error, info} = this.props;
        const isSnackbarActive = error || info;
        return (
            <div>
                <Snackbar
                    active={isSnackbarActive}
                    onClick={this.closeSnackbar}
                    onTimeout={this.closeSnackbar}
                    action="Dismiss">{error || info}</Snackbar>
            </div>
        );
    }
}

const mapStateToProps = ({notifications}) => {
    const {error, info} = notifications;
    return {
        error,
        info
    };
};

const mapDispatchToProps = dispatch => {
    return {
        finishedFlashError() {
            dispatch(finishedFlashError());
        },
        finishedFlashInfo() {
            dispatch(finishedFlashInfo());
        }
    };
};
const SnackbarMessage = connect(mapStateToProps, mapDispatchToProps)(SnackbarMessageView);
export {SnackbarMessage};