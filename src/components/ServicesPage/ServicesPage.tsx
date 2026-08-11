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
          "A customized full-body massage designed to release tension, improve circulation, and promote deep relaxation. The treatment is tailored to your individual needs and includes soothing massage techniques for a complete body relaxation experience.",
        ],
      },
      {
        name: "Deep Tissue Massage",
        duration: "60 min",
        price: "$130",
        includes: [
          "A therapeutic massage using deeper pressure and focused techniques to target areas of muscle tension and stiffness. Designed to relieve muscle fatigue, improve mobility, and promote deep relaxation.",
        ],
      },
      {
        name: "Manual Lymphatic Drainage",
        duration: "60 min",
        price: "$130",
        includes: [
          "A gentle, rhythmic massage designed to support natural lymphatic flow and circulation. The treatment helps reduce puffiness and fluid retention while promoting a light, refreshed, and deeply relaxed feeling.",
        ],
      },
      {
        name: "Body Sculpt & Detox",
        duration: "60 min",
        price: "$140",
        includes: [
          "A sculpting body massage combining targeted techniques and lymphatic stimulation to support circulation, reduce water retention, and enhance body tone. A revitalizing treatment designed to leave the body feeling lighter and refreshed.",
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
          "A lifting facial massage designed to release facial tension, stimulate circulation, and enhance the skin's natural glow. The treatment leaves the face looking refreshed, relaxed, and naturally lifted.",
        ],
      },
      {
        name: "Sculpting Face Massage",
        duration: "45 min",
        price: "$95",
        includes: [
          "A sculpting facial massage focused on defining facial contours and releasing muscle tension. The treatment helps improve circulation and creates a more toned, refreshed, and balanced appearance.",
        ],
      },
      {
        name: "Lymphatic Face Drainage",
        duration: "45 min",
        price: "$100",
        includes: [
          "A gentle lymphatic facial massage designed to support circulation and reduce facial puffiness. The treatment promotes a fresh, balanced appearance while providing a deeply calming and relaxing experience.",
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
        name: "Teen Facial",
        duration: "60 min",
        price: "TBD",
        includes: [
          "A gentle facial designed for teens and first-time clients with light congestion or a few blackheads. The treatment includes cleansing, gentle exfoliation, targeted care, and soothing skincare for a fresh, balanced complexion.",
        ],
      },
      {
        name: "Teen Facial",
        duration: "90 min",
        price: "TBD",
        includes: [
          "A comprehensive facial for teens with more complex congestion and skin concerns. The extended treatment allows additional time for skin preparation, professional extractions, customized skincare, and post-treatment care.",
        ],
      },
      {
        name: "Deep Cleansing Facial",
        duration: "90 min",
        price: "TBD",
        includes: [
          "A thorough deep cleansing facial with professional skin preparation, exfoliation, extractions, a customized mask, and nourishing skincare. The extended treatment allows time for detailed preparation, professional extractions, and post-treatment care.",
        ],
      },
      {
        name: "Anti-Aging Treatment",
        duration: "60 min",
        price: "TBD",
        includes: [
          "An advanced anti-aging facial designed to improve skin texture, radiance, and the appearance of fine lines. The treatment includes customized skincare and microneedling for a refreshed and rejuvenated complexion.",
        ],
      },
      {
        name: "Anti-Aging Treatment",
        duration: "90 min",
        price: "TBD",
        includes: [
          "An extended anti-aging experience combining customized skincare and microneedling with additional time for thorough preparation, treatment, and post-care for a more complete rejuvenating experience.",
        ],
      },
    ],
  },

  {
    id: "addons",
    title: "Add-Ons",
    bookingLink: "https://www.picktime.com/dspa-facial",
    items: [
      {
        name: "Celluma LED Light Therapy",
        duration: "TBD",
        price: "TBD",
        includes: [
          "A relaxing LED light therapy session designed to complement your facial and support a healthy, radiant-looking complexion.",
        ],
      },
      {
        name: "Scalp Hair Restoration & Growth Ritual",
        duration: "TBD",
        price: "TBD",
        includes: [
          "A non-invasive scalp ritual combining LED therapy, microcurrents, deep mechanical massage, and a concentrated hair growth tonic to stimulate circulation, nourish the scalp, and support healthier-looking hair.",
        ],
      },
    ],
  },

  {
    id: "signature",
    title: "Signature Ritual",
    bookingLink: "https://www.picktime.com/dspa",
    items: [
      {
        name: "Ocean Flow Ritual",
        duration: "110 min",
        price: "$295",
        includes: [
          "A luxurious face and body wellness journey inspired by the peaceful rhythm of the Hawaiian islands, combining guided aromatherapy, a honey facial ritual with Celluma LED Light Therapy, flowing full-body massage, tropical pineapple exfoliation for the feet and back, warm towels, heated stones, and a soothing scalp massage.",
        ],
      },
    ],
  },
];
// const sections: Section[] = [
//   {
//     id: "body",
//     title: "Body Treatments",
//     bookingLink: "https://www.picktime.com/dspa-body",
//     items: [
//       {
//         name: "Signature Body Massage",
//         duration: "60 min",
//         price: "$120",
//         includes: [
//           "Personalized consultation & body assessment",
//           "Customized massage techniques tailored to your needs",
//           "Full-body relaxation experience",
//           "Release of everyday tension and stress",
//           "Improved circulation and body balance",
//           "A calming ritual for complete relaxation",
//         ],
//       },

