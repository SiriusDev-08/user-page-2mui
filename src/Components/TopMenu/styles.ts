import {  makeStyles } from "@material-ui/core"; 

export const useStyles = makeStyles(theme => ({
  container: {


  },

  appBar: {

    width: "calc(100%- ${drawerWidth}px",
    marginLeft: "drawerWidth", 
    
  }, 

  menuButton: {
    marginRight:"theme.spacing(2)", 

  }, 

  title: {
    flexGrow: 1, 

  }, 

}));
