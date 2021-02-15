import React from 'react';
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

export default Input;