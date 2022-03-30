import React from 'react'

export const GifGreItem = ({id, title,url}) => {
    console.log({title,url})
  return (
    <div className="stylp animate__bounce__delay-1s">
        <img src={url} alt={title}/>
            <p>{title}</p>
    </div>
  )
}
