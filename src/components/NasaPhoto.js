import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

const apiKey = process.env.REACT_APP_NASA_API_KEY;

const NasaPhoto = () => {

    const [ photoData, setPhotoData ] = useState(null);

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => setPhotoData(data));
    }, []);


    return photoData ? (
        <>
            <NavBar />
            <div className="nasa-photo">
                {photoData.media_type === "image" ?
                (<img src={photoData.url} alt={photoData.title} className="photo" />) :
                (<iframe title="spase-video" src={photoData.url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen className="photo" />)}
                <div class="info">
                    <h1>{photoData.title}</h1>
                    <p className="date">{photoData.date}</p>
                    <p className="explanation">{photoData.explanation}</p>
                </div>
            </div>
        </>
    ) : (<></>);
};

export default NasaPhoto;