import React from 'react';
import { AvatarImg, AvatarSpan, AvatarWrapper } from './style';

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
  shape = 'circle',
  size = 'default',
  gap = 4,
  src,
  style,
  children,
  alt
}: Props): React.ReactElement {
  return (
    <AvatarWrapper style={style} shape={shape} size={size}>
      {
        src ? <AvatarImg src={src} alt={alt} /> : <AvatarSpan gap={gap}>{children}</AvatarSpan>
      }
    </AvatarWrapper>
  );
}

export default Avatar;