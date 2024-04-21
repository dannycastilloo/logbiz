import { NavbarLink } from "./NavbarLink"
import { NavbarButton } from "./NavbarButton"

export const Sidebar = ({ isOpen, onClose }) => {
    return (
        <aside className={`fixed top-0 right-0 w-1/2 h-full bg-black ${isOpen ? 'flex flex-col justify-center items-center' : 'hidden'}`}>
            <NavbarLink to='/home' view='Home' onClick={onClose}></NavbarLink>
            <NavbarLink to='/services' view='Services' onClick={onClose}></NavbarLink>
            <NavbarLink to='/dashboard' view='Dashboard' onClick={onClose}></NavbarLink>
            <NavbarLink to='/services-listing' view='Service Listing' onClick={onClose}></NavbarLink>
            <NavbarButton to='/contact' view='Contact us' onClick={onClose}></NavbarButton>
            <NavbarButton to='/login' view='Sign up/login' onClick={onClose}></NavbarButton>
        </aside>
    )
}