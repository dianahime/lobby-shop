import React, { useState } from 'react'
import CustomerRegistration from '../component/CustomerRegistration.js'
import styled from 'styled-components'

function WelcomePage({ onRegistration }) {
  const [isFormVisible, setIsFormVisible] = useState(false)
  return (
    <WelcomePageContainer>
      <div className="welcome-card">
        <h1>
          {!isFormVisible
            ? 'I take you to the Lobby Shop'
            : 'Zur Gewährung des Zugangs ist die Eingabe ihrer Kontaktinfomation erforderlich.'}
        </h1>
        {!isFormVisible && (
          <button
            className="welcome-button"
            onClick={() => setIsFormVisible(true)}
          >
            Let's go!
          </button>
        )}
        {isFormVisible && (
          <CustomerRegistration onRegistration={onRegistration} />
        )}
      </div>
    </WelcomePageContainer>
  )
}

export default WelcomePage

const WelcomePageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .welcome-card {
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: var(--card);
    padding: 15px;
    border-radius: 10px;
  }

  .welcome-text {
    font-size: 1.5rem;
  }

  h1 {
    font-size: 1.3rem;
    margin-bottom: 20px;
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
