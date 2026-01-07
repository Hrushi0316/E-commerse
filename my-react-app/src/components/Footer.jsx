import React from 'react'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-about">
          <div className="footer-logo">Eaasy buy..</div>
          <p className="footer-desc">A short description or tagline for your app. Keep it one concise sentence that tells users what you do.</p>
        </div>

        <div className="footer-contact">
          <address>
            <a href="mailto:hello@example.com">hello@example.com</a>
            <br />
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </address>

          <div className="socials" aria-label="Social links">
            <a className="social" href="#" aria-label="Twitter">T</a>
            <a className="social" href="#" aria-label="Instagram">I</a>
            <a className="social" href="#" aria-label="GitHub">G</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <small>© {year} Your Company. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
