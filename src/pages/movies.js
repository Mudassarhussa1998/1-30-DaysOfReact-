import React from 'react';

export default function Movies({ collection }) {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", padding: "20px" }}>
      {collection.map((item, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "10px", width: "200px", textAlign: "center", borderRadius: "10px" }}>
          <h1>{item.Movies}</h1>
          <p>Rating: {item.rating}</p>
          <img
            src={item.image}
            alt={item.Movies}
            style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      ))}
    </div>
  );
}
