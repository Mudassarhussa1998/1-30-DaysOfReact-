import React from 'react'

export default function Movies( {Movies , rating , image }) {
  return (
    <div>
      <h1>{Movies}</h1>
      <p>Rating: {rating}</p>
      <img src={image} alt={Movies} />
    </div>
  )
}
