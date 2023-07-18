import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget.jsx'


function Navbar() {

  return (
    <header className='navbar'>
      <div>
        <NavLink to="/">
          <img src="src/img/cocoa-logo.png" className="logo" alt="" />
        </NavLink>
      </div>
      <nav className="navbar__links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categoria/Labiales">Labiales</NavLink>
        <NavLink to="/categoria/Cuidado facial">Cuidado Facial</NavLink>
        <NavLink to="/categoria/Maquillaje facial">Maquillaje Facial</NavLink>
        <NavLink to="/carrito">
          <CartWidget/>
        </NavLink>
      </nav>
    </header>
      )
    }

export default Navbar;