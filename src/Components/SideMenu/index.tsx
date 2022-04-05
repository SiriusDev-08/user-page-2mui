import React from 'react';
import {Box, Divider, Typography} from "@material-ui/core"; 
import {Drawer, Grid, List, Avatar } from '@material-ui/core'; //corrigir aspas simples 
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"; 
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useStyles } from './styles'; 


export const SideMenu = () => {

  const styles = useStyles();

  return (
    <Drawer
      open={true}
      variant='permanent'
      anchor='left'
      className={styles.drawer}
      classes={{
        paper: styles.drawerPaper,
      }}
    >
      <Grid container justify='center' alignItems='center'>
        <Avatar 
          src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
          className={styles.bigAvatar}
          />
      </Grid>
      <List>
        {['Profile' , 'Sign Out'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <AccountCircleIcon /> : <ExitToAppIcon />}
            </ListItemIcon>
            <ListItemText primary={text} /> 
          </ListItem>
        ))}
      </List>
    </Drawer>  
  );
}

