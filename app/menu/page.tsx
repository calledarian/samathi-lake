'use client';

import React from 'react';
import AOS from "aos";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string | null;
}

interface MenuCategory {
  id: number;
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 1,
    title: 'Starters',
    items: [
      {
        id: 'S1',
        name: 'Fried Spring Rolls',
        description: 'Crispy vegetable rolls served with sweet chili sauce',
        price: '$3.50',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&h=300'
      },
      {
        id: 'S2',
        name: 'Grilled Prawns',
        description: 'Fresh prawns grilled to perfection',
        price: '$6.00',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&h=300'
      },
      {
        id: 'S3',
        name: 'Fresh Spring Salad',
        description: 'Mixed greens with seasonal vegetables',
        price: '$4.00',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&h=300'
      }
    ]
  },
  {
    id: 2,
    title: 'Main Dishes',
    items: [
      {
        id: 'M1',
        name: 'Grilled Fish',
        description: 'Local catch grilled with herbs and spices',
        price: '$8.50',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&h=300'
      },
      {
        id: 'M2',
        name: 'Chicken Curry',
        description: 'Traditional Cambodian curry served with rice',
        price: '$7.50',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&h=300'
      },
      {
        id: 'M3',
        name: 'Beef Stir Fry',
        description: 'Tender beef with vegetables and oyster sauce',
        price: '$9.00',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&h=300'
      },
      {
        id: 'M4',
        name: 'Seafood Platter',
        description: 'Prawns, squid, and fish served with rice',
        price: '$12.50',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&h=300'
      }
    ]
  },
  {
    id: 3,
    title: 'Drinks',
    items: [
      {
        id: 'D1',
        name: 'Tropical Smoothie',
        description: 'Fresh fruit smoothie made daily',
        price: '$3.00',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&h=300'
      },
      {
        id: 'D2',
        name: 'Coconut Water',
        description: 'Freshly cracked coconut',
        price: '$2.50',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&h=300'
      },
      {
        id: 'D3',
        name: 'Fresh Lemonade',
        description: 'Homemade lemonade with mint',
        price: '$2.75',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&h=300'
      },
      {
        id: 'D4',
        name: 'Ice Coffee',
        description: 'Cold brewed coffee with milk',
        price: '$3.50',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&h=300'
      }
    ]
  },
  {
    id: 4,
    title: 'Desserts',
    items: [
      {
        id: 'DS1',
        name: 'Tropical Fruit Platter',
        description: 'Fresh seasonal fruits',
        price: '$4.50',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&h=300'
      },
      {
        id: 'DS2',
        name: 'Coconut Cake',
        description: 'Soft coconut cake with cream',
        price: '$3.75',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&h=300'
      }
    ]
  },
  {
    id: 5,
    title: 'Specials',
    items: [
      {
        id: 'SP1',
        name: 'Chef’s Combo',
        description: 'Grilled fish + chicken curry + drink',
        price: '$15.00',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&h=300'
      },
      {
        id: 'SP2',
        name: 'Weekend Seafood Special',
        description: 'Prawns and squid platter with side salad',
        price: '$18.50',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&h=300'
      }
    ]
  }
];


// Replace these with your restaurant's Telegram username and WhatsApp number
const TELEGRAM_USERNAME = 'calledarian';
const WHATSAPP_NUMBER = '+855969030402'; // dont need for country code nor 0

const RestaurantMenu: React.FC = () => {

  React.useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);
  const encodeMessage = (itemName: string) =>
    encodeURIComponent(
      `Hello Samathi Lake! I’m interested in ordering this menu item: "${itemName}". Could you please help me with this?`
    );

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
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: 'var(--primary)', color: 'var(--highlight)', minHeight: '100vh' }}
      >
        <div className="container">
          <h1
            className="text-center mb-5 fw-bold"
            style={{ color: 'var(--highlight)', fontSize: '3rem' }}
          >
            Restaurant Menu
          </h1>

          {menuData.map((category) => (
            <div key={category.id} className="mb-5"
              data-aos="fade-in">
              <h3
                className="mb-4 fw-bold"
                style={{
                  color: 'var(--secondary)',
                  borderBottom: '2px solid var(--secondary)',
                  paddingBottom: '5px'
                }}
              >
                {category.title}
              </h3>

              <div className="row">
                {category.items.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4 px-4">
                    <div
                      className="card h-100 shadow-sm"
                      style={{
                        borderColor: 'var(--highlight)',
                        backgroundColor: 'var(--foreground)'
                      }}
                    >
                      <img
                        src={item.image || 'https://via.placeholder.com/400x300?text=No+Image'}
                        className="card-img-top"
                        alt={item.name}
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title d-flex justify-content-between align-items-center">
                          <span style={{ color: 'var(--primary)' }}>{item.name}</span>
                          <span className="fw-bold" style={{ color: 'var(--highlight)' }}>
                            {item.price}
                          </span>
                        </h5>
                        {item.description && (
                          <p className="card-text" style={{ color: 'var(--primary)' }}>
                            {item.description}
                          </p>
                        )}

                        {/* Telegram & WhatsApp buttons */}
                        <div className="mt-3 d-flex gap-3">
                          <a
                            href={`https://t.me/${TELEGRAM_USERNAME}?text=${encodeMessage(item.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary w-50 d-flex align-items-center justify-content-center"
                          >
                            <i className="bi bi-telegram me-2"></i>Telegram
                          </a>
                          <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeMessage(item.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success w-50 d-flex align-items-center justify-content-center"
                          >
                            <i className="bi bi-whatsapp me-2"></i>WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;