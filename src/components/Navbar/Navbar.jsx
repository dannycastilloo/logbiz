import { NavbarLink } from "./NavbarLink"
import { NavbarButton } from "./NavbarButton"

export const Navbar = () => {
    return (
        <header className='flex justify-between items-center w-11/12 rounded-md fixed bg-black px-6 py-2'>
            <nav className="flex items-center gap-5">
                <NavbarLink to='/home' view='Home'></NavbarLink>
                <NavbarLink to='/services' view='Services'></NavbarLink>
                <NavbarLink to='/dashboard' view='Dashboard'></NavbarLink>
                <NavbarLink to='/service-listing' view='Service Listing'></NavbarLink>
            </nav>
            <img src="./logo.png" alt="Logbiz Logo" title='Logbiz Logo' />
            <nav className="flex items-center gap-5">
                <NavbarButton to='/contact' view='Contact us'></NavbarButton>
                <NavbarButton to='/login' view='Sign up/login'></NavbarButton>
            </nav>
        </header>
    )
}
