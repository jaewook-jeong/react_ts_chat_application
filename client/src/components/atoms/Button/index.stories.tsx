import React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Btn from '.';

export default {
  title: 'Atoms / Button',
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
  <Btn
    buttonType={select(
      styleTypeS.label,
      styleTypeS.options,
      styleTypeS.defaultValue,
    )}
    children={text('content', 'Button')}
    onClick={action('onClick')}
  />
);

export const anchor: React.FC = () => (
  <Btn
    buttonType={select(
      styleTypeS.label,
      styleTypeS.options,
      styleTypeS.defaultValue,
    )}
    disabled={boolean('disabled', false)}
    children={text('content', 'Naver')}
    href={text('href', 'https://naver.com')}
    onClick={action('onClick')}
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
    <Btn
      buttonType={'primary'}
      children={'Button'}
      onClick={action('onClick')}
    />
    <Btn
      buttonType={'primary'}
      size={'large'}
      children={'Button'}
      onClick={action('onClick')}
      shape={'circle'}
    />
    <Btn
      buttonType={'primary'}
      size={'large'}
      children={'Button'}
      onClick={action('onClick')}
      shape={'round'}
    />
    <Btn
      buttonType={'primary'}
      size={'small'}
      children={'Button'}
      onClick={action('onClick')}
      shape={'round'}
    />
    <Btn
      buttonType={'primary'}
      size={'small'}
      loading
      children={'Button'}
      onClick={action('onClick')}
      shape={'round'}
    />
    <Btn
      buttonType={'link'}
      children={'Button'}
      onClick={action('onClick')}
    />
    <Btn
      buttonType={'text'}
      children={'Button'}
      onClick={action('onClick')}
    />
    <Btn
      buttonType={'default'}
      children={'Button'}
      onClick={action('onClick')}
    />
  </div>
);