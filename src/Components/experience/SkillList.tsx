import React from 'react'
import { BiCaretRight } from 'react-icons/bi';

interface skillListProps {
    skills: string[];
}

const SkillList = (props: skillListProps) => {
    return (
        <div className='experience__content'>
            {props.skills?.map((element, index) => {
                return <article className='experience__detail' key={index}><BiCaretRight className='experience__detail_icon'/>{element}</article>
            })
            }
        </div>
    )
}

export default SkillList