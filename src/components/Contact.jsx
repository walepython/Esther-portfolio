import { useState } from 'react'

const FORM_URL = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
const isPhone = v => /^\+?[0-9\s-]{7,15}$/.test(v)

export default function Contact() {
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error | invalid

  async function handleSubmit(e) {
    e.preventDefault()
    const contact = value.trim()

    if (!isEmail(contact) && !isPhone(contact)) {
      setStatus('invalid')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          contact,
          ...(isEmail(contact) && { email: contact }), // lets you reply directly
          message: 'Someone wants to work with you (from your portfolio).',
        }),
      })
      if (res.ok) {
        setStatus('success')
        setValue('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="cta" id="contact">
      <h2>LET’S WORK TOGETHER</h2>
      <p>Have a brand that needs a stronger social media presence? Let’s create content that connects with your audience and communicates your brand effectively.</p>

      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="contact"
          placeholder="Enter Your Email or Phone"
          value={value}
          onChange={e => { setValue(e.target.value); setStatus('idle') }}
          disabled={status === 'sending'}
          aria-label="Your email or phone number"
        />
        <button className="btn orange" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Contact Me'}
        </button>
      </form>

      <p className={`form-msg ${status}`} role="status" aria-live="polite">
        {status === 'success' && 'Thank you! I’ll get back to you shortly.'}
        {status === 'invalid' && 'Please enter a valid email address or phone number.'}
        {status === 'error' && 'Something went wrong. Please try again or email me directly.'}
      </p>

      <em>let’s create something great.</em>
    </section>
  )
}