import React from 'react'
import './glance.css'

const Glance = () => {
  return (
    <div className='glance'>
      <span style={{marginBottom: "10vh"}}>A GLANCE AT OUR PRODUCT</span>
          <br/>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jsvnDRKZybE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
    </div>
  )
}

export default Glance