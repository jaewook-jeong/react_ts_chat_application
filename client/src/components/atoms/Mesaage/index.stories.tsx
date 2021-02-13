import React from 'react';

import Message from '.';

export default {
  title: 'Atoms / Message',
};


export const general: React.FC = () => (
  <Message
    content="안녕하세요"
    type="me"
  />
);

export const allstyle: React.FC = () => (
  <div
    style={{
      width: '100%',
      height: '500px'
    }}
  >
    <div>
      <Message
        content="안녕하세요"
        type="me"
      />
      <Message
        content="저는 정재욱이라고 합니다."
        time="9:18PM"
        type="me"
      />
    </div>
    <div>
      <Message
        content="안녕하세요~"
        type="other"
      />
      <Message
        content="만나서 반가워요"
        time="9:30PM"
        type="other"
      />
    </div>
      
  </div>
);