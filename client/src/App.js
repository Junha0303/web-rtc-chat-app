import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import { width } from '@material-ui/system';

const useStyles = makeStyles( (theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',

        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
}));

export default function App () {
    const classes = useStyles();
    
    return (
        <div className = {classes.wrapper}>
            <AppBar 
                className = {classes.appBar}
                position = "static" 
                color = "inherit">
                <Typography className = "title" variant = "h4" align = "center"> 
                    <strong><i>Welcome to Video Chat</i></strong> 
                </Typography>
            </AppBar>

            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    );
}