import React, { useState, useEffect } from 'react';
import './Meme.css';
//import memeData from '../../memeData';

const Meme = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/wxica.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
        const randomNum = Math.floor(Math.random()* allMemes.length)
        const url = allMemes[randomNum].url
        setMeme(prevMeme => ({ 
            ...prevMeme,
            randomImg: url
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