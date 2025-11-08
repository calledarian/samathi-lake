'use client';

import { useEffect } from "react";
import AOS from "aos";

export default function Rooms() {

    useEffect(() => {
        AOS.init({ duration: 600, once: true });
    }, []);

    const rooms = [
        {
            id: 1,
            name: "Lakeview Bungalow",
            description: "Enjoy a peaceful stay with a full lake view and private balcony.",
            image: "/samathi-lake.jpg",
        },
        {
            id: 2,
            name: "Garden Villa",
            description: "Relax in a cozy villa surrounded by nature and beautiful gardens.",
            image: "/samathi-lake.jpg",
        },
        {
            id: 3,
            name: "Family Suite",
            description: "Spacious suite ideal for families, with two bedrooms and a living area.",
            image: "/samathi-lake.jpg",
        }
    ];

    return (
        <>
            {/* HERO */}
            <header
                className="vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white"
                data-aos="fade-in"
                style={{
                    backgroundImage: "url('/samathi-lake-tables.jpg')",
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

            {/* ROOMS SECTION */}
            <section className="py-5 bg-light text-center">
                <div className="container">
                    <h2 className="fw-bold mb-5">Our Rooms</h2>
                    <div className="row">
                        {rooms.map((room) => (
                            <div key={room.id} className="col-md-4 mb-4"
                                data-aos="fade-in">
                                <div className="card h-100 shadow-sm border-0">
                                    <img
                                        src={room.image}
                                        className="card-img-top"
                                        alt={room.name}
                                        style={{ height: "250px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{room.name}</h5>
                                        <p className="card-text text-muted">{room.description}</p>
                                        <a href={`/rooms/${room.id}`} className="btn btn-primary">
                                            View More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
