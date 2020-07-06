import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  max-width: 64rem;
  padding: 1rem;
  width: 100%;
`;

export default function MainContainer({ children }) {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  );
}
