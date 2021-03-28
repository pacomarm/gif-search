import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async(params) => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Lebron&api_key=fiUKUtv3J5n96ix8PK4C5Ec55u18ZWjC&limit=10';
        const res = await fetch(url)
        const {data} = await res.json();
        const gifs = data.map( img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        });
        setImages(gifs);
    }
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                <ol>
                    {
                        images.map(gif => (
                            <GifGridItem 
                                key={gif.id} 
                                {...gif}
                            />
                        ))
                    }
                </ol>
            </div>
        </>
    )
}
