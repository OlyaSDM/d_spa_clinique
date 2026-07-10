import { useEffect } from "react";
import "./ServicesPage.css";

type Item = {
  name: string;
  duration: string;
  price: string;
  includes: string[];
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
      {
        name: "Signature Body Massage",
        duration: "60 min",
        price: "$120",
        includes: [
          "Personalized consultation & body assessment",
          "Customized massage techniques tailored to your needs",
          "Full-body relaxation experience",
          "Release of everyday tension and stress",
          "Improved circulation and body balance",
          "A calming ritual for complete relaxation",
        ],
      },

      {
        name: "Deep Tissue Massage",
        duration: "60 min",
        price: "$130",
        includes: [
          "Personalized consultation",
          "Targeted work on areas of tension",
          "Deep muscle relaxation techniques",
          "Support for flexibility and mobility",
          "Relief from stiffness and muscle fatigue",
          "Restorative therapeutic experience",
        ],
      },

      {
        name: "Manual Lymphatic Drainage",
        duration: "60 min",
        price: "$130",
        includes: [
          "Personalized wellness consultation",
          "Gentle lymphatic drainage techniques",
          "Support for natural body detoxification",
          "Reduction of puffiness and fluid retention",
          "Improved circulation and lightness",
          "Deep relaxation and renewed energy",
        ],
      },

      {
        name: "Body Sculpt & Detox",
        duration: "60 min",
        price: "$140",
        includes: [
          "Personalized body consultation",
          "Sculpting massage techniques",
          "Lymphatic stimulation",
          "Improved circulation and body tone",
          "Support for reducing water retention",
          "A refreshed and revitalized feeling",
        ],
      },
    ],
  },


  {
    id: "face",
    title: "Face Massage",
    bookingLink: "https://www.picktime.com/dspa-face",
    items: [
      {
        name: "Face Lifting Massage",
        duration: "45 min",
        price: "$90",
        includes: [
          "Personalized facial consultation",
          "Lifting and toning massage techniques",
          "Relaxation of facial tension",
          "Improved facial circulation",
          "Enhanced natural glow",
          "A refreshed and lifted appearance",
        ],
      },

      {
        name: "Sculpting Face Massage",
        duration: "45 min",
        price: "$95",
        includes: [
          "Customized facial assessment",
          "Advanced sculpting techniques",
          "Facial contouring massage",
          "Muscle relaxation and release",
          "Improved skin tone and texture",
          "Personalized facial ritual",
        ],
      },

      {
        name: "Lymphatic Face Drainage",
        duration: "45 min",
        price: "$100",
        includes: [
          "Personalized consultation",
          "Gentle lymphatic facial techniques",
          "Reduction of facial puffiness",
          "Improved circulation",
          "Relaxing and calming experience",
          "Fresh, balanced appearance",
        ],
      },
    ],
  },


  {
    id: "facial",
    title: "Facial Treatments",
    bookingLink: "https://www.picktime.com/dspa-facial",
    items: [
      {
        name: "Hydration Facial",
        duration: "75 min",
        price: "$140",
        includes: [
          "Personalized skin consultation",
          "Professional cleansing ritual",
          "Deep hydration treatment",
          "Nourishing mask and skincare products",
          "Skin moisture restoration",
          "Healthy radiant glow",
        ],
      },

      {
        name: "Deep Cleansing Facial",
        duration: "75 min",
        price: "$150",
        includes: [
          "Skin analysis and consultation",
          "Professional deep cleansing",
          "Gentle exfoliation treatment",
          "Pore purification",
          "Customized skincare products",
          "Fresh and renewed complexion",
        ],
      },

      {
        name: "Glow & Anti-Aging Facial",
        duration: "75 min",
        price: "$160",
        includes: [
          "Personalized skin assessment",
          "Advanced anti-aging skincare ritual",
          "Facial massage techniques",
          "Skin brightening treatment",
          "Improved radiance and texture",
          "Luxury relaxation experience",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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

        <button onClick={() => scrollTo("gift")}>
          Gift
        </button>
      </div>


      {sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className="service-category reveal"
        >

          <h2 className="category-title">
            {section.title}
          </h2>


          <div className="cards-grid">

            {section.items.map((item, i) => (

              <div
                key={i}
                className="service-card"
                style={{ "--i": i } as React.CSSProperties}
              >

                <h3>
                  {item.name}
                </h3>


                <div className="meta">
                  <span>{item.duration}</span>
                  <span>{item.price}</span>
                </div>


                <ul className="includes-list">
                  {item.includes.map((point, index) => (
                    <li key={index}>
                      {point}
                    </li>
                  ))}
                </ul>


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

          <h2>
            Gift Certificates
          </h2>

          <p>
            Give the gift of relaxation & beauty
          </p>


          <a
            href="https://www.picktime.com/dspa-gift"
            target="_blank"
            rel="noreferrer"
            className="book-btn"
          >
            Buy Gift Card
          </a>

        </div>

      </div>

    </section>
  );
}