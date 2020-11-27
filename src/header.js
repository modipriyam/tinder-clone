import React from 'react';
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

function header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon fontSize="large" className="header_personicon"></PersonIcon>
            </IconButton>
            <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo-768x432.png" alt ="tinderlogo" className="header_logo"></img>
            <IconButton>
                <ForumIcon fontSize="large" className="header_message"></ForumIcon>
            </IconButton>
        </div>
    )
}

export default header