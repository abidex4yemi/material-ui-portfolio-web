import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`
    },
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcOrange}`
    }
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontSize: '1rem',
      fontWeight: '500'
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1.1rem',
      textTransform: 'none',
      color: '#0A1747',
      letterSpacing: '1px'
    }
  }
});
