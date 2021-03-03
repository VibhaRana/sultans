import React, {useState} from 'react'
import mockData from '../../mockData'



function ProductInfo(props) {
    const { match, history } = props;
  const { params } = match;
  const { productId } = params;
  const[productInfo, setProductInfo] = useState(mockData[`${productId}`])

  const generateProductJSX = (ProductInfo) => {
     
      console.log("These are the products")
  }
    return (
        <div>
           {generateProductJSX()}
        </div>
    )
}

export default ProductInfo
