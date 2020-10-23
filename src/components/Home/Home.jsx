import React, { Component } from 'react';

//MUI
// import theme from '../../theme';  //importing theme as needed
import { Typography, Box } from '@material-ui/core';
// import { withStyles } from '@material-ui/core/styles'; //withStyles in doing styling inside


class Home extends Component {

    render() {
        return (
            <Box>
                <Typography variant="h2" align="center" color="primary"> Shao Kee Moua </Typography>
            </Box>
        )
    }
};//end class

export default Home;