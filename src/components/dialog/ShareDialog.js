import React, {Component} from 'react';
import {Button, Dialog, DialogActions, DialogContent, Icon, IconToggle} from 'react-mdl';

class ShareDialog extends Component {
    render() {
        const {isActive, onClose, url, toggleTime, addTime} = this.props;
        return (
            <div>
                <Dialog open={isActive}>
                    <DialogContent>
                        <p>
                            {url}
                        </p>
                        Add time <IconToggle name="timelapse" defaultChecked={addTime} onChange={toggleTime}/>
                    </DialogContent>
                    <DialogActions>
                        <Button type='button' onClick={onClose}>Close</Button>
                        <Button type='button'>
                            <Icon name="content_copy"/>
                            Copy Link
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
export {ShareDialog};
