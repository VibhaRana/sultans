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
import mockData from "../../fakeMockData";
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
  const [productData, setProductData] = useState(mockData);
  
 
  function getProductCard(productId) {
    console.log(productData[`${productId}`]);
    const { id, title } = productData[`${productId}`];
    const image = "https://cdn.shopify.com/s/files/1/0549/4171/2560/products/PIerredish_300x300_096e27e4-8ef6-46c4-8a5"
    console.log(productData.id)
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



// export default [
//     {
//     "id": 6540070453424,
//       title: "Black-Eyed Pea & Sweet Potato Ndambe",
//       price: "16.99",
//       description:
//         "Fine Pacchi Kundan and Meenakari Openable Bangle with screw Size of the bangle:  since it is openable, it can fit those wear  bangles  ",
      
//       image:
//       "https://cdn.shopify.com/s/files/1/0549/4171/2560/products/PIerredish_300x300_096e27e4-8ef6-46c4-8a5b-c9f9a80b229e.png?v=1614392985",
     
//     },
    
//     {
//         "id": 6540069208240,
//       title: "Brussels Squash Harvest Bowl",
//       price: "14.99",
//       description:
//         "Traditional kundan necklace set, jadau jewelry, indian meenakari wedding jewelry, pastel bridal set, sabyasachi jewelry",
     
//       image:
//       "https://cdn.shopify.com/s/files/1/0549/4171/2560/products/PIerredish_300x300_096e27e4-8ef6-46c4-8a5b-c9f9a80b229e.png?v=1614392985",
      
//     },
  
//     {
//         "id": 6540069601456,
//         "title": "Chipotle Mango Burrito Bowl",
//       price: "16.99",
//       description:
//         "LATEST SLINGS IN SNAKE SKIN PATTERN Top quality full detailing, inner branding, cash pocket available",

//       image:
//       "https://cdn.shopify.com/s/files/1/0549/4171/2560/products/BrusselsHarvestSquash_NewCrop_400x400_300x300_3cf06ce6-b7d4-43f3-8585-4e4d76445619.png?v=1614392864",
    
//     },
//     {
//         "id": 6540071043248,
//         "title": "Coconut Chickpea Curry",
//       price: "16.99",
//       description:
//         "3-layered Stainless steel filter traps the smallest coffee grounds to produce an exceptional full-bodied flavor, filter is easy to disassemble and clean.",
     
//       image:
//       "https://cdn.shopify.com/s/files/1/0549/4171/2560/products/ChipotleMango_NewCrop_400x400_300x300_ba64b394-e917-4ba5-9b18-875505bae836.png?v=1614392900",
      
//     },

//     {
//         "id": 6540070846640,
//         "title": "Ginger Sesame Noodles",
//       price: "14.99",
//       description:
//         "Featuring a mangrove green sling bag crafted in leather accented with 24K gold plated tiger motif. It has quilted silk satin lining",
     
//       image:
//       "https://cdn.shopify.com/s/files/1/0549/4171/2560/products/CoconutChickpeaCurry_NewCrop_400x400_300x300_097a01f9-bb8b-4419-8d62-da42e5086676.png?v=1614393078",
      
//     },
//     {
//         "id": 6540070650032,
//         "title": "Miso Tempeh Bowl",
//       price: "16.99",
//       description:
//         'Kundan necklace set , kundan Jewelry , kundan bridal set , Sabyasachi Jewelry , indian Jewelry , indian necklace',
     
//       image:
//       "https://cdn.shopify.com/s/files/1/0549/4171/2560/products/GingerSesameNoodles_NewCrop_400x400_300x300_b78049bf-2d8f-4a31-9851-aa823723dfb6.png?v=1614393043",
      
//     },
//     {
//         "id": 6540069863600,
//         "title": "Peanut Tofu Bowl",
//         price: "$37.99",
//         description:
//           'Kundan necklace set , kundan Jewelry , kundan bridal set , Sabyasachi Jewelry , indian Jewelry , indian necklace',
       
//         image:
//         "https://cdn.shopify.com/s/files/1/0549/4171/2560/products/MisoTempeh_NewCrop_400x400_300x300_21071ea6-b724-4518-b19c-dce05756bc83.png?v=1614393011",
        
//       },
//       {
//         "id": 6540070092976,
//         "title": "Yellow Dal Curry",
//         price: "$17.99",
//         description:
//           'Kundan necklace set , kundan Jewelry , kundan bridal set , Sabyasachi Jewelry , indian Jewelry , indian necklace',
       
//         image:
//         "https://cdn.shopify.com/s/files/1/0549/4171/2560/products/PeanutTofu_NewCrop_400x400_300x300_ecc678f1-b146-4ba9-b86a-264f302fefaa.png?v=1614392925",
        
//       },
      
//   ];
