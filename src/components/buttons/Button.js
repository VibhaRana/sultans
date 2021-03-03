import { Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

/*
    https://material-ui.com/api/button/
*/
export const ButtonDefault = withStyles(() => ({
  root: {
    // fontFamily: "Lato",
    fontWeight: "bold",
    fontSize: "16px",
    textTransform: "none",
    lineHeight: "14px",
    padding: "1em",
    color: "white",
    width: "50%",
    backgroundColor: "black",
    border: "1px solid white",
    
    "&:hover": {
      opacity: 1,
    },
  },
  
  variant: "contained",

}))(Button);

export const ButtonSmall = withStyles(() => ({
    root: {
      fontFamily: "Lato",
      fontWeight: "bold",
      fontSize: "16px",
      textTransform: "none",
      lineHeight: "19px",
      padding: "1em",
      color: "white",
      backgroundColor: "black",
      border: "1px solid white",
      width: "10%",
      "&:hover": {
        opacity: 0.9,
      },
    },
    
    variant: "contained"
   
  }))(Button);

  export const InputAuthForm = withStyles(() => ({
    root: {
      // fontFamily: "Lato",
      backgroundColor: "#F8F8F8",
      width: '70%',
      border: "0",
      marginLeft: '4em',
     marginTop: '2em',
      "&:hover": {
        fontFamily: "Lato",
      },
      "&:focus": {
        fontFamily: "Lato",
        fontWeight: "bold",
      },
    },
  }))(TextField);