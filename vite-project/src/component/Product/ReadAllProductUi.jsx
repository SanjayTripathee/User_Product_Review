// import React from 'react'

// const ReadAllProductUi = ({product,handleView,handleDelete,handleUpdate}) => {
//   return (
//     <div>
//       {
//     product.map((item,i)=>{
//       return(
//         <div key={i} style={{border:"1px solid red",margin:"10px",padding:"10px"}}>
//           <p>Name is {item.name}</p>
//           <p>price is {item.price}</p>
//           <p>Quantity is {item.quantity}</p>
//           <p>ProductImage is {item.productImage}</p>

//           <button onClick={handleView(item._id)}>View</button>
//           <button onClick={handleDelete(item._id)}>Delete</button>  
//           <button onClick={handleUpdate(item._id)}>Update</button>  
//         </div>

//       )
//     })
//    }
//     </div>
//   )
// }

// export default ReadAllProductUi



import React from 'react';

const ReadAllProductUi = ({ product, handleView, handleDelete, handleUpdate }) => {
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}>
        {product.map((item, i) => {
          return (
            <div
              key={i}
              style={{
                border: "1px solid #FF6347",
                borderRadius: "10px",
                padding: "15px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                textAlign: "center",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <p style={{ fontSize: "18px", fontWeight: "bold", margin: "0 0 10px 0" }}>
                {item.name}
              </p>
              <p style={{ margin: "0 0 5px 0", color: "#555" }}>Price: ${item.price}</p>
              <p style={{ margin: "0 0 10px 0", color: "#555" }}>Quantity: {item.quantity}</p>
              {/* i dont want to display img at front secton of readAllProduct */}
              {/* <img 
                src={item.productImage} 
                alt={item.name} 
                style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "5px", marginBottom: "15px" }}
              /> */}         

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  onClick={handleView(item._id)}
                  style={{
                    padding: "10px 15px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
                >
                  View
                </button>
                <button
                  onClick={handleDelete(item._id)}
                  style={{
                    padding: "10px 15px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#d32f2f")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
                >
                  Delete
                </button>
                <button
                  onClick={handleUpdate(item._id)}
                  style={{    
                    padding: "10px 15px",
                    backgroundColor: "#008CBA",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#007bb5")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#008CBA")}
                >
                 Update
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReadAllProductUi;
