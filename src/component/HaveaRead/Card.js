import React from 'react'
import './havearead.css'
import ReadMore from './ReadMore'

const Card = (props) => {
    return (
        <div className='read-card'>
            <div className='title'>{props.title}</div>
            <br />
            <ReadMore>
            {props.content} 
            </ReadMore>
        </div>
    )
}

export default Card