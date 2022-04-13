import {  makeStyles } from "@material-ui/core"; 

const drawerWidth = 240; 

export const useStyles = makeStyles(theme => ({
  

  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    "@media (width: 600px)":{
      height: "60px",
    }

  },

  menuButton: {
    marginRight:theme.spacing(2), 
    

  }, 

  title: {
    flexGrow: 1, 

  }, 

}));
