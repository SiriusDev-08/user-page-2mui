import {  makeStyles } from "@material-ui/core"; 

const drawerWidth = 240; 

export const useStyles = makeStyles(theme => ({
  

  appBar: {
    top: 'auto',
    bottom: '0',
    width: 'calc(100% - ${drawerWidth}px)', 
    marginLeft: 'drawerWidth', 
  }, 

  title: {
    flexGrow: 1,
    marginLeft: 10, 
  },

  footer: {
    marginLeft: 20, 
    fontSize: 17, 
  }, 


})) 
