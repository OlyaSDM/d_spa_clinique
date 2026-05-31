import "./Location.css";

export default function Location() {
  return (
<section className="location">
  <div className="location__overlay">
    <span>LOCATION</span>

    <h2>DSpaClinique</h2>

    <p>
      12591 Research Blvd, Suite 203
      <br />
      Austin, TX 78759
    </p>

    <a
      href="https://maps.google.com/?q=30.4502476,-97.786808"
      target="_blank"
      rel="noreferrer"
    >
      Get Directions
    </a>
  </div>

<iframe
  title="DSpaClinique"
  src="https://www.google.com/maps?q=30.4502476,-97.786808&z=16&output=embed"
  loading="lazy"
  allowFullScreen
/>
</section>
  );
}