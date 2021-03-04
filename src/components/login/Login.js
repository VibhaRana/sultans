import React from "react";

import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { InputAuthForm, ButtonDefault } from "../buttons/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url("/assets/Reach out to Us! (3)/Login to see our food (2).png")`,
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

export default function Login() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={6} md={6} className={classes.image}></Grid>
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
            style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}
          >
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <InputAuthForm
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="Email Address"
              name="email"
              autoComplete="email"
              //   autoFocus
            />
            <InputAuthForm
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Box flexDirection="row" pt="1.8rem">
              <span
                className="font__body color__text-etc"
                style={{ color: "black", marginLeft: "5em" }}
              >
                Don't have an account?
                {"  "}
              </span>
              <Link href="/order">Order Now</Link>
            </Box>

            <ButtonDefault
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ marginLeft: "6.5em", marginTop: "8em" }}
            >
              Sign In
            </ButtonDefault>
            <Grid container></Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
