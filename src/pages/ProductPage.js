import React from 'react'
import LobbyList from '../component/LobbyList.js'
import styled from 'styled-components'

function ProductPage({ customer, onAddToCart }) {
  return (
    <ProductPageContainer className="product-page">
      <h1 className="welcome-text">Willkommen, {customer.name}</h1>
      <LobbyList onAddToCart={onAddToCart} />
    </ProductPageContainer>
  )
}

export default ProductPage

const ProductPageContainer = styled.div`
  h1 {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
`
