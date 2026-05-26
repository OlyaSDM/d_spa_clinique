import "./Services.css";
import React from "react";

const services = [
  {
    title: "Facial Care",
    desc: "Deep skin renewal & hydration",
    img: "/img/facial.jpg",
  },
  {
    title: "Massage",
    desc: "Relaxation therapy rituals",
    img: "/img/massage.jpg",
  },
  {
    title: "Laser",
    desc: "Advanced skin correction",
    img: "/img/laser.jpg",
  },
  {
    title: "Body Care",
    desc: "Full body regeneration",
    img: "/img/body.jpg",
  },
];

export default function Services() {
  return (
    <section className="services-wrapper">
      <h2 className="services-title">Services</h2>

      <div className="services-grid">
        {services.map((item, i) => (
          <div
            key={i}
            className="service-tile"
            style={{ "--img": `url(${item.img})` } as React.CSSProperties}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}