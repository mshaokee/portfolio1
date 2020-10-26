import React, { Component } from 'react';

//MUI
// import theme from '../../theme';  //importing theme as needed
import { Typography, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => {
    return ({
        header: {
        }
    })
};//end styles


class Home extends Component {

    render() {
        const classes = this.props;
        return (
            <div>
                <Box className={classes.header}>
                    <Typography variant="h2" align="center" color="primary"> Shao Kee Moua </Typography>
                </Box>
                <Box>
                    <Typography>Hello my name is Shao Kee Moua.</Typography>
                    <br />
                    <Typography>
                    I am young, I am the future, I am experience,
                    I am making mistakes, I am a problem solver. I am human.
                    I am a Full Stack Engineer.
                    </Typography>
                    <br />
                    <Typography>
                        “To have faith is to trust yourself to the water. 
                        When you swim you don't grab hold of the water, 
                        because if you do you will sink and drown. 
                        Instead, you relax, and float.” - Alan Watts
                    </Typography>
                    {/* About me section */}
                    <Typography>
                        I am a strong believer in the process, that there are bumps on the road no matter
                        what you are doing. Whether it's living life or it's your career and you're finding
                        solutions to your code. In the end, there is a light and there is happiness and with
                        that in mind, is the drive to my work ethic day in and day out. I am a programmer.
                        <br />
                        My journey begins early of 2020 I dive into a fast paced coding academy, Prime Digital Academy.
                        Here I have honed my skills and built multiple projects Full Stack. It doesn't stop here as the
                        love for programming grows with an itch to obtain more knowledge and built the future.
                    </Typography>
                    {/* Skills Section */}

                    {/* Portfolio */}

                    {/* Contact */}
                </Box>
            </div>
        )
    }
};//end class

export default withStyles(styles)(Home);