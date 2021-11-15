import React from 'react';

const Products = ({products}) => {
    const itemListStyle = {
        margin: "3%"
    }
    const itemsStyle = {
        border: "1px solid #ccc",
        borderRadius: "4px",
    }
    const imageStyle = {
        width: '200px',
        height: '200px'
      };

    const listItems = products.map((product) =>
        <div key={product.id} style={itemsStyle}>
            <p>{product.data.name}</p>
            <p>{product.tags.join(" - ")}</p>
            <img src={product.data.mainimage.url} alt={product.data.mainimage.alt} style={imageStyle} /> <br/>
            <p>${product.data.price}</p>
        </div>
    );
    return (
        <div className="grid" style={itemListStyle}>{listItems}</div>
    );
}

export default Products;
