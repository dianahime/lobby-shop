import React, { useState } from 'react'
import WelcomePage from './pages/WelcomePage.js'
import ProductPage from './pages/ProductPage.js'

import './App.css'

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
