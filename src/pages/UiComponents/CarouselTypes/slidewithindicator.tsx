import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

// Carousel images
import img3 from "../../../assets/images/small/img-3.jpg";
import img1 from "../../../assets/images/small/img-1.jpg";
import img5 from "../../../assets/images/small/img-5.jpg";

const items = [
  {
    src: img1,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: img3,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: img5,
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const Slidewithindicator = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} className="d-block img-fluid" alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <React.Fragment>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </React.Fragment>
  );
};

export default Slidewithindicator;
