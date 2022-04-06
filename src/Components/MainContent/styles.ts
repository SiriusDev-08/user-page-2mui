import {  makeStyles } from "@material-ui/core"; 

export const useStyles = makeStyles(theme => ({
  
  toolbar: theme.mixins.toolbar, 

  fullWidth: {
    width: "100%", 
  }, 


  title: {
    flexGrow:1,
    padding: theme.spacing(3), 
  }, 

  content: {
    flexGrow: 1, 
    padding: theme.spacing(3), 

  },

}))
