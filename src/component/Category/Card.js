import React from 'react'
import './category.css'

const Card = (props) => {
    // const image = require(`${props.image}`);
  return (
        <div className='card' >
          <div style={{ backgroundImage: `url(${props.image})`}} className="image"></div>
          <div style={{paddingTop: "2vh"}}>{props.name}</div>
    </div>
  )
}
// style={{ backgroundImage: `url(${image})` }}

export default Card