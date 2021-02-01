import React from 'react';

import { LoadingWrapper, Wrapper } from './style';

function Loading(): React.ReactElement {
  return (
    <Wrapper>
      <LoadingWrapper>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoadingWrapper>
    </Wrapper>
  );
}

export default Loading;