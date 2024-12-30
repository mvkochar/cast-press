import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


const Header = () => {
    return (
        <header className="header d-f jc-sb align-center">
           <div><img src="/images/logo.svg" alt="Logo" /></div>
           <nav>
            <ul className="header-nav d-f align-center">
                <li className="header-nav-item drop-item d-f">
                    <a href="">Episodes</a>
                    <button type="button" className='btn-clear d-b'><img src="/images/drop-icon.png" alt="drop" /></button>
                </li>
                <li className="header-nav-item"><a href="">Blog</a></li>
                <li className="header-nav-item"><a href="">Packages</a></li>
                <li className="header-nav-item"><a href="">Contact</a></li>
                <li className="header-nav-item nav-item-donate"><a href="">Donate</a></li>
                <li><button className='btn-clear d-b'><img src="/images/search.png" alt="search" /></button></li>
            </ul>
           </nav>
        </header>
    )
}

export default Header