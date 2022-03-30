import { useEffect, useState } from "react"
import { GetGifs } from "../helpers/GetGifs"



export const useFechtGifs = (Category) => {
    const [loading, setloading] = useState({

       Data: [],
       loader: true
    })
    useEffect(()=>{

        GetGifs(Category).then(img => {
            setTimeout(() => {
                console.log(img)
                setloading({
                    Data: img,
                    loader: false
                })
            }, 3000);
        })



    },[Category])
   
  return loading;
}












