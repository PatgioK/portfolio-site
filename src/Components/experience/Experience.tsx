import React from 'react'
import './experience.css'
import SkillCard from './SkillCard'

interface expProps {
    skillsfront?:any,
    skillsback?: any,
    skillsother?: any,
}

const Experience = (props: expProps) => {
  return (
    <section id='#experience'>
        <h5>Skills Gained</h5>
        <h2>Technologies I've Used</h2>
        <div className='container experience__container'>
            <div className="experience__frontend">
                <SkillCard title={"Frontend Development"} skills={props.skillsfront}/>
            </div>
            <div className="experience__backend">
                <SkillCard title={"Backend Development"} skills={props.skillsback}/>
            </div>
            <div className="experience__other">
                <SkillCard title={"Other Skills"} skills={props.skillsother}/>
            </div>
            
        </div>
    </section>
  )
}

export default Experience