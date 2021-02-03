import React from 'react';
import { AvatarImg, AvatarWrapper } from './style';

export type AvatarSize = 'large' | 'small' | 'default' | number ;

interface Props {
  shape?: 'circle' | 'square';
  size?: AvatarSize;
  gap?: number;
  src?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  alt?: string;
}

function Avatar({
  shape,
  size,
  gap,
  src,
  style,
  children,
  alt
}: Props): React.ReactElement {
  return (
    <AvatarWrapper style={style} shape={shape}>
      {
        src ? <AvatarImg src={src} alt={alt} /> : children
      }
    </AvatarWrapper>
  );
}

export default Avatar;