import React from 'react'
import Card from './Card'
import Reads from '../../Data/Reads.json'
import './havearead.css';

const HaveaRead = () => {
    return (
        <div className='havearead'>
            <span className='heading'>HAVE A READ</span>
            <br />
            {/* <Card/> */}
            {/* <Card/> */}
            {Reads.map((read, i) => <Card title={read.title} content={read.content} id={`${i}r`} />)}
        </div>
    )
}

export default HaveaRead