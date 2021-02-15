import styled, { css } from 'styled-components';

interface Props {
  disabled?: boolean;
}

export const InputContainer = styled.input<Props>`
&:hover {
  border-color: #40a9ff;
  border-right-width: 1px!important;
}
&:focus {
  border-color: #40a9ff;
  border-right-width: 1px!important;
  outline: 0;
  -webkit-box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
  box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
}
box-sizing: border-box;
margin: 0;
font-variant: tabular-nums;
list-style: none;
-webkit-font-feature-settings: "tnum";
font-feature-settings: "tnum";
position: relative;
display: inline-block;
width: 100%;
min-width: 0;
padding: 4px 11px;
color: rgba(0,0,0,.85);
font-size: 14px;
line-height: 1.5715;
background-color: #fff;
background-image: none;
border: 1px solid #d9d9d9;
border-radius: 2px;
-webkit-transition: all .3s;
transition: all .3s;
${props => {
  if(props.disabled) {
    return css`
      &:hover {
        border-color: #d9d9d9;
        border-right-width: 1px !important;
      }
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      cursor: not-allowed;
      opacity: 1;
    `;
  }
}}
`;