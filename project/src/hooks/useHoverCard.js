import {useState} from 'react';

export const useHoverCard = () => {
  const [ activeOfferData, setActiveOfferData ] = useState({});

  const hoverHandler = (evt, data) => {
    evt.preventDefault();
    setActiveOfferData(data);
  };

  return [activeOfferData, hoverHandler];
};
