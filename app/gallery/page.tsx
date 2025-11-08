"use client";

import { useEffect } from "react";
import AOS from "aos";

import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Image from "next/image";
import dynamic from "next/dynamic";

const LightGallery = dynamic(() => import("lightgallery/react"), { ssr: false });

export default function Gallery() {
    useEffect(() => {
        AOS.init({ duration: 600, once: true });
    }, []);

    const photos = [
        { src: "/samathi-lake-birdview.jpg", alt: "Samathi Lake Bird View" },
        { src: "/samathi-lake.jpg", alt: "Samathi Lake" },
        { src: "/samathi-lake-tables.jpg", alt: "Samathi Lake Tables" },
        // { src: "/food.jpg", alt: "Local Food" },
    ];

    return (
        <>
            {/* HERO */}
            <header
                className="vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white"
                data-aos="fade-in"

                style={{
                    backgroundImage: "url('/samathi-lake.jpg')",
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
            <section className="container py-5" id="gallery">
                <h2 className="text-center mb-4 fw-bold">Discover the Beauty</h2>
                <LightGallery
                    speed={500}
                    plugins={[lgZoom, lgThumbnail]}
                    selector=".gallery-item"
                >
                    <div className="masonry-grid"
                        data-aos="fade-in">
                        {photos.map((p, i) => (
                            <div key={i}>
                                <a href={p.src} className="gallery-item">
                                    <Image
                                        src={p.src}
                                        alt={p.alt}
                                        width={400}
                                        height={0}
                                        sizes="(max-width: 768px) 50vw, 33vw"
                                        className="img-fluid rounded shadow-sm"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </LightGallery>
            </section>
        </>
    )
}