import {  Drawer, makeStyles } from "@material-ui/core";  
import { grey } from "@material-ui/core/colors";


const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  
  drawer: {
    width: drawerWidth, 
    flexShrink: 0, 
  }, 

  drawerPaper: {
    width: drawerWidth,
    backgroundImage: 'linear-gradient(#cfd8df,#e2ebf0)',
    color: 'grey', 
  }, 

  bigAvatar: {
    margin: 30, 
    width: 100,
    height: 100, 
  }, 



}))
