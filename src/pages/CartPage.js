import React from 'react'
import styled from 'styled-components'

export default function CartPage({ cartItems }) {
  return (
    <CartPageContainer>
      <h1>Einkaufswagen</h1>
      <ol>
        {cartItems.map((lobbyist) => (
          <li key={lobbyist.name}>{lobbyist.name}</li>
        ))}
      </ol>

      <button>Bestellen</button>
    </CartPageContainer>
  )
}

const CartPageContainer = styled.div`
  h2 {
    font-size: 1rem;
  }
  button {
    font-size: 1.1rem;
    border: none;
    color: var(--base);
    background-color: var(--text);
    padding: 10px;
    border-radius: 3px;
  }
`
