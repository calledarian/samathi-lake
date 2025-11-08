"use client";
import React from "react";
import AOS from "aos";
import { useParams } from "next/navigation";

const rooms = [
    {
        id: 1,
        name: "Lakeview Bungalow",
        description:
            "Enjoy a peaceful stay with a full lake view and private balcony. Includes breakfast and lake access.",
        image: "/samathi-lake.jpg",
        amenities: ["Private Balcony", "Free WiFi", "Breakfast Included", "Air Conditioning"],
    },
    {
        id: 2,
        name: "Garden Villa",
        description:
            "Relax in a cozy villa surrounded by tropical gardens. Perfect for couples or solo travelers.",
        image: "/samathi-lake.jpg",
        amenities: ["Garden View", "Room Service", "Mini Fridge", "Hot Shower"],
    },
    {
        id: 3,
        name: "Family Suite",
        description:
            "Spacious suite ideal for families, with two bedrooms, a living area, and a small kitchen.",
        image: "/samathi-lake.jpg",
        amenities: ["2 Bedrooms", "Kitchen", "Smart TV", "Private Bathroom"],
    },
];

export default function RoomDetailPage() {
    // 💡 UPDATED: Added state for check-out date
    const [checkInDate, setCheckInDate] = React.useState("");
    const [checkOutDate, setCheckOutDate] = React.useState("");
    const [numberOfGuests, setNumberOfGuests] = React.useState("");

    React.useEffect(() => {
        AOS.init({ duration: 600, once: true });
    }, []);

    const params = useParams();
    const room = rooms.find((r) => r.id === Number(params?.id));

    // Replace these with your restaurant's Telegram username and WhatsApp number
    const TELEGRAM_USERNAME = 'calledarian';
    const WHATSAPP_NUMBER = '+855969030402'; // dont need for country code nor 0

    // 💡 UPDATED: encodeMessage now accepts both check-in and check-out dates
    const encodeMessage = (roomName: string, checkIn: string, checkOut: string, guests: string) => {
        let message = `Hello, I would like to book the room: **${roomName}** at Samathi Lake.`;
        
        if (checkIn) {
            message += `\n**Check-in Date:** ${checkIn}`;
        }
        if (checkOut) {
            message += `\n**Check-out Date:** ${checkOut}`;
        }
        if (guests) {
            message += `\n**Number of Guests:** ${guests}`;
        }

        message += `\nPlease provide me with more details. Thank you!`;
        return encodeURIComponent(message);
    }
    
    // Determine if all required booking details are entered
    const isReadyToBook = checkInDate && checkOutDate && numberOfGuests;

    // ✅ Case: Room not found
    if (!room) {
        return (
            <>
                <div className="container py-5 text-center">
                    <h1>Room not found</h1>
                    <a href="/rooms" className="btn btn-outline-primary mt-3">
                        ← Back to Rooms
                    </a>
                </div>
            </>
        );
    }

    // Generate the encoded messages with current state values
    const telegramLink = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeMessage(room.name, checkInDate, checkOutDate, numberOfGuests)}`;
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeMessage(room.name, checkInDate, checkOutDate, numberOfGuests)}`;

    // ✅ Case: Room exists
    return (
        <>
            <header
                className="vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white"
                data-aos="fade-in"
                style={{
                    backgroundImage: `url("${room.image}")`,
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

            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img
                            src={room.image}
                            alt={room.name}
                            className="img-fluid rounded shadow-sm"
                            style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
                        />
                    </div>
                    <div className="col-md-6">
                        <h2 className="fw-bold mb-3">{room.name}</h2>
                        <p className="text-muted mb-4">{room.description}</p>

                        <h5 className="fw-semibold">Amenities</h5>
                        <ul className="list-unstyled mb-4">
                            {room.amenities.map((a) => (
                                <li key={a}>• {a}</li>
                            ))}
                        </ul>

                        {/* 💡 UPDATED Section for Booking Fields */}
                        <div className="card p-4 mb-4 shadow-sm">
                            <h5 className="fw-bold mb-3">Book This Room</h5>
                            <div className="row g-3 mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="checkInDate" className="form-label">Check-in Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="checkInDate"
                                        value={checkInDate}
                                        onChange={(e) => setCheckInDate(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="checkOutDate" className="form-label">Check-out Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="checkOutDate"
                                        value={checkOutDate}
                                        onChange={(e) => setCheckOutDate(e.target.value)}
                                        min={checkInDate} 
                                        disabled={!checkInDate}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="numberOfGuests" className="form-label">Number of Guests</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="numberOfGuests"
                                    value={numberOfGuests}
                                    onChange={(e) => setNumberOfGuests(e.target.value)}
                                    min="1"
                                    required
                                />
                            </div>
                            {!isReadyToBook && (
                                <p className="text-danger small mt-2">Please select check-in date, check-out date, and number of guests to book.</p>
                            )}
                        </div>
                        {/* 💡 End UPDATED Section */}

                        <a href="/rooms" className="btn btn-outline-primary mt-3">
                            ← Back to Rooms
                        </a>
                        <div className="mt-3 d-flex gap-3">
                            <a
                                href={telegramLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn btn-primary w-50 d-flex align-items-center justify-content-center ${!isReadyToBook ? 'disabled' : ''}`}
                                aria-disabled={!isReadyToBook}
                            >
                                <i className="bi bi-telegram me-2"></i>Book By Telegram
                            </a>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn btn-success w-50 d-flex align-items-center justify-content-center ${!isReadyToBook ? 'disabled' : ''}`}
                                aria-disabled={!isReadyToBook}
                            >
                                <i className="bi bi-whatsapp me-2"></i>Book By WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}