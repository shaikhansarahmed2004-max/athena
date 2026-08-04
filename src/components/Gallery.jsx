import React from 'react';
import './Gallery.css';

// Using provided assets
import img1 from '../assets/images/Screenshot 2026-04-07 180348.png';
import img2 from '../assets/images/Screenshot 2026-04-07 180409.png';
import img3 from '../assets/images/Screenshot 2026-04-07 180435.png';
import img4 from '../assets/images/Screenshot 2026-04-07 180315.png';

// Premium Featured Dishes
import dishButter from '../assets/images/butter.png';
import dishBiryani from '../assets/images/biryani.png';
import dishPasta from '../assets/images/pasta.png';
import dishCheesecake from '../assets/images/cheesecake.png';

const tastyDishes = [
  "Poultry", "Paneer", "Rice", "Fried rice", "Chicken fried rice", 
  "Cakes", "Chicken", "Butter chicken", "Cheese", "Fries", "Salads", 
  "Fried chicken", "Cheesecake", "Soup", "Meat", "Kebabs", 
  "Chicken tikka", "Pasta", "Spaghetti", "Nachos", "Nacho chips", "Biryani"
];

const restaurantFeatures = [
  "Food delivery", "Dinner", "Great service", "Lunch", "Brunch", 
  "Takeaway", "Breakfast", "Friendly staff", "Birthday party", 
  "Great location", "Cosy atmosphere", "Family dinner"
];

const Gallery = () => {
  return (
    <section id="gallery" className="section gallery-section">
      <h2 className="section-title">Gallery</h2>
      
      <div className="gallery-grid">
        <div className="gallery-item hover-zoom">
          <img src={img1} alt="Food Shot 1" />
        </div>
        <div className="gallery-item hover-zoom">
          <img src={img2} alt="Food Shot 2" />
        </div>
        <div className="gallery-item hover-zoom item-tall">
          <img src={img3} alt="Ambiance" />
        </div>
        <div className="gallery-item hover-zoom item-tall">
          <img src={img4} alt="Bar Area" />
        </div>
      </div>

      <div className="seo-group" style={{marginTop: '80px'}}>
        <h3>Featured Signature Dishes</h3>
        <div className="featured-cards">
          <div className="featured-card hover-zoom">
            <img src={dishButter} alt="Butter Chicken" />
            <div className="card-overlay"><span>Authentic Butter Chicken</span></div>
          </div>
          <div className="featured-card hover-zoom">
            <img src={dishBiryani} alt="Chicken Biryani" />
            <div className="card-overlay"><span>Saffron Chicken Biryani</span></div>
          </div>
          <div className="featured-card hover-zoom">
            <img src={dishPasta} alt="Pasta" />
            <div className="card-overlay"><span>Classic Spaghetti</span></div>
          </div>
          <div className="featured-card hover-zoom">
            <img src={dishCheesecake} alt="Cheesecake" />
            <div className="card-overlay"><span>Berry Drizzle Cheesecake</span></div>
          </div>
        </div>
      </div>

      <div className="seo-tags-container">
        <div className="seo-group">
          <h3>Tasty dishes in Amravati</h3>
          <div className="tags-wrap">
            {tastyDishes.map((dish, i) => (
              <span key={`dish-${i}`} className="seo-tag">{dish}</span>
            ))}
          </div>
        </div>
        
        <div className="seo-group">
          <h3>Restaurant features in Amravati</h3>
          <div className="tags-wrap">
            {restaurantFeatures.map((feature, i) => (
              <span key={`feat-${i}`} className="seo-tag">{feature}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
