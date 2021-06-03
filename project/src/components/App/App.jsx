import React from 'react';
import PropTypes from 'prop-types';
import Main from '../Main/Main';

function App({cards}) {
  return <Main cards={cards} />;
}

App.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default App;
