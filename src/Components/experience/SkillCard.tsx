import React from 'react'
import SkillList from './SkillList';

interface skillProps {
    title: string,
    skills: string[];
}

const SkillCard = (props: skillProps) => {
    const skills = props.skills
  return (
    <div >
        <h3>{props.title}</h3>
        <SkillList skills={skills}/>
    </div>
  )
}

export default SkillCard