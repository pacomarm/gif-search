import React, { useEffect, useState } from 'react'

export const GifGrid = ({category}) => {

    const [count, setCount] = useState(0)
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
        console.log(gifs);
    }
    return (
        <>
            <h3>{category}</h3>
            <h5>{count}</h5>
            <button onClick={()=>setCount(count+1)}>Add</button>
        </>
    )
}
