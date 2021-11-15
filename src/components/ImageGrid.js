import React from 'react';

const imageStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover"
}
const blockStyle = {
    display: "inline-block"
}

const ImageGrid = ({categories}) => {

    const listItems = categories.map((category) =>
        <div key={category.id} style={blockStyle}>
            {category.data.name}<br />
            <img src={category.data.main_image.url} alt={category.data.main_image.alt} style={imageStyle}/>
        </div>
    );

    return (
        <div>{listItems}</div>
    );
}

export default ImageGrid;
