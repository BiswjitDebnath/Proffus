import React from 'react'
import Card from './Card'
import './topics.css'
import Cantmiss from '../../Data/Cantmiss.json'

const Topics = () => {
  return (
    <div className='topics'>
        <span className='heading'>TOPICS YOU CAN'T MISS</span>
      {Cantmiss.map((miss, i) => <Card title={miss.title} content={miss.content} id={`${i}r`} back={miss.background}/>)}
    </div>
  )
}

export default Topics