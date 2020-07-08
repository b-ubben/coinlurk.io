import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
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
