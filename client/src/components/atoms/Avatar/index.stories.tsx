import React from 'react';
import { text } from '@storybook/addon-knobs';

import Avatar from '.';

export default {
  title: 'Atoms / Avatar',
};

export const general: React.FC = () => (
  <Avatar
    children={text('content', 'User')}
  />
);

export const allstyle: React.FC = () => (
  <>
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
        size={'large'}
        children={'User'}
      />
      <Avatar
        size={'small'}
        children={'Jaewook'}
      />
      <Avatar
        size={60}
        gap={2}
      >
        정재욱
      </Avatar>
      <Avatar
        size={'small'}
        children={'gap1'}
        gap={1}
      />
      <Avatar
        size={'small'}
        children={'gap2'}
        gap={2}
      />
      <Avatar
        size={'small'}
        children={'gap3'}
        gap={3}
      />
    </div>
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        width: '100%'
      }}>
        <Avatar
        size={'large'}
        children={'gap1'}
        gap={1}
        />
        <Avatar
          size={'large'}
          children={'gap2'}
          gap={2}
        />
        <Avatar
          size={'large'}
          children={'gap3'}
          gap={3}
        />
        <Avatar
          size={'large'}
          children={'gap4'}
        />
        <Avatar
          style={{color: 'rgb(245, 106, 0)', backgroundColor: 'rgb(253, 227, 207)'}}
          children="M"
        />
        <Avatar
          size={50}
          src="https://avatars.githubusercontent.com/u/56660101?s=460&u=2b393f9517326acb86953360425d06162340d849&v=4"
      />
    </div>
  </>
);