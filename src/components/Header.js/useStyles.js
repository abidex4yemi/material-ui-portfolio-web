import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolBarMargin: {
    marginBottom: '60px'
  },
  toolBarHeight: {
    minHeight: '50px'
  },
  logo: {
    height: '50px'
  },
  logoContainer: {
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  tabContainer: {
    marginLeft: 'auto',
    paddingRight: '20px'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: '50px',
    marginLeft: '10px'
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginRight: '20px'
  }
}));

export default useStyles;
