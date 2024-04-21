import { NavLink } from "react-router-dom"

/**
 * @param {string} to - The destination URL.
 * @param {string} children - The text content of the button.
 */

export const NavbarButton = ({ to, view }) => {
    return (
        <NavLink className='text-black bg-white hover:bg-customOrange transition-all duration-300' to={to}>{view}</NavLink>
    )
}
