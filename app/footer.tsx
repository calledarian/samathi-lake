import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const navigationLinks = [
        { name: 'Home', path: '/' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Menu', path: '/menu' },
        { name: 'About Us', path: '/about' },
    ];

    const socialLinks = [
        { name: 'Telegram', icon: 'bi-telegram', url: 'https://t.me/yourtelegramusername' },
        { name: 'WhatsApp', icon: 'bi-whatsapp', url: 'https://wa.me/85512345678' },
        { name: 'Facebook', icon: 'bi-facebook', url: 'https://facebook.com/samathilake' },
        { name: 'Instagram', icon: 'bi-instagram', url: 'https://instagram.com/samathilake' },
    ];

    const contactInfo = [
        {
            icon: 'bi-geo-alt-fill',
            text: 'Street 2011, Phnom Penh, Cambodia',
            link: 'https://maps.google.com/?q=Street+2011+Phnom+Penh',
            target: '_blank'
        },
        {
            icon: 'bi-telephone-fill',
            text: '+855 12 345 678',
            link: 'tel:+85512345678'
        },
        {
            icon: 'bi-envelope-fill',
            text: 'info@samathilake.com',
            link: 'mailto:info@samathilake.com'
        },
    ];

    const openingHours = [
        { days: 'Monday - Friday', hours: '9AM - 10PM' },
        { days: 'Saturday - Sunday', hours: '8AM - 11PM' },
        { days: 'Public Holidays', hours: '8AM - 11PM' },
    ];

    return (
        <footer className="bg-dark text-white">
            <div className="container py-5">
                <div className="row g-4 g-lg-5">
                    {/* Brand & Description */}
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex flex-column gap-3">
                            <Link href="/" className="text-decoration-none">
                                <div className="d-flex align-items-center gap-2">
                                    <Image
                                        src="/samathi-lake-logo.jpg"
                                        alt="Samathi Lake Logo"
                                        width={50}
                                        height={50}
                                        className="rounded-circle"
                                    />
                                    <span className="h4 text-white mb-0">Samathi Lake</span>
                                </div>
                            </Link>
                            
                            <p className="text-white-50 mb-0">
                                Your perfect escape from the city. Experience tranquility, 
                                delicious cuisine, and breathtaking lakeside views.
                            </p>

                            <div className="d-flex gap-3 mt-2">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                                        style={{ width: '40px', height: '40px' }}
                                        aria-label={social.name}
                                    >
                                        <i className={`bi ${social.icon} fs-5`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3 pb-2 border-bottom border-secondary">Quick Links</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            {navigationLinks.map((link) => (
                                <li key={link.path}>
                                    <Link href={link.path} className="text-white-50 text-decoration-none d-inline-flex align-items-center gap-1">
                                        <i className="bi bi-chevron-right small"></i>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-3 pb-2 border-bottom border-secondary">Contact Info</h5>
                        <ul className="list-unstyled d-flex flex-column gap-3">
                            {contactInfo.map((contact, index) => (
                                <li key={index}>
                                    <a 
                                        href={contact.link}
                                        target={contact.target}
                                        rel={contact.target ? 'noopener noreferrer' : undefined}
                                        className="text-white-50 text-decoration-none d-flex align-items-start gap-2"
                                    >
                                        <i className={`bi ${contact.icon} mt-1`}></i>
                                        <span>{contact.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-3 pb-2 border-bottom border-secondary">Opening Hours</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            {openingHours.map((schedule, index) => (
                                <li key={index} className="d-flex justify-content-between">
                                    <span className="text-white-50">{schedule.days}</span>
                                    <span className="text-white">{schedule.hours}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href="/menu" className="btn btn-outline-light w-100 mt-3">
                            <i className="bi bi-calendar-check me-2"></i>
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-top border-secondary">
                <div className="container py-3">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                        <p className="text-white-50 mb-0 small">
                            © 2025 Samathi Lake. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}