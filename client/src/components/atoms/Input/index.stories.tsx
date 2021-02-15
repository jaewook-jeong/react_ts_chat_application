import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import Input from '.';

export default {
  title: 'Atoms / Input',
};

export const defaultInput: React.FC = () => {
  return (
    <Input
      disabled={boolean('disabled', false)}
      placeholder={text('placeholder', '이메일을 입력해주세요.')}
    />
  );
};

export const InputTest: React.FC = () => (
  <div
    style={{
      display:'flex',
      width: '300px',
      justifyContent: 'flex-start',
    }}
  >
    <Input
      disabled={boolean('disabled', false)}
      defaultValue={text('defaultValue', 'realchat.com')}
      placeholder={text('placeholder', '이메일을 입력해주세요.')}
    />
    <Input
      disabled
      placeholder={text('placeholder', 'disabled')}
    />
  </div>
);