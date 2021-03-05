import React from "react";
import "./Product.css";
import { makeStyles } from "@material-ui/core/styles";
import { useStateValue } from "../../StateProvider";
import {
  Card,
  CardActions,
  CardContent,

  CardMedia,
  Grid,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    "&:hover": {
      opacity: 0.5,
     
    },
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
   alert("Item added to cart")
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} lg={4} xl={4} className = 'card' style = {{}}>
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
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Product;
