import '../NewSkillForm.css';
import { useState } from 'react';
const NewSkillForm = ({ addSkill }) => {
    const [skillInfo, setSkillInfo] = useState({
      name: '',
      level: 3
    });
    const _handleSubmit = (event) => {
      event.preventDefault();
      addSkill(skillInfo);
      setSkillInfo({
        name: '',
        level: 3
      });
    };

    const _handleInputChange = (event) => {
      const newSkillInfo  = {
        ...skillInfo,
        [event.target.name]: event.target.value
      };
      setSkillInfo(newSkillInfo);
    };
    return (
    <form className="NewSkillForm"  onSubmit={_handleSubmit}>
      <label>Skill</label>
      <input
      type="text" 
      name="name"
      value={skillInfo.name}
      onChange={_handleInputChange}
      />
      <label>Level</label>
      <select
      name="level"
      value={skillInfo.level}
      onChange={_handleInputChange}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button type="submit">ADD SKILL</button>
    </form>
    )
}

export default NewSkillForm;