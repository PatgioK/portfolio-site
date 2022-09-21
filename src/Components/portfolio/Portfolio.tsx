import React from 'react'
import './portfolio.css'
import { project, portfolio } from '../../interfaces'
import {AiOutlineLink} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'

const Portfolio = (props: portfolio) => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">

        {props.projects.map((element, id) => {
          const gitbutton = <><a href="" target="_blank" className='btn'><BsGithub/> Github Repo</a></>;
          const livebutton = <><a href="" target="_blank" className='btn btn-primary'><AiOutlineLink/> Live Demo</a></>;

          return <div className='portfolio__item' key={id}>
            <h3>{element.title}</h3>
            <div className="portfolio__item-image">
              <img alt={element.title} src={process.env.PUBLIC_URL + `/images/${element.image}`} />
            </div>
            <br />
            <div className="techs">
              {element.tech.map((tech, id) => {
                return <div className="tech-item" key={id}>{tech}</div>
              })}
            </div>
            <div className="mobile-desc">
              {element.category}
            </div>
            <div className="portfolio__item-cta">
              {element.git === "" ? "" : gitbutton}
              {element.url === "" ? "" : livebutton}
            </div>
          </div>

        })}

      </div>
    </section>
  )
}

export default Portfolio