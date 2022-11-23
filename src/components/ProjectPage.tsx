import projectData from "./data/projectdata"
import ProjectCard from "./ProjectCard"

function ProjectPage() {
  return (
    <div className="ProjectPage page">
      <article>
        <p>{'<ProjectsPage />'}</p>
        <h2>Projects</h2>
      </article>
      <div className="project-cards">
        {projectData.map((cardInfo) => (
          <ProjectCard 
          cardTitle={cardInfo.title}
          cardDesc={cardInfo.desc}
          cardStack={cardInfo.stack}
          cardImgSource={cardInfo.src}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectPage