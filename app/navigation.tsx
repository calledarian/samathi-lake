"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const routes = [
        { name: 'Home', path: '/' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Menu', path: '/menu' },
        // 
    ];

    // Add scroll listener to change navbar background on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`navbar navbar-expand-lg position-fixed w-100 top-0 transition-all ${isScrolled ? 'bg-dark shadow' : 'bg-transparent'
                }`}
            style={{
                zIndex: 1000,
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            }}
        >
            <div className="container py-2">
                <Link
                    className="navbar-brand text-white d-flex align-items-center"
                    href="/"
                    onClick={handleLinkClick}
                >
                    <Image
                        src="/samathi-lake-logo.jpg"
                        alt="Samathi Lake Logo"
                        width={60}
                        height={60}
                        className="rounded-circle me-2"
                        style={{ objectFit: 'cover' }}
                    />
                    <span className="fw-semibold">Samathi Lake</span>
                </Link>

                {/* Hamburger Toggler Button */}
                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    {!isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 30 30">
                            <path stroke="white" strokeWidth="2" strokeLinecap="round" d="M4 7h22M4 15h22M4 23h22" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                    )}
                </button>

                {/* Collapsible Menu Container */}
                <div
                    className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
                    id="navbarNav"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
                        {routes.map((route) => (
                            <li key={route.path} className="nav-item">
                                <Link
                                    href={route.path}
                                    className="nav-link text-white px-3 py-2 rounded position-relative"
                                    onClick={handleLinkClick}
                                    style={{
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                >
                                    {route.name}
                                </Link>
                            </li>
                        ))}
                        <li className="nav-item d-none d-lg-block">
                            <Link
                                href="tel:+1234567890"
                                className="btn btn-outline-light btn-sm px-3"
                                onClick={handleLinkClick}
                            >
                                Book Now
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}