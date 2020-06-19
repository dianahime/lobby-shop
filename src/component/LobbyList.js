import React from 'react'

export default function LobbyList({ lobbyists }) {
  return (
    <ul>
      {lobbyists.map((lobbyist) => (
        <li key={lobbyist.name}>
          {lobbyist.name}, Preis: {lobbyist.price}
        </li>
      ))}
    </ul>
  )
}
