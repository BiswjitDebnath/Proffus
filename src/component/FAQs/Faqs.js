import React from 'react'
import Card from'./Card'
import Faques from '../../Data/Faques.json'
import './faqs.css';

const Faqs = () => {
    return (
        <div className='faqs'>
            <span>Faqs</span>
            <br/>
            {Faques.map((faq, i) => <Card name={faq.que} image={faq.ans} id={i}/>)}
        </div>
    )
}

export default Faqs