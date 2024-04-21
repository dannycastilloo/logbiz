import { NavLink } from "react-router-dom"

/**
 * @param {string} to - The destination URL.
 * @param {string} children - The text content of the button.
 */

export const NavbarButton = ({ to, view }) => {
    return (
        <NavLink className='text-xs md:text-sm text-black font-bold text-center rounded py-3 px-4 bg-white hover:bg-customOrange transition-all duration-300' to={to} title={view}>{view}</NavLink>
    )
}