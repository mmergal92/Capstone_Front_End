import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const Sidebar = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiFillInfoCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Client',
        path: '/client',
        icon: <AiIcons.AiFillProject />,
        cName: 'nav-text'
    },
    {
        title: 'Admin',
        path: '/admin',
        icon: <AiIcons.AiFillProject />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <AiIcons.AiFillInfoCircle />,
        cName: 'nav-text'
    }
]

export default Sidebar;