import React, { Component } from 'react';

//MUI
// import theme from '../../theme';  //importing theme as needed
import { Typography, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'; 

const styles = () => {
    return({
        header: {
        }
    })
};//end styles


class Home extends Component {

    render() {
        const classes = this.props;
        return (
            <Box className={classes.header}>
                <Typography variant="h2" align="center" color="primary"> Shao Kee Moua </Typography>
            </Box>
        )
    }
};//end class

export default withStyles(styles)(Home);