import { IconMail, IconGithub, IconLinkedin, IconInstagram, IconPhone } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer id="contact" className="footer" role="contentinfo" suppressHydrationWarning>
      <div className="container footer-inner">
        <h2 className="footer-heading">
          Let&apos;s build something amazing together.
        </h2>
        <p className="footer-sub">
          I&apos;m always open to discussing new opportunities, interesting projects, or having a chat about AI.
        </p>

        {/* Contact info badges */}
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', margin: '1.5rem 0' }}>
          <a href="mailto:sandeep.gudisa7@gmail.com" style={{ color: 'var(--purple)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <IconMail /> sandeep.gudisa7@gmail.com
          </a>
          <a href="tel:+916300050907" style={{ color: 'var(--purple)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <IconPhone /> +91 6300050907
          </a>
        </div>

        <div className="footer-ctas">
          <a
            href="mailto:sandeep.gudisa7@gmail.com"
            className="footer-email-btn"
            aria-label="Send email to Sandeep"
          >
            <IconMail />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/sandeepgudisa/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-btn"
            aria-label="LinkedIn profile"
          >
            <IconLinkedin />
          </a>
          <a
            href="https://github.com/GudisaSandeep"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-btn"
            aria-label="GitHub profile"
          >
            <IconGithub />
          </a>
          <a
            href="https://www.instagram.com/gudisasandeep/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-btn"
            aria-label="Instagram profile"
          >
            <IconInstagram />
          </a>
          <a
            href="tel:+916300050907"
            className="footer-icon-btn"
            aria-label="Call Sandeep"
          >
            <IconPhone />
          </a>
        </div>

        <div className="footer-divider" role="separator" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} Gudisa Sandeep. All rights reserved.
          </p>
          <p className="footer-built">
            Built with Next.js &amp; lots of ☕
          </p>
        </div>
      </div>
    </footer>
  )
}
