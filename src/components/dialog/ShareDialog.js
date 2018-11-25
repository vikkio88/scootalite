import React, {Component} from 'react';
import {Button, Dialog, DialogActions, DialogContent, IconToggle} from 'react-mdl';
import './ShareDialog.css';

class ShareDialog extends Component {
    select = () => {
        document.getElementById('shareLink').select();
    };

    render() {
        const {isActive, onClose, url, toggleTime, addTime} = this.props;
        return (
            <div>
                <Dialog open={isActive}>
                    <DialogContent>
                        <div className="dialog-content-wrapper">
                            <input
                                type="text"
                                value={url}
                                readOnly
                                id="shareLink"
                                onClick={this.select}
                                size={30}
                            />
                            <div className="time-button">Add time <IconToggle name="timelapse" defaultChecked={addTime} onChange={toggleTime}/>
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button raised type='button' onClick={onClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export {ShareDialog};
