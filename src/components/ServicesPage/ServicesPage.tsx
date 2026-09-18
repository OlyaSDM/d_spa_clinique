// import { useEffect } from "react";
// import "./ServicesPage.css";

// type Item = {
//   name: string;
//   duration: string;
//   price: string;
//   includes: string[];
// };

// type Section = {
//   id: string;
//   title: string;
//   bookingLink: string;
//   items: Item[];
// };


// const sections: Section[] = [
//   {
//     id: "body",
//     title: "Body Treatments",
//     bookingLink: "https://www.picktime.com/dspa-body",
//     items: [
//       {
//         name: "Therapeutic Massage | 1h",
//         duration: "1 hr",
//         price: "$120",
//         includes: [
//           "A customized full-body massage designed to release tension, improve circulation, and promote deep relaxation. The treatment is tailored to your individual needs and includes soothing massage techniques for a complete body relaxation experience.",
//         ],
//       },
//       {
//         name: "Therapeutic Massage | 1h30",
//         duration: "1 hr 30 mins",
//         price: "$180",
//         includes: [
//           "An extended therapeutic massage designed to provide deeper relaxation and more focused work on areas of tension. The additional time allows for a more comprehensive full-body experience tailored to your individual needs.",
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
//           "A lifting facial massage designed to release facial tension, stimulate circulation, and enhance the skin's natural glow. The treatment leaves the face looking refreshed, relaxed, and naturally lifted.",
//         ],
//       },
//       {
//         name: "Sculpting Face Massage",
//         duration: "45 min",
//         price: "$95",
//         includes: [
//           "A sculpting facial massage focused on defining facial contours and releasing muscle tension. The treatment helps improve circulation and creates a more toned, refreshed, and balanced appearance.",
//         ],
//       },
//       {
//         name: "Lymphatic Face Drainage",
//         duration: "45 min",
//         price: "$100",
//         includes: [
//           "A gentle lymphatic facial massage designed to support circulation and reduce facial puffiness. The treatment promotes a fresh, balanced appearance while providing a deeply calming and relaxing experience.",
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
//         name: "Advanced anti/aging",
//         duration: "1 hr 30 mins",
//         price: "$245",
//         includes: [
//           "An advanced anti-aging facial designed to improve skin texture, radiance, and the appearance of fine lines. The treatment includes customized skincare and professional techniques for a refreshed and rejuvenated complexion.",
//         ],
//       },
//       {
//         name: "Customized Facial",
//         duration: "1 hr 30 mins",
//         price: "$180",
//         includes: [
//           "A personalized facial tailored to your skin's current needs. The treatment combines professional cleansing, exfoliation, customized skincare, and targeted techniques for a fresh, balanced, and radiant complexion.",
//         ],
//       },
//       {
//         name: "Deep cleaning",
//         duration: "1 hr 30 mins",
//         price: "$190",
//         includes: [
//           "A thorough deep cleansing facial with professional skin preparation, exfoliation, extractions, a customized mask, and nourishing skincare. The extended treatment allows time for detailed preparation, professional extractions, and post-treatment care.",
//         ],
//       },
//       {
//         name: "Facial Massage",
//         duration: "1 hr",
//         price: "$140",
//         includes: [
//           "A relaxing facial treatment combining cleansing, facial massage, a customized mask, serum, eye cream, lip serum, moisturizer, and SPF to leave the skin refreshed, nourished, and glowing.",
//         ],
//       },
//       {
//         name: "Teen Facial",
//         duration: "1 hr 30 mins",
//         price: "$180",
//         includes: [
//           "A comprehensive facial for teens with more complex congestion and skin concerns. The extended treatment allows additional time for skin preparation, professional extractions, customized skincare, and post-treatment care.",
//         ],
//       },
//       {
//         name: "Teen Facial",
//         duration: "1 hr",
//         price: "$130",
//         includes: [
//           "A gentle facial designed for teens and first-time clients with light congestion or a few blackheads. The treatment includes cleansing, gentle exfoliation, targeted care, and soothing skincare for a fresh, balanced complexion.",
//         ],
//       },
//     ],
//   },

