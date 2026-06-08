import { useEffect } from "react";
import "./ServicesPage.css";

type Item = {
  name: string;
  duration: string;
  price: string;
};

type Section = {
  id: string;
  title: string;
  bookingLink: string;
  items: Item[];
};

const sections: Section[] = [
  {
    id: "body",
    title: "Body Treatments",
    bookingLink: "https://www.picktime.com/dspa-body",
    items: [
      { name: "Body Massage", duration: "60 min", price: "$120" },
      { name: "Deep Tissue Massage", duration: "60 min", price: "$130" },
      { name: "Lymphatic Drainage", duration: "60 min", price: "$130" },
      { name: "Sculpt / Detox", duration: "60 min", price: "$140" },
    ],
  },
  {
    id: "face",
    title: "Face Massage",
    bookingLink: "https://www.picktime.com/dspa-face",
    items: [
      { name: "Face Lifting Massage", duration: "45 min", price: "$90" },
      { name: "Sculpting Face Massage", duration: "45 min", price: "$95" },
      { name: "Lymphatic Face Drainage", duration: "45 min", price: "$100" },
    ],
  },
  {
    id: "facial",
    title: "Facial Treatments",
    bookingLink: "https://www.picktime.com/dspa-facial",
    items: [
      { name: "Hydration Facial", duration: "75 min", price: "$140" },
      { name: "Deep Cleansing Facial", duration: "75 min", price: "$150" },
      { name: "Glow / Anti-aging Facial", duration: "75 min", price: "$160" },
    ],
  },
];

export default function ServicesPage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-page">

      <div className="services-hero reveal">
        <h1>Services</h1>
        <p>Choose your ritual. Restore your body & mind</p>
      </div>

      <div className="services-nav reveal">
        {sections.map((s) => (
          <button key={s.id} onClick={() => scrollTo(s.id)}>
            {s.title}
          </button>
        ))}
        <button onClick={() => scrollTo("gift")}>Gift</button>
      </div>

      {sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className="service-category reveal"
        >
          <h2 className="category-title">{section.title}</h2>

          <div className="cards-grid">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="service-card"
                style={{ "--i": i } as React.CSSProperties}
              >
                <h3>{item.name}</h3>

                <div className="meta">
                  <span>{item.duration}</span>
                  <span>{item.price}</span>
                </div>

                <p className="hint">
                  Includes full consultation & customization
                </p>
              </div>
            ))}
          </div>

          <div className="category-book">
            <a
              href={section.bookingLink}
              target="_blank"
              rel="noreferrer"
              className="book-btn"
            >
              Book {section.title}
            </a>
          </div>
        </div>
      ))}

      <div id="gift" className="gift-section reveal">
        <div className="gift-card">
          <h2>Gift Certificates</h2>
          <p>Give the gift of relaxation & beauty</p>

          <a
            href="https://www.picktime.com/dspa-gift"
            target="_blank"
            className="book-btn"
          >
            Buy Gift Card
          </a>
        </div>
      </div>

    </section>
  );
}