import React from 'react'

const ProductDetailsUi = ({product}) => {
  return (
    <div>
 {/* specefic product only i.e 1 product datail so, we dont use map here ok.. */}  
      <p>name:{product.name}</p>
      <p>price:{product.price}</p>
      <p>quantity:{product.quantity}</p>
      <p>description:{product.description}</p>  
      {product.productImage && (<img src={product.productImage} alt="product" style={{ width: "200px" ,height:"200px"}} />)} 
    </div>
  )
}

export default ProductDetailsUi