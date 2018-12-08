import React, {Component} from 'react';
import {connect} from 'react-redux';
import {IconButton, Menu, MenuItem, Navigation, Tooltip} from "react-mdl";
import {Link} from "react-router-dom";
import {deleteHistory, resumeLastPlayed} from "../../store/actions";

class NavbarView extends Component {
    render() {
        return (
            <Navigation>
                {this.renderHistoryMenu()}
                <Tooltip label="Rss Feed Parser">
                    <Link to="/parser">
                        <IconButton className="navigation-bar-link" name="rss_feed"/>
                    </Link>
                </Tooltip>
                <Tooltip label="About">
                    <Link to="/about">
                        <IconButton className="navigation-bar-link" name="info_outline"/>
                    </Link>
                </Tooltip>
            </Navigation>
        );
    }

    renderHistoryMenu() {
        const {history, lastPlayed, deleteHistory, playLatest} = this.props;
        if (history && history.length === 0) {
            return null;
        }
        return (
            <div>
                <IconButton className="navigation-bar-link" name="more_vert" id="demo-menu-lower-left"/>
                <Menu target="demo-menu-lower-left">
                    {lastPlayed && (
                        <MenuItem onClick={() => playLatest(lastPlayed)}>
                            <IconButton
                                className="navigation-bar-link"
                                name="history"
                            />
                            Resume last played
                        </MenuItem>
                    )}
                    <MenuItem onClick={deleteHistory}>
                        <IconButton
                            className="navigation-bar-link"
                            name="delete_forever"
                        />
                        Delete history
                    </MenuItem>
                </Menu>
            </div>
        )

    }
}

const stateToProps = ({podcasts}) => {
    const {history} = podcasts;
    return {
        ...history
    };
};
const dispatchToProps = dispatch => {
    return {
        deleteHistory() {
            dispatch(deleteHistory());
        },
        playLatest(lastPlayed) {
            dispatch(resumeLastPlayed(lastPlayed.podcast, lastPlayed.seek));
        }
    };
};
const Navbar = connect(stateToProps, dispatchToProps)(NavbarView);
export {Navbar};
