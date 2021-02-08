import styled, { css } from 'styled-components';
import { AvatarSize } from '.';

interface Props {
  shape?: 'circle' | 'square';
  size?: AvatarSize;
  src?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  alt?: string;
}

export const AvatarWrapper = styled.span<Props>`
-webkit-box-sizing: border-box;
box-sizing: border-box;
margin: 0;
padding: 0;
color: rgba(0,0,0,.85);
font-size: 14px;
font-variant: tabular-nums;
line-height: 1.5715;
list-style: none;
-webkit-font-feature-settings: "tnum";
font-feature-settings: "tnum";
position: relative;
display: inline-block;
overflow: hidden;
color: #fff;
white-space: nowrap;
text-align: center;
vertical-align: middle;
background: ${props => {
  if(props.src) {
    return '0 0'
  } else {
    return '#ccc';
  }
}};
border-radius: ${props => {
  if (props.shape === 'circle') {
    return '50%';
  } else if (props.shape === 'square') {
    return '2px';
  }
}};
font-size: 18px;
${props => {
  if (Number.isInteger(props.size)) {
    return css`
      width: ${props.size}px;
      height: ${props.size}px;
      line-height: ${props.size}px;
      font-size: ${props.size as number / 2}px;
    `;
  } else {
    switch (props.size) {
      case 'large':
        return css`
          width: 40px;
          height: 40px;
          line-height: 40px;
          font-size: 24px;
        `;
      case 'small':
        return css`
          width: 24px;
          height: 24px;
          line-height: 24px;
          font-szie: 14px;
        `;
      default:
        return css`
          width: 32px;
          height: 32px;
          line-height: 32px;
        `;
    }
  }
}}
`;

export const AvatarImg = styled.img`
display: block;
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
vertical-align: middle;
border-style: none;
`;

export const AvatarSpan = styled.span<{gap?: number}>`
position: absolute;
left: 50%;
-webkit-transform-origin: 0 center;
transform-origin: 0 center;
${props => {
  switch (props.gap) {
    case 3:
      return css`transform: scale(0.75) translateX(-50%);`
    case 2:
      return css`transform: scale(0.708333) translateX(-50%);`;
    case 1:
      return css`transform: scale(0.666667) translateX(-50%);`;
    default:
      return css`transform: scale(0.791667) translateX(-50%);`;
  }
}}
`;