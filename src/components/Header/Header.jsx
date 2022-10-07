import React from 'react';
import Troll from '../../images/Troll Face.png'

const Header = () => {
    return (
        <header className = 'header'>
            <img src = {Troll} alt = "logo"/>
            <h1>Header</h1>
        </header> 
    )
}

export default Header