export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="section-topline">
          <span className="eyebrow">LET’S CONNECT</span>
          <span className="section-aside">
            GOOD THINGS START WITH A CONVERSATION
          </span>
        </div>
        <div className="contact-main">
          <h2>
            Have a problem
            <br />
            worth <span>building for?</span>
          </h2>
          <a
            className="contact-arrow"
            href="mailto:sandeep.gudisa7@gmail.com"
            aria-label="Email Sandeep"
          >
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-details">
          <a className="contact-email" href="mailto:sandeep.gudisa7@gmail.com">
            sandeep.gudisa7@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <p>
            For opportunities, collaborations,
            <br />
            and interesting conversations about AI.
          </p>
        </div>
        <div className="footer-bottom">
          <a className="footer-signature" href="/#home">
            sg<span>↗</span>
          </a>
          <p>© {new Date().getFullYear()} Sandeep Gudisa</p>
          <div className="footer-socials">
            <a
              href="https://github.com/GudisaSandeep"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/sandeepgudisa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.instagram.com/gudisasandeep/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.threads.com/@gudisasandeep"
              target="_blank"
              rel="noopener noreferrer"
            >
              Threads ↗
            </a>
          </div>
          <a href="/#home" className="back-top">
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
