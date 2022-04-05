import React from 'react';
import {Box, Divider, Typography, AppBar} from "@material-ui/core"; 
import { useStyles } from './styles'; 


export const Footer = () => {

  const styles = useStyles();

  return (
    <AppBar className={styles.appBar}>
      <Typography variant='h6' className={styles.footer}>
        © Copyright 2022
      </Typography>
    </AppBar>
  );
}

