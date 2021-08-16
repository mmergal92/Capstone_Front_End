import React, {useState} from "react";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Sidebar from './Sidebar'
import { IconContext } from 'react-icons'

// Components

const Nav = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: '#f5f3ec'}}>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick = {showSidebar}/>
            </Link>
            <Link to="/" className="homenav">
                <h4>HOME</h4>
            </Link>
            <Link to="/about" className="aboutnav">
                <h4>ABOUT</h4>
            </Link>
            <Link to="/client" className="clientnav">
                <h4>CLIENTS</h4>
            </Link>
            <Link to="/admin" className="adminnav">
                <h4>ADMIN</h4>
            </Link>
            <Link>
            {localStorage.getItem('sessionEmail') === null ? <Link to = "/login" className="loginnav">
                <h4>LOGIN</h4>
            </Link>: ''} 
            </Link>
            <Link>
            {localStorage.getItem('sessionEmail') !== null ? <Link to = "/login" className="loginnav">
                <h4>LOGOUT</h4>
            </Link>: ''}
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick = {showSidebar}>
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {Sidebar.map((item, index) => {
                    return (
                        <li key = {index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            </nav>
            </IconContext.Provider>
    </>
    )
}
export default Nav;
