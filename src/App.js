import React from 'react';
import { SlideContextProvider } from './SlideContext';
import Home from './Home';

const App = () => {
  return (
    <SlideContextProvider>
      <Home />
    </SlideContextProvider>
  );
};

export default App;
