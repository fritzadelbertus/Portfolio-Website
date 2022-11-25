import projectData from "./data/projectdata"
import viewSvg from '../assets/viewicon.svg'
import ProjectDataShape from './data/projectcardtype'

function ProjectCard( { title, desc, stack, src, status, link }: ProjectDataShape ) {
  const statusColor = status === 'finished' ? 'green' 
  : status === 'on going' ? 'orange' : 'red'
  
  return (
    <div className="project-card box-coloring">
      <a href={link} target="_blank">
        <div className="project-img">
          <div className='image-overlay'>
            <img src={viewSvg} alt="eye icon" />
          </div>
          <img src={src} alt={title} />
        </div>
      </a>
      <article>
        <p className="card-status"
          style={{color: `${statusColor}`,
          borderColor: `${statusColor}` }}>{status}</p>
        <div>
          <a href={link} target="_blank">
            <p className="card-title">{title}</p>
          </a>
          <p className="card-desc">{desc}</p>
        </div>
        <p className="card-tech-stack">
          {stack.map((item: string) => (
            <i className={`fa-brands fa-${item}`}></i>
          ))}</p>
      </article>
    </div>
  )
}

function ProjectPage() {
  return (
    <div className="ProjectPage page">
      <article>
        <p className="text-heading">{'<ProjectsPage />'}</p>
        <h2>Projects</h2>
      </article>
      <div className="project-cards">
        {projectData.map((cardInfo) => (
          <ProjectCard key={cardInfo.id} {...cardInfo} />
        ))}
      </div>
    </div>
  )
}

export default ProjectPage
