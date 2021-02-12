import styled, { css } from 'styled-components';

interface Props {
  type: 'other' | 'me';
  style?: React.CSSProperties;
}

export const MessageContainer = styled.div<Props>`
width: 100%;
display: flex;
${props => {
  if (props.type === 'me') {
    return css`
      justify-content: flex-start;
    `;
  } else {
    return css`
      justify-content: flex-end;
    `;
  }
}}
`;

export const MeContainer = styled.div`
padding: 0px 10px;
`;

export const OtherContainer = styled.div`
padding: 0px 10px;
`;

export const TimeWrapper = styled.div`
color: #ddd;
`;

export const ContentWrapper = styled.div`

`;