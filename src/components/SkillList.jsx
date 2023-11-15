import SkillListItem from "./SkillListItem";

const SkillList = ({skills}) => {
    const SkillListItems = skills.map((skill) => <SkillListItem skill={skill}/>);
    return (
        <ul>
            {SkillListItems}
        </ul>
    )
}

export default SkillList;