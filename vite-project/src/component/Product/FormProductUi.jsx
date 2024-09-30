import axios from "axios";
import React, { forwardRef } from "react";
import { bUrl } from "../../constant";
import { toast } from "react-toastify";

const FormProductUi = ({
  name,
  setName,
  price,
  setPrice,
  quantity,
  setQuantity,
  description,
  setDescription,
  productImage,
  setproductImage,
  handleSubmit,
  buttonName,
},ref) => {
  const handleImage = async (e) => {    
    // console.log(e.target.files[0]);
    let data = new FormData();//syntax
    data.append("file", e.target.files[0]);//syntax
  try {
      let result = await axios({
        url: `${bUrl}/file/single`,
        method: "post",
        data: data,  
      })
      // console.log(result)
      setproductImage(result.data.result)
  } catch (error) {
    toast.error(error.response.data.message)
  }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="price">Price:</label>
            <input
              id="price"
              type="number"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              style={{ width: "100%" }}
            />
          </div>

          <div>
            <label htmlFor="productImage">Product Image:</label>
            <input ref={ref} id="productImage" type="file" onChange={handleImage} />
            { productImage && (<img src={productImage} alt="product" style={{ width: "200px" ,height:"200px"}} />)}
          </div>
        </div>

        <div>
          <button type="submit">{buttonName}</button>
        </div>
      </form>
    </div>
  );
};

export default forwardRef(FormProductUi);
