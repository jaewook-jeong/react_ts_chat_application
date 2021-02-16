import React from 'react';
import Password from './Password';
import { InputContainer } from './style';

interface Props {
  disabled?: boolean;
  defaultValue?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocusOut?: (e: React.FocusEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

function Input(props: Props) {
  return (
    <InputContainer {...props} autoComplete="off" />
  );
}

Input.Password = Password;

export default Input;