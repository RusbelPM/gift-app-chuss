import { GifGreItem } from './GifGreItem';
import React from 'react';
import { useFechtGifs } from '../hooks/useFechtGifs';


export const GifGri = ({ Category }) => {
  const { Data:images,loader} = useFechtGifs(Category);
   console.log(loader)
  
    
  return (
    <>
    <h3 className="lig">{Category}</h3>
    <div className="card-gid">
        {
          loader && <h2>Cargando....</h2>
        }
        {
          images.map( img => (
              <GifGreItem 
              key ={img.id}
              // img ={img} .. primer ejemplo
              {...img}   //*segundo ejemplo
              />
          ))
        }
       

    </div>
    </>
  )
}

