import React from 'react'
import styled from 'styled-components'

export default function CartPage() {
  return (
    <CartPageContainer>
      <h1>Einkaufswagen</h1>
      <p>Heir wird die Bestelleung sein.</p>
      <button>Bestellen</button>
    </CartPageContainer>
  )
}

const CartPageContainer = styled.div`
  h2 {
    font-size: 1rem;
  }
`
