import { NavLink } from "react-router-dom";
import { useState } from "react";
import { NavbarLink } from "./NavbarLink";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className='flex justify-between items-center w-11/12 rounded-md fixed bg-black px-6 md:px-8 py-4'>
            {/* Logo */}
            <NavLink to='/home' className="w-1/4 md:w-1/2 lg:w-4/12 flex justify-start items-center lg:justify-center">
                <img className="w-1/2 md:w-2/6 lg:w-3/12" src="./logo.png" alt="Logbiz Logo" title='Logbiz Logo' />
            </NavLink>

            {/* Hamburger Menu Button */}
            <button className="lg:hidden" onClick={toggleMenu}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Sidebar */}
            <Sidebar isOpen={menuOpen} onClose={toggleMenu} />

            {/* Navigation Links (Hidden on Small Devices) */}
            <nav className={`hidden lg:flex justify-start items-center gap-2 w-4/12 ${menuOpen ? 'hidden' : ''}`}>
                <NavbarLink to='/home' view='Home'></NavbarLink>
                <NavbarLink to='/services' view='Services'></NavbarLink>
                <NavbarLink to='/dashboard' view='Dashboard'></NavbarLink>
                <NavbarLink to='/services-listing' view='Service Listing'></NavbarLink>
            </nav>
        </header>
    )
}
