import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


const Header = () => {
    return (
        <header className="header d-f jc-sb align-center">
           <div><Link to="/"><img src="/images/logo.svg" alt="Logo" /></Link></div>
           <nav>
            <ul className="header-nav d-f align-center">
                <li className="header-nav-item drop-item d-f">
                    <a href="">Episodes</a>
                    <button type="button" className='btn-clear d-b'><img src="/images/drop-icon.png" alt="drop" /></button>
                </li>
                <li className="header-nav-item"><Link to="/blog">Blog</Link></li>
                <li className="header-nav-item"><Link to="/about">About</Link></li>
                <li className="header-nav-item"><Link to="/contact">Contact</Link></li>
                <li className="header-nav-item nav-item-donate"><Link to="/donate">Donate</Link></li>
                <li><button className='btn-clear d-b'><img src="/images/search.png" alt="search" /></button></li>
            </ul>
           </nav>
        </header>
    )
}

export default Header