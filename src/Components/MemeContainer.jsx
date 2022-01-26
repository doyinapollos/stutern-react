import React from "react";
import MemesData from "./MemesData";

export default function MemeContainer() {
    //const [memeImage, setMemeImage] = React.useState("")
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(MemesData)

    function handleClick() {
        const memesArray = allMemeImages.data.memes
        const randomIndex = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomIndex].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
            randomImage: url
           }
        })
      
    }


    return (
        <div className='meme--container'>
            <div className="input--div">
                <input type= "text" placeholder="Top Text" />
                <input type= "text" placeholder="Botom Text" />

            </div>
            <button onClick={handleClick} className="get--meme--btn">Get a new meme image</button>
            <h2 className="top--text">Change Top Text</h2>
            
            <div className="meme--display--div">
                <img className="meme--photo" src={meme.randomImage} />
            </div>

            <h2 className="bottom--text">Change Bottom Text</h2>



        </div> 
    )
}