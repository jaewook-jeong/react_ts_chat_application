import React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Message from '.';

export default {
  title: 'Atoms / Message',
};


export const general: React.FC = () => (
  <Message
    content="안녕하세요"
    type="me"
  />
);

export const allstyle: React.FC = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100px'
    }}
  >
    <Message
      content="안녕하세요"
      type="me"
    />
    <Message
      content="안녕하세요2"
      type="other"
    />
  </div>
);