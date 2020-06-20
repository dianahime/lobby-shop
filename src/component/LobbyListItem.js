import React from 'react'

export default function LobbyListItem({ lobbyist }) {
  return (
    <li>
      <img src={lobbyist.imageURL}></img>
      <div className="headline-container">
        <div className="lobbyist-name">{lobbyist.name}</div>
        <div className="lobbyist-price">{lobbyist.price}</div>
      </div>
      <div className="lobbyist-description">{lobbyist.description}</div>
    </li>
  )
}
