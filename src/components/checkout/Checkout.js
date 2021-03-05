import React from "react";
import Navbar from "../navbar/Navbar";
import "./CheckoutProduct.css";
import CheckoutProduct from "./CheckoutProduct";

import { useStateValue } from "../../StateProvider";
import { Container, Grid } from "@material-ui/core";
import Subtotal from './Subtotal';
import Footer from '../Footer';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <Grid className="checkout" style={{ backgroundColor: "white" }}>
      <Container className="container" style={{ backgroundColor: "#F2F0EF" }}>
      <div className="checkout__right" style = {{float : 'right'}}> <Subtotal /> </div> 
        <div
          className="checkout__left"
          style={{
            width: "100%",
            marginBottom: "10px",
            objectFit: "contain",
            height: "10%",
          }}
        >
          <div>
            <div style={{ marginTop: "6em" }}>
              <h4 style={{ fontFamily: "fantasy" }}>Hello {user?.email}</h4>
              <h2 style={{ fontFamily: "fantasy" }} className="checkout__title">
                Your Shopping Basket
              </h2>
            </div>
            {/* List out all the checkout products */}
            {basket.map((item) => (
              <Grid style={{ backgroundColor: "white", width: "500px" }}>
                <CheckoutProduct
                  // render props of this product for each item

                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              </Grid>
            ))}
 
          </div>

        </div>

      </Container>

  
       <Container>
          
         
      </Container> 
    </Grid>
  );
}

export default Checkout;
