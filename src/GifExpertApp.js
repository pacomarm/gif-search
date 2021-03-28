import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Lebron James']);

    return (
        <>
            <h2>Hey</h2>
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