//   // {
//   //   id: "addons",
//   //   title: "Add-Ons",
//   //   bookingLink: "https://www.picktime.com/dspa-facial",
//   //   items: [
//   //     {
//   //       name: "Celluma LED Light Therapy",
//   //       duration: "TBD",
//   //       price: "TBD",
//   //       includes: [
//   //         "A relaxing LED light therapy session designed to complement your facial and support a healthy, radiant-looking complexion.",
//   //       ],
//   //     },
//   //     {
//   //       name: "Scalp Hair Restoration & Growth Ritual",
//   //       duration: "TBD",
//   //       price: "TBD",
//   //       includes: [
//   //         "A non-invasive scalp ritual combining LED therapy, microcurrents, deep mechanical massage, and a concentrated hair growth tonic to stimulate circulation, nourish the scalp, and support healthier-looking hair.",
//   //       ],
//   //     },
//   //   ],
//   // },

//   {
//     id: "signature",
//     title: "Signature Ritual",
//     bookingLink: "https://www.picktime.com/dspa",
//     items: [
//       {
//         name: "Ocean Flow Ritual",
//         duration: "1 hr 50 mins",
//         price: "$295",
//         includes: [
//           "A luxurious face and body wellness journey inspired by the peaceful rhythm of the Hawaiian islands, combining guided aromatherapy, a honey facial ritual with Celluma LED Light Therapy, flowing full-body massage, tropical pineapple exfoliation for the feet and back, warm towels, heated stones, and a soothing scalp massage.",
//         ],
//       },
//     ],
//   },
// ];
// // const sections: Section[] = [
// //   {
// //     id: "body",
// //     title: "Body Treatments",
// //     bookingLink: "https://www.picktime.com/dspa-body",
// //     items: [
// //       {
// //         name: "Signature Body Massage",
// //         duration: "60 min",
// //         price: "$120",
// //         includes: [
// //           "A customized full-body massage designed to release tension, improve circulation, and promote deep relaxation. The treatment is tailored to your individual needs and includes soothing massage techniques for a complete body relaxation experience.",
// //         ],
// //       },
// //       {
// //         name: "Deep Tissue Massage",
// //         duration: "60 min",
// //         price: "$130",
// //         includes: [
// //           "A therapeutic massage using deeper pressure and focused techniques to target areas of muscle tension and stiffness. Designed to relieve muscle fatigue, improve mobility, and promote deep relaxation.",
// //         ],
// //       },
// //       {
// //         name: "Manual Lymphatic Drainage",
// //         duration: "60 min",
// //         price: "$130",
// //         includes: [
// //           "A gentle, rhythmic massage designed to support natural lymphatic flow and circulation. The treatment helps reduce puffiness and fluid retention while promoting a light, refreshed, and deeply relaxed feeling.",
// //         ],
// //       },
// //       {
// //         name: "Body Sculpt & Detox",
// //         duration: "60 min",
// //         price: "$140",
// //         includes: [
// //           "A sculpting body massage combining targeted techniques and lymphatic stimulation to support circulation, reduce water retention, and enhance body tone. A revitalizing treatment designed to leave the body feeling lighter and refreshed.",
// //         ],
// //       },
// //     ],
// //   },

// //   {
// //     id: "face",
// //     title: "Face Massage",
// //     bookingLink: "https://www.picktime.com/dspa-face",
// //     items: [
// //       {
// //         name: "Face Lifting Massage",
// //         duration: "45 min",
// //         price: "$90",
// //         includes: [
// //           "A lifting facial massage designed to release facial tension, stimulate circulation, and enhance the skin's natural glow. The treatment leaves the face looking refreshed, relaxed, and naturally lifted.",
// //         ],
// //       },
// //       {
// //         name: "Sculpting Face Massage",
// //         duration: "45 min",
// //         price: "$95",
// //         includes: [
// //           "A sculpting facial massage focused on defining facial contours and releasing muscle tension. The treatment helps improve circulation and creates a more toned, refreshed, and balanced appearance.",
// //         ],
// //       },
// //       {
// //         name: "Lymphatic Face Drainage",
// //         duration: "45 min",
// //         price: "$100",
// //         includes: [
// //           "A gentle lymphatic facial massage designed to support circulation and reduce facial puffiness. The treatment promotes a fresh, balanced appearance while providing a deeply calming and relaxing experience.",
// //         ],
// //       },
// //     ],
// //   },

