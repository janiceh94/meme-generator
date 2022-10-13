import React from 'react';
import './Meme.css';
import memeData from '../../memeData';

const Meme = () => {
    return (
        <main className='meme-main'>
            <div className='form'>
                <input type="text" className="form-input"
                placeholder="Top Text"/>
                <input type="text" className="form-input"
                placeholder="Bottom Text"
                />
                <button className='form-btn'> Get a new meme image</button>
            </div>
        </main>
    )
}

export default Meme