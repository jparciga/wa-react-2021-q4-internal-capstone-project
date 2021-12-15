import { useState } from 'react';
import { Wrapper, SliderItem, SliderContainer, Image, PrevControl, NextControl } from './Slider.styles';

export default function Slider({ entries }) {
    const [current, setCurrent] = useState(0);
    const last = entries.length - 1;

    const previousSlide = () => setCurrent((pos) => Math.max(0, pos - 1));  
    const nextSlide = () => setCurrent((pos) => Math.min(last, pos + 1));

    return (
        entries.length === 0 ? null :
        <Wrapper>
            <SliderContainer>
                {entries.map((imageProps, index) => 
                <SliderItem key={index} hidden={index !== current}>
                    <Image {...imageProps} />
                </SliderItem>
                )}
            </SliderContainer>
            {entries.length > 1 &&
            <>
                <PrevControl hidden={current === 0} onClick={previousSlide} />
                <NextControl hidden={current === last} onClick={nextSlide} />
            </>}
        </Wrapper>
    );
}