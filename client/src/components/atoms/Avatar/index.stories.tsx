import React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Avatar from '.';

export default {
  title: 'Atoms / Avatar',
};

const styleTypeS = {
  label: 'buttonType',
  options: [
    'default',
    'primary',
    'link',
    'text'
  ],
  defaultValue: 'default',
};

export const general: React.FC = () => (
  <Avatar
    children={text('content', 'User')}
  />
);

export const allstyle: React.FC = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      alignContent: 'space-between',
      width: '100%'
    }}
  >
    <Avatar
      children={'User'}
      shape="circle"
      src="https://avatars.githubusercontent.com/u/56660101?s=460&u=2b393f9517326acb86953360425d06162340d849&v=4"
    />
    <Avatar
      size={'large'}
      children={'User'}
      shape="square"
    />
    <Avatar
      size={'large'}
      src="https://avatars.githubusercontent.com/u/56660101?s=460&u=2b393f9517326acb86953360425d06162340d849&v=4"
    />
    <Avatar
      size={'small'}
      children={'User'}
    />
    <Avatar
      size={'small'}
      children={'Jaewook'}
    />
  </div>
);