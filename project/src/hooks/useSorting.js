import {useState} from 'react';
import {SortList} from '../const';

export const useSorting = (sortValue, data, changeSortOffers) => {
  const [ visibleSortList, setVisibleSortList ] = useState(false);

  const getSortListArray = () => {
    const sortListArray = [];

    for (const key in SortList) {
      sortListArray.push(SortList[key]);
    }

    return sortListArray;
  };

  const toggleDropVisible = () => setVisibleSortList(!visibleSortList);

  const sortHandler = (evt) => {
    changeSortOffers(evt.target.innerText);
    toggleDropVisible(!visibleSortList);
  };

  switch (sortValue) {
    case SortList.PRICE_LOW:
      data.sort((a, b) => a.price - b.price);
      break;
    case SortList.PRICE_HIGH:
      data.sort((a, b) => b.price - a.price);
      break;
    case SortList.TOP_RATED:
      data.sort((a, b) => b.rating - a.rating);
      break;
    default:
      data.sort((a, b) => a.id - b.id);
  }

  return [visibleSortList, getSortListArray, toggleDropVisible, sortHandler];
};
