import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  CircularProgress,
  CardMedia,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import mockData from "../../mockData";
import Navbar from "../navbar/Navbar";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  productContainer: {
    paddingTop: "80px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  cardMedia: {
    margin: "auto",
  },
});

function Product(props) {
  const classes = useStyles();
  let history = useHistory();
  const [productData, setProductData] = useState({});
  
  useEffect(() => {
    axios.get(
      `https://cors-anywhere.herokuapp.com/https://1f17fc4473a9c82a9c158301cf9ff98a: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@freshmeals-interview-org.myshopify.com/admin/api/2021-01/products.json`
    )
    .then(function(response){
        const {data} = response;
        const {results} = data
        console.log(results)
        const newProductData = {}
        results.forEach((product, index) => {
            newProductData[index + 1] = {
                id: product.id,
                title: product.title,
                image: product.image
            }
        }) 
       setProductData(newProductData)
       console.log(response.data)
    });
 }, []);

  function getProductCard(productId) {
    console.log(productData[`${productId}`]);
    const { id, title, image } = productData[productId];
    return (
      <Grid
        item
        xs={12}
        sm={6}
        lg={4}
        xl={4}
        key={productId}
        style={{ backgroundColor: "yellow" }}
      >
        <Card
          style={{ backgroundColor: "peru" }}
          onClick={() => history.push(`/${id}`)}
        >
          <CardMedia
            className={classes.cardMedia}
            image={image}
            style={{ width: "130px", height: "130px" }}
          />
          <CardContent>{title}</CardContent>
        </Card>
      </Grid>
    );
  }

  return (
    <>
      <Navbar />
      {productData ? (
        <Grid container spacing={2} className={classes.productContainer}>
          {Object.keys(productData).map((productId) =>
            //   productData[productId].name.includes(filter) &&
            getProductCard(productId)
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}

export default Product;
