import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import ElevationScroll from './ElevationScroll';
import useStyles from './useStyles';
import logo from '../../assets/logo.svg';

const Header = (props) => {
  const classes = useStyles();

  const [active, setActive] = useState(0);

  const handleSelectedTab = (e, value) => {
    setActive(value);
  };

  const persistActiveTabOnPageRefresh = () => {
    switch (window.location.pathname) {
      case '/':
        setActive(0);
        break;
      case '/revolution':
        setActive(1);
        break;
      case '/about':
        setActive(2);
        break;
      case '/contact':
        setActive(3);
        break;
      default:
        break;
    }
  };

  useEffect(persistActiveTabOnPageRefresh);

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar
            disableGutters
            edge="start"
            aria-label="menu"
            color="inherit"
            className={classes.toolBarHeight}
          >
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setActive(0)}
              disableRipple
            >
              <img src={logo} alt="logo img" className={classes.logo} />
            </Button>

            <Tabs
              value={active}
              aria-label="navigation"
              className={classes.tabContainer}
              onChange={handleSelectedTab}
              indicatorColor="primary"
            >
              <Tab
                component={Link}
                to="/"
                className={classes.tab}
                label="Home"
              />
              <Tab
                component={Link}
                to="/revolution"
                className={classes.tab}
                label="The Revolution"
              />
              <Tab
                component={Link}
                to="/about"
                className={classes.tab}
                label="About Us"
              />
              <Tab
                component={Link}
                to="/contact"
                className={classes.tab}
                label="Contact Us"
              />
            </Tabs>

            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin}></div>
    </>
  );
};

export default Header;
