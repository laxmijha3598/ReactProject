import React, { useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import "./Card.css"; // Create a separate CSS file for Card component styles

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleToggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  return (
    <>
      <section
        className={`card ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="wishlist-icon" onClick={handleToggleWishlist}>
          <FaHeart className={`heart-icon ${isInWishlist ? 'active' : ''}`} />
        </div>

        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
        {isHovered && (
          <button className="view-product-btn">View Product</button>
        )}
      </section>
    </>
  );
};

export default Card;