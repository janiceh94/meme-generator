import React from 'react';
import './Header.css';
import Troll from '../../images/Troll Face.png'

const Header = () => {
    return (
        <header className = 'header'>
            <img className = 'header-image' src = {Troll} alt = "logo"/>
            <h1 className = 'header-title'>Header</h1>
        </header> 
    )
}

export default Header