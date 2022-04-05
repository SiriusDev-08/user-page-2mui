import React from 'react';
import {Box, Divider, Typography} from "@material-ui/core"; 
import { useStyles } from './styles'; 
import { StylesContext } from '@material-ui/styles';


export const MainContent = () => {

  const styles = useStyles();

  return (
    <main className={styles.fullWidth}>
      <div className={styles.toolbar} />
      
      <div className={styles.content}>
        <Typography variant='h6'>Title</Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
          nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
          felis nec erat
        </Typography>
      </div>
    </main>
    






  );
}

