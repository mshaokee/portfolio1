import React, { Component } from 'react';

//MUI
import { Typography, Box } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = () => {
    return({
        nav: {
            marginTop: '100px'
        },
    })
};//end styles


class Nav extends Component {

    render() {
        const {classes} = this.props;
        return (
            <Box className={classes.nav}>
                <Typography>Hello</Typography>
            </Box>
        )
    }
};//end class

export default withStyles(styles)(Nav);