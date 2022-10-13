import React, { useState }from 'react';
import './Meme.css';
import memeData from '../../memeData';

const Meme = () => {

    const [memeImage, setMemeImage] = useState("")

    function getMemeImage(){
        const memesArray = memeData.data.memes
        const randomNum = Math.floor(Math.random()* memesArray.length)
        setMemeImage(memesArray[randomNum].url)
    }

    return (
        <main className='meme-main'>
            <div className='form'>
                <input type="text" className="form-input"
                placeholder="Top Text"/>
                <input type="text" className="form-input"
                placeholder="Bottom Text"
                />
                <button className='form-btn'
                onClick = {getMemeImage}> 
                Get a new meme image
                </button>
            </div>
            <img src={memeImage} alt="meme"/>
        </main>
    )
}

export default Meme