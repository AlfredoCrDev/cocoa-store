import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget.jsx'

import cocoaLogo from "../img/cocoa-logo.png"


function Navbar() {

  return (
    <header className='navbar'>
      <div>
        <NavLink to="/">
          <img src={ cocoaLogo } className="logo" alt="logo cocoa" />
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