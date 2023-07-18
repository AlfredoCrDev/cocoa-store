import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'

function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/:id" element={<ItemListContainer/>} />
          <Route path="/producto/:id" element={<ItemDetailContainer/>} />
        </Routes>
      </main>
      
    </BrowserRouter>
  )
}

export default App
