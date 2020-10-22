import { createMuiTheme } from '@material-ui/core/styles';
import { red, blue, green, indigo } from '@material-ui/core/colors';

const theme = createMuiTheme({

    palette: {
        primary: indigo,
        secondary: blue
    },
    status: {
        danger: 'orange'
    }
});//end theme

export default theme;
