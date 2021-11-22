import { useEffect, useState } from "react";
import { SliderButton, SliderControls } from "./Slider.styled";

export default function Slider({
  contentList,
  autoPlaySeconds = 0,
  startFrom = 0,
}) {
  let [active, setActive] = useState(startFrom);

  useEffect(() => {
    if (autoPlaySeconds > 0) {
      let timerId = setInterval(nextSlide, autoPlaySeconds);
      return () => clearInterval(timerId);
    }
  });

  function nextSlide() {
    setActive(active + 1 === contentList.length ? 0 : active + 1);
  }

  function previousSlide() {
    setActive(active - 1 < 0 ? contentList.length - 1 : active - 1);
  }

  let sliderMarks = contentList.map((_, index) => (
    <SliderButton onClick={() => setActive(index)} key={`mark${index}`}>
      {active === index ? "●" : "○"}
    </SliderButton>
  ));

  return (
    <>
      {contentList[active]}
      <SliderControls>
        <SliderButton onClick={previousSlide}>{"<"}</SliderButton>
        {sliderMarks}
        <SliderButton onClick={nextSlide}>{">"}</SliderButton>
      </SliderControls>
    </>
  );
}
