import {useState} from 'react';
import {isAuth} from '../const';
import {useHistory} from 'react-router-dom';

export const useFavorite = (obj, authStatus, setFavorite) => {
  const [isFavorite, setIsFavorite] = useState(obj.isFavorite);
  const isAuthStatus = isAuth(authStatus);
  const history = useHistory();

  const toggleFavorite = (evt) => {
    evt.preventDefault();

    const valueFavorite = isFavorite ? 0 : 1;

    if (isAuthStatus) {
      setFavorite(obj.id, valueFavorite);
      setIsFavorite(!isFavorite);
    } else {
      history.push('/login');
    }
  };

  return [isFavorite, toggleFavorite];
};
