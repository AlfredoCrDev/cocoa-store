import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import CartProvider from './components/CartProvider.jsx'
import Cart from './components/Cart.jsx'

function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/categoria/:id" element={<ItemListContainer/>} />
            <Route path="/producto/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </main>
        
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
