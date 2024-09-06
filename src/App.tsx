import { Experience } from './Experience';
import { Project } from './Project';
import { ExperienceData, ProjectData } from './types';
import './App.css';
import myData from './data.json';

function App() {
  // const testData: ExperienceData = {
  //   role: "testRole",
  //   skills: "testSkills, burger flipping",
  //   company: "Business",
  //   location: "Irvine, CA",
  //   dates: "1999 - 2099",
  //   description: ["bullet 1", "bullet 2", "bullet 3"]
  // }

  const data: {experiences: ExperienceData[], projects: ProjectData[]} = {experiences: myData.experiences, projects: myData.projects};

  return (
    <div className="App">
      <header className="App-header">
          <div className='title'>Ian Wang</div>
          
          <h1>Experiences</h1>
          {data.experiences.map((experience) => (
            <Experience data={experience}/>
          ))}
          <br />
          <h1>Projects</h1>
          {data.projects.map((project) => (
            <Project data={project}/>
          ))}
          
      </header>
    </div>
  );
}

export default App;
