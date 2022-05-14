import React from 'react'
import ReadMore from '../HaveaRead/ReadMore'
import './topics.css'

const Card = (props) => {
  const {back} = props
  return (
    <div className='topic-card' >
      <div className='topic-left'>
        <span className='heading'>{props.title}</span>
          <br/>
          <ReadMore>
          {props.content}
        </ReadMore>
      </div>
      <div className='topic-right' style={{ "backgroundImage": "url(" + back + ")"}}></div>
    </div>
  )
}

export default Card
