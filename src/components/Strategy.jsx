const pillars = ['Course Promotions', 'Educational Content', 'Campaign Designs', 'Brand Content', 'Engagement Content']
const platforms = ['Instagram', 'Facebook', 'LinkedIn', 'TikTok', 'X']

export default function Strategy() {
  return (
    <section className="strategy" id="strategy">
      <h2 className="title">The Strategy</h2>
      <p className="sub" style={{ maxWidth: 580 }}>A clear strategy was used to create purposeful content that builds awareness, educates the audience, promotes the brand, and encourages action.</p>
      <div className="panel">
        <div><h4>01 — Objective</h4><div className="acc">Brand Awareness</div><p>Increase brand visibility, showcase courses and opportunities, and encourage prospective students to take the next step.</p></div>
        <div><h4>02 — Target Audience</h4><div className="acc sm">Students &amp; Young Professionals</div><p>Secondary school leavers, NYSC corps members, young professionals, and people interested in technology and digital skills.</p></div>
        <div><h4>03 — Content Pillars</h4><div className="acc sm">Brand Awareness</div><ul>{pillars.map(p => <li key={p}>{p}</li>)}</ul></div>
        <div><h4>04 — Platforms</h4><div className="acc sm" style={{ fontSize: '.72rem' }}>“Right strategy. Bigger impact.”</div><ul>{platforms.map(p => <li key={p}>{p}</li>)}</ul></div>
      </div>
    </section>
  )
}