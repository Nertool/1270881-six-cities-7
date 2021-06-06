import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const hotels = [
  {
    id: 1,
    isPremium: true,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    isFavorite: false,
    title: 'Beautiful & luxurious apartment at great location',
    rating: 80,
    type: 'Apartment',
  },
  {
    id: 2,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 80,
    isFavorite: true,
    title: 'Wood and stone place',
    rating: 80,
    type: 'Private room',
  },
  {
    id: 3,
    isPremium: false,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    isFavorite: false,
    title: 'Canal View Prinsengracht',
    rating: 80,
    type: 'Apartment',
  },
  {
    id: 4,
    isPremium: true,
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    isFavorite: false,
    title: 'Nice, cozy, warm big bed apartment',
    rating: 100,
    type: 'Apartment',
  },
  {
    id: 5,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 80,
    isFavorite: true,
    title: 'Wood and stone place',
    rating: 80,
    type: 'Private room',
  },
];

ReactDOM.render(
  <App hotels={hotels} />,
  document.getElementById('root'));
