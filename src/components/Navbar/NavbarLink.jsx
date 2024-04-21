import { NavLink } from "react-router-dom"

/**
 * @param {string} to - The destination URL.
 * @param {string} children - The text content of the link.
 */

export const NavbarLink = ({ to, view }) => {
    return (
        <NavLink className='text-sm text-white font-medium text-center py-3 px-4 rounded hover:bg-customOrange transition-all duration-300' to={to} title={view}>{view}</NavLink>
    )
}
