import React, {useState, useEffect} from 'react';
import { Link as RouterLink } from "react-router-dom";
import {Box, Divider, Button,  Typography, Drawer} from "@material-ui/core"; 
import { AppBar, Link } from '@material-ui/core';
import { IconButton, Toolbar, MenuItem } from '@material-ui/core'; 
import  MenuIcon  from '@mui/icons-material/Face'; 
import { useStyles } from './styles'; 
import { labeledStatement } from '@babel/types';

const headersData = [
  {
    label: "Listings",
    href: "/listings",
  },
  {
    label: "Mentors",
    href: "/mentors",
  },
  {
    label: "My Account",
    href: "/account",
  },
  {
    label: "Log Out",
    href: "/logout",
  },
];



export default function TopMenu() {

  const styles = useStyles();

  const title = (
    <Typography variant='h6' component='h1' className={styles.page}>
      myPage
    </Typography>
  );

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={styles.toolbar}>
        {title}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  
  


    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState => ({...prevState,drawerOpen: true}))); 
      const handleDrawerClose = () => 
        setState((prevState) => ({...prevState, drawerOpen:false})); 

      return (
        <Toolbar>
          <IconButton
            {...{
              edge:"start",
              color: "inherit", 
              "aria-label": "menu",
              "aria-haspopup":true,
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon /> 
          </IconButton>  
            
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
          <div className={styles.drawerContainer}> {getDrawerChoices()}</div>
          </Drawer>

          <div> {title} </div>
        </Toolbar>
      );
    };

    

    const getDrawerChoices = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Link 
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration:"none" },
              key:label,
            }}
            >
              <MenuItem> {label} </MenuItem>
            </Link>
        );
      }); 
    }; 

    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button className={styles.menuButtonX}
            {...{
              key: label,
              color:"inherit",
              to: "href",
              component: RouterLink, 
            }}
          >
            {label}
          </Button>
        );
      });
    };   

  return (
    <TopMenu>
      <AppBar> 
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </TopMenu>
 
  );
}




/* <AppBar position="fixed" className={styles.appBar}>
      <Toolbar >
        <IconButton
          edge='start'
          className={styles.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
          {title}
        </IconButton>
        <MenuItem>
          <Typography variant='h6' className={styles.title}>
            Home
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant='h6' className={styles.title}>
            About
          </Typography>
        </MenuItem>
      </Toolbar>
    </AppBar> */