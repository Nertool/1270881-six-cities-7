import React, {useState} from 'react';
import PropTypes from 'prop-types';

function LoginFormControl(props) {

  const { label, type, name, placeholder } = props;
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">{ label }</label>
      <input
        className="login__input form__input"
        type={ type }
        name={ name }
        placeholder={ placeholder }
        required=""
        onChange={ (evt) => setInputValue(evt.target.value) }
        value={ inputValue }
      />
    </div>
  );
}

LoginFormControl.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default LoginFormControl;
