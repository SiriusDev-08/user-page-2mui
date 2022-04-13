import {  makeStyles } from "@material-ui/core"; 

const drawerWidth = 240; 

export const useStyles = makeStyles((theme) => ({
  

  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },

  page: {

  }, 

  menuButton: {
    marginRight:theme.spacing(2), 
  
  }, 

  title: {
    flexGrow: 1, 

  }, 


  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  menuButtonX: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  }, 

  drawerContainer: {

  }, 



}));
