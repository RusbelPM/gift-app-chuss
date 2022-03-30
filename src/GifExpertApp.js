import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory';
import { GifGri } from './components/GifGri';



export const GifExpertApp = () => {

    

    const [Categories, setCategories] = useState(['One Push']);
   
    // const fun=() =>{
    //     setCategories([...Categories,"rex"])   ////agregar conponente a un arreglo
        // setCategories(felino => [...felino,gato ])
    // }



  return (
      <>
        <h1><samp className="duo">¡GiftExpert!</samp></h1>
        <AddCategory class="ol"setCategories={setCategories} />
        <hr/>
        
        <ol>
        {Categories.map(Category => (<GifGri 
            key={Category} 
            Category ={Category} />
        ))
        }
        
        </ol>
    </>
  )
}
