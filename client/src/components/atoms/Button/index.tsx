import React from 'react';
import { StyledButton } from './style';
import RotateSVG from '../../../common/style/rotateSVG';

export interface Props {
  /** ReactNode */
  children: React.ReactNode;
  /** href link */
  href?: string;
  /** button styling type (priamry, link, text) */
  buttonType?: 'default' |'primary' | 'link' | 'text';
  /** click handler */
  onClick?: () => void;
  /** button size */
  size?: 'large' | 'middle' | 'small';
  /** fit to size enable */
  block?: boolean;
  /** loading status */
  loading?: boolean;
  /** button shape */
  shape?: 'default' | 'circle' | 'round';
  /** css style */
  style?: React.CSSProperties;
}

function Button({
  children,
  href,
  buttonType = 'default',
  size = 'middle',
  block = false,
  loading = false,
  shape = 'default',
  ...props
}: Props): React.ReactElement {
  
  if (href) {
    return (
      <a href={href}>
        <StyledButton
          buttonType='link'
          size={size}
          block={block}
          shape={shape}
          loading={false}
          {...props}
        >
          {children}
        </StyledButton>
      </a>
    )
  }
  return (
    <StyledButton
      buttonType={buttonType}
      size={size}
      block={block}
      shape={shape}
      loading={loading}
      {...props}
    >
      <span>{children}</span>
    </StyledButton>
  );
}

export default Button;