import './Widget.css';
import { useState } from 'react';
import { ReactComponent as LeftArrow } from './icon/double-chevron-left.svg'

export default function Slider({ entries }) {
    const [current, setCurrent] = useState(0);
    const last = entries.length - 1;

    return (
        entries.length === 0 ? null :
        <div className="slider-wrapper">
            <ul className="slider">
                {entries.map(({id, data: {main_image: image, title}}, index) => 
                <li key={id} className={index === current ? "" : "hidden"}>
                    <img className="slider-image" src={image.url} alt={image.alt} title={title} />
                </li>
                )}
            </ul>
            {entries.length === 1 ? null :
            <>
                <span className={`${current === 0 ? "hidden " : ""}slider-control previous`} onClick={() => setCurrent((pos) => Math.max(0, pos - 1))}><LeftArrow /></span>
                <span className={`${current === last ? "hidden " : ""}slider-control next`} onClick={() => setCurrent((pos) => Math.min(last, pos + 1))}><LeftArrow style={{transform: "rotate(180deg)"}} /></span>
            </>}
        </div>
    );
}