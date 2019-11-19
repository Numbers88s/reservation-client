// modules
import * as React from 'react';

// local
import styles from './Input.module.scss';

interface Props {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onHandleChange:(name: string) => void;
}

const Input: React.FC<Props> = ({ label, name, placeholder, value, onHandleChange }) => (
  <div className={ styles.input }>
    <label htmlFor={ name }>{ label }</label>
    <input
        name={ name }
        autoFocus={ true }
        type={ 'text' }
        placeholder={ placeholder }
        value={ value }
        onChange={ ({ target: { value } }) => onHandleChange(value) }
    />
  </div>
);

export default Input;
