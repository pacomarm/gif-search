import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs(category)
            .then(imgs=>setImages(imgs));
    }, [category])

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
