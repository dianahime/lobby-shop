import React, { useState } from 'react'
import axios from 'axios'

export default function CustomerRegistration({ onSubmit }) {
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
          onSubmit(name)
        })
        .catch((error) => {
          alert('Sie sind hier nicht willkommen.')
          console.log(error)
        })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => setName(event.target.value)}
        value={name}
        type="text"
        placeholder="Ihr werter Name"
      />
      <input
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        type="email"
        placeholder="Ihre elektronische Adresse"
      />
      <button>Jetzt betreten</button>
    </form>
  )
}
