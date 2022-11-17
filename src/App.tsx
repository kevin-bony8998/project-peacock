import React from 'react';
import logo from './logo.svg';
import './App.css';
import IntroHeader from './organisms/introSection';
import ScrollComponent from './atoms/scrollComponent';
import WorkExperience from './organisms/workExperience';

function App() {
  return (
    <div className="App">
      <div className="intro-section">
        <IntroHeader />
      </div>
      <div className="scroll-component">
        <ScrollComponent />
      </div>
      <div className="work-experience">
        <WorkExperience />
      </div>
    </div>
  );
}

export default App;
