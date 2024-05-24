import React from 'react'
import './css/ProjectCard.css'
const ProjectCard = ({link , img , name}) => {
    const myStyle = {
        backgroundImage:
            `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition:'center',
        backgroundRepeat: "no-repeat",
    };
  return (
    <div className="Project_Child">
                <div className="Child_Card" style={myStyle} >
                    <div className="Child_Card_Img">
                           <a href={link} rel='noreferrer' target='_blank' >{name} <br/> App</a>
                    </div>
                </div>
             </div>
  )
}

export default ProjectCard