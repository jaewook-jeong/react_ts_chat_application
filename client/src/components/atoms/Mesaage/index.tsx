import React from 'react';
import { ContentWrapper, MeContainer, MessageContainer, OtherContainer, TimeWrapper } from './style';

interface Props {
content: string;
time?: string;
type: 'me' | 'other'; //me right, other left
style?: React.CSSProperties;
}

function Message({content, time, type, style}: Props) {
  return (
    <MessageContainer type={type} style={style}>
      {
        type === 'me' ?
          <MeContainer>
            <TimeWrapper>{time}</TimeWrapper>
            <ContentWrapper>{content}</ContentWrapper>
          </MeContainer>
        : <OtherContainer>
            <ContentWrapper>{content}</ContentWrapper>
            <TimeWrapper>{time}</TimeWrapper>
          </OtherContainer>
      }
    </MessageContainer>
  );
}

export default Message;