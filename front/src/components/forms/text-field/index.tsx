import { memo } from 'react';

import './style.scss';

interface TextInputProps {
  label: string,
  name: string,
  value: string,
  onChange: Function,
  placeholder: string
}

function TextField(props: TextInputProps){
  const { label, name, value, onChange, placeholder } = props;

  return (
    <div className="defaultInput">
      <label htmlFor="textInput">{label}</label>
      <input 
        // type={type}
        // min={min} 
        name={name}
        value={value} 
        onChange={(e) => onChange(e)}
        // autoFocus={autoFocus}
        // required={required}
        // disabled={disabled}
        placeholder={placeholder}
        // maxLength={maxLength}
      />
    </div>
  )
} 

export default memo(TextField);