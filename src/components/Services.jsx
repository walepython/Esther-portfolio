import ServiceCard from './ServiceCard'

const services = [
  ['Social Media Management', 'Planning, scheduling and managing social media content across platforms.'],
  ['Content Strategy', 'Developing content pillars, ideas and strategies aligned with brand goals.'],
  ['Content Creation', 'Creating graphics, carousels, captions and short-form video content.'],
  ['Copywriting', 'Writing captions, hooks, CTAs and promotional copy that drives engagement.'],
  ['Community Management', 'Engaging with audiences and maintaining meaningful conversations.'],
  ['Social Media Analytics', 'Monitoring performances and using insights to improve future content.'],
]

export default function Services() {
  return (
    <section className="services" id="services">
      <h2 className="title">Services</h2>
      <p className="sub">I Provide comprehensive social media solutions that help brands grow, engage and achieve their goals online.</p>
      <div className="grid">
        {services.map(([title, description]) => (
          <ServiceCard key={title} title={title} description={description} />
        ))}
      </div>
    </section>
  )
}