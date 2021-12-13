import { useState } from 'react';
import { ReactComponent as LeftArrow } from './icon/double-chevron-left.svg';
import { ReactComponent as RightArrow } from './icon/double-chevron-right.svg';
import styled, { css } from 'styled-components/macro';

//#region Styled Components
const Wrapper = styled.div`    
    width: 100%;
    padding: 0;
    margin: 0;
    position: relative;
    box-sizing: border-box;
`;

const SliderContainer = styled.ul`
    padding: 0;
    margin: auto;
    list-style-type: none;
    display: flex;
    flex-flow: row;
    width: 100%;
    overflow: hidden;
`;

const SliderItem = styled.li`
    flex: 1 0 100%;
    transition: margin 0.5s;
    ${({hidden}) => hidden && css`
    display: none;
    `}
`;

const Image = styled.img`
    max-width: 100vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const controlArrow = css`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    width: 3em;
    height: 10%;
    min-height: 4em;
    top: 45%;
    color: white;
    text-align: center;
    ${({hidden}) => hidden && css`
    visibility: collapse;
    `}
`;

const PrevControl = styled(LeftArrow)`
    ${controlArrow}
    left: 0;
`;

const NextControl = styled(RightArrow)`
    ${controlArrow}
    right: 0;
`;
//#endregion

export default function Slider({ entries }) {
    const [current, setCurrent] = useState(0);
    const last = entries.length - 1;

    const previousSlide = () => setCurrent((pos) => Math.max(0, pos - 1));  
    const nextSlide = () => setCurrent((pos) => Math.min(last, pos + 1));

    return (
        entries.length === 0 ? null :
        <Wrapper>
            <SliderContainer>
                {entries.map(({id, data: {main_image: image, title}}, index) => 
                <SliderItem key={id} hidden={index !== current}>
                    <Image src={image.url} alt={image.alt} title={title} />
                </SliderItem>
                )}
            </SliderContainer>
            {entries.length === 1 ? null :
            <>
                <PrevControl hidden={current === 0} onClick={previousSlide} />
                <NextControl hidden={current === last} onClick={nextSlide} />
            </>}
        </Wrapper>
    );
}