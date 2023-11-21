import { NavLink } from 'react-router-dom'

function NavBar() {

    return (
    <nav className="NavBar">
        <ul className="menu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">LoginForm</NavLink></li>
        <li><NavLink to="/Currency">Currency Converter</NavLink></li>
        </ul>
    </nav>
    )
}

export default NavBar