// //   {
// //     id: "facial",
// //     title: "Facial Treatments",
// //     bookingLink: "https://www.picktime.com/dspa-facial",
// //     items: [
// //       {
// //         name: "Teen Facial",
// //         duration: "60 min",
// //         price: "TBD",
// //         includes: [
// //           "A gentle facial designed for teens and first-time clients with light congestion or a few blackheads. The treatment includes cleansing, gentle exfoliation, targeted care, and soothing skincare for a fresh, balanced complexion.",
// //         ],
// //       },
// //       {
// //         name: "Teen Facial",
// //         duration: "90 min",
// //         price: "TBD",
// //         includes: [
// //           "A comprehensive facial for teens with more complex congestion and skin concerns. The extended treatment allows additional time for skin preparation, professional extractions, customized skincare, and post-treatment care.",
// //         ],
// //       },
// //       {
// //         name: "Deep Cleansing Facial",
// //         duration: "90 min",
// //         price: "TBD",
// //         includes: [
// //           "A thorough deep cleansing facial with professional skin preparation, exfoliation, extractions, a customized mask, and nourishing skincare. The extended treatment allows time for detailed preparation, professional extractions, and post-treatment care.",
// //         ],
// //       },
// //       {
// //         name: "Anti-Aging Treatment",
// //         duration: "60 min",
// //         price: "TBD",
// //         includes: [
// //           "An advanced anti-aging facial designed to improve skin texture, radiance, and the appearance of fine lines. The treatment includes customized skincare and microneedling for a refreshed and rejuvenated complexion.",
// //         ],
// //       },
// //       {
// //         name: "Anti-Aging Treatment",
// //         duration: "90 min",
// //         price: "TBD",
// //         includes: [
// //           "An extended anti-aging experience combining customized skincare and microneedling with additional time for thorough preparation, treatment, and post-care for a more complete rejuvenating experience.",
// //         ],
// //       },
// //     ],
// //   },

// //   {
// //     id: "addons",
// //     title: "Add-Ons",
// //     bookingLink: "https://www.picktime.com/dspa-facial",
// //     items: [
// //       {
// //         name: "Celluma LED Light Therapy",
// //         duration: "TBD",
// //         price: "TBD",
// //         includes: [
// //           "A relaxing LED light therapy session designed to complement your facial and support a healthy, radiant-looking complexion.",
// //         ],
// //       },
// //       {
// //         name: "Scalp Hair Restoration & Growth Ritual",
// //         duration: "TBD",
// //         price: "TBD",
// //         includes: [
// //           "A non-invasive scalp ritual combining LED therapy, microcurrents, deep mechanical massage, and a concentrated hair growth tonic to stimulate circulation, nourish the scalp, and support healthier-looking hair.",
// //         ],
// //       },
// //     ],
// //   },

// //   {
// //     id: "signature",
// //     title: "Signature Ritual",
// //     bookingLink: "https://www.picktime.com/dspa",
// //     items: [
// //       {
// //         name: "Ocean Flow Ritual",
// //         duration: "110 min",
// //         price: "$295",
// //         includes: [
// //           "A luxurious face and body wellness journey inspired by the peaceful rhythm of the Hawaiian islands, combining guided aromatherapy, a honey facial ritual with Celluma LED Light Therapy, flowing full-body massage, tropical pineapple exfoliation for the feet and back, warm towels, heated stones, and a soothing scalp massage.",
// //         ],
// //       },
// //     ],
// //   },
// // ];


// export default function ServicesPage() {
//   const scrollTo = (id: string) => {
//     const el = document.getElementById(id);

//     if (el) {
//       el.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   useEffect(() => {
//     const elements = document.querySelectorAll(".reveal");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="services-page">

//       {/* =========================
//           HERO
//       ========================= */}

//       <div className="services-hero reveal">
//         <h1>Services</h1>
//         <p>Choose your ritual. Restore your body & mind</p>
//       </div>


//       {/* =========================
//           NAVIGATION
//       ========================= */}

//       <div className="services-nav reveal">
//         {sections.map((section) => (
//           <button
//             key={section.id}
//             onClick={() => scrollTo(section.id)}
//           >
//             {section.title}
//           </button>
//         ))}

//         <button onClick={() => scrollTo("gift")}>
//           Gift
//         </button>
//       </div>


//       {/* =========================
//           SERVICES
//       ========================= */}

//       {sections.map((section) => {

//         const categoryClass =
//           section.id === "signature"
//             ? " signature-category"
//             : section.id === "addons"
//             ? " addons-category"
//             : "";

