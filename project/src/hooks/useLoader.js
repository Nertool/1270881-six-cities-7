import {useEffect, useState} from 'react';

export const useLoader = (data) => {
  const [ isLoadPage, setIsLoadPage ] = useState(data.length === 0);

  useEffect(() => {
    if (data.length !== 0) {
      setIsLoadPage(false);
    }
  }, [data]);

  return isLoadPage;
};
