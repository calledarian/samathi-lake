'use client'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <>
      {/* HERO */}
      <header
        className="vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white"
        data-aos="fade-in"
        style={{
          backgroundImage: "url('/samathi-lake-birdview.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        ></div>
        <div className="position-relative">
          <h1 className="display-2 fw-bold mb-3">Samathi Lake</h1>
          <p className="lead fs-4">Escape • Relax • Explore</p>
          <a href="/gallery" className="btn btn-outline-light mt-3 px-4 py-2 mx-2">
            Explore Gallery ↓
          </a>
          <a href="/menu" className="btn btn-outline-light mt-3 px-4 py-2 mx-2">
            Explore Menu {'->'}
          </a>
        </div>
      </header>

      {/* ABOUT */}
      <section
        className="bg-light text-center py-5 border-top"
        data-aos="fade-up"
      >
        <div className="container">
          <h3 className="fw-bold mb-3">About Samathi Lake</h3>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Tucked away in Phnom Penh, Samathi Lake offers serene water views,
            kayaking adventures, peaceful fishing, and cozy lakeside rooms.
            Enjoy good food, fresh air, and a break from the busy city life.
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            className="btn btn-outline-dark mt-3"
          >
            View on Google Maps
          </a>
        </div>
      </section>
    </>
  );
}