//         return (
//           <div
//             key={section.id}
//             id={section.id}
//             className={`service-category reveal${categoryClass}`}
//           >

//             <h2 className="category-title">
//               {section.title}
//             </h2>


//             {/* =========================
//                 SERVICE CARDS
//             ========================= */}

//             <div className="cards-grid">

//               {section.items.map((item, i) => (

//                 <div
//                   key={i}
//                   className="service-card"
//                   style={
//                     {
//                       "--i": i,
//                     } as React.CSSProperties
//                   }
//                 >

//                   <h3>
//                     {item.name}
//                   </h3>


//                   <div className="meta">
//                     <span>{item.duration}</span>
//                     <span>{item.price}</span>
//                   </div>


//                   <ul className="includes-list">
//                     {item.includes.map((point, index) => (
//                       <li key={index}>
//                         {point}
//                       </li>
//                     ))}
//                   </ul>

//                 </div>

//               ))}

//             </div>


//             {/* =========================
//                 BOOK BUTTON
//             ========================= */}

//             <div className="category-book">

//               <a
//                 href={section.bookingLink}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="book-btn"
//               >
//                 Book {section.title}
//               </a>

//             </div>

//           </div>
//         );
//       })}


//       {/* =========================
//           GIFT CERTIFICATES
//       ========================= */}

//       <div
//         id="gift"
//         className="gift-section reveal"
//       >

//         <div className="gift-card">

//           <h2>
//             Gift Certificates
//           </h2>

//           <p>
//             Give the gift of relaxation & beauty
//           </p>

//           <a
//             href="https://www.picktime.com/dspa-gift"
//             target="_blank"
//             rel="noreferrer"
//             className="book-btn"
//           >
//             Buy Gift Card
//           </a>

//         </div>

//       </div>

//     </section>
//   );
// }


import { useEffect } from "react";
import "./ServicesPage.css";

type Item = {
  name: string;
  duration: string;
  price: string;
  bookingLink: string;
  includes: string[];
};

type Section = {
  id: string;
  title: string;
  items: Item[];
};

