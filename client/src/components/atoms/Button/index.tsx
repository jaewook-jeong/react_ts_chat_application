import React from 'react';
import {} from './style';

export interface Props {
  /** 버튼 내용 또는 엘리먼트 */
  children: React.ReactElement | string;
  /** react-router/Link 사용 (내부적인 routing)*/
  to?: string;
  /** 외부 링크 */
  href?: string;
  /** button styling type (ex. priamry, secondary) */
  type?: 'primary' | 'link' | 'transparent' | 'text';
  /** disabled 여부 */
  disabled?: boolean;
  /** click handler */
  onClick?: () => void;
  /** button size */
  size?: 'large' | 'middle' | 'small';
  /** fit to size enable */
  block?: boolean;
  /** icon component */
  icon?: React.ReactElement;
  /** loading status */
  loading?: boolean;
  /** button shape */
  shape?: 'circle' | 'round';
  /** css style */
  style?: React.CSSProperties;
}

function Button({
  children,
  to,
  href,
  type = 'default',
  disabled = false,
  size = 'middle',
  block = false,
  loading = false,
  ...props
}: Props): React.ReactElement {
  
  if (to) {
    return (

    );
  } else if (href) {
    return (

    );
  }

  return (

  );
}