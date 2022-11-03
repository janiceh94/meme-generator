import React, { useState }from 'react';
import './Meme.css';
import memeData from '../../memeData';

const Meme = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/wxica.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memeData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNum = Math.floor(Math.random()* memesArray.length)
        const url = memesArray[randomNum].url
        setMeme(prevMeme => ({ 
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main className='meme-main'>
            <div className='form'>
                <input 
                    type="text"      className="form-input"
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    className="form-input"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className='form-btn'
                    onClick = {getMemeImage}
                > 
                Get a new meme image
                </button>
            </div>
            <div className='meme'>
                <img className = 'meme-image' src={meme.randomImg} alt="meme"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme