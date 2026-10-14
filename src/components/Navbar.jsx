import heroImg1 from '../assets/project1.png'
export default function Navbar() {
    return (
      <nav className="nav">
        <img style={{width:'60px',height:'60px'}} src = {heroImg1} alt="Blessed Creative Hub" />
        <a href="#" download="Esther-Etim-CV.pdf" className="btn">Hire Me</a>
      </nav>
    )
  }