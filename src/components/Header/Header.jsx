import React from 'react'
import Navbar from './Navbar'
import DesktopMenu from './Category/DesktopMenu'

const Header = () => {
  return (
    <header>
        <Navbar />
        <DesktopMenu/>      
    </header>
  )
}

export default Header
