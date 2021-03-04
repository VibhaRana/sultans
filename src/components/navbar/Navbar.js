import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Grid, Toolbar, Button } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    flex: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <Grid container className="navbar">
      <Grid item>
        <AppBar style={{ backgroundColor: "black" }}>
          <Toolbar>
            <Grid className={classes.imageStyle}>
              <Link to="/">
                <img
                  className="navbar__logo"
                  src="/assets/Reach out to Us! (3)/fresh.png"
                  alt=" "
                />
              </Link>
            </Grid>

            <Link to="/order" className="header__link">
              <div className="header__option">
                <span className="header__optionLineOne">Order </span>
              </div>
            </Link>
            <Link to="/login" className="header__link">
              <div className="header__optionLogin">
                <span className="header__optionLineTwo">Login </span>
              </div>
            </Link>
            <Link to="/checkout" className="header__link">
              <div className="header__optionBasket">
                {/* Shopping basket icon */}
                <AddShoppingCartIcon /> <h6>Cart</h6>
                {/* Number of items in basket */}
                <span className="header__optionLineTwo header__basketCount">
                  {basket?.length}
                </span>
              </div>
            </Link>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
}

export default Navbar;
