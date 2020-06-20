import React, { useState } from 'react'
import axios from 'axios'

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
          onRegistration(name)
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
    </form>
  )
}
