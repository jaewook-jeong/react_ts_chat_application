import styled from 'styled-components';

interface Props {
  type: 'other' | 'me';
  style?: React.CSSProperties;
}

export const MessageContainer = styled.div<Props>`
width: 100%;
`;

export const MesaageSpan =styled.span`

`;