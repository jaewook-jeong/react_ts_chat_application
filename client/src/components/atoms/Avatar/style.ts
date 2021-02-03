import styled from 'styled-components';
import { AvatarSize } from '.';

interface Props {
  shape?: 'circle' | 'square';
  size?: AvatarSize;
  gap?: number;
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
width: 32px;
height: 32px;
line-height: 32px;
border-radius: ${props => {
  if (props.shape === 'circle') {
    return '50%';
  } else if (props.shape === 'square') {
    return '2px';
  }
}};
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