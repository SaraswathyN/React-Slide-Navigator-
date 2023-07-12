import React, { useContext } from 'react';
import { SlideContext } from './SlideContext';
import SlidePage from './SlidePage';

const Home = () => {
  const { activeLevel, finishedLevels } = useContext(SlideContext);

  const navigateToSlidePage = () => {
    // Navigate to the SlidePage component
    // You can use React Router or other navigation techniques here
    setActiveLevel(finishedLevels.length + 1);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={navigateToSlidePage} disabled={activeLevel === 0}>
        Level
      </button>
      {activeLevel > 0 && <SlidePage />}
    </div>
  );
};

export default Home;
