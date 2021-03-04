import React from "react";
import "./Product.css";
import { makeStyles } from "@material-ui/core/styles";
import { useStateValue } from "../../StateProvider";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
  },
}));

function Product({ id, title, image, price, description }) {
  const classes = useStyles();
  // Get the state and dispatch from the store
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket >>>> ", basket);
  const addToBasket = () => {
    // Add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        description: description,
      },
    });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} lg={4} xl={4}>
        <Card className={classes.root}>
          <CardMedia className={classes.media}>
            <img src={image} alt="cooking" />
          </CardMedia>
          <CardContent>
            <h5
              style={{
                textAlign: "center",
                fontFamily: "fantasy",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {title}
            </h5>
            <p style={{ color: "gray", fontFamily: "sans-serif" }}>
              {description}
            </p>
            <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
          </CardContent>
          <CardActions>
            <Button className="button" onClick={addToBasket}>
              Add to basket
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Product;
