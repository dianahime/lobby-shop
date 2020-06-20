import React, { useState } from 'react'

import './App.css'
import WelcomePage from './pages/WelcomePage.js'
import ProductPage from './pages/ProductPage.js'

function App() {
  const [customerName, setCustomerName] = useState(null)
  return (
    <div>
      {!customerName ? (
        <WelcomePage onRegistration={setCustomerName} />
      ) : (
        <ProductPage customerName={customerName} />
      )}
    </div>
  )
}

export default App
