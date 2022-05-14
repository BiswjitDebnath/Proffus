import React from 'react'
import './faqs.css';

const Card = (props) => {
  return (
      <div class="accordion" id="accordionExample">
          <div class="accordion-item" style={{ borderRadius: "10px" }}>
              <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.id}`} aria-expanded="true" aria-controls="collapseOne" >
                      {props.name}
                  </button>
              </h2>
              <div id={`collapse${props.id}`} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                      {props.image}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Card