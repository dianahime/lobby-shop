import React, { useState } from 'react'
import CustomerRegistration from '../component/CustomerRegistration.js'

function WelcomePage({ onRegistration }) {
  const [isFormVisible, setIsFormVisible] = useState(false)
  return (
    <div className="welcome">
      <div className="welcome-card">
        <h1>
          {!isFormVisible
            ? 'I take you to the Lobby Shop'
            : 'Zu Gewährung des Zugangs ist die Eingabe ihrer Kontaktinfomation erforderlich.'}
        </h1>
        {isFormVisible && <CustomerRegistration onSubmit={onRegistration} />}
        {!isFormVisible && (
          <button
            className="welcome-button"
            onClick={() => setIsFormVisible(true)}
          >
            Let's go!
          </button>
        )}
      </div>
    </div>
  )
}

export default WelcomePage
