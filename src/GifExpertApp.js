import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    //const categorias = ['One Punch', 'Jujutsu', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Jujutsu'])

    //const handleAdd = () =>{
    //setCategories ( [...categories,'HunterXHunter'] );
    //}
    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories} categories={categories} />

            <hr />

            <ol>
                {
                    categories.map(category => (
                       <GifGrid 
                        key= {category}
                        category= {category} />
                    ))

                }

            </ol>
        </>


    )
}