const sections: Section[] = [
  {
    id: "body",
    title: "Body Treatments",
    items: [
      {
        name: "Therapeutic Massage | 1h",
        duration: "1 hr",
        price: "$120",
        bookingLink:
          "  https://app.squareup.com/appointments/book/9jgdwijs8xlh94/L3SQ5QJV067N3/start",
        includes: [
          "A customized full-body massage designed to release tension, improve circulation, and promote deep relaxation. The treatment is tailored to your individual needs and includes soothing massage techniques for a complete body relaxation experience.",
        ],
      },
      {
        name: "Therapeutic Massage | 1h30",
        duration: "1 hr 30 mins",
        price: "$180",
        bookingLink:
          "https://book.squareup.com/appointments/9jgdwijs8xlh94/location/L3SQ5QJV067N3/services/EGJ7OQTQQX26Y6FYQXOBWRO6",
        includes: [
          "An extended therapeutic massage designed to provide deeper relaxation and more focused work on areas of tension. The additional time allows for a more comprehensive full-body experience tailored to your individual needs.",
        ],
      },
    ],
  },

  {
    id: "face",
    title: "Face Massage",
    items: [
      {
        name: "Face Lifting Massage",
        duration: "45 min",
        price: "$90",
        bookingLink: "https://www.picktime.com/dspa-face",
        includes: [
          "A lifting facial massage designed to release facial tension, stimulate circulation, and enhance the skin's natural glow. The treatment leaves the face looking refreshed, relaxed, and naturally lifted.",
        ],
      },
      {
        name: "Sculpting Face Massage",
        duration: "45 min",
        price: "$95",
        bookingLink: "https://www.picktime.com/dspa-face",
        includes: [
          "A sculpting facial massage focused on defining facial contours and releasing muscle tension. The treatment helps improve circulation and creates a more toned, refreshed, and balanced appearance.",
        ],
      },
      {
        name: "Lymphatic Face Drainage",
        duration: "45 min",
        price: "$100",
        bookingLink: "https://www.picktime.com/dspa-face",
        includes: [
          "A gentle lymphatic facial massage designed to support circulation and reduce facial puffiness. The treatment promotes a fresh, balanced appearance while providing a deeply calming and relaxing experience.",
        ],
      },
    ],
  },

  {
    id: "facial",
    title: "Facial Treatments",
    items: [
      {
        name: "Advanced anti/aging",
        duration: "1 hr 30 mins",
        price: "$245",
        bookingLink:
          "https://book.squareup.com/appointments/9jgdwijs8xlh94/location/L3SQ5QJV067N3/services/GQ53ABEL34O27V456B4PFGFS",
        includes: [
          "An advanced anti-aging facial designed to improve skin texture, radiance, and the appearance of fine lines. The treatment includes customized skincare and professional techniques for a refreshed and rejuvenated complexion.",
        ],
      },
      {
        name: "Customized Facial",
        duration: "1 hr 30 mins",
        price: "$180",
        bookingLink:
          "https://book.squareup.com/appointments/9jgdwijs8xlh94/location/L3SQ5QJV067N3/services/5EJYV5UW5DBFFZJUEIJZ7BVC",
        includes: [
          "A personalized facial tailored to your skin's current needs. The treatment combines professional cleansing, exfoliation, customized skincare, and targeted techniques for a fresh, balanced, and radiant complexion.",
        ],
      },
      {
        name: "Deep cleaning",
        duration: "1 hr 30 mins",
        price: "$190",
        bookingLink:
          "https://book.squareup.com/appointments/9jgdwijs8xlh94/location/L3SQ5QJV067N3/services/DZFMUYZOG5TAJUR57AALNUCP",
        includes: [
          "A thorough deep cleansing facial with professional skin preparation, exfoliation, extractions, a customized mask, and nourishing skincare. The extended treatment allows time for detailed preparation, professional extractions, and post-treatment care.",
        ],
      },
      {
        name: "Facial Massage",
        duration: "1 hr",
        price: "$140",
        bookingLink:
          "https://book.squareup.com/appointments/9jgdwijs8xlh94/location/L3SQ5QJV067N3/services/ICOLLRBN6KPNYKEC3BWV73BL",
        includes: [
          "A relaxing facial treatment combining cleansing, facial massage, a customized mask, serum, eye cream, lip serum, moisturizer, and SPF to leave the skin refreshed, nourished, and glowing.",
        ],
      },
      {
        name: "Teen Facial",
        duration: "1 hr 30 mins",
        price: "$180",
        bookingLink:
          "https://book.squareup.com/appointments/9jgdwijs8xlh94/location/L3SQ5QJV067N3/services/EY5MPUXTUXJ2UUUO5SPWKERP",
        includes: [
          "A comprehensive facial for teens with more complex congestion and skin concerns. The extended treatment allows additional time for skin preparation, professional extractions, customized skincare, and post-treatment care.",
        ],
      },
      {
        name: "Teen Facial",
        duration: "1 hr",
        price: "$130",
        bookingLink:
          "https://book.squareup.com/appointments/9jgdwijs8xlh94/location/L3SQ5QJV067N3/services/QYKJEFQRTWJIUM6INXA25QRU",
        includes: [
          "A gentle facial designed for teens and first-time clients with light congestion or a few blackheads. The treatment includes cleansing, gentle exfoliation, targeted care, and soothing skincare for a fresh, balanced complexion.",
        ],
      },
    ],
  },

  {
    id: "signature",
    title: "Signature Ritual",
    items: [
      {
        name: "Ocean Flow Ritual",
        duration: "1 hr 50 mins",
        price: "$295",
        bookingLink:
          "https://book.squareup.com/appointments/9jgdwijs8xlh94/location/L3SQ5QJV067N3/services/M2AG3IDGK3KRSCKBCD6VVWVO",
        includes: [
          "A luxurious face and body wellness journey inspired by the peaceful rhythm of the Hawaiian islands, combining guided aromatherapy, a honey facial ritual with Celluma LED Light Therapy, flowing full-body massage, tropical pineapple exfoliation for the feet and back, warm towels, heated stones, and a soothing scalp massage.",
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


                  {/* =========================
                      BOOK BUTTON
                  ========================= */}

<div className="book-btn-wrapper">
  <a
    href={item.bookingLink}
    target="_blank"
    rel="noreferrer"
    className="book-btn"
  >
    Book Now
  </a>
</div>

                </div>

              ))}

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
            href="https://app.squareup.com/gift/1QTAYX00HK6H8/order"
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