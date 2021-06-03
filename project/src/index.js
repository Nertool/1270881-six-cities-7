import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

const cards = [
  {
    id: 1,
    isPremium: true,
    imgSrc: 'img/apartment-01.jpg',
    price: 120,
    isFavorite: false,
    title: 'Beautiful & luxurious apartment at great location',
    rating: 80,
    itemType: 'Apartment',
  },
  {
    id: 2,
    isPremium: false,
    imgSrc: 'img/room.jpg',
    price: 80,
    isFavorite: true,
    title: 'Wood and stone place',
    rating: 80,
    itemType: 'Private room',
  },
  {
    id: 3,
    isPremium: false,
    imgSrc: 'img/apartment-02.jpg',
    price: 132,
    isFavorite: false,
    title: 'Canal View Prinsengracht',
    rating: 80,
    itemType: 'Apartment',
  },
  {
    id: 4,
    isPremium: true,
    imgSrc: 'img/apartment-03.jpg',
    price: 180,
    isFavorite: false,
    title: 'Nice, cozy, warm big bed apartment',
    rating: 100,
    itemType: 'Apartment',
  },
  {
    id: 5,
    isPremium: false,
    imgSrc: 'img/room.jpg',
    price: 80,
    isFavorite: true,
    title: 'Wood and stone place',
    rating: 80,
    itemType: 'Private room',
  },
];

ReactDOM.render(
  <App cards={cards} />,
  document.getElementById('root'));
