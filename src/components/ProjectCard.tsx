import viewSvg from '../assets/viewicon.svg'

type ProjectCardProps = {
  cardTitle: string
  cardDesc: string
  cardStack: string[]
  cardImgSource: string
  cardStatus: string
  cardLink: string
}

function ProjectCard( { cardTitle, cardDesc, cardStack, cardImgSource, cardStatus, cardLink }: ProjectCardProps ) {

  const statusColor = cardStatus === 'finished' ? 'green' 
  : cardStatus === 'on going' ? 'orange' : 'red'
  return (
    <div className="project-card">
      <a href={cardLink} target="_blank">
        <div className="project-img">
          <div className='image-overlay'>
            <img src={viewSvg} alt="eye icon" />
          </div>
          <img src={cardImgSource} alt={cardTitle} />
        </div>
      </a>
      <article>
      <p className="card-status"
      style={{color: `${statusColor}`,
      borderColor: `${statusColor}` }}>{cardStatus}</p>
        <div>
          <a href={cardLink} target="_blank">
            <p className="card-title">{cardTitle}</p>
          </a>
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