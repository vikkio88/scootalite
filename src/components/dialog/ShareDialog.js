import React, {Component} from 'react';
import {Button, Dialog, DialogActions, DialogContent, IconToggle} from 'react-mdl';

class ShareDialog extends Component {
    select = () => {
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNodeContents(document.getElementById('shareLink'));
        selection.removeAllRanges();
        selection.addRange(range);
    };

    render() {
        const {isActive, onClose, url, toggleTime, addTime} = this.props;
        return (
            <div>
                <Dialog open={isActive}>
                    <DialogContent>
                        <p id="shareLink" style={{fontSize: '15px'}} onClick={this.select}>
                            {url}
                        </p>
                        Add time <IconToggle name="timelapse" defaultChecked={addTime} onChange={toggleTime}/>
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
