import React from 'react'
import NavbarLeft from './NavbarItem/NavbarLeft'
import NavbarRight from './NavbarItem/NavbarRight'

function Navbar() {
  return (
    <div className='e-commerce__container__navbar'>
        <NavbarLeft/>
        <NavbarRight/>
    </div>
  )
}

export default Navbar