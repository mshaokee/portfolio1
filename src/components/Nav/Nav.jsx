import React, { Component } from 'react';

//MUI
import { Typography, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => {
    return ({
        nav: {
            backgroundColor: '#25274D',
        },
        text: {
            padding: '18px',
            float: 'right',
        },
        title: {
            color: 'white',
            padding: '18px',
            float: 'left',
            marginRight: '800px'
        },
        box: {
            display: 'inline-block',
        },
        info: {
            color: 'white',
            float: 'right',
        }
    })
};//end styles


class Nav extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.nav}>
                <Box className={classes.box}>
                    <Typography className={classes.title} variant="h6">Shao Kee Moua</Typography>

                    {/* information holds the click ons */}
                    <div className={classes.info}>
                        <Typography className={classes.text} variant="h6">Contact</Typography>
                        <Typography className={classes.text} variant="h6">Portfolio</Typography>
                        <Typography className={classes.text} variant="h6">Skills</Typography>
                        <Typography className={classes.text} variant="h6">About Me</Typography> 
                    </div>
                </Box>
            </div>
        )
    }
};//end class

export default withStyles(styles)(Nav);