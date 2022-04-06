import {  makeStyles } from "@material-ui/core"; 
import { height } from "@material-ui/system";

export const useStyles = makeStyles ({
  container: {
    display: "flex",
    width: "100%",
    minWidth:"100%", 
    padding: 10,
    backgroundColor: "#f3f3f3",
    height: "100vh",
    overflowX: "hidden",
    "@media (min-width: 1000px)":{
      height: "100%",
    }
     

  },

  header: {

    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",

    "@media (min-width: 529px)":{
      justifyContent: "space-between",
    }, 
    
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width:900px)":{
      paddingLeft:0
    }
    
    
  }, 

  footer: {
    position:"fixed", 
    bottom: 0, 
  }
  
})
