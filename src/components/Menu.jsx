import React, { useState } from 'react';
import './Menu.css';

const menuData = {
  "Appetizers": [
    { name: "Crispy Honey Chilli Lotus Stem", price: 250, desc: "Crispy fried lotus stem tossed in honey chilli sauce." },
    { name: "Tandoori Paneer Tikka", price: 300, desc: "Cottage cheese marinated in yogurt and spices, char-grilled." },
    { name: "Chicken 65", price: 350, desc: "Spicy, deep-fried chicken bites with curry leaves." },
  ],
  "Indian Main Course": [
    { name: "Authentic Butter Chicken", price: 450, desc: "Tender chicken simmered in a rich, creamy tomato gravy." },
    { name: "Paneer Lababdar", price: 400, desc: "Soft paneer cubes in a luscious, spiced onion-tomato sauce." },
    { name: "Dal Makhani", price: 300, desc: "Black lentils slow-cooked overnight with butter and cream." },
  ],
  "Chinese Main Course": [
    { name: "Hakka Noodles", price: 280, desc: "Classic stir-fried noodles with fresh vegetables." },
    { name: "Chilli Chicken Dry/Gravy", price: 420, desc: "Diced chicken tossed in soy, garlic, and green chillies." },
    { name: "Veg Manchurian", price: 350, desc: "Vegetable dumplings in a tangy soy-based sauce." },
  ],
  "Desserts & Beverages": [
    { name: "Signature Brownie Sizzler", price: 320, desc: "Warm walnut brownie with vanilla ice cream and hot chocolate." },
    { name: "Classic Mojito", price: 250, desc: "Refreshing blend of mint, lime, and soda." },
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Indian Main Course");

  return (
    <section id="menu" className="section menu-section">
      <h2 className="section-title">Our Menu</h2>
      <p className="menu-intro">Average Bill: ~ INR 500-800 for two</p>

      <div className="menu-tabs">
        {Object.keys(menuData).map(category => (
          <button 
            key={category} 
            className={`menu-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-content block-fade-in">
        <div className="menu-grid">
          {menuData[activeCategory].map((item, index) => (
            <div key={index} className="menu-item">
              <div className="menu-item-header">
                <h4 className="menu-item-name">{item.name}</h4>
                <div className="menu-item-dots"></div>
                <span className="menu-item-price">₹{item.price}</span>
              </div>
              <p className="menu-item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="menu-action">
        <a href="#contact" className="btn">Order via Zomato</a>
      </div>
    </section>
  );
};

export default Menu;
