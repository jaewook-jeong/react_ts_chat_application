import React from 'react';

export type AvatarSize = 'large' | 'small' | 'default' | number ;

interface Props {
  shape?: 'circle' | 'square';
  size?: AvatarSize;
  gap?: number;
  src?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  alt?: string;
}

function Avatar({}: Props): React.ReactElement {
  return (

  );
}

export default Avatar;