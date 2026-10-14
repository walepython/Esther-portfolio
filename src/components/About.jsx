import heroImg from '../assets/project2.jpeg'

const skills = [['Content Strategy', 98], ['Creative Content', 92], ['Brand Communication', 95], ['Audience Engagement', 92]]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="circle lg"><img src={heroImg} alt="Esther Etim" /></div>
      <div className="text">
        <h2>About Me</h2>
        <p>I’m a creative Content Strategist passionate about helping brands build a strong and meaningful presence online. I combine strategy, creativity, and audience-focused content to help brands communicate their message effectively.</p>
        <p>I create and manage content that is designed to do more than look good. From social media graphics and carousels to captions, campaigns, and short-form videos, I focus on creating content that captures attention, communicates value, and encourages action.</p>
        <p>I’m constantly learning, exploring new content trends, and finding creative ways to connect brands with the right audience.</p>
        <div className="bars">
          {skills.map(([label, value]) => (
            <div key={label}>
              <div className="bar-label">{label}</div>
              <div className="bar"><i style={{ width: value + '%' }} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}