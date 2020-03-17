import React from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ElevationScroll from './ElevationScroll';

const useStyles = makeStyles((theme) => ({
  toolBarMargin: {
    ...theme.mixins.toolbar
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#fff'
  },
  title: {
    flexGrow: 1
  }
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar edge="start" aria-label="menu" color="inherit">
            <IconButton className={classes.menuButton}>
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              News
            </Typography>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin}></div>
      <p color="secondary">Welcome</p>
    </>
  );
};

export default Header;
