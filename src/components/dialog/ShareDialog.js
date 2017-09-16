import React, {Component} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from 'react-mdl';

class ShareDialog extends Component {
    render() {
        const {isActive, onClose} = this.props;
        return (
            <div>
                <Dialog open={isActive}>
                    <DialogTitle>Share Podcast</DialogTitle>
                    <DialogContent>
                        <p>Some stuff</p>
                    </DialogContent>
                    <DialogActions>
                        <Button type='button' onClick={onClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
export {ShareDialog};
