import React from 'react';

const Card = ({ image, title, description, price, onButtonClick }) => {
  return (
    <div className="card-container hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl">
      <img src={image} alt={title} className="card-image rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-lime-600">${price}</span>
          <button
            onClick={onButtonClick}
            className="text-sm bg-lime-500 hover:bg-lime-600 text-white py-1 px-3 rounded-full"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
