import project1 from '../assets/project8.jpeg'
import project2 from '../assets/project4.jpeg'
import project3 from '../assets/project5.jpeg'

const works = [
  { title: 'Aptech Osogbo Carousel Design', img: project1, link: 'https://www.instagram.com/aptechosogbo?xtok=MWV3bHZmNGU3a2htYQ==' },
  { title: 'The Zenith Scholars Foundation', img: project2, link: 'https://www.instagram.com/thezenithscholars?dlrf=ejg2N2JlOWt0NXMz' },
  { title: 'Blessed Creative Hub', img: project3, link: 'https://instagram.com/e_blessed25?mdxt=dWczeTF5amtwZjl5' },
]

export default function Content() {
  return (
    <section className="showcase" id="work">
      <h2 className="title">Content Showcase</h2>
      <p className="sub" style={{ maxWidth: 440 }}>A selection of social media content created to educate, engage, promote, and communicate each brand’s message effectively.</p>
      <div className="works">
        {works.map(({ title, img, link }) => (
          <a className="work" key={title} href={link} target="_blank" rel="noopener noreferrer">
            <div className="thumb"><img src={img} alt={title} /></div>
            <small>SMM</small>
            <h3>{title}</h3>
          </a>
        ))}
      </div>
    </section>
  )
}