type ProjectCardProps = {
  cardTitle: string
  cardDesc: string
  cardStack: string[]
  cardImgSource: string
}

function ProjectCard( { cardTitle, cardDesc, cardStack, cardImgSource }: ProjectCardProps ) {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={cardImgSource} alt={cardTitle} />
      </div>
      <article>
        <div>
          <p className="card-title">{cardTitle}</p>
          <p className="card-desc">{cardDesc}</p>
        </div>
        <p className="card-tech-stack">
          {cardStack.map((item: string) => (
            <i className={`fa-brands fa-${item}`}></i>
          ))}</p>
      </article>
    </div>
  )
}

export default ProjectCard