import React from 'react';
import { MessageContainer } from './style';

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
        <div>{time} {content}</div>
        :<div>{content} {time}</div>
      }
    </MessageContainer>
  );
}

export default Message;