import {  makeStyles } from "@material-ui/core"; 

const drawerWidth = 240; 

export const useStyles = makeStyles(theme => ({
  

  /* appBar: {

    width: 'calc(100% - ${drawerWidth}px)',
    marginLeft: '${drawerWidth}px', 
    
  },  Minha versão, é só por causa das aspas? ' */

  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },

  menuButton: {
    marginRight:theme.spacing(2), 
    

  }, 

  title: {
    flexGrow: 1, 

  }, 

}));
