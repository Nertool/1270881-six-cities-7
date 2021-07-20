import {useEffect, useState} from 'react';

export const useLoader = (data) => {
  const isDataArray = data instanceof Array;
  const countElements = isDataArray ? data.length : Object.keys(data).length;

  const [ isLoadPage, setIsLoadPage ] = useState(countElements === 0);

  useEffect(() => {
    if (data.length || Object.keys(data).length) {
      setIsLoadPage(false);
    }
  }, [data]);

  return isLoadPage;
};
