import React from "react";
import PropTypes from "prop-types";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" />);
  }

  return (
    <div className="flex items-center text-yellow-300">
      {stars.map((star, index) => (
        <span key={index} className="text-yellow-300 text-xl">
          {star}
        </span>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
