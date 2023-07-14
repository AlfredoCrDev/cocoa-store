import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <ItemListContainer greeting="Soy un prop enviado desde mi padre"/>
      
    </BrowserRouter>
  )
}

export default App
