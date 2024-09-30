


// import React from 'react';

// const ReadAllUserUi = ({ users, handleView, handleDelete, handleUpdate }) => {
//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       {users.map((item, i) => {
//         return (
//           <div
//             key={i}
//             style={{
//               border: "1px solid #FF6347",
//               borderRadius: "10px",
//               padding: "15px",
//               backgroundColor: "#fff",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               transition: "transform 0.3s ease",
//               textAlign: "center",
//             }}
//           >
//             <p style={{ fontSize: "18px", fontWeight: "bold", margin: "0 0 10px 0" }}>
//               Name: {item.name}
//             </p>
//             <p style={{ margin: "0 0 20px 0" }}>Email: {item.email}</p>

//             <div style={{ display: "flex", gap: "10px" }}>
//               <button
//                 onClick={handleView(item._id)}
//                 style={{
//                   padding: "10px 15px",
//                   backgroundColor: "#4CAF50",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s ease",
//                 }}
//                 onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
//                 onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
//               >
//                 View
//               </button>
//               <button
//                 onClick={handleDelete(item._id)}
//                 style={{
//                   padding: "10px 15px",
//                   backgroundColor: "#f44336",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s ease",
//                 }}
//                 onMouseOver={(e) => (e.target.style.backgroundColor = "#d32f2f")}
//                 onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={handleUpdate(item._id)}
//                 style={{
//                   padding: "10px 15px",
//                   backgroundColor: "#008CBA",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s ease",
//                 }}
//                 onMouseOver={(e) => (e.target.style.backgroundColor = "#007bb5")}
//                 onMouseOut={(e) => (e.target.style.backgroundColor = "#008CBA")}
//               >
//                 Update
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ReadAllUserUi;



import React from 'react';

const ReadAllUserUi = ({ users, handleView, handleDelete, handleUpdate }) => {
  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {users.map((item, i) => {
          return (
            <div
              key={i}
              style={{
                border: "1px solid #4CAF50",
                borderRadius: "10px",
                padding: "15px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <p style={{ fontSize: "18px", fontWeight: "bold", margin: "0 0 10px 0", color: "#333" }}>
                Name: {item.name}
              </p>
              <p style={{ margin: "0 0 20px 0", color: "#666" }}>Email: {item.email}</p>

              <div style={{ display: "flex", gap: "10px", justifyContent: "space-between" }}>
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
                    flex: "1",
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
                    flex: "1",
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
                    flex: "1",
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

export default ReadAllUserUi;

