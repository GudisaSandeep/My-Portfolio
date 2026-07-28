import Image from 'next/image'
import { IconArrow } from './Icons'

export default function Nav() {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        {/* Logo */}
        <a href="#home" className="nav-logo" aria-label="Sandeep Gudisa home">
          <Image
            src="/sandeep_hero_main.png"
            alt="Sandeep logo"
            width={34}
            height={34}
            className="nav-logo-avatar"
          />
          <span className="nav-logo-name">Sandeep</span>
          <span className="nav-logo-dot" aria-hidden="true" />
        </a>

        {/* Links */}
        <ul className="nav-links" role="list">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contributions">Contributions</a></li>
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <a href="#contact" className="btn-contact">
            Contact Me <IconArrow />
          </a>
        </div>
      </div>
    </nav>
  )
}
