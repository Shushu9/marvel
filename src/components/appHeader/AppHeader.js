import { Link, NavLink } from 'react-router-dom'
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/marvel/build/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li>
                        <NavLink
                            end
                            style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
                            to="/marvel/build/">
                            Characters
                        </NavLink>
                    </li>
                    /
                    <li>
                        <NavLink
                            end
                            style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
                            to="/marvel/build/comics">
                            Comics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;