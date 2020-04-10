import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolBarMargin: {
    marginBottom: '60px',
  },
  toolBarHeight: {
    minHeight: '50px',
  },
  logo: {
    height: '50px',
  },
  logoContainer: {
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
    paddingRight: '20px',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: '50px',
    marginLeft: '10px',
  },
  menu: {
    marginTop: '30px',
    backgroundColor: theme.palette.common.blue,
    borderRadius: '0',
    color: '#fff',
    paddingBottom: '0',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  mobileMenuIconContainer: {
    backgroundColor: 'transparent',
    marginLeft: 'auto',
  },
  mobileMenuIcon: {
    color: '#fff',
    width: '25px',
    height: '25px',
  },
  mobileMenuContainer: {
    backgroundColor: theme.palette.common.blue,
  },
  mobileListItemText: {
    ...theme.typography.tab,
    color: '#fff',
    '&:hover': {
      color: '#fff',
    },
  },
  estimateBtnMobile: {
    background: theme.palette.common.orange,
  },
  estimateBtnText: {
    ...theme.typography.estimate,
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginRight: '20px',
  },
}));

export default useStyles;
