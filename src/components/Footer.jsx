import Social from './Social'

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="brand"><strong>ESTHER ETIM</strong><span>content marketer</span></div>
        <div>Email: <a href="mailto:estyetim118@email.com">estyetim118@email.com</a><br />Phone: +234 810 253 5735</div>
        <div>Instagram: @e_blessed_25<br />LinkedIn: Esther Etim</div>
      </div>
      <div className="bottom"><Social /><em>Strategy • Creativity • Consistency</em></div>
    </footer>
  )
}