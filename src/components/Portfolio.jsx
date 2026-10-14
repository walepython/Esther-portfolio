import p1 from "../assets/project8.jpeg";
import p2 from "../assets/project4.jpeg";
import p3 from "../assets/project5.jpeg";

export default function Portfolio() {
  const projects = [
    {
      image:p1,
      title:"Aptech Osogbo Carousel Design"
    },
    {
      image:p2,
      title:"The Zenith Scholars Foundation"
    },
    {
      image:p3,
      title:"Blessed Creative Hub"
    }
  ];

  return (
    <section>

      <div className="container">

        <h2 className="section-title">
          Content Showcase
        </h2>

        <div className="portfolio-grid">

        {projects.map((item,index)=>(
        <div className="project-card" key={index}>
            <img src={item.image} alt={item.title} />

            <small>SMM</small>

            <h3>{item.title}</h3>
        </div>
        ))}

        </div>

      </div>

    </section>
  );
}