import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Help, Favorite, ShoppingCart, AccountCircle } from '@material-ui/icons';
import logo from '../../logo.svg';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: 'left'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  rightMenu: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center'
  },
  menuItem: {
    marginRight: theme.spacing(2)
  },
  logo: {
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    backgroundColor: 'white'
  }
}));

export default function MyAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <img src={logo} alt="logo" className={classes.logo} />
        </IconButton>
        
        <Tabs value={selectedTab} onChange={handleTabChange} aria-label="menu tabs">
          <Tab label="Collections" />
          <Tab label="Offers" />
          <Tab label="FAQs" />
        </Tabs>
        <div className={classes.rightMenu}>
          <IconButton className={classes.menuItem} color="inherit">
            <Help />
          </IconButton>
          <IconButton className={classes.menuItem} color="inherit">
            <Favorite />
          </IconButton>
          <IconButton className={classes.menuItem} color="inherit">
            <ShoppingCart />
          </IconButton>
          <IconButton className={classes.menuItem} color="inherit" onClick={handleMenuOpen}>
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
