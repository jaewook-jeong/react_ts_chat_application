import styled, { css } from 'styled-components';

interface Props {
  buttonType?: 'default' |'primary' | 'link' | 'text';
  size?: 'large' | 'middle' | 'small';
  block?: boolean;
  loading?: boolean;
  shape?: 'default' | 'circle' | 'round';
  style?: React.CSSProperties;
};

export const StyledButton = styled.button<Props>`
line-height: 1.5715;
position: relative;
display: inline-block;
font-weight: 400;
white-space: nowrap;
text-align: center;
background-image: none;
-webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
cursor: pointer;
-webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
transition: all .3s cubic-bezier(.645,.045,.355,1);
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
-ms-touch-action: manipulation;
touch-action: manipulation;
height: 32px;
padding: 4px 15px;
font-size: 14px;
border-radius: 2px;
color: rgba(0,0,0,.85);
background: #fff;
border: 1px solid #d9d9d9;
box-sizing: border-box;
outline: none;
${props => {
  if (props.size === 'large') {
    return css`
      height: 40px 
      padding: 6.4px 15px;
      font-size: 16px;
      border-radius: 2px;
    `;
  } else if (props.size === 'small') {
    return css`
      height: 24px;
      padding: 0 7px;
      font-size: 14px;
      border-radius: 2px;
    `;
  }
}}
${props => {
  if (props.buttonType === 'primary') {
    return css`
      color: #fff;
      background: #2f74c0;
      border-color: #2f74c0;
      text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
      -webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
      box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    `;
  } else if (props.buttonType === 'link') {
    return css`
      color: #2f74c0;
      background: 0 0;
      border-color: transparent;
      -webkit-box-shadow: none;
      box-shadow: none;
    `;
  } else if (props.buttonType === 'text') {
    return css`
      color: rgba(0,0,0,.85);
      background: 0 0;
      border-color: transparent;
      -webkit-box-shadow: none;
      box-shadow: none;
    `;
  }
}}

${props => {
  if (props.shape === 'circle') {
    return css`
      min-width: 32px;
      padding-right: 0;
      padding-left: 0;
      text-align: center;
      border-radius: 50%;
    `;
  } else if (props.shape === 'round') {
    if (props.size === 'large') {
      return css`
        height: 40px;
        padding: 6.4px 20px;
        font-size: 16px;
        border-radius: 40px;
      `;
    } else if (props.size === 'middle') {
      return css`
        height: 32px;
        padding: 4px 16px;
        font-size: 14px;
        border-radius: 32px;
      `;
    } else {
      return css`
        height: 24px;
        padding: 0 12px;
        font-size: 14px;
        border-radius: 24px;
      `;
    }
  }
}}
${props => {
  if (props.buttonType === 'link') {
    return css`
      &:hover, &:focus {
        color: #64a8f3;
      }
    `;
  } else if (props.buttonType === 'text') {
    return css`
      &:hover, &:focus {
        background: #eee;
      }
    `;
  }  else if (props.buttonType === 'default') {
    return css`
      &:hover, &:focus {
        color: #64a8f3;
        border-color: #64a8f3;
      }
    `;
  } else {
    return css`
      &:hover, &:focus {
        color: #fff;
        background: #64a8f3;
        border-color: #64a8f3;
      }
    `;
  }
}}

`;