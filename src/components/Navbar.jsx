import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget.jsx'

import cocoaLogo from "../img/cocoa-logo.png"


function Navbar() {

  return (
    <header className='navbar bg-black text-pink-300'>
      <div>
        <NavLink to="/">
          <img src={ cocoaLogo } className="logo" alt="logo cocoa" />
        </NavLink>
      </div>
      <nav className="navbar__links text-red">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categoria/Labiales">Labiales</NavLink>
        <NavLink to="/categoria/Skincare">Cuidado Facial</NavLink>
        <NavLink to="/categoria/Maquillaje">Maquillaje Facial</NavLink>
        <NavLink to="/cart">
          <CartWidget/>
        </NavLink>
      </nav>
    </header>
      )
    }

export default Navbar;