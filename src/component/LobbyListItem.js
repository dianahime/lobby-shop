import React from 'react'

export default function LobbyListItem({ lobbyists }) {
  return (
    <ul>
      {lobbyists.map((lobbyist) => (
        <li key={lobbyist.name}>
          Name: {lobbyist.name}, Preis: {lobbyist.price}, Kurzprofil:{' '}
          {lobbyist.description}
        </li>
      ))}
    </ul>
  )
}
