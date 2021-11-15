import React from 'react'
import { FeatureProductsData } from './FeatureProductsData';

const MainContent = () => {
    const listItems = FeatureProductsData.map((item) =>
        <div className="card">
            <div className="card_img">
                <img src={item.image} alt={item.alt}/>
            </div>
            <div className="card_header">
                <h2>{item.name}</h2>
                <p>{item.category}</p>
                <p className="price">$ {item.price}</p>
            </div>
        </div>

    );
    return (
        <div className="main_content">
            {listItems}
        </div>
    )
}
export default MainContent;
