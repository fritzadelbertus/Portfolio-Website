import aboutImg from '../assets/aboutimg.png'
import blob from '../assets/aboutblob.svg'

function AboutPage() {
  return (
    <div className="AboutPage page">
      <article>
        <p>{'<AboutPage />'}</p>
        <h2>About Me</h2>
        <p className='text-desc'>
          Greetings! I'm <span className='about-emphasize'>Fritz Adelbertus Sitindaon</span>, a 19 years old college freshman majoring Mathematics. 
          I have a genuine interest in subjects such as math, computer science, informatics, and art.<br />
          <br />
          I'm a <span className='about-emphasize'>0$ Front-End Web Developer</span> and I haven't spent a single penny in my journey to learn Web Development. 
          I spend my time <span className='about-emphasize'>creating projects, attending free courses, and reading documentations</span>. <br />
          <br />
          I started this journey in <span className='about-emphasize'>June 2022</span>. 
          Currently I am learning TypeScript and React JS Framework by creating web projects related to my major in mathematics. 
          My goal in this first year of learning web dev is to <span className='about-emphasize'>gain new experiences</span> in the field of Web Development.<br />
          <br />
          <span className='about-emphasize'>Interested</span> in creating projects with me?<br />
          Contact me below and let's <span className='about-emphasize'>collaborate</span>!!
        </p>
        <div className='social-links'>
          <a href="https://www.instagram.com/fritz_adel/"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/fritzadelbertus/"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/fritzadelbertus"><i className="fa-brands fa-github"></i></a>
        </div>
      </article>
      <div className='about-image-box'>
        <div className='blob1 blobs'>
          <img src={blob} alt="" />
        </div>
        <div className='blob2 blobs'>
          <img src={blob} alt="" />
        </div>
        <img src={aboutImg} alt="A photo of me" />
      </div>
    </div>
  )
}

export default AboutPage