//       {
//         name: "Deep Tissue Massage",
//         duration: "60 min",
//         price: "$130",
//         includes: [
//           "Personalized consultation",
//           "Targeted work on areas of tension",
//           "Deep muscle relaxation techniques",
//           "Support for flexibility and mobility",
//           "Relief from stiffness and muscle fatigue",
//           "Restorative therapeutic experience",
//         ],
//       },

//       {
//         name: "Manual Lymphatic Drainage",
//         duration: "60 min",
//         price: "$130",
//         includes: [
//           "Personalized wellness consultation",
//           "Gentle lymphatic drainage techniques",
//           "Support for natural body detoxification",
//           "Reduction of puffiness and fluid retention",
//           "Improved circulation and lightness",
//           "Deep relaxation and renewed energy",
//         ],
//       },

//       {
//         name: "Body Sculpt & Detox",
//         duration: "60 min",
//         price: "$140",
//         includes: [
//           "Personalized body consultation",
//           "Sculpting massage techniques",
//           "Lymphatic stimulation",
//           "Improved circulation and body tone",
//           "Support for reducing water retention",
//           "A refreshed and revitalized feeling",
//         ],
//       },
//     ],
//   },


//   {
//     id: "face",
//     title: "Face Massage",
//     bookingLink: "https://www.picktime.com/dspa-face",
//     items: [
//       {
//         name: "Face Lifting Massage",
//         duration: "45 min",
//         price: "$90",
//         includes: [
//           "Personalized facial consultation",
//           "Lifting and toning massage techniques",
//           "Relaxation of facial tension",
//           "Improved facial circulation",
//           "Enhanced natural glow",
//           "A refreshed and lifted appearance",
//         ],
//       },

//       {
//         name: "Sculpting Face Massage",
//         duration: "45 min",
//         price: "$95",
//         includes: [
//           "Customized facial assessment",
//           "Advanced sculpting techniques",
//           "Facial contouring massage",
//           "Muscle relaxation and release",
//           "Improved skin tone and texture",
//           "Personalized facial ritual",
//         ],
//       },

//       {
//         name: "Lymphatic Face Drainage",
//         duration: "45 min",
//         price: "$100",
//         includes: [
//           "Personalized consultation",
//           "Gentle lymphatic facial techniques",
//           "Reduction of facial puffiness",
//           "Improved circulation",
//           "Relaxing and calming experience",
//           "Fresh, balanced appearance",
//         ],
//       },
//     ],
//   },


//   {
//     id: "facial",
//     title: "Facial Treatments",
//     bookingLink: "https://www.picktime.com/dspa-facial",
//     items: [
//       {
//         name: "Hydration Facial",
//         duration: "75 min",
//         price: "$140",
//         includes: [
//           "Personalized skin consultation",
//           "Professional cleansing ritual",
//           "Deep hydration treatment",
//           "Nourishing mask and skincare products",
//           "Skin moisture restoration",
//           "Healthy radiant glow",
//         ],
//       },

//       {
//         name: "Deep Cleansing Facial",
//         duration: "75 min",
//         price: "$150",
//         includes: [
//           "Skin analysis and consultation",
//           "Professional deep cleansing",
//           "Gentle exfoliation treatment",
//           "Pore purification",
//           "Customized skincare products",
//           "Fresh and renewed complexion",
//         ],
//       },

//       {
//         name: "Glow & Anti-Aging Facial",
//         duration: "75 min",
//         price: "$160",
//         includes: [
//           "Personalized skin assessment",
//           "Advanced anti-aging skincare ritual",
//           "Facial massage techniques",
//           "Skin brightening treatment",
//           "Improved radiance and texture",
//           "Luxury relaxation experience",
//         ],
//       },
//     ],
//   },
// ];

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

      {/* =========================
          HERO
      ========================= */}

      <div className="services-hero reveal">
        <h1>Services</h1>
        <p>Choose your ritual. Restore your body & mind</p>
      </div>


      {/* =========================
          NAVIGATION
      ========================= */}

      <div className="services-nav reveal">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
          >
            {section.title}
          </button>
        ))}

        <button onClick={() => scrollTo("gift")}>
          Gift
        </button>
      </div>


      {/* =========================
          SERVICES
      ========================= */}

      {sections.map((section) => {

        const categoryClass =
          section.id === "signature"
            ? " signature-category"
            : section.id === "addons"
            ? " addons-category"
            : "";

        return (
          <div
            key={section.id}
            id={section.id}
            className={`service-category reveal${categoryClass}`}
          >

            <h2 className="category-title">
              {section.title}
            </h2>


            {/* =========================
                SERVICE CARDS
            ========================= */}

            <div className="cards-grid">

              {section.items.map((item, i) => (

                <div
                  key={i}
                  className="service-card"
                  style={
                    {
                      "--i": i,
                    } as React.CSSProperties
                  }
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


            {/* =========================
                BOOK BUTTON
            ========================= */}

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
        );
      })}


      {/* =========================
          GIFT CERTIFICATES
      ========================= */}

      <div
        id="gift"
        className="gift-section reveal"
      >

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