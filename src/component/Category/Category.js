import React from 'react'
import Categories from "../../Data/Category.json";
import Card from './Card';

const Category = () => {
    return (
        <div className='category'>
            <div style={{ "fontSize": "x-large", "fontWeight": "500" }}>CATEGORIES</div>
            <div className='showcat'>
                {Categories.map((category, i) => <Card name={category.name} image={category.color}/>)}
            </div>
        </div>
    )
}

export default Category