import styled from '@emotion/styled';

export const Container = styled.label`
  margin-bottom: 80px;
  justify-content: center;
  display: flex;
  width: 100%;

  & .MuiButton-root {
    background-color: #24ff00;
    color: #000;
    width: 100%;
  }
`;

export const InvisibleInput = styled.input({
  display: 'none',
});
