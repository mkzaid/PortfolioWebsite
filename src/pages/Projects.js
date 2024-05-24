import React from 'react'
import './css/project.css'
import ProjectCard from '../components/ProjectCard'
import movieProjectImg from '../img/movieProject.jpg'
import TaskAppImg from '../img/taskApp.jpg'
const Projects = () => {
  return (
    <>
    <div className='Project_Parent' >
             <h2>My Projects</h2>
             <div className="projectsContainer">
             <ProjectCard name={"Texh Movie"} link={'https://texhmovie.netlify.app/'} img={movieProjectImg} />
             <ProjectCard name={"Note Taker"} link={'https://texhmovie.netlify.app/'} img={TaskAppImg} />
             </div>
    </div>
    </>
  )
}

export default Projects