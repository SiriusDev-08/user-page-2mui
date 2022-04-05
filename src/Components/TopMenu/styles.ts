import {  makeStyles } from "@material-ui/core"; 

export const useStyles = makeStyles ({
  container: {


  },

  appBar: {

    display: "flex",
    width: "900px", 
    height: "64px",
    alignItems: "start", 
    padding: "0px 10px 10px 30px",

    "@media (max-width: 1000px)":{
      paddingLeft: "500px",
      alignItems: "center",
      paddingRight: "0px",
    }
    
  }, 

  menuButton: {
    
  }, 

  title: {
    paddingLeft: "10px",
  }, 

})
