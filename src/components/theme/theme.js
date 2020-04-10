import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const purple = '#0A1747';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
      purple: `${purple}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontSize: '1rem',
      fontWeight: '500',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1.2rem',
      textTransform: 'none',
      color: `${purple}`,
      letterSpacing: '1px',
    },
  },
});
