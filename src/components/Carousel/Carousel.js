import React, {useState, useEffect} from 'react';
import ButtonSlider from 'components/ButtonSlider/ButtonSlider.style';

const CarouselComponent = ({className, data: { parsedData = [], isLoading }}) => {
    const [xPos, setXpos] = useState(0);
    const [style, setStyle] = useState({transform: `translateX(0px)`, transitionDuration: "0.5s" })

    useEffect(() => {
        setStyle(() => {return {transform: `translateX(${xPos}px)`, transitionDuration: "0.5s" }});
    },[xPos]);

    return (
    <div className={className}>
        <div className="track" style={style}>
            {parsedData.map(({id, url}) => {
                return (
                    <div key={id} id={id} className="card-container">
                        <div className="card"><img src={url} alt="haha"></img> </div>
                    </div>
                );
            })}      
        </div>
        <ButtonSlider moveSlide={() => setXpos(x => x - ((xPos > -600) ? 330 : 0)) } direction="prev"></ButtonSlider>
        <ButtonSlider moveSlide={() => setXpos(x => x + ((xPos <  600) ? 330 : 0))} direction="next"></ButtonSlider>
    </div> );
}

export default CarouselComponent;