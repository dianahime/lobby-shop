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
  const [cartItems, setCartItems] = useState([])
  return (
    <div>
      {!customer ? (
        <WelcomePage onRegistration={setCustomer} />
      ) : (
        <div>
          <Navbar />
          <Switch>
            <Route path="/cart">
              <CartPage cartItems={cartItems} />
            </Route>
            <Route path="/profile">
              <ProfilePage customer={customer} />
            </Route>
            <Route path="/">
              <ProductPage onAddToCart={handleAddToCart} customer={customer} />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  )
  function handleAddToCart(lobbyist) {
    setCartItems([...cartItems, lobbyist])
  }
}

export default App
