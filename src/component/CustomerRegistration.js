import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default function CustomerRegistration({ onRegistration }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name && email) {
      axios
        .post('http://localhost:2020/customers', { name, email })
        .then(() => {
          setName('')
          setEmail('')
          alert('Danke für Ihre Daten. Wir werden sie demnächst verkaufen :P')
          onRegistration({ name, email })
        })
        .catch((error) => {
          alert('Sie sind hier nicht willkommen.')
          console.log(error)
        })
    }
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="Ihr werter Name"
      />
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        placeholder="Ihre elektronische Adresse"
      />
      <button>Jetzt betreten</button>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  input {
    font-size: 1.2rem;
    margin-bottom: 15px;
    border: none;
    border-radius: 3px;
    padding: 5px;
    width: 80%;
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
