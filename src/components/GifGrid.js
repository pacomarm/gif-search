import React, { useEffect, useState } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);
    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //     getGifs(category)
    //         .then(imgs=>setImages(imgs));
    // }, [category]);

    return (
        <>
            <h3>{category}</h3>
            {loading && <h4>Loading....</h4>}
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
