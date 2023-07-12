// SlidePage.js
import React, { useContext, useEffect } from 'react';
import { SlideContext } from './SlideContext';

const SlidePage = () => {
  const {
    activeLevel,
    slideIndex,
    finishedLevels,
    finishSlide,
    goToNextSlide,
    goToPreviousSlide,
    exitSlide,
  } = useContext(SlideContext);

  useEffect(() => {
    // Handle leaving the site in the middle of a slide
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('slideIndex', slideIndex.toString());
    });
    return () => {
      window.removeEventListener('beforeunload', () => {
        localStorage.setItem('slideIndex', slideIndex.toString());
      });
    };
  }, [slideIndex]);

  const totalSlides = 5; // Replace with the total number of slides per level

  return (
    <div>
      <h1>Slide Page - Level {activeLevel}</h1>
      <h2>Slide {slideIndex + 1}</h2>
      {/* Render slide content based on slideIndex */}
      {/* Add navigation buttons for next and previous slides */}
      <button onClick={goToPreviousSlide} disabled={slideIndex === 0}>
        Previous
      </button>
      <button onClick={goToNextSlide} disabled={slideIndex === totalSlides - 1}>
        Next
      </button>
      {slideIndex === totalSlides - 1 && (
        <button onClick={finishSlide}>Finish</button>
      )}
      <button onClick={exitSlide}>Exit</button>
    </div>
  );
};

export default SlidePage;
