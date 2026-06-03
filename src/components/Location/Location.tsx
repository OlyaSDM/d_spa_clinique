import "./Location.css";

export default function Location() {
  return (
    <section className="location">
      <div className="location__overlay">
        <span>LOCATION</span>

        <h2>DSpaClinique</h2>

        <p>
          9410 Anderson Mill Rd #1AB
          <br />
          Austin, TX 78729
        </p>

        <a
          href="https://maps.google.com/?q=9410+Anderson+Mill+Rd+1AB,+Austin,+TX+78729"
          target="_blank"
          rel="noreferrer"
        >
          Get Directions
        </a>
      </div>

<iframe
  title="DSpaClinique"
  src="https://www.google.com/maps?q=30.3919,-97.7516&z=16&output=embed"
  loading="lazy"
  allowFullScreen
/>
    </section>
  );
}