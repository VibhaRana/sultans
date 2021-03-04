import React from "react";
import "./Order.css";
import Navbar from "../navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { InputAuthForm, ButtonDefault } from "../buttons/Button";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Hidden,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    backgroundImage: `url("/assets/Reach out to Us! (3)/Untitled design.png")`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    //  backgroundPosition: 'left',
    objectFit: "fill",
    width: "100%",
    height: "100%",
    margin: "auto",
    padding: "1em",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(4, 1, 2),
  },
}));
function Order() {
  const classes = useStyles();
  let history = useHistory();

  function handleClick() {
    history.push("/products");
  }
  return (
    <Grid container scomponent="main" className={classes.root}>
      <Hidden smDown>
        {/* <Grid item md={6} lg={6} xl={6} className={classes.image}>
            <img className = 'order' src = "/assets/Reach out to Us! (3)/Check If we ship in your area.png"/>
        </Grid> */}
        <Grid item xs={false} sm={4} md={7} className={classes.image}></Grid>
      </Hidden>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        style={{ backgroundColor: "#F2F0EF", color: "white" }}
      >
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h5"
            style={{
              color: "black",
              fontSize: "30px",
              fontWeight: "bold",
              marginTop: "2em",
            }}
          >
            Check Availability
          </Typography>
          <Typography paragraph style={{ color: "darkgray" }}>
            Let's make sure Fresh Meal Plan is available in your area
          </Typography>
          <form className={classes.form} noValidate>
            <InputAuthForm
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="zipCode"
              placeholder="Shipping zip code"
              name="zipCode"
              autoComplete="zip-code"
              //   autoFocus
            />
            <InputAuthForm
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              placeholder="email"
              type="email"
              id="email"
              autoComplete="email"
            />

            <ButtonDefault
              onClick={handleClick}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ marginLeft: "6.5em", marginTop: "8em" }}
            >
              Check Availability
            </ButtonDefault>
            <Grid container></Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Order;
