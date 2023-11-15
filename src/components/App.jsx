import { useState } from 'react';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';
import '../index.css';

function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 }
  ]);
  
  const handleAddNewSkill = (skill) => {
    const newSkills  = [...skills, skill];
    setSkills(newSkills);
  }
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr />
      <NewSkillForm addSkill={handleAddNewSkill}/>
    </div>
  );
}

export default App
