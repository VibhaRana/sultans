import React from "react";
import "./Order.css";
import Navbar from "../navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { InputAuthForm, ButtonDefault } from "../buttons/Button";
import { Box, Container, Grid, Typography, Paper } from "@material-ui/core";
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
    history.push("/product");
  }
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} >
        <img
          className="order"
          src="/assets/Reach out to Us! (3)/Check Availability in your area (2).png"
        />
      </Grid>
      <Grid iitem
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        style={{ backgroundColor: "#F2F0EF", color: "white" }}>
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h5"
            style={{ color: "black", fontSize: "30px", fontWeight: "bold" , marginTop: '2em'}}
          >
            Check Availability
          </Typography>
          <Typography paragraph style = {{color: 'darkgray'}}>Let's make sure Fresh Meal Plan is available in your area</Typography>
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
