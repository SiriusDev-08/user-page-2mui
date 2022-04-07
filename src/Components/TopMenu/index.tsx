import React from 'react';
import {Box, Divider, Typography} from "@material-ui/core"; 
import { AppBar } from '@material-ui/core';
import { IconButton, Toolbar, MenuItem } from '@material-ui/core'; 
import  MenuIcon  from '@mui/icons-material/Face'; 
import { useStyles } from './styles'; 

export const TopMenu = () => {

  const styles = useStyles();
  

  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar >
        <IconButton
          edge='start'
          className={styles.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
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
    </AppBar>
  );
}

/* hora de término 16:45 */

