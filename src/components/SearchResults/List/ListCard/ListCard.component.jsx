import React from 'react';

const ListCardComponent = ({className, data: { id, url, name, category, price, shortDescription }}) => {
    return (
        <div className={className}>
            <img src={url} alt="haha"></img>
            <div className="list-card-data">
                 <h4>{name}</h4>
                <span>{category}</span>
                <span>{`$${price}`}</span>
                <p>{shortDescription}</p>
            </div>
            <input className="addToCart" type="submit" value="Add to Cart"></input>
        </div>
    )
}

export default ListCardComponent;