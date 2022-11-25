import profileImg from '../assets/profile.png'

function HomePage() {
	return (
		<div className="HomePage page">
			<article>
				<p className="text-heading">{'<HomePage />'}</p>
				<h1>Hello, I'm <br /> <span>Fritz</span></h1>
			</article>
			<img className='profile-img' src={profileImg} alt="Profile" />
		</div>
	) 
}

export default HomePage
