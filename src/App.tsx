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
          <div className='title'>Ian Wang <span className="contact">cmpianw@gmail.com | <a href="https://www.linkedin.com/in/ian-wang-4a63a1198/">linkedin</a></span></div>
          <br />
          <h1>Education / Coursework</h1>
          <h1 className="exp-h1">UC Irvine | Computer Science B.S. | GPA 3.4 | 2021-2025</h1>
          <ul>
            <li>Object Oriented Programming, Linear Algebra,
Data Structures, Algorithms Analysis, Discrete Math,
Computer Organization, <br />System Design, Database Management Systems,
Introduction to AI, Formal Languages and Automata Theory,
AI in Education</li>
          </ul>
          <br />
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
