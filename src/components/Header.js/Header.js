import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

import ElevationScroll from './ElevationScroll';
import useStyles from './useStyles';
import logo from '../../assets/logo.svg';

const Header = (props) => {
  // support for swiping side menu using touch for apple product
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const classes = useStyles();
  const theme = useTheme();
  const isScreenWidthBelow600 = useMediaQuery(theme.breakpoints.down('sm'));

  const [active, setActive] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleSelectedTab = (e, value) => {
    setActive(value);
  };

  const handleMenuItemClick = (e, i) => {
    setSelectedIndex(i);
  };

  const renderServicesMenuItem = () => {
    const menuOptions = [
      {
        name: 'Web design & development',
        path: '/websites',
      },
      {
        name: 'Custom development',
        path: '/custom-software',
      },
      {
        name: 'Mobile development',
        path: '/mobile-apps',
      },
    ];

    return menuOptions.map((option, index) => (
      <MenuItem
        onClick={(e) => {
          handleMenuItemClick(e, index);
          handleClose(e);
          setActive(2);
        }}
        component={Link}
        to={option.path}
        classes={{ root: classes.menuItem }}
        selected={index === selectedIndex}
        key={index}
      >
        {option.name}{' '}
      </MenuItem>
    ));
  };

  const persistActiveTabStyleOnPageRefresh = () => {
    switch (window.location.pathname) {
      case '/':
        if (active !== 0) {
          setActive(0);
        }
        break;
      case '/revolution':
        if (active !== 1) {
          setActive(1);
        }
        break;
      case '/services':
        if (active !== 2) {
          setActive(2);
        }
        break;
      case '/about':
        if (active !== 3) {
          setActive(3);
        }
        break;
      case '/contact':
        if (active !== 4) {
          setActive(4);
        }
        break;
      case '/websites':
        if (selectedIndex !== 0) {
          setSelectedIndex(0);
        }
        break;
      case '/custom-software':
        if (selectedIndex !== 1) {
          setSelectedIndex(1);
        }
        break;
      case '/mobile-apps':
        if (selectedIndex !== 2) {
          setSelectedIndex(2);
        }
        break;
      default:
        break;
    }
  };

  useEffect(persistActiveTabStyleOnPageRefresh);

  const handleShowServiceMenu = (e) => {
    setAnchorEl(e.currentTarget);
    setShowMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setShowMenu(false);
  };

  const MobileNav = () => {
    return (
      <>
        <SwipeableDrawer
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          onClose={() => setShowSideMenu(false)}
          open={showSideMenu}
          onOpen={() => setShowSideMenu(true)}
          classes={{ paper: classes.mobileMenuContainer }}
        >
          <List disablePadding>
            <ListItem
              divider
              button
              component={Link}
              to="/"
              onClick={() => {
                setShowSideMenu(false);
                setActive(0);
              }}
              selected={active === 0}
            >
              <ListItemText
                className={classes.mobileListItemText}
                disableTypography
              >
                Home{' '}
              </ListItemText>{' '}
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/revolution"
              onClick={() => {
                setShowSideMenu(false);
                setActive(1);
              }}
              selected={active === 1}
            >
              <ListItemText
                className={classes.mobileListItemText}
                disableTypography
              >
                The Revolution{' '}
              </ListItemText>{' '}
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/services"
              onClick={() => {
                setShowSideMenu(false);
                setActive(2);
              }}
              selected={active === 2}
            >
              <ListItemText
                className={classes.mobileListItemText}
                disableTypography
              >
                Services
              </ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/about"
              onClick={() => {
                setShowSideMenu(false);
                setActive(3);
              }}
              selected={active === 3}
            >
              <ListItemText
                className={classes.mobileListItemText}
                disableTypography
              >
                About Us{' '}
              </ListItemText>
            </ListItem>{' '}
            <ListItem
              divider
              button
              component={Link}
              to="/contact"
              onClick={() => {
                setShowSideMenu(false);
                setActive(4);
              }}
              selected={active === 4}
            >
              <ListItemText
                className={classes.mobileListItemText}
                disableTypography
              >
                Contact Us{' '}
              </ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/estimate"
              onClick={() => {
                setShowSideMenu(false);
                setActive(5);
              }}
              selected={active === 5}
              className={classes.estimateBtnMobile}
            >
              <ListItemText
                className={[
                  classes.mobileListItemText,
                  classes.estimateBtnText,
                ]}
                disableTypography
              >
                Free estimate
              </ListItemText>{' '}
            </ListItem>{' '}
          </List>
        </SwipeableDrawer>
        <IconButton
          onClick={() => setShowSideMenu(!showSideMenu)}
          disableRipple
          className={classes.mobileMenuIconContainer}
        >
          <MenuIcon className={classes.mobileMenuIcon} />
        </IconButton>{' '}
      </>
    );
  };

  const renderNavigationLinks = () => {
    if (isScreenWidthBelow600) {
      return <MobileNav />;
    }

    return (
      <>
        <Tabs
          value={active}
          aria-label="navigation"
          className={classes.tabContainer}
          onChange={handleSelectedTab}
          indicatorColor="primary"
        >
          <Tab component={Link} to="/" className={classes.tab} label="Home" />
          <Tab
            component={Link}
            to="/revolution"
            className={classes.tab}
            label="The Revolution"
          />
          <div>
            <Tab
              component={Link}
              to="/services"
              className={classes.tab}
              label="Our Services"
              onMouseOver={handleShowServiceMenu}
              aria-controls={anchorEl ? 'services-menu' : undefined}
              aria-haspopup={anchorEl ? true : 'undefined'}
            />
            <Menu
              id="services-menu"
              anchorEl={anchorEl}
              keepMounted
              open={showMenu}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              classes={{ paper: classes.menu }}
              elevation={0}
            >
              {renderServicesMenuItem()}
            </Menu>{' '}
          </div>
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
          Free estimate{' '}
        </Button>{' '}
      </>
    );
  };

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
            </Button>{' '}
            {renderNavigationLinks()}{' '}
          </Toolbar>
        </AppBar>
      </ElevationScroll>{' '}
      <div className={classes.toolBarMargin}></div>{' '}
    </>
  );
};

export default Header;
