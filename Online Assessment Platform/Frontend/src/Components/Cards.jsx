import React from 'react';
import Card from './Card';
import data from '../images/data.jpeg'
import machine2 from '../images/machine 2.png';
import ai from '../images/ai.jpeg'
import graphics from '../images/graphics.png';
import python from '../images/python.jpeg';
import web from '../images/web.jpeg';
import machine from '../images/machine.jpeg';
import developer from '../images/developer.jpeg';
import hacking from '../images/hacking.jpeg'
import programming from '../images/programming.jpeg';
import langauge from '../images/language.png';
const cardsData = [
  {
    image: langauge,
    title: 'Course 1',
    description: 'This is a brief description of Course 1.',
    price: '29.99',
  },
  {
    image: machine2,
    title: 'Course 2',
    description: 'This is a brief description of Course 2.',
    price: '39.99',
  },
  {
    image: developer,
    title: 'Course 3',
    description: 'This is a brief description of Course 3.',
    price: '49.99',
  },
  {
    image: ai,
    title: 'Course 3',
    description: 'This is a brief description of Course 3.',
    price: '49.99',
  },
  {
    image: programming,
    title: 'Course 3',
    description: 'This is a brief description of Course 3.',
    price: '49.99',
  },
  {
    image: python,
    title: 'Course 3',
    description: 'This is a brief description of Course 3.',
    price: '49.99',
  },
  {
    image: hacking,
    title: 'Course 3',
    description: 'This is a brief description of Course 3.',
    price: '49.99',
  },
  {
    image: web,
    title: 'Course 3',
    description: 'This is a brief description of Course 3.',
    price: '49.99',
  },
  {
    image: graphics,
    title: 'Course 3',
    description: 'This is a brief description of Course 3.',
    price: '49.99',
  },
 
 
];

const CardList = () => {
  return (
    <div className="scroll-container overflow-hidden whitespace-nowrap">
      <div className="scroll-content flex gap-4">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            price={card.price}
            onButtonClick={() => alert(`Viewing details of ${card.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
