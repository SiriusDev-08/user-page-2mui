import React from 'react'; 
import { Footer } from '../../Components/Footer';
import { MainContent } from '../../Components/MainContent';
import { SideMenu } from '../../Components/SideMenu';
import { TopMenu } from '../../Components/TopMenu';
import { Box } from '@material-ui/core';
import { useStyles } from './Home.styles'


export const Home = () => {

  const styles = useStyles();
  
  return (
    <Box className={styles.container}>
      <Box className={styles.header}>
        <TopMenu />
      </Box>         
      <SideMenu />  
      <MainContent />
      <Box className={styles.footer}>
        <Footer /> 
      </Box>  
    </Box>  
     
  );
};


