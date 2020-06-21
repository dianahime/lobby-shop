import React from 'react'
import LobbyList from '../component/LobbyList.js'

function ProductPage({ customerName }) {
  return (
    <div className="product-page">
      <h1 className="welcome-text">Willkommen, {customerName}</h1>
      <LobbyList />
    </div>
  )
}

export default ProductPage
