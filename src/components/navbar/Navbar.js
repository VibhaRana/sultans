import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Grid, Toolbar, Button } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./Navbar.css";
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  imageStyle: {
    flex: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <Grid container className="navbar">
      <Grid item>
        <AppBar style={{ backgroundColor: "black" }}>
          <Toolbar>
            <Grid className={classes.imageStyle}>
              <img
                className="navbar__logo"
                src="/assets/Reach out to Us! (3)/fresh.png" alt = " "
              /> 
            </Grid>
        
            <Link to = '/order' className = 'header__link'>
             <div className = 'header__option'>
               <span className = 'header__optionLineOne'>Order </span>
            
             </div> 
            </Link>
            <Link to = '/login' className = 'header__link'>
             <div className = 'header__optionLogin'>
               <span className = 'header__optionLineTwo'>Login </span>
           
             </div> 
            </Link>

            <AddShoppingCartIcon />
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
}

export default Navbar;
