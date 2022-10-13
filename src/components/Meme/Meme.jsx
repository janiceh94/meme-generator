import React from 'react';
import './Meme.css';

const Meme = () => {
    return (
        <main className='meme-main'>
            <form className='form'>
                <input type="text" className="form-input"
                placeholder="Top Text"/>
                <input type="text" className="form-input"
                placeholder="Bottom Text"
                />
                <button className='form-btn'> Get a new meme image</button>
            </form>
        </main>
    )
}

export default Meme