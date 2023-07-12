// SlideContext.js
import React, { createContext, useState, useEffect } from 'react';

const SlideContext = createContext();

const SlideContextProvider = ({ children }) => {
  const [activeLevel, setActiveLevel] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [finishedLevels, setFinishedLevels] = useState([]);

  useEffect(() => {
    // Retrieve slide index from local storage if available
    const storedSlideIndex = localStorage.getItem('slideIndex');
    if (storedSlideIndex !== null) {
      setSlideIndex(parseInt(storedSlideIndex));
    }
  }, []);

  useEffect(() => {
    // Store slide index in local storage
    localStorage.setItem('slideIndex', slideIndex.toString());
  }, [slideIndex]);

  const finishSlide = () => {
    if (slideIndex === totalSlides - 1) {
      setFinishedLevels((prevFinishedLevels) => [...prevFinishedLevels, activeLevel]);
      setActiveLevel((prevActiveLevel) => prevActiveLevel + 1);
      setSlideIndex(0);
    } else {
      setSlideIndex((prevSlideIndex) => prevSlideIndex + 1);
    }
  };

  const goToNextSlide = () => {
    setSlideIndex((prevSlideIndex) => prevSlideIndex + 1);
  };

  const goToPreviousSlide = () => {
    setSlideIndex((prevSlideIndex) => prevSlideIndex - 1);
  };

  const exitSlide = () => {
    setActiveLevel(0);
    setSlideIndex(0);
  };

  const totalSlides = 5; // Replace with the total number of slides per level

  return (
    <SlideContext.Provider
      value={{
        activeLevel,
        slideIndex,
        finishedLevels,
        finishSlide,
        goToNextSlide,
        goToPreviousSlide,
        exitSlide,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
};

export { SlideContext, SlideContextProvider };
