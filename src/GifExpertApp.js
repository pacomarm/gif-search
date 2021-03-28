import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    return (
        <>
            <h1>Look for a Meme</h1>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category =>
                        <GifGrid 
                            key={category}
                            category={category}
                        />    
                    )
                }
            </ol>
        </>
    ) 
}