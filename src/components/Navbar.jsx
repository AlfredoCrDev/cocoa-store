import CartWidget from './CartWidget.jsx'


function Navbar() {

  return (
    <header className='navbar'>
      <div>
        <img src="src\img\cocoa-logo.png" className="logo" alt="" />
      </div>
      <nav className="navbar__links">
        <a href="">Inicio</a>
        <a href="">Catalogo</a>
        <a href="">Contacto</a>
        <CartWidget/>
      </nav>
    </header>
      )
    }

export default Navbar;