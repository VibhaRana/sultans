import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

import { Button } from "@material-ui/core";
function CheckoutProduct({ id, title, image, price, description }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <button
          onClick={removeFromBasket}
          style={{
            backgroundColor: "black",
            color: "white",
            border: "2px solid black",
            height: "30px",
          }}
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
