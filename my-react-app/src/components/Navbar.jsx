import React from 'react'
import "./Navbar.css"
import Cart from '../../Cart'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigation  = useNavigate();
  function cartFunction(){
    navigation('/cart')

  }
  return (
    <header>
      <nav className="site-nav">
        <div className='nav-left'>
          <span className='logo'><img src="https://cdn-icons-png.flaticon.com/128/825/825479.png" alt="logo" /></span>
          <h3>Eaaasy buy</h3>
        </div>

        {/* hidden checkbox controls the CSS-only toggle for small screens */}
        <input id="nav-toggle" className="nav-toggle" type="checkbox" aria-label="Toggle navigation" />
        <label className="nav-toggle-label" htmlFor="nav-toggle" aria-hidden="true">
          <span className="bar" />
        </label>

        <div className='nav-right'>
          <ul>
            <li tabIndex={0}><img onClick={cartFunction} style={{color: "white"}} src="https://cdn-icons-png.flaticon.com/128/428/428173.png" alt="cart" /></li>
            <li tabIndex={0}><img src="https://cdn-icons-png.flaticon.com/128/16872/16872260.png" alt="search" /></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
