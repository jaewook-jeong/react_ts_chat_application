import styled, { keyframes } from 'styled-components';


const loadingCircle = keyframes`
100%{
  transform: rotate(1turn);
}
`;

export const OutterSpan = styled.span`
animation: loadingCircle 1s linear infinite;
@keyframes loadingCircle {
  100%{
    transform: rotate(1turn);
  }
}
color: inherit;
font-style: normal;
font-size: inherit;
line-height: 0;
text-align: center;
text-transform: none;
vertical-align: -.125em;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
box-sizing: border-box;

transition: all .3s cubic-bezier(.645,.045,.355,1);
will-change: transform;
`;

export const InnerSVG = styled.svg`
display: inline-block;
`;