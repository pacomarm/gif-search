import React from 'react'
import { GifGridItem } from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            {category &&<h2 className="animate__animated animate__flash">"{category.toUpperCase()}"</h2>}
            {!category &&<h2 className="animate__animated animate__flash">"RESULTS"</h2>}
            <hr/>
            {loading && <h4>Loading....</h4>}
            <div className="card-grid">
                {
                    images.map(gif => (
                        <GifGridItem 
                            key={gif.id} 
                            {...gif}
                        />
                    ))
                }
            </div>
        </>
    )
}
