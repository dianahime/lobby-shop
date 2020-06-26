import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage.js'
import ProductPage from './pages/ProductPage.js'
import ProfilePage from './pages/ProfilePage'
import CartPage from './pages/CartPage'
import Navbar from './component/Navbar'
import './App.css'

function App() {
  const [customer, setCustomer] = useState(null)

  return (
    <div>
      {!customer ? (
        <WelcomePage onRegistration={setCustomer} />
      ) : (
        <div>
          <Navbar />
          <Switch>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/profile">
              <ProfilePage customer={customer} />
            </Route>
            <Route path="/">
              <ProductPage customer={customer} />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  )
}

export default App
