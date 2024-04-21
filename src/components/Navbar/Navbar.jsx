import { NavLink } from "react-router-dom"
import { NavbarLink } from './NavbarLink'
import { NavbarButton } from "./NavbarButton"
import { Sidebar } from "./Sidebar"
import { useState } from "react"

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className='flex justify-between items-center w-11/12 rounded-md fixed bg-black px-4 md:px-6 py-4'>
            <nav className={`hidden lg:flex justify-start items-center gap-2 w-4/12 ${menuOpen ? 'hidden' : ''}`}>
                <NavbarLink to='/home' view='Home'></NavbarLink>
                <NavbarLink to='/services' view='Services'></NavbarLink>
                <NavbarLink to='/dashboard' view='Dashboard'></NavbarLink>
                <NavbarLink to='/services-listing' view='Service Listing'></NavbarLink>
            </nav>

            <button className="lg:hidden" onClick={toggleMenu}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <NavLink to='/home' className="w-1/4 md:w-1/2 lg:w-4/12 flex justify-start items-center lg:justify-center">
                <img className="w-full md:w-2/6 lg:w-3/12" src="./logo.png" alt="Logbiz Logo" title='Logbiz Logo' />
            </NavLink>

            <nav className={`flex justify-end items-center gap-2 w-3/4 md:w-1/2 lg:w-4/12 ${menuOpen ? 'hidden' : ''}`}>
                <NavbarButton to='/contact' view='Contact us'></NavbarButton>
                <NavbarButton to='/login' view='Sign up/login'></NavbarButton>
            </nav>

            <Sidebar isOpen={menuOpen} onClose={toggleMenu} />
        </header>
    )
}
