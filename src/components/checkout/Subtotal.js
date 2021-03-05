import React from 'react'
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from '../../reducer'
import './Subtotal.css'
import {useHistory} from 'react-router-dom'
import { useStateValue } from '../../StateProvider';

import { Button } from '@material-ui/core';


function Subtotal() {
    const history = useHistory()
    const[{basket}, dispatch] = useStateValue()
    return (
        <div className = 'subtotal'>
             <CurrencyFormat
            //  style = {{color : 'white'}}
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Button className = 'button__checkout'>Proceed to checkout</Button>
        </div>
    )
}

export default Subtotal
