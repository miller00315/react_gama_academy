import styled from 'styled-components';

export const HomeContainer = styled.div`
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const errorMessage = styled.span`
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
  font-family: sans-serif;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius .25rem 0 0 .25rem;
    padding: 0 .5rem;
    height: 1.5rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
  height: 1.5rem;
  boder: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 0.25rem 0.25rem 0;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
