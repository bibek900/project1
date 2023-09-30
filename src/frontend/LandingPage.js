// LandingPage.js

import React from 'react';
import '../stylesheet/LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to Your E-commerce Store</h1>
        <p>Discover a world of amazing products.</p>
        <Link to='/products'>
        <button>Shop Now</button>
        </Link>
      </header>
      <section className="featured-products">
        {/* Add featured product listings here */}
      </section>
    </div>
  );
}

export default LandingPage;
