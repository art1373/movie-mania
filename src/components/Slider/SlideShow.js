import React, { useState, useEffect } from "react";
import "./SlideShow.scss";
import PropTypes from "prop-types";

const SlideShow = (props) => {
  const { images } = props;
  const [state, setState] = useState({
    slideShow: images[0],
    slideIndex: 0,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderInterval, setSliderInterval] = useState(0);
  let currentSlideIndex = 0;
  useEffect(() => {
    const timeInterval = setInterval(() => {
      autoSliding();
    }, 5000);
    setSliderInterval(timeInterval);
    return () => {
      clearInterval(timeInterval);
      clearInterval(sliderInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function moveSlideArrows(type) {
    let index = currentIndex;
    if (type === "prev") {
      if (currentIndex <= 0) {
        index = images.length - 1;
      } else {
        index -= 1;
      }
    } else {
      if (currentIndex < images.length) {
        index += 1;
      }
      if (index === images.length) {
        index = 0;
      }
    }
    setCurrentIndex(index);
    setState((prev) => ({
      ...prev,
      slideIndex: index,
      slideShow: images[index],
    }));
  }
  function autoSliding() {
    let lastIndex = 0;
    lastIndex = currentSlideIndex + 1;
    currentSlideIndex = lastIndex >= images.length ? 0 : lastIndex;
    setState((prev) => ({
      ...prev,
      slideIndex: currentSlideIndex,
      slideShow: images[currentSlideIndex],
    }));
  }

  function onIndicatorClick(i) {
    setCurrentIndex(i);
    setState((prev) => ({
      ...prev,
      slideIndex: i,
      slideShow: images[i],
    }));
  }

  const RenderArrows = () => (
    <div className="slider-arrows">
      <div
        className="slider-arrow slider-arrow--left"
        onClick={() => moveSlideArrows("prev")}
      />
      <div
        className="slider-arrow slider-arrow--right"
        onClick={() => moveSlideArrows("next")}
      />
    </div>
  );

  const Indicators = ({ currentSlide }) => {
    const listIndicators = images?.map((_, i) => {
      const btnClasses =
        i === currentSlide
          ? "slider-navButton slider-navButton--active"
          : "slider-navButton";
      return (
        <button
          key={i * 100}
          className={btnClasses}
          onClick={() => onIndicatorClick(i)}
        />
      );
    });
    return <div className="slider-nav">{listIndicators}</div>;
  };

  return (
    <>
      <div className="slider">
        <div className="slider-slides">
          {images && images.length && state.slideShow && (
            <div
              className="slider-image"
              style={{ backgroundImage: `url(${state.slideShow.url})` }}
            ></div>
          )}
        </div>
        <Indicators currentSlide={state.slideIndex} />
        <RenderArrows />
      </div>
    </>
  );
};
SlideShow.propTypes = {
  currentSlide: PropTypes.number,
  images: PropTypes.array.isRequired,
};

export default SlideShow;
