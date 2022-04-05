import {  makeStyles } from "@material-ui/core"; 
import { height } from "@material-ui/system";

export const useStyles = makeStyles ({
  container: {

    "@media (min-width: 1000px)":{
      height: "100%",
    }  

  },

  header: {

    justifyContent: "center",
    

  }, 

  footer: {
    position:"fixed", 
    bottom: 0, 
  }
  
})
