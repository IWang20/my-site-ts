import React from 'react';
// import logo from './logo.svg';
import {Experience} from './Experience';
import { ExperienceData } from './types';
import './App.css';

function App() {
  const testData: ExperienceData = {
    role: "testRole",
    skills: "testSkills, burger flipping",
    company: "Business",
    location: "Irvine, CA",
    dates: "1999 - 2099",
    description: ["bullet 1", "bullet 2", "bullet 3"]
  }

  return (
    <div className="App">
      <header className="App-header">
          Ian Wang
          
          <h1>Experiences</h1>
          <Experience data={testData}/>
          
      </header>
      

    </div>
  );
}

export default App;
