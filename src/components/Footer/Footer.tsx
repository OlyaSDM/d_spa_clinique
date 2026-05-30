import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h2>D Spa Clinique</h2>
          <p>
            A space where beauty, care and calm meet in harmony.
          </p>
        </div>

        <div className="footer__nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
        </div>

        <div className="footer__contact">
          <p>123 Main Street</p>
          <p>Los Angeles, CA</p>
          <a href="tel:+10000000000">+1 (000) 000-0000</a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} D Spa Clinique</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
}