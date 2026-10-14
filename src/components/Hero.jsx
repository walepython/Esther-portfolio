import Social from './Social'
import heroImg from '../assets/project7.png'

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-text">
        <p className="hi">Hi I am</p>
        <p className="name">Esther Etim</p>
        <h1>CONTENT MARKETER</h1>
        <p>Creating strategic content that helps brands build visiblity, connect with their audience, and grow online.</p>
        <div className="skills"><span>CONTENT STRATEGY</span><span>CONTENT CREATORS</span><span>SOCIAL MEDIA STRATEGY</span></div>
        <a href="#" download="Esther-Etim-CV.pdf" className="btn">Hire Me</a>
      </div>
      <div className="hero-photo">
        <div className="photo-wrap">
            <span className="ring" aria-hidden="true" />
            <img src={heroImg} alt="Esther Etim" />
        </div>
        <Social />
        </div>
    </header>
  )
}