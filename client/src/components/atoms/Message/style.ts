import styled, { css } from 'styled-components';

interface Props {
  type: 'other' | 'me';
  style?: React.CSSProperties;
}

export const MessageContainer = styled.div<Props>`
width: 100%;
font: inherit;
display: flex;
font-size: .9375rem;
padding-bottom: 2px;
${props => {
  if (props.type === 'me') {
    return css`
      justify-content: flex-end;
    `;
  } else {
    return css`
      justify-content: flex-start;
    `;
  }
}}
`;

export const MeContainer = styled.div`
padding: 0px 10px;
div:nth-child(2) {
  background-color: #2f74c0;
  color: #fff;
}
`;

export const OtherContainer = styled.div`
padding: 0px 10px;
div:nth-child(1) {
  background-color: #e4e6eb;
  color: #050505;
}
`;

export const TimeWrapper = styled.div`
color: #ccc;
display: inline-block;
font-size: 12px;
margin: 0px 5px;
vertical-align: bottom;
`;

export const ContentWrapper = styled.div`
display: inline-block;
padding: 8px 12px;
border-radius: 18px;
`;