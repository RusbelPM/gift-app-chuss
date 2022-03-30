import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

const [inputValue, setInputValue] = useState("")

   const hunter = (e )=>{ 
   setInputValue(e.target.value)}

   const submit = (e)=>{
       e.preventDefault();
       if(inputValue.trim().length>0){
        setCategories(Category => [inputValue,...Category,])
        setInputValue("")
       }
    //    console.log("submit hecho")
  
    

   }
  return (

        <form onSubmit={submit}>


        <input
        type="text"
        value={inputValue}
        onChange={hunter}
        />

        </form>

  )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired

}