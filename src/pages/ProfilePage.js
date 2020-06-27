import React from 'react'
import styled from 'styled-components'

export default function ProfilePage({ customer }) {
  return (
    <ProfilePageContainer>
      <h1> Hallo {customer.name}</h1>

      <div>
        <h2>Ihre E-Mail Adresse:</h2>
        <a href="mailto:{customer.email}">{customer.email}</a>
      </div>

      <address>
        <h2>Ihre Adresse</h2>
        {customer.name}
        <p>Mustermann Str. 2</p>
        <p>Musterfeld 33 333</p>
      </address>
      <div>
        <h2>Ihre Telefonnummer:</h2>
        <a href="tel:+6494461709">+6494461709</a>
      </div>
    </ProfilePageContainer>
  )
}

const ProfilePageContainer = styled.div`
  h2 {
    font-size: 1rem;
  }
`
