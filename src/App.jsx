import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Soy un prop enviado desde mi padre"/>
    </>
  )
}

export default App
