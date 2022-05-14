import React, { Children, useState } from 'react'
import './havearead.css'

const ReadMore = ({children}) => {
    const [readMore, setReadMore] = useState("READ MORE >")
    const [isReadmore, setIsReadmore] = useState(true)
    function togleReadmore() {
        setIsReadmore(prevState=> !prevState)
        if (readMore === "READ MORE >")
            {
                setReadMore("READ LESS >")
            }
        else
            {
                setReadMore("READ MORE >")
            }
    }
    console.log(isReadmore);
  return (
    <div className='readdesign'>
        {isReadmore? children.substr(0,150) : children}
          <span className='r-btn' onClick={togleReadmore}><b>{readMore}</b></span>
    </div>
  )
}

export default ReadMore