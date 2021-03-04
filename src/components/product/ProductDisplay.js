import React from "react";
import "./ProductDisplay.css";
import Product from "./Product";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

function ProductDisplay() {
  return (
    <Container>
      {/* <h1>I am the home page</h1> */}
      
      <img
        className="product__image"
        src="/assets/Reach out to Us! (3)/Fresh meal plan. check out our veggie bowls.png"
      />

      {/* Product id, title, price, rating, image */}
      <Grid container className="home__row" >
      
        <Grid item container xs = {12} style = {{backgroundColor: "#F2F0EF", marginLeft: '0.1em'}} spacing = {7}>
      
          <Grid item xs={12} sm={6} lg={4} xl={4}>
            <Product
              id="123123"
              title="Black-Eyed Pea & Sweet Potato Ndambe"
              price={16.99}
              rating={5}
              image="https://cdn.shopify.com/s/files/1/0549/4171/2560/products/PIerredish_300x300_096e27e4-8ef6-46c4-8a5b-c9f9a80b229e.png?v=1614392985"
              description = "Okra, sweet potato, stewed tomato"
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={4} xl={4}>
            <Product
              id="123124"
              title="Brussels Squash Harvest Bowl"
              price={11.96}
              rating={5}
              image="https://cdn.shopify.com/s/files/1/0549/4171/2560/products/BrusselsHarvestSquash_NewCrop_400x400_300x300_3cf06ce6-b7d4-43f3-8585-4e4d76445619.png?v=1614392864"
              description = "Lemony kale slaw, roasted squash, quinoa"
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={4} xl={4}>
            <Product
              id="123125"
              title="Chipotle Mango Burrito Bowl"
              price={11.96}
              rating={5}
              image="https://cdn.shopify.com/s/files/1/0549/4171/2560/products/ChipotleMango_NewCrop_400x400_300x300_ba64b394-e917-4ba5-9b18-875505bae836.png?v=1614392900"
              description = "Spanish rice, sweet potatoes, yellow corn, black beans"
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={4} xl={4}>
            <Product
              id="123126"
              title="Coconut Chickpea Curry"
              price={11.96}
              rating={5}
              image="https://cdn.shopify.com/s/files/1/0549/4171/2560/products/CoconutChickpeaCurry_NewCrop_400x400_300x300_097a01f9-bb8b-4419-8d62-da42e5086676.png?v=1614393078"
              description = 'Ginger, pumpkin, beluga lentils, turmeric cauliflower'
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={4} xl={4}>
            <Product
              id="123127"
              title="Ginger Sesame Noodles"
              price={16.96}
              image="https://cdn.shopify.com/s/files/1/0549/4171/2560/products/GingerSesameNoodles_NewCrop_400x400_300x300_b78049bf-2d8f-4a31-9851-aa823723dfb6.png?v=1614393043"
              description = 'Ginger, noodles, leeks, cashews,dukkah'
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={4} xl={4}>
            <Product
              id="123128"
              title="Miso Tempeh Bowl"
              price={14.96}
              image="https://cdn.shopify.com/s/files/1/0549/4171/2560/products/MisoTempeh_NewCrop_400x400_300x300_21071ea6-b724-4518-b19c-dce05756bc83.png?v=1614393011"
              description = "Edamame, black rice, lemon miso sauce"
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={4} xl={4}>
            <Product
              id="123128"
              title="Peanut Tofu Bowl"
              price={11.96}
              image="https://cdn.shopify.com/s/files/1/0549/4171/2560/products/PeanutTofu_NewCrop_400x400_300x300_ecc678f1-b146-4ba9-b86a-264f302fefaa.png?v=1614392925"
              description = 'Broccoli, pineapple, spicy peanut sauce'
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={4} xl={4}>
            <Product
              id="123128"
              title="Yellow Daal Curry"
              price={14.96}
              image="https://cdn.shopify.com/s/files/1/0549/4171/2560/products/YellowDalCurry_NewCrop_400x400_300x300_ec7a6f99-4c88-4f33-b620-ddb29b06e2f3.png?v=1614392950"
              description = "Lentils, spinach, butternut squash, brown rice"
             />
           
          </Grid>
          </Grid>
        </Grid>
    
    </Container>
  );
}

export default ProductDisplay;
